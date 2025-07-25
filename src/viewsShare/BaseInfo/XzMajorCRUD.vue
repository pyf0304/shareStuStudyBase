<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层  -->

      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>专业</cite>
          </a>
          <label id="lblMsg_List"></label>
        </span>
        <a
          class="layui-btn layui-btn-small"
          style="line-height: 1.6em; margin-top: 3px; float: right"
          @click="location_reload()"
          title="刷新"
        >
          <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
        </a>
      </div>

      <!-- 查询层  -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          style="width: 40%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tbody>
            <tr>
              <td>
                <input
                  id="txtMajorID_q"
                  v-model="majorId_q"
                  placeholder="专业ID"
                  class="layui-input"
                  style="width: 150px"
                />
              </td>

              <td>
                <input
                  id="txtMajorName_q"
                  v-model="majorName_q"
                  placeholder="专业名称"
                  class="layui-input"
                  style="width: 150px"
                />
              </td>

              <td>
                <select
                  id="ddlIdXzCollege_q"
                  v-model="idXzCollege_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                >
                  <option v-for="(item, index) in arrXzClg" :key="index" :value="item.idXzCollege">
                    {{ item.collegeName }}
                  </option></select
                >
              </td>
              <td>
                <button class="layui-btn" lay-submit="" lay-filter="sreach" @click="btnQuery_Click">
                  <font-awesome-icon icon="search" />
                </button>
              </td>
              <td class="text-left">
                <button
                  id="btnExportExcel"
                  name="btnExportExcel"
                  type="submit"
                  class="btn btn-outline-warning text-nowrap"
                  @click="btnExportExcel_Click"
                  >导出Excel</button
                >
              </td>
            </tr>
          </tbody></table
        >
      </div>
      <!-- 功能区 -->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblXzMajorList"
              name="lblXzMajorList"
              class="col-form-label text-info"
              style="width: 250px"
            >
            </label>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnCreate_Click"
              >添加</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnUpdate_Click"
              >修改</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnDelete_Click"
              >删除</button
            >
          </li>
        </ul>
      </div>
      <!-- 列表层  -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager" value="1"> </div>
      </div>
      <!-- 编辑层  -->

      <XzMajor_EditCom ref="refXzMajor_Edit"></XzMajor_EditCom>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvXzMajorBy" type="hidden" value="" />
    <input id="txtid_XzMajor" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refXzMajor_Edit,
    refXzMajor_List,
    showErrorMessage,
    dataListXzMajor,
    emptyRecNumInfo,
    dataColumn,
    majorId_q,
    majorName_q,
    idXzCollege_q,
  } from '@/viewsShare/BaseInfo/XzMajorVueShare';
  import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
  import XzMajor_EditEx from '@/viewsShare/BaseInfo/XzMajor_EditEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import XzMajorCRUDEx from '@/viewsShare/BaseInfo/XzMajorCRUDEx';
  import XzMajor_EditCom from '@/viewsShare/BaseInfo/XzMajor_Edit.vue';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { XzClg_GetArrXzClg } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';

  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  export default defineComponent({
    name: 'XzMajorCRUD',
    components: {
      // 组件注册
      XzMajor_EditCom,
    },
    setup() {
      const objPage = ref<XzMajorCRUDEx>();
      const objPage_Edit = ref<XzMajor_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'XzMajorCRUD';

      const arrXzClg = ref<clsXzClgEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_XzMajor4Func(refDivList.value);
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new XzMajor_EditEx('XzMajor_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_XzMajor(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsXzMajorEN.PrimaryTypeId) > -1) {
            await objPage_Edit.value.AddNewRecordWithMaxId();
          } else {
            await objPage_Edit.value.AddNewRecord();
          }
        } catch (e) {
          const strMsg = Format(
            '添加新记录初始化不成功,{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 修改记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpdate_Click)
       **/
      const btnUpdate_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new XzMajor_EditEx('XzMajor_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strIdXzMajor = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strIdXzMajor) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_XzMajor(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strIdXzMajor);
          if (update == false) {
            const strMsg = Format('在修改记录时,显示记录数据不成功!');
            console.error(strMsg);
            alert(strMsg);
            return;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsXzMajorEN._CurrTabName;
      };

      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDelete_Click)
       **/
      const btnDelete_Click = async () => {
        const strThisFuncName = btnDelete_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyIds.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord(arrKeyIds);
          await objPage.value.BindGv_XzMajor4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      const exportToExcel = (
        arrData: Array<Record<string, any>>,
        strSheetName: string,
        strFileName: string,
      ) => {
        try {
          // Convert object list to worksheet
          const worksheet = XLSX.utils.json_to_sheet(arrData);
          // Create a new workbook and append the worksheet
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, strSheetName);
          // Export the workbook to an Excel file
          XLSX.writeFile(workbook, strFileName);
          alert('导出成功！');
        } catch (error) {
          console.error('导出失败:', error);
          alert('导出失败，请检查控制台日志！');
        }
      };
      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        const objExportExcelData: ExportExcelData = await objPage.value.ExportExcel_XzMajor4Func();
        if (objExportExcelData.sheetName == '') {
          alert('获取导出数据出错,请检查!');
          return;
        }
        exportToExcel(
          objExportExcelData.arrObjLst,
          objExportExcelData.sheetName,
          objExportExcelData.fileName,
        );
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrXzClg.value = await XzClg_GetArrXzClg(); //查询区域
        idXzCollege_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('专业维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        XzMajorCRUDEx.vuebtn_Click = btn_Click;
        XzMajorCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new XzMajorCRUDEx();
        await objPage.value.PageLoadCache();
      });

      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        XzMajorCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      return {
        showErrorMessage,
        dataListXzMajor,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refXzMajor_Edit,
        refXzMajor_List,
        majorId_q,
        majorName_q,
        idXzCollege_q,
        arrXzClg,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style scoped></style>

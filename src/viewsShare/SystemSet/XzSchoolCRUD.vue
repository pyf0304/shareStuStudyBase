<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }}-Share </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left">
              <input
                id="txtIdSchool_q"
                v-model="idSchool_q"
                title="学校流水号"
                placeholder="学校流水号"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtSchoolId_q"
                v-model="schoolId_q"
                title="学校编号"
                placeholder="学校编号"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtSchoolName_q"
                v-model="schoolName_q"
                title="学校名称"
                placeholder="学校名称"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlSchoolTypeId_q"
                v-model="schoolTypeId_q"
                title="学校类型Id"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrSchoolType"
                  :key="index"
                  :value="item.schoolTypeId"
                >
                  {{ item.schoolTypeName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlbIsCurrentUse_q"
                v-model="isCurrentUse_q"
                title="当前使用"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
            </td>

            <td class="text-left">
              <button
                id="btnQuery"
                name="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnQuery_Click"
                >查询</button
              >
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
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblXzSchoolList"
            name="lblXzSchoolList"
            class="col-form-label text-info"
            style="width: 250px"
            >学校列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnCreate_Click"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnUpdate_Click"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnDelete_Click"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlSchoolTypeId_SetFldValue"
              v-model="schoolTypeId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrSchoolType"
                :key="index"
                :value="item.schoolTypeId"
              >
                {{ item.schoolTypeName }}
              </option></select
            >
            <button
              id="btnSetSchoolTypeId"
              name="btnSetSchoolTypeId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetSchoolTypeId_Click"
              >设置类型</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <XzSchool_ListCom
        ref="refXzSchool_List"
        :items="dataListXzSchool"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </XzSchool_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortXzSchoolBy" type="hidden" />
    </div>
    <!--编辑层-->
    <XzSchool_EditCom ref="refXzSchool_Edit"></XzSchool_EditCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import router from '@/router';
  import * as XLSX from 'xlsx';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    GetCheckedKeyIdsInDivObj,
    GetSelectValueInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refXzSchool_Edit,
    refXzSchool_List,
    showErrorMessage,
    dataListXzSchool,
    emptyRecNumInfo,
    idSchool_q,
    schoolId_q,
    schoolName_q,
    schoolTypeId_q,
    isCurrentUse_q,
    schoolTypeId_f,
  } from '@/viewsShare/SystemSet/XzSchoolVueShare';
  import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
  import XzSchool_EditEx from '@/viewsShare/SystemSet/XzSchool_EditEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import XzSchoolCRUDEx from '@/viewsShare/SystemSet/XzSchoolCRUDEx';
  import XzSchool_EditCom from '@/viewsShare/SystemSet/XzSchool_Edit.vue';
  import XzSchool_ListCom from '@/viewsShare/SystemSet/XzSchool_List.vue';
  import { clsSchoolTypeEN } from '@/ts/L0Entity/SysPara/clsSchoolTypeEN';
  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { SchoolType_GetArrSchoolType } from '@/ts/L3ForWApi/SysPara/clsSchoolTypeWApi';
  export default defineComponent({
    name: 'XzSchoolCRUD',
    components: {
      // 组件注册
      XzSchool_EditCom,
      XzSchool_ListCom,
    },

    setup() {
      const objPage = ref<XzSchoolCRUDEx>();
      const objPage_Edit = ref<XzSchool_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'XzSchoolCRUD';

      const arrSchoolType = ref<clsSchoolTypeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_XzSchool4Func(refDivList.value);
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
        objPage_Edit.value = new XzSchool_EditEx('XzSchool_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_XzSchool(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsXzSchoolEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new XzSchool_EditEx('XzSchool_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strIdSchool = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strIdSchool) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_XzSchool(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strIdSchool);
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
        return clsXzSchoolEN._CurrTabName;
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
          await objPage.value.BindGv_XzSchool4Func(divVarSet.refDivList);
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
        const objExportExcelData: ExportExcelData = await objPage.value.ExportExcel_XzSchoolCache();
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

      /** 设置字段值-SchoolTypeId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetSchoolTypeId_Click = async () => {
        const strThisFuncName = btnSetSchoolTypeId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置学校类型Id的${thisTabName}记录!`);
            return '';
          }
          const strSchoolTypeId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlSchoolTypeId_SetFldValue',
          );
          if (strSchoolTypeId == '') {
            const strMsg = '请输入学校类型Id(SchoolTypeId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strSchoolTypeId=' + strSchoolTypeId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetSchoolTypeId(arrKeyIds, strSchoolTypeId);
          await objPage.value.BindGv_XzSchool4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrSchoolType.value = await SchoolType_GetArrSchoolType(); //查询区域
        schoolTypeId_q.value = '0';

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbIsCurrentUse_q');
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrSchoolType.value = await SchoolType_GetArrSchoolType(); //功能区域
        schoolTypeId_f.value = '0';
      }

      const strTitle = ref('学校维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        XzSchoolCRUDEx.vuebtn_Click = btn_Click;
        XzSchoolCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new XzSchoolCRUDEx();
        objPage.value.PageLoadCache();
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
        XzSchoolCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListXzSchool,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refXzSchool_Edit,
        refXzSchool_List,
        idSchool_q,
        schoolId_q,
        schoolName_q,
        schoolTypeId_q,
        isCurrentUse_q,
        schoolTypeId_f,
        arrSchoolType,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetSchoolTypeId_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},

    methods: {
      /** 函数:编辑表的相关信息
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_EditTabRelaInfo)
       **/
      async EditTabRelaInfo(data: any) {
        console.log('data:', data);
        router.push({ name: 'editXzSchool', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new XzSchoolCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>

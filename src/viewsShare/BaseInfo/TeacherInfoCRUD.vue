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
        style="width: 700px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left">
              <input
                id="txtTeacherId_q"
                name="txtTeacherId_q"
                placeholder="请输入教师工号"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtTeacherName_q"
                name="txtTeacherName_q"
                placeholder="请输入教师姓名"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlIdXzCollege_q"
                v-model="idXzCollege_q"
                title="请选择学院"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrXzClg" :key="index" :value="item.idXzCollege">
                  {{ item.collegeName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlIdStaffType_q"
                v-model="idStaffType_q"
                title="请选择教师类型"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option
                  v-for="(item, index) in arrRsStaffType"
                  :key="index"
                  :value="item.idStaffType"
                >
                  {{ item.staffTypeName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <select
                id="ddlIdSchool_q"
                v-model="idSchool_q"
                title="请选择学校"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrXzSchool" :key="index" :value="item.idSchool">
                  {{ item.schoolName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <button
                id="btnQuery"
                name="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btn_Click('Query', '')"
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
            id="lblTeacherInfoList"
            name="lblTeacherInfoList"
            class="col-form-label text-info"
            style="width: 250px"
            >教师列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlIdSchool_SetFldValue"
              v-model="idSchool_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrXzSchool" :key="index" :value="item.idSchool">
                {{ item.schoolName }}
              </option></select
            >
            <button
              id="btnSetIdSchool"
              name="btnSetIdSchool"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetIdSchool_Click"
              >设置学校</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortTeacherInfoBy" type="hidden" />
    </div>
    <!--编辑层-->
    <TeacherInfo_EditCom ref="refTeacherInfo_Edit"></TeacherInfo_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import TeacherInfoCRUDEx from '@/viewsShare/BaseInfo/TeacherInfoCRUDEx';
  import TeacherInfo_EditCom from '@/viewsShare/BaseInfo/TeacherInfo_Edit.vue';

  import { useUserStore } from '@/store/modulesShare/user';
  import TeacherInfo_EditEx from './TeacherInfo_EditEx';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { clsRsStaffTypeEN } from '@/ts/L0Entity/SysPara/clsRsStaffTypeEN';
  import { XzClg_GetArrXzClgByUserTypeId } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
  import { RsStaffType_GetArrRsStaffType } from '@/ts/L3ForWApi/SysPara/clsRsStaffTypeWApi';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refTeacherInfo_Edit,
    UserTypeId_Session,
    idXzCollege_q,
    idStaffType_q,
    idSchool_q,
    idSchool_f,
  } from '@/viewsShare/BaseInfo/TeacherInfoVueShare';
  import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
  import { XzSchool_GetArrXzSchool } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
  import { GetCheckedKeyIdsInDivObj, GetSelectValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';
  export default defineComponent({
    name: 'TeacherInfoCRUD',
    components: {
      // 组件注册
      TeacherInfo_EditCom,
    },
    setup() {
      const userStore = useUserStore();
      UserTypeId_Session.value = userStore.getUserTypeId;
      const objPage = ref<TeacherInfoCRUDEx>();
      const objPage_Edit = ref<TeacherInfo_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'TeacherInfoCRUD';

      const arrXzClg = ref<clsXzClgEN[] | null>([]);
      const arrRsStaffType = ref<clsRsStaffTypeEN[] | null>([]);
      const arrXzSchool = ref<clsXzSchoolEN[] | null>([]);
      const strTitle = ref('教师维护');
      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsTeacherInfoEN._CurrTabName;
      };
      /** 设置字段值-IdSchool
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetIdSchool_Click = async () => {
        const strThisFuncName = btnSetIdSchool_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置学校流水号的${thisTabName}记录!`);
            return '';
          }
          const strIdSchool = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlIdSchool_SetFldValue',
          );
          if (strIdSchool == '') {
            const strMsg = '请输入学校流水号(IdSchool)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strIdSchool=' + strIdSchool);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetIdSchool(arrKeyIds, strIdSchool);
          await objPage.value.BindGv_TeacherInfo4Func(divVarSet.refDivList);
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
        arrXzClg.value = await XzClg_GetArrXzClgByUserTypeId(UserTypeId_Session.value); //查询区域
        idXzCollege_q.value = '0';

        arrRsStaffType.value = await RsStaffType_GetArrRsStaffType(); //查询区域
        idStaffType_q.value = '0';
        arrXzSchool.value = await XzSchool_GetArrXzSchool(); //查询区域
        idSchool_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrXzSchool.value = await XzSchool_GetArrXzSchool(); //功能区域
        idSchool_f.value = '0';
      }
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        TeacherInfoCRUDEx.vuebtn_Click = btn_Click;
        TeacherInfoCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new TeacherInfoCRUDEx();
        objPage.value.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
        return '';
      }

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
        const objExportExcelData: ExportExcelData =
          await objPage.value.ExportExcel_TeacherInfo4Func();
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
        TeacherInfoCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refTeacherInfo_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        idXzCollege_q,
        idStaffType_q,
        arrXzClg,
        arrRsStaffType,
        idSchool_q,
        arrXzSchool,
        btnSetIdSchool_Click,
        idSchool_f,
        btnExportExcel_Click,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>

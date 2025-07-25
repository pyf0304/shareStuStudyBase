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
                id="txtStuId_q"
                v-model="stuId_q"
                placeholder="学号"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtStuName_q"
                v-model="stuName_q"
                placeholder="姓名"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlIdSex_q"
                v-model="idSex_q"
                title="性别"
                class="form-control form-control-sm"
                style="width: 60px"
              >
                <option v-for="(item, index) in arrSex" :key="index" :value="item.idSex">
                  {{ item.sexDesc }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlIdGradeBase_q"
                v-model="idGradeBase_q"
                title="入学年级"
                class="form-control form-control-sm"
                style="width: 80px"
              >
                <option
                  v-for="(item, index) in arrXzGradeBase"
                  :key="index"
                  :value="item.idGradeBase"
                >
                  {{ item.gradeBaseName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlIdGrade_q"
                v-model="idGrade_q"
                title="年级"
                class="form-control form-control-sm"
                @change="ddlIdGradeq_SelectedIndexChanged($event)"
                style="width: 60px"
              >
                <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                  {{ item.gradeName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlIdAdminCls_q"
                v-model="idAdminCls_q"
                title="在选择年级后，再选择行政班"
                placeholder="选择行政班"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrXzAdminCls"
                  :key="index"
                  :value="item.idAdminCls"
                >
                  {{ item.adminClsName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlIdSchool_q"
                v-model="idSchool_q"
                title="选学校"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrXzSchool" :key="index" :value="item.idSchool">
                  {{ item.schoolName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <select
                id="ddlbIsGpUser_q"
                v-model="isGpUser_q"
                title="选是否平台用户"
                class="form-control form-control-sm"
                style="width: 80px"
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
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblStudentInfoList"
            name="lblStudentInfoList"
            class="col-form-label text-info"
            style="width: 250px"
            >学生列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
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
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnImportExcel_Click"
            >Excel导入</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlIdGrade_SetFldValue"
              v-model="idGrade_f"
              class="form-control form-control-sm"
              @change="ddlIdGradeq_SelectedIndexChanged($event)"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                {{ item.gradeName }}
              </option></select
            >
            <button
              id="btnSetIdGrade"
              name="btnSetIdGrade"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetIdGrade_Click"
              >设置年级</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlIdAdminCls_SetFldValue"
              v-model="idAdminCls_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option
                v-for="(item, index) in arrXzAdminCls_f"
                :key="index"
                :value="item.idAdminCls"
              >
                {{ item.adminClsName }}
              </option></select
            >
            <button
              id="btnSetIdAdminCls"
              name="btnSetIdAdminCls"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetIdAdminCls_Click"
              >设置行政班</button
            >
          </div>
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
        <li class="nav-item ml-3">
          <button
            id="btnSynchToPlat"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnSynchToPlat_Click"
            >同步到平台</button
          >
        </li>
      </ul>
    </div>
    <div v-if="showImportExcel" id="divImportExcel">
      <input type="file" @change="handleFileUpload" />
      <!-- <input type="text" v-model="strOpUserId" placeholder="操作用户ID" /> -->
      <button @click="submitFile">上传文件</button>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <StudentInfoZx_ListCom
        ref="refStudentInfoZx_List"
        :items="dataListStudentInfo"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </StudentInfoZx_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortStudentInfoBy" type="hidden" />
    </div>
    <!--编辑层-->
    <StudentInfoZx_EditCom ref="refStudentInfoZx_Edit"></StudentInfoZx_EditCom>
    <!--详细信息层-->
    <StudentInfoZx_DetailCom ref="refStudentInfoZx_Detail"></StudentInfoZx_DetailCom>
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
    refStudentInfoZx_Edit,
    refStudentInfoZx_Detail,
    refStudentInfoZx_List,
    showErrorMessage,
    dataListStudentInfo,
    emptyRecNumInfo,
    IdGrade_Static,
    stuId_q,
    stuName_q,
    idSex_q,
    idGradeBase_q,
    idGrade_q,
    idAdminCls_q,
    idGrade_f,
    idAdminCls_f,
    idSchool_f,
    idSchool_q,
    isGpUser_q,
  } from '@/viewsShare/UserManage/StudentInfoZxCRUDVueShare';
  import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
  import StudentInfoZx_EditEx from '@/viewsShare/UserManage/StudentInfoZx_EditEx';
  import StudentInfoZx_DetailEx from '@/viewsShare/UserManage/StudentInfoZx_DetailEx';
  import StudentInfoZxCRUDEx from '@/viewsShare/UserManage/StudentInfoZxCRUDEx';
  import StudentInfoZx_EditCom from '@/viewsShare/UserManage/StudentInfoZx_Edit.vue';
  import StudentInfoZx_DetailCom from '@/viewsShare/UserManage/StudentInfoZx_Detail.vue';
  import StudentInfoZx_ListCom from '@/viewsShare/UserManage/StudentInfoZx_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { clsSexEN } from '@/ts/L0Entity/SysPara/clsSexEN';
  import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
  import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
  import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
  import { Sex_GetArrSex } from '@/ts/L3ForWApi/SysPara/clsSexWApi';
  import { XzGradeBase_GetArrXzGradeBaseByIsVisible } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
  import { XzGrade_GetArrXzGrade } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
  import { XzAdminCls_GetArrXzAdminClsByIdGrade } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
  import {
    StudentInfoEx_ImportExcel,
    StudentInfoEx_SynchStudentToPlatform,
  } from '@/ts/L3ForWApiExShare/UserManage/clsStudentInfoExWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
  import { XzSchool_GetArrXzSchool } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { enumQxUserIdentity } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityEN';
  import { QxUserIdentity_GetNameByIdentityIdCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxUserIdentityWApi';
  import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
  import { StudentInfo_GetObjByIdStudentInfoAsync } from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
  import { message } from '@/utils/myMessage';
  import { enumUserType } from '@/ts/L0Entity/UserManage/clsUserTypeEN';
  import { UserType_GetNameByUserTypeIdCache } from '@/ts/L3ForWApi/UserManage/clsUserTypeWApi';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  export default defineComponent({
    name: 'StudentInfoZxCRUD',
    components: {
      // 组件注册
      StudentInfoZx_EditCom,
      StudentInfoZx_DetailCom,
      StudentInfoZx_ListCom,
    },

    setup() {
      const userStore = useUserStore();
      const qxUserRoleRelationStore = useQxUserRoleRelationStore();
      IdGrade_Static.value = '';
      const objPage = ref<StudentInfoZxCRUDEx>();
      const objPage_Edit = ref<StudentInfoZx_EditEx>();
      const objPage_Detail = ref<StudentInfoZx_DetailEx>();
      const opType = ref('');
      const thisConstructorName = 'StudentInfoZxCRUD';

      const arrSex = ref<clsSexEN[] | null>([]);
      const arrXzGradeBase = ref<clsXzGradeBaseEN[] | null>([]);
      const arrXzGrade = ref<clsXzGradeEN[] | null>([]);
      const arrXzAdminCls = ref<clsXzAdminClsEN[] | null>([]);
      const arrXzAdminCls_f = ref<clsXzAdminClsEN[] | null>([]);
      const arrXzSchool = ref<clsXzSchoolEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_StudentInfo4Func(refDivList.value);
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
        objPage_Edit.value = new StudentInfoZx_EditEx('StudentInfoZx_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_StudentInfo(opType.value);
          if (bolIsSuccess == false) return;

          if (['02', '03', '06'].indexOf(clsStudentInfoEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new StudentInfoZx_EditEx('StudentInfoZx_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strIdStudentInfo = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strIdStudentInfo) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_StudentInfo(opType.value);
          if (bolIsSuccess == false) return;

          const update = await objPage_Edit.value.UpdateRecord(strIdStudentInfo);
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
        return clsStudentInfoEN._CurrTabName;
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
          await objPage.value.BindGv_StudentInfo4Func(divVarSet.refDivList);
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
        const objExportExcelData: ExportExcelData =
          await objPage.value.ExportExcel_StudentInfo4Func();
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

      /** 设置字段值-IdGrade
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetIdGrade_Click = async () => {
        const strThisFuncName = btnSetIdGrade_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置年级流水号的${thisTabName}记录!`);
            return '';
          }
          const strIdGrade = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlIdGrade_SetFldValue',
          );
          if (strIdGrade == '') {
            const strMsg = '请输入年级流水号(IdGrade)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strIdGrade=' + strIdGrade);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetIdGrade(arrKeyIds, strIdGrade);
          await objPage.value.BindGv_StudentInfo4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 设置字段值-IdAdminCls
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetIdAdminCls_Click = async () => {
        const strThisFuncName = btnSetIdAdminCls_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置行政班流水号的${thisTabName}记录!`);
            return '';
          }
          const strIdAdminCls = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlIdAdminCls_SetFldValue',
          );
          if (strIdAdminCls == '') {
            const strMsg = '请输入行政班流水号(IdAdminCls)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strIdAdminCls=' + strIdAdminCls);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetIdAdminCls(arrKeyIds, strIdAdminCls);
          await objPage.value.BindGv_StudentInfo4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 删除记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDelete_Click)
       **/
      const btnSynchToPlat_Click = async () => {
        const strThisFuncName = btnSynchToPlat_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert('请选择需要同步平台的用户!');
            return '';
          }

          let intCount = 0;
          for (const strIdStu of arrKeyIds) {
            const objStudentInfo = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStu);
            if (objStudentInfo == null) continue;
            // const objUsers = await QxUsers_GetObjByUserIdAsync(objStudentInfo.stuId);
            // if (objUsers == null) continue;

            let identityId = '';
            switch (objStudentInfo.userTypeId) {
              case enumUserType.UniversityUser_05:
                identityId = enumQxUserIdentity.University_Student_04;
                break;
              case enumUserType.PrimaryandSecondarySchoolUser_04:
                identityId = enumQxUserIdentity.K_12_Student_08;
                break;
              default:
                const strUserTypeName = await UserType_GetNameByUserTypeIdCache(
                  objStudentInfo.userTypeId,
                );
                const strMsg = `用户类型:${strUserTypeName}在Switch中没有被处理！`;
                console.error(strMsg);
                alert(strMsg);
                return;
            }

            const strIdentityDesc = await QxUserIdentity_GetNameByIdentityIdCache(identityId);

            await StudentInfoEx_SynchStudentToPlatform(
              strIdStu,
              clsSysPara4WebApi.spIdSchool,
              strIdentityDesc,
              userStore.getUserId,
            );
            await qxUserRoleRelationStore.delUser(
              objStudentInfo.stuId,
              clsSysPara4WebApi.currSelPrjId,
            );
            intCount++;
          }
          // StudentInfo_ReFreshCache();

          await objPage.value.BindGv_StudentInfo4Func(divVarSet.refDivList);

          message.success(`同步用户到平台成功！共同步了${intCount}个用户`);
        } catch (e) {
          const strMsg = Format(
            '同步用户到平台不成功. {0}.(in {1}.{2})',
            e,
            thisConstructorName,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 函数功能:系统生成的Change事件函数
       * (AutoGCLib.Vue_ViewScript_TS4Html+<>c__DisplayClass77_0:<Gen_Vue_setup_ts_GeneEventFuncEx>b__1)
       **/
      const ddlIdGradeq_SelectedIndexChangedBak = async (e: any) => {
        console.log(e);
        alert('请在当前函数中重写该函数!');
      };
      const ddlIdGradeq_SelectedIndexChanged = async (event: Event) => {
        const selectedGradeId = (event.target as HTMLSelectElement).value;
        const selectedId = (event.target as HTMLSelectElement).id;
        console.log(' selectedId:', selectedId);
        if (selectedId == 'ddlIdGrade_q') {
          // 根据选中的年级 ID 获取行政班数据
          arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(selectedGradeId);
          idAdminCls_q.value = '0';
        } else {
          arrXzAdminCls_f.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(selectedGradeId);
          idAdminCls_f.value = '0';
        }

        // 其他处理逻辑
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
          await objPage.value.BindGv_StudentInfo4Func(divVarSet.refDivList);
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
        const strIdGrade_Static = IdGrade_Static.value; //静态变量;//静态变量

        arrSex.value = await Sex_GetArrSex(); //查询区域
        idSex_q.value = '0';

        arrXzGradeBase.value = await XzGradeBase_GetArrXzGradeBaseByIsVisible(true); //查询区域
        idGradeBase_q.value = '0';

        arrXzGrade.value = await XzGrade_GetArrXzGrade(); //查询区域
        idGrade_q.value = '0';

        if (strIdGrade_Static != '') {
          arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(strIdGrade_Static); //查询区域
          idAdminCls_q.value = '0';
        }
        arrXzSchool.value = await XzSchool_GetArrXzSchool(); //查询区域
        idSchool_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strIdGrade_Static = IdGrade_Static.value; //静态变量;//静态变量

        arrXzGrade.value = await XzGrade_GetArrXzGrade(); //功能区域
        idGrade_f.value = '0';
        if (strIdGrade_Static != '') {
          arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(strIdGrade_Static); //功能区域
          idAdminCls_f.value = '0';
        }
        arrXzSchool.value = await XzSchool_GetArrXzSchool(); //功能区域
        idSchool_f.value = '0';
      }

      const strTitle = ref('中学学生维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        StudentInfoZxCRUDEx.vuebtn_Click = btn_Click;
        StudentInfoZxCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new StudentInfoZxCRUDEx();
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
          case 'Detail':
            break;
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
        StudentInfoZxCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      const btnImportExcel_Click = () => {
        console.log('btnImportExcel_Click');

        showImportExcel.value = true;
      };
      const selectedFile = ref<File | null>(null);
      const strOpUserId = ref<string>('');
      const showImportExcel = ref(false);

      const handleFileUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          selectedFile.value = target.files[0];
        }
      };

      const submitFile = async () => {
        if (!selectedFile.value) {
          alert('请选择一个文件');
          return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile.value);
        formData.append('strOpUserId', userStore.userId);

        try {
          const intRecNum = await StudentInfoEx_ImportExcel(formData);
          console.log(`文件上传成功, 共:${intRecNum}记录.`);
          showImportExcel.value = false; // 上传成功后隐藏层
        } catch (error) {
          console.error('文件上传失败:', error);
        }
      };

      return {
        handleFileUpload,
        submitFile,
        strOpUserId,

        showErrorMessage,
        dataListStudentInfo,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refStudentInfoZx_Edit,
        refStudentInfoZx_Detail,
        refStudentInfoZx_List,
        stuId_q,
        stuName_q,
        idSex_q,
        idGradeBase_q,
        idGrade_q,
        idSchool_q,
        idAdminCls_q,
        idGrade_f,
        idAdminCls_f,
        idSchool_f,
        arrSex,
        arrXzGradeBase,
        arrXzGrade,
        arrXzAdminCls,
        arrXzAdminCls_f,
        arrXzSchool,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetIdGrade_Click,
        btnSetIdAdminCls_Click,
        ddlIdGradeq_SelectedIndexChanged,
        btnImportExcel_Click,
        showImportExcel,
        btnSetIdSchool_Click,
        btnSynchToPlat_Click,
        isGpUser_q,
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
        router.push({ name: 'editStudentInfo', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new StudentInfoZxCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>

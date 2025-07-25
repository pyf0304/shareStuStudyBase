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
            <td class="text-right">
              <label
                id="lblStuId_q"
                name="lblStuId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >学号1
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuId_q"
                v-model="stuId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblStuName_q"
                name="lblStuName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >姓名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuName_q"
                v-model="stuName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIdXzCollege_q"
                name="lblIdXzCollege_q"
                class="col-form-label text-right"
                style="width: 90px"
                >学院
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzCollege_q"
                v-model="idXzCollege_q"
                class="form-control form-control-sm"
                @change="ddlIdXzCollegeq_SelectedIndexChanged($event)"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrXzClg" :key="index" :value="item.idXzCollege">
                  {{ item.collegeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdXzMajor_q"
                name="lblIdXzMajor_q"
                class="col-form-label text-right"
                style="width: 90px"
                >专业
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzMajor_q"
                v-model="idXzMajor_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrXzMajor" :key="index" :value="item.idXzMajor">
                  {{ item.majorName }}
                </option></select
              >
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <label
                id="lblIdGradeBase_q"
                name="lblIdGradeBase_q"
                class="col-form-label text-right"
                style="width: 90px"
                >入学年级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdGradeBase_q"
                v-model="idGradeBase_q"
                class="form-control form-control-sm"
                style="width: 120px"
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
            <td class="text-right">
              <label
                id="lblIdGrade_q"
                name="lblIdGrade_q"
                class="col-form-label text-right"
                style="width: 90px"
                >中小学年级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdGrade_q"
                v-model="idGrade_q"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                  {{ item.gradeName }}
                </option></select
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
          <button
            id="btnSynchToPlat"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnSynchToPlat_Click"
            >同步到平台</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <StudentInfo_ListCom
        ref="refStudentInfo_List"
        :items="dataListStudentInfo"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </StudentInfo_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortStudentInfoBy" type="hidden" />
    </div>
    <!--编辑层-->
    <StudentInfo_EditCom ref="refStudentInfo_Edit"></StudentInfo_EditCom>
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
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
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
    refStudentInfo_Edit,
    refStudentInfo_List,
    showErrorMessage,
    dataListStudentInfo,
    emptyRecNumInfo,
    IdXzCollege_Static,
    UserTypeId_Session,
    IdSchool_Session,
    stuId_q,
    stuName_q,
    idXzCollege_q,
    idXzMajor_q,
    idGradeBase_q,
    idGrade_q,
  } from '@/viewsShare/UserManage/StudentInfoVueShare';
  import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
  import StudentInfo_EditEx from '@/viewsShare/UserManage/StudentInfo_EditEx';
  import StudentInfoCRUDEx from '@/viewsShare/UserManage/StudentInfoCRUDEx';
  import StudentInfo_EditCom from '@/viewsShare/UserManage/StudentInfo_Edit.vue';
  import StudentInfo_ListCom from '@/viewsShare/UserManage/StudentInfo_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
  import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
  import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
  import { XzClg_GetArrXzClgByUserTypeId } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
  import { XzMajor_GetArrXzMajorByIdXzCollege } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
  import { XzGradeBase_GetArrXzGradeBaseByIsVisible } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
  import { XzGrade_GetArrXzGrade } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
  import { useUserStore } from '@/store/modulesShare/user';

  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { StudentInfoEx_SynchStudentToPlatform } from '@/ts/L3ForWApiExShare/UserManage/clsStudentInfoExWApi';
  import { QxUserIdentity_GetNameByIdentityIdCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxUserIdentityWApi';
  import { StudentInfo_GetObjByIdStudentInfoAsync } from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
  import { QxUsers_GetObjByUserIdAsync } from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
  import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
  import { message } from '@/utils/myMessage';
  import { enumQxUserIdentity } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityEN';
  export default defineComponent({
    name: 'StudentInfoCRUD',
    components: {
      // 组件注册
      StudentInfo_EditCom,
      StudentInfo_ListCom,
    },

    setup() {
      const userStore = useUserStore();
      const qxUserRoleRelationStore = useQxUserRoleRelationStore();
      IdXzCollege_Static.value = '';
      UserTypeId_Session.value = userStore.getUserTypeId;
      IdSchool_Session.value = clsPrivateSessionStorage.idSchool;
      const objPage = ref<StudentInfoCRUDEx>();
      const objPage_Edit = ref<StudentInfo_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'StudentInfoCRUD';

      const arrXzClg = ref<clsXzClgEN[] | null>([]);
      const arrXzMajor = ref<clsXzMajorEN[] | null>([]);
      const arrXzGradeBase = ref<clsXzGradeBaseEN[] | null>([]);
      const arrXzGrade = ref<clsXzGradeEN[] | null>([]);

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
        objPage_Edit.value = new StudentInfo_EditEx('StudentInfo_EditEx', objPage.value);
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
        objPage_Edit.value = new StudentInfo_EditEx('StudentInfo_EditEx', objPage.value);
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
            const identityId = enumQxUserIdentity.K_12_Student_08;
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

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strIdXzCollege_Static = IdXzCollege_Static.value; //静态变量;//静态变量

        arrXzClg.value = await XzClg_GetArrXzClgByUserTypeId(UserTypeId_Session.value); //查询区域
        idXzCollege_q.value = '0';

        // arrXzMajor.value = await XzMajor_GetArrXzMajorByIdXzCollege(strIdXzCollege_Static); //查询区域
        // idXzMajor_q.value = '0';

        arrXzGradeBase.value = await XzGradeBase_GetArrXzGradeBaseByIsVisible(true); //查询区域
        idGradeBase_q.value = '0';

        arrXzGrade.value = await XzGrade_GetArrXzGrade(); //查询区域
        idGrade_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('学生维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        StudentInfoCRUDEx.vuebtn_Click = btn_Click;
        StudentInfoCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new StudentInfoCRUDEx();
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
        StudentInfoCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
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

        refStudentInfo_Edit,
        refStudentInfo_List,
        stuId_q,
        stuName_q,
        idXzCollege_q,
        idXzMajor_q,
        idGradeBase_q,
        idGrade_q,
        arrXzClg,
        arrXzMajor,
        arrXzGradeBase,
        arrXzGrade,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSynchToPlat_Click,
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
        const objPage = new StudentInfoCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      /** 函数功能:系统生成的Change事件函数
       * (AutoGCLib.Vue_ViewScript_TS4Html+<>c__DisplayClass75_0:<Gen_Vue_method_ts_GeneEventFuncEx>b__1)
       **/
      async ddlIdXzCollegeq_SelectedIndexChanged(e: Event) {
        console.log(e);
        // alert('请在当前函数中重写该函数!');
        this.arrXzMajor = await XzMajor_GetArrXzMajorByIdXzCollege(this.idXzCollege_q);
        idXzMajor_q.value = '0';
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>

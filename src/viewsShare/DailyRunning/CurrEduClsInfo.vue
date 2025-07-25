<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->

    <div class="full-width-header">
      <PageHeadCom
        ref="PageHeadRef"
        :title="'教学班信息维护'"
        :isShowEduCls="'false'"
        :header-height="'60px'"
        :is-show-paper-iframe="'false'"
        :is-show-topic="'false'"
        :is-show-search="'false'"
        :is-show-major="'false'"
        :is-show-attention="'false'"
        :is-show-user-cache="'false'"
        :paper-id="''"
      ></PageHeadCom>
    </div>
    <!--查询层-->

    <div id="divEduClsInfo" class="myInline4Parent">
      <div class="ml-2 myinline">
        <span class="text-secondary title-text font-weight-bold">当前教学班:</span>
        <span
          id="spnEduClsName"
          class="text-secondary content-text"
          style="font-weight: bold"
        ></span
        >&nbsp;&nbsp;&nbsp;<span id="MajorName" style="font-weight: bold"></span>
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
      </div>
      <div class="ml-2 myinline">
        <span class="ml-2 text-info title-text font-weight-bold">学年:</span
        ><span id="ShoolYear" class="content-text2" style="font-weight: bold"></span>
      </div>
      <div class="ml-2 myinline">
        <span class="ml-2 text-info title-text font-weight-bold">开始时间:</span
        ><span id="spnStartDate" class="content-text2" style="font-weight: bold"></span>
      </div>
      <div class="ml-2 myinline">
        <span class="ml-2 text-info title-text font-weight-bold">结束时间:</span
        ><span id="spnEndDate" class="content-text2" style="font-weight: bold"></span>
      </div>
      <div class="myinline">
        <button
          class="btn btn-outline-success btn-sm ml-2"
          type="submit"
          @click="btn_Click('ResetEduClsDate', '')"
          >重置</button
        >
      </div>
      <div class="myinline">
        <button
          class="btn btn-outline-success btn-sm ml-2"
          type="submit"
          @click="btn_Click('NewEduCls', '')"
          >新教学班</button
        >
      </div>
    </div>
    <!--功能区-->

    <div
      id="divFunction_Teacher"
      ref="refDivFunction_Teacher"
      class="table table-bordered table-hover mt-2"
    >
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblCurrEduClsStuList"
            name="lblCurrEduClsStuList"
            class="col-form-label text-primary font-weight-bold title-text2"
            style="width: 250px"
            >教学班与教师关系
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            v-if="isCanEditEduClsTeacher == true"
            id="btnCreate"
            class="btn btn-sm btn-outline-info text-nowrap custom-button"
            @click="btnAddTeacher_Click"
            >添加教师</button
          >
        </li>
        <!-- <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li> -->
        <li class="nav-item ml-3">
          <button
            v-if="isCanEditEduClsTeacher == true"
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap custom-button"
            @click="btn_Click('DeleteTeacher', '')"
            >删除相关教师</button
          >
        </li>

        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlRoleId_SetFldValue"
              v-model="roleId_Tea_f"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrQxRoles_T" :key="index" :value="item.roleId">
                {{ item.roleName }}
              </option></select
            >

            <button
              id="btnSetRole"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetRole_Tea_Click"
              >设置角色</button
            >
          </div>
        </li>
        <!-- 
        <li class="nav-item ml-3">
          <select
            v-model="detailInfoTab"
            ref="ddlDetailInfoTab"
            id="ddlDetailInfoTab"
            class="form-control form-control-sm"
            style="width: 100px"
          >
            <option value="unknown">未知</option>
            <option value="StudentInfo">学生信息表</option>
            <option value="TeacherInfo">教师信息表</option>
            <option value="CompanyInfo">公司信息表</option></select
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnSetDetailInfoTab"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SetDetailInfoTab', '')"
            >设置详细信息表</button
          >
        </li> -->
      </ul>
    </div>
    <!--列表层-->
    <div id="divList_Teacher" ref="refDivList_Teacher" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvCurrEduClsTeacherBy" type="hidden" />
    </div>
    <!--功能区-->

    <div
      id="divFunction_Stu"
      ref="refDivFunction_Stu"
      class="table table-bordered table-hover mt-2"
    >
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblCurrEduClsStuList"
            name="lblCurrEduClsStuList"
            class="col-form-label text-primary title-text2"
            style="width: 250px"
            >教学班与学生关系
          </label>
        </li>
        <li class="nav-item ml-1">
          <button
            v-if="isCanEditEduClsStudent == true"
            id="btnCreate"
            name="btnCreate"
            class="btn btn-sm btn-outline-info custom-button"
            @click="btnAddStu"
            >添加学生</button
          >
        </li>

        <li class="nav-item ml-2">
          <button
            v-if="isCanEditEduClsStudent == true"
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap custom-button"
            @click="btn_Click('DeleteStu', '')"
            >删除学生</button
          >
        </li>

        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlRoleId_SetFldValue"
              v-model="roleId_Stu_f"
              class="form-control form-control-sm"
              style="width: 120px"
            >
              <option v-for="(item, index) in arrQxRoles_S" :key="index" :value="item.roleId">
                {{ item.roleName }}
              </option></select
            >

            <button
              id="btnSetRole"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetRole_Stu_Click"
              >设置角色</button
            >
          </div>
        </li>
      </ul>
    </div>
    <div id="divList_Stu" ref="refDivList_Stu" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvCurrEduClsStuBy" type="hidden" />
    </div>

    <!--编辑层-->
    <CurrEduClsStu_EditCom ref="refCurrEduClsStu_Edit"></CurrEduClsStu_EditCom>

    <!-- 知识点前测弹出窗 -->
    <div v-if="showStudentInfoSelModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>学生选择</h2>
          <span class="close" @click="closeStudentInfoSelModal">&times;</span>
        </div>
        <div class="modal-body">
          <StudentInfoListCom
            :id-curr-edu-cls="idCurrEduCls"
            :pageType="'CurrEduClsInfo'"
            :show-title="false"
            @finish-add-to-edu-cls="finishAddToEduCls"
            ref="refStudentInfoList"
          ></StudentInfoListCom>
        </div>
      </div>
    </div>

    <div v-if="showTeachernfoSelModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>教师选择</h2>
          <span class="close" @click="closeTeacherInfoSelModal">&times;</span>
        </div>
        <div class="modal-body">
          <TeacherInfoListCom
            :id-curr-edu-cls="idCurrEduCls"
            :pageType="'CurrEduClsInfo'"
            :show-title="false"
            @finish-add-to-edu-cls="finishAddTeacherToEduCls"
            ref="TeacherInfoListCom"
          ></TeacherInfoListCom>
        </div>
      </div>
    </div>

    <CurrEduCls_EditCom ref="refCurrEduCls_Edit"></CurrEduCls_EditCom>
    <!--编辑层-->
    <gs_TeachingDate_EditCom ref="refgs_TeachingDate_Edit"></gs_TeachingDate_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { CurrEduClsInfoEx } from '@/viewsShare/DailyRunning/CurrEduClsInfoEx';

  import CurrEduClsStu_EditCom from '@/viewsShare/DailyRunning/CurrEduClsStu_Edit.vue';
  import StudentInfoListCom from '@/viewsShare/UserManage/StudentInfoList.vue';
  import TeacherInfoListCom from '@/viewsShare/DailyRunning/TeacherInfoList.vue';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import CurrEduCls_EditCom from '@/viewsShare/DailyRunning/CurrEduCls_Edit.vue';
  import PageHeadCom from '@/ts/components/PageHead_GE.vue';

  import { useUserStore } from '@/store/modulesShare/user';
  import { useQxRolePotenceRelaStore } from '@/store/modulesShare/qxRolePotenceRela';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import {
    refCurrEduClsStu_Edit,
    refDivQuery,
    refDivFunction,
  } from '@/viewsShare/DailyRunning/CurrEduClsStuVueShare';
  import { refCurrEduCls_Edit } from '@/viewsShare/DailyRunning/CurrEduClsVueShare';
  import {
    refDivLayout,
    refDivList_Stu,
    refDivList_Teacher,
    refStudentInfoList,
    TeacherInfoListRef,
    QxPrjId_Local,
    roleId_Tea_f,
    roleId_Stu_f,
  } from '@/viewsShare/DailyRunning/CurrEduClsInfoVueShare';

  import { IdCurrEduCls_Session } from '@/viewsShare/DailyRunning/CurrEduClsStuVueShare';
  import CurrEduClsStuCRUDEx from './CurrEduClsStuCRUDEx';
  import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  import { QxRoles_GetArrQxRolesByUserTypeId } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
  import { GetCheckedKeyIdsInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import CurrEduClsTeacherCRUDEx from '@/viewsShare/DailyRunning/CurrEduClsTeacherCRUDEx';
  import { Format } from '@/ts/PubFun/clsString';
  import { QxUserRoleRelationEx_AddRecord } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxUserRoleRelationExWApi';
  import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';

  import { CurrEduClsTeacher_GetObjByIdEduClsTeacherAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsTeacherWApi';
  import {
    CurrEduClsTeacherEx_CopyToEx,
    CurrEduClsTeacherEx_FuncMapByFldName,
  } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';
  import { clsCurrEduClsTeacherENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherENEx';
  import { CurrEduClsStu_GetObjByIdEduClsStuAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
  import {
    CurrEduClsStuEx_CopyToEx,
    CurrEduClsStuEx_FuncMapByFldName,
  } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';
  import { clsCurrEduClsStuENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuENEx';
  import { refgs_TeachingDate_Edit } from '@/viewsShare/DailyRunning/gs_TeachingDateVueShare';
  import gs_TeachingDate_EditCom from '@/viewsShare/DailyRunning/gs_TeachingDate_Edit.vue';
  import StudentInfoList from '@/viewsShare/UserManage/StudentInfoList';
  import { IdCurrEduCls_Static } from '@/viewsShare/UserManage/StudentInfoListVueShare';
  import TeacherInfoList from '@/viewsShare/DailyRunning/TeacherInfoList';
  import { enumRoleType } from '@/ts/L0Entity/UserManage_GP/clsRoleTypeEN';
  export default defineComponent({
    name: 'CurrEduClsInfo',
    components: {
      // 组件注册
      CurrEduClsStu_EditCom,
      StudentInfoListCom,
      TeacherInfoListCom,
      CurrEduCls_EditCom,
      PageHeadCom,
      // 组件注册
      gs_TeachingDate_EditCom,
    },
    setup() {
      QxPrjId_Local.value = clsSysPara4WebApi.currSelPrjId;
      const qxRolePotenceRelaStore = useQxRolePotenceRelaStore();
      const userStore = useUserStore();
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;

      const objPage = ref<CurrEduClsInfoEx>();
      const objPageEdit_Stu = ref<StudentInfoList>();
      const objPageEdit_Teacher = ref<TeacherInfoList>();
      const showStudentInfoSelModal = ref(false);
      async function showStudentInfoSel() {
        // console.log('props.questionId (in showKnowledgeSel)', props.questionId);
        showStudentInfoSelModal.value = true;
      }
      function closeStudentInfoSelModal() {
        showStudentInfoSelModal.value = false;
        console.log('closeKnowledgeSelModal:', showStudentInfoSelModal.value);
      }

      const showTeachernfoSelModal = ref(false);
      async function showTeacherInfoSel() {
        // console.log('props.questionId (in showKnowledgeSel)', props.questionId);
        showTeachernfoSelModal.value = true;
      }
      function closeTeacherInfoSelModal() {
        showTeachernfoSelModal.value = false;
        console.log('closeTeacherInfoSelModal:', showTeachernfoSelModal.value);
      }

      const thisConstructorName = 'CurrEduClsInfo';

      const arrQxRoles_S = ref<clsQxRolesEN[] | null>([]);
      const arrQxRoles_T = ref<clsQxRolesEN[] | null>([]);

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const userTypeId = userStore.userTypeId;
        const roleTypeId_S = enumRoleType.Student_02;
        const roleTypeId_T = enumRoleType.Teacher_01;

        arrQxRoles_S.value = await QxRoles_GetArrQxRolesByUserTypeId(
          userTypeId,
          roleTypeId_S,
          QxPrjId_Local.value,
        ); //功能区域
        arrQxRoles_T.value = await QxRoles_GetArrQxRolesByUserTypeId(
          userTypeId,
          roleTypeId_T,
          QxPrjId_Local.value,
        ); //功能区域
        roleId_Tea_f.value = '0';
        roleId_Stu_f.value = '0';
      }
      const strTitle = ref('教学班信息维护');

      const PageHeadRef = ref();
      const isCanEditEduClsTeacher = ref(false);
      const isCanEditEduClsStudent = ref(false);

      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      onMounted(async () => {
        BindDdl4FeatureRegion();
        // objPage.value = new CurrEduClsStuCRUDEx();
        const strRoleId = userStore.getRoleId;
        const strPotenceName_Teacher = '教学班教师维护';
        const strPotenceName_Student = '教学班学生维护';
        let arrRoleId = await qxRolePotenceRelaStore.getRoleIdsByPotenceName(
          strPotenceName_Teacher,
          clsSysPara4WebApi.currSelPrjId,
        );
        if (arrRoleId.indexOf(strRoleId) > -1) {
          isCanEditEduClsTeacher.value = true;
        }
        arrRoleId = await qxRolePotenceRelaStore.getRoleIdsByPotenceName(
          strPotenceName_Student,
          clsSysPara4WebApi.currSelPrjId,
        );
        if (arrRoleId.indexOf(strRoleId) > -1) {
          isCanEditEduClsStudent.value = true;
        }

        idCurrEduCls.value = clsPubLocalStorage.idCurrEduCls;

        objPage.value = new CurrEduClsInfoEx();
        objPage.value.PageLoadCache();
        // objPage.PageLoadCache();
      });
      const finishAddToEduCls = (stuId: string) => {
        console.log('finishAddToEduCls:', stuId);
        // showStudentInfoSelModal.value = false;
        new CurrEduClsStuCRUDEx().BindGv_CurrEduClsStu4Func(refDivList_Stu.value);
      };

      const finishAddTeacherToEduCls = (teacherId: string) => {
        console.log('finishAddTeacherToEduCls:', teacherId);
        // showStudentInfoSelModal.value = false;
        new CurrEduClsTeacherCRUDEx().BindGv_CurrEduClsTeacher4Func(refDivList_Teacher.value);
      };

      const btnSetRole_Tea_Click = async () => {
        // Add your logic here
        console.log('Role set for teacher');
        const strThisFuncName = btnSetRole_Tea_Click.name;
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(refDivList_Teacher.value);

          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置角色的记录!`);
            return '';
          }
          const strRoleId = roleId_Tea_f.value;
          const qxUserRoleRelationStore = useQxUserRoleRelationStore();
          for (const strIdEduClsTeacher of arrKeyIds) {
            const objCurrEduClsTeacher = await CurrEduClsTeacher_GetObjByIdEduClsTeacherAsync(
              Number(strIdEduClsTeacher),
            );
            if (objCurrEduClsTeacher == null) {
              alert(`未找到教学班教师记录!`);
              return '';
            }
            const objCurrEduClsTeacherEx = CurrEduClsTeacherEx_CopyToEx(objCurrEduClsTeacher);
            await CurrEduClsTeacherEx_FuncMapByFldName(
              clsCurrEduClsTeacherENEx.con_TeacherId,
              objCurrEduClsTeacherEx,
            );
            await QxUserRoleRelationEx_AddRecord(
              objCurrEduClsTeacherEx.teacherId,
              strRoleId,
              userStore.getUserId,
            );
            qxUserRoleRelationStore.delUser(
              objCurrEduClsTeacherEx.teacherId,
              clsSysPara4WebApi.currSelPrjId,
            );
          }

          new CurrEduClsTeacherCRUDEx().BindGv_CurrEduClsTeacher4Func(refDivList_Teacher.value);
        } catch (e: any) {
          const strMsg = Format(
            '删除记录不成功. {0}.(in {1}.{2})',
            e,
            thisConstructorName,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      const btnSetRole_Stu_Click = async () => {
        // Add your logic here
        console.log('Role set for student');
        const strThisFuncName = btnSetRole_Stu_Click.name;
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(refDivList_Stu.value);

          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置角色的记录!`);
            return '';
          }
          const strRoleId = roleId_Stu_f.value;
          const qxUserRoleRelationStore = useQxUserRoleRelationStore();
          for (const strIdEduClsStu of arrKeyIds) {
            const objCurrEduClsStu = await CurrEduClsStu_GetObjByIdEduClsStuAsync(
              Number(strIdEduClsStu),
            );
            if (objCurrEduClsStu == null) {
              alert(`未找到教学班学生记录!`);
              return '';
            }
            const objCurrEduClsStuEx = CurrEduClsStuEx_CopyToEx(objCurrEduClsStu);
            await CurrEduClsStuEx_FuncMapByFldName(
              clsCurrEduClsStuENEx.con_StuId,
              objCurrEduClsStuEx,
            );
            await QxUserRoleRelationEx_AddRecord(
              objCurrEduClsStuEx.stuId,
              strRoleId,
              userStore.getUserId,
            );
            qxUserRoleRelationStore.delUser(
              objCurrEduClsStuEx.stuId,
              clsSysPara4WebApi.currSelPrjId,
            );
          }

          new CurrEduClsStuCRUDEx().BindGv_CurrEduClsStu4Func(refDivList_Stu.value);
        } catch (e: any) {
          const strMsg = Format(
            '删除记录不成功. {0}.(in {1}.{2})',
            e,
            thisConstructorName,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      function btnAddStu() {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        showStudentInfoSelModal.value = true;
        if (IdCurrEduCls_Static.value == '') {
          IdCurrEduCls_Static.value = idCurrEduCls.value;
        }
        objPageEdit_Stu.value = new StudentInfoList();
        objPageEdit_Stu.value.PageLoad();
      }
      function btnAddTeacher_Click() {
        showTeachernfoSelModal.value = true;
        objPageEdit_Teacher.value = new TeacherInfoList();
        if (objPageEdit_Teacher.value == null) {
          alert('教师列表页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPageEdit_Teacher.value == undefined) {
          alert('教师列表页面初始化不成功,请联系管理员!');
          return;
        }
        objPageEdit_Teacher.value.PageLoad();
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
          case 'AddStu':
            refStudentInfoList.value.showDialog();
            // StudentInfoList.EditRef = refStudentInfoList;
            break;
          case 'DeleteStu':
            break;
          case 'AddTeacher':
            // TeacherInfoList.EditRef = TeacherInfoListRef;
            break;
          case 'DeleteTeacher':
            break;
          case 'NewEduCls':
            break;
          default:
            break;
        }
        CurrEduClsInfoEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refCurrEduClsStu_Edit,
        refStudentInfoList,
        TeacherInfoListRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList_Teacher,
        refDivList_Stu,
        idCurrEduCls,
        refCurrEduCls_Edit,
        PageHeadRef,
        isCanEditEduClsTeacher,
        isCanEditEduClsStudent,
        roleId_Tea_f,
        roleId_Stu_f,
        arrQxRoles_T,
        arrQxRoles_S,
        btnSetRole_Tea_Click,
        btnSetRole_Stu_Click,
        refgs_TeachingDate_Edit,
        closeStudentInfoSelModal,
        showStudentInfoSelModal,
        showStudentInfoSel,
        btnAddStu,
        finishAddToEduCls,
        btnAddTeacher_Click,
        showTeachernfoSelModal,
        closeTeacherInfoSelModal,
        showTeacherInfoSel,
        finishAddTeacherToEduCls,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped>
  .myinline {
    display: inline-block;
    margin-left: 10px; /* 可选，为子元素之间添加间距 */
  }
  .myInline4Parent {
    display: flex;
    align-items: center; /* 可选，使子元素垂直居中 */
  }
  .title-text {
    font-size: 1.1rem;
    font-weight: bolder;
  }
  .title-text2 {
    font-size: 1.05rem;
    font-weight: bold;
  }
  .content-text {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .content-text2 {
    font-size: 1.05rem;
    font-weight: bold;
  }
  .custom-button2 {
    background-color: #ff6600; /* 自定义背景颜色 */
    color: #fff; /* 自定义文本颜色 */
    border: 2px solid #ff6600; /* 自定义边框 */
    /* 其他自定义样式属性 */
  }
  .custom-button {
    border: 2px solid #008cff; /* 自定义边框 */
    margin-left: 10px; /* 可选，为子元素之间添加间距 */
    /* 其他自定义样式属性 */
  }
  .full-width-header {
    width: 100%;
    height: 67px;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #c8e8f5; /* 更明显的弹出窗背景色 */
    padding: 20px;
    border-radius: 5px;
    width: 1100px; /* 弹出窗宽度 */
    height: 730px; /* 弹出窗高度 */
    overflow-y: auto;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-header {
    border-bottom: 1px solid #ccc;
  }

  .modal-footer {
    border-top: 1px solid #ccc;
    justify-content: flex-end; /* 将按钮放在右下角 */
  }

  .close {
    cursor: pointer;
    font-size: 24px;
  }
</style>

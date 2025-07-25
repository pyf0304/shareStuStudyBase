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
        style="width: 1000px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left">
              <select
                id="ddlIdCurrEduCls_q"
                v-model="idCurrEduCls_q"
                title="请选择教学班"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrvCurrEduCls_Sim"
                  :key="index"
                  :value="item.idCurrEduCls"
                >
                  {{ item.eduClsName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <input
                id="txtTeacherId_q"
                v-model="teacherId_q"
                placeholder="请输入教师工号"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <input
                id="txtTeacherName_q"
                v-model="teacherName_q"
                placeholder="请输入教师姓名"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlSchoolYear_q"
                v-model="schoolYear_q"
                title="请选择学年"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrSchoolYear"
                  :key="index"
                  :value="item.schoolYear"
                >
                  {{ item.schoolYearName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <select
                id="ddlSchoolTerm_q"
                v-model="schoolTerm_q"
                title="请选择学期"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrSchoolTerm"
                  :key="index"
                  :value="item.schoolTerm"
                >
                  {{ item.schoolTermName }}
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
        </tbody></table
      >
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblCurrEduClsTeacherList"
            name="lblCurrEduClsTeacherList"
            class="col-form-label text-info"
            style="width: 250px"
            >当前教学班教师列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <CurrEduClsTeacher_ListCom
        ref="refCurrEduClsTeacher_List"
        :items="dataListCurrEduClsTeacher"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </CurrEduClsTeacher_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvCurrEduClsTeacherBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CurrEduClsTeacher_EditCom ref="refCurrEduClsTeacher_Edit"></CurrEduClsTeacher_EditCom>
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
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
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
    refCurrEduClsTeacher_Edit,
    refCurrEduClsTeacher_List,
    showErrorMessage,
    dataListCurrEduClsTeacher,
    emptyRecNumInfo,
    IdCurrEduCls_Session,
    CourseId_Session,
    IdSchool_Session,
    idCurrEduCls_q,
    teacherId_q,
    teacherName_q,
    schoolTerm_q,
    schoolYear_q,
  } from '@/viewsShare/DailyRunning/CurrEduClsTeacherVueShare';
  import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';
  import CurrEduClsTeacher_EditEx from '@/viewsShare/DailyRunning/CurrEduClsTeacher_EditEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import CurrEduClsTeacherCRUDEx from '@/viewsShare/DailyRunning/CurrEduClsTeacherCRUDEx';
  import CurrEduClsTeacher_EditCom from '@/viewsShare/DailyRunning/CurrEduClsTeacher_Edit.vue';
  import CurrEduClsTeacher_ListCom from '@/viewsShare/DailyRunning/CurrEduClsTeacher_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { clsvCurrEduCls_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN';
  import { clsSchoolTermEN } from '@/ts/L0Entity/SysPara/clsSchoolTermEN';
  import { clsSchoolYearEN } from '@/ts/L0Entity/SysPara/clsSchoolYearEN';
  import { vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
  import { SchoolTerm_GetArrSchoolTerm } from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';
  import { SchoolYear_GetArrSchoolYear } from '@/ts/L3ForWApi/SysPara/clsSchoolYearWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'CurrEduClsTeacherCRUD',
    components: {
      // 组件注册
      CurrEduClsTeacher_EditCom,
      CurrEduClsTeacher_ListCom,
    },

    setup() {
      const userStore = useUserStore();
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      CourseId_Session.value = clsPubLocalStorage.courseId;
      IdSchool_Session.value = clsPrivateSessionStorage.idSchool;

      const objPage = ref<CurrEduClsTeacherCRUDEx>();
      const objPage_Edit = ref<CurrEduClsTeacher_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'CurrEduClsTeacherCRUD';

      const arrvCurrEduCls_Sim = ref<clsvCurrEduCls_SimEN[] | null>([]);
      const arrSchoolTerm = ref<clsSchoolTermEN[] | null>([]);
      const arrSchoolYear = ref<clsSchoolYearEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_CurrEduClsTeacher4Func(refDivList.value);
      };

      /** 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCreate_Click)
       **/
      const btnCreate_Click = async () => {
        const strThisFuncName = btnCreate_Click.name;
        if (IdSchool_Session.value == '') {
          alert('当前用户角色没有相关的学校，不能添加教学班教师关系!');
          return;
        }
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new CurrEduClsTeacher_EditEx(
          'CurrEduClsTeacher_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_CurrEduClsTeacher(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsCurrEduClsTeacherEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new CurrEduClsTeacher_EditEx(
          'CurrEduClsTeacher_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFstKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        const lngIdEduClsTeacher = Number(strFstKeyId);
        if (lngIdEduClsTeacher == 0) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_CurrEduClsTeacher(opType.value);
          if (bolIsSuccess == false) return;
          const lngKeyId = lngIdEduClsTeacher;
          const update = await objPage_Edit.value.UpdateRecord(lngKeyId);
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
        return clsCurrEduClsTeacherEN._CurrTabName;
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
          await objPage.value.BindGv_CurrEduClsTeacher4Func(divVarSet.refDivList);
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
          await objPage.value.ExportExcel_CurrEduClsTeacher4Func();
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
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrvCurrEduCls_Sim.value = await vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId(
          strCourseId,
        ); //查询区域
        idCurrEduCls_q.value = '0';

        arrSchoolTerm.value = await SchoolTerm_GetArrSchoolTerm(); //查询区域
        schoolTerm_q.value = '0';

        arrSchoolYear.value = await SchoolYear_GetArrSchoolYear(); //查询区域
        schoolYear_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('当前教学班教师维护');
      onMounted(() => {
        if (IsNullOrEmpty(IdSchool_Session.value)) {
          IdSchool_Session.value = userStore.getIdSchool;
        }
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        CurrEduClsTeacherCRUDEx.vuebtn_Click = btn_Click;
        CurrEduClsTeacherCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new CurrEduClsTeacherCRUDEx();
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
        CurrEduClsTeacherCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListCurrEduClsTeacher,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refCurrEduClsTeacher_Edit,
        refCurrEduClsTeacher_List,
        idCurrEduCls_q,
        teacherId_q,
        teacherName_q,
        schoolTerm_q,
        schoolYear_q,
        arrvCurrEduCls_Sim,
        arrSchoolTerm,
        arrSchoolYear,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
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
        router.push({ name: 'editvCurrEduClsTeacher', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new CurrEduClsTeacherCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>

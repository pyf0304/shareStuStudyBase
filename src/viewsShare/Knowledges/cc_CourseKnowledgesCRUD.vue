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
                id="txtKnowledgeTitle_q"
                v-model="knowledgeTitle_q"
                placeholder="请输入知识点标题"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-left">
              <input
                id="txtLevelNo_q"
                v-model="levelNo_q"
                placeholder="请输入等级(1-4)"
                class="form-control form-control-sm"
                style="width: 80px"
              />
            </td>
            <td class="text-left">
              <select
                id="ddlCourseChapterId_q"
                v-model="courseChapterId_q"
                title="请选择课程章节"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrcc_CourseChapter"
                  :key="index"
                  :value="item.courseChapterId"
                >
                  {{ item.courseChapterName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlKnowledgeModuleId_q"
                v-model="knowledgeModuleId_q"
                title="请选择知识点模块"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrcc_KnowledgeModules"
                  :key="index"
                  :value="item.knowledgeModuleId"
                >
                  {{ item.knowledgeModuleName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <select
                id="ddlKPSourceId_q"
                v-model="kpSourceId_q"
                title="请选择知识点来源"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrKPSource" :key="index" :value="item.kpSourceId">
                  {{ item.kpSourceName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <select
                id="ddlKnowledgeTypeId_q"
                v-model="knowledgeTypeId_q"
                title="请选择知识点类型"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrKnowledgeType"
                  :key="index"
                  :value="item.knowledgeTypeId"
                >
                  {{ item.knowledgeTypeName }}
                </option></select
              >
            </td>

            <td class="text-left">
              <select
                id="ddlCourseId_q"
                v-model="courseId_q"
                title="请选择课程"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option v-for="(item, index) in arrcc_Course" :key="index" :value="item.courseId">
                  {{ item.courseName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <select
                id="ddlbInUse_q"
                v-model="inUse_q"
                title="选择是否在用"
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
            <td class="nav-item ml-2">
              <button
                id="btnImportDataFromExcel"
                class="btn btn-outline-warning btn-sm text-nowrap"
                @click="btnImportDataFromExcel_Click"
                >导入Excel</button
              >
            </td>
          </tr>
          <tr>
            <td colspan="8">
              <div v-if="isShowImportDataFromExcel">
                <UploadXlsFile4KPCom></UploadXlsFile4KPCom>
              </div> </td
          ></tr> </tbody
      ></table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblcc_CourseKnowledgesList"
            name="lblcc_CourseKnowledgesList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点列表
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
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btnClone_Click"
            >复制</button
          >
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlCourseChapterId_f"
              v-model="courseChapterId_f"
              class="form-control form-control-sm"
              style="width: 100px"
            >
              <option
                v-for="(item, index) in arrcc_CourseChapter"
                :key="index"
                :value="item.courseChapterId"
              >
                {{ item.courseChapterName }}
              </option></select
            >
            <button
              id="btnGoTop"
              name="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnGoTop_Click"
              >移顶</button
            >
            <button
              id="btnUpMove"
              name="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnUpMove_Click"
              >上移</button
            >
            <button
              id="btnDownMove"
              name="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnDownMove_Click"
              >下移</button
            >
            <button
              id="btnGoBottum"
              name="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnGoBottum_Click"
              >移底</button
            >
            <button
              id="btnReOrder"
              name="btnReOrder"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnReOrder_Click"
              >重序</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlKnowledgeModuleId_SetFldValue"
              v-model="knowledgeModuleId_f"
              class="form-control form-control-sm"
              style="width: 100px"
            >
              <option
                v-for="(item, index) in arrcc_KnowledgeModules"
                :key="index"
                :value="item.knowledgeModuleId"
              >
                {{ item.knowledgeModuleName }}
              </option></select
            >
            <button
              id="btnSetKnowledgeModuleId"
              name="btnSetKnowledgeModuleId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetKnowledgeModuleId_Click"
              >设置知识点模块</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlKPSourceId_SetFldValue"
              v-model="kpSourceId_f"
              class="form-control form-control-sm"
              style="width: 90px"
            >
              <option v-for="(item, index) in arrKPSource" :key="index" :value="item.kpSourceId">
                {{ item.kpSourceName }}
              </option></select
            >
            <button
              id="btnSetKPSourceId"
              name="btnSetKPSourceId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetKPSourceId_Click"
              >设置知识点来源</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlCourseKnowledgeId_SetFldValue"
              v-model="courseKnowledgeId_T"
              class="form-control form-control-sm"
              style="width: 100px"
            >
              <option
                v-for="(item, index) in arrcc_CourseKnowledges"
                :key="index"
                :value="item.courseKnowledgeId"
              >
                {{ item.knowledgeNameEx }}
              </option></select
            >
            <button
              id="btnSetCourseKnowledgeId_T"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnReplaceKnowledge_Click"
              >替换知识点</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlbInUse_SetFldValue"
              v-model="inUse_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option value="0">选择是/否</option>
              <option value="true">是</option>
              <option value="false">否</option></select
            >
            <button
              id="btnSetInUse"
              name="btnSetInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnSetInUse_Click"
              >设置是否在用</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <cc_CourseKnowledges_ListCom
        ref="refcc_CourseKnowledges_List"
        :items="dataListcc_CourseKnowledges"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </cc_CourseKnowledges_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcc_CourseKnowledgesBy" type="hidden" />
    </div>
    <!--编辑层-->
    <cc_CourseKnowledges_EditCom ref="refcc_CourseKnowledges_Edit"></cc_CourseKnowledges_EditCom>
  </div>
</template>
<script lang="ts">
  //import $ from "jquery";
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import router from '@/router';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    GetCheckedKeyIdsInDivObj,
    GetSelectValueInDivObj,
    SetCheckedItem4KeyIdInDiv,
    GetDivObjInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import {
    CourseChapterId_Static,
    CourseId_Session,
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refcc_CourseKnowledges_Edit,
    refcc_CourseKnowledges_List,
    showErrorMessage,
    dataListcc_CourseKnowledges,
    emptyRecNumInfo,
    knowledgeTitle_q,
    courseChapterId_q,
    knowledgeModuleId_q,
    knowledgeTypeId_q,
    courseId_q,
    knowledgeModuleId_f,
    courseChapterId_f,
    levelNo_q,
    inUse_q,
    inUse_f,
    cc_CourseKnowledges_DeleteKeyIdCache,
    kpSourceId_f,
    kpSourceId_q,
  } from '@/viewsShare/Knowledges/cc_CourseKnowledgesVueShare';
  import {
    cc_CourseKnowledges_UpMoveAsync,
    cc_CourseKnowledges_ReFreshCache,
    cc_CourseKnowledges_DownMoveAsync,
    cc_CourseKnowledges_GoTopAsync,
    cc_CourseKnowledges_GoBottomAsync,
    cc_CourseKnowledges_ReOrderAsync,
  } from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
  import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
  import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
  import cc_CourseKnowledges_EditEx from '@/viewsShare/Knowledges/cc_CourseKnowledges_EditEx';
  import cc_CourseKnowledgesCRUDEx from '@/viewsShare/Knowledges/cc_CourseKnowledgesCRUDEx';
  import cc_CourseKnowledges_EditCom from '@/viewsShare/Knowledges/cc_CourseKnowledges_Edit.vue';
  import cc_CourseKnowledges_ListCom from '@/viewsShare/Knowledges/cc_CourseKnowledges_List.vue';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
  import { clscc_KnowledgeModulesEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN';
  import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
  import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
  import { cc_CourseChapter_GetArrcc_CourseChapterByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
  import { cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgeModulesWApi';
  import { KnowledgeType_GetArrKnowledgeType } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeTypeWApi';
  import { cc_Course_GetArrcc_Course } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
  import { useKnowledgeQuestionNumStore } from '@/store/modules/knowledgeQuestionNum';
  import {
    cc_CourseKnowledgesEx_GetArrcc_CourseKnowledgesByCourseIdWithModuleName,
    cc_CourseKnowledgesEx_ReplaceCourseKnowledge,
  } from '@/ts/L3ForWApiExShare/Knowledges/clscc_CourseKnowledgesExWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import UploadXlsFile4KPCom from '@/viewsShare/tools/UploadXlsFile4KP.vue';
  import { cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
  import { clscc_CourseKnowledgesENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesENEx';
  import { vQuestionNumByKnowledgeId_ReFreshThisCache } from '@/ts/L3ForWApi/Knowledges/clsvQuestionNumByKnowledgeIdWApi';
  import { cc_KnowledgeModulesEx_GetArrcc_KnowledgeModulesByCourseId } from '@/ts/L3ForWApiExShare/Knowledges/clscc_KnowledgeModulesExWApi';
  import { clsKPSourceEN } from '@/ts/L0Entity/Knowledges/clsKPSourceEN';
  import { KPSource_GetArrKPSource } from '@/ts/L3ForWApi/Knowledges/clsKPSourceWApi';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';

  export default defineComponent({
    name: 'Cc_CourseKnowledgesCRUD',
    components: {
      // 组件注册
      cc_CourseKnowledges_EditCom,
      cc_CourseKnowledges_ListCom,
      UploadXlsFile4KPCom,
    },

    setup() {
      const knowledgeQuestionNumStore = useKnowledgeQuestionNumStore();
      const userStore = useUserStore();
      const userId = userStore.getUserId;
      // 设置token
      knowledgeQuestionNumStore.setToken('your-token-here');
      CourseId_Session.value = clsPubLocalStorage.courseId;
      CourseChapterId_Static.value = '';
      const isShowImportDataFromExcel = ref(false);
      const objPage = ref<cc_CourseKnowledgesCRUDEx>();
      const objPage_Edit = ref<cc_CourseKnowledges_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'Cc_CourseKnowledgesCRUD';

      const arrcc_CourseChapter = ref<clscc_CourseChapterEN[] | null>([]);
      const arrcc_KnowledgeModules = ref<clscc_KnowledgeModulesEN[] | null>([]);
      const arrKPSource = ref<clsKPSourceEN[] | null>([]);

      const arrcc_CourseKnowledges = ref<clscc_CourseKnowledgesENEx[] | null>([]);
      const arrKnowledgeType = ref<clsKnowledgeTypeEN[] | null>([]);
      const arrcc_Course = ref<clscc_CourseEN[] | null>([]);
      const courseKnowledgeId_T = ref('');
      /**
       * 添加新记录
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnCopyRecord_Click)
       **/
      const btnClone_Click = async () => {
        const strThisFuncName = btnClone_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要克隆的${thisTabName}记录!`);
            return '';
          }
          await objPage.value.CopyRecord(arrKeyIds);
          await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_cc_CourseKnowledges4Func(refDivList.value);
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
        objPage_Edit.value = new cc_CourseKnowledges_EditEx(
          'cc_CourseKnowledges_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_cc_CourseKnowledges(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clscc_CourseKnowledgesEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new cc_CourseKnowledges_EditEx(
          'cc_CourseKnowledges_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCourseKnowledgeId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strCourseKnowledgeId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_cc_CourseKnowledges(
            opType.value,
          );
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strCourseKnowledgeId);
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
        return clscc_CourseKnowledgesEN._CurrTabName;
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
          await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `删除${thisTabName}记录不成功. ${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
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
        const arr: ExportExcelData = await objPage.value.ExportExcel_cc_CourseKnowledges4Func();
        if (arr.sheetName == '') {
          alert('获取导出数据出错,请检查!');
          return;
        }
        exportToExcel(arr.arrObjLst, arr.sheetName, arr.fileName);
      };
      /** 设置字段值-InUse
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetInUse_Click = async () => {
        const strThisFuncName = btnSetInUse_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置是否在用的${thisTabName}记录!`);
            return '';
          }
          if (inUse_f.value == '0') {
            const strMsg = '请选择是否在用!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          const bolInUse: boolean = inUse_f.value == 'true';
          //console.log('bolInUse=' + bolInUse);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetInUse(arrKeyIds, bolInUse);
          for (const strKeyId of arrKeyIds) {
            cc_CourseKnowledges_DeleteKeyIdCache(CourseId_Session.value, strKeyId);
          }
          await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };
      /** 设置字段值-KnowledgeModuleId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetKnowledgeModuleId_Click = async () => {
        const strThisFuncName = btnSetKnowledgeModuleId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置知识点模块Id的${thisTabName}记录!`);
            return '';
          }
          const strKnowledgeModuleId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlKnowledgeModuleId_SetFldValue',
          );
          if (strKnowledgeModuleId == '') {
            const strMsg = '请输入知识点模块Id(KnowledgeModuleId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strKnowledgeModuleId=' + strKnowledgeModuleId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetKnowledgeModuleId(arrKeyIds, strKnowledgeModuleId);
          await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 上移
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnUpMove_Click)
       **/
      const btnUpMove_Click = async () => {
        const strThisFuncName = btnUpMove_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseChapterId = CourseChapterId_Static.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要上移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            coursechapterid: strCourseChapterId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseKnowledges_UpMoveAsync(objOrderByData);
          cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `上移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 下移
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnDownMove_Click)
       **/
      const btnDownMove_Click = async () => {
        const strThisFuncName = btnDownMove_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseChapterId = CourseChapterId_Static.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要下移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            coursechapterid: strCourseChapterId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseKnowledges_DownMoveAsync(objOrderByData);
          cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `下移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /** 置顶
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnGoTop_Click)
       **/
      const btnGoTop_Click = async () => {
        const strThisFuncName = btnGoTop_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseChapterId = CourseChapterId_Static.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置顶的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            coursechapterid: strCourseChapterId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseKnowledges_GoTopAsync(objOrderByData);
          cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `置顶出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 置底
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnGoBottum_Click)
       **/
      const btnGoBottum_Click = async () => {
        const strThisFuncName = btnGoBottum_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseChapterId = CourseChapterId_Static.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置底的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            coursechapterid: strCourseChapterId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseKnowledges_GoBottomAsync(objOrderByData);
          cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `置底出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
        arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
      };

      /**
       * 重序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnReOrder_Click)
       **/
      const btnReOrder_Click = async () => {
        const strThisFuncName = btnReOrder_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        if (objPage.value.PreCheck4Order() == false) return;
        const strCourseChapterId = CourseChapterId_Static.value;
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          const jsonObject = {
            coursechapterid: strCourseChapterId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseKnowledges_ReOrderAsync(objOrderByData);
          cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `重序出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
      };

      /** 设置字段值-kpSourceId
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnSetFldValue_Click)
       **/
      const btnSetKPSourceId_Click = async () => {
        const strThisFuncName = btnSetKPSourceId_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
          if (arrKeyIds.length == 0) {
            alert(`请选择需要设置知识点来源Id的${thisTabName}记录!`);
            return '';
          }
          const strKPSourceId = GetSelectValueInDivObj(
            divVarSet.refDivFunction,
            'ddlKPSourceId_SetFldValue',
          );
          if (strKPSourceId == '') {
            const strMsg = '请输入知识点来源Id(kpSourceId)!';
            console.error('Error: ', strMsg);
            //console.trace();
            alert(strMsg);
            return;
          }
          //console.log('strKPSourceId=' + strKPSourceId);
          //console.log('arrKeyIds=');
          //console.log(arrKeyIds);
          await objPage.value.SetKpSourceId(arrKeyIds, strKPSourceId);
          for (const strKeyId of arrKeyIds) {
            cc_CourseKnowledges_DeleteKeyIdCache(CourseId_Session.value, strKeyId);
          }
          await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
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
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_CourseChapter.value = await cc_CourseChapter_GetArrcc_CourseChapterByCourseId(
          strCourseId,
        ); //查询区域
        courseChapterId_q.value = '0';

        arrcc_KnowledgeModules.value =
          await cc_KnowledgeModulesEx_GetArrcc_KnowledgeModulesByCourseId(strCourseId); //查询区域
        knowledgeModuleId_q.value = '0';

        arrKPSource.value = await KPSource_GetArrKPSource(); //查询区域
        kpSourceId_q.value = '0';

        arrKnowledgeType.value = await KnowledgeType_GetArrKnowledgeType(strCourseId); //查询区域
        knowledgeTypeId_q.value = '0';

        arrcc_Course.value = await cc_Course_GetArrcc_Course(); //查询区域
        courseId_q.value = '0';
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_KnowledgeModules.value =
          await cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId(strCourseId); //功能区域
        knowledgeModuleId_f.value = '0';

        arrcc_CourseKnowledges.value =
          await cc_CourseKnowledgesEx_GetArrcc_CourseKnowledgesByCourseIdWithModuleName(
            strCourseId,
          ); //编辑区域
        courseKnowledgeId_T.value = '0';

        arrcc_CourseChapter.value = await cc_CourseChapter_GetArrcc_CourseChapterByCourseId(
          strCourseId,
        ); //功能区域
        courseChapterId_f.value = '0';

        arrKPSource.value = await KPSource_GetArrKPSource(); //功能区域
        kpSourceId_f.value = '0';
      }

      const strTitle = ref('知识点维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        cc_CourseKnowledgesCRUDEx.vuebtn_Click = btn_Click;
        cc_CourseKnowledgesCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new cc_CourseKnowledgesCRUDEx();
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
      const btnReplaceKnowledge_Click = async () => {
        const strThisFuncName = btnUpdate_Click.name;
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage_Edit.value = new cc_CourseKnowledges_EditEx(
          'cc_CourseKnowledges_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const arrCourseKnowledgeIdS = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrCourseKnowledgeIdS.length == 0) {
          const strMsg = '选择替换的记录数为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          let intAllRecNum = 0;
          for (const strCourseKnowledgeIdS of arrCourseKnowledgeIdS) {
            const intRecNum = await cc_CourseKnowledgesEx_ReplaceCourseKnowledge(
              courseKnowledgeId_T.value,
              strCourseKnowledgeIdS,
              userId,
            );
            cc_CourseKnowledges_DeleteKeyIdCache(CourseId_Session.value, courseKnowledgeId_T.value);
            cc_CourseKnowledges_DeleteKeyIdCache(CourseId_Session.value, strCourseKnowledgeIdS);
            knowledgeQuestionNumStore.deleteQuestionNum(strCourseKnowledgeIdS);
            knowledgeQuestionNumStore.deleteQuestionNum(courseKnowledgeId_T.value);

            cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
            intAllRecNum += intRecNum;
          }
          vQuestionNumByKnowledgeId_ReFreshThisCache(CourseId_Session.value);
          if (intAllRecNum == 0) {
            const strMsg = Format('在替换知识点不成功!');
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          const strMsg = Format('替换知识点成功!共替换了{0}条记录!', intAllRecNum);
          alert(strMsg);
          await objPage.value.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
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
        cc_CourseKnowledgesCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      function btnImportDataFromExcel_Click() {
        isShowImportDataFromExcel.value = true;
      }
      // Example object list
      const objectList = ref([
        { id: 1, name: '知识点1', description: '描述1' },
        { id: 2, name: '知识点2', description: '描述2' },
        { id: 3, name: '知识点3', description: '描述3' },
      ]);

      // Function to export object list to Excel
      const exportToExcel0 = () => {
        try {
          // Convert object list to worksheet
          const worksheet = XLSX.utils.json_to_sheet(objectList.value);

          // Create a new workbook and append the worksheet
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, '知识点列表');

          // Export the workbook to an Excel file
          XLSX.writeFile(workbook, '知识点列表.xlsx');
          alert('导出成功！');
        } catch (error) {
          console.error('导出失败:', error);
          alert('导出失败，请检查控制台日志！');
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

      return {
        showErrorMessage,
        dataListcc_CourseKnowledges,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refcc_CourseKnowledges_Edit,
        refcc_CourseKnowledges_List,
        knowledgeTitle_q,
        courseChapterId_q,
        knowledgeModuleId_q,
        knowledgeTypeId_q,
        courseId_q,
        knowledgeModuleId_f,
        courseChapterId_f,
        arrcc_CourseChapter,
        arrcc_KnowledgeModules,
        arrKnowledgeType,
        arrcc_Course,
        btnClone_Click,
        btnQuery_Click,
        btnCreate_Click,
        btnUpdate_Click,
        btnDelete_Click,
        btnExportExcel_Click,
        btnSetKnowledgeModuleId_Click,
        btnUpMove_Click,
        btnDownMove_Click,
        btnGoTop_Click,
        btnGoBottum_Click,
        btnReOrder_Click,
        btnReplaceKnowledge_Click,
        arrcc_CourseKnowledges,
        courseKnowledgeId_T,
        btnImportDataFromExcel_Click,
        isShowImportDataFromExcel,
        levelNo_q,
        inUse_q,
        inUse_f,
        btnSetInUse_Click,
        kpSourceId_f,
        btnSetKPSourceId_Click,
        arrKPSource,
        kpSourceId_q,
        objectList,
        exportToExcel,
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
        router.push({ name: 'editcc_CourseKnowledges', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new cc_CourseKnowledgesCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>

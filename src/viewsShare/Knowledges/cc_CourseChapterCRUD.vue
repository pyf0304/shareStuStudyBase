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
        style="width: 500px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left">
              <input
                id="txtCourseChapterName_q"
                v-model="courseChapterName_q"
                placeholder="请输入课程章节名称"
                class="form-control form-control-sm"
                style="width: 120px"
              />
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
            id="lblcc_CourseChapterList"
            name="lblcc_CourseChapterList"
            class="col-form-label text-info"
            style="width: 250px"
            >课程章节列表
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
              id="ddlCourseId_f"
              v-model="courseId_f"
              class="form-control form-control-sm"
              style="width: 60px"
            >
              <option v-for="(item, index) in arrcc_Course" :key="index" :value="item.courseId">
                {{ item.courseName }}
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <cc_CourseChapter_ListCom
        ref="refcc_CourseChapter_List"
        :items="dataListcc_CourseChapter"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </cc_CourseChapter_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcc_CourseChapterBy" type="hidden" />
    </div>
    <!--编辑层-->
    <cc_CourseChapter_EditCom ref="refcc_CourseChapter_Edit"></cc_CourseChapter_EditCom>
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
  import {
    GetCheckedKeyIdsInDivObj,
    SetCheckedItem4KeyIdInDiv,
    GetDivObjInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    CourseId_Session,
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refcc_CourseChapter_Edit,
    refcc_CourseChapter_List,
    showErrorMessage,
    dataListcc_CourseChapter,
    emptyRecNumInfo,
    courseChapterName_q,
    courseId_f,
  } from '@/viewsShare/Knowledges/cc_CourseChapterVueShare';
  import {
    cc_CourseChapter_UpMoveAsync,
    cc_CourseChapter_ReFreshCache,
    cc_CourseChapter_DownMoveAsync,
    cc_CourseChapter_GoTopAsync,
    cc_CourseChapter_GoBottomAsync,
    cc_CourseChapter_ReOrderAsync,
  } from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
  import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
  import cc_CourseChapter_EditEx from '@/viewsShare/Knowledges/cc_CourseChapter_EditEx';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import cc_CourseChapterCRUDEx from '@/viewsShare/Knowledges/cc_CourseChapterCRUDEx';
  import cc_CourseChapter_EditCom from '@/viewsShare/Knowledges/cc_CourseChapter_Edit.vue';
  import cc_CourseChapter_ListCom from '@/viewsShare/Knowledges/cc_CourseChapter_List.vue';
  import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
  import { cc_Course_GetArrcc_Course } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
  export default defineComponent({
    name: 'Cc_CourseChapterCRUD',
    components: {
      // 组件注册
      cc_CourseChapter_EditCom,
      cc_CourseChapter_ListCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const objPage = ref<cc_CourseChapterCRUDEx>();
      const objPage_Edit = ref<cc_CourseChapter_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'Cc_CourseChapterCRUD';

      const arrcc_Course = ref<clscc_CourseEN[] | null>([]);

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
          await objPage.value.BindGv_cc_CourseChapter4Func(divVarSet.refDivList);
        } catch (e) {
          const strMsg = `复制记录不成功,${e}.(in ${thisConstructorName}.${strThisFuncName}`;
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
        const strCourseId = CourseId_Session.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要上移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseChapter_UpMoveAsync(objOrderByData);
          cc_CourseChapter_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `上移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseChapter4Func(divVarSet.refDivList);
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
        const strCourseId = CourseId_Session.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要下移的${thisTabName}记录!`);
          return;
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseChapter_DownMoveAsync(objOrderByData);
          cc_CourseChapter_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `下移记录出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseChapter4Func(divVarSet.refDivList);
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
        const strCourseId = CourseId_Session.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置顶的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseChapter_GoTopAsync(objOrderByData);
          cc_CourseChapter_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `置顶出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseChapter4Func(divVarSet.refDivList);
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
        const strCourseId = CourseId_Session.value;
        const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
        if (arrKeyIds.length == 0) {
          alert(`请选择需要置底的${thisTabName}记录!`);
          return '';
        }
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          objOrderByData.KeyIdLst = arrKeyIds;
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseChapter_GoBottomAsync(objOrderByData);
          cc_CourseChapter_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `置底出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseChapter4Func(divVarSet.refDivList);
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
        const strCourseId = CourseId_Session.value;
        try {
          const objOrderByData: clsOrderByData = new clsOrderByData();
          const jsonObject = {
            courseid: strCourseId,
          };
          const jsonStr = JSON.stringify(jsonObject);
          objOrderByData.ClassificationFieldValueLst = jsonStr;
          await cc_CourseChapter_ReOrderAsync(objOrderByData);
          cc_CourseChapter_ReFreshCache(CourseId_Session.value);
        } catch (e) {
          const strMsg = `重序出错。错误:${e}.(in ${thisConstructorName}.${strThisFuncName}`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
          return;
        }
        await objPage.value.BindGv_cc_CourseChapter4Func(divVarSet.refDivList);
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
        await objPage.value.BindGv_cc_CourseChapter4Func(refDivList.value);
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
        objPage_Edit.value = new cc_CourseChapter_EditEx('cc_CourseChapter_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_cc_CourseChapter(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clscc_CourseChapterEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new cc_CourseChapter_EditEx('cc_CourseChapter_EditEx', objPage.value);
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCourseChapterId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (IsNullOrEmpty(strCourseChapterId) == true) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_cc_CourseChapter(opType.value);
          if (bolIsSuccess == false) return;
          const update = await objPage_Edit.value.UpdateRecord(strCourseChapterId);
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
        return clscc_CourseChapterEN._CurrTabName;
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
          await objPage.value.BindGv_cc_CourseChapter4Func(divVarSet.refDivList);
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
          await objPage.value.ExportExcel_cc_CourseChapterCache();
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
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {
        arrcc_Course.value = await cc_Course_GetArrcc_Course(); //功能区域
        courseId_f.value = '0';
      }

      const strTitle = ref('课程章节维护');
      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        cc_CourseChapterCRUDEx.vuebtn_Click = btn_Click;
        cc_CourseChapterCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new cc_CourseChapterCRUDEx();
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
        cc_CourseChapterCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListcc_CourseChapter,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refcc_CourseChapter_Edit,
        refcc_CourseChapter_List,
        courseChapterName_q,
        courseId_f,
        arrcc_Course,
        btnClone_Click,
        btnUpMove_Click,
        btnDownMove_Click,
        btnGoTop_Click,
        btnGoBottum_Click,
        btnReOrder_Click,
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
        router.push({ name: 'editcc_CourseChapter', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new cc_CourseChapterCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>

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
            <td class="text-right">
              <label
                id="lblCourseCode_q"
                name="lblCourseCode_q"
                class="col-form-label text-right"
                style="width: 90px"
                >课程代码
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCourseCode_q"
                v-model="courseCode_q"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCourseName_q"
                name="lblCourseName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >课程名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCourseName_q"
                v-model="courseName_q"
                class="form-control form-control-sm"
                style="width: 200px"
              />
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
            id="lblcc_CourseList"
            name="lblcc_CourseList"
            class="col-form-label text-info"
            style="width: 250px"
            >课程列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <cc_Course_ListCom
        ref="refcc_Course_List"
        :items="dataListcc_Course"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </cc_Course_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcc_CourseBy" type="hidden" />
    </div>
    <!--编辑层-->
    <cc_Course_EditCom ref="refcc_Course_Edit"></cc_Course_EditCom>
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
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refcc_Course_Edit,
    refcc_Course_List,
  } from '@/viewsShare/CourseLearning/cc_CourseVueShare';
  import {
    showErrorMessage,
    dataListcc_Course,
    emptyRecNumInfo,
    courseCode_q,
    courseName_q,
  } from '@/viewsShare/CourseLearning/cc_CourseVueShare';
  import cc_CourseCRUDEx from '@/viewsShare/CourseLearning/cc_CourseCRUDEx';
  import cc_Course_EditCom from '@/viewsShare/CourseLearning/cc_Course_Edit.vue';
  import cc_Course_ListCom from '@/viewsShare/CourseLearning/cc_Course_List.vue';
  import cc_Course_EditEx from '@/viewsShare/CourseLearning/cc_Course_EditEx';
  export default defineComponent({
    name: 'CcCourseCRUD',
    components: {
      // 组件注册
      cc_Course_EditCom,
      cc_Course_ListCom,
    },

    setup() {
      const objPage = ref<cc_CourseCRUDEx>();
      const objPage_Edit = ref<cc_Course_EditEx>();
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('课程维护');

      onMounted(() => {
        BindDdl4QryRegion();
        BindDdl4FeatureRegion();
        cc_CourseCRUDEx.vuebtn_Click = btn_Click;
        cc_CourseCRUDEx.GetPropValue = GetPropValue;
        const objPage = new cc_CourseCRUDEx();
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
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
          await objPage.value.ExportExcel_cc_CourseCache();
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

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        cc_CourseCRUDEx.vuebtn_Click = btn_Click;
        cc_CourseCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new cc_CourseCRUDEx();
        await objPage.value.PageLoadCache();
      });
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
        cc_CourseCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListcc_Course,
        emptyRecNumInfo,
        strTitle,
        btn_Click,

        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        courseCode_q,
        courseName_q,
        refcc_Course_Edit,
        refcc_Course_List,
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
        router.push({ name: 'editcc_Course', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new cc_CourseCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>

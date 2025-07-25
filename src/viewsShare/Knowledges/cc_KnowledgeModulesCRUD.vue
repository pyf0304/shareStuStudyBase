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
                id="txtKnowledgeModuleName_q"
                v-model="knowledgeModuleName_q"
                placeholder="知识点模块名称"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
            <!-- <td class="text-right">
              <label
                id="lblCourseId_q"
                name="lblCourseId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >课程Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseId_q"
                name="ddlCourseId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              ></select>
            </td> -->
            <td class="nav-item ml-3">
              <button
                id="btnQuery"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Query', '')"
                >查询</button
              >
            </td>
            <td class="nav-item ml-3">
              <button
                id="btnExportExcel"
                class="btn btn-outline-warning btn-sm text-nowrap"
                @click="btn_Click('ExportExcel', '')"
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
            id="lblcc_KnowledgeModulesList"
            name="lblcc_KnowledgeModulesList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点模块列表
          </label>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortcc_KnowledgeModulesBy" type="hidden" />
    </div>
    <!--编辑层-->
    <cc_KnowledgeModules_EditCom ref="refcc_KnowledgeModules_Edit"></cc_KnowledgeModules_EditCom>
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
  import cc_KnowledgeModulesCRUDEx from '@/viewsShare/Knowledges/cc_KnowledgeModulesCRUDEx';
  import { cc_KnowledgeModulesCRUD } from '@/viewsBase/Knowledges/cc_KnowledgeModulesCRUD';
  import cc_KnowledgeModules_EditCom from '@/viewsShare/Knowledges/cc_KnowledgeModules_Edit.vue';
  import { cc_KnowledgeModules_Edit } from '@/viewsBase/Knowledges/cc_KnowledgeModules_Edit';
  import {
    refcc_KnowledgeModules_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    knowledgeModuleName_q,
  } from './cc_KnowledgeModulesVueShare';
  export default defineComponent({
    name: 'CcKnowledgeModulesCRUD',
    components: {
      // 组件注册
      cc_KnowledgeModules_EditCom,
    },
    setup() {
      const strTitle = ref('知识点模块维护');

      onMounted(() => {
        cc_KnowledgeModulesCRUDEx.vuebtn_Click = btn_Click;
        cc_KnowledgeModulesCRUDEx.GetPropValue = GetPropValue;
        const objPage = new cc_KnowledgeModulesCRUDEx();
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
        cc_KnowledgeModulesCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refcc_KnowledgeModules_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        knowledgeModuleName_q,
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

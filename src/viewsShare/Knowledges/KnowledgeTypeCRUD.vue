<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
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
                id="lblKnowledgeTypeName_q"
                name="lblKnowledgeTypeName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点类型名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKnowledgeTypeName_q"
                name="txtKnowledgeTypeName_q"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblKnowledgeTypeList"
            name="lblKnowledgeTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点类型列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
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
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortKnowledgeTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <KnowledgeType_EditCom ref="refKnowledgeType_Edit"></KnowledgeType_EditCom>
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
  import KnowledgeTypeCRUDEx from '@/viewsShare/Knowledges/KnowledgeTypeCRUDEx';
  import { KnowledgeTypeCRUD } from '@/viewsBase/Knowledges/KnowledgeTypeCRUD';
  import KnowledgeType_EditCom from '@/viewsShare/Knowledges/KnowledgeType_Edit.vue';
  import { KnowledgeType_Edit } from '@/viewsBase/Knowledges/KnowledgeType_Edit';
  import {
    refKnowledgeType_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/viewsShare/Knowledges/KnowledgeTypeVueShare';
  export default defineComponent({
    name: 'KnowledgeTypeCRUD',
    components: {
      // 组件注册
      KnowledgeType_EditCom,
    },
    setup() {
      const strTitle = ref('知识点类型维护');

      onMounted(() => {
        const objPage = new KnowledgeTypeCRUDEx();
        objPage.PageLoadCache();
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
        KnowledgeTypeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refKnowledgeType_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>

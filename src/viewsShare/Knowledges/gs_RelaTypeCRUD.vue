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
                id="lblRelaTypeName_q"
                name="lblRelaTypeName_q"
                class="col-form-label text-right"
                style="width: 90px"
                >关系类型名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRelaTypeName_q"
                name="txtRelaTypeName_q"
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
            id="lblgs_RelaTypeList"
            name="lblgs_RelaTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点关系类型表列表
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
      <input id="hidSortgs_RelaTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_RelaType_EditCom ref="refgs_RelaType_Edit"></gs_RelaType_EditCom>
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
  import gs_RelaTypeCRUDEx from '@/viewsShare/Knowledges/gs_RelaTypeCRUDEx';
  import { gs_RelaTypeCRUD } from '@/viewsBase/Knowledges/gs_RelaTypeCRUD';
  import gs_RelaType_EditCom from '@/viewsShare/Knowledges/gs_RelaType_Edit.vue';
  import { gs_RelaType_Edit } from '@/viewsBase/Knowledges/gs_RelaType_Edit';
  import {
    refgs_RelaType_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/viewsShare/Knowledges/gs_RelaTypeVueShare';
  export default defineComponent({
    name: 'GsRelaTypeCRUD',
    components: {
      // 组件注册
      gs_RelaType_EditCom,
    },
    setup() {
      const strTitle = ref('知识点关系类型表维护');

      onMounted(() => {
        const objPage = new gs_RelaTypeCRUDEx();
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
        gs_RelaTypeCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refgs_RelaType_Edit,
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

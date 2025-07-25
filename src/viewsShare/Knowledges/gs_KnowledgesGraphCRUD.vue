<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->

    <div id="tabLayout" class="tab_layout">
      <!-- -- 标题层 -- -->

      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>知识点逻辑图</cite>
          </a>
          <label id="lblMsg_List" name="lblMsg_List"></label>
        </span>
        <a
          class="layui-btn layui-btn-small"
          style="line-height: 1.6em; margin: 0px 0px 0px 5px; float: right"
          @click="location_reload()"
          title="刷新"
        >
          <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
        </a>
      </div>

      <!-- -- 查询层 -- -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          style="width: 30%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tbody>
            <tr>
              <td class="text-left">
                <input
                  id="txtKnowledgeGraphName_q"
                  name="txtKnowledgeGraphName_q"
                  placeholder="知识点图形名称"
                  class="layui-input"
                  style="width: 300px"
                />
              </td>

              <td>
                <input
                  id="txtCreateUser_q"
                  name="txtCreateUser_q"
                  placeholder="创建用户"
                  class="layui-input"
                  style="width: 150px"
                />
              </td>
              <td>
                <input
                  id="txtUpdDate_q"
                  name="txtUpdDate_q"
                  placeholder="编辑日期"
                  class="layui-input"
                  style="width: 150px"
                />
              </td>
              <td>
                <button
                  class="layui-btn"
                  lay-submit=""
                  lay-filter="sreach"
                  @click="btn_Click('Query', '')"
                >
                  <i class="layui-icon">&#xe615;</i>
                </button>
              </td>
            </tr>
          </tbody></table
        >
      </div>

      <!-- -- 功能区 -- -->

      <div id="divFunction" ref="refDivFunction" class="layui-card-header">
        <div class="btn-group btn-group-sm">
          <button
            id="btnAddNewRecordWithMaxId"
            name="btnAddNewRecordWithMaxId"
            class="btn btn-success"
            @click="btn_Click('AddNewRecordWithMaxId', '')"
            ><i class="layui-icon">&#xe654;</i>添加</button
          >

          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-info"
            @click="btn_Click('Update', '')"
            ><i class="layui-icon">&#xe642;</i>修改</button
          >

          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-danger"
            @click="btn_Click('Delete', '')"
            ><i class="layui-icon">&#xe640;</i>删除</button
          >

          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-secondary"
            @click="btn_Click('ExportExcel', '')"
            ><i class="layui-icon">&#xe605;</i>导出Excel</button
          >
        </div>
        <div class="btn-group btn-group-sm">
          <button
            class="btn btn-primary"
            id="btnRecommend"
            style="display: none"
            name="btnRecommend"
            @click="btnRecommend_Click(1)"
            ><i class="layui-icon">&#xe63c;</i>推荐</button
          >
          <button
            class="btn btn-danger"
            id="btnRevokeRecommend"
            style="display: none"
            name="btnRevokeRecommend"
            @click="btnRecommend_Click(0)"
            ><i class="layui-icon">&#xe669;</i>撤销推荐</button
          >
        </div>
        <div class="btn-group btn-group-sm">
          <button
            class="btn btn-primary"
            id="btnAnswer"
            style="display: none"
            name="btnAnswer"
            @click="btnAnswer_Click(1)"
            ><i class="layui-icon">&#xe63c;</i>标准答案</button
          >
          <button
            class="btn btn-danger"
            id="btnRevokeAnswer"
            style="display: none"
            name="btnRevokeAnswer"
            @click="btnAnswer_Click(0)"
            ><i class="layui-icon">&#xe669;</i>撤销答案</button
          >
        </div>
      </div>
      <!-- -- 列表层 -- -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" class="div_List"> </div>
        <div id="divPager" class="pager"> </div>
      </div>
      <!-- -- 编辑层 -- -->
      <div id="divEdit" value="1"></div>
    </div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortgs_KnowledgesGraphBy" type="hidden" value="" />

    <input id="hidRecommend" type="hidden" />
    <input id="hidAnswer" type="hidden" />

    <!--编辑层-->
    <gs_KnowledgesGraph_EditCom ref="refgs_KnowledgesGraph_Edit"></gs_KnowledgesGraph_EditCom>
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
  import gs_KnowledgesGraphCRUDEx from '@/viewsShare/Knowledges/gs_KnowledgesGraphCRUDEx';
  import { gs_KnowledgesGraphCRUD } from '@/viewsBase/Knowledges/gs_KnowledgesGraphCRUD';
  import gs_KnowledgesGraph_EditCom from '@/viewsShare/Knowledges/gs_KnowledgesGraph_Edit.vue';
  import { gs_KnowledgesGraph_Edit } from '@/viewsBase/Knowledges/gs_KnowledgesGraph_Edit';
  import {
    refgs_KnowledgesGraph_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/viewsShare/Knowledges/gs_KnowledgesGraphVueShare';
  export default defineComponent({
    name: 'GsKnowledgesGraphCRUD',
    components: {
      // 组件注册
      gs_KnowledgesGraph_EditCom,
    },
    setup() {
      const strTitle = ref('知识点逻辑图维护');

      onMounted(() => {
        const objPage = new gs_KnowledgesGraphCRUDEx();
        objPage.PageLoad();
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
        gs_KnowledgesGraphCRUDEx.btn_Click(strCommandName, strKeyId);
      }

      //推荐
      function btnRecommend_Click(key: number) {
        // const strKeyId = GetFirstCheckedKeyId('divList');
        // if (strKeyId == '') {
        //   alert('请选择需要查看的记录！');
        //   return;
        // }
        $('#hidRecommend').val(key);
        const objPage = new gs_KnowledgesGraphCRUDEx();
        objPage.btnRecommend_Click();
      }

      //标准答案
      function btnAnswer_Click(key: number) {
        // const strKeyId = GetFirstCheckedKeyId('divList');
        // if (strKeyId == '') {
        //   alert('请选择需要查看的记录！');
        //   return;
        // }
        $('#hidAnswer').val(key);
        const objPage = new gs_KnowledgesGraphCRUDEx();
        objPage.btnAnswer_Click();
      }
      function location_reload() {}
      return {
        strTitle,
        btn_Click,
        refgs_KnowledgesGraph_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        btnAnswer_Click,
        btnRecommend_Click,
        location_reload,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>

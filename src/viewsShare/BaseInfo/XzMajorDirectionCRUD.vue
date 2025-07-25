<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层   -->
      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">专业方向</a>
          <a>
            <cite>用户专业方向维护</cite>
          </a>
          <label id="lblMsg_List" name="lblMsg_List"></label>
        </span>
        <a
          class="layui-btn layui-btn-small"
          style="line-height: 1.6em; margin-top: 3px; float: right"
          @click="location_reload()"
          title="刷新"
        >
          <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
        </a>
      </div>
      <!-- 查询层 -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          name="tabQuery"
          style="width: 20%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tbody>
            <tr>
              <td>
                <select id="ddlIdXzMajor_q" class="form-control" style="width: 200px" />
              </td>

              <td>
                <input
                  id="txtMajorDirectionName_q"
                  name="txtMajorDirectionName_q"
                  placeholder="专业方向"
                  class="layui-input"
                  style="width: 200px"
                />
              </td>

              <td>
                <button
                  class="layui-btn"
                  lay-submit=""
                  lay-filter="sreach"
                  @click="btn_Click('Query', '')"
                >
                  <font-awesome-icon icon="search" />
                </button>
              </td>
            </tr>
            <tr> </tr>
          </tbody>
        </table>
      </div>
      <!-- 功能区 -->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item" style="width: 100%">
            <label
              id="lblXzMajorDirectionList"
              name="lblXzMajorDirectionList"
              class="col-form-label text-info"
              style="width: 250px"
            >
            </label>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('AddNewRecord', '')"
              >添加专业方向</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('UpdateRecord', '')"
              >修改专业方向</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('DelRecord', '')"
              >删除专业方向</button
            >
          </li>
        </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager" value="1"> </div>
      </div>
      <!-- 编辑层 -->
      <div class="modal" :class="{ show: modalActive }">
        <div class="modal-dialog">
          <div class="modal-content" style="width: 800px">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">模态框（Modal）标题</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <table
                id="tabwucXzMajorDirection"
                name="tabwucXzMajorDirection"
                style="width: 600px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tbody>
                  <tr style="display: none">
                    <td class="NameTD">
                      <label
                        id="lblMajorDirectionId"
                        name="lblMajorDirectionId"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        研究方向Id
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtMajorDirectionId"
                        name="txtMajorDirectionId"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblid_XzMajor"
                        name="lblid_XzMajor"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        专业
                      </label>
                    </td>
                    <td class="ValueTD">
                      <select id="ddlIdXzMajor" class="form-control" style="width: 200px" />
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblMajorDirectionName"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        研究方向名
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input id="txtMajorDirectionName" class="form-control" style="width: 200px" />
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblMajorDirectionENName"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        研究英文名
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtMajorDirectionENName"
                        name="txtMajorDirectionENName"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblMajorDirectionExplain"
                        name="lblMajorDirectionExplain"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        专业方向说明
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtMajorDirectionExplain"
                        name="txtMajorDirectionExplain"
                        class="form-control"
                        style="width: 500px; height: 80px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD"></td>
                    <td class="ValueTD">
                      <span class="form-control" style="width: 200px">
                        <input
                          type="checkbox"
                          id="chkIsVisible"
                          name="chkIsVisible"
                          Text="是否显示"
                        /><label for="chkIsVisible">是否显示</label>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblMemo"
                        name="lblMemo"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        备注
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtMemo"
                        name="txtMemo"
                        class="form-control"
                        style="width: 500px; height: 40px"
                      />
                    </td>
                  </tr> </tbody
              ></table>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                >关闭</button
              >
              <button
                id="btnOKUpd"
                type="button"
                class="btn btn-primary btn-sm"
                @click="btn_Click('mySubmit', '')"
                >添加</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvXzMajorDirectionBy" type="hidden" value="" />

    <input id="hidUserId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { XzMajorDirectionCRUDEx } from '@/viewsShare/BaseInfo/XzMajorDirectionCRUDEx';
  import { XzMajorDirectionCRUD } from '@/viewsBase/BaseInfo/XzMajorDirectionCRUD';
  import XzMajorDirection_EditCom from '@/viewsShare/BaseInfo/XzMajorDirection_Edit.vue';
  import { XzMajorDirection_Edit } from '@/viewsBase/BaseInfo/XzMajorDirection_Edit';
  import {
    refXzMajorDirection_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from '@/viewsShare/BaseInfo/XzMajorDirectionVueShare';
  export default defineComponent({
    name: 'XzMajorDirectionCRUD',
    components: {
      // 组件注册
      XzMajorDirection_EditCom,
    },
    setup() {
      const modalActive = ref(false);

      const showModal = () => {
        modalActive.value = true;
      };

      const hideModal = () => {
        modalActive.value = false;
      };

      const strTitle = ref('专业方向维护');

      onMounted(() => {
        const objPage = new XzMajorDirectionCRUDEx();
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
        XzMajorDirectionCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refXzMajorDirection_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        showModal,
        modalActive,
        hideModal,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style scoped>
  .modal {
    display: none;
  }

  .modal.show {
    display: block;
  }
</style>

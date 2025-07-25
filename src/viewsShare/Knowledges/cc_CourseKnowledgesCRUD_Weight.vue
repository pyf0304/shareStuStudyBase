<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->

      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">用户管理</a>
          <a>
            <cite>知识点维护</cite>
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
          style="width: 30%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tbody>
            <tr>
              <td> <RadioButton :options="options" @optionSelected="handleOptionSelected" /></td>
              <!-- <td>
              <button
                class="layui-btn"
                lay-submit=""
                lay-filter="sreach"
                @click="btn_Click('Query', '')"
              >
                <font-awesome-icon icon="search" />
              </button>
            </td> -->
            </tr>
          </tbody></table
        >
      </div>
      <!-- 功能区 -->
      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblcc_CourseKnowledgesList"
              name="lblcc_CourseKnowledgesList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              课程知识点列表
            </label>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info text-nowrap"
              @click="btn_Click('AddNewRecord', '')"
              >添加</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info text-nowrap"
              @click="btn_Click('UpdateRecord', '')"
              >修改</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info text-nowrap"
              @click="btn_Click('DelRecord', '')"
              >删除</button
            >
          </li>
          <li class="nav-item ml-3">
            <div class="btn-group" role="group" aria-label="Basic example">
              <select
                id="ddlKnowledgeModuleId_SetFldValue"
                name="ddlKnowledgeModuleId_SetFldValue"
                class="form-control form-control-sm"
                style="width: 100px"
              ></select>
              <button
                id="btnSetKnowledgeModuleId"
                name="btnSetKnowledgeModuleId"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('SetKnowledgeModuleId', '')"
                >设置知识点模块</button
              >
            </div>
          </li>
        </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList1" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager" value="1"> </div>
      </div>
      <!-- 编辑层 -->
      <div class="modal" :class="{ show: divEditRegion }">
        <div class="modal-dialog">
          <div class="modal-content" style="width: 800px">
            <div class="modal-header">
              <h4 class="modal-title" id="myModallabel">模态框（Modal）标题</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <table
                id="tabwuccc_CourseKnowledges"
                style="width: 600px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tbody>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblCourseKnowledgeId"
                        name="lblCourseKnowledgeId"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        课程知识点Id
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtCourseKnowledgeId"
                        name="txtCourseKnowledgeId"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblKnowledgeName"
                        name="lblKnowledgeName"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        知识点名称
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtKnowledgeName"
                        name="txtKnowledgeName"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblKnowledgeTitle"
                        name="lblKnowledgeTitle"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        知识点标题
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtKnowledgeTitle"
                        name="txtKnowledgeTitle"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblKnowledgeContent"
                        name="lblKnowledgeContent"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        知识点内容
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtKnowledgeContent"
                        name="txtKnowledgeContent"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblCourseId"
                        name="lblCourseId"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        课程Id
                      </label>
                    </td>
                    <td class="ValueTD">
                      <select
                        id="ddlCourseId"
                        name="ddlCourseId"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblCourseChapterId"
                        name="lblCourseChapterId"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        课程章节ID
                      </label>
                    </td>
                    <td class="ValueTD">
                      <select
                        id="ddlCourseChapterId"
                        name="ddlCourseChapterId"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblUserId"
                        name="lblUserId"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        用户ID
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtUserId"
                        name="txtUserId"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblUploadDate"
                        name="lblUploadDate"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        上传时间
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtUploadDate"
                        name="txtUploadDate"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD"></td>
                    <td class="ValueTD">
                      <span class="form-control" style="width: 200px">
                        <input
                          type="checkbox"
                          id="chkIsShow"
                          name="chkIsShow"
                          Text="是否启用"
                        /><label for="chkIsShow">是否启用</label>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD"></td>
                    <td class="ValueTD">
                      <span class="form-control" style="width: 200px">
                        <input
                          type="checkbox"
                          id="chkIsCast"
                          name="chkIsCast"
                          Text="是否播放"
                        /><label for="chkIsCast">是否播放</label>
                      </span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblLikeCount"
                        name="lblLikeCount"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        资源喜欢数量
                      </label>
                    </td>
                    <td class="ValueTD">
                      <input
                        id="txtLikeCount"
                        name="txtLikeCount"
                        class="form-control"
                        style="width: 200px"
                      />
                    </td>
                    <td> </td>
                    <td></td>
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
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr> </tbody
              ></table>
            </div>
            <div class="modal-footer">
              <button id="btnCancel" type="button" class="btn btn-default" data-dismiss="modal"
                >关闭</button
              >
              <button
                id="btnOKUpd"
                type="button"
                class="btn btn-primary"
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
    <input id="hidUserId" type="hidden" value="@Model.seUserId" />
    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvcc_CourseKnowledgesBy" type="hidden" value="" />
    <cc_CourseKnowledges_EditCom ref="refcc_CourseKnowledges_Edit"></cc_CourseKnowledges_EditCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import cc_CourseKnowledgesCRUDEx from '@/viewsShare/Knowledges/cc_CourseKnowledgesCRUDEx';
  import { cc_CourseKnowledgesCRUD } from '@/viewsBase/Knowledges/cc_CourseKnowledgesCRUD';
  import cc_CourseKnowledges_EditCom from '@/viewsShare/Knowledges/cc_CourseKnowledges_Edit.vue';
  import { cc_CourseKnowledges_Edit } from '@/viewsBase/Knowledges/cc_CourseKnowledges_Edit';
  import RadioButton from '@/ts/components/ButtonRadio.vue';
  import { clsCboObject } from '@/ts/PubFun/clsCboObject';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

  import { cc_KnowledgeModules_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgeModulesWApi';
  import { clscc_KnowledgeModulesEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN';
  import {
    refcc_CourseKnowledges_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
  } from './cc_CourseKnowledgesVueShare';
  export default defineComponent({
    name: 'CcCourseKnowledgesCRUD',
    components: {
      // 组件注册
      cc_CourseKnowledges_EditCom,
      RadioButton,
    },
    setup() {
      const options = ref<Array<clsCboObject>>([
        { text: 'Option 1', value: '01' },
        { text: 'Option 2', value: '02' },
        { text: 'Option 3', value: '03' },
        { text: 'Option 4', value: '04' },
        { text: 'Option 5', value: '05' },
      ]);
      const selectedOption = ref<string | null>(null);

      const handleOptionSelected = (option: string) => {
        selectedOption.value = option;
        knowledgeModuleId.value = option;
        btn_Click('Query_Weight', '');
      };
      const knowledgeModuleId = ref('');
      const divEditRegion = ref(false);
      const strTitle = ref('知识点维护');

      onMounted(async () => {
        cc_CourseKnowledgesCRUDEx.vuebtn_Click = btn_Click;
        cc_CourseKnowledgesCRUDEx.GetPropValue = GetPropValue;
        await getKnowledgeModules();
        const objPage = new cc_CourseKnowledgesCRUDEx();
        objPage.PageLoad_Weight();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'knowledgeModuleId':
            return knowledgeModuleId.value;
          default:
            return '';
        }
      }
      async function getKnowledgeModules() {
        const strCourseId: string = clsPubLocalStorage.courseId;
        const strWhere = `${clscc_KnowledgeModulesEN.con_CourseId} = '${strCourseId}'`;
        const arrcc_KnowledgeModules = await cc_KnowledgeModules_GetObjLstAsync(strWhere);
        if (arrcc_KnowledgeModules.length == 0) return;
        knowledgeModuleId.value = arrcc_KnowledgeModules[0].knowledgeModuleId;
        console.log('knowledgeModuleId:', knowledgeModuleId.value);
        // options.value.splice(0, options.value.length);
        const newOptions: Array<clsCboObject> = new Array<clsCboObject>();
        for (const obj of arrcc_KnowledgeModules) {
          const objCbo = new clsCboObject(obj.knowledgeModuleId, obj.knowledgeModuleName);
          newOptions.push(objCbo);
        }
        options.value = newOptions;
        // console.log('options.value', options.value);
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecord':
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
      return {
        strTitle,
        btn_Click,
        refcc_CourseKnowledges_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        divEditRegion,

        options,
        selectedOption,
        handleOptionSelected,
        knowledgeModuleId,
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

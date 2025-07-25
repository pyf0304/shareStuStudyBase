<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="max-width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left">
              <input
                id="txtKnowledgeTitle_q"
                v-model="knowledgeTitle_q"
                placeholder="请填入知识点标题"
                class="form-control form-control-sm"
                style="width: 120px"
              />
            </td>

            <td class="text-left">
              <select
                id="ddlCourseChapterId_q"
                v-model="courseChapterId_q"
                title="章节"
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
                title=""
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
                id="ddlKnowledgeTypeId_q"
                v-model="knowledgeTypeId_q"
                title="知识点类型"
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
              <button
                id="btnQuery"
                name="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnQuery_Click"
                >查询</button
              >
            </td>
            <td>
              <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--功能区-->

    <!-- <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
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
        <li>
          <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
          </label>
        </li>
      </ul>
    </div> -->
    <!--列表层-->
    <div id="divList_DialogSel" ref="refDivList" class="div_List">
      <cc_CourseKnowledges_ListCom
        ref="refcc_CourseKnowledges_List"
        :items="dataListcc_CourseKnowledges"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
        @on-submit-sel="SubmitSelectKnowledge"
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
  import router from '@/router';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import {
    GetCheckedKeyIdsInDivObj,
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
    dataColumn,
    knowledgeTitle_q,
    courseChapterId_q,
    knowledgeModuleId_q,
    knowledgeTypeId_q,
    courseId_q,
    knowledgeModuleId_f,
    courseChapterId_f,
    addiCondition,
  } from '@/viewsShare/Knowledges/cc_CourseKnowledges_DialogSelVueShare';
  import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
  import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
  import cc_CourseKnowledges_EditEx from '@/viewsShare/Knowledges/cc_CourseKnowledges_EditEx';
  import cc_CourseKnowledgesCRUDEx from '@/viewsShare/Knowledges/cc_CourseKnowledgesCRUDEx';
  import cc_CourseKnowledges_EditCom from '@/viewsShare/Knowledges/cc_CourseKnowledges_Edit.vue';
  import cc_CourseKnowledges_ListCom from '@/viewsShare/Knowledges/cc_CourseKnowledges_List.vue';
  import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
  import { clscc_KnowledgeModulesEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN';
  import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
  import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
  import { cc_CourseChapter_GetArrcc_CourseChapterByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
  import { cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgeModulesWApi';
  import { KnowledgeType_GetArrKnowledgeType } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeTypeWApi';
  import { cc_Course_GetArrcc_Course } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
  export default defineComponent({
    name: 'Cc_CourseKnowledgesCRUD',
    components: {
      // 组件注册
      cc_CourseKnowledges_EditCom,
      cc_CourseKnowledges_ListCom,
    },
    props: {
      addiCondition: {
        type: String,
        required: true,
        default: '',
      },
    },
    emits: ['on-submit-sel'],
    setup(props, { emit }) {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      CourseChapterId_Static.value = '';
      const objPage = ref<cc_CourseKnowledgesCRUDEx>();
      const objPage_Edit = ref<cc_CourseKnowledges_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'Cc_CourseKnowledgesCRUD';

      const arrcc_CourseChapter = ref<clscc_CourseChapterEN[] | null>([]);
      const arrcc_KnowledgeModules = ref<clscc_KnowledgeModulesEN[] | null>([]);
      const arrKnowledgeType = ref<clsKnowledgeTypeEN[] | null>([]);
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
          await objPage.value.BindGv_cc_CourseKnowledges4Func_DialogSel(divVarSet.refDivList);
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
        await objPage.value.BindGv_cc_CourseKnowledges4Func_DialogSel(refDivList.value);
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
          await cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId(strCourseId); //查询区域
        knowledgeModuleId_q.value = '0';

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

        arrcc_CourseChapter.value = await cc_CourseChapter_GetArrcc_CourseChapterByCourseId(
          strCourseId,
        ); //功能区域
        courseChapterId_f.value = '0';
      }

      const strTitle = ref('知识点维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        addiCondition.value = props.addiCondition;
        cc_CourseKnowledgesCRUDEx.vuebtn_Click = btn_Click;
        cc_CourseKnowledgesCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new cc_CourseKnowledgesCRUDEx();
        await objPage.value.PageLoad_GialogSel();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function SubmitSelectKnowledge(data: any) {
        console.log('data:', data);
        emit('on-submit-sel', data);
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
        cc_CourseKnowledgesCRUDEx.btn_Click(strCommandName, strKeyId);
      }
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

        dataColumn,
        SubmitSelectKnowledge,
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

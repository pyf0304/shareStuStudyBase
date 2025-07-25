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
            <td class="text-right">
              <label
                id="lblIdCurrEduCls_q"
                name="lblIdCurrEduCls_q"
                class="col-form-label text-right"
                style="width: 90px"
                >教学班
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdCurrEduCls_q"
                v-model="idCurrEduCls_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrvCurrEduCls_Sim"
                  :key="index"
                  :value="item.idCurrEduCls"
                >
                  {{ item.eduClsName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblUserId_q"
                name="lblUserId_q"
                class="col-form-label text-right"
                style="width: 90px"
                >用户
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserId_q"
                v-model="userId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrvCurrEduClsStu_Sim"
                  :key="index"
                  :value="item.stuId"
                >
                  {{ item.stuName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblPassed_q"
                name="lblPassed_q"
                class="col-form-label text-right"
                style="width: 90px"
                >是否合格
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlbPassed_q"
                v-model="passed_q"
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
          </tr>
          <tr>
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
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblge_UserScoreList"
            name="lblge_UserScoreList"
            class="col-form-label text-info"
            style="width: 250px"
            >用户得分列表
          </label>
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <ge_UserScore_ListCom
        ref="refge_UserScore_List"
        :items="dataListge_UserScore"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </ge_UserScore_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortge_UserScoreBy" type="hidden" />
    </div>
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
    GetCheckedKeyLstsInDivObj,
    GetCheckedKeyIdsInDivObj,
    GetFirstCheckedKeyIdInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refge_UserScore_List,
    showErrorMessage,
    dataListge_UserScore,
    emptyRecNumInfo,
    IdCurrEduCls_Session,
    CourseId_Session,
    idCurrEduCls_q,
    userId_q,
    courseId_q,
    passed_q,
  } from '@/viewsShare/GameLearn/ge_UserScoreVueShare';
  import { clsge_UserScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserScoreEN';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import ge_UserScoreCRUDEx from '@/viewsShare/GameLearn/ge_UserScoreCRUDEx';
  import ge_UserScore_ListCom from '@/viewsShare/GameLearn/ge_UserScore_List.vue';
  import { clsvCurrEduCls_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN';
  import { clsvCurrEduClsStu_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStu_SimEN';
  import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
  import { BindDdl_TrueAndFalseInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
  import { vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
  import { vCurrEduClsStu_Sim_GetArrvCurrEduClsStu_SimByEduClsOrByStuName } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStu_SimWApi';
  import { cc_Course_GetArrcc_Course } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
  export default defineComponent({
    name: 'Ge_UserScoreCRUD',
    components: {
      // 组件注册
      ge_UserScore_ListCom,
    },

    setup() {
      IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const objPage = ref<ge_UserScoreCRUDEx>();
      const opType = ref('');
      const thisConstructorName = 'Ge_UserScoreCRUD';

      const arrvCurrEduCls_Sim = ref<clsvCurrEduCls_SimEN[] | null>([]);
      const arrvCurrEduClsStu_Sim = ref<clsvCurrEduClsStu_SimEN[] | null>([]);
      const arrcc_Course = ref<clscc_CourseEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_ge_UserScore4Func(refDivList.value);
      };

      /**
       * 获取当前界面的主表名
       **/
      const thisTabName = () => {
        return clsge_UserScoreEN._CurrTabName;
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
          const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
          if (arrKeyLsts.length == 0) {
            alert(`请选择需要删除的${thisTabName}记录!`);
            return '';
          }
          if (confirmDel(arrKeyLsts.length) == false) {
            return;
          }
          await objPage.value.DelMultiRecord_KeyLst(arrKeyLsts);
          await objPage.value.BindGv_ge_UserScore4Func(divVarSet.refDivList);
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
        await objPage.value.ExportExcel_ge_UserScore4Func();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储
        const strIdCurrEduCls = IdCurrEduCls_Session.value; //静态变量;//Session存储、local存储

        arrvCurrEduCls_Sim.value = await vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId(
          strCourseId,
        ); //查询区域
        idCurrEduCls_q.value = '0';

        arrvCurrEduClsStu_Sim.value =
          await vCurrEduClsStu_Sim_GetArrvCurrEduClsStu_SimByEduClsOrByStuName(strIdCurrEduCls); //查询区域
        userId_q.value = '0';

        BindDdl_TrueAndFalseInDivObj(divVarSet.refDivQuery, 'ddlbPassed_q');
      }

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('用户得分维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        ge_UserScoreCRUDEx.vuebtn_Click = btn_Click;
        ge_UserScoreCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new ge_UserScoreCRUDEx();
        await objPage.value.PageLoadCache();
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
          default:
            break;
        }
        ge_UserScoreCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListge_UserScore,
        emptyRecNumInfo,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refge_UserScore_List,
        idCurrEduCls_q,
        userId_q,
        courseId_q,
        passed_q,
        arrvCurrEduCls_Sim,
        arrvCurrEduClsStu_Sim,
        arrcc_Course,
        btnQuery_Click,
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
        router.push({ name: 'editge_UserScore', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new ge_UserScoreCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>

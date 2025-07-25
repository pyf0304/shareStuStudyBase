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
        </tbody>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblgs_KnowledgesLogicList"
            name="lblgs_KnowledgesLogicList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点逻辑列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <gs_KnowledgesLogic_ListCom
        ref="refgs_KnowledgesLogic_List"
        :items="dataListgs_KnowledgesLogic"
        :show-error-message="showErrorMessage"
        :empty-rec-num-info="emptyRecNumInfo"
        :data-column="dataColumn"
        @on-edit-tab-relainfo="EditTabRelaInfo"
        @on-sort-column="SortColumn"
      >
      </gs_KnowledgesLogic_ListCom>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortgs_KnowledgesLogicBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_KnowledgesLogic_EditCom ref="refgs_KnowledgesLogic_Edit"></gs_KnowledgesLogic_EditCom>
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
  import {
    divVarSet,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    refgs_KnowledgesLogic_Edit,
    refgs_KnowledgesLogic_List,
    showErrorMessage,
    dataListgs_KnowledgesLogic,
    emptyRecNumInfo,
    dataColumn,
    CourseId_Session,
  } from '@/viewsShare/Knowledges/gs_KnowledgesLogicVueShare';
  import { clsgs_KnowledgesLogicEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicEN';
  import gs_KnowledgesLogic_EditEx from '@/viewsShare/Knowledges/gs_KnowledgesLogic_EditEx';
  import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
  import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
  import gs_KnowledgesLogicCRUDEx from '@/viewsShare/Knowledges/gs_KnowledgesLogicCRUDEx';
  import gs_KnowledgesLogic_EditCom from '@/viewsShare/Knowledges/gs_KnowledgesLogic_Edit.vue';
  import gs_KnowledgesLogic_ListCom from '@/viewsShare/Knowledges/gs_KnowledgesLogic_List.vue';
  export default defineComponent({
    name: 'Gs_KnowledgesLogicCRUD',
    components: {
      // 组件注册
      gs_KnowledgesLogic_EditCom,
      gs_KnowledgesLogic_ListCom,
    },

    setup() {
      CourseId_Session.value = clsPubLocalStorage.courseId;
      const objPage = ref<gs_KnowledgesLogicCRUDEx>();
      const objPage_Edit = ref<gs_KnowledgesLogic_EditEx>();
      const opType = ref('');
      const thisConstructorName = 'Gs_KnowledgesLogicCRUD';

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_gs_KnowledgesLogic4Func(refDivList.value);
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
        objPage_Edit.value = new gs_KnowledgesLogic_EditEx(
          'gs_KnowledgesLogic_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        try {
          opType.value = 'Add';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_gs_KnowledgesLogic(opType.value);
          if (bolIsSuccess == false) return;
          if (['02', '03', '06'].indexOf(clsgs_KnowledgesLogicEN.PrimaryTypeId) > -1) {
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
        objPage_Edit.value = new gs_KnowledgesLogic_EditEx(
          'gs_KnowledgesLogic_EditEx',
          objPage.value,
        );
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strFstKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        const lngmId = Number(strFstKeyId);
        if (lngmId == 0) {
          const strMsg = '修改记录的关键字为空,请检查!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        try {
          opType.value = 'Update';
          const bolIsSuccess = await objPage_Edit.value.ShowDialog_gs_KnowledgesLogic(opType.value);
          if (bolIsSuccess == false) return;
          const lngKeyId = lngmId;
          const update = await objPage_Edit.value.UpdateRecord(lngKeyId);
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
        return clsgs_KnowledgesLogicEN._CurrTabName;
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
          await objPage.value.BindGv_gs_KnowledgesLogic4Func(divVarSet.refDivList);
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
        await objPage.value.ExportExcel_gs_KnowledgesLogic();
      };

      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {}

      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      const strTitle = ref('知识点逻辑维护');
      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        gs_KnowledgesLogicCRUDEx.vuebtn_Click = btn_Click;
        gs_KnowledgesLogicCRUDEx.GetPropValue = GetPropValue;
        objPage.value = new gs_KnowledgesLogicCRUDEx();
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
        gs_KnowledgesLogicCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        showErrorMessage,
        dataListgs_KnowledgesLogic,
        emptyRecNumInfo,
        dataColumn,
        strTitle,
        btn_Click,
        ...divVarSet,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        refgs_KnowledgesLogic_Edit,
        refgs_KnowledgesLogic_List,
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
        router.push({ name: 'editgs_KnowledgesLogic', params: { courseId: data.courseId } });
      },

      /** 函数:根据表列进行排序
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_method_ts_SortColumn)
       **/
      async SortColumn(data: any) {
        console.log('data:', data);
        const objPage = new gs_KnowledgesLogicCRUDEx();
        objPage.SortColumn(data.sortColumnKey, data.sortDirection);
      },

      // 方法定义
    },
  });
</script>
<style scoped></style>
@/viewsShare/Knowledges/gs_KnowledgesLogicVueShare@/viewsShare/Knowledges/gs_KnowledgesLogic_EditEx@/viewsShare/Knowledges/gs_KnowledgesLogicCRUDEx

﻿<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trKnowledgeTypeName">
            <td class="text-right">
              <label
                id="lblKnowledgeTypeName"
                name="lblKnowledgeTypeName"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点类型名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKnowledgeTypeName"
                v-model="knowledgeTypeName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelKnowledgeType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitKnowledgeType"
        type="primary"
        @click="btnKnowledgeType_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import KnowledgeType_EditEx from '@/views/Knowledges/KnowledgeType_EditEx';
  import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
  import { refDivEdit, CourseId_Session } from '@/viewsShare/Knowledges/KnowledgeTypeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'KnowledgeTypeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const knowledgeTypeName = ref('');
      const courseId = ref('');
      const updDate = ref('');
      const updUser = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjKnowledgeTypeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataKnowledgeTypeObj() {
        const pobjKnowledgeTypeEN = new clsKnowledgeTypeEN();
        pobjKnowledgeTypeEN.SetKnowledgeTypeName(knowledgeTypeName.value); // 知识点类型名
        pobjKnowledgeTypeEN.SetCourseId(CourseId_Session.value); // 课程Id
        pobjKnowledgeTypeEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjKnowledgeTypeEN.SetUpdUser(userStore.getUserId); // 修改人
        return pobjKnowledgeTypeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjKnowledgeTypeEN">表实体类对象</param>
       **/
      async function ShowDataFromKnowledgeTypeObj(pobjKnowledgeTypeEN: clsKnowledgeTypeEN) {
        knowledgeTypeName.value = pobjKnowledgeTypeEN.knowledgeTypeName; // 知识点类型名
      }
      const strTitle = ref('知识点类型编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataKnowledgeTypeObj,
        ShowDataFromKnowledgeTypeObj,
        knowledgeTypeName,
        courseId,
        updDate,
        updUser,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnKnowledgeType_Edit_Click(strCommandName: string, strKeyId: string) {
        KnowledgeType_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

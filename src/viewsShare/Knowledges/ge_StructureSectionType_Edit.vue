<template>
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
          <tr id="trSectionTypeEnName">
            <td class="text-right">
              <label
                id="lblSectionTypeName"
                name="lblSectionTypeName"
                class="col-form-label text-right"
                style="width: 90px"
                >事件名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSectionTypeName"
                v-model="sectionTypeName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblSectionTypeEnName"
                name="lblSectionTypeEnName"
                class="col-form-label text-right"
                style="width: 90px"
                >事件英文名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSectionTypeEnName"
                v-model="sectionTypeEnName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelge_StructureSectionType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitge_StructureSectionType"
        type="primary"
        @click="btnge_StructureSectionType_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ge_StructureSectionType_EditEx from '@/viewsShare/Knowledges/ge_StructureSectionType_EditEx';
  import { clsge_StructureSectionTypeEN } from '@/ts/L0Entity/Knowledges/clsge_StructureSectionTypeEN';
  import {
    CourseId_Session,
    refDivEdit,
  } from '@/viewsShare/Knowledges/ge_StructureSectionTypeVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { IShowList } from '@/ts/PubFun/IShowList';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  export default defineComponent({
    name: 'GeStructureSectionTypeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const sectionTypeName = ref('');
      const sectionTypeEnName = ref('');
      const courseId = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjge_StructureSectionTypeEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatage_StructureSectionTypeObj() {
        const pobjge_StructureSectionTypeEN = new clsge_StructureSectionTypeEN();
        pobjge_StructureSectionTypeEN.SetSectionTypeName(sectionTypeName.value); // 事件名称
        pobjge_StructureSectionTypeEN.SetSectionTypeEnName(sectionTypeEnName.value); // 事件英文名称
        pobjge_StructureSectionTypeEN.SetCourseId(CourseId_Session.value); // 课程Id
        return pobjge_StructureSectionTypeEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjge_StructureSectionTypeEN">表实体类对象</param>
       **/
      async function ShowDataFromge_StructureSectionTypeObj(
        pobjge_StructureSectionTypeEN: clsge_StructureSectionTypeEN,
      ) {
        sectionTypeName.value = pobjge_StructureSectionTypeEN.sectionTypeName; // 事件名称
        sectionTypeEnName.value = pobjge_StructureSectionTypeEN.sectionTypeEnName; // 事件英文名称
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        sectionTypeName.value = '';
        sectionTypeEnName.value = '';
      }
      const strTitle = ref('结构章节类型编辑');
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
      const btnAddSectionType_Click = (objPage: IShowList) =>
        //添加记录使用最大关键字
        {
          const objPageEdit_SectionType = new ge_StructureSectionType_EditEx(
            'ge_StructureSectionType_EditEx',
            objPage,
          );

          CourseId_Session.value = clsPubLocalStorage.courseId;
          objPageEdit_SectionType.btnAddNewRecord_Click();
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
        GetEditDatage_StructureSectionTypeObj,
        ShowDataFromge_StructureSectionTypeObj,
        Clear,
        sectionTypeName,
        sectionTypeEnName,
        courseId,
        btnAddSectionType_Click,
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
      btnge_StructureSectionType_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_StructureSectionType_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

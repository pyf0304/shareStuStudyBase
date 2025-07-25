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
          <tr id="trIdTeacher">
            <td class="text-right">
              <label
                id="lblCourseId"
                name="lblCourseId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程Id
              </label>
            </td>
            <td class="text-left"> </td>
            <td class="text-right">
              <label
                id="lblIdTeacher"
                name="lblIdTeacher"
                class="col-form-label text-right"
                style="width: 90px"
                >教师流水号
              </label>
            </td>
            <td class="text-left"> </td>
          </tr>
          <tr id="trLastVisitedDate">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsCourseManager"
                  v-model="isCourseManager"
                  type="checkbox"
                  Text="是否课程主要人"
                /><label for="chkIsCourseManager">是否课程主要人</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblLastVisitedDate"
                name="lblLastVisitedDate"
                class="col-form-label text-right"
                style="width: 90px"
                >最后访问时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLastVisitedDate"
                v-model="lastVisitedDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >备注
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelcc_CourseTeacherRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_CourseTeacherRelation"
        type="primary"
        @click="btncc_CourseTeacherRelation_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import cc_CourseTeacherRelation_EditEx from '@/viewsShare/CourseManage/cc_CourseTeacherRelation_EditEx';
  import { clscc_CourseTeacherRelationEN } from '@/ts/L0Entity/CourseManage/clscc_CourseTeacherRelationEN';
  import { refDivEdit } from '@/viewsShare/CourseManage/cc_CourseTeacherRelationVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'CcCourseTeacherRelationEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const courseId = ref('');
      const idTeacher = ref('');
      const isCourseManager = ref(true);
      const lastVisitedDate = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_CourseTeacherRelationEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_CourseTeacherRelationObj() {
        const pobjcc_CourseTeacherRelationEN = new clscc_CourseTeacherRelationEN();
        pobjcc_CourseTeacherRelationEN.SetCourseId(courseId.value); // 课程Id
        pobjcc_CourseTeacherRelationEN.SetIdTeacher(idTeacher.value); // 教师流水号
        pobjcc_CourseTeacherRelationEN.SetIsCourseManager(isCourseManager.value); // 是否课程主要人
        pobjcc_CourseTeacherRelationEN.SetLastVisitedDate(lastVisitedDate.value); // 最后访问时间
        pobjcc_CourseTeacherRelationEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_CourseTeacherRelationEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjcc_CourseTeacherRelationEN.SetMemo(memo.value); // 备注
        return pobjcc_CourseTeacherRelationEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_CourseTeacherRelationEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_CourseTeacherRelationObj(
        pobjcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN,
      ) {
        courseId.value = pobjcc_CourseTeacherRelationEN.courseId; // 课程Id
        idTeacher.value = pobjcc_CourseTeacherRelationEN.idTeacher; // 教师流水号
        isCourseManager.value = pobjcc_CourseTeacherRelationEN.isCourseManager; // 是否课程主要人
        lastVisitedDate.value = pobjcc_CourseTeacherRelationEN.lastVisitedDate; // 最后访问时间
        memo.value = pobjcc_CourseTeacherRelationEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        courseId.value = '0';
        idTeacher.value = '0';
        isCourseManager.value = false;
        lastVisitedDate.value = '';
        memo.value = '';
      }
      const strTitle = ref('课程教师关系编辑');
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
        GetEditDatacc_CourseTeacherRelationObj,
        ShowDataFromcc_CourseTeacherRelationObj,
        Clear,
        courseId,
        idTeacher,
        isCourseManager,
        lastVisitedDate,
        updDate,
        updUser,
        memo,
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
      btncc_CourseTeacherRelation_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_CourseTeacherRelation_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

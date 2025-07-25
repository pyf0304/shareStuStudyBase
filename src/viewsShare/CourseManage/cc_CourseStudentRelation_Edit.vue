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
          <tr id="trIdStudentInfo">
            <td class="text-right">
              <label
                id="lblCourseId"
                name="lblCourseId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseId"
                v-model="courseId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrcc_Course" :key="index" :value="item.courseId">
                  {{ item.courseName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdStudentInfo"
                name="lblIdStudentInfo"
                class="col-form-label text-right"
                style="width: 90px"
                >学生流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdStudentInfo"
                v-model="idStudentInfo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trLastVisitedDate">
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
      <el-button id="btnCancelcc_CourseStudentRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_CourseStudentRelation"
        type="primary"
        @click="btncc_CourseStudentRelation_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import cc_CourseStudentRelation_EditEx from '@/viewsShare/CourseManage/cc_CourseStudentRelation_EditEx';
  import { clscc_CourseStudentRelationEN } from '@/ts/L0Entity/CourseManage/clscc_CourseStudentRelationEN';
  import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
  import { cc_Course_GetObjLstCache } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
  import { refDivEdit } from '@/viewsShare/CourseManage/cc_CourseStudentRelationVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'CcCourseStudentRelationEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const courseId = ref('');
      const idStudentInfo = ref('');
      const lastVisitedDate = ref('');
      const updDate = ref('');
      const updUserId = ref('');
      const memo = ref('');

      const arrcc_Course = ref<clscc_CourseEN[]>([]);
      /**
 * 获取绑定下拉框的数据
 * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
      async function getArrcc_Course() {
        const arrObjLstSel = await cc_Course_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrcc_Course.value.length = 0;
        const obj0 = new clscc_CourseEN();
        obj0.courseId = '0';
        obj0.courseName = '请选择课程...';
        arrcc_Course.value.push(obj0);
        arrObjLstSel.forEach((x) => arrcc_Course.value.push(x));
        courseId.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        await getArrcc_Course(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_CourseStudentRelationEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_CourseStudentRelationObj() {
        const pobjcc_CourseStudentRelationEN = new clscc_CourseStudentRelationEN();
        pobjcc_CourseStudentRelationEN.SetCourseId(courseId.value); // 课程
        pobjcc_CourseStudentRelationEN.SetIdStudentInfo(idStudentInfo.value); // 学生流水号
        pobjcc_CourseStudentRelationEN.SetLastVisitedDate(lastVisitedDate.value); // 最后访问时间
        pobjcc_CourseStudentRelationEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_CourseStudentRelationEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        pobjcc_CourseStudentRelationEN.SetMemo(memo.value); // 备注
        return pobjcc_CourseStudentRelationEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_CourseStudentRelationEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_CourseStudentRelationObj(
        pobjcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN,
      ) {
        courseId.value = pobjcc_CourseStudentRelationEN.courseId; // 课程
        idStudentInfo.value = pobjcc_CourseStudentRelationEN.idStudentInfo; // 学生流水号
        lastVisitedDate.value = pobjcc_CourseStudentRelationEN.lastVisitedDate; // 最后访问时间
        memo.value = pobjcc_CourseStudentRelationEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        courseId.value = '0';
        idStudentInfo.value = '';
        lastVisitedDate.value = '';
        memo.value = '';
      }
      const strTitle = ref('课程学生关系编辑');
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
        GetEditDatacc_CourseStudentRelationObj,
        ShowDataFromcc_CourseStudentRelationObj,
        Clear,
        courseId,
        idStudentInfo,
        lastVisitedDate,
        updDate,
        updUserId,
        memo,
        arrcc_Course,
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
      btncc_CourseStudentRelation_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_CourseStudentRelation_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

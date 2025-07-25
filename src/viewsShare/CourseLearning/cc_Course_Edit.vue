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
          <tr id="trCourseCode">
            <td class="text-right">
              <label
                id="lblCourseName"
                name="lblCourseName"
                class="col-form-label text-right"
                style="width: 90px"
                >课程名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCourseName"
                v-model="courseName"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCourseCode"
                name="lblCourseCode"
                class="col-form-label text-right"
                style="width: 90px"
                >课程代码
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCourseCode"
                v-model="courseCode"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
          </tr>
          <tr id="trCourseDescription">
            <td class="text-right">
              <label
                id="lblCourseDescription"
                name="lblCourseDescription"
                class="col-form-label text-right"
                style="width: 90px"
                >课程描述
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtCourseDescription"
                v-model="courseDescription"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trIdXzMajor">
            <td class="text-right">
              <label
                id="lblCourseTypeId"
                name="lblCourseTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseTypeId"
                v-model="courseTypeId"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option
                  v-for="(item, index) in arrcc_CourseType"
                  :key="index"
                  :value="item.courseTypeId"
                >
                  {{ item.courseTypeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdXzMajor"
                name="lblIdXzMajor"
                class="col-form-label text-right"
                style="width: 90px"
                >专业
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzMajor"
                v-model="idXzMajor"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrXzMajor" :key="index" :value="item.idXzMajor">
                  {{ item.majorName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsHasOpQues">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 200px">
                <input id="chkIsOpen" v-model="isOpen" type="checkbox" Text="是否公开" /><label
                  for="chkIsOpen"
                  >是否公开</label
                ></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsHasOpQues"
                  v-model="isHasOpQues"
                  type="checkbox"
                  Text="是否有操作题"
                /><label for="chkIsHasOpQues">是否有操作题</label></span
              >
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
                style="width: 400px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelcc_Course" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_Course"
        type="primary"
        @click="btncc_Course_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import cc_Course_EditEx from '@/viewsShare/CourseLearning/cc_Course_EditEx';
  import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
  import { clscc_CourseTypeEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseTypeEN';
  import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
  import { cc_CourseType_GetObjLstCache } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseTypeWApi';
  import { XzMajor_GetObjLstCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { refDivEdit } from '@/viewsShare/CourseLearning/cc_CourseVueShare';
  export default defineComponent({
    name: 'CcCourseEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const courseName = ref('');
      const courseCode = ref('');
      const courseDescription = ref('');
      const courseTypeId = ref('0');
      const idXzMajor = ref('0');
      const isOpen = ref(true);
      const isHasOpQues = ref(true);
      const memo = ref('');
      const updDate = ref('');
      const updUserId = ref('');

      const arrcc_CourseType = ref<clscc_CourseTypeEN[]>([]);
      const arrXzMajor = ref<clsXzMajorEN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrcc_CourseType() {
        const arrObjLstSel = await cc_CourseType_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrcc_CourseType.value.length = 0;
        const obj0 = new clscc_CourseTypeEN();
        obj0.courseTypeId = '0';
        obj0.courseTypeName = '请选择课程类型...';
        arrcc_CourseType.value.push(obj0);
        arrObjLstSel.forEach((x) => arrcc_CourseType.value.push(x));
        courseTypeId.value = '0';
      }
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrXzMajor() {
        const arrObjLstSel = await XzMajor_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrXzMajor.value.length = 0;
        const obj0 = new clsXzMajorEN();
        obj0.idXzMajor = '0';
        obj0.majorName = '请选择专业...';
        arrXzMajor.value.push(obj0);
        arrObjLstSel.forEach((x) => arrXzMajor.value.push(x));
        idXzMajor.value = '0';
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        await getArrcc_CourseType(); //编辑区域

        await getArrXzMajor(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_CourseEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_CourseObj() {
        const pobjcc_CourseEN = new clscc_CourseEN();
        pobjcc_CourseEN.SetCourseName(courseName.value); // 课程名称
        pobjcc_CourseEN.SetCourseCode(courseCode.value); // 课程代码
        pobjcc_CourseEN.SetCourseDescription(courseDescription.value); // 课程描述
        pobjcc_CourseEN.SetCourseTypeId(courseTypeId.value); // 课程类型
        pobjcc_CourseEN.SetIdXzMajor(idXzMajor.value); // 专业
        pobjcc_CourseEN.SetIsOpen(isOpen.value); // 是否公开
        pobjcc_CourseEN.SetIsHasOpQues(isHasOpQues.value); // 是否有操作题
        pobjcc_CourseEN.SetMemo(memo.value); // 备注
        pobjcc_CourseEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_CourseEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
        return pobjcc_CourseEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_CourseEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_CourseObj(pobjcc_CourseEN: clscc_CourseEN) {
        courseName.value = pobjcc_CourseEN.courseName; // 课程名称
        courseCode.value = pobjcc_CourseEN.courseCode; // 课程代码
        courseDescription.value = pobjcc_CourseEN.courseDescription; // 课程描述
        courseTypeId.value = pobjcc_CourseEN.courseTypeId; // 课程类型
        idXzMajor.value = pobjcc_CourseEN.idXzMajor; // 专业
        isOpen.value = pobjcc_CourseEN.isOpen; // 是否公开
        isHasOpQues.value = pobjcc_CourseEN.isHasOpQues; // 是否有操作题
        memo.value = pobjcc_CourseEN.memo; // 备注
      }
      const strTitle = ref('课程编辑');
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
        GetEditDatacc_CourseObj,
        ShowDataFromcc_CourseObj,
        courseName,
        courseCode,
        courseDescription,
        courseTypeId,
        idXzMajor,
        isOpen,
        isHasOpQues,
        memo,
        updDate,
        updUserId,
        arrcc_CourseType,
        arrXzMajor,
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
      btncc_Course_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_Course_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

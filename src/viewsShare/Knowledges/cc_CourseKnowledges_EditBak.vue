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
          <tr id="trKnowledgeName">
            <td class="text-right">
              <label
                id="lblKnowledgeName"
                name="lblKnowledgeName"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKnowledgeName"
                v-model="knowledgeName"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trKnowledgeTitle">
            <td class="text-right">
              <label
                id="lblKnowledgeTitle"
                name="lblKnowledgeTitle"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点标题
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtKnowledgeTitle"
                v-model="knowledgeTitle"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trKnowledgeTypeId">
            <td class="text-right">
              <label
                id="lblKnowledgeTypeId"
                name="lblKnowledgeTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点类型
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlKnowledgeTypeId"
                v-model="knowledgeTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
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
          </tr>
          <tr id="trKnowledgeModuleId">
            <td class="text-right">
              <label
                id="lblKnowledgeModuleId"
                name="lblKnowledgeModuleId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点模块
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlKnowledgeModuleId"
                v-model="knowledgeModuleId"
                class="form-control form-control-sm"
                style="width: 150px"
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
          </tr>
          <tr id="trKPSourceId">
            <td class="text-right">
              <label
                id="lblKPSourceId"
                name="lblKPSourceId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点来源Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlKPSourceId"
                v-model="kpSourceId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrKPSource" :key="index" :value="item.kpSourceId">
                  {{ item.kpSourceName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trCourseChapterId">
            <td class="text-right">
              <label
                id="lblCourseChapterId"
                name="lblCourseChapterId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程章节
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseChapterId"
                v-model="courseChapterId"
                class="form-control form-control-sm"
                style="width: 150px"
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
          </tr>
          <tr id="trKnowledgeContent">
            <td class="text-right">
              <label
                id="lblKnowledgeContent"
                name="lblKnowledgeContent"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点内容
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <textarea
                id="txtKnowledgeContent"
                name="txtKnowledgeContent"
                class="form-control form-control-sm"
                rows="5"
                cols="50"
                style="width: 350px"
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
          </tr>
          <tr id="trLevelNo">
            <td class="text-right">
              <label
                id="lblLevelNo"
                name="lblLevelNo"
                class="col-form-label text-right"
                style="width: 90px"
                >等级No
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLevelNo"
                v-model.number="levelNo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trModuleWeight">
            <td class="text-right">
              <label
                id="lblModuleWeight"
                name="lblModuleWeight"
                class="col-form-label text-right"
                style="width: 90px"
                >模块权重
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtModuleWeight"
                v-model.number="moduleWeight"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trInUse">
            <td class="text-right">
              <label
                id="lblInUse"
                name="lblInUse"
                class="col-form-label text-right"
                style="width: 90px"
                >是否在用
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlInUse"
                v-model="inUse"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option value="0">选择是/否</option>
                <option value="true">是</option>
                <option value="false">否</option></select
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelcc_CourseKnowledges" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitcc_CourseKnowledges" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import cc_CourseKnowledges_EditEx from '@/viewsShare/Knowledges/cc_CourseKnowledges_EditEx';
  import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
  import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
  import { clscc_KnowledgeModulesEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN';
  import { clsKPSourceEN } from '@/ts/L0Entity/Knowledges/clsKPSourceEN';
  import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
  import { KnowledgeType_GetArrKnowledgeType } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeTypeWApi';
  import { cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgeModulesWApi';
  import { KPSource_GetArrKPSource } from '@/ts/L3ForWApi/Knowledges/clsKPSourceWApi';
  import { cc_CourseChapter_GetArrcc_CourseChapterByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
  import {
    CourseId_Session,
    refDivEdit,
  } from '@/viewsShare/Knowledges/cc_CourseKnowledgesVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { cc_CourseKnowledges_Edit } from '@/viewsBase/Knowledges/cc_CourseKnowledges_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CcCourseKnowledgesEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const knowledgeName = ref('');
      const knowledgeTitle = ref('');
      const knowledgeTypeId = ref('');
      const knowledgeModuleId = ref('');
      const kpSourceId = ref('');
      const courseChapterId = ref('');
      const knowledgeContent = ref('');
      const memo = ref('');
      const courseId = ref('');
      const levelNo = ref(0);
      const moduleWeight = ref(0);
      const inUse = ref('0');
      const updUser = ref('');
      const updDate = ref('');

      const arrKnowledgeType = ref<clsKnowledgeTypeEN[] | null>([]);
      const arrcc_KnowledgeModules = ref<clscc_KnowledgeModulesEN[] | null>([]);
      const arrKPSource = ref<clsKPSourceEN[] | null>([]);
      const arrcc_CourseChapter = ref<clscc_CourseChapterEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrKnowledgeType.value = await KnowledgeType_GetArrKnowledgeType(strCourseId); //编辑区域
        knowledgeTypeId.value = '0';

        arrcc_KnowledgeModules.value =
          await cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId(strCourseId); //编辑区域
        knowledgeModuleId.value = '0';

        arrKPSource.value = await KPSource_GetArrKPSource(); //编辑区域
        kpSourceId.value = '0';

        arrcc_CourseChapter.value = await cc_CourseChapter_GetArrcc_CourseChapterByCourseId(
          strCourseId,
        ); //编辑区域
        courseChapterId.value = '0';

        inUse.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_CourseKnowledgesEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_CourseKnowledgesObj() {
        const pobjcc_CourseKnowledgesEN = new clscc_CourseKnowledgesEN();
        pobjcc_CourseKnowledgesEN.SetKnowledgeName(knowledgeName.value); // 知识点名称
        pobjcc_CourseKnowledgesEN.SetKnowledgeTitle(knowledgeTitle.value); // 知识点标题
        pobjcc_CourseKnowledgesEN.SetKnowledgeTypeId(knowledgeTypeId.value); // 知识点类型
        pobjcc_CourseKnowledgesEN.SetKnowledgeModuleId(knowledgeModuleId.value); // 知识点模块
        pobjcc_CourseKnowledgesEN.SetKpSourceId(kpSourceId.value); // 知识点来源Id
        pobjcc_CourseKnowledgesEN.SetCourseChapterId(courseChapterId.value); // 课程章节
        pobjcc_CourseKnowledgesEN.SetKnowledgeContent(knowledgeContent.value); // 知识点内容
        pobjcc_CourseKnowledgesEN.SetMemo(memo.value); // 备注
        pobjcc_CourseKnowledgesEN.SetCourseId(CourseId_Session.value); // 课程
        pobjcc_CourseKnowledgesEN.SetLevelNo(Number(levelNo.value)); // 等级No
        pobjcc_CourseKnowledgesEN.SetModuleWeight(Number(moduleWeight.value)); // 模块权重
        pobjcc_CourseKnowledgesEN.SetInUse(inUse.value == 'true' ? true : false); // 是否在用
        pobjcc_CourseKnowledgesEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjcc_CourseKnowledgesEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjcc_CourseKnowledgesEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_CourseKnowledgesEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_CourseKnowledgesObj(
        pobjcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN,
      ) {
        knowledgeName.value = pobjcc_CourseKnowledgesEN.knowledgeName; // 知识点名称
        knowledgeTitle.value = pobjcc_CourseKnowledgesEN.knowledgeTitle; // 知识点标题
        knowledgeTypeId.value = pobjcc_CourseKnowledgesEN.knowledgeTypeId; // 知识点类型
        knowledgeModuleId.value = pobjcc_CourseKnowledgesEN.knowledgeModuleId; // 知识点模块
        kpSourceId.value = pobjcc_CourseKnowledgesEN.kpSourceId; // 知识点来源Id
        courseChapterId.value = pobjcc_CourseKnowledgesEN.courseChapterId; // 课程章节
        knowledgeContent.value = pobjcc_CourseKnowledgesEN.knowledgeContent; // 知识点内容
        memo.value = pobjcc_CourseKnowledgesEN.memo; // 备注
        levelNo.value = pobjcc_CourseKnowledgesEN.levelNo; // 等级No
        moduleWeight.value = pobjcc_CourseKnowledgesEN.moduleWeight; // 模块权重
        inUse.value = pobjcc_CourseKnowledgesEN.inUse.toString(); // 是否在用
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        knowledgeName.value = '';
        knowledgeTitle.value = '';
        knowledgeTypeId.value = '0';
        knowledgeModuleId.value = '0';
        kpSourceId.value = '0';
        courseChapterId.value = '0';
        knowledgeContent.value = '';
        memo.value = '';
        levelNo.value = 0;
        moduleWeight.value = 0;
        inUse.value = '0';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!');
          return;
        }
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let returnBool = false;
          let returnKeyId = '';
          let strInfo = '';
          let strMsg = '';
          switch (strCommandText) {
            case '添加':
              strSubmitButtonText.value = '确认添加';
              strCancelButtonText.value = '取消添加';
              await objPage_Edit.value.AddNewRecord();
              break;
            case '确认添加':
              //这是一个单表的插入的代码,由于逻辑层太简单,
              //就把逻辑层合并到控制层,
              if (['02', '03', '06'].indexOf(clscc_CourseKnowledgesEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (cc_CourseKnowledges_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscc_CourseKnowledgesEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (cc_CourseKnowledges_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscc_CourseKnowledgesEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In cc_CourseKnowledges_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (cc_CourseKnowledges_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clscc_CourseKnowledgesEN._CurrTabName,
                    keyId.value,
                  );
              }
              break;
            default:
              strMsg = Format(
                'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
                strCommandText,
              );
              console.error(strMsg);
              alert(strMsg);
              break;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };
      const strTitle = ref('知识点编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<cc_CourseKnowledges_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: cc_CourseKnowledges_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
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
        GetEditDatacc_CourseKnowledgesObj,
        ShowDataFromcc_CourseKnowledgesObj,
        Clear,
        btnSubmit_Click,
        knowledgeName,
        knowledgeTitle,
        knowledgeTypeId,
        knowledgeModuleId,
        kpSourceId,
        courseChapterId,
        knowledgeContent,
        memo,
        courseId,
        levelNo,
        moduleWeight,
        inUse,
        updUser,
        updDate,
        arrKnowledgeType,
        arrcc_KnowledgeModules,
        arrKPSource,
        arrcc_CourseChapter,
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
      btncc_CourseKnowledges_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_CourseKnowledges_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

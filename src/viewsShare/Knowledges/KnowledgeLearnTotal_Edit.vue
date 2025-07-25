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
          <tr id="trCourseKnowledgeId">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId"
                v-model="userId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCourseKnowledgeId"
                name="lblCourseKnowledgeId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程知识点Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseKnowledgeId"
                v-model="courseKnowledgeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrcc_CourseKnowledges"
                  :key="index"
                  :value="item.courseKnowledgeId"
                >
                  {{ item.knowledgeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trLearnCount">
            <td class="text-right">
              <label
                id="lblMasterDegree"
                name="lblMasterDegree"
                class="col-form-label text-right"
                style="width: 90px"
                >掌握程度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMasterDegree"
                v-model.number="masterDegree"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLearnCount"
                name="lblLearnCount"
                class="col-form-label text-right"
                style="width: 90px"
                >学习次数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLearnCount"
                v-model.number="learnCount"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trFailCount">
            <td class="text-right">
              <label
                id="lblSuccessCount"
                name="lblSuccessCount"
                class="col-form-label text-right"
                style="width: 90px"
                >成功次数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSuccessCount"
                v-model.number="successCount"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFailCount"
                name="lblFailCount"
                class="col-form-label text-right"
                style="width: 90px"
                >失败次数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFailCount"
                v-model.number="failCount"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trContinuousFailCount">
            <td class="text-right">
              <label
                id="lblContinuousSuccessCount"
                name="lblContinuousSuccessCount"
                class="col-form-label text-right"
                style="width: 90px"
                >连续成功次数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtContinuousSuccessCount"
                v-model.number="continuousSuccessCount"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblContinuousFailCount"
                name="lblContinuousFailCount"
                class="col-form-label text-right"
                style="width: 90px"
                >连续失败次数
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtContinuousFailCount"
                v-model.number="continuousFailCount"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trRecommendedNextReviewDate">
            <td class="text-right">
              <label
                id="lblLastLearnDate"
                name="lblLastLearnDate"
                class="col-form-label text-right"
                style="width: 90px"
                >最后学习日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLastLearnDate"
                v-model="lastLearnDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblRecommendedNextReviewDate"
                name="lblRecommendedNextReviewDate"
                class="col-form-label text-right"
                style="width: 90px"
                >推荐下次复习日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRecommendedNextReviewDate"
                v-model="recommendedNextReviewDate"
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
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelKnowledgeLearnTotal" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitKnowledgeLearnTotal" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import KnowledgeLearnTotal_EditEx from '@/viewsShare/Knowledges/KnowledgeLearnTotal_EditEx';
  import { clsKnowledgeLearnTotalEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeLearnTotalEN';
  import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
  import { cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
  import {
    CourseId_Session,
    refDivEdit,
  } from '@/viewsShare/Knowledges/KnowledgeLearnTotalVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { KnowledgeLearnTotal_Edit } from '@/viewsBase/Knowledges/KnowledgeLearnTotal_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'KnowledgeLearnTotalEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const userId = ref('');
      const courseKnowledgeId = ref('');
      const masterDegree = ref(0);
      const learnCount = ref(0);
      const successCount = ref(0);
      const failCount = ref(0);
      const continuousSuccessCount = ref(0);
      const continuousFailCount = ref(0);
      const lastLearnDate = ref('');
      const recommendedNextReviewDate = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrcc_CourseKnowledges = ref<clscc_CourseKnowledgesEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_CourseKnowledges.value =
          await cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId(strCourseId); //编辑区域
        courseKnowledgeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjKnowledgeLearnTotalEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataKnowledgeLearnTotalObj() {
        const pobjKnowledgeLearnTotalEN = new clsKnowledgeLearnTotalEN();
        pobjKnowledgeLearnTotalEN.SetUserId(userId.value); // 用户ID
        pobjKnowledgeLearnTotalEN.SetCourseKnowledgeId(Is0EqEmpty(courseKnowledgeId.value)); // 课程知识点Id
        pobjKnowledgeLearnTotalEN.SetMasterDegree(Number(masterDegree.value)); // 掌握程度
        pobjKnowledgeLearnTotalEN.SetLearnCount(Number(learnCount.value)); // 学习次数
        pobjKnowledgeLearnTotalEN.SetSuccessCount(Number(successCount.value)); // 成功次数
        pobjKnowledgeLearnTotalEN.SetFailCount(Number(failCount.value)); // 失败次数
        pobjKnowledgeLearnTotalEN.SetContinuousSuccessCount(Number(continuousSuccessCount.value)); // 连续成功次数
        pobjKnowledgeLearnTotalEN.SetContinuousFailCount(Number(continuousFailCount.value)); // 连续失败次数
        pobjKnowledgeLearnTotalEN.SetLastLearnDate(lastLearnDate.value); // 最后学习日期
        pobjKnowledgeLearnTotalEN.SetRecommendedNextReviewDate(recommendedNextReviewDate.value); // 推荐下次复习日期
        pobjKnowledgeLearnTotalEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjKnowledgeLearnTotalEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjKnowledgeLearnTotalEN.SetMemo(memo.value); // 备注
        return pobjKnowledgeLearnTotalEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjKnowledgeLearnTotalEN">表实体类对象</param>
       **/
      async function ShowDataFromKnowledgeLearnTotalObj(
        pobjKnowledgeLearnTotalEN: clsKnowledgeLearnTotalEN,
      ) {
        userId.value = pobjKnowledgeLearnTotalEN.userId; // 用户ID
        courseKnowledgeId.value = IsNullOrEmptyEq0(pobjKnowledgeLearnTotalEN.courseKnowledgeId); // 课程知识点Id
        masterDegree.value = pobjKnowledgeLearnTotalEN.masterDegree; // 掌握程度
        learnCount.value = pobjKnowledgeLearnTotalEN.learnCount; // 学习次数
        successCount.value = pobjKnowledgeLearnTotalEN.successCount; // 成功次数
        failCount.value = pobjKnowledgeLearnTotalEN.failCount; // 失败次数
        continuousSuccessCount.value = pobjKnowledgeLearnTotalEN.continuousSuccessCount; // 连续成功次数
        continuousFailCount.value = pobjKnowledgeLearnTotalEN.continuousFailCount; // 连续失败次数
        lastLearnDate.value = pobjKnowledgeLearnTotalEN.lastLearnDate; // 最后学习日期
        recommendedNextReviewDate.value = pobjKnowledgeLearnTotalEN.recommendedNextReviewDate; // 推荐下次复习日期
        memo.value = pobjKnowledgeLearnTotalEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        userId.value = '';
        courseKnowledgeId.value = '0';
        masterDegree.value = 0;
        learnCount.value = 0;
        successCount.value = 0;
        failCount.value = 0;
        continuousSuccessCount.value = 0;
        continuousFailCount.value = 0;
        lastLearnDate.value = '';
        recommendedNextReviewDate.value = '';
        memo.value = '';
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
              if (['02', '03', '06'].indexOf(clsKnowledgeLearnTotalEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsKnowledgeLearnTotalEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (KnowledgeLearnTotal_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsKnowledgeLearnTotalEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In KnowledgeLearnTotal_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (KnowledgeLearnTotal_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsKnowledgeLearnTotalEN._CurrTabName,
                    keyId.value.toString(),
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
      const strTitle = ref('知识点学习汇总表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<KnowledgeLearnTotal_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: KnowledgeLearnTotal_EditEx) => {
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
        GetEditDataKnowledgeLearnTotalObj,
        ShowDataFromKnowledgeLearnTotalObj,
        Clear,
        btnSubmit_Click,
        userId,
        courseKnowledgeId,
        masterDegree,
        learnCount,
        successCount,
        failCount,
        continuousSuccessCount,
        continuousFailCount,
        lastLearnDate,
        recommendedNextReviewDate,
        updDate,
        updUser,
        memo,
        arrcc_CourseKnowledges,
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
      btnKnowledgeLearnTotal_Edit_Click(strCommandName: string, strKeyId: string) {
        KnowledgeLearnTotal_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

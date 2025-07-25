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
          <tr id="trCourseKnowledgeIdA">
            <td class="text-right">
              <label
                id="lblCourseKnowledgeIdA"
                name="lblCourseKnowledgeIdA"
                class="col-form-label text-right"
                style="width: 90px"
                >课程知识点AId
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseKnowledgeIdA"
                v-model="courseKnowledgeIdA"
                class="form-control form-control-sm"
                style="width: 400px"
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
          <tr id="trKnowledgeTitleA">
            <td class="text-right">
              <label
                id="lblKnowledgeTitleA"
                name="lblKnowledgeTitleA"
                class="col-form-label text-right"
                style="width: 90px"
                >课程知识点标题A
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKnowledgeTitleA"
                v-model="knowledgeTitleA"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trCourseKnowledgeIdB">
            <td class="text-right">
              <label
                id="lblCourseKnowledgeIdB"
                name="lblCourseKnowledgeIdB"
                class="col-form-label text-right"
                style="width: 90px"
                >课程知识点BId
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseKnowledgeIdB"
                v-model="courseKnowledgeIdB"
                class="form-control form-control-sm"
                style="width: 400px"
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
          <tr id="trKnowledgeTitleB">
            <td class="text-right">
              <label
                id="lblKnowledgeTitleB"
                name="lblKnowledgeTitleB"
                class="col-form-label text-right"
                style="width: 90px"
                >课程知识点标题B
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKnowledgeTitleB"
                v-model="knowledgeTitleB"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trKnowledgeGraphId">
            <td class="text-right">
              <label
                id="lblKnowledgeGraphId"
                name="lblKnowledgeGraphId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点图
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlKnowledgeGraphId"
                v-model="knowledgeGraphId"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrgs_KnowledgesGraph"
                  :key="index"
                  :value="item.knowledgeGraphId"
                >
                  {{ item.knowledgeGraphName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trSourceAnchor">
            <td class="text-right">
              <label
                id="lblSourceAnchor"
                name="lblSourceAnchor"
                class="col-form-label text-right"
                style="width: 90px"
                >源锚点
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSourceAnchor"
                v-model="sourceAnchor"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trTargetAnchor">
            <td class="text-right">
              <label
                id="lblTargetAnchor"
                name="lblTargetAnchor"
                class="col-form-label text-right"
                style="width: 90px"
                >目标锚点
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTargetAnchor"
                v-model="targetAnchor"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trRelaTypeId">
            <td class="text-right">
              <label
                id="lblRelaTypeId"
                name="lblRelaTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >关系类型Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlRelaTypeId"
                v-model="relaTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrgs_RelaType"
                  :key="index"
                  :value="item.relaTypeId"
                >
                  {{ item.relaTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trRelaTitle">
            <td class="text-right">
              <label
                id="lblRelaTitle"
                name="lblRelaTitle"
                class="col-form-label text-right"
                style="width: 90px"
                >关系标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtRelaTitle"
                v-model="relaTitle"
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
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelgs_KnowledgesLogicRela" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitgs_KnowledgesLogicRela" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import gs_KnowledgesLogicRela_EditEx from '@/viewsShare/Knowledges/gs_KnowledgesLogicRela_EditEx';
  import { clsgs_KnowledgesLogicRelaEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaEN';
  import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
  import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';
  import { clsgs_RelaTypeEN } from '@/ts/L0Entity/Knowledges/clsgs_RelaTypeEN';
  import { cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
  import { gs_KnowledgesGraph_GetArrgs_KnowledgesGraphByCourseId } from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesGraphWApi';
  import { gs_RelaType_GetArrgs_RelaType } from '@/ts/L3ForWApi/Knowledges/clsgs_RelaTypeWApi';
  import {
    CourseId_Session,
    refDivEdit,
  } from '@/viewsShare/Knowledges/gs_KnowledgesLogicRelaVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { gs_KnowledgesLogicRela_Edit } from '@/viewsBase/Knowledges/gs_KnowledgesLogicRela_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'GsKnowledgesLogicRelaEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const courseKnowledgeIdA = ref('');
      const knowledgeTitleA = ref('');
      const courseKnowledgeIdB = ref('');
      const knowledgeTitleB = ref('');
      const knowledgeGraphId = ref('');
      const sourceAnchor = ref('');
      const targetAnchor = ref('');
      const relaTypeId = ref('');
      const relaTitle = ref('');
      const courseId = ref('');
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrcc_CourseKnowledges = ref<clscc_CourseKnowledgesEN[] | null>([]);
      const arrgs_KnowledgesGraph = ref<clsgs_KnowledgesGraphEN[] | null>([]);
      const arrgs_RelaType = ref<clsgs_RelaTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_CourseKnowledges.value =
          await cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId(strCourseId); //编辑区域
        courseKnowledgeIdA.value = '0';

        courseKnowledgeIdB.value = '0';

        arrgs_KnowledgesGraph.value = await gs_KnowledgesGraph_GetArrgs_KnowledgesGraphByCourseId(
          strCourseId,
        ); //编辑区域
        knowledgeGraphId.value = '0';

        arrgs_RelaType.value = await gs_RelaType_GetArrgs_RelaType(); //编辑区域
        relaTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjgs_KnowledgesLogicRelaEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatags_KnowledgesLogicRelaObj() {
        const pobjgs_KnowledgesLogicRelaEN = new clsgs_KnowledgesLogicRelaEN();
        pobjgs_KnowledgesLogicRelaEN.SetCourseKnowledgeIdA(Is0EqEmpty(courseKnowledgeIdA.value)); // 课程知识点AId
        pobjgs_KnowledgesLogicRelaEN.SetKnowledgeTitleA(knowledgeTitleA.value); // 课程知识点标题A
        pobjgs_KnowledgesLogicRelaEN.SetCourseKnowledgeIdB(Is0EqEmpty(courseKnowledgeIdB.value)); // 课程知识点BId
        pobjgs_KnowledgesLogicRelaEN.SetKnowledgeTitleB(knowledgeTitleB.value); // 课程知识点标题B
        pobjgs_KnowledgesLogicRelaEN.SetKnowledgeGraphId(Is0EqEmpty(knowledgeGraphId.value)); // 知识点图
        pobjgs_KnowledgesLogicRelaEN.SetSourceAnchor(sourceAnchor.value); // 源锚点
        pobjgs_KnowledgesLogicRelaEN.SetTargetAnchor(targetAnchor.value); // 目标锚点
        pobjgs_KnowledgesLogicRelaEN.SetRelaTypeId(Is0EqEmpty(relaTypeId.value)); // 关系类型Id
        pobjgs_KnowledgesLogicRelaEN.SetRelaTitle(relaTitle.value); // 关系标题
        pobjgs_KnowledgesLogicRelaEN.SetCourseId(CourseId_Session.value); // 课程Id
        pobjgs_KnowledgesLogicRelaEN.SetMemo(memo.value); // 备注
        pobjgs_KnowledgesLogicRelaEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjgs_KnowledgesLogicRelaEN.SetUpdUser(userStore.getUserId); // 修改人
        return pobjgs_KnowledgesLogicRelaEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjgs_KnowledgesLogicRelaEN">表实体类对象</param>
       **/
      async function ShowDataFromgs_KnowledgesLogicRelaObj(
        pobjgs_KnowledgesLogicRelaEN: clsgs_KnowledgesLogicRelaEN,
      ) {
        courseKnowledgeIdA.value = IsNullOrEmptyEq0(
          pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdA,
        ); // 课程知识点AId
        knowledgeTitleA.value = pobjgs_KnowledgesLogicRelaEN.knowledgeTitleA; // 课程知识点标题A
        courseKnowledgeIdB.value = IsNullOrEmptyEq0(
          pobjgs_KnowledgesLogicRelaEN.courseKnowledgeIdB,
        ); // 课程知识点BId
        knowledgeTitleB.value = pobjgs_KnowledgesLogicRelaEN.knowledgeTitleB; // 课程知识点标题B
        knowledgeGraphId.value = IsNullOrEmptyEq0(pobjgs_KnowledgesLogicRelaEN.knowledgeGraphId); // 知识点图
        sourceAnchor.value = pobjgs_KnowledgesLogicRelaEN.sourceAnchor; // 源锚点
        targetAnchor.value = pobjgs_KnowledgesLogicRelaEN.targetAnchor; // 目标锚点
        relaTypeId.value = IsNullOrEmptyEq0(pobjgs_KnowledgesLogicRelaEN.relaTypeId); // 关系类型Id
        relaTitle.value = pobjgs_KnowledgesLogicRelaEN.relaTitle; // 关系标题
        memo.value = pobjgs_KnowledgesLogicRelaEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        courseKnowledgeIdA.value = '0';
        knowledgeTitleA.value = '';
        courseKnowledgeIdB.value = '0';
        knowledgeTitleB.value = '';
        knowledgeGraphId.value = '0';
        sourceAnchor.value = '';
        targetAnchor.value = '';
        relaTypeId.value = '0';
        relaTitle.value = '';
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
              if (['02', '03', '06'].indexOf(clsgs_KnowledgesLogicRelaEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsgs_KnowledgesLogicRelaEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (
                    gs_KnowledgesLogicRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01
                  ) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsgs_KnowledgesLogicRelaEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In gs_KnowledgesLogicRela_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (gs_KnowledgesLogicRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsgs_KnowledgesLogicRelaEN._CurrTabName,
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
      const strTitle = ref('知识点逻辑关系表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<gs_KnowledgesLogicRela_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: gs_KnowledgesLogicRela_EditEx) => {
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
        GetEditDatags_KnowledgesLogicRelaObj,
        ShowDataFromgs_KnowledgesLogicRelaObj,
        Clear,
        btnSubmit_Click,
        courseKnowledgeIdA,
        knowledgeTitleA,
        courseKnowledgeIdB,
        knowledgeTitleB,
        knowledgeGraphId,
        sourceAnchor,
        targetAnchor,
        relaTypeId,
        relaTitle,
        courseId,
        memo,
        updDate,
        updUser,
        arrcc_CourseKnowledges,
        arrgs_KnowledgesGraph,
        arrgs_RelaType,
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
      btngs_KnowledgesLogicRela_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_KnowledgesLogicRela_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

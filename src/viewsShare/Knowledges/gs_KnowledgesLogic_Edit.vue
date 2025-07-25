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
          <tr id="trKnowledgeTitle">
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
            <td class="text-right">
              <label
                id="lblKnowledgeTitle"
                name="lblKnowledgeTitle"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点标题
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKnowledgeTitle"
                v-model="knowledgeTitle"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trYPosition">
            <td class="text-right">
              <label
                id="lblXPosition"
                name="lblXPosition"
                class="col-form-label text-right"
                style="width: 90px"
                >X_坐标
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtXPosition"
                v-model.number="xPosition"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblYPosition"
                name="lblYPosition"
                class="col-form-label text-right"
                style="width: 90px"
                >Y_坐标
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtYPosition"
                v-model.number="yPosition"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trNodeColor">
            <td class="text-right">
              <label
                id="lblKnowledgeGraphId"
                name="lblKnowledgeGraphId"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点图Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlKnowledgeGraphId"
                v-model="knowledgeGraphId"
                class="form-control form-control-sm"
                style="width: 150px"
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
            <td class="text-right">
              <label
                id="lblNodeColor"
                name="lblNodeColor"
                class="col-form-label text-right"
                style="width: 90px"
                >结点颜色
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtNodeColor"
                v-model="nodeColor"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trClassNameCss">
            <td class="text-right">
              <label
                id="lblLogicNodeId"
                name="lblLogicNodeId"
                class="col-form-label text-right"
                style="width: 90px"
                >逻辑节点Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLogicNodeId"
                v-model="logicNodeId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblClassNameCss"
                name="lblClassNameCss"
                class="col-form-label text-right"
                style="width: 90px"
                >样式名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtClassNameCss"
                v-model="classNameCss"
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
                style="width: 150px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelgs_KnowledgesLogic" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitgs_KnowledgesLogic" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import gs_KnowledgesLogic_EditEx from '@/viewsShare/Knowledges/gs_KnowledgesLogic_EditEx';
  import { clsgs_KnowledgesLogicEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicEN';
  import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
  import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';
  import { cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
  import { gs_KnowledgesGraph_GetArrgs_KnowledgesGraphByCourseId } from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesGraphWApi';
  import { CourseId_Session, refDivEdit } from '@/viewsShare/Knowledges/gs_KnowledgesLogicVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { gs_KnowledgesLogic_Edit } from '@/viewsBase/Knowledges/gs_KnowledgesLogic_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'GsKnowledgesLogicEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const courseKnowledgeId = ref('');
      const knowledgeTitle = ref('');
      const xPosition = ref(0);
      const yPosition = ref(0);
      const knowledgeGraphId = ref('');
      const nodeColor = ref('');
      const logicNodeId = ref('');
      const classNameCss = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');
      const courseId = ref('');

      const arrcc_CourseKnowledges = ref<clscc_CourseKnowledgesEN[] | null>([]);
      const arrgs_KnowledgesGraph = ref<clsgs_KnowledgesGraphEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_CourseKnowledges.value =
          await cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId(strCourseId); //编辑区域
        courseKnowledgeId.value = '0';

        arrgs_KnowledgesGraph.value = await gs_KnowledgesGraph_GetArrgs_KnowledgesGraphByCourseId(
          strCourseId,
        ); //编辑区域
        knowledgeGraphId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjgs_KnowledgesLogicEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatags_KnowledgesLogicObj() {
        const pobjgs_KnowledgesLogicEN = new clsgs_KnowledgesLogicEN();
        pobjgs_KnowledgesLogicEN.SetCourseKnowledgeId(courseKnowledgeId.value); // 课程知识点Id
        pobjgs_KnowledgesLogicEN.SetKnowledgeTitle(knowledgeTitle.value); // 知识点标题
        pobjgs_KnowledgesLogicEN.SetXPosition(Number(xPosition.value)); // X_坐标
        pobjgs_KnowledgesLogicEN.SetYPosition(Number(yPosition.value)); // Y_坐标
        pobjgs_KnowledgesLogicEN.SetKnowledgeGraphId(knowledgeGraphId.value); // 知识点图Id
        pobjgs_KnowledgesLogicEN.SetNodeColor(nodeColor.value); // 结点颜色
        pobjgs_KnowledgesLogicEN.SetLogicNodeId(logicNodeId.value); // 逻辑节点Id
        pobjgs_KnowledgesLogicEN.SetClassNameCss(classNameCss.value); // 样式名称
        pobjgs_KnowledgesLogicEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjgs_KnowledgesLogicEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjgs_KnowledgesLogicEN.SetMemo(memo.value); // 备注
        pobjgs_KnowledgesLogicEN.SetCourseId(CourseId_Session.value); // 课程Id
        return pobjgs_KnowledgesLogicEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjgs_KnowledgesLogicEN">表实体类对象</param>
       **/
      async function ShowDataFromgs_KnowledgesLogicObj(
        pobjgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN,
      ) {
        courseKnowledgeId.value = pobjgs_KnowledgesLogicEN.courseKnowledgeId; // 课程知识点Id
        knowledgeTitle.value = pobjgs_KnowledgesLogicEN.knowledgeTitle; // 知识点标题
        xPosition.value = pobjgs_KnowledgesLogicEN.xPosition; // X_坐标
        yPosition.value = pobjgs_KnowledgesLogicEN.yPosition; // Y_坐标
        knowledgeGraphId.value = pobjgs_KnowledgesLogicEN.knowledgeGraphId; // 知识点图Id
        nodeColor.value = pobjgs_KnowledgesLogicEN.nodeColor; // 结点颜色
        logicNodeId.value = pobjgs_KnowledgesLogicEN.logicNodeId; // 逻辑节点Id
        classNameCss.value = pobjgs_KnowledgesLogicEN.classNameCss; // 样式名称
        memo.value = pobjgs_KnowledgesLogicEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        courseKnowledgeId.value = '0';
        knowledgeTitle.value = '';
        xPosition.value = 0;
        yPosition.value = 0;
        knowledgeGraphId.value = '0';
        nodeColor.value = '';
        logicNodeId.value = '';
        classNameCss.value = '';
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
              if (['02', '03', '06'].indexOf(clsgs_KnowledgesLogicEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsgs_KnowledgesLogicEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (gs_KnowledgesLogic_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsgs_KnowledgesLogicEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In gs_KnowledgesLogic_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (gs_KnowledgesLogic_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsgs_KnowledgesLogicEN._CurrTabName,
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
      const strTitle = ref('知识点逻辑编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<gs_KnowledgesLogic_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: gs_KnowledgesLogic_EditEx) => {
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
        GetEditDatags_KnowledgesLogicObj,
        ShowDataFromgs_KnowledgesLogicObj,
        Clear,
        btnSubmit_Click,
        courseKnowledgeId,
        knowledgeTitle,
        xPosition,
        yPosition,
        knowledgeGraphId,
        nodeColor,
        logicNodeId,
        classNameCss,
        updDate,
        updUser,
        memo,
        courseId,
        arrcc_CourseKnowledges,
        arrgs_KnowledgesGraph,
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
      btngs_KnowledgesLogic_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_KnowledgesLogic_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
@/viewsShare/Knowledges/gs_KnowledgesLogic_EditEx@/viewsShare/Knowledges/gs_KnowledgesLogicVueShare

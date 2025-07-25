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
          <tr id="trKnowledgeModuleName">
            <td class="text-right">
              <label
                id="lblKnowledgeModuleName"
                name="lblKnowledgeModuleName"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点模块名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKnowledgeModuleName"
                v-model="knowledgeModuleName"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trKnowledgeModuleContent">
            <td class="text-right">
              <label
                id="lblKnowledgeModuleContent"
                name="lblKnowledgeModuleContent"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点模块内容
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtKnowledgeModuleContent"
                v-model="knowledgeModuleContent"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trOrderNum">
            <td class="text-right">
              <label
                id="lblOrderNum"
                name="lblOrderNum"
                class="col-form-label text-right"
                style="width: 90px"
                >序号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtOrderNum"
                v-model.number="orderNum"
                class="form-control form-control-sm"
                style="width: 400px"
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
            <td class="text-left">
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
      <el-button id="btnCancelcc_KnowledgeModules" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitcc_KnowledgeModules" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import cc_KnowledgeModules_EditEx from '@/viewsShare/Knowledges/cc_KnowledgeModules_EditEx';
  import { clscc_KnowledgeModulesEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN';
  import {
    refDivEdit,
    CourseId_Session,
  } from '@/viewsShare/Knowledges/cc_KnowledgeModulesVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { cc_KnowledgeModules_Edit } from '@/viewsBase/Knowledges/cc_KnowledgeModules_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CcKnowledgeModulesEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const knowledgeModuleId = ref('');
      const knowledgeModuleName = ref('');
      const knowledgeModuleContent = ref('');
      const courseId = ref('');
      const orderNum = ref(0);
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_KnowledgeModulesEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_KnowledgeModulesObj() {
        const pobjcc_KnowledgeModulesEN = new clscc_KnowledgeModulesEN();
        pobjcc_KnowledgeModulesEN.SetKnowledgeModuleId(knowledgeModuleId.value); // 知识点Id
        pobjcc_KnowledgeModulesEN.SetKnowledgeModuleName(knowledgeModuleName.value); // 知识点模块名称
        pobjcc_KnowledgeModulesEN.SetKnowledgeModuleContent(knowledgeModuleContent.value); // 知识点模块内容
        pobjcc_KnowledgeModulesEN.SetCourseId(CourseId_Session.value); // 课程Id
        pobjcc_KnowledgeModulesEN.SetOrderNum(Number(orderNum.value)); // 序号
        pobjcc_KnowledgeModulesEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjcc_KnowledgeModulesEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjcc_KnowledgeModulesEN.SetMemo(memo.value); // 备注
        return pobjcc_KnowledgeModulesEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_KnowledgeModulesEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_KnowledgeModulesObj(
        pobjcc_KnowledgeModulesEN: clscc_KnowledgeModulesEN,
      ) {
        knowledgeModuleId.value = pobjcc_KnowledgeModulesEN.knowledgeModuleId; // 知识点Id
        knowledgeModuleName.value = pobjcc_KnowledgeModulesEN.knowledgeModuleName; // 知识点模块名称
        knowledgeModuleContent.value = pobjcc_KnowledgeModulesEN.knowledgeModuleContent; // 知识点模块内容
        orderNum.value = pobjcc_KnowledgeModulesEN.orderNum; // 序号
        memo.value = pobjcc_KnowledgeModulesEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        knowledgeModuleId.value = '';
        knowledgeModuleName.value = '';
        knowledgeModuleContent.value = '';
        orderNum.value = 0;
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
              if (['02', '03', '06'].indexOf(clscc_KnowledgeModulesEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (cc_KnowledgeModules_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscc_KnowledgeModulesEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (cc_KnowledgeModules_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscc_KnowledgeModulesEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In cc_KnowledgeModules_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (cc_KnowledgeModules_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clscc_KnowledgeModulesEN._CurrTabName,
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
      const strTitle = ref('知识点模块编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<cc_KnowledgeModules_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: cc_KnowledgeModules_EditEx) => {
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
        GetEditDatacc_KnowledgeModulesObj,
        ShowDataFromcc_KnowledgeModulesObj,
        Clear,
        btnSubmit_Click,
        knowledgeModuleId,
        knowledgeModuleName,
        knowledgeModuleContent,
        courseId,
        orderNum,
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
      btncc_KnowledgeModules_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_KnowledgeModules_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

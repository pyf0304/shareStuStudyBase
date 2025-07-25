<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!-- 使用头部插槽来自定义对话框的标题 -->
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
        style="width: 1000px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trChapterName">
            <td class="text-right">
              <label
                id="lblCourseChapterName"
                name="lblCourseChapterName"
                class="col-form-label text-right"
                style="width: 90px"
                >课程章节名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCourseChapterName"
                v-model="courseChapterName"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblChapterName"
                name="lblChapterName"
                class="col-form-label text-right"
                style="width: 90px"
                >章名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtChapterName"
                v-model="chapterName"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trChapterNameSim">
            <td class="text-right">
              <label
                id="lblSectionName"
                name="lblSectionName"
                class="col-form-label text-right"
                style="width: 90px"
                >节名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSectionName"
                v-model="sectionName"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblChapterNameSim"
                name="lblChapterNameSim"
                class="col-form-label text-right"
                style="width: 90px"
                >章名简称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtChapterNameSim"
                v-model="chapterNameSim"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trIsUse">
            <td class="text-right">
              <label
                id="lblSectionNameSim"
                name="lblSectionNameSim"
                class="col-form-label text-right"
                style="width: 90px"
                >节名简称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtSectionNameSim"
                v-model="sectionNameSim"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 350px">
                <input id="chkIsUse" name="chkIsUse" type="checkbox" Text="是否使用" /><label
                  for="chkIsUse"
                  >是否使用</label
                ></span
              >
            </td>
          </tr>
          <tr id="trParentNodeId">
            <td class="text-right">
              <label
                id="lblParentNodeId"
                name="lblParentNodeId"
                class="col-form-label text-right"
                style="width: 90px"
                >父节点
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlParentNodeId"
                v-model="parentNodeId"
                class="form-control form-control-sm"
                style="width: 350px"
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
          <tr id="trChapterContent">
            <td class="text-right">
              <label
                id="lblChapterContent"
                name="lblChapterContent"
                class="col-form-label text-right"
                style="width: 90px"
                >章节内容
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtChapterContent"
                v-model="chapterContent"
                class="form-control form-control-sm"
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
          </tr> </tbody
      ></table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelcc_CourseChapter" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitcc_CourseChapter"
        type="primary"
        @click="btncc_CourseChapter_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import cc_CourseChapterCRUDEx from '@/viewsShare/Knowledges/cc_CourseChapterCRUDEx';
  import cc_CourseChapter_EditEx from '@/viewsShare/Knowledges/cc_CourseChapter_EditEx';
  import { cc_CourseChapter_GetArrcc_CourseChapterByCourseId } from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
  import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
  import { CourseId_Session } from '@/viewsShare/Knowledges/cc_CourseChapterVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { cc_CourseChapter_Edit } from '@/viewsBase/Knowledges/cc_CourseChapter_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CcCourseChapterEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const courseChapterName = ref('');
      const chapterName = ref('');
      const sectionName = ref('');
      const chapterNameSim = ref('');
      const sectionNameSim = ref('');
      const isUse = ref(true);
      const parentNodeId = ref('');
      const chapterContent = ref('');
      const courseId = ref('');
      const memo = ref('');
      const keyId = ref('');
      const objPage_Edit = ref<cc_CourseChapter_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('1100px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: cc_CourseChapter_EditEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const arrcc_CourseChapter = ref<clscc_CourseChapterEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrcc_CourseChapter.value = await cc_CourseChapter_GetArrcc_CourseChapterByCourseId(
          strCourseId,
        ); //编辑区域
        parentNodeId.value = '0';
      }

      const strTitle = ref('课程章节编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcc_CourseChapter':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitcc_CourseChapter':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelcc_CourseChapter':
            return strCancelButtonText.value;
          case 'btnSubmitcc_CourseChapter':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjcc_CourseChapterEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatacc_CourseChapterObj() {
        const pobjcc_CourseChapterEN = new clscc_CourseChapterEN();
        pobjcc_CourseChapterEN.SetCourseChapterName(courseChapterName.value); // 课程章节名称
        pobjcc_CourseChapterEN.SetChapterName(chapterName.value); // 章名
        pobjcc_CourseChapterEN.SetSectionName(sectionName.value); // 节名
        pobjcc_CourseChapterEN.SetChapterNameSim(chapterNameSim.value); // 章名简称
        pobjcc_CourseChapterEN.SetSectionNameSim(sectionNameSim.value); // 节名简称
        pobjcc_CourseChapterEN.SetIsUse(isUse.value); // 是否使用
        if (parentNodeId.value == '0') {
          pobjcc_CourseChapterEN.SetParentNodeId('00000000'); // 父节点
        } else {
          pobjcc_CourseChapterEN.SetParentNodeId(parentNodeId.value); // 父节点
        }
        pobjcc_CourseChapterEN.SetChapterContent(chapterContent.value); // 章节内容
        pobjcc_CourseChapterEN.SetCourseId(CourseId_Session.value); // 课程Id
        pobjcc_CourseChapterEN.SetMemo(memo.value); // 备注
        return pobjcc_CourseChapterEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjcc_CourseChapterEN">表实体类对象</param>
       **/
      async function ShowDataFromcc_CourseChapterObj(
        pobjcc_CourseChapterEN: clscc_CourseChapterEN,
      ) {
        courseChapterName.value = pobjcc_CourseChapterEN.courseChapterName; // 课程章节名称
        chapterName.value = pobjcc_CourseChapterEN.chapterName; // 章名
        sectionName.value = pobjcc_CourseChapterEN.sectionName; // 节名
        chapterNameSim.value = pobjcc_CourseChapterEN.chapterNameSim; // 章名简称
        sectionNameSim.value = pobjcc_CourseChapterEN.sectionNameSim ?? ''; // 节名简称
        isUse.value = pobjcc_CourseChapterEN.isUse; // 是否使用
        if (pobjcc_CourseChapterEN.parentNodeId == '00000000') {
          parentNodeId.value = '0';
        } else {
          parentNodeId.value = pobjcc_CourseChapterEN.parentNodeId; // 父节点
        }
        chapterContent.value = pobjcc_CourseChapterEN.chapterContent; // 章节内容
        memo.value = pobjcc_CourseChapterEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        courseChapterName.value = '';
        chapterName.value = '';
        sectionName.value = '';
        chapterNameSim.value = '';
        sectionNameSim.value = '';
        isUse.value = false;
        parentNodeId.value = '0';
        chapterContent.value = '';
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
              if (['02', '03', '06'].indexOf(clscc_CourseChapterEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (cc_CourseChapter_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscc_CourseChapterEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (cc_CourseChapter_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clscc_CourseChapterEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In cc_CourseChapter_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (cc_CourseChapter_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clscc_CourseChapterEN._CurrTabName,
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
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,

        GetEditDatacc_CourseChapterObj,
        ShowDataFromcc_CourseChapterObj,
        Clear,
        btnSubmit_Click,
        courseChapterName,
        chapterName,
        sectionName,
        chapterNameSim,
        sectionNameSim,
        isUse,
        parentNodeId,
        chapterContent,
        courseId,
        memo,
        arrcc_CourseChapter,
      };
    },

    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //cc_CourseChapter_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btncc_CourseChapter_Edit_Click(strCommandName: string, strKeyId: string) {
        cc_CourseChapter_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_cc_CourseChapter(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new cc_CourseChapter_EditEx('', new cc_CourseChapterCRUDEx());
        objPage.btnSubmit_Click();
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

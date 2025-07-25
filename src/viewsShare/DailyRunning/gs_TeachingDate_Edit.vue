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
        style="width: 800px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trIdCurrEduCls">
            <td class="text-right">
              <label
                id="lblIdCurrEduCls"
                name="lblIdCurrEduCls"
                class="col-form-label text-right"
                style="width: 90px"
                >当前教学班
              </label>
            </td>
            <td class="text-left" ColSpan="5">
              <span
                id="spnIdCurrEduCls"
                name="spnIdCurrEduCls"
                class="form-control form-control-sm"
                style="width: 350px"
                >{{ CurrEduClsName }}</span
              >
            </td>
          </tr>
          <tr id="trStartDate">
            <td class="text-right">
              <label
                id="lblStartDate"
                name="lblStartDate"
                class="col-form-label text-right"
                style="width: 90px"
                >开始日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStartDate"
                v-model="startDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trEndDate">
            <td class="text-right">
              <label
                id="lblEndDate"
                name="lblEndDate"
                class="col-form-label text-right"
                style="width: 90px"
                >截止日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtEndDate"
                v-model="endDate"
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
            <td class="text-left" ColSpan="5">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 500px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelgs_TeachingDate" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitgs_TeachingDate" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import gs_TeachingDate_EditEx from '@/viewsShare/DailyRunning/gs_TeachingDate_EditEx';
  import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
  import { refDivEdit } from '@/viewsShare/DailyRunning/gs_TeachingDateVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { gs_TeachingDate_Edit } from '@/viewsBase/DailyRunning/gs_TeachingDate_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  export default defineComponent({
    name: 'GsTeachingDateEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const idCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      const CurrEduClsName = clsPubLocalStorage.eduClsName;
      const startDate = ref('');
      const endDate = ref('');
      const updDate = ref('');
      const memo = ref('');
      const updUser = ref('');

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {}

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjgs_TeachingDateEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatags_TeachingDateObj() {
        const pobjgs_TeachingDateEN = new clsgs_TeachingDateEN();
        pobjgs_TeachingDateEN.SetIdCurrEduCls(idCurrEduCls); // 当前教学班流水号
        pobjgs_TeachingDateEN.SetStartDate(startDate.value); // 开始日期
        pobjgs_TeachingDateEN.SetEndDate(endDate.value); // 截止日期
        pobjgs_TeachingDateEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjgs_TeachingDateEN.SetMemo(memo.value); // 备注
        pobjgs_TeachingDateEN.SetUpdUser(userStore.getUserId); // 修改人
        return pobjgs_TeachingDateEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjgs_TeachingDateEN">表实体类对象</param>
       **/
      async function ShowDataFromgs_TeachingDateObj(pobjgs_TeachingDateEN: clsgs_TeachingDateEN) {
        // idCurrEduCls.value = pobjgs_TeachingDateEN.idCurrEduCls; // 当前教学班流水号
        startDate.value = pobjgs_TeachingDateEN.startDate; // 开始日期
        endDate.value = pobjgs_TeachingDateEN.endDate; // 截止日期
        memo.value = pobjgs_TeachingDateEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        // idCurrEduCls.value = '';
        startDate.value = '';
        endDate.value = '';
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
              if (['02', '03', '06'].indexOf(clsgs_TeachingDateEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsgs_TeachingDateEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (gs_TeachingDate_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsgs_TeachingDateEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In gs_TeachingDate_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (gs_TeachingDate_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsgs_TeachingDateEN._CurrTabName,
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
      const strTitle = ref('教学班日期范围编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<gs_TeachingDate_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: gs_TeachingDate_EditEx) => {
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
        GetEditDatags_TeachingDateObj,
        ShowDataFromgs_TeachingDateObj,
        Clear,
        btnSubmit_Click,
        idCurrEduCls,
        startDate,
        endDate,
        updDate,
        memo,
        updUser,
        CurrEduClsName,
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
      btngs_TeachingDate_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_TeachingDate_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
@/viewsShare/DailyRunning/gs_TeachingDate_EditEx

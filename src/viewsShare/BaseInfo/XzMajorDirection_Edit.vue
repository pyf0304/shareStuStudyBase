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
          <tr id="trIdXzMajor">
            <td class="text-right">
              <label
                id="lblIdXzMajor"
                name="lblIdXzMajor"
                class="col-form-label text-right"
                style="width: 90px"
                >专业流
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzMajor"
                v-model="idXzMajor"
                class="form-control form-control-sm"
                style="width: 300px"
              >
                <option v-for="(item, index) in arrXzMajor" :key="index" :value="item.idXzMajor">
                  {{ item.majorName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trMajorDirectionName">
            <td class="text-right">
              <label
                id="lblMajorDirectionName"
                name="lblMajorDirectionName"
                class="col-form-label text-right"
                style="width: 90px"
                >研究方向名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMajorDirectionName"
                v-model="majorDirectionName"
                class="form-control form-control-sm"
                style="width: 300px"
              />
            </td>
          </tr>
          <tr id="trMajorDirectionENName">
            <td class="text-right">
              <label
                id="lblMajorDirectionENName"
                name="lblMajorDirectionENName"
                class="col-form-label text-right"
                style="width: 90px"
                >研究方向英文名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMajorDirectionENName"
                v-model="majorDirectionENName"
                class="form-control form-control-sm"
                style="width: 300px"
              />
            </td>
          </tr>
          <tr id="trMajorDirectionExplain">
            <td class="text-right">
              <label
                id="lblMajorDirectionExplain"
                name="lblMajorDirectionExplain"
                class="col-form-label text-right"
                style="width: 90px"
                >专业方向说明
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMajorDirectionExplain"
                v-model="majorDirectionExplain"
                class="form-control form-control-sm"
                style="width: 300px"
              />
            </td>
          </tr>
          <tr id="trIsVisible">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 300px">
                <input
                  id="chkIsVisible"
                  v-model="isVisible"
                  type="checkbox"
                  Text="是否显示"
                /><label for="chkIsVisible">是否显示</label></span
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
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 300px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelXzMajorDirection" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitXzMajorDirection" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import XzMajorDirection_EditEx from '@/viewsShare/BaseInfo/XzMajorDirection_EditEx';
  import { clsXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorDirectionEN';
  import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
  import { XzMajor_GetArrXzMajor } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
  import { refDivEdit } from '@/viewsShare/BaseInfo/XzMajorDirectionVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { XzMajorDirection_Edit } from '@/viewsBase/BaseInfo/XzMajorDirection_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'XzMajorDirectionEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const majorDirectionId = ref('');
      const idXzMajor = ref('');
      const majorDirectionName = ref('');
      const majorDirectionENName = ref('');
      const majorDirectionExplain = ref('');
      const isVisible = ref(true);
      const memo = ref('');
      const updUser = ref('');
      const updDate = ref('');

      const arrXzMajor = ref<clsXzMajorEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrXzMajor.value = await XzMajor_GetArrXzMajor(); //编辑区域
        idXzMajor.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjXzMajorDirectionEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataXzMajorDirectionObj() {
        const pobjXzMajorDirectionEN = new clsXzMajorDirectionEN();
        pobjXzMajorDirectionEN.SetMajorDirectionId(majorDirectionId.value); // 研究方向Id
        pobjXzMajorDirectionEN.SetIdXzMajor(Is0EqEmpty(idXzMajor.value)); // 专业流
        pobjXzMajorDirectionEN.SetMajorDirectionName(majorDirectionName.value); // 研究方向名
        pobjXzMajorDirectionEN.SetMajorDirectionENName(majorDirectionENName.value); // 研究方向英文名
        pobjXzMajorDirectionEN.SetMajorDirectionExplain(majorDirectionExplain.value); // 专业方向说明
        pobjXzMajorDirectionEN.SetIsVisible(isVisible.value); // 是否显示
        pobjXzMajorDirectionEN.SetMemo(memo.value); // 备注
        pobjXzMajorDirectionEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjXzMajorDirectionEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjXzMajorDirectionEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjXzMajorDirectionEN">表实体类对象</param>
       **/
      async function ShowDataFromXzMajorDirectionObj(
        pobjXzMajorDirectionEN: clsXzMajorDirectionEN,
      ) {
        majorDirectionId.value = pobjXzMajorDirectionEN.majorDirectionId; // 研究方向Id
        idXzMajor.value = IsNullOrEmptyEq0(pobjXzMajorDirectionEN.idXzMajor); // 专业流
        majorDirectionName.value = pobjXzMajorDirectionEN.majorDirectionName; // 研究方向名
        majorDirectionENName.value = pobjXzMajorDirectionEN.majorDirectionENName; // 研究方向英文名
        majorDirectionExplain.value = pobjXzMajorDirectionEN.majorDirectionExplain; // 专业方向说明
        isVisible.value = pobjXzMajorDirectionEN.isVisible; // 是否显示
        memo.value = pobjXzMajorDirectionEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        majorDirectionId.value = '';
        idXzMajor.value = '0';
        majorDirectionName.value = '';
        majorDirectionENName.value = '';
        majorDirectionExplain.value = '';
        isVisible.value = false;
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
              if (['02', '03', '06'].indexOf(clsXzMajorDirectionEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (XzMajorDirection_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsXzMajorDirectionEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (XzMajorDirection_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsXzMajorDirectionEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In XzMajorDirection_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (XzMajorDirection_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsXzMajorDirectionEN._CurrTabName,
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
      const strTitle = ref('专业方向编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<XzMajorDirection_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: XzMajorDirection_EditEx) => {
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
        GetEditDataXzMajorDirectionObj,
        ShowDataFromXzMajorDirectionObj,
        Clear,
        btnSubmit_Click,
        majorDirectionId,
        idXzMajor,
        majorDirectionName,
        majorDirectionENName,
        majorDirectionExplain,
        isVisible,
        memo,
        updUser,
        updDate,
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
      btnXzMajorDirection_Edit_Click(strCommandName: string, strKeyId: string) {
        XzMajorDirection_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

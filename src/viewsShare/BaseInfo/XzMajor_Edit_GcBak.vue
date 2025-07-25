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
          <tr id="trMajorName">
            <td class="text-right">
              <label
                id="lblMajorId"
                name="lblMajorId"
                class="col-form-label text-right"
                style="width: 90px"
                >专业ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMajorId"
                v-model="majorId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMajorName"
                name="lblMajorName"
                class="col-form-label text-right"
                style="width: 90px"
                >专业名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMajorName"
                v-model="majorName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMajorEnglishName">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsVisible"
                  v-model="isVisible"
                  type="checkbox"
                  Text="是否显示"
                /><label for="chkIsVisible">是否显示</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblMajorEnglishName"
                name="lblMajorEnglishName"
                class="col-form-label text-right"
                style="width: 90px"
                >英文名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMajorEnglishName"
                v-model="majorEnglishName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMajorExplain">
            <td class="text-right">
              <label
                id="lblMajorExplain"
                name="lblMajorExplain"
                class="col-form-label text-right"
                style="width: 90px"
                >专业说明
              </label>
            </td>
            <td class="text-left" ColSpan="5">
              <input
                id="txtMajorExplain"
                v-model="majorExplain"
                class="form-control form-control-sm"
                style="width: 400px"
              />
            </td>
          </tr>
          <tr id="trIdXzCollege">
            <td class="text-right">
              <label
                id="lblIdXzMajorShoolType"
                name="lblIdXzMajorShoolType"
                class="col-form-label text-right"
                style="width: 90px"
                >专业类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzMajorShoolType"
                v-model="idXzMajorShoolType"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrXzMajorShoolType"
                  :key="index"
                  :value="item.idXzMajorShoolType"
                >
                  {{ item.typeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdXzCollege"
                name="lblIdXzCollege"
                class="col-form-label text-right"
                style="width: 90px"
                >学院
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzCollege"
                v-model="idXzCollege"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrXzClg" :key="index" :value="item.idXzCollege">
                  {{ item.collegeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trMajorDirection">
            <td class="text-right">
              <label
                id="lblMajorDirection"
                name="lblMajorDirection"
                class="col-form-label text-right"
                style="width: 90px"
                >专业方向
              </label>
            </td>
            <td class="text-left" ColSpan="5">
              <input
                id="txtMajorDirection"
                v-model="majorDirection"
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
      <el-button id="btnCancelXzMajor" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitXzMajor" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import XzMajor_EditEx from '@/viewsShare/BaseInfo/XzMajor_EditEx';
  import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
  import { clsXzMajorShoolTypeEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorShoolTypeEN';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { XzMajorShoolType_GetArrXzMajorShoolType } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorShoolTypeWApi';
  import { XzClg_GetArrXzClg } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
  import { refDivEdit } from '@/viewsShare/BaseInfo/XzMajorVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { XzMajor_Edit } from '@/viewsBase/BaseInfo/XzMajor_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'XzMajorEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const majorId = ref('');
      const majorName = ref('');
      const isVisible = ref(true);
      const majorEnglishName = ref('');
      const majorExplain = ref('');
      const idXzMajorShoolType = ref('');
      const idXzCollege = ref('');
      const majorDirection = ref('');
      const memo = ref('');
      const modifyUserId = ref('');
      const modifyDate = ref('');

      const arrXzMajorShoolType = ref<clsXzMajorShoolTypeEN[] | null>([]);
      const arrXzClg = ref<clsXzClgEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrXzMajorShoolType.value = await XzMajorShoolType_GetArrXzMajorShoolType(); //编辑区域
        idXzMajorShoolType.value = '0';

        arrXzClg.value = await XzClg_GetArrXzClg(); //编辑区域
        idXzCollege.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjXzMajorEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataXzMajorObj() {
        const pobjXzMajorEN = new clsXzMajorEN();
        pobjXzMajorEN.SetMajorId(majorId.value); // 专业ID
        pobjXzMajorEN.SetMajorName(majorName.value); // 专业名称
        pobjXzMajorEN.SetIsVisible(isVisible.value); // 是否显示
        pobjXzMajorEN.SetMajorEnglishName(majorEnglishName.value); // 英文名
        pobjXzMajorEN.SetMajorExplain(majorExplain.value); // 专业说明
        pobjXzMajorEN.SetIdXzMajorShoolType(Is0EqEmpty(idXzMajorShoolType.value)); // 专业类型
        pobjXzMajorEN.SetIdXzCollege(Is0EqEmpty(idXzCollege.value)); // 学院
        pobjXzMajorEN.SetMajorDirection(majorDirection.value); // 专业方向
        pobjXzMajorEN.SetMemo(memo.value); // 备注
        pobjXzMajorEN.SetModifyUserId(userStore.getUserId); // 修改人
        pobjXzMajorEN.SetModifyDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjXzMajorEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjXzMajorEN">表实体类对象</param>
       **/
      async function ShowDataFromXzMajorObj(pobjXzMajorEN: clsXzMajorEN) {
        majorId.value = pobjXzMajorEN.majorId; // 专业ID
        majorName.value = pobjXzMajorEN.majorName; // 专业名称
        isVisible.value = pobjXzMajorEN.isVisible; // 是否显示
        majorEnglishName.value = pobjXzMajorEN.majorEnglishName; // 英文名
        majorExplain.value = pobjXzMajorEN.majorExplain; // 专业说明
        idXzMajorShoolType.value = IsNullOrEmptyEq0(pobjXzMajorEN.idXzMajorShoolType); // 专业类型
        idXzCollege.value = IsNullOrEmptyEq0(pobjXzMajorEN.idXzCollege); // 学院
        majorDirection.value = pobjXzMajorEN.majorDirection; // 专业方向
        memo.value = pobjXzMajorEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        majorId.value = '';
        majorName.value = '';
        isVisible.value = false;
        majorEnglishName.value = '';
        majorExplain.value = '';
        idXzMajorShoolType.value = '0';
        idXzCollege.value = '0';
        majorDirection.value = '';
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
              if (['02', '03', '06'].indexOf(clsXzMajorEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (XzMajor_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsXzMajorEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (XzMajor_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsXzMajorEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In XzMajor_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (XzMajor_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(clsXzMajorEN._CurrTabName, keyId.value);
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
      const strTitle = ref('专业编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<XzMajor_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: XzMajor_EditEx) => {
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
        GetEditDataXzMajorObj,
        ShowDataFromXzMajorObj,
        Clear,
        btnSubmit_Click,
        majorId,
        majorName,
        isVisible,
        majorEnglishName,
        majorExplain,
        idXzMajorShoolType,
        idXzCollege,
        majorDirection,
        memo,
        modifyUserId,
        modifyDate,
        arrXzMajorShoolType,
        arrXzClg,
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
      btnXzMajor_Edit_Click(strCommandName: string, strKeyId: string) {
        XzMajor_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

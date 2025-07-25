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
          <tr id="trResourceName">
            <td class="text-right">
              <label
                id="lblResourceID"
                name="lblResourceID"
                class="col-form-label text-right"
                style="width: 90px"
                >资源ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtResourceID"
                v-model="resourceID"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblResourceName"
                name="lblResourceName"
                class="col-form-label text-right"
                style="width: 90px"
                >资源名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtResourceName"
                v-model="resourceName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdFtpResource">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkSaveMode"
                  v-model="saveMode"
                  type="checkbox"
                  Text="文件存放方式"
                /><label for="chkSaveMode">文件存放方式</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdFtpResource"
                name="lblIdFtpResource"
                class="col-form-label text-right"
                style="width: 90px"
                >FTP资源流水号
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdFtpResource"
                v-model="idFtpResource"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrFtpResource"
                  :key="index"
                  :value="item.idFtpResource"
                >
                  {{ item.fileRename }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIdResourceType">
            <td class="text-right">
              <label
                id="lblIdFile"
                name="lblIdFile"
                class="col-form-label text-right"
                style="width: 90px"
                >文件流水号
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdFile"
                v-model="idFile"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrFileServer" :key="index" :value="item.idFile">
                  {{ item.fileName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIdResourceType"
                name="lblIdResourceType"
                class="col-form-label text-right"
                style="width: 90px"
                >资源类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdResourceType"
                v-model="idResourceType"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrResourceType"
                  :key="index"
                  :value="item.idResourceType"
                >
                  {{ item.resourceTypeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trFuncModuleId">
            <td class="text-right">
              <label
                id="lblFuncModuleId"
                name="lblFuncModuleId"
                class="col-form-label text-right"
                style="width: 90px"
                >功能模块Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlFuncModuleId"
                v-model="funcModuleId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrFuncModule"
                  :key="index"
                  :value="item.funcModuleId"
                >
                  {{ item.funcModuleName }}
                </option></select
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
                style="width: 350px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelResource" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitResource" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import Resource_EditEx from '@/viewsShare/ResourceMan/Resource_EditEx';
  import { clsResourceEN } from '@/ts/L0Entity/ResourceMan/clsResourceEN';
  import { clsFtpResourceEN } from '@/ts/L0Entity/SkillDemo/clsFtpResourceEN';
  import { clsFileServerEN } from '@/ts/L0Entity/SysPara/clsFileServerEN';
  import { clsResourceTypeEN } from '@/ts/L0Entity/ResourceMan/clsResourceTypeEN';
  import { clsFuncModuleEN } from '@/ts/L0Entity/SysParaMan/clsFuncModuleEN';
  import { FtpResource_GetArrFtpResource } from '@/ts/L3ForWApi/SkillDemo/clsFtpResourceWApi';
  import { FileServer_GetArrFileServer } from '@/ts/L3ForWApi/SysPara/clsFileServerWApi';
  import { ResourceType_GetArrResourceType } from '@/ts/L3ForWApi/ResourceMan/clsResourceTypeWApi';
  import { FuncModule_GetArrFuncModule } from '@/ts/L3ForWApi/SysParaMan/clsFuncModuleWApi';
  import { refDivEdit } from '@/viewsShare/ResourceMan/ResourceVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { Resource_Edit } from '@/viewsBase/ResourceMan/Resource_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'ResourceEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const resourceID = ref('');
      const resourceName = ref('');
      const saveMode = ref(true);
      const idFtpResource = ref('');
      const idFile = ref('');
      const idResourceType = ref('');
      const funcModuleId = ref('');
      const memo = ref('');
      const updDate = ref('');

      const arrFtpResource = ref<clsFtpResourceEN[] | null>([]);
      const arrFileServer = ref<clsFileServerEN[] | null>([]);
      const arrResourceType = ref<clsResourceTypeEN[] | null>([]);
      const arrFuncModule = ref<clsFuncModuleEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrFtpResource.value = await FtpResource_GetArrFtpResource(); //编辑区域
        idFtpResource.value = '0';

        arrFileServer.value = await FileServer_GetArrFileServer(); //编辑区域
        idFile.value = '0';

        arrResourceType.value = await ResourceType_GetArrResourceType(); //编辑区域
        idResourceType.value = '0';

        arrFuncModule.value = await FuncModule_GetArrFuncModule(); //编辑区域
        funcModuleId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjResourceEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataResourceObj() {
        const pobjResourceEN = new clsResourceEN();
        pobjResourceEN.SetResourceID(resourceID.value); // 资源ID
        pobjResourceEN.SetResourceName(resourceName.value); // 资源名称
        pobjResourceEN.SetSaveMode(saveMode.value); // 文件存放方式
        pobjResourceEN.SetIdFtpResource(Is0EqEmpty(idFtpResource.value)); // FTP资源流水号
        pobjResourceEN.SetIdFile(Is0EqEmpty(idFile.value)); // 文件流水号
        pobjResourceEN.SetIdResourceType(Is0EqEmpty(idResourceType.value)); // 资源类型
        pobjResourceEN.SetFuncModuleId(Is0EqEmpty(funcModuleId.value)); // 功能模块Id
        pobjResourceEN.SetMemo(memo.value); // 备注
        pobjResourceEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjResourceEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjResourceEN">表实体类对象</param>
       **/
      async function ShowDataFromResourceObj(pobjResourceEN: clsResourceEN) {
        resourceID.value = pobjResourceEN.resourceID; // 资源ID
        resourceName.value = pobjResourceEN.resourceName; // 资源名称
        saveMode.value = pobjResourceEN.saveMode; // 文件存放方式
        idFtpResource.value = IsNullOrEmptyEq0(pobjResourceEN.idFtpResource); // FTP资源流水号
        idFile.value = IsNullOrEmptyEq0(pobjResourceEN.idFile); // 文件流水号
        idResourceType.value = IsNullOrEmptyEq0(pobjResourceEN.idResourceType); // 资源类型
        funcModuleId.value = IsNullOrEmptyEq0(pobjResourceEN.funcModuleId); // 功能模块Id
        memo.value = pobjResourceEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        resourceID.value = '';
        resourceName.value = '';
        saveMode.value = false;
        idFtpResource.value = '0';
        idFile.value = '0';
        idResourceType.value = '0';
        funcModuleId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsResourceEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (Resource_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsResourceEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (Resource_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsResourceEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In Resource_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (Resource_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsResourceEN._CurrTabName, keyId.value);
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
      const strTitle = ref('资源编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<Resource_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: Resource_EditEx) => {
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
        GetEditDataResourceObj,
        ShowDataFromResourceObj,
        Clear,
        btnSubmit_Click,
        resourceID,
        resourceName,
        saveMode,
        idFtpResource,
        idFile,
        idResourceType,
        funcModuleId,
        memo,
        updDate,
        arrFtpResource,
        arrFileServer,
        arrResourceType,
        arrFuncModule,
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
      btnResource_Edit_Click(strCommandName: string, strKeyId: string) {
        Resource_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

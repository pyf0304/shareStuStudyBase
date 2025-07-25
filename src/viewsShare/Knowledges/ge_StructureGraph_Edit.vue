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
          <tr id="trStructureGraphName">
            <td class="text-right">
              <label
                id="lblStructureGraphName"
                name="lblStructureGraphName"
                class="col-form-label text-right"
                style="width: 90px"
                >知识点图名
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <input
                id="txtStructureGraphName"
                v-model="structureGraphName"
                class="form-control form-control-sm"
                style="width: 350px"
              />
            </td>
          </tr>
          <tr id="trSectionTypeId">
            <td class="text-right">
              <label
                id="lblSectionTypeId"
                name="lblSectionTypeId"
                class="col-form-label text-right"
                style="width: 90px"
                >节点类型Id
              </label>
            </td>
            <td class="text-left" ColSpan="3">
              <select
                id="ddlSectionTypeId"
                v-model="sectionTypeId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrge_StructureSectionType"
                  :key="index"
                  :value="item.sectionTypeId"
                >
                  {{ item.sectionTypeName }}
                </option></select
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelge_StructureGraph" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitge_StructureGraph" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import ge_StructureGraph_EditEx from '@/viewsShare/Knowledges/ge_StructureGraph_EditEx';
  import { clsge_StructureGraphEN } from '@/ts/L0Entity/Knowledges/clsge_StructureGraphEN';
  import { clsge_StructureSectionTypeEN } from '@/ts/L0Entity/Knowledges/clsge_StructureSectionTypeEN';
  import { ge_StructureSectionType_GetArrge_StructureSectionTypeByCourseId } from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionTypeWApi';
  import { CourseId_Session, refDivEdit } from '@/viewsShare/Knowledges/ge_StructureGraphVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { ge_StructureGraph_Edit } from '@/viewsBase/Knowledges/ge_StructureGraph_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'GeStructureGraphEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const structureGraphName = ref('');
      const sectionTypeId = ref('');

      const arrge_StructureSectionType = ref<clsge_StructureSectionTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储

        arrge_StructureSectionType.value =
          await ge_StructureSectionType_GetArrge_StructureSectionTypeByCourseId(strCourseId); //编辑区域
        sectionTypeId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjge_StructureGraphEN">数据传输的目的类对象</param>
       **/
      async function GetEditDatage_StructureGraphObj() {
        const pobjge_StructureGraphEN = new clsge_StructureGraphEN();
        pobjge_StructureGraphEN.SetStructureGraphName(structureGraphName.value); // 知识点图名
        pobjge_StructureGraphEN.SetSectionTypeId(sectionTypeId.value); // 节点类型Id
        return pobjge_StructureGraphEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjge_StructureGraphEN">表实体类对象</param>
       **/
      async function ShowDataFromge_StructureGraphObj(
        pobjge_StructureGraphEN: clsge_StructureGraphEN,
      ) {
        structureGraphName.value = pobjge_StructureGraphEN.structureGraphName; // 知识点图名
        sectionTypeId.value = pobjge_StructureGraphEN.sectionTypeId; // 节点类型Id
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        structureGraphName.value = '';
        sectionTypeId.value = '0';
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
              if (['02', '03', '06'].indexOf(clsge_StructureGraphEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (ge_StructureGraph_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsge_StructureGraphEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (ge_StructureGraph_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsge_StructureGraphEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In ge_StructureGraph_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (ge_StructureGraph_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsge_StructureGraphEN._CurrTabName,
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
      const strTitle = ref('结构图谱表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<ge_StructureGraph_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: ge_StructureGraph_EditEx) => {
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
        GetEditDatage_StructureGraphObj,
        ShowDataFromge_StructureGraphObj,
        Clear,
        btnSubmit_Click,
        structureGraphName,
        sectionTypeId,
        arrge_StructureSectionType,
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
      btnge_StructureGraph_Edit_Click(strCommandName: string, strKeyId: string) {
        ge_StructureGraph_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
@/viewsShare/Knowledges/ge_StructureGraph_EditEx@/viewsShare/Knowledges/ge_StructureGraphVueShare

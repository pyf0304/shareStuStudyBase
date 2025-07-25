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
          <tr id="trIdCurrEduCls">
            <td class="text-right">
              <label
                id="lblIdCurrEduCls"
                name="lblIdCurrEduCls"
                class="col-form-label text-right"
                style="width: 90px"
                >教学班
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdCurrEduCls"
                v-model="idCurrEduCls"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrvCurrEduCls_Sim"
                  :key="index"
                  :value="item.idCurrEduCls"
                >
                  {{ item.eduClsName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIdTeacher">
            <td class="text-right">
              <label
                id="lblIdTeacher"
                name="lblIdTeacher"
                class="col-form-label text-right"
                style="width: 90px"
                >教师
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdTeacher"
                v-model="idTeacher"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrvTeacherInfo_Sim"
                  :key="index"
                  :value="item.idTeacher"
                >
                  {{ item.teacherName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIdPk2EduClsTeacherType">
            <td class="text-right">
              <label
                id="lblIdPk2EduClsTeacherType"
                name="lblIdPk2EduClsTeacherType"
                class="col-form-label text-right"
                style="width: 90px"
                >老师角色
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdPk2EduClsTeacherType"
                v-model="idPk2EduClsTeacherType"
                class="form-control form-control-sm"
                style="width: 400px"
              >
                <option
                  v-for="(item, index) in arrPk2EduClsTeacherType"
                  :key="index"
                  :value="item.idPk2EduClsTeacherType"
                >
                  {{ item.eduClsTeacherTypeDesc }}
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
                style="width: 400px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelCurrEduClsTeacher" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitCurrEduClsTeacher" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import CurrEduClsTeacher_EditEx from '@/viewsShare/DailyRunning/CurrEduClsTeacher_EditEx';
  import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';
  import { clsvCurrEduCls_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN';
  import { clsvTeacherInfo_SimEN } from '@/ts/L0Entity/BaseInfo/clsvTeacherInfo_SimEN';
  import { clsPk2EduClsTeacherTypeEN } from '@/ts/L0Entity/DailyRunning/clsPk2EduClsTeacherTypeEN';
  import { vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
  import { vTeacherInfo_Sim_GetArrvTeacherInfo_SimByIdSchoolCache } from '@/ts/L3ForWApi/BaseInfo/clsvTeacherInfo_SimWApi';
  import { Pk2EduClsTeacherType_GetArrPk2EduClsTeacherType } from '@/ts/L3ForWApi/DailyRunning/clsPk2EduClsTeacherTypeWApi';
  import {
    CourseId_Session,
    IdSchool_Session,
    refDivEdit,
  } from '@/viewsShare/DailyRunning/CurrEduClsTeacherVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { CurrEduClsTeacher_Edit } from '@/viewsBase/DailyRunning/CurrEduClsTeacher_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CurrEduClsTeacherEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const idCurrEduCls = ref('');
      const idTeacher = ref('');
      const idPk2EduClsTeacherType = ref('');
      const memo = ref('');
      const updDate = ref('');
      const updUser = ref('');

      const arrvCurrEduCls_Sim = ref<clsvCurrEduCls_SimEN[] | null>([]);
      const arrvTeacherInfo_Sim = ref<clsvTeacherInfo_SimEN[] | null>([]);
      const arrPk2EduClsTeacherType = ref<clsPk2EduClsTeacherTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strCourseId = CourseId_Session.value; //静态变量;//Session存储、local存储
        const strIdSchool = IdSchool_Session.value; //静态变量;//Session存储、local存储

        arrvCurrEduCls_Sim.value = await vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId(
          strCourseId,
        ); //编辑区域
        idCurrEduCls.value = '0';

        arrvTeacherInfo_Sim.value = await vTeacherInfo_Sim_GetArrvTeacherInfo_SimByIdSchoolCache(
          strIdSchool,
        ); //编辑区域
        idTeacher.value = '0';

        arrPk2EduClsTeacherType.value = await Pk2EduClsTeacherType_GetArrPk2EduClsTeacherType(); //编辑区域
        idPk2EduClsTeacherType.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjCurrEduClsTeacherEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataCurrEduClsTeacherObj() {
        const pobjCurrEduClsTeacherEN = new clsCurrEduClsTeacherEN();
        pobjCurrEduClsTeacherEN.SetIdCurrEduCls(Is0EqEmpty(idCurrEduCls.value)); // 教学班
        pobjCurrEduClsTeacherEN.SetIdTeacher(Is0EqEmpty(idTeacher.value)); // 教师
        pobjCurrEduClsTeacherEN.SetIdPk2EduClsTeacherType(Is0EqEmpty(idPk2EduClsTeacherType.value)); // 老师角色
        pobjCurrEduClsTeacherEN.SetMemo(memo.value); // 备注
        pobjCurrEduClsTeacherEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjCurrEduClsTeacherEN.SetUpdUser(userStore.getUserId); // 修改人
        return pobjCurrEduClsTeacherEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCurrEduClsTeacherEN">表实体类对象</param>
       **/
      async function ShowDataFromCurrEduClsTeacherObj(
        pobjCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
      ) {
        idCurrEduCls.value = IsNullOrEmptyEq0(pobjCurrEduClsTeacherEN.idCurrEduCls); // 教学班
        idTeacher.value = IsNullOrEmptyEq0(pobjCurrEduClsTeacherEN.idTeacher); // 教师
        idPk2EduClsTeacherType.value = IsNullOrEmptyEq0(
          pobjCurrEduClsTeacherEN.idPk2EduClsTeacherType,
        ); // 老师角色
        memo.value = pobjCurrEduClsTeacherEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        idCurrEduCls.value = '0';
        idTeacher.value = '0';
        idPk2EduClsTeacherType.value = '0';
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
              if (['02', '03', '06'].indexOf(clsCurrEduClsTeacherEN.PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsCurrEduClsTeacherEN._CurrTabName,
                      '',
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (CurrEduClsTeacher_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsCurrEduClsTeacherEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In CurrEduClsTeacher_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (CurrEduClsTeacher_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsCurrEduClsTeacherEN._CurrTabName,
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
      const strTitle = ref('当前教学班教师编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<CurrEduClsTeacher_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: CurrEduClsTeacher_EditEx) => {
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
        GetEditDataCurrEduClsTeacherObj,
        ShowDataFromCurrEduClsTeacherObj,
        Clear,
        btnSubmit_Click,
        idCurrEduCls,
        idTeacher,
        idPk2EduClsTeacherType,
        memo,
        updDate,
        updUser,
        arrvCurrEduCls_Sim,
        arrvTeacherInfo_Sim,
        arrPk2EduClsTeacherType,
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
      btnCurrEduClsTeacher_Edit_Click(strCommandName: string, strKeyId: string) {
        CurrEduClsTeacher_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

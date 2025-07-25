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
          <tr id="trEduClsName">
            <td class="text-right">
              <label
                id="lblCurrEduClsId"
                name="lblCurrEduClsId"
                class="col-form-label text-right"
                style="width: 90px"
                >教学班Id
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCurrEduClsId"
                v-model="currEduClsId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblEduClsName"
                name="lblEduClsName"
                class="col-form-label text-right"
                style="width: 90px"
                >教学班名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtEduClsName"
                v-model="eduClsName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdXzCollege">
            <td class="text-right">
              <label
                id="lblCourseId"
                name="lblCourseId"
                class="col-form-label text-right"
                style="width: 90px"
                >课程
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseId"
                v-model="courseId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrvcc_Course_Sim"
                  :key="index"
                  :value="item.courseId"
                >
                  {{ item.courseName }}
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
          <tr id="trIsEffective">
            <td class="text-right">
              <label
                id="lblIdGradeBase"
                name="lblIdGradeBase"
                class="col-form-label text-right"
                style="width: 90px"
                >年级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdGradeBase"
                v-model="idGradeBase"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrXzGradeBase"
                  :key="index"
                  :value="item.idGradeBase"
                >
                  {{ item.gradeBaseName }}
                </option></select
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsEffective"
                  v-model="isEffective"
                  type="checkbox"
                  Text="是否有效"
                /><label for="chkIsEffective">是否有效</label></span
              >
            </td>
          </tr>
          <tr id="trSchoolTerm">
            <td class="text-right">
              <label
                id="lblSchoolYear"
                name="lblSchoolYear"
                class="col-form-label text-right"
                style="width: 90px"
                >学年
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSchoolYear"
                v-model="schoolYear"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrSchoolYear"
                  :key="index"
                  :value="item.schoolYear"
                >
                  {{ item.schoolYearName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblSchoolTerm"
                name="lblSchoolTerm"
                class="col-form-label text-right"
                style="width: 90px"
                >学期
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlSchoolTerm"
                v-model="schoolTerm"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrSchoolTerm"
                  :key="index"
                  :value="item.schoolTerm"
                >
                  {{ item.schoolTermName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trUserType">
            <td class="text-right">
              <label
                id="lblUserType"
                name="lblUserType"
                class="col-form-label text-right"
                style="width: 90px"
                >用户类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlUserType"
                v-model="userType"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrUserType" :key="index" :value="item.userTypeId">
                  {{ item.userTypeName }}
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
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelCurrEduCls" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitCurrEduCls" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import CurrEduCls_EditEx from '@/viewsShare/DailyRunning/CurrEduCls_EditEx';
  import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
  import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
  import { clsSchoolYearEN } from '@/ts/L0Entity/SysPara/clsSchoolYearEN';
  import { clsSchoolTermEN } from '@/ts/L0Entity/SysPara/clsSchoolTermEN';
  import { clsUserTypeEN } from '@/ts/L0Entity/UserManage/clsUserTypeEN';
  import { vcc_Course_Sim_GetArrvcc_Course_Sim } from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
  import { XzClg_GetArrXzClg } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
  import { XzGradeBase_GetArrXzGradeBaseByIsVisible } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
  import { SchoolYear_GetArrSchoolYear } from '@/ts/L3ForWApi/SysPara/clsSchoolYearWApi';
  import { SchoolTerm_GetArrSchoolTerm } from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';
  import { UserType_GetArrUserType } from '@/ts/L3ForWApi/UserManage/clsUserTypeWApi';
  import { refDivEdit } from '@/viewsShare/DailyRunning/CurrEduClsVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { CurrEduCls_Edit } from '@/viewsBase/DailyRunning/CurrEduCls_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'CurrEduClsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const currEduClsId = ref('');
      const eduClsName = ref('');
      const courseId = ref('');
      const idXzCollege = ref('');
      const idGradeBase = ref('');
      const isEffective = ref(true);
      const schoolYear = ref('');
      const schoolTerm = ref('');
      const userType = ref('');
      const memo = ref('');
      const modifyDate = ref('');
      const modifyUserId = ref('');

      const arrvcc_Course_Sim = ref<clsvcc_Course_SimEN[] | null>([]);
      const arrXzClg = ref<clsXzClgEN[] | null>([]);
      const arrXzGradeBase = ref<clsXzGradeBaseEN[] | null>([]);
      const arrSchoolYear = ref<clsSchoolYearEN[] | null>([]);
      const arrSchoolTerm = ref<clsSchoolTermEN[] | null>([]);
      const arrUserType = ref<clsUserTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const bolIsVisible_Giving = true; //给定值

        arrvcc_Course_Sim.value = await vcc_Course_Sim_GetArrvcc_Course_Sim(); //编辑区域
        courseId.value = '0';

        arrXzClg.value = await XzClg_GetArrXzClg(); //编辑区域
        idXzCollege.value = '0';

        arrXzGradeBase.value = await XzGradeBase_GetArrXzGradeBaseByIsVisible(bolIsVisible_Giving); //编辑区域
        idGradeBase.value = '0';

        arrSchoolYear.value = await SchoolYear_GetArrSchoolYear(); //编辑区域
        schoolYear.value = '0';

        arrSchoolTerm.value = await SchoolTerm_GetArrSchoolTerm(); //编辑区域
        schoolTerm.value = '0';

        arrUserType.value = await UserType_GetArrUserType(); //编辑区域
        userType.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjCurrEduClsEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataCurrEduClsObj() {
        const pobjCurrEduClsEN = new clsCurrEduClsEN();
        pobjCurrEduClsEN.SetCurrEduClsId(currEduClsId.value); // 教学班Id
        pobjCurrEduClsEN.SetEduClsName(eduClsName.value); // 教学班名称
        pobjCurrEduClsEN.SetCourseId(courseId.value); // 课程
        pobjCurrEduClsEN.SetIdXzCollege(idXzCollege.value); // 学院
        pobjCurrEduClsEN.SetIdGradeBase(idGradeBase.value); // 年级
        pobjCurrEduClsEN.SetIsEffective(isEffective.value); // 是否有效
        pobjCurrEduClsEN.SetSchoolYear(schoolYear.value); // 学年
        pobjCurrEduClsEN.SetSchoolTerm(schoolTerm.value); // 学期
        pobjCurrEduClsEN.SetUserTypeId(userType.value); // 用户类型
        pobjCurrEduClsEN.SetMemo(memo.value); // 备注
        pobjCurrEduClsEN.SetModifyDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjCurrEduClsEN.SetModifyUserId(userStore.getUserId); // 修改人
        return pobjCurrEduClsEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjCurrEduClsEN">表实体类对象</param>
       **/
      async function ShowDataFromCurrEduClsObj(pobjCurrEduClsEN: clsCurrEduClsEN) {
        currEduClsId.value = pobjCurrEduClsEN.currEduClsId; // 教学班Id
        eduClsName.value = pobjCurrEduClsEN.eduClsName; // 教学班名称
        courseId.value = pobjCurrEduClsEN.courseId; // 课程
        idXzCollege.value = pobjCurrEduClsEN.idXzCollege; // 学院
        idGradeBase.value = pobjCurrEduClsEN.idGradeBase; // 年级
        isEffective.value = pobjCurrEduClsEN.isEffective; // 是否有效
        schoolYear.value = pobjCurrEduClsEN.schoolYear; // 学年
        schoolTerm.value = pobjCurrEduClsEN.schoolTerm; // 学期
        userType.value = pobjCurrEduClsEN.userTypeId; // 用户类型
        memo.value = pobjCurrEduClsEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        currEduClsId.value = '';
        eduClsName.value = '';
        courseId.value = '0';
        idXzCollege.value = '0';
        idGradeBase.value = '0';
        isEffective.value = false;
        schoolYear.value = '0';
        schoolTerm.value = '0';
        userType.value = '0';
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
              if (['02', '03', '06'].indexOf(clsCurrEduClsEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (CurrEduCls_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsCurrEduClsEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (CurrEduCls_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsCurrEduClsEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In CurrEduCls_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (CurrEduCls_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsCurrEduClsEN._CurrTabName,
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
      const strTitle = ref('当前教学班编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<CurrEduCls_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: CurrEduCls_EditEx) => {
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
        GetEditDataCurrEduClsObj,
        ShowDataFromCurrEduClsObj,
        Clear,
        btnSubmit_Click,
        currEduClsId,
        eduClsName,
        courseId,
        idXzCollege,
        idGradeBase,
        isEffective,
        schoolYear,
        schoolTerm,
        userType,
        memo,
        modifyDate,
        modifyUserId,
        arrvcc_Course_Sim,
        arrXzClg,
        arrXzGradeBase,
        arrSchoolYear,
        arrSchoolTerm,
        arrUserType,
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
      btnCurrEduCls_Edit_Click(strCommandName: string, strKeyId: string) {
        CurrEduCls_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

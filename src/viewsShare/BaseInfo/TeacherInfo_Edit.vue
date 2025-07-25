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
        style="width: 700px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trTeacherId">
            <td class="text-right">
              <label id="lblIdTeacher" class="col-form-label text-right" style="width: 90px"
                >教师流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdTeacher"
                v-model="idTeacher"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label id="lblTeacherId" class="col-form-label text-right" style="width: 90px"
                >教师工号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTeacherId"
                v-model="teacherId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdSex">
            <td class="text-right">
              <label id="lblTeacherName" class="col-form-label text-right" style="width: 90px"
                >教师姓名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtTeacherName"
                v-model="teacherName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label id="lblIdSex" class="col-form-label text-right" style="width: 90px"
                >性别
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdSex"
                v-model="idSex"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrSex" :key="index" :value="item.idSex">
                  {{ item.sexDesc }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIdXzCollege">
            <td class="text-right">
              <label id="lblIdEthnic" class="col-form-label text-right" style="width: 90px"
                >民族
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdEthnic"
                v-model="idEthnic"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrRsEthnic" :key="index" :value="item.idEthnic">
                  {{ item.ethnicName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label id="lblIdXzCollege" class="col-form-label text-right" style="width: 90px"
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
          <tr id="trIdAdminGrade">
            <td class="text-right">
              <label id="lblIdPolitics" class="col-form-label text-right" style="width: 90px"
                >政治面貌
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdPolitics"
                v-model="idPolitics"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrRsPolitics"
                  :key="index"
                  :value="item.idPolitics"
                >
                  {{ item.politicsName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label id="lblIdAdminGrade" class="col-form-label text-right" style="width: 90px"
                >行政职务
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdAdminGrade"
                v-model="idAdminGrade"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrRsAdminGrade"
                  :key="index"
                  :value="item.idAdminGrade"
                >
                  {{ item.adminGradeDesc }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIdStaffType">
            <td class="text-right">
              <label id="lblIdProfGrade" class="col-form-label text-right" style="width: 90px"
                >专业职称流水号
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdProfGrade"
                v-model="idProfGrade"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrRsProfGrade"
                  :key="index"
                  :value="item.idProfGrade"
                >
                  {{ item.profenssionalGradeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label id="lblIdStaffType" class="col-form-label text-right" style="width: 90px"
                >职工类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdStaffType"
                v-model="idStaffType"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrRsStaffType"
                  :key="index"
                  :value="item.idStaffType"
                >
                  {{ item.staffTypeName }}
                </option></select
              >
            </td>
          </tr>
        </tbody></table
      >

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelTeacherInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitTeacherInfo"
        type="primary"
        @click="btnTeacherInfo_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import TeacherInfo_EditEx from '@/viewsShare/BaseInfo/TeacherInfo_EditEx';
  import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';
  import { clsSexEN } from '@/ts/L0Entity/SysPara/clsSexEN';
  import { clsRsEthnicEN } from '@/ts/L0Entity/SysPara/clsRsEthnicEN';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { clsRsPoliticsEN } from '@/ts/L0Entity/SysPara/clsRsPoliticsEN';
  import { clsRsAdminGradeEN } from '@/ts/L0Entity/SysPara/clsRsAdminGradeEN';
  import { clsRsProfGradeEN } from '@/ts/L0Entity/SysPara/clsRsProfGradeEN';
  import { clsRsStaffTypeEN } from '@/ts/L0Entity/SysPara/clsRsStaffTypeEN';
  import { Sex_GetArrSex } from '@/ts/L3ForWApi/SysPara/clsSexWApi';
  import { RsEthnic_GetArrRsEthnic } from '@/ts/L3ForWApi/SysPara/clsRsEthnicWApi';
  import { XzClg_GetArrXzClg } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
  import { RsPolitics_GetArrRsPolitics } from '@/ts/L3ForWApi/SysPara/clsRsPoliticsWApi';
  import { RsAdminGrade_GetArrRsAdminGrade } from '@/ts/L3ForWApi/SysPara/clsRsAdminGradeWApi';
  import { RsProfGrade_GetArrRsProfGrade } from '@/ts/L3ForWApi/SysPara/clsRsProfGradeWApi';
  import { RsStaffType_GetArrRsStaffType } from '@/ts/L3ForWApi/SysPara/clsRsStaffTypeWApi';
  import { refDivEdit } from '@/viewsShare/BaseInfo/TeacherInfoVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty, IsNullOrEmptyEq0, Is0EqEmpty } from '@/ts/PubFun/clsString';
  import { TeacherInfo_Edit } from '@/viewsBase/BaseInfo/TeacherInfo_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';

  import TeacherInfoCRUDEx from '@/viewsShare/BaseInfo/TeacherInfoCRUDEx';

  export default defineComponent({
    name: 'TeacherInfoEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const idTeacher = ref('');
      const teacherId = ref('');
      const teacherName = ref('');
      const idSex = ref('');
      const idEthnic = ref('');
      const idXzCollege = ref('');
      const idPolitics = ref('');
      const idAdminGrade = ref('');
      const idProfGrade = ref('');
      const idStaffType = ref('');
      const modifyUserId = ref('');
      const modifyDate = ref('');

      const arrSex = ref<clsSexEN[] | null>([]);
      const arrRsEthnic = ref<clsRsEthnicEN[] | null>([]);
      const arrXzClg = ref<clsXzClgEN[] | null>([]);
      const arrRsPolitics = ref<clsRsPoliticsEN[] | null>([]);
      const arrRsAdminGrade = ref<clsRsAdminGradeEN[] | null>([]);
      const arrRsProfGrade = ref<clsRsProfGradeEN[] | null>([]);
      const arrRsStaffType = ref<clsRsStaffTypeEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrSex.value = await Sex_GetArrSex(); //编辑区域
        idSex.value = '0';

        arrRsEthnic.value = await RsEthnic_GetArrRsEthnic(); //编辑区域
        idEthnic.value = '0';

        arrXzClg.value = await XzClg_GetArrXzClg(); //编辑区域
        idXzCollege.value = '0';

        arrRsPolitics.value = await RsPolitics_GetArrRsPolitics(); //编辑区域
        idPolitics.value = '0';

        arrRsAdminGrade.value = await RsAdminGrade_GetArrRsAdminGrade(); //编辑区域
        idAdminGrade.value = '0';

        arrRsProfGrade.value = await RsProfGrade_GetArrRsProfGrade(); //编辑区域
        idProfGrade.value = '0';

        arrRsStaffType.value = await RsStaffType_GetArrRsStaffType(); //编辑区域
        idStaffType.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjTeacherInfoEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataTeacherInfoObj() {
        const pobjTeacherInfoEN = new clsTeacherInfoEN();
        pobjTeacherInfoEN.SetIdTeacher(idTeacher.value); // 教师流水号
        pobjTeacherInfoEN.SetTeacherId(teacherId.value); // 教师工号
        pobjTeacherInfoEN.SetTeacherName(teacherName.value); // 教师姓名
        pobjTeacherInfoEN.SetIdSex(Is0EqEmpty(idSex.value)); // 性别
        pobjTeacherInfoEN.SetIdEthnic(Is0EqEmpty(idEthnic.value)); // 民族
        pobjTeacherInfoEN.SetIdXzCollege(Is0EqEmpty(idXzCollege.value)); // 学院
        pobjTeacherInfoEN.SetIdPolitics(Is0EqEmpty(idPolitics.value)); // 政治面貌
        pobjTeacherInfoEN.SetIdAdminGrade(Is0EqEmpty(idAdminGrade.value)); // 行政职务
        pobjTeacherInfoEN.SetIdProfGrade(Is0EqEmpty(idProfGrade.value)); // 专业职称流水号
        pobjTeacherInfoEN.SetIdStaffType(Is0EqEmpty(idStaffType.value)); // 职工类型
        pobjTeacherInfoEN.SetModifyUserId(userStore.getUserId); // 修改人
        pobjTeacherInfoEN.SetModifyDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        return pobjTeacherInfoEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjTeacherInfoEN">表实体类对象</param>
       **/
      async function ShowDataFromTeacherInfoObj(pobjTeacherInfoEN: clsTeacherInfoEN) {
        idTeacher.value = pobjTeacherInfoEN.idTeacher; // 教师流水号
        teacherId.value = pobjTeacherInfoEN.teacherId; // 教师工号
        teacherName.value = pobjTeacherInfoEN.teacherName; // 教师姓名
        idSex.value = IsNullOrEmptyEq0(pobjTeacherInfoEN.idSex); // 性别
        idEthnic.value = IsNullOrEmptyEq0(pobjTeacherInfoEN.idEthnic); // 民族
        idXzCollege.value = IsNullOrEmptyEq0(pobjTeacherInfoEN.idXzCollege); // 学院
        idPolitics.value = IsNullOrEmptyEq0(pobjTeacherInfoEN.idPolitics); // 政治面貌
        idAdminGrade.value = IsNullOrEmptyEq0(pobjTeacherInfoEN.idAdminGrade); // 行政职务
        idProfGrade.value = IsNullOrEmptyEq0(pobjTeacherInfoEN.idProfGrade); // 专业职称流水号
        idStaffType.value = IsNullOrEmptyEq0(pobjTeacherInfoEN.idStaffType); // 职工类型
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        idTeacher.value = '';
        teacherId.value = '';
        teacherName.value = '';
        idSex.value = '0';
        idEthnic.value = '0';
        idXzCollege.value = '0';
        idPolitics.value = '0';
        idAdminGrade.value = '0';
        idProfGrade.value = '0';
        idStaffType.value = '0';
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
              if (['02', '03', '06'].indexOf(clsTeacherInfoEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (TeacherInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsTeacherInfoEN._CurrTabName,
                      returnKeyId,
                    );
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (TeacherInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(
                      clsTeacherInfoEN._CurrTabName,
                      keyId.value,
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In TeacherInfo_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (TeacherInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGvCache(
                    clsTeacherInfoEN._CurrTabName,
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
      const strTitle = ref('教师编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<TeacherInfo_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: TeacherInfo_EditEx) => {
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

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelTeacherInfo':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitTeacherInfo':
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
          case 'btnCancelTeacherInfo':
            return strCancelButtonText.value;
          case 'btnSubmitTeacherInfo':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
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
        GetEditDataTeacherInfoObj,
        ShowDataFromTeacherInfoObj,
        Clear,
        btnSubmit_Click,
        idTeacher,
        teacherId,
        teacherName,
        idSex,
        idEthnic,
        idXzCollege,
        idPolitics,
        idAdminGrade,
        idProfGrade,
        idStaffType,
        modifyUserId,
        modifyDate,
        arrSex,
        arrRsEthnic,
        arrXzClg,
        arrRsPolitics,
        arrRsAdminGrade,
        arrRsProfGrade,
        arrRsStaffType,

        SetButtonText,
        GetButtonText,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //TeacherInfo_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnTeacherInfo_Edit_Click(strCommandName: string, strKeyId: string) {
        TeacherInfo_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_TeacherInfo(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new TeacherInfo_EditEx('TeacherInfo_EditEx', new TeacherInfoCRUDEx());
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

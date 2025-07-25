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
          <tr id="trStuName">
            <td class="text-right">
              <label
                id="lblStuId"
                name="lblStuId"
                class="col-form-label text-right"
                style="width: 90px"
                >学号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuId"
                v-model="stuId"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblStuName"
                name="lblStuName"
                class="col-form-label text-right"
                style="width: 90px"
                >姓名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuName"
                v-model="stuName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdSex">
            <td class="text-right">
              <label
                id="lblIdPolitics"
                name="lblIdPolitics"
                class="col-form-label text-right"
                style="width: 90px"
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
              <label
                id="lblIdSex"
                name="lblIdSex"
                class="col-form-label text-right"
                style="width: 90px"
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
          <tr id="trIdStuType">
            <td class="text-right">
              <label
                id="lblIdEthnic"
                name="lblIdEthnic"
                class="col-form-label text-right"
                style="width: 90px"
                >民族流水号
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
              <label
                id="lblIdStuType"
                name="lblIdStuType"
                class="col-form-label text-right"
                style="width: 90px"
                >学生类别
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdStuType"
                v-model="idStuType"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrRsStuType" :key="index" :value="item.idStuType">
                  {{ item.stuTypeDesc }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIdGrade">
            <td class="text-right">
              <label
                id="lblIdGradeBase"
                name="lblIdGradeBase"
                class="col-form-label text-right"
                style="width: 90px"
                >入学年级
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
            <td class="text-right">
              <label
                id="lblIdGrade"
                name="lblIdGrade"
                class="col-form-label text-right"
                style="width: 90px"
                >年级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdGrade"
                v-model="idGrade"
                class="form-control form-control-sm"
                @change="ddlIdGrade_SelectedIndexChanged($event)"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                  {{ item.gradeName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trBirthday">
            <td class="text-right">
              <label
                id="lblIdAdminCls"
                name="lblIdAdminCls"
                class="col-form-label text-right"
                style="width: 90px"
                >行政班
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdAdminCls"
                v-model="idAdminCls"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option
                  v-for="(item, index) in arrXzAdminCls"
                  :key="index"
                  :value="item.idAdminCls"
                >
                  {{ item.adminClsName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblBirthday"
                name="lblBirthday"
                class="col-form-label text-right"
                style="width: 90px"
                >出生日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtBirthday"
                v-model="birthday"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trLiveAddress">
            <td class="text-right">
              <label
                id="lblIdCardNo"
                name="lblIdCardNo"
                class="col-form-label text-right"
                style="width: 90px"
                >身份证号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdCardNo"
                v-model="idCardNo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblLiveAddress"
                name="lblLiveAddress"
                class="col-form-label text-right"
                style="width: 90px"
                >居住地址
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLiveAddress"
                v-model="liveAddress"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trEnrollmentDate">
            <td class="text-right">
              <label
                id="lblHomePhone"
                name="lblHomePhone"
                class="col-form-label text-right"
                style="width: 90px"
                >住宅电话
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtHomePhone"
                v-model="homePhone"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblEnrollmentDate"
                name="lblEnrollmentDate"
                class="col-form-label text-right"
                style="width: 90px"
                >入校日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtEnrollmentDate"
                v-model="enrollmentDate"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trEmail">
            <td class="text-right">
              <label
                id="lblPostCode"
                name="lblPostCode"
                class="col-form-label text-right"
                style="width: 90px"
                >邮编
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPostCode"
                v-model="postCode"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblEmail"
                name="lblEmail"
                class="col-form-label text-right"
                style="width: 90px"
                >电子邮箱
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtEmail"
                v-model="email"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblPhoneNumber"
                name="lblPhoneNumber"
                class="col-form-label text-right"
                style="width: 90px"
                >电话
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtPhoneNumber"
                v-model="phoneNumber"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
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
                style="width: 150px"
              />
            </td>
          </tr> </tbody
      ></table>
    </div>
    <template #footer>
      <el-button id="btnCancelStudentInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitStudentInfo" type="primary" @click="btnSubmit_Click">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import StudentInfoZx_EditEx from '@/viewsShare/UserManage/StudentInfoZx_EditEx';
  import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
  import { clsRsPoliticsEN } from '@/ts/L0Entity/SysPara/clsRsPoliticsEN';
  import { clsSexEN } from '@/ts/L0Entity/SysPara/clsSexEN';
  import { clsRsEthnicEN } from '@/ts/L0Entity/SysPara/clsRsEthnicEN';
  import { clsRsStuTypeEN } from '@/ts/L0Entity/EPortfolio/clsRsStuTypeEN';
  import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
  import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
  import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
  import { RsPolitics_GetArrRsPolitics } from '@/ts/L3ForWApi/SysPara/clsRsPoliticsWApi';
  import { Sex_GetArrSex } from '@/ts/L3ForWApi/SysPara/clsSexWApi';
  import { RsEthnic_GetArrRsEthnic } from '@/ts/L3ForWApi/SysPara/clsRsEthnicWApi';
  import { RsStuType_GetArrRsStuType } from '@/ts/L3ForWApi/EPortfolio/clsRsStuTypeWApi';
  import { XzGradeBase_GetArrXzGradeBaseByIsVisible } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
  import { XzGrade_GetArrXzGrade } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
  import { XzAdminCls_GetArrXzAdminClsByIdGrade } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
  import { IdGrade_Static, refDivEdit } from '@/viewsShare/UserManage/StudentInfoZxCRUDVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { StudentInfoZx_Edit } from '@/viewsBase/UserManage/StudentInfoZx_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'StudentInfoZxEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const idStudentInfo = ref('');
      const stuId = ref('');
      const stuName = ref('');
      const idPolitics = ref('');
      const idSex = ref('');
      const idEthnic = ref('');
      const idStuType = ref('');
      const idGradeBase = ref('');
      const idGrade = ref('');
      const idAdminCls = ref('');
      const birthday = ref('');
      const idCardNo = ref('');
      const liveAddress = ref('');
      const homePhone = ref('');
      const enrollmentDate = ref('');
      const postCode = ref('');
      const email = ref('');
      const phoneNumber = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrRsPolitics = ref<clsRsPoliticsEN[] | null>([]);
      const arrSex = ref<clsSexEN[] | null>([]);
      const arrRsEthnic = ref<clsRsEthnicEN[] | null>([]);
      const arrRsStuType = ref<clsRsStuTypeEN[] | null>([]);
      const arrXzGradeBase = ref<clsXzGradeBaseEN[] | null>([]);
      const arrXzGrade = ref<clsXzGradeEN[] | null>([]);
      const arrXzAdminCls = ref<clsXzAdminClsEN[] | null>([]);

      /* 函数功能:系统生成的Change事件函数
    (AutoGCLib.Vue_ViewScript_Edit_TS4Html+<>c__DisplayClass45_0:<Gen_Vue_Ts_GeneEventFuncEx>b__1)
  */
      const ddlIdGrade_SelectedIndexChanged = async (e: Event) => {
        console.log(e);
        //alert('请在事件函数中重写该函数!');
        if (IsNullOrEmpty(idGrade.value) == false) {
          arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(idGrade.value); //编辑区域
          idAdminCls.value = '0';
          // idAdminCls.value = pobjStudentInfoEN.idAdminCls; // 行政班
        }
      };

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strIdGrade_Static = IdGrade_Static.value; //静态变量;//静态变量

        arrRsPolitics.value = await RsPolitics_GetArrRsPolitics(); //编辑区域
        idPolitics.value = '0';

        arrSex.value = await Sex_GetArrSex(); //编辑区域
        idSex.value = '0';

        arrRsEthnic.value = await RsEthnic_GetArrRsEthnic(); //编辑区域
        idEthnic.value = '0';

        arrRsStuType.value = await RsStuType_GetArrRsStuType(); //编辑区域
        idStuType.value = '0';

        arrXzGradeBase.value = await XzGradeBase_GetArrXzGradeBaseByIsVisible(true); //编辑区域
        idGradeBase.value = '0';

        arrXzGrade.value = await XzGrade_GetArrXzGrade(); //编辑区域
        idGrade.value = '0';

        // arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(strIdGrade_Static); //编辑区域
        // idAdminCls.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjStudentInfoEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataStudentInfoObj() {
        const pobjStudentInfoEN = new clsStudentInfoEN();
        pobjStudentInfoEN.SetIdStudentInfo(idStudentInfo.value); // 学生流水号
        pobjStudentInfoEN.SetStuId(stuId.value); // 学号
        pobjStudentInfoEN.SetStuName(stuName.value); // 姓名
        pobjStudentInfoEN.SetIdPolitics(idPolitics.value); // 政治面貌
        pobjStudentInfoEN.SetIdSex(idSex.value); // 性别
        pobjStudentInfoEN.SetIdEthnic(idEthnic.value); // 民族流水号
        pobjStudentInfoEN.SetIdStuType(idStuType.value); // 学生类别
        pobjStudentInfoEN.SetIdGradeBase(idGradeBase.value); // 入学年级
        pobjStudentInfoEN.SetIdGrade(idGrade.value); // 年级
        pobjStudentInfoEN.SetIdAdminCls(idAdminCls.value); // 行政班
        pobjStudentInfoEN.SetBirthday(birthday.value); // 出生日期
        pobjStudentInfoEN.SetIdCardNo(idCardNo.value); // 身份证号
        pobjStudentInfoEN.SetLiveAddress(liveAddress.value); // 居住地址
        pobjStudentInfoEN.SetHomePhone(homePhone.value); // 住宅电话
        pobjStudentInfoEN.SetEnrollmentDate(enrollmentDate.value); // 入校日期
        pobjStudentInfoEN.SetPostCode(postCode.value); // 邮编
        pobjStudentInfoEN.SetEmail(email.value); // 电子邮箱
        pobjStudentInfoEN.SetPhoneNumber(phoneNumber.value); // 电话
        pobjStudentInfoEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjStudentInfoEN.SetUpdUser(userStore.getUserId); // 修改人
        pobjStudentInfoEN.SetMemo(memo.value); // 备注
        return pobjStudentInfoEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjStudentInfoEN">表实体类对象</param>
       **/
      async function ShowDataFromStudentInfoObj(pobjStudentInfoEN: clsStudentInfoEN) {
        idStudentInfo.value = pobjStudentInfoEN.idStudentInfo; // 学生流水号
        stuId.value = pobjStudentInfoEN.stuId; // 学号
        stuName.value = pobjStudentInfoEN.stuName; // 姓名
        idPolitics.value = pobjStudentInfoEN.idPolitics; // 政治面貌
        idSex.value = pobjStudentInfoEN.idSex; // 性别
        idEthnic.value = pobjStudentInfoEN.idEthnic; // 民族流水号
        idStuType.value = pobjStudentInfoEN.idStuType; // 学生类别
        idGradeBase.value = pobjStudentInfoEN.idGradeBase; // 入学年级
        idGrade.value = pobjStudentInfoEN.idGrade; // 年级
        if (IsNullOrEmpty(idGrade.value) == false) {
          arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(idGrade.value); //编辑区域
          // idAdminCls.value = '0';
          idAdminCls.value = pobjStudentInfoEN.idAdminCls; // 行政班
        }
        birthday.value = pobjStudentInfoEN.birthday; // 出生日期
        idCardNo.value = pobjStudentInfoEN.idCardNo; // 身份证号
        liveAddress.value = pobjStudentInfoEN.liveAddress; // 居住地址
        homePhone.value = pobjStudentInfoEN.homePhone; // 住宅电话
        enrollmentDate.value = pobjStudentInfoEN.enrollmentDate; // 入校日期
        postCode.value = pobjStudentInfoEN.postCode; // 邮编
        email.value = pobjStudentInfoEN.email; // 电子邮箱
        phoneNumber.value = pobjStudentInfoEN.phoneNumber; // 电话
        memo.value = pobjStudentInfoEN.memo; // 备注
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_Clear)
       **/
      function Clear() {
        idStudentInfo.value = '';
        stuId.value = '';
        stuName.value = '';
        idPolitics.value = '0';
        idSex.value = '0';
        idEthnic.value = '0';
        idStuType.value = '0';
        idGradeBase.value = '0';
        idGrade.value = '0';
        idAdminCls.value = '0';
        birthday.value = '';
        idCardNo.value = '';
        liveAddress.value = '';
        homePhone.value = '';
        enrollmentDate.value = '';
        postCode.value = '';
        email.value = '';
        phoneNumber.value = '';
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
              if (['02', '03', '06'].indexOf(clsStudentInfoEN.PrimaryTypeId) > -1) {
                returnKeyId = await objPage_Edit.value.AddNewRecordWithMaxIdSave();
                if (IsNullOrEmpty(returnKeyId) == false) {
                  if (StudentInfoZx_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsStudentInfoEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (StudentInfoZx_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsStudentInfoEN._CurrTabName, keyId.value);
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In StudentInfoZx_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (StudentInfoZx_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(clsStudentInfoEN._CurrTabName, keyId.value);
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
      const strTitle = ref('学生编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<StudentInfoZx_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async (pobjPage_Edit: StudentInfoZx_EditEx) => {
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
        GetEditDataStudentInfoObj,
        ShowDataFromStudentInfoObj,
        Clear,
        btnSubmit_Click,
        idStudentInfo,
        stuId,
        stuName,
        idPolitics,
        idSex,
        idEthnic,
        idStuType,
        idGradeBase,
        idGrade,
        idAdminCls,
        birthday,
        idCardNo,
        liveAddress,
        homePhone,
        enrollmentDate,
        postCode,
        email,
        phoneNumber,
        updDate,
        updUser,
        memo,
        arrRsPolitics,
        arrSex,
        arrRsEthnic,
        arrRsStuType,
        arrXzGradeBase,
        arrXzGrade,
        arrXzAdminCls,
        ddlIdGrade_SelectedIndexChanged,
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
      btnStudentInfo_Edit_Click(strCommandName: string, strKeyId: string) {
        StudentInfoZx_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

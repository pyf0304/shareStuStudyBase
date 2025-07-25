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
          <tr id="trIdXzCollege">
            <td class="text-right">
              <label
                id="lblIdSex"
                name="lblIdSex"
                class="col-form-label text-right"
                style="width: 90px"
                >性别流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdSex"
                v-model="idSex"
                class="form-control form-control-sm"
                style="width: 150px"
              />
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
          <tr id="trIdGradeBase">
            <td class="text-right">
              <label
                id="lblIdXzMajor"
                name="lblIdXzMajor"
                class="col-form-label text-right"
                style="width: 90px"
                >专业
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdXzMajor"
                v-model="idXzMajor"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrXzMajor" :key="index" :value="item.idXzMajor">
                  {{ item.majorName }}
                </option></select
              >
            </td>
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
          </tr>
          <tr id="trPhoneNumber">
            <td class="text-right">
              <label
                id="lblIdGrade"
                name="lblIdGrade"
                class="col-form-label text-right"
                style="width: 90px"
                >中小学年级
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlIdGrade"
                v-model="idGrade"
                class="form-control form-control-sm"
                style="width: 200px"
              >
                <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                  {{ item.gradeName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblPhoneNumber"
                name="lblPhoneNumber"
                class="col-form-label text-right"
                style="width: 90px"
                >手机
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
          </tr>
          <tr id="trIdPolitics">
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
                id="lblIdPolitics"
                name="lblIdPolitics"
                class="col-form-label text-right"
                style="width: 90px"
                >政治面貌
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdPolitics"
                v-model="idPolitics"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdUniZone">
            <td class="text-right">
              <label
                id="lblIdEthnic"
                name="lblIdEthnic"
                class="col-form-label text-right"
                style="width: 90px"
                >民族
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdEthnic"
                v-model="idEthnic"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblIdUniZone"
                name="lblIdUniZone"
                class="col-form-label text-right"
                style="width: 90px"
                >校区
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdUniZone"
                v-model="idUniZone"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdAdminCls">
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
          </tr>
          <tr id="trNativePlace">
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
            <td class="text-right">
              <label
                id="lblNativePlace"
                name="lblNativePlace"
                class="col-form-label text-right"
                style="width: 90px"
                >籍贯
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtNativePlace"
                v-model="nativePlace"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIdCardNo">
            <td class="text-right">
              <label
                id="lblDuty"
                name="lblDuty"
                class="col-form-label text-right"
                style="width: 90px"
                >职位
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtDuty"
                v-model="duty"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
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
          </tr>
          <tr id="trLiveAddress">
            <td class="text-right">
              <label
                id="lblStuCardNo"
                name="lblStuCardNo"
                class="col-form-label text-right"
                style="width: 90px"
                >学生证号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStuCardNo"
                v-model="stuCardNo"
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
          <tr id="trCardNo">
            <td class="text-right">
              <label
                id="lblIdCardNo2"
                name="lblIdCardNo2"
                class="col-form-label text-right"
                style="width: 90px"
                >内卡号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdCardNo2"
                v-model="idCardNo2"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCardNo"
                name="lblCardNo"
                class="col-form-label text-right"
                style="width: 90px"
                >卡号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCardNo"
                v-model="cardNo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsLeaved">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsGpUser"
                  v-model="isGpUser"
                  type="checkbox"
                  Text="是否Gp用户"
                /><label for="chkIsGpUser">是否Gp用户</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkIsLeaved" v-model="isLeaved" type="checkbox" Text="IsLeaved" /><label
                  for="chkIsLeaved"
                  >IsLeaved</label
                ></span
              >
            </td>
          </tr>
          <tr id="trEnrollmentDate">
            <td class="text-right">
              <label
                id="lblUserId"
                name="lblUserId"
                class="col-form-label text-right"
                style="width: 90px"
                >用户ID
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtUserId"
                v-model="userId"
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
          <tr id="trMemo">
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
  import StudentInfo_EditEx from '@/viewsShare/UserManage/StudentInfo_EditEx';
  import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
  import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
  import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
  import { clsRsStuTypeEN } from '@/ts/L0Entity/EPortfolio/clsRsStuTypeEN';
  import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
  import { XzClg_GetArrXzClgByUserTypeId } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
  import { XzMajor_GetArrXzMajor } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
  import { XzGradeBase_GetArrXzGradeBaseByIsVisible } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
  import { XzGrade_GetArrXzGrade } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
  import { RsStuType_GetArrRsStuType } from '@/ts/L3ForWApi/EPortfolio/clsRsStuTypeWApi';
  import { XzAdminCls_GetArrXzAdminClsByIdGrade } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
  import { IdSchool_Session, refDivEdit } from '@/viewsShare/UserManage/StudentInfoVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { StudentInfo_Edit } from '@/viewsBase/UserManage/StudentInfo_Edit';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'StudentInfoEdit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const idStudentInfo = ref('');
      const stuId = ref('');
      const stuName = ref('');
      const idSex = ref('');
      const idXzCollege = ref('');
      const idXzMajor = ref('');
      const idGradeBase = ref('');
      const idGrade = ref('');
      const phoneNumber = ref('');
      const homePhone = ref('');
      const idPolitics = ref('');
      const idEthnic = ref('');
      const idUniZone = ref('');
      const idStuType = ref('');
      const idAdminCls = ref('');
      const birthday = ref('');
      const nativePlace = ref('');
      const duty = ref('');
      const idCardNo = ref('');
      const stuCardNo = ref('');
      const liveAddress = ref('');
      const idCardNo2 = ref('');
      const cardNo = ref('');
      const isGpUser = ref(true);
      const isLeaved = ref(true);
      const userId = ref('');
      const enrollmentDate = ref('');
      const email = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrXzClg = ref<clsXzClgEN[] | null>([]);
      const arrXzMajor = ref<clsXzMajorEN[] | null>([]);
      const arrXzGradeBase = ref<clsXzGradeBaseEN[] | null>([]);
      const arrXzGrade = ref<clsXzGradeEN[] | null>([]);
      const arrRsStuType = ref<clsRsStuTypeEN[] | null>([]);
      const arrXzAdminCls = ref<clsXzAdminClsEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        const strIdSchool = IdSchool_Session.value; //静态变量;//Session存储、local存储

        arrXzClg.value = await XzClg_GetArrXzClgByUserTypeId(userStore.userTypeId); //编辑区域

        arrXzMajor.value = await XzMajor_GetArrXzMajor(); //编辑区域

        arrXzGradeBase.value = await XzGradeBase_GetArrXzGradeBaseByIsVisible(true); //编辑区域

        arrXzGrade.value = await XzGrade_GetArrXzGrade(); //编辑区域

        arrRsStuType.value = await RsStuType_GetArrRsStuType(); //编辑区域

        // arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(''); //编辑区域
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
        pobjStudentInfoEN.SetIdSex(idSex.value); // 性别流水号
        pobjStudentInfoEN.SetIdXzCollege(idXzCollege.value); // 学院
        pobjStudentInfoEN.SetIdXzMajor(idXzMajor.value); // 专业
        pobjStudentInfoEN.SetIdGradeBase(idGradeBase.value); // 入学年级
        pobjStudentInfoEN.SetIdGrade(idGrade.value); // 中小学年级
        pobjStudentInfoEN.SetPhoneNumber(phoneNumber.value); // 手机
        pobjStudentInfoEN.SetHomePhone(homePhone.value); // 住宅电话
        pobjStudentInfoEN.SetIdPolitics(idPolitics.value); // 政治面貌
        pobjStudentInfoEN.SetIdEthnic(idEthnic.value); // 民族
        pobjStudentInfoEN.SetIdUniZone(idUniZone.value); // 校区
        pobjStudentInfoEN.SetIdStuType(idStuType.value); // 学生类别
        pobjStudentInfoEN.SetIdAdminCls(idAdminCls.value); // 行政班
        pobjStudentInfoEN.SetBirthday(birthday.value); // 出生日期
        pobjStudentInfoEN.SetNativePlace(nativePlace.value); // 籍贯
        pobjStudentInfoEN.SetDuty(duty.value); // 职位
        pobjStudentInfoEN.SetIdCardNo(idCardNo.value); // 身份证号
        pobjStudentInfoEN.SetStuCardNo(stuCardNo.value); // 学生证号
        pobjStudentInfoEN.SetLiveAddress(liveAddress.value); // 居住地址
        pobjStudentInfoEN.SetIdCardNo2(idCardNo2.value); // 内卡号
        pobjStudentInfoEN.SetCardNo(cardNo.value); // 卡号
        pobjStudentInfoEN.SetIsGpUser(isGpUser.value); // 是否Gp用户
        pobjStudentInfoEN.SetIsLeaved(isLeaved.value); // IsLeaved
        pobjStudentInfoEN.SetUserId(userId.value); // 用户ID
        pobjStudentInfoEN.SetEnrollmentDate(enrollmentDate.value); // 入校日期
        pobjStudentInfoEN.SetEmail(email.value); // 电子邮箱
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
        idSex.value = pobjStudentInfoEN.idSex; // 性别流水号
        idXzCollege.value = pobjStudentInfoEN.idXzCollege; // 学院
        idXzMajor.value = pobjStudentInfoEN.idXzMajor; // 专业
        idGradeBase.value = pobjStudentInfoEN.idGradeBase; // 入学年级
        idGrade.value = pobjStudentInfoEN.idGrade; // 中小学年级
        phoneNumber.value = pobjStudentInfoEN.phoneNumber; // 手机
        homePhone.value = pobjStudentInfoEN.homePhone; // 住宅电话
        idPolitics.value = pobjStudentInfoEN.idPolitics; // 政治面貌
        idEthnic.value = pobjStudentInfoEN.idEthnic; // 民族
        idUniZone.value = pobjStudentInfoEN.idUniZone; // 校区
        idStuType.value = pobjStudentInfoEN.idStuType; // 学生类别
        idAdminCls.value = pobjStudentInfoEN.idAdminCls; // 行政班
        birthday.value = pobjStudentInfoEN.birthday; // 出生日期
        nativePlace.value = pobjStudentInfoEN.nativePlace; // 籍贯
        duty.value = pobjStudentInfoEN.duty; // 职位
        idCardNo.value = pobjStudentInfoEN.idCardNo; // 身份证号
        stuCardNo.value = pobjStudentInfoEN.stuCardNo; // 学生证号
        liveAddress.value = pobjStudentInfoEN.liveAddress; // 居住地址
        idCardNo2.value = pobjStudentInfoEN.idCardNo2; // 内卡号
        cardNo.value = pobjStudentInfoEN.cardNo; // 卡号
        isGpUser.value = pobjStudentInfoEN.isGpUser; // 是否Gp用户
        isLeaved.value = pobjStudentInfoEN.isLeaved; // IsLeaved
        userId.value = pobjStudentInfoEN.userId; // 用户ID
        enrollmentDate.value = pobjStudentInfoEN.enrollmentDate; // 入校日期
        email.value = pobjStudentInfoEN.email; // 电子邮箱
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
        idSex.value = '';
        idXzCollege.value = '0';
        idXzMajor.value = '0';
        idGradeBase.value = '0';
        idGrade.value = '0';
        phoneNumber.value = '';
        homePhone.value = '';
        idPolitics.value = '';
        idEthnic.value = '';
        idUniZone.value = '';
        idStuType.value = '0';
        idAdminCls.value = '0';
        birthday.value = '';
        nativePlace.value = '';
        duty.value = '';
        idCardNo.value = '';
        stuCardNo.value = '';
        liveAddress.value = '';
        idCardNo2.value = '';
        cardNo.value = '';
        isGpUser.value = false;
        isLeaved.value = false;
        userId.value = '';
        enrollmentDate.value = '';
        email.value = '';
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
                  if (StudentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                    hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(clsStudentInfoEN._CurrTabName, returnKeyId);
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (StudentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
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
              strInfo += '(In StudentInfo_Edit.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (StudentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
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
      const objPage_Edit = ref<StudentInfo_EditEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
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
        idSex,
        idXzCollege,
        idXzMajor,
        idGradeBase,
        idGrade,
        phoneNumber,
        homePhone,
        idPolitics,
        idEthnic,
        idUniZone,
        idStuType,
        idAdminCls,
        birthday,
        nativePlace,
        duty,
        idCardNo,
        stuCardNo,
        liveAddress,
        idCardNo2,
        cardNo,
        isGpUser,
        isLeaved,
        userId,
        enrollmentDate,
        email,
        updDate,
        updUser,
        memo,
        arrXzClg,
        arrXzMajor,
        arrXzGradeBase,
        arrXzGrade,
        arrRsStuType,
        arrXzAdminCls,
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
        StudentInfo_EditEx.btnEdit_Click(strCommandName, strKeyId);
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

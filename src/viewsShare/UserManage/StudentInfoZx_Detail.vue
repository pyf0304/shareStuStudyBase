<template>
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
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <span
                id="spnIdStudentInfo_d"
                name="spnIdStudentInfo_d"
                CssClass="col-form-label text-right"
                >学生流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdStudentInfo_d"
                name="lblIdStudentInfo_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnStuId_d" name="spnStuId_d" CssClass="col-form-label text-right"
                >学号</span
              >
            </td>
            <td class="text-left">
              <label id="lblStuId_d" name="lblStuId_d" class="text-primary" style="width: 150px">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnStuName_d" name="spnStuName_d" CssClass="col-form-label text-right"
                >姓名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStuName_d"
                name="lblStuName_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnIdPolitics_d" name="spnIdPolitics_d" CssClass="col-form-label text-right"
                >政治面貌流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdPolitics_d"
                name="lblIdPolitics_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIdSex_d" name="spnIdSex_d" CssClass="col-form-label text-right"
                >性别流水号</span
              >
            </td>
            <td class="text-left">
              <label id="lblIdSex_d" name="lblIdSex_d" class="text-primary" style="width: 150px">
              </label>
            </td>
            <td class="text-right">
              <span id="spnIdEthnic_d" name="spnIdEthnic_d" CssClass="col-form-label text-right"
                >民族流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdEthnic_d"
                name="lblIdEthnic_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIdUniZone_d" name="spnIdUniZone_d" CssClass="col-form-label text-right"
                >校区流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdUniZone_d"
                name="lblIdUniZone_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnIdStuType_d" name="spnIdStuType_d" CssClass="col-form-label text-right"
                >学生类别流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdStuType_d"
                name="lblIdStuType_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIdXzCollege_d"
                name="spnIdXzCollege_d"
                CssClass="col-form-label text-right"
                >学院流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdXzCollege_d"
                name="lblIdXzCollege_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnIdXzMajor_d" name="spnIdXzMajor_d" CssClass="col-form-label text-right"
                >专业流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdXzMajor_d"
                name="lblIdXzMajor_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIdGradeBase_d"
                name="spnIdGradeBase_d"
                CssClass="col-form-label text-right"
                >年级流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdGradeBase_d"
                name="lblIdGradeBase_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnIdGrade_d" name="spnIdGrade_d" CssClass="col-form-label text-right"
                >年级流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdGrade_d"
                name="lblIdGrade_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIdAdminCls_d" name="spnIdAdminCls_d" CssClass="col-form-label text-right"
                >行政班流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdAdminCls_d"
                name="lblIdAdminCls_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnBirthday_d" name="spnBirthday_d" CssClass="col-form-label text-right"
                >出生日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblBirthday_d"
                name="lblBirthday_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnNativePlace_d"
                name="spnNativePlace_d"
                CssClass="col-form-label text-right"
                >籍贯</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblNativePlace_d"
                name="lblNativePlace_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnDuty_d" name="spnDuty_d" CssClass="col-form-label text-right">职位</span>
            </td>
            <td class="text-left">
              <label id="lblDuty_d" name="lblDuty_d" class="text-primary" style="width: 150px">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIdCardNo_d" name="spnIdCardNo_d" CssClass="col-form-label text-right"
                >身份证号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdCardNo_d"
                name="lblIdCardNo_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnStuCardNo_d" name="spnStuCardNo_d" CssClass="col-form-label text-right"
                >学生证号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblStuCardNo_d"
                name="lblStuCardNo_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnLiveAddress_d"
                name="spnLiveAddress_d"
                CssClass="col-form-label text-right"
                >居住地址</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLiveAddress_d"
                name="lblLiveAddress_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnHomePhone_d" name="spnHomePhone_d" CssClass="col-form-label text-right"
                >住宅电话</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblHomePhone_d"
                name="lblHomePhone_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIdCardNo2_d" name="spnIdCardNo2_d" CssClass="col-form-label text-right"
                >内卡号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdCardNo2_d"
                name="lblIdCardNo2_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnCardNo_d" name="spnCardNo_d" CssClass="col-form-label text-right"
                >卡号</span
              >
            </td>
            <td class="text-left">
              <label id="lblCardNo_d" name="lblCardNo_d" class="text-primary" style="width: 150px">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsGpUser_d" name="spnIsGpUser_d" CssClass="col-form-label text-right"
                >是否Gp用户</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsGpUser_d"
                name="lblIsGpUser_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnIsLocalUser_d"
                name="spnIsLocalUser_d"
                CssClass="col-form-label text-right"
                >是否本地用户</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsLocalUser_d"
                name="lblIsLocalUser_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsLeaved_d" name="spnIsLeaved_d" CssClass="col-form-label text-right"
                >是否离开</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsLeaved_d"
                name="lblIsLeaved_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnUserId_d" name="spnUserId_d" CssClass="col-form-label text-right"
                >用户ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblUserId_d" name="lblUserId_d" class="text-primary" style="width: 150px">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnUserType_d" name="spnUserType_d" CssClass="col-form-label text-right"
                >用户类型</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblUserType_d"
                name="lblUserType_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnEnrollmentDate_d"
                name="spnEnrollmentDate_d"
                CssClass="col-form-label text-right"
                >入校日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblEnrollmentDate_d"
                name="lblEnrollmentDate_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnPostCode_d" name="spnPostCode_d" CssClass="col-form-label text-right"
                >邮编</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPostCode_d"
                name="lblPostCode_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnEmail_d" name="spnEmail_d" CssClass="col-form-label text-right"
                >电子邮箱</span
              >
            </td>
            <td class="text-left">
              <label id="lblEmail_d" name="lblEmail_d" class="text-primary" style="width: 150px">
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsMessage_d" name="spnIsMessage_d" CssClass="col-form-label text-right"
                >IsMessage</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsMessage_d"
                name="lblIsMessage_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnMicroblog_d" name="spnMicroblog_d" CssClass="col-form-label text-right"
                >Microblog</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblMicroblog_d"
                name="lblMicroblog_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnPhoneNumber_d"
                name="spnPhoneNumber_d"
                CssClass="col-form-label text-right"
                >电话</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblPhoneNumber_d"
                name="lblPhoneNumber_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
            <td class="text-right">
              <span id="spnHeadphoto_d" name="spnHeadphoto_d" CssClass="col-form-label text-right"
                >Headphoto</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblHeadphoto_d"
                name="lblHeadphoto_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnQQ_d" name="spnQQ_d" CssClass="col-form-label text-right">QQ</span>
            </td>
            <td class="text-left">
              <label id="lblQQ_d" name="lblQQ_d" class="text-primary" style="width: 150px"> </label>
            </td>
            <td class="text-right">
              <span
                id="spnRegisterPassword_d"
                name="spnRegisterPassword_d"
                CssClass="col-form-label text-right"
                >RegisterPassword</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblRegisterPassword_d"
                name="lblRegisterPassword_d"
                class="text-primary"
                style="width: 150px"
              >
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
              </label>
            </td>
            <td class="text-right">
              <span id="spnGradeName_d" name="spnGradeName_d" CssClass="col-form-label text-right"
                >年级名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblGradeName_d" name="lblGradeName_d" class="text-primary"> </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnGradeBaseName_d"
                name="spnGradeBaseName_d"
                CssClass="col-form-label text-right"
                >年级名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblGradeBaseName_d" name="lblGradeBaseName_d" class="text-primary">
              </label>
            </td>
            <td class="text-right">
              <span
                id="spnUniZoneDesc_d"
                name="spnUniZoneDesc_d"
                CssClass="col-form-label text-right"
                >校区名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblUniZoneDesc_d" name="lblUniZoneDesc_d" class="text-primary"> </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCollegeName_d"
                name="spnCollegeName_d"
                CssClass="col-form-label text-right"
                >学院名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblCollegeName_d" name="lblCollegeName_d" class="text-primary"> </label>
            </td>
            <td class="text-right">
              <span id="spnMajorName_d" name="spnMajorName_d" CssClass="col-form-label text-right"
                >专业名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblMajorName_d" name="lblMajorName_d" class="text-primary"> </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnSexDesc_d" name="spnSexDesc_d" CssClass="col-form-label text-right"
                >性别名称</span
              >
            </td>
            <td class="text-left">
              <label id="lblSexDesc_d" name="lblSexDesc_d" class="text-primary"> </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelStudentInfo" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import StudentInfoZx_DetailEx from '@/viewsShare/UserManage/StudentInfoZx_DetailEx';
  export default defineComponent({
    name: 'StudentInfoZx_Detail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('学生详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelStudentInfo':
            strCancelButtonText.value = strNewValue;
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
          case 'btnCancelStudentInfo':
            return strCancelButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        refDivDetail,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
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
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnStudentInfo_Detail_Click(strCommandName: string, strKeyId: string) {
        StudentInfoZx_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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

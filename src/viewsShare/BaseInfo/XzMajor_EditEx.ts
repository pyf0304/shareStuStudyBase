// import { XzMajor_Edit } from '@/viewsBase/BaseInfo/XzMajor_Edit';
import $ from 'jquery';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { XzClg_BindDdl_IdXzCollegeByUserTypeIdInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_GetObjByIdXzMajorAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { XzMajor_Edit } from '@/viewsBase/BaseInfo/XzMajor_Edit';
import { useUserStore } from '@/store/modulesShare/user';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  divVarSet,
  refXzMajorDirection_Edit,
} from '@/viewsShare/BaseInfo/XzMajorDirectionVueShare';

import { enumUserType } from '@/ts/L0Entity/UserManage/clsUserTypeEN';

/* XzMajor_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class XzMajor_EditEx extends XzMajor_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: XzMajor_EditEx = <XzMajor_EditEx>XzMajor_Edit.GetPageEditObj('XzMajor_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'XzMajor_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'XzMajor_EditEx.btn_Click');

        break;
    }
  }

  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      const userStore = useUserStore();
      const bolIsSuccess = await this.ShowDialog_XzMajor(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      // await this.BindDdl4EditRegionInDiv();
      this.ShowDialog_XzMajor('Add');
      this.bolIsLoadEditRegion = true; //
      this.AddNewRecord();

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      $('#hidUserId').val(strUserId);

      //判断角色
      //管理员
      if (strRoleId == '00620001') {
        $('#trvisible').show();
      } else if (strRoleId == '00620002') {
        //教师
        $('#trvisible').hide();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  //只有选择了专业类型，才能选择学院；
  public async ddlIdXzMajorShoolTypeClick() {
    try {
      //只有选择了专业类型，才能选择学院；
      if (refXzMajorDirection_Edit.value.idXzMajorShoolType == '0002') {
        //学院专业

        await XzClg_BindDdl_IdXzCollegeByUserTypeIdInDivCache(
          divVarSet.refDivEdit,
          'ddlIdXzCollege',
          enumUserType.UniversityUser_05,
        ); //编辑区域

        //去掉提交按钮不可用状态
        $('#ddlIdXzCollege').attr('disabled', 'false');
      } else {
        //非学院专业；
        $('#ddlIdXzCollege').attr('disabled', 'true');
      }
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    const userStore = useUserStore();
    //读取session角色 来判断绑定不同数据列表
    //获取用户角色来判断显示不同的列表数据；
    const strUserId = userStore.getUserId;
    const strRoleId = userStore.getRoleId;

    //判断角色
    //管理员
    if (strRoleId == '00620001') {
      const bolIsSuccess = await this.ShowDialog_XzMajor(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      // await this.BindDdl4EditRegionInDiv();
      this.ShowDialog_XzMajor('Update');
      this.bolIsLoadEditRegion = true; //
      this.UpdateRecord(strKeyId);
    } else if (strRoleId == '00620002') {
      //教师
      //修改前需要判断 数据是否是当前用户添加 是则可以修改，否则不可修改；
      const responseText = await XzMajor_GetObjByIdXzMajorAsync(strKeyId);
      const objXzMajorEN: clsXzMajorEN = <clsXzMajorEN>responseText;
      if (objXzMajorEN.modifyUserId == strUserId) {
        const bolIsSuccess = await this.ShowDialog_XzMajor(this.opType);
        if (bolIsSuccess == false) return;
        // 为编辑区绑定下拉框
        // await this.BindDdl4EditRegionInDiv();
        this.ShowDialog_XzMajor('Update');
        this.bolIsLoadEditRegion = true; //
        this.UpdateRecord(strKeyId);
      } else {
        const strInfo = `当前数据不是您添加，不可修改`;
        //显示信息框
        alert(strInfo);
        return;
      }
    }
  }
}

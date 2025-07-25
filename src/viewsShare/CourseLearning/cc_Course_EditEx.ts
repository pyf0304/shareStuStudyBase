/**
 * 类名:cc_Course_EditEx(界面:cc_CourseCRUD)
 * 表名:cc_Course(01120056)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:08:17
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:课程学习(CourseLearning)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
import {
  cc_Course_AddNewRecordWithMaxIdAsync,
  cc_Course_CheckProperty4Update,
  cc_Course_CheckPropertyNew,
  cc_Course_ReFreshCache,
  cc_Course_UpdateRecordAsync,
} from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
import { vcc_Course_Sim_ReFreshThisCache } from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { cc_Course_Edit } from '@/viewsBase/CourseLearning/cc_Course_Edit';
import { refcc_Course_Edit } from '@/viewsShare/CourseLearning/cc_CourseVueShare';
/* cc_Course_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class cc_Course_EditEx extends cc_Course_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: cc_Course_EditEx = <cc_Course_EditEx>(
      cc_Course_Edit.GetPageEditObj('cc_Course_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'cc_Course_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    let objcc_CourseEN;
    try {
      objcc_CourseEN = await refcc_Course_Edit.value.GetEditDatacc_CourseObj();
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return ''; //一定要有一个返回值,否则会出错!
    }
    try {
      cc_Course_CheckPropertyNew(objcc_CourseEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objcc_CourseEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await cc_Course_AddNewRecordWithMaxIdAsync(objcc_CourseEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        cc_Course_ReFreshCache();
        vcc_Course_Sim_ReFreshThisCache();
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值,否则会出错!
  }
  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objcc_CourseEN = await refcc_Course_Edit.value.GetEditDatacc_CourseObj();
    objcc_CourseEN.SetCourseId(this.keyId);
    objcc_CourseEN.sfUpdFldSetStr = objcc_CourseEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objcc_CourseEN.courseId == '' || objcc_CourseEN.courseId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      cc_Course_CheckProperty4Update(objcc_CourseEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Update(objcc_CourseEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await cc_Course_UpdateRecordAsync(objcc_CourseEN);
      if (returnBool == true) {
        cc_Course_ReFreshCache();
        vcc_Course_Sim_ReFreshThisCache();
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '修改记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
}

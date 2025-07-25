/**
 * 类名:StudentInfoZx_DetailEx(界面:StudentInfoZxCRUD,01120257)
 * 表名:StudentInfo(01120131)
 * 版本:2024.11.23.1(服务器:PYF-AI)
 * 日期:2024/11/25 11:21:20
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_详细信息后台Ex_TS(TS)(Vue_ViewScript_DetailCSEx_TS,0261)
 * 编程语言:TypeScript
 **/
//import * as $ from "jquery";
//import * as QQ from "q";
import { StudentInfoZx_Detail } from '@/viewsBase/UserManage/StudentInfoZx_Detail';
import StudentInfoZxCRUDEx from '@/viewsShare/UserManage/StudentInfoZxCRUDEx';
/* StudentInfoZx_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export default class StudentInfoZx_DetailEx extends StudentInfoZx_Detail {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_DetailCSEx_TS4TypeScript:Gen_Vue_TS_btnDetail_Click)
 **/
  public static btnDetail_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnDetail_Click.name;
    const objStudentInfoZxCRUD: StudentInfoZxCRUDEx = new StudentInfoZxCRUDEx();
    const objPage: StudentInfoZx_DetailEx = new StudentInfoZx_DetailEx(objStudentInfoZxCRUD);
    console.log(strKeyId, strThisFuncName, objPage);
    let strMsg;
    switch (strCommandName) {
      case 'Detail': //详细信息
        objPage.btnDetailRecord_Click(strKeyId);
        break;
      default:
        strMsg = `命令:${strCommandName} 在函数(StudentInfoZx_Detail.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}

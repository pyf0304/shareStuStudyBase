/**
 * 类名:StudentInfoZxCRUDEx(界面:StudentInfoZxCRUD,01120257)
 * 表名:StudentInfo(01120131)
 * 版本:2024.11.23.1(服务器:PYF-AI)
 * 日期:2024/11/25 11:49:23
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { StudentInfoZxCRUD } from '@/viewsBase/UserManage/StudentInfoZxCRUD';
import {
  viewVarSet,
  divVarSet,
  refStudentInfoZx_Edit,
  refStudentInfoZx_Detail,
} from '@/viewsShare/UserManage/StudentInfoZxCRUDVueShare';
import { Format } from '@/ts/PubFun/clsString';
import StudentInfoZx_EditEx from '@/viewsShare/UserManage/StudentInfoZx_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** StudentInfoZxCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class StudentInfoZxCRUDEx extends StudentInfoZxCRUD implements IShowList {
  //public static mstrSortStudentInfoBy = "IdStudentInfo";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 20;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in StudentInfoZxCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in StudentInfoZxCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_StudentInfo4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'StudentInfo':
        alert('该类没有绑定该函数：[this.BindGv_StudentInfo4Func]!');
        //this.BindGv_StudentInfo4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: StudentInfoZxCRUDEx;
    let objPageEdit;
    if (StudentInfoZxCRUD.objPageCRUD == null) {
      StudentInfoZxCRUD.objPageCRUD = new StudentInfoZxCRUDEx();
      objPage = <StudentInfoZxCRUDEx>StudentInfoZxCRUDEx.objPageCRUD;
    } else {
      objPage = <StudentInfoZxCRUDEx>StudentInfoZxCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new StudentInfoZx_EditEx('StudentInfoZx_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refStudentInfoZx_Edit.value.btnStudentInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        refStudentInfoZx_Detail.value.btnStudentInfo_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new StudentInfoZx_EditEx('StudentInfoZx_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refStudentInfoZx_Edit.value.btnStudentInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(StudentInfoZxCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'sexDesc|Ex':
        viewVarSet.sortStudentInfoBy = `Sex|sexDesc ${sortDirection}|StudentInfo.IdSex = Sex.IdSex`;
        break;
      case 'gradeBaseName|Ex':
        viewVarSet.sortStudentInfoBy = `XzGradeBase|gradeBaseName ${sortDirection}|StudentInfo.IdGradeBase = XzGradeBase.IdGradeBase`;
        break;
      case 'gradeName|Ex':
        viewVarSet.sortStudentInfoBy = `XzGrade|gradeName ${sortDirection}|StudentInfo.IdGrade = XzGrade.IdGrade`;
        break;
      case 'adminClsName|Ex':
        viewVarSet.sortStudentInfoBy = `XzAdminCls|adminClsName ${sortDirection}|StudentInfo.IdAdminCls = XzAdminCls.IdAdminCls`;
        break;
      case 'schoolNameA|Ex':
        viewVarSet.sortStudentInfoBy = `XzSchool|schoolNameA ${sortDirection}|StudentInfo.IdSchool = XzSchool.IdSchool`;
        break;
      case 'dateTimeSim|Ex':
        viewVarSet.sortStudentInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortStudentInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_StudentInfo4Func(this.listPara.listDiv);
  }
}

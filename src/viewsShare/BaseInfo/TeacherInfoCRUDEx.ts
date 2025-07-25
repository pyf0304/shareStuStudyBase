/**
 * 类名:TeacherInfoCRUDEx(界面:TeacherInfoCRUD)
 * 表名:TeacherInfo(01120093)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/27 02:26:06
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { TeacherInfoCRUD } from '@/viewsBase/BaseInfo/TeacherInfoCRUD';
import TeacherInfo_EditEx from '@/viewsShare/BaseInfo/TeacherInfo_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format } from '@/ts/PubFun/clsString';
import { useUserStore } from '@/store/modulesShare/user';
import {
  refTeacherInfo_Edit,
  divVarSet,
  viewVarSet,
  UserTypeId_Session,
} from '@/viewsShare/BaseInfo/TeacherInfoVueShare';
/** TeacherInfoCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class TeacherInfoCRUDEx extends TeacherInfoCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortTeacherInfoBy = "IdTeacher";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_TeacherInfo]!${strType}${strPara}`);
    //this.BindGv_TeacherInfo4Func();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'TeacherInfo':
        this.BindGv_TeacherInfo4Func(divVarSet.refDivList);
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
    let objPage: TeacherInfoCRUDEx;
    let objPageEdit;
    if (TeacherInfoCRUD.objPageCRUD == null) {
      TeacherInfoCRUD.objPageCRUD = new TeacherInfoCRUDEx();
      objPage = <TeacherInfoCRUDEx>TeacherInfoCRUD.objPageCRUD;
    } else {
      objPage = <TeacherInfoCRUDEx>TeacherInfoCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new TeacherInfo_EditEx('TeacherInfo_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refTeacherInfo_Edit.value.btnTeacherInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new TeacherInfo_EditEx('TeacherInfo_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refTeacherInfo_Edit.value.btnTeacherInfo_Edit_Click(strCommandName, strKeyId);
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(TeacherInfoCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      UserTypeId_Session.value = userStore.getUserType;
      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();

      viewVarSet.sortTeacherInfoBy = 'teacherName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_TeacherInfo4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'ethnicName|Ex':
        viewVarSet.sortTeacherInfoBy = `RsEthnic|ethnicName ${sortDirection}|TeacherInfo.IdEthnic = RsEthnic.IdEthnic`;
        break;
      case 'politicsName|Ex':
        viewVarSet.sortTeacherInfoBy = `RsPolitics|politicsName ${sortDirection}|TeacherInfo.IdPolitics = RsPolitics.IdPolitics`;
        break;
      case 'adminGradeDesc|Ex':
        viewVarSet.sortTeacherInfoBy = `RsAdminGrade|adminGradeDesc ${sortDirection}|TeacherInfo.IdAdminGrade = RsAdminGrade.IdAdminGrade`;
        break;
      case 'profenssionalGradeName|Ex':
        viewVarSet.sortTeacherInfoBy = `RsProfGrade|profenssionalGradeName ${sortDirection}|TeacherInfo.IdProfGrade = RsProfGrade.IdProfGrade`;
        break;
      case 'staffTypeName|Ex':
        viewVarSet.sortTeacherInfoBy = `RsStaffType|staffTypeName ${sortDirection}|TeacherInfo.IdStaffType = RsStaffType.IdStaffType`;
        break;
      case 'schoolNameA|Ex':
        viewVarSet.sortTeacherInfoBy = `XzSchool|schoolNameA ${sortDirection}|TeacherInfo.IdSchool = XzSchool.IdSchool`;
        break;
      case 'collegeName|Ex':
        viewVarSet.sortTeacherInfoBy = `XzClg|collegeName ${sortDirection}|TeacherInfo.IdXzCollege = XzClg.IdXzCollege`;
        break;
      case 'dateTimeSim|Ex':
        viewVarSet.sortTeacherInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortTeacherInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_TeacherInfo4Func(this.listPara.listDiv);
  }
}

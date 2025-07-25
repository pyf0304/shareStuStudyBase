/**
 * 类名:XzSchoolCRUDEx(界面:XzSchoolCRUD,01120260)
 * 表名:XzSchool(01120029)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/15 05:48:43
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { XzSchoolCRUD } from '@/viewsBase/SystemSet/XzSchoolCRUD';
import { viewVarSet, divVarSet, refXzSchool_Edit } from '@/viewsShare/SystemSet/XzSchoolVueShare';
import { Format } from '@/ts/PubFun/clsString';
import XzSchool_EditEx from '@/viewsShare/SystemSet/XzSchool_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** XzSchoolCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class XzSchoolCRUDEx extends XzSchoolCRUD implements IShowList {
  //public static mstrSortXzSchoolBy = "IdSchool";
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
    console.log('InitVarSet in XzSchoolCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in XzSchoolCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_XzSchool]!${strType}${strPara}`);
    //this.BindGv_XzSchoolCache(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'XzSchool':
        this.BindGv_XzSchool4Func(divVarSet.refDivList);
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
    let objPage: XzSchoolCRUDEx;
    let objPageEdit;
    if (XzSchoolCRUD.objPageCRUD == null) {
      XzSchoolCRUD.objPageCRUD = new XzSchoolCRUDEx();
      objPage = <XzSchoolCRUDEx>XzSchoolCRUDEx.objPageCRUD;
    } else {
      objPage = <XzSchoolCRUDEx>XzSchoolCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'SetSchoolTypeId': //自定义功能:设置类型
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new XzSchool_EditEx('XzSchool_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refXzSchool_Edit.value.btnXzSchool_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new XzSchool_EditEx('XzSchool_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refXzSchool_Edit.value.btnXzSchool_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(XzSchoolCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'schoolTypeName|Ex':
        viewVarSet.sortXzSchoolBy = `SchoolType|schoolTypeName ${sortDirection}|XzSchool.SchoolTypeId = SchoolType.SchoolTypeId`;
        break;
      default:
        viewVarSet.sortXzSchoolBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_XzSchool4Func(this.listPara.listDiv);
  }
}

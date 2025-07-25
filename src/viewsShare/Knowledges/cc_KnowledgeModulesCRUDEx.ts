/**
 * 类名:cc_KnowledgeModulesCRUDEx(界面:cc_KnowledgeModulesCRUD)
 * 表名:cc_KnowledgeModules(01120959)
 * 版本:2024.02.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/05 00:17:42
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { cc_KnowledgeModulesCRUD } from '@/viewsBase/Knowledges/cc_KnowledgeModulesCRUD';
import cc_KnowledgeModules_EditEx from '@/viewsShare/Knowledges/cc_KnowledgeModules_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { cc_KnowledgeModules_Edit } from '@/viewsBase/Knowledges/cc_KnowledgeModules_Edit';
import {
  refcc_KnowledgeModules_Edit,
  CourseId_Session,
  divVarSet,
  viewVarSet,
} from '@/viewsShare/Knowledges/cc_KnowledgeModulesVueShare';
import { Format } from '@/ts/PubFun/clsString';
/** cc_KnowledgeModulesCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class cc_KnowledgeModulesCRUDEx
  extends cc_KnowledgeModulesCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortcc_KnowledgeModulesBy = "KnowledgeModuleId";
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
    console.log('InitVarSet in cc_KnowledgeModulesCRUDEx');
    CourseId_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in cc_KnowledgeModulesCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_cc_KnowledgeModules4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'cc_KnowledgeModules':
        // alert('该类没有绑定该函数：[this.BindGv_cc_KnowledgeModules4Func]!');
        this.BindGv_cc_KnowledgeModules4Func(divVarSet.refDivList);
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
    let objPage: cc_KnowledgeModulesCRUDEx;
    let objPageEdit;
    if (cc_KnowledgeModulesCRUD.objPageCRUD == null) {
      cc_KnowledgeModulesCRUD.objPageCRUD = new cc_KnowledgeModulesCRUDEx();
      objPage = <cc_KnowledgeModulesCRUDEx>cc_KnowledgeModulesCRUD.objPageCRUD;
    } else {
      objPage = <cc_KnowledgeModulesCRUDEx>cc_KnowledgeModulesCRUD.objPageCRUD;
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
        objPageEdit = new cc_KnowledgeModules_EditEx('cc_KnowledgeModules_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refcc_KnowledgeModules_Edit.value.btncc_KnowledgeModules_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new cc_KnowledgeModules_EditEx('cc_KnowledgeModules_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refcc_KnowledgeModules_Edit.value.btncc_KnowledgeModules_Edit_Click(
          strCommandName,
          strKeyId,
        );
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
        strMsg = `命令:${strCommandName}在函数(cc_KnowledgeModulesCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      // case 'knowledgeNum|Ex':
      //   viewVarSet.sortcc_KnowledgeModulesBy = Format('{0} {1}', sortColumnKey, sortDirection);
      //   break;
      // case 'questionNum|Ex':
      //   viewVarSet.sortcc_KnowledgeModulesBy = Format('{0} {1}', sortColumnKey, sortDirection);
      //   break;
      case 'courseName|Ex':
        viewVarSet.sortcc_KnowledgeModulesBy = `vcc_Course_Sim|courseName ${sortDirection}|cc_KnowledgeModules.CourseId = vcc_Course_Sim.CourseId`;
        break;
      default:
        viewVarSet.sortcc_KnowledgeModulesBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_cc_KnowledgeModules4Func(this.listPara.listDiv);
  }
}

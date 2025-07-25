/**
 * 类名:ge_UserScoreCRUDEx(界面:ge_UserScoreCRUD,01120261)
 * 表名:ge_UserScore(01120985)
 * 版本:2025.02.16.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/16 17:28:00
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { ge_UserScoreCRUD } from '@/viewsBase/GameLearn/ge_UserScoreCRUD';
import { viewVarSet, divVarSet } from '@/viewsShare/GameLearn/ge_UserScoreVueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** ge_UserScoreCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class ge_UserScoreCRUDEx extends ge_UserScoreCRUD implements IShowList {
  //public static mstrSortge_UserScoreBy = "IdCurrEduCls";
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
    console.log('InitVarSet in ge_UserScoreCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ge_UserScoreCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_ge_UserScore4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ge_UserScore':
        alert('该类没有绑定该函数：[this.BindGv_ge_UserScore4Func]!');
        //this.BindGv_ge_UserScore4Func(divVarSet.refDivList);
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
    let objPage: ge_UserScoreCRUDEx;
    let objPageEdit;
    if (ge_UserScoreCRUD.objPageCRUD == null) {
      ge_UserScoreCRUD.objPageCRUD = new ge_UserScoreCRUDEx();
      objPage = <ge_UserScoreCRUDEx>ge_UserScoreCRUDEx.objPageCRUD;
    } else {
      objPage = <ge_UserScoreCRUDEx>ge_UserScoreCRUDEx.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
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
        strMsg = `命令:${strCommandName}在函数(ge_UserScoreCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'eduClsName|Ex':
        viewVarSet.sortge_UserScoreBy = `vCurrEduCls_Sim|eduClsName ${sortDirection}|ge_UserScore.IdCurrEduCls = vCurrEduCls_Sim.IdCurrEduCls`;
        break;
      case 'userName|Ex':
        viewVarSet.sortge_UserScoreBy = `vQxUsersSim|userName ${sortDirection}|ge_UserScore.UserId = vQxUsersSim.UserId`;
        break;
      default:
        viewVarSet.sortge_UserScoreBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_UserScore4Func(this.listPara.listDiv);
  }
}

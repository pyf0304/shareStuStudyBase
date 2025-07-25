/**
 * 类名:gs_KnowledgesLogicCRUDEx(界面:gs_KnowledgesLogicCRUD,01120182)
 * 表名:gs_KnowledgesLogic(01120872)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/10 11:17:55
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { gs_KnowledgesLogicCRUD } from '@/viewsBase/Knowledges/gs_KnowledgesLogicCRUD';
import {
  viewVarSet,
  divVarSet,
  refgs_KnowledgesLogic_Edit,
} from '@/viewsShare/Knowledges/gs_KnowledgesLogicVueShare';
import { Format } from '@/ts/PubFun/clsString';
import gs_KnowledgesLogic_EditEx from '@/viewsShare/Knowledges/gs_KnowledgesLogic_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** gs_KnowledgesLogicCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class gs_KnowledgesLogicCRUDEx extends gs_KnowledgesLogicCRUD implements IShowList {
  //public static mstrSortgs_KnowledgesLogicBy = "mId";
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
    console.log('InitVarSet in gs_KnowledgesLogicCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in gs_KnowledgesLogicCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_gs_KnowledgesLogic4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'gs_KnowledgesLogic':
        alert('该类没有绑定该函数：[this.BindGv_gs_KnowledgesLogic4Func]!');
        //this.BindGv_gs_KnowledgesLogic4Func(divVarSet.refDivList);
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
    let objPage: gs_KnowledgesLogicCRUDEx;
    let objPageEdit;
    if (gs_KnowledgesLogicCRUD.objPageCRUD == null) {
      gs_KnowledgesLogicCRUD.objPageCRUD = new gs_KnowledgesLogicCRUDEx();
      objPage = <gs_KnowledgesLogicCRUDEx>gs_KnowledgesLogicCRUDEx.objPageCRUD;
    } else {
      objPage = <gs_KnowledgesLogicCRUDEx>gs_KnowledgesLogicCRUDEx.objPageCRUD;
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
        objPageEdit = new gs_KnowledgesLogic_EditEx('gs_KnowledgesLogic_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refgs_KnowledgesLogic_Edit.value.btngs_KnowledgesLogic_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new gs_KnowledgesLogic_EditEx('gs_KnowledgesLogic_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refgs_KnowledgesLogic_Edit.value.btngs_KnowledgesLogic_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(gs_KnowledgesLogicCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'knowledgeName|Ex':
        viewVarSet.sortgs_KnowledgesLogicBy = `cc_CourseKnowledges|knowledgeName ${sortDirection}|gs_KnowledgesLogic.CourseKnowledgeId = cc_CourseKnowledges.CourseKnowledgeId`;
        break;
      case 'knowledgeGraphName|Ex':
        viewVarSet.sortgs_KnowledgesLogicBy = `gs_KnowledgesGraph|knowledgeGraphName ${sortDirection}|gs_KnowledgesLogic.KnowledgeGraphId = gs_KnowledgesGraph.KnowledgeGraphId`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortgs_KnowledgesLogicBy = `vcc_Course_Sim|courseName ${sortDirection}|gs_KnowledgesLogic.CourseId = vcc_Course_Sim.CourseId`;
        break;
      default:
        viewVarSet.sortgs_KnowledgesLogicBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_gs_KnowledgesLogic4Func(this.listPara.listDiv);
  }
}

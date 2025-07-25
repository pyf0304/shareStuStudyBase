/**
 * 类名:gs_KnowledgesLogicRelaCRUDEx(界面:gs_KnowledgesLogicRelaCRUD,01120183)
 * 表名:gs_KnowledgesLogicRela(01120870)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/10 11:18:00
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
import { gs_KnowledgesLogicRelaCRUD } from '@/viewsBase/Knowledges/gs_KnowledgesLogicRelaCRUD';
import {
  viewVarSet,
  divVarSet,
  refgs_KnowledgesLogicRela_Edit,
} from '@/viewsShare/Knowledges/gs_KnowledgesLogicRelaVueShare';
import { Format } from '@/ts/PubFun/clsString';
import gs_KnowledgesLogicRela_EditEx from '@/viewsShare/Knowledges/gs_KnowledgesLogicRela_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** gs_KnowledgesLogicRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class gs_KnowledgesLogicRelaCRUDEx
  extends gs_KnowledgesLogicRelaCRUD
  implements IShowList
{
  //public static mstrSortgs_KnowledgesLogicRelaBy = "mId";
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
    console.log('InitVarSet in gs_KnowledgesLogicRelaCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in gs_KnowledgesLogicRelaCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_gs_KnowledgesLogicRela4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'gs_KnowledgesLogicRela':
        alert('该类没有绑定该函数：[this.BindGv_gs_KnowledgesLogicRela4Func]!');
        //this.BindGv_gs_KnowledgesLogicRela4Func(divVarSet.refDivList);
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
    let objPage: gs_KnowledgesLogicRelaCRUDEx;
    let objPageEdit;
    if (gs_KnowledgesLogicRelaCRUD.objPageCRUD == null) {
      gs_KnowledgesLogicRelaCRUD.objPageCRUD = new gs_KnowledgesLogicRelaCRUDEx();
      objPage = <gs_KnowledgesLogicRelaCRUDEx>gs_KnowledgesLogicRelaCRUDEx.objPageCRUD;
    } else {
      objPage = <gs_KnowledgesLogicRelaCRUDEx>gs_KnowledgesLogicRelaCRUDEx.objPageCRUD;
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
        objPageEdit = new gs_KnowledgesLogicRela_EditEx('gs_KnowledgesLogicRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refgs_KnowledgesLogicRela_Edit.value.btngs_KnowledgesLogicRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new gs_KnowledgesLogicRela_EditEx('gs_KnowledgesLogicRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refgs_KnowledgesLogicRela_Edit.value.btngs_KnowledgesLogicRela_Edit_Click(
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
        strMsg = `命令:${strCommandName}在函数(gs_KnowledgesLogicRelaCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'knowledgeGraphName|Ex':
        viewVarSet.sortgs_KnowledgesLogicRelaBy = `gs_KnowledgesGraph|knowledgeGraphName ${sortDirection}|gs_KnowledgesLogicRela.KnowledgeGraphId = gs_KnowledgesGraph.KnowledgeGraphId`;
        break;
      case 'relaTypeName|Ex':
        viewVarSet.sortgs_KnowledgesLogicRelaBy = `gs_RelaType|relaTypeName ${sortDirection}|gs_KnowledgesLogicRela.RelaTypeId = gs_RelaType.RelaTypeId`;
        break;
      default:
        viewVarSet.sortgs_KnowledgesLogicRelaBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_gs_KnowledgesLogicRela4Func(this.listPara.listDiv);
  }
}

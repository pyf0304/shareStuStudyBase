/**
 * 类名:ge_StructureSectionTypeCRUDEx(界面:ge_StructureSectionTypeCRUD,01120224)
 * 表名:ge_StructureSectionType(01120901)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:29:26
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS,0255)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { ge_StructureSectionTypeCRUD } from '@/viewsBase/Knowledges/ge_StructureSectionTypeCRUD';
import {
  viewVarSet,
  divVarSet,
  refge_StructureSectionType_Edit,
} from '@/viewsShare/Knowledges/ge_StructureSectionTypeVueShare';
import { Format } from '@/ts/PubFun/clsString';
import ge_StructureSectionType_EditEx from '@/viewsShare/Knowledges/ge_StructureSectionType_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** ge_StructureSectionTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class ge_StructureSectionTypeCRUDEx
  extends ge_StructureSectionTypeCRUD
  implements IShowList
{
  //public static mstrSortge_StructureSectionTypeBy = "SectionTypeId";
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
    console.log('InitVarSet in ge_StructureSectionTypeCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in ge_StructureSectionTypeCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_ge_StructureSectionTypeCache(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'ge_StructureSectionType':
        alert('该类没有绑定该函数：[this.BindGv_ge_StructureSectionType]!');
        //this.BindGv_ge_StructureSectionType(divVarSet.refDivList);
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
    let objPage: ge_StructureSectionTypeCRUDEx;
    let objPageEdit;
    if (ge_StructureSectionTypeCRUD.objPageCRUD == null) {
      ge_StructureSectionTypeCRUD.objPageCRUD = new ge_StructureSectionTypeCRUDEx();
      objPage = <ge_StructureSectionTypeCRUDEx>ge_StructureSectionTypeCRUDEx.objPageCRUD;
    } else {
      objPage = <ge_StructureSectionTypeCRUDEx>ge_StructureSectionTypeCRUDEx.objPageCRUD;
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
        objPageEdit = new ge_StructureSectionType_EditEx('ge_StructureSectionType_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refge_StructureSectionType_Edit.value.btnge_StructureSectionType_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new ge_StructureSectionType_EditEx('ge_StructureSectionType_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refge_StructureSectionType_Edit.value.btnge_StructureSectionType_Edit_Click(
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
        strMsg = `命令:${strCommandName}在函数(ge_StructureSectionTypeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      default:
        viewVarSet.sortge_StructureSectionTypeBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_ge_StructureSectionTypeCache(divVarSet.refDivList);
  }
}

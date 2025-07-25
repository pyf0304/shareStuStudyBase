/**
 * 类名:KnowledgeTypeCRUDEx(界面:KnowledgeTypeCRUD)
 * 表名:KnowledgeType(01120890)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:16:44
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import KnowledgeType_EditEx from '@/viewsShare/Knowledges/KnowledgeType_EditEx';
import { KnowledgeTypeCRUD } from '@/viewsBase/Knowledges/KnowledgeTypeCRUD';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { KnowledgeType_Edit } from '@/viewsBase/Knowledges/KnowledgeType_Edit';
import {
  divVarSet,
  CourseId_Session,
  viewVarSet,
} from '@/viewsShare/Knowledges/KnowledgeTypeVueShare';
import { Format } from '@/ts/PubFun/clsString';
/** KnowledgeTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class KnowledgeTypeCRUDEx extends KnowledgeTypeCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortKnowledgeTypeBy = "KnowledgeTypeId";
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
    CourseId_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_KnowledgeType]!${strType}${strPara}`);
    //this.BindGv_KnowledgeType4Func();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'KnowledgeType':
        this.BindGv_KnowledgeType4Func(divVarSet.refDivList);
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
    let objPage: KnowledgeTypeCRUDEx;
    let objPageEdit;
    if (KnowledgeTypeCRUD.objPageCRUD == null) {
      KnowledgeTypeCRUD.objPageCRUD = new KnowledgeTypeCRUDEx();
      objPage = <KnowledgeTypeCRUDEx>KnowledgeTypeCRUD.objPageCRUD;
    } else {
      objPage = <KnowledgeTypeCRUDEx>KnowledgeTypeCRUD.objPageCRUD;
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
        objPageEdit = new KnowledgeType_EditEx('KnowledgeType_EditEx', objPage);
        objPageEdit.btnAddNewRecord_Click();

        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new KnowledgeType_EditEx('KnowledgeType_EditEx', objPage);
        objPageEdit.btnUpdateRecord_Click(strKeyId);

        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
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
        strMsg = `命令:strCommandName在函数(KnowledgeTypeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'courseName|Ex':
        viewVarSet.sortKnowledgeTypeBy = `vcc_Course_Sim|courseName ${sortDirection}|KnowledgeType.CourseId = vcc_Course_Sim.CourseId`;
        break;
      default:
        viewVarSet.sortKnowledgeTypeBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_KnowledgeType4Func(this.thisDivList);
  }
}

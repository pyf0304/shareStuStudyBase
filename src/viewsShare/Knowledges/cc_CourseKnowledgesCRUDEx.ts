import $ from 'jquery';
import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
import { clscc_CourseKnowledgesENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesENEx';
import { KnowledgeType_func } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeTypeWApi';
import { cc_CourseChapter_func } from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
import {
  cc_CourseKnowledges_AddNewRecordAsync,
  cc_CourseKnowledges_DelRecordAsync,
  cc_CourseKnowledges_Delcc_CourseKnowledgessAsync,
  cc_CourseKnowledges_DownMoveAsync,
  cc_CourseKnowledges_GetMaxStrIdAsync,
  cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync,
  cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync,
  cc_CourseKnowledges_GetRecCountByCondAsync,
  cc_CourseKnowledges_GetRecCountByCondCache,
  cc_CourseKnowledges_GoBottomAsync,
  cc_CourseKnowledges_GoTopAsync,
  cc_CourseKnowledges_ReFreshCache,
  cc_CourseKnowledges_ReOrderAsync,
  cc_CourseKnowledges_UpMoveAsync,
  cc_CourseKnowledges_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
import {
  cc_CourseKnowledgesEx_GetObjExLstByPagerAsync,
  cc_CourseKnowledgesEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiExShare/Knowledges/clscc_CourseKnowledgesExWApi';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  BindTab,
  GetCheckedKeyIdsInDiv,
  ObjectAssign,
  SetCkechedItem4KeyId,
  SortFun,
  confirm_del,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import KnowledgeType_EditEx from '@/viewsShare/Knowledges/KnowledgeType_EditEx';
import cc_CourseKnowledges_EditEx from '@/viewsShare/Knowledges/cc_CourseKnowledges_EditEx';
import { cc_CourseKnowledgesCRUD } from '@/viewsBase/Knowledges/cc_CourseKnowledgesCRUD';
import { cc_CourseKnowledges_Edit } from '@/viewsBase/Knowledges/cc_CourseKnowledges_Edit';
import { clsPubVar4Web } from '@/ts/FunClass/clsPubVar4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { useUserStore } from '@/store/modulesShare/user';
import {
  viewVarSet,
  divVarSet,
  CourseId_Session,
  qryVarSet,
  refcc_CourseKnowledges_List,
  BindTabByList,
  cc_CourseKnowledges_DeleteKeyIdCache,
} from '@/viewsShare/Knowledges/cc_CourseKnowledgesVueShare';

import {
  BindTabByList as BindTabByList_DialogSel,
  dataColumn,
  refcc_CourseKnowledges_List as refcc_CourseKnowledges_List_DialogSel,
  divVarSet as divVarSet_DialogSel,
  Combinecc_CourseKnowledgesCondition_DialogSel,
} from '@/viewsShare/Knowledges/cc_CourseKnowledges_DialogSelVueShare';
import { Combinecc_CourseKnowledgesConditionObj_DialogSel } from '@/viewsShare/Knowledges/cc_CourseKnowledges_DialogSelVueShare';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';

/* cc_CourseKnowledgesCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class cc_CourseKnowledgesCRUDEx
  extends cc_CourseKnowledgesCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static divName4List: string = "divDataLst";
  //public static mstrSortcc_CourseKnowledgesBy: string = "courseKnowledgeId";
  public static strCourseId_Cache: string = clsPubLocalStorage.courseId; //缓存分类字段
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 20;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
    CourseId_Session.value = clsPubLocalStorage.courseId;
    CourseId_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string) {
    //cc_CourseKnowledges_ReFreshCache(clsPubLocalStorage.courseId);
    this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'cc_CourseKnowledges':
        // alert('该类没有绑定该函数：[this.BindGv_cc_CourseKnowledges_Cache]！');
        this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
        break;
    }
  }
  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecord(strCourseKnowledgeId: string) {
    try {
      const responseText = await cc_CourseKnowledges_DelRecordAsync(strCourseKnowledgeId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        cc_CourseKnowledges_ReFreshCache(clsPubLocalStorage.courseId);
        const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 根据关键字列表删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
*/
  public async DelMultiRecord(arrCourseKnowledgeId: Array<string>) {
    try {
      const responseText = await cc_CourseKnowledges_Delcc_CourseKnowledgessAsync(
        arrCourseKnowledgeId,
      );
      const returnInt: number = responseText;
      if (returnInt > 0) {
        cc_CourseKnowledges_ReFreshCache(clsPubLocalStorage.courseId);
        const strInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo: string = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg: string = `删除记录不成功. ${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: cc_CourseKnowledgesCRUDEx;
    if (cc_CourseKnowledgesCRUD.objPageCRUD == null) {
      cc_CourseKnowledgesCRUD.objPageCRUD = new cc_CourseKnowledgesCRUDEx();
      objPage = <cc_CourseKnowledgesCRUDEx>cc_CourseKnowledgesCRUD.objPageCRUD;
    } else {
      objPage = <cc_CourseKnowledgesCRUDEx>cc_CourseKnowledgesCRUD.objPageCRUD;
    }
    const objPage_Edit: cc_CourseKnowledges_EditEx = new cc_CourseKnowledges_EditEx(
      'cc_CourseKnowledges_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDiv(objPage.divName4DataList);
    let strMsg = '';
    switch (strCommandName) {
      case 'SetWeight':
        objPage.btnSetWeight_Click(strKeyId);
        break;
      case 'SetKnowledgeModuleId': //自定义功能:设置知识点模块
        objPage.btnSetKnowledgeModuleId_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'Query_Weight': //查询记录
        objPage.btnQuery_Weight_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage_Edit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage_Edit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage_Edit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.thisDivList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage_Edit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPage_Edit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        if (confirm_del(arrKeyIds.length) == false) {
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        objPage.btnReOrder_Click();
        break;
      case 'AddKnowType': //增加知识点类型
        objPage.btnAddKnowType_Click();
        break;
      default:
        strMsg =
          '命令:' + strCommandName + '在函数(cc_CourseKnowledgesCRUDEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
  public async btnQuery_Weight_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_cc_CourseKnowledges4Func_Weight(divVarSet.refDivList);
  }
  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {
    const CourseIdStatic = CourseId_Session.value; //静态变量;//静态变量
    // await this.SetDdl_OrderNumInDivInFeature(CourseIdStatic); //功能区域
    await this.SetDdl_KnowledgeModuleIdInDivInFeature(CourseIdStatic); //功能区域
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
*/
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      this.InitVarSet();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      viewVarSet.sortcc_CourseKnowledgesBy = 'orderNum Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async PageLoad_Weight() {
    // 在此处放置用户代码以初始化页面
    try {
      this.InitVarSet();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      viewVarSet.sortcc_CourseKnowledgesBy = 'orderNum Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_CourseKnowledges4Func_Weight(divVarSet.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async PageLoad_GialogSel() {
    // 在此处放置用户代码以初始化页面
    try {
      this.InitVarSet();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortcc_CourseKnowledgesBy = 'orderNum Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_CourseKnowledges4Func_DialogSel(divVarSet_DialogSel.refDivList);
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
 <returns>条件串(strWhereCond)</returns>
*/
  public async Combinecc_CourseKnowledgesConditionObj(): Promise<ConditionCollection> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objcc_CourseKnowledges_Cond = new ConditionCollection();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.knowledgeTitle_q != '') {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_KnowledgeTitle} like '%${qryVarSet.knowledgeTitle_q}%'`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeTitle,
          qryVarSet.knowledgeTitle_q,
          'like',
        );
      }
      if (qryVarSet.levelNo_q > 0) {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_KnowledgeTitle} = ${qryVarSet.levelNo_q}`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_LevelNo,
          qryVarSet.levelNo_q,
          '=',
        );
      }
      if (qryVarSet.inUse_q == 'true') {
        strWhereCond += Format(" And {0} = '1'", clscc_CourseKnowledgesEN.con_InUse);
        objcc_CourseKnowledges_Cond.SetCondFldValue(clscc_CourseKnowledgesEN.con_InUse, true, '=');
      } else if (qryVarSet.inUse_q == 'false') {
        strWhereCond += Format(" And {0} = '0'", clscc_CourseKnowledgesEN.con_InUse);
        objcc_CourseKnowledges_Cond.SetCondFldValue(clscc_CourseKnowledgesEN.con_InUse, false, '=');
      }
      //if (this.userId_q != "")
      //{
      //strWhereCond += ` And ${ clscc_CourseKnowledgesEN.con_UserId} like '%${ this.userId_q }%'`;
      //objcc_CourseKnowledges_Cond.SetCondFldValue(clscc_CourseKnowledgesEN.con_UserId, this.userId_q, "like");
      //}
      if (qryVarSet.courseChapterId_q != '' && qryVarSet.courseChapterId_q != '0') {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_CourseChapterId} = '${qryVarSet.courseChapterId_q}'`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_CourseChapterId,
          qryVarSet.courseChapterId_q,
          '=',
        );
      }

      if (qryVarSet.knowledgeModuleId_q != '' && qryVarSet.knowledgeModuleId_q != '0') {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_KnowledgeModuleId} = '${qryVarSet.knowledgeModuleId_q}'`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeModuleId,
          qryVarSet.knowledgeModuleId_q,
          '=',
        );
      }
      if (qryVarSet.knowledgeTypeId_q != '' && qryVarSet.knowledgeTypeId_q != '0') {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_KnowledgeTypeId} = '${qryVarSet.knowledgeTypeId_q}'`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeTypeId,
          qryVarSet.knowledgeTypeId_q,
          '=',
        );
      }
      if (qryVarSet.kpSourceId_q != '' && qryVarSet.kpSourceId_q != '0') {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_KpSourceId} = '${qryVarSet.kpSourceId_q}'`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KpSourceId,
          qryVarSet.kpSourceId_q,
          '=',
        );
      }
      //查询当前课程
      const strCourseId = clsPubLocalStorage.courseId;
      strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_CourseId} = '${strCourseId}'`;
      objcc_CourseKnowledges_Cond.SetCondFldValue(
        clscc_CourseKnowledgesEN.con_CourseId,
        strCourseId,
        '=',
      );
      //if ($("#ddlIsShow_q").prop("selectedIndex") == 1)
      //{
      //strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_IsShow } = '1'`;
      //objcc_CourseKnowledges_Cond.SetCondFldValue(clscc_CourseKnowledgesEN.con_IsShow, true, "=");
      //}
      //else if ($("#ddlIsShow_q").prop("selectedIndex") == 2)
      //{
      //strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_IsShow } = '0'`;
      //objcc_CourseKnowledges_Cond.SetCondFldValue(clscc_CourseKnowledgesEN.con_IsShow, false, "=");
      //}
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinecc_CourseKnowledgesConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objcc_CourseKnowledges_Cond.whereCond = strWhereCond;
    return objcc_CourseKnowledges_Cond;
  }

  public async Combinecc_CourseKnowledgesConditionObj_Weight(): Promise<ConditionCollection> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const objcc_CourseKnowledges_Cond = new ConditionCollection();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.knowledgeModuleId != '') {
        strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_KnowledgeModuleId} = '${this.knowledgeModuleId}'`;
        objcc_CourseKnowledges_Cond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeModuleId,
          this.knowledgeModuleId,
          '=',
        );
      }
      //查询当前课程
      const strCourseId = clsPubLocalStorage.courseId;
      strWhereCond += ` And ${clscc_CourseKnowledgesEN.con_CourseId} = '${strCourseId}'`;
      objcc_CourseKnowledges_Cond.SetCondFldValue(
        clscc_CourseKnowledgesEN.con_CourseId,
        strCourseId,
        '=',
      );
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0010)在组合查询条件对象(Combinecc_CourseKnowledgesConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    objcc_CourseKnowledges_Cond.whereCond = strWhereCond;
    return objcc_CourseKnowledges_Cond;
  }

  public async BindGv_cc_CourseKnowledges4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortcc_CourseKnowledgesBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortcc_CourseKnowledgesBy)为空，请检查！(In BindGv_cc_CourseKnowledges_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objcc_CourseKnowledges_Cond = await this.Combinecc_CourseKnowledgesConditionObj();
    objcc_CourseKnowledges_Cond.SetCondFldValue(
      clscc_CourseKnowledgesEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objcc_CourseKnowledges_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx> = [];
    try {
      this.recCount = await cc_CourseKnowledges_GetRecCountByCondCache(
        objcc_CourseKnowledges_Cond,
        CourseId_Session.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        conditionCollection: objcc_CourseKnowledges_Cond,
        orderBy: viewVarSet.sortcc_CourseKnowledgesBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrcc_CourseKnowledgesExObjLst = await cc_CourseKnowledgesEx_GetObjExLstByPagerCache(
        objPagerPara,
        CourseId_Session.value,
      );
      //arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map(this.CopyToEx);
      //for (const objInFor of arrcc_CourseKnowledgesExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_CourseKnowledgesExObjLst.length == 0) {
      const strKey: string = `${clscc_CourseKnowledgesEN._CurrTabName}_${CourseId_Session.value}`;
      const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_cc_CourseKnowledges4Func(divList, arrcc_CourseKnowledgesExObjLst);
      console.log('完成BindGv_cc_CourseKnowledges4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindGv_cc_CourseKnowledges4Func_DialogSel(divList: HTMLDivElement) {
    if (viewVarSet.sortcc_CourseKnowledgesBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortcc_CourseKnowledgesBy)为空，请检查！(In BindGv_cc_CourseKnowledges_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await Combinecc_CourseKnowledgesCondition_DialogSel();
    // objcc_CourseKnowledges_Cond.SetCondFldValue(
    //   clscc_CourseKnowledgesEN.con_CourseId,
    //   CourseId_Session.value,
    //   '=',
    // );
    // const strWhereCond = JSON.stringify(objcc_CourseKnowledges_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx> = [];
    try {
      this.recCount = await cc_CourseKnowledges_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortcc_CourseKnowledgesBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrcc_CourseKnowledgesExObjLst = await cc_CourseKnowledgesEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
      //arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map(this.CopyToEx);
      //for (const objInFor of arrcc_CourseKnowledgesExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_CourseKnowledgesExObjLst.length == 0) {
      const strKey: string = `${clscc_CourseKnowledgesEN._CurrTabName}_${CourseId_Session.value}`;
      const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_cc_CourseKnowledges4Func_DialogSel(divList, arrcc_CourseKnowledgesExObjLst);
      console.log('完成BindGv_cc_CourseKnowledges4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async BindGv_cc_CourseKnowledges4Func_Weight(divList: HTMLDivElement) {
    if (viewVarSet.sortcc_CourseKnowledgesBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortcc_CourseKnowledgesBy)为空，请检查！(In BindGv_cc_CourseKnowledges_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objcc_CourseKnowledges_Cond = await this.Combinecc_CourseKnowledgesConditionObj_Weight();
    objcc_CourseKnowledges_Cond.SetCondFldValue(
      clscc_CourseKnowledgesEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objcc_CourseKnowledges_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx> = [];
    try {
      this.recCount = await cc_CourseKnowledges_GetRecCountByCondCache(
        objcc_CourseKnowledges_Cond,
        CourseId_Session.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortcc_CourseKnowledgesBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrcc_CourseKnowledgesExObjLst = await cc_CourseKnowledgesEx_GetObjExLstByPagerCache(
        objPagerPara,
        CourseId_Session.value,
      );
      //arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map(this.CopyToEx);
      //for (const objInFor of arrcc_CourseKnowledgesExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_CourseKnowledgesExObjLst.length == 0) {
      const strKey: string = `${clscc_CourseKnowledgesEN._CurrTabName}_${CourseId_Session.value}`;
      const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_cc_CourseKnowledges4Func_Weight(divList, arrcc_CourseKnowledgesExObjLst);
      console.log('完成BindGv_cc_CourseKnowledges4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindGv_cc_CourseKnowledges4Func_Goal(divList: HTMLDivElement) {
    if (viewVarSet.sortcc_CourseKnowledgesBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortcc_CourseKnowledgesBy)为空，请检查！(In BindGv_cc_CourseKnowledges_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const objcc_CourseKnowledges_Cond = await this.Combinecc_CourseKnowledgesConditionObj_Weight();
    objcc_CourseKnowledges_Cond.SetCondFldValue(
      clscc_CourseKnowledgesEN.con_CourseId,
      CourseId_Session.value,
      '=',
    );
    const strWhereCond = JSON.stringify(objcc_CourseKnowledges_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx> = [];
    try {
      this.recCount = await cc_CourseKnowledges_GetRecCountByCondCache(
        objcc_CourseKnowledges_Cond,
        CourseId_Session.value,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortcc_CourseKnowledgesBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      arrcc_CourseKnowledgesExObjLst = await cc_CourseKnowledgesEx_GetObjExLstByPagerCache(
        objPagerPara,
        CourseId_Session.value,
      );
      //arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map(this.CopyToEx);
      //for (const objInFor of arrcc_CourseKnowledgesExObjLst) {
      //    const conFuncMap = await this.FuncMap(objInFor);
      //}
    } catch (e) {
      const strMsg: string = `绑定GridView不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_CourseKnowledgesExObjLst.length == 0) {
      const strKey: string = `${clscc_CourseKnowledgesEN._CurrTabName}_${CourseId_Session.value}`;
      const strMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_cc_CourseKnowledges4Func_Weight(divList, arrcc_CourseKnowledgesExObjLst);
      console.log('完成BindGv_cc_CourseKnowledges4Func!');
    } catch (e) {
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objcc_CourseKnowledgesS">源对象</param>
  public async FuncMap(objcc_CourseKnowledges: clscc_CourseKnowledgesENEx) {
    try {
      {
        const cc_CourseChapter_CourseChapterId = objcc_CourseKnowledges.courseChapterId;
        const cc_CourseChapter_ChapterName = await cc_CourseChapter_func(
          clscc_CourseChapterEN.con_CourseChapterId,
          clscc_CourseChapterEN.con_ChapterName,
          cc_CourseChapter_CourseChapterId,
          objcc_CourseKnowledges.courseId,
        );
        objcc_CourseKnowledges.courseChapterName = cc_CourseChapter_ChapterName;
      }
      {
        const KnowledgeType_KnowledgeTypeId = objcc_CourseKnowledges.knowledgeTypeId;
        const KnowledgeType_KnowledgeTypeName = await KnowledgeType_func(
          clsKnowledgeTypeEN.con_KnowledgeTypeId,
          clsKnowledgeTypeEN.con_KnowledgeTypeName,
          KnowledgeType_KnowledgeTypeId,
          objcc_CourseKnowledges.courseId,
        );
        objcc_CourseKnowledges.knowledgeTypeName = KnowledgeType_KnowledgeTypeName;
      }
      //   {
      //     const strCourseKnowledgeId = objcc_CourseKnowledges.courseKnowledgeId;
      //     const objcc_KnowledgesExamLibRela_Cond: clscc_KnowledgesExamLibRelaEN =
      //       new clscc_KnowledgesExamLibRelaEN();
      //     objcc_KnowledgesExamLibRela_Cond.SetCondFldValue(
      //       clscc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId,
      //       strCourseKnowledgeId,
      //       '=',
      //     );
      //     const intQuestionNum = await cc_KnowledgesExamLibRela_GetRecCountByCondCache(
      //       objcc_KnowledgesExamLibRela_Cond,
      //       objcc_CourseKnowledges.courseId,
      //     );
      //     objcc_CourseKnowledges.questionNum = intQuestionNum;
      //   }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:为查询区绑定下拉框
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
*/
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    const strCourseId = clsPubLocalStorage.courseId; //定义条件字段
    // await this.SetDdl_CourseChapterIdInDiv(strCourseId); //查询区域
  }

  //设置添加知识点类型；
  public async btnAddKnowType_Click() {
    const objPage: cc_CourseKnowledgesCRUDEx = new cc_CourseKnowledgesCRUDEx();
    const objPage_Edit: KnowledgeType_EditEx = new KnowledgeType_EditEx(
      'KnowledgeType_EditEx',
      objPage,
    );
    objPage_Edit.btnAddNewRecord_Click();
  }

  /* 显示cc_CourseKnowledges对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   <param name = "divContainer">显示容器</param>
   <param name = "arrcc_CourseKnowledgesExObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_cc_CourseKnowledges4Func(
    divContainer: HTMLDivElement,
    arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx>,
  ) {
    const strThisFuncName = this.BindTab_cc_CourseKnowledges4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'orderNum',
        sortBy: 'orderNum',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'knowledgeName',
        sortBy: 'knowledgeName',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_KnowledgeModuleName,
        sortBy: clscc_CourseKnowledgesENEx.con_KnowledgeModuleName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点模块',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_KpSourceName,
        sortBy: clscc_CourseKnowledgesENEx.con_KpSourceName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点模块',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      // {
      //   fldName: 'userId',
      //   sortBy: 'userId',
      //   getDataSource: '',
      //   sortFun: SortFun,
      //   colHeader: '用户ID',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 5,
      //   funcName: () => {},
      // },
      {
        fldName: clscc_CourseKnowledgesENEx.con_KnowledgeTypeName,
        sortBy: clscc_CourseKnowledgesENEx.con_KnowledgeTypeName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_CourseName,
        sortBy: clscc_CourseKnowledgesENEx.con_CourseName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '课程名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'isShow',
        sortBy: 'isShow',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '是否启用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },

      {
        fldName: clscc_CourseKnowledgesENEx.con_DateTimeSim,
        sortBy: clscc_CourseKnowledgesENEx.con_DateTimeSim,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_QuestionNum,
        sortBy: clscc_CourseKnowledgesENEx.con_QuestionNum,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '题目数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_CourseChapterName,
        sortBy: 'courseChapterId',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '课程章节',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      //{
      //    fldName: "updUser",
      //    sortBy: "updUser",
      //    colHeader: "修改人",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 10,
      //    funcName: () => { }
      //},
    ];

    await this.ExtendFldFuncMap(arrcc_CourseKnowledgesExObjLst, arrDataColumn);
    if (refcc_CourseKnowledges_List.value != null) {
      await BindTabByList(arrcc_CourseKnowledgesExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_cc_CourseKnowledges4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrcc_CourseKnowledgesExObjLst,
        arrDataColumn,
        clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
        this,
      );
    }

    // const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    // await BindTab(
    //   divDataLst,
    //   arrcc_CourseKnowledgesExObjLst,
    //   arrDataColumn,
    //   'courseKnowledgeId',
    //   this,
    // );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async BindTab_cc_CourseKnowledges4Func_DialogSel(
    divContainer: HTMLDivElement,
    arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx>,
  ) {
    const strThisFuncName = this.BindTab_cc_CourseKnowledges4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'orderNum',
        sortBy: 'orderNum',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'knowledgeName',
        sortBy: 'knowledgeName',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_KnowledgeModuleName,
        sortBy: clscc_CourseKnowledgesENEx.con_KnowledgeModuleName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点模块',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },

      // {
      //   fldName: 'userId',
      //   sortBy: 'userId',
      //   getDataSource: '',
      //   sortFun: SortFun,
      //   colHeader: '用户ID',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 5,
      //   funcName: () => {},
      // },
      {
        fldName: clscc_CourseKnowledgesENEx.con_KnowledgeTypeName,
        sortBy: clscc_CourseKnowledgesENEx.con_KnowledgeTypeName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_CourseName,
        sortBy: clscc_CourseKnowledgesENEx.con_CourseName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '课程名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'isShow',
        sortBy: 'isShow',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '是否启用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },

      {
        fldName: clscc_CourseKnowledgesENEx.con_DateTimeSim,
        sortBy: clscc_CourseKnowledgesENEx.con_DateTimeSim,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_QuestionNum,
        sortBy: clscc_CourseKnowledgesENEx.con_QuestionNum,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '题目数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_CourseChapterName,
        sortBy: 'courseChapterId',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '课程章节',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '选择',
        text: '选择',
        tdClass: 'text-left',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          return btn1;
        },
      },
      //{
      //    fldName: "updUser",
      //    sortBy: "updUser",
      //    colHeader: "修改人",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 10,
      //    funcName: () => { }
      //},
    ];

    await this.ExtendFldFuncMap(arrcc_CourseKnowledgesExObjLst, arrDataColumn);
    if (refcc_CourseKnowledges_List_DialogSel.value != null) {
      dataColumn.value = arrDataColumn;
      await BindTabByList_DialogSel(arrcc_CourseKnowledgesExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_cc_CourseKnowledges4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrcc_CourseKnowledgesExObjLst,
        arrDataColumn,
        clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
        this,
      );
    }

    // const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    // await BindTab(
    //   divDataLst,
    //   arrcc_CourseKnowledgesExObjLst,
    //   arrDataColumn,
    //   'courseKnowledgeId',
    //   this,
    // );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async BindTab_cc_CourseKnowledges4Func_Weight(
    divContainer: HTMLDivElement,
    arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx>,
  ) {
    const strThisFuncName = this.BindTab_cc_CourseKnowledges4Func_Weight.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'orderNum',
        sortBy: 'orderNum',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'knowledgeName',
        sortBy: 'knowledgeName',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_KnowledgeModuleName,
        sortBy: clscc_CourseKnowledgesENEx.con_KnowledgeModuleName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点模块',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_KpSourceName,
        sortBy: clscc_CourseKnowledgesENEx.con_KpSourceName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点来源名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clscc_CourseKnowledgesEN.con_ModuleWeight,
        sortBy: clscc_CourseKnowledgesEN.con_ModuleWeight,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '权重',
        text: '',
        tdClass: 'text-left',
        columnType: 'Text',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: '',
        colHeader: '确定',
        text: '确定',
        tdClass: 'text-left',
        sortBy: '',
        getDataSource: '',
        sortFun: clsPubVar4Web.SortFun,
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          // btn1.onclick = .setAttribute('onclick', `btnCurrEduClsInTab_Click('${strKeyId}');`);\
          (function (strKeyId: string) {
            btn1.onclick = function () {
              cc_CourseKnowledgesCRUDEx.vuebtn_Click('SetWeight', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },

      {
        fldName: clscc_CourseKnowledgesENEx.con_KnowledgeTypeName,
        sortBy: clscc_CourseKnowledgesENEx.con_KnowledgeTypeName,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '知识点类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'isShow',
        sortBy: 'isShow',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '是否启用',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },

      {
        fldName: clscc_CourseKnowledgesENEx.con_DateTimeSim,
        sortBy: clscc_CourseKnowledgesENEx.con_DateTimeSim,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_QuestionNum,
        sortBy: clscc_CourseKnowledgesENEx.con_QuestionNum,
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '题目数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: () => {},
      },
      {
        fldName: clscc_CourseKnowledgesENEx.con_CourseChapterName,
        sortBy: 'courseChapterId',
        getDataSource: '',
        sortFun: SortFun,
        colHeader: '课程章节',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      //{
      //    fldName: "updUser",
      //    sortBy: "updUser",
      //    colHeader: "修改人",
      //    text: "",
      //    tdClass: "text-left",
      //    columnType: "Label",
      //    orderNum: 10,
      //    funcName: () => { }
      //},
    ];

    await this.ExtendFldFuncMap(arrcc_CourseKnowledgesExObjLst, arrDataColumn);
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    await BindTab(
      divDataLst,
      arrcc_CourseKnowledgesExObjLst,
      arrDataColumn,
      'courseKnowledgeId',
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /*
    重序
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
    */
  public async btnReOrder_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseChapterId: string = qryVarSet.courseChapterId_q;
    if (strCourseChapterId == '0') {
      const strMsg: string = `没有选择章节，请选择一下章节！`;
      alert(strMsg);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        courseChapterId: strCourseChapterId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await cc_CourseKnowledges_ReOrderAsync(objOrderByData);
      cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
  }

  /*
    置底
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
    */
  public async btnGoBottum_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseChapterId: string = qryVarSet.courseChapterId_q;
    if (strCourseChapterId == '0') {
      const strMsg: string = `没有选择章节，请选择一下章节！`;
      alert(strMsg);
      return;
    }
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置底的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseChapterId: strCourseChapterId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await cc_CourseKnowledges_GoBottomAsync(objOrderByData);
      cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `置底出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
    const strListDiv: string = this.divName4DataList;
    arrKeyIds.forEach((e) => SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
    移动记录序号时的预检查函数
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
    */
  public PreCheck4Order(): boolean {
    const strCourseChapterId: string = qryVarSet.courseChapterId_q;
    if (strCourseChapterId == '') {
      const strMsg = `请输入courseChapterId!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    return true;
  }

  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public async btnDownMove_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseChapterId: string = qryVarSet.courseChapterId_q;
    if (strCourseChapterId == '0') {
      const strMsg: string = `没有选择章节，请选择一下章节！`;
      alert(strMsg);
      return;
    }
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseChapterId: strCourseChapterId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await cc_CourseKnowledges_DownMoveAsync(objOrderByData);
      cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `下移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    const responseBindGv = await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
    const strListDiv: string = this.divName4DataList;
    arrKeyIds.forEach((e) => SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
    上移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseChapterId: string = qryVarSet.courseChapterId_q;
    if (strCourseChapterId == '0') {
      const strMsg: string = `没有选择章节，请选择一下章节！`;
      alert(strMsg);
      return;
    }
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseChapterId: strCourseChapterId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await cc_CourseKnowledges_UpMoveAsync(objOrderByData);
      cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `上移记录出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    const responseBindGv = await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
    const strListDiv: string = this.divName4DataList;
    arrKeyIds.forEach((e) => SetCkechedItem4KeyId(strListDiv, e));
  }

  /* 置顶
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
    */
  public async btnGoTop_Click() {
    if (this.PreCheck4Order() == false) return;
    const strCourseChapterId: string = qryVarSet.courseChapterId_q;
    if (strCourseChapterId == '0') {
      const strMsg: string = `没有选择章节，请选择一下章节！`;
      alert(strMsg);
      return;
    }
    const arrKeyIds = GetCheckedKeyIdsInDiv(this.divName4DataList);
    if (arrKeyIds.length == 0) {
      alert('请选择需要置顶的记录！');
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        courseChapterId: strCourseChapterId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      const responseRederBy = await cc_CourseKnowledges_GoTopAsync(objOrderByData);
      cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
    } catch (e) {
      const strMsg: string = `置顶出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
    const strListDiv: string = this.divName4DataList;
    arrKeyIds.forEach((e: any) => SetCkechedItem4KeyId(strListDiv, e));
  }

  /** 设置字段值-IsMain
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetWeight_Click(strKeyId: string) {
    const strThisFuncName = this.btnSetWeight_Click.name;
    try {
      const txtId = `txt${strKeyId.replace('|', '_')}_${clscc_CourseKnowledgesEN.con_ModuleWeight}`;
      const text1 = GetInputObjInDivObj(divVarSet.refDivList, txtId);
      if (text1 == null) {
        alert(`id=${txtId}的文本框不存在!`);
        return '';
      }
      // const bolIsMain: boolean = $('#chkIsMain_SetFldValue').prop('checked');

      //console.log('bolIsMain=' + bolIsMain);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetWeight(strKeyId, Number(text1.value));
      await this.BindGv_cc_CourseKnowledges4Func_Weight(divVarSet.refDivList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-IsMain
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetWeight(strKeyId: string, dblModuleWeight: number) {
    const strThisFuncName = this.SetWeight.name;
    if (strKeyId == '') {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const userStore = useUserStore();
      const objcc_CourseKnowledges = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(
        strKeyId,
      );

      if (objcc_CourseKnowledges == null) return;
      objcc_CourseKnowledges.SetCourseKnowledgeId(strKeyId);
      objcc_CourseKnowledges.SetModuleWeight(dblModuleWeight);
      objcc_CourseKnowledges.SetUpdDate(clsDateTime.getTodayStr(0));
      objcc_CourseKnowledges.SetUpdUser(userStore.userId);

      const bolResult = await cc_CourseKnowledges_UpdateRecordAsync(objcc_CourseKnowledges);
      if (bolResult == true) {
        cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
        const strInfo = Format('共设置权重成功!');
        alert(strInfo);
      } else {
        const strInfo = Format('共设置权重不成功!');
        alert(strInfo);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public get knowledgeModuleId() {
    const strKnowledgeModuleId = cc_CourseKnowledgesCRUDEx.GetPropValue('knowledgeModuleId');
    return strKnowledgeModuleId;
  }

  /** 设置字段值-KnowledgeModuleId
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
   **/
  public async SetKnowledgeModuleId(
    arrCourseKnowledgeId: Array<string>,
    strKnowledgeModuleId: string,
  ) {
    const strThisFuncName = this.SetKnowledgeModuleId.name;
    if (strKnowledgeModuleId == null || strKnowledgeModuleId == '') {
      const strMsg = '请输入知识点模块Id(KnowledgeModuleId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrCourseKnowledgeId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrcc_CourseKnowledgesObjLst =
        await cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync(arrCourseKnowledgeId);
      let intCount = 0;
      for (const objInFor of arrcc_CourseKnowledgesObjLst) {
        const objcc_CourseKnowledgesEN = new clscc_CourseKnowledgesEN();
        ObjectAssign(objcc_CourseKnowledgesEN, objInFor);
        objcc_CourseKnowledgesEN.SetCourseKnowledgeId(objInFor.courseKnowledgeId);
        objcc_CourseKnowledgesEN.SetKnowledgeModuleId(strKnowledgeModuleId);
        let returnBool = false;
        try {
          objcc_CourseKnowledgesEN.sfUpdFldSetStr = objcc_CourseKnowledgesEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await cc_CourseKnowledges_UpdateRecordAsync(objcc_CourseKnowledgesEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          cc_CourseKnowledges_DeleteKeyIdCache(CourseId_Session.value, objInFor.courseKnowledgeId);

          cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);

          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrCourseKnowledgeId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrcc_CourseKnowledgesObjLst =
        await cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync(arrCourseKnowledgeId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrcc_CourseKnowledgesObjLst) {
        const strMaxStrId = await cc_CourseKnowledges_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.courseKnowledgeId = strMaxStrId;
        objInFor.SetKnowledgeName(`C_${objInFor.knowledgeName}`);
        const returnBool = await cc_CourseKnowledges_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'questionNum|Ex':
        viewVarSet.sortcc_CourseKnowledgesBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      case 'knowledgeModuleName|Ex':
        viewVarSet.sortcc_CourseKnowledgesBy = `cc_KnowledgeModules|knowledgeModuleName ${sortDirection}|cc_CourseKnowledges.KnowledgeModuleId = cc_KnowledgeModules.KnowledgeModuleId`;
        break;
      case 'courseChapterName|Ex':
        viewVarSet.sortcc_CourseKnowledgesBy = `cc_CourseChapter|courseChapterName ${sortDirection}|cc_CourseKnowledges.CourseChapterId = cc_CourseChapter.CourseChapterId`;
        break;
      case 'knowledgeTypeName|Ex':
        viewVarSet.sortcc_CourseKnowledgesBy = `KnowledgeType|knowledgeTypeName ${sortDirection}|cc_CourseKnowledges.KnowledgeTypeId = KnowledgeType.KnowledgeTypeId`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortcc_CourseKnowledgesBy = `vcc_Course_Sim|courseName ${sortDirection}|cc_CourseKnowledges.CourseId = vcc_Course_Sim.CourseId`;
        break;
      default:
        viewVarSet.sortcc_CourseKnowledgesBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_cc_CourseKnowledges4Func(this.listPara.listDiv);
  }
}

import $ from 'jquery';
import gs_KnowledgesGraph_EditEx from './gs_KnowledgesGraph_EditEx';

import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDiv,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { gs_KnowledgesGraphCRUD } from '@/viewsBase/Knowledges/gs_KnowledgesGraphCRUD';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { useUserStore } from '@/store/modulesShare/user';
import { gs_KnowledgesGraph_Edit } from '@/viewsBase/Knowledges/gs_KnowledgesGraph_Edit';
import { gs_KnowledgesGraph_UpdateRecordAsync } from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesGraphWApi';
import { Format } from '@/ts/PubFun/clsString';
import {
  viewVarSet,
  divVarSet,
  CourseId_Session,
  qryVarSet,
} from '@/viewsShare/Knowledges/gs_KnowledgesGraphVueShare';

/* gs_KnowledgesGraphCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class gs_KnowledgesGraphCRUDEx extends gs_KnowledgesGraphCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortgs_KnowledgesGraphBy: string = "knowledgeGraphId";
  /*
   * 每页记录数，在扩展类可以修改
   */
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
    console.log(strType, strPara);
    this.BindGv_gs_KnowledgesGraph4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'gs_KnowledgesGraph':
        alert('该类没有绑定该函数：[this.BindGv_gs_KnowledgesGraph_Cache]！');
        //this.BindGv_gs_KnowledgesGraphCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: gs_KnowledgesGraphCRUDEx = new gs_KnowledgesGraphCRUDEx();
    let objPageEdit;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        // objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        // objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit = new gs_KnowledgesGraph_EditEx('gs_KnowledgesGraph_EditEx', objPage);

        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit = new gs_KnowledgesGraph_EditEx('gs_KnowledgesGraph_EditEx', objPage);

        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
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
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_KnowledgesGraphCRUDExEx.btn_Click');

        break;
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinegs_KnowledgesGraphCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    const userStore = useUserStore();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.idCurrEduCls_q != "" && this.idCurrEduCls_q != "0") {
      //    strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_IdCurrEduCls} = '${this.idCurrEduCls_q}'`;
      //}
      strWhereCond += " and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      //const strCourseId = clsPubLocalStorage.courseId;
      //if (strCourseId != "") {
      //    strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_CourseId} = '${strCourseId}'`;
      //}
      if (qryVarSet.knowledgeGraphName_q != '') {
        strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_KnowledgeGraphName} like '% ${qryVarSet.knowledgeGraphName_q}%'`;
      }

      const strRoleId = userStore.getRoleId;
      //判断角色
      //学生
      if (strRoleId == '00620003') {
        $('#txtCreateUser_q').hide();
        strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_CreateUser} like '% ${userStore.userId}%'`;
      } else {
        $('#txtCreateUser_q').show();
        if (qryVarSet.createUser_q != '') {
          strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_CreateUser} like '% ${qryVarSet.createUser_q}%'`;
        }
      }

      if (qryVarSet.updDate_q != '') {
        strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_UpdDate} like '% ${qryVarSet.updDate_q}%'`;
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0009)在组合查询条件(Combinegs_KnowledgesGraphCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 显示gs_KnowledgesGraph对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrgs_KnowledgesGraphObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_gs_KnowledgesGraph(
    divContainer: HTMLDivElement,
    arrgs_KnowledgesGraphObjLst: Array<clsgs_KnowledgesGraphEN>,
  ) {
    const objLayOut = divVarSet.refDivLayout;
    if (objLayOut == null) return;
    if (divContainer == null) {
      alert(`${divContainer}不存在！`);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'knowledgeGraphName',
        sortBy: 'knowledgeGraphName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点图名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'createUser',
        sortBy: 'createUser',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '建立用户',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'updUser',
        sortBy: 'updUser',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'idCurrEduCls',
        sortBy: 'idCurrEduCls',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '当前教学班流水号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'courseId',
        sortBy: 'courseId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '逻辑结构图',
        text: '构建',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 8,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          // btn1.setAttribute('onclick', `btnDetailRecordInTab_Click("${strKeyId}");`);
          (function (strKeyId: string) {
            btn1.onclick = function () {
              gs_KnowledgesGraphCRUDEx.vuebtn_Click('DetailRecordInTab', strKeyId);
            };
          })(strKeyId);
          return btn1;
        },
      },
    ];
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    await BindTab(divDataLst, arrgs_KnowledgesGraphObjLst, arrDataColumn, 'knowledgeGraphId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoadBak() {
    const objLayOut = divVarSet.refDivLayout;
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortgs_KnowledgesGraphBy = 'knowledgeGraphName Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_gs_KnowledgesGraph4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      const userStore = useUserStore();
      // 为查询区绑定下拉框
      //const gvBindDdl = await this.BindDdl4QueryRegion();
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortgs_KnowledgesGraphBy = 'updDate Desc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_gs_KnowledgesGraph4Func(divVarSet.refDivList);

      const strRoleId = userStore.getRoleId;
      //判断角色
      //学生
      if (strRoleId == '00620003') {
        $('#btnRecommend').hide();
        $('#btnRevokeRecommend').hide();

        $('#btnAnswer').hide();
        $('#btnRevokeAnswer').hide();
      } else {
        $('#btnRecommend').show();
        $('#btnRevokeRecommend').show();

        $('#btnAnswer').show();
        $('#btnRevokeAnswer').show();
      }
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /**
   *
   * @returns 尚未实现
   */

  public async btnAnswer_Click() {
    const strKeyId = GetFirstCheckedKeyIdInDiv('divList');
    if (strKeyId == '') {
      alert('请选择需要推荐的记录！');
      return;
    }

    // this.UpdateIsRecommendRecordSave(strKeyId);
  }
  //推荐
  public async btnRecommend_Click() {
    const strKeyId = GetFirstCheckedKeyIdInDiv('divList');
    if (strKeyId == '') {
      alert('请选择需要推荐的记录！');
      return;
    }

    this.UpdateIsRecommendRecordSave(strKeyId);
  }
  //推荐判断；
  //public async SubmitRecord(strKnowledgeGraphId: string) {

  /* 修改是否推荐
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public UpdateIsRecommendRecordSave(strKey: string): Promise<boolean> {
    //this.DivName = "divUpdateRecordSave";
    const objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN = new clsgs_KnowledgesGraphEN();
    objgs_KnowledgesGraphEN.knowledgeGraphId = strKey;
    //设置提交状态；
    if (GetInputValueInDivObj(this.thisDivLayout, 'hidRecommend') == '1') {
      objgs_KnowledgesGraphEN.isRecommend = true;
    } else {
      objgs_KnowledgesGraphEN.isRecommend = false;
    }

    objgs_KnowledgesGraphEN.sfUpdFldSetStr = objgs_KnowledgesGraphEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objgs_KnowledgesGraphEN.knowledgeGraphId == '' ||
      objgs_KnowledgesGraphEN.knowledgeGraphId == undefined
    ) {
      throw '关键字不能为空!';
    }
    return new Promise(async (resolve, reject) => {
      try {
        const returnBool = await gs_KnowledgesGraph_UpdateRecordAsync(objgs_KnowledgesGraphEN);
        if (returnBool == true) {
          const strInfo: string = `操作成功!`;

          //显示信息框
          alert(strInfo);
          //刷新缓存
          this.BindGv_gs_KnowledgesGraph4Func(divVarSet.refDivList);
        } else {
          const strInfo: string = `操作不成功!`;

          //显示信息框
          alert(strInfo);
          console.log('推荐失败');
        }
      } catch (e) {
        console.log('catch(e)=');
        console.error(e);
        const strMsg: string = `修改记录不成功,${e}.`;
        alert(strMsg);
      }
    });
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinegs_KnowledgesGraphConditionObj(): Promise<clsgs_KnowledgesGraphEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objgs_KnowledgesGraph_Cond = new clsgs_KnowledgesGraphEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.knowledgeGraphName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsgs_KnowledgesGraphEN.con_KnowledgeGraphName,
          qryVarSet.knowledgeGraphName_q,
        );
        objgs_KnowledgesGraph_Cond.SetCondFldValue(
          clsgs_KnowledgesGraphEN.con_KnowledgeGraphName,
          qryVarSet.knowledgeGraphName_q,
          'like',
        );
      }

      if (qryVarSet.createUser_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsgs_KnowledgesGraphEN.con_CreateUser,
          qryVarSet.createUser_q,
        );
        objgs_KnowledgesGraph_Cond.SetCondFldValue(
          clsgs_KnowledgesGraphEN.con_CreateUser,
          qryVarSet.createUser_q,
          'like',
        );
      }
      if (qryVarSet.updDate_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsgs_KnowledgesGraphEN.con_UpdDate,
          qryVarSet.updDate_q,
        );
        objgs_KnowledgesGraph_Cond.SetCondFldValue(
          clsgs_KnowledgesGraphEN.con_UpdDate,
          qryVarSet.updDate_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0010)在组合查询条件对象(Combinegs_KnowledgesGraphConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objgs_KnowledgesGraph_Cond.whereCond = strWhereCond;
    return objgs_KnowledgesGraph_Cond;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'courseName|Ex':
        viewVarSet.sortgs_KnowledgesGraphBy = `vcc_Course_Sim|courseName ${sortDirection}|gs_KnowledgesGraph.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'eduClsName|Ex':
        viewVarSet.sortgs_KnowledgesGraphBy = `CurrEduCls|eduClsName ${sortDirection}|gs_KnowledgesGraph.IdCurrEduCls = CurrEduCls.IdCurrEduCls`;
        break;
      default:
        viewVarSet.sortgs_KnowledgesGraphBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_gs_KnowledgesGraph4Func(this.thisDivList);
  }
}

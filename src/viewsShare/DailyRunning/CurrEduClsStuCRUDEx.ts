/**
 * 类名:CurrEduClsStuCRUDEx(界面:CurrEduClsStuCRUD)
 * 表名:CurrEduClsStu(01120125)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:11:51
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日常运行(DailyRunning)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { CurrEduClsStuCRUD } from '@/viewsBase/DailyRunning/CurrEduClsStuCRUD';
import CurrEduClsStu_EditEx from '@/viewsShare/DailyRunning/CurrEduClsStu_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetDivObjInDivObj,
  intersectSets,
  GetAObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
// import { vCurrEduClsStu_GetRecCountByCondCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import {
  divVarSet,
  refCurrEduClsStu_Edit,
  viewVarSet,
  IdCurrEduCls_Session,
  idCurrEduCls_q,
  eduClsName_q,
  refCurrEduClsStu_List,
  BindTabByList,
  stuId_q,
  stuName_q,
} from '@/viewsShare/DailyRunning/CurrEduClsStuVueShare';
import { CourseId_Session } from '@/viewsShare/Knowledges/cc_KnowledgesExamLibRelaVueShare';
import { clsCurrEduClsStuENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuENEx';
import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
import {
  CurrEduClsStuEx_FuncMapKeyStuId,
  CurrEduClsStuEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';
import { CurrEduClsStu_GetRecCountByCondAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { QxUserRoleRelationEx_DelRecord } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxUserRoleRelationExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

/** CurrEduClsStuCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class CurrEduClsStuCRUDEx extends CurrEduClsStuCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvCurrEduClsStuBy = "IdEduClsStu";
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
    alert(`该类没有绑定该函数：[this.BindGv_vCurrEduClsStu]!${strType}${strPara}`);
    //this.BindGv_vCurrEduClsStuCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vCurrEduClsStu':
        this.BindGv_CurrEduClsStu4Func(divVarSet.refDivList);
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
  public static btn_Click(strCommandName: string, strKeyId: any) {
    const objData = strKeyId;
    let objPage: CurrEduClsStuCRUDEx;
    let objPageEdit;
    if (CurrEduClsStuCRUD.objPageCRUD == null) {
      CurrEduClsStuCRUD.objPageCRUD = new CurrEduClsStuCRUDEx();
      objPage = <CurrEduClsStuCRUDEx>CurrEduClsStuCRUD.objPageCRUD;
    } else {
      objPage = <CurrEduClsStuCRUDEx>CurrEduClsStuCRUD.objPageCRUD;
    }

    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'DelRole':
        // const sstrSplit: string[] = objData.split('|');
        // if (sstrSplit.length != 2) {
        //   message.warning(`传递参数个数不正确！${objData}`);
        // }

        objPage.btnDelRole_Click(objData.userId, objData.roleId);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new CurrEduClsStu_EditEx('CurrEduClsStu_EditEx', objPage);

        refCurrEduClsStu_Edit.value.btnCurrEduClsStu_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new CurrEduClsStu_EditEx('CurrEduClsStu_EditEx', objPage);

        refCurrEduClsStu_Edit.value.btnCurrEduClsStu_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:strCommandName在函数(CurrEduClsStuCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /** 显示vCurrEduClsStu对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrCurrEduClsStuObjLst:需要绑定的对象列表
   **/
  public async BindTab_vCurrEduClsStu(
    divContainer: HTMLDivElement,
    arrCurrEduClsStuObjLst: Array<clsCurrEduClsStuENEx>,
  ) {
    const strThisFuncName = this.BindTab_vCurrEduClsStu.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');

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
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      // {
      //   fldName: clsvCurrEduClsStuEN.con_EduClsName,
      //   sortBy: clsvCurrEduClsStuEN.con_EduClsName,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '教学班',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 2,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsvCurrEduClsStuEN.con_StuId,
        sortBy: clsvCurrEduClsStuEN.con_StuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_StuName,
        sortBy: clsvCurrEduClsStuEN.con_StuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_MajorName,
        sortBy: clsvCurrEduClsStuEN.con_MajorName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_CourseId,
        sortBy: clsvCurrEduClsStuEN.con_CourseId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程代码',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_CourseName,
        sortBy: clsvCurrEduClsStuEN.con_CourseName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程',
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
        fldName: clsvCurrEduClsStuEN.con_CourseTypeName,
        sortBy: clsvCurrEduClsStuEN.con_CourseTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_SchoolTerm,
        sortBy: clsvCurrEduClsStuEN.con_SchoolTerm,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_SchoolYear,
        sortBy: clsvCurrEduClsStuEN.con_SchoolYear,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学年',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab(
      divDataLst,
      arrCurrEduClsStuObjLst,
      arrDataColumn,
      clsvCurrEduClsStuEN.con_IdEduClsStu,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      CourseId_Session.value = clsPubLocalStorage.courseId;

      // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      // await this.BindDdl4FeatureRegion();

      viewVarSet.sortCurrEduClsStuBy = 'eduClsName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_CurrEduClsStu4Func(divVarSet.refDivList);
    } catch (e: any) {
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
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_CurrEduClsStu4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_CurrEduClsStu4Func.name;
    if (divList == null) {
      const strMsg = Format(
        '用于显示列表的div为空,请检查!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.listPara.listDiv = divList;
    if (viewVarSet.sortCurrEduClsStuBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCurrEduClsStuBy)为空,请检查!(In BindGv_CurrEduClsStuCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (divList == null) {
      const strMsg = Format(
        '用于显示列表的div为空,请检查!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    this.listPara.listDiv = divList;
    const strWhereCond = await this.CombineCurrEduClsStuConditionEx();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrCurrEduClsStuExObjLst: Array<clsCurrEduClsStuENEx> = [];
    try {
      this.recCount = await CurrEduClsStu_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortCurrEduClsStuBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrCurrEduClsStuExObjLst = await CurrEduClsStuEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrCurrEduClsStuExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsCurrEduClsStuEN._CurrTabName, IdCurrEduCls_Session.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_CurrEduClsStu4Func(divList, arrCurrEduClsStuExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineCurrEduClsStuConditionEx(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += ` And IdCurrEduCls = ${IdCurrEduCls_Session.value}`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (idCurrEduCls_q.value != '' && idCurrEduCls_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCurrEduClsStuEN.con_IdCurrEduCls,
          idCurrEduCls_q.value,
        );
      }
      if (eduClsName_q.value != '') {
        strWhereCond += Format(
          " And  IdCurrEduCls in (Select IdCurrEduCls from vCurrEduCls_Sim where EduClsName like '%{0}%') ",
          eduClsName_q.value,
        );
      }
      if (stuName_q.value != '') {
        strWhereCond += Format(
          " And  IdStudentInfo in (Select IdStudentInfo from vStudentInfo_Sim where StuName like '%{0}%') ",
          stuName_q.value,
        );
      }

      //处理针对扩展字段:[IdStu]的查询
      const arrIdStu = await this.GetCondition_IdStuLst_In();
      if (arrIdStu.length > 0) {
        strWhereCond += Format(
          ' And {0} in ({1})',
          clsCurrEduClsStuEN.con_IdStu,
          arrIdStu.join(','),
        );
      }
      // if (courseName_q.value != '') {
      //   strWhereCond += Format(
      //     " And  IdCurrEduCls in (Select IdCurrEduCls from vCurrEduCls_Sim where CourseId like '%{0}%') ",
      //     courseName_q.value,
      //   );
      // }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件(CombineCurrEduClsStuCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
   * @returns 相关字段的关键字列表(Array<string>)
   **/
  public async GetCondition_IdStuLst_In(): Promise<Array<string>> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objCurrEduClsStuCond = new clsCurrEduClsStuENEx();
    // objCurrEduClsStuCond.SetCondFldValue(
    //   clsCurrEduClsStuENEx.con_IdCurrEduCls,
    //   IdCurrEduCls_Session.value,
    //   '=',
    // );
    objCurrEduClsStuCond.idCurrEduCls = IdCurrEduCls_Session.value;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let arrIdStuInclude: Array<string> = [];
    try {
      if (stuId_q.value != '') {
        objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuENEx.con_StuId, stuId_q.value, 'like');

        const arrIdStu_StuId = await CurrEduClsStuEx_FuncMapKeyStuId(objCurrEduClsStuCond);
        if (arrIdStuInclude.length == 0) {
          arrIdStuInclude = arrIdStu_StuId.map((x) => x.toString());
        } else {
          arrIdStuInclude = intersectSets(
            arrIdStuInclude,
            arrIdStu_StuId.map((x) => x.toString()),
          );
        }
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return arrIdStuInclude;
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'eduClsName|Ex':
        viewVarSet.sortCurrEduClsStuBy = `vCurrEduCls_Sim|EduClsName ${sortDirection}|CurrEduClsStu.IdCurrEduCls = vCurrEduCls_Sim.IdCurrEduCls`;
        break;
      case 'stuName|Ex':
        viewVarSet.sortCurrEduClsStuBy = `vStudentInfo_Sim|StuName ${sortDirection}|CurrEduClsStu.IdStu = vStudentInfo_Sim.IdStudentInfo`;
        break;
      case 'majorName|Ex':
        viewVarSet.sortCurrEduClsStuBy = `vCurrEduCls_Sim|MajorName ${sortDirection}|CurrEduClsStu.IdCurrEduCls = vCurrEduCls_Sim.IdCurrEduCls,vCurrEduCls_Sim.IdXzMajor = XzMajor.IdXzMajor`;
        break;
      case 'courseCode|Ex':
        viewVarSet.sortCurrEduClsStuBy = `vCurrEduCls_Sim|CourseCode ${sortDirection}|CurrEduClsStu.IdCurrEduCls = vCurrEduCls_Sim.IdCurrEduCls,vCurrEduCls_Sim.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortCurrEduClsStuBy = `vCurrEduCls_Sim|CourseName ${sortDirection}|CurrEduClsStu.IdCurrEduCls = vCurrEduCls_Sim.IdCurrEduCls,vCurrEduCls_Sim.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'courseTypeName|Ex':
        viewVarSet.sortCurrEduClsStuBy = `vCurrEduCls_Sim|CourseTypeName ${sortDirection}|CurrEduClsStu.IdCurrEduCls = vCurrEduCls_Sim.IdCurrEduCls,vCurrEduCls_Sim.CourseId = vcc_Course_Sim.CourseId,vcc_Course_Sim.CourseTypeId = cc_CourseType.CourseTypeId`;
        break;
      default:
        viewVarSet.sortCurrEduClsStuBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_CurrEduClsStu4Func(this.listPara.listDiv);
  }

  /** 显示CurrEduClsStu对象的所有属性值
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrCurrEduClsStuExObjLst:需要绑定的对象列表
   **/
  public async BindTab_CurrEduClsStu4Func(
    divContainer: HTMLDivElement,
    arrCurrEduClsStuExObjLst: Array<clsCurrEduClsStuENEx>,
  ) {
    const strThisFuncName = this.BindTab_CurrEduClsStu4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
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
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuENEx.con_EduClsName,
        sortBy: 'eduClsName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教学班名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuENEx.con_StuId,
        sortBy: 'stuId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuENEx.con_StuName,
        sortBy: 'stuName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuENEx.con_GradeName,
        sortBy: 'gradeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '年级名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuENEx.con_RoleNames,
        sortBy: clsCurrEduClsStuENEx.con_RoleNames,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '角色s',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuENEx.con_AdminClsName,
        sortBy: 'adminClsName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '行政班名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      // {
      //   fldName: clsCurrEduClsStuENEx.con_MajorName,
      //   sortBy: 'majorName',
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '专业名称',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 7,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsCurrEduClsStuENEx.con_CourseCode,
        sortBy: 'courseCode',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程代码',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuENEx.con_CourseName,
        sortBy: 'courseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuENEx.con_CourseTypeName,
        sortBy: 'courseTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuEN.con_SchoolYear,
        sortBy: clsCurrEduClsStuEN.con_SchoolYear,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学年',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsCurrEduClsStuEN.con_SchoolTerm,
        sortBy: clsCurrEduClsStuEN.con_SchoolTerm,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrCurrEduClsStuExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refCurrEduClsStu_List.value != null) {
      await BindTabByList(arrCurrEduClsStuExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_CurrEduClsStu4Func函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrCurrEduClsStuExObjLst,
        arrDataColumn,
        clsCurrEduClsStuEN.con_IdEduClsStu,
        this,
      );
    }
    this.SetEventForDel();
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public SetEventForDel() {
    {
      const arrALst = GetAObjLstInDivObj(this.listPara.listDiv, 'aDel');
      for (const aDel of arrALst) {
        if (aDel != null) {
          const strKeyId = aDel.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            userId: arr[0],
            roleId: arr[1],
          };

          (function (objData: any) {
            aDel.onclick = function () {
              CurrEduClsStuCRUDEx.vuebtn_Click('DelRole', objData);
            };
          })(objData);
        }
      }
    }
  }
  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRole_Click(strUserId: string, strRoleId: string) {
    const strThisFuncName = this.btnDelRole_Click.name;
    try {
      const qxUserRoleRelationStore = useQxUserRoleRelationStore();
      await QxUserRoleRelationEx_DelRecord(strUserId, strRoleId);
      qxUserRoleRelationStore.delUser(strUserId, clsSysPara4WebApi.currSelPrjId);

      await this.BindGv_CurrEduClsStu4Func(this.listPara.listDiv);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}

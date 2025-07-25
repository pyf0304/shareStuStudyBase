import $ from 'jquery';
import { CurrEduClsCRUD } from '@/viewsBase/DailyRunning/CurrEduClsCRUD';
import CurrEduCls_EditEx from '@/viewsShare/DailyRunning/CurrEduCls_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { BindTab_V, GetCheckedKeyIds, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsvCurrEduClsENEx } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsENEx';
import {
  vCurrEduCls_GetObjLstByPagerAsync,
  vCurrEduCls_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsWApi';
import { clsvCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsEN';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Format } from '@/ts/PubFun/clsString';
import {
  gs_TeachingDate_GetFirstObjAsync,
  gs_TeachingDate_GetObjLstCache,
} from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import { vCurrEduClsEx_CopyToEx } from '@/ts/L3ForWApiExShare/DailyRunning/clsvCurrEduClsExWApi';
import gs_TeachingDate_EditEx from '@/viewsShare/DailyRunning/gs_TeachingDate_EditEx';
import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
import {
  CurrEduCls_GetObjLstAsync,
  CurrEduCls_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { usevQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { useUserStore } from '@/store/modulesShare/user';
import { clsCurrEduClsENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsENEx';
import { CurrEduClsEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import {
  divVarSet,
  viewVarSet,
  CourseId_Session,
  qryVarSet,
  CombineCurrEduClsConditionObj,
} from '@/viewsShare/DailyRunning/CurrEduClsVueShare';

/** CurrEduClsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class CurrEduClsCRUDEx extends CurrEduClsCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvCurrEduClsBy = "IdCurrEduCls";

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
    alert(`该类没有绑定该函数：[this.BindGv_vCurrEduCls]!${strType}${strPara}`);
    //this.BindGv_CurrEduCls4Func();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vCurrEduCls':
      case 'CurrEduCls':
        this.BindGv_CurrEduCls4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      //建立缓存
      CourseId_Session.value = clsPubLocalStorage.courseId;

      viewVarSet.sortCurrEduClsBy = 'currEduClsId Asc';

      //2、显示无条件的表内容在GridView中
      const gvResult = await this.BindGv_CurrEduCls4Func(divVarSet.refDivList);
      // HideDivInDivObj(this.thisDivLayout, 'divLoading');
    } catch (e) {
      const strMsg: string = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /*
   按钮单击,用于调用Js函数中btn_Click
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
  */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: CurrEduClsCRUDEx;
    let objPageEdit;
    if (CurrEduClsCRUD.objPageCRUD == null) {
      CurrEduClsCRUD.objPageCRUD = new CurrEduClsCRUDEx();
      objPage = <CurrEduClsCRUDEx>CurrEduClsCRUD.objPageCRUD;
    } else {
      objPage = <CurrEduClsCRUDEx>CurrEduClsCRUD.objPageCRUD;
    }

    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    let strMsg = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        // ShowDialog('AddWithMaxId');
        objPageEdit = new CurrEduCls_EditEx('CurrEduCls_EditEx', objPage);

        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        // ShowDialog('AddWithMaxId');
        objPageEdit = new CurrEduCls_EditEx('CurrEduCls_EditEx', objPage);
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new CurrEduCls_EditEx('CurrEduCls_EditEx', objPage);
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'SetUpDate': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == '') {
          alert('请选择需要设置的记录！');
          return;
        }
        objPage.btnSetUpDateRecord_Click(strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit = new CurrEduCls_EditEx('CurrEduCls_EditEx', objPage);
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
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
        strMsg = '命令:' + strCommandName + '在函数(WA_Users_QUDI_CacheEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  //概念提交审核
  public async mySubmitDate() {
    let objPage: CurrEduClsCRUDEx;
    if (CurrEduClsCRUD.objPageCRUD == null) {
      CurrEduClsCRUD.objPageCRUD = new CurrEduClsCRUDEx();
      objPage = <CurrEduClsCRUDEx>CurrEduClsCRUD.objPageCRUD;
    } else {
      objPage = <CurrEduClsCRUDEx>CurrEduClsCRUD.objPageCRUD;
    }
    const objPage_Edit: CurrEduCls_EditEx = new CurrEduCls_EditEx('CurrEduCls_EditEx', objPage);
    await objPage_Edit.SetUpDate();
  }

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/

  /* 删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
*/
  public async btnDelRecord_Click() {
    try {
      const userStore = useUserStore();
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      //需要判断当前数据中是否包含已提交数据、如果有则不能删除
      let strKeyList;
      if (arrKeyIds.length == 0) return '';
      strKeyList = '';
      for (let i = 0; i < arrKeyIds.length; i++) {
        if (i == 0) strKeyList = strKeyList + "'" + arrKeyIds[i].toString() + "'";
        else strKeyList += ',' + "'" + arrKeyIds[i].toString() + "'";
      }
      //
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strWhereCond = ' idCurrEduCls in (' + strKeyList + ')';
      let arrCurrEduClsObjLst: Array<clsCurrEduClsEN> = [];
      const responseText1 = await CurrEduCls_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrCurrEduClsObjLst = <Array<clsCurrEduClsEN>>jsonData;
        //查询是否有提交的数据
        arrCurrEduClsObjLst = arrCurrEduClsObjLst.filter((x) => x.modifyUserId != strUserId);
        if (arrCurrEduClsObjLst.length > 0) {
          alert('包含其他用户添加数据，不能删除！');
          return '';
        }
      });

      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_CurrEduCls4Func(divVarSet.refDivList);
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevCurrEduClsCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond: string = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (qryVarSet.currEduClsId_q != '') {
        strWhereCond += ` And ${clsvCurrEduClsEN.con_CurrEduClsId} like '%${qryVarSet.currEduClsId_q}%'`;
      }
      if (qryVarSet.eduClsName_q != '') {
        strWhereCond += ` And ${clsvCurrEduClsEN.con_EduClsName} like '%${qryVarSet.eduClsName_q}%'`;
      }
      if (qryVarSet.courseId_q != '' && qryVarSet.courseId_q != '0') {
        strWhereCond += ` And ${clsvCurrEduClsEN.con_CourseId} = '${qryVarSet.courseId_q}'`;
      }
    } catch (objException) {
      const strMsg: string = `(errid:WiTsCs0002)在组合查询条件(CombineCurrEduClsCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objvCurrEduClsS">源对象</param>
  public async FuncMap(objvCurrEduCls: clsvCurrEduClsENEx) {
    try {
      {
        const vQxUsersSimStore = usevQxUsersSimStore();
        const vUsersSim_UserId = objvCurrEduCls.modifyUserId;
        if (vUsersSim_UserId == '') {
          objvCurrEduCls.userName = '';
        } else {
          const vUsersSim_UserName = await vQxUsersSimStore.getUserName(vUsersSim_UserId);
          objvCurrEduCls.userName = vUsersSim_UserName;
        }
      }

      {
        let arrgs_TeachingDate = await gs_TeachingDate_GetObjLstCache(objvCurrEduCls.idCurrEduCls);
        if (arrgs_TeachingDate.length > 0) {
          let objgs_TeachingDate = arrgs_TeachingDate[0];
          let strTeachingDate = Format(
            '{0}-{1}',
            objgs_TeachingDate.startDate,
            objgs_TeachingDate.endDate,
          );
          objvCurrEduCls.teachingDate = strTeachingDate;
        }
      }
    } catch (e) {
      const strMsg: string = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.()`;
      alert(strMsg);
    }
  }
  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vCurrEduClsBak() {
    const strListDiv: string = this.divName4DataList;
    const strWhereCond = await this.CombinevCurrEduClsCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvCurrEduClsObjLst: Array<clsvCurrEduClsEN> = [];
    let arrvCurrEduClsExObjLst: Array<clsvCurrEduClsENEx> = [];
    try {
      this.recCount = await vCurrEduCls_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortCurrEduClsBy,
        sortFun: (x, y) => {
          return 0;
        },
      };
      const responseObjLst = await vCurrEduCls_GetObjLstByPagerAsync(objPagerPara).then(
        (jsonData) => {
          arrvCurrEduClsObjLst = <Array<clsvCurrEduClsEN>>jsonData;
        },
      );

      arrvCurrEduClsExObjLst = arrvCurrEduClsObjLst.map(vCurrEduClsEx_CopyToEx);
      for (const objInFor of arrvCurrEduClsExObjLst) {
        const conFuncMap = await this.FuncMap(objInFor);
      }
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      this.BindTab_vCurrEduCls(strListDiv, arrvCurrEduClsExObjLst);
      console.log('完成BindGv_vCurrEduCls!');
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 显示vCurrEduCls对象的所有属性值
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
<param name = "divContainer">显示容器</param>
<param name = "arrCurrEduClsObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vCurrEduCls(
    divContainer: string,
    arrvCurrEduClsObjLst: Array<clsvCurrEduClsENEx>,
  ) {
    const o: HTMLDivElement = document.getElementById(divContainer) as HTMLDivElement;
    if (o == null) {
      alert(`${divContainer}不存在！`);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'currEduClsId',
        colHeader: '教学班Id',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'eduClsName',
        colHeader: '教学班',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "courseCode",
      //    colHeader: "课程代码",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'courseName',
        colHeader: '课程',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'collegeName',
        colHeader: '学院',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'schoolYear',
        colHeader: '学年',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'schoolTerm',
        colHeader: '学期',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsvCurrEduClsENEx.con_TeachingDate,
        colHeader: '时间范围',
        text: '',
        tdClass: 'text-left',
        sortBy: clsvCurrEduClsENEx.con_TeachingDate,
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'userName',
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编辑人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 21,
        funcName: () => {},
      },
    ];
    BindTab_V(o, arrvCurrEduClsObjLst, arrDataColumn, 'idCurrEduCls', this);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divVarSet.refDivList, this, this.divName4Pager);
  }

  /* 设置教学班时间范围；
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnSetUpDateRecord_Click(keyId: string) {
    const objPage: CurrEduClsCRUDEx = new CurrEduClsCRUDEx();
    const objPage_Edit: gs_TeachingDate_EditEx = new gs_TeachingDate_EditEx(
      'gs_TeachingDate_EditEx',
      objPage,
    );
    const strKeyId = keyId;
    //判断教学班数据是否已经被设置
    const strWhere = " 1 = 1 And idCurrEduCls = '" + strKeyId + "'";
    const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhere);
    const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
    if (objgs_TeachingDateEN != null) {
      //赋值，弹出框
      //存放教学班日期范围表主键
      $('#hidgs_DateId').val(objgs_TeachingDateEN.mId);
      objPage_Edit.btnUpdateRecordInTab_Click(objgs_TeachingDateEN.mId);
    } else {
      //添加 需要清空下隐藏数据
      $('#hidgs_DateId').val('');
      objPage_Edit.btnAddNewRecord_Click();
    }
  }

  // /*
  //  * 开始时间
  //  */
  // public set startDate(value: string) {
  //   $('#txtStartDate').val(value);
  // }
  // /*
  //  * 开始时间
  //  */
  // public get startDate(): string {
  //   return $('#txtStartDate').val();
  // }

  // /*
  //  * 结束时间
  //  */
  // public set endDate(value: string) {
  //   $('#txtEndDate').val(value);
  // }
  // /*
  //  * 结束时间
  //  */
  // public get endDate(): string {
  //   return $('#txtEndDate').val();
  // }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_CurrEduCls4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_CurrEduCls4Func.name;
    if (viewVarSet.sortCurrEduClsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCurrEduClsBy)为空,请检查!(In BindGv_CurrEduClsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await this.CombinevCurrEduClsCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrCurrEduClsExObjLst: Array<clsCurrEduClsENEx> = [];
    try {
      this.recCount = await CurrEduCls_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        // if (divDataLst != null) {
        //   divDataLst.innerText = '';
        //   divDataLst.appendChild(lblMsg);
        // }
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
        orderBy: viewVarSet.sortCurrEduClsBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrCurrEduClsExObjLst = await CurrEduClsEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrCurrEduClsExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsCurrEduClsEN._CurrTabName, CourseId_Session.value);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      // ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_CurrEduCls4Func(divList, arrCurrEduClsExObjLst);
      //console.log("完成BindGv_CurrEduCls4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'courseCode|Ex':
        viewVarSet.sortCurrEduClsBy = `vcc_Course_Sim|CourseCode ${sortDirection}|CurrEduCls.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'courseName|Ex':
        viewVarSet.sortCurrEduClsBy = `vcc_Course_Sim|CourseName ${sortDirection}|CurrEduCls.CourseId = vcc_Course_Sim.CourseId`;
        break;
      case 'collegeName|Ex':
        viewVarSet.sortCurrEduClsBy = `XzClg|CollegeName ${sortDirection}|CurrEduCls.IdXzCollege = XzClg.IdXzCollege`;
        break;
      case 'userTypeNameSim|Ex':
        viewVarSet.sortCurrEduClsBy = `UserType|UserTypeNameSim ${sortDirection}|CurrEduCls.UserTypeId = UserType.UserTypeId`;
        break;
      case 'gradeBaseName|Ex':
        viewVarSet.sortCurrEduClsBy = `XzGradeBase|GradeBaseName ${sortDirection}|CurrEduCls.IdGradeBase = XzGradeBase.IdGradeBase`;
        break;
      case 'classRoomTypeDesc|Ex':
        viewVarSet.sortCurrEduClsBy = `ClsRmType|ClassRoomTypeDesc ${sortDirection}|CurrEduCls.IdClassRoomType = ClsRmType.IdClassRoomType`;
        break;
      case 'lastVisitedDate|Ex':
        viewVarSet.sortCurrEduClsBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
      default:
        viewVarSet.sortCurrEduClsBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_CurrEduCls4Func(this.thisDivList);
  }
}

import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
// import { StudentInfoCRUD } from '@/viewsBase/UserManage/StudentInfoCRUD';
import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';

import {
  CurrEduClsStu_AddNewRecordAsync,
  CurrEduClsStu_IsExistRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
import {
  StudentInfo_AddNewRecordAsync,
  StudentInfo_DelRecordAsync,
  StudentInfo_DelStudentInfosAsync,
  StudentInfo_GetObjByIdStudentInfoAsync,
  StudentInfo_GetObjLstByIdStudentInfoLstAsync,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import {
  StudentInfo_GetObjLstAsync,
  StudentInfo_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import {
  arrSelectedKeys,
  BindTab,
  GetCheckedKeyIds,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { StudentInfoCRUD } from '@/viewsBase/UserManage/StudentInfoCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectObjInDivObj,
  SetSpanHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import {
  XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache,
  XzMajor_BindDdl_IdXzMajorInDivCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache } from '@/ts/L3ForWApiExShare/SysPara/clsvXzGradeBaseExWApi';
import { useUserStore } from '@/store/modulesShare/user';
import {
  divVarSet,
  IdCurrEduCls_Static,
  pageType,
  qryVarSet,
  refDivLayout,
  viewVarSet,
} from '@/viewsShare/UserManage/StudentInfoListVueShare';
import { vCurrEduCls_Sim_GetObjByIdCurrEduClsCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
import { XzGrade_BindDdl_IdGradeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { enumUserType } from '@/ts/L0Entity/UserManage/clsUserTypeEN';
import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import {
  StudentInfoEx_CopyToEx,
  StudentInfoEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiExShare/UserManage/clsStudentInfoExWApi';
import { XzClg_BindDdl_IdXzCollegeByUserTypeIdInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { CurrEduClsStuEx_AddNewRecordSaveCurrEduClsStu } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';

/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
/* StudentInfoCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export default class StudentInfoList extends StudentInfoCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;

  // public static EditRef: ref<any>;
  // public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  // protected iShowList: IShowList;
  public static objPageEdit: StudentInfoList;
  public static objPageEdit2: StudentInfoList;
  public static objPageEdit3: StudentInfoList;
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  constructor() {
    super();
    if (StudentInfoList.SetPageEdit(this, 1) == true) return;
    if (StudentInfoList.SetPageEdit(this, 2) == true) return;
    if (StudentInfoList.SetPageEdit(this, 3) == true) return;
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
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortStudentInfoBy: string = "idStudentInfo";
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_StudentInfo4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'StudentInfo':
        alert('该类没有绑定该函数：[this.BindGv_StudentInfo_Cache]！');
        //this.BindGv_StudentInfo4Func(divVarSet.refDivList);;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string) {
    // const objPage = new StudentInfoList();
    const strIdStu = strKeyId;
    const objPage: StudentInfoList = new StudentInfoList();
    if (divVarSet.refDivLayout != null) {
      const divDataLst = GetDivObjInDivObj(divVarSet.refDivLayout, 'divDataLst');
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divDataLst);
      strKeyId = GetFirstCheckedKeyIdInDivObj(divDataLst);
    }
    //const objPageEdit: Ex = new Ex(objPage);
    switch (strCommandName) {
      case 'PageLoad':
        if (objPage != null) {
          objPage.PageLoad();
        }
        break;

      case 'AddStuToEduCls':
        objPage.btnAddStuToEduCls_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'SetDiv':
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'StudentInfoList.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public mstrListDiv = 'divDataLst'; //列表区数据列表层id
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public bolIsLoadDetailRegion = false; //记录是否导入详细信息区的变量
  public divName4Edit = 'divEdit'; //编辑区的Id
  public divName4Detail = 'divDetail'; //详细信息区的Id
  //public objPager: clsPager = new clsPager();
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public recCount = 0;

  /*
   * 函数功能:页面导入,当页面开始运行时所发生的事件
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      // const bolIsSuccess = await this.ShowDialog_StudentLst();
      // if (bolIsSuccess == false) return;
      const userStore = useUserStore();

      const strCourseId = clsPubLocalStorage.courseId;
      const objCurrEduCls = await vCurrEduCls_Sim_GetObjByIdCurrEduClsCache(
        IdCurrEduCls_Static.value,
        strCourseId,
      );
      if (objCurrEduCls == null) {
        const strMsg = `当前教学班为空，请检查！`;
        SetLabelHtmlByIdInDivObj(refDivLayout.value, 'lblViewTitle', strMsg);
        return;
      }

      const strMsg = `相关教学班:${objCurrEduCls.eduClsName}(${objCurrEduCls.idCurrEduCls})`;
      SetSpanHtmlInDivObj(refDivLayout.value, 'spnEduClsName', strMsg);
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // this.SetEventFunc();
      const strRoleId = userStore.getRoleId;
      //判断角色
      //管理员

      if (strRoleId == '00620002') {
        $('#btnOkPushStuText').show();
      }

      viewVarSet.sortStudentInfoBy = 'stuId Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
   */
  public async PageLoadCacheBak() {
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      viewVarSet.sortStudentInfoBy = 'stuId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  public async btnQuery_Click() {
    await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
  }

  /* 函数功能:为查询区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    await this.SetDdl_idXzCollegeInDiv();
    await this.SetDdl_idGradeInDiv();
  }

  /*
     添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
    */
  public async btnCopyRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `复制记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async btnAddStuToEduCls_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      await this.AddStuToEduCls(arrKeyIds);
      await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `复制记录不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelRecord(strKeyId);
      await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里选择记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   */
  public async btnSelectRecordInTab_Click1(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      this.SelectRecord(strKeyId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `选择记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord(strid_StudentInfo: string) {
    try {
      const responseText = await StudentInfo_DelRecordAsync(strid_StudentInfo);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //StudentInfo_ReFreshCache();
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    根据关键字选择相应的记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
     <param name = "sender">参数列表</param>
   */
  public async SelectRecord(strid_StudentInfo: string) {
    try {
      const objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strid_StudentInfo);

      console.log('完成SelectRecord!', objStudentInfoEN);
      Redirect('/Index/Main_StudentInfo');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   */
  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   */
  public async btnExportExcel_Click() {
    const objLayOut = divVarSet.refDivLayout;
    if (objLayOut == null) return;
    const strWhereCond = ' 1=1 ';

    try {
      const arrStudentInfoObjLst: Array<clsStudentInfoEN> = await StudentInfo_GetObjLstAsync(
        strWhereCond,
      );
      const arrStudentInfoObjLstEx: Array<clsStudentInfoENEx> =
        arrStudentInfoObjLst.map(StudentInfoEx_CopyToEx);
      this.BindTab_StudentInfo(this.thisDivList, arrStudentInfoObjLstEx);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `导出Excel不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombineStudentInfoCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const userStore = useUserStore();
    if (userStore.userTypeId == enumUserType.PrimaryandSecondarySchoolUser_04) {
      strWhereCond += ` And ${clsStudentInfoEN.con_UserTypeId} = '${userStore.userTypeId}'`;
    } else if (userStore.userTypeId == enumUserType.UniversityUser_05) {
      strWhereCond += ` And ${clsStudentInfoEN.con_UserTypeId} = '${userStore.userTypeId}'`;
    }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StuID_q != '') {
        strWhereCond += ` And ${clsStudentInfoEN.con_StuId} like '%${this.StuID_q}%'`;
      }
      if (this.StuName_q != '') {
        strWhereCond += ` And ${clsStudentInfoEN.con_StuName} like '%${this.StuName_q}%'`;
      }

      if (qryVarSet.idGrade_q != undefined && qryVarSet.idGrade_q != '0') {
        strWhereCond += ` And ${clsStudentInfoEN.con_IdGrade} = '${qryVarSet.idGrade_q}'`;
      }

      if (qryVarSet.idXzCollege_q != '' && qryVarSet.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdXzCollege,
          qryVarSet.idXzCollege_q,
        );
      }

      if (qryVarSet.idAdminCls_q != '' && qryVarSet.idAdminCls_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdAdminCls,
          qryVarSet.idAdminCls_q,
        );
      }

      ////根据当前教学班来查询学生数据；
      if (IsNullOrEmpty(IdCurrEduCls_Static.value) == false) {
        strWhereCond += ` And IdStudentInfo not in (select IdStu from CurrEduClsStu where idCurrEduCls='${IdCurrEduCls_Static.value}' )`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0009)在组合查询条件(CombineStudentInfoCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombineStudentInfoConditionObj(): Promise<clsStudentInfoEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objStudentInfo_Cond: clsStudentInfoEN = new clsStudentInfoEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StuID_q != '') {
        objStudentInfo_Cond.SetCondFldValue(clsStudentInfoEN.con_StuId, this.StuID_q, 'like');
      }
      if (this.StuName_q != '') {
        objStudentInfo_Cond.SetCondFldValue(clsStudentInfoEN.con_StuName, this.StuName_q, 'like');
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0010)在组合查询条件对象(CombineStudentInfoConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objStudentInfo_Cond;
  }

  /* 显示StudentInfo对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrStudentInfoObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_StudentInfo(
    divContainer: HTMLDivElement,
    arrStudentInfoExObjLst: Array<clsStudentInfoENEx>,
  ) {
    const strThisFuncName = this.BindTab_StudentInfo4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
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
        funcName: () => {},
      },
      {
        fldName: clsStudentInfoEN.con_StuId,
        sortBy: clsStudentInfoEN.con_StuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'stuName',
        sortBy: 'stuName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clsStudentInfoENEx.con_SexDesc,
        sortBy: clsStudentInfoENEx.con_SexDesc,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '性别',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'collegeName',
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: clsStudentInfoENEx.con_MajorName,
        sortBy: clsStudentInfoENEx.con_MajorName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: clsStudentInfoENEx.con_GradeBaseName,
        sortBy: clsStudentInfoENEx.con_GradeBaseName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '入学年级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: clsStudentInfoENEx.con_AdminClsName,
        sortBy: clsStudentInfoENEx.con_AdminClsName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '班级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '确定',
        text: '确定',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          // btn1.setAttribute('onclick', `btnCurrEduClsInTab_Click('${strKeyId}');`);
          (function (strKeyId: string) {
            btn1.onclick = function () {
              StudentInfoList.vuebtn_Click('AddSingleStuToEduCls', strKeyId);
            };
          })(strKeyId);

          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    sortBy: "", sortFun: SortFun, getDataSource: "",
      //    colHeader: "修改",
      //    text: "修改",
      //    tdClass: "text-left",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btn_Click('UpdateRecordInTab', '${strKeyId}');`);
      //        return btn1;
      //    }
      //},
      //{
      //    fldName: "",
      //    sortBy: "", sortFun: SortFun, getDataSource: "",
      //    colHeader: "删除",
      //    text: "删除",
      //    tdClass: "text-left",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btn_Click('DelRecordInTab', '${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    try {
      await this.ExtendFldFuncMap(arrStudentInfoExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    BindTab(divDataLst, arrStudentInfoExObjLst, arrDataColumn, 'idStudentInfo', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  //确定选择 并添加到关系表中
  public async btnCurrEduClsInTab_Click(strkeyId: string) {
    //获取页面传入参数，判断调用哪个数据源放
    const divName = divVarSet.refDivLayout;

    let strMsg;
    switch (pageType.value) {
      case 'TextRead':
        ////这里调用中学课文界面方法；
        ////获取课文Id；
        //const strTextId = GetInputValueInDivObj(divName, 'hidTextId');
        //strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
        //strUpdUser = userStore.getUserId;
        ////推送前查询该教学班是否已经有推送记录；
        //const strWhere = "pushTypeId = '02' And requesTypeId = '03' And tableKey= '" + strTextId + "' And receiveUser='" + strkeyId + "' And idCurrEduCls = '" + strIdCurrEduCls + "'";
        //const responseTextOne = await sys_RequestPush_GetFirstObjAsync(strWhere);
        //const objsys_RequestPushEN: clssys_RequestPushEN = <clssys_RequestPushEN>responseTextOne;
        //if (objsys_RequestPushEN != null) {
        //    strIdCurrEduclsstrInfo: string = `当前数据已经有推送`;
        //    //显示信息框
        //    alert(strInfo);
        //    return;
        //}
        //else {
        //    const responseText = await zx_TextEx_RequestPushDataToSingerStuAsync(strkeyId, strTextId, strIdCurrEduCls, strUpdUser);
        //    strIdCurrEduclsbolIsExist: boolean = responseText;
        //    if (bolIsExist == true) {
        //        strIdCurrEduclsstrMsg: string = `推送成功！`;
        //        alert(strMsg);
        //    }
        //    else {
        //        strIdCurrEduclsstrMsg: string = `推送失败！`;
        //        alert(strMsg);
        //    }
        //    return responseText;//一定要有一个返回值，否则会出错！
        //}
        break;
      default:
        strMsg = `this.pageType:[${pageType.value}]在switch中没有处理。(in btnCurrEduClsInTab_Click)`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:在数据 列表中跳转到某一页
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
     <param name = "intPageIndex">页序号</param>
   */
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */

  public async BindGv_StudentInfo4Func(divList: HTMLDivElement) {
    if (viewVarSet.sortStudentInfoBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortStudentInfoBy)为空，请检查！(In BindGv_StudentInfo)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    if (divList == null) return;
    const strWhereCond = await this.CombineStudentInfoCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrStudentInfoExObjLst: Array<clsStudentInfoENEx> = [];
    try {
      this.recCount = await StudentInfo_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortStudentInfoBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrStudentInfoExObjLst = await StudentInfoEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }

    try {
      this.BindTab_StudentInfo(divList, arrStudentInfoExObjLst);
      console.log('完成BindGv_StudentInfo!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      //console.trace();
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
   */
  public async BindGv_StudentInfo4FuncV2(divList: HTMLDivElement) {
    if (viewVarSet.sortStudentInfoBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortStudentInfoBy)为空，请检查！(In BindGv_StudentInfo_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLayOut = divVarSet.refDivLayout;
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.CombineStudentInfoCondition();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrStudentInfoExObjLst: Array<clsStudentInfoENEx> = [];
    try {
      this.recCount = await StudentInfo_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortStudentInfoBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };
      arrStudentInfoExObjLst = await StudentInfoEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    if (arrStudentInfoExObjLst.length == 0) {
      const strKey = `${clsStudentInfoEN._CurrTabName}`;
      const strMsg = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_StudentInfo(divList, arrStudentInfoExObjLst);
      console.log('完成BindGv_StudentInfo!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtid_StudentInfo').attr('ReadOnly', bolReadonly.toString());
  }

  /* 复制记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyRecord(arrid_StudentInfo: Array<string>) {
    try {
      const responseText = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(arrid_StudentInfo);
      console.log('responseText=');
      console.log(responseText);
      let intCount = 0;
      const arrStudentInfoObjLst: Array<clsStudentInfoEN> = <Array<clsStudentInfoEN>>responseText;
      for (const objInFor of arrStudentInfoObjLst) {
        const responseText2 = await StudentInfo_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          // const strInfo = `克隆记录成功!`;
          intCount++;
        } else {
          const strInfo = `克隆记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = `共克隆了${intCount}条记录!`;
      alert(strInfo);
      console.log('完成！');
    } catch (e: any) {
      const strMsg = `复制记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public async AddStuToEduCls(arrid_StudentInfo: Array<string>) {
    try {
      const arrStudentInfoObjLst = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(
        arrid_StudentInfo,
      );
      let intCount = 0;

      for (const objInFor of arrStudentInfoObjLst) {
        const returnBool = await CurrEduClsStuEx_AddNewRecordSaveCurrEduClsStu(
          IdCurrEduCls_Static.value,
          objInFor.idStudentInfo,
        );

        if (returnBool == true) {
          // const strInfo = `克隆记录成功!`;
          intCount++;
        } else {
          const strInfo = `添加到教学班不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = `共添加了${intCount}条记录!`;
      alert(strInfo);
      console.log('完成！');
    } catch (e: any) {
      const strMsg = `添加到教学班不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /* 根据关键字列表删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   */
  public async DelMultiRecord(arrid_StudentInfo: Array<string>) {
    try {
      const responseText = await StudentInfo_DelStudentInfosAsync(arrid_StudentInfo);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //StudentInfo_ReFreshCache();
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 显示{0}对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
     <param name = "divContainer">显示容器</param>
     <param name = "objStudentInfo">需要显示的对象</param>
   */
  public ShowStudentInfoObj(divContainer: HTMLDivElement, objStudentInfo: clsStudentInfoEN) {
    if (divContainer == null) {
      alert(`${divContainer}不存在！`);
      return;
    }
    const sstrKeys = GetObjKeys(objStudentInfo);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objStudentInfo.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjStudentInfoEN">表实体类对象</param>
    <returns>列表的第一个关键字值</returns>
   */
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字！目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
        },
      });
    });
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = divVarSet.refDivLayout;
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 获取当前页序号(Used In BindGv_)
   */
  public get CurrPageIndex(): number {
    const divName = divVarSet.refDivLayout;
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortStudentInfoBy(value: string) {
    const divName = divVarSet.refDivLayout;
    SetInputValueInDivObj(divName, 'hidSortStudentInfoBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortStudentInfoBy(): string {
    const divName = divVarSet.refDivLayout;
    return GetInputValueInDivObj(divName, 'hidSortStudentInfoBy');
  }
  /*
   * 学号 (Used In CombineCondition())
   */
  public get StuID_q(): string {
    const divName = divVarSet.refDivLayout;
    return GetInputValueInDivObj(divName, 'txtStuId_q');
  }
  /*
   * 姓名 (Used In CombineCondition())
   */
  public get StuName_q(): string {
    const divName = divVarSet.refDivLayout;
    return GetInputValueInDivObj(divName, 'txtStuName_q');
  }

  public get IdGrade_q(): string {
    const divName = divVarSet.refDivLayout;
    return GetSelectValueInDivObj(divName, 'ddlIdGrade_q');
  }

  public static GetPageEditObj(strClassName: string): any {
    if (StudentInfoList.objPageEdit != null) {
      const strClassNameOld = StudentInfoList.objPageEdit.className;
      if (strClassNameOld == strClassName) return StudentInfoList.objPageEdit;
    }
    if (StudentInfoList.objPageEdit2 != null) {
      const strClassNameOld = StudentInfoList.objPageEdit2.className;
      if (strClassNameOld == strClassName) return StudentInfoList.objPageEdit2;
    }
    if (StudentInfoList.objPageEdit3 != null) {
      const strClassNameOld = StudentInfoList.objPageEdit3.className;
      if (strClassNameOld == strClassName) return StudentInfoList.objPageEdit3;
    }
    return null;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (StudentInfoList.objPageEdit == null) {
          StudentInfoList.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfoList.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfoList.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (StudentInfoList.objPageEdit2 == null) {
          StudentInfoList.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfoList.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfoList.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (StudentInfoList.objPageEdit3 == null) {
          StudentInfoList.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfoList.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfoList.objPageEdit3 = objDataLst;
            return true;
          } else return false;
        }
        break;
      default:
        return false;
      // break;
    }
  }
  // /**
  //  * 显示对话框
  //  * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
  //  **/
  // public async ShowDialog_StudentLst(): Promise<boolean> {
  //   const strThisFuncName = this.ShowDialog_StudentLst.name;
  //   if (StudentInfoList.strPageDispModeId == enumPageDispMode.PopupBox_01) {
  //     if (StudentInfoList.EditRef == null) {
  //       const strMsg = Format(
  //         '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
  //         this.className,
  //         strThisFuncName,
  //       );
  //       console.error(strMsg);
  //       alert(strMsg);
  //       return false;
  //     }
  //     await StudentInfoList.EditRef.value.showDialog();
  //   }
  //   divVarSet.refDivLayout = StudentInfoList.EditRef.value.$refs.refDivLayout;
  //   if (divVarSet.refDivLayout == null) {
  //     if (StudentInfoList.times4TestShowDialog < 2) {
  //       StudentInfoList.times4TestShowDialog++;
  //       setTimeout(() => {
  //         this.ShowDialog_StudentLst();
  //       }, 100);
  //     } else {
  //       const strMsg = Format(
  //         '当前Layout的层(div)对象为空，请检查！(in {0}.{1})',
  //         this.className,
  //         strThisFuncName,
  //       );
  //       console.error(strMsg);
  //       alert(strMsg);
  //       return false;
  //     }
  //     return false;
  //   } else {
  //     StudentInfoList.times4TestShowDialog = 0;
  //   }
  //   StudentInfoList.vuebtn_Click('SetDiv', '');
  //   return true;
  // }

  // /*
  //  * 学号 (Used In CombineCondition())
  //  */
  // public get idCurrEduCls(): string {
  //   return StudentInfoList.GetPropValue('idCurrEduCls');
  // }
  public async SetDdl_idXzCollegeInDiv() {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return;
    const userStore = useUserStore();
    await XzClg_BindDdl_IdXzCollegeByUserTypeIdInDivCache(
      objDivQuery,
      'ddlIdXzCollege_q',
      userStore.userTypeId,
    ); //
  }
  public async SetDdl_idGradeBaseInDiv() {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return;
    await XzGradeBaseEx_BindDdl_idGradeBaseInDivCache(objDivQuery, 'ddlIdGradeBase_q'); //
  }

  public async SetDdl_idGradeInDiv() {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return;
    await XzGrade_BindDdl_IdGradeInDivCache(objDivQuery, 'ddlIdGrade_q'); //
  }
  /**
   * 设置绑定下拉框，针对字段:[IdXzMajor]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdXzMajorInDiv() {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return;
    await XzMajor_BindDdl_IdXzMajorInDivCache(objDivQuery, 'ddlIdXzMajor_q'); //
  }
  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   **/
  public async ddlIdXzCollege_q_SelectedIndexChanged() {
    //alert('请在扩展层:UsersCRUDExEx中重写该函数！');
    if (IsNullOrEmpty(this.idXzCollege_q) == true) return;
    this.SetDdl_idXzMajorById_CollegeInDiv(this.idXzCollege_q);
  }

  public async SetDdl_idXzMajorById_CollegeInDiv(stridXzCollege: string) {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return;
    await XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(
      objDivQuery,
      'ddlIdXzMajor_q',
      stridXzCollege,
    ); //
  }

  /**
   * 学院流水号 (Used In CombineCondition())
   **/
  public get idXzCollege_q(): string {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return '';
    const strValue = GetSelectValueInDivObj(objDivQuery, 'ddlIdXzCollege_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学院流水号 (Used In CombineCondition())
   **/
  public set idXzCollege_q(value: string) {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return;
    SetSelectValueByIdInDivObj(objDivQuery, 'ddlIdXzCollege_q', value);
  }
  /**
   * 专业流水号 (Used In CombineCondition())
   **/
  public get idXzMajor_q(): string {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return '';
    const strValue = GetSelectValueInDivObj(objDivQuery, 'ddlIdXzMajor_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 专业流水号 (Used In CombineCondition())
   **/
  public set idXzMajor_q(value: string) {
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return;
    SetSelectValueByIdInDivObj(objDivQuery, 'ddlIdXzMajor_q', value);
  }
  /*
   * 年级流水号
   */
  public set idGradeBase(value: string) {
    const divName = divVarSet.refDivLayout;
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlIdGradeBase', value);
  }
  /*
   * 年级流水号
   */
  public get idGradeBase(): string {
    const divName = divVarSet.refDivLayout;

    return GetSelectValueInDivObj(divName, 'ddlIdGradeBase');
  }
  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    const objDivQuery = divVarSet.refDivQuery;
    if (objDivQuery == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const ddlIdXzCollege_q: HTMLSelectElement = GetSelectObjInDivObj(
        objDivQuery,
        'ddlIdXzCollege_q',
      );
      ddlIdXzCollege_q.addEventListener('change', (e: any) => {
        console.error(e);
        this.ddlIdXzCollege_q_SelectedIndexChanged();
      });
    } catch (e: any) {
      const strMsg = Format(
        '设置事件函数不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public ddlIdXzCollegeq_SelectedIndexChanged(): void {} //

  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      viewVarSet.ascOrDesc4SortFun,
      viewVarSet.sortStudentInfoBy,
      strSortExpress,
    );
    viewVarSet.sortStudentInfoBy = sortBy;
    viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
    StudentInfoCRUD.sortFunStatic = sortFun;
    this.handleSort(sortBy);
    //    await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
  }
  public handleSort(sortBy: string) {
    // 将 sortBy 按空格分成两部分
    const [column, order] = sortBy.split(' ');

    // 调用 SortColumn 函数
    this.SortColumn(column, order);
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    if (clsStudentInfoENEx.hasProperty(sortColumnKey) == true) {
      switch (sortColumnKey) {
        case clsStudentInfoENEx.con_SexDesc:
          viewVarSet.sortStudentInfoBy = `Sex|SexDesc ${sortDirection}|StudentInfo.IdSex = Sex.IdSex`;
          break;
        case clsStudentInfoENEx.con_CollegeName:
          viewVarSet.sortStudentInfoBy = `XzClg|CollegeName ${sortDirection}|StudentInfo.IdXzCollege = XzClg.IdXzCollege`;
          break;
        case clsStudentInfoENEx.con_MajorName:
          viewVarSet.sortStudentInfoBy = `XzMajor|MajorName ${sortDirection}|StudentInfo.IdXzMajor = XzMajor.IdXzMajor`;
          break;
        case clsStudentInfoENEx.con_GradeBaseName:
          viewVarSet.sortStudentInfoBy = `XzGradeBase|GradeBaseName ${sortDirection}|StudentInfo.IdGradeBase = XzGradeBase.IdGradeBase`;
          break;
        case clsStudentInfoENEx.con_GradeName:
          viewVarSet.sortStudentInfoBy = `XzGrade|GradeName ${sortDirection}|StudentInfo.IdGrade = XzGrade.IdGrade`;
          break;
        case clsStudentInfoENEx.con_DateTimeSim:
          viewVarSet.sortStudentInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
          break;
        default:
          viewVarSet.sortStudentInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
          break;
      }
    } else {
      switch (sortColumnKey) {
        case 'sexDesc|Ex':
          viewVarSet.sortStudentInfoBy = `Sex|SexDesc ${sortDirection}|StudentInfo.IdSex = Sex.IdSex`;
          break;
        case 'collegeName|Ex':
          viewVarSet.sortStudentInfoBy = `XzClg|CollegeName ${sortDirection}|StudentInfo.IdXzCollege = XzClg.IdXzCollege`;
          break;
        case 'majorName|Ex':
          viewVarSet.sortStudentInfoBy = `XzMajor|MajorName ${sortDirection}|StudentInfo.IdXzMajor = XzMajor.IdXzMajor`;
          break;
        case 'gradeBaseName|Ex':
          viewVarSet.sortStudentInfoBy = `XzGradeBase|GradeBaseName ${sortDirection}|StudentInfo.IdGradeBase = XzGradeBase.IdGradeBase`;
          break;
        case 'gradeName|Ex':
          viewVarSet.sortStudentInfoBy = `XzGrade|GradeName ${sortDirection}|StudentInfo.IdGrade = XzGrade.IdGrade`;
          break;
        case 'dateTimeSim|Ex':
          viewVarSet.sortStudentInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
          break;
        default:
          viewVarSet.sortStudentInfoBy = Format('{0} {1}', sortColumnKey, sortDirection);
          break;
      }
    }
    await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
  }
}

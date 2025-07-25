import CurrEduCls_EditEx from '@/viewsShare/DailyRunning/CurrEduCls_EditEx';
import { GetCheckedKeyIdsInDivObj, SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format } from '@/ts/PubFun/clsString';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { gs_TeachingDate_GetObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';

import { enumDivType } from '@/ts/PubFun/enumDivType';
import CurrEduClsStuCRUDEx from '@/viewsShare/DailyRunning/CurrEduClsStuCRUDEx';
import CurrEduClsTeacherCRUDEx from '@/viewsShare/DailyRunning/CurrEduClsTeacherCRUDEx';
import StudentInfoList from '@/viewsShare/UserManage/StudentInfoList';
import { confirmDel } from '@/ts/PubFun/clsCommFunc4Web';
import { CurrEduClsStu_DelCurrEduClsStusAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
import TeacherInfoList from '@/viewsShare/DailyRunning/TeacherInfoList';
import { CurrEduClsTeacher_DelCurrEduClsTeachersAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsTeacherWApi';
import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';
import { TeacherInfo_GetFirstIDAsync } from '@/ts/L3ForWApi/BaseInfo/clsTeacherInfoWApi';

import { useUserStore } from '@/store/modulesShare/user';
import { vCurrEduCls_Sim_GetObjByIdCurrEduClsCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
import {
  refDivList_Stu,
  refDivList_Teacher,
  refDivLayout,
} from '@/viewsShare/DailyRunning/CurrEduClsInfoVueShare';
import gs_TeachingDate_EditEx from '@/viewsShare/DailyRunning/gs_TeachingDate_EditEx';
import {
  IdCurrEduCls_Session,
  refgs_TeachingDate_Edit,
} from '@/viewsShare/DailyRunning/gs_TeachingDateVueShare';
import { gs_TeachingDateEx_GetObjByIdCurrEduCls } from '@/ts/L3ForWApiExShare/DailyRunning/clsgs_TeachingDateExWApi';
import { CurrEduClsTeacherEx_AddNewRecordSaveCurrEduClsTeacher } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';
/** CurrEduClsInfoEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class CurrEduClsInfoEx implements IShowList {
  public bolIsInitShow = false; //记录是否导入分页区的变量
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  public recCount = 0;

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
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    const userStore = useUserStore();
    let objPage;
    let strIdTeacher;
    let strWhere;
    switch (strType) {
      case 'vCurrEduCls':
        new CurrEduClsStuCRUDEx().BindGv_CurrEduClsStu4Func(refDivList_Stu.value);
        break;
      case 'CurrEduCls':
        // console.log();
        strWhere = `${clsTeacherInfoEN.con_TeacherId} = '${userStore.getUserId}'`;
        strIdTeacher = await TeacherInfo_GetFirstIDAsync(strWhere);
        objPage = new TeacherInfoList();
        await CurrEduClsTeacherEx_AddNewRecordSaveCurrEduClsTeacher(strPara, strIdTeacher);

        break;
      case 'gs_TeachingDate':
        this.ShowEduDataRange();
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
  public static async btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: CurrEduClsInfoEx;
    let objPageEdit;
    let objPageEdit_Stu;
    let objPageEdit_Teacher;
    let objPageEdit_EduCls;
    objPage = new CurrEduClsInfoEx();
    let objgs_TeachingDate = null;
    let strMsg = '';
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(CurrEduClsInfoEx.divDataLst);
    // strKeyId = GetFirstCheckedKeyIdInDivObj(CurrEduClsInfoEx.divDataLst);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new CurrEduCls_EditEx('CurrEduCls_EditEx', objPage);
        CurrEduCls_EditEx.btnEdit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new CurrEduCls_EditEx('CurrEduCls_EditEx', objPage);
        CurrEduCls_EditEx.btnEdit_Click(strCommandName, strKeyId);
        break;
      case 'AddStu':
        objPageEdit_Stu = new StudentInfoList();
        objPageEdit_Stu.PageLoad();
        break;
      case 'DeleteStu':
        objPage.btnDelRecordStu_Click();
        break;

      case 'DeleteTeacher':
        objPage.btnDelRecordTeacher_Click();
        break;
      case 'NewEduCls': //添加记录
        objPageEdit_EduCls = new CurrEduCls_EditEx('CurrEduCls_EditEx', objPage);
        // CurrEduCls_Edit.EditRef.value.btnCurrEduCls_Edit_Click(strCommandName, strKeyId);
        CurrEduCls_EditEx.btnEdit_Click(strCommandName, strKeyId);
        break;
      case 'ResetEduClsDate': //添加记录
        objPageEdit = new gs_TeachingDate_EditEx('gs_TeachingDate_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;
        objgs_TeachingDate = await gs_TeachingDateEx_GetObjByIdCurrEduCls(
          clsPubLocalStorage.idCurrEduCls,
        );
        if (objgs_TeachingDate == null) {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strKeyId = objgs_TeachingDate.mId.toString();
        if (strKeyId == 'undefined') {
          strMsg = `在修改记录时，获取记录关键字为:${strKeyId},不成功!`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        refgs_TeachingDate_Edit.value.btngs_TeachingDate_Edit_Click(strCommandName, strKeyId);
        break;

      default:
        strMsg = `命令:strCommandName在函数(CurrEduClsInfoEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // // 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();

      // CurrEduClsInfoEx.CourseIdCache = clsPubLocalStorage.courseId;
      // CurrEduClsInfoEx.sortCurrEduClsBy = 'currEduClsId Asc';
      await this.ShowEduClsInfo();
      await this.ShowEduDataRange();

      //2、显示无条件的表内容在GridView中
      new CurrEduClsStuCRUDEx().BindGv_CurrEduClsStu4Func(refDivList_Stu.value);
      new CurrEduClsTeacherCRUDEx().BindGv_CurrEduClsTeacher4Func(refDivList_Teacher.value);
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

  public async ShowEduClsInfo() {
    const strCourseId = clsPubLocalStorage.courseId;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objCurrEduCls = await vCurrEduCls_Sim_GetObjByIdCurrEduClsCache(
      strIdCurrEducls,
      strCourseId,
    );
    if (objCurrEduCls == null) return;
    const strCurrEduClsName = objCurrEduCls.eduClsName;
    const strSchoolYear = objCurrEduCls.schoolYear;
    // const strMsg = Format('没有可申请的研究主题。当前教学班:[{0}].', objCurrEduCls?.eduClsName);
    // alert(strMsg);
    SetSpanHtmlInDivObj(
      refDivLayout.value,
      'spnEduClsName',
      `${strCurrEduClsName}(${strIdCurrEducls})`,
    );
    SetSpanHtmlInDivObj(refDivLayout.value, 'ShoolYear', `${strSchoolYear}`);

    return;
  }

  //获取教学班时间范围
  public async ShowEduDataRange() {
    // strWhereCond: string = " 1 = 1 and idCurrEduCls=" + clsPubLocalStorage.idCurrEduCls;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    const arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstCache(strIdCurrEducls);
    // console.log('获取教学班日期成功');

    //通过教学班得到教学班时间范围；、
    // const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereCond);
    const objgs_TeachingDateEN = arrgs_TeachingDateObjLst.find(
      (x) => x.idCurrEduCls == strIdCurrEducls,
    );
    //    const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
    if (objgs_TeachingDateEN != null) {
      SetSpanHtmlInDivObj(refDivLayout.value, 'spnStartDate', objgs_TeachingDateEN.startDate);
      SetSpanHtmlInDivObj(refDivLayout.value, 'spnEndDate', objgs_TeachingDateEN.endDate);
    }
  }

  public async btnDelRecordTeacher_Click() {
    const strThisFuncName = this.btnDelRecordTeacher_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(refDivList_Teacher.value);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的记录!`);
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord_Teacher(arrKeyIds);

      new CurrEduClsTeacherCRUDEx().BindGv_CurrEduClsTeacher4Func(refDivList_Teacher.value);
    } catch (e: any) {
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
  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecordStu_Click() {
    const strThisFuncName = this.btnDelRecordStu_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(refDivList_Stu.value);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的记录!`);
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord_Stu(arrKeyIds);

      new CurrEduClsStuCRUDEx().BindGv_CurrEduClsStu4Func(refDivList_Stu.value);
    } catch (e: any) {
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
  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord_Stu(arrIdEduClsStu: Array<string>) {
    const strThisFuncName = this.DelMultiRecord_Stu.name;
    try {
      const returnInt = await CurrEduClsStu_DelCurrEduClsStusAsync(arrIdEduClsStu);
      if (returnInt > 0) {
        const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

        const strInfo = Format('删除记录成功,共删除{0}条记录!', returnInt);
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('删除记录不成功!');
        //显示信息框
        alert(strInfo);
      }
      console.log('DelMultiRecord_Stu!');
    } catch (e: any) {
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

  public async DelMultiRecord_Teacher(arrIdEduClsStu: Array<string>) {
    const strThisFuncName = this.DelMultiRecord_Teacher.name;
    try {
      const returnInt = await CurrEduClsTeacher_DelCurrEduClsTeachersAsync(arrIdEduClsStu);
      if (returnInt > 0) {
        const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

        const strInfo = Format('删除记录成功,共删除{0}条记录!', returnInt);
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('删除记录不成功!');
        //显示信息框
        alert(strInfo);
      }
      console.log('DelMultiRecord_Teacher!');
    } catch (e: any) {
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

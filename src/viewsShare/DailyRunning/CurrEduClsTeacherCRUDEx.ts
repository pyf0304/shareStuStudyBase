/**
 * 类名:CurrEduClsTeacherCRUDEx(界面:CurrEduClsTeacherCRUD)
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2023.10.12.1(服务器:PYF-THINKPAD)
 * 日期:2023/11/03 16:27:22
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
import { CurrEduClsTeacherCRUD } from '@/viewsBase/DailyRunning/CurrEduClsTeacherCRUD';
import CurrEduClsTeacher_EditEx from '@/viewsShare/DailyRunning/CurrEduClsTeacher_EditEx';
import {
  GetAObjLstInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';

import { Format } from '@/ts/PubFun/clsString';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  refCurrEduClsTeacher_Edit,
  divVarSet,
  viewVarSet,
  teacherId_q,
  teacherName_q,
  schoolTerm_q,
  schoolYear_q,
  idCurrEduCls_q,
  refCurrEduClsTeacher_List,
  BindTabByList,
} from '@/viewsShare/DailyRunning/CurrEduClsTeacherVueShare';
import { IdCurrEduCls_Session } from '@/viewsShare/DailyRunning/CurrEduClsTeacherVueShare';
import { clsCurrEduClsTeacherENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherENEx';
import { CurrEduClsTeacher_GetRecCountByCondAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsTeacherWApi';
import { CurrEduClsTeacherEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';
import { DelUserRole } from '@/viewsShare/UserManage_GP/QxUsersExVueShare';
/** CurrEduClsTeacherCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class CurrEduClsTeacherCRUDEx extends CurrEduClsTeacherCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrsortCurrEduClsTeacherBy = "IdEduClsTeacher";
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
    // alert(`该类没有绑定该函数：[this.BindGv_vCurrEduClsTeacher]!${strType}${strPara}`);
    this.BindGv_CurrEduClsTeacher4Func(divVarSet.refDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vCurrEduClsTeacher':
      case 'CurrEduClsTeacher':
        this.BindGv_CurrEduClsTeacher4Func(divVarSet.refDivList);
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
    let objPage: CurrEduClsTeacherCRUDEx;
    let objPageEdit;
    if (CurrEduClsTeacherCRUD.objPageCRUD == null) {
      CurrEduClsTeacherCRUD.objPageCRUD = new CurrEduClsTeacherCRUDEx();
      objPage = <CurrEduClsTeacherCRUDEx>CurrEduClsTeacherCRUD.objPageCRUD;
    } else {
      objPage = <CurrEduClsTeacherCRUDEx>CurrEduClsTeacherCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'DelRole':
        // objPage.btnDelRole_Click(objData.userId, objData.roleId);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new CurrEduClsTeacher_EditEx('CurrEduClsTeacher_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refCurrEduClsTeacher_Edit.value.btnCurrEduClsTeacher_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new CurrEduClsTeacher_EditEx('CurrEduClsTeacher_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        refCurrEduClsTeacher_Edit.value.btnCurrEduClsTeacher_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(CurrEduClsTeacherCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  public async BindGv_CurrEduClsTeacher4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_CurrEduClsTeacher4Func.name;
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
    if (viewVarSet.sortCurrEduClsTeacherBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCurrEduClsTeacherBy)为空,请检查!(In BindGv_CurrEduClsTeacher4Func)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    IdCurrEduCls_Session.value = clsPubLocalStorage.idCurrEduCls;

    const strWhereCond = await this.CombinevCurrEduClsTeacherConditionEx();

    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrCurrEduClsTeacherExObjLst: Array<clsCurrEduClsTeacherENEx> = [];
    try {
      this.recCount = await CurrEduClsTeacher_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          strWhereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        // alert(strMsg);
        return;
      }
      const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
      if (intCurrPageIndex == 0) {
        if (intPageCount > 1) intCurrPageIndex = intPageCount;
        else intCurrPageIndex = 1;
        this.SetCurrPageIndex(intCurrPageIndex);
      } else if (intCurrPageIndex > intPageCount) {
        intCurrPageIndex = intPageCount;
        this.SetCurrPageIndex(intCurrPageIndex);
      }

      let strSortFun = (x: any, y: any) => {
        x = x;
        y = y;
        return 0;
      };
      // if (viewVarSet.ascOrDesc4SortFun != undefined) {
      //   strSortFun = viewVarSet.ascOrDesc4SortFun(viewVarSet.ascOrDesc4SortFun);
      // }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: viewVarSet.sortCurrEduClsTeacherBy,
        sortFun: strSortFun,
      };
      arrCurrEduClsTeacherExObjLst = await CurrEduClsTeacherEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divPager: HTMLDivElement = <HTMLDivElement>document.getElementById('divPager');
    if (this.recCount <= this.pageSize) {
      if (divPager != null) {
        divPager.style.display = 'none';
      }
    } else {
      if (divPager != null) {
        divPager.style.display = 'block';
      }
    }
    if (arrCurrEduClsTeacherExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      // if (divDataLst != null) {
      //   divDataLst.innerText = '';
      //   divDataLst.appendChild(lblMsg);
      // }
      const strKey = Format(
        '{0}_{1}',
        clsCurrEduClsTeacherEN._CurrTabName,
        IdCurrEduCls_Session.value,
      );
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_CurrEduClsTeacher4Func(divList, arrCurrEduClsTeacherExObjLst);
      //console.log("完成BindGv_CurrEduClsTeacher4Func!");
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 显示vCurrEduClsTeacher对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrCurrEduClsTeacherObjLst:需要绑定的对象列表
   **/
  public async BindTab_CurrEduClsTeacher4Func(
    divContainer: HTMLDivElement,
    arrCurrEduClsTeacherExObjLst: Array<clsCurrEduClsTeacherENEx>,
  ) {
    const strThisFuncName = this.BindTab_CurrEduClsTeacher4Func.name;
    if (divContainer == null) {
      alert(`用于绑定数据的层不存在!(in ${strThisFuncName})`);
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
        fldName: clsCurrEduClsTeacherENEx.con_EduClsName,
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
        fldName: clsCurrEduClsTeacherENEx.con_TeacherId,
        sortBy: clsCurrEduClsTeacherENEx.con_TeacherId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '工号',
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
        fldName: clsCurrEduClsTeacherENEx.con_TeacherName,
        sortBy: 'teacherName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教师姓名',
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
        fldName: clsCurrEduClsTeacherENEx.con_RoleNames,
        sortBy: clsCurrEduClsTeacherENEx.con_RoleNames,
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
        fldName: clsCurrEduClsTeacherENEx.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名',
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
        fldName: clsCurrEduClsTeacherEN.con_SchoolTerm,
        sortBy: clsCurrEduClsTeacherEN.con_SchoolTerm,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学期',
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
        fldName: clsCurrEduClsTeacherENEx.con_CourseName,
        sortBy: clsCurrEduClsTeacherENEx.con_CourseName,
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
        fldName: clsCurrEduClsTeacherEN.con_SchoolYear,
        sortBy: clsCurrEduClsTeacherEN.con_SchoolYear,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学年',
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
        fldName: clsCurrEduClsTeacherEN.con_UpdDate,
        sortBy: clsCurrEduClsTeacherEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编辑日期',
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
        fldName: clsCurrEduClsTeacherEN.con_UpdUser,
        sortBy: clsCurrEduClsTeacherEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编辑人',
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

    try {
      await this.ExtendFldFuncMap(arrCurrEduClsTeacherExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (refCurrEduClsTeacher_List.value != null) {
      await BindTabByList(arrCurrEduClsTeacherExObjLst, this.dispAllErrMsg_q);
    } else {
      const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
      if (divDataLst == null) {
        alert('在BindTab_vCurrEduClsTeacher函数中，divDataLst不存在!');
        return;
      }
      await BindTab(
        divDataLst,
        arrCurrEduClsTeacherExObjLst,
        arrDataColumn,
        clsCurrEduClsTeacherEN.con_IdEduClsTeacher,
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
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevCurrEduClsTeacherConditionEx(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += ` and ${clsCurrEduClsTeacherEN.con_IdCurrEduCls} in (select IdCurrEduCls from CurrEduCls where CourseId = '${clsPubLocalStorage.courseId}')`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (idCurrEduCls_q.value != '' && idCurrEduCls_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCurrEduClsTeacherENEx.con_IdCurrEduCls,
          idCurrEduCls_q.value,
        );
      }
      // if (eduClsName_q.value != '') {
      //   strWhereCond += Format(
      //     " And {0} like '%{1}%'",
      //     clsCurrEduClsTeacherEN.con_EduClsName,
      //     eduClsName_q.value,
      //   );
      // }
      if (teacherId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsCurrEduClsTeacherENEx.con_TeacherId,
          teacherId_q.value,
        );
      }
      if (teacherName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsCurrEduClsTeacherENEx.con_TeacherName,
          teacherName_q.value,
        );
      }
      if (schoolTerm_q.value != '' && schoolTerm_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCurrEduClsTeacherEN.con_SchoolTerm,
          schoolTerm_q.value,
        );
      }
      if (schoolYear_q.value != '' && schoolYear_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCurrEduClsTeacherEN.con_SchoolYear,
          schoolYear_q.value,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件(CombineCurrEduClsTeacherCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }
  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      default:
        viewVarSet.sortCurrEduClsTeacherBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_CurrEduClsTeacher4Func(this.listPara.listDiv);
  }

  public SetEventForDel() {
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

        (function (objData: any, listDiv: HTMLDivElement) {
          aDel.onclick = function () {
            // CurrEduClsTeacherCRUDEx.vuebtn_Click('DelRole', objData);
            btnDelRole_Click(objData.userId, objData.roleId, listDiv);
          };
        })(objData, this.listPara.listDiv);
      }
    }
  }
}

function DelRole(strUserId: string, strRoleId: string) {
  alert('删除角色' + strUserId + strRoleId);
  // throw new Error('Function not implemented.');
}
/** 删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
 **/
async function btnDelRole_Click(strUserId: string, strRoleId: string, listDiv: HTMLDivElement) {
  const strThisFuncName = btnDelRole_Click.name;
  try {
    await DelUserRole(strUserId, strRoleId);

    await new CurrEduClsTeacherCRUDEx().BindGv_CurrEduClsTeacher4Func(listDiv);
  } catch (e) {
    const strMsg = Format('删除用户角色不成功. {0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 类名:clsCurrEduClsTeacherExWApi
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/29 08:50:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 当前教学班教师(CurrEduClsTeacher)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月29日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import {
  ObjectAssign,
  GetSortExpressInfo,
  BindDdl_ObjLstInDivObj_V,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  CurrEduClsTeacher_GetObjLstAsync,
  CurrEduClsTeacher_SortFunByKey,
  CurrEduClsTeacher_FilterFunByKey,
  CurrEduClsTeacher_GetObjLstByJSONObjLst,
  CurrEduClsTeacher_UpdateRecordAsync,
  CurrEduClsTeacher_IsExistRecordAsync,
  CurrEduClsTeacher_AddNewRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsTeacherWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';
import { clsCurrEduClsTeacherENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherENEx';

import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { useTeacherInfoStore } from '@/store/modulesShare/teacherInfo';
import { useXzClgStore } from '@/store/modulesShare/xzClg';
import {
  vCurrEduCls_Sim_func,
  vCurrEduCls_Sim_funcKey,
  vCurrEduCls_Sim_GetObjLstCache,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
import { clsvCurrEduCls_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN';
import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { GetA_Empty, GetDiv_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { QxRoles_GetNameByRoleIdCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { useUserStore } from '@/store/modulesShare/user';

export const currEduClsTeacherEx_Controller = 'CurrEduClsTeacherExApi';
export const currEduClsTeacherEx_ConstructorName = 'currEduClsTeacherEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CurrEduClsTeacherEx_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCurrEduClsTeacherENS:源对象
 * @returns 目标对象=>clsCurrEduClsTeacherEN:objCurrEduClsTeacherENT
 **/
export function CurrEduClsTeacherEx_CopyToEx(
  objCurrEduClsTeacherENS: clsCurrEduClsTeacherEN,
): clsCurrEduClsTeacherENEx {
  const strThisFuncName = CurrEduClsTeacherEx_CopyToEx.name;
  const objCurrEduClsTeacherENT = new clsCurrEduClsTeacherENEx();
  try {
    ObjectAssign(objCurrEduClsTeacherENT, objCurrEduClsTeacherENS);
    return objCurrEduClsTeacherENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCurrEduClsTeacherENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CurrEduClsTeacherEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCurrEduClsTeacherENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCurrEduClsTeacherObjLst = await CurrEduClsTeacher_GetObjLstAsync(objPagerPara.whereCond);
  const arrCurrEduClsTeacherExObjLst = arrCurrEduClsTeacherObjLst.map(CurrEduClsTeacherEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCurrEduClsTeacherEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCurrEduClsTeacherExObjLst) {
      await CurrEduClsTeacherEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCurrEduClsTeacherExObjLst.length == 0) return arrCurrEduClsTeacherExObjLst;
  let arrCurrEduClsTeacherSel: Array<clsCurrEduClsTeacherENEx> = arrCurrEduClsTeacherExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.sort(
        CurrEduClsTeacherEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.sort(objPagerPara.sortFun);
    }
    arrCurrEduClsTeacherSel = arrCurrEduClsTeacherSel.slice(intStart, intEnd);
    return arrCurrEduClsTeacherSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsTeacherENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapTeacherID(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
) {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapTeacherID.name;
  const teacherInfoStore = useTeacherInfoStore();
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.teacherId) == true) {
      const TeacherInfoidTeacher = objCurrEduClsTeacher.idTeacher;
      const TeacherInfoTeacherId = await teacherInfoStore.getTeacherId(TeacherInfoidTeacher);
      objCurrEduClsTeacher.teacherId = TeacherInfoTeacherId;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000467)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapTeacherName(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
) {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapTeacherName.name;
  const teacherInfoStore = useTeacherInfoStore();
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.teacherName) == true) {
      const TeacherInfoidTeacher = objCurrEduClsTeacher.idTeacher;
      const TeacherInfoTeacherName = await teacherInfoStore.getTeacherName(TeacherInfoidTeacher);
      objCurrEduClsTeacher.teacherName = TeacherInfoTeacherName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000468)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapCollegeName(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
) {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapCollegeName.name;
  const teacherInfoStore = useTeacherInfoStore();
  const xzClgStore = useXzClgStore();
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.collegeName) == true) {
      const TeacherInfoidTeacher = objCurrEduClsTeacher.idTeacher;
      const TeacherInfoidXzCollege = await teacherInfoStore.getIdXzCollege(TeacherInfoidTeacher);
      const XzClgidXzCollege = TeacherInfoidXzCollege;
      const XzClgCollegeName = await xzClgStore.getCollegeName(XzClgidXzCollege);
      objCurrEduClsTeacher.collegeName = XzClgCollegeName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapEduClsName(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
) {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.eduClsName) == true) {
      const CurrEduClsidCurrEduClass = objCurrEduClsTeacher.idCurrEduCls;
      const CurrEduClsEduClassName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsidCurrEduClass,
        clsPubLocalStorage.courseId,
      );
      objCurrEduClsTeacher.eduClsName = CurrEduClsEduClassName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000437)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapCourseName(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
) {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.courseName) == true) {
      const CurrEduClsidCurrEduClass = objCurrEduClsTeacher.idCurrEduCls;
      const CurrEduClsCourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduClsidCurrEduClass,
        clsPubLocalStorage.courseId,
      );
      const vccCourseSimCourseId = CurrEduClsCourseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objCurrEduClsTeacher.courseName = vccCourseSimCourseName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CurrEduClsTeacherEx_FuncMapByFldName(
  strFldName: string,
  objCurrEduClsTeacherEx: clsCurrEduClsTeacherENEx,
) {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCurrEduClsTeacherEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCurrEduClsTeacherENEx.con_CollegeName:
      return CurrEduClsTeacherEx_FuncMapCollegeName(objCurrEduClsTeacherEx);
    case clsCurrEduClsTeacherENEx.con_TeacherId:
      return CurrEduClsTeacherEx_FuncMapTeacherID(objCurrEduClsTeacherEx);
    case clsCurrEduClsTeacherENEx.con_TeacherName:
      return CurrEduClsTeacherEx_FuncMapTeacherName(objCurrEduClsTeacherEx);
    case clsCurrEduClsTeacherENEx.con_EduClsName:
      return CurrEduClsTeacherEx_FuncMapEduClsName(objCurrEduClsTeacherEx);
    case clsCurrEduClsTeacherENEx.con_CourseName:
      return CurrEduClsTeacherEx_FuncMapCourseName(objCurrEduClsTeacherEx);
    case clsCurrEduClsTeacherENEx.con_RoleNames:
      return CurrEduClsTeacherEx_FuncMapRoleNamesWithDelButton(objCurrEduClsTeacherEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-08-29
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CurrEduClsTeacherEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsCurrEduClsTeacherENEx.con_CollegeName:
      return (obj: clsCurrEduClsTeacherENEx) => {
        return obj.collegeName === value;
      };
    case clsCurrEduClsTeacherENEx.con_TeacherId:
      return (obj: clsCurrEduClsTeacherENEx) => {
        return obj.teacherId === value;
      };
    case clsCurrEduClsTeacherENEx.con_TeacherName:
      return (obj: clsCurrEduClsTeacherENEx) => {
        return obj.teacherName === value;
      };
    case clsCurrEduClsTeacherENEx.con_EduClsName:
      return (obj: clsCurrEduClsTeacherENEx) => {
        return obj.eduClsName === value;
      };
    case clsCurrEduClsTeacherENEx.con_CourseName:
      return (obj: clsCurrEduClsTeacherENEx) => {
        return obj.courseName === value;
      };
    default:
      return CurrEduClsTeacher_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapKeyTeacherID(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapKeyTeacherID.name;
  const teacherInfoStore = useTeacherInfoStore();
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.teacherId) == true) return [];
    const TeacherInfoTeacherID = objCurrEduClsTeacher.teacherId;
    const arrIdTeacher = await teacherInfoStore.getIdTeacherLstByTeacherId(
      TeacherInfoTeacherID,
      enumComparisonOp.Like_03,
    );
    return arrIdTeacher;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000467)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapKeyTeacherName(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapKeyTeacherName.name;
  const teacherInfoStore = useTeacherInfoStore();
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.teacherName) == true) return [];
    const TeacherInfoTeacherName = objCurrEduClsTeacher.teacherName;
    const arrIdTeacher = await teacherInfoStore.getIdTeacherLstByTeacherName(
      TeacherInfoTeacherName,
      enumComparisonOp.Like_03,
    );
    return arrIdTeacher;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000468)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapKeyCollegeName(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapKeyCollegeName.name;
  const teacherInfoStore = useTeacherInfoStore();
  const xzClgStore = useXzClgStore();
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.collegeName) == true) return [];
    const XzClgCollegeName = objCurrEduClsTeacher.collegeName;
    const arrIdXzCollege = await xzClgStore.getIdXzCollegeLstByCollegeName(
      XzClgCollegeName,
      enumComparisonOp.Like_03,
      clsSysPara4WebApi.spIdSchool,
    );
    const strIdXzCollegeLst = arrIdXzCollege;
    const arrIdTeacher = await teacherInfoStore.getIdTeacherLstByIdXzCollegeLst(
      strIdXzCollegeLst,
      enumComparisonOp.In_04,
    );
    return arrIdTeacher;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapKeyEduClsName(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.eduClsName) == true) return [];
    const CurrEduClsEduClassName = objCurrEduClsTeacher.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_EduClsName,
      CurrEduClsEduClassName,
      clsPubLocalStorage.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000437)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsTeacherS:源对象
 **/
export async function CurrEduClsTeacherEx_FuncMapKeyCourseName(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsTeacher.courseName) == true) return [];
    const vccCourseSimCourseName = objCurrEduClsTeacher.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    const strCourseIdLst = arrCourseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_CourseId,
      strCourseIdLst,
      clsPubLocalStorage.courseId,
      enumComparisonOp.In_04,
    );
    return arrIdCurrEduCls;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 根据教师Id获取教学班流水号列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTeacherId: 工号
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsTeacherEx_SetCurrEduClsOrderNum4TeacherId(
  arrCurrEduClsObjLst: Array<clsCurrEduClsEN>,
  strTeacherId: string,
): Promise<void> {
  const arrCurrEduClsTeacher = await CurrEduClsTeacherEx_GetObjListByTeacherId(strTeacherId);
  for (const objCurrEduCls of arrCurrEduClsObjLst) {
    const objCurrEduClsTeacher = arrCurrEduClsTeacher.find(
      (x) => x.idCurrEduCls == objCurrEduCls.idCurrEduCls,
    );
    if (objCurrEduClsTeacher == null) continue;
    objCurrEduCls.intTag = objCurrEduClsTeacher.orderNum;
  }
}

/**
 * 根据工号获取教学班教师对象列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTeacherId: 工号
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsTeacherEx_GetObjListByTeacherId(
  strTeacherId: string,
): Promise<Array<clsCurrEduClsTeacherEN>> {
  const strThisFuncName = 'GetObjListByTeacherId';
  const strAction = 'GetObjListByTeacherId';
  const strUrl = CurrEduClsTeacherEx_GetWebApiUrl(currEduClsTeacherEx_Controller, strAction);
  //const mapParam: Dictionary = new Dictionary();
  //mapParam.add("strTeacherId", strTeacherId);
  //let strData = mapParam.getParamText();// "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: { strTeacherId },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          currEduClsTeacherEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = CurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        currEduClsTeacherEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        currEduClsTeacherEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据教师Id获取教学班流水号列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strTeacherId: 工号
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsTeacherEx_GetIdCurrEduClsListByTeacherId(
  strTeacherId: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetidCurrEduClsListByTeacherId';
  const strAction = 'GetidCurrEduClsListByTeacherId';
  const strUrl = CurrEduClsTeacherEx_GetWebApiUrl(currEduClsTeacherEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { strTeacherId },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          currEduClsTeacherEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = returnObjLst;
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        currEduClsTeacherEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        currEduClsTeacherEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 根据教学班流水号获取教师Id列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsTeacherEx_GetTeacherIdLstByIdCurrEduCls(
  strIdCurrEduCls: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetTeacherIdLstByIdCurrEduCls';
  const strAction = 'GetTeacherIdLstByIdCurrEduCls';
  const strUrl = CurrEduClsTeacherEx_GetWebApiUrl(currEduClsTeacherEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { strIdCurrEduCls },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          currEduClsTeacherEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = returnObjLst;
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        currEduClsTeacherEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        currEduClsTeacherEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function CurrEduClsTeacherEx_BindDdl_IdCurrEduClsByTeacherIdInDivCache(
  divName: HTMLDivElement,
  strDdlName: string,
  strTeacherId: string,
) {
  const strCourseId = clsPubLocalStorage.courseId;
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_idCurrEduClsInDiv_Cache)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_idCurrEduClsInDiv_Cache');
  const arrObjLst_Sel: Array<clsvCurrEduCls_SimEN> = await vCurrEduCls_Sim_GetObjLstCache(
    strCourseId,
  );

  const arrIdCurrEduClsLst = await CurrEduClsTeacherEx_GetIdCurrEduClsListByTeacherId(strTeacherId);
  const arrObjLst_Sel2 = arrObjLst_Sel.filter(
    (x) => arrIdCurrEduClsLst.indexOf(x.idCurrEduCls) > -1,
  );

  BindDdl_ObjLstInDivObj_V(
    divName,
    strDdlName,
    arrObjLst_Sel2,
    clsCurrEduClsEN.con_IdCurrEduCls,
    clsCurrEduClsEN.con_EduClsName,
    '教学班',
  );
}

export async function CurrEduClsTeacherEx_UpdateLastVisitedDate(
  strIdCurrEduCls: string,
  stridTeacher: string,
): Promise<boolean> {
  const strThisFuncName = CurrEduClsTeacherEx_UpdateLastVisitedDate.name;

  const arr = await CurrEduClsTeacher_GetObjLstAsync(
    `${clsCurrEduClsTeacherEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`,
  );
  const objCurrEduClsTeacher = arr.find((x) => x.idTeacher == stridTeacher);

  if (objCurrEduClsTeacher == null) {
    const strMsg = Format(
      '根据IdCurrEduCls:[{0}], idTeacher:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strIdCurrEduCls,
      stridTeacher,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }

  objCurrEduClsTeacher.SetLastVisitedDate(clsDateTime.getTodayDateTimeStr(0));
  objCurrEduClsTeacher.SetIdEduClsTeacher(objCurrEduClsTeacher.idEduClsTeacher);
  const bolIsSuccess = await CurrEduClsTeacher_UpdateRecordAsync(objCurrEduClsTeacher);

  return bolIsSuccess;
}

export async function CurrEduClsTeacherEx_GetLastVisitedDate(
  strIdCurrEduCls: string,
  stridTeacher: string,
): Promise<string> {
  const strThisFuncName = CurrEduClsTeacherEx_GetLastVisitedDate.name;

  const arr = await CurrEduClsTeacher_GetObjLstAsync(
    `${clsCurrEduClsTeacherEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`,
  );
  const objCurrEduClsTeacher = arr.find((x) => x.idTeacher == stridTeacher);
  if (objCurrEduClsTeacher == null) {
    const strMsg = Format(
      '根据IdCurrEduCls:[{0}], idTeacher:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strIdCurrEduCls,
      stridTeacher,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    // alert(strMsg);
    return '';
  }
  return objCurrEduClsTeacher.lastVisitedDate;
}

export async function CurrEduClsTeacherEx_FuncMapRoleNamesWithDelButton(
  objCurrEduClsTeacher: clsCurrEduClsTeacherENEx,
) {
  const strThisFuncName = CurrEduClsTeacherEx_FuncMapRoleNamesWithDelButton.name;
  try {
    const qxUserRoleRelationStore = useQxUserRoleRelationStore();
    if (IsNullOrEmpty(objCurrEduClsTeacher.roleNames) == true) {
      const strPrjId = clsSysPara4WebApi.currSelPrjId;
      await CurrEduClsTeacherEx_FuncMapTeacherID(objCurrEduClsTeacher);

      const arrRoleIds = await qxUserRoleRelationStore.getRoleIds(
        objCurrEduClsTeacher.teacherId,
        strPrjId,
      );
      const divRoleNames = GetDiv_Empty('');

      for (const strRoleId of arrRoleIds) {
        if (strRoleId == '') continue;
        const strRoleName = await QxRoles_GetNameByRoleIdCache(strRoleId, strPrjId);
        const spnRole = GetSpan_Empty('text-secondary');
        spnRole.innerHTML = strRoleName;
        const aDel = GetA_Empty('text-primary ml-2 mr-2');
        aDel.innerHTML = '删除';
        aDel.id = 'aDel';
        aDel.href = 'javascript:void(0)';
        const objData = `${objCurrEduClsTeacher.teacherId}|${strRoleId} `;
        aDel.setAttribute('keyId', objData);
        // aDel.href = 'http://www.shnu.edu.cn';

        // (function (objData: any) {
        //   aDel.onclick = function () {
        //     console.error('aDel.onclick');
        //     clsCurrEduClsTeacherExWApi.vuebtn_Click('DelRole', objData);
        //   };
        // })(objData);
        const spnEmpty = GetSpan_Empty('text-secondary ml-2');
        spnEmpty.innerHTML = '&nbsp;';
        const spnEmpty1 = GetSpan_Empty('text-secondary ml-2');
        spnEmpty1.innerHTML = '&nbsp;&nbsp;';
        divRoleNames.appendChild(spnRole);
        divRoleNames.appendChild(spnEmpty);
        divRoleNames.appendChild(aDel);
        divRoleNames.appendChild(spnEmpty1);
      }
      if (arrRoleIds.length > 0) {
        objCurrEduClsTeacher.roleNames = divRoleNames.outerHTML;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CurrEduClsTeacherEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCurrEduClsTeacherENEx.con_CollegeName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsCurrEduClsTeacherENEx.con_TeacherId:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.teacherId.localeCompare(b.teacherId);
        };
      case clsCurrEduClsTeacherENEx.con_CourseId:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.courseId.localeCompare(b.courseId);
        };
      case clsCurrEduClsTeacherENEx.con_TeacherName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.teacherName.localeCompare(b.teacherName);
        };
      case clsCurrEduClsTeacherENEx.con_EduClsName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsCurrEduClsTeacherENEx.con_CourseName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsCurrEduClsTeacherENEx.con_RoleNames:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.roleNames.localeCompare(b.roleNames);
        };
      case clsCurrEduClsTeacherENEx.con_CurrEduClsId:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.currEduClsId.localeCompare(b.currEduClsId);
        };
      case clsCurrEduClsTeacherENEx.con_CourseTypeName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return a.courseTypeName.localeCompare(b.courseTypeName);
        };
      default:
        return CurrEduClsTeacher_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCurrEduClsTeacherENEx.con_CollegeName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsCurrEduClsTeacherENEx.con_TeacherId:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.teacherId.localeCompare(a.teacherId);
        };
      case clsCurrEduClsTeacherENEx.con_CourseId:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.courseId.localeCompare(a.courseId);
        };
      case clsCurrEduClsTeacherENEx.con_TeacherName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.teacherName.localeCompare(a.teacherName);
        };
      case clsCurrEduClsTeacherENEx.con_EduClsName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsCurrEduClsTeacherENEx.con_CourseName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsCurrEduClsTeacherENEx.con_RoleNames:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.roleNames.localeCompare(a.roleNames);
        };
      case clsCurrEduClsTeacherENEx.con_CurrEduClsId:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.currEduClsId.localeCompare(a.currEduClsId);
        };
      case clsCurrEduClsTeacherENEx.con_CourseTypeName:
        return (a: clsCurrEduClsTeacherENEx, b: clsCurrEduClsTeacherENEx) => {
          return b.courseTypeName.localeCompare(a.courseTypeName);
        };
      default:
        return CurrEduClsTeacher_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/* 添加新记录，保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
export async function CurrEduClsTeacherEx_AddNewRecordSaveCurrEduClsTeacher(
  strCurrEduClsId: string,
  strIdTeacher: string,
) {
  const objCurrEduClsTeacherEN: clsCurrEduClsTeacherEN = new clsCurrEduClsTeacherEN();
  await CurrEduClsTeacherEx_PutDataToCurrEduClsTeacher(
    objCurrEduClsTeacherEN,
    strCurrEduClsId,
    strIdTeacher,
  );
  try {
    //同一用户，同一主题 同一观点 只能添加一次；
    const strWhere = ` 1 = 1 And idCurrEduCls = '${strCurrEduClsId}' And IdTeacher = '${strIdTeacher}'`;
    const bolIsExist: boolean = await CurrEduClsTeacher_IsExistRecordAsync(strWhere);

    if (bolIsExist == true) {
      const strMsg = `您已经加入过该教学班了！`;
      alert(strMsg);
      return bolIsExist; //一定要有一个返回值，否则会出错！
    }
    const returnBool = await CurrEduClsTeacher_AddNewRecordAsync(objCurrEduClsTeacherEN);
    if (returnBool == true) {
      const strInfo = `添加教师到教学班成功!`;

      //显示信息框
      alert(strInfo);
      //关闭列表
      // CloseWindow();
    } else {
      const strInfo = `添加教师到教学班不成功!`;
      //显示信息框
      alert(strInfo);
    }
    return returnBool; //一定要有一个返回值，否则会出错！
  } catch (e: any) {
    console.error('catch(e)=');
    console.error(e);
    const strMsg = `添加教师到教学班不成功,${e}.`;
    alert(strMsg);
    return false;
  }
  return true; //一定要有一个返回值，否则会出错！
}
/* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjCurrEduClsTeacherEN">数据传输的目的类对象</param>
*/
export async function CurrEduClsTeacherEx_PutDataToCurrEduClsTeacher(
  pobjCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
  strCurrEduClsId: string,
  strIdTeacher: string,
) {
  const userStore = useUserStore();
  pobjCurrEduClsTeacherEN.SetIdCurrEduCls(strCurrEduClsId); // 教学班

  //获取用户，通过用户Id 查询学生表数据得到学生流水号；
  const strUserId = userStore.getUserId;
  // const strid_TeacherInfo = '';
  // const strSchoolTeam = '';
  // const strSchoolYear = '';
  pobjCurrEduClsTeacherEN.SetIdTeacher(strIdTeacher); // 老
  //pobjCurrEduClsTeacherEN.schoolTerm = this.schoolTerm;// 学期
  //pobjCurrEduClsTeacherEN.schoolYear = this.schoolYear;// 学年
  pobjCurrEduClsTeacherEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); //
  pobjCurrEduClsTeacherEN.SetUpdUser(strUserId); //
  // pobjCurrEduClsTeacherEN.SetMemo(this.memo;// 备注
}

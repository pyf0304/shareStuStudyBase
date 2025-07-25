﻿/**
 * 当前教学班(CurrEduCls)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月25日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  CurrEduCls_GetObjLstAsync,
  CurrEduCls_SortFunByKey,
  CurrEduCls_FilterFunByKey,
  CurrEduCls_GetObjByIdCurrEduClsAsync,
  CurrEduCls_GetFirstObjAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { clsCurrEduClsENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsENEx';
import { XzClg_funcKey } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzGradeBase_func, XzGradeBase_funcKey } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { ClsRmType_func, ClsRmType_funcKey } from '@/ts/L3ForWApi/SystemSet/clsClsRmTypeWApi';
import { clsClsRmTypeEN } from '@/ts/L0Entity/SystemSet/clsClsRmTypeEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import {
  GetA_Empty,
  GetLi_Empty,
  GetUlObjInDivObj,
  SetSpanHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { CurrEduClsStuEx_GetLastVisitedDate } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';
import { CurrEduClsTeacherEx_GetLastVisitedDate } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';
import { TeacherInfoEx_GetIdTeacherByTeacherId } from '@/ts/L3ForWApiExShare/BaseInfo/clsTeacherInfoExWApi';
import { StudentInfoEx_GetIdStudentInfoByStuId } from '@/ts/L3ForWApiExShare/UserManage/clsStudentInfoExWApi';
import { useUserStore } from '@/store/modulesShare/user';
import { useXzClgStore } from '@/store/modulesShare/xzClg';

import { UserType_func } from '@/ts/L3ForWApi/UserManage/clsUserTypeWApi';
import { clsUserTypeEN } from '@/ts/L0Entity/UserManage/clsUserTypeEN';

export const currEduClsExController = 'CurrEduClsExApi';
export const currEduClsEx_ConstructorName = 'currEduClsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CurrEduClsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objCurrEduClsENS:源对象
 * @returns 目标对象=>clsCurrEduClsEN:objCurrEduClsENT
 **/
export function CurrEduClsEx_CopyToEx(objCurrEduClsENS: clsCurrEduClsEN): clsCurrEduClsENEx {
  const strThisFuncName = CurrEduClsEx_CopyToEx.name;
  const objCurrEduClsENT = new clsCurrEduClsENEx();
  try {
    ObjectAssign(objCurrEduClsENT, objCurrEduClsENS);
    return objCurrEduClsENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCurrEduClsENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CurrEduClsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCurrEduClsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCurrEduClsObjLst = await CurrEduCls_GetObjLstAsync(objPagerPara.whereCond);
  const arrCurrEduClsExObjLst = arrCurrEduClsObjLst.map(CurrEduClsEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCurrEduClsEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCurrEduClsExObjLst) {
      await CurrEduClsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCurrEduClsExObjLst.length == 0) return arrCurrEduClsExObjLst;
  let arrCurrEduClsSel: Array<clsCurrEduClsENEx> = arrCurrEduClsExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCurrEduClsSel = arrCurrEduClsSel.sort(CurrEduClsEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCurrEduClsSel = arrCurrEduClsSel.sort(objPagerPara.sortFun);
    }
    arrCurrEduClsSel = arrCurrEduClsSel.slice(intStart, intEnd);
    return arrCurrEduClsSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapCollegeName(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapCollegeName.name;
  const xzClgStore = useXzClgStore();
  try {
    if (IsNullOrEmpty(objCurrEduCls.collegeName) == true) {
      const XzClgidXzCollege = objCurrEduCls.idXzCollege;
      const XzClgCollegeName = await xzClgStore.getCollegeName(XzClgidXzCollege);
      objCurrEduCls.collegeName = XzClgCollegeName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapGradeBaseName(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.gradeBaseName) == true) {
      const XzGradeBaseidGradeBase = objCurrEduCls.idGradeBase;
      const XzGradeBaseGradeBaseName = await XzGradeBase_func(
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        XzGradeBaseidGradeBase,
      );
      objCurrEduCls.gradeBaseName = XzGradeBaseGradeBaseName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapCourseCode(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapCourseCode.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.courseCode) == true) {
      const vccCourseSimCourseId = objCurrEduCls.courseId;
      const vccCourseSimCourseCode = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseCode,
        vccCourseSimCourseId,
      );
      objCurrEduCls.courseCode = vccCourseSimCourseCode;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000458)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapClassRoomTypeDesc(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapClassRoomTypeDesc.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.classRoomTypeDesc) == true) {
      const ClsRmTypeidClassRoomType = objCurrEduCls.idClassRoomType;
      const ClsRmTypeClassRoomTypeDesc = await ClsRmType_func(
        clsClsRmTypeEN.con_IdClassRoomType,
        clsClsRmTypeEN.con_ClassRoomTypeDesc,
        ClsRmTypeidClassRoomType,
      );
      objCurrEduCls.classRoomTypeDesc = ClsRmTypeClassRoomTypeDesc;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000459)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CurrEduClsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCurrEduClsENEx.con_CollegeName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsCurrEduClsENEx.con_GradeBaseName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsCurrEduClsENEx.con_CourseName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsCurrEduClsENEx.con_CourseCode:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.courseCode.localeCompare(b.courseCode);
        };
      case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return a.classRoomTypeDesc.localeCompare(b.classRoomTypeDesc);
        };
      case clsCurrEduClsENEx.con_LastVisitedDate:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          if (a.lastVisitedDate == null) return -1;
          if (b.lastVisitedDate == null) return 1;
          return a.lastVisitedDate.localeCompare(b.lastVisitedDate);
        };
      default:
        return CurrEduCls_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCurrEduClsENEx.con_CollegeName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsCurrEduClsENEx.con_GradeBaseName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsCurrEduClsENEx.con_CourseName:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsCurrEduClsENEx.con_CourseCode:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.courseCode.localeCompare(a.courseCode);
        };
      case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          return b.classRoomTypeDesc.localeCompare(a.classRoomTypeDesc);
        };
      case clsCurrEduClsENEx.con_LastVisitedDate:
        return (a: clsCurrEduClsENEx, b: clsCurrEduClsENEx) => {
          if (b.lastVisitedDate == null) return -1;
          if (a.lastVisitedDate == null) return 1;
          return b.lastVisitedDate.localeCompare(a.lastVisitedDate);
        };
      default:
        return CurrEduCls_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CurrEduClsEx_FuncMapByFldName(
  strFldName: string,
  objCurrEduClsEx: clsCurrEduClsENEx,
) {
  const strThisFuncName = CurrEduClsEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCurrEduClsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCurrEduClsENEx.con_CollegeName:
      return CurrEduClsEx_FuncMapCollegeName(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_GradeBaseName:
      return CurrEduClsEx_FuncMapGradeBaseName(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_CourseCode:
      return CurrEduClsEx_FuncMapCourseCode(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
      return CurrEduClsEx_FuncMapClassRoomTypeDesc(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_LastVisitedDate:
      return CurrEduClsEx_FuncMap_LastVisitedDate(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_CourseName:
      return CurrEduClsEx_FuncMapCourseName(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_UserTypeName:
      return CurrEduClsEx_FuncMapUserTypeName(objCurrEduClsEx);
    case clsCurrEduClsENEx.con_UserTypeNameSim:
      return CurrEduClsEx_FuncMapUserTypeNameSim(objCurrEduClsEx);
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
 * 日期:2023-08-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CurrEduClsEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsCurrEduClsENEx.con_CollegeName:
      return (obj: clsCurrEduClsENEx) => {
        return obj.collegeName === value;
      };
    case clsCurrEduClsENEx.con_GradeBaseName:
      return (obj: clsCurrEduClsENEx) => {
        return obj.gradeBaseName === value;
      };
    case clsCurrEduClsENEx.con_CourseName:
      return (obj: clsCurrEduClsENEx) => {
        return obj.courseName === value;
      };
    case clsCurrEduClsENEx.con_CourseCode:
      return (obj: clsCurrEduClsENEx) => {
        return obj.courseCode === value;
      };
    case clsCurrEduClsENEx.con_ClassRoomTypeDesc:
      return (obj: clsCurrEduClsENEx) => {
        return obj.classRoomTypeDesc === value;
      };
    default:
      return CurrEduCls_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyCollegeName(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyCollegeName.name;
  const xzClgStore = useXzClgStore();
  try {
    if (IsNullOrEmpty(objCurrEduCls.collegeName) == true) return [];
    const XzClgCollegeName = objCurrEduCls.collegeName;
    const arrIdXzCollege = await xzClgStore.getIdXzCollegeLstByCollegeName(
      XzClgCollegeName,
      enumComparisonOp.Like_03,
      clsSysPara4WebApi.spIdSchool,
    );
    return arrIdXzCollege;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
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
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyGradeBaseName(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.gradeBaseName) == true) return [];
    const XzGradeBaseGradeBaseName = objCurrEduCls.gradeBaseName;
    const arrIdGradeBase = await XzGradeBase_funcKey(
      clsXzGradeBaseEN.con_GradeBaseName,
      XzGradeBaseGradeBaseName,
      enumComparisonOp.Like_03,
    );
    return arrIdGradeBase;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
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
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyCourseCode(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyCourseCode.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.courseCode) == true) return [];
    const vccCourseSimCourseCode = objCurrEduCls.courseCode;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseCode,
      vccCourseSimCourseCode,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000458)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
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
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapKeyClassRoomTypeDesc(
  objCurrEduCls: clsCurrEduClsENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsEx_FuncMapKeyClassRoomTypeDesc.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.classRoomTypeDesc) == true) return [];
    const ClsRmTypeClassRoomTypeDesc = objCurrEduCls.classRoomTypeDesc;
    const arrIdClassRoomType = await ClsRmType_funcKey(
      clsClsRmTypeEN.con_ClassRoomTypeDesc,
      ClsRmTypeClassRoomTypeDesc,
      enumComparisonOp.Like_03,
    );
    return arrIdClassRoomType;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000459)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function CurrEduClsEx_GetCourseIdByIdCurrEduCls(
  strIdCurrEduCls: string,
): Promise<string> {
  // const strThisFuncName = 'GetCourseIdByIdCurrEduCls';

  const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
  if (objCurrEduCls == null) return '';
  return objCurrEduCls.courseId;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:20211017113202
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CurrEduClsEx_SortFun_IntTag(a: clsCurrEduClsEN, b: clsCurrEduClsEN): number {
  // const strThisFuncName = CurrEduClsEx_SortFun_IntTag.name;

  if (a.intTag == null) return 1;
  if (b.intTag == null) return 1;
  const strA = a.intTag.toString();
  const strB = b.intTag.toString();
  const intA = Number(strA);
  const intB = Number(strB);

  const intResult = intA - intB;
  return intResult;
}

//教学班教师
export async function CurrEduClsEx_Bind_EduClsTeaList(
  divLayout: HTMLDivElement,
  EduCls_Click: (
    divLayout: HTMLDivElement,
    strIdCurrEduCls: string,
    strEduName: string,
    strTypeID: string,
  ) => void,
  strEduClsNameId: string,
) {
  try {
    const userStore = useUserStore();
    const strWhereCond = ` teacherId='${userStore.getUserId}' order by updDate Desc`;
    const ulCurrEduCls = GetUlObjInDivObj(divLayout, 'ulCurrEduCls');
    const arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond);
    // let strhtml = '';
    for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
      const objvCurrEduClsTeacher = arrvCurrEduClsTeacherObjLst[i];
      if (i == 0) {
        if (
          clsPubLocalStorage.idCurrEduCls == '' ||
          clsPubLocalStorage.idCurrEduCls == 'undefined'
        ) {
          SetSpanHtmlInDivObj(divLayout, strEduClsNameId, objvCurrEduClsTeacher.eduClsName);
          //存入session
          clsPubLocalStorage.idCurrEduCls = arrvCurrEduClsTeacherObjLst[i].idCurrEduCls;
          clsPubLocalStorage.eduClsTypeId = arrvCurrEduClsTeacherObjLst[i].eduClsTypeId;
          clsPubLocalStorage.eduClsName = arrvCurrEduClsTeacherObjLst[i].eduClsName;
        } else {
          SetSpanHtmlInDivObj(divLayout, strEduClsNameId, clsPubLocalStorage.eduClsName);
        }
      }

      const li1 = GetLi_Empty('');
      const a1 = GetA_Empty('dropdown-item');
      a1.href = 'javascript:void(0)';
      a1.innerText = objvCurrEduClsTeacher.eduClsName;
      (function (divLayout, strIdCurrEduCls, strEduName, strTypeID) {
        a1.onclick = function () {
          EduCls_Click(divLayout, strIdCurrEduCls, strEduName, strTypeID);
        };
      })(
        divLayout,
        objvCurrEduClsTeacher.idCurrEduCls,
        objvCurrEduClsTeacher.eduClsName,
        objvCurrEduClsTeacher.eduClsTypeId,
      );

      li1.appendChild(a1);
      ulCurrEduCls.appendChild(li1);
      // strhtml += `<dd><a onclick=EduCls_Click("${arrvCurrEduClsTeacherObjLst[i].idCurrEduCls}","${arrvCurrEduClsTeacherObjLst[i].eduClsName}","${arrvCurrEduClsTeacherObjLst[i].eduClsTypeId}")> ${arrvCurrEduClsTeacherObjLst[i].eduClsName}</a></dd>`;
    }
    // $('#dlEduClsList').html(strhtml);
  } catch (e: any) {
    const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}

//教学班学生
export async function CurrEduClsEx_Bind_EduClsStuList(
  divLayout: HTMLDivElement,
  EduCls_Click: (
    divLayout: HTMLDivElement,
    strIdCurrEduCls: string,
    strEduName: string,
    strTypeID: string,
  ) => void,
  strEduClsNameId: string,
) {
  try {
    const userStore = useUserStore();
    const ulCurrEduCls = GetUlObjInDivObj(divLayout, 'ulCurrEduCls');
    const strWhereCond = ` stuId='${userStore.getUserId}' order by modifyDate Desc`;

    const arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
    // let strhtml = '';
    for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
      const objvCurrEduClsStu = arrvCurrEduClsStuObjLst[i];
      if (i == 0) {
        if (clsPubLocalStorage.idCurrEduCls == '') {
          SetSpanHtmlInDivObj(divLayout, strEduClsNameId, arrvCurrEduClsStuObjLst[i].eduClsName);
          //存入session
          clsPubLocalStorage.idCurrEduCls = arrvCurrEduClsStuObjLst[i].idCurrEduCls;
          clsPubLocalStorage.eduClsTypeId = arrvCurrEduClsStuObjLst[i].eduClsTypeId;
          clsPubLocalStorage.eduClsName = arrvCurrEduClsStuObjLst[i].eduClsName;
        } else {
          SetSpanHtmlInDivObj(divLayout, strEduClsNameId, clsPubLocalStorage.eduClsName);
        }
      }
      const li1 = GetLi_Empty('');
      const a1 = GetA_Empty('dropdown-item');
      a1.href = 'javascript:void(0)';
      a1.innerText = objvCurrEduClsStu.eduClsName;
      (function (strIdCurrEduCls, strEduName, strTypeID) {
        a1.onclick = function () {
          EduCls_Click(divLayout, strIdCurrEduCls, strEduName, strTypeID);
        };
      })(
        objvCurrEduClsStu.idCurrEduCls,
        objvCurrEduClsStu.eduClsName,
        objvCurrEduClsStu.eduClsTypeId,
      );

      li1.appendChild(a1);
      ulCurrEduCls.appendChild(li1);

      // strhtml += `<dd><a onclick=EduCls_Click("${arrvCurrEduClsStuObjLst[i].idCurrEduCls}","${arrvCurrEduClsStuObjLst[i].eduClsName}","${arrvCurrEduClsStuObjLst[i].eduClsTypeId}")> ${arrvCurrEduClsStuObjLst[i].eduClsName}</a></dd>`;
    }
    // $('#dlEduClsList').html(strhtml);
  } catch (e: any) {
    const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function CurrEduClsEx_GetObjExByLastVisitedDate(
  arrCurrEduClsObjLst: Array<clsCurrEduClsEN>,
): Promise<Array<clsCurrEduClsENEx>> {
  // const strThisFuncName = CurrEduClsEx_GetObjExByLastVisitedDate.name;

  let arrCurrEduClsExObjLst = arrCurrEduClsObjLst.map(CurrEduClsEx_CopyToEx);
  if (arrCurrEduClsExObjLst.length <= 1) return arrCurrEduClsExObjLst;

  for (let objCurrEduClsEx of arrCurrEduClsExObjLst) {
    await CurrEduClsEx_FuncMapByFldName(clsCurrEduClsENEx.con_LastVisitedDate, objCurrEduClsEx);
  }
  arrCurrEduClsExObjLst = arrCurrEduClsExObjLst.sort(
    CurrEduClsEx_SortFunByKey(clsCurrEduClsENEx.con_LastVisitedDate, 'Desc'),
  );
  return arrCurrEduClsExObjLst;
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMap_LastVisitedDate(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMap_LastVisitedDate.name;
  const userStore = useUserStore();
  const strRoleName = userStore.getRoleName;
  try {
    if (IsNullOrEmpty(objCurrEduCls.lastVisitedDate) == true) {
      const CurrEduCls_idCurrEduCls = objCurrEduCls.idCurrEduCls;
      let CurrEduCls_LastVisitedDate;
      if (strRoleName.indexOf('学生') > -1) {
        const strIdStudentInfo = await StudentInfoEx_GetIdStudentInfoByStuId(userStore.getUserId);
        CurrEduCls_LastVisitedDate = await CurrEduClsStuEx_GetLastVisitedDate(
          CurrEduCls_idCurrEduCls,
          strIdStudentInfo,
        );
      } else {
        const strIdTeacher = await TeacherInfoEx_GetIdTeacherByTeacherId(userStore.getUserId);
        CurrEduCls_LastVisitedDate = await CurrEduClsTeacherEx_GetLastVisitedDate(
          CurrEduCls_idCurrEduCls,
          strIdTeacher,
        );
      }
      objCurrEduCls.lastVisitedDate = CurrEduCls_LastVisitedDate;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000141)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapCourseName(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.courseName) == true) {
      const vccCourseSimCourseId = objCurrEduCls.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objCurrEduCls.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapUserTypeName(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapUserTypeName.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.userTypeName) == true) {
      const UserTypeUserTypeId = objCurrEduCls.userTypeId;
      const UserTypeUserTypeName = await UserType_func(
        clsUserTypeEN.con_UserTypeId,
        clsUserTypeEN.con_UserTypeName,
        UserTypeUserTypeId,
      );
      objCurrEduCls.userTypeName = UserTypeUserTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000991)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsS:源对象
 **/
export async function CurrEduClsEx_FuncMapUserTypeNameSim(objCurrEduCls: clsCurrEduClsENEx) {
  const strThisFuncName = CurrEduClsEx_FuncMapUserTypeNameSim.name;
  try {
    if (IsNullOrEmpty(objCurrEduCls.userTypeNameSim) == true) {
      const UserTypeUserTypeId = objCurrEduCls.userTypeId;
      const UserTypeUserTypeNameSim = await UserType_func(
        clsUserTypeEN.con_UserTypeId,
        clsUserTypeEN.con_UserTypeNameSim,
        UserTypeUserTypeId,
      );
      objCurrEduCls.userTypeNameSim = UserTypeUserTypeNameSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000992)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function CurrEduClsEx_GetObjByCurrEduClsId(
  strCurrEduClsId: string,
): Promise<clsCurrEduClsEN | null> {
  const strThisFuncName = CurrEduClsEx_GetObjByCurrEduClsId.name;
  // console.log(objCurrEduClsEx);
  // let strMsg = '';
  const strWhere = `${clsCurrEduClsEN.con_CurrEduClsId} = '${strCurrEduClsId}'`;
  //如果是本表中字段,不需要映射
  const objCurrEduCls = await CurrEduCls_GetFirstObjAsync(strWhere);
  return objCurrEduCls;
}

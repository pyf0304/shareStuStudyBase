//import $ from "jquery";

import { cc_CourseTeacherRelationCache } from '@/viewsShare/CourseManage/cc_CourseTeacherRelationVueShare';
import { isFuncMapCache } from '@/viewsShare/CourseManage/cc_CourseTeacherRelationVueShare';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clscc_CourseTeacherRelationEN } from '@/ts/L0Entity/CourseManage/clscc_CourseTeacherRelationEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_CourseTeacherRelationENEx } from '@/ts/L0Entity/CourseManage/clscc_CourseTeacherRelationENEx';
import {
  cc_CourseTeacherRelation_GetObjLstAsync,
  cc_CourseTeacherRelation_GetObjLstCache,
} from '@/ts/L3ForWApi/CourseManage/clscc_CourseTeacherRelationWApi';
import { cc_CourseTeacherRelation_SortFunByKey } from '@/ts/L3ForWApi/CourseManage/clscc_CourseTeacherRelationWApi';
import { Format } from '@/ts/PubFun/clsString';
import { cc_CourseTeacherRelation_FilterFunByKey } from '@/ts/L3ForWApi/CourseManage/clscc_CourseTeacherRelationWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { cc_Course_func } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';

import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';
import { vTeacherInfo_Sim_func } from '@/ts/L3ForWApi/BaseInfo/clsvTeacherInfo_SimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsvTeacherInfo_SimEN } from '@/ts/L0Entity/BaseInfo/clsvTeacherInfo_SimEN';

export const cc_CourseTeacherRelationEx_Controller = 'cc_CourseTeacherRelationExApi';
export const cc_CourseTeacherRelationEx_ConstructorName = 'cc_CourseTeacherRelationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_CourseTeacherRelationEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
  const strThisFuncName = 'GetWebApiUrl';
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
 * @param objcc_CourseTeacherRelationENS:源对象
 * @returns 目标对象=>clscc_CourseTeacherRelationEN:objcc_CourseTeacherRelationENT
 **/
export function cc_CourseTeacherRelationEx_CopyToEx(
  objcc_CourseTeacherRelationENS: clscc_CourseTeacherRelationEN,
): clscc_CourseTeacherRelationENEx {
  const strThisFuncName = cc_CourseTeacherRelationEx_CopyToEx.name;
  const objcc_CourseTeacherRelationENT = new clscc_CourseTeacherRelationENEx();
  try {
    ObjectAssign(objcc_CourseTeacherRelationENT, objcc_CourseTeacherRelationENS);
    return objcc_CourseTeacherRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseTeacherRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseTeacherRelationENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseTeacherRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseTeacherRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_CourseTeacherRelationObjLst = await cc_CourseTeacherRelation_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcc_CourseTeacherRelationExObjLst = arrcc_CourseTeacherRelationObjLst.map(
    cc_CourseTeacherRelationEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrcc_CourseTeacherRelationExObjLst) {
      const conFuncMap = await cc_CourseTeacherRelationEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrcc_CourseTeacherRelationExObjLst.length == 0) return arrcc_CourseTeacherRelationExObjLst;
  let arrcc_CourseTeacherRelation_Sel: Array<clscc_CourseTeacherRelationENEx> =
    arrcc_CourseTeacherRelationExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseTeacherRelation_Sel = arrcc_CourseTeacherRelation_Sel.sort(
        cc_CourseTeacherRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcc_CourseTeacherRelation_Sel = arrcc_CourseTeacherRelation_Sel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseTeacherRelation_Sel = arrcc_CourseTeacherRelation_Sel.slice(intStart, intEnd);
    return arrcc_CourseTeacherRelation_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseTeacherRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseTeacherRelationENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_CourseTeacherRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return cc_CourseTeacherRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return cc_CourseTeacherRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_CourseTeacherRelationEx_FuncMapByFldName(
  strFldName: string,
  objcc_CourseTeacherRelationEx: clscc_CourseTeacherRelationENEx,
) {
  const strThisFuncName = cc_CourseTeacherRelationEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscc_CourseTeacherRelationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_CourseTeacherRelationENEx.con_CourseName:
      return cc_CourseTeacherRelationEx_FuncMap_CourseName(objcc_CourseTeacherRelationEx);
    case clscc_CourseTeacherRelationENEx.con_TeacherName:
      return cc_CourseTeacherRelationEx_FuncMap_TeacherName(objcc_CourseTeacherRelationEx);
    case clscc_CourseTeacherRelationENEx.con_TeacherId:
      return cc_CourseTeacherRelationEx_FuncMapTeacherId(objcc_CourseTeacherRelationEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_CourseTeacherRelationEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return cc_CourseTeacherRelation_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseTeacherRelationS:源对象
 **/
export async function cc_CourseTeacherRelationEx_FuncMap_CourseName(
  objcc_CourseTeacherRelation: clscc_CourseTeacherRelationENEx,
) {
  const strThisFuncName = cc_CourseTeacherRelationEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseTeacherRelation.courseName) == true) {
      const cc_Course_CourseId = objcc_CourseTeacherRelation.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objcc_CourseTeacherRelation.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseTeacherRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseTeacherRelationS:源对象
 **/
export async function cc_CourseTeacherRelationEx_FuncMap_TeacherName(
  objcc_CourseTeacherRelation: clscc_CourseTeacherRelationENEx,
) {
  const strThisFuncName = cc_CourseTeacherRelationEx_FuncMap_TeacherName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseTeacherRelation.teacherName) == true) {
      const TeacherInfo_id_Teacher = objcc_CourseTeacherRelation.idTeacher;
      const TeacherInfo_TeacherName = await vTeacherInfo_Sim_func(
        clsTeacherInfoEN.con_IdTeacher,
        clsTeacherInfoEN.con_TeacherName,
        TeacherInfo_id_Teacher,
        clsPrivateSessionStorage.idSchool,
      );
      objcc_CourseTeacherRelation.teacherName = TeacherInfo_TeacherName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000208)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseTeacherRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseTeacherRelationEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clscc_CourseTeacherRelationENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrcc_CourseTeacherRelationObjLst = await cc_CourseTeacherRelation_GetObjLstCache(
    strCourseId,
  );
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clscc_CourseTeacherRelationENEx>();
  const arrcc_CourseTeacherRelationExObjLst = arrcc_CourseTeacherRelationObjLst.map((obj) => {
    const cacheKey = `${obj.courseTeacherRelationId}_${obj.courseId}`;
    if (cc_CourseTeacherRelationCache[cacheKey]) {
      const oldObj = cc_CourseTeacherRelationCache[cacheKey];
      return oldObj;
    } else {
      const newObj = cc_CourseTeacherRelationEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      cc_CourseTeacherRelationCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await cc_CourseTeacherRelationEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_CourseTeacherRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrcc_CourseTeacherRelationExObjLst) {
      await cc_CourseTeacherRelationEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.courseTeacherRelationId}_${newObj.courseId}`;
      cc_CourseTeacherRelationCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrcc_CourseTeacherRelationExObjLst.length == 0) return arrcc_CourseTeacherRelationExObjLst;
  let arrcc_CourseTeacherRelationSel: Array<clscc_CourseTeacherRelationENEx> =
    arrcc_CourseTeacherRelationExObjLst;
  const objcc_CourseTeacherRelationCond = objPagerPara.conditionCollection;
  if (objcc_CourseTeacherRelationCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrcc_CourseTeacherRelationExObjLst;
  }
  try {
    for (const objCondition of objcc_CourseTeacherRelationCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseTeacherRelationSel.length == 0) return arrcc_CourseTeacherRelationSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.sort(
        cc_CourseTeacherRelationEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.slice(intStart, intEnd);
    return arrcc_CourseTeacherRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseTeacherRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseTeacherRelationENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseTeacherRelationS:源对象
 **/
export async function cc_CourseTeacherRelationEx_FuncMapTeacherName(
  objcc_CourseTeacherRelation: clscc_CourseTeacherRelationENEx,
) {
  const strThisFuncName = cc_CourseTeacherRelationEx_FuncMapTeacherName.name;
  try {
    if (IsNullOrEmpty(objcc_CourseTeacherRelation.teacherName) == true) {
      const vTeacherInfoSimIdTeacher = objcc_CourseTeacherRelation.idTeacher;
      const vTeacherInfoSimTeacherName = await vTeacherInfo_Sim_func(
        clsvTeacherInfo_SimEN.con_IdTeacher,
        clsvTeacherInfo_SimEN.con_TeacherName,
        vTeacherInfoSimIdTeacher,
        clsPrivateSessionStorage.idSchool,
      );
      objcc_CourseTeacherRelation.teacherName = vTeacherInfoSimTeacherName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001061)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseTeacherRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_CourseTeacherRelationS:源对象
 **/
export async function cc_CourseTeacherRelationEx_FuncMapTeacherId(
  objcc_CourseTeacherRelation: clscc_CourseTeacherRelationENEx,
) {
  const strThisFuncName = cc_CourseTeacherRelationEx_FuncMapTeacherId.name;
  try {
    if (IsNullOrEmpty(objcc_CourseTeacherRelation.teacherId) == true) {
      const vTeacherInfoSimIdTeacher = objcc_CourseTeacherRelation.idTeacher;
      const vTeacherInfoSimTeacherId = await vTeacherInfo_Sim_func(
        clsvTeacherInfo_SimEN.con_IdTeacher,
        clsvTeacherInfo_SimEN.con_TeacherId,
        vTeacherInfoSimIdTeacher,
        clsPrivateSessionStorage.idSchool,
      );
      objcc_CourseTeacherRelation.teacherId = vTeacherInfoSimTeacherId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001062)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseTeacherRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

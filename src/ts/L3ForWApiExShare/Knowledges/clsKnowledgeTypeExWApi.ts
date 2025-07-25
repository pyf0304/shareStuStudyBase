﻿/**
 * 类名:clsKnowledgeTypeExWApi
 * 表名:KnowledgeType(01120890)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/27 10:37:06
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点类型(KnowledgeType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月27日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/

import { knowledgeTypeCache } from '@/viewsShare/Knowledges/KnowledgeTypeVueShare';
import { isFuncMapCache } from '@/viewsShare/Knowledges/KnowledgeTypeVueShare';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  KnowledgeType_GetObjLstCache,
  KnowledgeType_GetObjLstAsync,
  KnowledgeType_SortFunByKey,
  KnowledgeType_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsKnowledgeTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
import { clsKnowledgeTypeENEx } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeENEx';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const knowledgeTypeExController = 'KnowledgeTypeExApi';
export const knowledgeTypeEx_ConstructorName = 'knowledgeTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function KnowledgeTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objKnowledgeTypeENS:源对象
 * @returns 目标对象=>clsKnowledgeTypeEN:objKnowledgeTypeENT
 **/
export function KnowledgeTypeEx_CopyToEx(
  objKnowledgeTypeENS: clsKnowledgeTypeEN,
): clsKnowledgeTypeENEx {
  const strThisFuncName = KnowledgeTypeEx_CopyToEx.name;
  const objKnowledgeTypeENT = new clsKnowledgeTypeENEx();
  try {
    ObjectAssign(objKnowledgeTypeENT, objKnowledgeTypeENS);
    return objKnowledgeTypeENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      knowledgeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objKnowledgeTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function KnowledgeTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsKnowledgeTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrKnowledgeTypeObjLst = await KnowledgeType_GetObjLstAsync(objPagerPara.whereCond);
  const arrKnowledgeTypeExObjLst = arrKnowledgeTypeObjLst.map(KnowledgeTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsKnowledgeTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrKnowledgeTypeExObjLst) {
      await KnowledgeTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrKnowledgeTypeExObjLst.length == 0) return arrKnowledgeTypeExObjLst;
  let arrKnowledgeTypeSel: Array<clsKnowledgeTypeENEx> = arrKnowledgeTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.sort(
        KnowledgeTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.sort(objPagerPara.sortFun);
    }
    arrKnowledgeTypeSel = arrKnowledgeTypeSel.slice(intStart, intEnd);
    return arrKnowledgeTypeSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      knowledgeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsKnowledgeTypeENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objKnowledgeTypeS:源对象
 **/
export async function KnowledgeTypeEx_FuncMapCourseName(objKnowledgeType: clsKnowledgeTypeENEx) {
  const strThisFuncName = KnowledgeTypeEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objKnowledgeType.courseName) == true) {
      const vccCourseSimCourseId = objKnowledgeType.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objKnowledgeType.courseName = vccCourseSimCourseName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      knowledgeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-08-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function KnowledgeTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsKnowledgeTypeENEx.con_CourseName:
        return (a: clsKnowledgeTypeENEx, b: clsKnowledgeTypeENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      default:
        return KnowledgeType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsKnowledgeTypeENEx.con_CourseName:
        return (a: clsKnowledgeTypeENEx, b: clsKnowledgeTypeENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      default:
        return KnowledgeType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-08-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function KnowledgeTypeEx_FuncMapByFldName(
  strFldName: string,
  objKnowledgeTypeEx: clsKnowledgeTypeENEx,
) {
  const strThisFuncName = KnowledgeTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsKnowledgeTypeEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsKnowledgeTypeENEx.con_CourseName:
      return KnowledgeTypeEx_FuncMapCourseName(objKnowledgeTypeEx);
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
 * 日期:2023-08-27
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function KnowledgeTypeEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsKnowledgeTypeENEx.con_CourseName:
      return (obj: clsKnowledgeTypeENEx) => {
        return obj.courseName === value;
      };
    default:
      return KnowledgeType_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objKnowledgeTypeS:源对象
 **/
export async function KnowledgeTypeEx_FuncMapKeyCourseName(
  objKnowledgeType: clsKnowledgeTypeENEx,
): Promise<Array<string>> {
  const strThisFuncName = KnowledgeTypeEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objKnowledgeType.courseName) == true) return [];
    const vccCourseSimCourseName = objKnowledgeType.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      knowledgeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function KnowledgeTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsKnowledgeTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrKnowledgeTypeObjLst = await KnowledgeType_GetObjLstCache(strCourseId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsKnowledgeTypeENEx>();
  const arrKnowledgeTypeExObjLst = arrKnowledgeTypeObjLst.map((obj) => {
    const cacheKey = `${obj.knowledgeTypeId}_${obj.courseId}`;
    if (knowledgeTypeCache[cacheKey]) {
      const oldObj = knowledgeTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = KnowledgeTypeEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      knowledgeTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await KnowledgeTypeEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsKnowledgeTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrKnowledgeTypeExObjLst) {
      await KnowledgeTypeEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.knowledgeTypeId}_${newObj.courseId}`;
      knowledgeTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrKnowledgeTypeExObjLst.length == 0) return arrKnowledgeTypeExObjLst;
  let arrKnowledgeTypeSel: Array<clsKnowledgeTypeENEx> = arrKnowledgeTypeExObjLst;
  const objKnowledgeTypeCond = objPagerPara.conditionCollection;
  if (objKnowledgeTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrKnowledgeTypeExObjLst;
  }
  try {
    for (const objCondition of objKnowledgeTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrKnowledgeTypeSel = arrKnowledgeTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrKnowledgeTypeSel.length == 0) return arrKnowledgeTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.sort(
        KnowledgeTypeEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrKnowledgeTypeSel = arrKnowledgeTypeSel.sort(objPagerPara.sortFun);
    }
    arrKnowledgeTypeSel = arrKnowledgeTypeSel.slice(intStart, intEnd);
    return arrKnowledgeTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      knowledgeTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsKnowledgeTypeENEx>();
}

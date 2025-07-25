﻿/**
 * 类名:clscc_CourseExamPaperExWApi
 * 表名:cc_CourseExamPaper(01120071)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/05 01:03:45
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
 * 考卷(cc_CourseExamPaper)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import { cc_CourseExamPaperCache } from '@/viewsShare/Knowledges/cc_CourseExamPaperVueShare';
import { isFuncMapCache } from '@/viewsShare/Knowledges/cc_CourseExamPaperVueShare';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  cc_CourseExamPaper_GetObjLstCache,
  cc_CourseExamPaper_GetObjLstAsync,
  cc_CourseExamPaper_SortFunByKey,
  cc_CourseExamPaper_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseExamPaperWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clscc_CourseExamPaperEN } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperEN';

import { clscc_CourseExamPaperENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseExamPaperENEx';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const cc_CourseExamPaperEx_Controller = 'cc_CourseExamPaperExApi';
export const cc_CourseExamPaperEx_ConstructorName = 'cc_CourseExamPaperEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_CourseExamPaperEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * @param objcc_CourseExamPaperENS:源对象
 * @returns 目标对象=>clscc_CourseExamPaperEN:objcc_CourseExamPaperENT
 **/
export function cc_CourseExamPaperEx_CopyToEx(
  objcc_CourseExamPaperENS: clscc_CourseExamPaperEN,
): clscc_CourseExamPaperENEx {
  const strThisFuncName = cc_CourseExamPaperEx_CopyToEx.name;
  const objcc_CourseExamPaperENT = new clscc_CourseExamPaperENEx();
  try {
    ObjectAssign(objcc_CourseExamPaperENT, objcc_CourseExamPaperENS);
    return objcc_CourseExamPaperENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_CourseExamPaperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_CourseExamPaperENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseExamPaperEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_CourseExamPaperENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_CourseExamPaperObjLst = await cc_CourseExamPaper_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcc_CourseExamPaperExObjLst = arrcc_CourseExamPaperObjLst.map(
    cc_CourseExamPaperEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrcc_CourseExamPaperExObjLst) {
      await cc_CourseExamPaperEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_CourseExamPaperExObjLst.length == 0) return arrcc_CourseExamPaperExObjLst;
  let arrcc_CourseExamPaper_Sel: Array<clscc_CourseExamPaperENEx> = arrcc_CourseExamPaperExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_CourseExamPaper_Sel = arrcc_CourseExamPaper_Sel.sort(
        cc_CourseExamPaperEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcc_CourseExamPaper_Sel = arrcc_CourseExamPaper_Sel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseExamPaper_Sel = arrcc_CourseExamPaper_Sel.slice(intStart, intEnd);
    return arrcc_CourseExamPaper_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseExamPaperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseExamPaperENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_CourseExamPaperEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return cc_CourseExamPaper_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return cc_CourseExamPaper_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_CourseExamPaperEx_FuncMapByFldName(
  strFldName: string,
  objcc_CourseExamPaperEx: clscc_CourseExamPaperENEx,
) {
  const strThisFuncName = cc_CourseExamPaperEx_FuncMapByFldName.name;
  console.log(objcc_CourseExamPaperEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscc_CourseExamPaperEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_CourseExamPaperEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return cc_CourseExamPaper_FilterFunByKey(strKey, value);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_CourseExamPaperEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clscc_CourseExamPaperENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrcc_CourseExamPaperObjLst = await cc_CourseExamPaper_GetObjLstCache(strCourseId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clscc_CourseExamPaperENEx>();
  const arrcc_CourseExamPaperExObjLst = arrcc_CourseExamPaperObjLst.map((obj) => {
    const cacheKey = `${obj.courseExamPaperId}_${obj.courseId}`;
    if (cc_CourseExamPaperCache[cacheKey]) {
      const oldObj = cc_CourseExamPaperCache[cacheKey];
      return oldObj;
    } else {
      const newObj = cc_CourseExamPaperEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      cc_CourseExamPaperCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await cc_CourseExamPaperEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_CourseExamPaperEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrcc_CourseExamPaperExObjLst) {
      await cc_CourseExamPaperEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.courseExamPaperId}_${newObj.courseId}`;
      cc_CourseExamPaperCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrcc_CourseExamPaperExObjLst.length == 0) return arrcc_CourseExamPaperExObjLst;
  let arrcc_CourseExamPaperSel: Array<clscc_CourseExamPaperENEx> = arrcc_CourseExamPaperExObjLst;
  const objcc_CourseExamPaperCond = objPagerPara.conditionCollection;
  if (objcc_CourseExamPaperCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrcc_CourseExamPaperExObjLst;
  }
  try {
    for (const objCondition of objcc_CourseExamPaperCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_CourseExamPaperSel.length == 0) return arrcc_CourseExamPaperSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.sort(
        cc_CourseExamPaperEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.sort(objPagerPara.sortFun);
    }
    arrcc_CourseExamPaperSel = arrcc_CourseExamPaperSel.slice(intStart, intEnd);
    return arrcc_CourseExamPaperSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_CourseExamPaperEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_CourseExamPaperENEx>();
}

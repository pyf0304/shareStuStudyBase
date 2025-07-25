/*-- -- -- -- -- -- -- -- -- -- --
类名:clsge_StructureGraphExWApi
表名:ge_StructureGraph(01120895)
生成代码版本:2021.03.13.1
生成日期:2021/03/15 11:36:43
生成者:yy
生成服务器IP:103.116.76.183
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:知识点相关
模块英文名:Knowledges
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 结构图谱表(ge_StructureGraph)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by yy on 2021年03月15日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import * as $ from 'jquery';

import { ge_StructureGraphCache } from '@/viewsShare/Knowledges/ge_StructureGraphVueShare';
import { isFuncMapCache } from '@/viewsShare/Knowledges/ge_StructureGraphVueShare';
//import * as QQ from "q";
import { clsge_StructureGraphEN } from '@/ts/L0Entity/Knowledges/clsge_StructureGraphEN';
import { clsge_StructureGraphENEx } from '@/ts/L0Entity/Knowledges/clsge_StructureGraphENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import {
  ge_StructureGraph_FilterFunByKey,
  ge_StructureGraph_GetObjLstAsync,
  ge_StructureGraph_GetObjLstCache,
  ge_StructureGraph_SortFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_StructureGraphWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import axios from 'axios';
export const ge_StructureGraphEx_Controller = 'ge_StructureGraphExApi';
export const ge_StructureGraphEx_ConstructorName = 'ge_StructureGraphEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_StructureGraphEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_StructureGraphENS:源对象
 * @returns 目标对象=>clsge_StructureGraphEN:objge_StructureGraphENT
 **/
export function ge_StructureGraphEx_CopyToEx(
  objge_StructureGraphENS: clsge_StructureGraphEN,
): clsge_StructureGraphENEx {
  const strThisFuncName = ge_StructureGraphEx_CopyToEx.name;
  const objge_StructureGraphENT = new clsge_StructureGraphENEx();
  try {
    ObjectAssign(objge_StructureGraphENT, objge_StructureGraphENS);
    return objge_StructureGraphENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StructureGraphEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_StructureGraphENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_StructureGraphEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_StructureGraphENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_StructureGraphObjLst = await ge_StructureGraph_GetObjLstAsync(objPagerPara.whereCond);
  const arrge_StructureGraphExObjLst = arrge_StructureGraphObjLst.map(ge_StructureGraphEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_StructureGraphExObjLst) {
      const conFuncMap = await ge_StructureGraphEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_StructureGraphExObjLst.length == 0) return arrge_StructureGraphExObjLst;
  let arrge_StructureGraph_Sel: Array<clsge_StructureGraphENEx> = arrge_StructureGraphExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_StructureGraph_Sel = arrge_StructureGraph_Sel.sort(
        ge_StructureGraphEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_StructureGraph_Sel = arrge_StructureGraph_Sel.sort(objPagerPara.sortFun);
    }
    arrge_StructureGraph_Sel = arrge_StructureGraph_Sel.slice(intStart, intEnd);
    return arrge_StructureGraph_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_StructureGraphEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_StructureGraphENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_StructureGraphEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_StructureGraph_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_StructureGraph_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_StructureGraphEx_FuncMapByFldName(
  strFldName: string,
  objge_StructureGraphEx: clsge_StructureGraphENEx,
) {
  const strThisFuncName = ge_StructureGraphEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_StructureGraphEN.AttributeName;
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
 * 日期:2022-11-08
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_StructureGraphEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_StructureGraph_FilterFunByKey(strKey, value);
  }
}

//提交结构图谱
export async function ge_StructureGraphEx_SubmitStructureGraphAsync(
  structureGraphId: string,
  userId: string,
  takeUpTime: string,
): Promise<boolean> {
  const strThisFuncName = 'SubmitStructureGraphAsync';
  const strAction = 'SubmitStructureGraph';
  let strUrl = ge_StructureGraphEx_GetWebApiUrl(ge_StructureGraphEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();

  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        strStructureGraphId: structureGraphId,
        strUserId: userId,
        strTakeUpTime: takeUpTime,
      },
    });
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
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
        ge_StructureGraphEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        ge_StructureGraphEx_Controller,
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_StructureGraphEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsge_StructureGraphENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrge_StructureGraphObjLst = await ge_StructureGraph_GetObjLstCache(strCourseId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsge_StructureGraphENEx>();
  const arrge_StructureGraphExObjLst = arrge_StructureGraphObjLst.map((obj) => {
    const cacheKey = `${obj.structureGraphId}_${obj.courseId}`;
    if (ge_StructureGraphCache[cacheKey]) {
      const oldObj = ge_StructureGraphCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ge_StructureGraphEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      ge_StructureGraphCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ge_StructureGraphEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsge_StructureGraphEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrge_StructureGraphExObjLst) {
      await ge_StructureGraphEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.structureGraphId}_${newObj.courseId}`;
      ge_StructureGraphCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrge_StructureGraphExObjLst.length == 0) return arrge_StructureGraphExObjLst;
  let arrge_StructureGraphSel: Array<clsge_StructureGraphENEx> = arrge_StructureGraphExObjLst;
  const objge_StructureGraphCond = objPagerPara.conditionCollection;
  if (objge_StructureGraphCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrge_StructureGraphExObjLst;
  }
  try {
    for (const objCondition of objge_StructureGraphCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_StructureGraphSel = arrge_StructureGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_StructureGraphSel.length == 0) return arrge_StructureGraphSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrge_StructureGraphSel = arrge_StructureGraphSel.sort(
        ge_StructureGraphEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_StructureGraphSel = arrge_StructureGraphSel.sort(objPagerPara.sortFun);
    }
    arrge_StructureGraphSel = arrge_StructureGraphSel.slice(intStart, intEnd);
    return arrge_StructureGraphSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_StructureGraphEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_StructureGraphENEx>();
}

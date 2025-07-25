/**
 * 类名:clsgs_TeachingDateExWApi
 * 表名:gs_TeachingDate(01120684)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/09 04:07:51
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学班日期范围(gs_TeachingDate)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import { gs_TeachingDateCache } from '@/viewsShare/DailyRunning/gs_TeachingDateVueShare';
import { isFuncMapCache } from '@/viewsShare/DailyRunning/gs_TeachingDateVueShare';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import {
  gs_TeachingDate_AddNewRecordWithReturnKeyAsync,
  gs_TeachingDate_FuncMapByFldName,
  gs_TeachingDate_GetFirstObjAsync,
  gs_TeachingDate_GetObjLstCache,
} from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsgs_TeachingDateENEx } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateENEx';
import { gs_TeachingDate_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import { gs_TeachingDate_SortFunByKey } from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import { Format } from '@/ts/PubFun/clsString';
import { gs_TeachingDate_FilterFunByKey } from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { useUserStore } from '@/store/modulesShare/user';
export const gs_TeachingDateEx_Controller = 'gs_TeachingDateExApi';
export const gs_TeachingDateEx_ConstructorName = 'gs_TeachingDateEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_TeachingDateEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objgs_TeachingDateENS:源对象
 * @returns 目标对象=>clsgs_TeachingDateEN:objgs_TeachingDateENT
 **/
export function gs_TeachingDateEx_CopyToEx(
  objgs_TeachingDateENS: clsgs_TeachingDateEN,
): clsgs_TeachingDateENEx {
  const strThisFuncName = gs_TeachingDateEx_CopyToEx.name;
  const objgs_TeachingDateENT = new clsgs_TeachingDateENEx();
  try {
    ObjectAssign(objgs_TeachingDateENT, objgs_TeachingDateENS);
    return objgs_TeachingDateENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_TeachingDateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_TeachingDateENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_TeachingDateEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TeachingDateENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstAsync(objPagerPara.whereCond);
  const arrgs_TeachingDateExObjLst = arrgs_TeachingDateObjLst.map(gs_TeachingDateEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_TeachingDateExObjLst) {
      const conFuncMap = await gs_TeachingDate_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_TeachingDateExObjLst.length == 0) return arrgs_TeachingDateExObjLst;
  let arrgs_TeachingDate_Sel: Array<clsgs_TeachingDateENEx> = arrgs_TeachingDateExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TeachingDate_Sel = arrgs_TeachingDate_Sel.sort(
        gs_TeachingDateEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_TeachingDate_Sel = arrgs_TeachingDate_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_TeachingDate_Sel = arrgs_TeachingDate_Sel.slice(intStart, intEnd);
    return arrgs_TeachingDate_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TeachingDateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TeachingDateENEx>();
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
export function gs_TeachingDateEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return gs_TeachingDate_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return gs_TeachingDate_SortFunByKey(strKey, AscOrDesc);
    }
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
export async function gs_TeachingDateEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return gs_TeachingDate_FilterFunByKey(strKey, value);
  }
}

export async function gs_TeachingDateEx_AddEmptyRecord(strIdCurrEduCls: string): Promise<string> {
  const userStore = useUserStore();
  const pobjgs_TeachingDateEN = new clsgs_TeachingDateEN();
  pobjgs_TeachingDateEN.SetIdCurrEduCls(strIdCurrEduCls); // 当前教学班流水号
  pobjgs_TeachingDateEN.SetStartDate('2020-1-1'); // 开始日期
  pobjgs_TeachingDateEN.SetEndDate('2020-12-31'); // 截止日期
  pobjgs_TeachingDateEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期
  pobjgs_TeachingDateEN.SetUpdUser(userStore.getUserId); // 修改人
  pobjgs_TeachingDateEN.SetMemo(''); // 备注
  const strMid = await gs_TeachingDate_AddNewRecordWithReturnKeyAsync(pobjgs_TeachingDateEN);
  return strMid;
}

export async function gs_TeachingDateEx_GetObjByIdCurrEduCls(
  strIdCurrEduCls: string,
): Promise<clsgs_TeachingDateEN | null> {
  const strWhere = `${clsgs_TeachingDateEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
  const objgs_TeachingDate = gs_TeachingDate_GetFirstObjAsync(strWhere);
  return objgs_TeachingDate;
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_TeachingDateEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
): Promise<Array<clsgs_TeachingDateENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsgs_TeachingDateENEx>();
  const arrgs_TeachingDateExObjLst = arrgs_TeachingDateObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.idCurrEduCls}`;
    if (gs_TeachingDateCache[cacheKey]) {
      const oldObj = gs_TeachingDateCache[cacheKey];
      return oldObj;
    } else {
      const newObj = gs_TeachingDateEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      gs_TeachingDateCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await gs_TeachingDate_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsgs_TeachingDateEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrgs_TeachingDateExObjLst) {
      await gs_TeachingDate_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.idCurrEduCls}`;
      gs_TeachingDateCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrgs_TeachingDateExObjLst.length == 0) return arrgs_TeachingDateExObjLst;
  let arrgs_TeachingDateSel: Array<clsgs_TeachingDateENEx> = arrgs_TeachingDateExObjLst;
  const objgs_TeachingDateCond = objPagerPara.conditionCollection;
  if (objgs_TeachingDateCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrgs_TeachingDateExObjLst;
  }
  try {
    for (const objCondition of objgs_TeachingDateCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TeachingDateSel.length == 0) return arrgs_TeachingDateSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrgs_TeachingDateSel = arrgs_TeachingDateSel.sort(
        gs_TeachingDateEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_TeachingDateSel = arrgs_TeachingDateSel.sort(objPagerPara.sortFun);
    }
    arrgs_TeachingDateSel = arrgs_TeachingDateSel.slice(intStart, intEnd);
    return arrgs_TeachingDateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TeachingDateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TeachingDateENEx>();
}

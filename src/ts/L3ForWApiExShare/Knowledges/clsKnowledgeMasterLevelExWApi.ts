/**
 * 类名:clsKnowledgeMasterLevelExWApi
 * 表名:KnowledgeMasterLevel(01120891)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/09 04:08:20
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点掌握度(KnowledgeMasterLevel)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import { knowledgeMasterLevelCache } from '@/viewsShare/Knowledges/KnowledgeMasterLevelVueShare';
import { isFuncMapCache } from '@/viewsShare/Knowledges/KnowledgeMasterLevelVueShare';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { KnowledgeMasterLevel_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeMasterLevelWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsKnowledgeMasterLevelEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeMasterLevelEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsKnowledgeMasterLevelENEx } from '@/ts/L0Entity/Knowledges/clsKnowledgeMasterLevelENEx';
import { KnowledgeMasterLevel_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeMasterLevelWApi';
import { KnowledgeMasterLevel_SortFunByKey } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeMasterLevelWApi';
import { Format } from '@/ts/PubFun/clsString';
import { KnowledgeMasterLevel_FilterFunByKey } from '@/ts/L3ForWApi/Knowledges/clsKnowledgeMasterLevelWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const knowledgeMasterLevelEx_Controller = 'KnowledgeMasterLevelExApi';
export const knowledgeMasterLevelEx_ConstructorName = 'knowledgeMasterLevelEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function KnowledgeMasterLevelEx_GetWebApiUrl(
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
 * @param objKnowledgeMasterLevelENS:源对象
 * @returns 目标对象=>clsKnowledgeMasterLevelEN:objKnowledgeMasterLevelENT
 **/
export function KnowledgeMasterLevelEx_CopyToEx(
  objKnowledgeMasterLevelENS: clsKnowledgeMasterLevelEN,
): clsKnowledgeMasterLevelENEx {
  const strThisFuncName = KnowledgeMasterLevelEx_CopyToEx.name;
  const objKnowledgeMasterLevelENT = new clsKnowledgeMasterLevelENEx();
  try {
    ObjectAssign(objKnowledgeMasterLevelENT, objKnowledgeMasterLevelENS);
    return objKnowledgeMasterLevelENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      knowledgeMasterLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objKnowledgeMasterLevelENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function KnowledgeMasterLevelEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsKnowledgeMasterLevelENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrKnowledgeMasterLevelObjLst = await KnowledgeMasterLevel_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrKnowledgeMasterLevelExObjLst = arrKnowledgeMasterLevelObjLst.map(
    KnowledgeMasterLevelEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrKnowledgeMasterLevelExObjLst) {
      const conFuncMap = await KnowledgeMasterLevelEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrKnowledgeMasterLevelExObjLst.length == 0) return arrKnowledgeMasterLevelExObjLst;
  let arrKnowledgeMasterLevel_Sel: Array<clsKnowledgeMasterLevelENEx> =
    arrKnowledgeMasterLevelExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrKnowledgeMasterLevel_Sel = arrKnowledgeMasterLevel_Sel.sort(
        KnowledgeMasterLevelEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrKnowledgeMasterLevel_Sel = arrKnowledgeMasterLevel_Sel.sort(objPagerPara.sortFun);
    }
    arrKnowledgeMasterLevel_Sel = arrKnowledgeMasterLevel_Sel.slice(intStart, intEnd);
    return arrKnowledgeMasterLevel_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      knowledgeMasterLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsKnowledgeMasterLevelENEx>();
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
export function KnowledgeMasterLevelEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return KnowledgeMasterLevel_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return KnowledgeMasterLevel_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function KnowledgeMasterLevelEx_FuncMapByFldName(
  strFldName: string,
  objKnowledgeMasterLevelEx: clsKnowledgeMasterLevelENEx,
) {
  const strThisFuncName = KnowledgeMasterLevelEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsKnowledgeMasterLevelEN.AttributeName;
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
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function KnowledgeMasterLevelEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return KnowledgeMasterLevel_FilterFunByKey(strKey, value);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function KnowledgeMasterLevelEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsKnowledgeMasterLevelENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrKnowledgeMasterLevelObjLst = await KnowledgeMasterLevel_GetObjLstCache();
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsKnowledgeMasterLevelENEx>();
  const arrKnowledgeMasterLevelExObjLst = arrKnowledgeMasterLevelObjLst.map((obj) => {
    const cacheKey = `${obj.masterLevelId}`;
    if (knowledgeMasterLevelCache[cacheKey]) {
      const oldObj = knowledgeMasterLevelCache[cacheKey];
      return oldObj;
    } else {
      const newObj = KnowledgeMasterLevelEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      knowledgeMasterLevelCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await KnowledgeMasterLevelEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsKnowledgeMasterLevelEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrKnowledgeMasterLevelExObjLst) {
      await KnowledgeMasterLevelEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.masterLevelId}`;
      knowledgeMasterLevelCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrKnowledgeMasterLevelExObjLst.length == 0) return arrKnowledgeMasterLevelExObjLst;
  let arrKnowledgeMasterLevelSel: Array<clsKnowledgeMasterLevelENEx> =
    arrKnowledgeMasterLevelExObjLst;
  const objKnowledgeMasterLevelCond = objPagerPara.conditionCollection;
  if (objKnowledgeMasterLevelCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrKnowledgeMasterLevelExObjLst;
  }
  try {
    for (const objCondition of objKnowledgeMasterLevelCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrKnowledgeMasterLevelSel.length == 0) return arrKnowledgeMasterLevelSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.sort(
        KnowledgeMasterLevelEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.sort(objPagerPara.sortFun);
    }
    arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.slice(intStart, intEnd);
    return arrKnowledgeMasterLevelSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      knowledgeMasterLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsKnowledgeMasterLevelENEx>();
}

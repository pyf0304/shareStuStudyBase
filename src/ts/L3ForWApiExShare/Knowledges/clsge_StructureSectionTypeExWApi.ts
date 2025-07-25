/**
 * 类名:clsge_StructureSectionTypeExWApi
 * 表名:ge_StructureSectionType(01120901)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/09 04:08:22
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
 * 结构章节类型(ge_StructureSectionType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import { ge_StructureSectionTypeCache } from '@/viewsShare/Knowledges/ge_StructureSectionTypeVueShare';
import { isFuncMapCache } from '@/viewsShare/Knowledges/ge_StructureSectionTypeVueShare';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { ge_StructureSectionType_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsge_StructureSectionTypeEN } from '@/ts/L0Entity/Knowledges/clsge_StructureSectionTypeEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clsge_StructureSectionTypeENEx } from '@/ts/L0Entity/Knowledges/clsge_StructureSectionTypeENEx';
import { ge_StructureSectionType_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionTypeWApi';
import { ge_StructureSectionType_SortFunByKey } from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionTypeWApi';
import { Format } from '@/ts/PubFun/clsString';
import { ge_StructureSectionType_FilterFunByKey } from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const ge_StructureSectionTypeEx_Controller = 'ge_StructureSectionTypeExApi';
export const ge_StructureSectionTypeEx_ConstructorName = 'ge_StructureSectionTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_StructureSectionTypeEx_GetWebApiUrl(
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
 * @param objge_StructureSectionTypeENS:源对象
 * @returns 目标对象=>clsge_StructureSectionTypeEN:objge_StructureSectionTypeENT
 **/
export function ge_StructureSectionTypeEx_CopyToEx(
  objge_StructureSectionTypeENS: clsge_StructureSectionTypeEN,
): clsge_StructureSectionTypeENEx {
  const strThisFuncName = ge_StructureSectionTypeEx_CopyToEx.name;
  const objge_StructureSectionTypeENT = new clsge_StructureSectionTypeENEx();
  try {
    ObjectAssign(objge_StructureSectionTypeENT, objge_StructureSectionTypeENS);
    return objge_StructureSectionTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StructureSectionTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_StructureSectionTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_StructureSectionTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_StructureSectionTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_StructureSectionTypeObjLst = await ge_StructureSectionType_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_StructureSectionTypeExObjLst = arrge_StructureSectionTypeObjLst.map(
    ge_StructureSectionTypeEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrge_StructureSectionTypeExObjLst) {
      const conFuncMap = await ge_StructureSectionTypeEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrge_StructureSectionTypeExObjLst.length == 0) return arrge_StructureSectionTypeExObjLst;
  let arrge_StructureSectionType_Sel: Array<clsge_StructureSectionTypeENEx> =
    arrge_StructureSectionTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_StructureSectionType_Sel = arrge_StructureSectionType_Sel.sort(
        ge_StructureSectionTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrge_StructureSectionType_Sel = arrge_StructureSectionType_Sel.sort(objPagerPara.sortFun);
    }
    arrge_StructureSectionType_Sel = arrge_StructureSectionType_Sel.slice(intStart, intEnd);
    return arrge_StructureSectionType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_StructureSectionTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_StructureSectionTypeENEx>();
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
export function ge_StructureSectionTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_StructureSectionType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_StructureSectionType_SortFunByKey(strKey, AscOrDesc);
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
export function ge_StructureSectionTypeEx_FuncMapByFldName(
  strFldName: string,
  objge_StructureSectionTypeEx: clsge_StructureSectionTypeENEx,
) {
  const strThisFuncName = ge_StructureSectionTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsge_StructureSectionTypeEN.AttributeName;
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
export async function ge_StructureSectionTypeEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return ge_StructureSectionType_FilterFunByKey(strKey, value);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_StructureSectionTypeEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsge_StructureSectionTypeENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrge_StructureSectionTypeObjLst = await ge_StructureSectionType_GetObjLstCache(
    strCourseId,
  );
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsge_StructureSectionTypeENEx>();
  const arrge_StructureSectionTypeExObjLst = arrge_StructureSectionTypeObjLst.map((obj) => {
    const cacheKey = `${obj.sectionTypeId}_${obj.courseId}`;
    if (ge_StructureSectionTypeCache[cacheKey]) {
      const oldObj = ge_StructureSectionTypeCache[cacheKey];
      return oldObj;
    } else {
      const newObj = ge_StructureSectionTypeEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      ge_StructureSectionTypeCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await ge_StructureSectionTypeEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsge_StructureSectionTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrge_StructureSectionTypeExObjLst) {
      await ge_StructureSectionTypeEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.sectionTypeId}_${newObj.courseId}`;
      ge_StructureSectionTypeCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrge_StructureSectionTypeExObjLst.length == 0) return arrge_StructureSectionTypeExObjLst;
  let arrge_StructureSectionTypeSel: Array<clsge_StructureSectionTypeENEx> =
    arrge_StructureSectionTypeExObjLst;
  const objge_StructureSectionTypeCond = objPagerPara.conditionCollection;
  if (objge_StructureSectionTypeCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrge_StructureSectionTypeExObjLst;
  }
  try {
    for (const objCondition of objge_StructureSectionTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrge_StructureSectionTypeSel.length == 0) return arrge_StructureSectionTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.sort(
        ge_StructureSectionTypeEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.sort(objPagerPara.sortFun);
    }
    arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.slice(intStart, intEnd);
    return arrge_StructureSectionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_StructureSectionTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_StructureSectionTypeENEx>();
}

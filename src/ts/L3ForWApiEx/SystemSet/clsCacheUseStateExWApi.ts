﻿/**
 * 类名:clsCacheUseStateExWApi
 * 表名:CacheUseState(01120689)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/04 17:33:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 缓存使用状态(CacheUseState)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  CacheUseState_GetObjLstCache,
  CacheUseState_GetObjLstAsync,
  CacheUseState_SortFunByKey,
  CacheUseState_FilterFunByKey,
} from '@/ts/L3ForWApi/SystemSet/clsCacheUseStateWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';
import { clsCacheUseStateENEx } from '@/ts/L0Entity/SystemSet/clsCacheUseStateENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const cacheUseStateExController = 'CacheUseStateExApi';
export const cacheUseStateEx_ConstructorName = 'cacheUseStateEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CacheUseStateEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objCacheUseStateENS:源对象
 * @returns 目标对象=>clsCacheUseStateEN:objCacheUseStateENT
 **/
export function CacheUseStateEx_CopyToEx(
  objCacheUseStateENS: clsCacheUseStateEN,
): clsCacheUseStateENEx {
  const strThisFuncName = CacheUseStateEx_CopyToEx.name;
  const objCacheUseStateENT = new clsCacheUseStateENEx();
  try {
    ObjectAssign(objCacheUseStateENT, objCacheUseStateENS);
    return objCacheUseStateENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cacheUseStateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCacheUseStateENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CacheUseStateEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCacheUseStateENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCacheUseStateObjLst = await CacheUseState_GetObjLstAsync(objPagerPara.whereCond);
  const arrCacheUseStateExObjLst = arrCacheUseStateObjLst.map(CacheUseStateEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCacheUseStateEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCacheUseStateExObjLst) {
      await CacheUseStateEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCacheUseStateExObjLst.length == 0) return arrCacheUseStateExObjLst;
  let arrCacheUseStateSel: Array<clsCacheUseStateENEx> = arrCacheUseStateExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCacheUseStateSel = arrCacheUseStateSel.sort(
        CacheUseStateEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCacheUseStateSel = arrCacheUseStateSel.sort(objPagerPara.sortFun);
    }
    arrCacheUseStateSel = arrCacheUseStateSel.slice(intStart, intEnd);
    return arrCacheUseStateSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cacheUseStateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCacheUseStateENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CacheUseStateEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCacheUseStateENEx.con_CacheModeName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          return a.cacheModeName.localeCompare(b.cacheModeName);
        };
      case clsCacheUseStateENEx.con_CacheModeENName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          return a.cacheModeENName.localeCompare(b.cacheModeENName);
        };
      default:
        return CacheUseState_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCacheUseStateENEx.con_CacheModeName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          return b.cacheModeName.localeCompare(a.cacheModeName);
        };
      case clsCacheUseStateENEx.con_CacheModeENName:
        return (a: clsCacheUseStateENEx, b: clsCacheUseStateENEx) => {
          return b.cacheModeENName.localeCompare(a.cacheModeENName);
        };
      default:
        return CacheUseState_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CacheUseStateEx_FuncMapByFldName(
  strFldName: string,
  objCacheUseStateEx: clsCacheUseStateENEx,
) {
  const strThisFuncName = CacheUseStateEx_FuncMapByFldName.name;
  console.log(objCacheUseStateEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCacheUseStateEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
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
 * 日期:2024-02-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CacheUseStateEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsCacheUseStateENEx.con_CacheModeName:
      return (obj: clsCacheUseStateENEx) => {
        return obj.cacheModeName === value;
      };
    case clsCacheUseStateENEx.con_CacheModeENName:
      return (obj: clsCacheUseStateENEx) => {
        return obj.cacheModeENName === value;
      };
    default:
      return CacheUseState_FilterFunByKey(strKey, value);
  }
}

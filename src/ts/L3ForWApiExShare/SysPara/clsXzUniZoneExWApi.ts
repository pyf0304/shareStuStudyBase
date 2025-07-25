﻿/**
 * 类名:clsXzUniZoneExWApi
 * 表名:XzUniZone(01120095)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/25 14:21:15
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 校区(XzUniZone)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2023年08月25日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  XzUniZone_GetObjLstCache,
  XzUniZone_GetObjLstAsync,
  XzUniZone_SortFunByKey,
} from '@/ts/L3ForWApi/SysPara/clsXzUniZoneWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsXzUniZoneEN } from '@/ts/L0Entity/SysPara/clsXzUniZoneEN';
import { clsXzUniZoneENEx } from '@/ts/L0Entity/SysPara/clsXzUniZoneENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const xzUniZoneExController = 'XzUniZoneExApi';
export const xzUniZoneEx_ConstructorName = 'xzUniZoneEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function XzUniZoneEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objXzUniZoneENS:源对象
 * @returns 目标对象=>clsXzUniZoneEN:objXzUniZoneENT
 **/
export function XzUniZoneEx_CopyToEx(objXzUniZoneENS: clsXzUniZoneEN): clsXzUniZoneENEx {
  const strThisFuncName = XzUniZoneEx_CopyToEx.name;
  const objXzUniZoneENT = new clsXzUniZoneENEx();
  try {
    ObjectAssign(objXzUniZoneENT, objXzUniZoneENS);
    return objXzUniZoneENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      xzUniZoneEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objXzUniZoneENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function XzUniZoneEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzUniZoneENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrXzUniZoneObjLst = await XzUniZone_GetObjLstAsync(objPagerPara.whereCond);
  const arrXzUniZoneExObjLst = arrXzUniZoneObjLst.map(XzUniZoneEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsXzUniZoneEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrXzUniZoneExObjLst) {
      await XzUniZoneEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrXzUniZoneExObjLst.length == 0) return arrXzUniZoneExObjLst;
  let arrXzUniZoneSel: Array<clsXzUniZoneENEx> = arrXzUniZoneExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzUniZoneSel = arrXzUniZoneSel.sort(XzUniZoneEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzUniZoneSel = arrXzUniZoneSel.sort(objPagerPara.sortFun);
    }
    arrXzUniZoneSel = arrXzUniZoneSel.slice(intStart, intEnd);
    return arrXzUniZoneSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzUniZoneEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzUniZoneENEx>();
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
export function XzUniZoneEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return XzUniZone_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return XzUniZone_SortFunByKey(strKey, AscOrDesc);
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
export function XzUniZoneEx_FuncMapByFldName(strFldName: string, objXzUniZoneEx: clsXzUniZoneENEx) {
  const strThisFuncName = XzUniZoneEx_FuncMapByFldName.name;
  console.log(objXzUniZoneEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsXzUniZoneEN.AttributeName;
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

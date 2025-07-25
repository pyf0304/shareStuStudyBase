﻿/**
 * 类名:clscc_ExcellentTypeExWApi
 * 表名:cc_ExcellentType(01120062)
 * 生成代码版本:2022.11.10.1
 * 生成日期:2022/11/10 18:44:47
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 精品课程类型(cc_ExcellentType)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月10日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { cc_ExcellentType_GetObjLstCache } from '@/ts/L3ForWApi/CourseLearning/clscc_ExcellentTypeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clscc_ExcellentTypeEN } from '@/ts/L0Entity/CourseLearning/clscc_ExcellentTypeEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_ExcellentTypeENEx } from '@/ts/L0Entity/CourseLearning/clscc_ExcellentTypeENEx';
import { cc_ExcellentType_GetObjLstAsync } from '@/ts/L3ForWApi/CourseLearning/clscc_ExcellentTypeWApi';
import { cc_ExcellentType_SortFunByKey } from '@/ts/L3ForWApi/CourseLearning/clscc_ExcellentTypeWApi';
import { Format } from '@/ts/PubFun/clsString';
import { cc_ExcellentType_FilterFunByKey } from '@/ts/L3ForWApi/CourseLearning/clscc_ExcellentTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
export const cc_ExcellentTypeEx_Controller = 'cc_ExcellentTypeExApi';
export const cc_ExcellentTypeEx_ConstructorName = 'cc_ExcellentTypeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_ExcellentTypeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objcc_ExcellentTypeENS:源对象
 * @returns 目标对象=>clscc_ExcellentTypeEN:objcc_ExcellentTypeENT
 **/
export function cc_ExcellentTypeEx_CopyToEx(
  objcc_ExcellentTypeENS: clscc_ExcellentTypeEN,
): clscc_ExcellentTypeENEx {
  const strThisFuncName = cc_ExcellentTypeEx_CopyToEx.name;
  const objcc_ExcellentTypeENT = new clscc_ExcellentTypeENEx();
  try {
    ObjectAssign(objcc_ExcellentTypeENT, objcc_ExcellentTypeENS);
    return objcc_ExcellentTypeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExcellentTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_ExcellentTypeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_ExcellentTypeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ExcellentTypeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_ExcellentTypeObjLst = await cc_ExcellentType_GetObjLstAsync(objPagerPara.whereCond);
  const arrcc_ExcellentTypeExObjLst = arrcc_ExcellentTypeObjLst.map(cc_ExcellentTypeEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrcc_ExcellentTypeExObjLst) {
      const conFuncMap = await cc_ExcellentTypeEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrcc_ExcellentTypeExObjLst.length == 0) return arrcc_ExcellentTypeExObjLst;
  let arrcc_ExcellentType_Sel: Array<clscc_ExcellentTypeENEx> = arrcc_ExcellentTypeExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExcellentType_Sel = arrcc_ExcellentType_Sel.sort(
        cc_ExcellentTypeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcc_ExcellentType_Sel = arrcc_ExcellentType_Sel.sort(objPagerPara.sortFun);
    }
    arrcc_ExcellentType_Sel = arrcc_ExcellentType_Sel.slice(intStart, intEnd);
    return arrcc_ExcellentType_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExcellentTypeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExcellentTypeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_ExcellentTypeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return cc_ExcellentType_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return cc_ExcellentType_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_ExcellentTypeEx_FuncMapByFldName(
  strFldName: string,
  objcc_ExcellentTypeEx: clscc_ExcellentTypeENEx,
) {
  const strThisFuncName = cc_ExcellentTypeEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscc_ExcellentTypeEN.AttributeName;
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
 * 日期:2022-11-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_ExcellentTypeEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return cc_ExcellentType_FilterFunByKey(strKey, value);
  }
}

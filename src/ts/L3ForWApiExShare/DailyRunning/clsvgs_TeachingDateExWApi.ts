/**
 * 类名:clsvgs_TeachingDateExWApi
 * 表名:vgs_TeachingDate(01120687)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/01 10:22:16
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vgs_TeachingDate(vgs_TeachingDate)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月01日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vgs_TeachingDate_GetObjLstAsync,
  vgs_TeachingDate_SortFunByKey,
} from '@/ts/L3ForWApi/DailyRunning/clsvgs_TeachingDateWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsvgs_TeachingDateEN';
import { clsvgs_TeachingDateENEx } from '@/ts/L0Entity/DailyRunning/clsvgs_TeachingDateENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { gs_TeachingDate_FuncMapByFldName } from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';

export const vgs_TeachingDateExController = 'vgs_TeachingDateExApi';
export const vgs_TeachingDateEx_ConstructorName = 'vgs_TeachingDateEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vgs_TeachingDateEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvgs_TeachingDateENS:源对象
 * @returns 目标对象=>clsvgs_TeachingDateEN:objvgs_TeachingDateENT
 **/
export function vgs_TeachingDateEx_CopyToEx(
  objvgs_TeachingDateENS: clsvgs_TeachingDateEN,
): clsvgs_TeachingDateENEx {
  const strThisFuncName = vgs_TeachingDateEx_CopyToEx.name;
  const objvgs_TeachingDateENT = new clsvgs_TeachingDateENEx();
  try {
    ObjectAssign(objvgs_TeachingDateENT, objvgs_TeachingDateENS);
    return objvgs_TeachingDateENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vgs_TeachingDateEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvgs_TeachingDateENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-01
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vgs_TeachingDateEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vgs_TeachingDate_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vgs_TeachingDate_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

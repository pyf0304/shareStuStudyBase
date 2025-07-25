/**
 * 类名:clsge_DifficultyLevelExWApi
 * 表名:ge_DifficultyLevel(01120905)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:08:27
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 难度等级表(ge_DifficultyLevel)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ge_DifficultyLevel_GetObjLstCache,
  ge_DifficultyLevel_SortFunByKey,
} from '@/ts/L3ForWApi/SystemSet/clsge_DifficultyLevelWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsge_DifficultyLevelEN } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelEN';
import { clsge_DifficultyLevelENEx } from '@/ts/L0Entity/SystemSet/clsge_DifficultyLevelENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const ge_DifficultyLevelExController = 'ge_DifficultyLevelExApi';
export const ge_DifficultyLevelEx_ConstructorName = 'ge_DifficultyLevelEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_DifficultyLevelEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
 * @param objge_DifficultyLevelENS:源对象
 * @returns 目标对象=>clsge_DifficultyLevelEN:objge_DifficultyLevelENT
 **/
export function ge_DifficultyLevelEx_CopyToEx(
  objge_DifficultyLevelENS: clsge_DifficultyLevelEN,
): clsge_DifficultyLevelENEx {
  const strThisFuncName = ge_DifficultyLevelEx_CopyToEx.name;
  const objge_DifficultyLevelENT = new clsge_DifficultyLevelENEx();
  try {
    ObjectAssign(objge_DifficultyLevelENT, objge_DifficultyLevelENS);
    return objge_DifficultyLevelENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_DifficultyLevelEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_DifficultyLevelENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_DifficultyLevelEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return ge_DifficultyLevel_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return ge_DifficultyLevel_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_DifficultyLevelEx_FuncMapByFldName(
  strFldName: string,
  objge_DifficultyLevelEx: clsge_DifficultyLevelENEx,
) {
  const strThisFuncName = ge_DifficultyLevelEx_FuncMapByFldName.name;
  console.log(objge_DifficultyLevelEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_DifficultyLevelEN.AttributeName;
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

/**
 * 类名:clsvCurrEduCls_SimExWApi
 * 表名:vCurrEduCls_Sim(01120951)
 * 版本:2024.11.28.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/04 15:48:43
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vCurrEduCls_Sim(vCurrEduCls_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年12月04日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vCurrEduCls_Sim_GetObjLstCache,
  vCurrEduCls_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvCurrEduCls_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN';
import { clsvCurrEduCls_SimENEx } from '@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vCurrEduCls_SimExController = 'vCurrEduCls_SimExApi';
export const vCurrEduCls_SimEx_ConstructorName = 'vCurrEduCls_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vCurrEduCls_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvCurrEduCls_SimENS:源对象
 * @returns 目标对象=>clsvCurrEduCls_SimEN:objvCurrEduCls_SimENT
 **/
export function vCurrEduCls_SimEx_CopyToEx(
  objvCurrEduCls_SimENS: clsvCurrEduCls_SimEN,
): clsvCurrEduCls_SimENEx {
  const strThisFuncName = vCurrEduCls_SimEx_CopyToEx.name;
  const objvCurrEduCls_SimENT = new clsvCurrEduCls_SimENEx();
  try {
    ObjectAssign(objvCurrEduCls_SimENT, objvCurrEduCls_SimENS);
    return objvCurrEduCls_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vCurrEduCls_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvCurrEduCls_SimENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCurrEduCls_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vCurrEduCls_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vCurrEduCls_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-12-04
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vCurrEduCls_SimEx_FuncMapByFldName(
  strFldName: string,
  objvCurrEduCls_SimEx: clsvCurrEduCls_SimENEx,
) {
  const strThisFuncName = vCurrEduCls_SimEx_FuncMapByFldName.name;
  console.log(objvCurrEduCls_SimEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvCurrEduCls_SimEN.AttributeName;
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

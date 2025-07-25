/**
 * 类名:clsvStudentInfo_SimExWApi
 * 表名:vStudentInfo_Sim(01120945)
 * 版本:2024.11.10.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/11 01:23:03
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vStudentInfo_Sim(vStudentInfo_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月11日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vStudentInfo_Sim_GetObjLstCache,
  vStudentInfo_Sim_SortFunByKey,
  vStudentInfo_Sim_FilterFunByKey,
} from '@/ts/L3ForWApi/UserManage/clsvStudentInfo_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvStudentInfo_SimEN } from '@/ts/L0Entity/UserManage/clsvStudentInfo_SimEN';
import { clsvStudentInfo_SimENEx } from '@/ts/L0Entity/UserManage/clsvStudentInfo_SimENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vStudentInfo_SimExController = 'vStudentInfo_SimExApi';
export const vStudentInfo_SimEx_ConstructorName = 'vStudentInfo_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vStudentInfo_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvStudentInfo_SimENS:源对象
 * @returns 目标对象=>clsvStudentInfo_SimEN:objvStudentInfo_SimENT
 **/
export function vStudentInfo_SimEx_CopyToEx(
  objvStudentInfo_SimENS: clsvStudentInfo_SimEN,
): clsvStudentInfo_SimENEx {
  const strThisFuncName = vStudentInfo_SimEx_CopyToEx.name;
  const objvStudentInfo_SimENT = new clsvStudentInfo_SimENEx();
  try {
    ObjectAssign(objvStudentInfo_SimENT, objvStudentInfo_SimENS);
    return objvStudentInfo_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vStudentInfo_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvStudentInfo_SimENT;
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vStudentInfo_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvStudentInfo_SimENEx.con_IdCurrEduCls:
        return (a: clsvStudentInfo_SimENEx, b: clsvStudentInfo_SimENEx) => {
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        return vStudentInfo_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvStudentInfo_SimENEx.con_IdCurrEduCls:
        return (a: clsvStudentInfo_SimENEx, b: clsvStudentInfo_SimENEx) => {
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        return vStudentInfo_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vStudentInfo_SimEx_FuncMapByFldName(
  strFldName: string,
  objvStudentInfo_SimEx: clsvStudentInfo_SimENEx,
) {
  const strThisFuncName = vStudentInfo_SimEx_FuncMapByFldName.name;
  console.log(objvStudentInfo_SimEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvStudentInfo_SimEN.AttributeName;
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
 * 日期:2024-11-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vStudentInfo_SimEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsvStudentInfo_SimENEx.con_IdCurrEduCls:
      return (obj: clsvStudentInfo_SimENEx) => {
        return obj.idCurrEduCls === value;
      };
    default:
      return vStudentInfo_Sim_FilterFunByKey(strKey, value);
  }
}

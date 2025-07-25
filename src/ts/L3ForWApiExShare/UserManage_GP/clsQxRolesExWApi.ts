/**
 * 类名:clsQxRolesExWApi
 * 表名:QxRoles(00140014)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/09 22:29:10
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色(QxRoles)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年03月09日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxRoles_GetObjLstCache,
  QxRoles_GetObjLstByPagerAsync,
  QxRoles_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { clsQxRolesENEx } from '@/ts/L0Entity/UserManage_GP/clsQxRolesENEx';
import { UserType_func, UserType_funcKey } from '@/ts/L3ForWApi/UserManage/clsUserTypeWApi';
import { clsUserTypeEN } from '@/ts/L0Entity/UserManage/clsUserTypeEN';
import { RoleType_func, RoleType_funcKey } from '@/ts/L3ForWApi/UserManage_GP/clsRoleTypeWApi';
import { clsRoleTypeEN } from '@/ts/L0Entity/UserManage_GP/clsRoleTypeEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const qxRolesEx_Controller = 'QxRolesExApi';
export const qxRolesEx_ConstructorName = 'qxRolesEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxRolesEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxRolesENS:源对象
 * @returns 目标对象=>clsQxRolesEN:objQxRolesENT
 **/
export function QxRolesEx_CopyToEx(objQxRolesENS: clsQxRolesEN): clsQxRolesENEx {
  const strThisFuncName = QxRolesEx_CopyToEx.name;
  const objQxRolesENT = new clsQxRolesENEx();
  try {
    ObjectAssign(objQxRolesENT, objQxRolesENS);
    return objQxRolesENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxRolesENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRolesEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRolesENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxRolesObjLst = await QxRoles_GetObjLstByPagerAsync(objPagerPara);
  const arrQxRolesExObjLst = arrQxRolesObjLst.map(QxRolesEx_CopyToEx);
  if (arrQxRolesExObjLst.length == 0) return arrQxRolesExObjLst;
  let arrQxRolesSel: Array<clsQxRolesENEx> = arrQxRolesExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxRolesSel = arrQxRolesSel.sort(QxRolesEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxRolesSel = arrQxRolesSel.sort(objPagerPara.sortFun);
    }
    return arrQxRolesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRolesENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapUserTypeName(objQxRoles: clsQxRolesENEx) {
  const strThisFuncName = QxRolesEx_FuncMapUserTypeName.name;
  try {
    if (IsNullOrEmpty(objQxRoles.userTypeName) == true) {
      const UserTypeUserTypeId = objQxRoles.userTypeId;
      const UserTypeUserTypeName = await UserType_func(
        clsUserTypeEN.con_UserTypeId,
        clsUserTypeEN.con_UserTypeName,
        UserTypeUserTypeId,
      );
      objQxRoles.userTypeName = UserTypeUserTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000991)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapUserTypeNameSim(objQxRoles: clsQxRolesENEx) {
  const strThisFuncName = QxRolesEx_FuncMapUserTypeNameSim.name;
  try {
    if (IsNullOrEmpty(objQxRoles.userTypeNameSim) == true) {
      const UserTypeUserTypeId = objQxRoles.userTypeId;
      const UserTypeUserTypeNameSim = await UserType_func(
        clsUserTypeEN.con_UserTypeId,
        clsUserTypeEN.con_UserTypeNameSim,
        UserTypeUserTypeId,
      );
      objQxRoles.userTypeNameSim = UserTypeUserTypeNameSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000992)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapRoleTypeName(objQxRoles: clsQxRolesENEx) {
  const strThisFuncName = QxRolesEx_FuncMapRoleTypeName.name;
  try {
    if (IsNullOrEmpty(objQxRoles.roleTypeName) == true) {
      const RoleTypeRoleTypeId = objQxRoles.roleTypeId;
      const RoleTypeRoleTypeName = await RoleType_func(
        clsRoleTypeEN.con_RoleTypeId,
        clsRoleTypeEN.con_RoleTypeName,
        RoleTypeRoleTypeId,
      );
      objQxRoles.roleTypeName = RoleTypeRoleTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001021)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRolesEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxRolesENEx.con_UserTypeName:
        return (a: clsQxRolesENEx, b: clsQxRolesENEx) => {
          return a.userTypeName.localeCompare(b.userTypeName);
        };
      case clsQxRolesENEx.con_UserTypeNameSim:
        return (a: clsQxRolesENEx, b: clsQxRolesENEx) => {
          return a.userTypeNameSim.localeCompare(b.userTypeNameSim);
        };
      case clsQxRolesENEx.con_RoleTypeName:
        return (a: clsQxRolesENEx, b: clsQxRolesENEx) => {
          return a.roleTypeName.localeCompare(b.roleTypeName);
        };
      default:
        return QxRoles_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxRolesENEx.con_UserTypeName:
        return (a: clsQxRolesENEx, b: clsQxRolesENEx) => {
          return b.userTypeName.localeCompare(a.userTypeName);
        };
      case clsQxRolesENEx.con_UserTypeNameSim:
        return (a: clsQxRolesENEx, b: clsQxRolesENEx) => {
          return b.userTypeNameSim.localeCompare(a.userTypeNameSim);
        };
      case clsQxRolesENEx.con_RoleTypeName:
        return (a: clsQxRolesENEx, b: clsQxRolesENEx) => {
          return b.roleTypeName.localeCompare(a.roleTypeName);
        };
      default:
        return QxRoles_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-03-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxRolesEx_FuncMapByFldName(strFldName: string, objQxRolesEx: clsQxRolesENEx) {
  const strThisFuncName = QxRolesEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxRolesEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxRolesENEx.con_UserTypeName:
      return QxRolesEx_FuncMapUserTypeName(objQxRolesEx);
    case clsQxRolesENEx.con_UserTypeNameSim:
      return QxRolesEx_FuncMapUserTypeNameSim(objQxRolesEx);
    case clsQxRolesENEx.con_RoleTypeName:
      return QxRolesEx_FuncMapRoleTypeName(objQxRolesEx);
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapKeyUserTypeName(
  objQxRoles: clsQxRolesENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRolesEx_FuncMapKeyUserTypeName.name;
  try {
    if (IsNullOrEmpty(objQxRoles.userTypeName) == true) return [];
    const UserTypeUserTypeName = objQxRoles.userTypeName;
    const arrUserTypeId = await UserType_funcKey(
      clsUserTypeEN.con_UserTypeName,
      UserTypeUserTypeName,
      enumComparisonOp.Like_03,
    );
    return arrUserTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000993)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapKeyUserTypeNameSim(
  objQxRoles: clsQxRolesENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRolesEx_FuncMapKeyUserTypeNameSim.name;
  try {
    if (IsNullOrEmpty(objQxRoles.userTypeNameSim) == true) return [];
    const UserTypeUserTypeNameSim = objQxRoles.userTypeNameSim;
    const arrUserTypeId = await UserType_funcKey(
      clsUserTypeEN.con_UserTypeNameSim,
      UserTypeUserTypeNameSim,
      enumComparisonOp.Like_03,
    );
    return arrUserTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000994)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRolesS:源对象
 **/
export async function QxRolesEx_FuncMapKeyRoleTypeName(
  objQxRoles: clsQxRolesENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRolesEx_FuncMapKeyRoleTypeName.name;
  try {
    if (IsNullOrEmpty(objQxRoles.roleTypeName) == true) return [];
    const RoleTypeRoleTypeName = objQxRoles.roleTypeName;
    const arrRoleTypeId = await RoleType_funcKey(
      clsRoleTypeEN.con_RoleTypeName,
      RoleTypeRoleTypeName,
      enumComparisonOp.Like_03,
    );
    return arrRoleTypeId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001022)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRolesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

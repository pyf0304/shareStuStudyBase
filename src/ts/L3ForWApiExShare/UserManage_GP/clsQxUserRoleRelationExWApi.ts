/**
 * 类名:clsQxUserRoleRelationExWApi
 * 表名:QxUserRoleRelation(00140013)
 * 版本:2024.11.13.2(服务器:WIN-SRV103-116)
 * 日期:2024/11/16 09:29:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433MSEduSys
 * PrjDataBaseId:0199
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户角色关系(QxUserRoleRelation)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月16日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxUserRoleRelation_GetObjLstByPagerAsync,
  QxUserRoleRelation_SortFunByKey,
  QxUserRoleRelation_GetObjLstAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUserRoleRelationWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserRoleRelationEN';
import { clsQxUserRoleRelationENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUserRoleRelationENEx';
import {
  vQxUsersSim_func,
  vQxUsersSim_funcKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsvQxUsersSimWApi';
import { clsvQxUsersSimEN } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSimEN';
import {
  QxDepartmentInfo_func,
  QxDepartmentInfo_funcKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxDepartmentInfoWApi';
import { clsQxDepartmentInfoEN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoEN';
import {
  QxDepartmentType_func,
  QxDepartmentType_funcKey,
} from '@/ts/L3ForWApi/SysPara/clsQxDepartmentTypeWApi';
import { clsQxDepartmentTypeEN } from '@/ts/L0Entity/SysPara/clsQxDepartmentTypeEN';
import { QxRoles_func, QxRoles_funcKey } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { QxProjects_func, QxProjects_funcKey } from '@/ts/L3ForWApi/PrjManage_GP/clsQxProjectsWApi';
import { clsQxProjectsEN } from '@/ts/L0Entity/PrjManage_GP/clsQxProjectsEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi, GetWebApiUrl_GP } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import axios from 'axios';
import { XzSchool_func } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';

export const qxUserRoleRelationEx_Controller = 'QxUserRoleRelationExApi';
export const qxUserRoleRelationEx_ConstructorName = 'qxUserRoleRelationEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxUserRoleRelationEx_GetWebApiUrl(
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
 * @param objQxUserRoleRelationENS:源对象
 * @returns 目标对象=>clsQxUserRoleRelationEN:objQxUserRoleRelationENT
 **/
export function QxUserRoleRelationEx_CopyToEx(
  objQxUserRoleRelationENS: clsQxUserRoleRelationEN,
): clsQxUserRoleRelationENEx {
  const strThisFuncName = QxUserRoleRelationEx_CopyToEx.name;
  const objQxUserRoleRelationENT = new clsQxUserRoleRelationENEx();
  try {
    ObjectAssign(objQxUserRoleRelationENT, objQxUserRoleRelationENS);
    return objQxUserRoleRelationENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUserRoleRelationENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUserRoleRelationEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUserRoleRelationENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxUserRoleRelationObjLst = await QxUserRoleRelation_GetObjLstByPagerAsync(objPagerPara);
  const arrQxUserRoleRelationExObjLst = arrQxUserRoleRelationObjLst.map(
    QxUserRoleRelationEx_CopyToEx,
  );
  if (arrQxUserRoleRelationExObjLst.length == 0) return arrQxUserRoleRelationExObjLst;
  let arrQxUserRoleRelationSel: Array<clsQxUserRoleRelationENEx> = arrQxUserRoleRelationExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUserRoleRelationSel = arrQxUserRoleRelationSel.sort(
        QxUserRoleRelationEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxUserRoleRelationSel = arrQxUserRoleRelationSel.sort(objPagerPara.sortFun);
    }
    return arrQxUserRoleRelationSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUserRoleRelationENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapDepartmentName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapDepartmentName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.departmentName) == true) {
      const vQxUsersSimUserId = objQxUserRoleRelation.userId;
      const vQxUsersSimDepartmentId = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_DepartmentId,
        vQxUsersSimUserId,
      );
      const QxDepartmentInfoDepartmentId = vQxUsersSimDepartmentId;
      const QxDepartmentInfoDepartmentName = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_DepartmentName,
        QxDepartmentInfoDepartmentId,
      );
      objQxUserRoleRelation.departmentName = QxDepartmentInfoDepartmentName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000616)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapDepartmentTypeName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapDepartmentTypeName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.departmentTypeName) == true) {
      const vQxUsersSimUserId = objQxUserRoleRelation.userId;
      const vQxUsersSimDepartmentId = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_DepartmentId,
        vQxUsersSimUserId,
      );
      const QxDepartmentInfoDepartmentId = vQxUsersSimDepartmentId;
      const QxDepartmentInfoDepartmentTypeId = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_DepartmentTypeId,
        QxDepartmentInfoDepartmentId,
      );
      const QxDepartmentTypeDepartmentTypeId = QxDepartmentInfoDepartmentTypeId;
      const QxDepartmentTypeDepartmentTypeName = await QxDepartmentType_func(
        clsQxDepartmentTypeEN.con_DepartmentTypeId,
        clsQxDepartmentTypeEN.con_DepartmentTypeName,
        QxDepartmentTypeDepartmentTypeId,
      );
      objQxUserRoleRelation.departmentTypeName = QxDepartmentTypeDepartmentTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000617)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapRoleName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapRoleName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.roleName) == true) {
      const QxRolesRoleId = objQxUserRoleRelation.roleId;
      const QxRolesRoleName = await QxRoles_func(
        clsQxRolesEN.con_RoleId,
        clsQxRolesEN.con_RoleName,
        QxRolesRoleId,
        objQxUserRoleRelation.qxPrjId,
      );
      objQxUserRoleRelation.roleName = QxRolesRoleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000575)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapUserName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.userName) == true) {
      const vQxUsersSimUserId = objQxUserRoleRelation.userId;
      const vQxUsersSimUserName = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_UserName,
        vQxUsersSimUserId,
      );
      objQxUserRoleRelation.userName = vQxUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapPrjName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.prjName) == true) {
      const QxProjectsQxPrjId = objQxUserRoleRelation.qxPrjId;
      const QxProjectsPrjName = await QxProjects_func(
        clsQxProjectsEN.con_QxPrjId,
        clsQxProjectsEN.con_PrjName,
        QxProjectsQxPrjId,
      );
      objQxUserRoleRelation.prjName = QxProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000583)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapDepartmentId(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapDepartmentId.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.departmentId) == true) {
      const vQxUsersSimUserId = objQxUserRoleRelation.userId;
      const vQxUsersSimDepartmentId = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_DepartmentId,
        vQxUsersSimUserId,
      );
      objQxUserRoleRelation.departmentId = vQxUsersSimDepartmentId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000639)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapOrderNum(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapOrderNum.name;
  try {
    if (objQxUserRoleRelation.orderNum == 0) {
      const vQxUsersSimUserId = objQxUserRoleRelation.userId;
      const vQxUsersSimDepartmentId = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_DepartmentId,
        vQxUsersSimUserId,
      );
      const QxDepartmentInfoDepartmentId = vQxUsersSimDepartmentId;
      const QxDepartmentInfoOrderNum = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_OrderNum,
        QxDepartmentInfoDepartmentId,
      );
      objQxUserRoleRelation.orderNum = QxDepartmentInfoOrderNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000577)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapDepartmentAbbrName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapDepartmentAbbrName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.departmentAbbrName) == true) {
      const vQxUsersSimUserId = objQxUserRoleRelation.userId;
      const vQxUsersSimDepartmentId = await vQxUsersSim_func(
        clsvQxUsersSimEN.con_UserId,
        clsvQxUsersSimEN.con_DepartmentId,
        vQxUsersSimUserId,
      );
      const QxDepartmentInfoDepartmentId = vQxUsersSimDepartmentId;
      const QxDepartmentInfoDepartmentAbbrName = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_DepartmentAbbrName,
        QxDepartmentInfoDepartmentId,
      );
      objQxUserRoleRelation.departmentAbbrName = QxDepartmentInfoDepartmentAbbrName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000640)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-31
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUserRoleRelationEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxUserRoleRelationENEx.con_DepartmentName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return a.departmentName.localeCompare(b.departmentName);
        };
      case clsQxUserRoleRelationENEx.con_DepartmentTypeName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return a.departmentTypeName.localeCompare(b.departmentTypeName);
        };
      case clsQxUserRoleRelationENEx.con_RoleName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return a.roleName.localeCompare(b.roleName);
        };
      case clsQxUserRoleRelationENEx.con_UserName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsQxUserRoleRelationENEx.con_PrjName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      case clsQxUserRoleRelationENEx.con_DepartmentId:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return a.departmentId.localeCompare(b.departmentId);
        };
      case clsQxUserRoleRelationENEx.con_OrderNum:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return a.orderNum - b.orderNum;
        };
      case clsQxUserRoleRelationENEx.con_DepartmentAbbrName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return a.departmentAbbrName.localeCompare(b.departmentAbbrName);
        };
      default:
        return QxUserRoleRelation_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxUserRoleRelationENEx.con_DepartmentName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return b.departmentName.localeCompare(a.departmentName);
        };
      case clsQxUserRoleRelationENEx.con_DepartmentTypeName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return b.departmentTypeName.localeCompare(a.departmentTypeName);
        };
      case clsQxUserRoleRelationENEx.con_RoleName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return b.roleName.localeCompare(a.roleName);
        };
      case clsQxUserRoleRelationENEx.con_UserName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsQxUserRoleRelationENEx.con_PrjName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      case clsQxUserRoleRelationENEx.con_DepartmentId:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return b.departmentId.localeCompare(a.departmentId);
        };
      case clsQxUserRoleRelationENEx.con_OrderNum:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return b.orderNum - a.orderNum;
        };
      case clsQxUserRoleRelationENEx.con_DepartmentAbbrName:
        return (a: clsQxUserRoleRelationENEx, b: clsQxUserRoleRelationENEx) => {
          return b.departmentAbbrName.localeCompare(a.departmentAbbrName);
        };
      default:
        return QxUserRoleRelation_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-31
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxUserRoleRelationEx_FuncMapByFldName(
  strFldName: string,
  objQxUserRoleRelationEx: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxUserRoleRelationEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxUserRoleRelationENEx.con_DepartmentName:
      return QxUserRoleRelationEx_FuncMapDepartmentName(objQxUserRoleRelationEx);
    case clsQxUserRoleRelationENEx.con_DepartmentTypeName:
      return QxUserRoleRelationEx_FuncMapDepartmentTypeName(objQxUserRoleRelationEx);
    case clsQxUserRoleRelationENEx.con_RoleName:
      return QxUserRoleRelationEx_FuncMapRoleName(objQxUserRoleRelationEx);
    case clsQxUserRoleRelationENEx.con_UserName:
      return QxUserRoleRelationEx_FuncMapUserName(objQxUserRoleRelationEx);
    case clsQxUserRoleRelationENEx.con_PrjName:
      return QxUserRoleRelationEx_FuncMapPrjName(objQxUserRoleRelationEx);
    case clsQxUserRoleRelationENEx.con_DepartmentId:
      return QxUserRoleRelationEx_FuncMapDepartmentId(objQxUserRoleRelationEx);
    case clsQxUserRoleRelationENEx.con_OrderNum:
      return QxUserRoleRelationEx_FuncMapOrderNum(objQxUserRoleRelationEx);
    case clsQxUserRoleRelationENEx.con_DepartmentAbbrName:
      return QxUserRoleRelationEx_FuncMapDepartmentAbbrName(objQxUserRoleRelationEx);
    case clsQxUserRoleRelationENEx.con_SchoolName:
      return QxUserRoleRelationEx_FuncMapSchoolName(objQxUserRoleRelationEx);
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
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapKeyDepartmentName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapKeyDepartmentName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.departmentName) == true) return [];
    const QxDepartmentInfoDepartmentName = objQxUserRoleRelation.departmentName;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_DepartmentName,
      QxDepartmentInfoDepartmentName,
      enumComparisonOp.Like_03,
    );
    const strDepartmentIdLst = arrDepartmentId;
    const arrUserId = await vQxUsersSim_funcKey(
      clsQxUsersEN.con_DepartmentId,
      strDepartmentIdLst,
      enumComparisonOp.In_04,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000399)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
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
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapKeyDepartmentTypeName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapKeyDepartmentTypeName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.departmentTypeName) == true) return [];
    const QxDepartmentTypeDepartmentTypeName = objQxUserRoleRelation.departmentTypeName;
    const arrDepartmentTypeId = await QxDepartmentType_funcKey(
      clsQxDepartmentTypeEN.con_DepartmentTypeName,
      QxDepartmentTypeDepartmentTypeName,
      enumComparisonOp.Like_03,
    );
    const strDepartmentTypeIdLst = arrDepartmentTypeId;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_DepartmentTypeId,
      strDepartmentTypeIdLst,
      enumComparisonOp.In_04,
    );
    const strDepartmentIdLst = arrDepartmentId;
    const arrUserId = await vQxUsersSim_funcKey(
      clsQxUsersEN.con_DepartmentId,
      strDepartmentIdLst,
      enumComparisonOp.In_04,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000400)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
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
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapKeyRoleName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapKeyRoleName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.roleName) == true) return [];
    const QxRolesRoleName = objQxUserRoleRelation.roleName;
    const arrRoleId = await QxRoles_funcKey(
      clsQxRolesEN.con_RoleName,
      QxRolesRoleName,
      objQxUserRoleRelation.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrRoleId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
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
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapKeyUserName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.userName) == true) return [];
    const QxUsersUserName = objQxUserRoleRelation.userName;
    const arrUserId = await vQxUsersSim_funcKey(
      clsQxUsersEN.con_UserName,
      QxUsersUserName,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000311)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
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
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapKeyPrjName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapKeyPrjName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.prjName) == true) return [];
    const QxProjectsPrjName = objQxUserRoleRelation.prjName;
    const arrQxPrjId = await QxProjects_funcKey(
      clsQxProjectsEN.con_PrjName,
      QxProjectsPrjName,
      enumComparisonOp.Like_03,
    );
    return arrQxPrjId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000286)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
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
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapKeyDepartmentId(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapKeyDepartmentId.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.departmentId) == true) return [];
    const QxUsersDepartmentId = objQxUserRoleRelation.departmentId;
    const arrUserId = await vQxUsersSim_funcKey(
      clsQxUsersEN.con_DepartmentId,
      QxUsersDepartmentId,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000513)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
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
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapKeyOrderNum(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapKeyOrderNum.name;
  try {
    if (objQxUserRoleRelation.orderNum == 0) return [];
    const QxDepartmentInfoOrderNum = objQxUserRoleRelation.orderNum;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_OrderNum,
      QxDepartmentInfoOrderNum,
      enumComparisonOp.Like_03,
    );
    const strDepartmentIdLst = arrDepartmentId;
    const arrUserId = await vQxUsersSim_funcKey(
      clsQxUsersEN.con_DepartmentId,
      strDepartmentIdLst,
      enumComparisonOp.In_04,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000324)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
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
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapKeyDepartmentAbbrName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapKeyDepartmentAbbrName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.departmentAbbrName) == true) return [];
    const QxDepartmentInfoDepartmentAbbrName = objQxUserRoleRelation.departmentAbbrName;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_DepartmentAbbrName,
      QxDepartmentInfoDepartmentAbbrName,
      enumComparisonOp.Like_03,
    );
    const strDepartmentIdLst = arrDepartmentId;
    const arrUserId = await vQxUsersSim_funcKey(
      clsQxUsersEN.con_DepartmentId,
      strDepartmentIdLst,
      enumComparisonOp.In_04,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000514)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(
  strUserId: string,
  strQxPrjId: string,
): Promise<Array<clsQxUserRoleRelationEN>> {
  const strThisFuncName = 'GetObjLstByUserIdAndPrjId';
  try {
    if (strUserId == '') {
      const strMsg = Format(
        '参数:[strUserId]不能为空!(In clsQxUserRoleRelationExWApi.GetObjLstByUserIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId == '') {
      const strMsg = Format(
        '参数:[strQxPrjId]不能为空!(In clsQxUserRoleRelationExWApi.GetObjLstByUserIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    const strWhere = `${clsQxUserRoleRelationEN.con_UserId} = '${strUserId}' and ${clsQxUserRoleRelationEN.con_QxPrjId} = '${strQxPrjId}'`;
    //console.log(returnObj);
    const arrObjLst = await QxUserRoleRelation_GetObjLstAsync(strWhere);
    return arrObjLst;
  } catch (error: any) {
    console.error(error);
    const strMsg = `获取对象列表时出错。${error}`;
    throw strMsg;
  }
}

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function QxUserRoleRelationEx_GetObjByUserIdAndRoleId(
  strUserId: string,
  strRoleId: string,
): Promise<clsQxUserRoleRelationEN | null> {
  const strThisFuncName = 'GetObjLstByUserIdAndPrjId';
  try {
    if (strUserId == '') {
      const strMsg = Format(
        '参数:[strUserId]不能为空!(In clsQxUserRoleRelationExWApi.GetObjLstByUserIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    if (strRoleId == '') {
      const strMsg = Format(
        '参数:[strRoleId]不能为空!(In clsQxUserRoleRelationExWApi.GetObjLstByUserIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    const strWhere = `${clsQxUserRoleRelationEN.con_UserId} = '${strUserId}' and ${clsQxUserRoleRelationEN.con_RoleId} = '${strRoleId}'`;
    //console.log(returnObj);
    const arrObjLst = await QxUserRoleRelation_GetObjLstAsync(strWhere);
    if (arrObjLst.length == 0) {
      return null;
    }
    return arrObjLst[0];
  } catch (error: any) {
    console.error(error);
    const strMsg = `获取对象列表时出错。${error}`;
    throw strMsg;
  }
}

/**
 * 为用户设置角色
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strRoleId: 角色Id
 * @returns 获取的相应对象列表
 */
export async function QxUserRoleRelationEx_AddRecord(
  strUserId: string,
  strRoleId: string,
  strOpUser: string,
): Promise<boolean> {
  const strThisFuncName = QxUserRoleRelationEx_AddRecord.name;
  const strAction = 'AddRecord';
  const strUrl = GetWebApiUrl_GP(qxUserRoleRelationEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strRoleId,
      strOpUser,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 为用户删除角色
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strRoleId: 角色Id
 * @returns 获取的相应对象列表
 */
export async function QxUserRoleRelationEx_DelRecord(
  strUserId: string,
  strRoleId: string,
): Promise<number> {
  const strThisFuncName = QxUserRoleRelationEx_DelRecord.name;
  const strAction = 'DelRecord';
  const strUrl = GetWebApiUrl_GP(qxUserRoleRelationEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strRoleId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 为用户角色设置学校
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strUserId: 用户Id
 * @param strRoleId: 角色Id
 * @param strIdSchool: 学校流水号
 * @returns 获取的相应对象列表
 */
export async function QxUserRoleRelationEx_SetIdSchool4RoleId(
  strPrjId: string,
  strUserId: string,
  strRoleId: string,
  strIdSchool: string,
): Promise<number> {
  const strThisFuncName = QxUserRoleRelationEx_SetIdSchool4RoleId.name;
  const strAction = 'SetIdSchool4RoleId';
  const strUrl = QxUserRoleRelationEx_GetWebApiUrl(qxUserRoleRelationEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strUserId,
      strRoleId,
      strIdSchool,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUserRoleRelationEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUserRoleRelationS:源对象
 **/
export async function QxUserRoleRelationEx_FuncMapSchoolName(
  objQxUserRoleRelation: clsQxUserRoleRelationENEx,
) {
  const strThisFuncName = QxUserRoleRelationEx_FuncMapSchoolName.name;
  try {
    if (IsNullOrEmpty(objQxUserRoleRelation.schoolName) == true) {
      const XzSchoolidSchool = objQxUserRoleRelation.idSchool;
      const XzSchoolSchoolName = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolName,
        XzSchoolidSchool,
      );
      objQxUserRoleRelation.schoolName = XzSchoolSchoolName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000621)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUserRoleRelationEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

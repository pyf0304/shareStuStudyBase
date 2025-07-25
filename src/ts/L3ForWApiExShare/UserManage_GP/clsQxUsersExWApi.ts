/**
 * 类名:clsQxUsersExWApi
 * 表名:QxUsers(00140015)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/02 10:37:45
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户(QxUsers)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月02日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/

import { Storage } from '@/utils/Storage';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';

import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';

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
import {
  QxUserState_func,
  QxUserState_funcKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUserStateWApi';
import { clsQxUserStateEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserStateEN';

import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage_GP/clsQxUserIdentityEN';
import { XzClg_funcKey } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzSchool_func, XzSchool_funcKey } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
import { XzGradeBase_func, XzGradeBase_funcKey } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi, GetWebApiUrl_GP } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { useXzClgStore } from '@/store/modulesShare/xzClg';
import { GetA_Empty, GetDiv_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { clsQxUsersENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersENEx';
import {
  QxUserIdentity_func,
  QxUserIdentity_funcKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUserIdentityWApi';
import {
  QxUsers_GetObjLstAsync,
  QxUsers_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { QxRoles_GetNameByRoleIdCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';

export const qxUsersEx_Controller = 'QxUsersExApi';
export const qxUsersEx_ConstructorName = 'qxUsersEx';

export class clsQxUsersExWApi {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
}
/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxUsersEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxUsersENS:源对象
 * @returns 目标对象=>clsQxUsersEN:objQxUsersENT
 **/
export function QxUsersEx_CopyToEx(objQxUsersENS: clsQxUsersEN): clsQxUsersENEx {
  const strThisFuncName = QxUsersEx_CopyToEx.name;
  const objQxUsersENT = new clsQxUsersENEx();
  try {
    ObjectAssign(objQxUsersENT, objQxUsersENS);
    return objQxUsersENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxUsersENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxUsersEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxUsersENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxUsersObjLst = await QxUsers_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxUsersExObjLst = arrQxUsersObjLst.map(QxUsersEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxUsersEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxUsersExObjLst) {
      await QxUsersEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxUsersExObjLst.length == 0) return arrQxUsersExObjLst;
  let arrQxUsersSel: Array<clsQxUsersENEx> = arrQxUsersExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxUsersSel = arrQxUsersSel.sort(QxUsersEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxUsersSel = arrQxUsersSel.sort(objPagerPara.sortFun);
    }
    arrQxUsersSel = arrQxUsersSel.slice(intStart, intEnd);
    return arrQxUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxUsersENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapDepartmentName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapDepartmentName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentName) == true) {
      const QxDepartmentInfoDepartmentId = objQxUsers.departmentId;
      const QxDepartmentInfoDepartmentName = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_DepartmentName,
        QxDepartmentInfoDepartmentId,
      );
      objQxUsers.departmentName = QxDepartmentInfoDepartmentName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000399)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapDepartmentTypeName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapDepartmentTypeName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentTypeName) == true) {
      const QxDepartmentInfoDepartmentId = objQxUsers.departmentId;
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
      objQxUsers.departmentTypeName = QxDepartmentTypeDepartmentTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000400)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapDepartmentTypeId(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapDepartmentTypeId.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentTypeId) == true) {
      const QxDepartmentInfoDepartmentId = objQxUsers.departmentId;
      const QxDepartmentInfoDepartmentTypeId = await QxDepartmentInfo_func(
        clsQxDepartmentInfoEN.con_DepartmentId,
        clsQxDepartmentInfoEN.con_DepartmentTypeId,
        QxDepartmentInfoDepartmentId,
      );
      objQxUsers.departmentTypeId = QxDepartmentInfoDepartmentTypeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000401)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 显示一个字段的单元信息
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapDuUserName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapDuUserName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.duUserName) == true) {
      const spnCurr = GetSpan_Empty('col-form-label text-right');
      const spnStyle_Title = GetSpan_Empty('text-secondary font-weight-bold'); //;
      spnStyle_Title.innerHTML = '用户名';
      const spnStyle_Content = GetSpan_Empty('text-black'); //; await css_StyleEx_GetHtmlElementByStyleId(objCss_FldDispUnitStyle.styleId_Content, strContent);
      spnStyle_Content.innerHTML = objQxUsers.userName;
      spnCurr.innerHTML = Format('{0}:{1}', spnStyle_Title.outerHTML, spnStyle_Content.outerHTML);
      objQxUsers.duUserName = spnCurr.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000402)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapUserStateName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapUserStateName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.userStateName) == true) {
      const QxUserStateUserStateId = objQxUsers.userStateId;
      const QxUserStateUserStateName = await QxUserState_func(
        clsQxUserStateEN.con_UserStateId,
        clsQxUserStateEN.con_UserStateName,
        QxUserStateUserStateId,
      );
      objQxUsers.userStateName = QxUserStateUserStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000473)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapIdentityDesc(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapIdentityDesc.name;
  try {
    if (IsNullOrEmpty(objQxUsers.identityDesc) == true) {
      const QxUserIdentityIdentityID = objQxUsers.identityId;
      const QxUserIdentityIdentityDesc = await QxUserIdentity_func(
        clsQxUserIdentityEN.con_IdentityId,
        clsQxUserIdentityEN.con_IdentityDesc,
        QxUserIdentityIdentityID,
      );
      objQxUsers.identityDesc = QxUserIdentityIdentityDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000475)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapCollegeName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapCollegeName.name;
  try {
    const xzClgStore = useXzClgStore();
    if (IsNullOrEmpty(objQxUsers.collegeName) == true) {
      const XzClgIdXzCollege = objQxUsers.idXzCollege;
      const XzClgCollegeName = await xzClgStore.getCollegeName(XzClgIdXzCollege);
      objQxUsers.collegeName = XzClgCollegeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapSchoolName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapSchoolName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.schoolName) == true) {
      const XzSchoolidSchool = objQxUsers.idSchool;
      const XzSchoolSchoolName = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolName,
        XzSchoolidSchool,
      );
      objQxUsers.schoolName = XzSchoolSchoolName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapGradeBaseName(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.gradeBaseName) == true) {
      const XzGradeBaseIdGradeBase = objQxUsers.idGradeBase;
      const XzGradeBaseGradeBaseName = await XzGradeBase_func(
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        XzGradeBaseIdGradeBase,
      );
      objQxUsers.gradeBaseName = XzGradeBaseGradeBaseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapDateTimeSim(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objQxUsers.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objQxUsers.updDate);
      objQxUsers.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxUsersEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxUsersENEx.con_DepartmentName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.departmentName.localeCompare(b.departmentName);
        };
      case clsQxUsersENEx.con_DepartmentTypeId:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.departmentTypeId.localeCompare(b.departmentTypeId);
        };
      case clsQxUsersENEx.con_DepartmentTypeName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.departmentTypeName.localeCompare(b.departmentTypeName);
        };
      case clsQxUsersENEx.con_DuUserName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.duUserName.localeCompare(b.duUserName);
        };
      case clsQxUsersENEx.con_UserStateName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.userStateName.localeCompare(b.userStateName);
        };
      case clsQxUsersENEx.con_IdentityDesc:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.identityDesc.localeCompare(b.identityDesc);
        };
      case clsQxUsersENEx.con_CollegeName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsQxUsersENEx.con_SchoolName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.schoolName.localeCompare(b.schoolName);
        };
      case clsQxUsersENEx.con_GradeBaseName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsQxUsersENEx.con_RoleNames:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.roleNames.localeCompare(b.roleNames);
        };
      case clsQxUsersENEx.con_RoleId:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.roleId.localeCompare(b.roleId);
        };
      case clsQxUsersENEx.con_DateTimeSim:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsQxUsersENEx.con_SchoolNameA:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return a.schoolNameA.localeCompare(b.schoolNameA);
        };
      default:
        return QxUsers_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxUsersENEx.con_DepartmentName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.departmentName.localeCompare(a.departmentName);
        };
      case clsQxUsersENEx.con_DepartmentTypeId:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.departmentTypeId.localeCompare(a.departmentTypeId);
        };
      case clsQxUsersENEx.con_DepartmentTypeName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.departmentTypeName.localeCompare(a.departmentTypeName);
        };
      case clsQxUsersENEx.con_DuUserName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.duUserName.localeCompare(a.duUserName);
        };
      case clsQxUsersENEx.con_UserStateName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.userStateName.localeCompare(a.userStateName);
        };
      case clsQxUsersENEx.con_IdentityDesc:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.identityDesc.localeCompare(a.identityDesc);
        };
      case clsQxUsersENEx.con_CollegeName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsQxUsersENEx.con_SchoolName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.schoolName.localeCompare(a.schoolName);
        };
      case clsQxUsersENEx.con_GradeBaseName:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsQxUsersENEx.con_RoleNames:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.roleNames.localeCompare(a.roleNames);
        };
      case clsQxUsersENEx.con_RoleId:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.roleId.localeCompare(a.roleId);
        };
      case clsQxUsersENEx.con_DateTimeSim:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsQxUsersENEx.con_SchoolNameA:
        return (a: clsQxUsersENEx, b: clsQxUsersENEx) => {
          return b.schoolNameA.localeCompare(a.schoolNameA);
        };
      default:
        return QxUsers_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapKeyDepartmentName(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersEx_FuncMapKeyDepartmentName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentName) == true) return [];
    const QxDepartmentInfoDepartmentName = objQxUsers.departmentName;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_DepartmentName,
      QxDepartmentInfoDepartmentName,
      enumComparisonOp.Like_03,
    );
    return arrDepartmentId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000399)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapKeyDepartmentTypeName(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersEx_FuncMapKeyDepartmentTypeName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentTypeName) == true) return [];
    const QxDepartmentTypeDepartmentTypeName = objQxUsers.departmentTypeName;
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
    return arrDepartmentId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000400)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapKeyDepartmentTypeId(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersEx_FuncMapKeyDepartmentTypeId.name;
  try {
    if (IsNullOrEmpty(objQxUsers.departmentTypeId) == true) return [];
    const QxDepartmentInfoDepartmentTypeId = objQxUsers.departmentTypeId;
    const arrDepartmentId = await QxDepartmentInfo_funcKey(
      clsQxDepartmentInfoEN.con_DepartmentTypeId,
      QxDepartmentInfoDepartmentTypeId,
      enumComparisonOp.Like_03,
    );
    return arrDepartmentId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000401)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapKeyUserStateName(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersEx_FuncMapKeyUserStateName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.userStateName) == true) return [];
    const QxUserStateUserStateName = objQxUsers.userStateName;
    const arrUserStateId = await QxUserState_funcKey(
      clsQxUserStateEN.con_UserStateName,
      QxUserStateUserStateName,
      enumComparisonOp.Like_03,
    );
    return arrUserStateId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000473)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapKeyIdentityDesc(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersEx_FuncMapKeyIdentityDesc.name;
  try {
    if (IsNullOrEmpty(objQxUsers.identityDesc) == true) return [];
    const QxUserIdentityIdentityDesc = objQxUsers.identityDesc;
    const arrIdentityId = await QxUserIdentity_funcKey(
      clsQxUserIdentityEN.con_IdentityDesc,
      QxUserIdentityIdentityDesc,
      enumComparisonOp.Like_03,
    );
    return arrIdentityId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000475)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapKeyCollegeName(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersEx_FuncMapKeyCollegeName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.collegeName) == true) return [];
    const XzClgCollegeName = objQxUsers.collegeName;
    const arrIdXzCollege = await XzClg_funcKey(
      clsXzClgEN.con_CollegeName,
      XzClgCollegeName,
      enumComparisonOp.Like_03,
    );
    return arrIdXzCollege;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapKeySchoolName(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersEx_FuncMapKeySchoolName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.schoolName) == true) return [];
    const XzSchoolSchoolName = objQxUsers.schoolName;
    const arrIdSchool = await XzSchool_funcKey(
      clsXzSchoolEN.con_SchoolName,
      XzSchoolSchoolName,
      enumComparisonOp.Like_03,
    );
    return arrIdSchool;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
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
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapKeyGradeBaseName(
  objQxUsers: clsQxUsersENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxUsersEx_FuncMapKeyGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objQxUsers.gradeBaseName) == true) return [];
    const XzGradeBaseGradeBaseName = objQxUsers.gradeBaseName;
    const arrIdGradeBase = await XzGradeBase_funcKey(
      clsXzGradeBaseEN.con_GradeBaseName,
      XzGradeBaseGradeBaseName,
      enumComparisonOp.Like_03,
    );
    return arrIdGradeBase;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 添加新用户，附加角色和工程
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param objQxUsers: 用户对象
 * @param strPrjId: 工程Id
 * @param strRoleId: 角色Id
 * @param strUpdUser: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function QxUsersEx_AddNewUsers(
  objQxUsers: clsQxUsersEN,
  strPrjId: string,
  strRoleId: string,
  strUpdUser: string,
): Promise<boolean> {
  const strThisFuncName = QxUsersEx_AddNewUsers.name;
  const strAction = 'AddNewUsers';
  const strUrl = GetWebApiUrl_GP(qxUsersEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      objQxUsers,
      strPrjId,
      strRoleId,
      strUpdUser,
    },
  };
  const requestData = {
    objQxUsers: objQxUsers, // 字符串数组
    strPrjId: strPrjId, // 字符串参数
    strRoleId: strRoleId, // 字符串参数
    strUpdUser: strUpdUser, // 字符串参数
  };
  try {
    // axios
    //   .post(strUrl, JSON.stringify(requestData), {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data); // 处理成功的响应
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error); // 处理错误
    //   });

    //   const response = await axios.post(strUrl, requestData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    const response = await axios.post(strUrl, JSON.stringify(requestData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
        qxUsersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsersEx_ConstructorName,
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
 * 为用户添加角色
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strRoleId: 角色Id
 * @param strUpdUser: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function QxUsersEx_AddUserRoleRelation(
  strUserId: string,
  strRoleId: string,
  strUpdUser: string,
): Promise<boolean> {
  const strThisFuncName = QxUsersEx_AddUserRoleRelation.name;
  const strAction = 'AddUserRoleRelation';
  const strUrl = GetWebApiUrl_GP(qxUsersEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strRoleId,
      strUpdUser,
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
        qxUsersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxUsersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function QxUsersEx_FuncMapRoleNamesWithDelButton(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapRoleNamesWithDelButton.name;
  try {
    const qxUserRoleRelationStore = useQxUserRoleRelationStore();
    if (IsNullOrEmpty(objQxUsers.roleNames) == true) {
      const strPrjId = clsSysPara4WebApi.currSelPrjId;
      const arrRoleIds = await qxUserRoleRelationStore.getRoleIds(objQxUsers.userId, strPrjId);
      const divRoleNames = GetDiv_Empty('');

      for (const strRoleId of arrRoleIds) {
        if (strRoleId == '') continue;
        const strRoleName = await QxRoles_GetNameByRoleIdCache(strRoleId, strPrjId);
        const spnRole = GetSpan_Empty('text-secondary');
        spnRole.innerHTML = strRoleName;
        const aDel = GetA_Empty('text-primary ml-2 mr-2');
        aDel.innerHTML = '删除';
        aDel.id = 'aDel';
        aDel.href = 'javascript:void(0)';
        const objData = `${objQxUsers.userId}|${strRoleId} `;
        aDel.setAttribute('keyId', objData);
        // aDel.href = 'http://www.shnu.edu.cn';

        // (function (objData: any) {
        //   aDel.onclick = function () {
        //     console.error('aDel.onclick');
        //     clsQxUsersExWApi.vuebtn_Click('DelRole', objData);
        //   };
        // })(objData);
        const spnEmpty = GetSpan_Empty('text-secondary ml-2');
        spnEmpty.innerHTML = '&nbsp;';
        const spnEmpty1 = GetSpan_Empty('text-secondary ml-2');
        spnEmpty1.innerHTML = '&nbsp;&nbsp;';
        divRoleNames.appendChild(spnRole);
        divRoleNames.appendChild(spnEmpty);
        divRoleNames.appendChild(aDel);
        divRoleNames.appendChild(spnEmpty1);
      }
      objQxUsers.roleNames = divRoleNames.outerHTML;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxUsersEx_FuncMapByFldName(strFldName: string, objQxUsersEx: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxUsersEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxUsersENEx.con_DepartmentName:
      return QxUsersEx_FuncMapDepartmentName(objQxUsersEx);
    case clsQxUsersENEx.con_DepartmentTypeId:
      return QxUsersEx_FuncMapDepartmentTypeId(objQxUsersEx);
    case clsQxUsersENEx.con_DepartmentTypeName:
      return QxUsersEx_FuncMapDepartmentTypeName(objQxUsersEx);
    case clsQxUsersENEx.con_DuUserName:
      return QxUsersEx_FuncMapDuUserName(objQxUsersEx);
    case clsQxUsersENEx.con_UserStateName:
      return QxUsersEx_FuncMapUserStateName(objQxUsersEx);
    case clsQxUsersENEx.con_IdentityDesc:
      return QxUsersEx_FuncMapIdentityDesc(objQxUsersEx);
    case clsQxUsersENEx.con_CollegeName:
      return QxUsersEx_FuncMapCollegeName(objQxUsersEx);
    case clsQxUsersENEx.con_SchoolName:
      return QxUsersEx_FuncMapSchoolName(objQxUsersEx);
    case clsQxUsersENEx.con_GradeBaseName:
      return QxUsersEx_FuncMapGradeBaseName(objQxUsersEx);
    case clsQxUsersENEx.con_DateTimeSim:
      return QxUsersEx_FuncMapDateTimeSim(objQxUsersEx);
    case clsQxUsersENEx.con_SchoolNameA:
      return QxUsersEx_FuncMapSchoolNameA(objQxUsersEx);
    case clsQxUsersENEx.con_RoleNames:
      return QxUsersEx_FuncMapRoleNamesWithDelButton(objQxUsersEx);
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxUsersS:源对象
 **/
export async function QxUsersEx_FuncMapSchoolNameA(objQxUsers: clsQxUsersENEx) {
  const strThisFuncName = QxUsersEx_FuncMapSchoolNameA.name;
  try {
    if (IsNullOrEmpty(objQxUsers.schoolNameA) == true) {
      const XzSchoolidSchool = objQxUsers.idSchool;
      const XzSchoolSchoolNameA = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolNameA,
        XzSchoolidSchool,
      );
      objQxUsers.schoolNameA = XzSchoolSchoolNameA;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001017)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxUsersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

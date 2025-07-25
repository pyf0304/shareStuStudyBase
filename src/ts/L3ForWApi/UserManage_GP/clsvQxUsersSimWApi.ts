/**
 * 类名:clsvQxUsersSimWApi
 * 表名:vQxUsersSim(01120943)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:53
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQxUsersSim(vQxUsersSim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月02日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import {
  BindDdl_ObjLstInDivObj_V,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvQxUsersSimEN } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSimEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const vQxUsersSim_Controller = 'vQxUsersSimApi';
export const vQxUsersSim_ConstructorName = 'vQxUsersSim';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export async function vQxUsersSim_GetObjByUserIdAsync(
  strUserId: string,
): Promise<clsvQxUsersSimEN | null> {
  const strThisFuncName = 'GetObjByUserIdAsync';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsvQxUsersSimWApi.GetObjByUserIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByUserId';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objvQxUsersSim = vQxUsersSim_GetObjFromJsonObj(returnObj);
      return objvQxUsersSim;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function vQxUsersSim_GetObjByUserIdlocalStorage(strUserId: string) {
  const strThisFuncName = 'GetObjByUserIdlocalStorage';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format(
      '参数:[strUserId]不能为空!(In clsvQxUsersSimWApi.GetObjByUserIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvQxUsersSimEN._CurrTabName, strUserId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvQxUsersSimCache: clsvQxUsersSimEN = JSON.parse(strTempObj);
    return objvQxUsersSimCache;
  }
  try {
    const objvQxUsersSim = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
    if (objvQxUsersSim != null) {
      localStorage.setItem(strKey, JSON.stringify(objvQxUsersSim));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvQxUsersSim;
    }
    return objvQxUsersSim;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserId,
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
  }
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function vQxUsersSim_GetObjByUserIdCache(strUserId: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByUserIdCache';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsvQxUsersSimWApi.GetObjByUserIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstCache();
  try {
    const arrvQxUsersSimSel = arrvQxUsersSimObjLstCache.filter((x) => x.userId == strUserId);
    let objvQxUsersSim: clsvQxUsersSimEN;
    if (arrvQxUsersSimSel.length > 0) {
      objvQxUsersSim = arrvQxUsersSimSel[0];
      return objvQxUsersSim;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvQxUsersSimConst = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
        if (objvQxUsersSimConst != null) {
          vQxUsersSim_ReFreshThisCache();
          return objvQxUsersSimConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserId,
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQxUsersSim_SortFunDefa(a: clsvQxUsersSimEN, b: clsvQxUsersSimEN): number {
  return a.userId.localeCompare(b.userId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQxUsersSim_SortFunDefa2Fld(a: clsvQxUsersSimEN, b: clsvQxUsersSimEN): number {
  if (a.userName == b.userName) return a.idXzCollege.localeCompare(b.idXzCollege);
  else return a.userName.localeCompare(b.userName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQxUsersSim_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvQxUsersSimEN.con_UserId:
        return (a: clsvQxUsersSimEN, b: clsvQxUsersSimEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsvQxUsersSimEN.con_UserName:
        return (a: clsvQxUsersSimEN, b: clsvQxUsersSimEN) => {
          if (a.userName == null) return -1;
          if (b.userName == null) return 1;
          return a.userName.localeCompare(b.userName);
        };
      case clsvQxUsersSimEN.con_IdXzCollege:
        return (a: clsvQxUsersSimEN, b: clsvQxUsersSimEN) => {
          if (a.idXzCollege == null) return -1;
          if (b.idXzCollege == null) return 1;
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vQxUsersSim]中不存在!(in ${vQxUsersSim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvQxUsersSimEN.con_UserId:
        return (a: clsvQxUsersSimEN, b: clsvQxUsersSimEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsvQxUsersSimEN.con_UserName:
        return (a: clsvQxUsersSimEN, b: clsvQxUsersSimEN) => {
          if (b.userName == null) return -1;
          if (a.userName == null) return 1;
          return b.userName.localeCompare(a.userName);
        };
      case clsvQxUsersSimEN.con_IdXzCollege:
        return (a: clsvQxUsersSimEN, b: clsvQxUsersSimEN) => {
          if (b.idXzCollege == null) return -1;
          if (a.idXzCollege == null) return 1;
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vQxUsersSim]中不存在!(in ${vQxUsersSim_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function vQxUsersSim_GetNameByUserIdCache(strUserId: string) {
  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空!(In clsvQxUsersSimWApi.GetNameByUserIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstCache();
  if (arrvQxUsersSimObjLstCache == null) return '';
  try {
    const arrvQxUsersSimSel = arrvQxUsersSimObjLstCache.filter((x) => x.userId == strUserId);
    let objvQxUsersSim: clsvQxUsersSimEN;
    if (arrvQxUsersSimSel.length > 0) {
      objvQxUsersSim = arrvQxUsersSimSel[0];
      return objvQxUsersSim.userName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strUserId,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vQxUsersSim_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvQxUsersSimEN.con_UserId:
      return (obj: clsvQxUsersSimEN) => {
        return obj.userId === value;
      };
    case clsvQxUsersSimEN.con_UserName:
      return (obj: clsvQxUsersSimEN) => {
        return obj.userName === value;
      };
    case clsvQxUsersSimEN.con_IdXzCollege:
      return (obj: clsvQxUsersSimEN) => {
        return obj.idXzCollege === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vQxUsersSim]中不存在!(in ${vQxUsersSim_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function vQxUsersSim_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvQxUsersSimEN.con_UserId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvQxUsersSimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvQxUsersSimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserId = strInValue;
  if (IsNullOrEmpty(strUserId) == true) {
    return '';
  }
  const objvQxUsersSim = await vQxUsersSim_GetObjByUserIdCache(strUserId);
  if (objvQxUsersSim == null) return '';
  if (objvQxUsersSim.GetFldValue(strOutFldName) == null) return '';
  return objvQxUsersSim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function vQxUsersSim_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvQxUsersSimEN.con_UserId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvQxUsersSim = await vQxUsersSim_GetObjLstCache();
  if (arrvQxUsersSim == null) return [];
  let arrvQxUsersSimSel = arrvQxUsersSim;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvQxUsersSimSel.length == 0) return [];
  return arrvQxUsersSimSel.map((x) => x.userId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vQxUsersSim_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vQxUsersSim_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function vQxUsersSim_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function vQxUsersSim_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvQxUsersSimEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objvQxUsersSim = vQxUsersSim_GetObjFromJsonObj(returnObj);
      return objvQxUsersSim;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQxUsersSim_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQxUsersSimEN._CurrTabName;
  if (IsNullOrEmpty(clsvQxUsersSimEN.WhereFormat) == false) {
    strWhereCond = clsvQxUsersSimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvQxUsersSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQxUsersSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvQxUsersSimExObjLstCache: Array<clsvQxUsersSimEN> = CacheHelper.Get(strKey);
    const arrvQxUsersSimObjLstT = vQxUsersSim_GetObjLstByJSONObjLst(arrvQxUsersSimExObjLstCache);
    return arrvQxUsersSimObjLstT;
  }
  try {
    const arrvQxUsersSimExObjLst = await vQxUsersSim_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvQxUsersSimExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQxUsersSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvQxUsersSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQxUsersSim_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQxUsersSimEN._CurrTabName;
  if (IsNullOrEmpty(clsvQxUsersSimEN.WhereFormat) == false) {
    strWhereCond = clsvQxUsersSimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvQxUsersSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQxUsersSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvQxUsersSimExObjLstCache: Array<clsvQxUsersSimEN> = JSON.parse(strTempObjLst);
    const arrvQxUsersSimObjLstT = vQxUsersSim_GetObjLstByJSONObjLst(arrvQxUsersSimExObjLstCache);
    return arrvQxUsersSimObjLstT;
  }
  try {
    const arrvQxUsersSimExObjLst = await vQxUsersSim_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvQxUsersSimExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQxUsersSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvQxUsersSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQxUsersSim_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvQxUsersSimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvQxUsersSimObjLstCache: Array<clsvQxUsersSimEN> = JSON.parse(strTempObjLst);
    return arrvQxUsersSimObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vQxUsersSim_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvQxUsersSimEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQxUsersSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQxUsersSim_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQxUsersSim_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvQxUsersSimEN._CurrTabName;
  if (IsNullOrEmpty(clsvQxUsersSimEN.WhereFormat) == false) {
    strWhereCond = clsvQxUsersSimEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsvQxUsersSimEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvQxUsersSimEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvQxUsersSimExObjLstCache: Array<clsvQxUsersSimEN> = JSON.parse(strTempObjLst);
    const arrvQxUsersSimObjLstT = vQxUsersSim_GetObjLstByJSONObjLst(arrvQxUsersSimExObjLstCache);
    return arrvQxUsersSimObjLstT;
  }
  try {
    const arrvQxUsersSimExObjLst = await vQxUsersSim_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvQxUsersSimExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvQxUsersSimExObjLst.length,
    );
    console.log(strInfo);
    return arrvQxUsersSimExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQxUsersSim_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvQxUsersSimEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvQxUsersSimObjLstCache: Array<clsvQxUsersSimEN> = JSON.parse(strTempObjLst);
    return arrvQxUsersSimObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQxUsersSim_GetObjLstCache(): Promise<Array<clsvQxUsersSimEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvQxUsersSimObjLstCache;
  switch (clsvQxUsersSimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstClientCache();
      break;
    default:
      arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstClientCache();
      break;
  }
  return arrvQxUsersSimObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vQxUsersSim_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvQxUsersSimObjLstCache;
  switch (clsvQxUsersSimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvQxUsersSimObjLstCache = null;
      break;
    default:
      arrvQxUsersSimObjLstCache = null;
      break;
  }
  return arrvQxUsersSimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vQxUsersSim_GetSubObjLstCache(objvQxUsersSimCond: ConditionCollection) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstCache();
  let arrvQxUsersSimSel = arrvQxUsersSimObjLstCache;
  if (objvQxUsersSimCond.GetConditions().length == 0) return arrvQxUsersSimSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objvQxUsersSimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvQxUsersSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvQxUsersSimCond),
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvQxUsersSimEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserId:关键字列表
 * @returns 对象列表
 **/
export async function vQxUsersSim_GetObjLstByUserIdLstAsync(
  arrUserId: Array<string>,
): Promise<Array<clsvQxUsersSimEN>> {
  const strThisFuncName = 'GetObjLstByUserIdLstAsync';
  const strAction = 'GetObjLstByUserIdLst';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrUserId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQxUsersSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQxUsersSim_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrUserIdLst:关键字列表
 * @returns 对象列表
 */
export async function vQxUsersSim_GetObjLstByUserIdLstCache(arrUserIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByUserIdLstCache';
  try {
    const arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstCache();
    const arrvQxUsersSimSel = arrvQxUsersSimObjLstCache.filter(
      (x) => arrUserIdLst.indexOf(x.userId) > -1,
    );
    return arrvQxUsersSimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrUserIdLst.join(','),
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
}

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function vQxUsersSim_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvQxUsersSimEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQxUsersSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQxUsersSim_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vQxUsersSim_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvQxUsersSimEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vQxUsersSim_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vQxUsersSim_GetObjLstByJSONObjLst(returnObjLst);
      return arrObjLst;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrUserIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vQxUsersSim_IsExistRecordCache(objvQxUsersSimCond: ConditionCollection) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstCache();
  if (arrvQxUsersSimObjLstCache == null) return false;
  let arrvQxUsersSimSel = arrvQxUsersSimObjLstCache;
  if (objvQxUsersSimCond.GetConditions().length == 0)
    return arrvQxUsersSimSel.length > 0 ? true : false;
  try {
    for (const objCondition of objvQxUsersSimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvQxUsersSimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvQxUsersSimCond),
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return false;
}

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function vQxUsersSim_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function vQxUsersSim_IsExistCache(strUserId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstCache();
  if (arrvQxUsersSimObjLstCache == null) return false;
  try {
    const arrvQxUsersSimSel = arrvQxUsersSimObjLstCache.filter((x) => x.userId == strUserId);
    if (arrvQxUsersSimSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strUserId,
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return false;
}

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strUserId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vQxUsersSim_IsExistAsync(strUserId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function vQxUsersSim_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vQxUsersSim_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vQxUsersSim_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objvQxUsersSimCond:条件对象
 * @returns 对象列表记录数
 */
export async function vQxUsersSim_GetRecCountByCondCache(objvQxUsersSimCond: ConditionCollection) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvQxUsersSimObjLstCache = await vQxUsersSim_GetObjLstCache();
  if (arrvQxUsersSimObjLstCache == null) return 0;
  let arrvQxUsersSimSel = arrvQxUsersSimObjLstCache;
  if (objvQxUsersSimCond.GetConditions().length == 0) return arrvQxUsersSimSel.length;
  try {
    for (const objCondition of objvQxUsersSimCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) != null);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvQxUsersSimSel = arrvQxUsersSimSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvQxUsersSimSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvQxUsersSimCond),
      vQxUsersSim_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vQxUsersSim_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vQxUsersSim_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvQxUsersSimEN._CurrTabName;
    switch (clsvQxUsersSimEN.CacheModeId) {
      case '04': //sessionStorage
        sessionStorage.removeItem(strKey);
        break;
      case '03': //localStorage
        localStorage.removeItem(strKey);
        break;
      case '02': //ClientCache
        CacheHelper.Remove(strKey);
        break;
      default:
        CacheHelper.Remove(strKey);
        break;
    }
    clsvQxUsersSimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
    const strMsg = Format('刷新缓存成功!');
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}
/**
 * 获取最新的缓存刷新时间
 * @returns 最新的缓存刷新时间，字符串型
 **/
export function vQxUsersSim_GetLastRefreshTime(): string {
  if (clsvQxUsersSimEN._RefreshTimeLst.length == 0) return '';
  return clsvQxUsersSimEN._RefreshTimeLst[clsvQxUsersSimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function vQxUsersSim_BindDdl_UserIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_UserIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_UserIdInDivCache");
  const arrObjLstSel = await vQxUsersSim_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj_V(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsvQxUsersSimEN.con_UserId,
    clsvQxUsersSimEN.con_UserName,
    'vQxUsersSim...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function vQxUsersSim_GetArrvQxUsersSim() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_UserIdInDivCache");
  const arrvQxUsersSim = new Array<clsvQxUsersSimEN>();
  const arrObjLstSel = await vQxUsersSim_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsvQxUsersSimEN();
  obj0.userId = '0';
  obj0.userName = '选vQxUsersSim...';
  arrvQxUsersSim.push(obj0);
  arrObjLstSel.forEach((x) => arrvQxUsersSim.push(x));
  return arrvQxUsersSim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vQxUsersSim_GetJSONStrByObj(pobjvQxUsersSimEN: clsvQxUsersSimEN): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvQxUsersSimEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function vQxUsersSim_GetObjLstByJSONStr(strJSON: string): Array<clsvQxUsersSimEN> {
  let arrvQxUsersSimObjLst = new Array<clsvQxUsersSimEN>();
  if (strJSON === '') {
    return arrvQxUsersSimObjLst;
  }
  try {
    arrvQxUsersSimObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvQxUsersSimObjLst;
  }
  return arrvQxUsersSimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxUsersSimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vQxUsersSim_GetObjLstByJSONObjLst(
  arrvQxUsersSimObjLstS: Array<clsvQxUsersSimEN>,
): Array<clsvQxUsersSimEN> {
  const arrvQxUsersSimObjLst = new Array<clsvQxUsersSimEN>();
  for (const objInFor of arrvQxUsersSimObjLstS) {
    const obj1 = vQxUsersSim_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvQxUsersSimObjLst.push(obj1);
  }
  return arrvQxUsersSimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vQxUsersSim_GetObjByJSONStr(strJSON: string): clsvQxUsersSimEN {
  let pobjvQxUsersSimEN = new clsvQxUsersSimEN();
  if (strJSON === '') {
    return pobjvQxUsersSimEN;
  }
  try {
    pobjvQxUsersSimEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvQxUsersSimEN;
  }
  return pobjvQxUsersSimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vQxUsersSim_GetCombineCondition(objvQxUsersSimCond: clsvQxUsersSimEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvQxUsersSimCond.dicFldComparisonOp,
      clsvQxUsersSimEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objvQxUsersSimCond.dicFldComparisonOp[clsvQxUsersSimEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQxUsersSimEN.con_UserId,
      objvQxUsersSimCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQxUsersSimCond.dicFldComparisonOp,
      clsvQxUsersSimEN.con_UserName,
    ) == true
  ) {
    const strComparisonOpUserName: string =
      objvQxUsersSimCond.dicFldComparisonOp[clsvQxUsersSimEN.con_UserName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQxUsersSimEN.con_UserName,
      objvQxUsersSimCond.userName,
      strComparisonOpUserName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvQxUsersSimCond.dicFldComparisonOp,
      clsvQxUsersSimEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objvQxUsersSimCond.dicFldComparisonOp[clsvQxUsersSimEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvQxUsersSimEN.con_IdXzCollege,
      objvQxUsersSimCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvQxUsersSimENS:源对象
 * @param objvQxUsersSimENT:目标对象
 */
export function vQxUsersSim_CopyObjTo(
  objvQxUsersSimENS: clsvQxUsersSimEN,
  objvQxUsersSimENT: clsvQxUsersSimEN,
): void {
  objvQxUsersSimENT.userId = objvQxUsersSimENS.userId; //用户ID
  objvQxUsersSimENT.userName = objvQxUsersSimENS.userName; //用户名
  objvQxUsersSimENT.idXzCollege = objvQxUsersSimENS.idXzCollege; //学院流水号
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxUsersSimENS:源对象
 * @param objvQxUsersSimENT:目标对象
 */
export function vQxUsersSim_GetObjFromJsonObj(
  objvQxUsersSimENS: clsvQxUsersSimEN,
): clsvQxUsersSimEN {
  const objvQxUsersSimENT: clsvQxUsersSimEN = new clsvQxUsersSimEN();
  ObjectAssign(objvQxUsersSimENT, objvQxUsersSimENS);
  return objvQxUsersSimENT;
}

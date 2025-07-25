/**
 * 类名:clsEduClsTeacherTypeWApi
 * 表名:EduClsTeacherType(01120133)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 01:35:33
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学班教师角色表2(EduClsTeacherType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月11日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, GetStrLen, tzDataType, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import {
  BindDdl_ObjLstInDivObj,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsEduClsTeacherTypeEN } from '@/ts/L0Entity/DailyRunning/clsEduClsTeacherTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const eduClsTeacherType_Controller = 'EduClsTeacherTypeApi';
export const eduClsTeacherType_ConstructorName = 'eduClsTeacherType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdEduClsTeacherType:关键字
 * @returns 对象
 **/
export async function EduClsTeacherType_GetObjByIdEduClsTeacherTypeAsync(
  strIdEduClsTeacherType: string,
): Promise<clsEduClsTeacherTypeEN | null> {
  const strThisFuncName = 'GetObjByIdEduClsTeacherTypeAsync';

  if (IsNullOrEmpty(strIdEduClsTeacherType) == true) {
    const strMsg = Format(
      '参数:[strIdEduClsTeacherType]不能为空!(In clsEduClsTeacherTypeWApi.GetObjByIdEduClsTeacherTypeAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdEduClsTeacherType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdEduClsTeacherType]的长度:[{0}]不正确!(clsEduClsTeacherTypeWApi.GetObjByIdEduClsTeacherTypeAsync)',
      strIdEduClsTeacherType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdEduClsTeacherType';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdEduClsTeacherType,
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
      const objEduClsTeacherType = EduClsTeacherType_GetObjFromJsonObj(returnObj);
      return objEduClsTeacherType;
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * @param strIdEduClsTeacherType:所给的关键字
 * @returns 对象
 */
export async function EduClsTeacherType_GetObjByIdEduClsTeacherTypelocalStorage(
  strIdEduClsTeacherType: string,
) {
  const strThisFuncName = 'GetObjByIdEduClsTeacherTypelocalStorage';

  if (IsNullOrEmpty(strIdEduClsTeacherType) == true) {
    const strMsg = Format(
      '参数:[strIdEduClsTeacherType]不能为空!(In clsEduClsTeacherTypeWApi.GetObjByIdEduClsTeacherTypelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdEduClsTeacherType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdEduClsTeacherType]的长度:[{0}]不正确!(clsEduClsTeacherTypeWApi.GetObjByIdEduClsTeacherTypelocalStorage)',
      strIdEduClsTeacherType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsEduClsTeacherTypeEN._CurrTabName, strIdEduClsTeacherType);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objEduClsTeacherTypeCache: clsEduClsTeacherTypeEN = JSON.parse(strTempObj);
    return objEduClsTeacherTypeCache;
  }
  try {
    const objEduClsTeacherType = await EduClsTeacherType_GetObjByIdEduClsTeacherTypeAsync(
      strIdEduClsTeacherType,
    );
    if (objEduClsTeacherType != null) {
      localStorage.setItem(strKey, JSON.stringify(objEduClsTeacherType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objEduClsTeacherType;
    }
    return objEduClsTeacherType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdEduClsTeacherType,
      eduClsTeacherType_ConstructorName,
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
 * @param strIdEduClsTeacherType:所给的关键字
 * @returns 对象
 */
export async function EduClsTeacherType_GetObjByIdEduClsTeacherTypeCache(
  strIdEduClsTeacherType: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdEduClsTeacherTypeCache';

  if (IsNullOrEmpty(strIdEduClsTeacherType) == true) {
    const strMsg = Format(
      '参数:[strIdEduClsTeacherType]不能为空!(In clsEduClsTeacherTypeWApi.GetObjByIdEduClsTeacherTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdEduClsTeacherType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdEduClsTeacherType]的长度:[{0}]不正确!(clsEduClsTeacherTypeWApi.GetObjByIdEduClsTeacherTypeCache)',
      strIdEduClsTeacherType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstCache();
  try {
    const arrEduClsTeacherTypeSel = arrEduClsTeacherTypeObjLstCache.filter(
      (x) => x.idEduClsTeacherType == strIdEduClsTeacherType,
    );
    let objEduClsTeacherType: clsEduClsTeacherTypeEN;
    if (arrEduClsTeacherTypeSel.length > 0) {
      objEduClsTeacherType = arrEduClsTeacherTypeSel[0];
      return objEduClsTeacherType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objEduClsTeacherTypeConst = await EduClsTeacherType_GetObjByIdEduClsTeacherTypeAsync(
          strIdEduClsTeacherType,
        );
        if (objEduClsTeacherTypeConst != null) {
          EduClsTeacherType_ReFreshThisCache();
          return objEduClsTeacherTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdEduClsTeacherType,
      eduClsTeacherType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objEduClsTeacherType:所给的对象
 * @returns 对象
 */
export async function EduClsTeacherType_UpdateObjInLstCache(
  objEduClsTeacherType: clsEduClsTeacherTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstCache();
    const obj = arrEduClsTeacherTypeObjLstCache.find(
      (x) => x.idEduClsTeacherType == objEduClsTeacherType.idEduClsTeacherType,
    );
    if (obj != null) {
      objEduClsTeacherType.idEduClsTeacherType = obj.idEduClsTeacherType;
      ObjectAssign(obj, objEduClsTeacherType);
    } else {
      arrEduClsTeacherTypeObjLstCache.push(objEduClsTeacherType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      eduClsTeacherType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function EduClsTeacherType_SortFunDefa(
  a: clsEduClsTeacherTypeEN,
  b: clsEduClsTeacherTypeEN,
): number {
  return a.idEduClsTeacherType.localeCompare(b.idEduClsTeacherType);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function EduClsTeacherType_SortFunDefa2Fld(
  a: clsEduClsTeacherTypeEN,
  b: clsEduClsTeacherTypeEN,
): number {
  if (a.eduClsTeacherTypeId == b.eduClsTeacherTypeId)
    return a.eduClsTeacherTypeDesc.localeCompare(b.eduClsTeacherTypeDesc);
  else return a.eduClsTeacherTypeId.localeCompare(b.eduClsTeacherTypeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function EduClsTeacherType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsEduClsTeacherTypeEN.con_IdEduClsTeacherType:
        return (a: clsEduClsTeacherTypeEN, b: clsEduClsTeacherTypeEN) => {
          return a.idEduClsTeacherType.localeCompare(b.idEduClsTeacherType);
        };
      case clsEduClsTeacherTypeEN.con_EduClsTeacherTypeId:
        return (a: clsEduClsTeacherTypeEN, b: clsEduClsTeacherTypeEN) => {
          if (a.eduClsTeacherTypeId == null) return -1;
          if (b.eduClsTeacherTypeId == null) return 1;
          return a.eduClsTeacherTypeId.localeCompare(b.eduClsTeacherTypeId);
        };
      case clsEduClsTeacherTypeEN.con_EduClsTeacherTypeDesc:
        return (a: clsEduClsTeacherTypeEN, b: clsEduClsTeacherTypeEN) => {
          if (a.eduClsTeacherTypeDesc == null) return -1;
          if (b.eduClsTeacherTypeDesc == null) return 1;
          return a.eduClsTeacherTypeDesc.localeCompare(b.eduClsTeacherTypeDesc);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[EduClsTeacherType]中不存在!(in ${eduClsTeacherType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsEduClsTeacherTypeEN.con_IdEduClsTeacherType:
        return (a: clsEduClsTeacherTypeEN, b: clsEduClsTeacherTypeEN) => {
          return b.idEduClsTeacherType.localeCompare(a.idEduClsTeacherType);
        };
      case clsEduClsTeacherTypeEN.con_EduClsTeacherTypeId:
        return (a: clsEduClsTeacherTypeEN, b: clsEduClsTeacherTypeEN) => {
          if (b.eduClsTeacherTypeId == null) return -1;
          if (a.eduClsTeacherTypeId == null) return 1;
          return b.eduClsTeacherTypeId.localeCompare(a.eduClsTeacherTypeId);
        };
      case clsEduClsTeacherTypeEN.con_EduClsTeacherTypeDesc:
        return (a: clsEduClsTeacherTypeEN, b: clsEduClsTeacherTypeEN) => {
          if (b.eduClsTeacherTypeDesc == null) return -1;
          if (a.eduClsTeacherTypeDesc == null) return 1;
          return b.eduClsTeacherTypeDesc.localeCompare(a.eduClsTeacherTypeDesc);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[EduClsTeacherType]中不存在!(in ${eduClsTeacherType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdEduClsTeacherType:所给的关键字
 * @returns 对象
 */
export async function EduClsTeacherType_GetNameByIdEduClsTeacherTypeCache(
  strIdEduClsTeacherType: string,
) {
  if (IsNullOrEmpty(strIdEduClsTeacherType) == true) {
    const strMsg = Format(
      '参数:[strIdEduClsTeacherType]不能为空!(In clsEduClsTeacherTypeWApi.GetNameByIdEduClsTeacherTypeCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdEduClsTeacherType.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdEduClsTeacherType]的长度:[{0}]不正确!(clsEduClsTeacherTypeWApi.GetNameByIdEduClsTeacherTypeCache)',
      strIdEduClsTeacherType.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstCache();
  if (arrEduClsTeacherTypeObjLstCache == null) return '';
  try {
    const arrEduClsTeacherTypeSel = arrEduClsTeacherTypeObjLstCache.filter(
      (x) => x.idEduClsTeacherType == strIdEduClsTeacherType,
    );
    let objEduClsTeacherType: clsEduClsTeacherTypeEN;
    if (arrEduClsTeacherTypeSel.length > 0) {
      objEduClsTeacherType = arrEduClsTeacherTypeSel[0];
      return objEduClsTeacherType.eduClsTeacherTypeDesc;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdEduClsTeacherType,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function EduClsTeacherType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsEduClsTeacherTypeEN.con_IdEduClsTeacherType:
      return (obj: clsEduClsTeacherTypeEN) => {
        return obj.idEduClsTeacherType === value;
      };
    case clsEduClsTeacherTypeEN.con_EduClsTeacherTypeId:
      return (obj: clsEduClsTeacherTypeEN) => {
        return obj.eduClsTeacherTypeId === value;
      };
    case clsEduClsTeacherTypeEN.con_EduClsTeacherTypeDesc:
      return (obj: clsEduClsTeacherTypeEN) => {
        return obj.eduClsTeacherTypeDesc === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[EduClsTeacherType]中不存在!(in ${eduClsTeacherType_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function EduClsTeacherType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsEduClsTeacherTypeEN.con_IdEduClsTeacherType) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsEduClsTeacherTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsEduClsTeacherTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdEduClsTeacherType = strInValue;
  if (IsNullOrEmpty(strIdEduClsTeacherType) == true) {
    return '';
  }
  const objEduClsTeacherType = await EduClsTeacherType_GetObjByIdEduClsTeacherTypeCache(
    strIdEduClsTeacherType,
  );
  if (objEduClsTeacherType == null) return '';
  if (objEduClsTeacherType.GetFldValue(strOutFldName) == null) return '';
  return objEduClsTeacherType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function EduClsTeacherType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsEduClsTeacherTypeEN.con_IdEduClsTeacherType) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrEduClsTeacherType = await EduClsTeacherType_GetObjLstCache();
  if (arrEduClsTeacherType == null) return [];
  let arrEduClsTeacherTypeSel = arrEduClsTeacherType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrEduClsTeacherTypeSel.length == 0) return [];
  return arrEduClsTeacherTypeSel.map((x) => x.idEduClsTeacherType);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function EduClsTeacherType_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsEduClsTeacherTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
      const objEduClsTeacherType = EduClsTeacherType_GetObjFromJsonObj(returnObj);
      return objEduClsTeacherType;
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsEduClsTeacherTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsEduClsTeacherTypeEN.WhereFormat) == false) {
    strWhereCond = clsEduClsTeacherTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsEduClsTeacherTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsEduClsTeacherTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrEduClsTeacherTypeExObjLstCache: Array<clsEduClsTeacherTypeEN> =
      CacheHelper.Get(strKey);
    const arrEduClsTeacherTypeObjLstT = EduClsTeacherType_GetObjLstByJSONObjLst(
      arrEduClsTeacherTypeExObjLstCache,
    );
    return arrEduClsTeacherTypeObjLstT;
  }
  try {
    const arrEduClsTeacherTypeExObjLst = await EduClsTeacherType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrEduClsTeacherTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrEduClsTeacherTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrEduClsTeacherTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsEduClsTeacherTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsEduClsTeacherTypeEN.WhereFormat) == false) {
    strWhereCond = clsEduClsTeacherTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsEduClsTeacherTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsEduClsTeacherTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrEduClsTeacherTypeExObjLstCache: Array<clsEduClsTeacherTypeEN> =
      JSON.parse(strTempObjLst);
    const arrEduClsTeacherTypeObjLstT = EduClsTeacherType_GetObjLstByJSONObjLst(
      arrEduClsTeacherTypeExObjLstCache,
    );
    return arrEduClsTeacherTypeObjLstT;
  }
  try {
    const arrEduClsTeacherTypeExObjLst = await EduClsTeacherType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrEduClsTeacherTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrEduClsTeacherTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrEduClsTeacherTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsEduClsTeacherTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrEduClsTeacherTypeObjLstCache: Array<clsEduClsTeacherTypeEN> =
      JSON.parse(strTempObjLst);
    return arrEduClsTeacherTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function EduClsTeacherType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsEduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
          eduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsEduClsTeacherTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsEduClsTeacherTypeEN.WhereFormat) == false) {
    strWhereCond = clsEduClsTeacherTypeEN.WhereFormat;
  }
  if (IsNullOrEmpty(clsEduClsTeacherTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsEduClsTeacherTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrEduClsTeacherTypeExObjLstCache: Array<clsEduClsTeacherTypeEN> =
      JSON.parse(strTempObjLst);
    const arrEduClsTeacherTypeObjLstT = EduClsTeacherType_GetObjLstByJSONObjLst(
      arrEduClsTeacherTypeExObjLstCache,
    );
    return arrEduClsTeacherTypeObjLstT;
  }
  try {
    const arrEduClsTeacherTypeExObjLst = await EduClsTeacherType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrEduClsTeacherTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrEduClsTeacherTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrEduClsTeacherTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsEduClsTeacherTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrEduClsTeacherTypeObjLstCache: Array<clsEduClsTeacherTypeEN> =
      JSON.parse(strTempObjLst);
    return arrEduClsTeacherTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function EduClsTeacherType_GetObjLstCache(): Promise<Array<clsEduClsTeacherTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrEduClsTeacherTypeObjLstCache;
  switch (clsEduClsTeacherTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstClientCache();
      break;
    default:
      arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstClientCache();
      break;
  }
  return arrEduClsTeacherTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function EduClsTeacherType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrEduClsTeacherTypeObjLstCache;
  switch (clsEduClsTeacherTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrEduClsTeacherTypeObjLstCache = null;
      break;
    default:
      arrEduClsTeacherTypeObjLstCache = null;
      break;
  }
  return arrEduClsTeacherTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdEduClsTeacherTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function EduClsTeacherType_GetSubObjLstCache(
  objEduClsTeacherTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstCache();
  let arrEduClsTeacherTypeSel = arrEduClsTeacherTypeObjLstCache;
  if (objEduClsTeacherTypeCond.GetConditions().length == 0) return arrEduClsTeacherTypeSel;
  try {
    //console.log(sstrKeys);
    for (const objCondition of objEduClsTeacherTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrEduClsTeacherTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objEduClsTeacherTypeCond),
      eduClsTeacherType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsEduClsTeacherTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdEduClsTeacherType:关键字列表
 * @returns 对象列表
 **/
export async function EduClsTeacherType_GetObjLstByIdEduClsTeacherTypeLstAsync(
  arrIdEduClsTeacherType: Array<string>,
): Promise<Array<clsEduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetObjLstByIdEduClsTeacherTypeLstAsync';
  const strAction = 'GetObjLstByIdEduClsTeacherTypeLst';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdEduClsTeacherType, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          eduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * @param arrstrIdEduClsTeacherTypeLst:关键字列表
 * @returns 对象列表
 */
export async function EduClsTeacherType_GetObjLstByIdEduClsTeacherTypeLstCache(
  arrIdEduClsTeacherTypeLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByIdEduClsTeacherTypeLstCache';
  try {
    const arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstCache();
    const arrEduClsTeacherTypeSel = arrEduClsTeacherTypeObjLstCache.filter(
      (x) => arrIdEduClsTeacherTypeLst.indexOf(x.idEduClsTeacherType) > -1,
    );
    return arrEduClsTeacherTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdEduClsTeacherTypeLst.join(','),
      eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsEduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
          eduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsEduClsTeacherTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
          eduClsTeacherType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = EduClsTeacherType_GetObjLstByJSONObjLst(returnObjLst);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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

/**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strIdEduClsTeacherType:关键字
 * @returns 获取删除的结果
 **/
export async function EduClsTeacherType_DelRecordAsync(
  strIdEduClsTeacherType: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdEduClsTeacherType);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrIdEduClsTeacherType:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function EduClsTeacherType_DelEduClsTeacherTypesAsync(
  arrIdEduClsTeacherType: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelEduClsTeacherTypesAsync';
  const strAction = 'DelEduClsTeacherTypes';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdEduClsTeacherType, config);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function EduClsTeacherType_DelEduClsTeacherTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelEduClsTeacherTypesByCondAsync';
  const strAction = 'DelEduClsTeacherTypesByCond';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objEduClsTeacherTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function EduClsTeacherType_AddNewRecordAsync(
  objEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objEduClsTeacherTypeEN.idEduClsTeacherType === null ||
    objEduClsTeacherTypeEN.idEduClsTeacherType === ''
  ) {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objEduClsTeacherTypeEN);
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEduClsTeacherTypeEN, config);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objEduClsTeacherTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function EduClsTeacherType_AddNewRecordWithMaxIdAsync(
  objEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEduClsTeacherTypeEN, config);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function EduClsTeacherType_AddNewObjSave(
  objEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    EduClsTeacherType_CheckPropertyNew(objEduClsTeacherTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${eduClsTeacherType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    let returnBool = false;
    const bolIsExist = await EduClsTeacherType_IsExistAsync(
      objEduClsTeacherTypeEN.idEduClsTeacherType,
    );
    if (bolIsExist == true) {
      const strMsg = Format(
        '添加记录时,关键字：{0}已经存在!',
        objEduClsTeacherTypeEN.idEduClsTeacherType,
      );
      console.error(strMsg);
      throw strMsg;
    }
    returnBool = await EduClsTeacherType_AddNewRecordAsync(objEduClsTeacherTypeEN);
    if (returnBool == true) {
      EduClsTeacherType_ReFreshCache();
    } else {
      const strInfo = `添加[教学班教师角色表2(EduClsTeacherType)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: objEduClsTeacherTypeEN.idEduClsTeacherType, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${eduClsTeacherType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function EduClsTeacherType_UpdateObjSave(
  objEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objEduClsTeacherTypeEN.sfUpdFldSetStr = objEduClsTeacherTypeEN.updFldString; //设置哪些字段被修改(脏字段)
  if (
    objEduClsTeacherTypeEN.idEduClsTeacherType == '' ||
    objEduClsTeacherTypeEN.idEduClsTeacherType == undefined
  ) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    EduClsTeacherType_CheckProperty4Update(objEduClsTeacherTypeEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${eduClsTeacherType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const returnBool = await EduClsTeacherType_UpdateRecordAsync(objEduClsTeacherTypeEN);
    if (returnBool == true) {
      EduClsTeacherType_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${eduClsTeacherType_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objEduClsTeacherTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function EduClsTeacherType_AddNewRecordWithReturnKeyAsync(
  objEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEduClsTeacherTypeEN, config);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objEduClsTeacherTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function EduClsTeacherType_UpdateRecordAsync(
  objEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objEduClsTeacherTypeEN.sfUpdFldSetStr === undefined ||
    objEduClsTeacherTypeEN.sfUpdFldSetStr === null ||
    objEduClsTeacherTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objEduClsTeacherTypeEN.idEduClsTeacherType,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEduClsTeacherTypeEN, config);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objEduClsTeacherTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function EduClsTeacherType_EditRecordExAsync(
  objEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objEduClsTeacherTypeEN.sfUpdFldSetStr === undefined ||
    objEduClsTeacherTypeEN.sfUpdFldSetStr === null ||
    objEduClsTeacherTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objEduClsTeacherTypeEN.idEduClsTeacherType,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEduClsTeacherTypeEN, config);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objEduClsTeacherTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function EduClsTeacherType_UpdateWithConditionAsync(
  objEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objEduClsTeacherTypeEN.sfUpdFldSetStr === undefined ||
    objEduClsTeacherTypeEN.sfUpdFldSetStr === null ||
    objEduClsTeacherTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objEduClsTeacherTypeEN.idEduClsTeacherType,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);
  objEduClsTeacherTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objEduClsTeacherTypeEN, config);
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrIdEduClsTeacherTypeCond:条件对象
 * @returns 对象列表子集
 */
export async function EduClsTeacherType_IsExistRecordCache(
  objEduClsTeacherTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstCache();
  if (arrEduClsTeacherTypeObjLstCache == null) return false;
  let arrEduClsTeacherTypeSel = arrEduClsTeacherTypeObjLstCache;
  if (objEduClsTeacherTypeCond.GetConditions().length == 0)
    return arrEduClsTeacherTypeSel.length > 0 ? true : false;
  try {
    for (const objCondition of objEduClsTeacherTypeCond.GetConditions()) {
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
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrEduClsTeacherTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objEduClsTeacherTypeCond),
      eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * @param strIdEduClsTeacherType:所给的关键字
 * @returns 对象
 */
export async function EduClsTeacherType_IsExistCache(strIdEduClsTeacherType: string) {
  const strThisFuncName = 'IsExistCache';
  const arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstCache();
  if (arrEduClsTeacherTypeObjLstCache == null) return false;
  try {
    const arrEduClsTeacherTypeSel = arrEduClsTeacherTypeObjLstCache.filter(
      (x) => x.idEduClsTeacherType == strIdEduClsTeacherType,
    );
    if (arrEduClsTeacherTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdEduClsTeacherType,
      eduClsTeacherType_ConstructorName,
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
 * @param strIdEduClsTeacherType:关键字
 * @returns 是否存在?存在返回True
 **/
export async function EduClsTeacherType_IsExistAsync(
  strIdEduClsTeacherType: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdEduClsTeacherType,
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
export async function EduClsTeacherType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * @param objEduClsTeacherTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function EduClsTeacherType_GetRecCountByCondCache(
  objEduClsTeacherTypeCond: ConditionCollection,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrEduClsTeacherTypeObjLstCache = await EduClsTeacherType_GetObjLstCache();
  if (arrEduClsTeacherTypeObjLstCache == null) return 0;
  let arrEduClsTeacherTypeSel = arrEduClsTeacherTypeObjLstCache;
  if (objEduClsTeacherTypeCond.GetConditions().length == 0) return arrEduClsTeacherTypeSel.length;
  try {
    for (const objCondition of objEduClsTeacherTypeCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrEduClsTeacherTypeSel = arrEduClsTeacherTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrEduClsTeacherTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objEduClsTeacherTypeCond),
      eduClsTeacherType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function EduClsTeacherType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(eduClsTeacherType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
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
        eduClsTeacherType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        eduClsTeacherType_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function EduClsTeacherType_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export function EduClsTeacherType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsEduClsTeacherTypeEN._CurrTabName;
  switch (clsEduClsTeacherTypeEN.CacheModeId) {
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
  clsEduClsTeacherTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function EduClsTeacherType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsEduClsTeacherTypeEN._CurrTabName;
    switch (clsEduClsTeacherTypeEN.CacheModeId) {
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
    clsEduClsTeacherTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export function EduClsTeacherType_GetLastRefreshTime(): string {
  if (clsEduClsTeacherTypeEN._RefreshTimeLst.length == 0) return '';
  return clsEduClsTeacherTypeEN._RefreshTimeLst[clsEduClsTeacherTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function EduClsTeacherType_BindDdl_IdEduClsTeacherTypeInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_IdEduClsTeacherTypeInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdEduClsTeacherTypeInDivCache");
  const arrObjLstSel = await EduClsTeacherType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsEduClsTeacherTypeEN.con_IdEduClsTeacherType,
    clsEduClsTeacherTypeEN.con_EduClsTeacherTypeDesc,
    '选教学班教师角色表2...',
  );
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function EduClsTeacherType_GetArrEduClsTeacherTypeByEduClsTeacherTypeDescCache() {
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdEduClsTeacherTypeInDivCache");
  const arrEduClsTeacherType = new Array<clsEduClsTeacherTypeEN>();
  const arrObjLstSel = await EduClsTeacherType_GetObjLstCache();
  if (arrObjLstSel == null) return null;
  const obj0 = new clsEduClsTeacherTypeEN();
  obj0.idEduClsTeacherType = '0';
  obj0.eduClsTeacherTypeDesc = '选教学班教师角色表2...';
  arrEduClsTeacherType.push(obj0);
  arrObjLstSel.forEach((x) => arrEduClsTeacherType.push(x));
  return arrEduClsTeacherType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function EduClsTeacherType_CheckPropertyNew(
  pobjEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.idEduClsTeacherType) == false &&
    GetStrLen(pobjEduClsTeacherTypeEN.idEduClsTeacherType) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[教学班老师角色(主讲,辅导)流水号(idEduClsTeacherType)]的长度不能超过4(In 教学班教师角色表2(EduClsTeacherType))!值:${pobjEduClsTeacherTypeEN.idEduClsTeacherType}(clsEduClsTeacherTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.eduClsTeacherTypeId) == false &&
    GetStrLen(pobjEduClsTeacherTypeEN.eduClsTeacherTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[教学班教学类型ID(eduClsTeacherTypeId)]的长度不能超过4(In 教学班教师角色表2(EduClsTeacherType))!值:${pobjEduClsTeacherTypeEN.eduClsTeacherTypeId}(clsEduClsTeacherTypeBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc) == false &&
    GetStrLen(pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[教学班教师类型名(eduClsTeacherTypeDesc)]的长度不能超过20(In 教学班教师角色表2(EduClsTeacherType))!值:${pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc}(clsEduClsTeacherTypeBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.idEduClsTeacherType) == false &&
    undefined !== pobjEduClsTeacherTypeEN.idEduClsTeacherType &&
    tzDataType.isString(pobjEduClsTeacherTypeEN.idEduClsTeacherType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[教学班老师角色(主讲,辅导)流水号(idEduClsTeacherType)]的值:[${pobjEduClsTeacherTypeEN.idEduClsTeacherType}], 非法,应该为字符型(In 教学班教师角色表2(EduClsTeacherType))!(clsEduClsTeacherTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.eduClsTeacherTypeId) == false &&
    undefined !== pobjEduClsTeacherTypeEN.eduClsTeacherTypeId &&
    tzDataType.isString(pobjEduClsTeacherTypeEN.eduClsTeacherTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[教学班教学类型ID(eduClsTeacherTypeId)]的值:[${pobjEduClsTeacherTypeEN.eduClsTeacherTypeId}], 非法,应该为字符型(In 教学班教师角色表2(EduClsTeacherType))!(clsEduClsTeacherTypeBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc) == false &&
    undefined !== pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc &&
    tzDataType.isString(pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[教学班教师类型名(eduClsTeacherTypeDesc)]的值:[${pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc}], 非法,应该为字符型(In 教学班教师角色表2(EduClsTeacherType))!(clsEduClsTeacherTypeBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function EduClsTeacherType_CheckProperty4Update(
  pobjEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.idEduClsTeacherType) == false &&
    GetStrLen(pobjEduClsTeacherTypeEN.idEduClsTeacherType) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[教学班老师角色(主讲,辅导)流水号(idEduClsTeacherType)]的长度不能超过4(In 教学班教师角色表2(EduClsTeacherType))!值:${pobjEduClsTeacherTypeEN.idEduClsTeacherType}(clsEduClsTeacherTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.eduClsTeacherTypeId) == false &&
    GetStrLen(pobjEduClsTeacherTypeEN.eduClsTeacherTypeId) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[教学班教学类型ID(eduClsTeacherTypeId)]的长度不能超过4(In 教学班教师角色表2(EduClsTeacherType))!值:${pobjEduClsTeacherTypeEN.eduClsTeacherTypeId}(clsEduClsTeacherTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc) == false &&
    GetStrLen(pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[教学班教师类型名(eduClsTeacherTypeDesc)]的长度不能超过20(In 教学班教师角色表2(EduClsTeacherType))!值:${pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc}(clsEduClsTeacherTypeBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.idEduClsTeacherType) == false &&
    undefined !== pobjEduClsTeacherTypeEN.idEduClsTeacherType &&
    tzDataType.isString(pobjEduClsTeacherTypeEN.idEduClsTeacherType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[教学班老师角色(主讲,辅导)流水号(idEduClsTeacherType)]的值:[${pobjEduClsTeacherTypeEN.idEduClsTeacherType}], 非法,应该为字符型(In 教学班教师角色表2(EduClsTeacherType))!(clsEduClsTeacherTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.eduClsTeacherTypeId) == false &&
    undefined !== pobjEduClsTeacherTypeEN.eduClsTeacherTypeId &&
    tzDataType.isString(pobjEduClsTeacherTypeEN.eduClsTeacherTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[教学班教学类型ID(eduClsTeacherTypeId)]的值:[${pobjEduClsTeacherTypeEN.eduClsTeacherTypeId}], 非法,应该为字符型(In 教学班教师角色表2(EduClsTeacherType))!(clsEduClsTeacherTypeBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc) == false &&
    undefined !== pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc &&
    tzDataType.isString(pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[教学班教师类型名(eduClsTeacherTypeDesc)]的值:[${pobjEduClsTeacherTypeEN.eduClsTeacherTypeDesc}], 非法,应该为字符型(In 教学班教师角色表2(EduClsTeacherType))!(clsEduClsTeacherTypeBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjEduClsTeacherTypeEN.idEduClsTeacherType) === true) {
    throw new Error(
      `(errid:Watl000064)字段[教学班老师角色(主讲,辅导)流水号]不能为空(In 教学班教师角色表2)!(clsEduClsTeacherTypeBL:CheckProperty4Update)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function EduClsTeacherType_GetJSONStrByObj(
  pobjEduClsTeacherTypeEN: clsEduClsTeacherTypeEN,
): string {
  pobjEduClsTeacherTypeEN.sfUpdFldSetStr = pobjEduClsTeacherTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjEduClsTeacherTypeEN);
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
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function EduClsTeacherType_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsEduClsTeacherTypeEN> {
  let arrEduClsTeacherTypeObjLst = new Array<clsEduClsTeacherTypeEN>();
  if (strJSON === '') {
    return arrEduClsTeacherTypeObjLst;
  }
  try {
    arrEduClsTeacherTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrEduClsTeacherTypeObjLst;
  }
  return arrEduClsTeacherTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrEduClsTeacherTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function EduClsTeacherType_GetObjLstByJSONObjLst(
  arrEduClsTeacherTypeObjLstS: Array<clsEduClsTeacherTypeEN>,
): Array<clsEduClsTeacherTypeEN> {
  const arrEduClsTeacherTypeObjLst = new Array<clsEduClsTeacherTypeEN>();
  for (const objInFor of arrEduClsTeacherTypeObjLstS) {
    const obj1 = EduClsTeacherType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrEduClsTeacherTypeObjLst.push(obj1);
  }
  return arrEduClsTeacherTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-11
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function EduClsTeacherType_GetObjByJSONStr(strJSON: string): clsEduClsTeacherTypeEN {
  let pobjEduClsTeacherTypeEN = new clsEduClsTeacherTypeEN();
  if (strJSON === '') {
    return pobjEduClsTeacherTypeEN;
  }
  try {
    pobjEduClsTeacherTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjEduClsTeacherTypeEN;
  }
  return pobjEduClsTeacherTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function EduClsTeacherType_GetCombineCondition(
  objEduClsTeacherTypeCond: clsEduClsTeacherTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objEduClsTeacherTypeCond.dicFldComparisonOp,
      clsEduClsTeacherTypeEN.con_IdEduClsTeacherType,
    ) == true
  ) {
    const strComparisonOpIdEduClsTeacherType: string =
      objEduClsTeacherTypeCond.dicFldComparisonOp[clsEduClsTeacherTypeEN.con_IdEduClsTeacherType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEduClsTeacherTypeEN.con_IdEduClsTeacherType,
      objEduClsTeacherTypeCond.idEduClsTeacherType,
      strComparisonOpIdEduClsTeacherType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEduClsTeacherTypeCond.dicFldComparisonOp,
      clsEduClsTeacherTypeEN.con_EduClsTeacherTypeId,
    ) == true
  ) {
    const strComparisonOpEduClsTeacherTypeId: string =
      objEduClsTeacherTypeCond.dicFldComparisonOp[clsEduClsTeacherTypeEN.con_EduClsTeacherTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEduClsTeacherTypeEN.con_EduClsTeacherTypeId,
      objEduClsTeacherTypeCond.eduClsTeacherTypeId,
      strComparisonOpEduClsTeacherTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objEduClsTeacherTypeCond.dicFldComparisonOp,
      clsEduClsTeacherTypeEN.con_EduClsTeacherTypeDesc,
    ) == true
  ) {
    const strComparisonOpEduClsTeacherTypeDesc: string =
      objEduClsTeacherTypeCond.dicFldComparisonOp[clsEduClsTeacherTypeEN.con_EduClsTeacherTypeDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsEduClsTeacherTypeEN.con_EduClsTeacherTypeDesc,
      objEduClsTeacherTypeCond.eduClsTeacherTypeDesc,
      strComparisonOpEduClsTeacherTypeDesc,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objEduClsTeacherTypeENS:源对象
 * @param objEduClsTeacherTypeENT:目标对象
 */
export function EduClsTeacherType_CopyObjTo(
  objEduClsTeacherTypeENS: clsEduClsTeacherTypeEN,
  objEduClsTeacherTypeENT: clsEduClsTeacherTypeEN,
): void {
  objEduClsTeacherTypeENT.idEduClsTeacherType = objEduClsTeacherTypeENS.idEduClsTeacherType; //教学班老师角色(主讲,辅导)流水号
  objEduClsTeacherTypeENT.eduClsTeacherTypeId = objEduClsTeacherTypeENS.eduClsTeacherTypeId; //教学班教学类型ID
  objEduClsTeacherTypeENT.eduClsTeacherTypeDesc = objEduClsTeacherTypeENS.eduClsTeacherTypeDesc; //教学班教师类型名
  objEduClsTeacherTypeENT.sfUpdFldSetStr = objEduClsTeacherTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objEduClsTeacherTypeENS:源对象
 * @param objEduClsTeacherTypeENT:目标对象
 */
export function EduClsTeacherType_GetObjFromJsonObj(
  objEduClsTeacherTypeENS: clsEduClsTeacherTypeEN,
): clsEduClsTeacherTypeEN {
  const objEduClsTeacherTypeENT: clsEduClsTeacherTypeEN = new clsEduClsTeacherTypeEN();
  ObjectAssign(objEduClsTeacherTypeENT, objEduClsTeacherTypeENS);
  return objEduClsTeacherTypeENT;
}

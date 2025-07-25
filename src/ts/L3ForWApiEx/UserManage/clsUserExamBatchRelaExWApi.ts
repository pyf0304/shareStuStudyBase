﻿/**
 * 类名:clsUserExamBatchRelaExWApi
 * 表名:UserExamBatchRela(01120980)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/06 16:39:11
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户考核批次关系(UserExamBatchRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年01月06日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsUserExamBatchRelaENEx } from '@/ts/L0Entity/UserManage/clsUserExamBatchRelaENEx';
import {
  UserExamBatchRela_GetObjFromJsonObj,
  UserExamBatchRela_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage/clsUserExamBatchRelaWApi';
import { clsUserExamBatchRelaEN } from '@/ts/L0Entity/UserManage/clsUserExamBatchRelaEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userExamBatchRelaEx_Controller = 'UserExamBatchRelaExApi';
export const userExamBatchRelaEx_ConstructorName = 'userExamBatchRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UserExamBatchRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objUserExamBatchRelaENS:源对象
 * @returns 目标对象=>clsUserExamBatchRelaEN:objUserExamBatchRelaENT
 **/
export function UserExamBatchRelaEx_CopyToEx(
  objUserExamBatchRelaENS: clsUserExamBatchRelaEN,
): clsUserExamBatchRelaENEx {
  const strThisFuncName = UserExamBatchRelaEx_CopyToEx.name;
  const objUserExamBatchRelaENT = new clsUserExamBatchRelaENEx();
  try {
    ObjectAssign(objUserExamBatchRelaENT, objUserExamBatchRelaENS);
    return objUserExamBatchRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      userExamBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUserExamBatchRelaENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-01-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function UserExamBatchRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return UserExamBatchRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return UserExamBatchRela_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-01-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function UserExamBatchRelaEx_FuncMapByFldName(
  strFldName: string,
  objUserExamBatchRelaEx: clsUserExamBatchRelaENEx,
) {
  const strThisFuncName = UserExamBatchRelaEx_FuncMapByFldName.name;
  console.log(objUserExamBatchRelaEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsUserExamBatchRelaEN.AttributeName;
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
 * 根据游戏等级名称和课程ID获取相应记录的对象
 * @param strBatchType: 游戏等级名称
 * @param strCourseId: 课程ID
 * @returns 对象
 **/
export async function UserExamBatchRelaEx_GetObjWithAddByBatchType(
  strUserId: string,
  strIdCurrEduCls: string,
  strBatchTypeId: string,
): Promise<clsUserExamBatchRelaEN | null> {
  const strThisFuncName = 'GetObjWithAddByBatchType';

  if (IsNullOrEmpty(strUserId) || IsNullOrEmpty(strBatchTypeId)) {
    const strMsg = Format(
      '参数:[strUserId]和[strBatchTypeId]不能为空!(In clsUserExamBatchRelaWApi.GetObjWithAddByBatchType)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strAction = 'GetObjWithAddByBatchType';
  const strUrl = GetWebApiUrl(userExamBatchRelaEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strIdCurrEduCls,
      strBatchTypeId,
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
      const objUserExamBatchRela = UserExamBatchRela_GetObjFromJsonObj(returnObj);
      return objUserExamBatchRela;
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
        userExamBatchRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userExamBatchRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function UserExamBatchRelaEx_GetObjByBatchType(
  strUserId: string,
  strIdCurrEduCls: string,
  strBatchTypeId: string,
): Promise<clsUserExamBatchRelaEN | null> {
  const strThisFuncName = 'GetObjByBatchType';

  if (IsNullOrEmpty(strUserId) || IsNullOrEmpty(strBatchTypeId)) {
    const strMsg = Format(
      '参数:[strUserId]和[strBatchTypeId]不能为空!(In clsUserExamBatchRelaWApi.GetObjWithAddByBatchType)',
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strAction = 'GetObjByBatchType';
  const strUrl = GetWebApiUrl(userExamBatchRelaEx_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strIdCurrEduCls,
      strBatchTypeId,
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
      const objUserExamBatchRela = UserExamBatchRela_GetObjFromJsonObj(returnObj);
      return objUserExamBatchRela;
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
        userExamBatchRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userExamBatchRelaEx_ConstructorName,
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
 * 检查预测，如果给定知识点和难度已经预测过，就返回false
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strUserId: 用户Id
 * @param strIdCurrEduCls: 教学班流水号
 * @param strBatchTypeId: 批次类型Id
 * @param strCourseKnowledgeId: 知识点Id
 * @param strDifficultyLevelId: 难度Id
 * @returns 获取的相应对象列表
 */
export async function UserExamBatchRelaEx_CheckPreTest(
  strUserId: string,
  strIdCurrEduCls: string,
  strBatchTypeId: string,
  strCourseKnowledgeId: string,
  strDifficultyLevelId: string,
): Promise<boolean> {
  const strThisFuncName = UserExamBatchRelaEx_CheckPreTest.name;
  const strAction = 'CheckPreTest';
  const strUrl = UserExamBatchRelaEx_GetWebApiUrl(userExamBatchRelaEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserId,
      strIdCurrEduCls,
      strBatchTypeId,
      strCourseKnowledgeId,
      strDifficultyLevelId,
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
        userExamBatchRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        userExamBatchRelaEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

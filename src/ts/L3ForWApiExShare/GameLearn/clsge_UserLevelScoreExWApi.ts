﻿/**
 * 类名:clsge_UserLevelScoreExWApi
 * 表名:ge_UserLevelScore(01120942)
 * 版本:2024.11.13.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/13 06:11:32
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户闯关得分(ge_UserLevelScore)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月13日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ge_UserLevelScore_GetObjLstCache,
  ge_UserLevelScore_GetObjLstByPagerAsync,
  ge_UserLevelScore_SortFunByKey,
  ge_UserLevelScore_FilterFunByKey,
} from '@/ts/L3ForWApi/GameLearn/clsge_UserLevelScoreWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsge_UserLevelScoreEN } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreEN';
import { clsge_UserLevelScoreENEx } from '@/ts/L0Entity/GameLearn/clsge_UserLevelScoreENEx';
import { vUsersSim_func, vUsersSim_funcKey } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';

import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import {
  ge_GameLevel_func,
  ge_GameLevel_funcKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_GameLevelWApi';
import { clsge_GameLevelEN } from '@/ts/L0Entity/Knowledges/clsge_GameLevelEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vCurrEduCls_Sim_func,
  vCurrEduCls_Sim_funcKey,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';

export const ge_UserLevelScoreExController = 'ge_UserLevelScoreExApi';
export const ge_UserLevelScoreEx_ConstructorName = 'ge_UserLevelScoreEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_UserLevelScoreEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objge_UserLevelScoreENS:源对象
 * @returns 目标对象=>clsge_UserLevelScoreEN:objge_UserLevelScoreENT
 **/
export function ge_UserLevelScoreEx_CopyToEx(
  objge_UserLevelScoreENS: clsge_UserLevelScoreEN,
): clsge_UserLevelScoreENEx {
  const strThisFuncName = ge_UserLevelScoreEx_CopyToEx.name;
  const objge_UserLevelScoreENT = new clsge_UserLevelScoreENEx();
  try {
    ObjectAssign(objge_UserLevelScoreENT, objge_UserLevelScoreENS);
    return objge_UserLevelScoreENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_UserLevelScoreENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_UserLevelScoreEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_UserLevelScoreENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_UserLevelScoreObjLst = await ge_UserLevelScore_GetObjLstByPagerAsync(objPagerPara);
  const arrge_UserLevelScoreExObjLst = arrge_UserLevelScoreObjLst.map(ge_UserLevelScoreEx_CopyToEx);
  if (arrge_UserLevelScoreExObjLst.length == 0) return arrge_UserLevelScoreExObjLst;
  let arrge_UserLevelScoreSel: Array<clsge_UserLevelScoreENEx> = arrge_UserLevelScoreExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.sort(
        ge_UserLevelScoreEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_UserLevelScoreSel = arrge_UserLevelScoreSel.sort(objPagerPara.sortFun);
    }
    return arrge_UserLevelScoreSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_UserLevelScoreENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapUserName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.userName) == true) {
      const vUsersSimUserId = objge_UserLevelScore.userId;
      const vUsersSimUserName = await vUsersSim_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSimUserId,
        clsSysPara4WebApi.cmPrjId,
      );
      objge_UserLevelScore.userName = vUsersSimUserName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000638)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapCourseName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.courseName) == true) {
      const vccCourseSimCourseId = objge_UserLevelScore.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objge_UserLevelScore.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapEduClsName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.eduClsName) == true) {
      const CurrEduClsIdCurrEduCls = objge_UserLevelScore.idCurrEduCls;
      const CurrEduClsEduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduClsIdCurrEduCls,
        objge_UserLevelScore.courseId,
      );
      objge_UserLevelScore.eduClsName = CurrEduClsEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapGameLevelName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.gameLevelName) == true) {
      const geGameLevelGameLevelId = objge_UserLevelScore.gameLevelId;
      const geGameLevelGameLevelName = await ge_GameLevel_func(
        clsge_GameLevelEN.con_GameLevelId,
        clsge_GameLevelEN.con_GameLevelName,
        geGameLevelGameLevelId,
        objge_UserLevelScore.courseId,
      );
      objge_UserLevelScore.gameLevelName = geGameLevelGameLevelName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000914)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
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
export function ge_UserLevelScoreEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_UserLevelScoreENEx.con_UserName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsge_UserLevelScoreENEx.con_CourseName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsge_UserLevelScoreENEx.con_EduClsName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsge_UserLevelScoreENEx.con_GameLevelName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.gameLevelName.localeCompare(b.gameLevelName);
        };
      case clsge_UserLevelScoreENEx.con_UpdDateSim:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.updDateSim.localeCompare(b.updDateSim);
        };
      case clsge_UserLevelScoreENEx.con_OrderNum:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return a.orderNum - b.orderNum;
        };
      default:
        return ge_UserLevelScore_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_UserLevelScoreENEx.con_UserName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsge_UserLevelScoreENEx.con_CourseName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsge_UserLevelScoreENEx.con_EduClsName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsge_UserLevelScoreENEx.con_GameLevelName:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.gameLevelName.localeCompare(a.gameLevelName);
        };
      case clsge_UserLevelScoreENEx.con_UpdDateSim:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.updDateSim.localeCompare(a.updDateSim);
        };
      case clsge_UserLevelScoreENEx.con_OrderNum:
        return (a: clsge_UserLevelScoreENEx, b: clsge_UserLevelScoreENEx) => {
          return b.orderNum - a.orderNum;
        };
      default:
        return ge_UserLevelScore_SortFunByKey(strKey, AscOrDesc);
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
export function ge_UserLevelScoreEx_FuncMapByFldName(
  strFldName: string,
  objge_UserLevelScoreEx: clsge_UserLevelScoreENEx,
) {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_UserLevelScoreEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_UserLevelScoreENEx.con_UserName:
      return ge_UserLevelScoreEx_FuncMapUserName(objge_UserLevelScoreEx);
    case clsge_UserLevelScoreENEx.con_CourseName:
      return ge_UserLevelScoreEx_FuncMapCourseName(objge_UserLevelScoreEx);
    case clsge_UserLevelScoreENEx.con_EduClsName:
      return ge_UserLevelScoreEx_FuncMapEduClsName(objge_UserLevelScoreEx);
    case clsge_UserLevelScoreENEx.con_GameLevelName:
      return ge_UserLevelScoreEx_FuncMapGameLevelName(objge_UserLevelScoreEx);
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
 * 日期:2024-11-13
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_UserLevelScoreEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_UserLevelScoreENEx.con_UserName:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.userName === value;
      };
    case clsge_UserLevelScoreENEx.con_CourseName:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.courseName === value;
      };
    case clsge_UserLevelScoreENEx.con_EduClsName:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.eduClsName === value;
      };
    case clsge_UserLevelScoreENEx.con_GameLevelName:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.gameLevelName === value;
      };
    case clsge_UserLevelScoreENEx.con_UpdDateSim:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.updDateSim === value;
      };
    case clsge_UserLevelScoreENEx.con_OrderNum:
      return (obj: clsge_UserLevelScoreENEx) => {
        return obj.orderNum === value;
      };
    default:
      return ge_UserLevelScore_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKeyUserName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKeyUserName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.userName) == true) return [];
    const vUsersSimUserName = objge_UserLevelScore.userName;
    const arrUserId = await vUsersSim_funcKey(
      clsvUsersSimEN.con_UserName,
      vUsersSimUserName,
      clsSysPara4WebApi.cmPrjId,
      enumComparisonOp.Like_03,
    );
    return arrUserId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000641)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
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
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKeyCourseName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.courseName) == true) return [];
    const vccCourseSimCourseName = objge_UserLevelScore.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000541)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
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
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKeyEduClsName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.eduClsName) == true) return [];
    const CurrEduClsEduClsName = objge_UserLevelScore.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsCurrEduClsEN.con_EduClsName,
      CurrEduClsEduClsName,
      objge_UserLevelScore.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
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
 * @param objge_UserLevelScoreS:源对象
 **/
export async function ge_UserLevelScoreEx_FuncMapKeyGameLevelName(
  objge_UserLevelScore: clsge_UserLevelScoreENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_UserLevelScoreEx_FuncMapKeyGameLevelName.name;
  try {
    if (IsNullOrEmpty(objge_UserLevelScore.gameLevelName) == true) return [];
    const geGameLevelGameLevelName = objge_UserLevelScore.gameLevelName;
    const arrGameLevelId = await ge_GameLevel_funcKey(
      clsge_GameLevelEN.con_GameLevelName,
      geGameLevelGameLevelName,
      objge_UserLevelScore.courseId,
      enumComparisonOp.Like_03,
    );
    return arrGameLevelId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000920)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_UserLevelScoreEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

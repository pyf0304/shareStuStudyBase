﻿/**
 * 类名:clscc_KnowledgeModulesExWApi
 * 表名:cc_KnowledgeModules(01120959)
 * 版本:2025.02.18.1(服务器:PYF-AI)
 * 日期:2025/02/26 15:23:54
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点模块(cc_KnowledgeModules)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年02月26日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  cc_KnowledgeModules_GetObjLstCache,
  cc_KnowledgeModules_GetObjLstByPagerAsync,
  cc_KnowledgeModules_SortFunByKey,
  cc_KnowledgeModules_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgeModulesWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  cc_KnowledgeModulesCache,
  isFuncMapCache,
} from '@/viewsShare/Knowledges/cc_KnowledgeModulesVueShare';
import { clscc_KnowledgeModulesEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN';
import { clscc_KnowledgeModulesENEx } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesENEx';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { cc_CourseKnowledgesEx_GetKnowledgeNumByKnowledgeModuleIdCache } from '@/ts/L3ForWApiExShare/Knowledges/clscc_CourseKnowledgesExWApi';

export const cc_KnowledgeModulesEx_Controller = 'cc_KnowledgeModulesExApi';
export const cc_KnowledgeModulesEx_ConstructorName = 'cc_KnowledgeModulesEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_KnowledgeModulesEx_GetWebApiUrl(
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
 * @param objcc_KnowledgeModulesENS:源对象
 * @returns 目标对象=>clscc_KnowledgeModulesEN:objcc_KnowledgeModulesENT
 **/
export function cc_KnowledgeModulesEx_CopyToEx(
  objcc_KnowledgeModulesENS: clscc_KnowledgeModulesEN,
): clscc_KnowledgeModulesENEx {
  const strThisFuncName = cc_KnowledgeModulesEx_CopyToEx.name;
  const objcc_KnowledgeModulesENT = new clscc_KnowledgeModulesENEx();
  try {
    ObjectAssign(objcc_KnowledgeModulesENT, objcc_KnowledgeModulesENS);
    return objcc_KnowledgeModulesENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeModulesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_KnowledgeModulesENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_KnowledgeModulesEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_KnowledgeModulesENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_KnowledgeModulesObjLst = await cc_KnowledgeModules_GetObjLstByPagerAsync(
    objPagerPara,
  );
  const arrcc_KnowledgeModulesExObjLst = arrcc_KnowledgeModulesObjLst.map(
    cc_KnowledgeModulesEx_CopyToEx,
  );
  if (arrcc_KnowledgeModulesExObjLst.length == 0) return arrcc_KnowledgeModulesExObjLst;
  let arrcc_KnowledgeModulesSel: Array<clscc_KnowledgeModulesENEx> = arrcc_KnowledgeModulesExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.sort(
        cc_KnowledgeModulesEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.sort(objPagerPara.sortFun);
    }
    return arrcc_KnowledgeModulesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_KnowledgeModulesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_KnowledgeModulesENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgeModulesS:源对象
 **/
export async function cc_KnowledgeModulesEx_FuncMapCourseName(
  objcc_KnowledgeModules: clscc_KnowledgeModulesENEx,
) {
  const strThisFuncName = cc_KnowledgeModulesEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeModules.courseName) == true) {
      const vccCourseSimCourseId = objcc_KnowledgeModules.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objcc_KnowledgeModules.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeModulesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function cc_KnowledgeModulesEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clscc_KnowledgeModulesENEx.con_CourseName:
        return (a: clscc_KnowledgeModulesENEx, b: clscc_KnowledgeModulesENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clscc_KnowledgeModulesENEx.con_QuestionNum:
        return (a: clscc_KnowledgeModulesENEx, b: clscc_KnowledgeModulesENEx) => {
          return a.questionNum - b.questionNum;
        };
      case clscc_KnowledgeModulesENEx.con_KnowledgeNum:
        return (a: clscc_KnowledgeModulesENEx, b: clscc_KnowledgeModulesENEx) => {
          return a.knowledgeNum - b.knowledgeNum;
        };
      default:
        return cc_KnowledgeModules_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clscc_KnowledgeModulesENEx.con_CourseName:
        return (a: clscc_KnowledgeModulesENEx, b: clscc_KnowledgeModulesENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clscc_KnowledgeModulesENEx.con_QuestionNum:
        return (a: clscc_KnowledgeModulesENEx, b: clscc_KnowledgeModulesENEx) => {
          return b.questionNum - a.questionNum;
        };
      case clscc_KnowledgeModulesENEx.con_KnowledgeNum:
        return (a: clscc_KnowledgeModulesENEx, b: clscc_KnowledgeModulesENEx) => {
          return b.knowledgeNum - a.knowledgeNum;
        };
      default:
        return cc_KnowledgeModules_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-02-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function cc_KnowledgeModulesEx_FuncMapByFldName(
  strFldName: string,
  objcc_KnowledgeModulesEx: clscc_KnowledgeModulesENEx,
) {
  const strThisFuncName = cc_KnowledgeModulesEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clscc_KnowledgeModulesEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_KnowledgeModulesENEx.con_CourseName:
      return cc_KnowledgeModulesEx_FuncMapCourseName(objcc_KnowledgeModulesEx);
    // case clscc_KnowledgeModulesENEx.con_KnowledgeNum:
    //   return cc_KnowledgeModulesEx_FuncMapKnowledgeNum(objcc_KnowledgeModulesEx);
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
 * 日期:2025-02-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function cc_KnowledgeModulesEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clscc_KnowledgeModulesENEx.con_CourseName:
      return (obj: clscc_KnowledgeModulesENEx) => {
        return obj.courseName === value;
      };
    case clscc_KnowledgeModulesENEx.con_QuestionNum:
      return (obj: clscc_KnowledgeModulesENEx) => {
        return obj.questionNum === value;
      };
    case clscc_KnowledgeModulesENEx.con_KnowledgeNum:
      return (obj: clscc_KnowledgeModulesENEx) => {
        return obj.knowledgeNum === value;
      };
    default:
      return cc_KnowledgeModules_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objcc_KnowledgeModulesS:源对象
 **/
export async function cc_KnowledgeModulesEx_FuncMapKeyCourseName(
  objcc_KnowledgeModules: clscc_KnowledgeModulesENEx,
): Promise<Array<string>> {
  const strThisFuncName = cc_KnowledgeModulesEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgeModules.courseName) == true) return [];
    const vccCourseSimCourseName = objcc_KnowledgeModules.courseName;
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
      cc_KnowledgeModulesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function cc_KnowledgeModulesEx_FuncMapKnowledgeNum1(
  objcc_KnowledgeModules: clscc_KnowledgeModulesENEx,
) {
  const strThisFuncName = cc_KnowledgeModulesEx_FuncMapCourseName.name;
  try {
    if (objcc_KnowledgeModules.knowledgeNum == 0) {
      const vccCourseSimCourseId = objcc_KnowledgeModules.courseId;
      const intKnowledgeNum = await cc_CourseKnowledgesEx_GetKnowledgeNumByKnowledgeModuleIdCache(
        objcc_KnowledgeModules.knowledgeModuleId,
        vccCourseSimCourseId,
      );
      if (intKnowledgeNum == 0) objcc_KnowledgeModules.knowledgeNum = -1;
      else objcc_KnowledgeModules.knowledgeNum = intKnowledgeNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgeModulesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export async function cc_KnowledgeModulesEx_GetArrcc_KnowledgeModulesByCourseId(
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clscc_KnowledgeModulesWApi.BindDdl_KnowledgeModuleIdByCourseIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_KnowledgeModulesWApi.BindDdl_KnowledgeModuleIdByCourseIdInDiv)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_KnowledgeModuleIdByCourseIdInDivCache");
  const arrcc_KnowledgeModules = new Array<clscc_KnowledgeModulesEN>();
  let arrObjLstSel = await cc_KnowledgeModules_GetObjLstCache(strCourseId);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel
    .filter((x) => x.courseId == strCourseId)
    .sort(
      cc_KnowledgeModules_SortFunByKey(clscc_KnowledgeModulesEN.con_KnowledgeModuleName, 'Asc'),
    );
  const obj0 = new clscc_KnowledgeModulesEN();
  obj0.knowledgeModuleId = '0';
  obj0.knowledgeModuleName = '选知识点模块...';
  arrcc_KnowledgeModules.push(obj0);
  arrObjLstSel.forEach((x) => arrcc_KnowledgeModules.push(x));
  return arrcc_KnowledgeModules;
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_KnowledgeModulesEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clscc_KnowledgeModulesENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrcc_KnowledgeModulesObjLst = await cc_KnowledgeModules_GetObjLstCache(strCourseId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clscc_KnowledgeModulesENEx>();
  const arrcc_KnowledgeModulesExObjLst = arrcc_KnowledgeModulesObjLst.map((obj) => {
    const cacheKey = `${obj.knowledgeModuleId}_${obj.courseId}`;
    if (cc_KnowledgeModulesCache[cacheKey]) {
      const oldObj = cc_KnowledgeModulesCache[cacheKey];
      return oldObj;
    } else {
      const newObj = cc_KnowledgeModulesEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      cc_KnowledgeModulesCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await cc_KnowledgeModulesEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_KnowledgeModulesEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrcc_KnowledgeModulesExObjLst) {
      await cc_KnowledgeModulesEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.knowledgeModuleId}_${newObj.courseId}`;
      cc_KnowledgeModulesCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrcc_KnowledgeModulesExObjLst.length == 0) return arrcc_KnowledgeModulesExObjLst;
  let arrcc_KnowledgeModulesSel: Array<clscc_KnowledgeModulesENEx> = arrcc_KnowledgeModulesExObjLst;
  const objcc_KnowledgeModulesCond = objPagerPara.conditionCollection;
  if (objcc_KnowledgeModulesCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrcc_KnowledgeModulesExObjLst;
  }
  try {
    for (const objCondition of objcc_KnowledgeModulesCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_KnowledgeModulesSel.length == 0) return arrcc_KnowledgeModulesSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.sort(
        cc_KnowledgeModulesEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.sort(objPagerPara.sortFun);
    }
    arrcc_KnowledgeModulesSel = arrcc_KnowledgeModulesSel.slice(intStart, intEnd);
    return arrcc_KnowledgeModulesSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_KnowledgeModulesEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_KnowledgeModulesENEx>();
}

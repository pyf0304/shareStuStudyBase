/**
 * 知识点逻辑图(gs_KnowledgesGraph)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月05日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";

import { gs_KnowledgesGraphCache } from '@/viewsShare/Knowledges/gs_KnowledgesGraphVueShare';
import { isFuncMapCache } from '@/viewsShare/Knowledges/gs_KnowledgesGraphVueShare';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  gs_KnowledgesGraph_GetObjLstCache,
  gs_KnowledgesGraph_GetObjLstAsync,
  gs_KnowledgesGraph_SortFunByKey,
  gs_KnowledgesGraph_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesGraphWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';

import { clsgs_KnowledgesGraphENEx } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphENEx';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
import { cc_Course_func } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
import axios from 'axios';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';

import { vCurrEduCls_Sim_func } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
export const gs_KnowledgesGraphEx_Controller = 'gs_KnowledgesGraphExApi';
export const gs_KnowledgesGraphEx_ConstructorName = 'gs_KnowledgesGraphEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_KnowledgesGraphEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * @param objgs_KnowledgesGraphENS:源对象
 * @returns 目标对象=>clsgs_KnowledgesGraphEN:objgs_KnowledgesGraphENT
 **/
export function gs_KnowledgesGraphEx_CopyToEx(
  objgs_KnowledgesGraphENS: clsgs_KnowledgesGraphEN,
): clsgs_KnowledgesGraphENEx {
  const strThisFuncName = gs_KnowledgesGraphEx_CopyToEx.name;
  const objgs_KnowledgesGraphENT = new clsgs_KnowledgesGraphENEx();
  try {
    ObjectAssign(objgs_KnowledgesGraphENT, objgs_KnowledgesGraphENS);
    return objgs_KnowledgesGraphENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_KnowledgesGraphEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_KnowledgesGraphENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_KnowledgesGraphEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_KnowledgesGraphENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_KnowledgesGraphObjLst = await gs_KnowledgesGraph_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrgs_KnowledgesGraphExObjLst = arrgs_KnowledgesGraphObjLst.map(
    gs_KnowledgesGraphEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_KnowledgesGraphExObjLst) {
      await gs_KnowledgesGraphEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_KnowledgesGraphExObjLst.length == 0) return arrgs_KnowledgesGraphExObjLst;
  let arrgs_KnowledgesGraph_Sel: Array<clsgs_KnowledgesGraphENEx> = arrgs_KnowledgesGraphExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_KnowledgesGraph_Sel = arrgs_KnowledgesGraph_Sel.sort(
        gs_KnowledgesGraphEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_KnowledgesGraph_Sel = arrgs_KnowledgesGraph_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_KnowledgesGraph_Sel = arrgs_KnowledgesGraph_Sel.slice(intStart, intEnd);
    return arrgs_KnowledgesGraph_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_KnowledgesGraphEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_KnowledgesGraphENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_KnowledgesGraphEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_KnowledgesGraphENEx.con_CourseName:
        return (a: clsgs_KnowledgesGraphENEx, b: clsgs_KnowledgesGraphENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsgs_KnowledgesGraphENEx.con_EduClsName:
        return (a: clsgs_KnowledgesGraphENEx, b: clsgs_KnowledgesGraphENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      default:
        return gs_KnowledgesGraph_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsgs_KnowledgesGraphENEx.con_CourseName:
        return (a: clsgs_KnowledgesGraphENEx, b: clsgs_KnowledgesGraphENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsgs_KnowledgesGraphENEx.con_EduClsName:
        return (a: clsgs_KnowledgesGraphENEx, b: clsgs_KnowledgesGraphENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      default:
        return gs_KnowledgesGraph_SortFunByKey(strKey, AscOrDesc);
    }
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
export function gs_KnowledgesGraphEx_FuncMapByFldName(
  strFldName: string,
  objgs_KnowledgesGraphEx: clsgs_KnowledgesGraphENEx,
) {
  const strThisFuncName = gs_KnowledgesGraphEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsgs_KnowledgesGraphEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsgs_KnowledgesGraphENEx.con_CourseName:
      return gs_KnowledgesGraphEx_FuncMap_CourseName(objgs_KnowledgesGraphEx);
    case clsgs_KnowledgesGraphENEx.con_EduClsName:
      return gs_KnowledgesGraphEx_FuncMap_EduClsName(objgs_KnowledgesGraphEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function gs_KnowledgesGraphEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_KnowledgesGraphENEx.con_CourseName:
      return (obj: clsgs_KnowledgesGraphENEx) => {
        return obj.courseName === value;
      };
    case clsgs_KnowledgesGraphENEx.con_EduClsName:
      return (obj: clsgs_KnowledgesGraphENEx) => {
        return obj.eduClsName === value;
      };
    default:
      return gs_KnowledgesGraph_FilterFunByKey(strKey, value);
  }
}
//提交结构图谱
export async function gs_KnowledgesGraphEx_SubmitKnowledgeGraphAsync(
  knowledgeGraphId: string,
  userId: string,
  takeUpTime: string,
  StandardId: string,
): Promise<boolean> {
  const strThisFuncName = 'SubmitKnowledgeGraphAsync';
  const strAction = 'SubmitKnowledgeGraph';
  let strUrl = gs_KnowledgesGraphEx_GetWebApiUrl(gs_KnowledgesGraphEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();

  let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.post(strUrl, {
      params: {
        strKnowledgeGraphId: knowledgeGraphId,
        strUserId: userId,
        strTakeUpTime: takeUpTime,
        strStandardId: StandardId,
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
        gs_KnowledgesGraphEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_KnowledgesGraphEx_Controller,
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
 * @param objgs_KnowledgesGraphS:源对象
 **/
export async function gs_KnowledgesGraphEx_FuncMap_CourseName(
  objgs_KnowledgesGraph: clsgs_KnowledgesGraphENEx,
) {
  const strThisFuncName = gs_KnowledgesGraphEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objgs_KnowledgesGraph.courseName) == true) {
      const cc_Course_CourseId = objgs_KnowledgesGraph.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objgs_KnowledgesGraph.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_KnowledgesGraphEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objgs_KnowledgesGraphS:源对象
 **/
export async function gs_KnowledgesGraphEx_FuncMap_EduClsName(
  objgs_KnowledgesGraph: clsgs_KnowledgesGraphENEx,
) {
  const strThisFuncName = gs_KnowledgesGraphEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objgs_KnowledgesGraph.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objgs_KnowledgesGraph.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        objgs_KnowledgesGraph.courseId,
      );
      objgs_KnowledgesGraph.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_KnowledgesGraphEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-01
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function gs_KnowledgesGraphEx_SortByUpdDate(
  a: clsgs_KnowledgesGraphEN,
  b: clsgs_KnowledgesGraphEN,
): number {
  return a.updDate.localeCompare(b.updDate);
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_KnowledgesGraphEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clsgs_KnowledgesGraphENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrgs_KnowledgesGraphObjLst = await gs_KnowledgesGraph_GetObjLstCache(strCourseId);
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clsgs_KnowledgesGraphENEx>();
  const arrgs_KnowledgesGraphExObjLst = arrgs_KnowledgesGraphObjLst.map((obj) => {
    const cacheKey = `${obj.knowledgeGraphId}_${obj.courseId}`;
    if (gs_KnowledgesGraphCache[cacheKey]) {
      const oldObj = gs_KnowledgesGraphCache[cacheKey];
      return oldObj;
    } else {
      const newObj = gs_KnowledgesGraphEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      gs_KnowledgesGraphCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await gs_KnowledgesGraphEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsgs_KnowledgesGraphEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrgs_KnowledgesGraphExObjLst) {
      await gs_KnowledgesGraphEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.knowledgeGraphId}_${newObj.courseId}`;
      gs_KnowledgesGraphCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrgs_KnowledgesGraphExObjLst.length == 0) return arrgs_KnowledgesGraphExObjLst;
  let arrgs_KnowledgesGraphSel: Array<clsgs_KnowledgesGraphENEx> = arrgs_KnowledgesGraphExObjLst;
  const objgs_KnowledgesGraphCond = objPagerPara.conditionCollection;
  if (objgs_KnowledgesGraphCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrgs_KnowledgesGraphExObjLst;
  }
  try {
    for (const objCondition of objgs_KnowledgesGraphCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_KnowledgesGraphSel.length == 0) return arrgs_KnowledgesGraphSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.sort(
        gs_KnowledgesGraphEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.sort(objPagerPara.sortFun);
    }
    arrgs_KnowledgesGraphSel = arrgs_KnowledgesGraphSel.slice(intStart, intEnd);
    return arrgs_KnowledgesGraphSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_KnowledgesGraphEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_KnowledgesGraphENEx>();
}

//import $ from "jquery";

import { cc_KnowledgesExamLibRelaCache } from '@/viewsShare/Knowledges/cc_KnowledgesExamLibRelaVueShare';
import { isFuncMapCache } from '@/viewsShare/Knowledges/cc_KnowledgesExamLibRelaVueShare';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { cc_KnowledgesExamLibRela_GetObjLstCache } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clscc_KnowledgesExamLibRelaEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_KnowledgesExamLibRelaENEx } from '@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaENEx';
import { cc_KnowledgesExamLibRela_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import { cc_KnowledgesExamLibRela_SortFunByKey } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { cc_KnowledgesExamLibRela_FilterFunByKey } from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { cc_Course_func } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
import { cc_CourseKnowledges_func } from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';

import { useQuestionnaireStore } from '@/store/modules/questionnaire';

export const cc_KnowledgesExamLibRelaEx_Controller = 'cc_KnowledgesExamLibRelaExApi';
export const cc_KnowledgesExamLibRelaEx_ConstructorName = 'cc_KnowledgesExamLibRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_KnowledgesExamLibRelaEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
  const strThisFuncName = 'GetWebApiUrl';
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
 * @param objcc_KnowledgesExamLibRelaENS:源对象
 * @returns 目标对象=>clscc_KnowledgesExamLibRelaEN:objcc_KnowledgesExamLibRelaENT
 **/
export function cc_KnowledgesExamLibRelaEx_CopyToEx(
  objcc_KnowledgesExamLibRelaENS: clscc_KnowledgesExamLibRelaEN,
): clscc_KnowledgesExamLibRelaENEx {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_CopyToEx.name;
  const objcc_KnowledgesExamLibRelaENT = new clscc_KnowledgesExamLibRelaENEx();
  try {
    ObjectAssign(objcc_KnowledgesExamLibRelaENT, objcc_KnowledgesExamLibRelaENS);
    return objcc_KnowledgesExamLibRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_KnowledgesExamLibRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_KnowledgesExamLibRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_KnowledgesExamLibRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_KnowledgesExamLibRelaObjLst = await cc_KnowledgesExamLibRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcc_KnowledgesExamLibRelaExObjLst = arrcc_KnowledgesExamLibRelaObjLst.map(
    cc_KnowledgesExamLibRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrcc_KnowledgesExamLibRelaExObjLst) {
      const conFuncMap = await cc_KnowledgesExamLibRelaEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrcc_KnowledgesExamLibRelaExObjLst.length == 0) return arrcc_KnowledgesExamLibRelaExObjLst;
  let arrcc_KnowledgesExamLibRela_Sel: Array<clscc_KnowledgesExamLibRelaENEx> =
    arrcc_KnowledgesExamLibRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_KnowledgesExamLibRela_Sel = arrcc_KnowledgesExamLibRela_Sel.sort(
        cc_KnowledgesExamLibRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcc_KnowledgesExamLibRela_Sel = arrcc_KnowledgesExamLibRela_Sel.sort(objPagerPara.sortFun);
    }
    arrcc_KnowledgesExamLibRela_Sel = arrcc_KnowledgesExamLibRela_Sel.slice(intStart, intEnd);
    return arrcc_KnowledgesExamLibRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_KnowledgesExamLibRelaENEx>();
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
export function cc_KnowledgesExamLibRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return cc_KnowledgesExamLibRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return cc_KnowledgesExamLibRela_SortFunByKey(strKey, AscOrDesc);
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
export function cc_KnowledgesExamLibRelaEx_FuncMapByFldName(
  strFldName: string,
  objcc_KnowledgesExamLibRelaEx: clscc_KnowledgesExamLibRelaENEx,
) {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscc_KnowledgesExamLibRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_KnowledgesExamLibRelaENEx.con_QuestionName:
      return cc_KnowledgesExamLibRelaEx_FuncMap_QuestionName(objcc_KnowledgesExamLibRelaEx);
    case clscc_KnowledgesExamLibRelaENEx.con_KnowledgeName:
      return cc_KnowledgesExamLibRelaEx_FuncMap_KnowledgeName(objcc_KnowledgesExamLibRelaEx);
    case clscc_KnowledgesExamLibRelaENEx.con_CourseName:
      return cc_KnowledgesExamLibRelaEx_FuncMap_CourseName(objcc_KnowledgesExamLibRelaEx);
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
export async function cc_KnowledgesExamLibRelaEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return cc_KnowledgesExamLibRela_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMap_CourseName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
) {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMap_CourseName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.courseName) == true) {
      const cc_Course_CourseId = objcc_KnowledgesExamLibRela.courseId;
      const cc_Course_CourseName = await cc_Course_func(
        clscc_CourseEN.con_CourseId,
        clscc_CourseEN.con_CourseName,
        cc_Course_CourseId,
      );
      objcc_KnowledgesExamLibRela.courseName = cc_Course_CourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000184)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMap_KnowledgeName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
) {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMap_KnowledgeName.name;
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.knowledgeName) == true) {
      const cc_CourseKnowledges_CourseKnowledgeId = objcc_KnowledgesExamLibRela.courseKnowledgeId;
      const cc_CourseKnowledges_KnowledgeName = await cc_CourseKnowledges_func(
        clscc_CourseKnowledgesEN.con_CourseKnowledgeId,
        clscc_CourseKnowledgesEN.con_KnowledgeName,
        cc_CourseKnowledges_CourseKnowledgeId,
        objcc_KnowledgesExamLibRela.courseId,
      );
      objcc_KnowledgesExamLibRela.knowledgeName = cc_CourseKnowledges_KnowledgeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000189)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_KnowledgesExamLibRelaS:源对象
 **/
export async function cc_KnowledgesExamLibRelaEx_FuncMap_QuestionName(
  objcc_KnowledgesExamLibRela: clscc_KnowledgesExamLibRelaENEx,
) {
  const strThisFuncName = cc_KnowledgesExamLibRelaEx_FuncMap_QuestionName.name;
  const questionnaireStore = useQuestionnaireStore();
  try {
    if (IsNullOrEmpty(objcc_KnowledgesExamLibRela.questionName) == true) {
      const Questionnaire_QuestionId = objcc_KnowledgesExamLibRela.questionId;
      const Questionnaire_QuestionName = await questionnaireStore.getQuestionName(
        Questionnaire_QuestionId,
      );
      objcc_KnowledgesExamLibRela.questionName = Questionnaire_QuestionName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000191)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_KnowledgesExamLibRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strCourseId: string,
): Promise<Array<clscc_KnowledgesExamLibRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  const isFuncMapKey = `${objSortInfo.SortFld}`;
  const arrcc_KnowledgesExamLibRelaObjLst = await cc_KnowledgesExamLibRela_GetObjLstCache(
    strCourseId,
  );
  //从缓存中获取对象，如果缓存中不存在就扩展复制
  const arrNewObj = new Array<clscc_KnowledgesExamLibRelaENEx>();
  const arrcc_KnowledgesExamLibRelaExObjLst = arrcc_KnowledgesExamLibRelaObjLst.map((obj) => {
    const cacheKey = `${obj.mId}_${obj.courseId}`;
    if (cc_KnowledgesExamLibRelaCache[cacheKey]) {
      const oldObj = cc_KnowledgesExamLibRelaCache[cacheKey];
      return oldObj;
    } else {
      const newObj = cc_KnowledgesExamLibRelaEx_CopyToEx(obj);
      arrNewObj.push(newObj);
      cc_KnowledgesExamLibRelaCache[cacheKey] = newObj;
      return newObj;
    }
  });
  for (const newObj of arrNewObj) {
    for (const strFldName of Object.keys(isFuncMapCache)) {
      await cc_KnowledgesExamLibRelaEx_FuncMapByFldName(strFldName, newObj);
    }
  }
  //检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
  const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clscc_KnowledgesExamLibRelaEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
    (bolIsFuncMap == false || bolIsFuncMap == undefined)
  ) {
    for (const newObj of arrcc_KnowledgesExamLibRelaExObjLst) {
      await cc_KnowledgesExamLibRelaEx_FuncMapByFldName(objSortInfo.SortFld, newObj);
      const cacheKey = `${newObj.mId}_${newObj.courseId}`;
      cc_KnowledgesExamLibRelaCache[cacheKey] = newObj;
    }
    isFuncMapCache[isFuncMapKey] = true;
  }
  if (arrcc_KnowledgesExamLibRelaExObjLst.length == 0) return arrcc_KnowledgesExamLibRelaExObjLst;
  let arrcc_KnowledgesExamLibRelaSel: Array<clscc_KnowledgesExamLibRelaENEx> =
    arrcc_KnowledgesExamLibRelaExObjLst;
  const objcc_KnowledgesExamLibRelaCond = objPagerPara.conditionCollection;
  if (objcc_KnowledgesExamLibRelaCond == null) {
    const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${strThisFuncName})`;
    alert(strMsg);
    console.error(strMsg);
    return arrcc_KnowledgesExamLibRelaExObjLst;
  }
  try {
    for (const objCondition of objcc_KnowledgesExamLibRelaCond.GetConditions()) {
      if (objCondition == null) continue;
      const strKey = objCondition.fldName;
      const strComparisonOp = objCondition.comparison;
      const strValue = objCondition.fldValue;
      arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrcc_KnowledgesExamLibRelaSel.length == 0) return arrcc_KnowledgesExamLibRelaSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.sort(
        cc_KnowledgesExamLibRelaEx_SortFunByKey(objSortInfo.SortFld, objSortInfo.SortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.sort(objPagerPara.sortFun);
    }
    arrcc_KnowledgesExamLibRelaSel = arrcc_KnowledgesExamLibRelaSel.slice(intStart, intEnd);
    return arrcc_KnowledgesExamLibRelaSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_KnowledgesExamLibRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_KnowledgesExamLibRelaENEx>();
}

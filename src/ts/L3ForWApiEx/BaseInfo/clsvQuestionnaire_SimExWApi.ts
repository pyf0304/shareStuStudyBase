﻿/**
 * 类名:clsvQuestionnaire_SimExWApi
 * 表名:vQuestionnaire_Sim(01120949)
 * 版本:2024.02.03.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/06 15:13:56
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息(BaseInfo)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQuestionnaire_Sim(vQuestionnaire_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月06日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vQuestionnaire_Sim_GetObjLstCache,
  vQuestionnaire_Sim_GetObjLstAsync,
  vQuestionnaire_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/QuestionaireEdit/clsvQuestionnaire_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvQuestionnaire_SimEN } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimEN';
import { clsvQuestionnaire_SimENEx } from '@/ts/L0Entity/QuestionaireEdit/clsvQuestionnaire_SimENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  cc_KnowledgesExamLibRelaEx_ConstructorName,
  cc_KnowledgesExamLibRelaEx_GetQuestionIdLstByCourseKnowledgeId,
  cc_KnowledgesExamLibRelaEx_GetQuestionIdLstByCourseKnowledgeIdAndDiff,
} from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgesExamLibRelaExWApi';

export const vQuestionnaire_SimExController = 'vQuestionnaire_SimExApi';
export const vQuestionnaire_SimEx_ConstructorName = 'vQuestionnaire_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vQuestionnaire_SimEx_GetWebApiUrl(
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
 * @param objvQuestionnaire_SimENS:源对象
 * @returns 目标对象=>clsvQuestionnaire_SimEN:objvQuestionnaire_SimENT
 **/
export function vQuestionnaire_SimEx_CopyToEx(
  objvQuestionnaire_SimENS: clsvQuestionnaire_SimEN,
): clsvQuestionnaire_SimENEx {
  const strThisFuncName = vQuestionnaire_SimEx_CopyToEx.name;
  const objvQuestionnaire_SimENT = new clsvQuestionnaire_SimENEx();
  try {
    ObjectAssign(objvQuestionnaire_SimENT, objvQuestionnaire_SimENS);
    return objvQuestionnaire_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vQuestionnaire_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvQuestionnaire_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vQuestionnaire_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvQuestionnaire_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvQuestionnaire_SimObjLst = await vQuestionnaire_Sim_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrvQuestionnaire_SimExObjLst = arrvQuestionnaire_SimObjLst.map(
    vQuestionnaire_SimEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsvQuestionnaire_SimEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrvQuestionnaire_SimExObjLst) {
      await vQuestionnaire_SimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvQuestionnaire_SimExObjLst.length == 0) return arrvQuestionnaire_SimExObjLst;
  let arrvQuestionnaire_SimSel: Array<clsvQuestionnaire_SimENEx> = arrvQuestionnaire_SimExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.sort(
        vQuestionnaire_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.sort(objPagerPara.sortFun);
    }
    arrvQuestionnaire_SimSel = arrvQuestionnaire_SimSel.slice(intStart, intEnd);
    return arrvQuestionnaire_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vQuestionnaire_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvQuestionnaire_SimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vQuestionnaire_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vQuestionnaire_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vQuestionnaire_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-02-06
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vQuestionnaire_SimEx_FuncMapByFldName(
  strFldName: string,
  objvQuestionnaire_SimEx: clsvQuestionnaire_SimENEx,
) {
  const strThisFuncName = vQuestionnaire_SimEx_FuncMapByFldName.name;
  console.log(objvQuestionnaire_SimEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvQuestionnaire_SimEN.AttributeName;
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
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export async function vQuestionnaire_Sim_GetArrvQuestionnaire_SimByKnowledgeAndDiff(
  strKnowledgeId: string,
  strDifficultyLevelsId: string,
  strCourseId: string,
) {
  if (IsNullOrEmpty(strCourseId) == true) {
    const strMsg = Format(
      '参数:[strCourseId]不能为空！(In clsvQuestionnaire_SimWApi.BindDdl_QuestionIdByCourseIdInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strCourseId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvQuestionnaire_SimWApi.BindDdl_QuestionIdByCourseIdInDiv)',
      strCourseId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_QuestionIdByCourseIdInDivCache");
  const arrvQuestionnaire_Sim = new Array<clsvQuestionnaire_SimEN>();
  let arrObjLstSel = await vQuestionnaire_Sim_GetObjLstCache(strCourseId);
  if (arrObjLstSel == null) return null;
  const arrQuestionId_KnowledgeId =
    await cc_KnowledgesExamLibRelaEx_GetQuestionIdLstByCourseKnowledgeIdAndDiff(
      strKnowledgeId,
      strDifficultyLevelsId,
    );
  const arrQuestionId_KnowledgeId_Number = arrQuestionId_KnowledgeId.map((x) => Number(x));
  arrObjLstSel = arrObjLstSel.filter(
    (x) => arrQuestionId_KnowledgeId_Number.indexOf(x.questionId) != -1,
  );
  const obj0 = new clsvQuestionnaire_SimEN();
  obj0.questionId = 0;
  obj0.questionName = '选vQuestionnaire_Sim...';
  arrvQuestionnaire_Sim.push(obj0);
  arrObjLstSel.forEach((x) => arrvQuestionnaire_Sim.push(x));
  return arrvQuestionnaire_Sim;
}

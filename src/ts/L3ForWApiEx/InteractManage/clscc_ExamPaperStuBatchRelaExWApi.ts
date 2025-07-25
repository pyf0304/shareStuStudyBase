﻿/**
 * 类名:clscc_ExamPaperStuBatchRelaExWApi
 * 表名:cc_ExamPaperStuBatchRela(01120239)
 * 生成代码版本:2022.11.02.1
 * 生成日期:2022/11/09 04:07:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:互动管理(InteractManage)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 考卷与学生批次关系(cc_ExamPaperStuBatchRela)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2022年11月09日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetSortExpressInfo } from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clscc_ExamPaperStuBatchRelaEN } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaEN';
import { GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import { clscc_ExamPaperStuBatchRelaENEx } from '@/ts/L0Entity/InteractManage/clscc_ExamPaperStuBatchRelaENEx';
import { cc_ExamPaperStuBatchRela_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clscc_ExamPaperStuBatchRelaWApi';
import { cc_ExamPaperStuBatchRela_SortFunByKey } from '@/ts/L3ForWApi/InteractManage/clscc_ExamPaperStuBatchRelaWApi';
import { Format } from '@/ts/PubFun/clsString';
import { cc_ExamPaperStuBatchRela_FilterFunByKey } from '@/ts/L3ForWApi/InteractManage/clscc_ExamPaperStuBatchRelaWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';

import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { vCurrEduCls_Sim_func } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
import { vStudentInfo_Sim_func } from '@/ts/L3ForWApi/UserManage/clsvStudentInfo_SimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

export const cc_ExamPaperStuBatchRelaEx_Controller = 'cc_ExamPaperStuBatchRelaExApi';
export const cc_ExamPaperStuBatchRelaEx_ConstructorName = 'cc_ExamPaperStuBatchRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function cc_ExamPaperStuBatchRelaEx_GetWebApiUrl(
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
 * @param objcc_ExamPaperStuBatchRelaENS:源对象
 * @returns 目标对象=>clscc_ExamPaperStuBatchRelaEN:objcc_ExamPaperStuBatchRelaENT
 **/
export function cc_ExamPaperStuBatchRelaEx_CopyToEx(
  objcc_ExamPaperStuBatchRelaENS: clscc_ExamPaperStuBatchRelaEN,
): clscc_ExamPaperStuBatchRelaENEx {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_CopyToEx.name;
  const objcc_ExamPaperStuBatchRelaENT = new clscc_ExamPaperStuBatchRelaENEx();
  try {
    ObjectAssign(objcc_ExamPaperStuBatchRelaENT, objcc_ExamPaperStuBatchRelaENS);
    return objcc_ExamPaperStuBatchRelaENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objcc_ExamPaperStuBatchRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function cc_ExamPaperStuBatchRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clscc_ExamPaperStuBatchRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrcc_ExamPaperStuBatchRelaObjLst = await cc_ExamPaperStuBatchRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrcc_ExamPaperStuBatchRelaExObjLst = arrcc_ExamPaperStuBatchRelaObjLst.map(
    cc_ExamPaperStuBatchRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrcc_ExamPaperStuBatchRelaExObjLst) {
      const conFuncMap = await cc_ExamPaperStuBatchRelaEx_FuncMapByFldName(
        objSortInfo.SortFld,
        objInFor,
      );
    }
  }
  if (arrcc_ExamPaperStuBatchRelaExObjLst.length == 0) return arrcc_ExamPaperStuBatchRelaExObjLst;
  let arrcc_ExamPaperStuBatchRela_Sel: Array<clscc_ExamPaperStuBatchRelaENEx> =
    arrcc_ExamPaperStuBatchRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrcc_ExamPaperStuBatchRela_Sel = arrcc_ExamPaperStuBatchRela_Sel.sort(
        cc_ExamPaperStuBatchRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrcc_ExamPaperStuBatchRela_Sel = arrcc_ExamPaperStuBatchRela_Sel.sort(objPagerPara.sortFun);
    }
    arrcc_ExamPaperStuBatchRela_Sel = arrcc_ExamPaperStuBatchRela_Sel.slice(intStart, intEnd);
    return arrcc_ExamPaperStuBatchRela_Sel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clscc_ExamPaperStuBatchRelaENEx>();
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
export function cc_ExamPaperStuBatchRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return cc_ExamPaperStuBatchRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return cc_ExamPaperStuBatchRela_SortFunByKey(strKey, AscOrDesc);
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
export function cc_ExamPaperStuBatchRelaEx_FuncMapByFldName(
  strFldName: string,
  objcc_ExamPaperStuBatchRelaEx: clscc_ExamPaperStuBatchRelaENEx,
) {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clscc_ExamPaperStuBatchRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clscc_ExamPaperStuBatchRelaENEx.con_StuName:
      return cc_ExamPaperStuBatchRelaEx_FuncMap_StuName(objcc_ExamPaperStuBatchRelaEx);
    case clscc_ExamPaperStuBatchRelaENEx.con_EduClsName:
      return cc_ExamPaperStuBatchRelaEx_FuncMap_EduClsName(objcc_ExamPaperStuBatchRelaEx);
    case clscc_ExamPaperStuBatchRelaENEx.con_CourseId:
      return cc_ExamPaperStuBatchRelaEx_FuncMap_CourseId(objcc_ExamPaperStuBatchRelaEx);
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
export async function cc_ExamPaperStuBatchRelaEx_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    default:
      return cc_ExamPaperStuBatchRela_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMap_StuName(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
) {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMap_StuName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.stuName) == true) {
      const StudentInfo_id_StudentInfo = objcc_ExamPaperStuBatchRela.idStudentInfo;
      const StudentInfo_StuName = await vStudentInfo_Sim_func(
        clsStudentInfoEN.con_IdStudentInfo,
        clsStudentInfoEN.con_StuName,
        StudentInfo_id_StudentInfo,
        clsPubLocalStorage.idCurrEduCls,
      );
      objcc_ExamPaperStuBatchRela.stuName = StudentInfo_StuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000201)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMap_EduClsName(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
) {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMap_EduClsName.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.eduClsName) == true) {
      const CurrEduCls_id_CurrEduCls = objcc_ExamPaperStuBatchRela.idCurrEduCls;
      const CurrEduCls_EduClsName = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_EduClsName,
        CurrEduCls_id_CurrEduCls,
        objcc_ExamPaperStuBatchRela.courseId,
      );
      objcc_ExamPaperStuBatchRela.eduClsName = CurrEduCls_EduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000183)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objcc_ExamPaperStuBatchRelaS:源对象
 **/
export async function cc_ExamPaperStuBatchRelaEx_FuncMap_CourseId(
  objcc_ExamPaperStuBatchRela: clscc_ExamPaperStuBatchRelaENEx,
) {
  const strThisFuncName = cc_ExamPaperStuBatchRelaEx_FuncMap_CourseId.name;
  try {
    if (IsNullOrEmpty(objcc_ExamPaperStuBatchRela.courseId) == true) {
      const CurrEduCls_id_CurrEduCls = objcc_ExamPaperStuBatchRela.idCurrEduCls;
      const CurrEduCls_CourseId = await vCurrEduCls_Sim_func(
        clsCurrEduClsEN.con_IdCurrEduCls,
        clsCurrEduClsEN.con_CourseId,
        CurrEduCls_id_CurrEduCls,
        objcc_ExamPaperStuBatchRela.courseId,
      );
      objcc_ExamPaperStuBatchRela.courseId = CurrEduCls_CourseId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000203)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      cc_ExamPaperStuBatchRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

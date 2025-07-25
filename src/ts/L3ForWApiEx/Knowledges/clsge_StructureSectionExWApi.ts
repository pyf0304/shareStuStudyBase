/**
 * 类名:clsge_StructureSectionExWApi
 * 表名:ge_StructureSection(01120896)
 * 版本:2024.02.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/23 01:37:34
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 结构章节(ge_StructureSection)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年02月23日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  ge_StructureSection_GetObjLstCache,
  ge_StructureSection_GetObjLstAsync,
  ge_StructureSection_SortFunByKey,
  ge_StructureSection_FilterFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsge_StructureSectionEN } from '@/ts/L0Entity/Knowledges/clsge_StructureSectionEN';
import { clsge_StructureSectionENEx } from '@/ts/L0Entity/Knowledges/clsge_StructureSectionENEx';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const ge_StructureSectionExController = 'ge_StructureSectionExApi';
export const ge_StructureSectionEx_ConstructorName = 'ge_StructureSectionEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function ge_StructureSectionEx_GetWebApiUrl(
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
 * @param objge_StructureSectionENS:源对象
 * @returns 目标对象=>clsge_StructureSectionEN:objge_StructureSectionENT
 **/
export function ge_StructureSectionEx_CopyToEx(
  objge_StructureSectionENS: clsge_StructureSectionEN,
): clsge_StructureSectionENEx {
  const strThisFuncName = ge_StructureSectionEx_CopyToEx.name;
  const objge_StructureSectionENT = new clsge_StructureSectionENEx();
  try {
    ObjectAssign(objge_StructureSectionENT, objge_StructureSectionENS);
    return objge_StructureSectionENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StructureSectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objge_StructureSectionENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function ge_StructureSectionEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsge_StructureSectionENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrge_StructureSectionObjLst = await ge_StructureSection_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrge_StructureSectionExObjLst = arrge_StructureSectionObjLst.map(
    ge_StructureSectionEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsge_StructureSectionEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrge_StructureSectionExObjLst) {
      await ge_StructureSectionEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrge_StructureSectionExObjLst.length == 0) return arrge_StructureSectionExObjLst;
  let arrge_StructureSectionSel: Array<clsge_StructureSectionENEx> = arrge_StructureSectionExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrge_StructureSectionSel = arrge_StructureSectionSel.sort(
        ge_StructureSectionEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrge_StructureSectionSel = arrge_StructureSectionSel.sort(objPagerPara.sortFun);
    }
    arrge_StructureSectionSel = arrge_StructureSectionSel.slice(intStart, intEnd);
    return arrge_StructureSectionSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      ge_StructureSectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsge_StructureSectionENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objge_StructureSectionS:源对象
 **/
export async function ge_StructureSectionEx_FuncMapCourseName(
  objge_StructureSection: clsge_StructureSectionENEx,
) {
  const strThisFuncName = ge_StructureSectionEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objge_StructureSection.courseName) == true) {
      const vccCourseSimCourseId = objge_StructureSection.courseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objge_StructureSection.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StructureSectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-02-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function ge_StructureSectionEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsge_StructureSectionENEx.con_CourseName:
        return (a: clsge_StructureSectionENEx, b: clsge_StructureSectionENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      default:
        return ge_StructureSection_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsge_StructureSectionENEx.con_CourseName:
        return (a: clsge_StructureSectionENEx, b: clsge_StructureSectionENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      default:
        return ge_StructureSection_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-02-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function ge_StructureSectionEx_FuncMapByFldName(
  strFldName: string,
  objge_StructureSectionEx: clsge_StructureSectionENEx,
) {
  const strThisFuncName = ge_StructureSectionEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsge_StructureSectionEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsge_StructureSectionENEx.con_CourseName:
      return ge_StructureSectionEx_FuncMapCourseName(objge_StructureSectionEx);
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
 * 日期:2024-02-23
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function ge_StructureSectionEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsge_StructureSectionENEx.con_CourseName:
      return (obj: clsge_StructureSectionENEx) => {
        return obj.courseName === value;
      };
    default:
      return ge_StructureSection_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objge_StructureSectionS:源对象
 **/
export async function ge_StructureSectionEx_FuncMapKeyCourseName(
  objge_StructureSection: clsge_StructureSectionENEx,
): Promise<Array<string>> {
  const strThisFuncName = ge_StructureSectionEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objge_StructureSection.courseName) == true) return [];
    const vccCourseSimCourseName = objge_StructureSection.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    return arrCourseId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000445)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      ge_StructureSectionEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

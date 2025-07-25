/**
 * 类名:clsvgs_KnowledgesLogic_User_SimExWApi
 * 表名:vgs_KnowledgesLogic_User_Sim(01120933)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/10 11:36:58
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v知识点逻辑用户关系_Sim(vgs_KnowledgesLogic_User_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年03月10日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vgs_KnowledgesLogic_User_Sim_GetObjLstCache,
  vgs_KnowledgesLogic_User_Sim_GetObjLstByPagerAsync,
  vgs_KnowledgesLogic_User_Sim_SortFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsvgs_KnowledgesLogic_User_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsvgs_KnowledgesLogic_User_SimEN } from '@/ts/L0Entity/Knowledges/clsvgs_KnowledgesLogic_User_SimEN';
import { clsvgs_KnowledgesLogic_User_SimENEx } from '@/ts/L0Entity/Knowledges/clsvgs_KnowledgesLogic_User_SimENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vgs_KnowledgesLogic_User_SimEx_Controller = 'vgs_KnowledgesLogic_User_SimExApi';
export const vgs_KnowledgesLogic_User_SimEx_ConstructorName = 'vgs_KnowledgesLogic_User_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vgs_KnowledgesLogic_User_SimEx_GetWebApiUrl(
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
 * @param objvgs_KnowledgesLogic_User_SimENS:源对象
 * @returns 目标对象=>clsvgs_KnowledgesLogic_User_SimEN:objvgs_KnowledgesLogic_User_SimENT
 **/
export function vgs_KnowledgesLogic_User_SimEx_CopyToEx(
  objvgs_KnowledgesLogic_User_SimENS: clsvgs_KnowledgesLogic_User_SimEN,
): clsvgs_KnowledgesLogic_User_SimENEx {
  const strThisFuncName = vgs_KnowledgesLogic_User_SimEx_CopyToEx.name;
  const objvgs_KnowledgesLogic_User_SimENT = new clsvgs_KnowledgesLogic_User_SimENEx();
  try {
    ObjectAssign(objvgs_KnowledgesLogic_User_SimENT, objvgs_KnowledgesLogic_User_SimENS);
    return objvgs_KnowledgesLogic_User_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vgs_KnowledgesLogic_User_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvgs_KnowledgesLogic_User_SimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vgs_KnowledgesLogic_User_SimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_KnowledgesLogic_User_SimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvgs_KnowledgesLogic_User_SimObjLst =
    await vgs_KnowledgesLogic_User_Sim_GetObjLstByPagerAsync(objPagerPara);
  const arrvgs_KnowledgesLogic_User_SimExObjLst = arrvgs_KnowledgesLogic_User_SimObjLst.map(
    vgs_KnowledgesLogic_User_SimEx_CopyToEx,
  );
  if (arrvgs_KnowledgesLogic_User_SimExObjLst.length == 0)
    return arrvgs_KnowledgesLogic_User_SimExObjLst;
  let arrvgs_KnowledgesLogic_User_SimSel: Array<clsvgs_KnowledgesLogic_User_SimENEx> =
    arrvgs_KnowledgesLogic_User_SimExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.sort(
        vgs_KnowledgesLogic_User_SimEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvgs_KnowledgesLogic_User_SimSel = arrvgs_KnowledgesLogic_User_SimSel.sort(
        objPagerPara.sortFun,
      );
    }
    return arrvgs_KnowledgesLogic_User_SimSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_KnowledgesLogic_User_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_KnowledgesLogic_User_SimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vgs_KnowledgesLogic_User_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vgs_KnowledgesLogic_User_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vgs_KnowledgesLogic_User_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-03-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vgs_KnowledgesLogic_User_SimEx_FuncMapByFldName(
  strFldName: string,
  objvgs_KnowledgesLogic_User_SimEx: clsvgs_KnowledgesLogic_User_SimENEx,
) {
  const strThisFuncName = vgs_KnowledgesLogic_User_SimEx_FuncMapByFldName.name;
  console.log(objvgs_KnowledgesLogic_User_SimEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvgs_KnowledgesLogic_User_SimEN.AttributeName;
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

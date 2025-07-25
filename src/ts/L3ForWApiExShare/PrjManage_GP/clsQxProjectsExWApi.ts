/**
 * 类名:clsQxProjectsExWApi
 * 表名:QxProjects(00140006)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/09 22:33:48
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:工程管理(PrjManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 工程(QxProjects)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年03月09日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxProjects_GetObjLstCache,
  QxProjects_GetObjLstByPagerAsync,
  QxProjects_SortFunByKey,
} from '@/ts/L3ForWApi/PrjManage_GP/clsQxProjectsWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsQxProjectsEN } from '@/ts/L0Entity/PrjManage_GP/clsQxProjectsEN';
import { clsQxProjectsENEx } from '@/ts/L0Entity/PrjManage_GP/clsQxProjectsENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const qxProjectsEx_Controller = 'QxProjectsExApi';
export const qxProjectsEx_ConstructorName = 'qxProjectsEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxProjectsEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxProjectsENS:源对象
 * @returns 目标对象=>clsQxProjectsEN:objQxProjectsENT
 **/
export function QxProjectsEx_CopyToEx(objQxProjectsENS: clsQxProjectsEN): clsQxProjectsENEx {
  const strThisFuncName = QxProjectsEx_CopyToEx.name;
  const objQxProjectsENT = new clsQxProjectsENEx();
  try {
    ObjectAssign(objQxProjectsENT, objQxProjectsENS);
    return objQxProjectsENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxProjectsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxProjectsENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxProjectsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxProjectsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxProjectsObjLst = await QxProjects_GetObjLstByPagerAsync(objPagerPara);
  const arrQxProjectsExObjLst = arrQxProjectsObjLst.map(QxProjectsEx_CopyToEx);
  if (arrQxProjectsExObjLst.length == 0) return arrQxProjectsExObjLst;
  let arrQxProjectsSel: Array<clsQxProjectsENEx> = arrQxProjectsExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxProjectsSel = arrQxProjectsSel.sort(QxProjectsEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxProjectsSel = arrQxProjectsSel.sort(objPagerPara.sortFun);
    }
    return arrQxProjectsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxProjectsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxProjectsENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxProjectsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxProjects_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxProjects_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-03-09
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxProjectsEx_FuncMapByFldName(
  strFldName: string,
  objQxProjectsEx: clsQxProjectsENEx,
) {
  const strThisFuncName = QxProjectsEx_FuncMapByFldName.name;
  console.log(objQxProjectsEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxProjectsEN.AttributeName;
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

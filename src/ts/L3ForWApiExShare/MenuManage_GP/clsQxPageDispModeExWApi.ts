/**
 * 类名:clsQxPageDispModeExWApi
 * 表名:QxPageDispMode(00140044)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/12 17:27:12
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 页面显示模式(QxPageDispMode)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2025年03月12日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxPageDispMode_GetObjLstCache,
  QxPageDispMode_GetObjLstByPagerAsync,
  QxPageDispMode_SortFunByKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPageDispModeWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsQxPageDispModeEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPageDispModeEN';
import { clsQxPageDispModeENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxPageDispModeENEx';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const qxPageDispModeEx_Controller = 'QxPageDispModeExApi';
export const qxPageDispModeEx_ConstructorName = 'qxPageDispModeEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxPageDispModeEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxPageDispModeENS:源对象
 * @returns 目标对象=>clsQxPageDispModeEN:objQxPageDispModeENT
 **/
export function QxPageDispModeEx_CopyToEx(
  objQxPageDispModeENS: clsQxPageDispModeEN,
): clsQxPageDispModeENEx {
  const strThisFuncName = QxPageDispModeEx_CopyToEx.name;
  const objQxPageDispModeENT = new clsQxPageDispModeENEx();
  try {
    ObjectAssign(objQxPageDispModeENT, objQxPageDispModeENS);
    return objQxPageDispModeENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxPageDispModeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxPageDispModeENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxPageDispModeEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxPageDispModeENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxPageDispModeObjLst = await QxPageDispMode_GetObjLstByPagerAsync(objPagerPara);
  const arrQxPageDispModeExObjLst = arrQxPageDispModeObjLst.map(QxPageDispModeEx_CopyToEx);
  if (arrQxPageDispModeExObjLst.length == 0) return arrQxPageDispModeExObjLst;
  let arrQxPageDispModeSel: Array<clsQxPageDispModeENEx> = arrQxPageDispModeExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxPageDispModeSel = arrQxPageDispModeSel.sort(
        QxPageDispModeEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxPageDispModeSel = arrQxPageDispModeSel.sort(objPagerPara.sortFun);
    }
    return arrQxPageDispModeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxPageDispModeEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxPageDispModeENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxPageDispModeEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return QxPageDispMode_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return QxPageDispMode_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-03-12
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxPageDispModeEx_FuncMapByFldName(
  strFldName: string,
  objQxPageDispModeEx: clsQxPageDispModeENEx,
) {
  const strThisFuncName = QxPageDispModeEx_FuncMapByFldName.name;
  console.log(objQxPageDispModeEx);
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxPageDispModeEN.AttributeName;
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

/**
 * 类名:clsvCurrEduClsTeacherExWApi
 * 表名:vCurrEduClsTeacher(01120128)
 * 版本:2024.11.10.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/11 01:44:50
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v当前教学班教师(vCurrEduClsTeacher)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年11月11日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvCurrEduClsTeacherENEx } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherENEx';
import {
  vCurrEduClsTeacher_GetObjLstByPagerAsync,
  vCurrEduClsTeacher_SortFunByKey,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vCurrEduClsTeacherExController = 'vCurrEduClsTeacherExApi';
export const vCurrEduClsTeacherEx_ConstructorName = 'vCurrEduClsTeacherEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vCurrEduClsTeacherEx_GetWebApiUrl(
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
 * @param objvCurrEduClsTeacherENS:源对象
 * @returns 目标对象=>clsvCurrEduClsTeacherEN:objvCurrEduClsTeacherENT
 **/
export function vCurrEduClsTeacherEx_CopyToEx(
  objvCurrEduClsTeacherENS: clsvCurrEduClsTeacherEN,
): clsvCurrEduClsTeacherENEx {
  const strThisFuncName = vCurrEduClsTeacherEx_CopyToEx.name;
  const objvCurrEduClsTeacherENT = new clsvCurrEduClsTeacherENEx();
  try {
    ObjectAssign(objvCurrEduClsTeacherENT, objvCurrEduClsTeacherENS);
    return objvCurrEduClsTeacherENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vCurrEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvCurrEduClsTeacherENT;
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vCurrEduClsTeacherEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvCurrEduClsTeacherENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstByPagerAsync(objPagerPara);
  const arrvCurrEduClsTeacherExObjLst = arrvCurrEduClsTeacherObjLst.map(
    vCurrEduClsTeacherEx_CopyToEx,
  );
  if (arrvCurrEduClsTeacherExObjLst.length == 0) return arrvCurrEduClsTeacherExObjLst;
  let arrvCurrEduClsTeacherSel: Array<clsvCurrEduClsTeacherENEx> = arrvCurrEduClsTeacherExObjLst;
  try {
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvCurrEduClsTeacherSel = arrvCurrEduClsTeacherSel.sort(
        vCurrEduClsTeacherEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvCurrEduClsTeacherSel = arrvCurrEduClsTeacherSel.sort(objPagerPara.sortFun);
    }
    return arrvCurrEduClsTeacherSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vCurrEduClsTeacherEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvCurrEduClsTeacherENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-11-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vCurrEduClsTeacherEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vCurrEduClsTeacher_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vCurrEduClsTeacher_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-11-11
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vCurrEduClsTeacherEx_FuncMapByFldName(
  strFldName: string,
  objvCurrEduClsTeacherEx: clsvCurrEduClsTeacherENEx,
) {
  const strThisFuncName = vCurrEduClsTeacherEx_FuncMapByFldName.name;
  console.log(objvCurrEduClsTeacherEx);
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvCurrEduClsTeacherEN.AttributeName;
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

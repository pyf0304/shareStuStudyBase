/**
 * 类名:clsvTeacherInfo_SimExWApi
 * 表名:vTeacherInfo_Sim(01120976)
 * 版本:2024.11.28.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 01:06:32
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v教师_Sim(vTeacherInfo_Sim)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年12月05日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  vTeacherInfo_Sim_GetObjLstCache,
  vTeacherInfo_Sim_SortFunByKey,
  vTeacherInfo_Sim_FilterFunByKey,
} from '@/ts/L3ForWApi/BaseInfo/clsvTeacherInfo_SimWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvTeacherInfo_SimEN } from '@/ts/L0Entity/BaseInfo/clsvTeacherInfo_SimEN';
import { clsvTeacherInfo_SimENEx } from '@/ts/L0Entity/BaseInfo/clsvTeacherInfo_SimENEx';
import { XzSchool_func, XzSchool_funcKey } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const vTeacherInfo_SimExController = 'vTeacherInfo_SimExApi';
export const vTeacherInfo_SimEx_ConstructorName = 'vTeacherInfo_SimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vTeacherInfo_SimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvTeacherInfo_SimENS:源对象
 * @returns 目标对象=>clsvTeacherInfo_SimEN:objvTeacherInfo_SimENT
 **/
export function vTeacherInfo_SimEx_CopyToEx(
  objvTeacherInfo_SimENS: clsvTeacherInfo_SimEN,
): clsvTeacherInfo_SimENEx {
  const strThisFuncName = vTeacherInfo_SimEx_CopyToEx.name;
  const objvTeacherInfo_SimENT = new clsvTeacherInfo_SimENEx();
  try {
    ObjectAssign(objvTeacherInfo_SimENT, objvTeacherInfo_SimENS);
    return objvTeacherInfo_SimENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vTeacherInfo_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvTeacherInfo_SimENT;
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objvTeacherInfo_SimS:源对象
 **/
export async function vTeacherInfo_SimEx_FuncMapSchoolName(
  objvTeacherInfo_Sim: clsvTeacherInfo_SimENEx,
) {
  const strThisFuncName = vTeacherInfo_SimEx_FuncMapSchoolName.name;
  try {
    if (IsNullOrEmpty(objvTeacherInfo_Sim.schoolName) == true) {
      const XzSchoolIdSchool = objvTeacherInfo_Sim.idSchool;
      const XzSchoolSchoolName = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolName,
        XzSchoolIdSchool,
      );
      objvTeacherInfo_Sim.schoolName = XzSchoolSchoolName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000621)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vTeacherInfo_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vTeacherInfo_SimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvTeacherInfo_SimENEx.con_SchoolName:
        return (a: clsvTeacherInfo_SimENEx, b: clsvTeacherInfo_SimENEx) => {
          return a.schoolName.localeCompare(b.schoolName);
        };
      default:
        return vTeacherInfo_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvTeacherInfo_SimENEx.con_SchoolName:
        return (a: clsvTeacherInfo_SimENEx, b: clsvTeacherInfo_SimENEx) => {
          return b.schoolName.localeCompare(a.schoolName);
        };
      default:
        return vTeacherInfo_Sim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-12-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vTeacherInfo_SimEx_FuncMapByFldName(
  strFldName: string,
  objvTeacherInfo_SimEx: clsvTeacherInfo_SimENEx,
) {
  const strThisFuncName = vTeacherInfo_SimEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsvTeacherInfo_SimEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsvTeacherInfo_SimENEx.con_SchoolName:
      return vTeacherInfo_SimEx_FuncMapSchoolName(objvTeacherInfo_SimEx);
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
 * 日期:2024-12-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vTeacherInfo_SimEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsvTeacherInfo_SimENEx.con_SchoolName:
      return (obj: clsvTeacherInfo_SimENEx) => {
        return obj.schoolName === value;
      };
    default:
      return vTeacherInfo_Sim_FilterFunByKey(strKey, value);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objvTeacherInfo_SimS:源对象
 **/
export async function vTeacherInfo_SimEx_FuncMapKeySchoolName(
  objvTeacherInfo_Sim: clsvTeacherInfo_SimENEx,
): Promise<Array<string>> {
  const strThisFuncName = vTeacherInfo_SimEx_FuncMapKeySchoolName.name;
  try {
    if (IsNullOrEmpty(objvTeacherInfo_Sim.schoolName) == true) return [];
    const XzSchoolSchoolName = objvTeacherInfo_Sim.schoolName;
    const arrIdSchool = await XzSchool_funcKey(
      clsXzSchoolEN.con_SchoolName,
      XzSchoolSchoolName,
      enumComparisonOp.Like_03,
    );
    return arrIdSchool;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000627)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      vTeacherInfo_SimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

export async function vTeacherInfo_SimEx_GetArrvTeacherInfo_SimByIdSchool(strIdSchool: string) {
  if (IsNullOrEmpty(strIdSchool) == true) {
    const strMsg = Format(
      '参数:[strIdSchoolPs]不能为空！(In clsvTeacherInfo_SimWApi.BindDdl_IdTeacherByIdSchoolPsInDiv)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSchool.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSchoolPs]的长度:[{0}]不正确！(clsvTeacherInfo_SimWApi.BindDdl_IdTeacherByIdSchoolPsInDiv)',
      strIdSchool.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdTeacherByIdSchoolPsInDivCache");
  const arrvTeacherInfo_Sim = new Array<clsvTeacherInfo_SimEN>();
  let arrObjLstSel = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
  if (arrObjLstSel == null) return null;
  arrObjLstSel = arrObjLstSel.filter((x) => x.idSchool == strIdSchool);
  const obj0 = new clsvTeacherInfo_SimEN();
  obj0.idTeacher = '0';
  obj0.teacherName = '选v教师_Sim...';
  arrvTeacherInfo_Sim.push(obj0);
  arrObjLstSel.forEach((x) => arrvTeacherInfo_Sim.push(x));
  return arrvTeacherInfo_Sim;
}

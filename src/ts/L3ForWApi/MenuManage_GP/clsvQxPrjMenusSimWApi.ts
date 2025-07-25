
 /**
 * 类名:clsvQxPrjMenusSimWApi
 * 表名:vQxPrjMenusSim(00140126)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:30:18
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vQxPrjMenusSim(vQxPrjMenusSim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月10日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper,LocalStorage_GetKeyByPrefix,SessionStorage_GetKeyByPrefix } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { clsvQxPrjMenusSimEN } from "@/ts/L0Entity/MenuManage_GP/clsvQxPrjMenusSimEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vQxPrjMenusSim_Controller = "vQxPrjMenusSimApi";
 export const vQxPrjMenusSim_ConstructorName = "vQxPrjMenusSim";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strMenuId:关键字
 * @returns 对象
 **/
export  async function vQxPrjMenusSim_GetObjByMenuIdAsync(strMenuId: string): Promise<clsvQxPrjMenusSimEN|null>  
{
const strThisFuncName = "GetObjByMenuIdAsync";

if (IsNullOrEmpty(strMenuId) == true)
{
  const strMsg = Format("参数:[strMenuId]不能为空!(In clsvQxPrjMenusSimWApi.GetObjByMenuIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strMenuId.length != 8)
{
const strMsg = Format("缓存分类变量:[strMenuId]的长度:[{0}]不正确!(clsvQxPrjMenusSimWApi.GetObjByMenuIdAsync)", strMenuId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByMenuId";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strMenuId,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objvQxPrjMenusSim = vQxPrjMenusSim_GetObjFromJsonObj(returnObj);
return objvQxPrjMenusSim;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strMenuId:所给的关键字
 * @returns 对象
*/
export  async function vQxPrjMenusSim_GetObjByMenuIdlocalStorage(strMenuId: string) {
const strThisFuncName = "GetObjByMenuIdlocalStorage";

if (IsNullOrEmpty(strMenuId) == true)
{
  const strMsg = Format("参数:[strMenuId]不能为空!(In clsvQxPrjMenusSimWApi.GetObjByMenuIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strMenuId.length != 8)
{
const strMsg = Format("缓存分类变量:[strMenuId]的长度:[{0}]不正确!(clsvQxPrjMenusSimWApi.GetObjByMenuIdlocalStorage)", strMenuId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvQxPrjMenusSimEN._CurrTabName, strMenuId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvQxPrjMenusSimCache: clsvQxPrjMenusSimEN = JSON.parse(strTempObj);
return objvQxPrjMenusSimCache;
}
try
{
const objvQxPrjMenusSim = await vQxPrjMenusSim_GetObjByMenuIdAsync(strMenuId);
if (objvQxPrjMenusSim != null)
{
localStorage.setItem(strKey, JSON.stringify(objvQxPrjMenusSim));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvQxPrjMenusSim;
}
return objvQxPrjMenusSim;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strMenuId, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strMenuId:所给的关键字
 * @returns 对象
*/
export  async function vQxPrjMenusSim_GetObjByMenuIdCache(strMenuId:string,strQxPrjId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByMenuIdCache";

if (IsNullOrEmpty(strMenuId) == true)
{
  const strMsg = Format("参数:[strMenuId]不能为空!(In clsvQxPrjMenusSimWApi.GetObjByMenuIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strMenuId.length != 8)
{
const strMsg = Format("缓存分类变量:[strMenuId]的长度:[{0}]不正确!(clsvQxPrjMenusSimWApi.GetObjByMenuIdCache)", strMenuId.length);
console.error(strMsg);
throw (strMsg);
}
const arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstCache(strQxPrjId);
try
{
const arrvQxPrjMenusSimSel = arrvQxPrjMenusSimObjLstCache.filter(x => 
 x.menuId == strMenuId );
let objvQxPrjMenusSim: clsvQxPrjMenusSimEN;
if (arrvQxPrjMenusSimSel.length > 0)
{
objvQxPrjMenusSim = arrvQxPrjMenusSimSel[0];
return objvQxPrjMenusSim;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvQxPrjMenusSimConst = await vQxPrjMenusSim_GetObjByMenuIdAsync(strMenuId);
if (objvQxPrjMenusSimConst != null)
{
vQxPrjMenusSim_ReFreshThisCache(strQxPrjId);
return objvQxPrjMenusSimConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strMenuId, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPrjMenusSim_SortFunDefa(a:clsvQxPrjMenusSimEN , b:clsvQxPrjMenusSimEN): number 
{
return a.menuId.localeCompare(b.menuId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPrjMenusSim_SortFunDefa2Fld(a:clsvQxPrjMenusSimEN , b:clsvQxPrjMenusSimEN): number 
{
if (a.menuName == b.menuName) return a.qxPrjId.localeCompare(b.qxPrjId);
else return a.menuName.localeCompare(b.menuName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vQxPrjMenusSim_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvQxPrjMenusSimEN.con_MenuId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
return a.menuId.localeCompare(b.menuId);
}
case clsvQxPrjMenusSimEN.con_MenuName:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
return a.menuName.localeCompare(b.menuName);
}
case clsvQxPrjMenusSimEN.con_QxPrjId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
if (a.qxPrjId == null) return -1;
if (b.qxPrjId == null) return 1;
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsvQxPrjMenusSimEN.con_UpMenuId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
if (a.upMenuId == null) return -1;
if (b.upMenuId == null) return 1;
return a.upMenuId.localeCompare(b.upMenuId);
}
case clsvQxPrjMenusSimEN.con_PageDispModeId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
if (a.pageDispModeId == null) return -1;
if (b.pageDispModeId == null) return 1;
return a.pageDispModeId.localeCompare(b.pageDispModeId);
}
case clsvQxPrjMenusSimEN.con_InUse:
return (a: clsvQxPrjMenusSimEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clsvQxPrjMenusSimEN.con_SubMenusNum:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
return a.subMenusNum-b.subMenusNum;
}
case clsvQxPrjMenusSimEN.con_RoleNum:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
return a.roleNum-b.roleNum;
}
case clsvQxPrjMenusSimEN.con_MenuSetId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
if (a.menuSetId == null) return -1;
if (b.menuSetId == null) return 1;
return a.menuSetId.localeCompare(b.menuSetId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjMenusSim]中不存在!(in ${ vQxPrjMenusSim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvQxPrjMenusSimEN.con_MenuId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
return b.menuId.localeCompare(a.menuId);
}
case clsvQxPrjMenusSimEN.con_MenuName:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
return b.menuName.localeCompare(a.menuName);
}
case clsvQxPrjMenusSimEN.con_QxPrjId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
if (b.qxPrjId == null) return -1;
if (a.qxPrjId == null) return 1;
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsvQxPrjMenusSimEN.con_UpMenuId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
if (b.upMenuId == null) return -1;
if (a.upMenuId == null) return 1;
return b.upMenuId.localeCompare(a.upMenuId);
}
case clsvQxPrjMenusSimEN.con_PageDispModeId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
if (b.pageDispModeId == null) return -1;
if (a.pageDispModeId == null) return 1;
return b.pageDispModeId.localeCompare(a.pageDispModeId);
}
case clsvQxPrjMenusSimEN.con_InUse:
return (b: clsvQxPrjMenusSimEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clsvQxPrjMenusSimEN.con_SubMenusNum:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
return b.subMenusNum-a.subMenusNum;
}
case clsvQxPrjMenusSimEN.con_RoleNum:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
return b.roleNum-a.roleNum;
}
case clsvQxPrjMenusSimEN.con_MenuSetId:
return (a: clsvQxPrjMenusSimEN, b: clsvQxPrjMenusSimEN) => {
if (b.menuSetId == null) return -1;
if (a.menuSetId == null) return 1;
return b.menuSetId.localeCompare(a.menuSetId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjMenusSim]中不存在!(in ${ vQxPrjMenusSim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vQxPrjMenusSim_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvQxPrjMenusSimEN.con_MenuId:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.menuId === value;
}
case clsvQxPrjMenusSimEN.con_MenuName:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.menuName === value;
}
case clsvQxPrjMenusSimEN.con_QxPrjId:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.qxPrjId === value;
}
case clsvQxPrjMenusSimEN.con_UpMenuId:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.upMenuId === value;
}
case clsvQxPrjMenusSimEN.con_PageDispModeId:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.pageDispModeId === value;
}
case clsvQxPrjMenusSimEN.con_InUse:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.inUse === value;
}
case clsvQxPrjMenusSimEN.con_SubMenusNum:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.subMenusNum === value;
}
case clsvQxPrjMenusSimEN.con_RoleNum:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.roleNum === value;
}
case clsvQxPrjMenusSimEN.con_MenuSetId:
return (obj: clsvQxPrjMenusSimEN) => {
return obj.menuSetId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vQxPrjMenusSim]中不存在!(in ${ vQxPrjMenusSim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strQxPrjId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vQxPrjMenusSim_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strQxPrjIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strQxPrjIdClassfy) == true)
{
  const strMsg = Format("参数:[strQxPrjIdClassfy]不能为空!(In clsvQxPrjMenusSimWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjIdClassfy.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjIdClassfy]的长度:[{0}]不正确!(clsvQxPrjMenusSimWApi.func)", strQxPrjIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvQxPrjMenusSimEN.con_MenuId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvQxPrjMenusSimEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvQxPrjMenusSimEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strMenuId = strInValue;
if (IsNullOrEmpty(strMenuId) == true)
{
return "";
}
const objvQxPrjMenusSim = await vQxPrjMenusSim_GetObjByMenuIdCache(strMenuId , strQxPrjIdClassfy);
if (objvQxPrjMenusSim == null) return "";
if (objvQxPrjMenusSim.GetFldValue(strOutFldName) == null) return "";
return objvQxPrjMenusSim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strQxPrjId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vQxPrjMenusSim_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strQxPrjIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strQxPrjIdClassfy) == true)
{
  const strMsg = Format("参数:[strQxPrjIdClassfy]不能为空!(In clsvQxPrjMenusSimWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjIdClassfy.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjIdClassfy]的长度:[{0}]不正确!(clsvQxPrjMenusSimWApi.funcKey)", strQxPrjIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvQxPrjMenusSimEN.con_MenuId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvQxPrjMenusSim = await vQxPrjMenusSim_GetObjLstCache(strQxPrjIdClassfy);
if (arrvQxPrjMenusSim == null) return [];
let arrvQxPrjMenusSimSel = arrvQxPrjMenusSim;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvQxPrjMenusSimSel.length == 0) return [];
return arrvQxPrjMenusSimSel.map(x=>x.menuId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxPrjMenusSim_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strFldName,
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const arrId = data.returnStrLst.split(',');
return arrId;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vQxPrjMenusSim_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
*/
export  async function vQxPrjMenusSim_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnStr;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export  async function vQxPrjMenusSim_GetFirstObjAsync(strWhereCond: string): Promise<clsvQxPrjMenusSimEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObj = data.returnObj;
if (returnObj == null)
{
return null;
}
//console.log(returnObj);
const objvQxPrjMenusSim = vQxPrjMenusSim_GetObjFromJsonObj(returnObj);
return objvQxPrjMenusSim;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_ClientCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstClientCache(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvQxPrjMenusSimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvQxPrjMenusSimEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("QxPrjId='{0}'", strQxPrjId);
}
const strKey = Format("{0}_{1}", clsvQxPrjMenusSimEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsvQxPrjMenusSimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQxPrjMenusSimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvQxPrjMenusSimExObjLstCache: Array<clsvQxPrjMenusSimEN> = CacheHelper.Get(strKey);
const arrvQxPrjMenusSimObjLstT = vQxPrjMenusSim_GetObjLstByJSONObjLst(arrvQxPrjMenusSimExObjLstCache);
return arrvQxPrjMenusSimObjLstT;
}
try
{
const arrvQxPrjMenusSimExObjLst = await vQxPrjMenusSim_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvQxPrjMenusSimExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQxPrjMenusSimExObjLst.length);
console.log(strInfo);
return arrvQxPrjMenusSimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstlocalStorage(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvQxPrjMenusSimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvQxPrjMenusSimEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvQxPrjMenusSimEN.con_QxPrjId, strQxPrjId);
}
const strKey = Format("{0}_{1}", clsvQxPrjMenusSimEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsvQxPrjMenusSimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQxPrjMenusSimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvQxPrjMenusSimExObjLstCache: Array<clsvQxPrjMenusSimEN> = JSON.parse(strTempObjLst);
const arrvQxPrjMenusSimObjLstT = vQxPrjMenusSim_GetObjLstByJSONObjLst(arrvQxPrjMenusSimExObjLstCache);
return arrvQxPrjMenusSimObjLstT;
}
try
{
const arrvQxPrjMenusSimExObjLst = await vQxPrjMenusSim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvQxPrjMenusSimEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrvQxPrjMenusSimExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQxPrjMenusSimExObjLst.length);
console.log(strInfo);
return arrvQxPrjMenusSimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstlocalStoragePureCache(strQxPrjId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvQxPrjMenusSimEN._CurrTabName, strQxPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvQxPrjMenusSimObjLstCache: Array<clsvQxPrjMenusSimEN> = JSON.parse(strTempObjLst);
return arrvQxPrjMenusSimObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvQxPrjMenusSimEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjMenusSim_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw (data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取本地sessionStorage缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstsessionStorage(strQxPrjId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvQxPrjMenusSimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvQxPrjMenusSimEN.WhereFormat, strQxPrjId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvQxPrjMenusSimEN.con_QxPrjId, strQxPrjId);
}
const strKey = Format("{0}_{1}", clsvQxPrjMenusSimEN._CurrTabName, strQxPrjId);
if (IsNullOrEmpty(clsvQxPrjMenusSimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvQxPrjMenusSimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvQxPrjMenusSimExObjLstCache: Array<clsvQxPrjMenusSimEN> = JSON.parse(strTempObjLst);
const arrvQxPrjMenusSimObjLstT = vQxPrjMenusSim_GetObjLstByJSONObjLst(arrvQxPrjMenusSimExObjLstCache);
return arrvQxPrjMenusSimObjLstT;
}
try
{
const arrvQxPrjMenusSimExObjLst = await vQxPrjMenusSim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvQxPrjMenusSimEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrvQxPrjMenusSimExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvQxPrjMenusSimExObjLst.length);
console.log(strInfo);
return arrvQxPrjMenusSimExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstsessionStoragePureCache(strQxPrjId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvQxPrjMenusSimEN._CurrTabName, strQxPrjId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvQxPrjMenusSimObjLstCache: Array<clsvQxPrjMenusSimEN> = JSON.parse(strTempObjLst);
return arrvQxPrjMenusSimObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstCache(strQxPrjId: string): Promise<Array<clsvQxPrjMenusSimEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空！(In clsvQxPrjMenusSimWApi.vQxPrjMenusSim_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确！(clsvQxPrjMenusSimWApi.vQxPrjMenusSim_GetObjLstCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
let arrvQxPrjMenusSimObjLstCache;
switch (clsvQxPrjMenusSimEN.CacheModeId)
{
case "04"://sessionStorage
arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstsessionStorage(strQxPrjId);
break;
case "03"://localStorage
arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstlocalStorage(strQxPrjId);
break;
case "02"://ClientCache
arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstClientCache(strQxPrjId);
break;
default:
arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstClientCache(strQxPrjId);
break;
}
return arrvQxPrjMenusSimObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstPureCache(strQxPrjId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvQxPrjMenusSimObjLstCache;
switch (clsvQxPrjMenusSimEN.CacheModeId)
{
case "04"://sessionStorage
arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstsessionStoragePureCache(strQxPrjId);
break;
case "03"://localStorage
arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstlocalStoragePureCache(strQxPrjId);
break;
case "02"://ClientCache
arrvQxPrjMenusSimObjLstCache = null;
break;
default:
arrvQxPrjMenusSimObjLstCache = null;
break;
}
return arrvQxPrjMenusSimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrMenuIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vQxPrjMenusSim_GetSubObjLstCache(objvQxPrjMenusSimCond: ConditionCollection ,strQxPrjId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstCache(strQxPrjId);
let arrvQxPrjMenusSimSel = arrvQxPrjMenusSimObjLstCache;
if (objvQxPrjMenusSimCond.GetConditions().length == 0) return arrvQxPrjMenusSimSel;
try {
//console.log(sstrKeys);
for (const objCondition of objvQxPrjMenusSimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvQxPrjMenusSimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvQxPrjMenusSimCond), vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvQxPrjMenusSimEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrMenuId:关键字列表
 * @returns 对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstByMenuIdLstAsync(arrMenuId: Array<string>): Promise<Array<clsvQxPrjMenusSimEN>>  
{
const strThisFuncName = "GetObjLstByMenuIdLstAsync";
const strAction = "GetObjLstByMenuIdLst";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMenuId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjMenusSim_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字列表获取相关对象列表, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)
 * @param arrstrMenuIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vQxPrjMenusSim_GetObjLstByMenuIdLstCache(arrMenuIdLst: Array<string> ,strQxPrjId: string) {
const strThisFuncName = "GetObjLstByMenuIdLstCache";
try
{
const arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstCache(strQxPrjId);
const arrvQxPrjMenusSimSel = arrvQxPrjMenusSimObjLstCache.filter(x => arrMenuIdLst.indexOf(x.menuId)>-1);
return arrvQxPrjMenusSimSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrMenuIdLst.join(","), vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
}

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vQxPrjMenusSim_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvQxPrjMenusSimEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objTopPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjMenusSim_GetObjLstByJSONObjLst(returnObjLst);
return (arrObjLst);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvQxPrjMenusSimEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objRangePara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjMenusSim_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function vQxPrjMenusSim_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strQxPrjId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxPrjMenusSimEN>();
const arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstCache(strQxPrjId);
if (arrvQxPrjMenusSimObjLstCache.length == 0) return arrvQxPrjMenusSimObjLstCache;
let arrvQxPrjMenusSimSel = arrvQxPrjMenusSimObjLstCache;
const objvQxPrjMenusSimCond = objPagerPara.conditionCollection;
if (objvQxPrjMenusSimCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clsvQxPrjMenusSimEN>();
}
//console.log("clsvQxPrjMenusSimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objvQxPrjMenusSimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvQxPrjMenusSimSel.length == 0) return arrvQxPrjMenusSimSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.sort(vQxPrjMenusSim_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.sort(objPagerPara.sortFun);
}
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.slice(intStart, intEnd);     
return arrvQxPrjMenusSimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvQxPrjMenusSimEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vQxPrjMenusSim_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvQxPrjMenusSimEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvQxPrjMenusSimEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objPagerPara, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vQxPrjMenusSim_GetObjLstByJSONObjLst(returnObjLst);
return arrObjLst;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrMenuIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vQxPrjMenusSim_IsExistRecordCache(objvQxPrjMenusSimCond: ConditionCollection,strQxPrjId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstCache(strQxPrjId);
if (arrvQxPrjMenusSimObjLstCache == null) return false;
let arrvQxPrjMenusSimSel = arrvQxPrjMenusSimObjLstCache;
if (objvQxPrjMenusSimCond.GetConditions().length == 0) return arrvQxPrjMenusSimSel.length>0?true:false;
try {
for (const objCondition of objvQxPrjMenusSimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvQxPrjMenusSimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvQxPrjMenusSimCond), vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return false;
}

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function vQxPrjMenusSim_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据关键字判断是否存在记录, 从本地缓存中判断.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
 * @param strMenuId:所给的关键字
 * @returns 对象
*/
export  async function vQxPrjMenusSim_IsExistCache(strMenuId:string,strQxPrjId:string) {
const strThisFuncName = "IsExistCache";
const arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstCache(strQxPrjId);
if (arrvQxPrjMenusSimObjLstCache == null) return false;
try
{
const arrvQxPrjMenusSimSel = arrvQxPrjMenusSimObjLstCache.filter(x => x.menuId == strMenuId);
if (arrvQxPrjMenusSimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e)
{
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strMenuId, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strMenuId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vQxPrjMenusSim_IsExistAsync(strMenuId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strMenuId
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /**
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export  async function vQxPrjMenusSim_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(vQxPrjMenusSim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strWhereCond,
},
};
try
{
const response = await axios.get(strUrl,config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw(data.errorMsg);
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

/**
 * 根据条件对象, 从缓存的对象列表中获取记录数.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
 * @param objvQxPrjMenusSimCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vQxPrjMenusSim_GetRecCountByCondCache(objvQxPrjMenusSimCond: ConditionCollection ,strQxPrjId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvQxPrjMenusSimObjLstCache = await vQxPrjMenusSim_GetObjLstCache(strQxPrjId);
if (arrvQxPrjMenusSimObjLstCache == null) return 0;
let arrvQxPrjMenusSimSel = arrvQxPrjMenusSimObjLstCache;
if (objvQxPrjMenusSimCond.GetConditions().length == 0) return arrvQxPrjMenusSimSel.length;
try {
for (const objCondition of objvQxPrjMenusSimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvQxPrjMenusSimSel = arrvQxPrjMenusSimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvQxPrjMenusSimSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvQxPrjMenusSimCond), vQxPrjMenusSim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vQxPrjMenusSim_GetWebApiUrl(strController: string, strAction: string): string {
let strServiceUrl:string;
let strCurrIPAddressAndPort = "";
if (clsSysPara4WebApi.bolIsLocalHost == false)
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
}
else
{
strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
}
if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true)
{
strServiceUrl = Format("{0}/{1}/{2}", strCurrIPAddressAndPort, strController, strAction);
}
else
{
strServiceUrl = Format("{0}/{1}/{2}/{3}", strCurrIPAddressAndPort, clsSysPara4WebApi.CurrPrx, strController, strAction);
}
return strServiceUrl;
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vQxPrjMenusSim_ReFreshThisCache(strQxPrjId: string):void
{

if (IsNullOrEmpty(strQxPrjId) == true)
{
  const strMsg = Format("参数:[strQxPrjId]不能为空!(In clsvQxPrjMenusSimWApi.vQxPrjMenusSim_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strQxPrjId.length != 4)
{
const strMsg = Format("缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(clsvQxPrjMenusSimWApi.vQxPrjMenusSim_ReFreshThisCache)", strQxPrjId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvQxPrjMenusSimEN._CurrTabName, strQxPrjId);
switch (clsvQxPrjMenusSimEN.CacheModeId)
{
case "04"://sessionStorage
sessionStorage.removeItem(strKey);
break;
case "03"://localStorage
localStorage.removeItem(strKey);
break;
case "02"://ClientCache
CacheHelper.Remove(strKey);
break;
default:
CacheHelper.Remove(strKey);
break;
}
clsvQxPrjMenusSimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
const strMsg = Format("刷新缓存成功!");
console.trace(strMsg);
}
else
{
const strMsg = Format("刷新缓存已经关闭。");
console.trace(strMsg);
}
}
/**
* 获取最新的缓存刷新时间
* @returns 最新的缓存刷新时间，字符串型
**/
export  function vQxPrjMenusSim_GetLastRefreshTime():string
{
if (clsvQxPrjMenusSimEN._RefreshTimeLst.length == 0) return "";
return clsvQxPrjMenusSimEN._RefreshTimeLst[clsvQxPrjMenusSimEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxPrjMenusSim_GetJSONStrByObj (pobjvQxPrjMenusSimEN: clsvQxPrjMenusSimEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvQxPrjMenusSimEN);
}
catch(objException)
{
const strEx = GetExceptionStr(objException);
myShowErrorMsg(strEx);
}
if (strJson == undefined) return "";
else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vQxPrjMenusSim_GetObjLstByJSONStr (strJSON: string): Array<clsvQxPrjMenusSimEN>
{
let arrvQxPrjMenusSimObjLst = new Array<clsvQxPrjMenusSimEN>();
if (strJSON === "")
{
return arrvQxPrjMenusSimObjLst;
}
try
{
arrvQxPrjMenusSimObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvQxPrjMenusSimObjLst;
}
return arrvQxPrjMenusSimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvQxPrjMenusSimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vQxPrjMenusSim_GetObjLstByJSONObjLst (arrvQxPrjMenusSimObjLstS: Array<clsvQxPrjMenusSimEN>): Array<clsvQxPrjMenusSimEN>
{
const arrvQxPrjMenusSimObjLst = new Array<clsvQxPrjMenusSimEN>();
for (const objInFor of arrvQxPrjMenusSimObjLstS) {
const obj1 = vQxPrjMenusSim_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvQxPrjMenusSimObjLst.push(obj1);
}
return arrvQxPrjMenusSimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vQxPrjMenusSim_GetObjByJSONStr (strJSON: string): clsvQxPrjMenusSimEN
{
let pobjvQxPrjMenusSimEN = new clsvQxPrjMenusSimEN();
if (strJSON === "")
{
return pobjvQxPrjMenusSimEN;
}
try
{
pobjvQxPrjMenusSimEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvQxPrjMenusSimEN;
}
return pobjvQxPrjMenusSimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vQxPrjMenusSim_GetCombineCondition(objvQxPrjMenusSimCond: clsvQxPrjMenusSimEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_MenuId) == true)
{
const strComparisonOpMenuId:string = objvQxPrjMenusSimCond.dicFldComparisonOp[clsvQxPrjMenusSimEN.con_MenuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjMenusSimEN.con_MenuId, objvQxPrjMenusSimCond.menuId, strComparisonOpMenuId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_MenuName) == true)
{
const strComparisonOpMenuName:string = objvQxPrjMenusSimCond.dicFldComparisonOp[clsvQxPrjMenusSimEN.con_MenuName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjMenusSimEN.con_MenuName, objvQxPrjMenusSimCond.menuName, strComparisonOpMenuName);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objvQxPrjMenusSimCond.dicFldComparisonOp[clsvQxPrjMenusSimEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjMenusSimEN.con_QxPrjId, objvQxPrjMenusSimCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_UpMenuId) == true)
{
const strComparisonOpUpMenuId:string = objvQxPrjMenusSimCond.dicFldComparisonOp[clsvQxPrjMenusSimEN.con_UpMenuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjMenusSimEN.con_UpMenuId, objvQxPrjMenusSimCond.upMenuId, strComparisonOpUpMenuId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_PageDispModeId) == true)
{
const strComparisonOpPageDispModeId:string = objvQxPrjMenusSimCond.dicFldComparisonOp[clsvQxPrjMenusSimEN.con_PageDispModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjMenusSimEN.con_PageDispModeId, objvQxPrjMenusSimCond.pageDispModeId, strComparisonOpPageDispModeId);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_InUse) == true)
{
if (objvQxPrjMenusSimCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clsvQxPrjMenusSimEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvQxPrjMenusSimEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_SubMenusNum) == true)
{
const strComparisonOpSubMenusNum:string = objvQxPrjMenusSimCond.dicFldComparisonOp[clsvQxPrjMenusSimEN.con_SubMenusNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQxPrjMenusSimEN.con_SubMenusNum, objvQxPrjMenusSimCond.subMenusNum, strComparisonOpSubMenusNum);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_RoleNum) == true)
{
const strComparisonOpRoleNum:string = objvQxPrjMenusSimCond.dicFldComparisonOp[clsvQxPrjMenusSimEN.con_RoleNum];
strWhereCond += Format(" And {0} {2} {1}", clsvQxPrjMenusSimEN.con_RoleNum, objvQxPrjMenusSimCond.roleNum, strComparisonOpRoleNum);
}
if (Object.prototype.hasOwnProperty.call(objvQxPrjMenusSimCond.dicFldComparisonOp, clsvQxPrjMenusSimEN.con_MenuSetId) == true)
{
const strComparisonOpMenuSetId:string = objvQxPrjMenusSimCond.dicFldComparisonOp[clsvQxPrjMenusSimEN.con_MenuSetId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvQxPrjMenusSimEN.con_MenuSetId, objvQxPrjMenusSimCond.menuSetId, strComparisonOpMenuSetId);
}
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvQxPrjMenusSimENS:源对象
 * @param objvQxPrjMenusSimENT:目标对象
*/
export  function vQxPrjMenusSim_GetObjFromJsonObj(objvQxPrjMenusSimENS: clsvQxPrjMenusSimEN): clsvQxPrjMenusSimEN 
{
 const objvQxPrjMenusSimENT: clsvQxPrjMenusSimEN = new clsvQxPrjMenusSimEN();
ObjectAssign(objvQxPrjMenusSimENT, objvQxPrjMenusSimENS);
 return objvQxPrjMenusSimENT;
}

 /**
 * 类名:clsvCacheUseStateWApi
 * 表名:vCacheUseState(01120690)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 20:02:58
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vCacheUseState(vCacheUseState)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月06日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { clsvCacheUseStateEN } from "@/ts/L0Entity/SystemSet/clsvCacheUseStateEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vCacheUseState_Controller = "vCacheUseStateApi";
 export const vCacheUseState_ConstructorName = "vCacheUseState";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vCacheUseState_GetObjBymIdAsync(lngmId: number): Promise<clsvCacheUseStateEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvCacheUseStateWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
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
const objvCacheUseState = vCacheUseState_GetObjFromJsonObj(returnObj);
return objvCacheUseState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function vCacheUseState_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvCacheUseStateWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvCacheUseStateEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvCacheUseStateCache: clsvCacheUseStateEN = JSON.parse(strTempObj);
return objvCacheUseStateCache;
}
try
{
const objvCacheUseState = await vCacheUseState_GetObjBymIdAsync(lngmId);
if (objvCacheUseState != null)
{
localStorage.setItem(strKey, JSON.stringify(objvCacheUseState));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvCacheUseState;
}
return objvCacheUseState;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function vCacheUseState_GetObjBymIdCache(lngmId:number,strUserId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvCacheUseStateWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstCache(strUserId);
try
{
const arrvCacheUseStateSel = arrvCacheUseStateObjLstCache.filter(x => 
 x.mId == lngmId );
let objvCacheUseState: clsvCacheUseStateEN;
if (arrvCacheUseStateSel.length > 0)
{
objvCacheUseState = arrvCacheUseStateSel[0];
return objvCacheUseState;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvCacheUseStateConst = await vCacheUseState_GetObjBymIdAsync(lngmId);
if (objvCacheUseStateConst != null)
{
vCacheUseState_ReFreshThisCache(strUserId);
return objvCacheUseStateConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vCacheUseState_SortFunDefa(a:clsvCacheUseStateEN , b:clsvCacheUseStateEN): number 
{
return a.mId-b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vCacheUseState_SortFunDefa2Fld(a:clsvCacheUseStateEN , b:clsvCacheUseStateEN): number 
{
if (a.userId == b.userId) return a.cacheModeId.localeCompare(b.cacheModeId);
else return a.userId.localeCompare(b.userId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vCacheUseState_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvCacheUseStateEN.con_mId:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
return a.mId-b.mId;
}
case clsvCacheUseStateEN.con_UserId:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
return a.userId.localeCompare(b.userId);
}
case clsvCacheUseStateEN.con_CacheModeId:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (a.cacheModeId == null) return -1;
if (b.cacheModeId == null) return 1;
return a.cacheModeId.localeCompare(b.cacheModeId);
}
case clsvCacheUseStateEN.con_CacheModeName:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (a.cacheModeName == null) return -1;
if (b.cacheModeName == null) return 1;
return a.cacheModeName.localeCompare(b.cacheModeName);
}
case clsvCacheUseStateEN.con_CacheModeENName:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (a.cacheModeENName == null) return -1;
if (b.cacheModeENName == null) return 1;
return a.cacheModeENName.localeCompare(b.cacheModeENName);
}
case clsvCacheUseStateEN.con_CacheKey:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (a.cacheKey == null) return -1;
if (b.cacheKey == null) return 1;
return a.cacheKey.localeCompare(b.cacheKey);
}
case clsvCacheUseStateEN.con_CacheSize:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
return a.cacheSize-b.cacheSize;
}
case clsvCacheUseStateEN.con_Memo:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCacheUseState]中不存在!(in ${ vCacheUseState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvCacheUseStateEN.con_mId:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
return b.mId-a.mId;
}
case clsvCacheUseStateEN.con_UserId:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
return b.userId.localeCompare(a.userId);
}
case clsvCacheUseStateEN.con_CacheModeId:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (b.cacheModeId == null) return -1;
if (a.cacheModeId == null) return 1;
return b.cacheModeId.localeCompare(a.cacheModeId);
}
case clsvCacheUseStateEN.con_CacheModeName:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (b.cacheModeName == null) return -1;
if (a.cacheModeName == null) return 1;
return b.cacheModeName.localeCompare(a.cacheModeName);
}
case clsvCacheUseStateEN.con_CacheModeENName:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (b.cacheModeENName == null) return -1;
if (a.cacheModeENName == null) return 1;
return b.cacheModeENName.localeCompare(a.cacheModeENName);
}
case clsvCacheUseStateEN.con_CacheKey:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (b.cacheKey == null) return -1;
if (a.cacheKey == null) return 1;
return b.cacheKey.localeCompare(a.cacheKey);
}
case clsvCacheUseStateEN.con_CacheSize:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
return b.cacheSize-a.cacheSize;
}
case clsvCacheUseStateEN.con_Memo:
return (a: clsvCacheUseStateEN, b: clsvCacheUseStateEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCacheUseState]中不存在!(in ${ vCacheUseState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vCacheUseState_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvCacheUseStateEN.con_mId:
return (obj: clsvCacheUseStateEN) => {
return obj.mId === value;
}
case clsvCacheUseStateEN.con_UserId:
return (obj: clsvCacheUseStateEN) => {
return obj.userId === value;
}
case clsvCacheUseStateEN.con_CacheModeId:
return (obj: clsvCacheUseStateEN) => {
return obj.cacheModeId === value;
}
case clsvCacheUseStateEN.con_CacheModeName:
return (obj: clsvCacheUseStateEN) => {
return obj.cacheModeName === value;
}
case clsvCacheUseStateEN.con_CacheModeENName:
return (obj: clsvCacheUseStateEN) => {
return obj.cacheModeENName === value;
}
case clsvCacheUseStateEN.con_CacheKey:
return (obj: clsvCacheUseStateEN) => {
return obj.cacheKey === value;
}
case clsvCacheUseStateEN.con_CacheSize:
return (obj: clsvCacheUseStateEN) => {
return obj.cacheSize === value;
}
case clsvCacheUseStateEN.con_Memo:
return (obj: clsvCacheUseStateEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCacheUseState]中不存在!(in ${ vCacheUseState_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strUserId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vCacheUseState_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strUserIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strUserIdClassfy) == true)
{
  const strMsg = Format("参数:[strUserIdClassfy]不能为空!(In clsvCacheUseStateWApi.func)");
console.error(strMsg);
 throw (strMsg);
}

if (strInFldName != clsvCacheUseStateEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvCacheUseStateEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvCacheUseStateEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objvCacheUseState = await vCacheUseState_GetObjBymIdCache(lngmId , strUserIdClassfy);
if (objvCacheUseState == null) return "";
if (objvCacheUseState.GetFldValue(strOutFldName) == null) return "";
return objvCacheUseState.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strUserId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vCacheUseState_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strUserIdClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strUserIdClassfy) == true)
{
  const strMsg = Format("参数:[strUserIdClassfy]不能为空!(In clsvCacheUseStateWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}

if (strInFldName == clsvCacheUseStateEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvCacheUseState = await vCacheUseState_GetObjLstCache(strUserIdClassfy);
if (arrvCacheUseState == null) return [];
let arrvCacheUseStateSel = arrvCacheUseState;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvCacheUseStateSel.length == 0) return [];
return arrvCacheUseStateSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vCacheUseState_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetFirstObjAsync(strWhereCond: string): Promise<clsvCacheUseStateEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const objvCacheUseState = vCacheUseState_GetObjFromJsonObj(returnObj);
return objvCacheUseState;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetObjLstClientCache(strUserId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCacheUseStateEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCacheUseStateEN.WhereFormat, strUserId);
}
else
{
strWhereCond = Format("UserId='{0}'", strUserId);
}
const strKey = Format("{0}_{1}", clsvCacheUseStateEN._CurrTabName, strUserId);
if (IsNullOrEmpty(clsvCacheUseStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCacheUseStateEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvCacheUseStateExObjLstCache: Array<clsvCacheUseStateEN> = CacheHelper.Get(strKey);
const arrvCacheUseStateObjLstT = vCacheUseState_GetObjLstByJSONObjLst(arrvCacheUseStateExObjLstCache);
return arrvCacheUseStateObjLstT;
}
try
{
const arrvCacheUseStateExObjLst = await vCacheUseState_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvCacheUseStateExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCacheUseStateExObjLst.length);
console.log(strInfo);
return arrvCacheUseStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCacheUseState_GetObjLstlocalStorage(strUserId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCacheUseStateEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCacheUseStateEN.WhereFormat, strUserId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvCacheUseStateEN.con_UserId, strUserId);
}
const strKey = Format("{0}_{1}", clsvCacheUseStateEN._CurrTabName, strUserId);
if (IsNullOrEmpty(clsvCacheUseStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCacheUseStateEN.CacheAddiCondition);
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
const arrvCacheUseStateExObjLstCache: Array<clsvCacheUseStateEN> = JSON.parse(strTempObjLst);
const arrvCacheUseStateObjLstT = vCacheUseState_GetObjLstByJSONObjLst(arrvCacheUseStateExObjLstCache);
return arrvCacheUseStateObjLstT;
}
try
{
const arrvCacheUseStateExObjLst = await vCacheUseState_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrvCacheUseStateExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCacheUseStateExObjLst.length);
console.log(strInfo);
return arrvCacheUseStateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCacheUseState_GetObjLstlocalStoragePureCache(strUserId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvCacheUseStateEN._CurrTabName, strUserId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvCacheUseStateObjLstCache: Array<clsvCacheUseStateEN> = JSON.parse(strTempObjLst);
return arrvCacheUseStateObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vCacheUseState_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvCacheUseStateEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCacheUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetObjLstsessionStorage(strUserId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCacheUseStateEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCacheUseStateEN.WhereFormat, strUserId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvCacheUseStateEN.con_UserId, strUserId);
}
const strKey = Format("{0}_{1}", clsvCacheUseStateEN._CurrTabName, strUserId);
if (IsNullOrEmpty(clsvCacheUseStateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCacheUseStateEN.CacheAddiCondition);
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
const arrvCacheUseStateExObjLstCache: Array<clsvCacheUseStateEN> = JSON.parse(strTempObjLst);
const arrvCacheUseStateObjLstT = vCacheUseState_GetObjLstByJSONObjLst(arrvCacheUseStateExObjLstCache);
return arrvCacheUseStateObjLstT;
}
try
{
const arrvCacheUseStateExObjLst = await vCacheUseState_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrvCacheUseStateExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCacheUseStateExObjLst.length);
console.log(strInfo);
return arrvCacheUseStateExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCacheUseState_GetObjLstsessionStoragePureCache(strUserId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvCacheUseStateEN._CurrTabName, strUserId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvCacheUseStateObjLstCache: Array<clsvCacheUseStateEN> = JSON.parse(strTempObjLst);
return arrvCacheUseStateObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCacheUseState_GetObjLstCache(strUserId: string): Promise<Array<clsvCacheUseStateEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空！(In clsvCacheUseStateWApi.vCacheUseState_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
let arrvCacheUseStateObjLstCache;
switch (clsvCacheUseStateEN.CacheModeId)
{
case "04"://sessionStorage
arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstsessionStorage(strUserId);
break;
case "03"://localStorage
arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstlocalStorage(strUserId);
break;
case "02"://ClientCache
arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstClientCache(strUserId);
break;
default:
arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstClientCache(strUserId);
break;
}
return arrvCacheUseStateObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCacheUseState_GetObjLstPureCache(strUserId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvCacheUseStateObjLstCache;
switch (clsvCacheUseStateEN.CacheModeId)
{
case "04"://sessionStorage
arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstsessionStoragePureCache(strUserId);
break;
case "03"://localStorage
arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstlocalStoragePureCache(strUserId);
break;
case "02"://ClientCache
arrvCacheUseStateObjLstCache = null;
break;
default:
arrvCacheUseStateObjLstCache = null;
break;
}
return arrvCacheUseStateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vCacheUseState_GetSubObjLstCache(objvCacheUseStateCond: ConditionCollection ,strUserId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstCache(strUserId);
let arrvCacheUseStateSel = arrvCacheUseStateObjLstCache;
if (objvCacheUseStateCond.GetConditions().length == 0) return arrvCacheUseStateSel;
try {
//console.log(sstrKeys);
for (const objCondition of objvCacheUseStateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvCacheUseStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvCacheUseStateCond), vCacheUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvCacheUseStateEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function vCacheUseState_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvCacheUseStateEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCacheUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
*/
export  async function vCacheUseState_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ,strUserId: string) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstCache(strUserId);
const arrvCacheUseStateSel = arrvCacheUseStateObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrvCacheUseStateSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvCacheUseStateEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCacheUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvCacheUseStateEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCacheUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strUserId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsvCacheUseStateEN>();
const arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstCache(strUserId);
if (arrvCacheUseStateObjLstCache.length == 0) return arrvCacheUseStateObjLstCache;
let arrvCacheUseStateSel = arrvCacheUseStateObjLstCache;
const objvCacheUseStateCond = objPagerPara.conditionCollection;
if (objvCacheUseStateCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return;
}
//console.log("clsvCacheUseStateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objvCacheUseStateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvCacheUseStateSel.length == 0) return arrvCacheUseStateSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrvCacheUseStateSel = arrvCacheUseStateSel.sort(vCacheUseState_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrvCacheUseStateSel = arrvCacheUseStateSel.sort(objPagerPara.sortFun);
}
arrvCacheUseStateSel = arrvCacheUseStateSel.slice(intStart, intEnd);     
return arrvCacheUseStateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvCacheUseStateEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function vCacheUseState_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvCacheUseStateEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvCacheUseStateEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCacheUseState_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCacheUseState_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function vCacheUseState_IsExistRecordCache(objvCacheUseStateCond: ConditionCollection,strUserId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstCache(strUserId);
if (arrvCacheUseStateObjLstCache == null) return false;
let arrvCacheUseStateSel = arrvCacheUseStateObjLstCache;
if (objvCacheUseStateCond.GetConditions().length == 0) return arrvCacheUseStateSel.length>0?true:false;
try {
for (const objCondition of objvCacheUseStateCond.GetConditions()) {
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
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvCacheUseStateSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvCacheUseStateCond), vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
 * @param lngmId:所给的关键字
 * @returns 对象
*/
export  async function vCacheUseState_IsExistCache(lngmId:number,strUserId:string) {
const strThisFuncName = "IsExistCache";
const arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstCache(strUserId);
if (arrvCacheUseStateObjLstCache == null) return false;
try
{
const arrvCacheUseStateSel = arrvCacheUseStateObjLstCache.filter(x => x.mId == lngmId);
if (arrvCacheUseStateSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vCacheUseState_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
export  async function vCacheUseState_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vCacheUseState_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCacheUseState_ConstructorName, strThisFuncName);
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
 * @param objvCacheUseStateCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vCacheUseState_GetRecCountByCondCache(objvCacheUseStateCond: ConditionCollection ,strUserId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvCacheUseStateObjLstCache = await vCacheUseState_GetObjLstCache(strUserId);
if (arrvCacheUseStateObjLstCache == null) return 0;
let arrvCacheUseStateSel = arrvCacheUseStateObjLstCache;
if (objvCacheUseStateCond.GetConditions().length == 0) return arrvCacheUseStateSel.length;
try {
for (const objCondition of objvCacheUseStateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCacheUseStateSel = arrvCacheUseStateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvCacheUseStateSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvCacheUseStateCond), vCacheUseState_ConstructorName, strThisFuncName);
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
export  function vCacheUseState_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vCacheUseState_ReFreshThisCache(strUserId: string):void
{

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsvCacheUseStateWApi.vCacheUseState_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvCacheUseStateEN._CurrTabName, strUserId);
switch (clsvCacheUseStateEN.CacheModeId)
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
clsvCacheUseStateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vCacheUseState_GetLastRefreshTime():string
{
if (clsvCacheUseStateEN._RefreshTimeLst.length == 0) return "";
return clsvCacheUseStateEN._RefreshTimeLst[clsvCacheUseStateEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCacheUseState_GetJSONStrByObj (pobjvCacheUseStateEN: clsvCacheUseStateEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvCacheUseStateEN);
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
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function vCacheUseState_GetObjLstByJSONStr (strJSON: string): Array<clsvCacheUseStateEN>
{
let arrvCacheUseStateObjLst = new Array<clsvCacheUseStateEN>();
if (strJSON === "")
{
return arrvCacheUseStateObjLst;
}
try
{
arrvCacheUseStateObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvCacheUseStateObjLst;
}
return arrvCacheUseStateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCacheUseStateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vCacheUseState_GetObjLstByJSONObjLst (arrvCacheUseStateObjLstS: Array<clsvCacheUseStateEN>): Array<clsvCacheUseStateEN>
{
const arrvCacheUseStateObjLst = new Array<clsvCacheUseStateEN>();
for (const objInFor of arrvCacheUseStateObjLstS) {
const obj1 = vCacheUseState_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvCacheUseStateObjLst.push(obj1);
}
return arrvCacheUseStateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCacheUseState_GetObjByJSONStr (strJSON: string): clsvCacheUseStateEN
{
let pobjvCacheUseStateEN = new clsvCacheUseStateEN();
if (strJSON === "")
{
return pobjvCacheUseStateEN;
}
try
{
pobjvCacheUseStateEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvCacheUseStateEN;
}
return pobjvCacheUseStateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vCacheUseState_GetCombineCondition(objvCacheUseStateCond: clsvCacheUseStateEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvCacheUseStateCond.dicFldComparisonOp, clsvCacheUseStateEN.con_mId) == true)
{
const strComparisonOpmId:string = objvCacheUseStateCond.dicFldComparisonOp[clsvCacheUseStateEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvCacheUseStateEN.con_mId, objvCacheUseStateCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvCacheUseStateCond.dicFldComparisonOp, clsvCacheUseStateEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvCacheUseStateCond.dicFldComparisonOp[clsvCacheUseStateEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCacheUseStateEN.con_UserId, objvCacheUseStateCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objvCacheUseStateCond.dicFldComparisonOp, clsvCacheUseStateEN.con_CacheModeId) == true)
{
const strComparisonOpCacheModeId:string = objvCacheUseStateCond.dicFldComparisonOp[clsvCacheUseStateEN.con_CacheModeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCacheUseStateEN.con_CacheModeId, objvCacheUseStateCond.cacheModeId, strComparisonOpCacheModeId);
}
if (Object.prototype.hasOwnProperty.call(objvCacheUseStateCond.dicFldComparisonOp, clsvCacheUseStateEN.con_CacheModeName) == true)
{
const strComparisonOpCacheModeName:string = objvCacheUseStateCond.dicFldComparisonOp[clsvCacheUseStateEN.con_CacheModeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCacheUseStateEN.con_CacheModeName, objvCacheUseStateCond.cacheModeName, strComparisonOpCacheModeName);
}
if (Object.prototype.hasOwnProperty.call(objvCacheUseStateCond.dicFldComparisonOp, clsvCacheUseStateEN.con_CacheModeENName) == true)
{
const strComparisonOpCacheModeENName:string = objvCacheUseStateCond.dicFldComparisonOp[clsvCacheUseStateEN.con_CacheModeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCacheUseStateEN.con_CacheModeENName, objvCacheUseStateCond.cacheModeENName, strComparisonOpCacheModeENName);
}
if (Object.prototype.hasOwnProperty.call(objvCacheUseStateCond.dicFldComparisonOp, clsvCacheUseStateEN.con_CacheKey) == true)
{
const strComparisonOpCacheKey:string = objvCacheUseStateCond.dicFldComparisonOp[clsvCacheUseStateEN.con_CacheKey];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCacheUseStateEN.con_CacheKey, objvCacheUseStateCond.cacheKey, strComparisonOpCacheKey);
}
if (Object.prototype.hasOwnProperty.call(objvCacheUseStateCond.dicFldComparisonOp, clsvCacheUseStateEN.con_CacheSize) == true)
{
const strComparisonOpCacheSize:string = objvCacheUseStateCond.dicFldComparisonOp[clsvCacheUseStateEN.con_CacheSize];
strWhereCond += Format(" And {0} {2} {1}", clsvCacheUseStateEN.con_CacheSize, objvCacheUseStateCond.cacheSize, strComparisonOpCacheSize);
}
if (Object.prototype.hasOwnProperty.call(objvCacheUseStateCond.dicFldComparisonOp, clsvCacheUseStateEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvCacheUseStateCond.dicFldComparisonOp[clsvCacheUseStateEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCacheUseStateEN.con_Memo, objvCacheUseStateCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--vCacheUseState(vCacheUseState),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function vCacheUseState_GetUniCondStr(objvCacheUseStateEN: clsvCacheUseStateEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objvCacheUseStateEN.mId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--vCacheUseState(vCacheUseState),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function vCacheUseState_GetUniCondStr4Update(objvCacheUseStateEN: clsvCacheUseStateEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objvCacheUseStateEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objvCacheUseStateEN.mId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvCacheUseStateENS:源对象
 * @param objvCacheUseStateENT:目标对象
*/
export  function vCacheUseState_CopyObjTo(objvCacheUseStateENS: clsvCacheUseStateEN , objvCacheUseStateENT: clsvCacheUseStateEN ): void 
{
objvCacheUseStateENT.mId = objvCacheUseStateENS.mId; //mId
objvCacheUseStateENT.userId = objvCacheUseStateENS.userId; //用户ID
objvCacheUseStateENT.cacheModeId = objvCacheUseStateENS.cacheModeId; //缓存方式Id
objvCacheUseStateENT.cacheModeName = objvCacheUseStateENS.cacheModeName; //缓存方式名
objvCacheUseStateENT.cacheModeENName = objvCacheUseStateENS.cacheModeENName; //缓存方式英文名
objvCacheUseStateENT.cacheKey = objvCacheUseStateENS.cacheKey; //缓存关键字
objvCacheUseStateENT.cacheSize = objvCacheUseStateENS.cacheSize; //缓存大小
objvCacheUseStateENT.memo = objvCacheUseStateENS.memo; //备注
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCacheUseStateENS:源对象
 * @param objvCacheUseStateENT:目标对象
*/
export  function vCacheUseState_GetObjFromJsonObj(objvCacheUseStateENS: clsvCacheUseStateEN): clsvCacheUseStateEN 
{
 const objvCacheUseStateENT: clsvCacheUseStateEN = new clsvCacheUseStateEN();
ObjectAssign(objvCacheUseStateENT, objvCacheUseStateENS);
 return objvCacheUseStateENT;
}
﻿
 /**
 * 类名:clsgs_TeachingDateWApi
 * 表名:gs_TeachingDate(01120684)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 教学班日期范围(gs_TeachingDate)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月10日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format,GetStrLen,tzDataType } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper,LocalStorage_GetKeyByPrefix,SessionStorage_GetKeyByPrefix } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { GetSortExpressInfo,ObjectAssign,GetExceptionStr,myShowErrorMsg } from "@/ts/PubFun/clsCommFunc4Web";
import { gs_TeachingDateCache,isFuncMapCache } from "@/viewsShare/DailyRunning/gs_TeachingDateVueShare";
import { clsgs_TeachingDateENEx } from "@/ts/L0Entity/DailyRunning/clsgs_TeachingDateENEx";
import { clsgs_TeachingDateEN } from "@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN";
import { vCurrEduCls_Sim_func } from "@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi";
import { clsvCurrEduCls_SimEN } from "@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const gs_TeachingDate_Controller = "gs_TeachingDateApi";
 export const gs_TeachingDate_ConstructorName = "gs_TeachingDate";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function gs_TeachingDate_GetObjBymIdAsync(lngmId: number): Promise<clsgs_TeachingDateEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsgs_TeachingDateWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const objgs_TeachingDate = gs_TeachingDate_GetObjFromJsonObj(returnObj);
return objgs_TeachingDate;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetObjBymIdlocalStorage(lngmId: number) {
const strThisFuncName = "GetObjBymIdlocalStorage";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsgs_TeachingDateWApi.GetObjBymIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, lngmId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objgs_TeachingDateCache: clsgs_TeachingDateEN = JSON.parse(strTempObj);
return objgs_TeachingDateCache;
}
try
{
const objgs_TeachingDate = await gs_TeachingDate_GetObjBymIdAsync(lngmId);
if (objgs_TeachingDate != null)
{
localStorage.setItem(strKey, JSON.stringify(objgs_TeachingDate));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objgs_TeachingDate;
}
return objgs_TeachingDate;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetObjBymIdCache(lngmId:number,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBymIdCache";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsgs_TeachingDateWApi.GetObjBymIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
try
{
const arrgs_TeachingDateSel = arrgs_TeachingDateObjLstCache.filter(x => 
 x.mId == lngmId );
let objgs_TeachingDate: clsgs_TeachingDateEN;
if (arrgs_TeachingDateSel.length > 0)
{
objgs_TeachingDate = arrgs_TeachingDateSel[0];
return objgs_TeachingDate;
}
else
{
if (bolTryAsyncOnce == true)
{
const objgs_TeachingDateConst = await gs_TeachingDate_GetObjBymIdAsync(lngmId);
if (objgs_TeachingDateConst != null)
{
gs_TeachingDate_ReFreshThisCache(strIdCurrEduCls);
return objgs_TeachingDateConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngmId, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objgs_TeachingDate:所给的对象
 * @returns 对象
*/
export  async function gs_TeachingDate_UpdateObjInLstCache(objgs_TeachingDate: clsgs_TeachingDateEN,strIdCurrEduCls: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
const obj = arrgs_TeachingDateObjLstCache.find(x => x.mId == objgs_TeachingDate.mId);
if (obj != null)
{
objgs_TeachingDate.mId = obj.mId;
ObjectAssign( obj, objgs_TeachingDate);
}
else
{
arrgs_TeachingDateObjLstCache.push(objgs_TeachingDate);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_TeachingDate_SortFunDefa(a:clsgs_TeachingDateEN , b:clsgs_TeachingDateEN): number 
{
return a.mId-b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_TeachingDate_SortFunDefa2Fld(a:clsgs_TeachingDateEN , b:clsgs_TeachingDateEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.startDate.localeCompare(b.startDate);
else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_TeachingDate_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_TeachingDateEN.con_mId:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
return a.mId-b.mId;
}
case clsgs_TeachingDateEN.con_IdCurrEduCls:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsgs_TeachingDateEN.con_StartDate:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (a.startDate == null) return -1;
if (b.startDate == null) return 1;
return a.startDate.localeCompare(b.startDate);
}
case clsgs_TeachingDateEN.con_EndDate:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (a.endDate == null) return -1;
if (b.endDate == null) return 1;
return a.endDate.localeCompare(b.endDate);
}
case clsgs_TeachingDateEN.con_UpdDate:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_TeachingDateEN.con_UpdUser:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_TeachingDateEN.con_Memo:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_TeachingDate]中不存在!(in ${ gs_TeachingDate_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_TeachingDateEN.con_mId:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
return b.mId-a.mId;
}
case clsgs_TeachingDateEN.con_IdCurrEduCls:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsgs_TeachingDateEN.con_StartDate:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (b.startDate == null) return -1;
if (a.startDate == null) return 1;
return b.startDate.localeCompare(a.startDate);
}
case clsgs_TeachingDateEN.con_EndDate:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (b.endDate == null) return -1;
if (a.endDate == null) return 1;
return b.endDate.localeCompare(a.endDate);
}
case clsgs_TeachingDateEN.con_UpdDate:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_TeachingDateEN.con_UpdUser:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_TeachingDateEN.con_Memo:
return (a: clsgs_TeachingDateEN, b: clsgs_TeachingDateEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_TeachingDate]中不存在!(in ${ gs_TeachingDate_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
/*该表没有名称字段,不能生成此函数!*/

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function gs_TeachingDate_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_TeachingDateEN.con_mId:
return (obj: clsgs_TeachingDateEN) => {
return obj.mId === value;
}
case clsgs_TeachingDateEN.con_IdCurrEduCls:
return (obj: clsgs_TeachingDateEN) => {
return obj.idCurrEduCls === value;
}
case clsgs_TeachingDateEN.con_StartDate:
return (obj: clsgs_TeachingDateEN) => {
return obj.startDate === value;
}
case clsgs_TeachingDateEN.con_EndDate:
return (obj: clsgs_TeachingDateEN) => {
return obj.endDate === value;
}
case clsgs_TeachingDateEN.con_UpdDate:
return (obj: clsgs_TeachingDateEN) => {
return obj.updDate === value;
}
case clsgs_TeachingDateEN.con_UpdUser:
return (obj: clsgs_TeachingDateEN) => {
return obj.updUser === value;
}
case clsgs_TeachingDateEN.con_Memo:
return (obj: clsgs_TeachingDateEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_TeachingDate]中不存在!(in ${ gs_TeachingDate_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function gs_TeachingDate_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsgs_TeachingDateWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsgs_TeachingDateWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsgs_TeachingDateEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsgs_TeachingDateEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsgs_TeachingDateEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngmId = Number(strInValue);
if (lngmId == 0)
{
return "";
}
const objgs_TeachingDate = await gs_TeachingDate_GetObjBymIdCache(lngmId , strIdCurrEduClsClassfy);
if (objgs_TeachingDate == null) return "";
if (objgs_TeachingDate.GetFldValue(strOutFldName) == null) return "";
return objgs_TeachingDate.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function gs_TeachingDate_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsgs_TeachingDateWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsgs_TeachingDateWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsgs_TeachingDateEN.con_mId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrgs_TeachingDate = await gs_TeachingDate_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrgs_TeachingDate == null) return [];
let arrgs_TeachingDateSel = arrgs_TeachingDate;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrgs_TeachingDateSel.length == 0) return [];
return arrgs_TeachingDateSel.map(x=>x.mId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_TeachingDate_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_TeachingDateEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const objgs_TeachingDate = gs_TeachingDate_GetObjFromJsonObj(returnObj);
return objgs_TeachingDate;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsgs_TeachingDateEN.WhereFormat) == false)
{
strWhereCond = Format(clsgs_TeachingDateEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsgs_TeachingDateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_TeachingDateEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrgs_TeachingDateExObjLstCache: Array<clsgs_TeachingDateEN> = CacheHelper.Get(strKey);
const arrgs_TeachingDateObjLstT = gs_TeachingDate_GetObjLstByJSONObjLst(arrgs_TeachingDateExObjLstCache);
return arrgs_TeachingDateObjLstT;
}
try
{
const arrgs_TeachingDateExObjLst = await gs_TeachingDate_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrgs_TeachingDateExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_TeachingDateExObjLst.length);
console.log(strInfo);
return arrgs_TeachingDateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_TeachingDate_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsgs_TeachingDateEN.WhereFormat) == false)
{
strWhereCond = Format(clsgs_TeachingDateEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsgs_TeachingDateEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsgs_TeachingDateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_TeachingDateEN.CacheAddiCondition);
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
const arrgs_TeachingDateExObjLstCache: Array<clsgs_TeachingDateEN> = JSON.parse(strTempObjLst);
const arrgs_TeachingDateObjLstT = gs_TeachingDate_GetObjLstByJSONObjLst(arrgs_TeachingDateExObjLstCache);
return arrgs_TeachingDateObjLstT;
}
try
{
const arrgs_TeachingDateExObjLst = await gs_TeachingDate_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsgs_TeachingDateEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrgs_TeachingDateExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_TeachingDateExObjLst.length);
console.log(strInfo);
return arrgs_TeachingDateExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_TeachingDate_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrgs_TeachingDateObjLstCache: Array<clsgs_TeachingDateEN> = JSON.parse(strTempObjLst);
return arrgs_TeachingDateObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function gs_TeachingDate_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_TeachingDateEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsgs_TeachingDateEN.WhereFormat) == false)
{
strWhereCond = Format(clsgs_TeachingDateEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsgs_TeachingDateEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsgs_TeachingDateEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_TeachingDateEN.CacheAddiCondition);
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
const arrgs_TeachingDateExObjLstCache: Array<clsgs_TeachingDateEN> = JSON.parse(strTempObjLst);
const arrgs_TeachingDateObjLstT = gs_TeachingDate_GetObjLstByJSONObjLst(arrgs_TeachingDateExObjLstCache);
return arrgs_TeachingDateObjLstT;
}
try
{
const arrgs_TeachingDateExObjLst = await gs_TeachingDate_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsgs_TeachingDateEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrgs_TeachingDateExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_TeachingDateExObjLst.length);
console.log(strInfo);
return arrgs_TeachingDateExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_TeachingDate_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrgs_TeachingDateObjLstCache: Array<clsgs_TeachingDateEN> = JSON.parse(strTempObjLst);
return arrgs_TeachingDateObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_TeachingDate_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsgs_TeachingDateEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsgs_TeachingDateWApi.gs_TeachingDate_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsgs_TeachingDateWApi.gs_TeachingDate_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrgs_TeachingDateObjLstCache;
switch (clsgs_TeachingDateEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrgs_TeachingDateObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_TeachingDate_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrgs_TeachingDateObjLstCache;
switch (clsgs_TeachingDateEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrgs_TeachingDateObjLstCache = null;
break;
default:
arrgs_TeachingDateObjLstCache = null;
break;
}
return arrgs_TeachingDateObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function gs_TeachingDate_GetSubObjLstCache(objgs_TeachingDateCond: ConditionCollection ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
let arrgs_TeachingDateSel = arrgs_TeachingDateObjLstCache;
if (objgs_TeachingDateCond.GetConditions().length == 0) return arrgs_TeachingDateSel;
try {
//console.log(sstrKeys);
for (const objCondition of objgs_TeachingDateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_TeachingDateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objgs_TeachingDateCond), gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_TeachingDateEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_TeachingDate_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsgs_TeachingDateEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetObjLstBymIdLstCache(arrmIdLst: Array<number> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstBymIdLstCache";
try
{
const arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
const arrgs_TeachingDateSel = arrgs_TeachingDateObjLstCache.filter(x => arrmIdLst.indexOf(x.mId)>-1);
return arrgs_TeachingDateSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrmIdLst.join(","), gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_TeachingDateEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_TeachingDateEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_TeachingDateEN>();
const arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
if (arrgs_TeachingDateObjLstCache.length == 0) return arrgs_TeachingDateObjLstCache;
let arrgs_TeachingDateSel = arrgs_TeachingDateObjLstCache;
const objgs_TeachingDateCond = objPagerPara.conditionCollection;
if (objgs_TeachingDateCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clsgs_TeachingDateEN>();
}
//console.log("clsgs_TeachingDateWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objgs_TeachingDateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_TeachingDateSel.length == 0) return arrgs_TeachingDateSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrgs_TeachingDateSel = arrgs_TeachingDateSel.sort(gs_TeachingDate_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrgs_TeachingDateSel = arrgs_TeachingDateSel.sort(objPagerPara.sortFun);
}
arrgs_TeachingDateSel = arrgs_TeachingDateSel.slice(intStart, intEnd);     
return arrgs_TeachingDateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_TeachingDateEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function gs_TeachingDate_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_TeachingDateEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_TeachingDateEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_TeachingDate_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngmId);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const configDel = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.delete(strUrl, configDel);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_TeachingDate_Delgs_TeachingDatesAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_TeachingDatesAsync";
const strAction = "Delgs_TeachingDates";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
return data.returnInt;
}
else
{
console.error(data.errorMsg);
throw data.errorMsg;
}
} catch (error: any) {
console.error(error);
if (error.statusText == undefined)
{
throw error;
}
if (error.statusText == "error")
{
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function gs_TeachingDate_GetObjExLstByPagerCache(objPagerPara: stuPagerPara , strIdCurrEduCls:string):Promise<Array<clsgs_TeachingDateENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
 const objSortInfo = GetSortExpressInfo(objPagerPara);
const isFuncMapKey = `${ objSortInfo.SortFld}`;
const arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
//从缓存中获取对象，如果缓存中不存在就扩展复制
const arrNewObj = new Array<clsgs_TeachingDateENEx>();
const arrgs_TeachingDateExObjLst = arrgs_TeachingDateObjLst.map((obj) => {
const cacheKey = `${ obj.mId}_${ obj.idCurrEduCls}`;
if (gs_TeachingDateCache[cacheKey])
{
const oldObj = gs_TeachingDateCache[cacheKey];
return oldObj;
}
else
{
const newObj = gs_TeachingDate_CopyToEx(obj);
arrNewObj.push(newObj);
gs_TeachingDateCache[cacheKey] = newObj;
return newObj;
}
});
for (const newObj of arrNewObj) {
for (const strFldName of Object.keys(isFuncMapCache)) {
await gs_TeachingDate_FuncMapByFldName(strFldName, newObj);
}
}
//检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
if (
IsNullOrEmpty(objSortInfo.SortFld) == false &&
clsgs_TeachingDateEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
(bolIsFuncMap == false || bolIsFuncMap == undefined)
)
{
for (const newObj of arrgs_TeachingDateExObjLst) {
await gs_TeachingDate_FuncMapByFldName(objSortInfo.SortFld, newObj);
const cacheKey = `${ newObj.mId}_${ newObj.idCurrEduCls}`;
gs_TeachingDateCache[cacheKey] = newObj;
}
isFuncMapCache[isFuncMapKey] = true;
}
if (arrgs_TeachingDateExObjLst.length == 0) return arrgs_TeachingDateExObjLst;
let arrgs_TeachingDateSel: Array < clsgs_TeachingDateENEx > = arrgs_TeachingDateExObjLst;
const objgs_TeachingDateCond = objPagerPara.conditionCollection;
if (objgs_TeachingDateCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return arrgs_TeachingDateExObjLst;
}
try {
for (const objCondition of objgs_TeachingDateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_TeachingDateSel.length == 0) return arrgs_TeachingDateSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.sort(gs_TeachingDate_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrgs_TeachingDateSel = arrgs_TeachingDateSel.sort(objPagerPara.sortFun);
}
arrgs_TeachingDateSel = arrgs_TeachingDateSel.slice(intStart, intEnd);     
return arrgs_TeachingDateSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_TeachingDateENEx>();
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objgs_TeachingDateENS:源对象
 * @returns 目标对象=>clsgs_TeachingDateEN:objgs_TeachingDateENT
 **/
export  function gs_TeachingDate_CopyToEx(objgs_TeachingDateENS:clsgs_TeachingDateEN ): clsgs_TeachingDateENEx
{
const strThisFuncName  = gs_TeachingDate_CopyToEx.name;
 const objgs_TeachingDateENT = new clsgs_TeachingDateENEx();
try
{
ObjectAssign(objgs_TeachingDateENT, objgs_TeachingDateENS);
 return objgs_TeachingDateENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objgs_TeachingDateENT;
}
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function gs_TeachingDate_FuncMapByFldName(strFldName: string, objgs_TeachingDateEx: clsgs_TeachingDateENEx)
{
const strThisFuncName = gs_TeachingDate_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsgs_TeachingDateEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsgs_TeachingDateENEx.con_EduClsName:
return gs_TeachingDate_FuncMapEduClsName(objgs_TeachingDateEx);
        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_TeachingDate_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_TeachingDateENEx.con_EduClsName:
return (a: clsgs_TeachingDateENEx, b: clsgs_TeachingDateENEx) => {
return a.eduClsName.localeCompare(b.eduClsName);
}
case clsgs_TeachingDateENEx.con_CourseId:
return (a: clsgs_TeachingDateENEx, b: clsgs_TeachingDateENEx) => {
    if (a.courseId === null && b.courseId === null) return 0;
if (a.courseId === null) return -1;
if (b.courseId === null) return 1;
return a.courseId.localeCompare(b.courseId);
}
        default:
return gs_TeachingDate_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsgs_TeachingDateENEx.con_EduClsName:
return (a: clsgs_TeachingDateENEx, b: clsgs_TeachingDateENEx) => {
return b.eduClsName.localeCompare(a.eduClsName);
}
case clsgs_TeachingDateENEx.con_CourseId:
return (a: clsgs_TeachingDateENEx, b: clsgs_TeachingDateENEx) => {
    if (a.courseId === null && b.courseId === null) return 0;
if (a.courseId === null) return 1;
if (b.courseId === null) return -1;
return b.courseId.localeCompare(a.courseId);
}
        default:
return gs_TeachingDate_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objgs_TeachingDateS:源对象
 **/
export  async function gs_TeachingDate_FuncMapEduClsName(objgs_TeachingDate:clsgs_TeachingDateENEx )
{
const strThisFuncName = gs_TeachingDate_FuncMapEduClsName.name;
try
{
if (IsNullOrEmpty(objgs_TeachingDate.eduClsName) == true){
 const vCurrEduClsSimIdCurrEduCls = objgs_TeachingDate.idCurrEduCls;
if (IsNullOrEmpty(objgs_TeachingDate.courseId) == true)
{
const strMsg = `函数映射[EduClsName]数据出错,courseId不能为空!(in ${ gs_TeachingDate_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const vCurrEduClsSimEduClsName = await vCurrEduCls_Sim_func(clsvCurrEduCls_SimEN.con_IdCurrEduCls, clsvCurrEduCls_SimEN.con_EduClsName, vCurrEduClsSimIdCurrEduCls , objgs_TeachingDate.courseId);
 objgs_TeachingDate.eduClsName = vCurrEduClsSimEduClsName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001433)函数映射表对象数据出错,{0}.(in {1}.{2})", e, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function gs_TeachingDate_Delgs_TeachingDatesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_TeachingDatesByCondAsync";
const strAction = "Delgs_TeachingDatesByCond";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objgs_TeachingDateEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_TeachingDate_AddNewRecordAsync(objgs_TeachingDateEN: clsgs_TeachingDateEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_TeachingDateEN);
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TeachingDateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function gs_TeachingDate_AddNewObjSave(objgs_TeachingDateEN: clsgs_TeachingDateEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
gs_TeachingDate_CheckPropertyNew(objgs_TeachingDateEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gs_TeachingDate_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await gs_TeachingDate_CheckUniCond4Add(objgs_TeachingDateEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await gs_TeachingDate_AddNewRecordAsync(objgs_TeachingDateEN);
if (returnBool == true)
{
gs_TeachingDate_ReFreshCache(objgs_TeachingDateEN.idCurrEduCls);
}
else
{
const strInfo = `添加[教学班日期范围(gs_TeachingDate)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objgs_TeachingDateEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ gs_TeachingDate_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function gs_TeachingDate_CheckUniCond4Add(objgs_TeachingDateEN: clsgs_TeachingDateEN): Promise<boolean>{
const strUniquenessCondition = gs_TeachingDate_GetUniCondStr(objgs_TeachingDateEN);
const bolIsExistCondition = await gs_TeachingDate_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export  async function gs_TeachingDate_CheckUniCond4Update(objgs_TeachingDateEN: clsgs_TeachingDateEN): Promise<boolean>{
const strUniquenessCondition = gs_TeachingDate_GetUniCondStr4Update(objgs_TeachingDateEN);
const bolIsExistCondition = await gs_TeachingDate_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function gs_TeachingDate_UpdateObjSave(objgs_TeachingDateEN: clsgs_TeachingDateEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objgs_TeachingDateEN.sfUpdFldSetStr = objgs_TeachingDateEN.updFldString;//设置哪些字段被修改(脏字段)
if (objgs_TeachingDateEN.mId == 0 || objgs_TeachingDateEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
gs_TeachingDate_CheckProperty4Update(objgs_TeachingDateEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gs_TeachingDate_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await gs_TeachingDate_CheckUniCond4Update(objgs_TeachingDateEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await gs_TeachingDate_UpdateRecordAsync(objgs_TeachingDateEN);
if (returnBool == true)
{
gs_TeachingDate_ReFreshCache(objgs_TeachingDateEN.idCurrEduCls);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ gs_TeachingDate_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objgs_TeachingDateEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_TeachingDate_AddNewRecordWithReturnKeyAsync(objgs_TeachingDateEN: clsgs_TeachingDateEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TeachingDateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objgs_TeachingDateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_TeachingDate_UpdateRecordAsync(objgs_TeachingDateEN: clsgs_TeachingDateEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_TeachingDateEN.sfUpdFldSetStr === undefined || objgs_TeachingDateEN.sfUpdFldSetStr === null || objgs_TeachingDateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_TeachingDateEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TeachingDateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objgs_TeachingDateEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_TeachingDate_EditRecordExAsync(objgs_TeachingDateEN: clsgs_TeachingDateEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objgs_TeachingDateEN.sfUpdFldSetStr === undefined || objgs_TeachingDateEN.sfUpdFldSetStr === null || objgs_TeachingDateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_TeachingDateEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TeachingDateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objgs_TeachingDateEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_TeachingDate_UpdateWithConditionAsync(objgs_TeachingDateEN: clsgs_TeachingDateEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_TeachingDateEN.sfUpdFldSetStr === undefined || objgs_TeachingDateEN.sfUpdFldSetStr === null || objgs_TeachingDateEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_TeachingDateEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);
objgs_TeachingDateEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_TeachingDateEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_IsExistRecordCache(objgs_TeachingDateCond: ConditionCollection,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
if (arrgs_TeachingDateObjLstCache == null) return false;
let arrgs_TeachingDateSel = arrgs_TeachingDateObjLstCache;
if (objgs_TeachingDateCond.GetConditions().length == 0) return arrgs_TeachingDateSel.length>0?true:false;
try {
for (const objCondition of objgs_TeachingDateCond.GetConditions()) {
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
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_TeachingDateSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objgs_TeachingDateCond), gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_IsExistCache(lngmId:number,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
if (arrgs_TeachingDateObjLstCache == null) return false;
try
{
const arrgs_TeachingDateSel = arrgs_TeachingDateObjLstCache.filter(x => x.mId == lngmId);
if (arrgs_TeachingDateSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngmId, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function gs_TeachingDate_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * @param objgs_TeachingDateCond:条件对象
 * @returns 对象列表记录数
*/
export  async function gs_TeachingDate_GetRecCountByCondCache(objgs_TeachingDateCond: ConditionCollection ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrgs_TeachingDateObjLstCache = await gs_TeachingDate_GetObjLstCache(strIdCurrEduCls);
if (arrgs_TeachingDateObjLstCache == null) return 0;
let arrgs_TeachingDateSel = arrgs_TeachingDateObjLstCache;
if (objgs_TeachingDateCond.GetConditions().length == 0) return arrgs_TeachingDateSel.length;
try {
for (const objCondition of objgs_TeachingDateCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_TeachingDateSel = arrgs_TeachingDateSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_TeachingDateSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objgs_TeachingDateCond), gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function gs_TeachingDate_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_TeachingDate_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strPrefix,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_TeachingDate_ConstructorName, strThisFuncName);
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function gs_TeachingDate_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export  function gs_TeachingDate_ReFreshCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsgs_TeachingDateWApi.clsgs_TeachingDateWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsgs_TeachingDateWApi.clsgs_TeachingDateWApi.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, strIdCurrEduCls);
switch (clsgs_TeachingDateEN.CacheModeId)
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
clsgs_TeachingDateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function gs_TeachingDate_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsgs_TeachingDateWApi.gs_TeachingDate_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsgs_TeachingDateWApi.gs_TeachingDate_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, strIdCurrEduCls);
switch (clsgs_TeachingDateEN.CacheModeId)
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
clsgs_TeachingDateEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function gs_TeachingDate_GetLastRefreshTime():string
{
if (clsgs_TeachingDateEN._RefreshTimeLst.length == 0) return "";
return clsgs_TeachingDateEN._RefreshTimeLst[clsgs_TeachingDateEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_TeachingDate_CheckPropertyNew(pobjgs_TeachingDateEN: clsgs_TeachingDateEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_TeachingDateEN.idCurrEduCls) == false && GetStrLen(pobjgs_TeachingDateEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.idCurrEduCls}(clsgs_TeachingDateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.startDate) == false && GetStrLen(pobjgs_TeachingDateEN.startDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[开始日期(startDate)]的长度不能超过20(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.startDate}(clsgs_TeachingDateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.endDate) == false && GetStrLen(pobjgs_TeachingDateEN.endDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[截止日期(endDate)]的长度不能超过20(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.endDate}(clsgs_TeachingDateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.updDate) == false && GetStrLen(pobjgs_TeachingDateEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.updDate}(clsgs_TeachingDateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.updUser) == false && GetStrLen(pobjgs_TeachingDateEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.updUser}(clsgs_TeachingDateBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.memo) == false && GetStrLen(pobjgs_TeachingDateEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.memo}(clsgs_TeachingDateBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjgs_TeachingDateEN.mId && undefined !== pobjgs_TeachingDateEN.mId && tzDataType.isNumber(pobjgs_TeachingDateEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjgs_TeachingDateEN.mId}], 非法,应该为数值型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.idCurrEduCls) == false && undefined !== pobjgs_TeachingDateEN.idCurrEduCls && tzDataType.isString(pobjgs_TeachingDateEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[${pobjgs_TeachingDateEN.idCurrEduCls}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.startDate) == false && undefined !== pobjgs_TeachingDateEN.startDate && tzDataType.isString(pobjgs_TeachingDateEN.startDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[开始日期(startDate)]的值:[${pobjgs_TeachingDateEN.startDate}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.endDate) == false && undefined !== pobjgs_TeachingDateEN.endDate && tzDataType.isString(pobjgs_TeachingDateEN.endDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[截止日期(endDate)]的值:[${pobjgs_TeachingDateEN.endDate}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.updDate) == false && undefined !== pobjgs_TeachingDateEN.updDate && tzDataType.isString(pobjgs_TeachingDateEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjgs_TeachingDateEN.updDate}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.updUser) == false && undefined !== pobjgs_TeachingDateEN.updUser && tzDataType.isString(pobjgs_TeachingDateEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjgs_TeachingDateEN.updUser}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.memo) == false && undefined !== pobjgs_TeachingDateEN.memo && tzDataType.isString(pobjgs_TeachingDateEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjgs_TeachingDateEN.memo}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_TeachingDate_CheckProperty4Update(pobjgs_TeachingDateEN: clsgs_TeachingDateEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_TeachingDateEN.idCurrEduCls) == false && GetStrLen(pobjgs_TeachingDateEN.idCurrEduCls) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.idCurrEduCls}(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.startDate) == false && GetStrLen(pobjgs_TeachingDateEN.startDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[开始日期(startDate)]的长度不能超过20(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.startDate}(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.endDate) == false && GetStrLen(pobjgs_TeachingDateEN.endDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[截止日期(endDate)]的长度不能超过20(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.endDate}(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.updDate) == false && GetStrLen(pobjgs_TeachingDateEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.updDate}(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.updUser) == false && GetStrLen(pobjgs_TeachingDateEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.updUser}(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.memo) == false && GetStrLen(pobjgs_TeachingDateEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 教学班日期范围(gs_TeachingDate))!值:${pobjgs_TeachingDateEN.memo}(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjgs_TeachingDateEN.mId && undefined !== pobjgs_TeachingDateEN.mId && tzDataType.isNumber(pobjgs_TeachingDateEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjgs_TeachingDateEN.mId}], 非法,应该为数值型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.idCurrEduCls) == false && undefined !== pobjgs_TeachingDateEN.idCurrEduCls && tzDataType.isString(pobjgs_TeachingDateEN.idCurrEduCls) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[${pobjgs_TeachingDateEN.idCurrEduCls}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.startDate) == false && undefined !== pobjgs_TeachingDateEN.startDate && tzDataType.isString(pobjgs_TeachingDateEN.startDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[开始日期(startDate)]的值:[${pobjgs_TeachingDateEN.startDate}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.endDate) == false && undefined !== pobjgs_TeachingDateEN.endDate && tzDataType.isString(pobjgs_TeachingDateEN.endDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[截止日期(endDate)]的值:[${pobjgs_TeachingDateEN.endDate}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.updDate) == false && undefined !== pobjgs_TeachingDateEN.updDate && tzDataType.isString(pobjgs_TeachingDateEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjgs_TeachingDateEN.updDate}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.updUser) == false && undefined !== pobjgs_TeachingDateEN.updUser && tzDataType.isString(pobjgs_TeachingDateEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjgs_TeachingDateEN.updUser}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_TeachingDateEN.memo) == false && undefined !== pobjgs_TeachingDateEN.memo && tzDataType.isString(pobjgs_TeachingDateEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjgs_TeachingDateEN.memo}], 非法,应该为字符型(In 教学班日期范围(gs_TeachingDate))!(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjgs_TeachingDateEN.mId 
 || pobjgs_TeachingDateEN.mId != null && pobjgs_TeachingDateEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 教学班日期范围)!(clsgs_TeachingDateBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_TeachingDate_GetJSONStrByObj (pobjgs_TeachingDateEN: clsgs_TeachingDateEN): string
{
pobjgs_TeachingDateEN.sfUpdFldSetStr = pobjgs_TeachingDateEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_TeachingDateEN);
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
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function gs_TeachingDate_GetObjLstByJSONStr (strJSON: string): Array<clsgs_TeachingDateEN>
{
let arrgs_TeachingDateObjLst = new Array<clsgs_TeachingDateEN>();
if (strJSON === "")
{
return arrgs_TeachingDateObjLst;
}
try
{
arrgs_TeachingDateObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_TeachingDateObjLst;
}
return arrgs_TeachingDateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_TeachingDateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_TeachingDate_GetObjLstByJSONObjLst (arrgs_TeachingDateObjLstS: Array<clsgs_TeachingDateEN>): Array<clsgs_TeachingDateEN>
{
const arrgs_TeachingDateObjLst = new Array<clsgs_TeachingDateEN>();
for (const objInFor of arrgs_TeachingDateObjLstS) {
const obj1 = gs_TeachingDate_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_TeachingDateObjLst.push(obj1);
}
return arrgs_TeachingDateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_TeachingDate_GetObjByJSONStr (strJSON: string): clsgs_TeachingDateEN
{
let pobjgs_TeachingDateEN = new clsgs_TeachingDateEN();
if (strJSON === "")
{
return pobjgs_TeachingDateEN;
}
try
{
pobjgs_TeachingDateEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_TeachingDateEN;
}
return pobjgs_TeachingDateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_TeachingDate_GetCombineCondition(objgs_TeachingDateCond: clsgs_TeachingDateEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_TeachingDateCond.dicFldComparisonOp, clsgs_TeachingDateEN.con_mId) == true)
{
const strComparisonOpmId:string = objgs_TeachingDateCond.dicFldComparisonOp[clsgs_TeachingDateEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_TeachingDateEN.con_mId, objgs_TeachingDateCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objgs_TeachingDateCond.dicFldComparisonOp, clsgs_TeachingDateEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objgs_TeachingDateCond.dicFldComparisonOp[clsgs_TeachingDateEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TeachingDateEN.con_IdCurrEduCls, objgs_TeachingDateCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objgs_TeachingDateCond.dicFldComparisonOp, clsgs_TeachingDateEN.con_StartDate) == true)
{
const strComparisonOpStartDate:string = objgs_TeachingDateCond.dicFldComparisonOp[clsgs_TeachingDateEN.con_StartDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TeachingDateEN.con_StartDate, objgs_TeachingDateCond.startDate, strComparisonOpStartDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_TeachingDateCond.dicFldComparisonOp, clsgs_TeachingDateEN.con_EndDate) == true)
{
const strComparisonOpEndDate:string = objgs_TeachingDateCond.dicFldComparisonOp[clsgs_TeachingDateEN.con_EndDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TeachingDateEN.con_EndDate, objgs_TeachingDateCond.endDate, strComparisonOpEndDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_TeachingDateCond.dicFldComparisonOp, clsgs_TeachingDateEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_TeachingDateCond.dicFldComparisonOp[clsgs_TeachingDateEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TeachingDateEN.con_UpdDate, objgs_TeachingDateCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_TeachingDateCond.dicFldComparisonOp, clsgs_TeachingDateEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_TeachingDateCond.dicFldComparisonOp[clsgs_TeachingDateEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TeachingDateEN.con_UpdUser, objgs_TeachingDateCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_TeachingDateCond.dicFldComparisonOp, clsgs_TeachingDateEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_TeachingDateCond.dicFldComparisonOp[clsgs_TeachingDateEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_TeachingDateEN.con_Memo, objgs_TeachingDateCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_TeachingDate(教学班日期范围),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_TeachingDate_GetUniCondStr(objgs_TeachingDateEN: clsgs_TeachingDateEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and mId = '{0}'", objgs_TeachingDateEN.mId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_TeachingDate(教学班日期范围),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_TeachingDate_GetUniCondStr4Update(objgs_TeachingDateEN: clsgs_TeachingDateEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objgs_TeachingDateEN.mId);
 strWhereCond +=  Format(" and mId = '{0}'", objgs_TeachingDateEN.mId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_TeachingDateENS:源对象
 * @param objgs_TeachingDateENT:目标对象
*/
export  function gs_TeachingDate_CopyObjTo(objgs_TeachingDateENS: clsgs_TeachingDateEN , objgs_TeachingDateENT: clsgs_TeachingDateEN ): void 
{
objgs_TeachingDateENT.mId = objgs_TeachingDateENS.mId; //mId
objgs_TeachingDateENT.idCurrEduCls = objgs_TeachingDateENS.idCurrEduCls; //教学班流水号
objgs_TeachingDateENT.startDate = objgs_TeachingDateENS.startDate; //开始日期
objgs_TeachingDateENT.endDate = objgs_TeachingDateENS.endDate; //截止日期
objgs_TeachingDateENT.updDate = objgs_TeachingDateENS.updDate; //修改日期
objgs_TeachingDateENT.updUser = objgs_TeachingDateENS.updUser; //修改人
objgs_TeachingDateENT.memo = objgs_TeachingDateENS.memo; //备注
objgs_TeachingDateENT.sfUpdFldSetStr = objgs_TeachingDateENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_TeachingDateENS:源对象
 * @param objgs_TeachingDateENT:目标对象
*/
export  function gs_TeachingDate_GetObjFromJsonObj(objgs_TeachingDateENS: clsgs_TeachingDateEN): clsgs_TeachingDateEN 
{
 const objgs_TeachingDateENT: clsgs_TeachingDateEN = new clsgs_TeachingDateEN();
ObjectAssign(objgs_TeachingDateENT, objgs_TeachingDateENS);
 return objgs_TeachingDateENT;
}
﻿
 /**
 * 类名:clsSchoolYearWApi
 * 表名:SchoolYear(01120134)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 20:02:59
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学年(SchoolYear)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月06日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSchoolYearEN } from "@/ts/L0Entity/SysPara/clsSchoolYearEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const schoolYear_Controller = "SchoolYearApi";
 export const schoolYear_ConstructorName = "schoolYear";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSchoolYear:关键字
 * @returns 对象
 **/
export  async function SchoolYear_GetObjBySchoolYearAsync(strSchoolYear: string): Promise<clsSchoolYearEN|null>  
{
const strThisFuncName = "GetObjBySchoolYearAsync";

if (IsNullOrEmpty(strSchoolYear) == true)
{
  const strMsg = Format("参数:[strSchoolYear]不能为空!(In clsSchoolYearWApi.GetObjBySchoolYearAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBySchoolYear";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSchoolYear,
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
const objSchoolYear = SchoolYear_GetObjFromJsonObj(returnObj);
return objSchoolYear;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param strSchoolYear:所给的关键字
 * @returns 对象
*/
export  async function SchoolYear_GetObjBySchoolYearlocalStorage(strSchoolYear: string) {
const strThisFuncName = "GetObjBySchoolYearlocalStorage";

if (IsNullOrEmpty(strSchoolYear) == true)
{
  const strMsg = Format("参数:[strSchoolYear]不能为空!(In clsSchoolYearWApi.GetObjBySchoolYearlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsSchoolYearEN._CurrTabName, strSchoolYear);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objSchoolYearCache: clsSchoolYearEN = JSON.parse(strTempObj);
return objSchoolYearCache;
}
try
{
const objSchoolYear = await SchoolYear_GetObjBySchoolYearAsync(strSchoolYear);
if (objSchoolYear != null)
{
localStorage.setItem(strKey, JSON.stringify(objSchoolYear));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objSchoolYear;
}
return objSchoolYear;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSchoolYear, schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strSchoolYear:所给的关键字
 * @returns 对象
*/
export  async function SchoolYear_GetObjBySchoolYearCache(strSchoolYear: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBySchoolYearCache";

if (IsNullOrEmpty(strSchoolYear) == true)
{
  const strMsg = Format("参数:[strSchoolYear]不能为空!(In clsSchoolYearWApi.GetObjBySchoolYearCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
try
{
const arrSchoolYearSel = arrSchoolYearObjLstCache.filter(x => 
 x.schoolYear == strSchoolYear );
let objSchoolYear: clsSchoolYearEN;
if (arrSchoolYearSel.length > 0)
{
objSchoolYear = arrSchoolYearSel[0];
return objSchoolYear;
}
else
{
if (bolTryAsyncOnce == true)
{
const objSchoolYearConst = await SchoolYear_GetObjBySchoolYearAsync(strSchoolYear);
if (objSchoolYearConst != null)
{
SchoolYear_ReFreshThisCache();
return objSchoolYearConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSchoolYear, schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objSchoolYear:所给的对象
 * @returns 对象
*/
export  async function SchoolYear_UpdateObjInLstCache(objSchoolYear: clsSchoolYearEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
const obj = arrSchoolYearObjLstCache.find(x => 
x.schoolYear == objSchoolYear.schoolYear);
if (obj != null)
{
objSchoolYear.schoolYear = obj.schoolYear;
ObjectAssign( obj, objSchoolYear);
}
else
{
arrSchoolYearObjLstCache.push(objSchoolYear);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
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
export  function SchoolYear_SortFunDefa(a:clsSchoolYearEN , b:clsSchoolYearEN): number 
{
return a.schoolYear.localeCompare(b.schoolYear);
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
export  function SchoolYear_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSchoolYearEN.con_SchoolYear:
return (a: clsSchoolYearEN, b: clsSchoolYearEN) => {
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsSchoolYearEN.con_SchoolYearName:
return (a: clsSchoolYearEN, b: clsSchoolYearEN) => {
if (a.schoolYearName == null) return -1;
if (b.schoolYearName == null) return 1;
return a.schoolYearName.localeCompare(b.schoolYearName);
}
case clsSchoolYearEN.con_IsCurrentSchoolYear:
return (a: clsSchoolYearEN) => {
if (a.isCurrentSchoolYear == true) return 1;
else return -1
}
case clsSchoolYearEN.con_IsVisible:
return (a: clsSchoolYearEN) => {
if (a.isVisible == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolYear]中不存在!(in ${ schoolYear_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSchoolYearEN.con_SchoolYear:
return (a: clsSchoolYearEN, b: clsSchoolYearEN) => {
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsSchoolYearEN.con_SchoolYearName:
return (a: clsSchoolYearEN, b: clsSchoolYearEN) => {
if (b.schoolYearName == null) return -1;
if (a.schoolYearName == null) return 1;
return b.schoolYearName.localeCompare(a.schoolYearName);
}
case clsSchoolYearEN.con_IsCurrentSchoolYear:
return (b: clsSchoolYearEN) => {
if (b.isCurrentSchoolYear == true) return 1;
else return -1
}
case clsSchoolYearEN.con_IsVisible:
return (b: clsSchoolYearEN) => {
if (b.isVisible == true) return 1;
else return -1
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolYear]中不存在!(in ${ schoolYear_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSchoolYear:所给的关键字
 * @returns 对象
*/
export  async function SchoolYear_GetNameBySchoolYearCache(strSchoolYear: string) {

if (IsNullOrEmpty(strSchoolYear) == true)
{
  const strMsg = Format("参数:[strSchoolYear]不能为空!(In clsSchoolYearWApi.GetNameBySchoolYearCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
if (arrSchoolYearObjLstCache == null) return "";
try
{
const arrSchoolYearSel = arrSchoolYearObjLstCache.filter(x => 
 x.schoolYear == strSchoolYear );
let objSchoolYear: clsSchoolYearEN;
if (arrSchoolYearSel.length > 0)
{
objSchoolYear = arrSchoolYearSel[0];
return objSchoolYear.schoolYearName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strSchoolYear);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function SchoolYear_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSchoolYearEN.con_SchoolYear:
return (obj: clsSchoolYearEN) => {
return obj.schoolYear === value;
}
case clsSchoolYearEN.con_SchoolYearName:
return (obj: clsSchoolYearEN) => {
return obj.schoolYearName === value;
}
case clsSchoolYearEN.con_IsCurrentSchoolYear:
return (obj: clsSchoolYearEN) => {
return obj.isCurrentSchoolYear === value;
}
case clsSchoolYearEN.con_IsVisible:
return (obj: clsSchoolYearEN) => {
return obj.isVisible === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolYear]中不存在!(in ${ schoolYear_ConstructorName}.${ strThisFuncName})`;
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
 * @returns 返回一个输出字段值
*/
export  async function SchoolYear_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsSchoolYearEN.con_SchoolYear)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsSchoolYearEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsSchoolYearEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strSchoolYear = strInValue;
if (IsNullOrEmpty(strSchoolYear) == true)
{
return "";
}
const objSchoolYear = await SchoolYear_GetObjBySchoolYearCache(strSchoolYear );
if (objSchoolYear == null) return "";
if (objSchoolYear.GetFldValue(strOutFldName) == null) return "";
return objSchoolYear.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function SchoolYear_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsSchoolYearEN.con_SchoolYear)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrSchoolYear = await SchoolYear_GetObjLstCache();
if (arrSchoolYear == null) return [];
let arrSchoolYearSel = arrSchoolYear;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrSchoolYearSel = arrSchoolYearSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrSchoolYearSel.length == 0) return [];
return arrSchoolYearSel.map(x=>x.schoolYear);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SchoolYear_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetFirstObjAsync(strWhereCond: string): Promise<clsSchoolYearEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const objSchoolYear = SchoolYear_GetObjFromJsonObj(returnObj);
return objSchoolYear;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSchoolYearEN._CurrTabName;
if (IsNullOrEmpty(clsSchoolYearEN.WhereFormat) == false)
{
strWhereCond = clsSchoolYearEN.WhereFormat;
}
if (IsNullOrEmpty(clsSchoolYearEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSchoolYearEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrSchoolYearExObjLstCache: Array<clsSchoolYearEN> = CacheHelper.Get(strKey);
const arrSchoolYearObjLstT = SchoolYear_GetObjLstByJSONObjLst(arrSchoolYearExObjLstCache);
return arrSchoolYearObjLstT;
}
try
{
const arrSchoolYearExObjLst = await SchoolYear_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrSchoolYearExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSchoolYearExObjLst.length);
console.log(strInfo);
return arrSchoolYearExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolYear_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSchoolYearEN._CurrTabName;
if (IsNullOrEmpty(clsSchoolYearEN.WhereFormat) == false)
{
strWhereCond = clsSchoolYearEN.WhereFormat;
}
if (IsNullOrEmpty(clsSchoolYearEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSchoolYearEN.CacheAddiCondition);
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
const arrSchoolYearExObjLstCache: Array<clsSchoolYearEN> = JSON.parse(strTempObjLst);
const arrSchoolYearObjLstT = SchoolYear_GetObjLstByJSONObjLst(arrSchoolYearExObjLstCache);
return arrSchoolYearObjLstT;
}
try
{
const arrSchoolYearExObjLst = await SchoolYear_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrSchoolYearExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSchoolYearExObjLst.length);
console.log(strInfo);
return arrSchoolYearExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolYear_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsSchoolYearEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrSchoolYearObjLstCache: Array<clsSchoolYearEN> = JSON.parse(strTempObjLst);
return arrSchoolYearObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function SchoolYear_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSchoolYearEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolYear_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolYear_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSchoolYearEN._CurrTabName;
if (IsNullOrEmpty(clsSchoolYearEN.WhereFormat) == false)
{
strWhereCond = clsSchoolYearEN.WhereFormat;
}
if (IsNullOrEmpty(clsSchoolYearEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSchoolYearEN.CacheAddiCondition);
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
const arrSchoolYearExObjLstCache: Array<clsSchoolYearEN> = JSON.parse(strTempObjLst);
const arrSchoolYearObjLstT = SchoolYear_GetObjLstByJSONObjLst(arrSchoolYearExObjLstCache);
return arrSchoolYearObjLstT;
}
try
{
const arrSchoolYearExObjLst = await SchoolYear_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrSchoolYearExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSchoolYearExObjLst.length);
console.log(strInfo);
return arrSchoolYearExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolYear_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsSchoolYearEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrSchoolYearObjLstCache: Array<clsSchoolYearEN> = JSON.parse(strTempObjLst);
return arrSchoolYearObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolYear_GetObjLstCache(): Promise<Array<clsSchoolYearEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrSchoolYearObjLstCache;
switch (clsSchoolYearEN.CacheModeId)
{
case "04"://sessionStorage
arrSchoolYearObjLstCache = await SchoolYear_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrSchoolYearObjLstCache = await SchoolYear_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrSchoolYearObjLstCache = await SchoolYear_GetObjLstClientCache();
break;
default:
arrSchoolYearObjLstCache = await SchoolYear_GetObjLstClientCache();
break;
}
return arrSchoolYearObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolYear_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrSchoolYearObjLstCache;
switch (clsSchoolYearEN.CacheModeId)
{
case "04"://sessionStorage
arrSchoolYearObjLstCache = await SchoolYear_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrSchoolYearObjLstCache = await SchoolYear_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrSchoolYearObjLstCache = null;
break;
default:
arrSchoolYearObjLstCache = null;
break;
}
return arrSchoolYearObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSchoolYearCond:条件对象
 * @returns 对象列表子集
*/
export  async function SchoolYear_GetSubObjLstCache(objSchoolYearCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
let arrSchoolYearSel = arrSchoolYearObjLstCache;
if (objSchoolYearCond.GetConditions().length == 0) return arrSchoolYearSel;
try {
//console.log(sstrKeys);
for (const objCondition of objSchoolYearCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrSchoolYearSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objSchoolYearCond), schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsSchoolYearEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSchoolYear:关键字列表
 * @returns 对象列表
 **/
export  async function SchoolYear_GetObjLstBySchoolYearLstAsync(arrSchoolYear: Array<string>): Promise<Array<clsSchoolYearEN>>  
{
const strThisFuncName = "GetObjLstBySchoolYearLstAsync";
const strAction = "GetObjLstBySchoolYearLst";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSchoolYear, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolYear_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolYear_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param arrstrSchoolYearLst:关键字列表
 * @returns 对象列表
*/
export  async function SchoolYear_GetObjLstBySchoolYearLstCache(arrSchoolYearLst: Array<string> ) {
const strThisFuncName = "GetObjLstBySchoolYearLstCache";
try
{
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
const arrSchoolYearSel = arrSchoolYearObjLstCache.filter(x => arrSchoolYearLst.indexOf(x.schoolYear)>-1);
return arrSchoolYearSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrSchoolYearLst.join(","), schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSchoolYearEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolYear_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolYear_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSchoolYearEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolYear_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolYear_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsSchoolYearEN>();
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
if (arrSchoolYearObjLstCache.length == 0) return arrSchoolYearObjLstCache;
let arrSchoolYearSel = arrSchoolYearObjLstCache;
const objSchoolYearCond = objPagerPara.conditionCollection;
if (objSchoolYearCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return;
}
//console.log("clsSchoolYearWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objSchoolYearCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrSchoolYearSel = arrSchoolYearSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrSchoolYearSel.length == 0) return arrSchoolYearSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrSchoolYearSel = arrSchoolYearSel.sort(SchoolYear_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrSchoolYearSel = arrSchoolYearSel.sort(objPagerPara.sortFun);
}
arrSchoolYearSel = arrSchoolYearSel.slice(intStart, intEnd);     
return arrSchoolYearSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsSchoolYearEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function SchoolYear_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsSchoolYearEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsSchoolYearEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolYear_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolYear_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param strSchoolYear:关键字
 * @returns 获取删除的结果
 **/
export  async function SchoolYear_DelRecordAsync(strSchoolYear: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(schoolYear_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strSchoolYear);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param arrSchoolYear:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SchoolYear_DelSchoolYearsAsync(arrSchoolYear: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSchoolYearsAsync";
const strAction = "DelSchoolYears";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSchoolYear, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function SchoolYear_DelSchoolYearsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSchoolYearsByCondAsync";
const strAction = "DelSchoolYearsByCond";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param objSchoolYearEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SchoolYear_AddNewRecordAsync(objSchoolYearEN: clsSchoolYearEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objSchoolYearEN.schoolYear === null || objSchoolYearEN.schoolYear === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objSchoolYearEN);
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolYearEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objSchoolYearEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SchoolYear_AddNewRecordWithMaxIdAsync(objSchoolYearEN: clsSchoolYearEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolYearEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}

 /** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export  async function SchoolYear_AddNewObjSave(objSchoolYearEN: clsSchoolYearEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
SchoolYear_CheckPropertyNew(objSchoolYearEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ schoolYear_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await SchoolYear_IsExistAsync(objSchoolYearEN.schoolYear);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objSchoolYearEN.schoolYear);
console.error(strMsg);
throw(strMsg);
}
returnBool = await SchoolYear_AddNewRecordAsync(objSchoolYearEN);
if (returnBool == true)
{
SchoolYear_ReFreshCache();
}
else
{
const strInfo = `添加[学年(SchoolYear)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objSchoolYearEN.schoolYear, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ schoolYear_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function SchoolYear_UpdateObjSave(objSchoolYearEN: clsSchoolYearEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objSchoolYearEN.sfUpdFldSetStr = objSchoolYearEN.updFldString;//设置哪些字段被修改(脏字段)
if (objSchoolYearEN.schoolYear == "" || objSchoolYearEN.schoolYear == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
SchoolYear_CheckProperty4Update(objSchoolYearEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ schoolYear_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await SchoolYear_UpdateRecordAsync(objSchoolYearEN);
if (returnBool == true)
{
SchoolYear_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ schoolYear_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSchoolYearEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SchoolYear_AddNewRecordWithReturnKeyAsync(objSchoolYearEN: clsSchoolYearEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolYearEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param objSchoolYearEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SchoolYear_UpdateRecordAsync(objSchoolYearEN: clsSchoolYearEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSchoolYearEN.sfUpdFldSetStr === undefined || objSchoolYearEN.sfUpdFldSetStr === null || objSchoolYearEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolYearEN.schoolYear);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolYearEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param objSchoolYearEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SchoolYear_EditRecordExAsync(objSchoolYearEN: clsSchoolYearEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objSchoolYearEN.sfUpdFldSetStr === undefined || objSchoolYearEN.sfUpdFldSetStr === null || objSchoolYearEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolYearEN.schoolYear);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolYearEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param objSchoolYearEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SchoolYear_UpdateWithConditionAsync(objSchoolYearEN: clsSchoolYearEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSchoolYearEN.sfUpdFldSetStr === undefined || objSchoolYearEN.sfUpdFldSetStr === null || objSchoolYearEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolYearEN.schoolYear);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);
objSchoolYearEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolYearEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param objstrSchoolYearCond:条件对象
 * @returns 对象列表子集
*/
export  async function SchoolYear_IsExistRecordCache(objSchoolYearCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
if (arrSchoolYearObjLstCache == null) return false;
let arrSchoolYearSel = arrSchoolYearObjLstCache;
if (objSchoolYearCond.GetConditions().length == 0) return arrSchoolYearSel.length>0?true:false;
try {
for (const objCondition of objSchoolYearCond.GetConditions()) {
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
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrSchoolYearSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objSchoolYearCond), schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param strSchoolYear:所给的关键字
 * @returns 对象
*/
export  async function SchoolYear_IsExistCache(strSchoolYear:string) {
const strThisFuncName = "IsExistCache";
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
if (arrSchoolYearObjLstCache == null) return false;
try
{
const arrSchoolYearSel = arrSchoolYearObjLstCache.filter(x => x.schoolYear == strSchoolYear);
if (arrSchoolYearSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strSchoolYear, schoolYear_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strSchoolYear:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SchoolYear_IsExistAsync(strSchoolYear: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSchoolYear
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
 * @param objSchoolYearCond:条件对象
 * @returns 对象列表记录数
*/
export  async function SchoolYear_GetRecCountByCondCache(objSchoolYearCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrSchoolYearObjLstCache = await SchoolYear_GetObjLstCache();
if (arrSchoolYearObjLstCache == null) return 0;
let arrSchoolYearSel = arrSchoolYearObjLstCache;
if (objSchoolYearCond.GetConditions().length == 0) return arrSchoolYearSel.length;
try {
for (const objCondition of objSchoolYearCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrSchoolYearSel = arrSchoolYearSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSchoolYearSel = arrSchoolYearSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrSchoolYearSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objSchoolYearCond), schoolYear_ConstructorName, strThisFuncName);
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
export  async function SchoolYear_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(schoolYear_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolYear_ConstructorName, strThisFuncName);
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
export  function SchoolYear_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SchoolYear_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsSchoolYearEN._CurrTabName;
switch (clsSchoolYearEN.CacheModeId)
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
clsSchoolYearEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function SchoolYear_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsSchoolYearEN._CurrTabName;
switch (clsSchoolYearEN.CacheModeId)
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
clsSchoolYearEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function SchoolYear_GetLastRefreshTime():string
{
if (clsSchoolYearEN._RefreshTimeLst.length == 0) return "";
return clsSchoolYearEN._RefreshTimeLst[clsSchoolYearEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function SchoolYear_BindDdl_SchoolYearInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_SchoolYearInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_SchoolYearInDivCache");
const arrObjLstSel = await SchoolYear_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsSchoolYearEN.con_SchoolYear, clsSchoolYearEN.con_SchoolYearName, "学年...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function SchoolYear_GetArrSchoolYear()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_SchoolYearInDivCache");
const arrSchoolYear = new Array<clsSchoolYearEN>();
const arrObjLstSel = await SchoolYear_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsSchoolYearEN();
obj0.schoolYear = '0';
obj0.schoolYearName = '选学年...';
arrSchoolYear.push(obj0);
arrObjLstSel.forEach(x => arrSchoolYear.push(x));
return arrSchoolYear;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SchoolYear_CheckPropertyNew(pobjSchoolYearEN: clsSchoolYearEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (null === pobjSchoolYearEN.isVisible 
 || pobjSchoolYearEN.isVisible != null && pobjSchoolYearEN.isVisible.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否显示]不能为空(In 学年)!(clsSchoolYearBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYear) == false && GetStrLen(pobjSchoolYearEN.schoolYear) > 10)
{
 throw new Error(`(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 学年(SchoolYear))!值:${pobjSchoolYearEN.schoolYear}(clsSchoolYearBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYearName) == false && GetStrLen(pobjSchoolYearEN.schoolYearName) > 10)
{
 throw new Error(`(errid:Watl000413)字段[学年名(schoolYearName)]的长度不能超过10(In 学年(SchoolYear))!值:${pobjSchoolYearEN.schoolYearName}(clsSchoolYearBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYear) == false && undefined !== pobjSchoolYearEN.schoolYear && tzDataType.isString(pobjSchoolYearEN.schoolYear) === false)
{
 throw new Error(`(errid:Watl000414)字段[学年(schoolYear)]的值:[${pobjSchoolYearEN.schoolYear}], 非法,应该为字符型(In 学年(SchoolYear))!(clsSchoolYearBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYearName) == false && undefined !== pobjSchoolYearEN.schoolYearName && tzDataType.isString(pobjSchoolYearEN.schoolYearName) === false)
{
 throw new Error(`(errid:Watl000414)字段[学年名(schoolYearName)]的值:[${pobjSchoolYearEN.schoolYearName}], 非法,应该为字符型(In 学年(SchoolYear))!(clsSchoolYearBL:CheckPropertyNew0)`);
}
if (null != pobjSchoolYearEN.isCurrentSchoolYear && undefined !== pobjSchoolYearEN.isCurrentSchoolYear && tzDataType.isBoolean(pobjSchoolYearEN.isCurrentSchoolYear) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否当前学年(isCurrentSchoolYear)]的值:[${pobjSchoolYearEN.isCurrentSchoolYear}], 非法,应该为布尔型(In 学年(SchoolYear))!(clsSchoolYearBL:CheckPropertyNew0)`);
}
if (null != pobjSchoolYearEN.isVisible && undefined !== pobjSchoolYearEN.isVisible && tzDataType.isBoolean(pobjSchoolYearEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjSchoolYearEN.isVisible}], 非法,应该为布尔型(In 学年(SchoolYear))!(clsSchoolYearBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SchoolYear_CheckProperty4Update(pobjSchoolYearEN: clsSchoolYearEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYear) == false && GetStrLen(pobjSchoolYearEN.schoolYear) > 10)
{
 throw new Error(`(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 学年(SchoolYear))!值:${pobjSchoolYearEN.schoolYear}(clsSchoolYearBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYearName) == false && GetStrLen(pobjSchoolYearEN.schoolYearName) > 10)
{
 throw new Error(`(errid:Watl000416)字段[学年名(schoolYearName)]的长度不能超过10(In 学年(SchoolYear))!值:${pobjSchoolYearEN.schoolYearName}(clsSchoolYearBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYear) == false && undefined !== pobjSchoolYearEN.schoolYear && tzDataType.isString(pobjSchoolYearEN.schoolYear) === false)
{
 throw new Error(`(errid:Watl000417)字段[学年(schoolYear)]的值:[${pobjSchoolYearEN.schoolYear}], 非法,应该为字符型(In 学年(SchoolYear))!(clsSchoolYearBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYearName) == false && undefined !== pobjSchoolYearEN.schoolYearName && tzDataType.isString(pobjSchoolYearEN.schoolYearName) === false)
{
 throw new Error(`(errid:Watl000417)字段[学年名(schoolYearName)]的值:[${pobjSchoolYearEN.schoolYearName}], 非法,应该为字符型(In 学年(SchoolYear))!(clsSchoolYearBL:CheckProperty4Update)`);
}
if (null != pobjSchoolYearEN.isCurrentSchoolYear && undefined !== pobjSchoolYearEN.isCurrentSchoolYear && tzDataType.isBoolean(pobjSchoolYearEN.isCurrentSchoolYear) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否当前学年(isCurrentSchoolYear)]的值:[${pobjSchoolYearEN.isCurrentSchoolYear}], 非法,应该为布尔型(In 学年(SchoolYear))!(clsSchoolYearBL:CheckProperty4Update)`);
}
if (null != pobjSchoolYearEN.isVisible && undefined !== pobjSchoolYearEN.isVisible && tzDataType.isBoolean(pobjSchoolYearEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjSchoolYearEN.isVisible}], 非法,应该为布尔型(In 学年(SchoolYear))!(clsSchoolYearBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjSchoolYearEN.schoolYear) === true 
 || pobjSchoolYearEN.schoolYear.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[学年]不能为空(In 学年)!(clsSchoolYearBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SchoolYear_GetJSONStrByObj (pobjSchoolYearEN: clsSchoolYearEN): string
{
pobjSchoolYearEN.sfUpdFldSetStr = pobjSchoolYearEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSchoolYearEN);
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
export  function SchoolYear_GetObjLstByJSONStr (strJSON: string): Array<clsSchoolYearEN>
{
let arrSchoolYearObjLst = new Array<clsSchoolYearEN>();
if (strJSON === "")
{
return arrSchoolYearObjLst;
}
try
{
arrSchoolYearObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSchoolYearObjLst;
}
return arrSchoolYearObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSchoolYearObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SchoolYear_GetObjLstByJSONObjLst (arrSchoolYearObjLstS: Array<clsSchoolYearEN>): Array<clsSchoolYearEN>
{
const arrSchoolYearObjLst = new Array<clsSchoolYearEN>();
for (const objInFor of arrSchoolYearObjLstS) {
const obj1 = SchoolYear_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSchoolYearObjLst.push(obj1);
}
return arrSchoolYearObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SchoolYear_GetObjByJSONStr (strJSON: string): clsSchoolYearEN
{
let pobjSchoolYearEN = new clsSchoolYearEN();
if (strJSON === "")
{
return pobjSchoolYearEN;
}
try
{
pobjSchoolYearEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSchoolYearEN;
}
return pobjSchoolYearEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SchoolYear_GetCombineCondition(objSchoolYearCond: clsSchoolYearEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSchoolYearCond.dicFldComparisonOp, clsSchoolYearEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objSchoolYearCond.dicFldComparisonOp[clsSchoolYearEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolYearEN.con_SchoolYear, objSchoolYearCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objSchoolYearCond.dicFldComparisonOp, clsSchoolYearEN.con_SchoolYearName) == true)
{
const strComparisonOpSchoolYearName:string = objSchoolYearCond.dicFldComparisonOp[clsSchoolYearEN.con_SchoolYearName];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolYearEN.con_SchoolYearName, objSchoolYearCond.schoolYearName, strComparisonOpSchoolYearName);
}
if (Object.prototype.hasOwnProperty.call(objSchoolYearCond.dicFldComparisonOp, clsSchoolYearEN.con_IsCurrentSchoolYear) == true)
{
if (objSchoolYearCond.isCurrentSchoolYear == true)
{
strWhereCond += Format(" And {0} = '1'", clsSchoolYearEN.con_IsCurrentSchoolYear);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsSchoolYearEN.con_IsCurrentSchoolYear);
}
}
if (Object.prototype.hasOwnProperty.call(objSchoolYearCond.dicFldComparisonOp, clsSchoolYearEN.con_IsVisible) == true)
{
if (objSchoolYearCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsSchoolYearEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsSchoolYearEN.con_IsVisible);
}
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSchoolYearENS:源对象
 * @param objSchoolYearENT:目标对象
*/
export  function SchoolYear_CopyObjTo(objSchoolYearENS: clsSchoolYearEN , objSchoolYearENT: clsSchoolYearEN ): void 
{
objSchoolYearENT.schoolYear = objSchoolYearENS.schoolYear; //学年
objSchoolYearENT.schoolYearName = objSchoolYearENS.schoolYearName; //学年名
objSchoolYearENT.isCurrentSchoolYear = objSchoolYearENS.isCurrentSchoolYear; //是否当前学年
objSchoolYearENT.isVisible = objSchoolYearENS.isVisible; //是否显示
objSchoolYearENT.sfUpdFldSetStr = objSchoolYearENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSchoolYearENS:源对象
 * @param objSchoolYearENT:目标对象
*/
export  function SchoolYear_GetObjFromJsonObj(objSchoolYearENS: clsSchoolYearEN): clsSchoolYearEN 
{
 const objSchoolYearENT: clsSchoolYearEN = new clsSchoolYearEN();
ObjectAssign(objSchoolYearENT, objSchoolYearENS);
 return objSchoolYearENT;
}
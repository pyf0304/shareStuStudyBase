﻿
 /**
 * 类名:clscc_ExcellentTypeWApi
 * 表名:cc_ExcellentType(01120062)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 22:04:54
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 精品课程类型(cc_ExcellentType)
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
import { clscc_ExcellentTypeEN } from "@/ts/L0Entity/CourseLearning/clscc_ExcellentTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const cc_ExcellentType_Controller = "cc_ExcellentTypeApi";
 export const cc_ExcellentType_ConstructorName = "cc_ExcellentType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strExcellentTypeId:关键字
 * @returns 对象
 **/
export  async function cc_ExcellentType_GetObjByExcellentTypeIdAsync(strExcellentTypeId: string): Promise<clscc_ExcellentTypeEN|null>  
{
const strThisFuncName = "GetObjByExcellentTypeIdAsync";

if (IsNullOrEmpty(strExcellentTypeId) == true)
{
  const strMsg = Format("参数:[strExcellentTypeId]不能为空!(In clscc_ExcellentTypeWApi.GetObjByExcellentTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strExcellentTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strExcellentTypeId]的长度:[{0}]不正确!(clscc_ExcellentTypeWApi.GetObjByExcellentTypeIdAsync)", strExcellentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByExcellentTypeId";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strExcellentTypeId,
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
const objcc_ExcellentType = cc_ExcellentType_GetObjFromJsonObj(returnObj);
return objcc_ExcellentType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param strExcellentTypeId:所给的关键字
 * @returns 对象
*/
export  async function cc_ExcellentType_GetObjByExcellentTypeIdlocalStorage(strExcellentTypeId: string) {
const strThisFuncName = "GetObjByExcellentTypeIdlocalStorage";

if (IsNullOrEmpty(strExcellentTypeId) == true)
{
  const strMsg = Format("参数:[strExcellentTypeId]不能为空!(In clscc_ExcellentTypeWApi.GetObjByExcellentTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strExcellentTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strExcellentTypeId]的长度:[{0}]不正确!(clscc_ExcellentTypeWApi.GetObjByExcellentTypeIdlocalStorage)", strExcellentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clscc_ExcellentTypeEN._CurrTabName, strExcellentTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objcc_ExcellentTypeCache: clscc_ExcellentTypeEN = JSON.parse(strTempObj);
return objcc_ExcellentTypeCache;
}
try
{
const objcc_ExcellentType = await cc_ExcellentType_GetObjByExcellentTypeIdAsync(strExcellentTypeId);
if (objcc_ExcellentType != null)
{
localStorage.setItem(strKey, JSON.stringify(objcc_ExcellentType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objcc_ExcellentType;
}
return objcc_ExcellentType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strExcellentTypeId, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strExcellentTypeId:所给的关键字
 * @returns 对象
*/
export  async function cc_ExcellentType_GetObjByExcellentTypeIdCache(strExcellentTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByExcellentTypeIdCache";

if (IsNullOrEmpty(strExcellentTypeId) == true)
{
  const strMsg = Format("参数:[strExcellentTypeId]不能为空!(In clscc_ExcellentTypeWApi.GetObjByExcellentTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strExcellentTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strExcellentTypeId]的长度:[{0}]不正确!(clscc_ExcellentTypeWApi.GetObjByExcellentTypeIdCache)", strExcellentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
try
{
const arrcc_ExcellentTypeSel = arrcc_ExcellentTypeObjLstCache.filter(x => 
 x.excellentTypeId == strExcellentTypeId );
let objcc_ExcellentType: clscc_ExcellentTypeEN;
if (arrcc_ExcellentTypeSel.length > 0)
{
objcc_ExcellentType = arrcc_ExcellentTypeSel[0];
return objcc_ExcellentType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objcc_ExcellentTypeConst = await cc_ExcellentType_GetObjByExcellentTypeIdAsync(strExcellentTypeId);
if (objcc_ExcellentTypeConst != null)
{
cc_ExcellentType_ReFreshThisCache();
return objcc_ExcellentTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strExcellentTypeId, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcc_ExcellentType:所给的对象
 * @returns 对象
*/
export  async function cc_ExcellentType_UpdateObjInLstCache(objcc_ExcellentType: clscc_ExcellentTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
const obj = arrcc_ExcellentTypeObjLstCache.find(x => 
x.excellentTypeId == objcc_ExcellentType.excellentTypeId);
if (obj != null)
{
objcc_ExcellentType.excellentTypeId = obj.excellentTypeId;
ObjectAssign( obj, objcc_ExcellentType);
}
else
{
arrcc_ExcellentTypeObjLstCache.push(objcc_ExcellentType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  function cc_ExcellentType_SortFunDefa(a:clscc_ExcellentTypeEN , b:clscc_ExcellentTypeEN): number 
{
return a.excellentTypeId.localeCompare(b.excellentTypeId);
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
export  function cc_ExcellentType_SortFunDefa2Fld(a:clscc_ExcellentTypeEN , b:clscc_ExcellentTypeEN): number 
{
if (a.excellentTypeName == b.excellentTypeName) return a.idSchool.localeCompare(b.idSchool);
else return a.excellentTypeName.localeCompare(b.excellentTypeName);
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
export  function cc_ExcellentType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_ExcellentTypeEN.con_ExcellentTypeId:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
return a.excellentTypeId.localeCompare(b.excellentTypeId);
}
case clscc_ExcellentTypeEN.con_ExcellentTypeName:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
return a.excellentTypeName.localeCompare(b.excellentTypeName);
}
case clscc_ExcellentTypeEN.con_IdSchool:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clscc_ExcellentTypeEN.con_IsUse:
return (a: clscc_ExcellentTypeEN) => {
if (a.isUse == true) return 1;
else return -1
}
case clscc_ExcellentTypeEN.con_UpdDate:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clscc_ExcellentTypeEN.con_UpdUserId:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clscc_ExcellentTypeEN.con_Memo:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExcellentType]中不存在!(in ${ cc_ExcellentType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_ExcellentTypeEN.con_ExcellentTypeId:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
return b.excellentTypeId.localeCompare(a.excellentTypeId);
}
case clscc_ExcellentTypeEN.con_ExcellentTypeName:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
return b.excellentTypeName.localeCompare(a.excellentTypeName);
}
case clscc_ExcellentTypeEN.con_IdSchool:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clscc_ExcellentTypeEN.con_IsUse:
return (b: clscc_ExcellentTypeEN) => {
if (b.isUse == true) return 1;
else return -1
}
case clscc_ExcellentTypeEN.con_UpdDate:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clscc_ExcellentTypeEN.con_UpdUserId:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clscc_ExcellentTypeEN.con_Memo:
return (a: clscc_ExcellentTypeEN, b: clscc_ExcellentTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExcellentType]中不存在!(in ${ cc_ExcellentType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strExcellentTypeId:所给的关键字
 * @returns 对象
*/
export  async function cc_ExcellentType_GetNameByExcellentTypeIdCache(strExcellentTypeId: string) {

if (IsNullOrEmpty(strExcellentTypeId) == true)
{
  const strMsg = Format("参数:[strExcellentTypeId]不能为空!(In clscc_ExcellentTypeWApi.GetNameByExcellentTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strExcellentTypeId.length != 4)
{
const strMsg = Format("缓存分类变量:[strExcellentTypeId]的长度:[{0}]不正确!(clscc_ExcellentTypeWApi.GetNameByExcellentTypeIdCache)", strExcellentTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
if (arrcc_ExcellentTypeObjLstCache == null) return "";
try
{
const arrcc_ExcellentTypeSel = arrcc_ExcellentTypeObjLstCache.filter(x => 
 x.excellentTypeId == strExcellentTypeId );
let objcc_ExcellentType: clscc_ExcellentTypeEN;
if (arrcc_ExcellentTypeSel.length > 0)
{
objcc_ExcellentType = arrcc_ExcellentTypeSel[0];
return objcc_ExcellentType.excellentTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strExcellentTypeId);
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
export  async function cc_ExcellentType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_ExcellentTypeEN.con_ExcellentTypeId:
return (obj: clscc_ExcellentTypeEN) => {
return obj.excellentTypeId === value;
}
case clscc_ExcellentTypeEN.con_ExcellentTypeName:
return (obj: clscc_ExcellentTypeEN) => {
return obj.excellentTypeName === value;
}
case clscc_ExcellentTypeEN.con_IdSchool:
return (obj: clscc_ExcellentTypeEN) => {
return obj.idSchool === value;
}
case clscc_ExcellentTypeEN.con_IsUse:
return (obj: clscc_ExcellentTypeEN) => {
return obj.isUse === value;
}
case clscc_ExcellentTypeEN.con_UpdDate:
return (obj: clscc_ExcellentTypeEN) => {
return obj.updDate === value;
}
case clscc_ExcellentTypeEN.con_UpdUserId:
return (obj: clscc_ExcellentTypeEN) => {
return obj.updUserId === value;
}
case clscc_ExcellentTypeEN.con_Memo:
return (obj: clscc_ExcellentTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_ExcellentType]中不存在!(in ${ cc_ExcellentType_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_ExcellentType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clscc_ExcellentTypeEN.con_ExcellentTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clscc_ExcellentTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clscc_ExcellentTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strExcellentTypeId = strInValue;
if (IsNullOrEmpty(strExcellentTypeId) == true)
{
return "";
}
const objcc_ExcellentType = await cc_ExcellentType_GetObjByExcellentTypeIdCache(strExcellentTypeId );
if (objcc_ExcellentType == null) return "";
if (objcc_ExcellentType.GetFldValue(strOutFldName) == null) return "";
return objcc_ExcellentType.GetFldValue(strOutFldName).toString();
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
export  async function cc_ExcellentType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clscc_ExcellentTypeEN.con_ExcellentTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrcc_ExcellentType = await cc_ExcellentType_GetObjLstCache();
if (arrcc_ExcellentType == null) return [];
let arrcc_ExcellentTypeSel = arrcc_ExcellentType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrcc_ExcellentTypeSel.length == 0) return [];
return arrcc_ExcellentTypeSel.map(x=>x.excellentTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_ExcellentType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetFirstObjAsync(strWhereCond: string): Promise<clscc_ExcellentTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const objcc_ExcellentType = cc_ExcellentType_GetObjFromJsonObj(returnObj);
return objcc_ExcellentType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_ExcellentTypeEN._CurrTabName;
if (IsNullOrEmpty(clscc_ExcellentTypeEN.WhereFormat) == false)
{
strWhereCond = clscc_ExcellentTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clscc_ExcellentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExcellentTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrcc_ExcellentTypeExObjLstCache: Array<clscc_ExcellentTypeEN> = CacheHelper.Get(strKey);
const arrcc_ExcellentTypeObjLstT = cc_ExcellentType_GetObjLstByJSONObjLst(arrcc_ExcellentTypeExObjLstCache);
return arrcc_ExcellentTypeObjLstT;
}
try
{
const arrcc_ExcellentTypeExObjLst = await cc_ExcellentType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrcc_ExcellentTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExcellentTypeExObjLst.length);
console.log(strInfo);
return arrcc_ExcellentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExcellentType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_ExcellentTypeEN._CurrTabName;
if (IsNullOrEmpty(clscc_ExcellentTypeEN.WhereFormat) == false)
{
strWhereCond = clscc_ExcellentTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clscc_ExcellentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExcellentTypeEN.CacheAddiCondition);
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
const arrcc_ExcellentTypeExObjLstCache: Array<clscc_ExcellentTypeEN> = JSON.parse(strTempObjLst);
const arrcc_ExcellentTypeObjLstT = cc_ExcellentType_GetObjLstByJSONObjLst(arrcc_ExcellentTypeExObjLstCache);
return arrcc_ExcellentTypeObjLstT;
}
try
{
const arrcc_ExcellentTypeExObjLst = await cc_ExcellentType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrcc_ExcellentTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExcellentTypeExObjLst.length);
console.log(strInfo);
return arrcc_ExcellentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExcellentType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clscc_ExcellentTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrcc_ExcellentTypeObjLstCache: Array<clscc_ExcellentTypeEN> = JSON.parse(strTempObjLst);
return arrcc_ExcellentTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_ExcellentType_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_ExcellentTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExcellentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clscc_ExcellentTypeEN._CurrTabName;
if (IsNullOrEmpty(clscc_ExcellentTypeEN.WhereFormat) == false)
{
strWhereCond = clscc_ExcellentTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clscc_ExcellentTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_ExcellentTypeEN.CacheAddiCondition);
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
const arrcc_ExcellentTypeExObjLstCache: Array<clscc_ExcellentTypeEN> = JSON.parse(strTempObjLst);
const arrcc_ExcellentTypeObjLstT = cc_ExcellentType_GetObjLstByJSONObjLst(arrcc_ExcellentTypeExObjLstCache);
return arrcc_ExcellentTypeObjLstT;
}
try
{
const arrcc_ExcellentTypeExObjLst = await cc_ExcellentType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrcc_ExcellentTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_ExcellentTypeExObjLst.length);
console.log(strInfo);
return arrcc_ExcellentTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExcellentType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clscc_ExcellentTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrcc_ExcellentTypeObjLstCache: Array<clscc_ExcellentTypeEN> = JSON.parse(strTempObjLst);
return arrcc_ExcellentTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExcellentType_GetObjLstCache(): Promise<Array<clscc_ExcellentTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrcc_ExcellentTypeObjLstCache;
switch (clscc_ExcellentTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstClientCache();
break;
default:
arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstClientCache();
break;
}
return arrcc_ExcellentTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_ExcellentType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrcc_ExcellentTypeObjLstCache;
switch (clscc_ExcellentTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrcc_ExcellentTypeObjLstCache = null;
break;
default:
arrcc_ExcellentTypeObjLstCache = null;
break;
}
return arrcc_ExcellentTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrExcellentTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_ExcellentType_GetSubObjLstCache(objcc_ExcellentTypeCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
let arrcc_ExcellentTypeSel = arrcc_ExcellentTypeObjLstCache;
if (objcc_ExcellentTypeCond.GetConditions().length == 0) return arrcc_ExcellentTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objcc_ExcellentTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_ExcellentTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objcc_ExcellentTypeCond), cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_ExcellentTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrExcellentTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function cc_ExcellentType_GetObjLstByExcellentTypeIdLstAsync(arrExcellentTypeId: Array<string>): Promise<Array<clscc_ExcellentTypeEN>>  
{
const strThisFuncName = "GetObjLstByExcellentTypeIdLstAsync";
const strAction = "GetObjLstByExcellentTypeIdLst";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrExcellentTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExcellentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param arrstrExcellentTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function cc_ExcellentType_GetObjLstByExcellentTypeIdLstCache(arrExcellentTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByExcellentTypeIdLstCache";
try
{
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
const arrcc_ExcellentTypeSel = arrcc_ExcellentTypeObjLstCache.filter(x => arrExcellentTypeIdLst.indexOf(x.excellentTypeId)>-1);
return arrcc_ExcellentTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrExcellentTypeIdLst.join(","), cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_ExcellentTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExcellentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_ExcellentTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExcellentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clscc_ExcellentTypeEN>();
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
if (arrcc_ExcellentTypeObjLstCache.length == 0) return arrcc_ExcellentTypeObjLstCache;
let arrcc_ExcellentTypeSel = arrcc_ExcellentTypeObjLstCache;
const objcc_ExcellentTypeCond = objPagerPara.conditionCollection;
if (objcc_ExcellentTypeCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clscc_ExcellentTypeEN>();
}
//console.log("clscc_ExcellentTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objcc_ExcellentTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_ExcellentTypeSel.length == 0) return arrcc_ExcellentTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.sort(cc_ExcellentType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.sort(objPagerPara.sortFun);
}
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.slice(intStart, intEnd);     
return arrcc_ExcellentTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_ExcellentTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_ExcellentType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_ExcellentTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_ExcellentTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_ExcellentType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param strExcellentTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_ExcellentType_DelRecordAsync(strExcellentTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strExcellentTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param arrExcellentTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_ExcellentType_Delcc_ExcellentTypesAsync(arrExcellentTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_ExcellentTypesAsync";
const strAction = "Delcc_ExcellentTypes";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrExcellentTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_Delcc_ExcellentTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_ExcellentTypesByCondAsync";
const strAction = "Delcc_ExcellentTypesByCond";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExcellentTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_ExcellentType_AddNewRecordAsync(objcc_ExcellentTypeEN: clscc_ExcellentTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objcc_ExcellentTypeEN.excellentTypeId === null || objcc_ExcellentTypeEN.excellentTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objcc_ExcellentTypeEN);
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExcellentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExcellentTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_ExcellentType_AddNewRecordWithMaxIdAsync(objcc_ExcellentTypeEN: clscc_ExcellentTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExcellentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_AddNewObjSave(objcc_ExcellentTypeEN: clscc_ExcellentTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_ExcellentType_CheckPropertyNew(objcc_ExcellentTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_ExcellentType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await cc_ExcellentType_IsExistAsync(objcc_ExcellentTypeEN.excellentTypeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objcc_ExcellentTypeEN.excellentTypeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await cc_ExcellentType_AddNewRecordAsync(objcc_ExcellentTypeEN);
if (returnBool == true)
{
cc_ExcellentType_ReFreshCache();
}
else
{
const strInfo = `添加[精品课程类型(cc_ExcellentType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objcc_ExcellentTypeEN.excellentTypeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_ExcellentType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function cc_ExcellentType_UpdateObjSave(objcc_ExcellentTypeEN: clscc_ExcellentTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_ExcellentTypeEN.sfUpdFldSetStr = objcc_ExcellentTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_ExcellentTypeEN.excellentTypeId == "" || objcc_ExcellentTypeEN.excellentTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_ExcellentType_CheckProperty4Update(objcc_ExcellentTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_ExcellentType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await cc_ExcellentType_UpdateRecordAsync(objcc_ExcellentTypeEN);
if (returnBool == true)
{
cc_ExcellentType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_ExcellentType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_ExcellentTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_ExcellentType_AddNewRecordWithReturnKeyAsync(objcc_ExcellentTypeEN: clscc_ExcellentTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExcellentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExcellentTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_ExcellentType_UpdateRecordAsync(objcc_ExcellentTypeEN: clscc_ExcellentTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_ExcellentTypeEN.sfUpdFldSetStr === undefined || objcc_ExcellentTypeEN.sfUpdFldSetStr === null || objcc_ExcellentTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExcellentTypeEN.excellentTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExcellentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExcellentTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_ExcellentType_EditRecordExAsync(objcc_ExcellentTypeEN: clscc_ExcellentTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_ExcellentTypeEN.sfUpdFldSetStr === undefined || objcc_ExcellentTypeEN.sfUpdFldSetStr === null || objcc_ExcellentTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExcellentTypeEN.excellentTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExcellentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExcellentTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_ExcellentType_UpdateWithConditionAsync(objcc_ExcellentTypeEN: clscc_ExcellentTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_ExcellentTypeEN.sfUpdFldSetStr === undefined || objcc_ExcellentTypeEN.sfUpdFldSetStr === null || objcc_ExcellentTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_ExcellentTypeEN.excellentTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);
objcc_ExcellentTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_ExcellentTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param objstrExcellentTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_ExcellentType_IsExistRecordCache(objcc_ExcellentTypeCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
if (arrcc_ExcellentTypeObjLstCache == null) return false;
let arrcc_ExcellentTypeSel = arrcc_ExcellentTypeObjLstCache;
if (objcc_ExcellentTypeCond.GetConditions().length == 0) return arrcc_ExcellentTypeSel.length>0?true:false;
try {
for (const objCondition of objcc_ExcellentTypeCond.GetConditions()) {
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
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_ExcellentTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objcc_ExcellentTypeCond), cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param strExcellentTypeId:所给的关键字
 * @returns 对象
*/
export  async function cc_ExcellentType_IsExistCache(strExcellentTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
if (arrcc_ExcellentTypeObjLstCache == null) return false;
try
{
const arrcc_ExcellentTypeSel = arrcc_ExcellentTypeObjLstCache.filter(x => x.excellentTypeId == strExcellentTypeId);
if (arrcc_ExcellentTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strExcellentTypeId, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strExcellentTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_ExcellentType_IsExistAsync(strExcellentTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strExcellentTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
 * @param objcc_ExcellentTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function cc_ExcellentType_GetRecCountByCondCache(objcc_ExcellentTypeCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrcc_ExcellentTypeObjLstCache = await cc_ExcellentType_GetObjLstCache();
if (arrcc_ExcellentTypeObjLstCache == null) return 0;
let arrcc_ExcellentTypeSel = arrcc_ExcellentTypeObjLstCache;
if (objcc_ExcellentTypeCond.GetConditions().length == 0) return arrcc_ExcellentTypeSel.length;
try {
for (const objCondition of objcc_ExcellentTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_ExcellentTypeSel = arrcc_ExcellentTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_ExcellentTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objcc_ExcellentTypeCond), cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  async function cc_ExcellentType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_ExcellentType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_ExcellentType_ConstructorName, strThisFuncName);
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
export  function cc_ExcellentType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_ExcellentType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clscc_ExcellentTypeEN._CurrTabName;
switch (clscc_ExcellentTypeEN.CacheModeId)
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
clscc_ExcellentTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function cc_ExcellentType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clscc_ExcellentTypeEN._CurrTabName;
switch (clscc_ExcellentTypeEN.CacheModeId)
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
clscc_ExcellentTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function cc_ExcellentType_GetLastRefreshTime():string
{
if (clscc_ExcellentTypeEN._RefreshTimeLst.length == 0) return "";
return clscc_ExcellentTypeEN._RefreshTimeLst[clscc_ExcellentTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function cc_ExcellentType_BindDdl_ExcellentTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_ExcellentTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ExcellentTypeIdInDivCache");
const arrObjLstSel = await cc_ExcellentType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clscc_ExcellentTypeEN.con_ExcellentTypeId, clscc_ExcellentTypeEN.con_ExcellentTypeName, "精品课程类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function cc_ExcellentType_GetArrcc_ExcellentType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_ExcellentTypeIdInDivCache");
const arrcc_ExcellentType = new Array<clscc_ExcellentTypeEN>();
const arrObjLstSel = await cc_ExcellentType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clscc_ExcellentTypeEN();
obj0.excellentTypeId = '0';
obj0.excellentTypeName = '选精品课程类型...';
arrcc_ExcellentType.push(obj0);
arrObjLstSel.forEach(x => arrcc_ExcellentType.push(x));
return arrcc_ExcellentType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_ExcellentType_CheckPropertyNew(pobjcc_ExcellentTypeEN: clscc_ExcellentTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[精品课程类型名称]不能为空(In 精品课程类型)!(clscc_ExcellentTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeId) == false && GetStrLen(pobjcc_ExcellentTypeEN.excellentTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[精品课程类型Id(excellentTypeId)]的长度不能超过4(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.excellentTypeId}(clscc_ExcellentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeName) == false && GetStrLen(pobjcc_ExcellentTypeEN.excellentTypeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[精品课程类型名称(excellentTypeName)]的长度不能超过30(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.excellentTypeName}(clscc_ExcellentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.idSchool) == false && GetStrLen(pobjcc_ExcellentTypeEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.idSchool}(clscc_ExcellentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.updDate) == false && GetStrLen(pobjcc_ExcellentTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.updDate}(clscc_ExcellentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.updUserId) == false && GetStrLen(pobjcc_ExcellentTypeEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.updUserId}(clscc_ExcellentTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.memo) == false && GetStrLen(pobjcc_ExcellentTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.memo}(clscc_ExcellentTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeId) == false && undefined !== pobjcc_ExcellentTypeEN.excellentTypeId && tzDataType.isString(pobjcc_ExcellentTypeEN.excellentTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[精品课程类型Id(excellentTypeId)]的值:[${pobjcc_ExcellentTypeEN.excellentTypeId}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeName) == false && undefined !== pobjcc_ExcellentTypeEN.excellentTypeName && tzDataType.isString(pobjcc_ExcellentTypeEN.excellentTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[精品课程类型名称(excellentTypeName)]的值:[${pobjcc_ExcellentTypeEN.excellentTypeName}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.idSchool) == false && undefined !== pobjcc_ExcellentTypeEN.idSchool && tzDataType.isString(pobjcc_ExcellentTypeEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjcc_ExcellentTypeEN.idSchool}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckPropertyNew0)`);
}
if (null != pobjcc_ExcellentTypeEN.isUse && undefined !== pobjcc_ExcellentTypeEN.isUse && tzDataType.isBoolean(pobjcc_ExcellentTypeEN.isUse) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否使用(isUse)]的值:[${pobjcc_ExcellentTypeEN.isUse}], 非法,应该为布尔型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.updDate) == false && undefined !== pobjcc_ExcellentTypeEN.updDate && tzDataType.isString(pobjcc_ExcellentTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_ExcellentTypeEN.updDate}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.updUserId) == false && undefined !== pobjcc_ExcellentTypeEN.updUserId && tzDataType.isString(pobjcc_ExcellentTypeEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjcc_ExcellentTypeEN.updUserId}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.memo) == false && undefined !== pobjcc_ExcellentTypeEN.memo && tzDataType.isString(pobjcc_ExcellentTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_ExcellentTypeEN.memo}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_ExcellentType_CheckProperty4Update(pobjcc_ExcellentTypeEN: clscc_ExcellentTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeId) == false && GetStrLen(pobjcc_ExcellentTypeEN.excellentTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[精品课程类型Id(excellentTypeId)]的长度不能超过4(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.excellentTypeId}(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeName) == false && GetStrLen(pobjcc_ExcellentTypeEN.excellentTypeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[精品课程类型名称(excellentTypeName)]的长度不能超过30(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.excellentTypeName}(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.idSchool) == false && GetStrLen(pobjcc_ExcellentTypeEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.idSchool}(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.updDate) == false && GetStrLen(pobjcc_ExcellentTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.updDate}(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.updUserId) == false && GetStrLen(pobjcc_ExcellentTypeEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.updUserId}(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.memo) == false && GetStrLen(pobjcc_ExcellentTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 精品课程类型(cc_ExcellentType))!值:${pobjcc_ExcellentTypeEN.memo}(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeId) == false && undefined !== pobjcc_ExcellentTypeEN.excellentTypeId && tzDataType.isString(pobjcc_ExcellentTypeEN.excellentTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[精品课程类型Id(excellentTypeId)]的值:[${pobjcc_ExcellentTypeEN.excellentTypeId}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeName) == false && undefined !== pobjcc_ExcellentTypeEN.excellentTypeName && tzDataType.isString(pobjcc_ExcellentTypeEN.excellentTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[精品课程类型名称(excellentTypeName)]的值:[${pobjcc_ExcellentTypeEN.excellentTypeName}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.idSchool) == false && undefined !== pobjcc_ExcellentTypeEN.idSchool && tzDataType.isString(pobjcc_ExcellentTypeEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjcc_ExcellentTypeEN.idSchool}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (null != pobjcc_ExcellentTypeEN.isUse && undefined !== pobjcc_ExcellentTypeEN.isUse && tzDataType.isBoolean(pobjcc_ExcellentTypeEN.isUse) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否使用(isUse)]的值:[${pobjcc_ExcellentTypeEN.isUse}], 非法,应该为布尔型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.updDate) == false && undefined !== pobjcc_ExcellentTypeEN.updDate && tzDataType.isString(pobjcc_ExcellentTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_ExcellentTypeEN.updDate}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.updUserId) == false && undefined !== pobjcc_ExcellentTypeEN.updUserId && tzDataType.isString(pobjcc_ExcellentTypeEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjcc_ExcellentTypeEN.updUserId}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.memo) == false && undefined !== pobjcc_ExcellentTypeEN.memo && tzDataType.isString(pobjcc_ExcellentTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_ExcellentTypeEN.memo}], 非法,应该为字符型(In 精品课程类型(cc_ExcellentType))!(clscc_ExcellentTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjcc_ExcellentTypeEN.excellentTypeId) === true 
 || pobjcc_ExcellentTypeEN.excellentTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[精品课程类型Id]不能为空(In 精品课程类型)!(clscc_ExcellentTypeBL:CheckProperty4Update)`);
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
export  function cc_ExcellentType_GetJSONStrByObj (pobjcc_ExcellentTypeEN: clscc_ExcellentTypeEN): string
{
pobjcc_ExcellentTypeEN.sfUpdFldSetStr = pobjcc_ExcellentTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_ExcellentTypeEN);
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
export  function cc_ExcellentType_GetObjLstByJSONStr (strJSON: string): Array<clscc_ExcellentTypeEN>
{
let arrcc_ExcellentTypeObjLst = new Array<clscc_ExcellentTypeEN>();
if (strJSON === "")
{
return arrcc_ExcellentTypeObjLst;
}
try
{
arrcc_ExcellentTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_ExcellentTypeObjLst;
}
return arrcc_ExcellentTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_ExcellentTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_ExcellentType_GetObjLstByJSONObjLst (arrcc_ExcellentTypeObjLstS: Array<clscc_ExcellentTypeEN>): Array<clscc_ExcellentTypeEN>
{
const arrcc_ExcellentTypeObjLst = new Array<clscc_ExcellentTypeEN>();
for (const objInFor of arrcc_ExcellentTypeObjLstS) {
const obj1 = cc_ExcellentType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_ExcellentTypeObjLst.push(obj1);
}
return arrcc_ExcellentTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_ExcellentType_GetObjByJSONStr (strJSON: string): clscc_ExcellentTypeEN
{
let pobjcc_ExcellentTypeEN = new clscc_ExcellentTypeEN();
if (strJSON === "")
{
return pobjcc_ExcellentTypeEN;
}
try
{
pobjcc_ExcellentTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_ExcellentTypeEN;
}
return pobjcc_ExcellentTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_ExcellentType_GetCombineCondition(objcc_ExcellentTypeCond: clscc_ExcellentTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_ExcellentTypeCond.dicFldComparisonOp, clscc_ExcellentTypeEN.con_ExcellentTypeId) == true)
{
const strComparisonOpExcellentTypeId:string = objcc_ExcellentTypeCond.dicFldComparisonOp[clscc_ExcellentTypeEN.con_ExcellentTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExcellentTypeEN.con_ExcellentTypeId, objcc_ExcellentTypeCond.excellentTypeId, strComparisonOpExcellentTypeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExcellentTypeCond.dicFldComparisonOp, clscc_ExcellentTypeEN.con_ExcellentTypeName) == true)
{
const strComparisonOpExcellentTypeName:string = objcc_ExcellentTypeCond.dicFldComparisonOp[clscc_ExcellentTypeEN.con_ExcellentTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExcellentTypeEN.con_ExcellentTypeName, objcc_ExcellentTypeCond.excellentTypeName, strComparisonOpExcellentTypeName);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExcellentTypeCond.dicFldComparisonOp, clscc_ExcellentTypeEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objcc_ExcellentTypeCond.dicFldComparisonOp[clscc_ExcellentTypeEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExcellentTypeEN.con_IdSchool, objcc_ExcellentTypeCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExcellentTypeCond.dicFldComparisonOp, clscc_ExcellentTypeEN.con_IsUse) == true)
{
if (objcc_ExcellentTypeCond.isUse == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_ExcellentTypeEN.con_IsUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_ExcellentTypeEN.con_IsUse);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_ExcellentTypeCond.dicFldComparisonOp, clscc_ExcellentTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_ExcellentTypeCond.dicFldComparisonOp[clscc_ExcellentTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExcellentTypeEN.con_UpdDate, objcc_ExcellentTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExcellentTypeCond.dicFldComparisonOp, clscc_ExcellentTypeEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objcc_ExcellentTypeCond.dicFldComparisonOp[clscc_ExcellentTypeEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExcellentTypeEN.con_UpdUserId, objcc_ExcellentTypeCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_ExcellentTypeCond.dicFldComparisonOp, clscc_ExcellentTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_ExcellentTypeCond.dicFldComparisonOp[clscc_ExcellentTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_ExcellentTypeEN.con_Memo, objcc_ExcellentTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_ExcellentTypeENS:源对象
 * @param objcc_ExcellentTypeENT:目标对象
*/
export  function cc_ExcellentType_CopyObjTo(objcc_ExcellentTypeENS: clscc_ExcellentTypeEN , objcc_ExcellentTypeENT: clscc_ExcellentTypeEN ): void 
{
objcc_ExcellentTypeENT.excellentTypeId = objcc_ExcellentTypeENS.excellentTypeId; //精品课程类型Id
objcc_ExcellentTypeENT.excellentTypeName = objcc_ExcellentTypeENS.excellentTypeName; //精品课程类型名称
objcc_ExcellentTypeENT.idSchool = objcc_ExcellentTypeENS.idSchool; //学校流水号
objcc_ExcellentTypeENT.isUse = objcc_ExcellentTypeENS.isUse; //是否使用
objcc_ExcellentTypeENT.updDate = objcc_ExcellentTypeENS.updDate; //修改日期
objcc_ExcellentTypeENT.updUserId = objcc_ExcellentTypeENS.updUserId; //修改用户Id
objcc_ExcellentTypeENT.memo = objcc_ExcellentTypeENS.memo; //备注
objcc_ExcellentTypeENT.sfUpdFldSetStr = objcc_ExcellentTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_ExcellentTypeENS:源对象
 * @param objcc_ExcellentTypeENT:目标对象
*/
export  function cc_ExcellentType_GetObjFromJsonObj(objcc_ExcellentTypeENS: clscc_ExcellentTypeEN): clscc_ExcellentTypeEN 
{
 const objcc_ExcellentTypeENT: clscc_ExcellentTypeEN = new clscc_ExcellentTypeEN();
ObjectAssign(objcc_ExcellentTypeENT, objcc_ExcellentTypeENS);
 return objcc_ExcellentTypeENT;
}
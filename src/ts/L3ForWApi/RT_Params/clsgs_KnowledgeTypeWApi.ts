﻿
 /**
 * 类名:clsgs_KnowledgeTypeWApi
 * 表名:gs_KnowledgeType(01120954)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:24:54
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培参数(RT_Params)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识类型(gs_KnowledgeType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { GetObjKeys,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsgs_KnowledgeTypeEN } from "@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const gs_KnowledgeType_Controller = "gs_KnowledgeTypeApi";
 export const gs_KnowledgeType_ConstructorName = "gs_KnowledgeType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strgsKnowledgeTypeId:关键字
 * @returns 对象
 **/
export  async function gs_KnowledgeType_GetObjBygsKnowledgeTypeIdAsync(strgsKnowledgeTypeId: string): Promise<clsgs_KnowledgeTypeEN|null>  
{
const strThisFuncName = "GetObjBygsKnowledgeTypeIdAsync";

if (IsNullOrEmpty(strgsKnowledgeTypeId) == true)
{
  const strMsg = Format("参数:[strgsKnowledgeTypeId]不能为空!(In clsgs_KnowledgeTypeWApi.GetObjBygsKnowledgeTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strgsKnowledgeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strgsKnowledgeTypeId]的长度:[{0}]不正确!(clsgs_KnowledgeTypeWApi.GetObjBygsKnowledgeTypeIdAsync)", strgsKnowledgeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjBygsKnowledgeTypeId";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strgsKnowledgeTypeId,
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
const objgs_KnowledgeType = gs_KnowledgeType_GetObjFromJsonObj(returnObj);
return objgs_KnowledgeType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param strgsKnowledgeTypeId:所给的关键字
 * @returns 对象
*/
export  async function gs_KnowledgeType_GetObjBygsKnowledgeTypeIdlocalStorage(strgsKnowledgeTypeId: string) {
const strThisFuncName = "GetObjBygsKnowledgeTypeIdlocalStorage";

if (IsNullOrEmpty(strgsKnowledgeTypeId) == true)
{
  const strMsg = Format("参数:[strgsKnowledgeTypeId]不能为空!(In clsgs_KnowledgeTypeWApi.GetObjBygsKnowledgeTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strgsKnowledgeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strgsKnowledgeTypeId]的长度:[{0}]不正确!(clsgs_KnowledgeTypeWApi.GetObjBygsKnowledgeTypeIdlocalStorage)", strgsKnowledgeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsgs_KnowledgeTypeEN._CurrTabName, strgsKnowledgeTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objgs_KnowledgeTypeCache: clsgs_KnowledgeTypeEN = JSON.parse(strTempObj);
return objgs_KnowledgeTypeCache;
}
try
{
const objgs_KnowledgeType = await gs_KnowledgeType_GetObjBygsKnowledgeTypeIdAsync(strgsKnowledgeTypeId);
if (objgs_KnowledgeType != null)
{
localStorage.setItem(strKey, JSON.stringify(objgs_KnowledgeType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objgs_KnowledgeType;
}
return objgs_KnowledgeType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strgsKnowledgeTypeId, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strgsKnowledgeTypeId:所给的关键字
 * @returns 对象
*/
export  async function gs_KnowledgeType_GetObjBygsKnowledgeTypeIdCache(strgsKnowledgeTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBygsKnowledgeTypeIdCache";

if (IsNullOrEmpty(strgsKnowledgeTypeId) == true)
{
  const strMsg = Format("参数:[strgsKnowledgeTypeId]不能为空!(In clsgs_KnowledgeTypeWApi.GetObjBygsKnowledgeTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strgsKnowledgeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strgsKnowledgeTypeId]的长度:[{0}]不正确!(clsgs_KnowledgeTypeWApi.GetObjBygsKnowledgeTypeIdCache)", strgsKnowledgeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
try
{
const arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeObjLstCache.filter(x => 
 x.gsKnowledgeTypeId == strgsKnowledgeTypeId );
let objgs_KnowledgeType: clsgs_KnowledgeTypeEN;
if (arrgs_KnowledgeTypeSel.length > 0)
{
objgs_KnowledgeType = arrgs_KnowledgeTypeSel[0];
return objgs_KnowledgeType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objgs_KnowledgeTypeConst = await gs_KnowledgeType_GetObjBygsKnowledgeTypeIdAsync(strgsKnowledgeTypeId);
if (objgs_KnowledgeTypeConst != null)
{
gs_KnowledgeType_ReFreshThisCache();
return objgs_KnowledgeTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strgsKnowledgeTypeId, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objgs_KnowledgeType:所给的对象
 * @returns 对象
*/
export  async function gs_KnowledgeType_UpdateObjInLstCache(objgs_KnowledgeType: clsgs_KnowledgeTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
const obj = arrgs_KnowledgeTypeObjLstCache.find(x => x.gsKnowledgeTypeName == objgs_KnowledgeType.gsKnowledgeTypeName);
if (obj != null)
{
objgs_KnowledgeType.gsKnowledgeTypeId = obj.gsKnowledgeTypeId;
ObjectAssign( obj, objgs_KnowledgeType);
}
else
{
arrgs_KnowledgeTypeObjLstCache.push(objgs_KnowledgeType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_KnowledgeType_SortFunDefa(a:clsgs_KnowledgeTypeEN , b:clsgs_KnowledgeTypeEN): number 
{
return a.gsKnowledgeTypeId.localeCompare(b.gsKnowledgeTypeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_KnowledgeType_SortFunDefa2Fld(a:clsgs_KnowledgeTypeEN , b:clsgs_KnowledgeTypeEN): number 
{
if (a.gsKnowledgeTypeName == b.gsKnowledgeTypeName) return a.knowledgeTypeENName.localeCompare(b.knowledgeTypeENName);
else return a.gsKnowledgeTypeName.localeCompare(b.gsKnowledgeTypeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_KnowledgeType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
return a.gsKnowledgeTypeId.localeCompare(b.gsKnowledgeTypeId);
}
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
return a.gsKnowledgeTypeName.localeCompare(b.gsKnowledgeTypeName);
}
case clsgs_KnowledgeTypeEN.con_KnowledgeTypeENName:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
return a.knowledgeTypeENName.localeCompare(b.knowledgeTypeENName);
}
case clsgs_KnowledgeTypeEN.con_OrderNum:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
return a.orderNum-b.orderNum;
}
case clsgs_KnowledgeTypeEN.con_UpdDate:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_KnowledgeTypeEN.con_UpdUser:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_KnowledgeTypeEN.con_Memo:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgeType]中不存在!(in ${ gs_KnowledgeType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
return b.gsKnowledgeTypeId.localeCompare(a.gsKnowledgeTypeId);
}
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
return b.gsKnowledgeTypeName.localeCompare(a.gsKnowledgeTypeName);
}
case clsgs_KnowledgeTypeEN.con_KnowledgeTypeENName:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
return b.knowledgeTypeENName.localeCompare(a.knowledgeTypeENName);
}
case clsgs_KnowledgeTypeEN.con_OrderNum:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
return b.orderNum-a.orderNum;
}
case clsgs_KnowledgeTypeEN.con_UpdDate:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_KnowledgeTypeEN.con_UpdUser:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_KnowledgeTypeEN.con_Memo:
return (a: clsgs_KnowledgeTypeEN, b: clsgs_KnowledgeTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgeType]中不存在!(in ${ gs_KnowledgeType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strgsKnowledgeTypeId:所给的关键字
 * @returns 对象
*/
export  async function gs_KnowledgeType_GetNameBygsKnowledgeTypeIdCache(strgsKnowledgeTypeId: string) {

if (IsNullOrEmpty(strgsKnowledgeTypeId) == true)
{
  const strMsg = Format("参数:[strgsKnowledgeTypeId]不能为空!(In clsgs_KnowledgeTypeWApi.GetNameBygsKnowledgeTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strgsKnowledgeTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strgsKnowledgeTypeId]的长度:[{0}]不正确!(clsgs_KnowledgeTypeWApi.GetNameBygsKnowledgeTypeIdCache)", strgsKnowledgeTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
if (arrgs_KnowledgeTypeObjLstCache == null) return "";
try
{
const arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeObjLstCache.filter(x => 
 x.gsKnowledgeTypeId == strgsKnowledgeTypeId );
let objgs_KnowledgeType: clsgs_KnowledgeTypeEN;
if (arrgs_KnowledgeTypeSel.length > 0)
{
objgs_KnowledgeType = arrgs_KnowledgeTypeSel[0];
return objgs_KnowledgeType.gsKnowledgeTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strgsKnowledgeTypeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function gs_KnowledgeType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId:
return (obj: clsgs_KnowledgeTypeEN) => {
return obj.gsKnowledgeTypeId === value;
}
case clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName:
return (obj: clsgs_KnowledgeTypeEN) => {
return obj.gsKnowledgeTypeName === value;
}
case clsgs_KnowledgeTypeEN.con_KnowledgeTypeENName:
return (obj: clsgs_KnowledgeTypeEN) => {
return obj.knowledgeTypeENName === value;
}
case clsgs_KnowledgeTypeEN.con_OrderNum:
return (obj: clsgs_KnowledgeTypeEN) => {
return obj.orderNum === value;
}
case clsgs_KnowledgeTypeEN.con_UpdDate:
return (obj: clsgs_KnowledgeTypeEN) => {
return obj.updDate === value;
}
case clsgs_KnowledgeTypeEN.con_UpdUser:
return (obj: clsgs_KnowledgeTypeEN) => {
return obj.updUser === value;
}
case clsgs_KnowledgeTypeEN.con_Memo:
return (obj: clsgs_KnowledgeTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgeType]中不存在!(in ${ gs_KnowledgeType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function gs_KnowledgeType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsgs_KnowledgeTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsgs_KnowledgeTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strgsKnowledgeTypeId = strInValue;
if (IsNullOrEmpty(strgsKnowledgeTypeId) == true)
{
return "";
}
const objgs_KnowledgeType = await gs_KnowledgeType_GetObjBygsKnowledgeTypeIdCache(strgsKnowledgeTypeId );
if (objgs_KnowledgeType == null) return "";
if (objgs_KnowledgeType.GetFldValue(strOutFldName) == null) return "";
return objgs_KnowledgeType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function gs_KnowledgeType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrgs_KnowledgeType = await gs_KnowledgeType_GetObjLstCache();
if (arrgs_KnowledgeType == null) return [];
let arrgs_KnowledgeTypeSel = arrgs_KnowledgeType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrgs_KnowledgeTypeSel.length == 0) return [];
return arrgs_KnowledgeTypeSel.map(x=>x.gsKnowledgeTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_KnowledgeType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_KnowledgeTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const objgs_KnowledgeType = gs_KnowledgeType_GetObjFromJsonObj(returnObj);
return objgs_KnowledgeType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_KnowledgeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsgs_KnowledgeTypeEN.WhereFormat) == false)
{
strWhereCond = clsgs_KnowledgeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsgs_KnowledgeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_KnowledgeTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrgs_KnowledgeTypeExObjLstCache: Array<clsgs_KnowledgeTypeEN> = CacheHelper.Get(strKey);
const arrgs_KnowledgeTypeObjLstT = gs_KnowledgeType_GetObjLstByJSONObjLst(arrgs_KnowledgeTypeExObjLstCache);
return arrgs_KnowledgeTypeObjLstT;
}
try
{
const arrgs_KnowledgeTypeExObjLst = await gs_KnowledgeType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrgs_KnowledgeTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_KnowledgeTypeExObjLst.length);
console.log(strInfo);
return arrgs_KnowledgeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_KnowledgeType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_KnowledgeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsgs_KnowledgeTypeEN.WhereFormat) == false)
{
strWhereCond = clsgs_KnowledgeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsgs_KnowledgeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_KnowledgeTypeEN.CacheAddiCondition);
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
const arrgs_KnowledgeTypeExObjLstCache: Array<clsgs_KnowledgeTypeEN> = JSON.parse(strTempObjLst);
const arrgs_KnowledgeTypeObjLstT = gs_KnowledgeType_GetObjLstByJSONObjLst(arrgs_KnowledgeTypeExObjLstCache);
return arrgs_KnowledgeTypeObjLstT;
}
try
{
const arrgs_KnowledgeTypeExObjLst = await gs_KnowledgeType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrgs_KnowledgeTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_KnowledgeTypeExObjLst.length);
console.log(strInfo);
return arrgs_KnowledgeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_KnowledgeType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsgs_KnowledgeTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrgs_KnowledgeTypeObjLstCache: Array<clsgs_KnowledgeTypeEN> = JSON.parse(strTempObjLst);
return arrgs_KnowledgeTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function gs_KnowledgeType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_KnowledgeTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsgs_KnowledgeTypeEN._CurrTabName;
if (IsNullOrEmpty(clsgs_KnowledgeTypeEN.WhereFormat) == false)
{
strWhereCond = clsgs_KnowledgeTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsgs_KnowledgeTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsgs_KnowledgeTypeEN.CacheAddiCondition);
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
const arrgs_KnowledgeTypeExObjLstCache: Array<clsgs_KnowledgeTypeEN> = JSON.parse(strTempObjLst);
const arrgs_KnowledgeTypeObjLstT = gs_KnowledgeType_GetObjLstByJSONObjLst(arrgs_KnowledgeTypeExObjLstCache);
return arrgs_KnowledgeTypeObjLstT;
}
try
{
const arrgs_KnowledgeTypeExObjLst = await gs_KnowledgeType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrgs_KnowledgeTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrgs_KnowledgeTypeExObjLst.length);
console.log(strInfo);
return arrgs_KnowledgeTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_KnowledgeType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsgs_KnowledgeTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrgs_KnowledgeTypeObjLstCache: Array<clsgs_KnowledgeTypeEN> = JSON.parse(strTempObjLst);
return arrgs_KnowledgeTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_KnowledgeType_GetObjLstCache(): Promise<Array<clsgs_KnowledgeTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrgs_KnowledgeTypeObjLstCache;
switch (clsgs_KnowledgeTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstClientCache();
break;
default:
arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstClientCache();
break;
}
return arrgs_KnowledgeTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function gs_KnowledgeType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrgs_KnowledgeTypeObjLstCache;
switch (clsgs_KnowledgeTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrgs_KnowledgeTypeObjLstCache = null;
break;
default:
arrgs_KnowledgeTypeObjLstCache = null;
break;
}
return arrgs_KnowledgeTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrgsKnowledgeTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function gs_KnowledgeType_GetSubObjLstCache(objgs_KnowledgeTypeCond: clsgs_KnowledgeTypeEN ) {
const strThisFuncName = "GetSubObjLstCache";
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
let arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeObjLstCache;
if (objgs_KnowledgeTypeCond.sfFldComparisonOp == null || objgs_KnowledgeTypeCond.sfFldComparisonOp == "") return arrgs_KnowledgeTypeSel;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_KnowledgeTypeCond.sfFldComparisonOp);
//console.log("clsgs_KnowledgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_KnowledgeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_KnowledgeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_KnowledgeTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objgs_KnowledgeTypeCond), gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_KnowledgeTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrgsKnowledgeTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function gs_KnowledgeType_GetObjLstBygsKnowledgeTypeIdLstAsync(arrgsKnowledgeTypeId: Array<string>): Promise<Array<clsgs_KnowledgeTypeEN>>  
{
const strThisFuncName = "GetObjLstBygsKnowledgeTypeIdLstAsync";
const strAction = "GetObjLstBygsKnowledgeTypeIdLst";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrgsKnowledgeTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param arrstrgsKnowledgeTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function gs_KnowledgeType_GetObjLstBygsKnowledgeTypeIdLstCache(arrgsKnowledgeTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstBygsKnowledgeTypeIdLstCache";
try
{
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
const arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeObjLstCache.filter(x => arrgsKnowledgeTypeIdLst.indexOf(x.gsKnowledgeTypeId)>-1);
return arrgs_KnowledgeTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrgsKnowledgeTypeIdLst.join(","), gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_KnowledgeTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_KnowledgeTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_KnowledgeTypeEN>();
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
if (arrgs_KnowledgeTypeObjLstCache.length == 0) return arrgs_KnowledgeTypeObjLstCache;
let arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeObjLstCache;
const objCond = JSON.parse(objPagerPara.whereCond);
const objgs_KnowledgeTypeCond = new clsgs_KnowledgeTypeEN();
ObjectAssign(objgs_KnowledgeTypeCond, objCond);
let dicFldComparisonOp: { [index: string]: string } = {};
if (objCond.sfFldComparisonOp != "")
{
dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
}
//console.log("clsgs_KnowledgeTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_KnowledgeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_KnowledgeTypeSel.length == 0) return arrgs_KnowledgeTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.sort(gs_KnowledgeType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.sort(objPagerPara.sortFun);
}
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.slice(intStart, intEnd);     
return arrgs_KnowledgeTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsgs_KnowledgeTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function gs_KnowledgeType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_KnowledgeTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_KnowledgeTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgeType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param strgsKnowledgeTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function gs_KnowledgeType_DelRecordAsync(strgsKnowledgeTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strgsKnowledgeTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param arrgsKnowledgeTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function gs_KnowledgeType_Delgs_KnowledgeTypesAsync(arrgsKnowledgeTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_KnowledgeTypesAsync";
const strAction = "Delgs_KnowledgeTypes";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrgsKnowledgeTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_Delgs_KnowledgeTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_KnowledgeTypesByCondAsync";
const strAction = "Delgs_KnowledgeTypesByCond";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_KnowledgeType_AddNewRecordAsync(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_KnowledgeTypeEN);
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgeTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_KnowledgeType_AddNewRecordWithMaxIdAsync(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_AddNewObjSave(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
gs_KnowledgeType_CheckPropertyNew(objgs_KnowledgeTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gs_KnowledgeType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await gs_KnowledgeType_CheckUniCond4Add(objgs_KnowledgeTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await gs_KnowledgeType_AddNewRecordWithMaxIdAsync(objgs_KnowledgeTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
gs_KnowledgeType_ReFreshCache();
}
else
{
const strInfo = `添加[知识类型(gs_KnowledgeType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ gs_KnowledgeType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function gs_KnowledgeType_CheckUniCond4Add(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<boolean>{
const strUniquenessCondition = gs_KnowledgeType_GetUniCondStr(objgs_KnowledgeTypeEN);
const bolIsExistCondition = await gs_KnowledgeType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function gs_KnowledgeType_CheckUniCond4Update(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<boolean>{
const strUniquenessCondition = gs_KnowledgeType_GetUniCondStr4Update(objgs_KnowledgeTypeEN);
const bolIsExistCondition = await gs_KnowledgeType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function gs_KnowledgeType_UpdateObjSave(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objgs_KnowledgeTypeEN.sfUpdFldSetStr = objgs_KnowledgeTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objgs_KnowledgeTypeEN.gsKnowledgeTypeId == "" || objgs_KnowledgeTypeEN.gsKnowledgeTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
gs_KnowledgeType_CheckProperty4Update(objgs_KnowledgeTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gs_KnowledgeType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await gs_KnowledgeType_CheckUniCond4Update(objgs_KnowledgeTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await gs_KnowledgeType_UpdateRecordAsync(objgs_KnowledgeTypeEN);
if (returnBool == true)
{
gs_KnowledgeType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ gs_KnowledgeType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objgs_KnowledgeTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_KnowledgeType_AddNewRecordWithReturnKeyAsync(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_KnowledgeType_UpdateRecordAsync(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_KnowledgeTypeEN.sfUpdFldSetStr === undefined || objgs_KnowledgeTypeEN.sfUpdFldSetStr === null || objgs_KnowledgeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_KnowledgeTypeEN.gsKnowledgeTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgeTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_KnowledgeType_EditRecordExAsync(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objgs_KnowledgeTypeEN.sfUpdFldSetStr === undefined || objgs_KnowledgeTypeEN.sfUpdFldSetStr === null || objgs_KnowledgeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_KnowledgeTypeEN.gsKnowledgeTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgeTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_KnowledgeType_UpdateWithConditionAsync(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_KnowledgeTypeEN.sfUpdFldSetStr === undefined || objgs_KnowledgeTypeEN.sfUpdFldSetStr === null || objgs_KnowledgeTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_KnowledgeTypeEN.gsKnowledgeTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);
objgs_KnowledgeTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgeTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param objstrgsKnowledgeTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function gs_KnowledgeType_IsExistRecordCache(objgs_KnowledgeTypeCond: clsgs_KnowledgeTypeEN) {
const strThisFuncName = "IsExistRecordCache";
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
if (arrgs_KnowledgeTypeObjLstCache == null) return false;
let arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeObjLstCache;
if (objgs_KnowledgeTypeCond.sfFldComparisonOp == null || objgs_KnowledgeTypeCond.sfFldComparisonOp == "") return arrgs_KnowledgeTypeSel.length>0?true:false;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_KnowledgeTypeCond.sfFldComparisonOp);
//console.log("clsgs_KnowledgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_KnowledgeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_KnowledgeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrgs_KnowledgeTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objgs_KnowledgeTypeCond), gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param strgsKnowledgeTypeId:所给的关键字
 * @returns 对象
*/
export  async function gs_KnowledgeType_IsExistCache(strgsKnowledgeTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
if (arrgs_KnowledgeTypeObjLstCache == null) return false;
try
{
const arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeObjLstCache.filter(x => x.gsKnowledgeTypeId == strgsKnowledgeTypeId);
if (arrgs_KnowledgeTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strgsKnowledgeTypeId, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strgsKnowledgeTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function gs_KnowledgeType_IsExistAsync(strgsKnowledgeTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strgsKnowledgeTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgeType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgeTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function gs_KnowledgeType_GetRecCountByCondCache(objgs_KnowledgeTypeCond: clsgs_KnowledgeTypeEN ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrgs_KnowledgeTypeObjLstCache = await gs_KnowledgeType_GetObjLstCache();
if (arrgs_KnowledgeTypeObjLstCache == null) return 0;
let arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeObjLstCache;
if (objgs_KnowledgeTypeCond.sfFldComparisonOp == null || objgs_KnowledgeTypeCond.sfFldComparisonOp == "") return arrgs_KnowledgeTypeSel.length;
const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objgs_KnowledgeTypeCond.sfFldComparisonOp);
//console.log("clsgs_KnowledgeTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
const sstrKeys = GetObjKeys(objgs_KnowledgeTypeCond);
//console.log(sstrKeys);
for (const strKey of sstrKeys) {
if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strComparisonOp = dicFldComparisonOp[strKey];
const strValue = objgs_KnowledgeTypeCond.GetFldValue(strKey);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrgs_KnowledgeTypeSel = arrgs_KnowledgeTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrgs_KnowledgeTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objgs_KnowledgeTypeCond), gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function gs_KnowledgeType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function gs_KnowledgeType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_KnowledgeType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgeType_ConstructorName, strThisFuncName);
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
export  function gs_KnowledgeType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_KnowledgeType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsgs_KnowledgeTypeEN._CurrTabName;
switch (clsgs_KnowledgeTypeEN.CacheModeId)
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
clsgs_KnowledgeTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function gs_KnowledgeType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsgs_KnowledgeTypeEN._CurrTabName;
switch (clsgs_KnowledgeTypeEN.CacheModeId)
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
clsgs_KnowledgeTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function gs_KnowledgeType_GetLastRefreshTime():string
{
if (clsgs_KnowledgeTypeEN._RefreshTimeLst.length == 0) return "";
return clsgs_KnowledgeTypeEN._RefreshTimeLst[clsgs_KnowledgeTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function gs_KnowledgeType_BindDdl_gsKnowledgeTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_gsKnowledgeTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_gsKnowledgeTypeIdInDivCache");
const arrObjLstSel = await gs_KnowledgeType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId, clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName, "知识类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function gs_KnowledgeType_GetArrgs_KnowledgeType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_gsKnowledgeTypeIdInDivCache");
const arrgs_KnowledgeType = new Array<clsgs_KnowledgeTypeEN>();
const arrObjLstSel = await gs_KnowledgeType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsgs_KnowledgeTypeEN();
obj0.gsKnowledgeTypeId = '0';
obj0.gsKnowledgeTypeName = '选知识类型...';
arrgs_KnowledgeType.push(obj0);
arrObjLstSel.forEach(x => arrgs_KnowledgeType.push(x));
return arrgs_KnowledgeType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_KnowledgeType_CheckPropertyNew(pobjgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[知识类型名]不能为空(In 知识类型)!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) === true )
{
 throw new Error(`(errid:Watl000411)字段[知识类型英文名]不能为空(In 知识类型)!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId) == false && GetStrLen(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[知识类型Id(gsKnowledgeTypeId)]的长度不能超过2(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId}(clsgs_KnowledgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) == false && GetStrLen(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[知识类型名(gsKnowledgeTypeName)]的长度不能超过50(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName}(clsgs_KnowledgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) == false && GetStrLen(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[知识类型英文名(knowledgeTypeENName)]的长度不能超过50(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.knowledgeTypeENName}(clsgs_KnowledgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.updDate) == false && GetStrLen(pobjgs_KnowledgeTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.updDate}(clsgs_KnowledgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.updUser) == false && GetStrLen(pobjgs_KnowledgeTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.updUser}(clsgs_KnowledgeTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.memo) == false && GetStrLen(pobjgs_KnowledgeTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.memo}(clsgs_KnowledgeTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId) == false && undefined !== pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId && tzDataType.isString(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识类型Id(gsKnowledgeTypeId)]的值:[${pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) == false && undefined !== pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName && tzDataType.isString(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识类型名(gsKnowledgeTypeName)]的值:[${pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) == false && undefined !== pobjgs_KnowledgeTypeEN.knowledgeTypeENName && tzDataType.isString(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识类型英文名(knowledgeTypeENName)]的值:[${pobjgs_KnowledgeTypeEN.knowledgeTypeENName}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
if (null != pobjgs_KnowledgeTypeEN.orderNum && undefined !== pobjgs_KnowledgeTypeEN.orderNum && tzDataType.isNumber(pobjgs_KnowledgeTypeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjgs_KnowledgeTypeEN.orderNum}], 非法,应该为数值型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.updDate) == false && undefined !== pobjgs_KnowledgeTypeEN.updDate && tzDataType.isString(pobjgs_KnowledgeTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjgs_KnowledgeTypeEN.updDate}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.updUser) == false && undefined !== pobjgs_KnowledgeTypeEN.updUser && tzDataType.isString(pobjgs_KnowledgeTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjgs_KnowledgeTypeEN.updUser}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.memo) == false && undefined !== pobjgs_KnowledgeTypeEN.memo && tzDataType.isString(pobjgs_KnowledgeTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjgs_KnowledgeTypeEN.memo}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_KnowledgeType_CheckProperty4Update(pobjgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId) == false && GetStrLen(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[知识类型Id(gsKnowledgeTypeId)]的长度不能超过2(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId}(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) == false && GetStrLen(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[知识类型名(gsKnowledgeTypeName)]的长度不能超过50(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName}(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) == false && GetStrLen(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[知识类型英文名(knowledgeTypeENName)]的长度不能超过50(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.knowledgeTypeENName}(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.updDate) == false && GetStrLen(pobjgs_KnowledgeTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.updDate}(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.updUser) == false && GetStrLen(pobjgs_KnowledgeTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.updUser}(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.memo) == false && GetStrLen(pobjgs_KnowledgeTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识类型(gs_KnowledgeType))!值:${pobjgs_KnowledgeTypeEN.memo}(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId) == false && undefined !== pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId && tzDataType.isString(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识类型Id(gsKnowledgeTypeId)]的值:[${pobjgs_KnowledgeTypeEN.gsKnowledgeTypeId}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) == false && undefined !== pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName && tzDataType.isString(pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识类型名(gsKnowledgeTypeName)]的值:[${pobjgs_KnowledgeTypeEN.gsKnowledgeTypeName}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) == false && undefined !== pobjgs_KnowledgeTypeEN.knowledgeTypeENName && tzDataType.isString(pobjgs_KnowledgeTypeEN.knowledgeTypeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识类型英文名(knowledgeTypeENName)]的值:[${pobjgs_KnowledgeTypeEN.knowledgeTypeENName}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (null != pobjgs_KnowledgeTypeEN.orderNum && undefined !== pobjgs_KnowledgeTypeEN.orderNum && tzDataType.isNumber(pobjgs_KnowledgeTypeEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjgs_KnowledgeTypeEN.orderNum}], 非法,应该为数值型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.updDate) == false && undefined !== pobjgs_KnowledgeTypeEN.updDate && tzDataType.isString(pobjgs_KnowledgeTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjgs_KnowledgeTypeEN.updDate}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.updUser) == false && undefined !== pobjgs_KnowledgeTypeEN.updUser && tzDataType.isString(pobjgs_KnowledgeTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjgs_KnowledgeTypeEN.updUser}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgeTypeEN.memo) == false && undefined !== pobjgs_KnowledgeTypeEN.memo && tzDataType.isString(pobjgs_KnowledgeTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjgs_KnowledgeTypeEN.memo}], 非法,应该为字符型(In 知识类型(gs_KnowledgeType))!(clsgs_KnowledgeTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_KnowledgeType_GetJSONStrByObj (pobjgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN): string
{
pobjgs_KnowledgeTypeEN.sfUpdFldSetStr = pobjgs_KnowledgeTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_KnowledgeTypeEN);
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
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function gs_KnowledgeType_GetObjLstByJSONStr (strJSON: string): Array<clsgs_KnowledgeTypeEN>
{
let arrgs_KnowledgeTypeObjLst = new Array<clsgs_KnowledgeTypeEN>();
if (strJSON === "")
{
return arrgs_KnowledgeTypeObjLst;
}
try
{
arrgs_KnowledgeTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_KnowledgeTypeObjLst;
}
return arrgs_KnowledgeTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_KnowledgeTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_KnowledgeType_GetObjLstByJSONObjLst (arrgs_KnowledgeTypeObjLstS: Array<clsgs_KnowledgeTypeEN>): Array<clsgs_KnowledgeTypeEN>
{
const arrgs_KnowledgeTypeObjLst = new Array<clsgs_KnowledgeTypeEN>();
for (const objInFor of arrgs_KnowledgeTypeObjLstS) {
const obj1 = gs_KnowledgeType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_KnowledgeTypeObjLst.push(obj1);
}
return arrgs_KnowledgeTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_KnowledgeType_GetObjByJSONStr (strJSON: string): clsgs_KnowledgeTypeEN
{
let pobjgs_KnowledgeTypeEN = new clsgs_KnowledgeTypeEN();
if (strJSON === "")
{
return pobjgs_KnowledgeTypeEN;
}
try
{
pobjgs_KnowledgeTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_KnowledgeTypeEN;
}
return pobjgs_KnowledgeTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_KnowledgeType_GetCombineCondition(objgs_KnowledgeTypeCond: clsgs_KnowledgeTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgeTypeCond.dicFldComparisonOp, clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId) == true)
{
const strComparisonOpgsKnowledgeTypeId:string = objgs_KnowledgeTypeCond.dicFldComparisonOp[clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeId, objgs_KnowledgeTypeCond.gsKnowledgeTypeId, strComparisonOpgsKnowledgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgeTypeCond.dicFldComparisonOp, clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName) == true)
{
const strComparisonOpgsKnowledgeTypeName:string = objgs_KnowledgeTypeCond.dicFldComparisonOp[clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgeTypeEN.con_gsKnowledgeTypeName, objgs_KnowledgeTypeCond.gsKnowledgeTypeName, strComparisonOpgsKnowledgeTypeName);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgeTypeCond.dicFldComparisonOp, clsgs_KnowledgeTypeEN.con_KnowledgeTypeENName) == true)
{
const strComparisonOpKnowledgeTypeENName:string = objgs_KnowledgeTypeCond.dicFldComparisonOp[clsgs_KnowledgeTypeEN.con_KnowledgeTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgeTypeEN.con_KnowledgeTypeENName, objgs_KnowledgeTypeCond.knowledgeTypeENName, strComparisonOpKnowledgeTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgeTypeCond.dicFldComparisonOp, clsgs_KnowledgeTypeEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objgs_KnowledgeTypeCond.dicFldComparisonOp[clsgs_KnowledgeTypeEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsgs_KnowledgeTypeEN.con_OrderNum, objgs_KnowledgeTypeCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgeTypeCond.dicFldComparisonOp, clsgs_KnowledgeTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_KnowledgeTypeCond.dicFldComparisonOp[clsgs_KnowledgeTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgeTypeEN.con_UpdDate, objgs_KnowledgeTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgeTypeCond.dicFldComparisonOp, clsgs_KnowledgeTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_KnowledgeTypeCond.dicFldComparisonOp[clsgs_KnowledgeTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgeTypeEN.con_UpdUser, objgs_KnowledgeTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgeTypeCond.dicFldComparisonOp, clsgs_KnowledgeTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_KnowledgeTypeCond.dicFldComparisonOp[clsgs_KnowledgeTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgeTypeEN.con_Memo, objgs_KnowledgeTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_KnowledgeType(知识类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strgsKnowledgeTypeName: 知识类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_KnowledgeType_GetUniCondStr(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and gsKnowledgeTypeName = '{0}'", objgs_KnowledgeTypeEN.gsKnowledgeTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_KnowledgeType(知识类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strgsKnowledgeTypeName: 知识类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_KnowledgeType_GetUniCondStr4Update(objgs_KnowledgeTypeEN: clsgs_KnowledgeTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and gsKnowledgeTypeId <> '{0}'", objgs_KnowledgeTypeEN.gsKnowledgeTypeId);
 strWhereCond +=  Format(" and gsKnowledgeTypeName = '{0}'", objgs_KnowledgeTypeEN.gsKnowledgeTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_KnowledgeTypeENS:源对象
 * @param objgs_KnowledgeTypeENT:目标对象
*/
export  function gs_KnowledgeType_CopyObjTo(objgs_KnowledgeTypeENS: clsgs_KnowledgeTypeEN , objgs_KnowledgeTypeENT: clsgs_KnowledgeTypeEN ): void 
{
objgs_KnowledgeTypeENT.gsKnowledgeTypeId = objgs_KnowledgeTypeENS.gsKnowledgeTypeId; //知识类型Id
objgs_KnowledgeTypeENT.gsKnowledgeTypeName = objgs_KnowledgeTypeENS.gsKnowledgeTypeName; //知识类型名
objgs_KnowledgeTypeENT.knowledgeTypeENName = objgs_KnowledgeTypeENS.knowledgeTypeENName; //知识类型英文名
objgs_KnowledgeTypeENT.orderNum = objgs_KnowledgeTypeENS.orderNum; //序号
objgs_KnowledgeTypeENT.updDate = objgs_KnowledgeTypeENS.updDate; //修改日期
objgs_KnowledgeTypeENT.updUser = objgs_KnowledgeTypeENS.updUser; //修改人
objgs_KnowledgeTypeENT.memo = objgs_KnowledgeTypeENS.memo; //备注
objgs_KnowledgeTypeENT.sfUpdFldSetStr = objgs_KnowledgeTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_KnowledgeTypeENS:源对象
 * @param objgs_KnowledgeTypeENT:目标对象
*/
export  function gs_KnowledgeType_GetObjFromJsonObj(objgs_KnowledgeTypeENS: clsgs_KnowledgeTypeEN): clsgs_KnowledgeTypeEN 
{
 const objgs_KnowledgeTypeENT: clsgs_KnowledgeTypeEN = new clsgs_KnowledgeTypeEN();
ObjectAssign(objgs_KnowledgeTypeENT, objgs_KnowledgeTypeENS);
 return objgs_KnowledgeTypeENT;
}
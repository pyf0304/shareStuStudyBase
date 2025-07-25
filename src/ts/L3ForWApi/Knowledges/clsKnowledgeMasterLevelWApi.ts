﻿
 /**
 * 类名:clsKnowledgeMasterLevelWApi
 * 表名:KnowledgeMasterLevel(01120891)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:46
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点掌握度(KnowledgeMasterLevel)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月10日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format,GetStrLen,tzDataType } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { GetSortExpressInfo,ObjectAssign,BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg } from "@/ts/PubFun/clsCommFunc4Web";
import { knowledgeMasterLevelCache,isFuncMapCache } from "@/viewsShare/Knowledges/KnowledgeMasterLevelVueShare";
import { clsKnowledgeMasterLevelENEx } from "@/ts/L0Entity/Knowledges/clsKnowledgeMasterLevelENEx";
import { clsKnowledgeMasterLevelEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeMasterLevelEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const knowledgeMasterLevel_Controller = "KnowledgeMasterLevelApi";
 export const knowledgeMasterLevel_ConstructorName = "knowledgeMasterLevel";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strMasterLevelId:关键字
 * @returns 对象
 **/
export  async function KnowledgeMasterLevel_GetObjByMasterLevelIdAsync(strMasterLevelId: string): Promise<clsKnowledgeMasterLevelEN|null>  
{
const strThisFuncName = "GetObjByMasterLevelIdAsync";

if (IsNullOrEmpty(strMasterLevelId) == true)
{
  const strMsg = Format("参数:[strMasterLevelId]不能为空!(In clsKnowledgeMasterLevelWApi.GetObjByMasterLevelIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strMasterLevelId.length != 4)
{
const strMsg = Format("缓存分类变量:[strMasterLevelId]的长度:[{0}]不正确!(clsKnowledgeMasterLevelWApi.GetObjByMasterLevelIdAsync)", strMasterLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByMasterLevelId";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strMasterLevelId,
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
const objKnowledgeMasterLevel = KnowledgeMasterLevel_GetObjFromJsonObj(returnObj);
return objKnowledgeMasterLevel;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param strMasterLevelId:所给的关键字
 * @returns 对象
*/
export  async function KnowledgeMasterLevel_GetObjByMasterLevelIdlocalStorage(strMasterLevelId: string) {
const strThisFuncName = "GetObjByMasterLevelIdlocalStorage";

if (IsNullOrEmpty(strMasterLevelId) == true)
{
  const strMsg = Format("参数:[strMasterLevelId]不能为空!(In clsKnowledgeMasterLevelWApi.GetObjByMasterLevelIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strMasterLevelId.length != 4)
{
const strMsg = Format("缓存分类变量:[strMasterLevelId]的长度:[{0}]不正确!(clsKnowledgeMasterLevelWApi.GetObjByMasterLevelIdlocalStorage)", strMasterLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsKnowledgeMasterLevelEN._CurrTabName, strMasterLevelId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objKnowledgeMasterLevelCache: clsKnowledgeMasterLevelEN = JSON.parse(strTempObj);
return objKnowledgeMasterLevelCache;
}
try
{
const objKnowledgeMasterLevel = await KnowledgeMasterLevel_GetObjByMasterLevelIdAsync(strMasterLevelId);
if (objKnowledgeMasterLevel != null)
{
localStorage.setItem(strKey, JSON.stringify(objKnowledgeMasterLevel));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objKnowledgeMasterLevel;
}
return objKnowledgeMasterLevel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strMasterLevelId, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strMasterLevelId:所给的关键字
 * @returns 对象
*/
export  async function KnowledgeMasterLevel_GetObjByMasterLevelIdCache(strMasterLevelId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByMasterLevelIdCache";

if (IsNullOrEmpty(strMasterLevelId) == true)
{
  const strMsg = Format("参数:[strMasterLevelId]不能为空!(In clsKnowledgeMasterLevelWApi.GetObjByMasterLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strMasterLevelId.length != 4)
{
const strMsg = Format("缓存分类变量:[strMasterLevelId]的长度:[{0}]不正确!(clsKnowledgeMasterLevelWApi.GetObjByMasterLevelIdCache)", strMasterLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
try
{
const arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelObjLstCache.filter(x => 
 x.masterLevelId == strMasterLevelId );
let objKnowledgeMasterLevel: clsKnowledgeMasterLevelEN;
if (arrKnowledgeMasterLevelSel.length > 0)
{
objKnowledgeMasterLevel = arrKnowledgeMasterLevelSel[0];
return objKnowledgeMasterLevel;
}
else
{
if (bolTryAsyncOnce == true)
{
const objKnowledgeMasterLevelConst = await KnowledgeMasterLevel_GetObjByMasterLevelIdAsync(strMasterLevelId);
if (objKnowledgeMasterLevelConst != null)
{
KnowledgeMasterLevel_ReFreshThisCache();
return objKnowledgeMasterLevelConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strMasterLevelId, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objKnowledgeMasterLevel:所给的对象
 * @returns 对象
*/
export  async function KnowledgeMasterLevel_UpdateObjInLstCache(objKnowledgeMasterLevel: clsKnowledgeMasterLevelEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
const obj = arrKnowledgeMasterLevelObjLstCache.find(x => x.masterLevelName == objKnowledgeMasterLevel.masterLevelName);
if (obj != null)
{
objKnowledgeMasterLevel.masterLevelId = obj.masterLevelId;
ObjectAssign( obj, objKnowledgeMasterLevel);
}
else
{
arrKnowledgeMasterLevelObjLstCache.push(objKnowledgeMasterLevel);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  function KnowledgeMasterLevel_SortFunDefa(a:clsKnowledgeMasterLevelEN , b:clsKnowledgeMasterLevelEN): number 
{
return a.masterLevelId.localeCompare(b.masterLevelId);
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
export  function KnowledgeMasterLevel_SortFunDefa2Fld(a:clsKnowledgeMasterLevelEN , b:clsKnowledgeMasterLevelEN): number 
{
if (a.masterLevelName == b.masterLevelName) return a.levelMinValue - b.levelMinValue;
else return a.masterLevelName.localeCompare(b.masterLevelName);
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
export  function KnowledgeMasterLevel_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsKnowledgeMasterLevelEN.con_MasterLevelId:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
return a.masterLevelId.localeCompare(b.masterLevelId);
}
case clsKnowledgeMasterLevelEN.con_MasterLevelName:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
return a.masterLevelName.localeCompare(b.masterLevelName);
}
case clsKnowledgeMasterLevelEN.con_LevelMinValue:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
return a.levelMinValue-b.levelMinValue;
}
case clsKnowledgeMasterLevelEN.con_LevelMaxValue:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
return a.levelMaxValue-b.levelMaxValue;
}
case clsKnowledgeMasterLevelEN.con_UpdDate:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsKnowledgeMasterLevelEN.con_UpdUser:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsKnowledgeMasterLevelEN.con_Memo:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeMasterLevel]中不存在!(in ${ knowledgeMasterLevel_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsKnowledgeMasterLevelEN.con_MasterLevelId:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
return b.masterLevelId.localeCompare(a.masterLevelId);
}
case clsKnowledgeMasterLevelEN.con_MasterLevelName:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
return b.masterLevelName.localeCompare(a.masterLevelName);
}
case clsKnowledgeMasterLevelEN.con_LevelMinValue:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
return b.levelMinValue-a.levelMinValue;
}
case clsKnowledgeMasterLevelEN.con_LevelMaxValue:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
return b.levelMaxValue-a.levelMaxValue;
}
case clsKnowledgeMasterLevelEN.con_UpdDate:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsKnowledgeMasterLevelEN.con_UpdUser:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsKnowledgeMasterLevelEN.con_Memo:
return (a: clsKnowledgeMasterLevelEN, b: clsKnowledgeMasterLevelEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeMasterLevel]中不存在!(in ${ knowledgeMasterLevel_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strMasterLevelId:所给的关键字
 * @returns 对象
*/
export  async function KnowledgeMasterLevel_GetNameByMasterLevelIdCache(strMasterLevelId: string) {

if (IsNullOrEmpty(strMasterLevelId) == true)
{
  const strMsg = Format("参数:[strMasterLevelId]不能为空!(In clsKnowledgeMasterLevelWApi.GetNameByMasterLevelIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strMasterLevelId.length != 4)
{
const strMsg = Format("缓存分类变量:[strMasterLevelId]的长度:[{0}]不正确!(clsKnowledgeMasterLevelWApi.GetNameByMasterLevelIdCache)", strMasterLevelId.length);
console.error(strMsg);
throw (strMsg);
}
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
if (arrKnowledgeMasterLevelObjLstCache == null) return "";
try
{
const arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelObjLstCache.filter(x => 
 x.masterLevelId == strMasterLevelId );
let objKnowledgeMasterLevel: clsKnowledgeMasterLevelEN;
if (arrKnowledgeMasterLevelSel.length > 0)
{
objKnowledgeMasterLevel = arrKnowledgeMasterLevelSel[0];
return objKnowledgeMasterLevel.masterLevelName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strMasterLevelId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function KnowledgeMasterLevel_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsKnowledgeMasterLevelEN.con_MasterLevelId:
return (obj: clsKnowledgeMasterLevelEN) => {
return obj.masterLevelId === value;
}
case clsKnowledgeMasterLevelEN.con_MasterLevelName:
return (obj: clsKnowledgeMasterLevelEN) => {
return obj.masterLevelName === value;
}
case clsKnowledgeMasterLevelEN.con_LevelMinValue:
return (obj: clsKnowledgeMasterLevelEN) => {
return obj.levelMinValue === value;
}
case clsKnowledgeMasterLevelEN.con_LevelMaxValue:
return (obj: clsKnowledgeMasterLevelEN) => {
return obj.levelMaxValue === value;
}
case clsKnowledgeMasterLevelEN.con_UpdDate:
return (obj: clsKnowledgeMasterLevelEN) => {
return obj.updDate === value;
}
case clsKnowledgeMasterLevelEN.con_UpdUser:
return (obj: clsKnowledgeMasterLevelEN) => {
return obj.updUser === value;
}
case clsKnowledgeMasterLevelEN.con_Memo:
return (obj: clsKnowledgeMasterLevelEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeMasterLevel]中不存在!(in ${ knowledgeMasterLevel_ConstructorName}.${ strThisFuncName})`;
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
 * @returns 返回一个输出字段值
*/
export  async function KnowledgeMasterLevel_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsKnowledgeMasterLevelEN.con_MasterLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsKnowledgeMasterLevelEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsKnowledgeMasterLevelEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strMasterLevelId = strInValue;
if (IsNullOrEmpty(strMasterLevelId) == true)
{
return "";
}
const objKnowledgeMasterLevel = await KnowledgeMasterLevel_GetObjByMasterLevelIdCache(strMasterLevelId );
if (objKnowledgeMasterLevel == null) return "";
if (objKnowledgeMasterLevel.GetFldValue(strOutFldName) == null) return "";
return objKnowledgeMasterLevel.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function KnowledgeMasterLevel_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsKnowledgeMasterLevelEN.con_MasterLevelId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrKnowledgeMasterLevel = await KnowledgeMasterLevel_GetObjLstCache();
if (arrKnowledgeMasterLevel == null) return [];
let arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevel;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrKnowledgeMasterLevelSel.length == 0) return [];
return arrKnowledgeMasterLevelSel.map(x=>x.masterLevelId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KnowledgeMasterLevel_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetFirstObjAsync(strWhereCond: string): Promise<clsKnowledgeMasterLevelEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const objKnowledgeMasterLevel = KnowledgeMasterLevel_GetObjFromJsonObj(returnObj);
return objKnowledgeMasterLevel;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKnowledgeMasterLevelEN._CurrTabName;
if (IsNullOrEmpty(clsKnowledgeMasterLevelEN.WhereFormat) == false)
{
strWhereCond = clsKnowledgeMasterLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsKnowledgeMasterLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKnowledgeMasterLevelEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrKnowledgeMasterLevelExObjLstCache: Array<clsKnowledgeMasterLevelEN> = CacheHelper.Get(strKey);
const arrKnowledgeMasterLevelObjLstT = KnowledgeMasterLevel_GetObjLstByJSONObjLst(arrKnowledgeMasterLevelExObjLstCache);
return arrKnowledgeMasterLevelObjLstT;
}
try
{
const arrKnowledgeMasterLevelExObjLst = await KnowledgeMasterLevel_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrKnowledgeMasterLevelExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKnowledgeMasterLevelExObjLst.length);
console.log(strInfo);
return arrKnowledgeMasterLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterLevel_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKnowledgeMasterLevelEN._CurrTabName;
if (IsNullOrEmpty(clsKnowledgeMasterLevelEN.WhereFormat) == false)
{
strWhereCond = clsKnowledgeMasterLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsKnowledgeMasterLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKnowledgeMasterLevelEN.CacheAddiCondition);
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
const arrKnowledgeMasterLevelExObjLstCache: Array<clsKnowledgeMasterLevelEN> = JSON.parse(strTempObjLst);
const arrKnowledgeMasterLevelObjLstT = KnowledgeMasterLevel_GetObjLstByJSONObjLst(arrKnowledgeMasterLevelExObjLstCache);
return arrKnowledgeMasterLevelObjLstT;
}
try
{
const arrKnowledgeMasterLevelExObjLst = await KnowledgeMasterLevel_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrKnowledgeMasterLevelExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKnowledgeMasterLevelExObjLst.length);
console.log(strInfo);
return arrKnowledgeMasterLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterLevel_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKnowledgeMasterLevelEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrKnowledgeMasterLevelObjLstCache: Array<clsKnowledgeMasterLevelEN> = JSON.parse(strTempObjLst);
return arrKnowledgeMasterLevelObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function KnowledgeMasterLevel_GetObjLstAsync(strWhereCond: string): Promise<Array<clsKnowledgeMasterLevelEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKnowledgeMasterLevelEN._CurrTabName;
if (IsNullOrEmpty(clsKnowledgeMasterLevelEN.WhereFormat) == false)
{
strWhereCond = clsKnowledgeMasterLevelEN.WhereFormat;
}
if (IsNullOrEmpty(clsKnowledgeMasterLevelEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKnowledgeMasterLevelEN.CacheAddiCondition);
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
const arrKnowledgeMasterLevelExObjLstCache: Array<clsKnowledgeMasterLevelEN> = JSON.parse(strTempObjLst);
const arrKnowledgeMasterLevelObjLstT = KnowledgeMasterLevel_GetObjLstByJSONObjLst(arrKnowledgeMasterLevelExObjLstCache);
return arrKnowledgeMasterLevelObjLstT;
}
try
{
const arrKnowledgeMasterLevelExObjLst = await KnowledgeMasterLevel_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrKnowledgeMasterLevelExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKnowledgeMasterLevelExObjLst.length);
console.log(strInfo);
return arrKnowledgeMasterLevelExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterLevel_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKnowledgeMasterLevelEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrKnowledgeMasterLevelObjLstCache: Array<clsKnowledgeMasterLevelEN> = JSON.parse(strTempObjLst);
return arrKnowledgeMasterLevelObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterLevel_GetObjLstCache(): Promise<Array<clsKnowledgeMasterLevelEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrKnowledgeMasterLevelObjLstCache;
switch (clsKnowledgeMasterLevelEN.CacheModeId)
{
case "04"://sessionStorage
arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstClientCache();
break;
default:
arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstClientCache();
break;
}
return arrKnowledgeMasterLevelObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterLevel_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrKnowledgeMasterLevelObjLstCache;
switch (clsKnowledgeMasterLevelEN.CacheModeId)
{
case "04"://sessionStorage
arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrKnowledgeMasterLevelObjLstCache = null;
break;
default:
arrKnowledgeMasterLevelObjLstCache = null;
break;
}
return arrKnowledgeMasterLevelObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrMasterLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function KnowledgeMasterLevel_GetSubObjLstCache(objKnowledgeMasterLevelCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
let arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelObjLstCache;
if (objKnowledgeMasterLevelCond.GetConditions().length == 0) return arrKnowledgeMasterLevelSel;
try {
//console.log(sstrKeys);
for (const objCondition of objKnowledgeMasterLevelCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKnowledgeMasterLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objKnowledgeMasterLevelCond), knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKnowledgeMasterLevelEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrMasterLevelId:关键字列表
 * @returns 对象列表
 **/
export  async function KnowledgeMasterLevel_GetObjLstByMasterLevelIdLstAsync(arrMasterLevelId: Array<string>): Promise<Array<clsKnowledgeMasterLevelEN>>  
{
const strThisFuncName = "GetObjLstByMasterLevelIdLstAsync";
const strAction = "GetObjLstByMasterLevelIdLst";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMasterLevelId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param arrstrMasterLevelIdLst:关键字列表
 * @returns 对象列表
*/
export  async function KnowledgeMasterLevel_GetObjLstByMasterLevelIdLstCache(arrMasterLevelIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByMasterLevelIdLstCache";
try
{
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
const arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelObjLstCache.filter(x => arrMasterLevelIdLst.indexOf(x.masterLevelId)>-1);
return arrKnowledgeMasterLevelSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrMasterLevelIdLst.join(","), knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsKnowledgeMasterLevelEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsKnowledgeMasterLevelEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsKnowledgeMasterLevelEN>();
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
if (arrKnowledgeMasterLevelObjLstCache.length == 0) return arrKnowledgeMasterLevelObjLstCache;
let arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelObjLstCache;
const objKnowledgeMasterLevelCond = objPagerPara.conditionCollection;
if (objKnowledgeMasterLevelCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clsKnowledgeMasterLevelEN>();
}
//console.log("clsKnowledgeMasterLevelWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objKnowledgeMasterLevelCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKnowledgeMasterLevelSel.length == 0) return arrKnowledgeMasterLevelSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.sort(KnowledgeMasterLevel_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.sort(objPagerPara.sortFun);
}
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.slice(intStart, intEnd);     
return arrKnowledgeMasterLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKnowledgeMasterLevelEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function KnowledgeMasterLevel_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsKnowledgeMasterLevelEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsKnowledgeMasterLevelEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterLevel_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param strMasterLevelId:关键字
 * @returns 获取删除的结果
 **/
export  async function KnowledgeMasterLevel_DelRecordAsync(strMasterLevelId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strMasterLevelId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param arrMasterLevelId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function KnowledgeMasterLevel_DelKnowledgeMasterLevelsAsync(arrMasterLevelId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelKnowledgeMasterLevelsAsync";
const strAction = "DelKnowledgeMasterLevels";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMasterLevelId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetObjExLstByPagerCache(objPagerPara: stuPagerPara ):Promise<Array<clsKnowledgeMasterLevelENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
 const objSortInfo = GetSortExpressInfo(objPagerPara);
const isFuncMapKey = `${ objSortInfo.SortFld}`;
const arrKnowledgeMasterLevelObjLst = await KnowledgeMasterLevel_GetObjLstCache();
//从缓存中获取对象，如果缓存中不存在就扩展复制
const arrNewObj = new Array<clsKnowledgeMasterLevelENEx>();
const arrKnowledgeMasterLevelExObjLst = arrKnowledgeMasterLevelObjLst.map((obj) => {
const cacheKey = `${ obj.masterLevelId}`;
if (knowledgeMasterLevelCache[cacheKey])
{
const oldObj = knowledgeMasterLevelCache[cacheKey];
return oldObj;
}
else
{
const newObj = KnowledgeMasterLevel_CopyToEx(obj);
arrNewObj.push(newObj);
knowledgeMasterLevelCache[cacheKey] = newObj;
return newObj;
}
});
for (const newObj of arrNewObj) {
for (const strFldName of Object.keys(isFuncMapCache)) {
await KnowledgeMasterLevel_FuncMapByFldName(strFldName, newObj);
}
}
//检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
if (
IsNullOrEmpty(objSortInfo.SortFld) == false &&
clsKnowledgeMasterLevelEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
(bolIsFuncMap == false || bolIsFuncMap == undefined)
)
{
for (const newObj of arrKnowledgeMasterLevelExObjLst) {
await KnowledgeMasterLevel_FuncMapByFldName(objSortInfo.SortFld, newObj);
const cacheKey = `${ newObj.masterLevelId}`;
knowledgeMasterLevelCache[cacheKey] = newObj;
}
isFuncMapCache[isFuncMapKey] = true;
}
if (arrKnowledgeMasterLevelExObjLst.length == 0) return arrKnowledgeMasterLevelExObjLst;
let arrKnowledgeMasterLevelSel: Array < clsKnowledgeMasterLevelENEx > = arrKnowledgeMasterLevelExObjLst;
const objKnowledgeMasterLevelCond = objPagerPara.conditionCollection;
if (objKnowledgeMasterLevelCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return arrKnowledgeMasterLevelExObjLst;
}
try {
for (const objCondition of objKnowledgeMasterLevelCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKnowledgeMasterLevelSel.length == 0) return arrKnowledgeMasterLevelSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.sort(KnowledgeMasterLevel_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.sort(objPagerPara.sortFun);
}
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.slice(intStart, intEnd);     
return arrKnowledgeMasterLevelSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKnowledgeMasterLevelENEx>();
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objKnowledgeMasterLevelENS:源对象
 * @returns 目标对象=>clsKnowledgeMasterLevelEN:objKnowledgeMasterLevelENT
 **/
export  function KnowledgeMasterLevel_CopyToEx(objKnowledgeMasterLevelENS:clsKnowledgeMasterLevelEN ): clsKnowledgeMasterLevelENEx
{
const strThisFuncName  = KnowledgeMasterLevel_CopyToEx.name;
 const objKnowledgeMasterLevelENT = new clsKnowledgeMasterLevelENEx();
try
{
ObjectAssign(objKnowledgeMasterLevelENT, objKnowledgeMasterLevelENS);
 return objKnowledgeMasterLevelENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objKnowledgeMasterLevelENT;
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
export  function KnowledgeMasterLevel_FuncMapByFldName(strFldName: string, objKnowledgeMasterLevelEx: clsKnowledgeMasterLevelENEx)
{
const strThisFuncName = KnowledgeMasterLevel_FuncMapByFldName.name;
console.log(objKnowledgeMasterLevelEx);
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsKnowledgeMasterLevelEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

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
export  function KnowledgeMasterLevel_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return KnowledgeMasterLevel_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return KnowledgeMasterLevel_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function KnowledgeMasterLevel_DelKnowledgeMasterLevelsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelKnowledgeMasterLevelsByCondAsync";
const strAction = "DelKnowledgeMasterLevelsByCond";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KnowledgeMasterLevel_AddNewRecordAsync(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objKnowledgeMasterLevelEN);
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterLevelEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KnowledgeMasterLevel_AddNewRecordWithMaxIdAsync(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_AddNewObjSave(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
KnowledgeMasterLevel_CheckPropertyNew(objKnowledgeMasterLevelEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ knowledgeMasterLevel_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await KnowledgeMasterLevel_CheckUniCond4Add(objKnowledgeMasterLevelEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await KnowledgeMasterLevel_AddNewRecordWithMaxIdAsync(objKnowledgeMasterLevelEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
KnowledgeMasterLevel_ReFreshCache();
}
else
{
const strInfo = `添加[知识点掌握度(KnowledgeMasterLevel)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ knowledgeMasterLevel_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function KnowledgeMasterLevel_CheckUniCond4Add(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<boolean>{
const strUniquenessCondition = KnowledgeMasterLevel_GetUniCondStr(objKnowledgeMasterLevelEN);
const bolIsExistCondition = await KnowledgeMasterLevel_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KnowledgeMasterLevel_CheckUniCond4Update(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<boolean>{
const strUniquenessCondition = KnowledgeMasterLevel_GetUniCondStr4Update(objKnowledgeMasterLevelEN);
const bolIsExistCondition = await KnowledgeMasterLevel_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KnowledgeMasterLevel_UpdateObjSave(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objKnowledgeMasterLevelEN.sfUpdFldSetStr = objKnowledgeMasterLevelEN.updFldString;//设置哪些字段被修改(脏字段)
if (objKnowledgeMasterLevelEN.masterLevelId == "" || objKnowledgeMasterLevelEN.masterLevelId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
KnowledgeMasterLevel_CheckProperty4Update(objKnowledgeMasterLevelEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ knowledgeMasterLevel_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await KnowledgeMasterLevel_CheckUniCond4Update(objKnowledgeMasterLevelEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await KnowledgeMasterLevel_UpdateRecordAsync(objKnowledgeMasterLevelEN);
if (returnBool == true)
{
KnowledgeMasterLevel_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ knowledgeMasterLevel_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objKnowledgeMasterLevelEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function KnowledgeMasterLevel_AddNewRecordWithReturnKeyAsync(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KnowledgeMasterLevel_UpdateRecordAsync(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objKnowledgeMasterLevelEN.sfUpdFldSetStr === undefined || objKnowledgeMasterLevelEN.sfUpdFldSetStr === null || objKnowledgeMasterLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeMasterLevelEN.masterLevelId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterLevelEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KnowledgeMasterLevel_EditRecordExAsync(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objKnowledgeMasterLevelEN.sfUpdFldSetStr === undefined || objKnowledgeMasterLevelEN.sfUpdFldSetStr === null || objKnowledgeMasterLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeMasterLevelEN.masterLevelId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterLevelEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KnowledgeMasterLevel_UpdateWithConditionAsync(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objKnowledgeMasterLevelEN.sfUpdFldSetStr === undefined || objKnowledgeMasterLevelEN.sfUpdFldSetStr === null || objKnowledgeMasterLevelEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeMasterLevelEN.masterLevelId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);
objKnowledgeMasterLevelEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterLevelEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param objstrMasterLevelIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function KnowledgeMasterLevel_IsExistRecordCache(objKnowledgeMasterLevelCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
if (arrKnowledgeMasterLevelObjLstCache == null) return false;
let arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelObjLstCache;
if (objKnowledgeMasterLevelCond.GetConditions().length == 0) return arrKnowledgeMasterLevelSel.length>0?true:false;
try {
for (const objCondition of objKnowledgeMasterLevelCond.GetConditions()) {
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
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKnowledgeMasterLevelSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objKnowledgeMasterLevelCond), knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param strMasterLevelId:所给的关键字
 * @returns 对象
*/
export  async function KnowledgeMasterLevel_IsExistCache(strMasterLevelId:string) {
const strThisFuncName = "IsExistCache";
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
if (arrKnowledgeMasterLevelObjLstCache == null) return false;
try
{
const arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelObjLstCache.filter(x => x.masterLevelId == strMasterLevelId);
if (arrKnowledgeMasterLevelSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strMasterLevelId, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strMasterLevelId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function KnowledgeMasterLevel_IsExistAsync(strMasterLevelId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strMasterLevelId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterLevelCond:条件对象
 * @returns 对象列表记录数
*/
export  async function KnowledgeMasterLevel_GetRecCountByCondCache(objKnowledgeMasterLevelCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrKnowledgeMasterLevelObjLstCache = await KnowledgeMasterLevel_GetObjLstCache();
if (arrKnowledgeMasterLevelObjLstCache == null) return 0;
let arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelObjLstCache;
if (objKnowledgeMasterLevelCond.GetConditions().length == 0) return arrKnowledgeMasterLevelSel.length;
try {
for (const objCondition of objKnowledgeMasterLevelCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterLevelSel = arrKnowledgeMasterLevelSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKnowledgeMasterLevelSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objKnowledgeMasterLevelCond), knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterLevel_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(knowledgeMasterLevel_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterLevel_ConstructorName, strThisFuncName);
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
export  function KnowledgeMasterLevel_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function KnowledgeMasterLevel_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsKnowledgeMasterLevelEN._CurrTabName;
switch (clsKnowledgeMasterLevelEN.CacheModeId)
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
clsKnowledgeMasterLevelEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function KnowledgeMasterLevel_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsKnowledgeMasterLevelEN._CurrTabName;
switch (clsKnowledgeMasterLevelEN.CacheModeId)
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
clsKnowledgeMasterLevelEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function KnowledgeMasterLevel_GetLastRefreshTime():string
{
if (clsKnowledgeMasterLevelEN._RefreshTimeLst.length == 0) return "";
return clsKnowledgeMasterLevelEN._RefreshTimeLst[clsKnowledgeMasterLevelEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KnowledgeMasterLevel_BindDdl_MasterLevelIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_MasterLevelIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_MasterLevelIdInDivCache");
const arrObjLstSel = await KnowledgeMasterLevel_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsKnowledgeMasterLevelEN.con_MasterLevelId, clsKnowledgeMasterLevelEN.con_MasterLevelName, "知识点掌握度...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KnowledgeMasterLevel_GetArrKnowledgeMasterLevel()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_MasterLevelIdInDivCache");
const arrKnowledgeMasterLevel = new Array<clsKnowledgeMasterLevelEN>();
const arrObjLstSel = await KnowledgeMasterLevel_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsKnowledgeMasterLevelEN();
obj0.masterLevelId = '0';
obj0.masterLevelName = '选知识点掌握度...';
arrKnowledgeMasterLevel.push(obj0);
arrObjLstSel.forEach(x => arrKnowledgeMasterLevel.push(x));
return arrKnowledgeMasterLevel;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KnowledgeMasterLevel_CheckPropertyNew(pobjKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelName) === true )
{
 throw new Error(`(errid:Watl000411)字段[掌握等级]不能为空(In 知识点掌握度)!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
if (null === pobjKnowledgeMasterLevelEN.levelMinValue 
 || pobjKnowledgeMasterLevelEN.levelMinValue != null && pobjKnowledgeMasterLevelEN.levelMinValue.toString()  ===  ""
 || pobjKnowledgeMasterLevelEN.levelMinValue.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[最小值]不能为空(In 知识点掌握度)!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
if (null === pobjKnowledgeMasterLevelEN.levelMaxValue 
 || pobjKnowledgeMasterLevelEN.levelMaxValue != null && pobjKnowledgeMasterLevelEN.levelMaxValue.toString()  ===  ""
 || pobjKnowledgeMasterLevelEN.levelMaxValue.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[最大值]不能为空(In 知识点掌握度)!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelId) == false && GetStrLen(pobjKnowledgeMasterLevelEN.masterLevelId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[掌握度Id(masterLevelId)]的长度不能超过4(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.masterLevelId}(clsKnowledgeMasterLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelName) == false && GetStrLen(pobjKnowledgeMasterLevelEN.masterLevelName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[掌握等级(masterLevelName)]的长度不能超过50(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.masterLevelName}(clsKnowledgeMasterLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.updDate) == false && GetStrLen(pobjKnowledgeMasterLevelEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.updDate}(clsKnowledgeMasterLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.updUser) == false && GetStrLen(pobjKnowledgeMasterLevelEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.updUser}(clsKnowledgeMasterLevelBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.memo) == false && GetStrLen(pobjKnowledgeMasterLevelEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.memo}(clsKnowledgeMasterLevelBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelId) == false && undefined !== pobjKnowledgeMasterLevelEN.masterLevelId && tzDataType.isString(pobjKnowledgeMasterLevelEN.masterLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握度Id(masterLevelId)]的值:[${pobjKnowledgeMasterLevelEN.masterLevelId}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelName) == false && undefined !== pobjKnowledgeMasterLevelEN.masterLevelName && tzDataType.isString(pobjKnowledgeMasterLevelEN.masterLevelName) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握等级(masterLevelName)]的值:[${pobjKnowledgeMasterLevelEN.masterLevelName}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeMasterLevelEN.levelMinValue && undefined !== pobjKnowledgeMasterLevelEN.levelMinValue && tzDataType.isNumber(pobjKnowledgeMasterLevelEN.levelMinValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[最小值(levelMinValue)]的值:[${pobjKnowledgeMasterLevelEN.levelMinValue}], 非法,应该为数值型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
if (null != pobjKnowledgeMasterLevelEN.levelMaxValue && undefined !== pobjKnowledgeMasterLevelEN.levelMaxValue && tzDataType.isNumber(pobjKnowledgeMasterLevelEN.levelMaxValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[最大值(levelMaxValue)]的值:[${pobjKnowledgeMasterLevelEN.levelMaxValue}], 非法,应该为数值型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.updDate) == false && undefined !== pobjKnowledgeMasterLevelEN.updDate && tzDataType.isString(pobjKnowledgeMasterLevelEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjKnowledgeMasterLevelEN.updDate}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.updUser) == false && undefined !== pobjKnowledgeMasterLevelEN.updUser && tzDataType.isString(pobjKnowledgeMasterLevelEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjKnowledgeMasterLevelEN.updUser}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.memo) == false && undefined !== pobjKnowledgeMasterLevelEN.memo && tzDataType.isString(pobjKnowledgeMasterLevelEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjKnowledgeMasterLevelEN.memo}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KnowledgeMasterLevel_CheckProperty4Update(pobjKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelId) == false && GetStrLen(pobjKnowledgeMasterLevelEN.masterLevelId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[掌握度Id(masterLevelId)]的长度不能超过4(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.masterLevelId}(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelName) == false && GetStrLen(pobjKnowledgeMasterLevelEN.masterLevelName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[掌握等级(masterLevelName)]的长度不能超过50(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.masterLevelName}(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.updDate) == false && GetStrLen(pobjKnowledgeMasterLevelEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.updDate}(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.updUser) == false && GetStrLen(pobjKnowledgeMasterLevelEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.updUser}(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.memo) == false && GetStrLen(pobjKnowledgeMasterLevelEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点掌握度(KnowledgeMasterLevel))!值:${pobjKnowledgeMasterLevelEN.memo}(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelId) == false && undefined !== pobjKnowledgeMasterLevelEN.masterLevelId && tzDataType.isString(pobjKnowledgeMasterLevelEN.masterLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握度Id(masterLevelId)]的值:[${pobjKnowledgeMasterLevelEN.masterLevelId}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.masterLevelName) == false && undefined !== pobjKnowledgeMasterLevelEN.masterLevelName && tzDataType.isString(pobjKnowledgeMasterLevelEN.masterLevelName) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握等级(masterLevelName)]的值:[${pobjKnowledgeMasterLevelEN.masterLevelName}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeMasterLevelEN.levelMinValue && undefined !== pobjKnowledgeMasterLevelEN.levelMinValue && tzDataType.isNumber(pobjKnowledgeMasterLevelEN.levelMinValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[最小值(levelMinValue)]的值:[${pobjKnowledgeMasterLevelEN.levelMinValue}], 非法,应该为数值型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (null != pobjKnowledgeMasterLevelEN.levelMaxValue && undefined !== pobjKnowledgeMasterLevelEN.levelMaxValue && tzDataType.isNumber(pobjKnowledgeMasterLevelEN.levelMaxValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[最大值(levelMaxValue)]的值:[${pobjKnowledgeMasterLevelEN.levelMaxValue}], 非法,应该为数值型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.updDate) == false && undefined !== pobjKnowledgeMasterLevelEN.updDate && tzDataType.isString(pobjKnowledgeMasterLevelEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjKnowledgeMasterLevelEN.updDate}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.updUser) == false && undefined !== pobjKnowledgeMasterLevelEN.updUser && tzDataType.isString(pobjKnowledgeMasterLevelEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjKnowledgeMasterLevelEN.updUser}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterLevelEN.memo) == false && undefined !== pobjKnowledgeMasterLevelEN.memo && tzDataType.isString(pobjKnowledgeMasterLevelEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjKnowledgeMasterLevelEN.memo}], 非法,应该为字符型(In 知识点掌握度(KnowledgeMasterLevel))!(clsKnowledgeMasterLevelBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
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
export  function KnowledgeMasterLevel_GetJSONStrByObj (pobjKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN): string
{
pobjKnowledgeMasterLevelEN.sfUpdFldSetStr = pobjKnowledgeMasterLevelEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjKnowledgeMasterLevelEN);
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
export  function KnowledgeMasterLevel_GetObjLstByJSONStr (strJSON: string): Array<clsKnowledgeMasterLevelEN>
{
let arrKnowledgeMasterLevelObjLst = new Array<clsKnowledgeMasterLevelEN>();
if (strJSON === "")
{
return arrKnowledgeMasterLevelObjLst;
}
try
{
arrKnowledgeMasterLevelObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrKnowledgeMasterLevelObjLst;
}
return arrKnowledgeMasterLevelObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrKnowledgeMasterLevelObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function KnowledgeMasterLevel_GetObjLstByJSONObjLst (arrKnowledgeMasterLevelObjLstS: Array<clsKnowledgeMasterLevelEN>): Array<clsKnowledgeMasterLevelEN>
{
const arrKnowledgeMasterLevelObjLst = new Array<clsKnowledgeMasterLevelEN>();
for (const objInFor of arrKnowledgeMasterLevelObjLstS) {
const obj1 = KnowledgeMasterLevel_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrKnowledgeMasterLevelObjLst.push(obj1);
}
return arrKnowledgeMasterLevelObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function KnowledgeMasterLevel_GetObjByJSONStr (strJSON: string): clsKnowledgeMasterLevelEN
{
let pobjKnowledgeMasterLevelEN = new clsKnowledgeMasterLevelEN();
if (strJSON === "")
{
return pobjKnowledgeMasterLevelEN;
}
try
{
pobjKnowledgeMasterLevelEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjKnowledgeMasterLevelEN;
}
return pobjKnowledgeMasterLevelEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function KnowledgeMasterLevel_GetCombineCondition(objKnowledgeMasterLevelCond: clsKnowledgeMasterLevelEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterLevelCond.dicFldComparisonOp, clsKnowledgeMasterLevelEN.con_MasterLevelId) == true)
{
const strComparisonOpMasterLevelId:string = objKnowledgeMasterLevelCond.dicFldComparisonOp[clsKnowledgeMasterLevelEN.con_MasterLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterLevelEN.con_MasterLevelId, objKnowledgeMasterLevelCond.masterLevelId, strComparisonOpMasterLevelId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterLevelCond.dicFldComparisonOp, clsKnowledgeMasterLevelEN.con_MasterLevelName) == true)
{
const strComparisonOpMasterLevelName:string = objKnowledgeMasterLevelCond.dicFldComparisonOp[clsKnowledgeMasterLevelEN.con_MasterLevelName];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterLevelEN.con_MasterLevelName, objKnowledgeMasterLevelCond.masterLevelName, strComparisonOpMasterLevelName);
}
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterLevelCond.dicFldComparisonOp, clsKnowledgeMasterLevelEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objKnowledgeMasterLevelCond.dicFldComparisonOp[clsKnowledgeMasterLevelEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterLevelEN.con_UpdDate, objKnowledgeMasterLevelCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterLevelCond.dicFldComparisonOp, clsKnowledgeMasterLevelEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objKnowledgeMasterLevelCond.dicFldComparisonOp[clsKnowledgeMasterLevelEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterLevelEN.con_UpdUser, objKnowledgeMasterLevelCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterLevelCond.dicFldComparisonOp, clsKnowledgeMasterLevelEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objKnowledgeMasterLevelCond.dicFldComparisonOp[clsKnowledgeMasterLevelEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterLevelEN.con_Memo, objKnowledgeMasterLevelCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KnowledgeMasterLevel(知识点掌握度),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strMasterLevelName: 掌握等级(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KnowledgeMasterLevel_GetUniCondStr(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and MasterLevelName = '{0}'", objKnowledgeMasterLevelEN.masterLevelName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KnowledgeMasterLevel(知识点掌握度),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strMasterLevelName: 掌握等级(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KnowledgeMasterLevel_GetUniCondStr4Update(objKnowledgeMasterLevelEN: clsKnowledgeMasterLevelEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and MasterLevelId <> '{0}'", objKnowledgeMasterLevelEN.masterLevelId);
 strWhereCond +=  Format(" and MasterLevelName = '{0}'", objKnowledgeMasterLevelEN.masterLevelName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objKnowledgeMasterLevelENS:源对象
 * @param objKnowledgeMasterLevelENT:目标对象
*/
export  function KnowledgeMasterLevel_CopyObjTo(objKnowledgeMasterLevelENS: clsKnowledgeMasterLevelEN , objKnowledgeMasterLevelENT: clsKnowledgeMasterLevelEN ): void 
{
objKnowledgeMasterLevelENT.masterLevelId = objKnowledgeMasterLevelENS.masterLevelId; //掌握度Id
objKnowledgeMasterLevelENT.masterLevelName = objKnowledgeMasterLevelENS.masterLevelName; //掌握等级
objKnowledgeMasterLevelENT.levelMinValue = objKnowledgeMasterLevelENS.levelMinValue; //最小值
objKnowledgeMasterLevelENT.levelMaxValue = objKnowledgeMasterLevelENS.levelMaxValue; //最大值
objKnowledgeMasterLevelENT.updDate = objKnowledgeMasterLevelENS.updDate; //修改日期
objKnowledgeMasterLevelENT.updUser = objKnowledgeMasterLevelENS.updUser; //修改人
objKnowledgeMasterLevelENT.memo = objKnowledgeMasterLevelENS.memo; //备注
objKnowledgeMasterLevelENT.sfUpdFldSetStr = objKnowledgeMasterLevelENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objKnowledgeMasterLevelENS:源对象
 * @param objKnowledgeMasterLevelENT:目标对象
*/
export  function KnowledgeMasterLevel_GetObjFromJsonObj(objKnowledgeMasterLevelENS: clsKnowledgeMasterLevelEN): clsKnowledgeMasterLevelEN 
{
 const objKnowledgeMasterLevelENT: clsKnowledgeMasterLevelEN = new clsKnowledgeMasterLevelEN();
ObjectAssign(objKnowledgeMasterLevelENT, objKnowledgeMasterLevelENS);
 return objKnowledgeMasterLevelENT;
}
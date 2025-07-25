
 /**
 * 类名:clsXzMajorTypeWApi
 * 表名:XzMajorType(01120068)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:36:17
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
 * 专业类型(XzMajorType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsXzMajorTypeEN } from "@/ts/L0Entity/CourseLearning/clsXzMajorTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const xzMajorType_Controller = "XzMajorTypeApi";
 export const xzMajorType_ConstructorName = "xzMajorType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdMajorType:关键字
 * @returns 对象
 **/
export  async function XzMajorType_GetObjByIdMajorTypeAsync(strIdMajorType: string): Promise<clsXzMajorTypeEN|null>  
{
const strThisFuncName = "GetObjByIdMajorTypeAsync";

if (IsNullOrEmpty(strIdMajorType) == true)
{
  const strMsg = Format("参数:[strIdMajorType]不能为空!(In clsXzMajorTypeWApi.GetObjByIdMajorTypeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdMajorType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdMajorType]的长度:[{0}]不正确!(clsXzMajorTypeWApi.GetObjByIdMajorTypeAsync)", strIdMajorType.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdMajorType";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdMajorType,
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
const objXzMajorType = XzMajorType_GetObjFromJsonObj(returnObj);
return objXzMajorType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param strIdMajorType:所给的关键字
 * @returns 对象
*/
export  async function XzMajorType_GetObjByIdMajorTypelocalStorage(strIdMajorType: string) {
const strThisFuncName = "GetObjByIdMajorTypelocalStorage";

if (IsNullOrEmpty(strIdMajorType) == true)
{
  const strMsg = Format("参数:[strIdMajorType]不能为空!(In clsXzMajorTypeWApi.GetObjByIdMajorTypelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdMajorType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdMajorType]的长度:[{0}]不正确!(clsXzMajorTypeWApi.GetObjByIdMajorTypelocalStorage)", strIdMajorType.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsXzMajorTypeEN._CurrTabName, strIdMajorType);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objXzMajorTypeCache: clsXzMajorTypeEN = JSON.parse(strTempObj);
return objXzMajorTypeCache;
}
try
{
const objXzMajorType = await XzMajorType_GetObjByIdMajorTypeAsync(strIdMajorType);
if (objXzMajorType != null)
{
localStorage.setItem(strKey, JSON.stringify(objXzMajorType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objXzMajorType;
}
return objXzMajorType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdMajorType, xzMajorType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdMajorType:所给的关键字
 * @returns 对象
*/
export  async function XzMajorType_GetObjByIdMajorTypeCache(strIdMajorType: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdMajorTypeCache";

if (IsNullOrEmpty(strIdMajorType) == true)
{
  const strMsg = Format("参数:[strIdMajorType]不能为空!(In clsXzMajorTypeWApi.GetObjByIdMajorTypeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdMajorType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdMajorType]的长度:[{0}]不正确!(clsXzMajorTypeWApi.GetObjByIdMajorTypeCache)", strIdMajorType.length);
console.error(strMsg);
throw (strMsg);
}
const arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstCache();
try
{
const arrXzMajorTypeSel = arrXzMajorTypeObjLstCache.filter(x => 
 x.idMajorType == strIdMajorType );
let objXzMajorType: clsXzMajorTypeEN;
if (arrXzMajorTypeSel.length > 0)
{
objXzMajorType = arrXzMajorTypeSel[0];
return objXzMajorType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objXzMajorTypeConst = await XzMajorType_GetObjByIdMajorTypeAsync(strIdMajorType);
if (objXzMajorTypeConst != null)
{
XzMajorType_ReFreshThisCache();
return objXzMajorTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdMajorType, xzMajorType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objXzMajorType:所给的对象
 * @returns 对象
*/
export  async function XzMajorType_UpdateObjInLstCache(objXzMajorType: clsXzMajorTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstCache();
const obj = arrXzMajorTypeObjLstCache.find(x => 
x.idMajorType == objXzMajorType.idMajorType);
if (obj != null)
{
objXzMajorType.idMajorType = obj.idMajorType;
ObjectAssign( obj, objXzMajorType);
}
else
{
arrXzMajorTypeObjLstCache.push(objXzMajorType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, xzMajorType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function XzMajorType_SortFunDefa(a:clsXzMajorTypeEN , b:clsXzMajorTypeEN): number 
{
return a.idMajorType.localeCompare(b.idMajorType);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function XzMajorType_SortFunDefa2Fld(a:clsXzMajorTypeEN , b:clsXzMajorTypeEN): number 
{
if (a.majorTypeID == b.majorTypeID) return a.majorTypeName.localeCompare(b.majorTypeName);
else return a.majorTypeID.localeCompare(b.majorTypeID);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function XzMajorType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsXzMajorTypeEN.con_IdMajorType:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
return a.idMajorType.localeCompare(b.idMajorType);
}
case clsXzMajorTypeEN.con_MajorTypeID:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
return a.majorTypeID.localeCompare(b.majorTypeID);
}
case clsXzMajorTypeEN.con_MajorTypeName:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
return a.majorTypeName.localeCompare(b.majorTypeName);
}
case clsXzMajorTypeEN.con_ModifyUserId:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsXzMajorTypeEN.con_ModifyDate:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
case clsXzMajorTypeEN.con_Memo:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[XzMajorType]中不存在!(in ${ xzMajorType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsXzMajorTypeEN.con_IdMajorType:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
return b.idMajorType.localeCompare(a.idMajorType);
}
case clsXzMajorTypeEN.con_MajorTypeID:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
return b.majorTypeID.localeCompare(a.majorTypeID);
}
case clsXzMajorTypeEN.con_MajorTypeName:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
return b.majorTypeName.localeCompare(a.majorTypeName);
}
case clsXzMajorTypeEN.con_ModifyUserId:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsXzMajorTypeEN.con_ModifyDate:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
case clsXzMajorTypeEN.con_Memo:
return (a: clsXzMajorTypeEN, b: clsXzMajorTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[XzMajorType]中不存在!(in ${ xzMajorType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdMajorType:所给的关键字
 * @returns 对象
*/
export  async function XzMajorType_GetNameByIdMajorTypeCache(strIdMajorType: string) {

if (IsNullOrEmpty(strIdMajorType) == true)
{
  const strMsg = Format("参数:[strIdMajorType]不能为空!(In clsXzMajorTypeWApi.GetNameByIdMajorTypeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdMajorType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdMajorType]的长度:[{0}]不正确!(clsXzMajorTypeWApi.GetNameByIdMajorTypeCache)", strIdMajorType.length);
console.error(strMsg);
throw (strMsg);
}
const arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstCache();
if (arrXzMajorTypeObjLstCache == null) return "";
try
{
const arrXzMajorTypeSel = arrXzMajorTypeObjLstCache.filter(x => 
 x.idMajorType == strIdMajorType );
let objXzMajorType: clsXzMajorTypeEN;
if (arrXzMajorTypeSel.length > 0)
{
objXzMajorType = arrXzMajorTypeSel[0];
return objXzMajorType.majorTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdMajorType);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function XzMajorType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsXzMajorTypeEN.con_IdMajorType:
return (obj: clsXzMajorTypeEN) => {
return obj.idMajorType === value;
}
case clsXzMajorTypeEN.con_MajorTypeID:
return (obj: clsXzMajorTypeEN) => {
return obj.majorTypeID === value;
}
case clsXzMajorTypeEN.con_MajorTypeName:
return (obj: clsXzMajorTypeEN) => {
return obj.majorTypeName === value;
}
case clsXzMajorTypeEN.con_ModifyUserId:
return (obj: clsXzMajorTypeEN) => {
return obj.modifyUserId === value;
}
case clsXzMajorTypeEN.con_ModifyDate:
return (obj: clsXzMajorTypeEN) => {
return obj.modifyDate === value;
}
case clsXzMajorTypeEN.con_Memo:
return (obj: clsXzMajorTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[XzMajorType]中不存在!(in ${ xzMajorType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function XzMajorType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsXzMajorTypeEN.con_IdMajorType)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsXzMajorTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsXzMajorTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdMajorType = strInValue;
if (IsNullOrEmpty(strIdMajorType) == true)
{
return "";
}
const objXzMajorType = await XzMajorType_GetObjByIdMajorTypeCache(strIdMajorType );
if (objXzMajorType == null) return "";
if (objXzMajorType.GetFldValue(strOutFldName) == null) return "";
return objXzMajorType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function XzMajorType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsXzMajorTypeEN.con_IdMajorType)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrXzMajorType = await XzMajorType_GetObjLstCache();
if (arrXzMajorType == null) return [];
let arrXzMajorTypeSel = arrXzMajorType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrXzMajorTypeSel.length == 0) return [];
return arrXzMajorTypeSel.map(x=>x.idMajorType);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function XzMajorType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetFirstObjAsync(strWhereCond: string): Promise<clsXzMajorTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const objXzMajorType = XzMajorType_GetObjFromJsonObj(returnObj);
return objXzMajorType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsXzMajorTypeEN._CurrTabName;
if (IsNullOrEmpty(clsXzMajorTypeEN.WhereFormat) == false)
{
strWhereCond = clsXzMajorTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsXzMajorTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsXzMajorTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrXzMajorTypeExObjLstCache: Array<clsXzMajorTypeEN> = CacheHelper.Get(strKey);
const arrXzMajorTypeObjLstT = XzMajorType_GetObjLstByJSONObjLst(arrXzMajorTypeExObjLstCache);
return arrXzMajorTypeObjLstT;
}
try
{
const arrXzMajorTypeExObjLst = await XzMajorType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrXzMajorTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrXzMajorTypeExObjLst.length);
console.log(strInfo);
return arrXzMajorTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, xzMajorType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzMajorType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsXzMajorTypeEN._CurrTabName;
if (IsNullOrEmpty(clsXzMajorTypeEN.WhereFormat) == false)
{
strWhereCond = clsXzMajorTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsXzMajorTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsXzMajorTypeEN.CacheAddiCondition);
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
const arrXzMajorTypeExObjLstCache: Array<clsXzMajorTypeEN> = JSON.parse(strTempObjLst);
const arrXzMajorTypeObjLstT = XzMajorType_GetObjLstByJSONObjLst(arrXzMajorTypeExObjLstCache);
return arrXzMajorTypeObjLstT;
}
try
{
const arrXzMajorTypeExObjLst = await XzMajorType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrXzMajorTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrXzMajorTypeExObjLst.length);
console.log(strInfo);
return arrXzMajorTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, xzMajorType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzMajorType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsXzMajorTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrXzMajorTypeObjLstCache: Array<clsXzMajorTypeEN> = JSON.parse(strTempObjLst);
return arrXzMajorTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function XzMajorType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsXzMajorTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzMajorType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzMajorType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsXzMajorTypeEN._CurrTabName;
if (IsNullOrEmpty(clsXzMajorTypeEN.WhereFormat) == false)
{
strWhereCond = clsXzMajorTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsXzMajorTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsXzMajorTypeEN.CacheAddiCondition);
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
const arrXzMajorTypeExObjLstCache: Array<clsXzMajorTypeEN> = JSON.parse(strTempObjLst);
const arrXzMajorTypeObjLstT = XzMajorType_GetObjLstByJSONObjLst(arrXzMajorTypeExObjLstCache);
return arrXzMajorTypeObjLstT;
}
try
{
const arrXzMajorTypeExObjLst = await XzMajorType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrXzMajorTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrXzMajorTypeExObjLst.length);
console.log(strInfo);
return arrXzMajorTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, xzMajorType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzMajorType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsXzMajorTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrXzMajorTypeObjLstCache: Array<clsXzMajorTypeEN> = JSON.parse(strTempObjLst);
return arrXzMajorTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzMajorType_GetObjLstCache(): Promise<Array<clsXzMajorTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrXzMajorTypeObjLstCache;
switch (clsXzMajorTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstClientCache();
break;
default:
arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstClientCache();
break;
}
return arrXzMajorTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function XzMajorType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrXzMajorTypeObjLstCache;
switch (clsXzMajorTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrXzMajorTypeObjLstCache = null;
break;
default:
arrXzMajorTypeObjLstCache = null;
break;
}
return arrXzMajorTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdMajorTypeCond:条件对象
 * @returns 对象列表子集
*/
export  async function XzMajorType_GetSubObjLstCache(objXzMajorTypeCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstCache();
let arrXzMajorTypeSel = arrXzMajorTypeObjLstCache;
if (objXzMajorTypeCond.GetConditions().length == 0) return arrXzMajorTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objXzMajorTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrXzMajorTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objXzMajorTypeCond), xzMajorType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsXzMajorTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdMajorType:关键字列表
 * @returns 对象列表
 **/
export  async function XzMajorType_GetObjLstByIdMajorTypeLstAsync(arrIdMajorType: Array<string>): Promise<Array<clsXzMajorTypeEN>>  
{
const strThisFuncName = "GetObjLstByIdMajorTypeLstAsync";
const strAction = "GetObjLstByIdMajorTypeLst";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdMajorType, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzMajorType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzMajorType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param arrstrIdMajorTypeLst:关键字列表
 * @returns 对象列表
*/
export  async function XzMajorType_GetObjLstByIdMajorTypeLstCache(arrIdMajorTypeLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdMajorTypeLstCache";
try
{
const arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstCache();
const arrXzMajorTypeSel = arrXzMajorTypeObjLstCache.filter(x => arrIdMajorTypeLst.indexOf(x.idMajorType)>-1);
return arrXzMajorTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdMajorTypeLst.join(","), xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsXzMajorTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzMajorType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzMajorType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsXzMajorTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", xzMajorType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = XzMajorType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

 /**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strIdMajorType:关键字
 * @returns 获取删除的结果
 **/
export  async function XzMajorType_DelRecordAsync(strIdMajorType: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdMajorType);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param arrIdMajorType:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function XzMajorType_DelXzMajorTypesAsync(arrIdMajorType: Array<string>): Promise<number> 
{
const strThisFuncName = "DelXzMajorTypesAsync";
const strAction = "DelXzMajorTypes";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdMajorType, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function XzMajorType_DelXzMajorTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelXzMajorTypesByCondAsync";
const strAction = "DelXzMajorTypesByCond";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param objXzMajorTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function XzMajorType_AddNewRecordAsync(objXzMajorTypeEN: clsXzMajorTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objXzMajorTypeEN.idMajorType === null || objXzMajorTypeEN.idMajorType === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objXzMajorTypeEN);
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzMajorTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param objXzMajorTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function XzMajorType_AddNewRecordWithMaxIdAsync(objXzMajorTypeEN: clsXzMajorTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzMajorTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_AddNewObjSave(objXzMajorTypeEN: clsXzMajorTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
XzMajorType_CheckPropertyNew(objXzMajorTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ xzMajorType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await XzMajorType_IsExistAsync(objXzMajorTypeEN.idMajorType);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objXzMajorTypeEN.idMajorType);
console.error(strMsg);
throw(strMsg);
}
returnBool = await XzMajorType_AddNewRecordAsync(objXzMajorTypeEN);
if (returnBool == true)
{
XzMajorType_ReFreshCache();
}
else
{
const strInfo = `添加[专业类型(XzMajorType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objXzMajorTypeEN.idMajorType, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ xzMajorType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function XzMajorType_UpdateObjSave(objXzMajorTypeEN: clsXzMajorTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objXzMajorTypeEN.sfUpdFldSetStr = objXzMajorTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objXzMajorTypeEN.idMajorType == "" || objXzMajorTypeEN.idMajorType == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
XzMajorType_CheckProperty4Update(objXzMajorTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ xzMajorType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await XzMajorType_UpdateRecordAsync(objXzMajorTypeEN);
if (returnBool == true)
{
XzMajorType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ xzMajorType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objXzMajorTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function XzMajorType_AddNewRecordWithReturnKeyAsync(objXzMajorTypeEN: clsXzMajorTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzMajorTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param objXzMajorTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function XzMajorType_UpdateRecordAsync(objXzMajorTypeEN: clsXzMajorTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objXzMajorTypeEN.sfUpdFldSetStr === undefined || objXzMajorTypeEN.sfUpdFldSetStr === null || objXzMajorTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objXzMajorTypeEN.idMajorType);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzMajorTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param objXzMajorTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function XzMajorType_EditRecordExAsync(objXzMajorTypeEN: clsXzMajorTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objXzMajorTypeEN.sfUpdFldSetStr === undefined || objXzMajorTypeEN.sfUpdFldSetStr === null || objXzMajorTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objXzMajorTypeEN.idMajorType);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzMajorTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param objXzMajorTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function XzMajorType_UpdateWithConditionAsync(objXzMajorTypeEN: clsXzMajorTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objXzMajorTypeEN.sfUpdFldSetStr === undefined || objXzMajorTypeEN.sfUpdFldSetStr === null || objXzMajorTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objXzMajorTypeEN.idMajorType);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);
objXzMajorTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objXzMajorTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param objstrIdMajorTypeCond:条件对象
 * @returns 对象列表子集
*/
export  async function XzMajorType_IsExistRecordCache(objXzMajorTypeCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstCache();
if (arrXzMajorTypeObjLstCache == null) return false;
let arrXzMajorTypeSel = arrXzMajorTypeObjLstCache;
if (objXzMajorTypeCond.GetConditions().length == 0) return arrXzMajorTypeSel.length>0?true:false;
try {
for (const objCondition of objXzMajorTypeCond.GetConditions()) {
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
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrXzMajorTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objXzMajorTypeCond), xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param strIdMajorType:所给的关键字
 * @returns 对象
*/
export  async function XzMajorType_IsExistCache(strIdMajorType:string) {
const strThisFuncName = "IsExistCache";
const arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstCache();
if (arrXzMajorTypeObjLstCache == null) return false;
try
{
const arrXzMajorTypeSel = arrXzMajorTypeObjLstCache.filter(x => x.idMajorType == strIdMajorType);
if (arrXzMajorTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdMajorType, xzMajorType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdMajorType:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function XzMajorType_IsExistAsync(strIdMajorType: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdMajorType
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
 * @param objXzMajorTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function XzMajorType_GetRecCountByCondCache(objXzMajorTypeCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrXzMajorTypeObjLstCache = await XzMajorType_GetObjLstCache();
if (arrXzMajorTypeObjLstCache == null) return 0;
let arrXzMajorTypeSel = arrXzMajorTypeObjLstCache;
if (objXzMajorTypeCond.GetConditions().length == 0) return arrXzMajorTypeSel.length;
try {
for (const objCondition of objXzMajorTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrXzMajorTypeSel = arrXzMajorTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrXzMajorTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objXzMajorTypeCond), xzMajorType_ConstructorName, strThisFuncName);
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
export  async function XzMajorType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(xzMajorType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, xzMajorType_ConstructorName, strThisFuncName);
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
export  function XzMajorType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function XzMajorType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsXzMajorTypeEN._CurrTabName;
switch (clsXzMajorTypeEN.CacheModeId)
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
clsXzMajorTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function XzMajorType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsXzMajorTypeEN._CurrTabName;
switch (clsXzMajorTypeEN.CacheModeId)
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
clsXzMajorTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function XzMajorType_GetLastRefreshTime():string
{
if (clsXzMajorTypeEN._RefreshTimeLst.length == 0) return "";
return clsXzMajorTypeEN._RefreshTimeLst[clsXzMajorTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function XzMajorType_Cache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrObjLstSel = await XzMajorType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsXzMajorTypeEN.con_IdMajorType, clsXzMajorTypeEN.con_MajorTypeName, "专业类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function XzMajorType_GetArrXzMajorType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrXzMajorType = new Array<clsXzMajorTypeEN>();
const arrObjLstSel = await XzMajorType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsXzMajorTypeEN();
obj0.idMajorType = '0';
obj0.majorTypeName = '选专业类型...';
arrXzMajorType.push(obj0);
arrObjLstSel.forEach(x => arrXzMajorType.push(x));
return arrXzMajorType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function XzMajorType_CheckPropertyNew(pobjXzMajorTypeEN: clsXzMajorTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeID) === true )
{
 throw new Error(`(errid:Watl000411)字段[专业类型代号]不能为空(In 专业类型)!(clsXzMajorTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[专业类型名称]不能为空(In 专业类型)!(clsXzMajorTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjXzMajorTypeEN.idMajorType) == false && GetStrLen(pobjXzMajorTypeEN.idMajorType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[专业类型(文理工)流水号(idMajorType)]的长度不能超过4(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.idMajorType}(clsXzMajorTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeID) == false && GetStrLen(pobjXzMajorTypeEN.majorTypeID) > 2)
{
 throw new Error(`(errid:Watl000413)字段[专业类型代号(majorTypeID)]的长度不能超过2(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.majorTypeID}(clsXzMajorTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeName) == false && GetStrLen(pobjXzMajorTypeEN.majorTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[专业类型名称(majorTypeName)]的长度不能超过50(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.majorTypeName}(clsXzMajorTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.modifyUserId) == false && GetStrLen(pobjXzMajorTypeEN.modifyUserId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.modifyUserId}(clsXzMajorTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.modifyDate) == false && GetStrLen(pobjXzMajorTypeEN.modifyDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.modifyDate}(clsXzMajorTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.memo) == false && GetStrLen(pobjXzMajorTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.memo}(clsXzMajorTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjXzMajorTypeEN.idMajorType) == false && undefined !== pobjXzMajorTypeEN.idMajorType && tzDataType.isString(pobjXzMajorTypeEN.idMajorType) === false)
{
 throw new Error(`(errid:Watl000414)字段[专业类型(文理工)流水号(idMajorType)]的值:[${pobjXzMajorTypeEN.idMajorType}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeID) == false && undefined !== pobjXzMajorTypeEN.majorTypeID && tzDataType.isString(pobjXzMajorTypeEN.majorTypeID) === false)
{
 throw new Error(`(errid:Watl000414)字段[专业类型代号(majorTypeID)]的值:[${pobjXzMajorTypeEN.majorTypeID}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeName) == false && undefined !== pobjXzMajorTypeEN.majorTypeName && tzDataType.isString(pobjXzMajorTypeEN.majorTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[专业类型名称(majorTypeName)]的值:[${pobjXzMajorTypeEN.majorTypeName}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.modifyUserId) == false && undefined !== pobjXzMajorTypeEN.modifyUserId && tzDataType.isString(pobjXzMajorTypeEN.modifyUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(modifyUserId)]的值:[${pobjXzMajorTypeEN.modifyUserId}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.modifyDate) == false && undefined !== pobjXzMajorTypeEN.modifyDate && tzDataType.isString(pobjXzMajorTypeEN.modifyDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(modifyDate)]的值:[${pobjXzMajorTypeEN.modifyDate}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.memo) == false && undefined !== pobjXzMajorTypeEN.memo && tzDataType.isString(pobjXzMajorTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjXzMajorTypeEN.memo}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function XzMajorType_CheckProperty4Update(pobjXzMajorTypeEN: clsXzMajorTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjXzMajorTypeEN.idMajorType) == false && GetStrLen(pobjXzMajorTypeEN.idMajorType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[专业类型(文理工)流水号(idMajorType)]的长度不能超过4(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.idMajorType}(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeID) == false && GetStrLen(pobjXzMajorTypeEN.majorTypeID) > 2)
{
 throw new Error(`(errid:Watl000416)字段[专业类型代号(majorTypeID)]的长度不能超过2(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.majorTypeID}(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeName) == false && GetStrLen(pobjXzMajorTypeEN.majorTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[专业类型名称(majorTypeName)]的长度不能超过50(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.majorTypeName}(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.modifyUserId) == false && GetStrLen(pobjXzMajorTypeEN.modifyUserId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.modifyUserId}(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.modifyDate) == false && GetStrLen(pobjXzMajorTypeEN.modifyDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.modifyDate}(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.memo) == false && GetStrLen(pobjXzMajorTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 专业类型(XzMajorType))!值:${pobjXzMajorTypeEN.memo}(clsXzMajorTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjXzMajorTypeEN.idMajorType) == false && undefined !== pobjXzMajorTypeEN.idMajorType && tzDataType.isString(pobjXzMajorTypeEN.idMajorType) === false)
{
 throw new Error(`(errid:Watl000417)字段[专业类型(文理工)流水号(idMajorType)]的值:[${pobjXzMajorTypeEN.idMajorType}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeID) == false && undefined !== pobjXzMajorTypeEN.majorTypeID && tzDataType.isString(pobjXzMajorTypeEN.majorTypeID) === false)
{
 throw new Error(`(errid:Watl000417)字段[专业类型代号(majorTypeID)]的值:[${pobjXzMajorTypeEN.majorTypeID}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.majorTypeName) == false && undefined !== pobjXzMajorTypeEN.majorTypeName && tzDataType.isString(pobjXzMajorTypeEN.majorTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[专业类型名称(majorTypeName)]的值:[${pobjXzMajorTypeEN.majorTypeName}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.modifyUserId) == false && undefined !== pobjXzMajorTypeEN.modifyUserId && tzDataType.isString(pobjXzMajorTypeEN.modifyUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(modifyUserId)]的值:[${pobjXzMajorTypeEN.modifyUserId}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.modifyDate) == false && undefined !== pobjXzMajorTypeEN.modifyDate && tzDataType.isString(pobjXzMajorTypeEN.modifyDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(modifyDate)]的值:[${pobjXzMajorTypeEN.modifyDate}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjXzMajorTypeEN.memo) == false && undefined !== pobjXzMajorTypeEN.memo && tzDataType.isString(pobjXzMajorTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjXzMajorTypeEN.memo}], 非法,应该为字符型(In 专业类型(XzMajorType))!(clsXzMajorTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjXzMajorTypeEN.idMajorType) === true 
 || pobjXzMajorTypeEN.idMajorType.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[专业类型(文理工)流水号]不能为空(In 专业类型)!(clsXzMajorTypeBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function XzMajorType_GetJSONStrByObj (pobjXzMajorTypeEN: clsXzMajorTypeEN): string
{
pobjXzMajorTypeEN.sfUpdFldSetStr = pobjXzMajorTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjXzMajorTypeEN);
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
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function XzMajorType_GetObjLstByJSONStr (strJSON: string): Array<clsXzMajorTypeEN>
{
let arrXzMajorTypeObjLst = new Array<clsXzMajorTypeEN>();
if (strJSON === "")
{
return arrXzMajorTypeObjLst;
}
try
{
arrXzMajorTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrXzMajorTypeObjLst;
}
return arrXzMajorTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzMajorTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function XzMajorType_GetObjLstByJSONObjLst (arrXzMajorTypeObjLstS: Array<clsXzMajorTypeEN>): Array<clsXzMajorTypeEN>
{
const arrXzMajorTypeObjLst = new Array<clsXzMajorTypeEN>();
for (const objInFor of arrXzMajorTypeObjLstS) {
const obj1 = XzMajorType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrXzMajorTypeObjLst.push(obj1);
}
return arrXzMajorTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function XzMajorType_GetObjByJSONStr (strJSON: string): clsXzMajorTypeEN
{
let pobjXzMajorTypeEN = new clsXzMajorTypeEN();
if (strJSON === "")
{
return pobjXzMajorTypeEN;
}
try
{
pobjXzMajorTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjXzMajorTypeEN;
}
return pobjXzMajorTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function XzMajorType_GetCombineCondition(objXzMajorTypeCond: clsXzMajorTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objXzMajorTypeCond.dicFldComparisonOp, clsXzMajorTypeEN.con_IdMajorType) == true)
{
const strComparisonOpIdMajorType:string = objXzMajorTypeCond.dicFldComparisonOp[clsXzMajorTypeEN.con_IdMajorType];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzMajorTypeEN.con_IdMajorType, objXzMajorTypeCond.idMajorType, strComparisonOpIdMajorType);
}
if (Object.prototype.hasOwnProperty.call(objXzMajorTypeCond.dicFldComparisonOp, clsXzMajorTypeEN.con_MajorTypeID) == true)
{
const strComparisonOpMajorTypeID:string = objXzMajorTypeCond.dicFldComparisonOp[clsXzMajorTypeEN.con_MajorTypeID];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzMajorTypeEN.con_MajorTypeID, objXzMajorTypeCond.majorTypeID, strComparisonOpMajorTypeID);
}
if (Object.prototype.hasOwnProperty.call(objXzMajorTypeCond.dicFldComparisonOp, clsXzMajorTypeEN.con_MajorTypeName) == true)
{
const strComparisonOpMajorTypeName:string = objXzMajorTypeCond.dicFldComparisonOp[clsXzMajorTypeEN.con_MajorTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzMajorTypeEN.con_MajorTypeName, objXzMajorTypeCond.majorTypeName, strComparisonOpMajorTypeName);
}
if (Object.prototype.hasOwnProperty.call(objXzMajorTypeCond.dicFldComparisonOp, clsXzMajorTypeEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objXzMajorTypeCond.dicFldComparisonOp[clsXzMajorTypeEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzMajorTypeEN.con_ModifyUserId, objXzMajorTypeCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objXzMajorTypeCond.dicFldComparisonOp, clsXzMajorTypeEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objXzMajorTypeCond.dicFldComparisonOp[clsXzMajorTypeEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzMajorTypeEN.con_ModifyDate, objXzMajorTypeCond.modifyDate, strComparisonOpModifyDate);
}
if (Object.prototype.hasOwnProperty.call(objXzMajorTypeCond.dicFldComparisonOp, clsXzMajorTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objXzMajorTypeCond.dicFldComparisonOp[clsXzMajorTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsXzMajorTypeEN.con_Memo, objXzMajorTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzMajorTypeENS:源对象
 * @param objXzMajorTypeENT:目标对象
*/
export  function XzMajorType_CopyObjTo(objXzMajorTypeENS: clsXzMajorTypeEN , objXzMajorTypeENT: clsXzMajorTypeEN ): void 
{
objXzMajorTypeENT.idMajorType = objXzMajorTypeENS.idMajorType; //专业类型(文理工)流水号
objXzMajorTypeENT.majorTypeID = objXzMajorTypeENS.majorTypeID; //专业类型代号
objXzMajorTypeENT.majorTypeName = objXzMajorTypeENS.majorTypeName; //专业类型名称
objXzMajorTypeENT.modifyUserId = objXzMajorTypeENS.modifyUserId; //修改人
objXzMajorTypeENT.modifyDate = objXzMajorTypeENS.modifyDate; //修改日期
objXzMajorTypeENT.memo = objXzMajorTypeENS.memo; //备注
objXzMajorTypeENT.sfUpdFldSetStr = objXzMajorTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzMajorTypeENS:源对象
 * @param objXzMajorTypeENT:目标对象
*/
export  function XzMajorType_GetObjFromJsonObj(objXzMajorTypeENS: clsXzMajorTypeEN): clsXzMajorTypeEN 
{
 const objXzMajorTypeENT: clsXzMajorTypeEN = new clsXzMajorTypeEN();
ObjectAssign(objXzMajorTypeENT, objXzMajorTypeENS);
 return objXzMajorTypeENT;
}
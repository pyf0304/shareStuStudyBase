
 /**
 * 类名:clsKcCrsTypeWApi
 * 表名:KcCrsType(01120136)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 20:44:36
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 课程类型(KcCrsType)
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
import { clsKcCrsTypeEN } from "@/ts/L0Entity/CourseManage/clsKcCrsTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const kcCrsType_Controller = "KcCrsTypeApi";
 export const kcCrsType_ConstructorName = "kcCrsType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdCourseType:关键字
 * @returns 对象
 **/
export  async function KcCrsType_GetObjByIdCourseTypeAsync(strIdCourseType: string): Promise<clsKcCrsTypeEN|null>  
{
const strThisFuncName = "GetObjByIdCourseTypeAsync";

if (IsNullOrEmpty(strIdCourseType) == true)
{
  const strMsg = Format("参数:[strIdCourseType]不能为空!(In clsKcCrsTypeWApi.GetObjByIdCourseTypeAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCourseType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdCourseType]的长度:[{0}]不正确!(clsKcCrsTypeWApi.GetObjByIdCourseTypeAsync)", strIdCourseType.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdCourseType";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCourseType,
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
const objKcCrsType = KcCrsType_GetObjFromJsonObj(returnObj);
return objKcCrsType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param strIdCourseType:所给的关键字
 * @returns 对象
*/
export  async function KcCrsType_GetObjByIdCourseTypelocalStorage(strIdCourseType: string) {
const strThisFuncName = "GetObjByIdCourseTypelocalStorage";

if (IsNullOrEmpty(strIdCourseType) == true)
{
  const strMsg = Format("参数:[strIdCourseType]不能为空!(In clsKcCrsTypeWApi.GetObjByIdCourseTypelocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCourseType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdCourseType]的长度:[{0}]不正确!(clsKcCrsTypeWApi.GetObjByIdCourseTypelocalStorage)", strIdCourseType.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsKcCrsTypeEN._CurrTabName, strIdCourseType);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objKcCrsTypeCache: clsKcCrsTypeEN = JSON.parse(strTempObj);
return objKcCrsTypeCache;
}
try
{
const objKcCrsType = await KcCrsType_GetObjByIdCourseTypeAsync(strIdCourseType);
if (objKcCrsType != null)
{
localStorage.setItem(strKey, JSON.stringify(objKcCrsType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objKcCrsType;
}
return objKcCrsType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdCourseType, kcCrsType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdCourseType:所给的关键字
 * @returns 对象
*/
export  async function KcCrsType_GetObjByIdCourseTypeCache(strIdCourseType: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdCourseTypeCache";

if (IsNullOrEmpty(strIdCourseType) == true)
{
  const strMsg = Format("参数:[strIdCourseType]不能为空!(In clsKcCrsTypeWApi.GetObjByIdCourseTypeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCourseType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdCourseType]的长度:[{0}]不正确!(clsKcCrsTypeWApi.GetObjByIdCourseTypeCache)", strIdCourseType.length);
console.error(strMsg);
throw (strMsg);
}
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
try
{
const arrKcCrsTypeSel = arrKcCrsTypeObjLstCache.filter(x => 
 x.idCourseType == strIdCourseType );
let objKcCrsType: clsKcCrsTypeEN;
if (arrKcCrsTypeSel.length > 0)
{
objKcCrsType = arrKcCrsTypeSel[0];
return objKcCrsType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objKcCrsTypeConst = await KcCrsType_GetObjByIdCourseTypeAsync(strIdCourseType);
if (objKcCrsTypeConst != null)
{
KcCrsType_ReFreshThisCache();
return objKcCrsTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdCourseType, kcCrsType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objKcCrsType:所给的对象
 * @returns 对象
*/
export  async function KcCrsType_UpdateObjInLstCache(objKcCrsType: clsKcCrsTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
const obj = arrKcCrsTypeObjLstCache.find(x => x.courseTypeName == objKcCrsType.courseTypeName);
if (obj != null)
{
objKcCrsType.idCourseType = obj.idCourseType;
ObjectAssign( obj, objKcCrsType);
}
else
{
arrKcCrsTypeObjLstCache.push(objKcCrsType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, kcCrsType_ConstructorName, strThisFuncName);
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
export  function KcCrsType_SortFunDefa(a:clsKcCrsTypeEN , b:clsKcCrsTypeEN): number 
{
return a.idCourseType.localeCompare(b.idCourseType);
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
export  function KcCrsType_SortFunDefa2Fld(a:clsKcCrsTypeEN , b:clsKcCrsTypeEN): number 
{
if (a.courseTypeId == b.courseTypeId) return a.courseTypeName.localeCompare(b.courseTypeName);
else return a.courseTypeId.localeCompare(b.courseTypeId);
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
export  function KcCrsType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsKcCrsTypeEN.con_IdCourseType:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
return a.idCourseType.localeCompare(b.idCourseType);
}
case clsKcCrsTypeEN.con_CourseTypeId:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
return a.courseTypeId.localeCompare(b.courseTypeId);
}
case clsKcCrsTypeEN.con_CourseTypeName:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
return a.courseTypeName.localeCompare(b.courseTypeName);
}
case clsKcCrsTypeEN.con_IsMinor:
return (a: clsKcCrsTypeEN) => {
if (a.isMinor == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_ReqOrElect:
return (a: clsKcCrsTypeEN) => {
if (a.reqOrElect == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_PointEnabled:
return (a: clsKcCrsTypeEN) => {
if (a.pointEnabled == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IdCrsTypeAdminType:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
if (a.idCrsTypeAdminType == null) return -1;
if (b.idCrsTypeAdminType == null) return 1;
return a.idCrsTypeAdminType.localeCompare(b.idCrsTypeAdminType);
}
case clsKcCrsTypeEN.con_IsCrtlScorePropor:
return (a: clsKcCrsTypeEN) => {
if (a.isCrtlScorePropor == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IsCrtlEduclsMember:
return (a: clsKcCrsTypeEN) => {
if (a.isCrtlEduclsMember == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IsElectiveType:
return (a: clsKcCrsTypeEN) => {
if (a.isElectiveType == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IsOccupyResources:
return (a: clsKcCrsTypeEN) => {
if (a.isOccupyResources == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IsDistinguishDegree:
return (a: clsKcCrsTypeEN) => {
if (a.isDistinguishDegree == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_ModifyUserId:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
if (a.modifyUserId == null) return -1;
if (b.modifyUserId == null) return 1;
return a.modifyUserId.localeCompare(b.modifyUserId);
}
case clsKcCrsTypeEN.con_ModifyDate:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
if (a.modifyDate == null) return -1;
if (b.modifyDate == null) return 1;
return a.modifyDate.localeCompare(b.modifyDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KcCrsType]中不存在!(in ${ kcCrsType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsKcCrsTypeEN.con_IdCourseType:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
return b.idCourseType.localeCompare(a.idCourseType);
}
case clsKcCrsTypeEN.con_CourseTypeId:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
return b.courseTypeId.localeCompare(a.courseTypeId);
}
case clsKcCrsTypeEN.con_CourseTypeName:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
return b.courseTypeName.localeCompare(a.courseTypeName);
}
case clsKcCrsTypeEN.con_IsMinor:
return (b: clsKcCrsTypeEN) => {
if (b.isMinor == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_ReqOrElect:
return (b: clsKcCrsTypeEN) => {
if (b.reqOrElect == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_PointEnabled:
return (b: clsKcCrsTypeEN) => {
if (b.pointEnabled == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IdCrsTypeAdminType:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
if (b.idCrsTypeAdminType == null) return -1;
if (a.idCrsTypeAdminType == null) return 1;
return b.idCrsTypeAdminType.localeCompare(a.idCrsTypeAdminType);
}
case clsKcCrsTypeEN.con_IsCrtlScorePropor:
return (b: clsKcCrsTypeEN) => {
if (b.isCrtlScorePropor == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IsCrtlEduclsMember:
return (b: clsKcCrsTypeEN) => {
if (b.isCrtlEduclsMember == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IsElectiveType:
return (b: clsKcCrsTypeEN) => {
if (b.isElectiveType == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IsOccupyResources:
return (b: clsKcCrsTypeEN) => {
if (b.isOccupyResources == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_IsDistinguishDegree:
return (b: clsKcCrsTypeEN) => {
if (b.isDistinguishDegree == true) return 1;
else return -1
}
case clsKcCrsTypeEN.con_ModifyUserId:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
if (b.modifyUserId == null) return -1;
if (a.modifyUserId == null) return 1;
return b.modifyUserId.localeCompare(a.modifyUserId);
}
case clsKcCrsTypeEN.con_ModifyDate:
return (a: clsKcCrsTypeEN, b: clsKcCrsTypeEN) => {
if (b.modifyDate == null) return -1;
if (a.modifyDate == null) return 1;
return b.modifyDate.localeCompare(a.modifyDate);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KcCrsType]中不存在!(in ${ kcCrsType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdCourseType:所给的关键字
 * @returns 对象
*/
export  async function KcCrsType_GetNameByIdCourseTypeCache(strIdCourseType: string) {

if (IsNullOrEmpty(strIdCourseType) == true)
{
  const strMsg = Format("参数:[strIdCourseType]不能为空!(In clsKcCrsTypeWApi.GetNameByIdCourseTypeCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCourseType.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdCourseType]的长度:[{0}]不正确!(clsKcCrsTypeWApi.GetNameByIdCourseTypeCache)", strIdCourseType.length);
console.error(strMsg);
throw (strMsg);
}
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
if (arrKcCrsTypeObjLstCache == null) return "";
try
{
const arrKcCrsTypeSel = arrKcCrsTypeObjLstCache.filter(x => 
 x.idCourseType == strIdCourseType );
let objKcCrsType: clsKcCrsTypeEN;
if (arrKcCrsTypeSel.length > 0)
{
objKcCrsType = arrKcCrsTypeSel[0];
return objKcCrsType.courseTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdCourseType);
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
export  async function KcCrsType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsKcCrsTypeEN.con_IdCourseType:
return (obj: clsKcCrsTypeEN) => {
return obj.idCourseType === value;
}
case clsKcCrsTypeEN.con_CourseTypeId:
return (obj: clsKcCrsTypeEN) => {
return obj.courseTypeId === value;
}
case clsKcCrsTypeEN.con_CourseTypeName:
return (obj: clsKcCrsTypeEN) => {
return obj.courseTypeName === value;
}
case clsKcCrsTypeEN.con_IsMinor:
return (obj: clsKcCrsTypeEN) => {
return obj.isMinor === value;
}
case clsKcCrsTypeEN.con_ReqOrElect:
return (obj: clsKcCrsTypeEN) => {
return obj.reqOrElect === value;
}
case clsKcCrsTypeEN.con_PointEnabled:
return (obj: clsKcCrsTypeEN) => {
return obj.pointEnabled === value;
}
case clsKcCrsTypeEN.con_IdCrsTypeAdminType:
return (obj: clsKcCrsTypeEN) => {
return obj.idCrsTypeAdminType === value;
}
case clsKcCrsTypeEN.con_IsCrtlScorePropor:
return (obj: clsKcCrsTypeEN) => {
return obj.isCrtlScorePropor === value;
}
case clsKcCrsTypeEN.con_IsCrtlEduclsMember:
return (obj: clsKcCrsTypeEN) => {
return obj.isCrtlEduclsMember === value;
}
case clsKcCrsTypeEN.con_IsElectiveType:
return (obj: clsKcCrsTypeEN) => {
return obj.isElectiveType === value;
}
case clsKcCrsTypeEN.con_IsOccupyResources:
return (obj: clsKcCrsTypeEN) => {
return obj.isOccupyResources === value;
}
case clsKcCrsTypeEN.con_IsDistinguishDegree:
return (obj: clsKcCrsTypeEN) => {
return obj.isDistinguishDegree === value;
}
case clsKcCrsTypeEN.con_ModifyUserId:
return (obj: clsKcCrsTypeEN) => {
return obj.modifyUserId === value;
}
case clsKcCrsTypeEN.con_ModifyDate:
return (obj: clsKcCrsTypeEN) => {
return obj.modifyDate === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KcCrsType]中不存在!(in ${ kcCrsType_ConstructorName}.${ strThisFuncName})`;
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
export  async function KcCrsType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsKcCrsTypeEN.con_IdCourseType)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsKcCrsTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsKcCrsTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdCourseType = strInValue;
if (IsNullOrEmpty(strIdCourseType) == true)
{
return "";
}
const objKcCrsType = await KcCrsType_GetObjByIdCourseTypeCache(strIdCourseType );
if (objKcCrsType == null) return "";
if (objKcCrsType.GetFldValue(strOutFldName) == null) return "";
return objKcCrsType.GetFldValue(strOutFldName).toString();
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
export  async function KcCrsType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsKcCrsTypeEN.con_IdCourseType)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrKcCrsType = await KcCrsType_GetObjLstCache();
if (arrKcCrsType == null) return [];
let arrKcCrsTypeSel = arrKcCrsType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrKcCrsTypeSel.length == 0) return [];
return arrKcCrsTypeSel.map(x=>x.idCourseType);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KcCrsType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetFirstObjAsync(strWhereCond: string): Promise<clsKcCrsTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const objKcCrsType = KcCrsType_GetObjFromJsonObj(returnObj);
return objKcCrsType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKcCrsTypeEN._CurrTabName;
if (IsNullOrEmpty(clsKcCrsTypeEN.WhereFormat) == false)
{
strWhereCond = clsKcCrsTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsKcCrsTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKcCrsTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrKcCrsTypeExObjLstCache: Array<clsKcCrsTypeEN> = CacheHelper.Get(strKey);
const arrKcCrsTypeObjLstT = KcCrsType_GetObjLstByJSONObjLst(arrKcCrsTypeExObjLstCache);
return arrKcCrsTypeObjLstT;
}
try
{
const arrKcCrsTypeExObjLst = await KcCrsType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrKcCrsTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKcCrsTypeExObjLst.length);
console.log(strInfo);
return arrKcCrsTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kcCrsType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcCrsType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKcCrsTypeEN._CurrTabName;
if (IsNullOrEmpty(clsKcCrsTypeEN.WhereFormat) == false)
{
strWhereCond = clsKcCrsTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsKcCrsTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKcCrsTypeEN.CacheAddiCondition);
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
const arrKcCrsTypeExObjLstCache: Array<clsKcCrsTypeEN> = JSON.parse(strTempObjLst);
const arrKcCrsTypeObjLstT = KcCrsType_GetObjLstByJSONObjLst(arrKcCrsTypeExObjLstCache);
return arrKcCrsTypeObjLstT;
}
try
{
const arrKcCrsTypeExObjLst = await KcCrsType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrKcCrsTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKcCrsTypeExObjLst.length);
console.log(strInfo);
return arrKcCrsTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kcCrsType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcCrsType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKcCrsTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrKcCrsTypeObjLstCache: Array<clsKcCrsTypeEN> = JSON.parse(strTempObjLst);
return arrKcCrsTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function KcCrsType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsKcCrsTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcCrsType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcCrsType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKcCrsTypeEN._CurrTabName;
if (IsNullOrEmpty(clsKcCrsTypeEN.WhereFormat) == false)
{
strWhereCond = clsKcCrsTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsKcCrsTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKcCrsTypeEN.CacheAddiCondition);
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
const arrKcCrsTypeExObjLstCache: Array<clsKcCrsTypeEN> = JSON.parse(strTempObjLst);
const arrKcCrsTypeObjLstT = KcCrsType_GetObjLstByJSONObjLst(arrKcCrsTypeExObjLstCache);
return arrKcCrsTypeObjLstT;
}
try
{
const arrKcCrsTypeExObjLst = await KcCrsType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrKcCrsTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKcCrsTypeExObjLst.length);
console.log(strInfo);
return arrKcCrsTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kcCrsType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcCrsType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKcCrsTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrKcCrsTypeObjLstCache: Array<clsKcCrsTypeEN> = JSON.parse(strTempObjLst);
return arrKcCrsTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcCrsType_GetObjLstCache(): Promise<Array<clsKcCrsTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrKcCrsTypeObjLstCache;
switch (clsKcCrsTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstClientCache();
break;
default:
arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstClientCache();
break;
}
return arrKcCrsTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KcCrsType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrKcCrsTypeObjLstCache;
switch (clsKcCrsTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrKcCrsTypeObjLstCache = null;
break;
default:
arrKcCrsTypeObjLstCache = null;
break;
}
return arrKcCrsTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdCourseTypeCond:条件对象
 * @returns 对象列表子集
*/
export  async function KcCrsType_GetSubObjLstCache(objKcCrsTypeCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
let arrKcCrsTypeSel = arrKcCrsTypeObjLstCache;
if (objKcCrsTypeCond.GetConditions().length == 0) return arrKcCrsTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objKcCrsTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKcCrsTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objKcCrsTypeCond), kcCrsType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKcCrsTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdCourseType:关键字列表
 * @returns 对象列表
 **/
export  async function KcCrsType_GetObjLstByIdCourseTypeLstAsync(arrIdCourseType: Array<string>): Promise<Array<clsKcCrsTypeEN>>  
{
const strThisFuncName = "GetObjLstByIdCourseTypeLstAsync";
const strAction = "GetObjLstByIdCourseTypeLst";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdCourseType, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcCrsType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcCrsType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param arrstrIdCourseTypeLst:关键字列表
 * @returns 对象列表
*/
export  async function KcCrsType_GetObjLstByIdCourseTypeLstCache(arrIdCourseTypeLst: Array<string> ) {
const strThisFuncName = "GetObjLstByIdCourseTypeLstCache";
try
{
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
const arrKcCrsTypeSel = arrKcCrsTypeObjLstCache.filter(x => arrIdCourseTypeLst.indexOf(x.idCourseType)>-1);
return arrKcCrsTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdCourseTypeLst.join(","), kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsKcCrsTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcCrsType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcCrsType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsKcCrsTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcCrsType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcCrsType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsKcCrsTypeEN>();
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
if (arrKcCrsTypeObjLstCache.length == 0) return arrKcCrsTypeObjLstCache;
let arrKcCrsTypeSel = arrKcCrsTypeObjLstCache;
const objKcCrsTypeCond = objPagerPara.conditionCollection;
if (objKcCrsTypeCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return;
}
//console.log("clsKcCrsTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objKcCrsTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKcCrsTypeSel.length == 0) return arrKcCrsTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrKcCrsTypeSel = arrKcCrsTypeSel.sort(KcCrsType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrKcCrsTypeSel = arrKcCrsTypeSel.sort(objPagerPara.sortFun);
}
arrKcCrsTypeSel = arrKcCrsTypeSel.slice(intStart, intEnd);     
return arrKcCrsTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, kcCrsType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKcCrsTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function KcCrsType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsKcCrsTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsKcCrsTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kcCrsType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KcCrsType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param strIdCourseType:关键字
 * @returns 获取删除的结果
 **/
export  async function KcCrsType_DelRecordAsync(strIdCourseType: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdCourseType);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param arrIdCourseType:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function KcCrsType_DelKcCrsTypesAsync(arrIdCourseType: Array<string>): Promise<number> 
{
const strThisFuncName = "DelKcCrsTypesAsync";
const strAction = "DelKcCrsTypes";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdCourseType, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_DelKcCrsTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelKcCrsTypesByCondAsync";
const strAction = "DelKcCrsTypesByCond";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param objKcCrsTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KcCrsType_AddNewRecordAsync(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objKcCrsTypeEN);
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcCrsTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param objKcCrsTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KcCrsType_AddNewRecordWithMaxIdAsync(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcCrsTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_AddNewObjSave(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
KcCrsType_CheckPropertyNew(objKcCrsTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ kcCrsType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await KcCrsType_CheckUniCond4Add(objKcCrsTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await KcCrsType_AddNewRecordWithMaxIdAsync(objKcCrsTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
KcCrsType_ReFreshCache();
}
else
{
const strInfo = `添加[课程类型(KcCrsType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ kcCrsType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function KcCrsType_CheckUniCond4Add(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<boolean>{
const strUniquenessCondition = KcCrsType_GetUniCondStr(objKcCrsTypeEN);
const bolIsExistCondition = await KcCrsType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KcCrsType_CheckUniCond4Update(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<boolean>{
const strUniquenessCondition = KcCrsType_GetUniCondStr4Update(objKcCrsTypeEN);
const bolIsExistCondition = await KcCrsType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KcCrsType_UpdateObjSave(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objKcCrsTypeEN.sfUpdFldSetStr = objKcCrsTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objKcCrsTypeEN.idCourseType == "" || objKcCrsTypeEN.idCourseType == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
KcCrsType_CheckProperty4Update(objKcCrsTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ kcCrsType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await KcCrsType_CheckUniCond4Update(objKcCrsTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await KcCrsType_UpdateRecordAsync(objKcCrsTypeEN);
if (returnBool == true)
{
KcCrsType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ kcCrsType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objKcCrsTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function KcCrsType_AddNewRecordWithReturnKeyAsync(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcCrsTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param objKcCrsTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KcCrsType_UpdateRecordAsync(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objKcCrsTypeEN.sfUpdFldSetStr === undefined || objKcCrsTypeEN.sfUpdFldSetStr === null || objKcCrsTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKcCrsTypeEN.idCourseType);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcCrsTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param objKcCrsTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KcCrsType_EditRecordExAsync(objKcCrsTypeEN: clsKcCrsTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objKcCrsTypeEN.sfUpdFldSetStr === undefined || objKcCrsTypeEN.sfUpdFldSetStr === null || objKcCrsTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKcCrsTypeEN.idCourseType);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcCrsTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param objKcCrsTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KcCrsType_UpdateWithConditionAsync(objKcCrsTypeEN: clsKcCrsTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objKcCrsTypeEN.sfUpdFldSetStr === undefined || objKcCrsTypeEN.sfUpdFldSetStr === null || objKcCrsTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKcCrsTypeEN.idCourseType);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);
objKcCrsTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKcCrsTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param objstrIdCourseTypeCond:条件对象
 * @returns 对象列表子集
*/
export  async function KcCrsType_IsExistRecordCache(objKcCrsTypeCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
if (arrKcCrsTypeObjLstCache == null) return false;
let arrKcCrsTypeSel = arrKcCrsTypeObjLstCache;
if (objKcCrsTypeCond.GetConditions().length == 0) return arrKcCrsTypeSel.length>0?true:false;
try {
for (const objCondition of objKcCrsTypeCond.GetConditions()) {
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
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKcCrsTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objKcCrsTypeCond), kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param strIdCourseType:所给的关键字
 * @returns 对象
*/
export  async function KcCrsType_IsExistCache(strIdCourseType:string) {
const strThisFuncName = "IsExistCache";
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
if (arrKcCrsTypeObjLstCache == null) return false;
try
{
const arrKcCrsTypeSel = arrKcCrsTypeObjLstCache.filter(x => x.idCourseType == strIdCourseType);
if (arrKcCrsTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdCourseType, kcCrsType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdCourseType:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function KcCrsType_IsExistAsync(strIdCourseType: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCourseType
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
 * @param objKcCrsTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function KcCrsType_GetRecCountByCondCache(objKcCrsTypeCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrKcCrsTypeObjLstCache = await KcCrsType_GetObjLstCache();
if (arrKcCrsTypeObjLstCache == null) return 0;
let arrKcCrsTypeSel = arrKcCrsTypeObjLstCache;
if (objKcCrsTypeCond.GetConditions().length == 0) return arrKcCrsTypeSel.length;
try {
for (const objCondition of objKcCrsTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKcCrsTypeSel = arrKcCrsTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKcCrsTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objKcCrsTypeCond), kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  async function KcCrsType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(kcCrsType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kcCrsType_ConstructorName, strThisFuncName);
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
export  function KcCrsType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function KcCrsType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsKcCrsTypeEN._CurrTabName;
switch (clsKcCrsTypeEN.CacheModeId)
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
clsKcCrsTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function KcCrsType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsKcCrsTypeEN._CurrTabName;
switch (clsKcCrsTypeEN.CacheModeId)
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
clsKcCrsTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function KcCrsType_GetLastRefreshTime():string
{
if (clsKcCrsTypeEN._RefreshTimeLst.length == 0) return "";
return clsKcCrsTypeEN._RefreshTimeLst[clsKcCrsTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KcCrsType_BindDdl_id_CourseTypeInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_CourseTypeInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_CourseTypeInDivCache");
const arrObjLstSel = await KcCrsType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsKcCrsTypeEN.con_IdCourseType, clsKcCrsTypeEN.con_CourseTypeName, "课程类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KcCrsType_GetArrKcCrsType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_CourseTypeInDivCache");
const arrKcCrsType = new Array<clsKcCrsTypeEN>();
const arrObjLstSel = await KcCrsType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsKcCrsTypeEN();
obj0.idCourseType = '0';
obj0.courseTypeName = '选课程类型...';
arrKcCrsType.push(obj0);
arrObjLstSel.forEach(x => arrKcCrsType.push(x));
return arrKcCrsType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KcCrsType_CheckPropertyNew(pobjKcCrsTypeEN: clsKcCrsTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeId) === true 
 || pobjKcCrsTypeEN.courseTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程类型ID]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[课程类型名称]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null === pobjKcCrsTypeEN.isMinor 
 || pobjKcCrsTypeEN.isMinor != null && pobjKcCrsTypeEN.isMinor.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否副修]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null === pobjKcCrsTypeEN.reqOrElect 
 || pobjKcCrsTypeEN.reqOrElect != null && pobjKcCrsTypeEN.reqOrElect.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否必修]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null === pobjKcCrsTypeEN.pointEnabled 
 || pobjKcCrsTypeEN.pointEnabled != null && pobjKcCrsTypeEN.pointEnabled.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否计学分]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null === pobjKcCrsTypeEN.isCrtlScorePropor 
 || pobjKcCrsTypeEN.isCrtlScorePropor != null && pobjKcCrsTypeEN.isCrtlScorePropor.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否控制成绩比例]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null === pobjKcCrsTypeEN.isCrtlEduclsMember 
 || pobjKcCrsTypeEN.isCrtlEduclsMember != null && pobjKcCrsTypeEN.isCrtlEduclsMember.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否控制教学班人数]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null === pobjKcCrsTypeEN.isElectiveType 
 || pobjKcCrsTypeEN.isElectiveType != null && pobjKcCrsTypeEN.isElectiveType.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否可选类型]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null === pobjKcCrsTypeEN.isOccupyResources 
 || pobjKcCrsTypeEN.isOccupyResources != null && pobjKcCrsTypeEN.isOccupyResources.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否占用资源]不能为空(In 课程类型)!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKcCrsTypeEN.idCourseType) == false && GetStrLen(pobjKcCrsTypeEN.idCourseType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[课程类型流水号(idCourseType)]的长度不能超过4(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.idCourseType}(clsKcCrsTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeId) == false && GetStrLen(pobjKcCrsTypeEN.courseTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[课程类型ID(courseTypeId)]的长度不能超过4(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.courseTypeId}(clsKcCrsTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeName) == false && GetStrLen(pobjKcCrsTypeEN.courseTypeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[课程类型名称(courseTypeName)]的长度不能超过30(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.courseTypeName}(clsKcCrsTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.idCrsTypeAdminType) == false && GetStrLen(pobjKcCrsTypeEN.idCrsTypeAdminType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[课程类型管理类型流水号(idCrsTypeAdminType)]的长度不能超过4(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.idCrsTypeAdminType}(clsKcCrsTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.modifyUserId) == false && GetStrLen(pobjKcCrsTypeEN.modifyUserId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.modifyUserId}(clsKcCrsTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.modifyDate) == false && GetStrLen(pobjKcCrsTypeEN.modifyDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.modifyDate}(clsKcCrsTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKcCrsTypeEN.idCourseType) == false && undefined !== pobjKcCrsTypeEN.idCourseType && tzDataType.isString(pobjKcCrsTypeEN.idCourseType) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程类型流水号(idCourseType)]的值:[${pobjKcCrsTypeEN.idCourseType}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeId) == false && undefined !== pobjKcCrsTypeEN.courseTypeId && tzDataType.isString(pobjKcCrsTypeEN.courseTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程类型ID(courseTypeId)]的值:[${pobjKcCrsTypeEN.courseTypeId}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeName) == false && undefined !== pobjKcCrsTypeEN.courseTypeName && tzDataType.isString(pobjKcCrsTypeEN.courseTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程类型名称(courseTypeName)]的值:[${pobjKcCrsTypeEN.courseTypeName}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null != pobjKcCrsTypeEN.isMinor && undefined !== pobjKcCrsTypeEN.isMinor && tzDataType.isBoolean(pobjKcCrsTypeEN.isMinor) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否副修(isMinor)]的值:[${pobjKcCrsTypeEN.isMinor}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null != pobjKcCrsTypeEN.reqOrElect && undefined !== pobjKcCrsTypeEN.reqOrElect && tzDataType.isBoolean(pobjKcCrsTypeEN.reqOrElect) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否必修(reqOrElect)]的值:[${pobjKcCrsTypeEN.reqOrElect}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null != pobjKcCrsTypeEN.pointEnabled && undefined !== pobjKcCrsTypeEN.pointEnabled && tzDataType.isBoolean(pobjKcCrsTypeEN.pointEnabled) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否计学分(pointEnabled)]的值:[${pobjKcCrsTypeEN.pointEnabled}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.idCrsTypeAdminType) == false && undefined !== pobjKcCrsTypeEN.idCrsTypeAdminType && tzDataType.isString(pobjKcCrsTypeEN.idCrsTypeAdminType) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程类型管理类型流水号(idCrsTypeAdminType)]的值:[${pobjKcCrsTypeEN.idCrsTypeAdminType}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null != pobjKcCrsTypeEN.isCrtlScorePropor && undefined !== pobjKcCrsTypeEN.isCrtlScorePropor && tzDataType.isBoolean(pobjKcCrsTypeEN.isCrtlScorePropor) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否控制成绩比例(isCrtlScorePropor)]的值:[${pobjKcCrsTypeEN.isCrtlScorePropor}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null != pobjKcCrsTypeEN.isCrtlEduclsMember && undefined !== pobjKcCrsTypeEN.isCrtlEduclsMember && tzDataType.isBoolean(pobjKcCrsTypeEN.isCrtlEduclsMember) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否控制教学班人数(isCrtlEduclsMember)]的值:[${pobjKcCrsTypeEN.isCrtlEduclsMember}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null != pobjKcCrsTypeEN.isElectiveType && undefined !== pobjKcCrsTypeEN.isElectiveType && tzDataType.isBoolean(pobjKcCrsTypeEN.isElectiveType) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否可选类型(isElectiveType)]的值:[${pobjKcCrsTypeEN.isElectiveType}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null != pobjKcCrsTypeEN.isOccupyResources && undefined !== pobjKcCrsTypeEN.isOccupyResources && tzDataType.isBoolean(pobjKcCrsTypeEN.isOccupyResources) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否占用资源(isOccupyResources)]的值:[${pobjKcCrsTypeEN.isOccupyResources}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (null != pobjKcCrsTypeEN.isDistinguishDegree && undefined !== pobjKcCrsTypeEN.isDistinguishDegree && tzDataType.isBoolean(pobjKcCrsTypeEN.isDistinguishDegree) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否区分学位(isDistinguishDegree)]的值:[${pobjKcCrsTypeEN.isDistinguishDegree}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.modifyUserId) == false && undefined !== pobjKcCrsTypeEN.modifyUserId && tzDataType.isString(pobjKcCrsTypeEN.modifyUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(modifyUserId)]的值:[${pobjKcCrsTypeEN.modifyUserId}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.modifyDate) == false && undefined !== pobjKcCrsTypeEN.modifyDate && tzDataType.isString(pobjKcCrsTypeEN.modifyDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(modifyDate)]的值:[${pobjKcCrsTypeEN.modifyDate}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KcCrsType_CheckProperty4Update(pobjKcCrsTypeEN: clsKcCrsTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKcCrsTypeEN.idCourseType) == false && GetStrLen(pobjKcCrsTypeEN.idCourseType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[课程类型流水号(idCourseType)]的长度不能超过4(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.idCourseType}(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeId) == false && GetStrLen(pobjKcCrsTypeEN.courseTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[课程类型ID(courseTypeId)]的长度不能超过4(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.courseTypeId}(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeName) == false && GetStrLen(pobjKcCrsTypeEN.courseTypeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[课程类型名称(courseTypeName)]的长度不能超过30(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.courseTypeName}(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.idCrsTypeAdminType) == false && GetStrLen(pobjKcCrsTypeEN.idCrsTypeAdminType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[课程类型管理类型流水号(idCrsTypeAdminType)]的长度不能超过4(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.idCrsTypeAdminType}(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.modifyUserId) == false && GetStrLen(pobjKcCrsTypeEN.modifyUserId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.modifyUserId}(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.modifyDate) == false && GetStrLen(pobjKcCrsTypeEN.modifyDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 课程类型(KcCrsType))!值:${pobjKcCrsTypeEN.modifyDate}(clsKcCrsTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKcCrsTypeEN.idCourseType) == false && undefined !== pobjKcCrsTypeEN.idCourseType && tzDataType.isString(pobjKcCrsTypeEN.idCourseType) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程类型流水号(idCourseType)]的值:[${pobjKcCrsTypeEN.idCourseType}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeId) == false && undefined !== pobjKcCrsTypeEN.courseTypeId && tzDataType.isString(pobjKcCrsTypeEN.courseTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程类型ID(courseTypeId)]的值:[${pobjKcCrsTypeEN.courseTypeId}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.courseTypeName) == false && undefined !== pobjKcCrsTypeEN.courseTypeName && tzDataType.isString(pobjKcCrsTypeEN.courseTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程类型名称(courseTypeName)]的值:[${pobjKcCrsTypeEN.courseTypeName}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (null != pobjKcCrsTypeEN.isMinor && undefined !== pobjKcCrsTypeEN.isMinor && tzDataType.isBoolean(pobjKcCrsTypeEN.isMinor) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否副修(isMinor)]的值:[${pobjKcCrsTypeEN.isMinor}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (null != pobjKcCrsTypeEN.reqOrElect && undefined !== pobjKcCrsTypeEN.reqOrElect && tzDataType.isBoolean(pobjKcCrsTypeEN.reqOrElect) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否必修(reqOrElect)]的值:[${pobjKcCrsTypeEN.reqOrElect}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (null != pobjKcCrsTypeEN.pointEnabled && undefined !== pobjKcCrsTypeEN.pointEnabled && tzDataType.isBoolean(pobjKcCrsTypeEN.pointEnabled) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否计学分(pointEnabled)]的值:[${pobjKcCrsTypeEN.pointEnabled}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.idCrsTypeAdminType) == false && undefined !== pobjKcCrsTypeEN.idCrsTypeAdminType && tzDataType.isString(pobjKcCrsTypeEN.idCrsTypeAdminType) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程类型管理类型流水号(idCrsTypeAdminType)]的值:[${pobjKcCrsTypeEN.idCrsTypeAdminType}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (null != pobjKcCrsTypeEN.isCrtlScorePropor && undefined !== pobjKcCrsTypeEN.isCrtlScorePropor && tzDataType.isBoolean(pobjKcCrsTypeEN.isCrtlScorePropor) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否控制成绩比例(isCrtlScorePropor)]的值:[${pobjKcCrsTypeEN.isCrtlScorePropor}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (null != pobjKcCrsTypeEN.isCrtlEduclsMember && undefined !== pobjKcCrsTypeEN.isCrtlEduclsMember && tzDataType.isBoolean(pobjKcCrsTypeEN.isCrtlEduclsMember) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否控制教学班人数(isCrtlEduclsMember)]的值:[${pobjKcCrsTypeEN.isCrtlEduclsMember}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (null != pobjKcCrsTypeEN.isElectiveType && undefined !== pobjKcCrsTypeEN.isElectiveType && tzDataType.isBoolean(pobjKcCrsTypeEN.isElectiveType) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否可选类型(isElectiveType)]的值:[${pobjKcCrsTypeEN.isElectiveType}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (null != pobjKcCrsTypeEN.isOccupyResources && undefined !== pobjKcCrsTypeEN.isOccupyResources && tzDataType.isBoolean(pobjKcCrsTypeEN.isOccupyResources) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否占用资源(isOccupyResources)]的值:[${pobjKcCrsTypeEN.isOccupyResources}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (null != pobjKcCrsTypeEN.isDistinguishDegree && undefined !== pobjKcCrsTypeEN.isDistinguishDegree && tzDataType.isBoolean(pobjKcCrsTypeEN.isDistinguishDegree) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否区分学位(isDistinguishDegree)]的值:[${pobjKcCrsTypeEN.isDistinguishDegree}], 非法,应该为布尔型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.modifyUserId) == false && undefined !== pobjKcCrsTypeEN.modifyUserId && tzDataType.isString(pobjKcCrsTypeEN.modifyUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(modifyUserId)]的值:[${pobjKcCrsTypeEN.modifyUserId}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKcCrsTypeEN.modifyDate) == false && undefined !== pobjKcCrsTypeEN.modifyDate && tzDataType.isString(pobjKcCrsTypeEN.modifyDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(modifyDate)]的值:[${pobjKcCrsTypeEN.modifyDate}], 非法,应该为字符型(In 课程类型(KcCrsType))!(clsKcCrsTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
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
export  function KcCrsType_GetJSONStrByObj (pobjKcCrsTypeEN: clsKcCrsTypeEN): string
{
pobjKcCrsTypeEN.sfUpdFldSetStr = pobjKcCrsTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjKcCrsTypeEN);
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
export  function KcCrsType_GetObjLstByJSONStr (strJSON: string): Array<clsKcCrsTypeEN>
{
let arrKcCrsTypeObjLst = new Array<clsKcCrsTypeEN>();
if (strJSON === "")
{
return arrKcCrsTypeObjLst;
}
try
{
arrKcCrsTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrKcCrsTypeObjLst;
}
return arrKcCrsTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrKcCrsTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function KcCrsType_GetObjLstByJSONObjLst (arrKcCrsTypeObjLstS: Array<clsKcCrsTypeEN>): Array<clsKcCrsTypeEN>
{
const arrKcCrsTypeObjLst = new Array<clsKcCrsTypeEN>();
for (const objInFor of arrKcCrsTypeObjLstS) {
const obj1 = KcCrsType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrKcCrsTypeObjLst.push(obj1);
}
return arrKcCrsTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function KcCrsType_GetObjByJSONStr (strJSON: string): clsKcCrsTypeEN
{
let pobjKcCrsTypeEN = new clsKcCrsTypeEN();
if (strJSON === "")
{
return pobjKcCrsTypeEN;
}
try
{
pobjKcCrsTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjKcCrsTypeEN;
}
return pobjKcCrsTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function KcCrsType_GetCombineCondition(objKcCrsTypeCond: clsKcCrsTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_IdCourseType) == true)
{
const strComparisonOpIdCourseType:string = objKcCrsTypeCond.dicFldComparisonOp[clsKcCrsTypeEN.con_IdCourseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcCrsTypeEN.con_IdCourseType, objKcCrsTypeCond.idCourseType, strComparisonOpIdCourseType);
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_CourseTypeId) == true)
{
const strComparisonOpCourseTypeId:string = objKcCrsTypeCond.dicFldComparisonOp[clsKcCrsTypeEN.con_CourseTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcCrsTypeEN.con_CourseTypeId, objKcCrsTypeCond.courseTypeId, strComparisonOpCourseTypeId);
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_CourseTypeName) == true)
{
const strComparisonOpCourseTypeName:string = objKcCrsTypeCond.dicFldComparisonOp[clsKcCrsTypeEN.con_CourseTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcCrsTypeEN.con_CourseTypeName, objKcCrsTypeCond.courseTypeName, strComparisonOpCourseTypeName);
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_IsMinor) == true)
{
if (objKcCrsTypeCond.isMinor == true)
{
strWhereCond += Format(" And {0} = '1'", clsKcCrsTypeEN.con_IsMinor);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKcCrsTypeEN.con_IsMinor);
}
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_ReqOrElect) == true)
{
if (objKcCrsTypeCond.reqOrElect == true)
{
strWhereCond += Format(" And {0} = '1'", clsKcCrsTypeEN.con_ReqOrElect);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKcCrsTypeEN.con_ReqOrElect);
}
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_PointEnabled) == true)
{
if (objKcCrsTypeCond.pointEnabled == true)
{
strWhereCond += Format(" And {0} = '1'", clsKcCrsTypeEN.con_PointEnabled);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKcCrsTypeEN.con_PointEnabled);
}
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_IdCrsTypeAdminType) == true)
{
const strComparisonOpIdCrsTypeAdminType:string = objKcCrsTypeCond.dicFldComparisonOp[clsKcCrsTypeEN.con_IdCrsTypeAdminType];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcCrsTypeEN.con_IdCrsTypeAdminType, objKcCrsTypeCond.idCrsTypeAdminType, strComparisonOpIdCrsTypeAdminType);
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_IsCrtlScorePropor) == true)
{
if (objKcCrsTypeCond.isCrtlScorePropor == true)
{
strWhereCond += Format(" And {0} = '1'", clsKcCrsTypeEN.con_IsCrtlScorePropor);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKcCrsTypeEN.con_IsCrtlScorePropor);
}
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_IsCrtlEduclsMember) == true)
{
if (objKcCrsTypeCond.isCrtlEduclsMember == true)
{
strWhereCond += Format(" And {0} = '1'", clsKcCrsTypeEN.con_IsCrtlEduclsMember);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKcCrsTypeEN.con_IsCrtlEduclsMember);
}
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_IsElectiveType) == true)
{
if (objKcCrsTypeCond.isElectiveType == true)
{
strWhereCond += Format(" And {0} = '1'", clsKcCrsTypeEN.con_IsElectiveType);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKcCrsTypeEN.con_IsElectiveType);
}
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_IsOccupyResources) == true)
{
if (objKcCrsTypeCond.isOccupyResources == true)
{
strWhereCond += Format(" And {0} = '1'", clsKcCrsTypeEN.con_IsOccupyResources);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKcCrsTypeEN.con_IsOccupyResources);
}
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_IsDistinguishDegree) == true)
{
if (objKcCrsTypeCond.isDistinguishDegree == true)
{
strWhereCond += Format(" And {0} = '1'", clsKcCrsTypeEN.con_IsDistinguishDegree);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsKcCrsTypeEN.con_IsDistinguishDegree);
}
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_ModifyUserId) == true)
{
const strComparisonOpModifyUserId:string = objKcCrsTypeCond.dicFldComparisonOp[clsKcCrsTypeEN.con_ModifyUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcCrsTypeEN.con_ModifyUserId, objKcCrsTypeCond.modifyUserId, strComparisonOpModifyUserId);
}
if (Object.prototype.hasOwnProperty.call(objKcCrsTypeCond.dicFldComparisonOp, clsKcCrsTypeEN.con_ModifyDate) == true)
{
const strComparisonOpModifyDate:string = objKcCrsTypeCond.dicFldComparisonOp[clsKcCrsTypeEN.con_ModifyDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKcCrsTypeEN.con_ModifyDate, objKcCrsTypeCond.modifyDate, strComparisonOpModifyDate);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KcCrsType(课程类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseTypeName: 课程类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KcCrsType_GetUniCondStr(objKcCrsTypeEN: clsKcCrsTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseTypeName = '{0}'", objKcCrsTypeEN.courseTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KcCrsType(课程类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseTypeName: 课程类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KcCrsType_GetUniCondStr4Update(objKcCrsTypeEN: clsKcCrsTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and IdCourseType <> '{0}'", objKcCrsTypeEN.idCourseType);
 strWhereCond +=  Format(" and CourseTypeName = '{0}'", objKcCrsTypeEN.courseTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objKcCrsTypeENS:源对象
 * @param objKcCrsTypeENT:目标对象
*/
export  function KcCrsType_CopyObjTo(objKcCrsTypeENS: clsKcCrsTypeEN , objKcCrsTypeENT: clsKcCrsTypeEN ): void 
{
objKcCrsTypeENT.idCourseType = objKcCrsTypeENS.idCourseType; //课程类型流水号
objKcCrsTypeENT.courseTypeId = objKcCrsTypeENS.courseTypeId; //课程类型ID
objKcCrsTypeENT.courseTypeName = objKcCrsTypeENS.courseTypeName; //课程类型名称
objKcCrsTypeENT.isMinor = objKcCrsTypeENS.isMinor; //是否副修
objKcCrsTypeENT.reqOrElect = objKcCrsTypeENS.reqOrElect; //是否必修
objKcCrsTypeENT.pointEnabled = objKcCrsTypeENS.pointEnabled; //是否计学分
objKcCrsTypeENT.idCrsTypeAdminType = objKcCrsTypeENS.idCrsTypeAdminType; //课程类型管理类型流水号
objKcCrsTypeENT.isCrtlScorePropor = objKcCrsTypeENS.isCrtlScorePropor; //是否控制成绩比例
objKcCrsTypeENT.isCrtlEduclsMember = objKcCrsTypeENS.isCrtlEduclsMember; //是否控制教学班人数
objKcCrsTypeENT.isElectiveType = objKcCrsTypeENS.isElectiveType; //是否可选类型
objKcCrsTypeENT.isOccupyResources = objKcCrsTypeENS.isOccupyResources; //是否占用资源
objKcCrsTypeENT.isDistinguishDegree = objKcCrsTypeENS.isDistinguishDegree; //是否区分学位
objKcCrsTypeENT.modifyUserId = objKcCrsTypeENS.modifyUserId; //修改人
objKcCrsTypeENT.modifyDate = objKcCrsTypeENS.modifyDate; //修改日期
objKcCrsTypeENT.sfUpdFldSetStr = objKcCrsTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objKcCrsTypeENS:源对象
 * @param objKcCrsTypeENT:目标对象
*/
export  function KcCrsType_GetObjFromJsonObj(objKcCrsTypeENS: clsKcCrsTypeEN): clsKcCrsTypeEN 
{
 const objKcCrsTypeENT: clsKcCrsTypeEN = new clsKcCrsTypeEN();
ObjectAssign(objKcCrsTypeENT, objKcCrsTypeENS);
 return objKcCrsTypeENT;
}
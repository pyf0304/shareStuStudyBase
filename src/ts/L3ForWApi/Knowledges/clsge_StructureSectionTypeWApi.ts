
 /**
 * 类名:clsge_StructureSectionTypeWApi
 * 表名:ge_StructureSectionType(01120901)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:22
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
 * 节点类型(ge_StructureSectionType)
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
import { ge_StructureSectionTypeCache,isFuncMapCache } from "@/viewsShare/Knowledges/ge_StructureSectionTypeVueShare";
import { clsge_StructureSectionTypeENEx } from "@/ts/L0Entity/Knowledges/clsge_StructureSectionTypeENEx";
import { clsge_StructureSectionTypeEN } from "@/ts/L0Entity/Knowledges/clsge_StructureSectionTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_StructureSectionType_Controller = "ge_StructureSectionTypeApi";
 export const ge_StructureSectionType_ConstructorName = "ge_StructureSectionType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSectionTypeId:关键字
 * @returns 对象
 **/
export  async function ge_StructureSectionType_GetObjBySectionTypeIdAsync(strSectionTypeId: string): Promise<clsge_StructureSectionTypeEN|null>  
{
const strThisFuncName = "GetObjBySectionTypeIdAsync";

if (IsNullOrEmpty(strSectionTypeId) == true)
{
  const strMsg = Format("参数:[strSectionTypeId]不能为空!(In clsge_StructureSectionTypeWApi.GetObjBySectionTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strSectionTypeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strSectionTypeId]的长度:[{0}]不正确!(clsge_StructureSectionTypeWApi.GetObjBySectionTypeIdAsync)", strSectionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjBySectionTypeId";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSectionTypeId,
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
const objge_StructureSectionType = ge_StructureSectionType_GetObjFromJsonObj(returnObj);
return objge_StructureSectionType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param strSectionTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureSectionType_GetObjBySectionTypeIdlocalStorage(strSectionTypeId: string) {
const strThisFuncName = "GetObjBySectionTypeIdlocalStorage";

if (IsNullOrEmpty(strSectionTypeId) == true)
{
  const strMsg = Format("参数:[strSectionTypeId]不能为空!(In clsge_StructureSectionTypeWApi.GetObjBySectionTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strSectionTypeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strSectionTypeId]的长度:[{0}]不正确!(clsge_StructureSectionTypeWApi.GetObjBySectionTypeIdlocalStorage)", strSectionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_StructureSectionTypeEN._CurrTabName, strSectionTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_StructureSectionTypeCache: clsge_StructureSectionTypeEN = JSON.parse(strTempObj);
return objge_StructureSectionTypeCache;
}
try
{
const objge_StructureSectionType = await ge_StructureSectionType_GetObjBySectionTypeIdAsync(strSectionTypeId);
if (objge_StructureSectionType != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_StructureSectionType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_StructureSectionType;
}
return objge_StructureSectionType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSectionTypeId, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strSectionTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureSectionType_GetObjBySectionTypeIdCache(strSectionTypeId:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBySectionTypeIdCache";

if (IsNullOrEmpty(strSectionTypeId) == true)
{
  const strMsg = Format("参数:[strSectionTypeId]不能为空!(In clsge_StructureSectionTypeWApi.GetObjBySectionTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strSectionTypeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strSectionTypeId]的长度:[{0}]不正确!(clsge_StructureSectionTypeWApi.GetObjBySectionTypeIdCache)", strSectionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
try
{
const arrge_StructureSectionTypeSel = arrge_StructureSectionTypeObjLstCache.filter(x => 
 x.sectionTypeId == strSectionTypeId );
let objge_StructureSectionType: clsge_StructureSectionTypeEN;
if (arrge_StructureSectionTypeSel.length > 0)
{
objge_StructureSectionType = arrge_StructureSectionTypeSel[0];
return objge_StructureSectionType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_StructureSectionTypeConst = await ge_StructureSectionType_GetObjBySectionTypeIdAsync(strSectionTypeId);
if (objge_StructureSectionTypeConst != null)
{
ge_StructureSectionType_ReFreshThisCache(strCourseId);
return objge_StructureSectionTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSectionTypeId, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_StructureSectionType:所给的对象
 * @returns 对象
*/
export  async function ge_StructureSectionType_UpdateObjInLstCache(objge_StructureSectionType: clsge_StructureSectionTypeEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
const obj = arrge_StructureSectionTypeObjLstCache.find(x => x.sectionTypeName == objge_StructureSectionType.sectionTypeName);
if (obj != null)
{
objge_StructureSectionType.sectionTypeId = obj.sectionTypeId;
ObjectAssign( obj, objge_StructureSectionType);
}
else
{
arrge_StructureSectionTypeObjLstCache.push(objge_StructureSectionType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  function ge_StructureSectionType_SortFunDefa(a:clsge_StructureSectionTypeEN , b:clsge_StructureSectionTypeEN): number 
{
return a.sectionTypeId.localeCompare(b.sectionTypeId);
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
export  function ge_StructureSectionType_SortFunDefa2Fld(a:clsge_StructureSectionTypeEN , b:clsge_StructureSectionTypeEN): number 
{
if (a.sectionTypeName == b.sectionTypeName) return a.sectionTypeEnName.localeCompare(b.sectionTypeEnName);
else return a.sectionTypeName.localeCompare(b.sectionTypeName);
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
export  function ge_StructureSectionType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_StructureSectionTypeEN.con_SectionTypeId:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
return a.sectionTypeId.localeCompare(b.sectionTypeId);
}
case clsge_StructureSectionTypeEN.con_SectionTypeName:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
return a.sectionTypeName.localeCompare(b.sectionTypeName);
}
case clsge_StructureSectionTypeEN.con_SectionTypeEnName:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
if (a.sectionTypeEnName == null) return -1;
if (b.sectionTypeEnName == null) return 1;
return a.sectionTypeEnName.localeCompare(b.sectionTypeEnName);
}
case clsge_StructureSectionTypeEN.con_CourseId:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_StructureSectionTypeEN.con_UpdDate:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_StructureSectionTypeEN.con_UpdUser:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_StructureSectionTypeEN.con_Memo:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSectionType]中不存在!(in ${ ge_StructureSectionType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_StructureSectionTypeEN.con_SectionTypeId:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
return b.sectionTypeId.localeCompare(a.sectionTypeId);
}
case clsge_StructureSectionTypeEN.con_SectionTypeName:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
return b.sectionTypeName.localeCompare(a.sectionTypeName);
}
case clsge_StructureSectionTypeEN.con_SectionTypeEnName:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
if (b.sectionTypeEnName == null) return -1;
if (a.sectionTypeEnName == null) return 1;
return b.sectionTypeEnName.localeCompare(a.sectionTypeEnName);
}
case clsge_StructureSectionTypeEN.con_CourseId:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_StructureSectionTypeEN.con_UpdDate:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_StructureSectionTypeEN.con_UpdUser:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_StructureSectionTypeEN.con_Memo:
return (a: clsge_StructureSectionTypeEN, b: clsge_StructureSectionTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSectionType]中不存在!(in ${ ge_StructureSectionType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSectionTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureSectionType_GetNameBySectionTypeIdCache(strSectionTypeId: string,strCourseId: string) {

if (IsNullOrEmpty(strSectionTypeId) == true)
{
  const strMsg = Format("参数:[strSectionTypeId]不能为空!(In clsge_StructureSectionTypeWApi.GetNameBySectionTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strSectionTypeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strSectionTypeId]的长度:[{0}]不正确!(clsge_StructureSectionTypeWApi.GetNameBySectionTypeIdCache)", strSectionTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
if (arrge_StructureSectionTypeObjLstCache == null) return "";
try
{
const arrge_StructureSectionTypeSel = arrge_StructureSectionTypeObjLstCache.filter(x => 
 x.sectionTypeId == strSectionTypeId );
let objge_StructureSectionType: clsge_StructureSectionTypeEN;
if (arrge_StructureSectionTypeSel.length > 0)
{
objge_StructureSectionType = arrge_StructureSectionTypeSel[0];
return objge_StructureSectionType.sectionTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strSectionTypeId);
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
export  async function ge_StructureSectionType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_StructureSectionTypeEN.con_SectionTypeId:
return (obj: clsge_StructureSectionTypeEN) => {
return obj.sectionTypeId === value;
}
case clsge_StructureSectionTypeEN.con_SectionTypeName:
return (obj: clsge_StructureSectionTypeEN) => {
return obj.sectionTypeName === value;
}
case clsge_StructureSectionTypeEN.con_SectionTypeEnName:
return (obj: clsge_StructureSectionTypeEN) => {
return obj.sectionTypeEnName === value;
}
case clsge_StructureSectionTypeEN.con_CourseId:
return (obj: clsge_StructureSectionTypeEN) => {
return obj.courseId === value;
}
case clsge_StructureSectionTypeEN.con_UpdDate:
return (obj: clsge_StructureSectionTypeEN) => {
return obj.updDate === value;
}
case clsge_StructureSectionTypeEN.con_UpdUser:
return (obj: clsge_StructureSectionTypeEN) => {
return obj.updUser === value;
}
case clsge_StructureSectionTypeEN.con_Memo:
return (obj: clsge_StructureSectionTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSectionType]中不存在!(in ${ ge_StructureSectionType_ConstructorName}.${ strThisFuncName})`;
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function ge_StructureSectionType_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_StructureSectionTypeWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_StructureSectionTypeWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsge_StructureSectionTypeEN.con_SectionTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_StructureSectionTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_StructureSectionTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strSectionTypeId = strInValue;
if (IsNullOrEmpty(strSectionTypeId) == true)
{
return "";
}
const objge_StructureSectionType = await ge_StructureSectionType_GetObjBySectionTypeIdCache(strSectionTypeId , strCourseIdClassfy);
if (objge_StructureSectionType == null) return "";
if (objge_StructureSectionType.GetFldValue(strOutFldName) == null) return "";
return objge_StructureSectionType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function ge_StructureSectionType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_StructureSectionTypeWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_StructureSectionTypeWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsge_StructureSectionTypeEN.con_SectionTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_StructureSectionType = await ge_StructureSectionType_GetObjLstCache(strCourseIdClassfy);
if (arrge_StructureSectionType == null) return [];
let arrge_StructureSectionTypeSel = arrge_StructureSectionType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_StructureSectionTypeSel.length == 0) return [];
return arrge_StructureSectionTypeSel.map(x=>x.sectionTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureSectionType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetFirstObjAsync(strWhereCond: string): Promise<clsge_StructureSectionTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const objge_StructureSectionType = ge_StructureSectionType_GetObjFromJsonObj(returnObj);
return objge_StructureSectionType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureSectionTypeEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureSectionTypeEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureSectionTypeEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureSectionTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureSectionTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_StructureSectionTypeExObjLstCache: Array<clsge_StructureSectionTypeEN> = CacheHelper.Get(strKey);
const arrge_StructureSectionTypeObjLstT = ge_StructureSectionType_GetObjLstByJSONObjLst(arrge_StructureSectionTypeExObjLstCache);
return arrge_StructureSectionTypeObjLstT;
}
try
{
const arrge_StructureSectionTypeExObjLst = await ge_StructureSectionType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_StructureSectionTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureSectionTypeExObjLst.length);
console.log(strInfo);
return arrge_StructureSectionTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSectionType_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureSectionTypeEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureSectionTypeEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_StructureSectionTypeEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureSectionTypeEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureSectionTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureSectionTypeEN.CacheAddiCondition);
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
const arrge_StructureSectionTypeExObjLstCache: Array<clsge_StructureSectionTypeEN> = JSON.parse(strTempObjLst);
const arrge_StructureSectionTypeObjLstT = ge_StructureSectionType_GetObjLstByJSONObjLst(arrge_StructureSectionTypeExObjLstCache);
return arrge_StructureSectionTypeObjLstT;
}
try
{
const arrge_StructureSectionTypeExObjLst = await ge_StructureSectionType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_StructureSectionTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureSectionTypeExObjLst.length);
console.log(strInfo);
return arrge_StructureSectionTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSectionType_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_StructureSectionTypeEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_StructureSectionTypeObjLstCache: Array<clsge_StructureSectionTypeEN> = JSON.parse(strTempObjLst);
return arrge_StructureSectionTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_StructureSectionType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_StructureSectionTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSectionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureSectionTypeEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureSectionTypeEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_StructureSectionTypeEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureSectionTypeEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureSectionTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureSectionTypeEN.CacheAddiCondition);
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
const arrge_StructureSectionTypeExObjLstCache: Array<clsge_StructureSectionTypeEN> = JSON.parse(strTempObjLst);
const arrge_StructureSectionTypeObjLstT = ge_StructureSectionType_GetObjLstByJSONObjLst(arrge_StructureSectionTypeExObjLstCache);
return arrge_StructureSectionTypeObjLstT;
}
try
{
const arrge_StructureSectionTypeExObjLst = await ge_StructureSectionType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_StructureSectionTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureSectionTypeExObjLst.length);
console.log(strInfo);
return arrge_StructureSectionTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSectionType_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_StructureSectionTypeEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_StructureSectionTypeObjLstCache: Array<clsge_StructureSectionTypeEN> = JSON.parse(strTempObjLst);
return arrge_StructureSectionTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSectionType_GetObjLstCache(strCourseId: string): Promise<Array<clsge_StructureSectionTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureSectionTypeWApi.ge_StructureSectionType_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureSectionTypeWApi.ge_StructureSectionType_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrge_StructureSectionTypeObjLstCache;
switch (clsge_StructureSectionTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstClientCache(strCourseId);
break;
default:
arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstClientCache(strCourseId);
break;
}
return arrge_StructureSectionTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSectionType_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_StructureSectionTypeObjLstCache;
switch (clsge_StructureSectionTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrge_StructureSectionTypeObjLstCache = null;
break;
default:
arrge_StructureSectionTypeObjLstCache = null;
break;
}
return arrge_StructureSectionTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSectionTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_StructureSectionType_GetSubObjLstCache(objge_StructureSectionTypeCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
let arrge_StructureSectionTypeSel = arrge_StructureSectionTypeObjLstCache;
if (objge_StructureSectionTypeCond.GetConditions().length == 0) return arrge_StructureSectionTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objge_StructureSectionTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_StructureSectionTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_StructureSectionTypeCond), ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_StructureSectionTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSectionTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_StructureSectionType_GetObjLstBySectionTypeIdLstAsync(arrSectionTypeId: Array<string>): Promise<Array<clsge_StructureSectionTypeEN>>  
{
const strThisFuncName = "GetObjLstBySectionTypeIdLstAsync";
const strAction = "GetObjLstBySectionTypeIdLst";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSectionTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSectionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param arrstrSectionTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_StructureSectionType_GetObjLstBySectionTypeIdLstCache(arrSectionTypeIdLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstBySectionTypeIdLstCache";
try
{
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
const arrge_StructureSectionTypeSel = arrge_StructureSectionTypeObjLstCache.filter(x => arrSectionTypeIdLst.indexOf(x.sectionTypeId)>-1);
return arrge_StructureSectionTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrSectionTypeIdLst.join(","), ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_StructureSectionTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSectionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_StructureSectionTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSectionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StructureSectionTypeEN>();
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
if (arrge_StructureSectionTypeObjLstCache.length == 0) return arrge_StructureSectionTypeObjLstCache;
let arrge_StructureSectionTypeSel = arrge_StructureSectionTypeObjLstCache;
const objge_StructureSectionTypeCond = objPagerPara.conditionCollection;
if (objge_StructureSectionTypeCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clsge_StructureSectionTypeEN>();
}
//console.log("clsge_StructureSectionTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objge_StructureSectionTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_StructureSectionTypeSel.length == 0) return arrge_StructureSectionTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.sort(ge_StructureSectionType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.sort(objPagerPara.sortFun);
}
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.slice(intStart, intEnd);     
return arrge_StructureSectionTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_StructureSectionTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_StructureSectionType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_StructureSectionTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StructureSectionTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSectionType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param strSectionTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_StructureSectionType_DelRecordAsync(strSectionTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strSectionTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param arrSectionTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_StructureSectionType_Delge_StructureSectionTypesAsync(arrSectionTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_StructureSectionTypesAsync";
const strAction = "Delge_StructureSectionTypes";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSectionTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetObjExLstByPagerCache(objPagerPara: stuPagerPara , strCourseId:string):Promise<Array<clsge_StructureSectionTypeENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
 const objSortInfo = GetSortExpressInfo(objPagerPara);
const isFuncMapKey = `${ objSortInfo.SortFld}`;
const arrge_StructureSectionTypeObjLst = await ge_StructureSectionType_GetObjLstCache(strCourseId);
//从缓存中获取对象，如果缓存中不存在就扩展复制
const arrNewObj = new Array<clsge_StructureSectionTypeENEx>();
const arrge_StructureSectionTypeExObjLst = arrge_StructureSectionTypeObjLst.map((obj) => {
const cacheKey = `${ obj.sectionTypeId}_${ obj.courseId}`;
if (ge_StructureSectionTypeCache[cacheKey])
{
const oldObj = ge_StructureSectionTypeCache[cacheKey];
return oldObj;
}
else
{
const newObj = ge_StructureSectionType_CopyToEx(obj);
arrNewObj.push(newObj);
ge_StructureSectionTypeCache[cacheKey] = newObj;
return newObj;
}
});
for (const newObj of arrNewObj) {
for (const strFldName of Object.keys(isFuncMapCache)) {
await ge_StructureSectionType_FuncMapByFldName(strFldName, newObj);
}
}
//检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
if (
IsNullOrEmpty(objSortInfo.SortFld) == false &&
clsge_StructureSectionTypeEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
(bolIsFuncMap == false || bolIsFuncMap == undefined)
)
{
for (const newObj of arrge_StructureSectionTypeExObjLst) {
await ge_StructureSectionType_FuncMapByFldName(objSortInfo.SortFld, newObj);
const cacheKey = `${ newObj.sectionTypeId}_${ newObj.courseId}`;
ge_StructureSectionTypeCache[cacheKey] = newObj;
}
isFuncMapCache[isFuncMapKey] = true;
}
if (arrge_StructureSectionTypeExObjLst.length == 0) return arrge_StructureSectionTypeExObjLst;
let arrge_StructureSectionTypeSel: Array < clsge_StructureSectionTypeENEx > = arrge_StructureSectionTypeExObjLst;
const objge_StructureSectionTypeCond = objPagerPara.conditionCollection;
if (objge_StructureSectionTypeCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return arrge_StructureSectionTypeExObjLst;
}
try {
for (const objCondition of objge_StructureSectionTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_StructureSectionTypeSel.length == 0) return arrge_StructureSectionTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.sort(ge_StructureSectionType_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.sort(objPagerPara.sortFun);
}
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.slice(intStart, intEnd);     
return arrge_StructureSectionTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_StructureSectionTypeENEx>();
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objge_StructureSectionTypeENS:源对象
 * @returns 目标对象=>clsge_StructureSectionTypeEN:objge_StructureSectionTypeENT
 **/
export  function ge_StructureSectionType_CopyToEx(objge_StructureSectionTypeENS:clsge_StructureSectionTypeEN ): clsge_StructureSectionTypeENEx
{
const strThisFuncName  = ge_StructureSectionType_CopyToEx.name;
 const objge_StructureSectionTypeENT = new clsge_StructureSectionTypeENEx();
try
{
ObjectAssign(objge_StructureSectionTypeENT, objge_StructureSectionTypeENS);
 return objge_StructureSectionTypeENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_StructureSectionTypeENT;
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
export  function ge_StructureSectionType_FuncMapByFldName(strFldName: string, objge_StructureSectionTypeEx: clsge_StructureSectionTypeENEx)
{
const strThisFuncName = ge_StructureSectionType_FuncMapByFldName.name;
console.log(objge_StructureSectionTypeEx);
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsge_StructureSectionTypeEN.AttributeName;
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
export  function ge_StructureSectionType_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
        default:
return ge_StructureSectionType_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
        default:
return ge_StructureSectionType_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function ge_StructureSectionType_Delge_StructureSectionTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_StructureSectionTypesByCondAsync";
const strAction = "Delge_StructureSectionTypesByCond";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSectionType_AddNewRecordAsync(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_StructureSectionTypeEN);
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSectionType_AddNewRecordWithMaxIdAsync(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_AddNewObjSave(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_StructureSectionType_CheckPropertyNew(objge_StructureSectionTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureSectionType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureSectionType_CheckUniCond4Add(objge_StructureSectionTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_StructureSectionType_AddNewRecordWithMaxIdAsync(objge_StructureSectionTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_StructureSectionType_ReFreshCache(objge_StructureSectionTypeEN.courseId);
}
else
{
const strInfo = `添加[节点类型(ge_StructureSectionType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_StructureSectionType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_StructureSectionType_CheckUniCond4Add(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureSectionType_GetUniCondStr(objge_StructureSectionTypeEN);
const bolIsExistCondition = await ge_StructureSectionType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureSectionType_CheckUniCond4Update(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureSectionType_GetUniCondStr4Update(objge_StructureSectionTypeEN);
const bolIsExistCondition = await ge_StructureSectionType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureSectionType_UpdateObjSave(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_StructureSectionTypeEN.sfUpdFldSetStr = objge_StructureSectionTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_StructureSectionTypeEN.sectionTypeId == "" || objge_StructureSectionTypeEN.sectionTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_StructureSectionType_CheckProperty4Update(objge_StructureSectionTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureSectionType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureSectionType_CheckUniCond4Update(objge_StructureSectionTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_StructureSectionType_UpdateRecordAsync(objge_StructureSectionTypeEN);
if (returnBool == true)
{
ge_StructureSectionType_ReFreshCache(objge_StructureSectionTypeEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_StructureSectionType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_StructureSectionTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_StructureSectionType_AddNewRecordWithReturnKeyAsync(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureSectionType_UpdateRecordAsync(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_StructureSectionTypeEN.sfUpdFldSetStr === undefined || objge_StructureSectionTypeEN.sfUpdFldSetStr === null || objge_StructureSectionTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSectionTypeEN.sectionTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureSectionType_EditRecordExAsync(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_StructureSectionTypeEN.sfUpdFldSetStr === undefined || objge_StructureSectionTypeEN.sfUpdFldSetStr === null || objge_StructureSectionTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSectionTypeEN.sectionTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureSectionType_UpdateWithConditionAsync(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_StructureSectionTypeEN.sfUpdFldSetStr === undefined || objge_StructureSectionTypeEN.sfUpdFldSetStr === null || objge_StructureSectionTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSectionTypeEN.sectionTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);
objge_StructureSectionTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param objstrSectionTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_StructureSectionType_IsExistRecordCache(objge_StructureSectionTypeCond: ConditionCollection,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
if (arrge_StructureSectionTypeObjLstCache == null) return false;
let arrge_StructureSectionTypeSel = arrge_StructureSectionTypeObjLstCache;
if (objge_StructureSectionTypeCond.GetConditions().length == 0) return arrge_StructureSectionTypeSel.length>0?true:false;
try {
for (const objCondition of objge_StructureSectionTypeCond.GetConditions()) {
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
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_StructureSectionTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_StructureSectionTypeCond), ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param strSectionTypeId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureSectionType_IsExistCache(strSectionTypeId:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
if (arrge_StructureSectionTypeObjLstCache == null) return false;
try
{
const arrge_StructureSectionTypeSel = arrge_StructureSectionTypeObjLstCache.filter(x => x.sectionTypeId == strSectionTypeId);
if (arrge_StructureSectionTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strSectionTypeId, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strSectionTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_StructureSectionType_IsExistAsync(strSectionTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSectionTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_StructureSectionType_GetRecCountByCondCache(objge_StructureSectionTypeCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_StructureSectionTypeObjLstCache = await ge_StructureSectionType_GetObjLstCache(strCourseId);
if (arrge_StructureSectionTypeObjLstCache == null) return 0;
let arrge_StructureSectionTypeSel = arrge_StructureSectionTypeObjLstCache;
if (objge_StructureSectionTypeCond.GetConditions().length == 0) return arrge_StructureSectionTypeSel.length;
try {
for (const objCondition of objge_StructureSectionTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionTypeSel = arrge_StructureSectionTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_StructureSectionTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_StructureSectionTypeCond), ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSectionType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_StructureSectionType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSectionType_ConstructorName, strThisFuncName);
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
export  function ge_StructureSectionType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_StructureSectionType_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_StructureSectionTypeWApi.clsge_StructureSectionTypeWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_StructureSectionTypeWApi.clsge_StructureSectionTypeWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsge_StructureSectionTypeEN._CurrTabName, strCourseId);
switch (clsge_StructureSectionTypeEN.CacheModeId)
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
clsge_StructureSectionTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_StructureSectionType_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_StructureSectionTypeWApi.ge_StructureSectionType_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_StructureSectionTypeWApi.ge_StructureSectionType_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsge_StructureSectionTypeEN._CurrTabName, strCourseId);
switch (clsge_StructureSectionTypeEN.CacheModeId)
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
clsge_StructureSectionTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_StructureSectionType_GetLastRefreshTime():string
{
if (clsge_StructureSectionTypeEN._RefreshTimeLst.length == 0) return "";
return clsge_StructureSectionTypeEN._RefreshTimeLst[clsge_StructureSectionTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function ge_StructureSectionType_BindDdl_SectionTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureSectionTypeWApi.BindDdl_SectionTypeIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureSectionTypeWApi.BindDdl_SectionTypeIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_SectionTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_SectionTypeIdInDivCache");
let arrObjLstSel = await ge_StructureSectionType_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_StructureSectionTypeEN.con_SectionTypeId, clsge_StructureSectionTypeEN.con_SectionTypeName, "节点类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function ge_StructureSectionType_GetArrge_StructureSectionTypeByCourseId(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureSectionTypeWApi.BindDdl_SectionTypeIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureSectionTypeWApi.BindDdl_SectionTypeIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_SectionTypeIdInDivCache");
const arrge_StructureSectionType = new Array<clsge_StructureSectionTypeEN>();
let arrObjLstSel = await ge_StructureSectionType_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
const obj0 = new clsge_StructureSectionTypeEN();
obj0.sectionTypeId = '0';
obj0.sectionTypeName = '选节点类型...';
arrge_StructureSectionType.push(obj0);
arrObjLstSel.forEach(x => arrge_StructureSectionType.push(x));
return arrge_StructureSectionType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureSectionType_CheckPropertyNew(pobjge_StructureSectionTypeEN: clsge_StructureSectionTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[节点类型名称]不能为空(In 节点类型)!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.courseId) === true 
 || pobjge_StructureSectionTypeEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 节点类型)!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeId) == false && GetStrLen(pobjge_StructureSectionTypeEN.sectionTypeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[节点类型Id(sectionTypeId)]的长度不能超过8(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.sectionTypeId}(clsge_StructureSectionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeName) == false && GetStrLen(pobjge_StructureSectionTypeEN.sectionTypeName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[节点类型名称(sectionTypeName)]的长度不能超过100(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.sectionTypeName}(clsge_StructureSectionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeEnName) == false && GetStrLen(pobjge_StructureSectionTypeEN.sectionTypeEnName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[节点类型英文名称(sectionTypeEnName)]的长度不能超过100(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.sectionTypeEnName}(clsge_StructureSectionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.courseId) == false && GetStrLen(pobjge_StructureSectionTypeEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.courseId}(clsge_StructureSectionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.updDate) == false && GetStrLen(pobjge_StructureSectionTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.updDate}(clsge_StructureSectionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.updUser) == false && GetStrLen(pobjge_StructureSectionTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.updUser}(clsge_StructureSectionTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.memo) == false && GetStrLen(pobjge_StructureSectionTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.memo}(clsge_StructureSectionTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeId) == false && undefined !== pobjge_StructureSectionTypeEN.sectionTypeId && tzDataType.isString(pobjge_StructureSectionTypeEN.sectionTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[节点类型Id(sectionTypeId)]的值:[${pobjge_StructureSectionTypeEN.sectionTypeId}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeName) == false && undefined !== pobjge_StructureSectionTypeEN.sectionTypeName && tzDataType.isString(pobjge_StructureSectionTypeEN.sectionTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[节点类型名称(sectionTypeName)]的值:[${pobjge_StructureSectionTypeEN.sectionTypeName}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeEnName) == false && undefined !== pobjge_StructureSectionTypeEN.sectionTypeEnName && tzDataType.isString(pobjge_StructureSectionTypeEN.sectionTypeEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[节点类型英文名称(sectionTypeEnName)]的值:[${pobjge_StructureSectionTypeEN.sectionTypeEnName}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.courseId) == false && undefined !== pobjge_StructureSectionTypeEN.courseId && tzDataType.isString(pobjge_StructureSectionTypeEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_StructureSectionTypeEN.courseId}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.updDate) == false && undefined !== pobjge_StructureSectionTypeEN.updDate && tzDataType.isString(pobjge_StructureSectionTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_StructureSectionTypeEN.updDate}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.updUser) == false && undefined !== pobjge_StructureSectionTypeEN.updUser && tzDataType.isString(pobjge_StructureSectionTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_StructureSectionTypeEN.updUser}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.memo) == false && undefined !== pobjge_StructureSectionTypeEN.memo && tzDataType.isString(pobjge_StructureSectionTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_StructureSectionTypeEN.memo}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureSectionType_CheckProperty4Update(pobjge_StructureSectionTypeEN: clsge_StructureSectionTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeId) == false && GetStrLen(pobjge_StructureSectionTypeEN.sectionTypeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[节点类型Id(sectionTypeId)]的长度不能超过8(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.sectionTypeId}(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeName) == false && GetStrLen(pobjge_StructureSectionTypeEN.sectionTypeName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[节点类型名称(sectionTypeName)]的长度不能超过100(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.sectionTypeName}(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeEnName) == false && GetStrLen(pobjge_StructureSectionTypeEN.sectionTypeEnName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[节点类型英文名称(sectionTypeEnName)]的长度不能超过100(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.sectionTypeEnName}(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.courseId) == false && GetStrLen(pobjge_StructureSectionTypeEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.courseId}(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.updDate) == false && GetStrLen(pobjge_StructureSectionTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.updDate}(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.updUser) == false && GetStrLen(pobjge_StructureSectionTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.updUser}(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.memo) == false && GetStrLen(pobjge_StructureSectionTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 节点类型(ge_StructureSectionType))!值:${pobjge_StructureSectionTypeEN.memo}(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeId) == false && undefined !== pobjge_StructureSectionTypeEN.sectionTypeId && tzDataType.isString(pobjge_StructureSectionTypeEN.sectionTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[节点类型Id(sectionTypeId)]的值:[${pobjge_StructureSectionTypeEN.sectionTypeId}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeName) == false && undefined !== pobjge_StructureSectionTypeEN.sectionTypeName && tzDataType.isString(pobjge_StructureSectionTypeEN.sectionTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[节点类型名称(sectionTypeName)]的值:[${pobjge_StructureSectionTypeEN.sectionTypeName}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.sectionTypeEnName) == false && undefined !== pobjge_StructureSectionTypeEN.sectionTypeEnName && tzDataType.isString(pobjge_StructureSectionTypeEN.sectionTypeEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[节点类型英文名称(sectionTypeEnName)]的值:[${pobjge_StructureSectionTypeEN.sectionTypeEnName}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.courseId) == false && undefined !== pobjge_StructureSectionTypeEN.courseId && tzDataType.isString(pobjge_StructureSectionTypeEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_StructureSectionTypeEN.courseId}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.updDate) == false && undefined !== pobjge_StructureSectionTypeEN.updDate && tzDataType.isString(pobjge_StructureSectionTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_StructureSectionTypeEN.updDate}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.updUser) == false && undefined !== pobjge_StructureSectionTypeEN.updUser && tzDataType.isString(pobjge_StructureSectionTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_StructureSectionTypeEN.updUser}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionTypeEN.memo) == false && undefined !== pobjge_StructureSectionTypeEN.memo && tzDataType.isString(pobjge_StructureSectionTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_StructureSectionTypeEN.memo}], 非法,应该为字符型(In 节点类型(ge_StructureSectionType))!(clsge_StructureSectionTypeBL:CheckProperty4Update)`);
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
export  function ge_StructureSectionType_GetJSONStrByObj (pobjge_StructureSectionTypeEN: clsge_StructureSectionTypeEN): string
{
pobjge_StructureSectionTypeEN.sfUpdFldSetStr = pobjge_StructureSectionTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_StructureSectionTypeEN);
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
export  function ge_StructureSectionType_GetObjLstByJSONStr (strJSON: string): Array<clsge_StructureSectionTypeEN>
{
let arrge_StructureSectionTypeObjLst = new Array<clsge_StructureSectionTypeEN>();
if (strJSON === "")
{
return arrge_StructureSectionTypeObjLst;
}
try
{
arrge_StructureSectionTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_StructureSectionTypeObjLst;
}
return arrge_StructureSectionTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_StructureSectionTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_StructureSectionType_GetObjLstByJSONObjLst (arrge_StructureSectionTypeObjLstS: Array<clsge_StructureSectionTypeEN>): Array<clsge_StructureSectionTypeEN>
{
const arrge_StructureSectionTypeObjLst = new Array<clsge_StructureSectionTypeEN>();
for (const objInFor of arrge_StructureSectionTypeObjLstS) {
const obj1 = ge_StructureSectionType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_StructureSectionTypeObjLst.push(obj1);
}
return arrge_StructureSectionTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_StructureSectionType_GetObjByJSONStr (strJSON: string): clsge_StructureSectionTypeEN
{
let pobjge_StructureSectionTypeEN = new clsge_StructureSectionTypeEN();
if (strJSON === "")
{
return pobjge_StructureSectionTypeEN;
}
try
{
pobjge_StructureSectionTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_StructureSectionTypeEN;
}
return pobjge_StructureSectionTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_StructureSectionType_GetCombineCondition(objge_StructureSectionTypeCond: clsge_StructureSectionTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionTypeCond.dicFldComparisonOp, clsge_StructureSectionTypeEN.con_SectionTypeId) == true)
{
const strComparisonOpSectionTypeId:string = objge_StructureSectionTypeCond.dicFldComparisonOp[clsge_StructureSectionTypeEN.con_SectionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionTypeEN.con_SectionTypeId, objge_StructureSectionTypeCond.sectionTypeId, strComparisonOpSectionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionTypeCond.dicFldComparisonOp, clsge_StructureSectionTypeEN.con_SectionTypeName) == true)
{
const strComparisonOpSectionTypeName:string = objge_StructureSectionTypeCond.dicFldComparisonOp[clsge_StructureSectionTypeEN.con_SectionTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionTypeEN.con_SectionTypeName, objge_StructureSectionTypeCond.sectionTypeName, strComparisonOpSectionTypeName);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionTypeCond.dicFldComparisonOp, clsge_StructureSectionTypeEN.con_SectionTypeEnName) == true)
{
const strComparisonOpSectionTypeEnName:string = objge_StructureSectionTypeCond.dicFldComparisonOp[clsge_StructureSectionTypeEN.con_SectionTypeEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionTypeEN.con_SectionTypeEnName, objge_StructureSectionTypeCond.sectionTypeEnName, strComparisonOpSectionTypeEnName);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionTypeCond.dicFldComparisonOp, clsge_StructureSectionTypeEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_StructureSectionTypeCond.dicFldComparisonOp[clsge_StructureSectionTypeEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionTypeEN.con_CourseId, objge_StructureSectionTypeCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionTypeCond.dicFldComparisonOp, clsge_StructureSectionTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_StructureSectionTypeCond.dicFldComparisonOp[clsge_StructureSectionTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionTypeEN.con_UpdDate, objge_StructureSectionTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionTypeCond.dicFldComparisonOp, clsge_StructureSectionTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_StructureSectionTypeCond.dicFldComparisonOp[clsge_StructureSectionTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionTypeEN.con_UpdUser, objge_StructureSectionTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionTypeCond.dicFldComparisonOp, clsge_StructureSectionTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_StructureSectionTypeCond.dicFldComparisonOp[clsge_StructureSectionTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionTypeEN.con_Memo, objge_StructureSectionTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureSectionType(节点类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strSectionTypeName: 节点类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureSectionType_GetUniCondStr(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and SectionTypeName = '{0}'", objge_StructureSectionTypeEN.sectionTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureSectionType(节点类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strSectionTypeName: 节点类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureSectionType_GetUniCondStr4Update(objge_StructureSectionTypeEN: clsge_StructureSectionTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and SectionTypeId <> '{0}'", objge_StructureSectionTypeEN.sectionTypeId);
 strWhereCond +=  Format(" and SectionTypeName = '{0}'", objge_StructureSectionTypeEN.sectionTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_StructureSectionTypeENS:源对象
 * @param objge_StructureSectionTypeENT:目标对象
*/
export  function ge_StructureSectionType_CopyObjTo(objge_StructureSectionTypeENS: clsge_StructureSectionTypeEN , objge_StructureSectionTypeENT: clsge_StructureSectionTypeEN ): void 
{
objge_StructureSectionTypeENT.sectionTypeId = objge_StructureSectionTypeENS.sectionTypeId; //节点类型Id
objge_StructureSectionTypeENT.sectionTypeName = objge_StructureSectionTypeENS.sectionTypeName; //节点类型名称
objge_StructureSectionTypeENT.sectionTypeEnName = objge_StructureSectionTypeENS.sectionTypeEnName; //节点类型英文名称
objge_StructureSectionTypeENT.courseId = objge_StructureSectionTypeENS.courseId; //课程Id
objge_StructureSectionTypeENT.updDate = objge_StructureSectionTypeENS.updDate; //修改日期
objge_StructureSectionTypeENT.updUser = objge_StructureSectionTypeENS.updUser; //修改人
objge_StructureSectionTypeENT.memo = objge_StructureSectionTypeENS.memo; //备注
objge_StructureSectionTypeENT.sfUpdFldSetStr = objge_StructureSectionTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_StructureSectionTypeENS:源对象
 * @param objge_StructureSectionTypeENT:目标对象
*/
export  function ge_StructureSectionType_GetObjFromJsonObj(objge_StructureSectionTypeENS: clsge_StructureSectionTypeEN): clsge_StructureSectionTypeEN 
{
 const objge_StructureSectionTypeENT: clsge_StructureSectionTypeEN = new clsge_StructureSectionTypeEN();
ObjectAssign(objge_StructureSectionTypeENT, objge_StructureSectionTypeENS);
 return objge_StructureSectionTypeENT;
}
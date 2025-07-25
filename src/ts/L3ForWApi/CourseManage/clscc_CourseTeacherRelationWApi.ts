
 /**
 * 类名:clscc_CourseTeacherRelationWApi
 * 表名:cc_CourseTeacherRelation(01120097)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:29:23
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
 * 课程教师关系(cc_CourseTeacherRelation)
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
import { GetSortExpressInfo,ObjectAssign,GetExceptionStr,myShowErrorMsg } from "@/ts/PubFun/clsCommFunc4Web";
import { cc_CourseTeacherRelationCache,isFuncMapCache } from "@/viewsShare/CourseManage/cc_CourseTeacherRelationVueShare";
import { clscc_CourseTeacherRelationENEx } from "@/ts/L0Entity/CourseManage/clscc_CourseTeacherRelationENEx";
import { clscc_CourseTeacherRelationEN } from "@/ts/L0Entity/CourseManage/clscc_CourseTeacherRelationEN";
import { vcc_Course_Sim_func } from "@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi";
import { clsvcc_Course_SimEN } from "@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN";
import { vTeacherInfo_Sim_func } from "@/ts/L3ForWApi/BaseInfo/clsvTeacherInfo_SimWApi";
import { clsvTeacherInfo_SimEN } from "@/ts/L0Entity/BaseInfo/clsvTeacherInfo_SimEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const cc_CourseTeacherRelation_Controller = "cc_CourseTeacherRelationApi";
 export const cc_CourseTeacherRelation_ConstructorName = "cc_CourseTeacherRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngCourseTeacherRelationId:关键字
 * @returns 对象
 **/
export  async function cc_CourseTeacherRelation_GetObjByCourseTeacherRelationIdAsync(lngCourseTeacherRelationId: number): Promise<clscc_CourseTeacherRelationEN|null>  
{
const strThisFuncName = "GetObjByCourseTeacherRelationIdAsync";

if (lngCourseTeacherRelationId == 0)
{
  const strMsg = Format("参数:[lngCourseTeacherRelationId]不能为空!(In clscc_CourseTeacherRelationWApi.GetObjByCourseTeacherRelationIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByCourseTeacherRelationId";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngCourseTeacherRelationId,
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
const objcc_CourseTeacherRelation = cc_CourseTeacherRelation_GetObjFromJsonObj(returnObj);
return objcc_CourseTeacherRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param lngCourseTeacherRelationId:所给的关键字
 * @returns 对象
*/
export  async function cc_CourseTeacherRelation_GetObjByCourseTeacherRelationIdlocalStorage(lngCourseTeacherRelationId: number) {
const strThisFuncName = "GetObjByCourseTeacherRelationIdlocalStorage";

if (lngCourseTeacherRelationId == 0)
{
  const strMsg = Format("参数:[lngCourseTeacherRelationId]不能为空!(In clscc_CourseTeacherRelationWApi.GetObjByCourseTeacherRelationIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clscc_CourseTeacherRelationEN._CurrTabName, lngCourseTeacherRelationId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objcc_CourseTeacherRelationCache: clscc_CourseTeacherRelationEN = JSON.parse(strTempObj);
return objcc_CourseTeacherRelationCache;
}
try
{
const objcc_CourseTeacherRelation = await cc_CourseTeacherRelation_GetObjByCourseTeacherRelationIdAsync(lngCourseTeacherRelationId);
if (objcc_CourseTeacherRelation != null)
{
localStorage.setItem(strKey, JSON.stringify(objcc_CourseTeacherRelation));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objcc_CourseTeacherRelation;
}
return objcc_CourseTeacherRelation;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngCourseTeacherRelationId, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngCourseTeacherRelationId:所给的关键字
 * @returns 对象
*/
export  async function cc_CourseTeacherRelation_GetObjByCourseTeacherRelationIdCache(lngCourseTeacherRelationId:number,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByCourseTeacherRelationIdCache";

if (lngCourseTeacherRelationId == 0)
{
  const strMsg = Format("参数:[lngCourseTeacherRelationId]不能为空!(In clscc_CourseTeacherRelationWApi.GetObjByCourseTeacherRelationIdCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
try
{
const arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationObjLstCache.filter(x => 
 x.courseTeacherRelationId == lngCourseTeacherRelationId );
let objcc_CourseTeacherRelation: clscc_CourseTeacherRelationEN;
if (arrcc_CourseTeacherRelationSel.length > 0)
{
objcc_CourseTeacherRelation = arrcc_CourseTeacherRelationSel[0];
return objcc_CourseTeacherRelation;
}
else
{
if (bolTryAsyncOnce == true)
{
const objcc_CourseTeacherRelationConst = await cc_CourseTeacherRelation_GetObjByCourseTeacherRelationIdAsync(lngCourseTeacherRelationId);
if (objcc_CourseTeacherRelationConst != null)
{
cc_CourseTeacherRelation_ReFreshThisCache(strCourseId);
return objcc_CourseTeacherRelationConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngCourseTeacherRelationId, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcc_CourseTeacherRelation:所给的对象
 * @returns 对象
*/
export  async function cc_CourseTeacherRelation_UpdateObjInLstCache(objcc_CourseTeacherRelation: clscc_CourseTeacherRelationEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
const obj = arrcc_CourseTeacherRelationObjLstCache.find(x => x.courseId == objcc_CourseTeacherRelation.courseId && x.idTeacher == objcc_CourseTeacherRelation.idTeacher);
if (obj != null)
{
objcc_CourseTeacherRelation.courseTeacherRelationId = obj.courseTeacherRelationId;
ObjectAssign( obj, objcc_CourseTeacherRelation);
}
else
{
arrcc_CourseTeacherRelationObjLstCache.push(objcc_CourseTeacherRelation);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  function cc_CourseTeacherRelation_SortFunDefa(a:clscc_CourseTeacherRelationEN , b:clscc_CourseTeacherRelationEN): number 
{
return a.courseTeacherRelationId-b.courseTeacherRelationId;
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
export  function cc_CourseTeacherRelation_SortFunDefa2Fld(a:clscc_CourseTeacherRelationEN , b:clscc_CourseTeacherRelationEN): number 
{
if (a.courseId == b.courseId) return a.idTeacher.localeCompare(b.idTeacher);
else return a.courseId.localeCompare(b.courseId);
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
export  function cc_CourseTeacherRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_CourseTeacherRelationEN.con_CourseTeacherRelationId:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return a.courseTeacherRelationId-b.courseTeacherRelationId;
}
case clscc_CourseTeacherRelationEN.con_CourseId:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clscc_CourseTeacherRelationEN.con_IdTeacher:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return a.idTeacher.localeCompare(b.idTeacher);
}
case clscc_CourseTeacherRelationEN.con_IsCourseManager:
return (a: clscc_CourseTeacherRelationEN) => {
if (a.isCourseManager == true) return 1;
else return -1
}
case clscc_CourseTeacherRelationEN.con_LastVisitedDate:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
if (a.lastVisitedDate == null) return -1;
if (b.lastVisitedDate == null) return 1;
return a.lastVisitedDate.localeCompare(b.lastVisitedDate);
}
case clscc_CourseTeacherRelationEN.con_UpdDate:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clscc_CourseTeacherRelationEN.con_UpdUser:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clscc_CourseTeacherRelationEN.con_Memo:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseTeacherRelation]中不存在!(in ${ cc_CourseTeacherRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_CourseTeacherRelationEN.con_CourseTeacherRelationId:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return b.courseTeacherRelationId-a.courseTeacherRelationId;
}
case clscc_CourseTeacherRelationEN.con_CourseId:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clscc_CourseTeacherRelationEN.con_IdTeacher:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return b.idTeacher.localeCompare(a.idTeacher);
}
case clscc_CourseTeacherRelationEN.con_IsCourseManager:
return (b: clscc_CourseTeacherRelationEN) => {
if (b.isCourseManager == true) return 1;
else return -1
}
case clscc_CourseTeacherRelationEN.con_LastVisitedDate:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
if (b.lastVisitedDate == null) return -1;
if (a.lastVisitedDate == null) return 1;
return b.lastVisitedDate.localeCompare(a.lastVisitedDate);
}
case clscc_CourseTeacherRelationEN.con_UpdDate:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clscc_CourseTeacherRelationEN.con_UpdUser:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clscc_CourseTeacherRelationEN.con_Memo:
return (a: clscc_CourseTeacherRelationEN, b: clscc_CourseTeacherRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseTeacherRelation]中不存在!(in ${ cc_CourseTeacherRelation_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_CourseTeacherRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_CourseTeacherRelationEN.con_CourseTeacherRelationId:
return (obj: clscc_CourseTeacherRelationEN) => {
return obj.courseTeacherRelationId === value;
}
case clscc_CourseTeacherRelationEN.con_CourseId:
return (obj: clscc_CourseTeacherRelationEN) => {
return obj.courseId === value;
}
case clscc_CourseTeacherRelationEN.con_IdTeacher:
return (obj: clscc_CourseTeacherRelationEN) => {
return obj.idTeacher === value;
}
case clscc_CourseTeacherRelationEN.con_IsCourseManager:
return (obj: clscc_CourseTeacherRelationEN) => {
return obj.isCourseManager === value;
}
case clscc_CourseTeacherRelationEN.con_LastVisitedDate:
return (obj: clscc_CourseTeacherRelationEN) => {
return obj.lastVisitedDate === value;
}
case clscc_CourseTeacherRelationEN.con_UpdDate:
return (obj: clscc_CourseTeacherRelationEN) => {
return obj.updDate === value;
}
case clscc_CourseTeacherRelationEN.con_UpdUser:
return (obj: clscc_CourseTeacherRelationEN) => {
return obj.updUser === value;
}
case clscc_CourseTeacherRelationEN.con_Memo:
return (obj: clscc_CourseTeacherRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseTeacherRelation]中不存在!(in ${ cc_CourseTeacherRelation_ConstructorName}.${ strThisFuncName})`;
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
export  async function cc_CourseTeacherRelation_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clscc_CourseTeacherRelationWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_CourseTeacherRelationWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clscc_CourseTeacherRelationEN.con_CourseTeacherRelationId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clscc_CourseTeacherRelationEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clscc_CourseTeacherRelationEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngCourseTeacherRelationId = Number(strInValue);
if (lngCourseTeacherRelationId == 0)
{
return "";
}
const objcc_CourseTeacherRelation = await cc_CourseTeacherRelation_GetObjByCourseTeacherRelationIdCache(lngCourseTeacherRelationId , strCourseIdClassfy);
if (objcc_CourseTeacherRelation == null) return "";
if (objcc_CourseTeacherRelation.GetFldValue(strOutFldName) == null) return "";
return objcc_CourseTeacherRelation.GetFldValue(strOutFldName).toString();
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
export  async function cc_CourseTeacherRelation_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clscc_CourseTeacherRelationWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_CourseTeacherRelationWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clscc_CourseTeacherRelationEN.con_CourseTeacherRelationId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrcc_CourseTeacherRelation = await cc_CourseTeacherRelation_GetObjLstCache(strCourseIdClassfy);
if (arrcc_CourseTeacherRelation == null) return [];
let arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelation;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrcc_CourseTeacherRelationSel.length == 0) return [];
return arrcc_CourseTeacherRelationSel.map(x=>x.courseTeacherRelationId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseTeacherRelation_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetFirstObjAsync(strWhereCond: string): Promise<clscc_CourseTeacherRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const objcc_CourseTeacherRelation = cc_CourseTeacherRelation_GetObjFromJsonObj(returnObj);
return objcc_CourseTeacherRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_CourseTeacherRelationEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_CourseTeacherRelationEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clscc_CourseTeacherRelationEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_CourseTeacherRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_CourseTeacherRelationEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrcc_CourseTeacherRelationExObjLstCache: Array<clscc_CourseTeacherRelationEN> = CacheHelper.Get(strKey);
const arrcc_CourseTeacherRelationObjLstT = cc_CourseTeacherRelation_GetObjLstByJSONObjLst(arrcc_CourseTeacherRelationExObjLstCache);
return arrcc_CourseTeacherRelationObjLstT;
}
try
{
const arrcc_CourseTeacherRelationExObjLst = await cc_CourseTeacherRelation_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrcc_CourseTeacherRelationExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_CourseTeacherRelationExObjLst.length);
console.log(strInfo);
return arrcc_CourseTeacherRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseTeacherRelation_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_CourseTeacherRelationEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_CourseTeacherRelationEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clscc_CourseTeacherRelationEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clscc_CourseTeacherRelationEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_CourseTeacherRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_CourseTeacherRelationEN.CacheAddiCondition);
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
const arrcc_CourseTeacherRelationExObjLstCache: Array<clscc_CourseTeacherRelationEN> = JSON.parse(strTempObjLst);
const arrcc_CourseTeacherRelationObjLstT = cc_CourseTeacherRelation_GetObjLstByJSONObjLst(arrcc_CourseTeacherRelationExObjLstCache);
return arrcc_CourseTeacherRelationObjLstT;
}
try
{
const arrcc_CourseTeacherRelationExObjLst = await cc_CourseTeacherRelation_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrcc_CourseTeacherRelationExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_CourseTeacherRelationExObjLst.length);
console.log(strInfo);
return arrcc_CourseTeacherRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseTeacherRelation_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clscc_CourseTeacherRelationEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrcc_CourseTeacherRelationObjLstCache: Array<clscc_CourseTeacherRelationEN> = JSON.parse(strTempObjLst);
return arrcc_CourseTeacherRelationObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_CourseTeacherRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_CourseTeacherRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseTeacherRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_CourseTeacherRelationEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_CourseTeacherRelationEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clscc_CourseTeacherRelationEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clscc_CourseTeacherRelationEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_CourseTeacherRelationEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_CourseTeacherRelationEN.CacheAddiCondition);
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
const arrcc_CourseTeacherRelationExObjLstCache: Array<clscc_CourseTeacherRelationEN> = JSON.parse(strTempObjLst);
const arrcc_CourseTeacherRelationObjLstT = cc_CourseTeacherRelation_GetObjLstByJSONObjLst(arrcc_CourseTeacherRelationExObjLstCache);
return arrcc_CourseTeacherRelationObjLstT;
}
try
{
const arrcc_CourseTeacherRelationExObjLst = await cc_CourseTeacherRelation_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrcc_CourseTeacherRelationExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_CourseTeacherRelationExObjLst.length);
console.log(strInfo);
return arrcc_CourseTeacherRelationExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseTeacherRelation_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clscc_CourseTeacherRelationEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrcc_CourseTeacherRelationObjLstCache: Array<clscc_CourseTeacherRelationEN> = JSON.parse(strTempObjLst);
return arrcc_CourseTeacherRelationObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseTeacherRelation_GetObjLstCache(strCourseId: string): Promise<Array<clscc_CourseTeacherRelationEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clscc_CourseTeacherRelationWApi.cc_CourseTeacherRelation_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_CourseTeacherRelationWApi.cc_CourseTeacherRelation_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrcc_CourseTeacherRelationObjLstCache;
switch (clscc_CourseTeacherRelationEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstClientCache(strCourseId);
break;
default:
arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstClientCache(strCourseId);
break;
}
return arrcc_CourseTeacherRelationObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseTeacherRelation_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrcc_CourseTeacherRelationObjLstCache;
switch (clscc_CourseTeacherRelationEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrcc_CourseTeacherRelationObjLstCache = null;
break;
default:
arrcc_CourseTeacherRelationObjLstCache = null;
break;
}
return arrcc_CourseTeacherRelationObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngCourseTeacherRelationIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_CourseTeacherRelation_GetSubObjLstCache(objcc_CourseTeacherRelationCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
let arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationObjLstCache;
if (objcc_CourseTeacherRelationCond.GetConditions().length == 0) return arrcc_CourseTeacherRelationSel;
try {
//console.log(sstrKeys);
for (const objCondition of objcc_CourseTeacherRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_CourseTeacherRelationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objcc_CourseTeacherRelationCond), cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_CourseTeacherRelationEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseTeacherRelationId:关键字列表
 * @returns 对象列表
 **/
export  async function cc_CourseTeacherRelation_GetObjLstByCourseTeacherRelationIdLstAsync(arrCourseTeacherRelationId: Array<string>): Promise<Array<clscc_CourseTeacherRelationEN>>  
{
const strThisFuncName = "GetObjLstByCourseTeacherRelationIdLstAsync";
const strAction = "GetObjLstByCourseTeacherRelationIdLst";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseTeacherRelationId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseTeacherRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param arrlngCourseTeacherRelationIdLst:关键字列表
 * @returns 对象列表
*/
export  async function cc_CourseTeacherRelation_GetObjLstByCourseTeacherRelationIdLstCache(arrCourseTeacherRelationIdLst: Array<number> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByCourseTeacherRelationIdLstCache";
try
{
const arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
const arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationObjLstCache.filter(x => arrCourseTeacherRelationIdLst.indexOf(x.courseTeacherRelationId)>-1);
return arrcc_CourseTeacherRelationSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrCourseTeacherRelationIdLst.join(","), cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_CourseTeacherRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseTeacherRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_CourseTeacherRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseTeacherRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseTeacherRelationEN>();
const arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
if (arrcc_CourseTeacherRelationObjLstCache.length == 0) return arrcc_CourseTeacherRelationObjLstCache;
let arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationObjLstCache;
const objcc_CourseTeacherRelationCond = objPagerPara.conditionCollection;
if (objcc_CourseTeacherRelationCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clscc_CourseTeacherRelationEN>();
}
//console.log("clscc_CourseTeacherRelationWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objcc_CourseTeacherRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_CourseTeacherRelationSel.length == 0) return arrcc_CourseTeacherRelationSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.sort(cc_CourseTeacherRelation_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.sort(objPagerPara.sortFun);
}
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.slice(intStart, intEnd);     
return arrcc_CourseTeacherRelationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_CourseTeacherRelationEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_CourseTeacherRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_CourseTeacherRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseTeacherRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseTeacherRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param lngCourseTeacherRelationId:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_CourseTeacherRelation_DelRecordAsync(lngCourseTeacherRelationId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngCourseTeacherRelationId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param arrCourseTeacherRelationId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_CourseTeacherRelation_Delcc_CourseTeacherRelationsAsync(arrCourseTeacherRelationId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_CourseTeacherRelationsAsync";
const strAction = "Delcc_CourseTeacherRelations";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseTeacherRelationId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetObjExLstByPagerCache(objPagerPara: stuPagerPara , strCourseId:string):Promise<Array<clscc_CourseTeacherRelationENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
 const objSortInfo = GetSortExpressInfo(objPagerPara);
const isFuncMapKey = `${ objSortInfo.SortFld}`;
const arrcc_CourseTeacherRelationObjLst = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
//从缓存中获取对象，如果缓存中不存在就扩展复制
const arrNewObj = new Array<clscc_CourseTeacherRelationENEx>();
const arrcc_CourseTeacherRelationExObjLst = arrcc_CourseTeacherRelationObjLst.map((obj) => {
const cacheKey = `${ obj.courseTeacherRelationId}_${ obj.courseId}`;
if (cc_CourseTeacherRelationCache[cacheKey])
{
const oldObj = cc_CourseTeacherRelationCache[cacheKey];
return oldObj;
}
else
{
const newObj = cc_CourseTeacherRelation_CopyToEx(obj);
arrNewObj.push(newObj);
cc_CourseTeacherRelationCache[cacheKey] = newObj;
return newObj;
}
});
for (const newObj of arrNewObj) {
for (const strFldName of Object.keys(isFuncMapCache)) {
await cc_CourseTeacherRelation_FuncMapByFldName(strFldName, newObj);
}
}
//检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
if (
IsNullOrEmpty(objSortInfo.SortFld) == false &&
clscc_CourseTeacherRelationEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
(bolIsFuncMap == false || bolIsFuncMap == undefined)
)
{
for (const newObj of arrcc_CourseTeacherRelationExObjLst) {
await cc_CourseTeacherRelation_FuncMapByFldName(objSortInfo.SortFld, newObj);
const cacheKey = `${ newObj.courseTeacherRelationId}_${ newObj.courseId}`;
cc_CourseTeacherRelationCache[cacheKey] = newObj;
}
isFuncMapCache[isFuncMapKey] = true;
}
if (arrcc_CourseTeacherRelationExObjLst.length == 0) return arrcc_CourseTeacherRelationExObjLst;
let arrcc_CourseTeacherRelationSel: Array < clscc_CourseTeacherRelationENEx > = arrcc_CourseTeacherRelationExObjLst;
const objcc_CourseTeacherRelationCond = objPagerPara.conditionCollection;
if (objcc_CourseTeacherRelationCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return arrcc_CourseTeacherRelationExObjLst;
}
try {
for (const objCondition of objcc_CourseTeacherRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_CourseTeacherRelationSel.length == 0) return arrcc_CourseTeacherRelationSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.sort(cc_CourseTeacherRelation_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.sort(objPagerPara.sortFun);
}
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.slice(intStart, intEnd);     
return arrcc_CourseTeacherRelationSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_CourseTeacherRelationENEx>();
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objcc_CourseTeacherRelationENS:源对象
 * @returns 目标对象=>clscc_CourseTeacherRelationEN:objcc_CourseTeacherRelationENT
 **/
export  function cc_CourseTeacherRelation_CopyToEx(objcc_CourseTeacherRelationENS:clscc_CourseTeacherRelationEN ): clscc_CourseTeacherRelationENEx
{
const strThisFuncName  = cc_CourseTeacherRelation_CopyToEx.name;
 const objcc_CourseTeacherRelationENT = new clscc_CourseTeacherRelationENEx();
try
{
ObjectAssign(objcc_CourseTeacherRelationENT, objcc_CourseTeacherRelationENS);
 return objcc_CourseTeacherRelationENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objcc_CourseTeacherRelationENT;
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
export  function cc_CourseTeacherRelation_FuncMapByFldName(strFldName: string, objcc_CourseTeacherRelationEx: clscc_CourseTeacherRelationENEx)
{
const strThisFuncName = cc_CourseTeacherRelation_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clscc_CourseTeacherRelationEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clscc_CourseTeacherRelationENEx.con_CourseName:
return cc_CourseTeacherRelation_FuncMapCourseName(objcc_CourseTeacherRelationEx);
case clscc_CourseTeacherRelationENEx.con_TeacherName:
return cc_CourseTeacherRelation_FuncMapTeacherName(objcc_CourseTeacherRelationEx);
case clscc_CourseTeacherRelationENEx.con_TeacherId:
return cc_CourseTeacherRelation_FuncMapTeacherId(objcc_CourseTeacherRelationEx);
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
export  function cc_CourseTeacherRelation_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_CourseTeacherRelationENEx.con_CourseName:
return (a: clscc_CourseTeacherRelationENEx, b: clscc_CourseTeacherRelationENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return -1;
if (b.courseName === null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clscc_CourseTeacherRelationENEx.con_TeacherName:
return (a: clscc_CourseTeacherRelationENEx, b: clscc_CourseTeacherRelationENEx) => {
return a.teacherName.localeCompare(b.teacherName);
}
case clscc_CourseTeacherRelationENEx.con_TeacherId:
return (a: clscc_CourseTeacherRelationENEx, b: clscc_CourseTeacherRelationENEx) => {
return a.teacherId.localeCompare(b.teacherId);
}
case clscc_CourseTeacherRelationENEx.con_IdSchool:
return (a: clscc_CourseTeacherRelationENEx, b: clscc_CourseTeacherRelationENEx) => {
    if (a.idSchool === null && b.idSchool === null) return 0;
if (a.idSchool === null) return -1;
if (b.idSchool === null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
        default:
return cc_CourseTeacherRelation_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clscc_CourseTeacherRelationENEx.con_CourseName:
return (a: clscc_CourseTeacherRelationENEx, b: clscc_CourseTeacherRelationENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return 1;
if (b.courseName === null) return -1;
return b.courseName.localeCompare(a.courseName);
}
case clscc_CourseTeacherRelationENEx.con_TeacherName:
return (a: clscc_CourseTeacherRelationENEx, b: clscc_CourseTeacherRelationENEx) => {
return b.teacherName.localeCompare(a.teacherName);
}
case clscc_CourseTeacherRelationENEx.con_TeacherId:
return (a: clscc_CourseTeacherRelationENEx, b: clscc_CourseTeacherRelationENEx) => {
return b.teacherId.localeCompare(a.teacherId);
}
case clscc_CourseTeacherRelationENEx.con_IdSchool:
return (a: clscc_CourseTeacherRelationENEx, b: clscc_CourseTeacherRelationENEx) => {
    if (a.idSchool === null && b.idSchool === null) return 0;
if (a.idSchool === null) return 1;
if (b.idSchool === null) return -1;
return b.idSchool.localeCompare(a.idSchool);
}
        default:
return cc_CourseTeacherRelation_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseTeacherRelationS:源对象
 **/
export  async function cc_CourseTeacherRelation_FuncMapCourseName(objcc_CourseTeacherRelation:clscc_CourseTeacherRelationENEx )
{
const strThisFuncName = cc_CourseTeacherRelation_FuncMapCourseName.name;
try
{
if (IsNullOrEmpty(objcc_CourseTeacherRelation.courseName) == true){
 const vccCourseSimCourseId = objcc_CourseTeacherRelation.courseId;
 const vccCourseSimCourseName = await vcc_Course_Sim_func(clsvcc_Course_SimEN.con_CourseId, clsvcc_Course_SimEN.con_CourseName, vccCourseSimCourseId );
 objcc_CourseTeacherRelation.courseName = vccCourseSimCourseName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001412)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseTeacherRelationS:源对象
 **/
export  async function cc_CourseTeacherRelation_FuncMapTeacherName(objcc_CourseTeacherRelation:clscc_CourseTeacherRelationENEx )
{
const strThisFuncName = cc_CourseTeacherRelation_FuncMapTeacherName.name;
try
{
if (IsNullOrEmpty(objcc_CourseTeacherRelation.teacherName) == true){
 const vTeacherInfoSimIdTeacher = objcc_CourseTeacherRelation.idTeacher;
if (IsNullOrEmpty(objcc_CourseTeacherRelation.idSchool) == true)
{
const strMsg = `函数映射[TeacherName]数据出错,idSchool不能为空!(in ${ cc_CourseTeacherRelation_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const vTeacherInfoSimTeacherName = await vTeacherInfo_Sim_func(clsvTeacherInfo_SimEN.con_IdTeacher, clsvTeacherInfo_SimEN.con_TeacherName, vTeacherInfoSimIdTeacher , objcc_CourseTeacherRelation.idSchool);
 objcc_CourseTeacherRelation.teacherName = vTeacherInfoSimTeacherName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001426)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseTeacherRelationS:源对象
 **/
export  async function cc_CourseTeacherRelation_FuncMapTeacherId(objcc_CourseTeacherRelation:clscc_CourseTeacherRelationENEx )
{
const strThisFuncName = cc_CourseTeacherRelation_FuncMapTeacherId.name;
try
{
if (IsNullOrEmpty(objcc_CourseTeacherRelation.teacherId) == true){
 const vTeacherInfoSimIdTeacher = objcc_CourseTeacherRelation.idTeacher;
if (IsNullOrEmpty(objcc_CourseTeacherRelation.idSchool) == true)
{
const strMsg = `函数映射[TeacherId]数据出错,idSchool不能为空!(in ${ cc_CourseTeacherRelation_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const vTeacherInfoSimTeacherId = await vTeacherInfo_Sim_func(clsvTeacherInfo_SimEN.con_IdTeacher, clsvTeacherInfo_SimEN.con_TeacherId, vTeacherInfoSimIdTeacher , objcc_CourseTeacherRelation.idSchool);
 objcc_CourseTeacherRelation.teacherId = vTeacherInfoSimTeacherId;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001427)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function cc_CourseTeacherRelation_Delcc_CourseTeacherRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_CourseTeacherRelationsByCondAsync";
const strAction = "Delcc_CourseTeacherRelationsByCond";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseTeacherRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseTeacherRelation_AddNewRecordAsync(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_CourseTeacherRelationEN);
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseTeacherRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_AddNewObjSave(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_CourseTeacherRelation_CheckPropertyNew(objcc_CourseTeacherRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseTeacherRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseTeacherRelation_CheckUniCond4Add(objcc_CourseTeacherRelationEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await cc_CourseTeacherRelation_AddNewRecordAsync(objcc_CourseTeacherRelationEN);
if (returnBool == true)
{
cc_CourseTeacherRelation_ReFreshCache(objcc_CourseTeacherRelationEN.courseId);
}
else
{
const strInfo = `添加[课程教师关系(cc_CourseTeacherRelation)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objcc_CourseTeacherRelationEN.courseTeacherRelationId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_CourseTeacherRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_CourseTeacherRelation_CheckUniCond4Add(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseTeacherRelation_GetUniCondStr(objcc_CourseTeacherRelationEN);
const bolIsExistCondition = await cc_CourseTeacherRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseTeacherRelation_CheckUniCond4Update(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseTeacherRelation_GetUniCondStr4Update(objcc_CourseTeacherRelationEN);
const bolIsExistCondition = await cc_CourseTeacherRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseTeacherRelation_UpdateObjSave(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_CourseTeacherRelationEN.sfUpdFldSetStr = objcc_CourseTeacherRelationEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_CourseTeacherRelationEN.courseTeacherRelationId == 0 || objcc_CourseTeacherRelationEN.courseTeacherRelationId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_CourseTeacherRelation_CheckProperty4Update(objcc_CourseTeacherRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseTeacherRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseTeacherRelation_CheckUniCond4Update(objcc_CourseTeacherRelationEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_CourseTeacherRelation_UpdateRecordAsync(objcc_CourseTeacherRelationEN);
if (returnBool == true)
{
cc_CourseTeacherRelation_ReFreshCache(objcc_CourseTeacherRelationEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_CourseTeacherRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_CourseTeacherRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_CourseTeacherRelation_AddNewRecordWithReturnKeyAsync(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseTeacherRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseTeacherRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseTeacherRelation_UpdateRecordAsync(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_CourseTeacherRelationEN.sfUpdFldSetStr === undefined || objcc_CourseTeacherRelationEN.sfUpdFldSetStr === null || objcc_CourseTeacherRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseTeacherRelationEN.courseTeacherRelationId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseTeacherRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseTeacherRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseTeacherRelation_EditRecordExAsync(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_CourseTeacherRelationEN.sfUpdFldSetStr === undefined || objcc_CourseTeacherRelationEN.sfUpdFldSetStr === null || objcc_CourseTeacherRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseTeacherRelationEN.courseTeacherRelationId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseTeacherRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseTeacherRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseTeacherRelation_UpdateWithConditionAsync(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_CourseTeacherRelationEN.sfUpdFldSetStr === undefined || objcc_CourseTeacherRelationEN.sfUpdFldSetStr === null || objcc_CourseTeacherRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseTeacherRelationEN.courseTeacherRelationId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);
objcc_CourseTeacherRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseTeacherRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param objlngCourseTeacherRelationIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_CourseTeacherRelation_IsExistRecordCache(objcc_CourseTeacherRelationCond: ConditionCollection,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
if (arrcc_CourseTeacherRelationObjLstCache == null) return false;
let arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationObjLstCache;
if (objcc_CourseTeacherRelationCond.GetConditions().length == 0) return arrcc_CourseTeacherRelationSel.length>0?true:false;
try {
for (const objCondition of objcc_CourseTeacherRelationCond.GetConditions()) {
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
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_CourseTeacherRelationSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objcc_CourseTeacherRelationCond), cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param lngCourseTeacherRelationId:所给的关键字
 * @returns 对象
*/
export  async function cc_CourseTeacherRelation_IsExistCache(lngCourseTeacherRelationId:number,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
if (arrcc_CourseTeacherRelationObjLstCache == null) return false;
try
{
const arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationObjLstCache.filter(x => x.courseTeacherRelationId == lngCourseTeacherRelationId);
if (arrcc_CourseTeacherRelationSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngCourseTeacherRelationId, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngCourseTeacherRelationId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_CourseTeacherRelation_IsExistAsync(lngCourseTeacherRelationId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngCourseTeacherRelationId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseTeacherRelationCond:条件对象
 * @returns 对象列表记录数
*/
export  async function cc_CourseTeacherRelation_GetRecCountByCondCache(objcc_CourseTeacherRelationCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrcc_CourseTeacherRelationObjLstCache = await cc_CourseTeacherRelation_GetObjLstCache(strCourseId);
if (arrcc_CourseTeacherRelationObjLstCache == null) return 0;
let arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationObjLstCache;
if (objcc_CourseTeacherRelationCond.GetConditions().length == 0) return arrcc_CourseTeacherRelationSel.length;
try {
for (const objCondition of objcc_CourseTeacherRelationCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseTeacherRelationSel = arrcc_CourseTeacherRelationSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_CourseTeacherRelationSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objcc_CourseTeacherRelationCond), cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseTeacherRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_CourseTeacherRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseTeacherRelation_ConstructorName, strThisFuncName);
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
export  function cc_CourseTeacherRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_CourseTeacherRelation_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clscc_CourseTeacherRelationWApi.clscc_CourseTeacherRelationWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_CourseTeacherRelationWApi.clscc_CourseTeacherRelationWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clscc_CourseTeacherRelationEN._CurrTabName, strCourseId);
switch (clscc_CourseTeacherRelationEN.CacheModeId)
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
clscc_CourseTeacherRelationEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function cc_CourseTeacherRelation_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clscc_CourseTeacherRelationWApi.cc_CourseTeacherRelation_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_CourseTeacherRelationWApi.cc_CourseTeacherRelation_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clscc_CourseTeacherRelationEN._CurrTabName, strCourseId);
switch (clscc_CourseTeacherRelationEN.CacheModeId)
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
clscc_CourseTeacherRelationEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function cc_CourseTeacherRelation_GetLastRefreshTime():string
{
if (clscc_CourseTeacherRelationEN._RefreshTimeLst.length == 0) return "";
return clscc_CourseTeacherRelationEN._RefreshTimeLst[clscc_CourseTeacherRelationEN._RefreshTimeLst.length - 1];
}
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_CourseTeacherRelation_CheckPropertyNew(pobjcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.courseId) === true 
 || pobjcc_CourseTeacherRelationEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.idTeacher) === true 
 || pobjcc_CourseTeacherRelationEN.idTeacher.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[教师流水号]不能为空(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (null === pobjcc_CourseTeacherRelationEN.isCourseManager 
 || pobjcc_CourseTeacherRelationEN.isCourseManager != null && pobjcc_CourseTeacherRelationEN.isCourseManager.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[是否课程主要人]不能为空(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.courseId) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.courseId}(clscc_CourseTeacherRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.idTeacher) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.idTeacher) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教师流水号(idTeacher)]的长度不能超过8(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.idTeacher}(clscc_CourseTeacherRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.lastVisitedDate) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.lastVisitedDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[最后访问时间(lastVisitedDate)]的长度不能超过14(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.lastVisitedDate}(clscc_CourseTeacherRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updDate) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.updDate}(clscc_CourseTeacherRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updUser) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.updUser}(clscc_CourseTeacherRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.memo) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.memo}(clscc_CourseTeacherRelationBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_CourseTeacherRelationEN.courseTeacherRelationId && undefined !== pobjcc_CourseTeacherRelationEN.courseTeacherRelationId && tzDataType.isNumber(pobjcc_CourseTeacherRelationEN.courseTeacherRelationId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程教师关系表流水号(courseTeacherRelationId)]的值:[${pobjcc_CourseTeacherRelationEN.courseTeacherRelationId}], 非法,应该为数值型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.courseId) == false && undefined !== pobjcc_CourseTeacherRelationEN.courseId && tzDataType.isString(pobjcc_CourseTeacherRelationEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjcc_CourseTeacherRelationEN.courseId}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.idTeacher) == false && undefined !== pobjcc_CourseTeacherRelationEN.idTeacher && tzDataType.isString(pobjcc_CourseTeacherRelationEN.idTeacher) === false)
{
 throw new Error(`(errid:Watl000414)字段[教师流水号(idTeacher)]的值:[${pobjcc_CourseTeacherRelationEN.idTeacher}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseTeacherRelationEN.isCourseManager && undefined !== pobjcc_CourseTeacherRelationEN.isCourseManager && tzDataType.isBoolean(pobjcc_CourseTeacherRelationEN.isCourseManager) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否课程主要人(isCourseManager)]的值:[${pobjcc_CourseTeacherRelationEN.isCourseManager}], 非法,应该为布尔型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.lastVisitedDate) == false && undefined !== pobjcc_CourseTeacherRelationEN.lastVisitedDate && tzDataType.isString(pobjcc_CourseTeacherRelationEN.lastVisitedDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[最后访问时间(lastVisitedDate)]的值:[${pobjcc_CourseTeacherRelationEN.lastVisitedDate}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updDate) == false && undefined !== pobjcc_CourseTeacherRelationEN.updDate && tzDataType.isString(pobjcc_CourseTeacherRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_CourseTeacherRelationEN.updDate}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updUser) == false && undefined !== pobjcc_CourseTeacherRelationEN.updUser && tzDataType.isString(pobjcc_CourseTeacherRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjcc_CourseTeacherRelationEN.updUser}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.memo) == false && undefined !== pobjcc_CourseTeacherRelationEN.memo && tzDataType.isString(pobjcc_CourseTeacherRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_CourseTeacherRelationEN.memo}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.courseId) == false && pobjcc_CourseTeacherRelationEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseTeacherRelationEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.idTeacher) == false && pobjcc_CourseTeacherRelationEN.idTeacher != '[nuull]' && GetStrLen(pobjcc_CourseTeacherRelationEN.idTeacher) !=  8)
{
 throw ("(errid:Watl000415)字段[教师流水号]作为外键字段,长度应该为8(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_CourseTeacherRelation_CheckProperty4Update(pobjcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.courseId) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.courseId}(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.idTeacher) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.idTeacher) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教师流水号(idTeacher)]的长度不能超过8(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.idTeacher}(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.lastVisitedDate) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.lastVisitedDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[最后访问时间(lastVisitedDate)]的长度不能超过14(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.lastVisitedDate}(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updDate) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.updDate}(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updUser) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.updUser}(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.memo) == false && GetStrLen(pobjcc_CourseTeacherRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 课程教师关系(cc_CourseTeacherRelation))!值:${pobjcc_CourseTeacherRelationEN.memo}(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_CourseTeacherRelationEN.courseTeacherRelationId && undefined !== pobjcc_CourseTeacherRelationEN.courseTeacherRelationId && tzDataType.isNumber(pobjcc_CourseTeacherRelationEN.courseTeacherRelationId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程教师关系表流水号(courseTeacherRelationId)]的值:[${pobjcc_CourseTeacherRelationEN.courseTeacherRelationId}], 非法,应该为数值型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.courseId) == false && undefined !== pobjcc_CourseTeacherRelationEN.courseId && tzDataType.isString(pobjcc_CourseTeacherRelationEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjcc_CourseTeacherRelationEN.courseId}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.idTeacher) == false && undefined !== pobjcc_CourseTeacherRelationEN.idTeacher && tzDataType.isString(pobjcc_CourseTeacherRelationEN.idTeacher) === false)
{
 throw new Error(`(errid:Watl000417)字段[教师流水号(idTeacher)]的值:[${pobjcc_CourseTeacherRelationEN.idTeacher}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseTeacherRelationEN.isCourseManager && undefined !== pobjcc_CourseTeacherRelationEN.isCourseManager && tzDataType.isBoolean(pobjcc_CourseTeacherRelationEN.isCourseManager) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否课程主要人(isCourseManager)]的值:[${pobjcc_CourseTeacherRelationEN.isCourseManager}], 非法,应该为布尔型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.lastVisitedDate) == false && undefined !== pobjcc_CourseTeacherRelationEN.lastVisitedDate && tzDataType.isString(pobjcc_CourseTeacherRelationEN.lastVisitedDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[最后访问时间(lastVisitedDate)]的值:[${pobjcc_CourseTeacherRelationEN.lastVisitedDate}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updDate) == false && undefined !== pobjcc_CourseTeacherRelationEN.updDate && tzDataType.isString(pobjcc_CourseTeacherRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_CourseTeacherRelationEN.updDate}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.updUser) == false && undefined !== pobjcc_CourseTeacherRelationEN.updUser && tzDataType.isString(pobjcc_CourseTeacherRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjcc_CourseTeacherRelationEN.updUser}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.memo) == false && undefined !== pobjcc_CourseTeacherRelationEN.memo && tzDataType.isString(pobjcc_CourseTeacherRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_CourseTeacherRelationEN.memo}], 非法,应该为字符型(In 课程教师关系(cc_CourseTeacherRelation))!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjcc_CourseTeacherRelationEN.courseTeacherRelationId 
 || pobjcc_CourseTeacherRelationEN.courseTeacherRelationId != null && pobjcc_CourseTeacherRelationEN.courseTeacherRelationId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[课程教师关系表流水号]不能为空(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.courseId) == false && pobjcc_CourseTeacherRelationEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseTeacherRelationEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseTeacherRelationEN.idTeacher) == false && pobjcc_CourseTeacherRelationEN.idTeacher != '[nuull]' && GetStrLen(pobjcc_CourseTeacherRelationEN.idTeacher) !=  8)
{
 throw ("(errid:Watl000418)字段[教师流水号]作为外键字段,长度应该为8(In 课程教师关系)!(clscc_CourseTeacherRelationBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_CourseTeacherRelation_GetJSONStrByObj (pobjcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN): string
{
pobjcc_CourseTeacherRelationEN.sfUpdFldSetStr = pobjcc_CourseTeacherRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_CourseTeacherRelationEN);
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
export  function cc_CourseTeacherRelation_GetObjLstByJSONStr (strJSON: string): Array<clscc_CourseTeacherRelationEN>
{
let arrcc_CourseTeacherRelationObjLst = new Array<clscc_CourseTeacherRelationEN>();
if (strJSON === "")
{
return arrcc_CourseTeacherRelationObjLst;
}
try
{
arrcc_CourseTeacherRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_CourseTeacherRelationObjLst;
}
return arrcc_CourseTeacherRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_CourseTeacherRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_CourseTeacherRelation_GetObjLstByJSONObjLst (arrcc_CourseTeacherRelationObjLstS: Array<clscc_CourseTeacherRelationEN>): Array<clscc_CourseTeacherRelationEN>
{
const arrcc_CourseTeacherRelationObjLst = new Array<clscc_CourseTeacherRelationEN>();
for (const objInFor of arrcc_CourseTeacherRelationObjLstS) {
const obj1 = cc_CourseTeacherRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_CourseTeacherRelationObjLst.push(obj1);
}
return arrcc_CourseTeacherRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_CourseTeacherRelation_GetObjByJSONStr (strJSON: string): clscc_CourseTeacherRelationEN
{
let pobjcc_CourseTeacherRelationEN = new clscc_CourseTeacherRelationEN();
if (strJSON === "")
{
return pobjcc_CourseTeacherRelationEN;
}
try
{
pobjcc_CourseTeacherRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_CourseTeacherRelationEN;
}
return pobjcc_CourseTeacherRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_CourseTeacherRelation_GetCombineCondition(objcc_CourseTeacherRelationCond: clscc_CourseTeacherRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_CourseTeacherRelationCond.dicFldComparisonOp, clscc_CourseTeacherRelationEN.con_CourseTeacherRelationId) == true)
{
const strComparisonOpCourseTeacherRelationId:string = objcc_CourseTeacherRelationCond.dicFldComparisonOp[clscc_CourseTeacherRelationEN.con_CourseTeacherRelationId];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseTeacherRelationEN.con_CourseTeacherRelationId, objcc_CourseTeacherRelationCond.courseTeacherRelationId, strComparisonOpCourseTeacherRelationId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseTeacherRelationCond.dicFldComparisonOp, clscc_CourseTeacherRelationEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_CourseTeacherRelationCond.dicFldComparisonOp[clscc_CourseTeacherRelationEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseTeacherRelationEN.con_CourseId, objcc_CourseTeacherRelationCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseTeacherRelationCond.dicFldComparisonOp, clscc_CourseTeacherRelationEN.con_IdTeacher) == true)
{
const strComparisonOpIdTeacher:string = objcc_CourseTeacherRelationCond.dicFldComparisonOp[clscc_CourseTeacherRelationEN.con_IdTeacher];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseTeacherRelationEN.con_IdTeacher, objcc_CourseTeacherRelationCond.idTeacher, strComparisonOpIdTeacher);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseTeacherRelationCond.dicFldComparisonOp, clscc_CourseTeacherRelationEN.con_IsCourseManager) == true)
{
if (objcc_CourseTeacherRelationCond.isCourseManager == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_CourseTeacherRelationEN.con_IsCourseManager);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_CourseTeacherRelationEN.con_IsCourseManager);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseTeacherRelationCond.dicFldComparisonOp, clscc_CourseTeacherRelationEN.con_LastVisitedDate) == true)
{
const strComparisonOpLastVisitedDate:string = objcc_CourseTeacherRelationCond.dicFldComparisonOp[clscc_CourseTeacherRelationEN.con_LastVisitedDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseTeacherRelationEN.con_LastVisitedDate, objcc_CourseTeacherRelationCond.lastVisitedDate, strComparisonOpLastVisitedDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseTeacherRelationCond.dicFldComparisonOp, clscc_CourseTeacherRelationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_CourseTeacherRelationCond.dicFldComparisonOp[clscc_CourseTeacherRelationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseTeacherRelationEN.con_UpdDate, objcc_CourseTeacherRelationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseTeacherRelationCond.dicFldComparisonOp, clscc_CourseTeacherRelationEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objcc_CourseTeacherRelationCond.dicFldComparisonOp[clscc_CourseTeacherRelationEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseTeacherRelationEN.con_UpdUser, objcc_CourseTeacherRelationCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseTeacherRelationCond.dicFldComparisonOp, clscc_CourseTeacherRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_CourseTeacherRelationCond.dicFldComparisonOp[clscc_CourseTeacherRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseTeacherRelationEN.con_Memo, objcc_CourseTeacherRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseTeacherRelation(课程教师关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strIdTeacher: 教师流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseTeacherRelation_GetUniCondStr(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_CourseTeacherRelationEN.courseId);
 strWhereCond +=  Format(" and IdTeacher = '{0}'", objcc_CourseTeacherRelationEN.idTeacher);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseTeacherRelation(课程教师关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strIdTeacher: 教师流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseTeacherRelation_GetUniCondStr4Update(objcc_CourseTeacherRelationEN: clscc_CourseTeacherRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and CourseTeacherRelationId <> '{0}'", objcc_CourseTeacherRelationEN.courseTeacherRelationId);
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_CourseTeacherRelationEN.courseId);
 strWhereCond +=  Format(" and IdTeacher = '{0}'", objcc_CourseTeacherRelationEN.idTeacher);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_CourseTeacherRelationENS:源对象
 * @param objcc_CourseTeacherRelationENT:目标对象
*/
export  function cc_CourseTeacherRelation_CopyObjTo(objcc_CourseTeacherRelationENS: clscc_CourseTeacherRelationEN , objcc_CourseTeacherRelationENT: clscc_CourseTeacherRelationEN ): void 
{
objcc_CourseTeacherRelationENT.courseTeacherRelationId = objcc_CourseTeacherRelationENS.courseTeacherRelationId; //课程教师关系表流水号
objcc_CourseTeacherRelationENT.courseId = objcc_CourseTeacherRelationENS.courseId; //课程Id
objcc_CourseTeacherRelationENT.idTeacher = objcc_CourseTeacherRelationENS.idTeacher; //教师流水号
objcc_CourseTeacherRelationENT.isCourseManager = objcc_CourseTeacherRelationENS.isCourseManager; //是否课程主要人
objcc_CourseTeacherRelationENT.lastVisitedDate = objcc_CourseTeacherRelationENS.lastVisitedDate; //最后访问时间
objcc_CourseTeacherRelationENT.updDate = objcc_CourseTeacherRelationENS.updDate; //修改日期
objcc_CourseTeacherRelationENT.updUser = objcc_CourseTeacherRelationENS.updUser; //修改人
objcc_CourseTeacherRelationENT.memo = objcc_CourseTeacherRelationENS.memo; //备注
objcc_CourseTeacherRelationENT.sfUpdFldSetStr = objcc_CourseTeacherRelationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_CourseTeacherRelationENS:源对象
 * @param objcc_CourseTeacherRelationENT:目标对象
*/
export  function cc_CourseTeacherRelation_GetObjFromJsonObj(objcc_CourseTeacherRelationENS: clscc_CourseTeacherRelationEN): clscc_CourseTeacherRelationEN 
{
 const objcc_CourseTeacherRelationENT: clscc_CourseTeacherRelationEN = new clscc_CourseTeacherRelationEN();
ObjectAssign(objcc_CourseTeacherRelationENT, objcc_CourseTeacherRelationENS);
 return objcc_CourseTeacherRelationENT;
}
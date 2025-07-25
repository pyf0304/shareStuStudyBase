
 /**
 * 类名:clscc_CourseKnowledgesWApi
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/08 09:49:03
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
 * 知识点(cc_CourseKnowledges)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月08日.
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
import { cc_CourseKnowledgesCache,isFuncMapCache } from "@/viewsShare/Knowledges/cc_CourseKnowledgesVueShare";
import { clscc_CourseKnowledgesENEx } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesENEx";
import { clscc_CourseKnowledgesEN } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN";
import { cc_CourseChapter_func } from "@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi";
import { clscc_CourseChapterEN } from "@/ts/L0Entity/Knowledges/clscc_CourseChapterEN";
import { KnowledgeType_func } from "@/ts/L3ForWApi/Knowledges/clsKnowledgeTypeWApi";
import { clsKnowledgeTypeEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN";
import { vcc_Course_Sim_func } from "@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi";
import { clsvcc_Course_SimEN } from "@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN";
import { vUsersSim_func } from "@/ts/L3ForWApi/UserManage/clsvUsersSimWApi";
import { clsvUsersSimEN } from "@/ts/L0Entity/UserManage/clsvUsersSimEN";
import { cc_KnowledgeModules_func } from "@/ts/L3ForWApi/Knowledges/clscc_KnowledgeModulesWApi";
import { clscc_KnowledgeModulesEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN";
import { KPSource_func } from "@/ts/L3ForWApi/Knowledges/clsKPSourceWApi";
import { clsKPSourceEN } from "@/ts/L0Entity/Knowledges/clsKPSourceEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const cc_CourseKnowledges_Controller = "cc_CourseKnowledgesApi";
 export const cc_CourseKnowledges_ConstructorName = "cc_CourseKnowledges";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strCourseKnowledgeId:关键字
 * @returns 对象
 **/
export  async function cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId: string): Promise<clscc_CourseKnowledgesEN|null>  
{
const strThisFuncName = "GetObjByCourseKnowledgeIdAsync";

if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
  const strMsg = Format("参数:[strCourseKnowledgeId]不能为空!(In clscc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseKnowledgeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clscc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdAsync)", strCourseKnowledgeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByCourseKnowledgeId";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCourseKnowledgeId,
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
const objcc_CourseKnowledges = cc_CourseKnowledges_GetObjFromJsonObj(returnObj);
return objcc_CourseKnowledges;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
*/
export  async function cc_CourseKnowledges_GetObjByCourseKnowledgeIdlocalStorage(strCourseKnowledgeId: string) {
const strThisFuncName = "GetObjByCourseKnowledgeIdlocalStorage";

if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
  const strMsg = Format("参数:[strCourseKnowledgeId]不能为空!(In clscc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseKnowledgeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clscc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdlocalStorage)", strCourseKnowledgeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, strCourseKnowledgeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objcc_CourseKnowledgesCache: clscc_CourseKnowledgesEN = JSON.parse(strTempObj);
return objcc_CourseKnowledgesCache;
}
try
{
const objcc_CourseKnowledges = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId);
if (objcc_CourseKnowledges != null)
{
localStorage.setItem(strKey, JSON.stringify(objcc_CourseKnowledges));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objcc_CourseKnowledges;
}
return objcc_CourseKnowledges;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCourseKnowledgeId, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
*/
export  async function cc_CourseKnowledges_GetObjByCourseKnowledgeIdCache(strCourseKnowledgeId:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByCourseKnowledgeIdCache";

if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
  const strMsg = Format("参数:[strCourseKnowledgeId]不能为空!(In clscc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseKnowledgeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clscc_CourseKnowledgesWApi.GetObjByCourseKnowledgeIdCache)", strCourseKnowledgeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
try
{
const arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesObjLstCache.filter(x => 
 x.courseKnowledgeId == strCourseKnowledgeId );
let objcc_CourseKnowledges: clscc_CourseKnowledgesEN;
if (arrcc_CourseKnowledgesSel.length > 0)
{
objcc_CourseKnowledges = arrcc_CourseKnowledgesSel[0];
return objcc_CourseKnowledges;
}
else
{
if (bolTryAsyncOnce == true)
{
const objcc_CourseKnowledgesConst = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId);
if (objcc_CourseKnowledgesConst != null)
{
cc_CourseKnowledges_ReFreshThisCache(strCourseId);
return objcc_CourseKnowledgesConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strCourseKnowledgeId, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objcc_CourseKnowledges:所给的对象
 * @returns 对象
*/
export  async function cc_CourseKnowledges_UpdateObjInLstCache(objcc_CourseKnowledges: clscc_CourseKnowledgesEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
const obj = arrcc_CourseKnowledgesObjLstCache.find(x => x.courseId == objcc_CourseKnowledges.courseId && x.knowledgeName == objcc_CourseKnowledges.knowledgeName);
if (obj != null)
{
objcc_CourseKnowledges.courseKnowledgeId = obj.courseKnowledgeId;
ObjectAssign( obj, objcc_CourseKnowledges);
}
else
{
arrcc_CourseKnowledgesObjLstCache.push(objcc_CourseKnowledges);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_CourseKnowledges_SortFunDefa(a:clscc_CourseKnowledgesEN , b:clscc_CourseKnowledgesEN): number 
{
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_CourseKnowledges_SortFunDefa2Fld(a:clscc_CourseKnowledgesEN , b:clscc_CourseKnowledgesEN): number 
{
if (a.knowledgeName == b.knowledgeName) return a.knowledgeTitle.localeCompare(b.knowledgeTitle);
else return a.knowledgeName.localeCompare(b.knowledgeName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_CourseKnowledges_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_CourseKnowledgesEN.con_CourseKnowledgeId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clscc_CourseKnowledgesEN.con_KnowledgeName:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.knowledgeName.localeCompare(b.knowledgeName);
}
case clscc_CourseKnowledgesEN.con_KnowledgeTitle:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (a.knowledgeTitle == null) return -1;
if (b.knowledgeTitle == null) return 1;
return a.knowledgeTitle.localeCompare(b.knowledgeTitle);
}
case clscc_CourseKnowledgesEN.con_KnowledgeContent:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (a.knowledgeContent == null) return -1;
if (b.knowledgeContent == null) return 1;
return a.knowledgeContent.localeCompare(b.knowledgeContent);
}
case clscc_CourseKnowledgesEN.con_KnowledgeModuleId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (a.knowledgeModuleId == null) return -1;
if (b.knowledgeModuleId == null) return 1;
return a.knowledgeModuleId.localeCompare(b.knowledgeModuleId);
}
case clscc_CourseKnowledgesEN.con_KpSourceId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.kpSourceId.localeCompare(b.kpSourceId);
}
case clscc_CourseKnowledgesEN.con_LevelNo:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.levelNo-b.levelNo;
}
case clscc_CourseKnowledgesEN.con_CourseId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clscc_CourseKnowledgesEN.con_KnowledgeTypeId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (a.knowledgeTypeId == null) return -1;
if (b.knowledgeTypeId == null) return 1;
return a.knowledgeTypeId.localeCompare(b.knowledgeTypeId);
}
case clscc_CourseKnowledgesEN.con_CourseChapterId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (a.courseChapterId == null) return -1;
if (b.courseChapterId == null) return 1;
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clscc_CourseKnowledgesEN.con_ModuleWeight:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.moduleWeight-b.moduleWeight;
}
case clscc_CourseKnowledgesEN.con_InUse:
return (a: clscc_CourseKnowledgesEN) => {
if (a.inUse == true) return 1;
else return -1
}
case clscc_CourseKnowledgesEN.con_UserId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.userId.localeCompare(b.userId);
}
case clscc_CourseKnowledgesEN.con_IsShow:
return (a: clscc_CourseKnowledgesEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clscc_CourseKnowledgesEN.con_IsCast:
return (a: clscc_CourseKnowledgesEN) => {
if (a.isCast == true) return 1;
else return -1
}
case clscc_CourseKnowledgesEN.con_LikeCount:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.likeCount-b.likeCount;
}
case clscc_CourseKnowledgesEN.con_QuestionNum:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.questionNum-b.questionNum;
}
case clscc_CourseKnowledgesEN.con_OrderNum:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return a.orderNum-b.orderNum;
}
case clscc_CourseKnowledgesEN.con_UpdDate:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clscc_CourseKnowledgesEN.con_UpdUser:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clscc_CourseKnowledgesEN.con_Memo:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseKnowledges]中不存在!(in ${ cc_CourseKnowledges_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_CourseKnowledgesEN.con_CourseKnowledgeId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clscc_CourseKnowledgesEN.con_KnowledgeName:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.knowledgeName.localeCompare(a.knowledgeName);
}
case clscc_CourseKnowledgesEN.con_KnowledgeTitle:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (b.knowledgeTitle == null) return -1;
if (a.knowledgeTitle == null) return 1;
return b.knowledgeTitle.localeCompare(a.knowledgeTitle);
}
case clscc_CourseKnowledgesEN.con_KnowledgeContent:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (b.knowledgeContent == null) return -1;
if (a.knowledgeContent == null) return 1;
return b.knowledgeContent.localeCompare(a.knowledgeContent);
}
case clscc_CourseKnowledgesEN.con_KnowledgeModuleId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (b.knowledgeModuleId == null) return -1;
if (a.knowledgeModuleId == null) return 1;
return b.knowledgeModuleId.localeCompare(a.knowledgeModuleId);
}
case clscc_CourseKnowledgesEN.con_KpSourceId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.kpSourceId.localeCompare(a.kpSourceId);
}
case clscc_CourseKnowledgesEN.con_LevelNo:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.levelNo-a.levelNo;
}
case clscc_CourseKnowledgesEN.con_CourseId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clscc_CourseKnowledgesEN.con_KnowledgeTypeId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (b.knowledgeTypeId == null) return -1;
if (a.knowledgeTypeId == null) return 1;
return b.knowledgeTypeId.localeCompare(a.knowledgeTypeId);
}
case clscc_CourseKnowledgesEN.con_CourseChapterId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (b.courseChapterId == null) return -1;
if (a.courseChapterId == null) return 1;
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clscc_CourseKnowledgesEN.con_ModuleWeight:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.moduleWeight-a.moduleWeight;
}
case clscc_CourseKnowledgesEN.con_InUse:
return (b: clscc_CourseKnowledgesEN) => {
if (b.inUse == true) return 1;
else return -1
}
case clscc_CourseKnowledgesEN.con_UserId:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.userId.localeCompare(a.userId);
}
case clscc_CourseKnowledgesEN.con_IsShow:
return (b: clscc_CourseKnowledgesEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clscc_CourseKnowledgesEN.con_IsCast:
return (b: clscc_CourseKnowledgesEN) => {
if (b.isCast == true) return 1;
else return -1
}
case clscc_CourseKnowledgesEN.con_LikeCount:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.likeCount-a.likeCount;
}
case clscc_CourseKnowledgesEN.con_QuestionNum:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.questionNum-a.questionNum;
}
case clscc_CourseKnowledgesEN.con_OrderNum:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
return b.orderNum-a.orderNum;
}
case clscc_CourseKnowledgesEN.con_UpdDate:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clscc_CourseKnowledgesEN.con_UpdUser:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clscc_CourseKnowledgesEN.con_Memo:
return (a: clscc_CourseKnowledgesEN, b: clscc_CourseKnowledgesEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseKnowledges]中不存在!(in ${ cc_CourseKnowledges_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
*/
export  async function cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache(strCourseKnowledgeId: string,strCourseId: string) {

if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
  const strMsg = Format("参数:[strCourseKnowledgeId]不能为空!(In clscc_CourseKnowledgesWApi.GetNameByCourseKnowledgeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseKnowledgeId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseKnowledgeId]的长度:[{0}]不正确!(clscc_CourseKnowledgesWApi.GetNameByCourseKnowledgeIdCache)", strCourseKnowledgeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrcc_CourseKnowledgesObjLstCache == null) return "";
try
{
const arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesObjLstCache.filter(x => 
 x.courseKnowledgeId == strCourseKnowledgeId );
let objcc_CourseKnowledges: clscc_CourseKnowledgesEN;
if (arrcc_CourseKnowledgesSel.length > 0)
{
objcc_CourseKnowledges = arrcc_CourseKnowledgesSel[0];
return objcc_CourseKnowledges.knowledgeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strCourseKnowledgeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function cc_CourseKnowledges_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_CourseKnowledgesEN.con_CourseKnowledgeId:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.courseKnowledgeId === value;
}
case clscc_CourseKnowledgesEN.con_KnowledgeName:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.knowledgeName === value;
}
case clscc_CourseKnowledgesEN.con_KnowledgeTitle:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.knowledgeTitle === value;
}
case clscc_CourseKnowledgesEN.con_KnowledgeContent:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.knowledgeContent === value;
}
case clscc_CourseKnowledgesEN.con_KnowledgeModuleId:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.knowledgeModuleId === value;
}
case clscc_CourseKnowledgesEN.con_KpSourceId:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.kpSourceId === value;
}
case clscc_CourseKnowledgesEN.con_LevelNo:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.levelNo === value;
}
case clscc_CourseKnowledgesEN.con_CourseId:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.courseId === value;
}
case clscc_CourseKnowledgesEN.con_KnowledgeTypeId:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.knowledgeTypeId === value;
}
case clscc_CourseKnowledgesEN.con_CourseChapterId:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.courseChapterId === value;
}
case clscc_CourseKnowledgesEN.con_ModuleWeight:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.moduleWeight === value;
}
case clscc_CourseKnowledgesEN.con_InUse:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.inUse === value;
}
case clscc_CourseKnowledgesEN.con_UserId:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.userId === value;
}
case clscc_CourseKnowledgesEN.con_IsShow:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.isShow === value;
}
case clscc_CourseKnowledgesEN.con_IsCast:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.isCast === value;
}
case clscc_CourseKnowledgesEN.con_LikeCount:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.likeCount === value;
}
case clscc_CourseKnowledgesEN.con_QuestionNum:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.questionNum === value;
}
case clscc_CourseKnowledgesEN.con_OrderNum:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.orderNum === value;
}
case clscc_CourseKnowledgesEN.con_UpdDate:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.updDate === value;
}
case clscc_CourseKnowledgesEN.con_UpdUser:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.updUser === value;
}
case clscc_CourseKnowledgesEN.con_Memo:
return (obj: clscc_CourseKnowledgesEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseKnowledges]中不存在!(in ${ cc_CourseKnowledges_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function cc_CourseKnowledges_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clscc_CourseKnowledgesWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_CourseKnowledgesWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clscc_CourseKnowledgesEN.con_CourseKnowledgeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clscc_CourseKnowledgesEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clscc_CourseKnowledgesEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strCourseKnowledgeId = strInValue;
if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
return "";
}
const objcc_CourseKnowledges = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdCache(strCourseKnowledgeId , strCourseIdClassfy);
if (objcc_CourseKnowledges == null) return "";
if (objcc_CourseKnowledges.GetFldValue(strOutFldName) == null) return "";
return objcc_CourseKnowledges.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function cc_CourseKnowledges_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clscc_CourseKnowledgesWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clscc_CourseKnowledgesWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clscc_CourseKnowledgesEN.con_CourseKnowledgeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrcc_CourseKnowledges = await cc_CourseKnowledges_GetObjLstCache(strCourseIdClassfy);
if (arrcc_CourseKnowledges == null) return [];
let arrcc_CourseKnowledgesSel = arrcc_CourseKnowledges;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrcc_CourseKnowledgesSel.length == 0) return [];
return arrcc_CourseKnowledgesSel.map(x=>x.courseKnowledgeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseKnowledges_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetFirstObjAsync(strWhereCond: string): Promise<clscc_CourseKnowledgesEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const objcc_CourseKnowledges = cc_CourseKnowledges_GetObjFromJsonObj(returnObj);
return objcc_CourseKnowledges;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_CourseKnowledgesEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_CourseKnowledgesEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_CourseKnowledgesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_CourseKnowledgesEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrcc_CourseKnowledgesExObjLstCache: Array<clscc_CourseKnowledgesEN> = CacheHelper.Get(strKey);
const arrcc_CourseKnowledgesObjLstT = cc_CourseKnowledges_GetObjLstByJSONObjLst(arrcc_CourseKnowledgesExObjLstCache);
return arrcc_CourseKnowledgesObjLstT;
}
try
{
const arrcc_CourseKnowledgesExObjLst = await cc_CourseKnowledges_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrcc_CourseKnowledgesExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_CourseKnowledgesExObjLst.length);
console.log(strInfo);
return arrcc_CourseKnowledgesExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseKnowledges_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_CourseKnowledgesEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_CourseKnowledgesEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clscc_CourseKnowledgesEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_CourseKnowledgesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_CourseKnowledgesEN.CacheAddiCondition);
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
const arrcc_CourseKnowledgesExObjLstCache: Array<clscc_CourseKnowledgesEN> = JSON.parse(strTempObjLst);
const arrcc_CourseKnowledgesObjLstT = cc_CourseKnowledges_GetObjLstByJSONObjLst(arrcc_CourseKnowledgesExObjLstCache);
return arrcc_CourseKnowledgesObjLstT;
}
try
{
const arrcc_CourseKnowledgesExObjLst = await cc_CourseKnowledges_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrcc_CourseKnowledgesExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_CourseKnowledgesExObjLst.length);
console.log(strInfo);
return arrcc_CourseKnowledgesExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseKnowledges_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrcc_CourseKnowledgesObjLstCache: Array<clscc_CourseKnowledgesEN> = JSON.parse(strTempObjLst);
return arrcc_CourseKnowledgesObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_CourseKnowledges_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clscc_CourseKnowledgesEN.WhereFormat) == false)
{
strWhereCond = Format(clscc_CourseKnowledgesEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clscc_CourseKnowledgesEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clscc_CourseKnowledgesEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clscc_CourseKnowledgesEN.CacheAddiCondition);
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
const arrcc_CourseKnowledgesExObjLstCache: Array<clscc_CourseKnowledgesEN> = JSON.parse(strTempObjLst);
const arrcc_CourseKnowledgesObjLstT = cc_CourseKnowledges_GetObjLstByJSONObjLst(arrcc_CourseKnowledgesExObjLstCache);
return arrcc_CourseKnowledgesObjLstT;
}
try
{
const arrcc_CourseKnowledgesExObjLst = await cc_CourseKnowledges_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrcc_CourseKnowledgesExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrcc_CourseKnowledgesExObjLst.length);
console.log(strInfo);
return arrcc_CourseKnowledgesExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseKnowledges_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrcc_CourseKnowledgesObjLstCache: Array<clscc_CourseKnowledgesEN> = JSON.parse(strTempObjLst);
return arrcc_CourseKnowledgesObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseKnowledges_GetObjLstCache(strCourseId: string): Promise<Array<clscc_CourseKnowledgesEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clscc_CourseKnowledgesWApi.cc_CourseKnowledges_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_CourseKnowledgesWApi.cc_CourseKnowledges_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrcc_CourseKnowledgesObjLstCache;
switch (clscc_CourseKnowledgesEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstClientCache(strCourseId);
break;
default:
arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstClientCache(strCourseId);
break;
}
return arrcc_CourseKnowledgesObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function cc_CourseKnowledges_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrcc_CourseKnowledgesObjLstCache;
switch (clscc_CourseKnowledgesEN.CacheModeId)
{
case "04"://sessionStorage
arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrcc_CourseKnowledgesObjLstCache = null;
break;
default:
arrcc_CourseKnowledgesObjLstCache = null;
break;
}
return arrcc_CourseKnowledgesObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrCourseKnowledgeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_CourseKnowledges_GetSubObjLstCache(objcc_CourseKnowledgesCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
let arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesObjLstCache;
if (objcc_CourseKnowledgesCond.GetConditions().length == 0) return arrcc_CourseKnowledgesSel;
try {
//console.log(sstrKeys);
for (const objCondition of objcc_CourseKnowledgesCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_CourseKnowledgesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objcc_CourseKnowledgesCond), cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_CourseKnowledgesEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseKnowledgeId:关键字列表
 * @returns 对象列表
 **/
export  async function cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync(arrCourseKnowledgeId: Array<string>): Promise<Array<clscc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetObjLstByCourseKnowledgeIdLstAsync";
const strAction = "GetObjLstByCourseKnowledgeIdLst";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseKnowledgeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param arrstrCourseKnowledgeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstCache(arrCourseKnowledgeIdLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByCourseKnowledgeIdLstCache";
try
{
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
const arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesObjLstCache.filter(x => arrCourseKnowledgeIdLst.indexOf(x.courseKnowledgeId)>-1);
return arrcc_CourseKnowledgesSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrCourseKnowledgeIdLst.join(","), cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseKnowledgesEN>();
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrcc_CourseKnowledgesObjLstCache.length == 0) return arrcc_CourseKnowledgesObjLstCache;
let arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesObjLstCache;
const objcc_CourseKnowledgesCond = objPagerPara.conditionCollection;
if (objcc_CourseKnowledgesCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clscc_CourseKnowledgesEN>();
}
//console.log("clscc_CourseKnowledgesWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objcc_CourseKnowledgesCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_CourseKnowledgesSel.length == 0) return arrcc_CourseKnowledgesSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.sort(cc_CourseKnowledges_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.sort(objPagerPara.sortFun);
}
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.slice(intStart, intEnd);     
return arrcc_CourseKnowledgesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_CourseKnowledgesEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_CourseKnowledges_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_CourseKnowledgesEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseKnowledgesEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseKnowledges_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param strCourseKnowledgeId:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_CourseKnowledges_DelRecordAsync(strCourseKnowledgeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strCourseKnowledgeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param arrCourseKnowledgeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_CourseKnowledges_Delcc_CourseKnowledgessAsync(arrCourseKnowledgeId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_CourseKnowledgessAsync";
const strAction = "Delcc_CourseKnowledgess";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseKnowledgeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetObjExLstByPagerCache(objPagerPara: stuPagerPara , strCourseId:string):Promise<Array<clscc_CourseKnowledgesENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
 const objSortInfo = GetSortExpressInfo(objPagerPara);
const isFuncMapKey = `${ objSortInfo.SortFld}`;
const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
//从缓存中获取对象，如果缓存中不存在就扩展复制
const arrNewObj = new Array<clscc_CourseKnowledgesENEx>();
const arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map((obj) => {
const cacheKey = `${ obj.courseKnowledgeId}_${ obj.courseId}`;
if (cc_CourseKnowledgesCache[cacheKey])
{
const oldObj = cc_CourseKnowledgesCache[cacheKey];
return oldObj;
}
else
{
const newObj = cc_CourseKnowledges_CopyToEx(obj);
arrNewObj.push(newObj);
cc_CourseKnowledgesCache[cacheKey] = newObj;
return newObj;
}
});
for (const newObj of arrNewObj) {
for (const strFldName of Object.keys(isFuncMapCache)) {
await cc_CourseKnowledges_FuncMapByFldName(strFldName, newObj);
}
}
//检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
if (
IsNullOrEmpty(objSortInfo.SortFld) == false &&
clscc_CourseKnowledgesEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
(bolIsFuncMap == false || bolIsFuncMap == undefined)
)
{
for (const newObj of arrcc_CourseKnowledgesExObjLst) {
await cc_CourseKnowledges_FuncMapByFldName(objSortInfo.SortFld, newObj);
const cacheKey = `${ newObj.courseKnowledgeId}_${ newObj.courseId}`;
cc_CourseKnowledgesCache[cacheKey] = newObj;
}
isFuncMapCache[isFuncMapKey] = true;
}
if (arrcc_CourseKnowledgesExObjLst.length == 0) return arrcc_CourseKnowledgesExObjLst;
let arrcc_CourseKnowledgesSel: Array < clscc_CourseKnowledgesENEx > = arrcc_CourseKnowledgesExObjLst;
const objcc_CourseKnowledgesCond = objPagerPara.conditionCollection;
if (objcc_CourseKnowledgesCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return arrcc_CourseKnowledgesExObjLst;
}
try {
for (const objCondition of objcc_CourseKnowledgesCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_CourseKnowledgesSel.length == 0) return arrcc_CourseKnowledgesSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.sort(cc_CourseKnowledges_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.sort(objPagerPara.sortFun);
}
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.slice(intStart, intEnd);     
return arrcc_CourseKnowledgesSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clscc_CourseKnowledgesENEx>();
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objcc_CourseKnowledgesENS:源对象
 * @returns 目标对象=>clscc_CourseKnowledgesEN:objcc_CourseKnowledgesENT
 **/
export  function cc_CourseKnowledges_CopyToEx(objcc_CourseKnowledgesENS:clscc_CourseKnowledgesEN ): clscc_CourseKnowledgesENEx
{
const strThisFuncName  = cc_CourseKnowledges_CopyToEx.name;
 const objcc_CourseKnowledgesENT = new clscc_CourseKnowledgesENEx();
try
{
ObjectAssign(objcc_CourseKnowledgesENT, objcc_CourseKnowledgesENS);
 return objcc_CourseKnowledgesENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objcc_CourseKnowledgesENT;
}
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function cc_CourseKnowledges_FuncMapByFldName(strFldName: string, objcc_CourseKnowledgesEx: clscc_CourseKnowledgesENEx)
{
const strThisFuncName = cc_CourseKnowledges_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clscc_CourseKnowledgesEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clscc_CourseKnowledgesENEx.con_CourseName:
return cc_CourseKnowledges_FuncMapCourseName(objcc_CourseKnowledgesEx);
case clscc_CourseKnowledgesENEx.con_CourseChapterName:
return cc_CourseKnowledges_FuncMapCourseChapterName(objcc_CourseKnowledgesEx);
case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
return cc_CourseKnowledges_FuncMapKnowledgeTypeName(objcc_CourseKnowledgesEx);
case clscc_CourseKnowledgesENEx.con_UserName:
return cc_CourseKnowledges_FuncMapUserName(objcc_CourseKnowledgesEx);
case clscc_CourseKnowledgesENEx.con_CourseCode:
return cc_CourseKnowledges_FuncMapCourseCode(objcc_CourseKnowledgesEx);
case clscc_CourseKnowledgesENEx.con_KnowledgeModuleName:
return cc_CourseKnowledges_FuncMapKnowledgeModuleName(objcc_CourseKnowledgesEx);
case clscc_CourseKnowledgesENEx.con_DateTimeSim:
return cc_CourseKnowledges_FuncMapDateTimeSim(objcc_CourseKnowledgesEx);
case clscc_CourseKnowledgesENEx.con_KpSourceName:
return cc_CourseKnowledges_FuncMapKpSourceName(objcc_CourseKnowledgesEx);
        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_CourseKnowledges_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_CourseKnowledgesENEx.con_CourseName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return -1;
if (b.courseName === null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clscc_CourseKnowledgesENEx.con_CourseChapterName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return a.courseChapterName.localeCompare(b.courseChapterName);
}
case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return a.knowledgeTypeName.localeCompare(b.knowledgeTypeName);
}
case clscc_CourseKnowledgesENEx.con_ChapterName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.chapterName === null && b.chapterName === null) return 0;
if (a.chapterName === null) return -1;
if (b.chapterName === null) return 1;
return a.chapterName.localeCompare(b.chapterName);
}
case clscc_CourseKnowledgesENEx.con_UserName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.userName === null && b.userName === null) return 0;
if (a.userName === null) return -1;
if (b.userName === null) return 1;
return a.userName.localeCompare(b.userName);
}
case clscc_CourseKnowledgesENEx.con_CourseCode:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.courseCode === null && b.courseCode === null) return 0;
if (a.courseCode === null) return -1;
if (b.courseCode === null) return 1;
return a.courseCode.localeCompare(b.courseCode);
}
case clscc_CourseKnowledgesENEx.con_SectionNameSim:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.sectionNameSim === null && b.sectionNameSim === null) return 0;
if (a.sectionNameSim === null) return -1;
if (b.sectionNameSim === null) return 1;
return a.sectionNameSim.localeCompare(b.sectionNameSim);
}
case clscc_CourseKnowledgesENEx.con_ChapterNameSim:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.chapterNameSim === null && b.chapterNameSim === null) return 0;
if (a.chapterNameSim === null) return -1;
if (b.chapterNameSim === null) return 1;
return a.chapterNameSim.localeCompare(b.chapterNameSim);
}
case clscc_CourseKnowledgesENEx.con_SectionName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.sectionName === null && b.sectionName === null) return 0;
if (a.sectionName === null) return -1;
if (b.sectionName === null) return 1;
return a.sectionName.localeCompare(b.sectionName);
}
case clscc_CourseKnowledgesENEx.con_KnowledgeModuleName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return a.knowledgeModuleName.localeCompare(b.knowledgeModuleName);
}
case clscc_CourseKnowledgesENEx.con_DateTimeSim:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
if (a.dateTimeSim === null) return -1;
if (b.dateTimeSim === null) return 1;
return a.dateTimeSim.localeCompare(b.dateTimeSim);
}
case clscc_CourseKnowledgesENEx.con_KnowledgeNameEx:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return a.knowledgeNameEx.localeCompare(b.knowledgeNameEx);
}
case clscc_CourseKnowledgesENEx.con_KpSourceName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.kpSourceName === null && b.kpSourceName === null) return 0;
if (a.kpSourceName === null) return -1;
if (b.kpSourceName === null) return 1;
return a.kpSourceName.localeCompare(b.kpSourceName);
}
case clscc_CourseKnowledgesENEx.con_CmPrjId:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return a.cmPrjId.localeCompare(b.cmPrjId);
}
        default:
return cc_CourseKnowledges_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clscc_CourseKnowledgesENEx.con_CourseName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return 1;
if (b.courseName === null) return -1;
return b.courseName.localeCompare(a.courseName);
}
case clscc_CourseKnowledgesENEx.con_CourseChapterName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return b.courseChapterName.localeCompare(a.courseChapterName);
}
case clscc_CourseKnowledgesENEx.con_KnowledgeTypeName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return b.knowledgeTypeName.localeCompare(a.knowledgeTypeName);
}
case clscc_CourseKnowledgesENEx.con_ChapterName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.chapterName === null && b.chapterName === null) return 0;
if (a.chapterName === null) return 1;
if (b.chapterName === null) return -1;
return b.chapterName.localeCompare(a.chapterName);
}
case clscc_CourseKnowledgesENEx.con_UserName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.userName === null && b.userName === null) return 0;
if (a.userName === null) return 1;
if (b.userName === null) return -1;
return b.userName.localeCompare(a.userName);
}
case clscc_CourseKnowledgesENEx.con_CourseCode:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.courseCode === null && b.courseCode === null) return 0;
if (a.courseCode === null) return 1;
if (b.courseCode === null) return -1;
return b.courseCode.localeCompare(a.courseCode);
}
case clscc_CourseKnowledgesENEx.con_SectionNameSim:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.sectionNameSim === null && b.sectionNameSim === null) return 0;
if (a.sectionNameSim === null) return 1;
if (b.sectionNameSim === null) return -1;
return b.sectionNameSim.localeCompare(a.sectionNameSim);
}
case clscc_CourseKnowledgesENEx.con_ChapterNameSim:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.chapterNameSim === null && b.chapterNameSim === null) return 0;
if (a.chapterNameSim === null) return 1;
if (b.chapterNameSim === null) return -1;
return b.chapterNameSim.localeCompare(a.chapterNameSim);
}
case clscc_CourseKnowledgesENEx.con_SectionName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.sectionName === null && b.sectionName === null) return 0;
if (a.sectionName === null) return 1;
if (b.sectionName === null) return -1;
return b.sectionName.localeCompare(a.sectionName);
}
case clscc_CourseKnowledgesENEx.con_KnowledgeModuleName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return b.knowledgeModuleName.localeCompare(a.knowledgeModuleName);
}
case clscc_CourseKnowledgesENEx.con_DateTimeSim:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
if (a.dateTimeSim === null) return 1;
if (b.dateTimeSim === null) return -1;
return b.dateTimeSim.localeCompare(a.dateTimeSim);
}
case clscc_CourseKnowledgesENEx.con_KnowledgeNameEx:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return b.knowledgeNameEx.localeCompare(a.knowledgeNameEx);
}
case clscc_CourseKnowledgesENEx.con_KpSourceName:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
    if (a.kpSourceName === null && b.kpSourceName === null) return 0;
if (a.kpSourceName === null) return 1;
if (b.kpSourceName === null) return -1;
return b.kpSourceName.localeCompare(a.kpSourceName);
}
case clscc_CourseKnowledgesENEx.con_CmPrjId:
return (a: clscc_CourseKnowledgesENEx, b: clscc_CourseKnowledgesENEx) => {
return b.cmPrjId.localeCompare(a.cmPrjId);
}
        default:
return cc_CourseKnowledges_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export  async function cc_CourseKnowledges_FuncMapCourseChapterName(objcc_CourseKnowledges:clscc_CourseKnowledgesENEx )
{
const strThisFuncName = cc_CourseKnowledges_FuncMapCourseChapterName.name;
try
{
if (IsNullOrEmpty(objcc_CourseKnowledges.courseChapterName) == true){
 const ccCourseChapterCourseChapterId = objcc_CourseKnowledges.courseChapterId;
if (IsNullOrEmpty(objcc_CourseKnowledges.courseId) == true)
{
const strMsg = `函数映射[CourseChapterName]数据出错,courseId不能为空!(in ${ cc_CourseKnowledges_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const ccCourseChapterCourseChapterName = await cc_CourseChapter_func(clscc_CourseChapterEN.con_CourseChapterId, clscc_CourseChapterEN.con_CourseChapterName, ccCourseChapterCourseChapterId , objcc_CourseKnowledges.courseId);
 objcc_CourseKnowledges.courseChapterName = ccCourseChapterCourseChapterName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001414)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export  async function cc_CourseKnowledges_FuncMapKnowledgeTypeName(objcc_CourseKnowledges:clscc_CourseKnowledgesENEx )
{
const strThisFuncName = cc_CourseKnowledges_FuncMapKnowledgeTypeName.name;
try
{
if (IsNullOrEmpty(objcc_CourseKnowledges.knowledgeTypeName) == true){
 const KnowledgeTypeKnowledgeTypeId = objcc_CourseKnowledges.knowledgeTypeId;
if (IsNullOrEmpty(objcc_CourseKnowledges.courseId) == true)
{
const strMsg = `函数映射[KnowledgeTypeName]数据出错,courseId不能为空!(in ${ cc_CourseKnowledges_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const KnowledgeTypeKnowledgeTypeName = await KnowledgeType_func(clsKnowledgeTypeEN.con_KnowledgeTypeId, clsKnowledgeTypeEN.con_KnowledgeTypeName, KnowledgeTypeKnowledgeTypeId , objcc_CourseKnowledges.courseId);
 objcc_CourseKnowledges.knowledgeTypeName = KnowledgeTypeKnowledgeTypeName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001415)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export  async function cc_CourseKnowledges_FuncMapCourseName(objcc_CourseKnowledges:clscc_CourseKnowledgesENEx )
{
const strThisFuncName = cc_CourseKnowledges_FuncMapCourseName.name;
try
{
if (IsNullOrEmpty(objcc_CourseKnowledges.courseName) == true){
 const vccCourseSimCourseId = objcc_CourseKnowledges.courseId;
 const vccCourseSimCourseName = await vcc_Course_Sim_func(clsvcc_Course_SimEN.con_CourseId, clsvcc_Course_SimEN.con_CourseName, vccCourseSimCourseId );
 objcc_CourseKnowledges.courseName = vccCourseSimCourseName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001412)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export  async function cc_CourseKnowledges_FuncMapUserName(objcc_CourseKnowledges:clscc_CourseKnowledgesENEx )
{
const strThisFuncName = cc_CourseKnowledges_FuncMapUserName.name;
try
{
if (IsNullOrEmpty(objcc_CourseKnowledges.userName) == true){
 const vUsersSimUserId = objcc_CourseKnowledges.userId;
if (IsNullOrEmpty(objcc_CourseKnowledges.cmPrjId) == true)
{
const strMsg = `函数映射[UserName]数据出错,cmPrjId不能为空!(in ${ cc_CourseKnowledges_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const vUsersSimUserName = await vUsersSim_func(clsvUsersSimEN.con_UserId, clsvUsersSimEN.con_UserName, vUsersSimUserId , objcc_CourseKnowledges.cmPrjId);
 objcc_CourseKnowledges.userName = vUsersSimUserName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001416)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export  async function cc_CourseKnowledges_FuncMapCourseCode(objcc_CourseKnowledges:clscc_CourseKnowledgesENEx )
{
const strThisFuncName = cc_CourseKnowledges_FuncMapCourseCode.name;
try
{
if (IsNullOrEmpty(objcc_CourseKnowledges.courseCode) == true){
 const vccCourseSimCourseId = objcc_CourseKnowledges.courseId;
 const vccCourseSimCourseCode = await vcc_Course_Sim_func(clsvcc_Course_SimEN.con_CourseId, clsvcc_Course_SimEN.con_CourseCode, vccCourseSimCourseId );
 objcc_CourseKnowledges.courseCode = vccCourseSimCourseCode;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001417)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export  async function cc_CourseKnowledges_FuncMapKnowledgeModuleName(objcc_CourseKnowledges:clscc_CourseKnowledgesENEx )
{
const strThisFuncName = cc_CourseKnowledges_FuncMapKnowledgeModuleName.name;
try
{
if (IsNullOrEmpty(objcc_CourseKnowledges.knowledgeModuleName) == true){
 const ccKnowledgeModulesKnowledgeModuleId = objcc_CourseKnowledges.knowledgeModuleId;
if (IsNullOrEmpty(objcc_CourseKnowledges.courseId) == true)
{
const strMsg = `函数映射[KnowledgeModuleName]数据出错,courseId不能为空!(in ${ cc_CourseKnowledges_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const ccKnowledgeModulesKnowledgeModuleName = await cc_KnowledgeModules_func(clscc_KnowledgeModulesEN.con_KnowledgeModuleId, clscc_KnowledgeModulesEN.con_KnowledgeModuleName, ccKnowledgeModulesKnowledgeModuleId , objcc_CourseKnowledges.courseId);
 objcc_CourseKnowledges.knowledgeModuleName = ccKnowledgeModulesKnowledgeModuleName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001418)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export  async function cc_CourseKnowledges_FuncMapDateTimeSim(objcc_CourseKnowledges:clscc_CourseKnowledgesENEx )
{
const strThisFuncName = cc_CourseKnowledges_FuncMapDateTimeSim.name;
try
{
if (IsNullOrEmpty(objcc_CourseKnowledges.dateTimeSim) == true){
 const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objcc_CourseKnowledges.updDate);
 objcc_CourseKnowledges.dateTimeSim = CommonDataNodeDateTimeSim;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001326)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseKnowledgesS:源对象
 **/
export  async function cc_CourseKnowledges_FuncMapKpSourceName(objcc_CourseKnowledges:clscc_CourseKnowledgesENEx )
{
const strThisFuncName = cc_CourseKnowledges_FuncMapKpSourceName.name;
try
{
if (IsNullOrEmpty(objcc_CourseKnowledges.kpSourceName) == true){
 const KPSourceKPSourceId = objcc_CourseKnowledges.kpSourceId;
 const KPSourceKPSourceName = await KPSource_func(clsKPSourceEN.con_KpSourceId, clsKPSourceEN.con_KpSourceName, KPSourceKPSourceId );
 objcc_CourseKnowledges.kpSourceName = KPSourceKPSourceName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001419)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function cc_CourseKnowledges_Delcc_CourseKnowledgessByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_CourseKnowledgessByCondAsync";
const strAction = "Delcc_CourseKnowledgessByCond";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseKnowledges_AddNewRecordAsync(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_CourseKnowledgesEN);
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseKnowledgesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseKnowledges_AddNewRecordWithMaxIdAsync(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseKnowledgesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseKnowledges_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseKnowledges_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objcc_CourseKnowledgesEN);
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseKnowledges_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objcc_CourseKnowledgesEN);
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return (data.returnBool);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_AddNewObjSave(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_CourseKnowledges_CheckPropertyNew(objcc_CourseKnowledgesEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseKnowledges_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseKnowledges_CheckUniCond4Add(objcc_CourseKnowledgesEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await cc_CourseKnowledges_AddNewRecordWithMaxIdAsync(objcc_CourseKnowledgesEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
cc_CourseKnowledges_ReFreshCache(objcc_CourseKnowledgesEN.courseId);
}
else
{
const strInfo = `添加[知识点(cc_CourseKnowledges)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_CourseKnowledges_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_CourseKnowledges_CheckUniCond4Add(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseKnowledges_GetUniCondStr(objcc_CourseKnowledgesEN);
const bolIsExistCondition = await cc_CourseKnowledges_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseKnowledges_CheckUniCond4Update(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseKnowledges_GetUniCondStr4Update(objcc_CourseKnowledgesEN);
const bolIsExistCondition = await cc_CourseKnowledges_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseKnowledges_UpdateObjSave(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_CourseKnowledgesEN.sfUpdFldSetStr = objcc_CourseKnowledgesEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_CourseKnowledgesEN.courseKnowledgeId == "" || objcc_CourseKnowledgesEN.courseKnowledgeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_CourseKnowledges_CheckProperty4Update(objcc_CourseKnowledgesEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseKnowledges_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseKnowledges_CheckUniCond4Update(objcc_CourseKnowledgesEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_CourseKnowledges_UpdateRecordAsync(objcc_CourseKnowledgesEN);
if (returnBool == true)
{
cc_CourseKnowledges_ReFreshCache(objcc_CourseKnowledgesEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_CourseKnowledges_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseKnowledges_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objcc_CourseKnowledgesEN);
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseKnowledges_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objcc_CourseKnowledgesEN);
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objOrderByData, config);
const data = response.data;
if (data.errorId == 0)
{
return data.returnBool;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_CourseKnowledgesEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_CourseKnowledges_AddNewRecordWithReturnKeyAsync(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseKnowledgesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseKnowledges_UpdateRecordAsync(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_CourseKnowledgesEN.sfUpdFldSetStr === undefined || objcc_CourseKnowledgesEN.sfUpdFldSetStr === null || objcc_CourseKnowledgesEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseKnowledgesEN.courseKnowledgeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseKnowledgesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseKnowledgesEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseKnowledges_EditRecordExAsync(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_CourseKnowledgesEN.sfUpdFldSetStr === undefined || objcc_CourseKnowledgesEN.sfUpdFldSetStr === null || objcc_CourseKnowledgesEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseKnowledgesEN.courseKnowledgeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseKnowledgesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseKnowledgesEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseKnowledges_UpdateWithConditionAsync(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_CourseKnowledgesEN.sfUpdFldSetStr === undefined || objcc_CourseKnowledgesEN.sfUpdFldSetStr === null || objcc_CourseKnowledgesEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseKnowledgesEN.courseKnowledgeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);
objcc_CourseKnowledgesEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseKnowledgesEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objstrCourseKnowledgeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function cc_CourseKnowledges_IsExistRecordCache(objcc_CourseKnowledgesCond: ConditionCollection,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrcc_CourseKnowledgesObjLstCache == null) return false;
let arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesObjLstCache;
if (objcc_CourseKnowledgesCond.GetConditions().length == 0) return arrcc_CourseKnowledgesSel.length>0?true:false;
try {
for (const objCondition of objcc_CourseKnowledgesCond.GetConditions()) {
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
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrcc_CourseKnowledgesSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objcc_CourseKnowledgesCond), cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param strCourseKnowledgeId:所给的关键字
 * @returns 对象
*/
export  async function cc_CourseKnowledges_IsExistCache(strCourseKnowledgeId:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrcc_CourseKnowledgesObjLstCache == null) return false;
try
{
const arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesObjLstCache.filter(x => x.courseKnowledgeId == strCourseKnowledgeId);
if (arrcc_CourseKnowledgesSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strCourseKnowledgeId, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strCourseKnowledgeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_CourseKnowledges_IsExistAsync(strCourseKnowledgeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strCourseKnowledgeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseKnowledgesCond:条件对象
 * @returns 对象列表记录数
*/
export  async function cc_CourseKnowledges_GetRecCountByCondCache(objcc_CourseKnowledgesCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrcc_CourseKnowledgesObjLstCache = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrcc_CourseKnowledgesObjLstCache == null) return 0;
let arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesObjLstCache;
if (objcc_CourseKnowledgesCond.GetConditions().length == 0) return arrcc_CourseKnowledgesSel.length;
try {
for (const objCondition of objcc_CourseKnowledgesCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrcc_CourseKnowledgesSel = arrcc_CourseKnowledgesSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrcc_CourseKnowledgesSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objcc_CourseKnowledgesCond), cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  async function cc_CourseKnowledges_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_CourseKnowledges_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseKnowledges_ConstructorName, strThisFuncName);
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
export  function cc_CourseKnowledges_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_CourseKnowledges_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clscc_CourseKnowledgesWApi.clscc_CourseKnowledgesWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_CourseKnowledgesWApi.clscc_CourseKnowledgesWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, strCourseId);
switch (clscc_CourseKnowledgesEN.CacheModeId)
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
clscc_CourseKnowledgesEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function cc_CourseKnowledges_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clscc_CourseKnowledgesWApi.cc_CourseKnowledges_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clscc_CourseKnowledgesWApi.cc_CourseKnowledges_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, strCourseId);
switch (clscc_CourseKnowledgesEN.CacheModeId)
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
clscc_CourseKnowledgesEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function cc_CourseKnowledges_GetLastRefreshTime():string
{
if (clscc_CourseKnowledgesEN._RefreshTimeLst.length == 0) return "";
return clscc_CourseKnowledgesEN._RefreshTimeLst[clscc_CourseKnowledgesEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function cc_CourseKnowledges_BindDdl_CourseKnowledgeIdByCourseIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clscc_CourseKnowledgesWApi.BindDdl_CourseKnowledgeIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_CourseKnowledgesWApi.BindDdl_CourseKnowledgeIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_CourseKnowledgeIdByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_CourseKnowledgeIdByCourseIdInDivCache");
let arrObjLstSel = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clscc_CourseKnowledgesEN.con_CourseKnowledgeId, clscc_CourseKnowledgesEN.con_KnowledgeName, "选知识点...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clscc_CourseKnowledgesWApi.BindDdl_CourseKnowledgeIdByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clscc_CourseKnowledgesWApi.BindDdl_CourseKnowledgeIdByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_CourseKnowledgeIdByCourseIdInDivCache");
const arrcc_CourseKnowledges = new Array<clscc_CourseKnowledgesEN>();
let arrObjLstSel = await cc_CourseKnowledges_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
const obj0 = new clscc_CourseKnowledgesEN();
obj0.courseKnowledgeId = '0';
obj0.knowledgeName = '选知识点...';
arrcc_CourseKnowledges.push(obj0);
arrObjLstSel.forEach(x => arrcc_CourseKnowledges.push(x));
return arrcc_CourseKnowledges;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_CourseKnowledges_CheckPropertyNew(pobjcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[知识点名称]不能为空(In 知识点)!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.kpSourceId) === true 
 || pobjcc_CourseKnowledgesEN.kpSourceId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[知识点来源Id]不能为空(In 知识点)!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseId) === true 
 || pobjcc_CourseKnowledgesEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 知识点)!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.userId) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 知识点)!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseKnowledgeId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.courseKnowledgeId}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeName) == false && GetStrLen(pobjcc_CourseKnowledgesEN.knowledgeName) > 200)
{
 throw new Error(`(errid:Watl000413)字段[知识点名称(knowledgeName)]的长度不能超过200(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.knowledgeName}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeTitle) == false && GetStrLen(pobjcc_CourseKnowledgesEN.knowledgeTitle) > 200)
{
 throw new Error(`(errid:Watl000413)字段[知识点标题(knowledgeTitle)]的长度不能超过200(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.knowledgeTitle}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeModuleId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.knowledgeModuleId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点模块Id(knowledgeModuleId)]的长度不能超过8(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.knowledgeModuleId}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.kpSourceId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.kpSourceId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[知识点来源Id(kpSourceId)]的长度不能超过2(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.kpSourceId}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.courseId}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeTypeId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.knowledgeTypeId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[知识点类型Id(knowledgeTypeId)]的长度不能超过4(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.knowledgeTypeId}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseChapterId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.courseChapterId}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.userId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.userId}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.updDate) == false && GetStrLen(pobjcc_CourseKnowledgesEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.updDate}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.updUser) == false && GetStrLen(pobjcc_CourseKnowledgesEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.updUser}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.memo) == false && GetStrLen(pobjcc_CourseKnowledgesEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.memo}(clscc_CourseKnowledgesBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseKnowledgeId) == false && undefined !== pobjcc_CourseKnowledgesEN.courseKnowledgeId && tzDataType.isString(pobjcc_CourseKnowledgesEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点Id(courseKnowledgeId)]的值:[${pobjcc_CourseKnowledgesEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeName) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeName && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点名称(knowledgeName)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeName}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeTitle) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeTitle && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeTitle) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点标题(knowledgeTitle)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeTitle}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeContent) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeContent && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点内容(knowledgeContent)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeContent}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeModuleId) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeModuleId && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeModuleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点模块Id(knowledgeModuleId)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeModuleId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.kpSourceId) == false && undefined !== pobjcc_CourseKnowledgesEN.kpSourceId && tzDataType.isString(pobjcc_CourseKnowledgesEN.kpSourceId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点来源Id(kpSourceId)]的值:[${pobjcc_CourseKnowledgesEN.kpSourceId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseKnowledgesEN.levelNo && undefined !== pobjcc_CourseKnowledgesEN.levelNo && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.levelNo) === false)
{
 throw new Error(`(errid:Watl000414)字段[等级No(levelNo)]的值:[${pobjcc_CourseKnowledgesEN.levelNo}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseId) == false && undefined !== pobjcc_CourseKnowledgesEN.courseId && tzDataType.isString(pobjcc_CourseKnowledgesEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjcc_CourseKnowledgesEN.courseId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeTypeId) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeTypeId && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点类型Id(knowledgeTypeId)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeTypeId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseChapterId) == false && undefined !== pobjcc_CourseKnowledgesEN.courseChapterId && tzDataType.isString(pobjcc_CourseKnowledgesEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程章节ID(courseChapterId)]的值:[${pobjcc_CourseKnowledgesEN.courseChapterId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseKnowledgesEN.moduleWeight && undefined !== pobjcc_CourseKnowledgesEN.moduleWeight && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.moduleWeight) === false)
{
 throw new Error(`(errid:Watl000414)字段[模块权重(moduleWeight)]的值:[${pobjcc_CourseKnowledgesEN.moduleWeight}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseKnowledgesEN.inUse && undefined !== pobjcc_CourseKnowledgesEN.inUse && tzDataType.isBoolean(pobjcc_CourseKnowledgesEN.inUse) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否在用(inUse)]的值:[${pobjcc_CourseKnowledgesEN.inUse}], 非法,应该为布尔型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.userId) == false && undefined !== pobjcc_CourseKnowledgesEN.userId && tzDataType.isString(pobjcc_CourseKnowledgesEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjcc_CourseKnowledgesEN.userId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseKnowledgesEN.isShow && undefined !== pobjcc_CourseKnowledgesEN.isShow && tzDataType.isBoolean(pobjcc_CourseKnowledgesEN.isShow) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否启用(isShow)]的值:[${pobjcc_CourseKnowledgesEN.isShow}], 非法,应该为布尔型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseKnowledgesEN.isCast && undefined !== pobjcc_CourseKnowledgesEN.isCast && tzDataType.isBoolean(pobjcc_CourseKnowledgesEN.isCast) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否播放(isCast)]的值:[${pobjcc_CourseKnowledgesEN.isCast}], 非法,应该为布尔型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseKnowledgesEN.likeCount && undefined !== pobjcc_CourseKnowledgesEN.likeCount && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.likeCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源喜欢数量(likeCount)]的值:[${pobjcc_CourseKnowledgesEN.likeCount}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseKnowledgesEN.questionNum && undefined !== pobjcc_CourseKnowledgesEN.questionNum && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.questionNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[题目数(questionNum)]的值:[${pobjcc_CourseKnowledgesEN.questionNum}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (null != pobjcc_CourseKnowledgesEN.orderNum && undefined !== pobjcc_CourseKnowledgesEN.orderNum && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjcc_CourseKnowledgesEN.orderNum}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.updDate) == false && undefined !== pobjcc_CourseKnowledgesEN.updDate && tzDataType.isString(pobjcc_CourseKnowledgesEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_CourseKnowledgesEN.updDate}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.updUser) == false && undefined !== pobjcc_CourseKnowledgesEN.updUser && tzDataType.isString(pobjcc_CourseKnowledgesEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjcc_CourseKnowledgesEN.updUser}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.memo) == false && undefined !== pobjcc_CourseKnowledgesEN.memo && tzDataType.isString(pobjcc_CourseKnowledgesEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_CourseKnowledgesEN.memo}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseId) == false && pobjcc_CourseKnowledgesEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseKnowledgesEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 知识点)!(clscc_CourseKnowledgesBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseChapterId) == false && pobjcc_CourseKnowledgesEN.courseChapterId != '[nuull]' && GetStrLen(pobjcc_CourseKnowledgesEN.courseChapterId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程章节ID]作为外键字段,长度应该为8(In 知识点)!(clscc_CourseKnowledgesBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_CourseKnowledges_CheckProperty4Update(pobjcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseKnowledgeId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.courseKnowledgeId}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeName) == false && GetStrLen(pobjcc_CourseKnowledgesEN.knowledgeName) > 200)
{
 throw new Error(`(errid:Watl000416)字段[知识点名称(knowledgeName)]的长度不能超过200(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.knowledgeName}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeTitle) == false && GetStrLen(pobjcc_CourseKnowledgesEN.knowledgeTitle) > 200)
{
 throw new Error(`(errid:Watl000416)字段[知识点标题(knowledgeTitle)]的长度不能超过200(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.knowledgeTitle}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeModuleId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.knowledgeModuleId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点模块Id(knowledgeModuleId)]的长度不能超过8(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.knowledgeModuleId}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.kpSourceId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.kpSourceId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[知识点来源Id(kpSourceId)]的长度不能超过2(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.kpSourceId}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.courseId}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeTypeId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.knowledgeTypeId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[知识点类型Id(knowledgeTypeId)]的长度不能超过4(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.knowledgeTypeId}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseChapterId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.courseChapterId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程章节ID(courseChapterId)]的长度不能超过8(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.courseChapterId}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.userId) == false && GetStrLen(pobjcc_CourseKnowledgesEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.userId}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.updDate) == false && GetStrLen(pobjcc_CourseKnowledgesEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.updDate}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.updUser) == false && GetStrLen(pobjcc_CourseKnowledgesEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.updUser}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.memo) == false && GetStrLen(pobjcc_CourseKnowledgesEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点(cc_CourseKnowledges))!值:${pobjcc_CourseKnowledgesEN.memo}(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseKnowledgeId) == false && undefined !== pobjcc_CourseKnowledgesEN.courseKnowledgeId && tzDataType.isString(pobjcc_CourseKnowledgesEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点Id(courseKnowledgeId)]的值:[${pobjcc_CourseKnowledgesEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeName) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeName && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点名称(knowledgeName)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeName}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeTitle) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeTitle && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeTitle) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点标题(knowledgeTitle)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeTitle}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeContent) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeContent && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点内容(knowledgeContent)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeContent}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeModuleId) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeModuleId && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeModuleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点模块Id(knowledgeModuleId)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeModuleId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.kpSourceId) == false && undefined !== pobjcc_CourseKnowledgesEN.kpSourceId && tzDataType.isString(pobjcc_CourseKnowledgesEN.kpSourceId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点来源Id(kpSourceId)]的值:[${pobjcc_CourseKnowledgesEN.kpSourceId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseKnowledgesEN.levelNo && undefined !== pobjcc_CourseKnowledgesEN.levelNo && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.levelNo) === false)
{
 throw new Error(`(errid:Watl000417)字段[等级No(levelNo)]的值:[${pobjcc_CourseKnowledgesEN.levelNo}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseId) == false && undefined !== pobjcc_CourseKnowledgesEN.courseId && tzDataType.isString(pobjcc_CourseKnowledgesEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjcc_CourseKnowledgesEN.courseId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.knowledgeTypeId) == false && undefined !== pobjcc_CourseKnowledgesEN.knowledgeTypeId && tzDataType.isString(pobjcc_CourseKnowledgesEN.knowledgeTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点类型Id(knowledgeTypeId)]的值:[${pobjcc_CourseKnowledgesEN.knowledgeTypeId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseChapterId) == false && undefined !== pobjcc_CourseKnowledgesEN.courseChapterId && tzDataType.isString(pobjcc_CourseKnowledgesEN.courseChapterId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程章节ID(courseChapterId)]的值:[${pobjcc_CourseKnowledgesEN.courseChapterId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseKnowledgesEN.moduleWeight && undefined !== pobjcc_CourseKnowledgesEN.moduleWeight && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.moduleWeight) === false)
{
 throw new Error(`(errid:Watl000417)字段[模块权重(moduleWeight)]的值:[${pobjcc_CourseKnowledgesEN.moduleWeight}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseKnowledgesEN.inUse && undefined !== pobjcc_CourseKnowledgesEN.inUse && tzDataType.isBoolean(pobjcc_CourseKnowledgesEN.inUse) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否在用(inUse)]的值:[${pobjcc_CourseKnowledgesEN.inUse}], 非法,应该为布尔型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.userId) == false && undefined !== pobjcc_CourseKnowledgesEN.userId && tzDataType.isString(pobjcc_CourseKnowledgesEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjcc_CourseKnowledgesEN.userId}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseKnowledgesEN.isShow && undefined !== pobjcc_CourseKnowledgesEN.isShow && tzDataType.isBoolean(pobjcc_CourseKnowledgesEN.isShow) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否启用(isShow)]的值:[${pobjcc_CourseKnowledgesEN.isShow}], 非法,应该为布尔型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseKnowledgesEN.isCast && undefined !== pobjcc_CourseKnowledgesEN.isCast && tzDataType.isBoolean(pobjcc_CourseKnowledgesEN.isCast) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否播放(isCast)]的值:[${pobjcc_CourseKnowledgesEN.isCast}], 非法,应该为布尔型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseKnowledgesEN.likeCount && undefined !== pobjcc_CourseKnowledgesEN.likeCount && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.likeCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源喜欢数量(likeCount)]的值:[${pobjcc_CourseKnowledgesEN.likeCount}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseKnowledgesEN.questionNum && undefined !== pobjcc_CourseKnowledgesEN.questionNum && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.questionNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[题目数(questionNum)]的值:[${pobjcc_CourseKnowledgesEN.questionNum}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (null != pobjcc_CourseKnowledgesEN.orderNum && undefined !== pobjcc_CourseKnowledgesEN.orderNum && tzDataType.isNumber(pobjcc_CourseKnowledgesEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjcc_CourseKnowledgesEN.orderNum}], 非法,应该为数值型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.updDate) == false && undefined !== pobjcc_CourseKnowledgesEN.updDate && tzDataType.isString(pobjcc_CourseKnowledgesEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_CourseKnowledgesEN.updDate}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.updUser) == false && undefined !== pobjcc_CourseKnowledgesEN.updUser && tzDataType.isString(pobjcc_CourseKnowledgesEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjcc_CourseKnowledgesEN.updUser}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.memo) == false && undefined !== pobjcc_CourseKnowledgesEN.memo && tzDataType.isString(pobjcc_CourseKnowledgesEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_CourseKnowledgesEN.memo}], 非法,应该为字符型(In 知识点(cc_CourseKnowledges))!(clscc_CourseKnowledgesBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseId) == false && pobjcc_CourseKnowledgesEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseKnowledgesEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 知识点)!(clscc_CourseKnowledgesBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseKnowledgesEN.courseChapterId) == false && pobjcc_CourseKnowledgesEN.courseChapterId != '[nuull]' && GetStrLen(pobjcc_CourseKnowledgesEN.courseChapterId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程章节ID]作为外键字段,长度应该为8(In 知识点)!(clscc_CourseKnowledgesBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_CourseKnowledges_GetJSONStrByObj (pobjcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN): string
{
pobjcc_CourseKnowledgesEN.sfUpdFldSetStr = pobjcc_CourseKnowledgesEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_CourseKnowledgesEN);
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
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function cc_CourseKnowledges_GetObjLstByJSONStr (strJSON: string): Array<clscc_CourseKnowledgesEN>
{
let arrcc_CourseKnowledgesObjLst = new Array<clscc_CourseKnowledgesEN>();
if (strJSON === "")
{
return arrcc_CourseKnowledgesObjLst;
}
try
{
arrcc_CourseKnowledgesObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_CourseKnowledgesObjLst;
}
return arrcc_CourseKnowledgesObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_CourseKnowledgesObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_CourseKnowledges_GetObjLstByJSONObjLst (arrcc_CourseKnowledgesObjLstS: Array<clscc_CourseKnowledgesEN>): Array<clscc_CourseKnowledgesEN>
{
const arrcc_CourseKnowledgesObjLst = new Array<clscc_CourseKnowledgesEN>();
for (const objInFor of arrcc_CourseKnowledgesObjLstS) {
const obj1 = cc_CourseKnowledges_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_CourseKnowledgesObjLst.push(obj1);
}
return arrcc_CourseKnowledgesObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_CourseKnowledges_GetObjByJSONStr (strJSON: string): clscc_CourseKnowledgesEN
{
let pobjcc_CourseKnowledgesEN = new clscc_CourseKnowledgesEN();
if (strJSON === "")
{
return pobjcc_CourseKnowledgesEN;
}
try
{
pobjcc_CourseKnowledgesEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_CourseKnowledgesEN;
}
return pobjcc_CourseKnowledgesEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_CourseKnowledges_GetCombineCondition(objcc_CourseKnowledgesCond: clscc_CourseKnowledgesEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_CourseKnowledgeId, objcc_CourseKnowledgesCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_KnowledgeName) == true)
{
const strComparisonOpKnowledgeName:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_KnowledgeName];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeName, objcc_CourseKnowledgesCond.knowledgeName, strComparisonOpKnowledgeName);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_KnowledgeTitle) == true)
{
const strComparisonOpKnowledgeTitle:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_KnowledgeTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeTitle, objcc_CourseKnowledgesCond.knowledgeTitle, strComparisonOpKnowledgeTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_KnowledgeModuleId) == true)
{
const strComparisonOpKnowledgeModuleId:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_KnowledgeModuleId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeModuleId, objcc_CourseKnowledgesCond.knowledgeModuleId, strComparisonOpKnowledgeModuleId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_KpSourceId) == true)
{
const strComparisonOpKpSourceId:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_KpSourceId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_KpSourceId, objcc_CourseKnowledgesCond.kpSourceId, strComparisonOpKpSourceId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_LevelNo) == true)
{
const strComparisonOpLevelNo:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_LevelNo];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseKnowledgesEN.con_LevelNo, objcc_CourseKnowledgesCond.levelNo, strComparisonOpLevelNo);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_CourseId, objcc_CourseKnowledgesCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_KnowledgeTypeId) == true)
{
const strComparisonOpKnowledgeTypeId:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_KnowledgeTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeTypeId, objcc_CourseKnowledgesCond.knowledgeTypeId, strComparisonOpKnowledgeTypeId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_CourseChapterId, objcc_CourseKnowledgesCond.courseChapterId, strComparisonOpCourseChapterId);
}
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_InUse) == true)
{
if (objcc_CourseKnowledgesCond.inUse == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_CourseKnowledgesEN.con_InUse);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_CourseKnowledgesEN.con_InUse);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_UserId, objcc_CourseKnowledgesCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_IsShow) == true)
{
if (objcc_CourseKnowledgesCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_CourseKnowledgesEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_CourseKnowledgesEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_IsCast) == true)
{
if (objcc_CourseKnowledgesCond.isCast == true)
{
strWhereCond += Format(" And {0} = '1'", clscc_CourseKnowledgesEN.con_IsCast);
}
else
{
strWhereCond += Format(" And {0} = '0'", clscc_CourseKnowledgesEN.con_IsCast);
}
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_LikeCount) == true)
{
const strComparisonOpLikeCount:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_LikeCount];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseKnowledgesEN.con_LikeCount, objcc_CourseKnowledgesCond.likeCount, strComparisonOpLikeCount);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_QuestionNum) == true)
{
const strComparisonOpQuestionNum:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_QuestionNum];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseKnowledgesEN.con_QuestionNum, objcc_CourseKnowledgesCond.questionNum, strComparisonOpQuestionNum);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseKnowledgesEN.con_OrderNum, objcc_CourseKnowledgesCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_UpdDate, objcc_CourseKnowledgesCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_UpdUser, objcc_CourseKnowledgesCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseKnowledgesCond.dicFldComparisonOp, clscc_CourseKnowledgesEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_CourseKnowledgesCond.dicFldComparisonOp[clscc_CourseKnowledgesEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseKnowledgesEN.con_Memo, objcc_CourseKnowledgesCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseKnowledges(知识点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strKnowledgeName: 知识点名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseKnowledges_GetUniCondStr(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_CourseKnowledgesEN.courseId);
 strWhereCond +=  Format(" and KnowledgeName = '{0}'", objcc_CourseKnowledgesEN.knowledgeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseKnowledges(知识点),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strKnowledgeName: 知识点名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseKnowledges_GetUniCondStr4Update(objcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and CourseKnowledgeId <> '{0}'", objcc_CourseKnowledgesEN.courseKnowledgeId);
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_CourseKnowledgesEN.courseId);
 strWhereCond +=  Format(" and KnowledgeName = '{0}'", objcc_CourseKnowledgesEN.knowledgeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_CourseKnowledgesENS:源对象
 * @param objcc_CourseKnowledgesENT:目标对象
*/
export  function cc_CourseKnowledges_CopyObjTo(objcc_CourseKnowledgesENS: clscc_CourseKnowledgesEN , objcc_CourseKnowledgesENT: clscc_CourseKnowledgesEN ): void 
{
objcc_CourseKnowledgesENT.courseKnowledgeId = objcc_CourseKnowledgesENS.courseKnowledgeId; //知识点Id
objcc_CourseKnowledgesENT.knowledgeName = objcc_CourseKnowledgesENS.knowledgeName; //知识点名称
objcc_CourseKnowledgesENT.knowledgeTitle = objcc_CourseKnowledgesENS.knowledgeTitle; //知识点标题
objcc_CourseKnowledgesENT.knowledgeContent = objcc_CourseKnowledgesENS.knowledgeContent; //知识点内容
objcc_CourseKnowledgesENT.knowledgeModuleId = objcc_CourseKnowledgesENS.knowledgeModuleId; //知识点模块Id
objcc_CourseKnowledgesENT.kpSourceId = objcc_CourseKnowledgesENS.kpSourceId; //知识点来源Id
objcc_CourseKnowledgesENT.levelNo = objcc_CourseKnowledgesENS.levelNo; //等级No
objcc_CourseKnowledgesENT.courseId = objcc_CourseKnowledgesENS.courseId; //课程Id
objcc_CourseKnowledgesENT.knowledgeTypeId = objcc_CourseKnowledgesENS.knowledgeTypeId; //知识点类型Id
objcc_CourseKnowledgesENT.courseChapterId = objcc_CourseKnowledgesENS.courseChapterId; //课程章节ID
objcc_CourseKnowledgesENT.moduleWeight = objcc_CourseKnowledgesENS.moduleWeight; //模块权重
objcc_CourseKnowledgesENT.inUse = objcc_CourseKnowledgesENS.inUse; //是否在用
objcc_CourseKnowledgesENT.userId = objcc_CourseKnowledgesENS.userId; //用户ID
objcc_CourseKnowledgesENT.isShow = objcc_CourseKnowledgesENS.isShow; //是否启用
objcc_CourseKnowledgesENT.isCast = objcc_CourseKnowledgesENS.isCast; //是否播放
objcc_CourseKnowledgesENT.likeCount = objcc_CourseKnowledgesENS.likeCount; //资源喜欢数量
objcc_CourseKnowledgesENT.questionNum = objcc_CourseKnowledgesENS.questionNum; //题目数
objcc_CourseKnowledgesENT.orderNum = objcc_CourseKnowledgesENS.orderNum; //序号
objcc_CourseKnowledgesENT.updDate = objcc_CourseKnowledgesENS.updDate; //修改日期
objcc_CourseKnowledgesENT.updUser = objcc_CourseKnowledgesENS.updUser; //修改人
objcc_CourseKnowledgesENT.memo = objcc_CourseKnowledgesENS.memo; //备注
objcc_CourseKnowledgesENT.sfUpdFldSetStr = objcc_CourseKnowledgesENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_CourseKnowledgesENS:源对象
 * @param objcc_CourseKnowledgesENT:目标对象
*/
export  function cc_CourseKnowledges_GetObjFromJsonObj(objcc_CourseKnowledgesENS: clscc_CourseKnowledgesEN): clscc_CourseKnowledgesEN 
{
 const objcc_CourseKnowledgesENT: clscc_CourseKnowledgesEN = new clscc_CourseKnowledgesEN();
ObjectAssign(objcc_CourseKnowledgesENT, objcc_CourseKnowledgesENS);
 return objcc_CourseKnowledgesENT;
}
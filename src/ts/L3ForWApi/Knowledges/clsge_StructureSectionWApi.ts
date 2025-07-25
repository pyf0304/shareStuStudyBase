
 /**
 * 类名:clsge_StructureSectionWApi
 * 表名:ge_StructureSection(01120896)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:18
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
 * 结构章节(ge_StructureSection)
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
import { ge_StructureSectionCache,isFuncMapCache } from "@/viewsShare/Knowledges/ge_StructureSectionVueShare";
import { clsge_StructureSectionENEx } from "@/ts/L0Entity/Knowledges/clsge_StructureSectionENEx";
import { clsge_StructureSectionEN } from "@/ts/L0Entity/Knowledges/clsge_StructureSectionEN";
import { vcc_Course_Sim_func } from "@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi";
import { clsvcc_Course_SimEN } from "@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const ge_StructureSection_Controller = "ge_StructureSectionApi";
 export const ge_StructureSection_ConstructorName = "ge_StructureSection";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strStructureSectionId:关键字
 * @returns 对象
 **/
export  async function ge_StructureSection_GetObjByStructureSectionIdAsync(strStructureSectionId: string): Promise<clsge_StructureSectionEN|null>  
{
const strThisFuncName = "GetObjByStructureSectionIdAsync";

if (IsNullOrEmpty(strStructureSectionId) == true)
{
  const strMsg = Format("参数:[strStructureSectionId]不能为空!(In clsge_StructureSectionWApi.GetObjByStructureSectionIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureSectionId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureSectionId]的长度:[{0}]不正确!(clsge_StructureSectionWApi.GetObjByStructureSectionIdAsync)", strStructureSectionId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByStructureSectionId";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strStructureSectionId,
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
const objge_StructureSection = ge_StructureSection_GetObjFromJsonObj(returnObj);
return objge_StructureSection;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param strStructureSectionId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureSection_GetObjByStructureSectionIdlocalStorage(strStructureSectionId: string) {
const strThisFuncName = "GetObjByStructureSectionIdlocalStorage";

if (IsNullOrEmpty(strStructureSectionId) == true)
{
  const strMsg = Format("参数:[strStructureSectionId]不能为空!(In clsge_StructureSectionWApi.GetObjByStructureSectionIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureSectionId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureSectionId]的长度:[{0}]不正确!(clsge_StructureSectionWApi.GetObjByStructureSectionIdlocalStorage)", strStructureSectionId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsge_StructureSectionEN._CurrTabName, strStructureSectionId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objge_StructureSectionCache: clsge_StructureSectionEN = JSON.parse(strTempObj);
return objge_StructureSectionCache;
}
try
{
const objge_StructureSection = await ge_StructureSection_GetObjByStructureSectionIdAsync(strStructureSectionId);
if (objge_StructureSection != null)
{
localStorage.setItem(strKey, JSON.stringify(objge_StructureSection));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objge_StructureSection;
}
return objge_StructureSection;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strStructureSectionId, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strStructureSectionId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureSection_GetObjByStructureSectionIdCache(strStructureSectionId:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByStructureSectionIdCache";

if (IsNullOrEmpty(strStructureSectionId) == true)
{
  const strMsg = Format("参数:[strStructureSectionId]不能为空!(In clsge_StructureSectionWApi.GetObjByStructureSectionIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureSectionId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureSectionId]的长度:[{0}]不正确!(clsge_StructureSectionWApi.GetObjByStructureSectionIdCache)", strStructureSectionId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
try
{
const arrge_StructureSectionSel = arrge_StructureSectionObjLstCache.filter(x => 
 x.structureSectionId == strStructureSectionId );
let objge_StructureSection: clsge_StructureSectionEN;
if (arrge_StructureSectionSel.length > 0)
{
objge_StructureSection = arrge_StructureSectionSel[0];
return objge_StructureSection;
}
else
{
if (bolTryAsyncOnce == true)
{
const objge_StructureSectionConst = await ge_StructureSection_GetObjByStructureSectionIdAsync(strStructureSectionId);
if (objge_StructureSectionConst != null)
{
ge_StructureSection_ReFreshThisCache(strCourseId);
return objge_StructureSectionConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strStructureSectionId, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objge_StructureSection:所给的对象
 * @returns 对象
*/
export  async function ge_StructureSection_UpdateObjInLstCache(objge_StructureSection: clsge_StructureSectionEN,strCourseId: string) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
const obj = arrge_StructureSectionObjLstCache.find(x => x.structureSectionId == objge_StructureSection.structureSectionId);
if (obj != null)
{
objge_StructureSection.structureSectionId = obj.structureSectionId;
ObjectAssign( obj, objge_StructureSection);
}
else
{
arrge_StructureSectionObjLstCache.push(objge_StructureSection);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  function ge_StructureSection_SortFunDefa(a:clsge_StructureSectionEN , b:clsge_StructureSectionEN): number 
{
return a.structureSectionId.localeCompare(b.structureSectionId);
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
export  function ge_StructureSection_SortFunDefa2Fld(a:clsge_StructureSectionEN , b:clsge_StructureSectionEN): number 
{
if (a.structureSectionName == b.structureSectionName) return a.structureSectionContent.localeCompare(b.structureSectionContent);
else return a.structureSectionName.localeCompare(b.structureSectionName);
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
export  function ge_StructureSection_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_StructureSectionEN.con_StructureSectionId:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return a.structureSectionId.localeCompare(b.structureSectionId);
}
case clsge_StructureSectionEN.con_StructureSectionName:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return a.structureSectionName.localeCompare(b.structureSectionName);
}
case clsge_StructureSectionEN.con_StructureSectionContent:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (a.structureSectionContent == null) return -1;
if (b.structureSectionContent == null) return 1;
return a.structureSectionContent.localeCompare(b.structureSectionContent);
}
case clsge_StructureSectionEN.con_CourseId:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_StructureSectionEN.con_IsShow:
return (a: clsge_StructureSectionEN) => {
if (a.isShow == true) return 1;
else return -1
}
case clsge_StructureSectionEN.con_UpdDate:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_StructureSectionEN.con_UpdUser:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_StructureSectionEN.con_Memo:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsge_StructureSectionEN.con_SectionTypeId:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return a.sectionTypeId.localeCompare(b.sectionTypeId);
}
case clsge_StructureSectionEN.con_Direction:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (a.direction == null) return -1;
if (b.direction == null) return 1;
return a.direction.localeCompare(b.direction);
}
case clsge_StructureSectionEN.con_IsExpanded:
return (a: clsge_StructureSectionEN) => {
if (a.isExpanded == true) return 1;
else return -1
}
case clsge_StructureSectionEN.con_IsRoot:
return (a: clsge_StructureSectionEN) => {
if (a.isRoot == true) return 1;
else return -1
}
case clsge_StructureSectionEN.con_ParentId:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (a.parentId == null) return -1;
if (b.parentId == null) return 1;
return a.parentId.localeCompare(b.parentId);
}
case clsge_StructureSectionEN.con_OrderNum:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return a.orderNum-b.orderNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSection]中不存在!(in ${ ge_StructureSection_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_StructureSectionEN.con_StructureSectionId:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return b.structureSectionId.localeCompare(a.structureSectionId);
}
case clsge_StructureSectionEN.con_StructureSectionName:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return b.structureSectionName.localeCompare(a.structureSectionName);
}
case clsge_StructureSectionEN.con_StructureSectionContent:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (b.structureSectionContent == null) return -1;
if (a.structureSectionContent == null) return 1;
return b.structureSectionContent.localeCompare(a.structureSectionContent);
}
case clsge_StructureSectionEN.con_CourseId:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_StructureSectionEN.con_IsShow:
return (b: clsge_StructureSectionEN) => {
if (b.isShow == true) return 1;
else return -1
}
case clsge_StructureSectionEN.con_UpdDate:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_StructureSectionEN.con_UpdUser:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_StructureSectionEN.con_Memo:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsge_StructureSectionEN.con_SectionTypeId:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return b.sectionTypeId.localeCompare(a.sectionTypeId);
}
case clsge_StructureSectionEN.con_Direction:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (b.direction == null) return -1;
if (a.direction == null) return 1;
return b.direction.localeCompare(a.direction);
}
case clsge_StructureSectionEN.con_IsExpanded:
return (b: clsge_StructureSectionEN) => {
if (b.isExpanded == true) return 1;
else return -1
}
case clsge_StructureSectionEN.con_IsRoot:
return (b: clsge_StructureSectionEN) => {
if (b.isRoot == true) return 1;
else return -1
}
case clsge_StructureSectionEN.con_ParentId:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
if (b.parentId == null) return -1;
if (a.parentId == null) return 1;
return b.parentId.localeCompare(a.parentId);
}
case clsge_StructureSectionEN.con_OrderNum:
return (a: clsge_StructureSectionEN, b: clsge_StructureSectionEN) => {
return b.orderNum-a.orderNum;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSection]中不存在!(in ${ ge_StructureSection_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strStructureSectionId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureSection_GetNameByStructureSectionIdCache(strStructureSectionId: string,strCourseId: string) {

if (IsNullOrEmpty(strStructureSectionId) == true)
{
  const strMsg = Format("参数:[strStructureSectionId]不能为空!(In clsge_StructureSectionWApi.GetNameByStructureSectionIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strStructureSectionId.length != 10)
{
const strMsg = Format("缓存分类变量:[strStructureSectionId]的长度:[{0}]不正确!(clsge_StructureSectionWApi.GetNameByStructureSectionIdCache)", strStructureSectionId.length);
console.error(strMsg);
throw (strMsg);
}
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
if (arrge_StructureSectionObjLstCache == null) return "";
try
{
const arrge_StructureSectionSel = arrge_StructureSectionObjLstCache.filter(x => 
 x.structureSectionId == strStructureSectionId );
let objge_StructureSection: clsge_StructureSectionEN;
if (arrge_StructureSectionSel.length > 0)
{
objge_StructureSection = arrge_StructureSectionSel[0];
return objge_StructureSection.structureSectionName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strStructureSectionId);
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
export  async function ge_StructureSection_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_StructureSectionEN.con_StructureSectionId:
return (obj: clsge_StructureSectionEN) => {
return obj.structureSectionId === value;
}
case clsge_StructureSectionEN.con_StructureSectionName:
return (obj: clsge_StructureSectionEN) => {
return obj.structureSectionName === value;
}
case clsge_StructureSectionEN.con_StructureSectionContent:
return (obj: clsge_StructureSectionEN) => {
return obj.structureSectionContent === value;
}
case clsge_StructureSectionEN.con_CourseId:
return (obj: clsge_StructureSectionEN) => {
return obj.courseId === value;
}
case clsge_StructureSectionEN.con_IsShow:
return (obj: clsge_StructureSectionEN) => {
return obj.isShow === value;
}
case clsge_StructureSectionEN.con_UpdDate:
return (obj: clsge_StructureSectionEN) => {
return obj.updDate === value;
}
case clsge_StructureSectionEN.con_UpdUser:
return (obj: clsge_StructureSectionEN) => {
return obj.updUser === value;
}
case clsge_StructureSectionEN.con_Memo:
return (obj: clsge_StructureSectionEN) => {
return obj.memo === value;
}
case clsge_StructureSectionEN.con_SectionTypeId:
return (obj: clsge_StructureSectionEN) => {
return obj.sectionTypeId === value;
}
case clsge_StructureSectionEN.con_Direction:
return (obj: clsge_StructureSectionEN) => {
return obj.direction === value;
}
case clsge_StructureSectionEN.con_IsExpanded:
return (obj: clsge_StructureSectionEN) => {
return obj.isExpanded === value;
}
case clsge_StructureSectionEN.con_IsRoot:
return (obj: clsge_StructureSectionEN) => {
return obj.isRoot === value;
}
case clsge_StructureSectionEN.con_ParentId:
return (obj: clsge_StructureSectionEN) => {
return obj.parentId === value;
}
case clsge_StructureSectionEN.con_OrderNum:
return (obj: clsge_StructureSectionEN) => {
return obj.orderNum === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_StructureSection]中不存在!(in ${ ge_StructureSection_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_StructureSection_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_StructureSectionWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_StructureSectionWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsge_StructureSectionEN.con_StructureSectionId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsge_StructureSectionEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsge_StructureSectionEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strStructureSectionId = strInValue;
if (IsNullOrEmpty(strStructureSectionId) == true)
{
return "";
}
const objge_StructureSection = await ge_StructureSection_GetObjByStructureSectionIdCache(strStructureSectionId , strCourseIdClassfy);
if (objge_StructureSection == null) return "";
if (objge_StructureSection.GetFldValue(strOutFldName) == null) return "";
return objge_StructureSection.GetFldValue(strOutFldName).toString();
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
export  async function ge_StructureSection_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsge_StructureSectionWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsge_StructureSectionWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsge_StructureSectionEN.con_StructureSectionId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrge_StructureSection = await ge_StructureSection_GetObjLstCache(strCourseIdClassfy);
if (arrge_StructureSection == null) return [];
let arrge_StructureSectionSel = arrge_StructureSection;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrge_StructureSectionSel.length == 0) return [];
return arrge_StructureSectionSel.map(x=>x.structureSectionId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureSection_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetFirstObjAsync(strWhereCond: string): Promise<clsge_StructureSectionEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const objge_StructureSection = ge_StructureSection_GetObjFromJsonObj(returnObj);
return objge_StructureSection;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureSectionEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureSectionEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureSectionEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureSectionEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureSectionEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrge_StructureSectionExObjLstCache: Array<clsge_StructureSectionEN> = CacheHelper.Get(strKey);
const arrge_StructureSectionObjLstT = ge_StructureSection_GetObjLstByJSONObjLst(arrge_StructureSectionExObjLstCache);
return arrge_StructureSectionObjLstT;
}
try
{
const arrge_StructureSectionExObjLst = await ge_StructureSection_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrge_StructureSectionExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureSectionExObjLst.length);
console.log(strInfo);
return arrge_StructureSectionExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSection_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureSectionEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureSectionEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_StructureSectionEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureSectionEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureSectionEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureSectionEN.CacheAddiCondition);
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
const arrge_StructureSectionExObjLstCache: Array<clsge_StructureSectionEN> = JSON.parse(strTempObjLst);
const arrge_StructureSectionObjLstT = ge_StructureSection_GetObjLstByJSONObjLst(arrge_StructureSectionExObjLstCache);
return arrge_StructureSectionObjLstT;
}
try
{
const arrge_StructureSectionExObjLst = await ge_StructureSection_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrge_StructureSectionExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureSectionExObjLst.length);
console.log(strInfo);
return arrge_StructureSectionExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSection_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_StructureSectionEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrge_StructureSectionObjLstCache: Array<clsge_StructureSectionEN> = JSON.parse(strTempObjLst);
return arrge_StructureSectionObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function ge_StructureSection_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_StructureSectionEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSection_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsge_StructureSectionEN.WhereFormat) == false)
{
strWhereCond = Format(clsge_StructureSectionEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsge_StructureSectionEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsge_StructureSectionEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsge_StructureSectionEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsge_StructureSectionEN.CacheAddiCondition);
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
const arrge_StructureSectionExObjLstCache: Array<clsge_StructureSectionEN> = JSON.parse(strTempObjLst);
const arrge_StructureSectionObjLstT = ge_StructureSection_GetObjLstByJSONObjLst(arrge_StructureSectionExObjLstCache);
return arrge_StructureSectionObjLstT;
}
try
{
const arrge_StructureSectionExObjLst = await ge_StructureSection_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrge_StructureSectionExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrge_StructureSectionExObjLst.length);
console.log(strInfo);
return arrge_StructureSectionExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSection_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsge_StructureSectionEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrge_StructureSectionObjLstCache: Array<clsge_StructureSectionEN> = JSON.parse(strTempObjLst);
return arrge_StructureSectionObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSection_GetObjLstCache(strCourseId: string): Promise<Array<clsge_StructureSectionEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureSectionWApi.ge_StructureSection_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureSectionWApi.ge_StructureSection_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrge_StructureSectionObjLstCache;
switch (clsge_StructureSectionEN.CacheModeId)
{
case "04"://sessionStorage
arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstClientCache(strCourseId);
break;
default:
arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstClientCache(strCourseId);
break;
}
return arrge_StructureSectionObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function ge_StructureSection_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrge_StructureSectionObjLstCache;
switch (clsge_StructureSectionEN.CacheModeId)
{
case "04"://sessionStorage
arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrge_StructureSectionObjLstCache = null;
break;
default:
arrge_StructureSectionObjLstCache = null;
break;
}
return arrge_StructureSectionObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrStructureSectionIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_StructureSection_GetSubObjLstCache(objge_StructureSectionCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
let arrge_StructureSectionSel = arrge_StructureSectionObjLstCache;
if (objge_StructureSectionCond.GetConditions().length == 0) return arrge_StructureSectionSel;
try {
//console.log(sstrKeys);
for (const objCondition of objge_StructureSectionCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_StructureSectionSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objge_StructureSectionCond), ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_StructureSectionEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrStructureSectionId:关键字列表
 * @returns 对象列表
 **/
export  async function ge_StructureSection_GetObjLstByStructureSectionIdLstAsync(arrStructureSectionId: Array<string>): Promise<Array<clsge_StructureSectionEN>>  
{
const strThisFuncName = "GetObjLstByStructureSectionIdLstAsync";
const strAction = "GetObjLstByStructureSectionIdLst";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrStructureSectionId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSection_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param arrstrStructureSectionIdLst:关键字列表
 * @returns 对象列表
*/
export  async function ge_StructureSection_GetObjLstByStructureSectionIdLstCache(arrStructureSectionIdLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByStructureSectionIdLstCache";
try
{
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
const arrge_StructureSectionSel = arrge_StructureSectionObjLstCache.filter(x => arrStructureSectionIdLst.indexOf(x.structureSectionId)>-1);
return arrge_StructureSectionSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrStructureSectionIdLst.join(","), ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_StructureSectionEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSection_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_StructureSectionEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSection_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetObjLstByPagerCache(objPagerPara: stuPagerPara ,strCourseId: string) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StructureSectionEN>();
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
if (arrge_StructureSectionObjLstCache.length == 0) return arrge_StructureSectionObjLstCache;
let arrge_StructureSectionSel = arrge_StructureSectionObjLstCache;
const objge_StructureSectionCond = objPagerPara.conditionCollection;
if (objge_StructureSectionCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return new Array<clsge_StructureSectionEN>();
}
//console.log("clsge_StructureSectionWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objge_StructureSectionCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_StructureSectionSel.length == 0) return arrge_StructureSectionSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrge_StructureSectionSel = arrge_StructureSectionSel.sort(ge_StructureSection_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_StructureSectionSel = arrge_StructureSectionSel.sort(objPagerPara.sortFun);
}
arrge_StructureSectionSel = arrge_StructureSectionSel.slice(intStart, intEnd);     
return arrge_StructureSectionSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_StructureSectionEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function ge_StructureSection_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_StructureSectionEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_StructureSectionEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_StructureSection_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param strStructureSectionId:关键字
 * @returns 获取删除的结果
 **/
export  async function ge_StructureSection_DelRecordAsync(strStructureSectionId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strStructureSectionId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param arrStructureSectionId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ge_StructureSection_Delge_StructureSectionsAsync(arrStructureSectionId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_StructureSectionsAsync";
const strAction = "Delge_StructureSections";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrStructureSectionId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetObjExLstByPagerCache(objPagerPara: stuPagerPara , strCourseId:string):Promise<Array<clsge_StructureSectionENEx>> {
const strThisFuncName = "GetObjLstByPagerCache";
 const objSortInfo = GetSortExpressInfo(objPagerPara);
const isFuncMapKey = `${ objSortInfo.SortFld}`;
const arrge_StructureSectionObjLst = await ge_StructureSection_GetObjLstCache(strCourseId);
//从缓存中获取对象，如果缓存中不存在就扩展复制
const arrNewObj = new Array<clsge_StructureSectionENEx>();
const arrge_StructureSectionExObjLst = arrge_StructureSectionObjLst.map((obj) => {
const cacheKey = `${ obj.structureSectionId}_${ obj.courseId}`;
if (ge_StructureSectionCache[cacheKey])
{
const oldObj = ge_StructureSectionCache[cacheKey];
return oldObj;
}
else
{
const newObj = ge_StructureSection_CopyToEx(obj);
arrNewObj.push(newObj);
ge_StructureSectionCache[cacheKey] = newObj;
return newObj;
}
});
for (const newObj of arrNewObj) {
for (const strFldName of Object.keys(isFuncMapCache)) {
await ge_StructureSection_FuncMapByFldName(strFldName, newObj);
}
}
//检查关于当前扩展排序字段是否获取得值，如果没有获取过，就获取，并存缓存
const bolIsFuncMap = isFuncMapCache[isFuncMapKey];
if (
IsNullOrEmpty(objSortInfo.SortFld) == false &&
clsge_StructureSectionEN.AttributeName.indexOf(objSortInfo.SortFld) == -1 &&
(bolIsFuncMap == false || bolIsFuncMap == undefined)
)
{
for (const newObj of arrge_StructureSectionExObjLst) {
await ge_StructureSection_FuncMapByFldName(objSortInfo.SortFld, newObj);
const cacheKey = `${ newObj.structureSectionId}_${ newObj.courseId}`;
ge_StructureSectionCache[cacheKey] = newObj;
}
isFuncMapCache[isFuncMapKey] = true;
}
if (arrge_StructureSectionExObjLst.length == 0) return arrge_StructureSectionExObjLst;
let arrge_StructureSectionSel: Array < clsge_StructureSectionENEx > = arrge_StructureSectionExObjLst;
const objge_StructureSectionCond = objPagerPara.conditionCollection;
if (objge_StructureSectionCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return arrge_StructureSectionExObjLst;
}
try {
for (const objCondition of objge_StructureSectionCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.split(',');
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_StructureSectionSel.length == 0) return arrge_StructureSectionSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
arrge_StructureSectionSel = arrge_StructureSectionSel.sort(ge_StructureSection_SortFunByExKey(objSortInfo.SortFld, objSortInfo.SortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrge_StructureSectionSel = arrge_StructureSectionSel.sort(objPagerPara.sortFun);
}
arrge_StructureSectionSel = arrge_StructureSectionSel.slice(intStart, intEnd);     
return arrge_StructureSectionSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsge_StructureSectionENEx>();
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objge_StructureSectionENS:源对象
 * @returns 目标对象=>clsge_StructureSectionEN:objge_StructureSectionENT
 **/
export  function ge_StructureSection_CopyToEx(objge_StructureSectionENS:clsge_StructureSectionEN ): clsge_StructureSectionENEx
{
const strThisFuncName  = ge_StructureSection_CopyToEx.name;
 const objge_StructureSectionENT = new clsge_StructureSectionENEx();
try
{
ObjectAssign(objge_StructureSectionENT, objge_StructureSectionENS);
 return objge_StructureSectionENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_StructureSectionENT;
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
export  function ge_StructureSection_FuncMapByFldName(strFldName: string, objge_StructureSectionEx: clsge_StructureSectionENEx)
{
const strThisFuncName = ge_StructureSection_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsge_StructureSectionEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsge_StructureSectionENEx.con_CourseName:
return ge_StructureSection_FuncMapCourseName(objge_StructureSectionEx);
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
export  function ge_StructureSection_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_StructureSectionENEx.con_CourseName:
return (a: clsge_StructureSectionENEx, b: clsge_StructureSectionENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return -1;
if (b.courseName === null) return 1;
return a.courseName.localeCompare(b.courseName);
}
        default:
return ge_StructureSection_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsge_StructureSectionENEx.con_CourseName:
return (a: clsge_StructureSectionENEx, b: clsge_StructureSectionENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return 1;
if (b.courseName === null) return -1;
return b.courseName.localeCompare(a.courseName);
}
        default:
return ge_StructureSection_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objge_StructureSectionS:源对象
 **/
export  async function ge_StructureSection_FuncMapCourseName(objge_StructureSection:clsge_StructureSectionENEx )
{
const strThisFuncName = ge_StructureSection_FuncMapCourseName.name;
try
{
if (IsNullOrEmpty(objge_StructureSection.courseName) == true){
 const vccCourseSimCourseId = objge_StructureSection.courseId;
 const vccCourseSimCourseName = await vcc_Course_Sim_func(clsvcc_Course_SimEN.con_CourseId, clsvcc_Course_SimEN.con_CourseName, vccCourseSimCourseId );
 objge_StructureSection.courseName = vccCourseSimCourseName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001412)函数映射表对象数据出错,{0}.(in {1}.{2})", e, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function ge_StructureSection_Delge_StructureSectionsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_StructureSectionsByCondAsync";
const strAction = "Delge_StructureSectionsByCond";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSection_AddNewRecordAsync(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_StructureSectionEN);
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSection_AddNewRecordWithMaxIdAsync(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSection_GoTopAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoTopAsync";
let strMsg = "";
const strAction = "GoTop";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置顶时,给定的关键字值列表不能为空!";
throw strMsg;
}
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSection_UpMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "UpMoveAsync";
let strMsg = "";
const strAction = "UpMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表上移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_StructureSectionEN);
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSection_DownMoveAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "DownMoveAsync";
let strMsg = "";
const strAction = "DownMove";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表下移时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_StructureSectionEN);
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_AddNewObjSave(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_StructureSection_CheckPropertyNew(objge_StructureSectionEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureSection_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureSection_CheckUniCond4Add(objge_StructureSectionEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await ge_StructureSection_AddNewRecordWithMaxIdAsync(objge_StructureSectionEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
ge_StructureSection_ReFreshCache(objge_StructureSectionEN.courseId);
}
else
{
const strInfo = `添加[结构章节(ge_StructureSection)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_StructureSection_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_StructureSection_CheckUniCond4Add(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureSection_GetUniCondStr(objge_StructureSectionEN);
const bolIsExistCondition = await ge_StructureSection_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureSection_CheckUniCond4Update(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<boolean>{
const strUniquenessCondition = ge_StructureSection_GetUniCondStr4Update(objge_StructureSectionEN);
const bolIsExistCondition = await ge_StructureSection_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_StructureSection_UpdateObjSave(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_StructureSectionEN.sfUpdFldSetStr = objge_StructureSectionEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_StructureSectionEN.structureSectionId == "" || objge_StructureSectionEN.structureSectionId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_StructureSection_CheckProperty4Update(objge_StructureSectionEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_StructureSection_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_StructureSection_CheckUniCond4Update(objge_StructureSectionEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_StructureSection_UpdateRecordAsync(objge_StructureSectionEN);
if (returnBool == true)
{
ge_StructureSection_ReFreshCache(objge_StructureSectionEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_StructureSection_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSection_GoBottomAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "GoBottomAsync";
let strMsg = "";
const strAction = "GoBottom";
if (objOrderByData.KeyIdLst.length == 0)
{
strMsg = "根据关键字列表置底时,给定的关键字值列表不能为空!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objge_StructureSectionEN);
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_StructureSection_ReOrderAsync(objOrderByData: clsOrderByData): Promise<boolean> 
{
const strThisFuncName = "ReOrderAsync";
const strAction = "ReOrder";
 //var strJSON = JSON.stringify(objge_StructureSectionEN);
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_StructureSection_AddNewRecordWithReturnKeyAsync(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureSection_UpdateRecordAsync(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_StructureSectionEN.sfUpdFldSetStr === undefined || objge_StructureSectionEN.sfUpdFldSetStr === null || objge_StructureSectionEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSectionEN.structureSectionId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_StructureSection_EditRecordExAsync(objge_StructureSectionEN: clsge_StructureSectionEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_StructureSectionEN.sfUpdFldSetStr === undefined || objge_StructureSectionEN.sfUpdFldSetStr === null || objge_StructureSectionEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSectionEN.structureSectionId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_StructureSection_UpdateWithConditionAsync(objge_StructureSectionEN: clsge_StructureSectionEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_StructureSectionEN.sfUpdFldSetStr === undefined || objge_StructureSectionEN.sfUpdFldSetStr === null || objge_StructureSectionEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_StructureSectionEN.structureSectionId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);
objge_StructureSectionEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_StructureSectionEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objstrStructureSectionIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function ge_StructureSection_IsExistRecordCache(objge_StructureSectionCond: ConditionCollection,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
if (arrge_StructureSectionObjLstCache == null) return false;
let arrge_StructureSectionSel = arrge_StructureSectionObjLstCache;
if (objge_StructureSectionCond.GetConditions().length == 0) return arrge_StructureSectionSel.length>0?true:false;
try {
for (const objCondition of objge_StructureSectionCond.GetConditions()) {
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
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrge_StructureSectionSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objge_StructureSectionCond), ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param strStructureSectionId:所给的关键字
 * @returns 对象
*/
export  async function ge_StructureSection_IsExistCache(strStructureSectionId:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
if (arrge_StructureSectionObjLstCache == null) return false;
try
{
const arrge_StructureSectionSel = arrge_StructureSectionObjLstCache.filter(x => x.structureSectionId == strStructureSectionId);
if (arrge_StructureSectionSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strStructureSectionId, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strStructureSectionId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ge_StructureSection_IsExistAsync(strStructureSectionId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strStructureSectionId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
 * @param objge_StructureSectionCond:条件对象
 * @returns 对象列表记录数
*/
export  async function ge_StructureSection_GetRecCountByCondCache(objge_StructureSectionCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrge_StructureSectionObjLstCache = await ge_StructureSection_GetObjLstCache(strCourseId);
if (arrge_StructureSectionObjLstCache == null) return 0;
let arrge_StructureSectionSel = arrge_StructureSectionObjLstCache;
if (objge_StructureSectionCond.GetConditions().length == 0) return arrge_StructureSectionSel.length;
try {
for (const objCondition of objge_StructureSectionCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrge_StructureSectionSel = arrge_StructureSectionSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrge_StructureSectionSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objge_StructureSectionCond), ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  async function ge_StructureSection_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_StructureSection_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_StructureSection_ConstructorName, strThisFuncName);
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
export  function ge_StructureSection_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_StructureSection_ReFreshCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_StructureSectionWApi.clsge_StructureSectionWApi.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_StructureSectionWApi.clsge_StructureSectionWApi.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = Format("{0}_{1}", clsge_StructureSectionEN._CurrTabName, strCourseId);
switch (clsge_StructureSectionEN.CacheModeId)
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
clsge_StructureSectionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function ge_StructureSection_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsge_StructureSectionWApi.ge_StructureSection_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsge_StructureSectionWApi.ge_StructureSection_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsge_StructureSectionEN._CurrTabName, strCourseId);
switch (clsge_StructureSectionEN.CacheModeId)
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
clsge_StructureSectionEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function ge_StructureSection_GetLastRefreshTime():string
{
if (clsge_StructureSectionEN._RefreshTimeLst.length == 0) return "";
return clsge_StructureSectionEN._RefreshTimeLst[clsge_StructureSectionEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function ge_StructureSection_Cache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureSectionWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureSectionWApi.)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

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
const arrObjLstSel = await ge_StructureSection_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsge_StructureSectionEN.con_StructureSectionId, clsge_StructureSectionEN.con_StructureSectionName, "结构章节...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function ge_StructureSection_GetArrge_StructureSection(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsge_StructureSectionWApi.)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsge_StructureSectionWApi.)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrge_StructureSection = new Array<clsge_StructureSectionEN>();
const arrObjLstSel = await ge_StructureSection_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return null;
const obj0 = new clsge_StructureSectionEN();
obj0.structureSectionId = '0';
obj0.structureSectionName = '选结构章节...';
arrge_StructureSection.push(obj0);
arrObjLstSel.forEach(x => arrge_StructureSection.push(x));
return arrge_StructureSection;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureSection_CheckPropertyNew(pobjge_StructureSectionEN: clsge_StructureSectionEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionName) === true )
{
 throw new Error(`(errid:Watl000411)字段[结构章节名称]不能为空(In 结构章节)!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.courseId) === true 
 || pobjge_StructureSectionEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 结构章节)!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.sectionTypeId) === true )
{
 throw new Error(`(errid:Watl000411)字段[节点类型Id]不能为空(In 结构章节)!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionId) == false && GetStrLen(pobjge_StructureSectionEN.structureSectionId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[结构章节Id(structureSectionId)]的长度不能超过10(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.structureSectionId}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionName) == false && GetStrLen(pobjge_StructureSectionEN.structureSectionName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[结构章节名称(structureSectionName)]的长度不能超过50(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.structureSectionName}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionContent) == false && GetStrLen(pobjge_StructureSectionEN.structureSectionContent) > 3000)
{
 throw new Error(`(errid:Watl000413)字段[结构章节内容(structureSectionContent)]的长度不能超过3000(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.structureSectionContent}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.courseId) == false && GetStrLen(pobjge_StructureSectionEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.courseId}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.updDate) == false && GetStrLen(pobjge_StructureSectionEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.updDate}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.updUser) == false && GetStrLen(pobjge_StructureSectionEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.updUser}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.memo) == false && GetStrLen(pobjge_StructureSectionEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.memo}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.sectionTypeId) == false && GetStrLen(pobjge_StructureSectionEN.sectionTypeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[节点类型Id(sectionTypeId)]的长度不能超过8(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.sectionTypeId}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.direction) == false && GetStrLen(pobjge_StructureSectionEN.direction) > 50)
{
 throw new Error(`(errid:Watl000413)字段[方向(direction)]的长度不能超过50(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.direction}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.parentId) == false && GetStrLen(pobjge_StructureSectionEN.parentId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[父节点Id(parentId)]的长度不能超过10(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.parentId}(clsge_StructureSectionBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionId) == false && undefined !== pobjge_StructureSectionEN.structureSectionId && tzDataType.isString(pobjge_StructureSectionEN.structureSectionId) === false)
{
 throw new Error(`(errid:Watl000414)字段[结构章节Id(structureSectionId)]的值:[${pobjge_StructureSectionEN.structureSectionId}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionName) == false && undefined !== pobjge_StructureSectionEN.structureSectionName && tzDataType.isString(pobjge_StructureSectionEN.structureSectionName) === false)
{
 throw new Error(`(errid:Watl000414)字段[结构章节名称(structureSectionName)]的值:[${pobjge_StructureSectionEN.structureSectionName}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionContent) == false && undefined !== pobjge_StructureSectionEN.structureSectionContent && tzDataType.isString(pobjge_StructureSectionEN.structureSectionContent) === false)
{
 throw new Error(`(errid:Watl000414)字段[结构章节内容(structureSectionContent)]的值:[${pobjge_StructureSectionEN.structureSectionContent}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.courseId) == false && undefined !== pobjge_StructureSectionEN.courseId && tzDataType.isString(pobjge_StructureSectionEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_StructureSectionEN.courseId}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureSectionEN.isShow && undefined !== pobjge_StructureSectionEN.isShow && tzDataType.isBoolean(pobjge_StructureSectionEN.isShow) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否启用(isShow)]的值:[${pobjge_StructureSectionEN.isShow}], 非法,应该为布尔型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.updDate) == false && undefined !== pobjge_StructureSectionEN.updDate && tzDataType.isString(pobjge_StructureSectionEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_StructureSectionEN.updDate}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.updUser) == false && undefined !== pobjge_StructureSectionEN.updUser && tzDataType.isString(pobjge_StructureSectionEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_StructureSectionEN.updUser}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.memo) == false && undefined !== pobjge_StructureSectionEN.memo && tzDataType.isString(pobjge_StructureSectionEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_StructureSectionEN.memo}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.sectionTypeId) == false && undefined !== pobjge_StructureSectionEN.sectionTypeId && tzDataType.isString(pobjge_StructureSectionEN.sectionTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[节点类型Id(sectionTypeId)]的值:[${pobjge_StructureSectionEN.sectionTypeId}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.direction) == false && undefined !== pobjge_StructureSectionEN.direction && tzDataType.isString(pobjge_StructureSectionEN.direction) === false)
{
 throw new Error(`(errid:Watl000414)字段[方向(direction)]的值:[${pobjge_StructureSectionEN.direction}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureSectionEN.isExpanded && undefined !== pobjge_StructureSectionEN.isExpanded && tzDataType.isBoolean(pobjge_StructureSectionEN.isExpanded) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否扩展(isExpanded)]的值:[${pobjge_StructureSectionEN.isExpanded}], 非法,应该为布尔型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureSectionEN.isRoot && undefined !== pobjge_StructureSectionEN.isRoot && tzDataType.isBoolean(pobjge_StructureSectionEN.isRoot) === false)
{
 throw new Error(`(errid:Watl000414)字段[IsRoot(isRoot)]的值:[${pobjge_StructureSectionEN.isRoot}], 非法,应该为布尔型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.parentId) == false && undefined !== pobjge_StructureSectionEN.parentId && tzDataType.isString(pobjge_StructureSectionEN.parentId) === false)
{
 throw new Error(`(errid:Watl000414)字段[父节点Id(parentId)]的值:[${pobjge_StructureSectionEN.parentId}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
if (null != pobjge_StructureSectionEN.orderNum && undefined !== pobjge_StructureSectionEN.orderNum && tzDataType.isNumber(pobjge_StructureSectionEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000414)字段[序号(orderNum)]的值:[${pobjge_StructureSectionEN.orderNum}], 非法,应该为数值型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_StructureSectionEN.courseId) == false && pobjge_StructureSectionEN.courseId != '[nuull]' && GetStrLen(pobjge_StructureSectionEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 结构章节)!(clsge_StructureSectionBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_StructureSection_CheckProperty4Update(pobjge_StructureSectionEN: clsge_StructureSectionEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionId) == false && GetStrLen(pobjge_StructureSectionEN.structureSectionId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[结构章节Id(structureSectionId)]的长度不能超过10(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.structureSectionId}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionName) == false && GetStrLen(pobjge_StructureSectionEN.structureSectionName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[结构章节名称(structureSectionName)]的长度不能超过50(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.structureSectionName}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionContent) == false && GetStrLen(pobjge_StructureSectionEN.structureSectionContent) > 3000)
{
 throw new Error(`(errid:Watl000416)字段[结构章节内容(structureSectionContent)]的长度不能超过3000(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.structureSectionContent}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.courseId) == false && GetStrLen(pobjge_StructureSectionEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.courseId}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.updDate) == false && GetStrLen(pobjge_StructureSectionEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.updDate}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.updUser) == false && GetStrLen(pobjge_StructureSectionEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.updUser}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.memo) == false && GetStrLen(pobjge_StructureSectionEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.memo}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.sectionTypeId) == false && GetStrLen(pobjge_StructureSectionEN.sectionTypeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[节点类型Id(sectionTypeId)]的长度不能超过8(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.sectionTypeId}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.direction) == false && GetStrLen(pobjge_StructureSectionEN.direction) > 50)
{
 throw new Error(`(errid:Watl000416)字段[方向(direction)]的长度不能超过50(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.direction}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.parentId) == false && GetStrLen(pobjge_StructureSectionEN.parentId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[父节点Id(parentId)]的长度不能超过10(In 结构章节(ge_StructureSection))!值:${pobjge_StructureSectionEN.parentId}(clsge_StructureSectionBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionId) == false && undefined !== pobjge_StructureSectionEN.structureSectionId && tzDataType.isString(pobjge_StructureSectionEN.structureSectionId) === false)
{
 throw new Error(`(errid:Watl000417)字段[结构章节Id(structureSectionId)]的值:[${pobjge_StructureSectionEN.structureSectionId}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionName) == false && undefined !== pobjge_StructureSectionEN.structureSectionName && tzDataType.isString(pobjge_StructureSectionEN.structureSectionName) === false)
{
 throw new Error(`(errid:Watl000417)字段[结构章节名称(structureSectionName)]的值:[${pobjge_StructureSectionEN.structureSectionName}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.structureSectionContent) == false && undefined !== pobjge_StructureSectionEN.structureSectionContent && tzDataType.isString(pobjge_StructureSectionEN.structureSectionContent) === false)
{
 throw new Error(`(errid:Watl000417)字段[结构章节内容(structureSectionContent)]的值:[${pobjge_StructureSectionEN.structureSectionContent}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.courseId) == false && undefined !== pobjge_StructureSectionEN.courseId && tzDataType.isString(pobjge_StructureSectionEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_StructureSectionEN.courseId}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureSectionEN.isShow && undefined !== pobjge_StructureSectionEN.isShow && tzDataType.isBoolean(pobjge_StructureSectionEN.isShow) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否启用(isShow)]的值:[${pobjge_StructureSectionEN.isShow}], 非法,应该为布尔型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.updDate) == false && undefined !== pobjge_StructureSectionEN.updDate && tzDataType.isString(pobjge_StructureSectionEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_StructureSectionEN.updDate}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.updUser) == false && undefined !== pobjge_StructureSectionEN.updUser && tzDataType.isString(pobjge_StructureSectionEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_StructureSectionEN.updUser}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.memo) == false && undefined !== pobjge_StructureSectionEN.memo && tzDataType.isString(pobjge_StructureSectionEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_StructureSectionEN.memo}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.sectionTypeId) == false && undefined !== pobjge_StructureSectionEN.sectionTypeId && tzDataType.isString(pobjge_StructureSectionEN.sectionTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[节点类型Id(sectionTypeId)]的值:[${pobjge_StructureSectionEN.sectionTypeId}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.direction) == false && undefined !== pobjge_StructureSectionEN.direction && tzDataType.isString(pobjge_StructureSectionEN.direction) === false)
{
 throw new Error(`(errid:Watl000417)字段[方向(direction)]的值:[${pobjge_StructureSectionEN.direction}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureSectionEN.isExpanded && undefined !== pobjge_StructureSectionEN.isExpanded && tzDataType.isBoolean(pobjge_StructureSectionEN.isExpanded) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否扩展(isExpanded)]的值:[${pobjge_StructureSectionEN.isExpanded}], 非法,应该为布尔型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureSectionEN.isRoot && undefined !== pobjge_StructureSectionEN.isRoot && tzDataType.isBoolean(pobjge_StructureSectionEN.isRoot) === false)
{
 throw new Error(`(errid:Watl000417)字段[IsRoot(isRoot)]的值:[${pobjge_StructureSectionEN.isRoot}], 非法,应该为布尔型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_StructureSectionEN.parentId) == false && undefined !== pobjge_StructureSectionEN.parentId && tzDataType.isString(pobjge_StructureSectionEN.parentId) === false)
{
 throw new Error(`(errid:Watl000417)字段[父节点Id(parentId)]的值:[${pobjge_StructureSectionEN.parentId}], 非法,应该为字符型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
if (null != pobjge_StructureSectionEN.orderNum && undefined !== pobjge_StructureSectionEN.orderNum && tzDataType.isNumber(pobjge_StructureSectionEN.orderNum) === false)
{
 throw new Error(`(errid:Watl000417)字段[序号(orderNum)]的值:[${pobjge_StructureSectionEN.orderNum}], 非法,应该为数值型(In 结构章节(ge_StructureSection))!(clsge_StructureSectionBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_StructureSectionEN.courseId) == false && pobjge_StructureSectionEN.courseId != '[nuull]' && GetStrLen(pobjge_StructureSectionEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 结构章节)!(clsge_StructureSectionBL:CheckPropertyNew)");
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
export  function ge_StructureSection_GetJSONStrByObj (pobjge_StructureSectionEN: clsge_StructureSectionEN): string
{
pobjge_StructureSectionEN.sfUpdFldSetStr = pobjge_StructureSectionEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_StructureSectionEN);
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
export  function ge_StructureSection_GetObjLstByJSONStr (strJSON: string): Array<clsge_StructureSectionEN>
{
let arrge_StructureSectionObjLst = new Array<clsge_StructureSectionEN>();
if (strJSON === "")
{
return arrge_StructureSectionObjLst;
}
try
{
arrge_StructureSectionObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_StructureSectionObjLst;
}
return arrge_StructureSectionObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_StructureSectionObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_StructureSection_GetObjLstByJSONObjLst (arrge_StructureSectionObjLstS: Array<clsge_StructureSectionEN>): Array<clsge_StructureSectionEN>
{
const arrge_StructureSectionObjLst = new Array<clsge_StructureSectionEN>();
for (const objInFor of arrge_StructureSectionObjLstS) {
const obj1 = ge_StructureSection_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_StructureSectionObjLst.push(obj1);
}
return arrge_StructureSectionObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_StructureSection_GetObjByJSONStr (strJSON: string): clsge_StructureSectionEN
{
let pobjge_StructureSectionEN = new clsge_StructureSectionEN();
if (strJSON === "")
{
return pobjge_StructureSectionEN;
}
try
{
pobjge_StructureSectionEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_StructureSectionEN;
}
return pobjge_StructureSectionEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_StructureSection_GetCombineCondition(objge_StructureSectionCond: clsge_StructureSectionEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_StructureSectionId) == true)
{
const strComparisonOpStructureSectionId:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_StructureSectionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_StructureSectionId, objge_StructureSectionCond.structureSectionId, strComparisonOpStructureSectionId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_StructureSectionName) == true)
{
const strComparisonOpStructureSectionName:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_StructureSectionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_StructureSectionName, objge_StructureSectionCond.structureSectionName, strComparisonOpStructureSectionName);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_StructureSectionContent) == true)
{
const strComparisonOpStructureSectionContent:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_StructureSectionContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_StructureSectionContent, objge_StructureSectionCond.structureSectionContent, strComparisonOpStructureSectionContent);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_CourseId, objge_StructureSectionCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_IsShow) == true)
{
if (objge_StructureSectionCond.isShow == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureSectionEN.con_IsShow);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureSectionEN.con_IsShow);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_UpdDate, objge_StructureSectionCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_UpdUser, objge_StructureSectionCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_Memo, objge_StructureSectionCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_SectionTypeId) == true)
{
const strComparisonOpSectionTypeId:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_SectionTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_SectionTypeId, objge_StructureSectionCond.sectionTypeId, strComparisonOpSectionTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_Direction) == true)
{
const strComparisonOpDirection:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_Direction];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_Direction, objge_StructureSectionCond.direction, strComparisonOpDirection);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_IsExpanded) == true)
{
if (objge_StructureSectionCond.isExpanded == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureSectionEN.con_IsExpanded);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureSectionEN.con_IsExpanded);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_IsRoot) == true)
{
if (objge_StructureSectionCond.isRoot == true)
{
strWhereCond += Format(" And {0} = '1'", clsge_StructureSectionEN.con_IsRoot);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsge_StructureSectionEN.con_IsRoot);
}
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_ParentId) == true)
{
const strComparisonOpParentId:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_ParentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_StructureSectionEN.con_ParentId, objge_StructureSectionCond.parentId, strComparisonOpParentId);
}
if (Object.prototype.hasOwnProperty.call(objge_StructureSectionCond.dicFldComparisonOp, clsge_StructureSectionEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objge_StructureSectionCond.dicFldComparisonOp[clsge_StructureSectionEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsge_StructureSectionEN.con_OrderNum, objge_StructureSectionCond.orderNum, strComparisonOpOrderNum);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureSection(结构章节),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strStructureSectionId: 结构章节Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureSection_GetUniCondStr(objge_StructureSectionEN: clsge_StructureSectionEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and StructureSectionId = '{0}'", objge_StructureSectionEN.structureSectionId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_StructureSection(结构章节),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strStructureSectionId: 结构章节Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_StructureSection_GetUniCondStr4Update(objge_StructureSectionEN: clsge_StructureSectionEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and StructureSectionId <> '{0}'", objge_StructureSectionEN.structureSectionId);
 strWhereCond +=  Format(" and StructureSectionId = '{0}'", objge_StructureSectionEN.structureSectionId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_StructureSectionENS:源对象
 * @param objge_StructureSectionENT:目标对象
*/
export  function ge_StructureSection_CopyObjTo(objge_StructureSectionENS: clsge_StructureSectionEN , objge_StructureSectionENT: clsge_StructureSectionEN ): void 
{
objge_StructureSectionENT.structureSectionId = objge_StructureSectionENS.structureSectionId; //结构章节Id
objge_StructureSectionENT.structureSectionName = objge_StructureSectionENS.structureSectionName; //结构章节名称
objge_StructureSectionENT.structureSectionContent = objge_StructureSectionENS.structureSectionContent; //结构章节内容
objge_StructureSectionENT.courseId = objge_StructureSectionENS.courseId; //课程Id
objge_StructureSectionENT.isShow = objge_StructureSectionENS.isShow; //是否启用
objge_StructureSectionENT.updDate = objge_StructureSectionENS.updDate; //修改日期
objge_StructureSectionENT.updUser = objge_StructureSectionENS.updUser; //修改人
objge_StructureSectionENT.memo = objge_StructureSectionENS.memo; //备注
objge_StructureSectionENT.sectionTypeId = objge_StructureSectionENS.sectionTypeId; //节点类型Id
objge_StructureSectionENT.direction = objge_StructureSectionENS.direction; //方向
objge_StructureSectionENT.isExpanded = objge_StructureSectionENS.isExpanded; //是否扩展
objge_StructureSectionENT.isRoot = objge_StructureSectionENS.isRoot; //IsRoot
objge_StructureSectionENT.parentId = objge_StructureSectionENS.parentId; //父节点Id
objge_StructureSectionENT.orderNum = objge_StructureSectionENS.orderNum; //序号
objge_StructureSectionENT.sfUpdFldSetStr = objge_StructureSectionENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_StructureSectionENS:源对象
 * @param objge_StructureSectionENT:目标对象
*/
export  function ge_StructureSection_GetObjFromJsonObj(objge_StructureSectionENS: clsge_StructureSectionEN): clsge_StructureSectionEN 
{
 const objge_StructureSectionENT: clsge_StructureSectionEN = new clsge_StructureSectionEN();
ObjectAssign(objge_StructureSectionENT, objge_StructureSectionENS);
 return objge_StructureSectionENT;
}
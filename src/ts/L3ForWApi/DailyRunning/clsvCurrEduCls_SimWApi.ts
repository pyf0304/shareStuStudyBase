
 /**
 * 类名:clsvCurrEduCls_SimWApi
 * 表名:vCurrEduCls_Sim(01120951)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:45
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vCurrEduCls_Sim(vCurrEduCls_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper,LocalStorage_GetKeyByPrefix,SessionStorage_GetKeyByPrefix } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { BindDdl_ObjLstInDivObj_V,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsvCurrEduCls_SimEN } from "@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vCurrEduCls_Sim_Controller = "vCurrEduCls_SimApi";
 export const vCurrEduCls_Sim_ConstructorName = "vCurrEduCls_Sim";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 对象
 **/
export  async function vCurrEduCls_Sim_GetObjByIdCurrEduClsAsync(strIdCurrEduCls: string): Promise<clsvCurrEduCls_SimEN|null>  
{
const strThisFuncName = "GetObjByIdCurrEduClsAsync";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvCurrEduCls_SimWApi.GetObjByIdCurrEduClsAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvCurrEduCls_SimWApi.GetObjByIdCurrEduClsAsync)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdCurrEduCls";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls,
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
const objvCurrEduCls_Sim = vCurrEduCls_Sim_GetObjFromJsonObj(returnObj);
return objvCurrEduCls_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduCls_Sim_GetObjByIdCurrEduClslocalStorage(strIdCurrEduCls: string) {
const strThisFuncName = "GetObjByIdCurrEduClslocalStorage";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvCurrEduCls_SimWApi.GetObjByIdCurrEduClslocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvCurrEduCls_SimWApi.GetObjByIdCurrEduClslocalStorage)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvCurrEduCls_SimEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvCurrEduCls_SimCache: clsvCurrEduCls_SimEN = JSON.parse(strTempObj);
return objvCurrEduCls_SimCache;
}
try
{
const objvCurrEduCls_Sim = await vCurrEduCls_Sim_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
if (objvCurrEduCls_Sim != null)
{
localStorage.setItem(strKey, JSON.stringify(objvCurrEduCls_Sim));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvCurrEduCls_Sim;
}
return objvCurrEduCls_Sim;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdCurrEduCls, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduCls_Sim_GetObjByIdCurrEduClsCache(strIdCurrEduCls:string,strCourseId:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdCurrEduClsCache";

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvCurrEduCls_SimWApi.GetObjByIdCurrEduClsCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvCurrEduCls_SimWApi.GetObjByIdCurrEduClsCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
try
{
const arrvCurrEduCls_SimSel = arrvCurrEduCls_SimObjLstCache.filter(x => 
 x.idCurrEduCls == strIdCurrEduCls );
let objvCurrEduCls_Sim: clsvCurrEduCls_SimEN;
if (arrvCurrEduCls_SimSel.length > 0)
{
objvCurrEduCls_Sim = arrvCurrEduCls_SimSel[0];
return objvCurrEduCls_Sim;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvCurrEduCls_SimConst = await vCurrEduCls_Sim_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
if (objvCurrEduCls_SimConst != null)
{
vCurrEduCls_Sim_ReFreshThisCache(strCourseId);
return objvCurrEduCls_SimConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdCurrEduCls, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
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
export  function vCurrEduCls_Sim_SortFunDefa(a:clsvCurrEduCls_SimEN , b:clsvCurrEduCls_SimEN): number 
{
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function vCurrEduCls_Sim_SortFunDefa2Fld(a:clsvCurrEduCls_SimEN , b:clsvCurrEduCls_SimEN): number 
{
if (a.currEduClsId == b.currEduClsId) return a.eduClsName.localeCompare(b.eduClsName);
else return a.currEduClsId.localeCompare(b.currEduClsId);
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
export  function vCurrEduCls_Sim_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvCurrEduCls_SimEN.con_IdCurrEduCls:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvCurrEduCls_SimEN.con_CurrEduClsId:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
if (a.currEduClsId == null) return -1;
if (b.currEduClsId == null) return 1;
return a.currEduClsId.localeCompare(b.currEduClsId);
}
case clsvCurrEduCls_SimEN.con_EduClsName:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
return a.eduClsName.localeCompare(b.eduClsName);
}
case clsvCurrEduCls_SimEN.con_EduClsTypeId:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
return a.eduClsTypeId.localeCompare(b.eduClsTypeId);
}
case clsvCurrEduCls_SimEN.con_CourseId:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvCurrEduCls_SimEN.con_IdXzCollege:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvCurrEduCls_SimEN.con_IdXzMajor:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvCurrEduCls_SimEN.con_SchoolYear:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduCls_Sim]中不存在!(in ${ vCurrEduCls_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvCurrEduCls_SimEN.con_IdCurrEduCls:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvCurrEduCls_SimEN.con_CurrEduClsId:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
if (b.currEduClsId == null) return -1;
if (a.currEduClsId == null) return 1;
return b.currEduClsId.localeCompare(a.currEduClsId);
}
case clsvCurrEduCls_SimEN.con_EduClsName:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
return b.eduClsName.localeCompare(a.eduClsName);
}
case clsvCurrEduCls_SimEN.con_EduClsTypeId:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
return b.eduClsTypeId.localeCompare(a.eduClsTypeId);
}
case clsvCurrEduCls_SimEN.con_CourseId:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvCurrEduCls_SimEN.con_IdXzCollege:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvCurrEduCls_SimEN.con_IdXzMajor:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvCurrEduCls_SimEN.con_SchoolYear:
return (a: clsvCurrEduCls_SimEN, b: clsvCurrEduCls_SimEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduCls_Sim]中不存在!(in ${ vCurrEduCls_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduCls_Sim_GetNameByIdCurrEduClsCache(strIdCurrEduCls: string,strCourseId: string) {

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvCurrEduCls_SimWApi.GetNameByIdCurrEduClsCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvCurrEduCls_SimWApi.GetNameByIdCurrEduClsCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
const arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
if (arrvCurrEduCls_SimObjLstCache == null) return "";
try
{
const arrvCurrEduCls_SimSel = arrvCurrEduCls_SimObjLstCache.filter(x => 
 x.idCurrEduCls == strIdCurrEduCls );
let objvCurrEduCls_Sim: clsvCurrEduCls_SimEN;
if (arrvCurrEduCls_SimSel.length > 0)
{
objvCurrEduCls_Sim = arrvCurrEduCls_SimSel[0];
return objvCurrEduCls_Sim.eduClsName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdCurrEduCls);
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
export  async function vCurrEduCls_Sim_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvCurrEduCls_SimEN.con_IdCurrEduCls:
return (obj: clsvCurrEduCls_SimEN) => {
return obj.idCurrEduCls === value;
}
case clsvCurrEduCls_SimEN.con_CurrEduClsId:
return (obj: clsvCurrEduCls_SimEN) => {
return obj.currEduClsId === value;
}
case clsvCurrEduCls_SimEN.con_EduClsName:
return (obj: clsvCurrEduCls_SimEN) => {
return obj.eduClsName === value;
}
case clsvCurrEduCls_SimEN.con_EduClsTypeId:
return (obj: clsvCurrEduCls_SimEN) => {
return obj.eduClsTypeId === value;
}
case clsvCurrEduCls_SimEN.con_CourseId:
return (obj: clsvCurrEduCls_SimEN) => {
return obj.courseId === value;
}
case clsvCurrEduCls_SimEN.con_IdXzCollege:
return (obj: clsvCurrEduCls_SimEN) => {
return obj.idXzCollege === value;
}
case clsvCurrEduCls_SimEN.con_IdXzMajor:
return (obj: clsvCurrEduCls_SimEN) => {
return obj.idXzMajor === value;
}
case clsvCurrEduCls_SimEN.con_SchoolYear:
return (obj: clsvCurrEduCls_SimEN) => {
return obj.schoolYear === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduCls_Sim]中不存在!(in ${ vCurrEduCls_Sim_ConstructorName}.${ strThisFuncName})`;
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
 @param strCourseId:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vCurrEduCls_Sim_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strCourseIdClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvCurrEduCls_SimWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvCurrEduCls_SimWApi.func)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvCurrEduCls_SimEN.con_IdCurrEduCls)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvCurrEduCls_SimEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvCurrEduCls_SimEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdCurrEduCls = strInValue;
if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
return "";
}
const objvCurrEduCls_Sim = await vCurrEduCls_Sim_GetObjByIdCurrEduClsCache(strIdCurrEduCls , strCourseIdClassfy);
if (objvCurrEduCls_Sim == null) return "";
if (objvCurrEduCls_Sim.GetFldValue(strOutFldName) == null) return "";
return objvCurrEduCls_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strCourseId:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vCurrEduCls_Sim_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strCourseIdClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strCourseIdClassfy) == true)
{
  const strMsg = Format("参数:[strCourseIdClassfy]不能为空!(In clsvCurrEduCls_SimWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseIdClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseIdClassfy]的长度:[{0}]不正确!(clsvCurrEduCls_SimWApi.funcKey)", strCourseIdClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvCurrEduCls_SimEN.con_IdCurrEduCls)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvCurrEduCls_Sim = await vCurrEduCls_Sim_GetObjLstCache(strCourseIdClassfy);
if (arrvCurrEduCls_Sim == null) return [];
let arrvCurrEduCls_SimSel = arrvCurrEduCls_Sim;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvCurrEduCls_SimSel.length == 0) return [];
return arrvCurrEduCls_SimSel.map(x=>x.idCurrEduCls);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vCurrEduCls_Sim_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_GetFirstObjAsync(strWhereCond: string): Promise<clsvCurrEduCls_SimEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const objvCurrEduCls_Sim = vCurrEduCls_Sim_GetObjFromJsonObj(returnObj);
return objvCurrEduCls_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_GetObjLstClientCache(strCourseId: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduCls_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduCls_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("CourseId='{0}'", strCourseId);
}
const strKey = Format("{0}_{1}", clsvCurrEduCls_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvCurrEduCls_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduCls_SimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvCurrEduCls_SimExObjLstCache: Array<clsvCurrEduCls_SimEN> = CacheHelper.Get(strKey);
const arrvCurrEduCls_SimObjLstT = vCurrEduCls_Sim_GetObjLstByJSONObjLst(arrvCurrEduCls_SimExObjLstCache);
return arrvCurrEduCls_SimObjLstT;
}
try
{
const arrvCurrEduCls_SimExObjLst = await vCurrEduCls_Sim_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvCurrEduCls_SimExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduCls_SimExObjLst.length);
console.log(strInfo);
return arrvCurrEduCls_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduCls_Sim_GetObjLstlocalStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduCls_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduCls_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvCurrEduCls_SimEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvCurrEduCls_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvCurrEduCls_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduCls_SimEN.CacheAddiCondition);
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
const arrvCurrEduCls_SimExObjLstCache: Array<clsvCurrEduCls_SimEN> = JSON.parse(strTempObjLst);
const arrvCurrEduCls_SimObjLstT = vCurrEduCls_Sim_GetObjLstByJSONObjLst(arrvCurrEduCls_SimExObjLstCache);
return arrvCurrEduCls_SimObjLstT;
}
try
{
const arrvCurrEduCls_SimExObjLst = await vCurrEduCls_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvCurrEduCls_SimEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrvCurrEduCls_SimExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduCls_SimExObjLst.length);
console.log(strInfo);
return arrvCurrEduCls_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduCls_Sim_GetObjLstlocalStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvCurrEduCls_SimEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvCurrEduCls_SimObjLstCache: Array<clsvCurrEduCls_SimEN> = JSON.parse(strTempObjLst);
return arrvCurrEduCls_SimObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vCurrEduCls_Sim_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvCurrEduCls_SimEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_GetObjLstsessionStorage(strCourseId: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduCls_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduCls_SimEN.WhereFormat, strCourseId);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvCurrEduCls_SimEN.con_CourseId, strCourseId);
}
const strKey = Format("{0}_{1}", clsvCurrEduCls_SimEN._CurrTabName, strCourseId);
if (IsNullOrEmpty(clsvCurrEduCls_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduCls_SimEN.CacheAddiCondition);
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
const arrvCurrEduCls_SimExObjLstCache: Array<clsvCurrEduCls_SimEN> = JSON.parse(strTempObjLst);
const arrvCurrEduCls_SimObjLstT = vCurrEduCls_Sim_GetObjLstByJSONObjLst(arrvCurrEduCls_SimExObjLstCache);
return arrvCurrEduCls_SimObjLstT;
}
try
{
const arrvCurrEduCls_SimExObjLst = await vCurrEduCls_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvCurrEduCls_SimEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrvCurrEduCls_SimExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduCls_SimExObjLst.length);
console.log(strInfo);
return arrvCurrEduCls_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduCls_Sim_GetObjLstsessionStoragePureCache(strCourseId: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvCurrEduCls_SimEN._CurrTabName, strCourseId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvCurrEduCls_SimObjLstCache: Array<clsvCurrEduCls_SimEN> = JSON.parse(strTempObjLst);
return arrvCurrEduCls_SimObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduCls_Sim_GetObjLstCache(strCourseId: string): Promise<Array<clsvCurrEduCls_SimEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvCurrEduCls_SimWApi.vCurrEduCls_Sim_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvCurrEduCls_SimWApi.vCurrEduCls_Sim_GetObjLstCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
let arrvCurrEduCls_SimObjLstCache;
switch (clsvCurrEduCls_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstsessionStorage(strCourseId);
break;
case "03"://localStorage
arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstlocalStorage(strCourseId);
break;
case "02"://ClientCache
arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstClientCache(strCourseId);
break;
default:
arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstClientCache(strCourseId);
break;
}
return arrvCurrEduCls_SimObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduCls_Sim_GetObjLstPureCache(strCourseId: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvCurrEduCls_SimObjLstCache;
switch (clsvCurrEduCls_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstsessionStoragePureCache(strCourseId);
break;
case "03"://localStorage
arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstlocalStoragePureCache(strCourseId);
break;
case "02"://ClientCache
arrvCurrEduCls_SimObjLstCache = null;
break;
default:
arrvCurrEduCls_SimObjLstCache = null;
break;
}
return arrvCurrEduCls_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdCurrEduClsCond:条件对象
 * @returns 对象列表子集
*/
export  async function vCurrEduCls_Sim_GetSubObjLstCache(objvCurrEduCls_SimCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
let arrvCurrEduCls_SimSel = arrvCurrEduCls_SimObjLstCache;
if (objvCurrEduCls_SimCond.GetConditions().length == 0) return arrvCurrEduCls_SimSel;
try {
//console.log(sstrKeys);
for (const objCondition of objvCurrEduCls_SimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvCurrEduCls_SimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvCurrEduCls_SimCond), vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvCurrEduCls_SimEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdCurrEduCls:关键字列表
 * @returns 对象列表
 **/
export  async function vCurrEduCls_Sim_GetObjLstByIdCurrEduClsLstAsync(arrIdCurrEduCls: Array<string>): Promise<Array<clsvCurrEduCls_SimEN>>  
{
const strThisFuncName = "GetObjLstByIdCurrEduClsLstAsync";
const strAction = "GetObjLstByIdCurrEduClsLst";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdCurrEduCls, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
 * @param arrstrIdCurrEduClsLst:关键字列表
 * @returns 对象列表
*/
export  async function vCurrEduCls_Sim_GetObjLstByIdCurrEduClsLstCache(arrIdCurrEduClsLst: Array<string> ,strCourseId: string) {
const strThisFuncName = "GetObjLstByIdCurrEduClsLstCache";
try
{
const arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
const arrvCurrEduCls_SimSel = arrvCurrEduCls_SimObjLstCache.filter(x => arrIdCurrEduClsLst.indexOf(x.idCurrEduCls)>-1);
return arrvCurrEduCls_SimSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdCurrEduClsLst.join(","), vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvCurrEduCls_SimEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvCurrEduCls_SimEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduCls_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrIdCurrEduClsCond:条件对象
 * @returns 对象列表子集
*/
export  async function vCurrEduCls_Sim_IsExistRecordCache(objvCurrEduCls_SimCond: ConditionCollection,strCourseId: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
if (arrvCurrEduCls_SimObjLstCache == null) return false;
let arrvCurrEduCls_SimSel = arrvCurrEduCls_SimObjLstCache;
if (objvCurrEduCls_SimCond.GetConditions().length == 0) return arrvCurrEduCls_SimSel.length>0?true:false;
try {
for (const objCondition of objvCurrEduCls_SimCond.GetConditions()) {
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
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvCurrEduCls_SimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvCurrEduCls_SimCond), vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
 * @param strIdCurrEduCls:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduCls_Sim_IsExistCache(strIdCurrEduCls:string,strCourseId:string) {
const strThisFuncName = "IsExistCache";
const arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
if (arrvCurrEduCls_SimObjLstCache == null) return false;
try
{
const arrvCurrEduCls_SimSel = arrvCurrEduCls_SimObjLstCache.filter(x => x.idCurrEduCls == strIdCurrEduCls);
if (arrvCurrEduCls_SimSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdCurrEduCls, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdCurrEduCls:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vCurrEduCls_Sim_IsExistAsync(strIdCurrEduCls: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdCurrEduCls
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduCls_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vCurrEduCls_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduCls_Sim_ConstructorName, strThisFuncName);
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
 * @param objvCurrEduCls_SimCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vCurrEduCls_Sim_GetRecCountByCondCache(objvCurrEduCls_SimCond: ConditionCollection ,strCourseId: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvCurrEduCls_SimObjLstCache = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
if (arrvCurrEduCls_SimObjLstCache == null) return 0;
let arrvCurrEduCls_SimSel = arrvCurrEduCls_SimObjLstCache;
if (objvCurrEduCls_SimCond.GetConditions().length == 0) return arrvCurrEduCls_SimSel.length;
try {
for (const objCondition of objvCurrEduCls_SimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduCls_SimSel = arrvCurrEduCls_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvCurrEduCls_SimSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvCurrEduCls_SimCond), vCurrEduCls_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vCurrEduCls_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function vCurrEduCls_Sim_ReFreshThisCache(strCourseId: string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In clsvCurrEduCls_SimWApi.vCurrEduCls_Sim_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(clsvCurrEduCls_SimWApi.vCurrEduCls_Sim_ReFreshThisCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvCurrEduCls_SimEN._CurrTabName, strCourseId);
switch (clsvCurrEduCls_SimEN.CacheModeId)
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
clsvCurrEduCls_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vCurrEduCls_Sim_GetLastRefreshTime():string
{
if (clsvCurrEduCls_SimEN._RefreshTimeLst.length == 0) return "";
return clsvCurrEduCls_SimEN._RefreshTimeLst[clsvCurrEduCls_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function vCurrEduCls_Sim_BindDdl_id_CurrEduClsByCourseIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvCurrEduCls_SimWApi.BindDdl_id_CurrEduClsByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvCurrEduCls_SimWApi.BindDdl_id_CurrEduClsByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_id_CurrEduClsByCourseIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_CurrEduClsByCourseIdInDivCache");
let arrObjLstSel = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvCurrEduCls_SimEN.con_IdCurrEduCls, clsvCurrEduCls_SimEN.con_EduClsName, "选教学班...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strCourseId:
*/
export  async function vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空！(In clsvCurrEduCls_SimWApi.BindDdl_id_CurrEduClsByCourseIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确！(clsvCurrEduCls_SimWApi.BindDdl_id_CurrEduClsByCourseIdInDiv)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_id_CurrEduClsByCourseIdInDivCache");
const arrvCurrEduCls_Sim = new Array<clsvCurrEduCls_SimEN>();
let arrObjLstSel = await vCurrEduCls_Sim_GetObjLstCache(strCourseId);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.courseId == strCourseId);
const obj0 = new clsvCurrEduCls_SimEN();
obj0.idCurrEduCls = '0';
obj0.eduClsName = '选教学班...';
arrvCurrEduCls_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvCurrEduCls_Sim.push(x));
return arrvCurrEduCls_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduCls_Sim_GetJSONStrByObj (pobjvCurrEduCls_SimEN: clsvCurrEduCls_SimEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvCurrEduCls_SimEN);
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
export  function vCurrEduCls_Sim_GetObjLstByJSONStr (strJSON: string): Array<clsvCurrEduCls_SimEN>
{
let arrvCurrEduCls_SimObjLst = new Array<clsvCurrEduCls_SimEN>();
if (strJSON === "")
{
return arrvCurrEduCls_SimObjLst;
}
try
{
arrvCurrEduCls_SimObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvCurrEduCls_SimObjLst;
}
return arrvCurrEduCls_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCurrEduCls_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vCurrEduCls_Sim_GetObjLstByJSONObjLst (arrvCurrEduCls_SimObjLstS: Array<clsvCurrEduCls_SimEN>): Array<clsvCurrEduCls_SimEN>
{
const arrvCurrEduCls_SimObjLst = new Array<clsvCurrEduCls_SimEN>();
for (const objInFor of arrvCurrEduCls_SimObjLstS) {
const obj1 = vCurrEduCls_Sim_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvCurrEduCls_SimObjLst.push(obj1);
}
return arrvCurrEduCls_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduCls_Sim_GetObjByJSONStr (strJSON: string): clsvCurrEduCls_SimEN
{
let pobjvCurrEduCls_SimEN = new clsvCurrEduCls_SimEN();
if (strJSON === "")
{
return pobjvCurrEduCls_SimEN;
}
try
{
pobjvCurrEduCls_SimEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvCurrEduCls_SimEN;
}
return pobjvCurrEduCls_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vCurrEduCls_Sim_GetCombineCondition(objvCurrEduCls_SimCond: clsvCurrEduCls_SimEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvCurrEduCls_SimCond.dicFldComparisonOp, clsvCurrEduCls_SimEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvCurrEduCls_SimCond.dicFldComparisonOp[clsvCurrEduCls_SimEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduCls_SimEN.con_IdCurrEduCls, objvCurrEduCls_SimCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduCls_SimCond.dicFldComparisonOp, clsvCurrEduCls_SimEN.con_CurrEduClsId) == true)
{
const strComparisonOpCurrEduClsId:string = objvCurrEduCls_SimCond.dicFldComparisonOp[clsvCurrEduCls_SimEN.con_CurrEduClsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduCls_SimEN.con_CurrEduClsId, objvCurrEduCls_SimCond.currEduClsId, strComparisonOpCurrEduClsId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduCls_SimCond.dicFldComparisonOp, clsvCurrEduCls_SimEN.con_EduClsName) == true)
{
const strComparisonOpEduClsName:string = objvCurrEduCls_SimCond.dicFldComparisonOp[clsvCurrEduCls_SimEN.con_EduClsName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduCls_SimEN.con_EduClsName, objvCurrEduCls_SimCond.eduClsName, strComparisonOpEduClsName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduCls_SimCond.dicFldComparisonOp, clsvCurrEduCls_SimEN.con_EduClsTypeId) == true)
{
const strComparisonOpEduClsTypeId:string = objvCurrEduCls_SimCond.dicFldComparisonOp[clsvCurrEduCls_SimEN.con_EduClsTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduCls_SimEN.con_EduClsTypeId, objvCurrEduCls_SimCond.eduClsTypeId, strComparisonOpEduClsTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduCls_SimCond.dicFldComparisonOp, clsvCurrEduCls_SimEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvCurrEduCls_SimCond.dicFldComparisonOp[clsvCurrEduCls_SimEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduCls_SimEN.con_CourseId, objvCurrEduCls_SimCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduCls_SimCond.dicFldComparisonOp, clsvCurrEduCls_SimEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvCurrEduCls_SimCond.dicFldComparisonOp[clsvCurrEduCls_SimEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduCls_SimEN.con_IdXzCollege, objvCurrEduCls_SimCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduCls_SimCond.dicFldComparisonOp, clsvCurrEduCls_SimEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvCurrEduCls_SimCond.dicFldComparisonOp[clsvCurrEduCls_SimEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduCls_SimEN.con_IdXzMajor, objvCurrEduCls_SimCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduCls_SimCond.dicFldComparisonOp, clsvCurrEduCls_SimEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objvCurrEduCls_SimCond.dicFldComparisonOp[clsvCurrEduCls_SimEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduCls_SimEN.con_SchoolYear, objvCurrEduCls_SimCond.schoolYear, strComparisonOpSchoolYear);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvCurrEduCls_SimENS:源对象
 * @param objvCurrEduCls_SimENT:目标对象
*/
export  function vCurrEduCls_Sim_CopyObjTo(objvCurrEduCls_SimENS: clsvCurrEduCls_SimEN , objvCurrEduCls_SimENT: clsvCurrEduCls_SimEN ): void 
{
objvCurrEduCls_SimENT.idCurrEduCls = objvCurrEduCls_SimENS.idCurrEduCls; //教学班流水号
objvCurrEduCls_SimENT.currEduClsId = objvCurrEduCls_SimENS.currEduClsId; //教学班Id
objvCurrEduCls_SimENT.eduClsName = objvCurrEduCls_SimENS.eduClsName; //教学班名
objvCurrEduCls_SimENT.eduClsTypeId = objvCurrEduCls_SimENS.eduClsTypeId; //教学班类型Id
objvCurrEduCls_SimENT.courseId = objvCurrEduCls_SimENS.courseId; //课程Id
objvCurrEduCls_SimENT.idXzCollege = objvCurrEduCls_SimENS.idXzCollege; //学院流水号
objvCurrEduCls_SimENT.idXzMajor = objvCurrEduCls_SimENS.idXzMajor; //专业流水号
objvCurrEduCls_SimENT.schoolYear = objvCurrEduCls_SimENS.schoolYear; //学年
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCurrEduCls_SimENS:源对象
 * @param objvCurrEduCls_SimENT:目标对象
*/
export  function vCurrEduCls_Sim_GetObjFromJsonObj(objvCurrEduCls_SimENS: clsvCurrEduCls_SimEN): clsvCurrEduCls_SimEN 
{
 const objvCurrEduCls_SimENT: clsvCurrEduCls_SimEN = new clsvCurrEduCls_SimEN();
ObjectAssign(objvCurrEduCls_SimENT, objvCurrEduCls_SimENS);
 return objvCurrEduCls_SimENT;
}
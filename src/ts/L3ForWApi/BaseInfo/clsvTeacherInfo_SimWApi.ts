
 /**
 * 类名:clsvTeacherInfo_SimWApi
 * 表名:vTeacherInfo_Sim(01120976)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:36:07
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v教师_Sim(vTeacherInfo_Sim)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月10日.
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
import { clsvTeacherInfo_SimEN } from "@/ts/L0Entity/BaseInfo/clsvTeacherInfo_SimEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vTeacherInfo_Sim_Controller = "vTeacherInfo_SimApi";
 export const vTeacherInfo_Sim_ConstructorName = "vTeacherInfo_Sim";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdTeacher:关键字
 * @returns 对象
 **/
export  async function vTeacherInfo_Sim_GetObjByIdTeacherAsync(strIdTeacher: string): Promise<clsvTeacherInfo_SimEN|null>  
{
const strThisFuncName = "GetObjByIdTeacherAsync";

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsvTeacherInfo_SimWApi.GetObjByIdTeacherAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsvTeacherInfo_SimWApi.GetObjByIdTeacherAsync)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdTeacher";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeacher,
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
const objvTeacherInfo_Sim = vTeacherInfo_Sim_GetObjFromJsonObj(returnObj);
return objvTeacherInfo_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param strIdTeacher:所给的关键字
 * @returns 对象
*/
export  async function vTeacherInfo_Sim_GetObjByIdTeacherlocalStorage(strIdTeacher: string) {
const strThisFuncName = "GetObjByIdTeacherlocalStorage";

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsvTeacherInfo_SimWApi.GetObjByIdTeacherlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsvTeacherInfo_SimWApi.GetObjByIdTeacherlocalStorage)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvTeacherInfo_SimEN._CurrTabName, strIdTeacher);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvTeacherInfo_SimCache: clsvTeacherInfo_SimEN = JSON.parse(strTempObj);
return objvTeacherInfo_SimCache;
}
try
{
const objvTeacherInfo_Sim = await vTeacherInfo_Sim_GetObjByIdTeacherAsync(strIdTeacher);
if (objvTeacherInfo_Sim != null)
{
localStorage.setItem(strKey, JSON.stringify(objvTeacherInfo_Sim));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvTeacherInfo_Sim;
}
return objvTeacherInfo_Sim;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdTeacher, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdTeacher:所给的关键字
 * @returns 对象
*/
export  async function vTeacherInfo_Sim_GetObjByIdTeacherCache(strIdTeacher:string,strIdSchool:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdTeacherCache";

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsvTeacherInfo_SimWApi.GetObjByIdTeacherCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsvTeacherInfo_SimWApi.GetObjByIdTeacherCache)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
try
{
const arrvTeacherInfo_SimSel = arrvTeacherInfo_SimObjLstCache.filter(x => 
 x.idTeacher == strIdTeacher );
let objvTeacherInfo_Sim: clsvTeacherInfo_SimEN;
if (arrvTeacherInfo_SimSel.length > 0)
{
objvTeacherInfo_Sim = arrvTeacherInfo_SimSel[0];
return objvTeacherInfo_Sim;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvTeacherInfo_SimConst = await vTeacherInfo_Sim_GetObjByIdTeacherAsync(strIdTeacher);
if (objvTeacherInfo_SimConst != null)
{
vTeacherInfo_Sim_ReFreshThisCache(strIdSchool);
return objvTeacherInfo_SimConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdTeacher, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
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
export  function vTeacherInfo_Sim_SortFunDefa(a:clsvTeacherInfo_SimEN , b:clsvTeacherInfo_SimEN): number 
{
return a.idTeacher.localeCompare(b.idTeacher);
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
export  function vTeacherInfo_Sim_SortFunDefa2Fld(a:clsvTeacherInfo_SimEN , b:clsvTeacherInfo_SimEN): number 
{
if (a.teacherId == b.teacherId) return a.teacherName.localeCompare(b.teacherName);
else return a.teacherId.localeCompare(b.teacherId);
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
export  function vTeacherInfo_Sim_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvTeacherInfo_SimEN.con_IdTeacher:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
return a.idTeacher.localeCompare(b.idTeacher);
}
case clsvTeacherInfo_SimEN.con_TeacherId:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
return a.teacherId.localeCompare(b.teacherId);
}
case clsvTeacherInfo_SimEN.con_TeacherName:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
return a.teacherName.localeCompare(b.teacherName);
}
case clsvTeacherInfo_SimEN.con_IdXzCollege:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvTeacherInfo_SimEN.con_IdSchool:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsvTeacherInfo_SimEN.con_TeachIdCollege:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
if (a.teachIdCollege == null) return -1;
if (b.teachIdCollege == null) return 1;
return a.teachIdCollege.localeCompare(b.teachIdCollege);
}
case clsvTeacherInfo_SimEN.con_TeachIdMajor:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
if (a.teachIdMajor == null) return -1;
if (b.teachIdMajor == null) return 1;
return a.teachIdMajor.localeCompare(b.teachIdMajor);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeacherInfo_Sim]中不存在!(in ${ vTeacherInfo_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvTeacherInfo_SimEN.con_IdTeacher:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
return b.idTeacher.localeCompare(a.idTeacher);
}
case clsvTeacherInfo_SimEN.con_TeacherId:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
return b.teacherId.localeCompare(a.teacherId);
}
case clsvTeacherInfo_SimEN.con_TeacherName:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
return b.teacherName.localeCompare(a.teacherName);
}
case clsvTeacherInfo_SimEN.con_IdXzCollege:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvTeacherInfo_SimEN.con_IdSchool:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsvTeacherInfo_SimEN.con_TeachIdCollege:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
if (b.teachIdCollege == null) return -1;
if (a.teachIdCollege == null) return 1;
return b.teachIdCollege.localeCompare(a.teachIdCollege);
}
case clsvTeacherInfo_SimEN.con_TeachIdMajor:
return (a: clsvTeacherInfo_SimEN, b: clsvTeacherInfo_SimEN) => {
if (b.teachIdMajor == null) return -1;
if (a.teachIdMajor == null) return 1;
return b.teachIdMajor.localeCompare(a.teachIdMajor);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeacherInfo_Sim]中不存在!(in ${ vTeacherInfo_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdTeacher:所给的关键字
 * @returns 对象
*/
export  async function vTeacherInfo_Sim_GetNameByIdTeacherCache(strIdTeacher: string,strIdSchool: string) {

if (IsNullOrEmpty(strIdTeacher) == true)
{
  const strMsg = Format("参数:[strIdTeacher]不能为空!(In clsvTeacherInfo_SimWApi.GetNameByIdTeacherCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdTeacher.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdTeacher]的长度:[{0}]不正确!(clsvTeacherInfo_SimWApi.GetNameByIdTeacherCache)", strIdTeacher.length);
console.error(strMsg);
throw (strMsg);
}
const arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
if (arrvTeacherInfo_SimObjLstCache == null) return "";
try
{
const arrvTeacherInfo_SimSel = arrvTeacherInfo_SimObjLstCache.filter(x => 
 x.idTeacher == strIdTeacher );
let objvTeacherInfo_Sim: clsvTeacherInfo_SimEN;
if (arrvTeacherInfo_SimSel.length > 0)
{
objvTeacherInfo_Sim = arrvTeacherInfo_SimSel[0];
return objvTeacherInfo_Sim.teacherName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdTeacher);
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
export  async function vTeacherInfo_Sim_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvTeacherInfo_SimEN.con_IdTeacher:
return (obj: clsvTeacherInfo_SimEN) => {
return obj.idTeacher === value;
}
case clsvTeacherInfo_SimEN.con_TeacherId:
return (obj: clsvTeacherInfo_SimEN) => {
return obj.teacherId === value;
}
case clsvTeacherInfo_SimEN.con_TeacherName:
return (obj: clsvTeacherInfo_SimEN) => {
return obj.teacherName === value;
}
case clsvTeacherInfo_SimEN.con_IdXzCollege:
return (obj: clsvTeacherInfo_SimEN) => {
return obj.idXzCollege === value;
}
case clsvTeacherInfo_SimEN.con_IdSchool:
return (obj: clsvTeacherInfo_SimEN) => {
return obj.idSchool === value;
}
case clsvTeacherInfo_SimEN.con_TeachIdCollege:
return (obj: clsvTeacherInfo_SimEN) => {
return obj.teachIdCollege === value;
}
case clsvTeacherInfo_SimEN.con_TeachIdMajor:
return (obj: clsvTeacherInfo_SimEN) => {
return obj.teachIdMajor === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vTeacherInfo_Sim]中不存在!(in ${ vTeacherInfo_Sim_ConstructorName}.${ strThisFuncName})`;
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
 @param strIdSchool:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vTeacherInfo_Sim_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdSchoolClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdSchoolClassfy) == true)
{
  const strMsg = Format("参数:[strIdSchoolClassfy]不能为空!(In clsvTeacherInfo_SimWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdSchoolClassfy.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdSchoolClassfy]的长度:[{0}]不正确!(clsvTeacherInfo_SimWApi.func)", strIdSchoolClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvTeacherInfo_SimEN.con_IdTeacher)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvTeacherInfo_SimEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvTeacherInfo_SimEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdTeacher = strInValue;
if (IsNullOrEmpty(strIdTeacher) == true)
{
return "";
}
const objvTeacherInfo_Sim = await vTeacherInfo_Sim_GetObjByIdTeacherCache(strIdTeacher , strIdSchoolClassfy);
if (objvTeacherInfo_Sim == null) return "";
if (objvTeacherInfo_Sim.GetFldValue(strOutFldName) == null) return "";
return objvTeacherInfo_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdSchool:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vTeacherInfo_Sim_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdSchoolClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdSchoolClassfy) == true)
{
  const strMsg = Format("参数:[strIdSchoolClassfy]不能为空!(In clsvTeacherInfo_SimWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdSchoolClassfy.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdSchoolClassfy]的长度:[{0}]不正确!(clsvTeacherInfo_SimWApi.funcKey)", strIdSchoolClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvTeacherInfo_SimEN.con_IdTeacher)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvTeacherInfo_Sim = await vTeacherInfo_Sim_GetObjLstCache(strIdSchoolClassfy);
if (arrvTeacherInfo_Sim == null) return [];
let arrvTeacherInfo_SimSel = arrvTeacherInfo_Sim;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvTeacherInfo_SimSel.length == 0) return [];
return arrvTeacherInfo_SimSel.map(x=>x.idTeacher);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vTeacherInfo_Sim_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_GetFirstObjAsync(strWhereCond: string): Promise<clsvTeacherInfo_SimEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const objvTeacherInfo_Sim = vTeacherInfo_Sim_GetObjFromJsonObj(returnObj);
return objvTeacherInfo_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_GetObjLstClientCache(strIdSchool: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvTeacherInfo_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvTeacherInfo_SimEN.WhereFormat, strIdSchool);
}
else
{
strWhereCond = Format("IdSchool='{0}'", strIdSchool);
}
const strKey = Format("{0}_{1}", clsvTeacherInfo_SimEN._CurrTabName, strIdSchool);
if (IsNullOrEmpty(clsvTeacherInfo_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTeacherInfo_SimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvTeacherInfo_SimExObjLstCache: Array<clsvTeacherInfo_SimEN> = CacheHelper.Get(strKey);
const arrvTeacherInfo_SimObjLstT = vTeacherInfo_Sim_GetObjLstByJSONObjLst(arrvTeacherInfo_SimExObjLstCache);
return arrvTeacherInfo_SimObjLstT;
}
try
{
const arrvTeacherInfo_SimExObjLst = await vTeacherInfo_Sim_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvTeacherInfo_SimExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTeacherInfo_SimExObjLst.length);
console.log(strInfo);
return arrvTeacherInfo_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_Sim_GetObjLstlocalStorage(strIdSchool: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvTeacherInfo_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvTeacherInfo_SimEN.WhereFormat, strIdSchool);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvTeacherInfo_SimEN.con_IdSchool, strIdSchool);
}
const strKey = Format("{0}_{1}", clsvTeacherInfo_SimEN._CurrTabName, strIdSchool);
if (IsNullOrEmpty(clsvTeacherInfo_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTeacherInfo_SimEN.CacheAddiCondition);
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
const arrvTeacherInfo_SimExObjLstCache: Array<clsvTeacherInfo_SimEN> = JSON.parse(strTempObjLst);
const arrvTeacherInfo_SimObjLstT = vTeacherInfo_Sim_GetObjLstByJSONObjLst(arrvTeacherInfo_SimExObjLstCache);
return arrvTeacherInfo_SimObjLstT;
}
try
{
const arrvTeacherInfo_SimExObjLst = await vTeacherInfo_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvTeacherInfo_SimEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrvTeacherInfo_SimExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTeacherInfo_SimExObjLst.length);
console.log(strInfo);
return arrvTeacherInfo_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_Sim_GetObjLstlocalStoragePureCache(strIdSchool: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvTeacherInfo_SimEN._CurrTabName, strIdSchool);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvTeacherInfo_SimObjLstCache: Array<clsvTeacherInfo_SimEN> = JSON.parse(strTempObjLst);
return arrvTeacherInfo_SimObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vTeacherInfo_Sim_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvTeacherInfo_SimEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_GetObjLstsessionStorage(strIdSchool: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvTeacherInfo_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvTeacherInfo_SimEN.WhereFormat, strIdSchool);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvTeacherInfo_SimEN.con_IdSchool, strIdSchool);
}
const strKey = Format("{0}_{1}", clsvTeacherInfo_SimEN._CurrTabName, strIdSchool);
if (IsNullOrEmpty(clsvTeacherInfo_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvTeacherInfo_SimEN.CacheAddiCondition);
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
const arrvTeacherInfo_SimExObjLstCache: Array<clsvTeacherInfo_SimEN> = JSON.parse(strTempObjLst);
const arrvTeacherInfo_SimObjLstT = vTeacherInfo_Sim_GetObjLstByJSONObjLst(arrvTeacherInfo_SimExObjLstCache);
return arrvTeacherInfo_SimObjLstT;
}
try
{
const arrvTeacherInfo_SimExObjLst = await vTeacherInfo_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvTeacherInfo_SimEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrvTeacherInfo_SimExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvTeacherInfo_SimExObjLst.length);
console.log(strInfo);
return arrvTeacherInfo_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_Sim_GetObjLstsessionStoragePureCache(strIdSchool: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvTeacherInfo_SimEN._CurrTabName, strIdSchool);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvTeacherInfo_SimObjLstCache: Array<clsvTeacherInfo_SimEN> = JSON.parse(strTempObjLst);
return arrvTeacherInfo_SimObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_Sim_GetObjLstCache(strIdSchool: string): Promise<Array<clsvTeacherInfo_SimEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdSchool) == true)
{
  const strMsg = Format("参数:[strIdSchool]不能为空！(In clsvTeacherInfo_SimWApi.vTeacherInfo_Sim_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdSchool.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdSchool]的长度:[{0}]不正确！(clsvTeacherInfo_SimWApi.vTeacherInfo_Sim_GetObjLstCache)", strIdSchool.length);
console.error(strMsg);
throw (strMsg);
}
let arrvTeacherInfo_SimObjLstCache;
switch (clsvTeacherInfo_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstsessionStorage(strIdSchool);
break;
case "03"://localStorage
arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstlocalStorage(strIdSchool);
break;
case "02"://ClientCache
arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstClientCache(strIdSchool);
break;
default:
arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstClientCache(strIdSchool);
break;
}
return arrvTeacherInfo_SimObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vTeacherInfo_Sim_GetObjLstPureCache(strIdSchool: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvTeacherInfo_SimObjLstCache;
switch (clsvTeacherInfo_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstsessionStoragePureCache(strIdSchool);
break;
case "03"://localStorage
arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstlocalStoragePureCache(strIdSchool);
break;
case "02"://ClientCache
arrvTeacherInfo_SimObjLstCache = null;
break;
default:
arrvTeacherInfo_SimObjLstCache = null;
break;
}
return arrvTeacherInfo_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdTeacherCond:条件对象
 * @returns 对象列表子集
*/
export  async function vTeacherInfo_Sim_GetSubObjLstCache(objvTeacherInfo_SimCond: ConditionCollection ,strIdSchool: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
let arrvTeacherInfo_SimSel = arrvTeacherInfo_SimObjLstCache;
if (objvTeacherInfo_SimCond.GetConditions().length == 0) return arrvTeacherInfo_SimSel;
try {
//console.log(sstrKeys);
for (const objCondition of objvTeacherInfo_SimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvTeacherInfo_SimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvTeacherInfo_SimCond), vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvTeacherInfo_SimEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdTeacher:关键字列表
 * @returns 对象列表
 **/
export  async function vTeacherInfo_Sim_GetObjLstByIdTeacherLstAsync(arrIdTeacher: Array<string>): Promise<Array<clsvTeacherInfo_SimEN>>  
{
const strThisFuncName = "GetObjLstByIdTeacherLstAsync";
const strAction = "GetObjLstByIdTeacherLst";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdTeacher, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param arrstrIdTeacherLst:关键字列表
 * @returns 对象列表
*/
export  async function vTeacherInfo_Sim_GetObjLstByIdTeacherLstCache(arrIdTeacherLst: Array<string> ,strIdSchool: string) {
const strThisFuncName = "GetObjLstByIdTeacherLstCache";
try
{
const arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
const arrvTeacherInfo_SimSel = arrvTeacherInfo_SimObjLstCache.filter(x => arrIdTeacherLst.indexOf(x.idTeacher)>-1);
return arrvTeacherInfo_SimSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdTeacherLst.join(","), vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvTeacherInfo_SimEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvTeacherInfo_SimEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vTeacherInfo_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param objstrIdTeacherCond:条件对象
 * @returns 对象列表子集
*/
export  async function vTeacherInfo_Sim_IsExistRecordCache(objvTeacherInfo_SimCond: ConditionCollection,strIdSchool: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
if (arrvTeacherInfo_SimObjLstCache == null) return false;
let arrvTeacherInfo_SimSel = arrvTeacherInfo_SimObjLstCache;
if (objvTeacherInfo_SimCond.GetConditions().length == 0) return arrvTeacherInfo_SimSel.length>0?true:false;
try {
for (const objCondition of objvTeacherInfo_SimCond.GetConditions()) {
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
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvTeacherInfo_SimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvTeacherInfo_SimCond), vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param strIdTeacher:所给的关键字
 * @returns 对象
*/
export  async function vTeacherInfo_Sim_IsExistCache(strIdTeacher:string,strIdSchool:string) {
const strThisFuncName = "IsExistCache";
const arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
if (arrvTeacherInfo_SimObjLstCache == null) return false;
try
{
const arrvTeacherInfo_SimSel = arrvTeacherInfo_SimObjLstCache.filter(x => x.idTeacher == strIdTeacher);
if (arrvTeacherInfo_SimSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdTeacher, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdTeacher:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vTeacherInfo_Sim_IsExistAsync(strIdTeacher: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdTeacher
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vTeacherInfo_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vTeacherInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param objvTeacherInfo_SimCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vTeacherInfo_Sim_GetRecCountByCondCache(objvTeacherInfo_SimCond: ConditionCollection ,strIdSchool: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvTeacherInfo_SimObjLstCache = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
if (arrvTeacherInfo_SimObjLstCache == null) return 0;
let arrvTeacherInfo_SimSel = arrvTeacherInfo_SimObjLstCache;
if (objvTeacherInfo_SimCond.GetConditions().length == 0) return arrvTeacherInfo_SimSel.length;
try {
for (const objCondition of objvTeacherInfo_SimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvTeacherInfo_SimSel = arrvTeacherInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvTeacherInfo_SimSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvTeacherInfo_SimCond), vTeacherInfo_Sim_ConstructorName, strThisFuncName);
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
export  function vTeacherInfo_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vTeacherInfo_Sim_ReFreshThisCache(strIdSchool: string):void
{

if (IsNullOrEmpty(strIdSchool) == true)
{
  const strMsg = Format("参数:[strIdSchool]不能为空!(In clsvTeacherInfo_SimWApi.vTeacherInfo_Sim_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdSchool.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdSchool]的长度:[{0}]不正确!(clsvTeacherInfo_SimWApi.vTeacherInfo_Sim_ReFreshThisCache)", strIdSchool.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvTeacherInfo_SimEN._CurrTabName, strIdSchool);
switch (clsvTeacherInfo_SimEN.CacheModeId)
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
clsvTeacherInfo_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vTeacherInfo_Sim_GetLastRefreshTime():string
{
if (clsvTeacherInfo_SimEN._RefreshTimeLst.length == 0) return "";
return clsvTeacherInfo_SimEN._RefreshTimeLst[clsvTeacherInfo_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdSchool:
*/
export  async function vTeacherInfo_Sim_BindDdl_IdTeacherByIdSchoolInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdSchool: string)
{

if (IsNullOrEmpty(strIdSchool) == true)
{
  const strMsg = Format("参数:[strIdSchool]不能为空！(In clsvTeacherInfo_SimWApi.BindDdl_IdTeacherByIdSchoolInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdSchool.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdSchool]的长度:[{0}]不正确！(clsvTeacherInfo_SimWApi.BindDdl_IdTeacherByIdSchoolInDiv)", strIdSchool.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdTeacherByIdSchoolInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdTeacherByIdSchoolInDivCache");
let arrObjLstSel = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.idSchool == strIdSchool);
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvTeacherInfo_SimEN.con_IdTeacher, clsvTeacherInfo_SimEN.con_TeacherName, "选教师...");
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdSchool:
*/
export  async function vTeacherInfo_Sim_BindDdl_IdTeacherInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdSchool: string)
{

if (IsNullOrEmpty(strIdSchool) == true)
{
  const strMsg = Format("参数:[strIdSchool]不能为空！(In clsvTeacherInfo_SimWApi.BindDdl_IdTeacherInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdSchool.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdSchool]的长度:[{0}]不正确！(clsvTeacherInfo_SimWApi.BindDdl_IdTeacherInDiv)", strIdSchool.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdTeacherInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdTeacherInDivCache");
const arrObjLstSel = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvTeacherInfo_SimEN.con_IdTeacher, clsvTeacherInfo_SimEN.con_TeacherName, "v教师_Sim...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdSchool:
*/
export  async function vTeacherInfo_Sim_GetArrvTeacherInfo_SimByIdSchoolCache(strIdSchool: string)
{

if (IsNullOrEmpty(strIdSchool) == true)
{
  const strMsg = Format("参数:[strIdSchool]不能为空！(In clsvTeacherInfo_SimWApi.BindDdl_IdTeacherByIdSchoolInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdSchool.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdSchool]的长度:[{0}]不正确！(clsvTeacherInfo_SimWApi.BindDdl_IdTeacherByIdSchoolInDiv)", strIdSchool.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdTeacherByIdSchoolInDivCache");
const arrvTeacherInfo_Sim = new Array<clsvTeacherInfo_SimEN>();
let arrObjLstSel = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.idSchool == strIdSchool);
const obj0 = new clsvTeacherInfo_SimEN();
obj0.idTeacher = '0';
obj0.teacherName = '选教师...';
arrvTeacherInfo_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvTeacherInfo_Sim.push(x));
return arrvTeacherInfo_Sim;
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdSchool:
*/
export  async function vTeacherInfo_Sim_GetArrvTeacherInfo_Sim(strIdSchool: string)
{

if (IsNullOrEmpty(strIdSchool) == true)
{
  const strMsg = Format("参数:[strIdSchool]不能为空！(In clsvTeacherInfo_SimWApi.BindDdl_IdTeacherInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdSchool.length != 4)
{
const strMsg = Format("缓存分类变量:[strIdSchool]的长度:[{0}]不正确！(clsvTeacherInfo_SimWApi.BindDdl_IdTeacherInDiv)", strIdSchool.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdTeacherInDivCache");
const arrvTeacherInfo_Sim = new Array<clsvTeacherInfo_SimEN>();
const arrObjLstSel = await vTeacherInfo_Sim_GetObjLstCache(strIdSchool);
if (arrObjLstSel == null) return null;
const obj0 = new clsvTeacherInfo_SimEN();
obj0.idTeacher = '0';
obj0.teacherName = '选v教师_Sim...';
arrvTeacherInfo_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvTeacherInfo_Sim.push(x));
return arrvTeacherInfo_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vTeacherInfo_Sim_GetJSONStrByObj (pobjvTeacherInfo_SimEN: clsvTeacherInfo_SimEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvTeacherInfo_SimEN);
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
export  function vTeacherInfo_Sim_GetObjLstByJSONStr (strJSON: string): Array<clsvTeacherInfo_SimEN>
{
let arrvTeacherInfo_SimObjLst = new Array<clsvTeacherInfo_SimEN>();
if (strJSON === "")
{
return arrvTeacherInfo_SimObjLst;
}
try
{
arrvTeacherInfo_SimObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvTeacherInfo_SimObjLst;
}
return arrvTeacherInfo_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvTeacherInfo_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vTeacherInfo_Sim_GetObjLstByJSONObjLst (arrvTeacherInfo_SimObjLstS: Array<clsvTeacherInfo_SimEN>): Array<clsvTeacherInfo_SimEN>
{
const arrvTeacherInfo_SimObjLst = new Array<clsvTeacherInfo_SimEN>();
for (const objInFor of arrvTeacherInfo_SimObjLstS) {
const obj1 = vTeacherInfo_Sim_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvTeacherInfo_SimObjLst.push(obj1);
}
return arrvTeacherInfo_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vTeacherInfo_Sim_GetObjByJSONStr (strJSON: string): clsvTeacherInfo_SimEN
{
let pobjvTeacherInfo_SimEN = new clsvTeacherInfo_SimEN();
if (strJSON === "")
{
return pobjvTeacherInfo_SimEN;
}
try
{
pobjvTeacherInfo_SimEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvTeacherInfo_SimEN;
}
return pobjvTeacherInfo_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vTeacherInfo_Sim_GetCombineCondition(objvTeacherInfo_SimCond: clsvTeacherInfo_SimEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvTeacherInfo_SimCond.dicFldComparisonOp, clsvTeacherInfo_SimEN.con_IdTeacher) == true)
{
const strComparisonOpIdTeacher:string = objvTeacherInfo_SimCond.dicFldComparisonOp[clsvTeacherInfo_SimEN.con_IdTeacher];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfo_SimEN.con_IdTeacher, objvTeacherInfo_SimCond.idTeacher, strComparisonOpIdTeacher);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfo_SimCond.dicFldComparisonOp, clsvTeacherInfo_SimEN.con_TeacherId) == true)
{
const strComparisonOpTeacherId:string = objvTeacherInfo_SimCond.dicFldComparisonOp[clsvTeacherInfo_SimEN.con_TeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfo_SimEN.con_TeacherId, objvTeacherInfo_SimCond.teacherId, strComparisonOpTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfo_SimCond.dicFldComparisonOp, clsvTeacherInfo_SimEN.con_TeacherName) == true)
{
const strComparisonOpTeacherName:string = objvTeacherInfo_SimCond.dicFldComparisonOp[clsvTeacherInfo_SimEN.con_TeacherName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfo_SimEN.con_TeacherName, objvTeacherInfo_SimCond.teacherName, strComparisonOpTeacherName);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfo_SimCond.dicFldComparisonOp, clsvTeacherInfo_SimEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvTeacherInfo_SimCond.dicFldComparisonOp[clsvTeacherInfo_SimEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfo_SimEN.con_IdXzCollege, objvTeacherInfo_SimCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfo_SimCond.dicFldComparisonOp, clsvTeacherInfo_SimEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objvTeacherInfo_SimCond.dicFldComparisonOp[clsvTeacherInfo_SimEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfo_SimEN.con_IdSchool, objvTeacherInfo_SimCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfo_SimCond.dicFldComparisonOp, clsvTeacherInfo_SimEN.con_TeachIdCollege) == true)
{
const strComparisonOpTeachIdCollege:string = objvTeacherInfo_SimCond.dicFldComparisonOp[clsvTeacherInfo_SimEN.con_TeachIdCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfo_SimEN.con_TeachIdCollege, objvTeacherInfo_SimCond.teachIdCollege, strComparisonOpTeachIdCollege);
}
if (Object.prototype.hasOwnProperty.call(objvTeacherInfo_SimCond.dicFldComparisonOp, clsvTeacherInfo_SimEN.con_TeachIdMajor) == true)
{
const strComparisonOpTeachIdMajor:string = objvTeacherInfo_SimCond.dicFldComparisonOp[clsvTeacherInfo_SimEN.con_TeachIdMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvTeacherInfo_SimEN.con_TeachIdMajor, objvTeacherInfo_SimCond.teachIdMajor, strComparisonOpTeachIdMajor);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvTeacherInfo_SimENS:源对象
 * @param objvTeacherInfo_SimENT:目标对象
*/
export  function vTeacherInfo_Sim_CopyObjTo(objvTeacherInfo_SimENS: clsvTeacherInfo_SimEN , objvTeacherInfo_SimENT: clsvTeacherInfo_SimEN ): void 
{
objvTeacherInfo_SimENT.idTeacher = objvTeacherInfo_SimENS.idTeacher; //教师流水号
objvTeacherInfo_SimENT.teacherId = objvTeacherInfo_SimENS.teacherId; //教师工号
objvTeacherInfo_SimENT.teacherName = objvTeacherInfo_SimENS.teacherName; //教师姓名
objvTeacherInfo_SimENT.idXzCollege = objvTeacherInfo_SimENS.idXzCollege; //学院流水号
objvTeacherInfo_SimENT.idSchool = objvTeacherInfo_SimENS.idSchool; //学校流水号
objvTeacherInfo_SimENT.teachIdCollege = objvTeacherInfo_SimENS.teachIdCollege; //Teach_id_College
objvTeacherInfo_SimENT.teachIdMajor = objvTeacherInfo_SimENS.teachIdMajor; //Teach_id_Major
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvTeacherInfo_SimENS:源对象
 * @param objvTeacherInfo_SimENT:目标对象
*/
export  function vTeacherInfo_Sim_GetObjFromJsonObj(objvTeacherInfo_SimENS: clsvTeacherInfo_SimEN): clsvTeacherInfo_SimEN 
{
 const objvTeacherInfo_SimENT: clsvTeacherInfo_SimEN = new clsvTeacherInfo_SimEN();
ObjectAssign(objvTeacherInfo_SimENT, objvTeacherInfo_SimENS);
 return objvTeacherInfo_SimENT;
}
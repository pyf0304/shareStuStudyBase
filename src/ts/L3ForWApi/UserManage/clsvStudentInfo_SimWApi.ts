
 /**
 * 类名:clsvStudentInfo_SimWApi
 * 表名:vStudentInfo_Sim(01120945)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:55
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * vStudentInfo_Sim(vStudentInfo_Sim)
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
import { clsvStudentInfo_SimEN } from "@/ts/L0Entity/UserManage/clsvStudentInfo_SimEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vStudentInfo_Sim_Controller = "vStudentInfo_SimApi";
 export const vStudentInfo_Sim_ConstructorName = "vStudentInfo_Sim";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdStudentInfo:关键字
 * @returns 对象
 **/
export  async function vStudentInfo_Sim_GetObjByIdStudentInfoAsync(strIdStudentInfo: string): Promise<clsvStudentInfo_SimEN|null>  
{
const strThisFuncName = "GetObjByIdStudentInfoAsync";

if (IsNullOrEmpty(strIdStudentInfo) == true)
{
  const strMsg = Format("参数:[strIdStudentInfo]不能为空!(In clsvStudentInfo_SimWApi.GetObjByIdStudentInfoAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStudentInfo.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsvStudentInfo_SimWApi.GetObjByIdStudentInfoAsync)", strIdStudentInfo.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdStudentInfo";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdStudentInfo,
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
const objvStudentInfo_Sim = vStudentInfo_Sim_GetObjFromJsonObj(returnObj);
return objvStudentInfo_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param strIdStudentInfo:所给的关键字
 * @returns 对象
*/
export  async function vStudentInfo_Sim_GetObjByIdStudentInfolocalStorage(strIdStudentInfo: string) {
const strThisFuncName = "GetObjByIdStudentInfolocalStorage";

if (IsNullOrEmpty(strIdStudentInfo) == true)
{
  const strMsg = Format("参数:[strIdStudentInfo]不能为空!(In clsvStudentInfo_SimWApi.GetObjByIdStudentInfolocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStudentInfo.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsvStudentInfo_SimWApi.GetObjByIdStudentInfolocalStorage)", strIdStudentInfo.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvStudentInfo_SimEN._CurrTabName, strIdStudentInfo);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvStudentInfo_SimCache: clsvStudentInfo_SimEN = JSON.parse(strTempObj);
return objvStudentInfo_SimCache;
}
try
{
const objvStudentInfo_Sim = await vStudentInfo_Sim_GetObjByIdStudentInfoAsync(strIdStudentInfo);
if (objvStudentInfo_Sim != null)
{
localStorage.setItem(strKey, JSON.stringify(objvStudentInfo_Sim));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvStudentInfo_Sim;
}
return objvStudentInfo_Sim;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdStudentInfo, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strIdStudentInfo:所给的关键字
 * @returns 对象
*/
export  async function vStudentInfo_Sim_GetObjByIdStudentInfoCache(strIdStudentInfo:string,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdStudentInfoCache";

if (IsNullOrEmpty(strIdStudentInfo) == true)
{
  const strMsg = Format("参数:[strIdStudentInfo]不能为空!(In clsvStudentInfo_SimWApi.GetObjByIdStudentInfoCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStudentInfo.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsvStudentInfo_SimWApi.GetObjByIdStudentInfoCache)", strIdStudentInfo.length);
console.error(strMsg);
throw (strMsg);
}
const arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
try
{
const arrvStudentInfo_SimSel = arrvStudentInfo_SimObjLstCache.filter(x => 
 x.idStudentInfo == strIdStudentInfo );
let objvStudentInfo_Sim: clsvStudentInfo_SimEN;
if (arrvStudentInfo_SimSel.length > 0)
{
objvStudentInfo_Sim = arrvStudentInfo_SimSel[0];
return objvStudentInfo_Sim;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvStudentInfo_SimConst = await vStudentInfo_Sim_GetObjByIdStudentInfoAsync(strIdStudentInfo);
if (objvStudentInfo_SimConst != null)
{
vStudentInfo_Sim_ReFreshThisCache(strIdCurrEduCls);
return objvStudentInfo_SimConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strIdStudentInfo, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  function vStudentInfo_Sim_SortFunDefa(a:clsvStudentInfo_SimEN , b:clsvStudentInfo_SimEN): number 
{
return a.idStudentInfo.localeCompare(b.idStudentInfo);
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
export  function vStudentInfo_Sim_SortFunDefa2Fld(a:clsvStudentInfo_SimEN , b:clsvStudentInfo_SimEN): number 
{
if (a.stuId == b.stuId) return a.stuName.localeCompare(b.stuName);
else return a.stuId.localeCompare(b.stuId);
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
export  function vStudentInfo_Sim_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvStudentInfo_SimEN.con_IdStudentInfo:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
case clsvStudentInfo_SimEN.con_StuId:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return a.stuId.localeCompare(b.stuId);
}
case clsvStudentInfo_SimEN.con_StuName:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (a.stuName == null) return -1;
if (b.stuName == null) return 1;
return a.stuName.localeCompare(b.stuName);
}
case clsvStudentInfo_SimEN.con_IdSex:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return a.idSex.localeCompare(b.idSex);
}
case clsvStudentInfo_SimEN.con_IdPolitics:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return a.idPolitics.localeCompare(b.idPolitics);
}
case clsvStudentInfo_SimEN.con_IdStuType:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return a.idStuType.localeCompare(b.idStuType);
}
case clsvStudentInfo_SimEN.con_IdGrade:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (a.idGrade == null) return -1;
if (b.idGrade == null) return 1;
return a.idGrade.localeCompare(b.idGrade);
}
case clsvStudentInfo_SimEN.con_IdGradeBase:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsvStudentInfo_SimEN.con_IdXzMajor:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return a.idXzMajor.localeCompare(b.idXzMajor);
}
case clsvStudentInfo_SimEN.con_IdXzCollege:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvStudentInfo_SimEN.con_IdAdminCls:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (a.idAdminCls == null) return -1;
if (b.idAdminCls == null) return 1;
return a.idAdminCls.localeCompare(b.idAdminCls);
}
case clsvStudentInfo_SimEN.con_UserId:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (a.userId == null) return -1;
if (b.userId == null) return 1;
return a.userId.localeCompare(b.userId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vStudentInfo_Sim]中不存在!(in ${ vStudentInfo_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvStudentInfo_SimEN.con_IdStudentInfo:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return b.idStudentInfo.localeCompare(a.idStudentInfo);
}
case clsvStudentInfo_SimEN.con_StuId:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return b.stuId.localeCompare(a.stuId);
}
case clsvStudentInfo_SimEN.con_StuName:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (b.stuName == null) return -1;
if (a.stuName == null) return 1;
return b.stuName.localeCompare(a.stuName);
}
case clsvStudentInfo_SimEN.con_IdSex:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return b.idSex.localeCompare(a.idSex);
}
case clsvStudentInfo_SimEN.con_IdPolitics:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return b.idPolitics.localeCompare(a.idPolitics);
}
case clsvStudentInfo_SimEN.con_IdStuType:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return b.idStuType.localeCompare(a.idStuType);
}
case clsvStudentInfo_SimEN.con_IdGrade:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (b.idGrade == null) return -1;
if (a.idGrade == null) return 1;
return b.idGrade.localeCompare(a.idGrade);
}
case clsvStudentInfo_SimEN.con_IdGradeBase:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsvStudentInfo_SimEN.con_IdXzMajor:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
return b.idXzMajor.localeCompare(a.idXzMajor);
}
case clsvStudentInfo_SimEN.con_IdXzCollege:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvStudentInfo_SimEN.con_IdAdminCls:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (b.idAdminCls == null) return -1;
if (a.idAdminCls == null) return 1;
return b.idAdminCls.localeCompare(a.idAdminCls);
}
case clsvStudentInfo_SimEN.con_UserId:
return (a: clsvStudentInfo_SimEN, b: clsvStudentInfo_SimEN) => {
if (b.userId == null) return -1;
if (a.userId == null) return 1;
return b.userId.localeCompare(a.userId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vStudentInfo_Sim]中不存在!(in ${ vStudentInfo_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdStudentInfo:所给的关键字
 * @returns 对象
*/
export  async function vStudentInfo_Sim_GetNameByIdStudentInfoCache(strIdStudentInfo: string,strIdCurrEduCls: string) {

if (IsNullOrEmpty(strIdStudentInfo) == true)
{
  const strMsg = Format("参数:[strIdStudentInfo]不能为空!(In clsvStudentInfo_SimWApi.GetNameByIdStudentInfoCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdStudentInfo.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsvStudentInfo_SimWApi.GetNameByIdStudentInfoCache)", strIdStudentInfo.length);
console.error(strMsg);
throw (strMsg);
}
const arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrvStudentInfo_SimObjLstCache == null) return "";
try
{
const arrvStudentInfo_SimSel = arrvStudentInfo_SimObjLstCache.filter(x => 
 x.idStudentInfo == strIdStudentInfo );
let objvStudentInfo_Sim: clsvStudentInfo_SimEN;
if (arrvStudentInfo_SimSel.length > 0)
{
objvStudentInfo_Sim = arrvStudentInfo_SimSel[0];
return objvStudentInfo_Sim.stuName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strIdStudentInfo);
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
export  async function vStudentInfo_Sim_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvStudentInfo_SimEN.con_IdStudentInfo:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idStudentInfo === value;
}
case clsvStudentInfo_SimEN.con_StuId:
return (obj: clsvStudentInfo_SimEN) => {
return obj.stuId === value;
}
case clsvStudentInfo_SimEN.con_StuName:
return (obj: clsvStudentInfo_SimEN) => {
return obj.stuName === value;
}
case clsvStudentInfo_SimEN.con_IdSex:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idSex === value;
}
case clsvStudentInfo_SimEN.con_IdPolitics:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idPolitics === value;
}
case clsvStudentInfo_SimEN.con_IdStuType:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idStuType === value;
}
case clsvStudentInfo_SimEN.con_IdGrade:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idGrade === value;
}
case clsvStudentInfo_SimEN.con_IdGradeBase:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idGradeBase === value;
}
case clsvStudentInfo_SimEN.con_IdXzMajor:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idXzMajor === value;
}
case clsvStudentInfo_SimEN.con_IdXzCollege:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idXzCollege === value;
}
case clsvStudentInfo_SimEN.con_IdAdminCls:
return (obj: clsvStudentInfo_SimEN) => {
return obj.idAdminCls === value;
}
case clsvStudentInfo_SimEN.con_UserId:
return (obj: clsvStudentInfo_SimEN) => {
return obj.userId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vStudentInfo_Sim]中不存在!(in ${ vStudentInfo_Sim_ConstructorName}.${ strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export  async function vStudentInfo_Sim_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvStudentInfo_SimWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvStudentInfo_SimWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvStudentInfo_SimEN.con_IdStudentInfo)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvStudentInfo_SimEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvStudentInfo_SimEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strIdStudentInfo = strInValue;
if (IsNullOrEmpty(strIdStudentInfo) == true)
{
return "";
}
const objvStudentInfo_Sim = await vStudentInfo_Sim_GetObjByIdStudentInfoCache(strIdStudentInfo , strIdCurrEduClsClassfy);
if (objvStudentInfo_Sim == null) return "";
if (objvStudentInfo_Sim.GetFldValue(strOutFldName) == null) return "";
return objvStudentInfo_Sim.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export  async function vStudentInfo_Sim_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<string>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvStudentInfo_SimWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvStudentInfo_SimWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvStudentInfo_SimEN.con_IdStudentInfo)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrvStudentInfo_Sim = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrvStudentInfo_Sim == null) return [];
let arrvStudentInfo_SimSel = arrvStudentInfo_Sim;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvStudentInfo_SimSel.length == 0) return [];
return arrvStudentInfo_SimSel.map(x=>x.idStudentInfo);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vStudentInfo_Sim_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_GetFirstObjAsync(strWhereCond: string): Promise<clsvStudentInfo_SimEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const objvStudentInfo_Sim = vStudentInfo_Sim_GetObjFromJsonObj(returnObj);
return objvStudentInfo_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvStudentInfo_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvStudentInfo_SimEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvStudentInfo_SimEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvStudentInfo_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvStudentInfo_SimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvStudentInfo_SimExObjLstCache: Array<clsvStudentInfo_SimEN> = CacheHelper.Get(strKey);
const arrvStudentInfo_SimObjLstT = vStudentInfo_Sim_GetObjLstByJSONObjLst(arrvStudentInfo_SimExObjLstCache);
return arrvStudentInfo_SimObjLstT;
}
try
{
const arrvStudentInfo_SimExObjLst = await vStudentInfo_Sim_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvStudentInfo_SimExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvStudentInfo_SimExObjLst.length);
console.log(strInfo);
return arrvStudentInfo_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vStudentInfo_Sim_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvStudentInfo_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvStudentInfo_SimEN.WhereFormat, strIdCurrEduCls);
}
else
{
const strMsg ="分类字段为扩展字段,此时WhereFormat不能为空!";
console.error(strMsg);
throw new Error(strMsg);
}
const strKey = Format("{0}_{1}", clsvStudentInfo_SimEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvStudentInfo_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvStudentInfo_SimEN.CacheAddiCondition);
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
const arrvStudentInfo_SimExObjLstCache: Array<clsvStudentInfo_SimEN> = JSON.parse(strTempObjLst);
const arrvStudentInfo_SimObjLstT = vStudentInfo_Sim_GetObjLstByJSONObjLst(arrvStudentInfo_SimExObjLstCache);
return arrvStudentInfo_SimObjLstT;
}
try
{
const arrvStudentInfo_SimExObjLst = await vStudentInfo_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvStudentInfo_SimEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrvStudentInfo_SimExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvStudentInfo_SimExObjLst.length);
console.log(strInfo);
return arrvStudentInfo_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vStudentInfo_Sim_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvStudentInfo_SimEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvStudentInfo_SimObjLstCache: Array<clsvStudentInfo_SimEN> = JSON.parse(strTempObjLst);
return arrvStudentInfo_SimObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vStudentInfo_Sim_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvStudentInfo_SimEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vStudentInfo_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvStudentInfo_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvStudentInfo_SimEN.WhereFormat, strIdCurrEduCls);
}
else
{
const strMsg ="分类字段为扩展字段,此时WhereFormat不能为空!";
console.error(strMsg);
throw new Error(strMsg);
}
const strKey = Format("{0}_{1}", clsvStudentInfo_SimEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvStudentInfo_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvStudentInfo_SimEN.CacheAddiCondition);
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
const arrvStudentInfo_SimExObjLstCache: Array<clsvStudentInfo_SimEN> = JSON.parse(strTempObjLst);
const arrvStudentInfo_SimObjLstT = vStudentInfo_Sim_GetObjLstByJSONObjLst(arrvStudentInfo_SimExObjLstCache);
return arrvStudentInfo_SimObjLstT;
}
try
{
const arrvStudentInfo_SimExObjLst = await vStudentInfo_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvStudentInfo_SimEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrvStudentInfo_SimExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvStudentInfo_SimExObjLst.length);
console.log(strInfo);
return arrvStudentInfo_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vStudentInfo_Sim_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvStudentInfo_SimEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvStudentInfo_SimObjLstCache: Array<clsvStudentInfo_SimEN> = JSON.parse(strTempObjLst);
return arrvStudentInfo_SimObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsvStudentInfo_SimEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvStudentInfo_SimWApi.vStudentInfo_Sim_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvStudentInfo_SimWApi.vStudentInfo_Sim_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrvStudentInfo_SimObjLstCache;
switch (clsvStudentInfo_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrvStudentInfo_SimObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vStudentInfo_Sim_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvStudentInfo_SimObjLstCache;
switch (clsvStudentInfo_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvStudentInfo_SimObjLstCache = null;
break;
default:
arrvStudentInfo_SimObjLstCache = null;
break;
}
return arrvStudentInfo_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdStudentInfoCond:条件对象
 * @returns 对象列表子集
*/
export  async function vStudentInfo_Sim_GetSubObjLstCache(objvStudentInfo_SimCond: ConditionCollection ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
let arrvStudentInfo_SimSel = arrvStudentInfo_SimObjLstCache;
if (objvStudentInfo_SimCond.GetConditions().length == 0) return arrvStudentInfo_SimSel;
try {
//console.log(sstrKeys);
for (const objCondition of objvStudentInfo_SimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvStudentInfo_SimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvStudentInfo_SimCond), vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvStudentInfo_SimEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdStudentInfo:关键字列表
 * @returns 对象列表
 **/
export  async function vStudentInfo_Sim_GetObjLstByIdStudentInfoLstAsync(arrIdStudentInfo: Array<string>): Promise<Array<clsvStudentInfo_SimEN>>  
{
const strThisFuncName = "GetObjLstByIdStudentInfoLstAsync";
const strAction = "GetObjLstByIdStudentInfoLst";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdStudentInfo, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vStudentInfo_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param arrstrIdStudentInfoLst:关键字列表
 * @returns 对象列表
*/
export  async function vStudentInfo_Sim_GetObjLstByIdStudentInfoLstCache(arrIdStudentInfoLst: Array<string> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByIdStudentInfoLstCache";
try
{
const arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
const arrvStudentInfo_SimSel = arrvStudentInfo_SimObjLstCache.filter(x => arrIdStudentInfoLst.indexOf(x.idStudentInfo)>-1);
return arrvStudentInfo_SimSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdStudentInfoLst.join(","), vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvStudentInfo_SimEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vStudentInfo_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvStudentInfo_SimEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vStudentInfo_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param objstrIdStudentInfoCond:条件对象
 * @returns 对象列表子集
*/
export  async function vStudentInfo_Sim_IsExistRecordCache(objvStudentInfo_SimCond: ConditionCollection,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrvStudentInfo_SimObjLstCache == null) return false;
let arrvStudentInfo_SimSel = arrvStudentInfo_SimObjLstCache;
if (objvStudentInfo_SimCond.GetConditions().length == 0) return arrvStudentInfo_SimSel.length>0?true:false;
try {
for (const objCondition of objvStudentInfo_SimCond.GetConditions()) {
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
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvStudentInfo_SimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvStudentInfo_SimCond), vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param strIdStudentInfo:所给的关键字
 * @returns 对象
*/
export  async function vStudentInfo_Sim_IsExistCache(strIdStudentInfo:string,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrvStudentInfo_SimObjLstCache == null) return false;
try
{
const arrvStudentInfo_SimSel = arrvStudentInfo_SimObjLstCache.filter(x => x.idStudentInfo == strIdStudentInfo);
if (arrvStudentInfo_SimSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strIdStudentInfo, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdStudentInfo:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vStudentInfo_Sim_IsExistAsync(strIdStudentInfo: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdStudentInfo
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  async function vStudentInfo_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vStudentInfo_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
 * @param objvStudentInfo_SimCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vStudentInfo_Sim_GetRecCountByCondCache(objvStudentInfo_SimCond: ConditionCollection ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvStudentInfo_SimObjLstCache = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrvStudentInfo_SimObjLstCache == null) return 0;
let arrvStudentInfo_SimSel = arrvStudentInfo_SimObjLstCache;
if (objvStudentInfo_SimCond.GetConditions().length == 0) return arrvStudentInfo_SimSel.length;
try {
for (const objCondition of objvStudentInfo_SimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvStudentInfo_SimSel = arrvStudentInfo_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvStudentInfo_SimSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvStudentInfo_SimCond), vStudentInfo_Sim_ConstructorName, strThisFuncName);
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
export  function vStudentInfo_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vStudentInfo_Sim_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvStudentInfo_SimWApi.vStudentInfo_Sim_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvStudentInfo_SimWApi.vStudentInfo_Sim_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvStudentInfo_SimEN._CurrTabName, strIdCurrEduCls);
switch (clsvStudentInfo_SimEN.CacheModeId)
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
clsvStudentInfo_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vStudentInfo_Sim_GetLastRefreshTime():string
{
if (clsvStudentInfo_SimEN._RefreshTimeLst.length == 0) return "";
return clsvStudentInfo_SimEN._RefreshTimeLst[clsvStudentInfo_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vStudentInfo_Sim_BindDdl_IdStudentInfoInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvStudentInfo_SimWApi.BindDdl_IdStudentInfoInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvStudentInfo_SimWApi.BindDdl_IdStudentInfoInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdStudentInfoInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdStudentInfoInDivCache");
const arrObjLstSel = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvStudentInfo_SimEN.con_IdStudentInfo, clsvStudentInfo_SimEN.con_StuName, "选学生...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vStudentInfo_Sim_GetArrvStudentInfo_Sim(strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvStudentInfo_SimWApi.BindDdl_IdStudentInfoInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvStudentInfo_SimWApi.BindDdl_IdStudentInfoInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdStudentInfoInDivCache");
const arrvStudentInfo_Sim = new Array<clsvStudentInfo_SimEN>();
const arrObjLstSel = await vStudentInfo_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return null;
const obj0 = new clsvStudentInfo_SimEN();
obj0.idStudentInfo = '0';
obj0.stuName = '选学生...';
arrvStudentInfo_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvStudentInfo_Sim.push(x));
return arrvStudentInfo_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vStudentInfo_Sim_GetJSONStrByObj (pobjvStudentInfo_SimEN: clsvStudentInfo_SimEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvStudentInfo_SimEN);
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
export  function vStudentInfo_Sim_GetObjLstByJSONStr (strJSON: string): Array<clsvStudentInfo_SimEN>
{
let arrvStudentInfo_SimObjLst = new Array<clsvStudentInfo_SimEN>();
if (strJSON === "")
{
return arrvStudentInfo_SimObjLst;
}
try
{
arrvStudentInfo_SimObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvStudentInfo_SimObjLst;
}
return arrvStudentInfo_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvStudentInfo_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vStudentInfo_Sim_GetObjLstByJSONObjLst (arrvStudentInfo_SimObjLstS: Array<clsvStudentInfo_SimEN>): Array<clsvStudentInfo_SimEN>
{
const arrvStudentInfo_SimObjLst = new Array<clsvStudentInfo_SimEN>();
for (const objInFor of arrvStudentInfo_SimObjLstS) {
const obj1 = vStudentInfo_Sim_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvStudentInfo_SimObjLst.push(obj1);
}
return arrvStudentInfo_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vStudentInfo_Sim_GetObjByJSONStr (strJSON: string): clsvStudentInfo_SimEN
{
let pobjvStudentInfo_SimEN = new clsvStudentInfo_SimEN();
if (strJSON === "")
{
return pobjvStudentInfo_SimEN;
}
try
{
pobjvStudentInfo_SimEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvStudentInfo_SimEN;
}
return pobjvStudentInfo_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vStudentInfo_Sim_GetCombineCondition(objvStudentInfo_SimCond: clsvStudentInfo_SimEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdStudentInfo) == true)
{
const strComparisonOpIdStudentInfo:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdStudentInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdStudentInfo, objvStudentInfo_SimCond.idStudentInfo, strComparisonOpIdStudentInfo);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_StuId) == true)
{
const strComparisonOpStuId:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_StuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_StuId, objvStudentInfo_SimCond.stuId, strComparisonOpStuId);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_StuName) == true)
{
const strComparisonOpStuName:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_StuName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_StuName, objvStudentInfo_SimCond.stuName, strComparisonOpStuName);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdSex) == true)
{
const strComparisonOpIdSex:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdSex];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdSex, objvStudentInfo_SimCond.idSex, strComparisonOpIdSex);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdPolitics) == true)
{
const strComparisonOpIdPolitics:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdPolitics];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdPolitics, objvStudentInfo_SimCond.idPolitics, strComparisonOpIdPolitics);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdStuType) == true)
{
const strComparisonOpIdStuType:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdStuType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdStuType, objvStudentInfo_SimCond.idStuType, strComparisonOpIdStuType);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdGrade) == true)
{
const strComparisonOpIdGrade:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdGrade, objvStudentInfo_SimCond.idGrade, strComparisonOpIdGrade);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdGradeBase, objvStudentInfo_SimCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdXzMajor) == true)
{
const strComparisonOpIdXzMajor:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdXzMajor];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdXzMajor, objvStudentInfo_SimCond.idXzMajor, strComparisonOpIdXzMajor);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdXzCollege, objvStudentInfo_SimCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_IdAdminCls) == true)
{
const strComparisonOpIdAdminCls:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_IdAdminCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_IdAdminCls, objvStudentInfo_SimCond.idAdminCls, strComparisonOpIdAdminCls);
}
if (Object.prototype.hasOwnProperty.call(objvStudentInfo_SimCond.dicFldComparisonOp, clsvStudentInfo_SimEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objvStudentInfo_SimCond.dicFldComparisonOp[clsvStudentInfo_SimEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvStudentInfo_SimEN.con_UserId, objvStudentInfo_SimCond.userId, strComparisonOpUserId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvStudentInfo_SimENS:源对象
 * @param objvStudentInfo_SimENT:目标对象
*/
export  function vStudentInfo_Sim_CopyObjTo(objvStudentInfo_SimENS: clsvStudentInfo_SimEN , objvStudentInfo_SimENT: clsvStudentInfo_SimEN ): void 
{
objvStudentInfo_SimENT.idStudentInfo = objvStudentInfo_SimENS.idStudentInfo; //学生流水号
objvStudentInfo_SimENT.stuId = objvStudentInfo_SimENS.stuId; //学号
objvStudentInfo_SimENT.stuName = objvStudentInfo_SimENS.stuName; //姓名
objvStudentInfo_SimENT.idSex = objvStudentInfo_SimENS.idSex; //性别流水号
objvStudentInfo_SimENT.idPolitics = objvStudentInfo_SimENS.idPolitics; //政治面貌流水号
objvStudentInfo_SimENT.idStuType = objvStudentInfo_SimENS.idStuType; //学生类别流水号
objvStudentInfo_SimENT.idGrade = objvStudentInfo_SimENS.idGrade; //年级流水号
objvStudentInfo_SimENT.idGradeBase = objvStudentInfo_SimENS.idGradeBase; //入学年级流水号
objvStudentInfo_SimENT.idXzMajor = objvStudentInfo_SimENS.idXzMajor; //专业流水号
objvStudentInfo_SimENT.idXzCollege = objvStudentInfo_SimENS.idXzCollege; //学院流水号
objvStudentInfo_SimENT.idAdminCls = objvStudentInfo_SimENS.idAdminCls; //行政班流水号
objvStudentInfo_SimENT.userId = objvStudentInfo_SimENS.userId; //用户ID
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvStudentInfo_SimENS:源对象
 * @param objvStudentInfo_SimENT:目标对象
*/
export  function vStudentInfo_Sim_GetObjFromJsonObj(objvStudentInfo_SimENS: clsvStudentInfo_SimEN): clsvStudentInfo_SimEN 
{
 const objvStudentInfo_SimENT: clsvStudentInfo_SimEN = new clsvStudentInfo_SimEN();
ObjectAssign(objvStudentInfo_SimENT, objvStudentInfo_SimENS);
 return objvStudentInfo_SimENT;
}
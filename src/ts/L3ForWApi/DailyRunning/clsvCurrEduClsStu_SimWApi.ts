
 /**
 * 类名:clsvCurrEduClsStu_SimWApi
 * 表名:vCurrEduClsStu_Sim(01120993)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:47
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
 * vCurrEduClsStu_Sim(vCurrEduClsStu_Sim)
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
import { clsvCurrEduClsStu_SimEN } from "@/ts/L0Entity/DailyRunning/clsvCurrEduClsStu_SimEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const vCurrEduClsStu_Sim_Controller = "vCurrEduClsStu_SimApi";
 export const vCurrEduClsStu_Sim_ConstructorName = "vCurrEduClsStu_Sim";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdEduClsStu:关键字
 * @returns 对象
 **/
export  async function vCurrEduClsStu_Sim_GetObjByIdEduClsStuAsync(lngIdEduClsStu: number): Promise<clsvCurrEduClsStu_SimEN|null>  
{
const strThisFuncName = "GetObjByIdEduClsStuAsync";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsvCurrEduClsStu_SimWApi.GetObjByIdEduClsStuAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByIdEduClsStu";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsStu,
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
const objvCurrEduClsStu_Sim = vCurrEduClsStu_Sim_GetObjFromJsonObj(returnObj);
return objvCurrEduClsStu_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduClsStu_Sim_GetObjByIdEduClsStulocalStorage(lngIdEduClsStu: number) {
const strThisFuncName = "GetObjByIdEduClsStulocalStorage";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsvCurrEduClsStu_SimWApi.GetObjByIdEduClsStulocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
const strKey = Format("{0}_{1}", clsvCurrEduClsStu_SimEN._CurrTabName, lngIdEduClsStu);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objvCurrEduClsStu_SimCache: clsvCurrEduClsStu_SimEN = JSON.parse(strTempObj);
return objvCurrEduClsStu_SimCache;
}
try
{
const objvCurrEduClsStu_Sim = await vCurrEduClsStu_Sim_GetObjByIdEduClsStuAsync(lngIdEduClsStu);
if (objvCurrEduClsStu_Sim != null)
{
localStorage.setItem(strKey, JSON.stringify(objvCurrEduClsStu_Sim));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objvCurrEduClsStu_Sim;
}
return objvCurrEduClsStu_Sim;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdEduClsStu, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduClsStu_Sim_GetObjByIdEduClsStuCache(lngIdEduClsStu:number,strIdCurrEduCls:string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByIdEduClsStuCache";

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsvCurrEduClsStu_SimWApi.GetObjByIdEduClsStuCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
try
{
const arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimObjLstCache.filter(x => 
 x.idEduClsStu == lngIdEduClsStu );
let objvCurrEduClsStu_Sim: clsvCurrEduClsStu_SimEN;
if (arrvCurrEduClsStu_SimSel.length > 0)
{
objvCurrEduClsStu_Sim = arrvCurrEduClsStu_SimSel[0];
return objvCurrEduClsStu_Sim;
}
else
{
if (bolTryAsyncOnce == true)
{
const objvCurrEduClsStu_SimConst = await vCurrEduClsStu_Sim_GetObjByIdEduClsStuAsync(lngIdEduClsStu);
if (objvCurrEduClsStu_SimConst != null)
{
vCurrEduClsStu_Sim_ReFreshThisCache(strIdCurrEduCls);
return objvCurrEduClsStu_SimConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, lngIdEduClsStu, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  function vCurrEduClsStu_Sim_SortFunDefa(a:clsvCurrEduClsStu_SimEN , b:clsvCurrEduClsStu_SimEN): number 
{
return a.idEduClsStu-b.idEduClsStu;
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
export  function vCurrEduClsStu_Sim_SortFunDefa2Fld(a:clsvCurrEduClsStu_SimEN , b:clsvCurrEduClsStu_SimEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.idStu.localeCompare(b.idStu);
else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function vCurrEduClsStu_Sim_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvCurrEduClsStu_SimEN.con_IdEduClsStu:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
return a.idEduClsStu-b.idEduClsStu;
}
case clsvCurrEduClsStu_SimEN.con_IdCurrEduCls:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvCurrEduClsStu_SimEN.con_IdStu:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
return a.idStu.localeCompare(b.idStu);
}
case clsvCurrEduClsStu_SimEN.con_StuId:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.stuId == null) return -1;
if (b.stuId == null) return 1;
return a.stuId.localeCompare(b.stuId);
}
case clsvCurrEduClsStu_SimEN.con_StuName:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.stuName == null) return -1;
if (b.stuName == null) return 1;
return a.stuName.localeCompare(b.stuName);
}
case clsvCurrEduClsStu_SimEN.con_IdSex:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.idSex == null) return -1;
if (b.idSex == null) return 1;
return a.idSex.localeCompare(b.idSex);
}
case clsvCurrEduClsStu_SimEN.con_EduClsStuStateId:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.eduClsStuStateId == null) return -1;
if (b.eduClsStuStateId == null) return 1;
return a.eduClsStuStateId.localeCompare(b.eduClsStuStateId);
}
case clsvCurrEduClsStu_SimEN.con_SchoolTerm:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsvCurrEduClsStu_SimEN.con_SchoolYear:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsvCurrEduClsStu_SimEN.con_IdAdminCls:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.idAdminCls == null) return -1;
if (b.idAdminCls == null) return 1;
return a.idAdminCls.localeCompare(b.idAdminCls);
}
case clsvCurrEduClsStu_SimEN.con_IdGrade:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.idGrade == null) return -1;
if (b.idGrade == null) return 1;
return a.idGrade.localeCompare(b.idGrade);
}
case clsvCurrEduClsStu_SimEN.con_UserTypeId:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.userTypeId == null) return -1;
if (b.userTypeId == null) return 1;
return a.userTypeId.localeCompare(b.userTypeId);
}
case clsvCurrEduClsStu_SimEN.con_IdSchool:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsStu_Sim]中不存在!(in ${ vCurrEduClsStu_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvCurrEduClsStu_SimEN.con_IdEduClsStu:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
return b.idEduClsStu-a.idEduClsStu;
}
case clsvCurrEduClsStu_SimEN.con_IdCurrEduCls:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvCurrEduClsStu_SimEN.con_IdStu:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
return b.idStu.localeCompare(a.idStu);
}
case clsvCurrEduClsStu_SimEN.con_StuId:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.stuId == null) return -1;
if (a.stuId == null) return 1;
return b.stuId.localeCompare(a.stuId);
}
case clsvCurrEduClsStu_SimEN.con_StuName:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.stuName == null) return -1;
if (a.stuName == null) return 1;
return b.stuName.localeCompare(a.stuName);
}
case clsvCurrEduClsStu_SimEN.con_IdSex:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.idSex == null) return -1;
if (a.idSex == null) return 1;
return b.idSex.localeCompare(a.idSex);
}
case clsvCurrEduClsStu_SimEN.con_EduClsStuStateId:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.eduClsStuStateId == null) return -1;
if (a.eduClsStuStateId == null) return 1;
return b.eduClsStuStateId.localeCompare(a.eduClsStuStateId);
}
case clsvCurrEduClsStu_SimEN.con_SchoolTerm:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsvCurrEduClsStu_SimEN.con_SchoolYear:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsvCurrEduClsStu_SimEN.con_IdAdminCls:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.idAdminCls == null) return -1;
if (a.idAdminCls == null) return 1;
return b.idAdminCls.localeCompare(a.idAdminCls);
}
case clsvCurrEduClsStu_SimEN.con_IdGrade:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.idGrade == null) return -1;
if (a.idGrade == null) return 1;
return b.idGrade.localeCompare(a.idGrade);
}
case clsvCurrEduClsStu_SimEN.con_UserTypeId:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.userTypeId == null) return -1;
if (a.userTypeId == null) return 1;
return b.userTypeId.localeCompare(a.userTypeId);
}
case clsvCurrEduClsStu_SimEN.con_IdSchool:
return (a: clsvCurrEduClsStu_SimEN, b: clsvCurrEduClsStu_SimEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsStu_Sim]中不存在!(in ${ vCurrEduClsStu_Sim_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduClsStu_Sim_GetNameByIdEduClsStuCache(lngIdEduClsStu: number,strIdCurrEduCls: string) {

if (lngIdEduClsStu == 0)
{
  const strMsg = Format("参数:[lngIdEduClsStu]不能为空!(In clsvCurrEduClsStu_SimWApi.GetNameByIdEduClsStuCache)");
console.error(strMsg);
 throw (strMsg);
}
const arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrvCurrEduClsStu_SimObjLstCache == null) return "";
try
{
const arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimObjLstCache.filter(x => 
 x.idEduClsStu == lngIdEduClsStu );
let objvCurrEduClsStu_Sim: clsvCurrEduClsStu_SimEN;
if (arrvCurrEduClsStu_SimSel.length > 0)
{
objvCurrEduClsStu_Sim = arrvCurrEduClsStu_SimSel[0];
return objvCurrEduClsStu_Sim.stuName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, lngIdEduClsStu);
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
export  async function vCurrEduClsStu_Sim_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvCurrEduClsStu_SimEN.con_IdEduClsStu:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.idEduClsStu === value;
}
case clsvCurrEduClsStu_SimEN.con_IdCurrEduCls:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.idCurrEduCls === value;
}
case clsvCurrEduClsStu_SimEN.con_IdStu:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.idStu === value;
}
case clsvCurrEduClsStu_SimEN.con_StuId:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.stuId === value;
}
case clsvCurrEduClsStu_SimEN.con_StuName:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.stuName === value;
}
case clsvCurrEduClsStu_SimEN.con_IdSex:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.idSex === value;
}
case clsvCurrEduClsStu_SimEN.con_EduClsStuStateId:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.eduClsStuStateId === value;
}
case clsvCurrEduClsStu_SimEN.con_SchoolTerm:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.schoolTerm === value;
}
case clsvCurrEduClsStu_SimEN.con_SchoolYear:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.schoolYear === value;
}
case clsvCurrEduClsStu_SimEN.con_IdAdminCls:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.idAdminCls === value;
}
case clsvCurrEduClsStu_SimEN.con_IdGrade:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.idGrade === value;
}
case clsvCurrEduClsStu_SimEN.con_UserTypeId:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.userTypeId === value;
}
case clsvCurrEduClsStu_SimEN.con_IdSchool:
return (obj: clsvCurrEduClsStu_SimEN) => {
return obj.idSchool === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsStu_Sim]中不存在!(in ${ vCurrEduClsStu_Sim_ConstructorName}.${ strThisFuncName})`;
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
export  async function vCurrEduClsStu_Sim_func(strInFldName:string , strOutFldName:string , strInValue:string 
, strIdCurrEduClsClassfy: string)
{
//const strThisFuncName = "func";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvCurrEduClsStu_SimWApi.func)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvCurrEduClsStu_SimWApi.func)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName != clsvCurrEduClsStu_SimEN.con_IdEduClsStu)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsvCurrEduClsStu_SimEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsvCurrEduClsStu_SimEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const lngIdEduClsStu = Number(strInValue);
if (lngIdEduClsStu == 0)
{
return "";
}
const objvCurrEduClsStu_Sim = await vCurrEduClsStu_Sim_GetObjByIdEduClsStuCache(lngIdEduClsStu , strIdCurrEduClsClassfy);
if (objvCurrEduClsStu_Sim == null) return "";
if (objvCurrEduClsStu_Sim.GetFldValue(strOutFldName) == null) return "";
return objvCurrEduClsStu_Sim.GetFldValue(strOutFldName).toString();
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
export  async function vCurrEduClsStu_Sim_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string, strIdCurrEduClsClassfy: string): Promise<Array<number>>
{
//const strThisFuncName = "funcKey";

if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true)
{
  const strMsg = Format("参数:[strIdCurrEduClsClassfy]不能为空!(In clsvCurrEduClsStu_SimWApi.funcKey)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduClsClassfy.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvCurrEduClsStu_SimWApi.funcKey)", strIdCurrEduClsClassfy.length);
console.error(strMsg);
throw (strMsg);
}

if (strInFldName == clsvCurrEduClsStu_SimEN.con_IdEduClsStu)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (Number(strInValue) == 0)
{
return [];
}
const arrvCurrEduClsStu_Sim = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduClsClassfy);
if (arrvCurrEduClsStu_Sim == null) return [];
let arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_Sim;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrvCurrEduClsStu_SimSel.length == 0) return [];
return arrvCurrEduClsStu_SimSel.map(x=>x.idEduClsStu);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vCurrEduClsStu_Sim_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_GetFirstObjAsync(strWhereCond: string): Promise<clsvCurrEduClsStu_SimEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const objvCurrEduClsStu_Sim = vCurrEduClsStu_Sim_GetObjFromJsonObj(returnObj);
return objvCurrEduClsStu_Sim;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_GetObjLstClientCache(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduClsStu_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduClsStu_SimEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvCurrEduClsStu_SimEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvCurrEduClsStu_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduClsStu_SimEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrvCurrEduClsStu_SimExObjLstCache: Array<clsvCurrEduClsStu_SimEN> = CacheHelper.Get(strKey);
const arrvCurrEduClsStu_SimObjLstT = vCurrEduClsStu_Sim_GetObjLstByJSONObjLst(arrvCurrEduClsStu_SimExObjLstCache);
return arrvCurrEduClsStu_SimObjLstT;
}
try
{
const arrvCurrEduClsStu_SimExObjLst = await vCurrEduClsStu_Sim_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrvCurrEduClsStu_SimExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduClsStu_SimExObjLst.length);
console.log(strInfo);
return arrvCurrEduClsStu_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_Sim_GetObjLstlocalStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduClsStu_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduClsStu_SimEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvCurrEduClsStu_SimEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvCurrEduClsStu_SimEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvCurrEduClsStu_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduClsStu_SimEN.CacheAddiCondition);
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
const arrvCurrEduClsStu_SimExObjLstCache: Array<clsvCurrEduClsStu_SimEN> = JSON.parse(strTempObjLst);
const arrvCurrEduClsStu_SimObjLstT = vCurrEduClsStu_Sim_GetObjLstByJSONObjLst(arrvCurrEduClsStu_SimExObjLstCache);
return arrvCurrEduClsStu_SimObjLstT;
}
try
{
const arrvCurrEduClsStu_SimExObjLst = await vCurrEduClsStu_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvCurrEduClsStu_SimEN._CurrTabName);
const arrCacheKeyLst = LocalStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => localStorage.removeItem(x));
localStorage.setItem(strKey, JSON.stringify(arrvCurrEduClsStu_SimExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduClsStu_SimExObjLst.length);
console.log(strInfo);
return arrvCurrEduClsStu_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_Sim_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvCurrEduClsStu_SimEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrvCurrEduClsStu_SimObjLstCache: Array<clsvCurrEduClsStu_SimEN> = JSON.parse(strTempObjLst);
return arrvCurrEduClsStu_SimObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function vCurrEduClsStu_Sim_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvCurrEduClsStu_SimEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_GetObjLstsessionStorage(strIdCurrEduCls: string)
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
if (IsNullOrEmpty(clsvCurrEduClsStu_SimEN.WhereFormat) == false)
{
strWhereCond = Format(clsvCurrEduClsStu_SimEN.WhereFormat, strIdCurrEduCls);
}
else
{
strWhereCond = Format("{0}='{1}'",clsvCurrEduClsStu_SimEN.con_IdCurrEduCls, strIdCurrEduCls);
}
const strKey = Format("{0}_{1}", clsvCurrEduClsStu_SimEN._CurrTabName, strIdCurrEduCls);
if (IsNullOrEmpty(clsvCurrEduClsStu_SimEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsvCurrEduClsStu_SimEN.CacheAddiCondition);
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
const arrvCurrEduClsStu_SimExObjLstCache: Array<clsvCurrEduClsStu_SimEN> = JSON.parse(strTempObjLst);
const arrvCurrEduClsStu_SimObjLstT = vCurrEduClsStu_Sim_GetObjLstByJSONObjLst(arrvCurrEduClsStu_SimExObjLstCache);
return arrvCurrEduClsStu_SimObjLstT;
}
try
{
const arrvCurrEduClsStu_SimExObjLst = await vCurrEduClsStu_Sim_GetObjLstAsync(strWhereCond);
const strPrefix = Format("{0}_", clsvCurrEduClsStu_SimEN._CurrTabName);
const arrCacheKeyLst = SessionStorage_GetKeyByPrefix(strPrefix);
arrCacheKeyLst.forEach(x => sessionStorage.removeItem(x));
sessionStorage.setItem(strKey, JSON.stringify(arrvCurrEduClsStu_SimExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrvCurrEduClsStu_SimExObjLst.length);
console.log(strInfo);
return arrvCurrEduClsStu_SimExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_Sim_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string)
{
//初始化列表缓存
const strKey = Format("{0}_{1}", clsvCurrEduClsStu_SimEN._CurrTabName, strIdCurrEduCls);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrvCurrEduClsStu_SimObjLstCache: Array<clsvCurrEduClsStu_SimEN> = JSON.parse(strTempObjLst);
return arrvCurrEduClsStu_SimObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls: string): Promise<Array<clsvCurrEduClsStu_SimEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";


if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.vCurrEduClsStu_Sim_GetObjLstCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.vCurrEduClsStu_Sim_GetObjLstCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
let arrvCurrEduClsStu_SimObjLstCache;
switch (clsvCurrEduClsStu_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstsessionStorage(strIdCurrEduCls);
break;
case "03"://localStorage
arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstlocalStorage(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstClientCache(strIdCurrEduCls);
break;
default:
arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstClientCache(strIdCurrEduCls);
break;
}
return arrvCurrEduClsStu_SimObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function vCurrEduClsStu_Sim_GetObjLstPureCache(strIdCurrEduCls: string)
{
//const strThisFuncName = "GetObjLstPureCache";
let arrvCurrEduClsStu_SimObjLstCache;
switch (clsvCurrEduClsStu_SimEN.CacheModeId)
{
case "04"://sessionStorage
arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
break;
case "03"://localStorage
arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
break;
case "02"://ClientCache
arrvCurrEduClsStu_SimObjLstCache = null;
break;
default:
arrvCurrEduClsStu_SimObjLstCache = null;
break;
}
return arrvCurrEduClsStu_SimObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngIdEduClsStuCond:条件对象
 * @returns 对象列表子集
*/
export  async function vCurrEduClsStu_Sim_GetSubObjLstCache(objvCurrEduClsStu_SimCond: ConditionCollection ,strIdCurrEduCls: string) {
const strThisFuncName = "GetSubObjLstCache";
const arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
let arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimObjLstCache;
if (objvCurrEduClsStu_SimCond.GetConditions().length == 0) return arrvCurrEduClsStu_SimSel;
try {
//console.log(sstrKeys);
for (const objCondition of objvCurrEduClsStu_SimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvCurrEduClsStu_SimSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objvCurrEduClsStu_SimCond), vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsvCurrEduClsStu_SimEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdEduClsStu:关键字列表
 * @returns 对象列表
 **/
export  async function vCurrEduClsStu_Sim_GetObjLstByIdEduClsStuLstAsync(arrIdEduClsStu: Array<string>): Promise<Array<clsvCurrEduClsStu_SimEN>>  
{
const strThisFuncName = "GetObjLstByIdEduClsStuLstAsync";
const strAction = "GetObjLstByIdEduClsStuLst";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduClsStu, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
 * @param arrlngIdEduClsStuLst:关键字列表
 * @returns 对象列表
*/
export  async function vCurrEduClsStu_Sim_GetObjLstByIdEduClsStuLstCache(arrIdEduClsStuLst: Array<number> ,strIdCurrEduCls: string) {
const strThisFuncName = "GetObjLstByIdEduClsStuLstCache";
try
{
const arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
const arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimObjLstCache.filter(x => arrIdEduClsStuLst.indexOf(x.idEduClsStu)>-1);
return arrvCurrEduClsStu_SimSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrIdEduClsStuLst.join(","), vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvCurrEduClsStu_SimEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvCurrEduClsStu_SimEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsStu_Sim_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
 * @param objlngIdEduClsStuCond:条件对象
 * @returns 对象列表子集
*/
export  async function vCurrEduClsStu_Sim_IsExistRecordCache(objvCurrEduClsStu_SimCond: ConditionCollection,strIdCurrEduCls: string) {
const strThisFuncName = "IsExistRecordCache";
const arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrvCurrEduClsStu_SimObjLstCache == null) return false;
let arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimObjLstCache;
if (objvCurrEduClsStu_SimCond.GetConditions().length == 0) return arrvCurrEduClsStu_SimSel.length>0?true:false;
try {
for (const objCondition of objvCurrEduClsStu_SimCond.GetConditions()) {
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
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrvCurrEduClsStu_SimSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objvCurrEduClsStu_SimCond), vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsStu:所给的关键字
 * @returns 对象
*/
export  async function vCurrEduClsStu_Sim_IsExistCache(lngIdEduClsStu:number,strIdCurrEduCls:string) {
const strThisFuncName = "IsExistCache";
const arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrvCurrEduClsStu_SimObjLstCache == null) return false;
try
{
const arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimObjLstCache.filter(x => x.idEduClsStu == lngIdEduClsStu);
if (arrvCurrEduClsStu_SimSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", lngIdEduClsStu, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngIdEduClsStu:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vCurrEduClsStu_Sim_IsExistAsync(lngIdEduClsStu: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsStu
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsStu_Sim_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vCurrEduClsStu_Sim_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
 * @param objvCurrEduClsStu_SimCond:条件对象
 * @returns 对象列表记录数
*/
export  async function vCurrEduClsStu_Sim_GetRecCountByCondCache(objvCurrEduClsStu_SimCond: ConditionCollection ,strIdCurrEduCls: string) {
const strThisFuncName = "GetRecCountByCondCache";
const arrvCurrEduClsStu_SimObjLstCache = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrvCurrEduClsStu_SimObjLstCache == null) return 0;
let arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimObjLstCache;
if (objvCurrEduClsStu_SimCond.GetConditions().length == 0) return arrvCurrEduClsStu_SimSel.length;
try {
for (const objCondition of objvCurrEduClsStu_SimCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrvCurrEduClsStu_SimSel = arrvCurrEduClsStu_SimSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrvCurrEduClsStu_SimSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objvCurrEduClsStu_SimCond), vCurrEduClsStu_Sim_ConstructorName, strThisFuncName);
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
export  function vCurrEduClsStu_Sim_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function vCurrEduClsStu_Sim_ReFreshThisCache(strIdCurrEduCls: string):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In clsvCurrEduClsStu_SimWApi.vCurrEduClsStu_Sim_ReFreshThisCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsvCurrEduClsStu_SimWApi.vCurrEduClsStu_Sim_ReFreshThisCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = Format("{0}_{1}", clsvCurrEduClsStu_SimEN._CurrTabName, strIdCurrEduCls);
switch (clsvCurrEduClsStu_SimEN.CacheModeId)
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
clsvCurrEduClsStu_SimEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function vCurrEduClsStu_Sim_GetLastRefreshTime():string
{
if (clsvCurrEduClsStu_SimEN._RefreshTimeLst.length == 0) return "";
return clsvCurrEduClsStu_SimEN._RefreshTimeLst[clsvCurrEduClsStu_SimEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vCurrEduClsStu_Sim_BindDdl_IdStuByIdCurrEduClsOrByStuNameInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.BindDdl_IdStuByIdCurrEduClsOrByStuNameInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.BindDdl_IdStuByIdCurrEduClsOrByStuNameInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdStuByIdCurrEduClsOrByStuNameInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdStuByIdCurrEduClsOrByStuNameInDivCache");
let arrObjLstSel = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
arrObjLstSel = arrObjLstSel.sort((x, y) => x.stuName.localeCompare(y.stuName));
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvCurrEduClsStu_SimEN.con_IdStu, clsvCurrEduClsStu_SimEN.con_StuName, "选学生...");
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vCurrEduClsStu_Sim_BindDdl_IdStuByIdCurrEduClsOrderByStuIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.BindDdl_IdStuByIdCurrEduClsOrderByStuIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.BindDdl_IdStuByIdCurrEduClsOrderByStuIdInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_IdStuByIdCurrEduClsOrderByStuIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdStuByIdCurrEduClsOrderByStuIdInDivCache");
let arrObjLstSel = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
arrObjLstSel = arrObjLstSel.sort((x, y) => x.stuId.localeCompare(y.stuId));
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvCurrEduClsStu_SimEN.con_IdStu, clsvCurrEduClsStu_SimEN.con_StuName, "选学生...");
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vCurrEduClsStu_Sim_BindDdl_StuIdByIdCurrEduClsByStuNameInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.BindDdl_StuIdByIdCurrEduClsByStuNameInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.BindDdl_StuIdByIdCurrEduClsByStuNameInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_StuIdByIdCurrEduClsByStuNameInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_StuIdByIdCurrEduClsByStuNameInDivCache");
let arrObjLstSel = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
arrObjLstSel = arrObjLstSel.sort((x, y) => x.stuName.localeCompare(y.stuName));
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvCurrEduClsStu_SimEN.con_StuId, clsvCurrEduClsStu_SimEN.con_StuName, "选学生...");
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vCurrEduClsStu_Sim_BindDdl_StuIdByIdCurrEduClsOrByStuIdInDivCache(objDiv: HTMLDivElement, strDdlName: string ,strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.BindDdl_StuIdByIdCurrEduClsOrByStuIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.BindDdl_StuIdByIdCurrEduClsOrByStuIdInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_StuIdByIdCurrEduClsOrByStuIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_StuIdByIdCurrEduClsOrByStuIdInDivCache");
let arrObjLstSel = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
arrObjLstSel = arrObjLstSel.sort((x, y) => x.stuId.localeCompare(y.stuId));
BindDdl_ObjLstInDivObj_V(objDiv, strDdlName, arrObjLstSel, clsvCurrEduClsStu_SimEN.con_StuId, clsvCurrEduClsStu_SimEN.con_StuName, "选学生...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vCurrEduClsStu_Sim_GetArrvCurrEduClsStu_SimByIdCurrEduClsOrByStuName(strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.BindDdl_IdStuByIdCurrEduClsOrByStuNameInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.BindDdl_IdStuByIdCurrEduClsOrByStuNameInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdStuByIdCurrEduClsOrByStuNameInDivCache");
const arrvCurrEduClsStu_Sim = new Array<clsvCurrEduClsStu_SimEN>();
let arrObjLstSel = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.stuName === null && y.stuName === null) return 0;
if (x.stuName === null) return 1;
if (y.stuName === null) return -1;
return x.stuName.localeCompare(y.stuName);
});
const obj0 = new clsvCurrEduClsStu_SimEN();
obj0.idStu = '0';
obj0.stuName = '选学生...';
arrvCurrEduClsStu_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvCurrEduClsStu_Sim.push(x));
return arrvCurrEduClsStu_Sim;
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vCurrEduClsStu_Sim_GetArrvCurrEduClsStu_SimByIdCurrEduClsOrByStuId(strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.BindDdl_IdStuByIdCurrEduClsOrderByStuIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.BindDdl_IdStuByIdCurrEduClsOrderByStuIdInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_IdStuByIdCurrEduClsOrderByStuIdInDivCache");
const arrvCurrEduClsStu_Sim = new Array<clsvCurrEduClsStu_SimEN>();
let arrObjLstSel = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.stuId === null && y.stuId === null) return 0;
if (x.stuId === null) return 1;
if (y.stuId === null) return -1;
return x.stuId.localeCompare(y.stuId);
});
const obj0 = new clsvCurrEduClsStu_SimEN();
obj0.idStu = '0';
obj0.stuName = '选学生...';
arrvCurrEduClsStu_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvCurrEduClsStu_Sim.push(x));
return arrvCurrEduClsStu_Sim;
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vCurrEduClsStu_Sim_GetArrvCurrEduClsStu_SimByEduClsOrByStuName(strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.BindDdl_StuIdByIdCurrEduClsByStuNameInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.BindDdl_StuIdByIdCurrEduClsByStuNameInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_StuIdByIdCurrEduClsByStuNameInDivCache");
const arrvCurrEduClsStu_Sim = new Array<clsvCurrEduClsStu_SimEN>();
let arrObjLstSel = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.stuName === null && y.stuName === null) return 0;
if (x.stuName === null) return 1;
if (y.stuName === null) return -1;
return x.stuName.localeCompare(y.stuName);
});
const obj0 = new clsvCurrEduClsStu_SimEN();
obj0.stuId = '0';
obj0.stuName = '选学生...';
arrvCurrEduClsStu_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvCurrEduClsStu_Sim.push(x));
return arrvCurrEduClsStu_Sim;
}
/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

 * @param strIdCurrEduCls:
*/
export  async function vCurrEduClsStu_Sim_GetArrvCurrEduClsStu_SimByEduClsOrByStuId(strIdCurrEduCls: string)
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空！(In clsvCurrEduClsStu_SimWApi.BindDdl_StuIdByIdCurrEduClsOrByStuIdInDiv)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvCurrEduClsStu_SimWApi.BindDdl_StuIdByIdCurrEduClsOrByStuIdInDiv)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_StuIdByIdCurrEduClsOrByStuIdInDivCache");
const arrvCurrEduClsStu_Sim = new Array<clsvCurrEduClsStu_SimEN>();
let arrObjLstSel = await vCurrEduClsStu_Sim_GetObjLstCache(strIdCurrEduCls);
if (arrObjLstSel == null) return null;
arrObjLstSel = arrObjLstSel.filter(x=>x.idCurrEduCls == strIdCurrEduCls);
arrObjLstSel = arrObjLstSel.sort((x, y) => {
    if (x.stuId === null && y.stuId === null) return 0;
if (x.stuId === null) return 1;
if (y.stuId === null) return -1;
return x.stuId.localeCompare(y.stuId);
});
const obj0 = new clsvCurrEduClsStu_SimEN();
obj0.stuId = '0';
obj0.stuName = '选学生...';
arrvCurrEduClsStu_Sim.push(obj0);
arrObjLstSel.forEach(x => arrvCurrEduClsStu_Sim.push(x));
return arrvCurrEduClsStu_Sim;
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduClsStu_Sim_GetJSONStrByObj (pobjvCurrEduClsStu_SimEN: clsvCurrEduClsStu_SimEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvCurrEduClsStu_SimEN);
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
export  function vCurrEduClsStu_Sim_GetObjLstByJSONStr (strJSON: string): Array<clsvCurrEduClsStu_SimEN>
{
let arrvCurrEduClsStu_SimObjLst = new Array<clsvCurrEduClsStu_SimEN>();
if (strJSON === "")
{
return arrvCurrEduClsStu_SimObjLst;
}
try
{
arrvCurrEduClsStu_SimObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvCurrEduClsStu_SimObjLst;
}
return arrvCurrEduClsStu_SimObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCurrEduClsStu_SimObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vCurrEduClsStu_Sim_GetObjLstByJSONObjLst (arrvCurrEduClsStu_SimObjLstS: Array<clsvCurrEduClsStu_SimEN>): Array<clsvCurrEduClsStu_SimEN>
{
const arrvCurrEduClsStu_SimObjLst = new Array<clsvCurrEduClsStu_SimEN>();
for (const objInFor of arrvCurrEduClsStu_SimObjLstS) {
const obj1 = vCurrEduClsStu_Sim_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvCurrEduClsStu_SimObjLst.push(obj1);
}
return arrvCurrEduClsStu_SimObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduClsStu_Sim_GetObjByJSONStr (strJSON: string): clsvCurrEduClsStu_SimEN
{
let pobjvCurrEduClsStu_SimEN = new clsvCurrEduClsStu_SimEN();
if (strJSON === "")
{
return pobjvCurrEduClsStu_SimEN;
}
try
{
pobjvCurrEduClsStu_SimEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvCurrEduClsStu_SimEN;
}
return pobjvCurrEduClsStu_SimEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vCurrEduClsStu_Sim_GetCombineCondition(objvCurrEduClsStu_SimCond: clsvCurrEduClsStu_SimEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_IdEduClsStu) == true)
{
const strComparisonOpIdEduClsStu:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_IdEduClsStu];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsStu_SimEN.con_IdEduClsStu, objvCurrEduClsStu_SimCond.idEduClsStu, strComparisonOpIdEduClsStu);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_IdCurrEduCls, objvCurrEduClsStu_SimCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_IdStu) == true)
{
const strComparisonOpIdStu:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_IdStu];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_IdStu, objvCurrEduClsStu_SimCond.idStu, strComparisonOpIdStu);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_StuId) == true)
{
const strComparisonOpStuId:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_StuId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_StuId, objvCurrEduClsStu_SimCond.stuId, strComparisonOpStuId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_StuName) == true)
{
const strComparisonOpStuName:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_StuName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_StuName, objvCurrEduClsStu_SimCond.stuName, strComparisonOpStuName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_IdSex) == true)
{
const strComparisonOpIdSex:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_IdSex];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_IdSex, objvCurrEduClsStu_SimCond.idSex, strComparisonOpIdSex);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_EduClsStuStateId) == true)
{
const strComparisonOpEduClsStuStateId:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_EduClsStuStateId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_EduClsStuStateId, objvCurrEduClsStu_SimCond.eduClsStuStateId, strComparisonOpEduClsStuStateId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_SchoolTerm, objvCurrEduClsStu_SimCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_SchoolYear, objvCurrEduClsStu_SimCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_IdAdminCls) == true)
{
const strComparisonOpIdAdminCls:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_IdAdminCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_IdAdminCls, objvCurrEduClsStu_SimCond.idAdminCls, strComparisonOpIdAdminCls);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_IdGrade) == true)
{
const strComparisonOpIdGrade:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_IdGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_IdGrade, objvCurrEduClsStu_SimCond.idGrade, strComparisonOpIdGrade);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_UserTypeId) == true)
{
const strComparisonOpUserTypeId:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_UserTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_UserTypeId, objvCurrEduClsStu_SimCond.userTypeId, strComparisonOpUserTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsStu_SimCond.dicFldComparisonOp, clsvCurrEduClsStu_SimEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objvCurrEduClsStu_SimCond.dicFldComparisonOp[clsvCurrEduClsStu_SimEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsStu_SimEN.con_IdSchool, objvCurrEduClsStu_SimCond.idSchool, strComparisonOpIdSchool);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvCurrEduClsStu_SimENS:源对象
 * @param objvCurrEduClsStu_SimENT:目标对象
*/
export  function vCurrEduClsStu_Sim_CopyObjTo(objvCurrEduClsStu_SimENS: clsvCurrEduClsStu_SimEN , objvCurrEduClsStu_SimENT: clsvCurrEduClsStu_SimEN ): void 
{
objvCurrEduClsStu_SimENT.idEduClsStu = objvCurrEduClsStu_SimENS.idEduClsStu; //教学班学生流水号
objvCurrEduClsStu_SimENT.idCurrEduCls = objvCurrEduClsStu_SimENS.idCurrEduCls; //教学班流水号
objvCurrEduClsStu_SimENT.idStu = objvCurrEduClsStu_SimENS.idStu; //学生流水号
objvCurrEduClsStu_SimENT.stuId = objvCurrEduClsStu_SimENS.stuId; //学号
objvCurrEduClsStu_SimENT.stuName = objvCurrEduClsStu_SimENS.stuName; //姓名
objvCurrEduClsStu_SimENT.idSex = objvCurrEduClsStu_SimENS.idSex; //性别流水号
objvCurrEduClsStu_SimENT.eduClsStuStateId = objvCurrEduClsStu_SimENS.eduClsStuStateId; //教学班学生状态编号
objvCurrEduClsStu_SimENT.schoolTerm = objvCurrEduClsStu_SimENS.schoolTerm; //学期
objvCurrEduClsStu_SimENT.schoolYear = objvCurrEduClsStu_SimENS.schoolYear; //学年
objvCurrEduClsStu_SimENT.idAdminCls = objvCurrEduClsStu_SimENS.idAdminCls; //行政班流水号
objvCurrEduClsStu_SimENT.idGrade = objvCurrEduClsStu_SimENS.idGrade; //年级流水号
objvCurrEduClsStu_SimENT.userTypeId = objvCurrEduClsStu_SimENS.userTypeId; //用户类型Id
objvCurrEduClsStu_SimENT.idSchool = objvCurrEduClsStu_SimENS.idSchool; //学校流水号
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCurrEduClsStu_SimENS:源对象
 * @param objvCurrEduClsStu_SimENT:目标对象
*/
export  function vCurrEduClsStu_Sim_GetObjFromJsonObj(objvCurrEduClsStu_SimENS: clsvCurrEduClsStu_SimEN): clsvCurrEduClsStu_SimEN 
{
 const objvCurrEduClsStu_SimENT: clsvCurrEduClsStu_SimEN = new clsvCurrEduClsStu_SimEN();
ObjectAssign(objvCurrEduClsStu_SimENT, objvCurrEduClsStu_SimENS);
 return objvCurrEduClsStu_SimENT;
}
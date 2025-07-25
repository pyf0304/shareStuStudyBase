
 /**
 * 类名:clscc_CourseStudentRelationWApi
 * 表名:cc_CourseStudentRelation(01120150)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:27
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
 * 用户答题结果(cc_CourseStudentRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月10日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { ObjectAssign,GetExceptionStr,myShowErrorMsg } from "@/ts/PubFun/clsCommFunc4Web";
import { clscc_CourseStudentRelationENEx } from "@/ts/L0Entity/CourseManage/clscc_CourseStudentRelationENEx";
import { clscc_CourseStudentRelationEN } from "@/ts/L0Entity/CourseManage/clscc_CourseStudentRelationEN";
import { Format,GetStrLen,tzDataType,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { vcc_Course_Sim_func } from "@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi";
import { clsvcc_Course_SimEN } from "@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN";
import { vStudentInfo_Sim_func } from "@/ts/L3ForWApi/UserManage/clsvStudentInfo_SimWApi";
import { clsvStudentInfo_SimEN } from "@/ts/L0Entity/UserManage/clsvStudentInfo_SimEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const cc_CourseStudentRelation_Controller = "cc_CourseStudentRelationApi";
 export const cc_CourseStudentRelation_ConstructorName = "cc_CourseStudentRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngCourseStudentRelationId:关键字
 * @returns 对象
 **/
export  async function cc_CourseStudentRelation_GetObjByCourseStudentRelationIdAsync(lngCourseStudentRelationId: number): Promise<clscc_CourseStudentRelationEN|null>  
{
const strThisFuncName = "GetObjByCourseStudentRelationIdAsync";

if (lngCourseStudentRelationId == 0)
{
  const strMsg = Format("参数:[lngCourseStudentRelationId]不能为空!(In clscc_CourseStudentRelationWApi.GetObjByCourseStudentRelationIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByCourseStudentRelationId";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngCourseStudentRelationId,
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
const objcc_CourseStudentRelation = cc_CourseStudentRelation_GetObjFromJsonObj(returnObj);
return objcc_CourseStudentRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByCourseStudentRelationIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByCourseStudentRelationIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_CourseStudentRelation_SortFunDefa(a:clscc_CourseStudentRelationEN , b:clscc_CourseStudentRelationEN): number 
{
return a.courseStudentRelationId-b.courseStudentRelationId;
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
export  function cc_CourseStudentRelation_SortFunDefa2Fld(a:clscc_CourseStudentRelationEN , b:clscc_CourseStudentRelationEN): number 
{
if (a.courseId == b.courseId) return a.idStudentInfo.localeCompare(b.idStudentInfo);
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
export  function cc_CourseStudentRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_CourseStudentRelationEN.con_CourseStudentRelationId:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
return a.courseStudentRelationId-b.courseStudentRelationId;
}
case clscc_CourseStudentRelationEN.con_CourseId:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clscc_CourseStudentRelationEN.con_IdStudentInfo:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
case clscc_CourseStudentRelationEN.con_LastVisitedDate:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
if (a.lastVisitedDate == null) return -1;
if (b.lastVisitedDate == null) return 1;
return a.lastVisitedDate.localeCompare(b.lastVisitedDate);
}
case clscc_CourseStudentRelationEN.con_UpdDate:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clscc_CourseStudentRelationEN.con_UpdUserId:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clscc_CourseStudentRelationEN.con_Memo:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseStudentRelation]中不存在!(in ${ cc_CourseStudentRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_CourseStudentRelationEN.con_CourseStudentRelationId:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
return b.courseStudentRelationId-a.courseStudentRelationId;
}
case clscc_CourseStudentRelationEN.con_CourseId:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clscc_CourseStudentRelationEN.con_IdStudentInfo:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
return b.idStudentInfo.localeCompare(a.idStudentInfo);
}
case clscc_CourseStudentRelationEN.con_LastVisitedDate:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
if (b.lastVisitedDate == null) return -1;
if (a.lastVisitedDate == null) return 1;
return b.lastVisitedDate.localeCompare(a.lastVisitedDate);
}
case clscc_CourseStudentRelationEN.con_UpdDate:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clscc_CourseStudentRelationEN.con_UpdUserId:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clscc_CourseStudentRelationEN.con_Memo:
return (a: clscc_CourseStudentRelationEN, b: clscc_CourseStudentRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseStudentRelation]中不存在!(in ${ cc_CourseStudentRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByCourseStudentRelationIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function cc_CourseStudentRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_CourseStudentRelationEN.con_CourseStudentRelationId:
return (obj: clscc_CourseStudentRelationEN) => {
return obj.courseStudentRelationId === value;
}
case clscc_CourseStudentRelationEN.con_CourseId:
return (obj: clscc_CourseStudentRelationEN) => {
return obj.courseId === value;
}
case clscc_CourseStudentRelationEN.con_IdStudentInfo:
return (obj: clscc_CourseStudentRelationEN) => {
return obj.idStudentInfo === value;
}
case clscc_CourseStudentRelationEN.con_LastVisitedDate:
return (obj: clscc_CourseStudentRelationEN) => {
return obj.lastVisitedDate === value;
}
case clscc_CourseStudentRelationEN.con_UpdDate:
return (obj: clscc_CourseStudentRelationEN) => {
return obj.updDate === value;
}
case clscc_CourseStudentRelationEN.con_UpdUserId:
return (obj: clscc_CourseStudentRelationEN) => {
return obj.updUserId === value;
}
case clscc_CourseStudentRelationEN.con_Memo:
return (obj: clscc_CourseStudentRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseStudentRelation]中不存在!(in ${ cc_CourseStudentRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[cc_CourseStudentRelation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseStudentRelation_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseStudentRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseStudentRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseStudentRelation_GetFirstObjAsync(strWhereCond: string): Promise<clscc_CourseStudentRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const objcc_CourseStudentRelation = cc_CourseStudentRelation_GetObjFromJsonObj(returnObj);
return objcc_CourseStudentRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function cc_CourseStudentRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_CourseStudentRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseStudentRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrCourseStudentRelationId:关键字列表
 * @returns 对象列表
 **/
export  async function cc_CourseStudentRelation_GetObjLstByCourseStudentRelationIdLstAsync(arrCourseStudentRelationId: Array<string>): Promise<Array<clscc_CourseStudentRelationEN>>  
{
const strThisFuncName = "GetObjLstByCourseStudentRelationIdLstAsync";
const strAction = "GetObjLstByCourseStudentRelationIdLst";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseStudentRelationId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseStudentRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByCourseStudentRelationIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function cc_CourseStudentRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_CourseStudentRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseStudentRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseStudentRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_CourseStudentRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseStudentRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function cc_CourseStudentRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clscc_CourseStudentRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clscc_CourseStudentRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseStudentRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
 * @param lngCourseStudentRelationId:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_CourseStudentRelation_DelRecordAsync(lngCourseStudentRelationId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngCourseStudentRelationId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
 * @param arrCourseStudentRelationId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function cc_CourseStudentRelation_Delcc_CourseStudentRelationsAsync(arrCourseStudentRelationId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_CourseStudentRelationsAsync";
const strAction = "Delcc_CourseStudentRelations";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrCourseStudentRelationId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objcc_CourseStudentRelationENS:源对象
 * @returns 目标对象=>clscc_CourseStudentRelationEN:objcc_CourseStudentRelationENT
 **/
export  function cc_CourseStudentRelation_CopyToEx(objcc_CourseStudentRelationENS:clscc_CourseStudentRelationEN ): clscc_CourseStudentRelationENEx
{
const strThisFuncName  = cc_CourseStudentRelation_CopyToEx.name;
 const objcc_CourseStudentRelationENT = new clscc_CourseStudentRelationENEx();
try
{
ObjectAssign(objcc_CourseStudentRelationENT, objcc_CourseStudentRelationENS);
 return objcc_CourseStudentRelationENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objcc_CourseStudentRelationENT;
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
export  function cc_CourseStudentRelation_FuncMapByFldName(strFldName: string, objcc_CourseStudentRelationEx: clscc_CourseStudentRelationENEx)
{
const strThisFuncName = cc_CourseStudentRelation_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clscc_CourseStudentRelationEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clscc_CourseStudentRelationENEx.con_CourseName:
return cc_CourseStudentRelation_FuncMapCourseName(objcc_CourseStudentRelationEx);
case clscc_CourseStudentRelationENEx.con_StuName:
return cc_CourseStudentRelation_FuncMapStuName(objcc_CourseStudentRelationEx);
case clscc_CourseStudentRelationENEx.con_StuId:
return cc_CourseStudentRelation_FuncMapStuId(objcc_CourseStudentRelationEx);
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
export  function cc_CourseStudentRelation_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_CourseStudentRelationENEx.con_CourseName:
return (a: clscc_CourseStudentRelationENEx, b: clscc_CourseStudentRelationENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return -1;
if (b.courseName === null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clscc_CourseStudentRelationENEx.con_StuName:
return (a: clscc_CourseStudentRelationENEx, b: clscc_CourseStudentRelationENEx) => {
    if (a.stuName === null && b.stuName === null) return 0;
if (a.stuName === null) return -1;
if (b.stuName === null) return 1;
return a.stuName.localeCompare(b.stuName);
}
case clscc_CourseStudentRelationENEx.con_StuId:
return (a: clscc_CourseStudentRelationENEx, b: clscc_CourseStudentRelationENEx) => {
    if (a.stuId === null && b.stuId === null) return 0;
if (a.stuId === null) return -1;
if (b.stuId === null) return 1;
return a.stuId.localeCompare(b.stuId);
}
case clscc_CourseStudentRelationENEx.con_IdCurrEduCls:
return (a: clscc_CourseStudentRelationENEx, b: clscc_CourseStudentRelationENEx) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
        default:
return cc_CourseStudentRelation_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clscc_CourseStudentRelationENEx.con_CourseName:
return (a: clscc_CourseStudentRelationENEx, b: clscc_CourseStudentRelationENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return 1;
if (b.courseName === null) return -1;
return b.courseName.localeCompare(a.courseName);
}
case clscc_CourseStudentRelationENEx.con_StuName:
return (a: clscc_CourseStudentRelationENEx, b: clscc_CourseStudentRelationENEx) => {
    if (a.stuName === null && b.stuName === null) return 0;
if (a.stuName === null) return 1;
if (b.stuName === null) return -1;
return b.stuName.localeCompare(a.stuName);
}
case clscc_CourseStudentRelationENEx.con_StuId:
return (a: clscc_CourseStudentRelationENEx, b: clscc_CourseStudentRelationENEx) => {
    if (a.stuId === null && b.stuId === null) return 0;
if (a.stuId === null) return 1;
if (b.stuId === null) return -1;
return b.stuId.localeCompare(a.stuId);
}
case clscc_CourseStudentRelationENEx.con_IdCurrEduCls:
return (a: clscc_CourseStudentRelationENEx, b: clscc_CourseStudentRelationENEx) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
        default:
return cc_CourseStudentRelation_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseStudentRelationS:源对象
 **/
export  async function cc_CourseStudentRelation_FuncMapCourseName(objcc_CourseStudentRelation:clscc_CourseStudentRelationENEx )
{
const strThisFuncName = cc_CourseStudentRelation_FuncMapCourseName.name;
try
{
if (IsNullOrEmpty(objcc_CourseStudentRelation.courseName) == true){
 const vccCourseSimCourseId = objcc_CourseStudentRelation.courseId;
 const vccCourseSimCourseName = await vcc_Course_Sim_func(clsvcc_Course_SimEN.con_CourseId, clsvcc_Course_SimEN.con_CourseName, vccCourseSimCourseId );
 objcc_CourseStudentRelation.courseName = vccCourseSimCourseName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001412)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseStudentRelationS:源对象
 **/
export  async function cc_CourseStudentRelation_FuncMapStuName(objcc_CourseStudentRelation:clscc_CourseStudentRelationENEx )
{
const strThisFuncName = cc_CourseStudentRelation_FuncMapStuName.name;
try
{
if (IsNullOrEmpty(objcc_CourseStudentRelation.stuName) == true){
 const vStudentInfoSimIdStudentInfo = objcc_CourseStudentRelation.idStudentInfo;
if (IsNullOrEmpty(objcc_CourseStudentRelation.idCurrEduCls) == true)
{
const strMsg = `函数映射[StuName]数据出错,idCurrEduCls不能为空!(in ${ cc_CourseStudentRelation_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const vStudentInfoSimStuName = await vStudentInfo_Sim_func(clsvStudentInfo_SimEN.con_IdStudentInfo, clsvStudentInfo_SimEN.con_StuName, vStudentInfoSimIdStudentInfo , objcc_CourseStudentRelation.idCurrEduCls);
 objcc_CourseStudentRelation.stuName = vStudentInfoSimStuName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001420)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objcc_CourseStudentRelationS:源对象
 **/
export  async function cc_CourseStudentRelation_FuncMapStuId(objcc_CourseStudentRelation:clscc_CourseStudentRelationENEx )
{
const strThisFuncName = cc_CourseStudentRelation_FuncMapStuId.name;
try
{
if (IsNullOrEmpty(objcc_CourseStudentRelation.stuId) == true){
 const vStudentInfoSimIdStudentInfo = objcc_CourseStudentRelation.idStudentInfo;
if (IsNullOrEmpty(objcc_CourseStudentRelation.idCurrEduCls) == true)
{
const strMsg = `函数映射[StuId]数据出错,idCurrEduCls不能为空!(in ${ cc_CourseStudentRelation_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const vStudentInfoSimStuId = await vStudentInfo_Sim_func(clsvStudentInfo_SimEN.con_IdStudentInfo, clsvStudentInfo_SimEN.con_StuId, vStudentInfoSimIdStudentInfo , objcc_CourseStudentRelation.idCurrEduCls);
 objcc_CourseStudentRelation.stuId = vStudentInfoSimStuId;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001421)函数映射表对象数据出错,{0}.(in {1}.{2})", e, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function cc_CourseStudentRelation_Delcc_CourseStudentRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_CourseStudentRelationsByCondAsync";
const strAction = "Delcc_CourseStudentRelationsByCond";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseStudentRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseStudentRelation_AddNewRecordAsync(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_CourseStudentRelationEN);
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseStudentRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseStudentRelation_AddNewObjSave(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_CourseStudentRelation_CheckPropertyNew(objcc_CourseStudentRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseStudentRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseStudentRelation_CheckUniCond4Add(objcc_CourseStudentRelationEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await cc_CourseStudentRelation_AddNewRecordAsync(objcc_CourseStudentRelationEN);
if (returnBool == true)
{
//cc_CourseStudentRelation_ReFreshCache();
}
else
{
const strInfo = `添加[用户答题结果(cc_CourseStudentRelation)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objcc_CourseStudentRelationEN.courseStudentRelationId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_CourseStudentRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_CourseStudentRelation_CheckUniCond4Add(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseStudentRelation_GetUniCondStr(objcc_CourseStudentRelationEN);
const bolIsExistCondition = await cc_CourseStudentRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseStudentRelation_CheckUniCond4Update(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseStudentRelation_GetUniCondStr4Update(objcc_CourseStudentRelationEN);
const bolIsExistCondition = await cc_CourseStudentRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseStudentRelation_UpdateObjSave(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_CourseStudentRelationEN.sfUpdFldSetStr = objcc_CourseStudentRelationEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_CourseStudentRelationEN.courseStudentRelationId == 0 || objcc_CourseStudentRelationEN.courseStudentRelationId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_CourseStudentRelation_CheckProperty4Update(objcc_CourseStudentRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseStudentRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseStudentRelation_CheckUniCond4Update(objcc_CourseStudentRelationEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_CourseStudentRelation_UpdateRecordAsync(objcc_CourseStudentRelationEN);
if (returnBool == true)
{
//cc_CourseStudentRelation_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_CourseStudentRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_CourseStudentRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_CourseStudentRelation_AddNewRecordWithReturnKeyAsync(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseStudentRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseStudentRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseStudentRelation_UpdateRecordAsync(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_CourseStudentRelationEN.sfUpdFldSetStr === undefined || objcc_CourseStudentRelationEN.sfUpdFldSetStr === null || objcc_CourseStudentRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseStudentRelationEN.courseStudentRelationId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseStudentRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseStudentRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseStudentRelation_EditRecordExAsync(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_CourseStudentRelationEN.sfUpdFldSetStr === undefined || objcc_CourseStudentRelationEN.sfUpdFldSetStr === null || objcc_CourseStudentRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseStudentRelationEN.courseStudentRelationId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseStudentRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseStudentRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseStudentRelation_UpdateWithConditionAsync(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_CourseStudentRelationEN.sfUpdFldSetStr === undefined || objcc_CourseStudentRelationEN.sfUpdFldSetStr === null || objcc_CourseStudentRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseStudentRelationEN.courseStudentRelationId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);
objcc_CourseStudentRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseStudentRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function cc_CourseStudentRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param lngCourseStudentRelationId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function cc_CourseStudentRelation_IsExistAsync(lngCourseStudentRelationId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngCourseStudentRelationId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseStudentRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function cc_CourseStudentRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_CourseStudentRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseStudentRelation_ConstructorName, strThisFuncName);
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
export  function cc_CourseStudentRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_CourseStudentRelation_CheckPropertyNew(pobjcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.courseId) === true 
 || pobjcc_CourseStudentRelationEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 用户答题结果)!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.idStudentInfo) === true 
 || pobjcc_CourseStudentRelationEN.idStudentInfo.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学生流水号]不能为空(In 用户答题结果)!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.courseId) == false && GetStrLen(pobjcc_CourseStudentRelationEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.courseId}(clscc_CourseStudentRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.idStudentInfo) == false && GetStrLen(pobjcc_CourseStudentRelationEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.idStudentInfo}(clscc_CourseStudentRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.lastVisitedDate) == false && GetStrLen(pobjcc_CourseStudentRelationEN.lastVisitedDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[最后访问时间(lastVisitedDate)]的长度不能超过14(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.lastVisitedDate}(clscc_CourseStudentRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.updDate) == false && GetStrLen(pobjcc_CourseStudentRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.updDate}(clscc_CourseStudentRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.updUserId) == false && GetStrLen(pobjcc_CourseStudentRelationEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.updUserId}(clscc_CourseStudentRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.memo) == false && GetStrLen(pobjcc_CourseStudentRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.memo}(clscc_CourseStudentRelationBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_CourseStudentRelationEN.courseStudentRelationId && undefined !== pobjcc_CourseStudentRelationEN.courseStudentRelationId && tzDataType.isNumber(pobjcc_CourseStudentRelationEN.courseStudentRelationId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程学生关系表流水号(courseStudentRelationId)]的值:[${pobjcc_CourseStudentRelationEN.courseStudentRelationId}], 非法,应该为数值型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.courseId) == false && undefined !== pobjcc_CourseStudentRelationEN.courseId && tzDataType.isString(pobjcc_CourseStudentRelationEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjcc_CourseStudentRelationEN.courseId}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.idStudentInfo) == false && undefined !== pobjcc_CourseStudentRelationEN.idStudentInfo && tzDataType.isString(pobjcc_CourseStudentRelationEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[${pobjcc_CourseStudentRelationEN.idStudentInfo}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.lastVisitedDate) == false && undefined !== pobjcc_CourseStudentRelationEN.lastVisitedDate && tzDataType.isString(pobjcc_CourseStudentRelationEN.lastVisitedDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[最后访问时间(lastVisitedDate)]的值:[${pobjcc_CourseStudentRelationEN.lastVisitedDate}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.updDate) == false && undefined !== pobjcc_CourseStudentRelationEN.updDate && tzDataType.isString(pobjcc_CourseStudentRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_CourseStudentRelationEN.updDate}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.updUserId) == false && undefined !== pobjcc_CourseStudentRelationEN.updUserId && tzDataType.isString(pobjcc_CourseStudentRelationEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjcc_CourseStudentRelationEN.updUserId}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.memo) == false && undefined !== pobjcc_CourseStudentRelationEN.memo && tzDataType.isString(pobjcc_CourseStudentRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_CourseStudentRelationEN.memo}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.courseId) == false && pobjcc_CourseStudentRelationEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseStudentRelationEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 用户答题结果)!(clscc_CourseStudentRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.idStudentInfo) == false && pobjcc_CourseStudentRelationEN.idStudentInfo != '[nuull]' && GetStrLen(pobjcc_CourseStudentRelationEN.idStudentInfo) !=  8)
{
 throw ("(errid:Watl000415)字段[学生流水号]作为外键字段,长度应该为8(In 用户答题结果)!(clscc_CourseStudentRelationBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_CourseStudentRelation_CheckProperty4Update(pobjcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.courseId) == false && GetStrLen(pobjcc_CourseStudentRelationEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.courseId}(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.idStudentInfo) == false && GetStrLen(pobjcc_CourseStudentRelationEN.idStudentInfo) > 8)
{
 throw new Error(`(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.idStudentInfo}(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.lastVisitedDate) == false && GetStrLen(pobjcc_CourseStudentRelationEN.lastVisitedDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[最后访问时间(lastVisitedDate)]的长度不能超过14(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.lastVisitedDate}(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.updDate) == false && GetStrLen(pobjcc_CourseStudentRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.updDate}(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.updUserId) == false && GetStrLen(pobjcc_CourseStudentRelationEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.updUserId}(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.memo) == false && GetStrLen(pobjcc_CourseStudentRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户答题结果(cc_CourseStudentRelation))!值:${pobjcc_CourseStudentRelationEN.memo}(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_CourseStudentRelationEN.courseStudentRelationId && undefined !== pobjcc_CourseStudentRelationEN.courseStudentRelationId && tzDataType.isNumber(pobjcc_CourseStudentRelationEN.courseStudentRelationId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程学生关系表流水号(courseStudentRelationId)]的值:[${pobjcc_CourseStudentRelationEN.courseStudentRelationId}], 非法,应该为数值型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.courseId) == false && undefined !== pobjcc_CourseStudentRelationEN.courseId && tzDataType.isString(pobjcc_CourseStudentRelationEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjcc_CourseStudentRelationEN.courseId}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.idStudentInfo) == false && undefined !== pobjcc_CourseStudentRelationEN.idStudentInfo && tzDataType.isString(pobjcc_CourseStudentRelationEN.idStudentInfo) === false)
{
 throw new Error(`(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[${pobjcc_CourseStudentRelationEN.idStudentInfo}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.lastVisitedDate) == false && undefined !== pobjcc_CourseStudentRelationEN.lastVisitedDate && tzDataType.isString(pobjcc_CourseStudentRelationEN.lastVisitedDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[最后访问时间(lastVisitedDate)]的值:[${pobjcc_CourseStudentRelationEN.lastVisitedDate}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.updDate) == false && undefined !== pobjcc_CourseStudentRelationEN.updDate && tzDataType.isString(pobjcc_CourseStudentRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_CourseStudentRelationEN.updDate}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.updUserId) == false && undefined !== pobjcc_CourseStudentRelationEN.updUserId && tzDataType.isString(pobjcc_CourseStudentRelationEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjcc_CourseStudentRelationEN.updUserId}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.memo) == false && undefined !== pobjcc_CourseStudentRelationEN.memo && tzDataType.isString(pobjcc_CourseStudentRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_CourseStudentRelationEN.memo}], 非法,应该为字符型(In 用户答题结果(cc_CourseStudentRelation))!(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjcc_CourseStudentRelationEN.courseStudentRelationId 
 || pobjcc_CourseStudentRelationEN.courseStudentRelationId != null && pobjcc_CourseStudentRelationEN.courseStudentRelationId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[课程学生关系表流水号]不能为空(In 用户答题结果)!(clscc_CourseStudentRelationBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.courseId) == false && pobjcc_CourseStudentRelationEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseStudentRelationEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 用户答题结果)!(clscc_CourseStudentRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjcc_CourseStudentRelationEN.idStudentInfo) == false && pobjcc_CourseStudentRelationEN.idStudentInfo != '[nuull]' && GetStrLen(pobjcc_CourseStudentRelationEN.idStudentInfo) !=  8)
{
 throw ("(errid:Watl000418)字段[学生流水号]作为外键字段,长度应该为8(In 用户答题结果)!(clscc_CourseStudentRelationBL:CheckPropertyNew)");
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
export  function cc_CourseStudentRelation_GetJSONStrByObj (pobjcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN): string
{
pobjcc_CourseStudentRelationEN.sfUpdFldSetStr = pobjcc_CourseStudentRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_CourseStudentRelationEN);
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
export  function cc_CourseStudentRelation_GetObjLstByJSONStr (strJSON: string): Array<clscc_CourseStudentRelationEN>
{
let arrcc_CourseStudentRelationObjLst = new Array<clscc_CourseStudentRelationEN>();
if (strJSON === "")
{
return arrcc_CourseStudentRelationObjLst;
}
try
{
arrcc_CourseStudentRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_CourseStudentRelationObjLst;
}
return arrcc_CourseStudentRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_CourseStudentRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_CourseStudentRelation_GetObjLstByJSONObjLst (arrcc_CourseStudentRelationObjLstS: Array<clscc_CourseStudentRelationEN>): Array<clscc_CourseStudentRelationEN>
{
const arrcc_CourseStudentRelationObjLst = new Array<clscc_CourseStudentRelationEN>();
for (const objInFor of arrcc_CourseStudentRelationObjLstS) {
const obj1 = cc_CourseStudentRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_CourseStudentRelationObjLst.push(obj1);
}
return arrcc_CourseStudentRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_CourseStudentRelation_GetObjByJSONStr (strJSON: string): clscc_CourseStudentRelationEN
{
let pobjcc_CourseStudentRelationEN = new clscc_CourseStudentRelationEN();
if (strJSON === "")
{
return pobjcc_CourseStudentRelationEN;
}
try
{
pobjcc_CourseStudentRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_CourseStudentRelationEN;
}
return pobjcc_CourseStudentRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_CourseStudentRelation_GetCombineCondition(objcc_CourseStudentRelationCond: clscc_CourseStudentRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_CourseStudentRelationCond.dicFldComparisonOp, clscc_CourseStudentRelationEN.con_CourseStudentRelationId) == true)
{
const strComparisonOpCourseStudentRelationId:string = objcc_CourseStudentRelationCond.dicFldComparisonOp[clscc_CourseStudentRelationEN.con_CourseStudentRelationId];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseStudentRelationEN.con_CourseStudentRelationId, objcc_CourseStudentRelationCond.courseStudentRelationId, strComparisonOpCourseStudentRelationId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseStudentRelationCond.dicFldComparisonOp, clscc_CourseStudentRelationEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_CourseStudentRelationCond.dicFldComparisonOp[clscc_CourseStudentRelationEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseStudentRelationEN.con_CourseId, objcc_CourseStudentRelationCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseStudentRelationCond.dicFldComparisonOp, clscc_CourseStudentRelationEN.con_IdStudentInfo) == true)
{
const strComparisonOpIdStudentInfo:string = objcc_CourseStudentRelationCond.dicFldComparisonOp[clscc_CourseStudentRelationEN.con_IdStudentInfo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseStudentRelationEN.con_IdStudentInfo, objcc_CourseStudentRelationCond.idStudentInfo, strComparisonOpIdStudentInfo);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseStudentRelationCond.dicFldComparisonOp, clscc_CourseStudentRelationEN.con_LastVisitedDate) == true)
{
const strComparisonOpLastVisitedDate:string = objcc_CourseStudentRelationCond.dicFldComparisonOp[clscc_CourseStudentRelationEN.con_LastVisitedDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseStudentRelationEN.con_LastVisitedDate, objcc_CourseStudentRelationCond.lastVisitedDate, strComparisonOpLastVisitedDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseStudentRelationCond.dicFldComparisonOp, clscc_CourseStudentRelationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_CourseStudentRelationCond.dicFldComparisonOp[clscc_CourseStudentRelationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseStudentRelationEN.con_UpdDate, objcc_CourseStudentRelationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseStudentRelationCond.dicFldComparisonOp, clscc_CourseStudentRelationEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objcc_CourseStudentRelationCond.dicFldComparisonOp[clscc_CourseStudentRelationEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseStudentRelationEN.con_UpdUserId, objcc_CourseStudentRelationCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseStudentRelationCond.dicFldComparisonOp, clscc_CourseStudentRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_CourseStudentRelationCond.dicFldComparisonOp[clscc_CourseStudentRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseStudentRelationEN.con_Memo, objcc_CourseStudentRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseStudentRelation(用户答题结果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseStudentRelation_GetUniCondStr(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_CourseStudentRelationEN.courseId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objcc_CourseStudentRelationEN.idStudentInfo);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseStudentRelation(用户答题结果),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @param strIdStudentInfo: 学生流水号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseStudentRelation_GetUniCondStr4Update(objcc_CourseStudentRelationEN: clscc_CourseStudentRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and CourseStudentRelationId <> '{0}'", objcc_CourseStudentRelationEN.courseStudentRelationId);
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_CourseStudentRelationEN.courseId);
 strWhereCond +=  Format(" and IdStudentInfo = '{0}'", objcc_CourseStudentRelationEN.idStudentInfo);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_CourseStudentRelationENS:源对象
 * @param objcc_CourseStudentRelationENT:目标对象
*/
export  function cc_CourseStudentRelation_CopyObjTo(objcc_CourseStudentRelationENS: clscc_CourseStudentRelationEN , objcc_CourseStudentRelationENT: clscc_CourseStudentRelationEN ): void 
{
objcc_CourseStudentRelationENT.courseStudentRelationId = objcc_CourseStudentRelationENS.courseStudentRelationId; //课程学生关系表流水号
objcc_CourseStudentRelationENT.courseId = objcc_CourseStudentRelationENS.courseId; //课程Id
objcc_CourseStudentRelationENT.idStudentInfo = objcc_CourseStudentRelationENS.idStudentInfo; //学生流水号
objcc_CourseStudentRelationENT.lastVisitedDate = objcc_CourseStudentRelationENS.lastVisitedDate; //最后访问时间
objcc_CourseStudentRelationENT.updDate = objcc_CourseStudentRelationENS.updDate; //修改日期
objcc_CourseStudentRelationENT.updUserId = objcc_CourseStudentRelationENS.updUserId; //修改用户Id
objcc_CourseStudentRelationENT.memo = objcc_CourseStudentRelationENS.memo; //备注
objcc_CourseStudentRelationENT.sfUpdFldSetStr = objcc_CourseStudentRelationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_CourseStudentRelationENS:源对象
 * @param objcc_CourseStudentRelationENT:目标对象
*/
export  function cc_CourseStudentRelation_GetObjFromJsonObj(objcc_CourseStudentRelationENS: clscc_CourseStudentRelationEN): clscc_CourseStudentRelationEN 
{
 const objcc_CourseStudentRelationENT: clscc_CourseStudentRelationEN = new clscc_CourseStudentRelationEN();
ObjectAssign(objcc_CourseStudentRelationENT, objcc_CourseStudentRelationENS);
 return objcc_CourseStudentRelationENT;
}
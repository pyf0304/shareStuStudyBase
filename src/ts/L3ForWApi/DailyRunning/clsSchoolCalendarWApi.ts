
 /**
 * 类名:clsSchoolCalendarWApi
 * 表名:SchoolCalendar(01120987)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:22
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
 * 校历(SchoolCalendar)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsSchoolCalendarEN } from "@/ts/L0Entity/DailyRunning/clsSchoolCalendarEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const schoolCalendar_Controller = "SchoolCalendarApi";
 export const schoolCalendar_ConstructorName = "schoolCalendar";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngId_SchoolCelendar:关键字
 * @returns 对象
 **/
export  async function SchoolCalendar_GetObjById_SchoolCelendarAsync(lngId_SchoolCelendar: number): Promise<clsSchoolCalendarEN|null>  
{
const strThisFuncName = "GetObjById_SchoolCelendarAsync";

if (lngId_SchoolCelendar == 0)
{
  const strMsg = Format("参数:[lngId_SchoolCelendar]不能为空!(In clsSchoolCalendarWApi.GetObjById_SchoolCelendarAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjById_SchoolCelendar";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngId_SchoolCelendar,
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
const objSchoolCalendar = SchoolCalendar_GetObjFromJsonObj(returnObj);
return objSchoolCalendar;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjById_SchoolCelendarlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjById_SchoolCelendarCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function SchoolCalendar_SortFunDefa(a:clsSchoolCalendarEN , b:clsSchoolCalendarEN): number 
{
return a.id_SchoolCelendar-b.id_SchoolCelendar;
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
export  function SchoolCalendar_SortFunDefa2Fld(a:clsSchoolCalendarEN , b:clsSchoolCalendarEN): number 
{
if (a.currDate == b.currDate) return a.schoolYear.localeCompare(b.schoolYear);
else return a.currDate.localeCompare(b.currDate);
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
export  function SchoolCalendar_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSchoolCalendarEN.con_Id_SchoolCelendar:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return a.id_SchoolCelendar-b.id_SchoolCelendar;
}
case clsSchoolCalendarEN.con_CurrDate:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return a.currDate.localeCompare(b.currDate);
}
case clsSchoolCalendarEN.con_SchoolYear:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsSchoolCalendarEN.con_SchoolTerm:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsSchoolCalendarEN.con_WeekIndex:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return a.weekIndex-b.weekIndex;
}
case clsSchoolCalendarEN.con_WeekDay:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return a.weekDay-b.weekDay;
}
case clsSchoolCalendarEN.con_WeekDayDesc:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return a.weekDayDesc.localeCompare(b.weekDayDesc);
}
case clsSchoolCalendarEN.con_Memo:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolCalendar]中不存在!(in ${ schoolCalendar_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSchoolCalendarEN.con_Id_SchoolCelendar:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return b.id_SchoolCelendar-a.id_SchoolCelendar;
}
case clsSchoolCalendarEN.con_CurrDate:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return b.currDate.localeCompare(a.currDate);
}
case clsSchoolCalendarEN.con_SchoolYear:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsSchoolCalendarEN.con_SchoolTerm:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsSchoolCalendarEN.con_WeekIndex:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return b.weekIndex-a.weekIndex;
}
case clsSchoolCalendarEN.con_WeekDay:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return b.weekDay-a.weekDay;
}
case clsSchoolCalendarEN.con_WeekDayDesc:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
return b.weekDayDesc.localeCompare(a.weekDayDesc);
}
case clsSchoolCalendarEN.con_Memo:
return (a: clsSchoolCalendarEN, b: clsSchoolCalendarEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolCalendar]中不存在!(in ${ schoolCalendar_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameById_SchoolCelendarCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function SchoolCalendar_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSchoolCalendarEN.con_Id_SchoolCelendar:
return (obj: clsSchoolCalendarEN) => {
return obj.id_SchoolCelendar === value;
}
case clsSchoolCalendarEN.con_CurrDate:
return (obj: clsSchoolCalendarEN) => {
return obj.currDate === value;
}
case clsSchoolCalendarEN.con_SchoolYear:
return (obj: clsSchoolCalendarEN) => {
return obj.schoolYear === value;
}
case clsSchoolCalendarEN.con_SchoolTerm:
return (obj: clsSchoolCalendarEN) => {
return obj.schoolTerm === value;
}
case clsSchoolCalendarEN.con_WeekIndex:
return (obj: clsSchoolCalendarEN) => {
return obj.weekIndex === value;
}
case clsSchoolCalendarEN.con_WeekDay:
return (obj: clsSchoolCalendarEN) => {
return obj.weekDay === value;
}
case clsSchoolCalendarEN.con_WeekDayDesc:
return (obj: clsSchoolCalendarEN) => {
return obj.weekDayDesc === value;
}
case clsSchoolCalendarEN.con_Memo:
return (obj: clsSchoolCalendarEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolCalendar]中不存在!(in ${ schoolCalendar_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[SchoolCalendar__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SchoolCalendar_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_GetFirstObjAsync(strWhereCond: string): Promise<clsSchoolCalendarEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const objSchoolCalendar = SchoolCalendar_GetObjFromJsonObj(returnObj);
return objSchoolCalendar;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSchoolCalendarEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
 * @param arrId_SchoolCelendar:关键字列表
 * @returns 对象列表
 **/
export  async function SchoolCalendar_GetObjLstById_SchoolCelendarLstAsync(arrId_SchoolCelendar: Array<string>): Promise<Array<clsSchoolCalendarEN>>  
{
const strThisFuncName = "GetObjLstById_SchoolCelendarLstAsync";
const strAction = "GetObjLstById_SchoolCelendarLst";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrId_SchoolCelendar, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstById_SchoolCelendarLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function SchoolCalendar_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSchoolCalendarEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSchoolCalendarEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolCalendar_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolCalendar_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)

 /**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param lngId_SchoolCelendar:关键字
 * @returns 获取删除的结果
 **/
export  async function SchoolCalendar_DelRecordAsync(lngId_SchoolCelendar: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngId_SchoolCelendar);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
 * @param arrId_SchoolCelendar:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SchoolCalendar_DelSchoolCalendarsAsync(arrId_SchoolCelendar: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSchoolCalendarsAsync";
const strAction = "DelSchoolCalendars";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrId_SchoolCelendar, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function SchoolCalendar_DelSchoolCalendarsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSchoolCalendarsByCondAsync";
const strAction = "DelSchoolCalendarsByCond";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
 * @param objSchoolCalendarEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SchoolCalendar_AddNewRecordAsync(objSchoolCalendarEN: clsSchoolCalendarEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objSchoolCalendarEN);
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_AddNewObjSave(objSchoolCalendarEN: clsSchoolCalendarEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
SchoolCalendar_CheckPropertyNew(objSchoolCalendarEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ schoolCalendar_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
returnBool = await SchoolCalendar_AddNewRecordAsync(objSchoolCalendarEN);
if (returnBool == true)
{
//SchoolCalendar_ReFreshCache();
}
else
{
const strInfo = `添加[校历(SchoolCalendar)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objSchoolCalendarEN.id_SchoolCelendar.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ schoolCalendar_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function SchoolCalendar_UpdateObjSave(objSchoolCalendarEN: clsSchoolCalendarEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objSchoolCalendarEN.sfUpdFldSetStr = objSchoolCalendarEN.updFldString;//设置哪些字段被修改(脏字段)
if (objSchoolCalendarEN.id_SchoolCelendar == 0 || objSchoolCalendarEN.id_SchoolCelendar == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
SchoolCalendar_CheckProperty4Update(objSchoolCalendarEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ schoolCalendar_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await SchoolCalendar_UpdateRecordAsync(objSchoolCalendarEN);
if (returnBool == true)
{
//SchoolCalendar_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ schoolCalendar_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSchoolCalendarEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SchoolCalendar_AddNewRecordWithReturnKeyAsync(objSchoolCalendarEN: clsSchoolCalendarEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
 * @param objSchoolCalendarEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SchoolCalendar_UpdateRecordAsync(objSchoolCalendarEN: clsSchoolCalendarEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSchoolCalendarEN.sfUpdFldSetStr === undefined || objSchoolCalendarEN.sfUpdFldSetStr === null || objSchoolCalendarEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolCalendarEN.id_SchoolCelendar);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
 * @param objSchoolCalendarEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SchoolCalendar_EditRecordExAsync(objSchoolCalendarEN: clsSchoolCalendarEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objSchoolCalendarEN.sfUpdFldSetStr === undefined || objSchoolCalendarEN.sfUpdFldSetStr === null || objSchoolCalendarEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolCalendarEN.id_SchoolCelendar);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
 * @param objSchoolCalendarEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SchoolCalendar_UpdateWithConditionAsync(objSchoolCalendarEN: clsSchoolCalendarEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSchoolCalendarEN.sfUpdFldSetStr === undefined || objSchoolCalendarEN.sfUpdFldSetStr === null || objSchoolCalendarEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolCalendarEN.id_SchoolCelendar);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);
objSchoolCalendarEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolCalendarEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
 * @param lngId_SchoolCelendar:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SchoolCalendar_IsExistAsync(lngId_SchoolCelendar: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngId_SchoolCelendar
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  async function SchoolCalendar_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(schoolCalendar_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolCalendar_ConstructorName, strThisFuncName);
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
export  function SchoolCalendar_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SchoolCalendar_CheckPropertyNew(pobjSchoolCalendarEN: clsSchoolCalendarEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjSchoolCalendarEN.currDate) === true )
{
 throw new Error(`(errid:Watl000411)字段[当前日期]不能为空(In 校历)!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolYear) === true 
 || pobjSchoolCalendarEN.schoolYear.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学年]不能为空(In 校历)!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolTerm) === true 
 || pobjSchoolCalendarEN.schoolTerm.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[学期]不能为空(In 校历)!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (null === pobjSchoolCalendarEN.weekIndex 
 || pobjSchoolCalendarEN.weekIndex != null && pobjSchoolCalendarEN.weekIndex.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[周序号]不能为空(In 校历)!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (null === pobjSchoolCalendarEN.weekDay 
 || pobjSchoolCalendarEN.weekDay != null && pobjSchoolCalendarEN.weekDay.toString()  ===  "")
{
 throw new Error(`(errid:Watl000411)字段[星期]不能为空(In 校历)!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.weekDayDesc) === true )
{
 throw new Error(`(errid:Watl000411)字段[星期描述]不能为空(In 校历)!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSchoolCalendarEN.currDate) == false && GetStrLen(pobjSchoolCalendarEN.currDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[当前日期(currDate)]的长度不能超过8(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.currDate}(clsSchoolCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolYear) == false && GetStrLen(pobjSchoolCalendarEN.schoolYear) > 10)
{
 throw new Error(`(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.schoolYear}(clsSchoolCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolTerm) == false && GetStrLen(pobjSchoolCalendarEN.schoolTerm) > 1)
{
 throw new Error(`(errid:Watl000413)字段[学期(schoolTerm)]的长度不能超过1(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.schoolTerm}(clsSchoolCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.weekDayDesc) == false && GetStrLen(pobjSchoolCalendarEN.weekDayDesc) > 10)
{
 throw new Error(`(errid:Watl000413)字段[星期描述(weekDayDesc)]的长度不能超过10(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.weekDayDesc}(clsSchoolCalendarBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.memo) == false && GetStrLen(pobjSchoolCalendarEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.memo}(clsSchoolCalendarBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjSchoolCalendarEN.id_SchoolCelendar && undefined !== pobjSchoolCalendarEN.id_SchoolCelendar && tzDataType.isNumber(pobjSchoolCalendarEN.id_SchoolCelendar) === false)
{
 throw new Error(`(errid:Watl000414)字段[校历流水号(id_SchoolCelendar)]的值:[${pobjSchoolCalendarEN.id_SchoolCelendar}], 非法,应该为数值型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.currDate) == false && undefined !== pobjSchoolCalendarEN.currDate && tzDataType.isString(pobjSchoolCalendarEN.currDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[当前日期(currDate)]的值:[${pobjSchoolCalendarEN.currDate}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolYear) == false && undefined !== pobjSchoolCalendarEN.schoolYear && tzDataType.isString(pobjSchoolCalendarEN.schoolYear) === false)
{
 throw new Error(`(errid:Watl000414)字段[学年(schoolYear)]的值:[${pobjSchoolCalendarEN.schoolYear}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolTerm) == false && undefined !== pobjSchoolCalendarEN.schoolTerm && tzDataType.isString(pobjSchoolCalendarEN.schoolTerm) === false)
{
 throw new Error(`(errid:Watl000414)字段[学期(schoolTerm)]的值:[${pobjSchoolCalendarEN.schoolTerm}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (null != pobjSchoolCalendarEN.weekIndex && undefined !== pobjSchoolCalendarEN.weekIndex && tzDataType.isNumber(pobjSchoolCalendarEN.weekIndex) === false)
{
 throw new Error(`(errid:Watl000414)字段[周序号(weekIndex)]的值:[${pobjSchoolCalendarEN.weekIndex}], 非法,应该为数值型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (null != pobjSchoolCalendarEN.weekDay && undefined !== pobjSchoolCalendarEN.weekDay && tzDataType.isNumber(pobjSchoolCalendarEN.weekDay) === false)
{
 throw new Error(`(errid:Watl000414)字段[星期(weekDay)]的值:[${pobjSchoolCalendarEN.weekDay}], 非法,应该为数值型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.weekDayDesc) == false && undefined !== pobjSchoolCalendarEN.weekDayDesc && tzDataType.isString(pobjSchoolCalendarEN.weekDayDesc) === false)
{
 throw new Error(`(errid:Watl000414)字段[星期描述(weekDayDesc)]的值:[${pobjSchoolCalendarEN.weekDayDesc}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.memo) == false && undefined !== pobjSchoolCalendarEN.memo && tzDataType.isString(pobjSchoolCalendarEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjSchoolCalendarEN.memo}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SchoolCalendar_CheckProperty4Update(pobjSchoolCalendarEN: clsSchoolCalendarEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSchoolCalendarEN.currDate) == false && GetStrLen(pobjSchoolCalendarEN.currDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[当前日期(currDate)]的长度不能超过8(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.currDate}(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolYear) == false && GetStrLen(pobjSchoolCalendarEN.schoolYear) > 10)
{
 throw new Error(`(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.schoolYear}(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolTerm) == false && GetStrLen(pobjSchoolCalendarEN.schoolTerm) > 1)
{
 throw new Error(`(errid:Watl000416)字段[学期(schoolTerm)]的长度不能超过1(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.schoolTerm}(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.weekDayDesc) == false && GetStrLen(pobjSchoolCalendarEN.weekDayDesc) > 10)
{
 throw new Error(`(errid:Watl000416)字段[星期描述(weekDayDesc)]的长度不能超过10(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.weekDayDesc}(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.memo) == false && GetStrLen(pobjSchoolCalendarEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 校历(SchoolCalendar))!值:${pobjSchoolCalendarEN.memo}(clsSchoolCalendarBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjSchoolCalendarEN.id_SchoolCelendar && undefined !== pobjSchoolCalendarEN.id_SchoolCelendar && tzDataType.isNumber(pobjSchoolCalendarEN.id_SchoolCelendar) === false)
{
 throw new Error(`(errid:Watl000417)字段[校历流水号(id_SchoolCelendar)]的值:[${pobjSchoolCalendarEN.id_SchoolCelendar}], 非法,应该为数值型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.currDate) == false && undefined !== pobjSchoolCalendarEN.currDate && tzDataType.isString(pobjSchoolCalendarEN.currDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[当前日期(currDate)]的值:[${pobjSchoolCalendarEN.currDate}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolYear) == false && undefined !== pobjSchoolCalendarEN.schoolYear && tzDataType.isString(pobjSchoolCalendarEN.schoolYear) === false)
{
 throw new Error(`(errid:Watl000417)字段[学年(schoolYear)]的值:[${pobjSchoolCalendarEN.schoolYear}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.schoolTerm) == false && undefined !== pobjSchoolCalendarEN.schoolTerm && tzDataType.isString(pobjSchoolCalendarEN.schoolTerm) === false)
{
 throw new Error(`(errid:Watl000417)字段[学期(schoolTerm)]的值:[${pobjSchoolCalendarEN.schoolTerm}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (null != pobjSchoolCalendarEN.weekIndex && undefined !== pobjSchoolCalendarEN.weekIndex && tzDataType.isNumber(pobjSchoolCalendarEN.weekIndex) === false)
{
 throw new Error(`(errid:Watl000417)字段[周序号(weekIndex)]的值:[${pobjSchoolCalendarEN.weekIndex}], 非法,应该为数值型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (null != pobjSchoolCalendarEN.weekDay && undefined !== pobjSchoolCalendarEN.weekDay && tzDataType.isNumber(pobjSchoolCalendarEN.weekDay) === false)
{
 throw new Error(`(errid:Watl000417)字段[星期(weekDay)]的值:[${pobjSchoolCalendarEN.weekDay}], 非法,应该为数值型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.weekDayDesc) == false && undefined !== pobjSchoolCalendarEN.weekDayDesc && tzDataType.isString(pobjSchoolCalendarEN.weekDayDesc) === false)
{
 throw new Error(`(errid:Watl000417)字段[星期描述(weekDayDesc)]的值:[${pobjSchoolCalendarEN.weekDayDesc}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolCalendarEN.memo) == false && undefined !== pobjSchoolCalendarEN.memo && tzDataType.isString(pobjSchoolCalendarEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjSchoolCalendarEN.memo}], 非法,应该为字符型(In 校历(SchoolCalendar))!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjSchoolCalendarEN.id_SchoolCelendar 
 || pobjSchoolCalendarEN.id_SchoolCelendar != null && pobjSchoolCalendarEN.id_SchoolCelendar.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[校历流水号]不能为空(In 校历)!(clsSchoolCalendarBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SchoolCalendar_GetJSONStrByObj (pobjSchoolCalendarEN: clsSchoolCalendarEN): string
{
pobjSchoolCalendarEN.sfUpdFldSetStr = pobjSchoolCalendarEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSchoolCalendarEN);
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
export  function SchoolCalendar_GetObjLstByJSONStr (strJSON: string): Array<clsSchoolCalendarEN>
{
let arrSchoolCalendarObjLst = new Array<clsSchoolCalendarEN>();
if (strJSON === "")
{
return arrSchoolCalendarObjLst;
}
try
{
arrSchoolCalendarObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSchoolCalendarObjLst;
}
return arrSchoolCalendarObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSchoolCalendarObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SchoolCalendar_GetObjLstByJSONObjLst (arrSchoolCalendarObjLstS: Array<clsSchoolCalendarEN>): Array<clsSchoolCalendarEN>
{
const arrSchoolCalendarObjLst = new Array<clsSchoolCalendarEN>();
for (const objInFor of arrSchoolCalendarObjLstS) {
const obj1 = SchoolCalendar_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSchoolCalendarObjLst.push(obj1);
}
return arrSchoolCalendarObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SchoolCalendar_GetObjByJSONStr (strJSON: string): clsSchoolCalendarEN
{
let pobjSchoolCalendarEN = new clsSchoolCalendarEN();
if (strJSON === "")
{
return pobjSchoolCalendarEN;
}
try
{
pobjSchoolCalendarEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSchoolCalendarEN;
}
return pobjSchoolCalendarEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SchoolCalendar_GetCombineCondition(objSchoolCalendarCond: clsSchoolCalendarEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSchoolCalendarCond.dicFldComparisonOp, clsSchoolCalendarEN.con_Id_SchoolCelendar) == true)
{
const strComparisonOpId_SchoolCelendar:string = objSchoolCalendarCond.dicFldComparisonOp[clsSchoolCalendarEN.con_Id_SchoolCelendar];
strWhereCond += Format(" And {0} {2} {1}", clsSchoolCalendarEN.con_Id_SchoolCelendar, objSchoolCalendarCond.id_SchoolCelendar, strComparisonOpId_SchoolCelendar);
}
if (Object.prototype.hasOwnProperty.call(objSchoolCalendarCond.dicFldComparisonOp, clsSchoolCalendarEN.con_CurrDate) == true)
{
const strComparisonOpCurrDate:string = objSchoolCalendarCond.dicFldComparisonOp[clsSchoolCalendarEN.con_CurrDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolCalendarEN.con_CurrDate, objSchoolCalendarCond.currDate, strComparisonOpCurrDate);
}
if (Object.prototype.hasOwnProperty.call(objSchoolCalendarCond.dicFldComparisonOp, clsSchoolCalendarEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objSchoolCalendarCond.dicFldComparisonOp[clsSchoolCalendarEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolCalendarEN.con_SchoolYear, objSchoolCalendarCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objSchoolCalendarCond.dicFldComparisonOp, clsSchoolCalendarEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objSchoolCalendarCond.dicFldComparisonOp[clsSchoolCalendarEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolCalendarEN.con_SchoolTerm, objSchoolCalendarCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objSchoolCalendarCond.dicFldComparisonOp, clsSchoolCalendarEN.con_WeekIndex) == true)
{
const strComparisonOpWeekIndex:string = objSchoolCalendarCond.dicFldComparisonOp[clsSchoolCalendarEN.con_WeekIndex];
strWhereCond += Format(" And {0} {2} {1}", clsSchoolCalendarEN.con_WeekIndex, objSchoolCalendarCond.weekIndex, strComparisonOpWeekIndex);
}
if (Object.prototype.hasOwnProperty.call(objSchoolCalendarCond.dicFldComparisonOp, clsSchoolCalendarEN.con_WeekDay) == true)
{
const strComparisonOpWeekDay:string = objSchoolCalendarCond.dicFldComparisonOp[clsSchoolCalendarEN.con_WeekDay];
strWhereCond += Format(" And {0} {2} {1}", clsSchoolCalendarEN.con_WeekDay, objSchoolCalendarCond.weekDay, strComparisonOpWeekDay);
}
if (Object.prototype.hasOwnProperty.call(objSchoolCalendarCond.dicFldComparisonOp, clsSchoolCalendarEN.con_WeekDayDesc) == true)
{
const strComparisonOpWeekDayDesc:string = objSchoolCalendarCond.dicFldComparisonOp[clsSchoolCalendarEN.con_WeekDayDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolCalendarEN.con_WeekDayDesc, objSchoolCalendarCond.weekDayDesc, strComparisonOpWeekDayDesc);
}
if (Object.prototype.hasOwnProperty.call(objSchoolCalendarCond.dicFldComparisonOp, clsSchoolCalendarEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objSchoolCalendarCond.dicFldComparisonOp[clsSchoolCalendarEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolCalendarEN.con_Memo, objSchoolCalendarCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSchoolCalendarENS:源对象
 * @param objSchoolCalendarENT:目标对象
*/
export  function SchoolCalendar_CopyObjTo(objSchoolCalendarENS: clsSchoolCalendarEN , objSchoolCalendarENT: clsSchoolCalendarEN ): void 
{
objSchoolCalendarENT.id_SchoolCelendar = objSchoolCalendarENS.id_SchoolCelendar; //校历流水号
objSchoolCalendarENT.currDate = objSchoolCalendarENS.currDate; //当前日期
objSchoolCalendarENT.schoolYear = objSchoolCalendarENS.schoolYear; //学年
objSchoolCalendarENT.schoolTerm = objSchoolCalendarENS.schoolTerm; //学期
objSchoolCalendarENT.weekIndex = objSchoolCalendarENS.weekIndex; //周序号
objSchoolCalendarENT.weekDay = objSchoolCalendarENS.weekDay; //星期
objSchoolCalendarENT.weekDayDesc = objSchoolCalendarENS.weekDayDesc; //星期描述
objSchoolCalendarENT.memo = objSchoolCalendarENS.memo; //备注
objSchoolCalendarENT.sfUpdFldSetStr = objSchoolCalendarENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSchoolCalendarENS:源对象
 * @param objSchoolCalendarENT:目标对象
*/
export  function SchoolCalendar_GetObjFromJsonObj(objSchoolCalendarENS: clsSchoolCalendarEN): clsSchoolCalendarEN 
{
 const objSchoolCalendarENT: clsSchoolCalendarEN = new clsSchoolCalendarEN();
ObjectAssign(objSchoolCalendarENT, objSchoolCalendarENS);
 return objSchoolCalendarENT;
}
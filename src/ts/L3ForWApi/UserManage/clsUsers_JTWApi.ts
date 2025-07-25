
 /**
 * 类名:clsUsers_JTWApi
 * 表名:Users_JT(01120227)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 20:03:20
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
 * 用户表_交通(Users_JT)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月06日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { clsUsers_JTEN } from "@/ts/L0Entity/UserManage/clsUsers_JTEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const users_JT_Controller = "Users_JTApi";
 export const users_JT_ConstructorName = "users_JT";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserId:关键字
 * @returns 对象
 **/
export  async function Users_JT_GetObjByUserIdAsync(strUserId: string): Promise<clsUsers_JTEN|null>  
{
const strThisFuncName = "GetObjByUserIdAsync";

if (IsNullOrEmpty(strUserId) == true)
{
  const strMsg = Format("参数:[strUserId]不能为空!(In clsUsers_JTWApi.GetObjByUserIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByUserId";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId,
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
const objUsers_JT = Users_JT_GetObjFromJsonObj(returnObj);
return objUsers_JT;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByUserIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByUserIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Users_JT_SortFunDefa(a:clsUsers_JTEN , b:clsUsers_JTEN): number 
{
return a.userId.localeCompare(b.userId);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Users_JT_SortFunDefa2Fld(a:clsUsers_JTEN , b:clsUsers_JTEN): number 
{
if (a.siteName == b.siteName) return a.jobCategoryId.localeCompare(b.jobCategoryId);
else return a.siteName.localeCompare(b.siteName);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function Users_JT_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsUsers_JTEN.con_UserId:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
return a.userId.localeCompare(b.userId);
}
case clsUsers_JTEN.con_SiteName:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
return a.siteName.localeCompare(b.siteName);
}
case clsUsers_JTEN.con_JobCategoryId:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
return a.jobCategoryId.localeCompare(b.jobCategoryId);
}
case clsUsers_JTEN.con_ManagedDepartmentId:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
return a.managedDepartmentId.localeCompare(b.managedDepartmentId);
}
case clsUsers_JTEN.con_IDNumber:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
if (a.iDNumber == null) return -1;
if (b.iDNumber == null) return 1;
return a.iDNumber.localeCompare(b.iDNumber);
}
case clsUsers_JTEN.con_UpdDate:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsUsers_JTEN.con_UpdUser:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsUsers_JTEN.con_Memo:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Users_JT]中不存在!(in ${ users_JT_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsUsers_JTEN.con_UserId:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
return b.userId.localeCompare(a.userId);
}
case clsUsers_JTEN.con_SiteName:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
return b.siteName.localeCompare(a.siteName);
}
case clsUsers_JTEN.con_JobCategoryId:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
return b.jobCategoryId.localeCompare(a.jobCategoryId);
}
case clsUsers_JTEN.con_ManagedDepartmentId:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
return b.managedDepartmentId.localeCompare(a.managedDepartmentId);
}
case clsUsers_JTEN.con_IDNumber:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
if (b.iDNumber == null) return -1;
if (a.iDNumber == null) return 1;
return b.iDNumber.localeCompare(a.iDNumber);
}
case clsUsers_JTEN.con_UpdDate:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsUsers_JTEN.con_UpdUser:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsUsers_JTEN.con_Memo:
return (a: clsUsers_JTEN, b: clsUsers_JTEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Users_JT]中不存在!(in ${ users_JT_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByUserIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function Users_JT_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsUsers_JTEN.con_UserId:
return (obj: clsUsers_JTEN) => {
return obj.userId === value;
}
case clsUsers_JTEN.con_SiteName:
return (obj: clsUsers_JTEN) => {
return obj.siteName === value;
}
case clsUsers_JTEN.con_JobCategoryId:
return (obj: clsUsers_JTEN) => {
return obj.jobCategoryId === value;
}
case clsUsers_JTEN.con_ManagedDepartmentId:
return (obj: clsUsers_JTEN) => {
return obj.managedDepartmentId === value;
}
case clsUsers_JTEN.con_IDNumber:
return (obj: clsUsers_JTEN) => {
return obj.iDNumber === value;
}
case clsUsers_JTEN.con_UpdDate:
return (obj: clsUsers_JTEN) => {
return obj.updDate === value;
}
case clsUsers_JTEN.con_UpdUser:
return (obj: clsUsers_JTEN) => {
return obj.updUser === value;
}
case clsUsers_JTEN.con_Memo:
return (obj: clsUsers_JTEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[Users_JT]中不存在!(in ${ users_JT_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[Users_JT__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Users_JT_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_GetFirstObjAsync(strWhereCond: string): Promise<clsUsers_JTEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const objUsers_JT = Users_JT_GetObjFromJsonObj(returnObj);
return objUsers_JT;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUsers_JTEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_JT_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_JT_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param arrUserId:关键字列表
 * @returns 对象列表
 **/
export  async function Users_JT_GetObjLstByUserIdLstAsync(arrUserId: Array<string>): Promise<Array<clsUsers_JTEN>>  
{
const strThisFuncName = "GetObjLstByUserIdLstAsync";
const strAction = "GetObjLstByUserIdLst";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_JT_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_JT_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByUserIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function Users_JT_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsUsers_JTEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_JT_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_JT_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsUsers_JTEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_JT_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_JT_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsUsers_JTEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsUsers_JTEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", users_JT_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = Users_JT_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param strUserId:关键字
 * @returns 获取删除的结果
 **/
export  async function Users_JT_DelRecordAsync(strUserId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(users_JT_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strUserId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param arrUserId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function Users_JT_DelUsers_JTsAsync(arrUserId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelUsers_JTsAsync";
const strAction = "DelUsers_JTs";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrUserId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function Users_JT_DelUsers_JTsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelUsers_JTsByCondAsync";
const strAction = "DelUsers_JTsByCond";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param objUsers_JTEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Users_JT_AddNewRecordAsync(objUsers_JTEN: clsUsers_JTEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objUsers_JTEN.userId === null || objUsers_JTEN.userId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objUsers_JTEN);
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsers_JTEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param objUsers_JTEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function Users_JT_AddNewRecordWithMaxIdAsync(objUsers_JTEN: clsUsers_JTEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsers_JTEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_AddNewObjSave(objUsers_JTEN: clsUsers_JTEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
Users_JT_CheckPropertyNew(objUsers_JTEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ users_JT_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await Users_JT_IsExistAsync(objUsers_JTEN.userId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objUsers_JTEN.userId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await Users_JT_AddNewRecordAsync(objUsers_JTEN);
if (returnBool == true)
{
//Users_JT_ReFreshCache();
}
else
{
const strInfo = `添加[用户表_交通(Users_JT)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objUsers_JTEN.userId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ users_JT_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function Users_JT_UpdateObjSave(objUsers_JTEN: clsUsers_JTEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objUsers_JTEN.sfUpdFldSetStr = objUsers_JTEN.updFldString;//设置哪些字段被修改(脏字段)
if (objUsers_JTEN.userId == "" || objUsers_JTEN.userId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
Users_JT_CheckProperty4Update(objUsers_JTEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ users_JT_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await Users_JT_UpdateRecordAsync(objUsers_JTEN);
if (returnBool == true)
{
//Users_JT_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ users_JT_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objUsers_JTEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function Users_JT_AddNewRecordWithReturnKeyAsync(objUsers_JTEN: clsUsers_JTEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsers_JTEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param objUsers_JTEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Users_JT_UpdateRecordAsync(objUsers_JTEN: clsUsers_JTEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objUsers_JTEN.sfUpdFldSetStr === undefined || objUsers_JTEN.sfUpdFldSetStr === null || objUsers_JTEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUsers_JTEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsers_JTEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param objUsers_JTEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function Users_JT_EditRecordExAsync(objUsers_JTEN: clsUsers_JTEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objUsers_JTEN.sfUpdFldSetStr === undefined || objUsers_JTEN.sfUpdFldSetStr === null || objUsers_JTEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUsers_JTEN.userId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsers_JTEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param objUsers_JTEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function Users_JT_UpdateWithConditionAsync(objUsers_JTEN: clsUsers_JTEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objUsers_JTEN.sfUpdFldSetStr === undefined || objUsers_JTEN.sfUpdFldSetStr === null || objUsers_JTEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUsers_JTEN.userId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);
objUsers_JTEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUsers_JTEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
 * @param strUserId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function Users_JT_IsExistAsync(strUserId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strUserId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  async function Users_JT_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(users_JT_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, users_JT_ConstructorName, strThisFuncName);
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
export  function Users_JT_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function Users_JT_CheckPropertyNew(pobjUsers_JTEN: clsUsers_JTEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjUsers_JTEN.siteName) === true )
{
 throw new Error(`(errid:Watl000411)字段[工地名称]不能为空(In 用户表_交通)!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.jobCategoryId) === true 
 || pobjUsers_JTEN.jobCategoryId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[岗位类别Id]不能为空(In 用户表_交通)!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.managedDepartmentId) === true 
 || pobjUsers_JTEN.managedDepartmentId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[管理的部门Id]不能为空(In 用户表_交通)!(clsUsers_JTBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUsers_JTEN.userId) == false && GetStrLen(pobjUsers_JTEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.userId}(clsUsers_JTBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.siteName) == false && GetStrLen(pobjUsers_JTEN.siteName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[工地名称(siteName)]的长度不能超过100(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.siteName}(clsUsers_JTBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.jobCategoryId) == false && GetStrLen(pobjUsers_JTEN.jobCategoryId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[岗位类别Id(jobCategoryId)]的长度不能超过2(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.jobCategoryId}(clsUsers_JTBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.managedDepartmentId) == false && GetStrLen(pobjUsers_JTEN.managedDepartmentId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[管理的部门Id(managedDepartmentId)]的长度不能超过4(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.managedDepartmentId}(clsUsers_JTBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.iDNumber) == false && GetStrLen(pobjUsers_JTEN.iDNumber) > 18)
{
 throw new Error(`(errid:Watl000413)字段[身份证号(iDNumber)]的长度不能超过18(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.iDNumber}(clsUsers_JTBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.updDate) == false && GetStrLen(pobjUsers_JTEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.updDate}(clsUsers_JTBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.updUser) == false && GetStrLen(pobjUsers_JTEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.updUser}(clsUsers_JTBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.memo) == false && GetStrLen(pobjUsers_JTEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.memo}(clsUsers_JTBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjUsers_JTEN.userId) == false && undefined !== pobjUsers_JTEN.userId && tzDataType.isString(pobjUsers_JTEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjUsers_JTEN.userId}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.siteName) == false && undefined !== pobjUsers_JTEN.siteName && tzDataType.isString(pobjUsers_JTEN.siteName) === false)
{
 throw new Error(`(errid:Watl000414)字段[工地名称(siteName)]的值:[${pobjUsers_JTEN.siteName}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.jobCategoryId) == false && undefined !== pobjUsers_JTEN.jobCategoryId && tzDataType.isString(pobjUsers_JTEN.jobCategoryId) === false)
{
 throw new Error(`(errid:Watl000414)字段[岗位类别Id(jobCategoryId)]的值:[${pobjUsers_JTEN.jobCategoryId}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.managedDepartmentId) == false && undefined !== pobjUsers_JTEN.managedDepartmentId && tzDataType.isString(pobjUsers_JTEN.managedDepartmentId) === false)
{
 throw new Error(`(errid:Watl000414)字段[管理的部门Id(managedDepartmentId)]的值:[${pobjUsers_JTEN.managedDepartmentId}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.iDNumber) == false && undefined !== pobjUsers_JTEN.iDNumber && tzDataType.isString(pobjUsers_JTEN.iDNumber) === false)
{
 throw new Error(`(errid:Watl000414)字段[身份证号(iDNumber)]的值:[${pobjUsers_JTEN.iDNumber}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.updDate) == false && undefined !== pobjUsers_JTEN.updDate && tzDataType.isString(pobjUsers_JTEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjUsers_JTEN.updDate}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.updUser) == false && undefined !== pobjUsers_JTEN.updUser && tzDataType.isString(pobjUsers_JTEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjUsers_JTEN.updUser}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.memo) == false && undefined !== pobjUsers_JTEN.memo && tzDataType.isString(pobjUsers_JTEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjUsers_JTEN.memo}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function Users_JT_CheckProperty4Update(pobjUsers_JTEN: clsUsers_JTEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUsers_JTEN.userId) == false && GetStrLen(pobjUsers_JTEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.userId}(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.siteName) == false && GetStrLen(pobjUsers_JTEN.siteName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[工地名称(siteName)]的长度不能超过100(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.siteName}(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.jobCategoryId) == false && GetStrLen(pobjUsers_JTEN.jobCategoryId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[岗位类别Id(jobCategoryId)]的长度不能超过2(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.jobCategoryId}(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.managedDepartmentId) == false && GetStrLen(pobjUsers_JTEN.managedDepartmentId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[管理的部门Id(managedDepartmentId)]的长度不能超过4(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.managedDepartmentId}(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.iDNumber) == false && GetStrLen(pobjUsers_JTEN.iDNumber) > 18)
{
 throw new Error(`(errid:Watl000416)字段[身份证号(iDNumber)]的长度不能超过18(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.iDNumber}(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.updDate) == false && GetStrLen(pobjUsers_JTEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.updDate}(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.updUser) == false && GetStrLen(pobjUsers_JTEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.updUser}(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.memo) == false && GetStrLen(pobjUsers_JTEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户表_交通(Users_JT))!值:${pobjUsers_JTEN.memo}(clsUsers_JTBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjUsers_JTEN.userId) == false && undefined !== pobjUsers_JTEN.userId && tzDataType.isString(pobjUsers_JTEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjUsers_JTEN.userId}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.siteName) == false && undefined !== pobjUsers_JTEN.siteName && tzDataType.isString(pobjUsers_JTEN.siteName) === false)
{
 throw new Error(`(errid:Watl000417)字段[工地名称(siteName)]的值:[${pobjUsers_JTEN.siteName}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.jobCategoryId) == false && undefined !== pobjUsers_JTEN.jobCategoryId && tzDataType.isString(pobjUsers_JTEN.jobCategoryId) === false)
{
 throw new Error(`(errid:Watl000417)字段[岗位类别Id(jobCategoryId)]的值:[${pobjUsers_JTEN.jobCategoryId}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.managedDepartmentId) == false && undefined !== pobjUsers_JTEN.managedDepartmentId && tzDataType.isString(pobjUsers_JTEN.managedDepartmentId) === false)
{
 throw new Error(`(errid:Watl000417)字段[管理的部门Id(managedDepartmentId)]的值:[${pobjUsers_JTEN.managedDepartmentId}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.iDNumber) == false && undefined !== pobjUsers_JTEN.iDNumber && tzDataType.isString(pobjUsers_JTEN.iDNumber) === false)
{
 throw new Error(`(errid:Watl000417)字段[身份证号(iDNumber)]的值:[${pobjUsers_JTEN.iDNumber}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.updDate) == false && undefined !== pobjUsers_JTEN.updDate && tzDataType.isString(pobjUsers_JTEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjUsers_JTEN.updDate}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.updUser) == false && undefined !== pobjUsers_JTEN.updUser && tzDataType.isString(pobjUsers_JTEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjUsers_JTEN.updUser}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUsers_JTEN.memo) == false && undefined !== pobjUsers_JTEN.memo && tzDataType.isString(pobjUsers_JTEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjUsers_JTEN.memo}], 非法,应该为字符型(In 用户表_交通(Users_JT))!(clsUsers_JTBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjUsers_JTEN.userId) === true )
{
 throw new Error(`(errid:Watl000064)字段[用户ID]不能为空(In 用户表_交通)!(clsUsers_JTBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Users_JT_GetJSONStrByObj (pobjUsers_JTEN: clsUsers_JTEN): string
{
pobjUsers_JTEN.sfUpdFldSetStr = pobjUsers_JTEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjUsers_JTEN);
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
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function Users_JT_GetObjLstByJSONStr (strJSON: string): Array<clsUsers_JTEN>
{
let arrUsers_JTObjLst = new Array<clsUsers_JTEN>();
if (strJSON === "")
{
return arrUsers_JTObjLst;
}
try
{
arrUsers_JTObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrUsers_JTObjLst;
}
return arrUsers_JTObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUsers_JTObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function Users_JT_GetObjLstByJSONObjLst (arrUsers_JTObjLstS: Array<clsUsers_JTEN>): Array<clsUsers_JTEN>
{
const arrUsers_JTObjLst = new Array<clsUsers_JTEN>();
for (const objInFor of arrUsers_JTObjLstS) {
const obj1 = Users_JT_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrUsers_JTObjLst.push(obj1);
}
return arrUsers_JTObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function Users_JT_GetObjByJSONStr (strJSON: string): clsUsers_JTEN
{
let pobjUsers_JTEN = new clsUsers_JTEN();
if (strJSON === "")
{
return pobjUsers_JTEN;
}
try
{
pobjUsers_JTEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjUsers_JTEN;
}
return pobjUsers_JTEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function Users_JT_GetCombineCondition(objUsers_JTCond: clsUsers_JTEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objUsers_JTCond.dicFldComparisonOp, clsUsers_JTEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objUsers_JTCond.dicFldComparisonOp[clsUsers_JTEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsers_JTEN.con_UserId, objUsers_JTCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objUsers_JTCond.dicFldComparisonOp, clsUsers_JTEN.con_SiteName) == true)
{
const strComparisonOpSiteName:string = objUsers_JTCond.dicFldComparisonOp[clsUsers_JTEN.con_SiteName];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsers_JTEN.con_SiteName, objUsers_JTCond.siteName, strComparisonOpSiteName);
}
if (Object.prototype.hasOwnProperty.call(objUsers_JTCond.dicFldComparisonOp, clsUsers_JTEN.con_JobCategoryId) == true)
{
const strComparisonOpJobCategoryId:string = objUsers_JTCond.dicFldComparisonOp[clsUsers_JTEN.con_JobCategoryId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsers_JTEN.con_JobCategoryId, objUsers_JTCond.jobCategoryId, strComparisonOpJobCategoryId);
}
if (Object.prototype.hasOwnProperty.call(objUsers_JTCond.dicFldComparisonOp, clsUsers_JTEN.con_ManagedDepartmentId) == true)
{
const strComparisonOpManagedDepartmentId:string = objUsers_JTCond.dicFldComparisonOp[clsUsers_JTEN.con_ManagedDepartmentId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsers_JTEN.con_ManagedDepartmentId, objUsers_JTCond.managedDepartmentId, strComparisonOpManagedDepartmentId);
}
if (Object.prototype.hasOwnProperty.call(objUsers_JTCond.dicFldComparisonOp, clsUsers_JTEN.con_IDNumber) == true)
{
const strComparisonOpIDNumber:string = objUsers_JTCond.dicFldComparisonOp[clsUsers_JTEN.con_IDNumber];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsers_JTEN.con_IDNumber, objUsers_JTCond.iDNumber, strComparisonOpIDNumber);
}
if (Object.prototype.hasOwnProperty.call(objUsers_JTCond.dicFldComparisonOp, clsUsers_JTEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objUsers_JTCond.dicFldComparisonOp[clsUsers_JTEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsers_JTEN.con_UpdDate, objUsers_JTCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objUsers_JTCond.dicFldComparisonOp, clsUsers_JTEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objUsers_JTCond.dicFldComparisonOp[clsUsers_JTEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsers_JTEN.con_UpdUser, objUsers_JTCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objUsers_JTCond.dicFldComparisonOp, clsUsers_JTEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objUsers_JTCond.dicFldComparisonOp[clsUsers_JTEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsUsers_JTEN.con_Memo, objUsers_JTCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objUsers_JTENS:源对象
 * @param objUsers_JTENT:目标对象
*/
export  function Users_JT_CopyObjTo(objUsers_JTENS: clsUsers_JTEN , objUsers_JTENT: clsUsers_JTEN ): void 
{
objUsers_JTENT.userId = objUsers_JTENS.userId; //用户ID
objUsers_JTENT.siteName = objUsers_JTENS.siteName; //工地名称
objUsers_JTENT.jobCategoryId = objUsers_JTENS.jobCategoryId; //岗位类别Id
objUsers_JTENT.managedDepartmentId = objUsers_JTENS.managedDepartmentId; //管理的部门Id
objUsers_JTENT.iDNumber = objUsers_JTENS.iDNumber; //身份证号
objUsers_JTENT.updDate = objUsers_JTENS.updDate; //修改日期
objUsers_JTENT.updUser = objUsers_JTENS.updUser; //修改人
objUsers_JTENT.memo = objUsers_JTENS.memo; //备注
objUsers_JTENT.sfUpdFldSetStr = objUsers_JTENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUsers_JTENS:源对象
 * @param objUsers_JTENT:目标对象
*/
export  function Users_JT_GetObjFromJsonObj(objUsers_JTENS: clsUsers_JTEN): clsUsers_JTEN 
{
 const objUsers_JTENT: clsUsers_JTEN = new clsUsers_JTEN();
ObjectAssign(objUsers_JTENT, objUsers_JTENS);
 return objUsers_JTENT;
}
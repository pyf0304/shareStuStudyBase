﻿
 /**
 * 类名:clsUserDefaValueWApi
 * 表名:UserDefaValue(01120203)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:25:53
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日志管理(LogManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户缺省值(UserDefaValue)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsUserDefaValueEN } from "@/ts/L0Entity/LogManage/clsUserDefaValueEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const userDefaValue_Controller = "UserDefaValueApi";
 export const userDefaValue_ConstructorName = "userDefaValue";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function UserDefaValue_GetObjBymIdAsync(lngmId: number): Promise<clsUserDefaValueEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsUserDefaValueWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId,
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
const objUserDefaValue = UserDefaValue_GetObjFromJsonObj(returnObj);
return objUserDefaValue;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjBymIdlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function UserDefaValue_SortFunDefa(a:clsUserDefaValueEN , b:clsUserDefaValueEN): number 
{
return a.mId-b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function UserDefaValue_SortFunDefa2Fld(a:clsUserDefaValueEN , b:clsUserDefaValueEN): number 
{
if (a.defaValNameId == b.defaValNameId) return a.userId.localeCompare(b.userId);
else return a.defaValNameId.localeCompare(b.defaValNameId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function UserDefaValue_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsUserDefaValueEN.con_mId:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
return a.mId-b.mId;
}
case clsUserDefaValueEN.con_DefaValNameId:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
return a.defaValNameId.localeCompare(b.defaValNameId);
}
case clsUserDefaValueEN.con_UserId:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
return a.userId.localeCompare(b.userId);
}
case clsUserDefaValueEN.con_UserDefaValue:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
return a.userDefaValue.localeCompare(b.userDefaValue);
}
case clsUserDefaValueEN.con_UpdDate:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsUserDefaValueEN.con_UpdUser:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsUserDefaValueEN.con_Memo:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserDefaValue]中不存在!(in ${ userDefaValue_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsUserDefaValueEN.con_mId:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
return b.mId-a.mId;
}
case clsUserDefaValueEN.con_DefaValNameId:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
return b.defaValNameId.localeCompare(a.defaValNameId);
}
case clsUserDefaValueEN.con_UserId:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
return b.userId.localeCompare(a.userId);
}
case clsUserDefaValueEN.con_UserDefaValue:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
return b.userDefaValue.localeCompare(a.userDefaValue);
}
case clsUserDefaValueEN.con_UpdDate:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsUserDefaValueEN.con_UpdUser:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsUserDefaValueEN.con_Memo:
return (a: clsUserDefaValueEN, b: clsUserDefaValueEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserDefaValue]中不存在!(in ${ userDefaValue_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function UserDefaValue_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsUserDefaValueEN.con_mId:
return (obj: clsUserDefaValueEN) => {
return obj.mId === value;
}
case clsUserDefaValueEN.con_DefaValNameId:
return (obj: clsUserDefaValueEN) => {
return obj.defaValNameId === value;
}
case clsUserDefaValueEN.con_UserId:
return (obj: clsUserDefaValueEN) => {
return obj.userId === value;
}
case clsUserDefaValueEN.con_UserDefaValue:
return (obj: clsUserDefaValueEN) => {
return obj.userDefaValue === value;
}
case clsUserDefaValueEN.con_UpdDate:
return (obj: clsUserDefaValueEN) => {
return obj.updDate === value;
}
case clsUserDefaValueEN.con_UpdUser:
return (obj: clsUserDefaValueEN) => {
return obj.updUser === value;
}
case clsUserDefaValueEN.con_Memo:
return (obj: clsUserDefaValueEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[UserDefaValue]中不存在!(in ${ userDefaValue_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[UserDefaValue__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function UserDefaValue_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_GetFirstObjAsync(strWhereCond: string): Promise<clsUserDefaValueEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const objUserDefaValue = UserDefaValue_GetObjFromJsonObj(returnObj);
return objUserDefaValue;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUserDefaValueEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userDefaValue_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserDefaValue_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export  async function UserDefaValue_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsUserDefaValueEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userDefaValue_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserDefaValue_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstBymIdLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function UserDefaValue_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsUserDefaValueEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userDefaValue_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserDefaValue_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsUserDefaValueEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userDefaValue_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserDefaValue_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsUserDefaValueEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsUserDefaValueEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", userDefaValue_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = UserDefaValue_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function UserDefaValue_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, lngmId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function UserDefaValue_DelUserDefaValuesAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelUserDefaValuesAsync";
const strAction = "DelUserDefaValues";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrmId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_DelUserDefaValuesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelUserDefaValuesByCondAsync";
const strAction = "DelUserDefaValuesByCond";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
 * @param objUserDefaValueEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function UserDefaValue_AddNewRecordAsync(objUserDefaValueEN: clsUserDefaValueEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objUserDefaValueEN);
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserDefaValueEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_AddNewObjSave(objUserDefaValueEN: clsUserDefaValueEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
UserDefaValue_CheckPropertyNew(objUserDefaValueEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ userDefaValue_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await UserDefaValue_CheckUniCond4Add(objUserDefaValueEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await UserDefaValue_AddNewRecordAsync(objUserDefaValueEN);
if (returnBool == true)
{
//UserDefaValue_ReFreshCache();
}
else
{
const strInfo = `添加[用户缺省值(UserDefaValue)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objUserDefaValueEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ userDefaValue_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function UserDefaValue_CheckUniCond4Add(objUserDefaValueEN: clsUserDefaValueEN): Promise<boolean>{
const strUniquenessCondition = UserDefaValue_GetUniCondStr(objUserDefaValueEN);
const bolIsExistCondition = await UserDefaValue_IsExistRecordAsync(strUniquenessCondition);
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
export  async function UserDefaValue_CheckUniCond4Update(objUserDefaValueEN: clsUserDefaValueEN): Promise<boolean>{
const strUniquenessCondition = UserDefaValue_GetUniCondStr4Update(objUserDefaValueEN);
const bolIsExistCondition = await UserDefaValue_IsExistRecordAsync(strUniquenessCondition);
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
export  async function UserDefaValue_UpdateObjSave(objUserDefaValueEN: clsUserDefaValueEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objUserDefaValueEN.sfUpdFldSetStr = objUserDefaValueEN.updFldString;//设置哪些字段被修改(脏字段)
if (objUserDefaValueEN.mId == 0 || objUserDefaValueEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
UserDefaValue_CheckProperty4Update(objUserDefaValueEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ userDefaValue_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await UserDefaValue_CheckUniCond4Update(objUserDefaValueEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await UserDefaValue_UpdateRecordAsync(objUserDefaValueEN);
if (returnBool == true)
{
//UserDefaValue_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ userDefaValue_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objUserDefaValueEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function UserDefaValue_AddNewRecordWithReturnKeyAsync(objUserDefaValueEN: clsUserDefaValueEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserDefaValueEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
 * @param objUserDefaValueEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function UserDefaValue_UpdateRecordAsync(objUserDefaValueEN: clsUserDefaValueEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objUserDefaValueEN.sfUpdFldSetStr === undefined || objUserDefaValueEN.sfUpdFldSetStr === null || objUserDefaValueEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserDefaValueEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserDefaValueEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
 * @param objUserDefaValueEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function UserDefaValue_EditRecordExAsync(objUserDefaValueEN: clsUserDefaValueEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objUserDefaValueEN.sfUpdFldSetStr === undefined || objUserDefaValueEN.sfUpdFldSetStr === null || objUserDefaValueEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserDefaValueEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserDefaValueEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
 * @param objUserDefaValueEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function UserDefaValue_UpdateWithConditionAsync(objUserDefaValueEN: clsUserDefaValueEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objUserDefaValueEN.sfUpdFldSetStr === undefined || objUserDefaValueEN.sfUpdFldSetStr === null || objUserDefaValueEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objUserDefaValueEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);
objUserDefaValueEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objUserDefaValueEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function UserDefaValue_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngmId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  async function UserDefaValue_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(userDefaValue_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, userDefaValue_ConstructorName, strThisFuncName);
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
export  function UserDefaValue_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function UserDefaValue_CheckPropertyNew(pobjUserDefaValueEN: clsUserDefaValueEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjUserDefaValueEN.defaValNameId) === true )
{
 throw new Error(`(errid:Watl000411)字段[缺省值名称Id]不能为空(In 用户缺省值)!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userId) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 用户缺省值)!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userDefaValue) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户缺省值]不能为空(In 用户缺省值)!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUserDefaValueEN.defaValNameId) == false && GetStrLen(pobjUserDefaValueEN.defaValNameId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[缺省值名称Id(defaValNameId)]的长度不能超过8(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.defaValNameId}(clsUserDefaValueBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userId) == false && GetStrLen(pobjUserDefaValueEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.userId}(clsUserDefaValueBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userDefaValue) == false && GetStrLen(pobjUserDefaValueEN.userDefaValue) > 100)
{
 throw new Error(`(errid:Watl000413)字段[用户缺省值(userDefaValue)]的长度不能超过100(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.userDefaValue}(clsUserDefaValueBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.updDate) == false && GetStrLen(pobjUserDefaValueEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.updDate}(clsUserDefaValueBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.updUser) == false && GetStrLen(pobjUserDefaValueEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.updUser}(clsUserDefaValueBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.memo) == false && GetStrLen(pobjUserDefaValueEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.memo}(clsUserDefaValueBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjUserDefaValueEN.mId && undefined !== pobjUserDefaValueEN.mId && tzDataType.isNumber(pobjUserDefaValueEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjUserDefaValueEN.mId}], 非法,应该为数值型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.defaValNameId) == false && undefined !== pobjUserDefaValueEN.defaValNameId && tzDataType.isString(pobjUserDefaValueEN.defaValNameId) === false)
{
 throw new Error(`(errid:Watl000414)字段[缺省值名称Id(defaValNameId)]的值:[${pobjUserDefaValueEN.defaValNameId}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userId) == false && undefined !== pobjUserDefaValueEN.userId && tzDataType.isString(pobjUserDefaValueEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjUserDefaValueEN.userId}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userDefaValue) == false && undefined !== pobjUserDefaValueEN.userDefaValue && tzDataType.isString(pobjUserDefaValueEN.userDefaValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户缺省值(userDefaValue)]的值:[${pobjUserDefaValueEN.userDefaValue}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.updDate) == false && undefined !== pobjUserDefaValueEN.updDate && tzDataType.isString(pobjUserDefaValueEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjUserDefaValueEN.updDate}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.updUser) == false && undefined !== pobjUserDefaValueEN.updUser && tzDataType.isString(pobjUserDefaValueEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjUserDefaValueEN.updUser}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.memo) == false && undefined !== pobjUserDefaValueEN.memo && tzDataType.isString(pobjUserDefaValueEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjUserDefaValueEN.memo}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function UserDefaValue_CheckProperty4Update(pobjUserDefaValueEN: clsUserDefaValueEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjUserDefaValueEN.defaValNameId) == false && GetStrLen(pobjUserDefaValueEN.defaValNameId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[缺省值名称Id(defaValNameId)]的长度不能超过8(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.defaValNameId}(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userId) == false && GetStrLen(pobjUserDefaValueEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.userId}(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userDefaValue) == false && GetStrLen(pobjUserDefaValueEN.userDefaValue) > 100)
{
 throw new Error(`(errid:Watl000416)字段[用户缺省值(userDefaValue)]的长度不能超过100(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.userDefaValue}(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.updDate) == false && GetStrLen(pobjUserDefaValueEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.updDate}(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.updUser) == false && GetStrLen(pobjUserDefaValueEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.updUser}(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.memo) == false && GetStrLen(pobjUserDefaValueEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户缺省值(UserDefaValue))!值:${pobjUserDefaValueEN.memo}(clsUserDefaValueBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjUserDefaValueEN.mId && undefined !== pobjUserDefaValueEN.mId && tzDataType.isNumber(pobjUserDefaValueEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjUserDefaValueEN.mId}], 非法,应该为数值型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.defaValNameId) == false && undefined !== pobjUserDefaValueEN.defaValNameId && tzDataType.isString(pobjUserDefaValueEN.defaValNameId) === false)
{
 throw new Error(`(errid:Watl000417)字段[缺省值名称Id(defaValNameId)]的值:[${pobjUserDefaValueEN.defaValNameId}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userId) == false && undefined !== pobjUserDefaValueEN.userId && tzDataType.isString(pobjUserDefaValueEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjUserDefaValueEN.userId}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.userDefaValue) == false && undefined !== pobjUserDefaValueEN.userDefaValue && tzDataType.isString(pobjUserDefaValueEN.userDefaValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户缺省值(userDefaValue)]的值:[${pobjUserDefaValueEN.userDefaValue}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.updDate) == false && undefined !== pobjUserDefaValueEN.updDate && tzDataType.isString(pobjUserDefaValueEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjUserDefaValueEN.updDate}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.updUser) == false && undefined !== pobjUserDefaValueEN.updUser && tzDataType.isString(pobjUserDefaValueEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjUserDefaValueEN.updUser}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjUserDefaValueEN.memo) == false && undefined !== pobjUserDefaValueEN.memo && tzDataType.isString(pobjUserDefaValueEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjUserDefaValueEN.memo}], 非法,应该为字符型(In 用户缺省值(UserDefaValue))!(clsUserDefaValueBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjUserDefaValueEN.mId 
 || pobjUserDefaValueEN.mId != null && pobjUserDefaValueEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 用户缺省值)!(clsUserDefaValueBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function UserDefaValue_GetJSONStrByObj (pobjUserDefaValueEN: clsUserDefaValueEN): string
{
pobjUserDefaValueEN.sfUpdFldSetStr = pobjUserDefaValueEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjUserDefaValueEN);
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
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function UserDefaValue_GetObjLstByJSONStr (strJSON: string): Array<clsUserDefaValueEN>
{
let arrUserDefaValueObjLst = new Array<clsUserDefaValueEN>();
if (strJSON === "")
{
return arrUserDefaValueObjLst;
}
try
{
arrUserDefaValueObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrUserDefaValueObjLst;
}
return arrUserDefaValueObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserDefaValueObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function UserDefaValue_GetObjLstByJSONObjLst (arrUserDefaValueObjLstS: Array<clsUserDefaValueEN>): Array<clsUserDefaValueEN>
{
const arrUserDefaValueObjLst = new Array<clsUserDefaValueEN>();
for (const objInFor of arrUserDefaValueObjLstS) {
const obj1 = UserDefaValue_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrUserDefaValueObjLst.push(obj1);
}
return arrUserDefaValueObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function UserDefaValue_GetObjByJSONStr (strJSON: string): clsUserDefaValueEN
{
let pobjUserDefaValueEN = new clsUserDefaValueEN();
if (strJSON === "")
{
return pobjUserDefaValueEN;
}
try
{
pobjUserDefaValueEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjUserDefaValueEN;
}
return pobjUserDefaValueEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function UserDefaValue_GetCombineCondition(objUserDefaValueCond: clsUserDefaValueEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objUserDefaValueCond.dicFldComparisonOp, clsUserDefaValueEN.con_mId) == true)
{
const strComparisonOpmId:string = objUserDefaValueCond.dicFldComparisonOp[clsUserDefaValueEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsUserDefaValueEN.con_mId, objUserDefaValueCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objUserDefaValueCond.dicFldComparisonOp, clsUserDefaValueEN.con_DefaValNameId) == true)
{
const strComparisonOpDefaValNameId:string = objUserDefaValueCond.dicFldComparisonOp[clsUserDefaValueEN.con_DefaValNameId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserDefaValueEN.con_DefaValNameId, objUserDefaValueCond.defaValNameId, strComparisonOpDefaValNameId);
}
if (Object.prototype.hasOwnProperty.call(objUserDefaValueCond.dicFldComparisonOp, clsUserDefaValueEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objUserDefaValueCond.dicFldComparisonOp[clsUserDefaValueEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserDefaValueEN.con_UserId, objUserDefaValueCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objUserDefaValueCond.dicFldComparisonOp, clsUserDefaValueEN.con_UserDefaValue) == true)
{
const strComparisonOpUserDefaValue:string = objUserDefaValueCond.dicFldComparisonOp[clsUserDefaValueEN.con_UserDefaValue];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserDefaValueEN.con_UserDefaValue, objUserDefaValueCond.userDefaValue, strComparisonOpUserDefaValue);
}
if (Object.prototype.hasOwnProperty.call(objUserDefaValueCond.dicFldComparisonOp, clsUserDefaValueEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objUserDefaValueCond.dicFldComparisonOp[clsUserDefaValueEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserDefaValueEN.con_UpdDate, objUserDefaValueCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objUserDefaValueCond.dicFldComparisonOp, clsUserDefaValueEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objUserDefaValueCond.dicFldComparisonOp[clsUserDefaValueEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserDefaValueEN.con_UpdUser, objUserDefaValueCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objUserDefaValueCond.dicFldComparisonOp, clsUserDefaValueEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objUserDefaValueCond.dicFldComparisonOp[clsUserDefaValueEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsUserDefaValueEN.con_Memo, objUserDefaValueCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--UserDefaValue(用户缺省值),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strDefaValNameId: 缺省值名称Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function UserDefaValue_GetUniCondStr(objUserDefaValueEN: clsUserDefaValueEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and DefaValNameId = '{0}'", objUserDefaValueEN.defaValNameId);
 strWhereCond +=  Format(" and UserId = '{0}'", objUserDefaValueEN.userId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--UserDefaValue(用户缺省值),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strDefaValNameId: 缺省值名称Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function UserDefaValue_GetUniCondStr4Update(objUserDefaValueEN: clsUserDefaValueEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objUserDefaValueEN.mId);
 strWhereCond +=  Format(" and DefaValNameId = '{0}'", objUserDefaValueEN.defaValNameId);
 strWhereCond +=  Format(" and UserId = '{0}'", objUserDefaValueEN.userId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objUserDefaValueENS:源对象
 * @param objUserDefaValueENT:目标对象
*/
export  function UserDefaValue_CopyObjTo(objUserDefaValueENS: clsUserDefaValueEN , objUserDefaValueENT: clsUserDefaValueEN ): void 
{
objUserDefaValueENT.mId = objUserDefaValueENS.mId; //mId
objUserDefaValueENT.defaValNameId = objUserDefaValueENS.defaValNameId; //缺省值名称Id
objUserDefaValueENT.userId = objUserDefaValueENS.userId; //用户ID
objUserDefaValueENT.userDefaValue = objUserDefaValueENS.userDefaValue; //用户缺省值
objUserDefaValueENT.updDate = objUserDefaValueENS.updDate; //修改日期
objUserDefaValueENT.updUser = objUserDefaValueENS.updUser; //修改人
objUserDefaValueENT.memo = objUserDefaValueENS.memo; //备注
objUserDefaValueENT.sfUpdFldSetStr = objUserDefaValueENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserDefaValueENS:源对象
 * @param objUserDefaValueENT:目标对象
*/
export  function UserDefaValue_GetObjFromJsonObj(objUserDefaValueENS: clsUserDefaValueEN): clsUserDefaValueEN 
{
 const objUserDefaValueENT: clsUserDefaValueEN = new clsUserDefaValueEN();
ObjectAssign(objUserDefaValueENT, objUserDefaValueENS);
 return objUserDefaValueENT;
}
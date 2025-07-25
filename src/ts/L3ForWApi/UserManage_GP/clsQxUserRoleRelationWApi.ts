﻿
 /**
 * 类名:clsQxUserRoleRelationWApi
 * 表名:QxUserRoleRelation(00140013)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:11:17
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 应用类型:Vue应用InCore-TS(30)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户角色关系(QxUserRoleRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月10日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsQxUserRoleRelationEN } from "@/ts/L0Entity/UserManage_GP/clsQxUserRoleRelationEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl_GP } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const qxUserRoleRelation_Controller = "QxUserRoleRelationApi";
 export const qxUserRoleRelation_ConstructorName = "qxUserRoleRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function QxUserRoleRelation_GetObjBymIdAsync(lngmId: number): Promise<clsQxUserRoleRelationEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsQxUserRoleRelationWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const objQxUserRoleRelation = QxUserRoleRelation_GetObjFromJsonObj(returnObj);
return objQxUserRoleRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserRoleRelation_SortFunDefa(a:clsQxUserRoleRelationEN , b:clsQxUserRoleRelationEN): number 
{
return a.mId-b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserRoleRelation_SortFunDefa2Fld(a:clsQxUserRoleRelationEN , b:clsQxUserRoleRelationEN): number 
{
if (a.userId == b.userId) return a.roleId.localeCompare(b.roleId);
else return a.userId.localeCompare(b.userId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function QxUserRoleRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsQxUserRoleRelationEN.con_mId:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return a.mId-b.mId;
}
case clsQxUserRoleRelationEN.con_UserId:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return a.userId.localeCompare(b.userId);
}
case clsQxUserRoleRelationEN.con_RoleId:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return a.roleId.localeCompare(b.roleId);
}
case clsQxUserRoleRelationEN.con_IdSchool:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsQxUserRoleRelationEN.con_QxPrjId:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return a.qxPrjId.localeCompare(b.qxPrjId);
}
case clsQxUserRoleRelationEN.con_UpdDate:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsQxUserRoleRelationEN.con_UpdUser:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clsQxUserRoleRelationEN.con_Memo:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserRoleRelation]中不存在!(in ${ qxUserRoleRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsQxUserRoleRelationEN.con_mId:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return b.mId-a.mId;
}
case clsQxUserRoleRelationEN.con_UserId:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return b.userId.localeCompare(a.userId);
}
case clsQxUserRoleRelationEN.con_RoleId:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return b.roleId.localeCompare(a.roleId);
}
case clsQxUserRoleRelationEN.con_IdSchool:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsQxUserRoleRelationEN.con_QxPrjId:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return b.qxPrjId.localeCompare(a.qxPrjId);
}
case clsQxUserRoleRelationEN.con_UpdDate:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsQxUserRoleRelationEN.con_UpdUser:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clsQxUserRoleRelationEN.con_Memo:
return (a: clsQxUserRoleRelationEN, b: clsQxUserRoleRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserRoleRelation]中不存在!(in ${ qxUserRoleRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function QxUserRoleRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsQxUserRoleRelationEN.con_mId:
return (obj: clsQxUserRoleRelationEN) => {
return obj.mId === value;
}
case clsQxUserRoleRelationEN.con_UserId:
return (obj: clsQxUserRoleRelationEN) => {
return obj.userId === value;
}
case clsQxUserRoleRelationEN.con_RoleId:
return (obj: clsQxUserRoleRelationEN) => {
return obj.roleId === value;
}
case clsQxUserRoleRelationEN.con_IdSchool:
return (obj: clsQxUserRoleRelationEN) => {
return obj.idSchool === value;
}
case clsQxUserRoleRelationEN.con_QxPrjId:
return (obj: clsQxUserRoleRelationEN) => {
return obj.qxPrjId === value;
}
case clsQxUserRoleRelationEN.con_UpdDate:
return (obj: clsQxUserRoleRelationEN) => {
return obj.updDate === value;
}
case clsQxUserRoleRelationEN.con_UpdUser:
return (obj: clsQxUserRoleRelationEN) => {
return obj.updUser === value;
}
case clsQxUserRoleRelationEN.con_Memo:
return (obj: clsQxUserRoleRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[QxUserRoleRelation]中不存在!(in ${ qxUserRoleRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[QxUserRoleRelation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserRoleRelation_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetFirstObjAsync(strWhereCond: string): Promise<clsQxUserRoleRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const objQxUserRoleRelation = QxUserRoleRelation_GetObjFromJsonObj(returnObj);
return objQxUserRoleRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clsQxUserRoleRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserRoleRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsQxUserRoleRelationEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserRoleRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsQxUserRoleRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserRoleRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsQxUserRoleRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserRoleRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsQxUserRoleRelationEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsQxUserRoleRelationEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = QxUserRoleRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_DelQxUserRoleRelationsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelQxUserRoleRelationsAsync";
const strAction = "DelQxUserRoleRelations";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_DelQxUserRoleRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelQxUserRoleRelationsByCondAsync";
const strAction = "DelQxUserRoleRelationsByCond";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
 * @param objQxUserRoleRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function QxUserRoleRelation_AddNewRecordAsync(objQxUserRoleRelationEN: clsQxUserRoleRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objQxUserRoleRelationEN);
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserRoleRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_AddNewObjSave(objQxUserRoleRelationEN: clsQxUserRoleRelationEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
QxUserRoleRelation_CheckPropertyNew(objQxUserRoleRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserRoleRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserRoleRelation_CheckUniCond4Add(objQxUserRoleRelationEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await QxUserRoleRelation_AddNewRecordAsync(objQxUserRoleRelationEN);
if (returnBool == true)
{
//QxUserRoleRelation_ReFreshCache();
}
else
{
const strInfo = `添加[用户角色关系(QxUserRoleRelation)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objQxUserRoleRelationEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ qxUserRoleRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function QxUserRoleRelation_CheckUniCond4Add(objQxUserRoleRelationEN: clsQxUserRoleRelationEN): Promise<boolean>{
const strUniquenessCondition = QxUserRoleRelation_GetUniCondStr(objQxUserRoleRelationEN);
const bolIsExistCondition = await QxUserRoleRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserRoleRelation_CheckUniCond4Update(objQxUserRoleRelationEN: clsQxUserRoleRelationEN): Promise<boolean>{
const strUniquenessCondition = QxUserRoleRelation_GetUniCondStr4Update(objQxUserRoleRelationEN);
const bolIsExistCondition = await QxUserRoleRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function QxUserRoleRelation_UpdateObjSave(objQxUserRoleRelationEN: clsQxUserRoleRelationEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objQxUserRoleRelationEN.sfUpdFldSetStr = objQxUserRoleRelationEN.updFldString;//设置哪些字段被修改(脏字段)
if (objQxUserRoleRelationEN.mId == 0 || objQxUserRoleRelationEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
QxUserRoleRelation_CheckProperty4Update(objQxUserRoleRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ qxUserRoleRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await QxUserRoleRelation_CheckUniCond4Update(objQxUserRoleRelationEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await QxUserRoleRelation_UpdateRecordAsync(objQxUserRoleRelationEN);
if (returnBool == true)
{
//QxUserRoleRelation_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ qxUserRoleRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objQxUserRoleRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function QxUserRoleRelation_AddNewRecordWithReturnKeyAsync(objQxUserRoleRelationEN: clsQxUserRoleRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserRoleRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
 * @param objQxUserRoleRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserRoleRelation_UpdateRecordAsync(objQxUserRoleRelationEN: clsQxUserRoleRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objQxUserRoleRelationEN.sfUpdFldSetStr === undefined || objQxUserRoleRelationEN.sfUpdFldSetStr === null || objQxUserRoleRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserRoleRelationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserRoleRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
 * @param objQxUserRoleRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function QxUserRoleRelation_EditRecordExAsync(objQxUserRoleRelationEN: clsQxUserRoleRelationEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objQxUserRoleRelationEN.sfUpdFldSetStr === undefined || objQxUserRoleRelationEN.sfUpdFldSetStr === null || objQxUserRoleRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserRoleRelationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserRoleRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
 * @param objQxUserRoleRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function QxUserRoleRelation_UpdateWithConditionAsync(objQxUserRoleRelationEN: clsQxUserRoleRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objQxUserRoleRelationEN.sfUpdFldSetStr === undefined || objQxUserRoleRelationEN.sfUpdFldSetStr === null || objQxUserRoleRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objQxUserRoleRelationEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);
objQxUserRoleRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objQxUserRoleRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  async function QxUserRoleRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl_GP(qxUserRoleRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, qxUserRoleRelation_ConstructorName, strThisFuncName);
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
export  function QxUserRoleRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function QxUserRoleRelation_CheckPropertyNew(pobjQxUserRoleRelationEN: clsQxUserRoleRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.userId) === true 
 || pobjQxUserRoleRelationEN.userId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.roleId) === true 
 || pobjQxUserRoleRelationEN.roleId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[角色Id]不能为空(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.qxPrjId) === true 
 || pobjQxUserRoleRelationEN.qxPrjId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[项目Id]不能为空(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改用户]不能为空(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.userId) == false && GetStrLen(pobjQxUserRoleRelationEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.userId}(clsQxUserRoleRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.roleId) == false && GetStrLen(pobjQxUserRoleRelationEN.roleId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[角色Id(roleId)]的长度不能超过8(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.roleId}(clsQxUserRoleRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.idSchool) == false && GetStrLen(pobjQxUserRoleRelationEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.idSchool}(clsQxUserRoleRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.qxPrjId) == false && GetStrLen(pobjQxUserRoleRelationEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[项目Id(qxPrjId)]的长度不能超过4(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.qxPrjId}(clsQxUserRoleRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updDate) == false && GetStrLen(pobjQxUserRoleRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.updDate}(clsQxUserRoleRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updUser) == false && GetStrLen(pobjQxUserRoleRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户(updUser)]的长度不能超过20(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.updUser}(clsQxUserRoleRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.memo) == false && GetStrLen(pobjQxUserRoleRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.memo}(clsQxUserRoleRelationBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserRoleRelationEN.mId && undefined !== pobjQxUserRoleRelationEN.mId && tzDataType.isNumber(pobjQxUserRoleRelationEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[流水号(mId)]的值:[${pobjQxUserRoleRelationEN.mId}], 非法,应该为数值型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.userId) == false && undefined !== pobjQxUserRoleRelationEN.userId && tzDataType.isString(pobjQxUserRoleRelationEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjQxUserRoleRelationEN.userId}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.roleId) == false && undefined !== pobjQxUserRoleRelationEN.roleId && tzDataType.isString(pobjQxUserRoleRelationEN.roleId) === false)
{
 throw new Error(`(errid:Watl000414)字段[角色Id(roleId)]的值:[${pobjQxUserRoleRelationEN.roleId}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.idSchool) == false && undefined !== pobjQxUserRoleRelationEN.idSchool && tzDataType.isString(pobjQxUserRoleRelationEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjQxUserRoleRelationEN.idSchool}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.qxPrjId) == false && undefined !== pobjQxUserRoleRelationEN.qxPrjId && tzDataType.isString(pobjQxUserRoleRelationEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000414)字段[项目Id(qxPrjId)]的值:[${pobjQxUserRoleRelationEN.qxPrjId}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updDate) == false && undefined !== pobjQxUserRoleRelationEN.updDate && tzDataType.isString(pobjQxUserRoleRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjQxUserRoleRelationEN.updDate}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updUser) == false && undefined !== pobjQxUserRoleRelationEN.updUser && tzDataType.isString(pobjQxUserRoleRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户(updUser)]的值:[${pobjQxUserRoleRelationEN.updUser}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.memo) == false && undefined !== pobjQxUserRoleRelationEN.memo && tzDataType.isString(pobjQxUserRoleRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjQxUserRoleRelationEN.memo}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.roleId) == false && pobjQxUserRoleRelationEN.roleId != '[nuull]' && GetStrLen(pobjQxUserRoleRelationEN.roleId) !=  8)
{
 throw ("(errid:Watl000415)字段[角色Id]作为外键字段,长度应该为8(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.qxPrjId) == false && pobjQxUserRoleRelationEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxUserRoleRelationEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000415)字段[项目Id]作为外键字段,长度应该为4(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function QxUserRoleRelation_CheckProperty4Update(pobjQxUserRoleRelationEN: clsQxUserRoleRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.userId) == false && GetStrLen(pobjQxUserRoleRelationEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.userId}(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.roleId) == false && GetStrLen(pobjQxUserRoleRelationEN.roleId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[角色Id(roleId)]的长度不能超过8(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.roleId}(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.idSchool) == false && GetStrLen(pobjQxUserRoleRelationEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.idSchool}(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.qxPrjId) == false && GetStrLen(pobjQxUserRoleRelationEN.qxPrjId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[项目Id(qxPrjId)]的长度不能超过4(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.qxPrjId}(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updDate) == false && GetStrLen(pobjQxUserRoleRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.updDate}(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updUser) == false && GetStrLen(pobjQxUserRoleRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户(updUser)]的长度不能超过20(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.updUser}(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.memo) == false && GetStrLen(pobjQxUserRoleRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户角色关系(QxUserRoleRelation))!值:${pobjQxUserRoleRelationEN.memo}(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjQxUserRoleRelationEN.mId && undefined !== pobjQxUserRoleRelationEN.mId && tzDataType.isNumber(pobjQxUserRoleRelationEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[流水号(mId)]的值:[${pobjQxUserRoleRelationEN.mId}], 非法,应该为数值型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.userId) == false && undefined !== pobjQxUserRoleRelationEN.userId && tzDataType.isString(pobjQxUserRoleRelationEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjQxUserRoleRelationEN.userId}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.roleId) == false && undefined !== pobjQxUserRoleRelationEN.roleId && tzDataType.isString(pobjQxUserRoleRelationEN.roleId) === false)
{
 throw new Error(`(errid:Watl000417)字段[角色Id(roleId)]的值:[${pobjQxUserRoleRelationEN.roleId}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.idSchool) == false && undefined !== pobjQxUserRoleRelationEN.idSchool && tzDataType.isString(pobjQxUserRoleRelationEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjQxUserRoleRelationEN.idSchool}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.qxPrjId) == false && undefined !== pobjQxUserRoleRelationEN.qxPrjId && tzDataType.isString(pobjQxUserRoleRelationEN.qxPrjId) === false)
{
 throw new Error(`(errid:Watl000417)字段[项目Id(qxPrjId)]的值:[${pobjQxUserRoleRelationEN.qxPrjId}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updDate) == false && undefined !== pobjQxUserRoleRelationEN.updDate && tzDataType.isString(pobjQxUserRoleRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjQxUserRoleRelationEN.updDate}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.updUser) == false && undefined !== pobjQxUserRoleRelationEN.updUser && tzDataType.isString(pobjQxUserRoleRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户(updUser)]的值:[${pobjQxUserRoleRelationEN.updUser}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.memo) == false && undefined !== pobjQxUserRoleRelationEN.memo && tzDataType.isString(pobjQxUserRoleRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjQxUserRoleRelationEN.memo}], 非法,应该为字符型(In 用户角色关系(QxUserRoleRelation))!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjQxUserRoleRelationEN.mId 
 || pobjQxUserRoleRelationEN.mId != null && pobjQxUserRoleRelationEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[流水号]不能为空(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.roleId) == false && pobjQxUserRoleRelationEN.roleId != '[nuull]' && GetStrLen(pobjQxUserRoleRelationEN.roleId) !=  8)
{
 throw ("(errid:Watl000418)字段[角色Id]作为外键字段,长度应该为8(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjQxUserRoleRelationEN.qxPrjId) == false && pobjQxUserRoleRelationEN.qxPrjId != '[nuull]' && GetStrLen(pobjQxUserRoleRelationEN.qxPrjId) !=  4)
{
 throw ("(errid:Watl000418)字段[项目Id]作为外键字段,长度应该为4(In 用户角色关系)!(clsQxUserRoleRelationBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserRoleRelation_GetJSONStrByObj (pobjQxUserRoleRelationEN: clsQxUserRoleRelationEN): string
{
pobjQxUserRoleRelationEN.sfUpdFldSetStr = pobjQxUserRoleRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjQxUserRoleRelationEN);
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
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function QxUserRoleRelation_GetObjLstByJSONStr (strJSON: string): Array<clsQxUserRoleRelationEN>
{
let arrQxUserRoleRelationObjLst = new Array<clsQxUserRoleRelationEN>();
if (strJSON === "")
{
return arrQxUserRoleRelationObjLst;
}
try
{
arrQxUserRoleRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrQxUserRoleRelationObjLst;
}
return arrQxUserRoleRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrQxUserRoleRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function QxUserRoleRelation_GetObjLstByJSONObjLst (arrQxUserRoleRelationObjLstS: Array<clsQxUserRoleRelationEN>): Array<clsQxUserRoleRelationEN>
{
const arrQxUserRoleRelationObjLst = new Array<clsQxUserRoleRelationEN>();
for (const objInFor of arrQxUserRoleRelationObjLstS) {
const obj1 = QxUserRoleRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrQxUserRoleRelationObjLst.push(obj1);
}
return arrQxUserRoleRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function QxUserRoleRelation_GetObjByJSONStr (strJSON: string): clsQxUserRoleRelationEN
{
let pobjQxUserRoleRelationEN = new clsQxUserRoleRelationEN();
if (strJSON === "")
{
return pobjQxUserRoleRelationEN;
}
try
{
pobjQxUserRoleRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjQxUserRoleRelationEN;
}
return pobjQxUserRoleRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function QxUserRoleRelation_GetCombineCondition(objQxUserRoleRelationCond: clsQxUserRoleRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objQxUserRoleRelationCond.dicFldComparisonOp, clsQxUserRoleRelationEN.con_mId) == true)
{
const strComparisonOpmId:string = objQxUserRoleRelationCond.dicFldComparisonOp[clsQxUserRoleRelationEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsQxUserRoleRelationEN.con_mId, objQxUserRoleRelationCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserRoleRelationCond.dicFldComparisonOp, clsQxUserRoleRelationEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objQxUserRoleRelationCond.dicFldComparisonOp[clsQxUserRoleRelationEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserRoleRelationEN.con_UserId, objQxUserRoleRelationCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserRoleRelationCond.dicFldComparisonOp, clsQxUserRoleRelationEN.con_RoleId) == true)
{
const strComparisonOpRoleId:string = objQxUserRoleRelationCond.dicFldComparisonOp[clsQxUserRoleRelationEN.con_RoleId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserRoleRelationEN.con_RoleId, objQxUserRoleRelationCond.roleId, strComparisonOpRoleId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserRoleRelationCond.dicFldComparisonOp, clsQxUserRoleRelationEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objQxUserRoleRelationCond.dicFldComparisonOp[clsQxUserRoleRelationEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserRoleRelationEN.con_IdSchool, objQxUserRoleRelationCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objQxUserRoleRelationCond.dicFldComparisonOp, clsQxUserRoleRelationEN.con_QxPrjId) == true)
{
const strComparisonOpQxPrjId:string = objQxUserRoleRelationCond.dicFldComparisonOp[clsQxUserRoleRelationEN.con_QxPrjId];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserRoleRelationEN.con_QxPrjId, objQxUserRoleRelationCond.qxPrjId, strComparisonOpQxPrjId);
}
if (Object.prototype.hasOwnProperty.call(objQxUserRoleRelationCond.dicFldComparisonOp, clsQxUserRoleRelationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objQxUserRoleRelationCond.dicFldComparisonOp[clsQxUserRoleRelationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserRoleRelationEN.con_UpdDate, objQxUserRoleRelationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objQxUserRoleRelationCond.dicFldComparisonOp, clsQxUserRoleRelationEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objQxUserRoleRelationCond.dicFldComparisonOp[clsQxUserRoleRelationEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserRoleRelationEN.con_UpdUser, objQxUserRoleRelationCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objQxUserRoleRelationCond.dicFldComparisonOp, clsQxUserRoleRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objQxUserRoleRelationCond.dicFldComparisonOp[clsQxUserRoleRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsQxUserRoleRelationEN.con_Memo, objQxUserRoleRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserRoleRelation(用户角色关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strRoleId: 角色Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserRoleRelation_GetUniCondStr(objQxUserRoleRelationEN: clsQxUserRoleRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserRoleRelationEN.userId);
 strWhereCond +=  Format(" and RoleId = '{0}'", objQxUserRoleRelationEN.roleId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--QxUserRoleRelation(用户角色关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @param strRoleId: 角色Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function QxUserRoleRelation_GetUniCondStr4Update(objQxUserRoleRelationEN: clsQxUserRoleRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objQxUserRoleRelationEN.mId);
 strWhereCond +=  Format(" and UserId = '{0}'", objQxUserRoleRelationEN.userId);
 strWhereCond +=  Format(" and RoleId = '{0}'", objQxUserRoleRelationEN.roleId);
 return strWhereCond;
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objQxUserRoleRelationENS:源对象
 * @param objQxUserRoleRelationENT:目标对象
*/
export  function QxUserRoleRelation_GetObjFromJsonObj(objQxUserRoleRelationENS: clsQxUserRoleRelationEN): clsQxUserRoleRelationEN 
{
 const objQxUserRoleRelationENT: clsQxUserRoleRelationEN = new clsQxUserRoleRelationEN();
ObjectAssign(objQxUserRoleRelationENT, objQxUserRoleRelationENS);
 return objQxUserRoleRelationENT;
}
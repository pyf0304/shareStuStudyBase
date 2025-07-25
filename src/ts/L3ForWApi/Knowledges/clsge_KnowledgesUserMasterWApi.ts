﻿
 /**
 * 类名:clsge_KnowledgesUserMasterWApi
 * 表名:ge_KnowledgesUserMaster(01120892)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点用户掌握(ge_KnowledgesUserMaster)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clsge_KnowledgesUserMasterEN } from "@/ts/L0Entity/Knowledges/clsge_KnowledgesUserMasterEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

 export const ge_KnowledgesUserMaster_Controller = "ge_KnowledgesUserMasterApi";
 export const ge_KnowledgesUserMaster_ConstructorName = "ge_KnowledgesUserMaster";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function ge_KnowledgesUserMaster_GetObjBymIdAsync(lngmId: number): Promise<clsge_KnowledgesUserMasterEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsge_KnowledgesUserMasterWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const objge_KnowledgesUserMaster = ge_KnowledgesUserMaster_GetObjFromJsonObj(returnObj);
return objge_KnowledgesUserMaster;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  function ge_KnowledgesUserMaster_SortFunDefa(a:clsge_KnowledgesUserMasterEN , b:clsge_KnowledgesUserMasterEN): number 
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
export  function ge_KnowledgesUserMaster_SortFunDefa2Fld(a:clsge_KnowledgesUserMasterEN , b:clsge_KnowledgesUserMasterEN): number 
{
if (a.courseId == b.courseId) return a.userId.localeCompare(b.userId);
else return a.courseId.localeCompare(b.courseId);
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
export  function ge_KnowledgesUserMaster_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsge_KnowledgesUserMasterEN.con_mId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.mId-b.mId;
}
case clsge_KnowledgesUserMasterEN.con_CourseId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsge_KnowledgesUserMasterEN.con_UserId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.userId.localeCompare(b.userId);
}
case clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsge_KnowledgesUserMasterEN.con_RightCount:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.rightCount-b.rightCount;
}
case clsge_KnowledgesUserMasterEN.con_MasterTypeId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (a.masterTypeId == null) return -1;
if (b.masterTypeId == null) return 1;
return a.masterTypeId.localeCompare(b.masterTypeId);
}
case clsge_KnowledgesUserMasterEN.con_ErrorCount:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.errorCount-b.errorCount;
}
case clsge_KnowledgesUserMasterEN.con_MasterLevelId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (a.masterLevelId == null) return -1;
if (b.masterLevelId == null) return 1;
return a.masterLevelId.localeCompare(b.masterLevelId);
}
case clsge_KnowledgesUserMasterEN.con_MasteryValue:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.masteryValue-b.masteryValue;
}
case clsge_KnowledgesUserMasterEN.con_UpdDate:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsge_KnowledgesUserMasterEN.con_GoalValue:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.goalValue-b.goalValue;
}
case clsge_KnowledgesUserMasterEN.con_SelfPerceivedValue:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return a.selfPerceivedValue-b.selfPerceivedValue;
}
case clsge_KnowledgesUserMasterEN.con_UpdUser:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsge_KnowledgesUserMasterEN.con_Memo:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_KnowledgesUserMaster]中不存在!(in ${ ge_KnowledgesUserMaster_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsge_KnowledgesUserMasterEN.con_mId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.mId-a.mId;
}
case clsge_KnowledgesUserMasterEN.con_CourseId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsge_KnowledgesUserMasterEN.con_UserId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.userId.localeCompare(a.userId);
}
case clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsge_KnowledgesUserMasterEN.con_RightCount:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.rightCount-a.rightCount;
}
case clsge_KnowledgesUserMasterEN.con_MasterTypeId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (b.masterTypeId == null) return -1;
if (a.masterTypeId == null) return 1;
return b.masterTypeId.localeCompare(a.masterTypeId);
}
case clsge_KnowledgesUserMasterEN.con_ErrorCount:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.errorCount-a.errorCount;
}
case clsge_KnowledgesUserMasterEN.con_MasterLevelId:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (b.masterLevelId == null) return -1;
if (a.masterLevelId == null) return 1;
return b.masterLevelId.localeCompare(a.masterLevelId);
}
case clsge_KnowledgesUserMasterEN.con_MasteryValue:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.masteryValue-a.masteryValue;
}
case clsge_KnowledgesUserMasterEN.con_UpdDate:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsge_KnowledgesUserMasterEN.con_GoalValue:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.goalValue-a.goalValue;
}
case clsge_KnowledgesUserMasterEN.con_SelfPerceivedValue:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
return b.selfPerceivedValue-a.selfPerceivedValue;
}
case clsge_KnowledgesUserMasterEN.con_UpdUser:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsge_KnowledgesUserMasterEN.con_Memo:
return (a: clsge_KnowledgesUserMasterEN, b: clsge_KnowledgesUserMasterEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_KnowledgesUserMaster]中不存在!(in ${ ge_KnowledgesUserMaster_ConstructorName}.${ strThisFuncName})`;
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
export  async function ge_KnowledgesUserMaster_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsge_KnowledgesUserMasterEN.con_mId:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.mId === value;
}
case clsge_KnowledgesUserMasterEN.con_CourseId:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.courseId === value;
}
case clsge_KnowledgesUserMasterEN.con_UserId:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.userId === value;
}
case clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.courseKnowledgeId === value;
}
case clsge_KnowledgesUserMasterEN.con_RightCount:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.rightCount === value;
}
case clsge_KnowledgesUserMasterEN.con_MasterTypeId:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.masterTypeId === value;
}
case clsge_KnowledgesUserMasterEN.con_ErrorCount:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.errorCount === value;
}
case clsge_KnowledgesUserMasterEN.con_MasterLevelId:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.masterLevelId === value;
}
case clsge_KnowledgesUserMasterEN.con_MasteryValue:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.masteryValue === value;
}
case clsge_KnowledgesUserMasterEN.con_UpdDate:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.updDate === value;
}
case clsge_KnowledgesUserMasterEN.con_GoalValue:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.goalValue === value;
}
case clsge_KnowledgesUserMasterEN.con_SelfPerceivedValue:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.selfPerceivedValue === value;
}
case clsge_KnowledgesUserMasterEN.con_UpdUser:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.updUser === value;
}
case clsge_KnowledgesUserMasterEN.con_Memo:
return (obj: clsge_KnowledgesUserMasterEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ge_KnowledgesUserMaster]中不存在!(in ${ ge_KnowledgesUserMaster_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ge_KnowledgesUserMaster__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_KnowledgesUserMaster_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetFirstObjAsync(strWhereCond: string): Promise<clsge_KnowledgesUserMasterEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const objge_KnowledgesUserMaster = ge_KnowledgesUserMaster_GetObjFromJsonObj(returnObj);
return objge_KnowledgesUserMaster;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetObjLstAsync(strWhereCond: string): Promise<Array<clsge_KnowledgesUserMasterEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KnowledgesUserMaster_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsge_KnowledgesUserMasterEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KnowledgesUserMaster_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsge_KnowledgesUserMasterEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KnowledgesUserMaster_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsge_KnowledgesUserMasterEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KnowledgesUserMaster_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsge_KnowledgesUserMasterEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsge_KnowledgesUserMasterEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ge_KnowledgesUserMaster_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_Delge_KnowledgesUserMastersAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delge_KnowledgesUserMastersAsync";
const strAction = "Delge_KnowledgesUserMasters";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_Delge_KnowledgesUserMastersByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delge_KnowledgesUserMastersByCondAsync";
const strAction = "Delge_KnowledgesUserMastersByCond";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
 * @param objge_KnowledgesUserMasterEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ge_KnowledgesUserMaster_AddNewRecordAsync(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objge_KnowledgesUserMasterEN);
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KnowledgesUserMasterEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_AddNewObjSave(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ge_KnowledgesUserMaster_CheckPropertyNew(objge_KnowledgesUserMasterEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_KnowledgesUserMaster_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_KnowledgesUserMaster_CheckUniCond4Add(objge_KnowledgesUserMasterEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await ge_KnowledgesUserMaster_AddNewRecordAsync(objge_KnowledgesUserMasterEN);
if (returnBool == true)
{
//ge_KnowledgesUserMaster_ReFreshCache();
}
else
{
const strInfo = `添加[知识点用户掌握(ge_KnowledgesUserMaster)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objge_KnowledgesUserMasterEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ ge_KnowledgesUserMaster_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function ge_KnowledgesUserMaster_CheckUniCond4Add(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): Promise<boolean>{
const strUniquenessCondition = ge_KnowledgesUserMaster_GetUniCondStr(objge_KnowledgesUserMasterEN);
const bolIsExistCondition = await ge_KnowledgesUserMaster_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_KnowledgesUserMaster_CheckUniCond4Update(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): Promise<boolean>{
const strUniquenessCondition = ge_KnowledgesUserMaster_GetUniCondStr4Update(objge_KnowledgesUserMasterEN);
const bolIsExistCondition = await ge_KnowledgesUserMaster_IsExistRecordAsync(strUniquenessCondition);
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
export  async function ge_KnowledgesUserMaster_UpdateObjSave(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objge_KnowledgesUserMasterEN.sfUpdFldSetStr = objge_KnowledgesUserMasterEN.updFldString;//设置哪些字段被修改(脏字段)
if (objge_KnowledgesUserMasterEN.mId == 0 || objge_KnowledgesUserMasterEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ge_KnowledgesUserMaster_CheckProperty4Update(objge_KnowledgesUserMasterEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ ge_KnowledgesUserMaster_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await ge_KnowledgesUserMaster_CheckUniCond4Update(objge_KnowledgesUserMasterEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await ge_KnowledgesUserMaster_UpdateRecordAsync(objge_KnowledgesUserMasterEN);
if (returnBool == true)
{
//ge_KnowledgesUserMaster_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ ge_KnowledgesUserMaster_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objge_KnowledgesUserMasterEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ge_KnowledgesUserMaster_AddNewRecordWithReturnKeyAsync(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KnowledgesUserMasterEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
 * @param objge_KnowledgesUserMasterEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_KnowledgesUserMaster_UpdateRecordAsync(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objge_KnowledgesUserMasterEN.sfUpdFldSetStr === undefined || objge_KnowledgesUserMasterEN.sfUpdFldSetStr === null || objge_KnowledgesUserMasterEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_KnowledgesUserMasterEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KnowledgesUserMasterEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
 * @param objge_KnowledgesUserMasterEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ge_KnowledgesUserMaster_EditRecordExAsync(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objge_KnowledgesUserMasterEN.sfUpdFldSetStr === undefined || objge_KnowledgesUserMasterEN.sfUpdFldSetStr === null || objge_KnowledgesUserMasterEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_KnowledgesUserMasterEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KnowledgesUserMasterEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
 * @param objge_KnowledgesUserMasterEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ge_KnowledgesUserMaster_UpdateWithConditionAsync(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objge_KnowledgesUserMasterEN.sfUpdFldSetStr === undefined || objge_KnowledgesUserMasterEN.sfUpdFldSetStr === null || objge_KnowledgesUserMasterEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objge_KnowledgesUserMasterEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);
objge_KnowledgesUserMasterEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objge_KnowledgesUserMasterEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  async function ge_KnowledgesUserMaster_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(ge_KnowledgesUserMaster_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, ge_KnowledgesUserMaster_ConstructorName, strThisFuncName);
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
export  function ge_KnowledgesUserMaster_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function ge_KnowledgesUserMaster_CheckPropertyNew(pobjge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseId) === true 
 || pobjge_KnowledgesUserMasterEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 知识点用户掌握)!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.userId) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户ID]不能为空(In 知识点用户掌握)!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) === true 
 || pobjge_KnowledgesUserMasterEN.courseKnowledgeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[知识点Id]不能为空(In 知识点用户掌握)!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.courseId}(clsge_KnowledgesUserMasterBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.userId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.userId) > 18)
{
 throw new Error(`(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.userId}(clsge_KnowledgesUserMasterBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.courseKnowledgeId}(clsge_KnowledgesUserMasterBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.masterTypeId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.masterTypeId) > 1)
{
 throw new Error(`(errid:Watl000413)字段[掌握类型Id(masterTypeId)]的长度不能超过1(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.masterTypeId}(clsge_KnowledgesUserMasterBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.masterLevelId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.masterLevelId) > 4)
{
 throw new Error(`(errid:Watl000413)字段[掌握度Id(masterLevelId)]的长度不能超过4(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.masterLevelId}(clsge_KnowledgesUserMasterBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.updDate) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.updDate}(clsge_KnowledgesUserMasterBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.updUser) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.updUser}(clsge_KnowledgesUserMasterBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.memo) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.memo}(clsge_KnowledgesUserMasterBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_KnowledgesUserMasterEN.mId && undefined !== pobjge_KnowledgesUserMasterEN.mId && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjge_KnowledgesUserMasterEN.mId}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseId) == false && undefined !== pobjge_KnowledgesUserMasterEN.courseId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjge_KnowledgesUserMasterEN.courseId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.userId) == false && undefined !== pobjge_KnowledgesUserMasterEN.userId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.userId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjge_KnowledgesUserMasterEN.userId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) == false && undefined !== pobjge_KnowledgesUserMasterEN.courseKnowledgeId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点Id(courseKnowledgeId)]的值:[${pobjge_KnowledgesUserMasterEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (null != pobjge_KnowledgesUserMasterEN.rightCount && undefined !== pobjge_KnowledgesUserMasterEN.rightCount && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.rightCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[正确次数(rightCount)]的值:[${pobjge_KnowledgesUserMasterEN.rightCount}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.masterTypeId) == false && undefined !== pobjge_KnowledgesUserMasterEN.masterTypeId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.masterTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握类型Id(masterTypeId)]的值:[${pobjge_KnowledgesUserMasterEN.masterTypeId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (null != pobjge_KnowledgesUserMasterEN.errorCount && undefined !== pobjge_KnowledgesUserMasterEN.errorCount && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.errorCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[错误次数(errorCount)]的值:[${pobjge_KnowledgesUserMasterEN.errorCount}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.masterLevelId) == false && undefined !== pobjge_KnowledgesUserMasterEN.masterLevelId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.masterLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握度Id(masterLevelId)]的值:[${pobjge_KnowledgesUserMasterEN.masterLevelId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (null != pobjge_KnowledgesUserMasterEN.masteryValue && undefined !== pobjge_KnowledgesUserMasterEN.masteryValue && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.masteryValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握度(masteryValue)]的值:[${pobjge_KnowledgesUserMasterEN.masteryValue}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.updDate) == false && undefined !== pobjge_KnowledgesUserMasterEN.updDate && tzDataType.isString(pobjge_KnowledgesUserMasterEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjge_KnowledgesUserMasterEN.updDate}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (null != pobjge_KnowledgesUserMasterEN.goalValue && undefined !== pobjge_KnowledgesUserMasterEN.goalValue && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.goalValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[目标值(goalValue)]的值:[${pobjge_KnowledgesUserMasterEN.goalValue}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (null != pobjge_KnowledgesUserMasterEN.selfPerceivedValue && undefined !== pobjge_KnowledgesUserMasterEN.selfPerceivedValue && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.selfPerceivedValue) === false)
{
 throw new Error(`(errid:Watl000414)字段[自我认为值(selfPerceivedValue)]的值:[${pobjge_KnowledgesUserMasterEN.selfPerceivedValue}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.updUser) == false && undefined !== pobjge_KnowledgesUserMasterEN.updUser && tzDataType.isString(pobjge_KnowledgesUserMasterEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjge_KnowledgesUserMasterEN.updUser}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.memo) == false && undefined !== pobjge_KnowledgesUserMasterEN.memo && tzDataType.isString(pobjge_KnowledgesUserMasterEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjge_KnowledgesUserMasterEN.memo}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseId) == false && pobjge_KnowledgesUserMasterEN.courseId != '[nuull]' && GetStrLen(pobjge_KnowledgesUserMasterEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 知识点用户掌握)!(clsge_KnowledgesUserMasterBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ge_KnowledgesUserMaster_CheckProperty4Update(pobjge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.courseId}(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.userId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.userId) > 18)
{
 throw new Error(`(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.userId}(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.courseKnowledgeId}(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.masterTypeId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.masterTypeId) > 1)
{
 throw new Error(`(errid:Watl000416)字段[掌握类型Id(masterTypeId)]的长度不能超过1(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.masterTypeId}(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.masterLevelId) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.masterLevelId) > 4)
{
 throw new Error(`(errid:Watl000416)字段[掌握度Id(masterLevelId)]的长度不能超过4(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.masterLevelId}(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.updDate) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.updDate}(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.updUser) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.updUser}(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.memo) == false && GetStrLen(pobjge_KnowledgesUserMasterEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点用户掌握(ge_KnowledgesUserMaster))!值:${pobjge_KnowledgesUserMasterEN.memo}(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjge_KnowledgesUserMasterEN.mId && undefined !== pobjge_KnowledgesUserMasterEN.mId && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjge_KnowledgesUserMasterEN.mId}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseId) == false && undefined !== pobjge_KnowledgesUserMasterEN.courseId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjge_KnowledgesUserMasterEN.courseId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.userId) == false && undefined !== pobjge_KnowledgesUserMasterEN.userId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.userId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjge_KnowledgesUserMasterEN.userId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) == false && undefined !== pobjge_KnowledgesUserMasterEN.courseKnowledgeId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点Id(courseKnowledgeId)]的值:[${pobjge_KnowledgesUserMasterEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (null != pobjge_KnowledgesUserMasterEN.rightCount && undefined !== pobjge_KnowledgesUserMasterEN.rightCount && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.rightCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[正确次数(rightCount)]的值:[${pobjge_KnowledgesUserMasterEN.rightCount}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.masterTypeId) == false && undefined !== pobjge_KnowledgesUserMasterEN.masterTypeId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.masterTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握类型Id(masterTypeId)]的值:[${pobjge_KnowledgesUserMasterEN.masterTypeId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (null != pobjge_KnowledgesUserMasterEN.errorCount && undefined !== pobjge_KnowledgesUserMasterEN.errorCount && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.errorCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[错误次数(errorCount)]的值:[${pobjge_KnowledgesUserMasterEN.errorCount}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.masterLevelId) == false && undefined !== pobjge_KnowledgesUserMasterEN.masterLevelId && tzDataType.isString(pobjge_KnowledgesUserMasterEN.masterLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握度Id(masterLevelId)]的值:[${pobjge_KnowledgesUserMasterEN.masterLevelId}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (null != pobjge_KnowledgesUserMasterEN.masteryValue && undefined !== pobjge_KnowledgesUserMasterEN.masteryValue && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.masteryValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握度(masteryValue)]的值:[${pobjge_KnowledgesUserMasterEN.masteryValue}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.updDate) == false && undefined !== pobjge_KnowledgesUserMasterEN.updDate && tzDataType.isString(pobjge_KnowledgesUserMasterEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjge_KnowledgesUserMasterEN.updDate}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (null != pobjge_KnowledgesUserMasterEN.goalValue && undefined !== pobjge_KnowledgesUserMasterEN.goalValue && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.goalValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[目标值(goalValue)]的值:[${pobjge_KnowledgesUserMasterEN.goalValue}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (null != pobjge_KnowledgesUserMasterEN.selfPerceivedValue && undefined !== pobjge_KnowledgesUserMasterEN.selfPerceivedValue && tzDataType.isNumber(pobjge_KnowledgesUserMasterEN.selfPerceivedValue) === false)
{
 throw new Error(`(errid:Watl000417)字段[自我认为值(selfPerceivedValue)]的值:[${pobjge_KnowledgesUserMasterEN.selfPerceivedValue}], 非法,应该为数值型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.updUser) == false && undefined !== pobjge_KnowledgesUserMasterEN.updUser && tzDataType.isString(pobjge_KnowledgesUserMasterEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjge_KnowledgesUserMasterEN.updUser}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.memo) == false && undefined !== pobjge_KnowledgesUserMasterEN.memo && tzDataType.isString(pobjge_KnowledgesUserMasterEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjge_KnowledgesUserMasterEN.memo}], 非法,应该为字符型(In 知识点用户掌握(ge_KnowledgesUserMaster))!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjge_KnowledgesUserMasterEN.mId 
 || pobjge_KnowledgesUserMasterEN.mId != null && pobjge_KnowledgesUserMasterEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 知识点用户掌握)!(clsge_KnowledgesUserMasterBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjge_KnowledgesUserMasterEN.courseId) == false && pobjge_KnowledgesUserMasterEN.courseId != '[nuull]' && GetStrLen(pobjge_KnowledgesUserMasterEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 知识点用户掌握)!(clsge_KnowledgesUserMasterBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_KnowledgesUserMaster_GetJSONStrByObj (pobjge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN): string
{
pobjge_KnowledgesUserMasterEN.sfUpdFldSetStr = pobjge_KnowledgesUserMasterEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjge_KnowledgesUserMasterEN);
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
export  function ge_KnowledgesUserMaster_GetObjLstByJSONStr (strJSON: string): Array<clsge_KnowledgesUserMasterEN>
{
let arrge_KnowledgesUserMasterObjLst = new Array<clsge_KnowledgesUserMasterEN>();
if (strJSON === "")
{
return arrge_KnowledgesUserMasterObjLst;
}
try
{
arrge_KnowledgesUserMasterObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrge_KnowledgesUserMasterObjLst;
}
return arrge_KnowledgesUserMasterObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrge_KnowledgesUserMasterObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ge_KnowledgesUserMaster_GetObjLstByJSONObjLst (arrge_KnowledgesUserMasterObjLstS: Array<clsge_KnowledgesUserMasterEN>): Array<clsge_KnowledgesUserMasterEN>
{
const arrge_KnowledgesUserMasterObjLst = new Array<clsge_KnowledgesUserMasterEN>();
for (const objInFor of arrge_KnowledgesUserMasterObjLstS) {
const obj1 = ge_KnowledgesUserMaster_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrge_KnowledgesUserMasterObjLst.push(obj1);
}
return arrge_KnowledgesUserMasterObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ge_KnowledgesUserMaster_GetObjByJSONStr (strJSON: string): clsge_KnowledgesUserMasterEN
{
let pobjge_KnowledgesUserMasterEN = new clsge_KnowledgesUserMasterEN();
if (strJSON === "")
{
return pobjge_KnowledgesUserMasterEN;
}
try
{
pobjge_KnowledgesUserMasterEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjge_KnowledgesUserMasterEN;
}
return pobjge_KnowledgesUserMasterEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ge_KnowledgesUserMaster_GetCombineCondition(objge_KnowledgesUserMasterCond: clsge_KnowledgesUserMasterEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_mId) == true)
{
const strComparisonOpmId:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsge_KnowledgesUserMasterEN.con_mId, objge_KnowledgesUserMasterCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KnowledgesUserMasterEN.con_CourseId, objge_KnowledgesUserMasterCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_UserId) == true)
{
const strComparisonOpUserId:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_UserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KnowledgesUserMasterEN.con_UserId, objge_KnowledgesUserMasterCond.userId, strComparisonOpUserId);
}
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KnowledgesUserMasterEN.con_CourseKnowledgeId, objge_KnowledgesUserMasterCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_RightCount) == true)
{
const strComparisonOpRightCount:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_RightCount];
strWhereCond += Format(" And {0} {2} {1}", clsge_KnowledgesUserMasterEN.con_RightCount, objge_KnowledgesUserMasterCond.rightCount, strComparisonOpRightCount);
}
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_MasterTypeId) == true)
{
const strComparisonOpMasterTypeId:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_MasterTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KnowledgesUserMasterEN.con_MasterTypeId, objge_KnowledgesUserMasterCond.masterTypeId, strComparisonOpMasterTypeId);
}
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_ErrorCount) == true)
{
const strComparisonOpErrorCount:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_ErrorCount];
strWhereCond += Format(" And {0} {2} {1}", clsge_KnowledgesUserMasterEN.con_ErrorCount, objge_KnowledgesUserMasterCond.errorCount, strComparisonOpErrorCount);
}
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_MasterLevelId) == true)
{
const strComparisonOpMasterLevelId:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_MasterLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KnowledgesUserMasterEN.con_MasterLevelId, objge_KnowledgesUserMasterCond.masterLevelId, strComparisonOpMasterLevelId);
}
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KnowledgesUserMasterEN.con_UpdDate, objge_KnowledgesUserMasterCond.updDate, strComparisonOpUpdDate);
}
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
//数据类型number(numeric)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KnowledgesUserMasterEN.con_UpdUser, objge_KnowledgesUserMasterCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objge_KnowledgesUserMasterCond.dicFldComparisonOp, clsge_KnowledgesUserMasterEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objge_KnowledgesUserMasterCond.dicFldComparisonOp[clsge_KnowledgesUserMasterEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsge_KnowledgesUserMasterEN.con_Memo, objge_KnowledgesUserMasterCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_KnowledgesUserMaster(知识点用户掌握),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_KnowledgesUserMaster_GetUniCondStr(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objge_KnowledgesUserMasterEN.courseKnowledgeId);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_KnowledgesUserMasterEN.userId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--ge_KnowledgesUserMaster(知识点用户掌握),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function ge_KnowledgesUserMaster_GetUniCondStr4Update(objge_KnowledgesUserMasterEN: clsge_KnowledgesUserMasterEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objge_KnowledgesUserMasterEN.mId);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objge_KnowledgesUserMasterEN.courseKnowledgeId);
 strWhereCond +=  Format(" and UserId = '{0}'", objge_KnowledgesUserMasterEN.userId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objge_KnowledgesUserMasterENS:源对象
 * @param objge_KnowledgesUserMasterENT:目标对象
*/
export  function ge_KnowledgesUserMaster_CopyObjTo(objge_KnowledgesUserMasterENS: clsge_KnowledgesUserMasterEN , objge_KnowledgesUserMasterENT: clsge_KnowledgesUserMasterEN ): void 
{
objge_KnowledgesUserMasterENT.mId = objge_KnowledgesUserMasterENS.mId; //mId
objge_KnowledgesUserMasterENT.courseId = objge_KnowledgesUserMasterENS.courseId; //课程Id
objge_KnowledgesUserMasterENT.userId = objge_KnowledgesUserMasterENS.userId; //用户ID
objge_KnowledgesUserMasterENT.courseKnowledgeId = objge_KnowledgesUserMasterENS.courseKnowledgeId; //知识点Id
objge_KnowledgesUserMasterENT.rightCount = objge_KnowledgesUserMasterENS.rightCount; //正确次数
objge_KnowledgesUserMasterENT.masterTypeId = objge_KnowledgesUserMasterENS.masterTypeId; //掌握类型Id
objge_KnowledgesUserMasterENT.errorCount = objge_KnowledgesUserMasterENS.errorCount; //错误次数
objge_KnowledgesUserMasterENT.masterLevelId = objge_KnowledgesUserMasterENS.masterLevelId; //掌握度Id
objge_KnowledgesUserMasterENT.masteryValue = objge_KnowledgesUserMasterENS.masteryValue; //掌握度
objge_KnowledgesUserMasterENT.updDate = objge_KnowledgesUserMasterENS.updDate; //修改日期
objge_KnowledgesUserMasterENT.goalValue = objge_KnowledgesUserMasterENS.goalValue; //目标值
objge_KnowledgesUserMasterENT.selfPerceivedValue = objge_KnowledgesUserMasterENS.selfPerceivedValue; //自我认为值
objge_KnowledgesUserMasterENT.updUser = objge_KnowledgesUserMasterENS.updUser; //修改人
objge_KnowledgesUserMasterENT.memo = objge_KnowledgesUserMasterENS.memo; //备注
objge_KnowledgesUserMasterENT.sfUpdFldSetStr = objge_KnowledgesUserMasterENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objge_KnowledgesUserMasterENS:源对象
 * @param objge_KnowledgesUserMasterENT:目标对象
*/
export  function ge_KnowledgesUserMaster_GetObjFromJsonObj(objge_KnowledgesUserMasterENS: clsge_KnowledgesUserMasterEN): clsge_KnowledgesUserMasterEN 
{
 const objge_KnowledgesUserMasterENT: clsge_KnowledgesUserMasterEN = new clsge_KnowledgesUserMasterEN();
ObjectAssign(objge_KnowledgesUserMasterENT, objge_KnowledgesUserMasterENS);
 return objge_KnowledgesUserMasterENT;
}
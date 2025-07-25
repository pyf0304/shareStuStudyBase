
 /**
 * 类名:clscc_CourseSchoolRelationWApi
 * 表名:cc_CourseSchoolRelation(01120333)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:34:11
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
 * 课程和学校关系(cc_CourseSchoolRelation)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { GetStrLen,tzDataType,Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { clscc_CourseSchoolRelationEN } from "@/ts/L0Entity/CourseManage/clscc_CourseSchoolRelationEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const cc_CourseSchoolRelation_Controller = "cc_CourseSchoolRelationApi";
 export const cc_CourseSchoolRelation_ConstructorName = "cc_CourseSchoolRelation";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function cc_CourseSchoolRelation_GetObjBymIdAsync(lngmId: number): Promise<clscc_CourseSchoolRelationEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clscc_CourseSchoolRelationWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const objcc_CourseSchoolRelation = cc_CourseSchoolRelation_GetObjFromJsonObj(returnObj);
return objcc_CourseSchoolRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function cc_CourseSchoolRelation_SortFunDefa(a:clscc_CourseSchoolRelationEN , b:clscc_CourseSchoolRelationEN): number 
{
return a.mId-b.mId;
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
export  function cc_CourseSchoolRelation_SortFunDefa2Fld(a:clscc_CourseSchoolRelationEN , b:clscc_CourseSchoolRelationEN): number 
{
if (a.idSchool == b.idSchool) return a.courseId.localeCompare(b.courseId);
else return a.idSchool.localeCompare(b.idSchool);
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
export  function cc_CourseSchoolRelation_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clscc_CourseSchoolRelationEN.con_mId:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
return a.mId-b.mId;
}
case clscc_CourseSchoolRelationEN.con_IdSchool:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clscc_CourseSchoolRelationEN.con_CourseId:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clscc_CourseSchoolRelationEN.con_UpdDate:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clscc_CourseSchoolRelationEN.con_UpdUser:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
return a.updUser.localeCompare(b.updUser);
}
case clscc_CourseSchoolRelationEN.con_Memo:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseSchoolRelation]中不存在!(in ${ cc_CourseSchoolRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clscc_CourseSchoolRelationEN.con_mId:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
return b.mId-a.mId;
}
case clscc_CourseSchoolRelationEN.con_IdSchool:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clscc_CourseSchoolRelationEN.con_CourseId:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clscc_CourseSchoolRelationEN.con_UpdDate:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clscc_CourseSchoolRelationEN.con_UpdUser:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
return b.updUser.localeCompare(a.updUser);
}
case clscc_CourseSchoolRelationEN.con_Memo:
return (a: clscc_CourseSchoolRelationEN, b: clscc_CourseSchoolRelationEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseSchoolRelation]中不存在!(in ${ cc_CourseSchoolRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function cc_CourseSchoolRelation_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clscc_CourseSchoolRelationEN.con_mId:
return (obj: clscc_CourseSchoolRelationEN) => {
return obj.mId === value;
}
case clscc_CourseSchoolRelationEN.con_IdSchool:
return (obj: clscc_CourseSchoolRelationEN) => {
return obj.idSchool === value;
}
case clscc_CourseSchoolRelationEN.con_CourseId:
return (obj: clscc_CourseSchoolRelationEN) => {
return obj.courseId === value;
}
case clscc_CourseSchoolRelationEN.con_UpdDate:
return (obj: clscc_CourseSchoolRelationEN) => {
return obj.updDate === value;
}
case clscc_CourseSchoolRelationEN.con_UpdUser:
return (obj: clscc_CourseSchoolRelationEN) => {
return obj.updUser === value;
}
case clscc_CourseSchoolRelationEN.con_Memo:
return (obj: clscc_CourseSchoolRelationEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[cc_CourseSchoolRelation]中不存在!(in ${ cc_CourseSchoolRelation_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[cc_CourseSchoolRelation__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseSchoolRelation_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetFirstObjAsync(strWhereCond: string): Promise<clscc_CourseSchoolRelationEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const objcc_CourseSchoolRelation = cc_CourseSchoolRelation_GetObjFromJsonObj(returnObj);
return objcc_CourseSchoolRelation;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetObjLstAsync(strWhereCond: string): Promise<Array<clscc_CourseSchoolRelationEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseSchoolRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clscc_CourseSchoolRelationEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseSchoolRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clscc_CourseSchoolRelationEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseSchoolRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clscc_CourseSchoolRelationEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = cc_CourseSchoolRelation_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export  async function cc_CourseSchoolRelation_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_Delcc_CourseSchoolRelationsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delcc_CourseSchoolRelationsAsync";
const strAction = "Delcc_CourseSchoolRelations";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_Delcc_CourseSchoolRelationsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delcc_CourseSchoolRelationsByCondAsync";
const strAction = "Delcc_CourseSchoolRelationsByCond";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseSchoolRelationEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function cc_CourseSchoolRelation_AddNewRecordAsync(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objcc_CourseSchoolRelationEN);
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseSchoolRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_AddNewObjSave(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
cc_CourseSchoolRelation_CheckPropertyNew(objcc_CourseSchoolRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseSchoolRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseSchoolRelation_CheckUniCond4Add(objcc_CourseSchoolRelationEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await cc_CourseSchoolRelation_AddNewRecordAsync(objcc_CourseSchoolRelationEN);
if (returnBool == true)
{
//cc_CourseSchoolRelation_ReFreshCache();
}
else
{
const strInfo = `添加[课程和学校关系(cc_CourseSchoolRelation)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objcc_CourseSchoolRelationEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ cc_CourseSchoolRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function cc_CourseSchoolRelation_CheckUniCond4Add(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseSchoolRelation_GetUniCondStr(objcc_CourseSchoolRelationEN);
const bolIsExistCondition = await cc_CourseSchoolRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseSchoolRelation_CheckUniCond4Update(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): Promise<boolean>{
const strUniquenessCondition = cc_CourseSchoolRelation_GetUniCondStr4Update(objcc_CourseSchoolRelationEN);
const bolIsExistCondition = await cc_CourseSchoolRelation_IsExistRecordAsync(strUniquenessCondition);
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
export  async function cc_CourseSchoolRelation_UpdateObjSave(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objcc_CourseSchoolRelationEN.sfUpdFldSetStr = objcc_CourseSchoolRelationEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_CourseSchoolRelationEN.mId == 0 || objcc_CourseSchoolRelationEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_CourseSchoolRelation_CheckProperty4Update(objcc_CourseSchoolRelationEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ cc_CourseSchoolRelation_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await cc_CourseSchoolRelation_CheckUniCond4Update(objcc_CourseSchoolRelationEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_CourseSchoolRelation_UpdateRecordAsync(objcc_CourseSchoolRelationEN);
if (returnBool == true)
{
//cc_CourseSchoolRelation_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ cc_CourseSchoolRelation_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objcc_CourseSchoolRelationEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function cc_CourseSchoolRelation_AddNewRecordWithReturnKeyAsync(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseSchoolRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseSchoolRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseSchoolRelation_UpdateRecordAsync(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objcc_CourseSchoolRelationEN.sfUpdFldSetStr === undefined || objcc_CourseSchoolRelationEN.sfUpdFldSetStr === null || objcc_CourseSchoolRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseSchoolRelationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseSchoolRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseSchoolRelationEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function cc_CourseSchoolRelation_EditRecordExAsync(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objcc_CourseSchoolRelationEN.sfUpdFldSetStr === undefined || objcc_CourseSchoolRelationEN.sfUpdFldSetStr === null || objcc_CourseSchoolRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseSchoolRelationEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseSchoolRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
 * @param objcc_CourseSchoolRelationEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function cc_CourseSchoolRelation_UpdateWithConditionAsync(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objcc_CourseSchoolRelationEN.sfUpdFldSetStr === undefined || objcc_CourseSchoolRelationEN.sfUpdFldSetStr === null || objcc_CourseSchoolRelationEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objcc_CourseSchoolRelationEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);
objcc_CourseSchoolRelationEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objcc_CourseSchoolRelationEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  async function cc_CourseSchoolRelation_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(cc_CourseSchoolRelation_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, cc_CourseSchoolRelation_ConstructorName, strThisFuncName);
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
export  function cc_CourseSchoolRelation_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function cc_CourseSchoolRelation_CheckPropertyNew(pobjcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.courseId) === true 
 || pobjcc_CourseSchoolRelationEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 课程和学校关系)!(clscc_CourseSchoolRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updUser) === true )
{
 throw new Error(`(errid:Watl000411)字段[修改人]不能为空(In 课程和学校关系)!(clscc_CourseSchoolRelationBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.idSchool) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.idSchool}(clscc_CourseSchoolRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.courseId) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.courseId}(clscc_CourseSchoolRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updDate) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.updDate}(clscc_CourseSchoolRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updUser) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.updUser}(clscc_CourseSchoolRelationBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.memo) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.memo}(clscc_CourseSchoolRelationBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_CourseSchoolRelationEN.mId && undefined !== pobjcc_CourseSchoolRelationEN.mId && tzDataType.isNumber(pobjcc_CourseSchoolRelationEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjcc_CourseSchoolRelationEN.mId}], 非法,应该为数值型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.idSchool) == false && undefined !== pobjcc_CourseSchoolRelationEN.idSchool && tzDataType.isString(pobjcc_CourseSchoolRelationEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjcc_CourseSchoolRelationEN.idSchool}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.courseId) == false && undefined !== pobjcc_CourseSchoolRelationEN.courseId && tzDataType.isString(pobjcc_CourseSchoolRelationEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjcc_CourseSchoolRelationEN.courseId}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updDate) == false && undefined !== pobjcc_CourseSchoolRelationEN.updDate && tzDataType.isString(pobjcc_CourseSchoolRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjcc_CourseSchoolRelationEN.updDate}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updUser) == false && undefined !== pobjcc_CourseSchoolRelationEN.updUser && tzDataType.isString(pobjcc_CourseSchoolRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjcc_CourseSchoolRelationEN.updUser}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.memo) == false && undefined !== pobjcc_CourseSchoolRelationEN.memo && tzDataType.isString(pobjcc_CourseSchoolRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjcc_CourseSchoolRelationEN.memo}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.courseId) == false && pobjcc_CourseSchoolRelationEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseSchoolRelationEN.courseId) !=  8)
{
 throw ("(errid:Watl000415)字段[课程Id]作为外键字段,长度应该为8(In 课程和学校关系)!(clscc_CourseSchoolRelationBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function cc_CourseSchoolRelation_CheckProperty4Update(pobjcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.idSchool) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.idSchool}(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.courseId) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.courseId}(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updDate) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.updDate}(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updUser) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.updUser}(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.memo) == false && GetStrLen(pobjcc_CourseSchoolRelationEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 课程和学校关系(cc_CourseSchoolRelation))!值:${pobjcc_CourseSchoolRelationEN.memo}(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjcc_CourseSchoolRelationEN.mId && undefined !== pobjcc_CourseSchoolRelationEN.mId && tzDataType.isNumber(pobjcc_CourseSchoolRelationEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjcc_CourseSchoolRelationEN.mId}], 非法,应该为数值型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.idSchool) == false && undefined !== pobjcc_CourseSchoolRelationEN.idSchool && tzDataType.isString(pobjcc_CourseSchoolRelationEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjcc_CourseSchoolRelationEN.idSchool}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.courseId) == false && undefined !== pobjcc_CourseSchoolRelationEN.courseId && tzDataType.isString(pobjcc_CourseSchoolRelationEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjcc_CourseSchoolRelationEN.courseId}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updDate) == false && undefined !== pobjcc_CourseSchoolRelationEN.updDate && tzDataType.isString(pobjcc_CourseSchoolRelationEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjcc_CourseSchoolRelationEN.updDate}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.updUser) == false && undefined !== pobjcc_CourseSchoolRelationEN.updUser && tzDataType.isString(pobjcc_CourseSchoolRelationEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjcc_CourseSchoolRelationEN.updUser}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.memo) == false && undefined !== pobjcc_CourseSchoolRelationEN.memo && tzDataType.isString(pobjcc_CourseSchoolRelationEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjcc_CourseSchoolRelationEN.memo}], 非法,应该为字符型(In 课程和学校关系(cc_CourseSchoolRelation))!(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjcc_CourseSchoolRelationEN.mId 
 || pobjcc_CourseSchoolRelationEN.mId != null && pobjcc_CourseSchoolRelationEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 课程和学校关系)!(clscc_CourseSchoolRelationBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjcc_CourseSchoolRelationEN.courseId) == false && pobjcc_CourseSchoolRelationEN.courseId != '[nuull]' && GetStrLen(pobjcc_CourseSchoolRelationEN.courseId) !=  8)
{
 throw ("(errid:Watl000418)字段[课程Id]作为外键字段,长度应该为8(In 课程和学校关系)!(clscc_CourseSchoolRelationBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_CourseSchoolRelation_GetJSONStrByObj (pobjcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN): string
{
pobjcc_CourseSchoolRelationEN.sfUpdFldSetStr = pobjcc_CourseSchoolRelationEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjcc_CourseSchoolRelationEN);
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
export  function cc_CourseSchoolRelation_GetObjLstByJSONStr (strJSON: string): Array<clscc_CourseSchoolRelationEN>
{
let arrcc_CourseSchoolRelationObjLst = new Array<clscc_CourseSchoolRelationEN>();
if (strJSON === "")
{
return arrcc_CourseSchoolRelationObjLst;
}
try
{
arrcc_CourseSchoolRelationObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrcc_CourseSchoolRelationObjLst;
}
return arrcc_CourseSchoolRelationObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrcc_CourseSchoolRelationObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function cc_CourseSchoolRelation_GetObjLstByJSONObjLst (arrcc_CourseSchoolRelationObjLstS: Array<clscc_CourseSchoolRelationEN>): Array<clscc_CourseSchoolRelationEN>
{
const arrcc_CourseSchoolRelationObjLst = new Array<clscc_CourseSchoolRelationEN>();
for (const objInFor of arrcc_CourseSchoolRelationObjLstS) {
const obj1 = cc_CourseSchoolRelation_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrcc_CourseSchoolRelationObjLst.push(obj1);
}
return arrcc_CourseSchoolRelationObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function cc_CourseSchoolRelation_GetObjByJSONStr (strJSON: string): clscc_CourseSchoolRelationEN
{
let pobjcc_CourseSchoolRelationEN = new clscc_CourseSchoolRelationEN();
if (strJSON === "")
{
return pobjcc_CourseSchoolRelationEN;
}
try
{
pobjcc_CourseSchoolRelationEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjcc_CourseSchoolRelationEN;
}
return pobjcc_CourseSchoolRelationEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function cc_CourseSchoolRelation_GetCombineCondition(objcc_CourseSchoolRelationCond: clscc_CourseSchoolRelationEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objcc_CourseSchoolRelationCond.dicFldComparisonOp, clscc_CourseSchoolRelationEN.con_mId) == true)
{
const strComparisonOpmId:string = objcc_CourseSchoolRelationCond.dicFldComparisonOp[clscc_CourseSchoolRelationEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clscc_CourseSchoolRelationEN.con_mId, objcc_CourseSchoolRelationCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseSchoolRelationCond.dicFldComparisonOp, clscc_CourseSchoolRelationEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objcc_CourseSchoolRelationCond.dicFldComparisonOp[clscc_CourseSchoolRelationEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseSchoolRelationEN.con_IdSchool, objcc_CourseSchoolRelationCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseSchoolRelationCond.dicFldComparisonOp, clscc_CourseSchoolRelationEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objcc_CourseSchoolRelationCond.dicFldComparisonOp[clscc_CourseSchoolRelationEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseSchoolRelationEN.con_CourseId, objcc_CourseSchoolRelationCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseSchoolRelationCond.dicFldComparisonOp, clscc_CourseSchoolRelationEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objcc_CourseSchoolRelationCond.dicFldComparisonOp[clscc_CourseSchoolRelationEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseSchoolRelationEN.con_UpdDate, objcc_CourseSchoolRelationCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseSchoolRelationCond.dicFldComparisonOp, clscc_CourseSchoolRelationEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objcc_CourseSchoolRelationCond.dicFldComparisonOp[clscc_CourseSchoolRelationEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseSchoolRelationEN.con_UpdUser, objcc_CourseSchoolRelationCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objcc_CourseSchoolRelationCond.dicFldComparisonOp, clscc_CourseSchoolRelationEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objcc_CourseSchoolRelationCond.dicFldComparisonOp[clscc_CourseSchoolRelationEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clscc_CourseSchoolRelationEN.con_Memo, objcc_CourseSchoolRelationCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseSchoolRelation(课程和学校关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strIdSchool: 学校流水号(要求唯一的字段)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseSchoolRelation_GetUniCondStr(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and IdSchool = '{0}'", objcc_CourseSchoolRelationEN.idSchool);
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_CourseSchoolRelationEN.courseId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--cc_CourseSchoolRelation(课程和学校关系),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strIdSchool: 学校流水号(要求唯一的字段)
 * @param strCourseId: 课程Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function cc_CourseSchoolRelation_GetUniCondStr4Update(objcc_CourseSchoolRelationEN: clscc_CourseSchoolRelationEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objcc_CourseSchoolRelationEN.mId);
 strWhereCond +=  Format(" and IdSchool = '{0}'", objcc_CourseSchoolRelationEN.idSchool);
 strWhereCond +=  Format(" and CourseId = '{0}'", objcc_CourseSchoolRelationEN.courseId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objcc_CourseSchoolRelationENS:源对象
 * @param objcc_CourseSchoolRelationENT:目标对象
*/
export  function cc_CourseSchoolRelation_CopyObjTo(objcc_CourseSchoolRelationENS: clscc_CourseSchoolRelationEN , objcc_CourseSchoolRelationENT: clscc_CourseSchoolRelationEN ): void 
{
objcc_CourseSchoolRelationENT.mId = objcc_CourseSchoolRelationENS.mId; //mId
objcc_CourseSchoolRelationENT.idSchool = objcc_CourseSchoolRelationENS.idSchool; //学校流水号
objcc_CourseSchoolRelationENT.courseId = objcc_CourseSchoolRelationENS.courseId; //课程Id
objcc_CourseSchoolRelationENT.updDate = objcc_CourseSchoolRelationENS.updDate; //修改日期
objcc_CourseSchoolRelationENT.updUser = objcc_CourseSchoolRelationENS.updUser; //修改人
objcc_CourseSchoolRelationENT.memo = objcc_CourseSchoolRelationENS.memo; //备注
objcc_CourseSchoolRelationENT.sfUpdFldSetStr = objcc_CourseSchoolRelationENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objcc_CourseSchoolRelationENS:源对象
 * @param objcc_CourseSchoolRelationENT:目标对象
*/
export  function cc_CourseSchoolRelation_GetObjFromJsonObj(objcc_CourseSchoolRelationENS: clscc_CourseSchoolRelationEN): clscc_CourseSchoolRelationEN 
{
 const objcc_CourseSchoolRelationENT: clscc_CourseSchoolRelationEN = new clscc_CourseSchoolRelationEN();
ObjectAssign(objcc_CourseSchoolRelationENT, objcc_CourseSchoolRelationENS);
 return objcc_CourseSchoolRelationENT;
}
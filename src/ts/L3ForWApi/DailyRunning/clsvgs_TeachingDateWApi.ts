
 /**
 * 类名:clsvgs_TeachingDateWApi
 * 表名:vgs_TeachingDate(01120687)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:51
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
 * vgs_TeachingDate(vgs_TeachingDate)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvgs_TeachingDateEN } from "@/ts/L0Entity/DailyRunning/clsvgs_TeachingDateEN";
import { GetExceptionStr, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vgs_TeachingDate_Controller = "vgs_TeachingDateApi";
 export const vgs_TeachingDate_ConstructorName = "vgs_TeachingDate";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vgs_TeachingDate_GetObjBymIdAsync(lngmId: number): Promise<clsvgs_TeachingDateEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvgs_TeachingDateWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const objvgs_TeachingDate = vgs_TeachingDate_GetObjFromJsonObj(returnObj);
return objvgs_TeachingDate;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vgs_TeachingDate_SortFunDefa(a:clsvgs_TeachingDateEN , b:clsvgs_TeachingDateEN): number 
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
export  function vgs_TeachingDate_SortFunDefa2Fld(a:clsvgs_TeachingDateEN , b:clsvgs_TeachingDateEN): number 
{
if (a.currEduClsId == b.currEduClsId) return a.eduClsName.localeCompare(b.eduClsName);
else return a.currEduClsId.localeCompare(b.currEduClsId);
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
export  function vgs_TeachingDate_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvgs_TeachingDateEN.con_mId:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
return a.mId-b.mId;
}
case clsvgs_TeachingDateEN.con_CurrEduClsId:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (a.currEduClsId == null) return -1;
if (b.currEduClsId == null) return 1;
return a.currEduClsId.localeCompare(b.currEduClsId);
}
case clsvgs_TeachingDateEN.con_EduClsName:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (a.eduClsName == null) return -1;
if (b.eduClsName == null) return 1;
return a.eduClsName.localeCompare(b.eduClsName);
}
case clsvgs_TeachingDateEN.con_Memo:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvgs_TeachingDateEN.con_UpdDate:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvgs_TeachingDateEN.con_EndDate:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (a.endDate == null) return -1;
if (b.endDate == null) return 1;
return a.endDate.localeCompare(b.endDate);
}
case clsvgs_TeachingDateEN.con_StartDate:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (a.startDate == null) return -1;
if (b.startDate == null) return 1;
return a.startDate.localeCompare(b.startDate);
}
case clsvgs_TeachingDateEN.con_IdCurrEduCls:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (a.idCurrEduCls == null) return -1;
if (b.idCurrEduCls == null) return 1;
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvgs_TeachingDateEN.con_UpdUser:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_TeachingDate]中不存在!(in ${ vgs_TeachingDate_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvgs_TeachingDateEN.con_mId:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
return b.mId-a.mId;
}
case clsvgs_TeachingDateEN.con_CurrEduClsId:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (b.currEduClsId == null) return -1;
if (a.currEduClsId == null) return 1;
return b.currEduClsId.localeCompare(a.currEduClsId);
}
case clsvgs_TeachingDateEN.con_EduClsName:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (b.eduClsName == null) return -1;
if (a.eduClsName == null) return 1;
return b.eduClsName.localeCompare(a.eduClsName);
}
case clsvgs_TeachingDateEN.con_Memo:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvgs_TeachingDateEN.con_UpdDate:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvgs_TeachingDateEN.con_EndDate:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (b.endDate == null) return -1;
if (a.endDate == null) return 1;
return b.endDate.localeCompare(a.endDate);
}
case clsvgs_TeachingDateEN.con_StartDate:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (b.startDate == null) return -1;
if (a.startDate == null) return 1;
return b.startDate.localeCompare(a.startDate);
}
case clsvgs_TeachingDateEN.con_IdCurrEduCls:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (b.idCurrEduCls == null) return -1;
if (a.idCurrEduCls == null) return 1;
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvgs_TeachingDateEN.con_UpdUser:
return (a: clsvgs_TeachingDateEN, b: clsvgs_TeachingDateEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_TeachingDate]中不存在!(in ${ vgs_TeachingDate_ConstructorName}.${ strThisFuncName})`;
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
export  async function vgs_TeachingDate_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvgs_TeachingDateEN.con_mId:
return (obj: clsvgs_TeachingDateEN) => {
return obj.mId === value;
}
case clsvgs_TeachingDateEN.con_CurrEduClsId:
return (obj: clsvgs_TeachingDateEN) => {
return obj.currEduClsId === value;
}
case clsvgs_TeachingDateEN.con_EduClsName:
return (obj: clsvgs_TeachingDateEN) => {
return obj.eduClsName === value;
}
case clsvgs_TeachingDateEN.con_Memo:
return (obj: clsvgs_TeachingDateEN) => {
return obj.memo === value;
}
case clsvgs_TeachingDateEN.con_UpdDate:
return (obj: clsvgs_TeachingDateEN) => {
return obj.updDate === value;
}
case clsvgs_TeachingDateEN.con_EndDate:
return (obj: clsvgs_TeachingDateEN) => {
return obj.endDate === value;
}
case clsvgs_TeachingDateEN.con_StartDate:
return (obj: clsvgs_TeachingDateEN) => {
return obj.startDate === value;
}
case clsvgs_TeachingDateEN.con_IdCurrEduCls:
return (obj: clsvgs_TeachingDateEN) => {
return obj.idCurrEduCls === value;
}
case clsvgs_TeachingDateEN.con_UpdUser:
return (obj: clsvgs_TeachingDateEN) => {
return obj.updUser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vgs_TeachingDate]中不存在!(in ${ vgs_TeachingDate_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vgs_TeachingDate__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vgs_TeachingDate_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_GetFirstObjAsync(strWhereCond: string): Promise<clsvgs_TeachingDateEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const objvgs_TeachingDate = vgs_TeachingDate_GetObjFromJsonObj(returnObj);
return objvgs_TeachingDate;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvgs_TeachingDateEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvgs_TeachingDateEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvgs_TeachingDateEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvgs_TeachingDateEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vgs_TeachingDate_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

 /**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export  async function vgs_TeachingDate_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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
export  async function vgs_TeachingDate_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vgs_TeachingDate_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vgs_TeachingDate_ConstructorName, strThisFuncName);
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

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
*/
export  function vgs_TeachingDate_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_TeachingDate_GetJSONStrByObj (pobjvgs_TeachingDateEN: clsvgs_TeachingDateEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvgs_TeachingDateEN);
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
export  function vgs_TeachingDate_GetObjLstByJSONStr (strJSON: string): Array<clsvgs_TeachingDateEN>
{
let arrvgs_TeachingDateObjLst = new Array<clsvgs_TeachingDateEN>();
if (strJSON === "")
{
return arrvgs_TeachingDateObjLst;
}
try
{
arrvgs_TeachingDateObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvgs_TeachingDateObjLst;
}
return arrvgs_TeachingDateObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_TeachingDateObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vgs_TeachingDate_GetObjLstByJSONObjLst (arrvgs_TeachingDateObjLstS: Array<clsvgs_TeachingDateEN>): Array<clsvgs_TeachingDateEN>
{
const arrvgs_TeachingDateObjLst = new Array<clsvgs_TeachingDateEN>();
for (const objInFor of arrvgs_TeachingDateObjLstS) {
const obj1 = vgs_TeachingDate_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvgs_TeachingDateObjLst.push(obj1);
}
return arrvgs_TeachingDateObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vgs_TeachingDate_GetObjByJSONStr (strJSON: string): clsvgs_TeachingDateEN
{
let pobjvgs_TeachingDateEN = new clsvgs_TeachingDateEN();
if (strJSON === "")
{
return pobjvgs_TeachingDateEN;
}
try
{
pobjvgs_TeachingDateEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvgs_TeachingDateEN;
}
return pobjvgs_TeachingDateEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vgs_TeachingDate_GetCombineCondition(objvgs_TeachingDateCond: clsvgs_TeachingDateEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_mId) == true)
{
const strComparisonOpmId:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvgs_TeachingDateEN.con_mId, objvgs_TeachingDateCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_CurrEduClsId) == true)
{
const strComparisonOpCurrEduClsId:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_CurrEduClsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TeachingDateEN.con_CurrEduClsId, objvgs_TeachingDateCond.currEduClsId, strComparisonOpCurrEduClsId);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_EduClsName) == true)
{
const strComparisonOpEduClsName:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_EduClsName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TeachingDateEN.con_EduClsName, objvgs_TeachingDateCond.eduClsName, strComparisonOpEduClsName);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TeachingDateEN.con_Memo, objvgs_TeachingDateCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TeachingDateEN.con_UpdDate, objvgs_TeachingDateCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_EndDate) == true)
{
const strComparisonOpEndDate:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_EndDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TeachingDateEN.con_EndDate, objvgs_TeachingDateCond.endDate, strComparisonOpEndDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_StartDate) == true)
{
const strComparisonOpStartDate:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_StartDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TeachingDateEN.con_StartDate, objvgs_TeachingDateCond.startDate, strComparisonOpStartDate);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TeachingDateEN.con_IdCurrEduCls, objvgs_TeachingDateCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvgs_TeachingDateCond.dicFldComparisonOp, clsvgs_TeachingDateEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvgs_TeachingDateCond.dicFldComparisonOp[clsvgs_TeachingDateEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvgs_TeachingDateEN.con_UpdUser, objvgs_TeachingDateCond.updUser, strComparisonOpUpdUser);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_TeachingDateENS:源对象
 * @param objvgs_TeachingDateENT:目标对象
*/
export  function vgs_TeachingDate_CopyObjTo(objvgs_TeachingDateENS: clsvgs_TeachingDateEN , objvgs_TeachingDateENT: clsvgs_TeachingDateEN ): void 
{
objvgs_TeachingDateENT.mId = objvgs_TeachingDateENS.mId; //mId
objvgs_TeachingDateENT.currEduClsId = objvgs_TeachingDateENS.currEduClsId; //教学班Id
objvgs_TeachingDateENT.eduClsName = objvgs_TeachingDateENS.eduClsName; //教学班名
objvgs_TeachingDateENT.memo = objvgs_TeachingDateENS.memo; //备注
objvgs_TeachingDateENT.updDate = objvgs_TeachingDateENS.updDate; //修改日期
objvgs_TeachingDateENT.endDate = objvgs_TeachingDateENS.endDate; //截止日期
objvgs_TeachingDateENT.startDate = objvgs_TeachingDateENS.startDate; //开始日期
objvgs_TeachingDateENT.idCurrEduCls = objvgs_TeachingDateENS.idCurrEduCls; //教学班流水号
objvgs_TeachingDateENT.updUser = objvgs_TeachingDateENS.updUser; //修改人
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_TeachingDateENS:源对象
 * @param objvgs_TeachingDateENT:目标对象
*/
export  function vgs_TeachingDate_GetObjFromJsonObj(objvgs_TeachingDateENS: clsvgs_TeachingDateEN): clsvgs_TeachingDateEN 
{
 const objvgs_TeachingDateENT: clsvgs_TeachingDateEN = new clsvgs_TeachingDateEN();
ObjectAssign(objvgs_TeachingDateENT, objvgs_TeachingDateENS);
 return objvgs_TeachingDateENT;
}
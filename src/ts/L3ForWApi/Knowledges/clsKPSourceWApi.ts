
 /**
 * 类名:clsKPSourceWApi
 * 表名:KPSource(01120995)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:04
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点来源(KPSource)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月02日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsKPSourceEN } from "@/ts/L0Entity/Knowledges/clsKPSourceEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const kPSource_Controller = "KPSourceApi";
 export const kPSource_ConstructorName = "kPSource";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strKpSourceId:关键字
 * @returns 对象
 **/
export  async function KPSource_GetObjByKpSourceIdAsync(strKpSourceId: string): Promise<clsKPSourceEN|null>  
{
const strThisFuncName = "GetObjByKpSourceIdAsync";

if (IsNullOrEmpty(strKpSourceId) == true)
{
  const strMsg = Format("参数:[strKpSourceId]不能为空!(In clsKPSourceWApi.GetObjByKpSourceIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strKpSourceId.length != 2)
{
const strMsg = Format("缓存分类变量:[strKpSourceId]的长度:[{0}]不正确!(clsKPSourceWApi.GetObjByKpSourceIdAsync)", strKpSourceId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByKpSourceId";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strKpSourceId,
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
const objKPSource = KPSource_GetObjFromJsonObj(returnObj);
return objKPSource;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param strKpSourceId:所给的关键字
 * @returns 对象
*/
export  async function KPSource_GetObjByKpSourceIdlocalStorage(strKpSourceId: string) {
const strThisFuncName = "GetObjByKpSourceIdlocalStorage";

if (IsNullOrEmpty(strKpSourceId) == true)
{
  const strMsg = Format("参数:[strKpSourceId]不能为空!(In clsKPSourceWApi.GetObjByKpSourceIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strKpSourceId.length != 2)
{
const strMsg = Format("缓存分类变量:[strKpSourceId]的长度:[{0}]不正确!(clsKPSourceWApi.GetObjByKpSourceIdlocalStorage)", strKpSourceId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsKPSourceEN._CurrTabName, strKpSourceId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objKPSourceCache: clsKPSourceEN = JSON.parse(strTempObj);
return objKPSourceCache;
}
try
{
const objKPSource = await KPSource_GetObjByKpSourceIdAsync(strKpSourceId);
if (objKPSource != null)
{
localStorage.setItem(strKey, JSON.stringify(objKPSource));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objKPSource;
}
return objKPSource;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strKpSourceId, kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strKpSourceId:所给的关键字
 * @returns 对象
*/
export  async function KPSource_GetObjByKpSourceIdCache(strKpSourceId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByKpSourceIdCache";

if (IsNullOrEmpty(strKpSourceId) == true)
{
  const strMsg = Format("参数:[strKpSourceId]不能为空!(In clsKPSourceWApi.GetObjByKpSourceIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strKpSourceId.length != 2)
{
const strMsg = Format("缓存分类变量:[strKpSourceId]的长度:[{0}]不正确!(clsKPSourceWApi.GetObjByKpSourceIdCache)", strKpSourceId.length);
console.error(strMsg);
throw (strMsg);
}
const arrKPSourceObjLstCache = await KPSource_GetObjLstCache();
try
{
const arrKPSourceSel = arrKPSourceObjLstCache.filter(x => 
 x.kpSourceId == strKpSourceId );
let objKPSource: clsKPSourceEN;
if (arrKPSourceSel.length > 0)
{
objKPSource = arrKPSourceSel[0];
return objKPSource;
}
else
{
if (bolTryAsyncOnce == true)
{
const objKPSourceConst = await KPSource_GetObjByKpSourceIdAsync(strKpSourceId);
if (objKPSourceConst != null)
{
KPSource_ReFreshThisCache();
return objKPSourceConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strKpSourceId, kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objKPSource:所给的对象
 * @returns 对象
*/
export  async function KPSource_UpdateObjInLstCache(objKPSource: clsKPSourceEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrKPSourceObjLstCache = await KPSource_GetObjLstCache();
const obj = arrKPSourceObjLstCache.find(x => 
x.kpSourceId == objKPSource.kpSourceId);
if (obj != null)
{
objKPSource.kpSourceId = obj.kpSourceId;
ObjectAssign( obj, objKPSource);
}
else
{
arrKPSourceObjLstCache.push(objKPSource);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
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
export  function KPSource_SortFunDefa(a:clsKPSourceEN , b:clsKPSourceEN): number 
{
return a.kpSourceId.localeCompare(b.kpSourceId);
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
export  function KPSource_SortFunDefa2Fld(a:clsKPSourceEN , b:clsKPSourceEN): number 
{
if (a.kpSourceName == b.kpSourceName) return a.kpSourceEnName.localeCompare(b.kpSourceEnName);
else return a.kpSourceName.localeCompare(b.kpSourceName);
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
export  function KPSource_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsKPSourceEN.con_KpSourceId:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
return a.kpSourceId.localeCompare(b.kpSourceId);
}
case clsKPSourceEN.con_KpSourceName:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
return a.kpSourceName.localeCompare(b.kpSourceName);
}
case clsKPSourceEN.con_KpSourceEnName:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
return a.kpSourceEnName.localeCompare(b.kpSourceEnName);
}
case clsKPSourceEN.con_UpdDate:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsKPSourceEN.con_UpdUser:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KPSource]中不存在!(in ${ kPSource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsKPSourceEN.con_KpSourceId:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
return b.kpSourceId.localeCompare(a.kpSourceId);
}
case clsKPSourceEN.con_KpSourceName:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
return b.kpSourceName.localeCompare(a.kpSourceName);
}
case clsKPSourceEN.con_KpSourceEnName:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
return b.kpSourceEnName.localeCompare(a.kpSourceEnName);
}
case clsKPSourceEN.con_UpdDate:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsKPSourceEN.con_UpdUser:
return (a: clsKPSourceEN, b: clsKPSourceEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KPSource]中不存在!(in ${ kPSource_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strKpSourceId:所给的关键字
 * @returns 对象
*/
export  async function KPSource_GetNameByKpSourceIdCache(strKpSourceId: string) {

if (IsNullOrEmpty(strKpSourceId) == true)
{
  const strMsg = Format("参数:[strKpSourceId]不能为空!(In clsKPSourceWApi.GetNameByKpSourceIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strKpSourceId.length != 2)
{
const strMsg = Format("缓存分类变量:[strKpSourceId]的长度:[{0}]不正确!(clsKPSourceWApi.GetNameByKpSourceIdCache)", strKpSourceId.length);
console.error(strMsg);
throw (strMsg);
}
const arrKPSourceObjLstCache = await KPSource_GetObjLstCache();
if (arrKPSourceObjLstCache == null) return "";
try
{
const arrKPSourceSel = arrKPSourceObjLstCache.filter(x => 
 x.kpSourceId == strKpSourceId );
let objKPSource: clsKPSourceEN;
if (arrKPSourceSel.length > 0)
{
objKPSource = arrKPSourceSel[0];
return objKPSource.kpSourceName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strKpSourceId);
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
export  async function KPSource_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsKPSourceEN.con_KpSourceId:
return (obj: clsKPSourceEN) => {
return obj.kpSourceId === value;
}
case clsKPSourceEN.con_KpSourceName:
return (obj: clsKPSourceEN) => {
return obj.kpSourceName === value;
}
case clsKPSourceEN.con_KpSourceEnName:
return (obj: clsKPSourceEN) => {
return obj.kpSourceEnName === value;
}
case clsKPSourceEN.con_UpdDate:
return (obj: clsKPSourceEN) => {
return obj.updDate === value;
}
case clsKPSourceEN.con_UpdUser:
return (obj: clsKPSourceEN) => {
return obj.updUser === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KPSource]中不存在!(in ${ kPSource_ConstructorName}.${ strThisFuncName})`;
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
 * @returns 返回一个输出字段值
*/
export  async function KPSource_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsKPSourceEN.con_KpSourceId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsKPSourceEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsKPSourceEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strKpSourceId = strInValue;
if (IsNullOrEmpty(strKpSourceId) == true)
{
return "";
}
const objKPSource = await KPSource_GetObjByKpSourceIdCache(strKpSourceId );
if (objKPSource == null) return "";
if (objKPSource.GetFldValue(strOutFldName) == null) return "";
return objKPSource.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function KPSource_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsKPSourceEN.con_KpSourceId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrKPSource = await KPSource_GetObjLstCache();
if (arrKPSource == null) return [];
let arrKPSourceSel = arrKPSource;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrKPSourceSel = arrKPSourceSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrKPSourceSel.length == 0) return [];
return arrKPSourceSel.map(x=>x.kpSourceId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KPSource_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_GetFirstObjAsync(strWhereCond: string): Promise<clsKPSourceEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const objKPSource = KPSource_GetObjFromJsonObj(returnObj);
return objKPSource;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKPSourceEN._CurrTabName;
if (IsNullOrEmpty(clsKPSourceEN.WhereFormat) == false)
{
strWhereCond = clsKPSourceEN.WhereFormat;
}
if (IsNullOrEmpty(clsKPSourceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKPSourceEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrKPSourceExObjLstCache: Array<clsKPSourceEN> = CacheHelper.Get(strKey);
const arrKPSourceObjLstT = KPSource_GetObjLstByJSONObjLst(arrKPSourceExObjLstCache);
return arrKPSourceObjLstT;
}
try
{
const arrKPSourceExObjLst = await KPSource_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrKPSourceExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKPSourceExObjLst.length);
console.log(strInfo);
return arrKPSourceExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KPSource_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKPSourceEN._CurrTabName;
if (IsNullOrEmpty(clsKPSourceEN.WhereFormat) == false)
{
strWhereCond = clsKPSourceEN.WhereFormat;
}
if (IsNullOrEmpty(clsKPSourceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKPSourceEN.CacheAddiCondition);
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
const arrKPSourceExObjLstCache: Array<clsKPSourceEN> = JSON.parse(strTempObjLst);
const arrKPSourceObjLstT = KPSource_GetObjLstByJSONObjLst(arrKPSourceExObjLstCache);
return arrKPSourceObjLstT;
}
try
{
const arrKPSourceExObjLst = await KPSource_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrKPSourceExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKPSourceExObjLst.length);
console.log(strInfo);
return arrKPSourceExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KPSource_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKPSourceEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrKPSourceObjLstCache: Array<clsKPSourceEN> = JSON.parse(strTempObjLst);
return arrKPSourceObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function KPSource_GetObjLstAsync(strWhereCond: string): Promise<Array<clsKPSourceEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kPSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KPSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKPSourceEN._CurrTabName;
if (IsNullOrEmpty(clsKPSourceEN.WhereFormat) == false)
{
strWhereCond = clsKPSourceEN.WhereFormat;
}
if (IsNullOrEmpty(clsKPSourceEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKPSourceEN.CacheAddiCondition);
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
const arrKPSourceExObjLstCache: Array<clsKPSourceEN> = JSON.parse(strTempObjLst);
const arrKPSourceObjLstT = KPSource_GetObjLstByJSONObjLst(arrKPSourceExObjLstCache);
return arrKPSourceObjLstT;
}
try
{
const arrKPSourceExObjLst = await KPSource_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrKPSourceExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKPSourceExObjLst.length);
console.log(strInfo);
return arrKPSourceExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KPSource_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKPSourceEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrKPSourceObjLstCache: Array<clsKPSourceEN> = JSON.parse(strTempObjLst);
return arrKPSourceObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KPSource_GetObjLstCache(): Promise<Array<clsKPSourceEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrKPSourceObjLstCache;
switch (clsKPSourceEN.CacheModeId)
{
case "04"://sessionStorage
arrKPSourceObjLstCache = await KPSource_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrKPSourceObjLstCache = await KPSource_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrKPSourceObjLstCache = await KPSource_GetObjLstClientCache();
break;
default:
arrKPSourceObjLstCache = await KPSource_GetObjLstClientCache();
break;
}
return arrKPSourceObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KPSource_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrKPSourceObjLstCache;
switch (clsKPSourceEN.CacheModeId)
{
case "04"://sessionStorage
arrKPSourceObjLstCache = await KPSource_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrKPSourceObjLstCache = await KPSource_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrKPSourceObjLstCache = null;
break;
default:
arrKPSourceObjLstCache = null;
break;
}
return arrKPSourceObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrKpSourceIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function KPSource_GetSubObjLstCache(objKPSourceCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrKPSourceObjLstCache = await KPSource_GetObjLstCache();
let arrKPSourceSel = arrKPSourceObjLstCache;
if (objKPSourceCond.GetConditions().length == 0) return arrKPSourceSel;
try {
//console.log(sstrKeys);
for (const objCondition of objKPSourceCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKPSourceSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objKPSourceCond), kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKPSourceEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrKpSourceId:关键字列表
 * @returns 对象列表
 **/
export  async function KPSource_GetObjLstByKpSourceIdLstAsync(arrKpSourceId: Array<string>): Promise<Array<clsKPSourceEN>>  
{
const strThisFuncName = "GetObjLstByKpSourceIdLstAsync";
const strAction = "GetObjLstByKpSourceIdLst";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrKpSourceId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kPSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KPSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param arrstrKpSourceIdLst:关键字列表
 * @returns 对象列表
*/
export  async function KPSource_GetObjLstByKpSourceIdLstCache(arrKpSourceIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByKpSourceIdLstCache";
try
{
const arrKPSourceObjLstCache = await KPSource_GetObjLstCache();
const arrKPSourceSel = arrKPSourceObjLstCache.filter(x => arrKpSourceIdLst.indexOf(x.kpSourceId)>-1);
return arrKPSourceSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrKpSourceIdLst.join(","), kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsKPSourceEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kPSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KPSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsKPSourceEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", kPSource_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KPSource_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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

 /**
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strKpSourceId:关键字
 * @returns 获取删除的结果
 **/
export  async function KPSource_DelRecordAsync(strKpSourceId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(kPSource_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strKpSourceId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param arrKpSourceId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function KPSource_DelKPSourcesAsync(arrKpSourceId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelKPSourcesAsync";
const strAction = "DelKPSources";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrKpSourceId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
//该表没有应用在界面视图的列表区,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function KPSource_DelKPSourcesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelKPSourcesByCondAsync";
const strAction = "DelKPSourcesByCond";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param objKPSourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KPSource_AddNewRecordAsync(objKPSourceEN: clsKPSourceEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objKPSourceEN.kpSourceId === null || objKPSourceEN.kpSourceId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objKPSourceEN);
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKPSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param objKPSourceEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KPSource_AddNewRecordWithMaxIdAsync(objKPSourceEN: clsKPSourceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKPSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_AddNewObjSave(objKPSourceEN: clsKPSourceEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
KPSource_CheckPropertyNew(objKPSourceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ kPSource_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await KPSource_IsExistAsync(objKPSourceEN.kpSourceId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objKPSourceEN.kpSourceId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await KPSource_AddNewRecordAsync(objKPSourceEN);
if (returnBool == true)
{
KPSource_ReFreshCache();
}
else
{
const strInfo = `添加[知识点来源(KPSource)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objKPSourceEN.kpSourceId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ kPSource_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function KPSource_UpdateObjSave(objKPSourceEN: clsKPSourceEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objKPSourceEN.sfUpdFldSetStr = objKPSourceEN.updFldString;//设置哪些字段被修改(脏字段)
if (objKPSourceEN.kpSourceId == "" || objKPSourceEN.kpSourceId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
KPSource_CheckProperty4Update(objKPSourceEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ kPSource_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await KPSource_UpdateRecordAsync(objKPSourceEN);
if (returnBool == true)
{
KPSource_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ kPSource_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objKPSourceEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function KPSource_AddNewRecordWithReturnKeyAsync(objKPSourceEN: clsKPSourceEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKPSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param objKPSourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KPSource_UpdateRecordAsync(objKPSourceEN: clsKPSourceEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objKPSourceEN.sfUpdFldSetStr === undefined || objKPSourceEN.sfUpdFldSetStr === null || objKPSourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKPSourceEN.kpSourceId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKPSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param objKPSourceEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KPSource_EditRecordExAsync(objKPSourceEN: clsKPSourceEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objKPSourceEN.sfUpdFldSetStr === undefined || objKPSourceEN.sfUpdFldSetStr === null || objKPSourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKPSourceEN.kpSourceId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKPSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param objKPSourceEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KPSource_UpdateWithConditionAsync(objKPSourceEN: clsKPSourceEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objKPSourceEN.sfUpdFldSetStr === undefined || objKPSourceEN.sfUpdFldSetStr === null || objKPSourceEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKPSourceEN.kpSourceId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);
objKPSourceEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKPSourceEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)
 * @param objstrKpSourceIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function KPSource_IsExistRecordCache(objKPSourceCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrKPSourceObjLstCache = await KPSource_GetObjLstCache();
if (arrKPSourceObjLstCache == null) return false;
let arrKPSourceSel = arrKPSourceObjLstCache;
if (objKPSourceCond.GetConditions().length == 0) return arrKPSourceSel.length>0?true:false;
try {
for (const objCondition of objKPSourceCond.GetConditions()) {
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
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKPSourceSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objKPSourceCond), kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param strKpSourceId:所给的关键字
 * @returns 对象
*/
export  async function KPSource_IsExistCache(strKpSourceId:string) {
const strThisFuncName = "IsExistCache";
const arrKPSourceObjLstCache = await KPSource_GetObjLstCache();
if (arrKPSourceObjLstCache == null) return false;
try
{
const arrKPSourceSel = arrKPSourceObjLstCache.filter(x => x.kpSourceId == strKpSourceId);
if (arrKPSourceSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strKpSourceId, kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strKpSourceId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function KPSource_IsExistAsync(strKpSourceId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strKpSourceId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  async function KPSource_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
 * @param objKPSourceCond:条件对象
 * @returns 对象列表记录数
*/
export  async function KPSource_GetRecCountByCondCache(objKPSourceCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrKPSourceObjLstCache = await KPSource_GetObjLstCache();
if (arrKPSourceObjLstCache == null) return 0;
let arrKPSourceSel = arrKPSourceObjLstCache;
if (objKPSourceCond.GetConditions().length == 0) return arrKPSourceSel.length;
try {
for (const objCondition of objKPSourceCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKPSourceSel = arrKPSourceSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKPSourceSel = arrKPSourceSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKPSourceSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objKPSourceCond), kPSource_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}
/*该表的关键字类型不是字符型自增,不需要生成获取最大关键字函数!*/
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function KPSource_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(kPSource_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, kPSource_ConstructorName, strThisFuncName);
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
export  function KPSource_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
 **/
export  function KPSource_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsKPSourceEN._CurrTabName;
switch (clsKPSourceEN.CacheModeId)
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
clsKPSourceEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function KPSource_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsKPSourceEN._CurrTabName;
switch (clsKPSourceEN.CacheModeId)
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
clsKPSourceEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function KPSource_GetLastRefreshTime():string
{
if (clsKPSourceEN._RefreshTimeLst.length == 0) return "";
return clsKPSourceEN._RefreshTimeLst[clsKPSourceEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KPSource_BindDdl_KPSourceIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_KPSourceIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_KPSourceIdInDivCache");
const arrObjLstSel = await KPSource_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsKPSourceEN.con_KpSourceId, clsKPSourceEN.con_KpSourceName, "选来源...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KPSource_GetArrKPSource()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_KPSourceIdInDivCache");
const arrKPSource = new Array<clsKPSourceEN>();
const arrObjLstSel = await KPSource_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsKPSourceEN();
obj0.kpSourceId = '0';
obj0.kpSourceName = '选来源...';
arrKPSource.push(obj0);
arrObjLstSel.forEach(x => arrKPSource.push(x));
return arrKPSource;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KPSource_CheckPropertyNew(pobjKPSourceEN: clsKPSourceEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceName) === true )
{
 throw new Error(`(errid:Watl000411)字段[知识点来源名]不能为空(In 知识点来源)!(clsKPSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceEnName) === true )
{
 throw new Error(`(errid:Watl000411)字段[知识点来源英文名]不能为空(In 知识点来源)!(clsKPSourceBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceId) == false && GetStrLen(pobjKPSourceEN.kpSourceId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[知识点来源Id(kpSourceId)]的长度不能超过2(In 知识点来源(KPSource))!值:${pobjKPSourceEN.kpSourceId}(clsKPSourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceName) == false && GetStrLen(pobjKPSourceEN.kpSourceName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[知识点来源名(kpSourceName)]的长度不能超过30(In 知识点来源(KPSource))!值:${pobjKPSourceEN.kpSourceName}(clsKPSourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceEnName) == false && GetStrLen(pobjKPSourceEN.kpSourceEnName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[知识点来源英文名(kpSourceEnName)]的长度不能超过30(In 知识点来源(KPSource))!值:${pobjKPSourceEN.kpSourceEnName}(clsKPSourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.updDate) == false && GetStrLen(pobjKPSourceEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点来源(KPSource))!值:${pobjKPSourceEN.updDate}(clsKPSourceBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.updUser) == false && GetStrLen(pobjKPSourceEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点来源(KPSource))!值:${pobjKPSourceEN.updUser}(clsKPSourceBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceId) == false && undefined !== pobjKPSourceEN.kpSourceId && tzDataType.isString(pobjKPSourceEN.kpSourceId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点来源Id(kpSourceId)]的值:[${pobjKPSourceEN.kpSourceId}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceName) == false && undefined !== pobjKPSourceEN.kpSourceName && tzDataType.isString(pobjKPSourceEN.kpSourceName) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点来源名(kpSourceName)]的值:[${pobjKPSourceEN.kpSourceName}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceEnName) == false && undefined !== pobjKPSourceEN.kpSourceEnName && tzDataType.isString(pobjKPSourceEN.kpSourceEnName) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点来源英文名(kpSourceEnName)]的值:[${pobjKPSourceEN.kpSourceEnName}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.updDate) == false && undefined !== pobjKPSourceEN.updDate && tzDataType.isString(pobjKPSourceEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjKPSourceEN.updDate}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.updUser) == false && undefined !== pobjKPSourceEN.updUser && tzDataType.isString(pobjKPSourceEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjKPSourceEN.updUser}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KPSource_CheckProperty4Update(pobjKPSourceEN: clsKPSourceEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceId) == false && GetStrLen(pobjKPSourceEN.kpSourceId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[知识点来源Id(kpSourceId)]的长度不能超过2(In 知识点来源(KPSource))!值:${pobjKPSourceEN.kpSourceId}(clsKPSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceName) == false && GetStrLen(pobjKPSourceEN.kpSourceName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[知识点来源名(kpSourceName)]的长度不能超过30(In 知识点来源(KPSource))!值:${pobjKPSourceEN.kpSourceName}(clsKPSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceEnName) == false && GetStrLen(pobjKPSourceEN.kpSourceEnName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[知识点来源英文名(kpSourceEnName)]的长度不能超过30(In 知识点来源(KPSource))!值:${pobjKPSourceEN.kpSourceEnName}(clsKPSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.updDate) == false && GetStrLen(pobjKPSourceEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点来源(KPSource))!值:${pobjKPSourceEN.updDate}(clsKPSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.updUser) == false && GetStrLen(pobjKPSourceEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点来源(KPSource))!值:${pobjKPSourceEN.updUser}(clsKPSourceBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceId) == false && undefined !== pobjKPSourceEN.kpSourceId && tzDataType.isString(pobjKPSourceEN.kpSourceId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点来源Id(kpSourceId)]的值:[${pobjKPSourceEN.kpSourceId}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceName) == false && undefined !== pobjKPSourceEN.kpSourceName && tzDataType.isString(pobjKPSourceEN.kpSourceName) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点来源名(kpSourceName)]的值:[${pobjKPSourceEN.kpSourceName}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceEnName) == false && undefined !== pobjKPSourceEN.kpSourceEnName && tzDataType.isString(pobjKPSourceEN.kpSourceEnName) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点来源英文名(kpSourceEnName)]的值:[${pobjKPSourceEN.kpSourceEnName}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.updDate) == false && undefined !== pobjKPSourceEN.updDate && tzDataType.isString(pobjKPSourceEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjKPSourceEN.updDate}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKPSourceEN.updUser) == false && undefined !== pobjKPSourceEN.updUser && tzDataType.isString(pobjKPSourceEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjKPSourceEN.updUser}], 非法,应该为字符型(In 知识点来源(KPSource))!(clsKPSourceBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjKPSourceEN.kpSourceId) === true 
 || pobjKPSourceEN.kpSourceId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[知识点来源Id]不能为空(In 知识点来源)!(clsKPSourceBL:CheckProperty4Update)`);
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
export  function KPSource_GetJSONStrByObj (pobjKPSourceEN: clsKPSourceEN): string
{
pobjKPSourceEN.sfUpdFldSetStr = pobjKPSourceEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjKPSourceEN);
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
export  function KPSource_GetObjLstByJSONStr (strJSON: string): Array<clsKPSourceEN>
{
let arrKPSourceObjLst = new Array<clsKPSourceEN>();
if (strJSON === "")
{
return arrKPSourceObjLst;
}
try
{
arrKPSourceObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrKPSourceObjLst;
}
return arrKPSourceObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrKPSourceObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function KPSource_GetObjLstByJSONObjLst (arrKPSourceObjLstS: Array<clsKPSourceEN>): Array<clsKPSourceEN>
{
const arrKPSourceObjLst = new Array<clsKPSourceEN>();
for (const objInFor of arrKPSourceObjLstS) {
const obj1 = KPSource_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrKPSourceObjLst.push(obj1);
}
return arrKPSourceObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function KPSource_GetObjByJSONStr (strJSON: string): clsKPSourceEN
{
let pobjKPSourceEN = new clsKPSourceEN();
if (strJSON === "")
{
return pobjKPSourceEN;
}
try
{
pobjKPSourceEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjKPSourceEN;
}
return pobjKPSourceEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function KPSource_GetCombineCondition(objKPSourceCond: clsKPSourceEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objKPSourceCond.dicFldComparisonOp, clsKPSourceEN.con_KpSourceId) == true)
{
const strComparisonOpKpSourceId:string = objKPSourceCond.dicFldComparisonOp[clsKPSourceEN.con_KpSourceId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKPSourceEN.con_KpSourceId, objKPSourceCond.kpSourceId, strComparisonOpKpSourceId);
}
if (Object.prototype.hasOwnProperty.call(objKPSourceCond.dicFldComparisonOp, clsKPSourceEN.con_KpSourceName) == true)
{
const strComparisonOpKpSourceName:string = objKPSourceCond.dicFldComparisonOp[clsKPSourceEN.con_KpSourceName];
strWhereCond += Format(" And {0} {2} '{1}'", clsKPSourceEN.con_KpSourceName, objKPSourceCond.kpSourceName, strComparisonOpKpSourceName);
}
if (Object.prototype.hasOwnProperty.call(objKPSourceCond.dicFldComparisonOp, clsKPSourceEN.con_KpSourceEnName) == true)
{
const strComparisonOpKpSourceEnName:string = objKPSourceCond.dicFldComparisonOp[clsKPSourceEN.con_KpSourceEnName];
strWhereCond += Format(" And {0} {2} '{1}'", clsKPSourceEN.con_KpSourceEnName, objKPSourceCond.kpSourceEnName, strComparisonOpKpSourceEnName);
}
if (Object.prototype.hasOwnProperty.call(objKPSourceCond.dicFldComparisonOp, clsKPSourceEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objKPSourceCond.dicFldComparisonOp[clsKPSourceEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKPSourceEN.con_UpdDate, objKPSourceCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objKPSourceCond.dicFldComparisonOp, clsKPSourceEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objKPSourceCond.dicFldComparisonOp[clsKPSourceEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsKPSourceEN.con_UpdUser, objKPSourceCond.updUser, strComparisonOpUpdUser);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objKPSourceENS:源对象
 * @param objKPSourceENT:目标对象
*/
export  function KPSource_CopyObjTo(objKPSourceENS: clsKPSourceEN , objKPSourceENT: clsKPSourceEN ): void 
{
objKPSourceENT.kpSourceId = objKPSourceENS.kpSourceId; //知识点来源Id
objKPSourceENT.kpSourceName = objKPSourceENS.kpSourceName; //知识点来源名
objKPSourceENT.kpSourceEnName = objKPSourceENS.kpSourceEnName; //知识点来源英文名
objKPSourceENT.updDate = objKPSourceENS.updDate; //修改日期
objKPSourceENT.updUser = objKPSourceENS.updUser; //修改人
objKPSourceENT.sfUpdFldSetStr = objKPSourceENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objKPSourceENS:源对象
 * @param objKPSourceENT:目标对象
*/
export  function KPSource_GetObjFromJsonObj(objKPSourceENS: clsKPSourceEN): clsKPSourceEN 
{
 const objKPSourceENT: clsKPSourceEN = new clsKPSourceEN();
ObjectAssign(objKPSourceENT, objKPSourceENS);
 return objKPSourceENT;
}
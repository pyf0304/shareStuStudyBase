
 /**
 * 类名:clsSchoolTypeWApi
 * 表名:SchoolType(01120030)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:24
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学校类型(SchoolType)
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
import { clsSchoolTypeEN } from "@/ts/L0Entity/SysPara/clsSchoolTypeEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const schoolType_Controller = "SchoolTypeApi";
 export const schoolType_ConstructorName = "schoolType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSchoolTypeId:关键字
 * @returns 对象
 **/
export  async function SchoolType_GetObjBySchoolTypeIdAsync(strSchoolTypeId: string): Promise<clsSchoolTypeEN|null>  
{
const strThisFuncName = "GetObjBySchoolTypeIdAsync";

if (IsNullOrEmpty(strSchoolTypeId) == true)
{
  const strMsg = Format("参数:[strSchoolTypeId]不能为空!(In clsSchoolTypeWApi.GetObjBySchoolTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strSchoolTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strSchoolTypeId]的长度:[{0}]不正确!(clsSchoolTypeWApi.GetObjBySchoolTypeIdAsync)", strSchoolTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjBySchoolTypeId";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSchoolTypeId,
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
const objSchoolType = SchoolType_GetObjFromJsonObj(returnObj);
return objSchoolType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param strSchoolTypeId:所给的关键字
 * @returns 对象
*/
export  async function SchoolType_GetObjBySchoolTypeIdlocalStorage(strSchoolTypeId: string) {
const strThisFuncName = "GetObjBySchoolTypeIdlocalStorage";

if (IsNullOrEmpty(strSchoolTypeId) == true)
{
  const strMsg = Format("参数:[strSchoolTypeId]不能为空!(In clsSchoolTypeWApi.GetObjBySchoolTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strSchoolTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strSchoolTypeId]的长度:[{0}]不正确!(clsSchoolTypeWApi.GetObjBySchoolTypeIdlocalStorage)", strSchoolTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsSchoolTypeEN._CurrTabName, strSchoolTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objSchoolTypeCache: clsSchoolTypeEN = JSON.parse(strTempObj);
return objSchoolTypeCache;
}
try
{
const objSchoolType = await SchoolType_GetObjBySchoolTypeIdAsync(strSchoolTypeId);
if (objSchoolType != null)
{
localStorage.setItem(strKey, JSON.stringify(objSchoolType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objSchoolType;
}
return objSchoolType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSchoolTypeId, schoolType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strSchoolTypeId:所给的关键字
 * @returns 对象
*/
export  async function SchoolType_GetObjBySchoolTypeIdCache(strSchoolTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjBySchoolTypeIdCache";

if (IsNullOrEmpty(strSchoolTypeId) == true)
{
  const strMsg = Format("参数:[strSchoolTypeId]不能为空!(In clsSchoolTypeWApi.GetObjBySchoolTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strSchoolTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strSchoolTypeId]的长度:[{0}]不正确!(clsSchoolTypeWApi.GetObjBySchoolTypeIdCache)", strSchoolTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrSchoolTypeObjLstCache = await SchoolType_GetObjLstCache();
try
{
const arrSchoolTypeSel = arrSchoolTypeObjLstCache.filter(x => 
 x.schoolTypeId == strSchoolTypeId );
let objSchoolType: clsSchoolTypeEN;
if (arrSchoolTypeSel.length > 0)
{
objSchoolType = arrSchoolTypeSel[0];
return objSchoolType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objSchoolTypeConst = await SchoolType_GetObjBySchoolTypeIdAsync(strSchoolTypeId);
if (objSchoolTypeConst != null)
{
SchoolType_ReFreshThisCache();
return objSchoolTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strSchoolTypeId, schoolType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objSchoolType:所给的对象
 * @returns 对象
*/
export  async function SchoolType_UpdateObjInLstCache(objSchoolType: clsSchoolTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrSchoolTypeObjLstCache = await SchoolType_GetObjLstCache();
const obj = arrSchoolTypeObjLstCache.find(x => 
x.schoolTypeId == objSchoolType.schoolTypeId);
if (obj != null)
{
objSchoolType.schoolTypeId = obj.schoolTypeId;
ObjectAssign( obj, objSchoolType);
}
else
{
arrSchoolTypeObjLstCache.push(objSchoolType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, schoolType_ConstructorName, strThisFuncName);
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
export  function SchoolType_SortFunDefa(a:clsSchoolTypeEN , b:clsSchoolTypeEN): number 
{
return a.schoolTypeId.localeCompare(b.schoolTypeId);
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
export  function SchoolType_SortFunDefa2Fld(a:clsSchoolTypeEN , b:clsSchoolTypeEN): number 
{
if (a.schoolTypeName == b.schoolTypeName) return a.memo.localeCompare(b.memo);
else return a.schoolTypeName.localeCompare(b.schoolTypeName);
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
export  function SchoolType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsSchoolTypeEN.con_SchoolTypeId:
return (a: clsSchoolTypeEN, b: clsSchoolTypeEN) => {
return a.schoolTypeId.localeCompare(b.schoolTypeId);
}
case clsSchoolTypeEN.con_SchoolTypeName:
return (a: clsSchoolTypeEN, b: clsSchoolTypeEN) => {
return a.schoolTypeName.localeCompare(b.schoolTypeName);
}
case clsSchoolTypeEN.con_Memo:
return (a: clsSchoolTypeEN, b: clsSchoolTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolType]中不存在!(in ${ schoolType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsSchoolTypeEN.con_SchoolTypeId:
return (a: clsSchoolTypeEN, b: clsSchoolTypeEN) => {
return b.schoolTypeId.localeCompare(a.schoolTypeId);
}
case clsSchoolTypeEN.con_SchoolTypeName:
return (a: clsSchoolTypeEN, b: clsSchoolTypeEN) => {
return b.schoolTypeName.localeCompare(a.schoolTypeName);
}
case clsSchoolTypeEN.con_Memo:
return (a: clsSchoolTypeEN, b: clsSchoolTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolType]中不存在!(in ${ schoolType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSchoolTypeId:所给的关键字
 * @returns 对象
*/
export  async function SchoolType_GetNameBySchoolTypeIdCache(strSchoolTypeId: string) {

if (IsNullOrEmpty(strSchoolTypeId) == true)
{
  const strMsg = Format("参数:[strSchoolTypeId]不能为空!(In clsSchoolTypeWApi.GetNameBySchoolTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strSchoolTypeId.length != 2)
{
const strMsg = Format("缓存分类变量:[strSchoolTypeId]的长度:[{0}]不正确!(clsSchoolTypeWApi.GetNameBySchoolTypeIdCache)", strSchoolTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrSchoolTypeObjLstCache = await SchoolType_GetObjLstCache();
if (arrSchoolTypeObjLstCache == null) return "";
try
{
const arrSchoolTypeSel = arrSchoolTypeObjLstCache.filter(x => 
 x.schoolTypeId == strSchoolTypeId );
let objSchoolType: clsSchoolTypeEN;
if (arrSchoolTypeSel.length > 0)
{
objSchoolType = arrSchoolTypeSel[0];
return objSchoolType.schoolTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strSchoolTypeId);
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
export  async function SchoolType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsSchoolTypeEN.con_SchoolTypeId:
return (obj: clsSchoolTypeEN) => {
return obj.schoolTypeId === value;
}
case clsSchoolTypeEN.con_SchoolTypeName:
return (obj: clsSchoolTypeEN) => {
return obj.schoolTypeName === value;
}
case clsSchoolTypeEN.con_Memo:
return (obj: clsSchoolTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[SchoolType]中不存在!(in ${ schoolType_ConstructorName}.${ strThisFuncName})`;
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
export  async function SchoolType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsSchoolTypeEN.con_SchoolTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsSchoolTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsSchoolTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strSchoolTypeId = strInValue;
if (IsNullOrEmpty(strSchoolTypeId) == true)
{
return "";
}
const objSchoolType = await SchoolType_GetObjBySchoolTypeIdCache(strSchoolTypeId );
if (objSchoolType == null) return "";
if (objSchoolType.GetFldValue(strOutFldName) == null) return "";
return objSchoolType.GetFldValue(strOutFldName).toString();
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
export  async function SchoolType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsSchoolTypeEN.con_SchoolTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrSchoolType = await SchoolType_GetObjLstCache();
if (arrSchoolType == null) return [];
let arrSchoolTypeSel = arrSchoolType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrSchoolTypeSel.length == 0) return [];
return arrSchoolTypeSel.map(x=>x.schoolTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SchoolType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetFirstObjAsync(strWhereCond: string): Promise<clsSchoolTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const objSchoolType = SchoolType_GetObjFromJsonObj(returnObj);
return objSchoolType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSchoolTypeEN._CurrTabName;
if (IsNullOrEmpty(clsSchoolTypeEN.WhereFormat) == false)
{
strWhereCond = clsSchoolTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsSchoolTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSchoolTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrSchoolTypeExObjLstCache: Array<clsSchoolTypeEN> = CacheHelper.Get(strKey);
const arrSchoolTypeObjLstT = SchoolType_GetObjLstByJSONObjLst(arrSchoolTypeExObjLstCache);
return arrSchoolTypeObjLstT;
}
try
{
const arrSchoolTypeExObjLst = await SchoolType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrSchoolTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSchoolTypeExObjLst.length);
console.log(strInfo);
return arrSchoolTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, schoolType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSchoolTypeEN._CurrTabName;
if (IsNullOrEmpty(clsSchoolTypeEN.WhereFormat) == false)
{
strWhereCond = clsSchoolTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsSchoolTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSchoolTypeEN.CacheAddiCondition);
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
const arrSchoolTypeExObjLstCache: Array<clsSchoolTypeEN> = JSON.parse(strTempObjLst);
const arrSchoolTypeObjLstT = SchoolType_GetObjLstByJSONObjLst(arrSchoolTypeExObjLstCache);
return arrSchoolTypeObjLstT;
}
try
{
const arrSchoolTypeExObjLst = await SchoolType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrSchoolTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSchoolTypeExObjLst.length);
console.log(strInfo);
return arrSchoolTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, schoolType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsSchoolTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrSchoolTypeObjLstCache: Array<clsSchoolTypeEN> = JSON.parse(strTempObjLst);
return arrSchoolTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function SchoolType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSchoolTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsSchoolTypeEN._CurrTabName;
if (IsNullOrEmpty(clsSchoolTypeEN.WhereFormat) == false)
{
strWhereCond = clsSchoolTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsSchoolTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsSchoolTypeEN.CacheAddiCondition);
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
const arrSchoolTypeExObjLstCache: Array<clsSchoolTypeEN> = JSON.parse(strTempObjLst);
const arrSchoolTypeObjLstT = SchoolType_GetObjLstByJSONObjLst(arrSchoolTypeExObjLstCache);
return arrSchoolTypeObjLstT;
}
try
{
const arrSchoolTypeExObjLst = await SchoolType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrSchoolTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrSchoolTypeExObjLst.length);
console.log(strInfo);
return arrSchoolTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, schoolType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsSchoolTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrSchoolTypeObjLstCache: Array<clsSchoolTypeEN> = JSON.parse(strTempObjLst);
return arrSchoolTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolType_GetObjLstCache(): Promise<Array<clsSchoolTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrSchoolTypeObjLstCache;
switch (clsSchoolTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrSchoolTypeObjLstCache = await SchoolType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrSchoolTypeObjLstCache = await SchoolType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrSchoolTypeObjLstCache = await SchoolType_GetObjLstClientCache();
break;
default:
arrSchoolTypeObjLstCache = await SchoolType_GetObjLstClientCache();
break;
}
return arrSchoolTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function SchoolType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrSchoolTypeObjLstCache;
switch (clsSchoolTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrSchoolTypeObjLstCache = await SchoolType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrSchoolTypeObjLstCache = await SchoolType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrSchoolTypeObjLstCache = null;
break;
default:
arrSchoolTypeObjLstCache = null;
break;
}
return arrSchoolTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSchoolTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function SchoolType_GetSubObjLstCache(objSchoolTypeCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrSchoolTypeObjLstCache = await SchoolType_GetObjLstCache();
let arrSchoolTypeSel = arrSchoolTypeObjLstCache;
if (objSchoolTypeCond.GetConditions().length == 0) return arrSchoolTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objSchoolTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrSchoolTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objSchoolTypeCond), schoolType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsSchoolTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSchoolTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function SchoolType_GetObjLstBySchoolTypeIdLstAsync(arrSchoolTypeId: Array<string>): Promise<Array<clsSchoolTypeEN>>  
{
const strThisFuncName = "GetObjLstBySchoolTypeIdLstAsync";
const strAction = "GetObjLstBySchoolTypeIdLst";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSchoolTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param arrstrSchoolTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function SchoolType_GetObjLstBySchoolTypeIdLstCache(arrSchoolTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstBySchoolTypeIdLstCache";
try
{
const arrSchoolTypeObjLstCache = await SchoolType_GetObjLstCache();
const arrSchoolTypeSel = arrSchoolTypeObjLstCache.filter(x => arrSchoolTypeIdLst.indexOf(x.schoolTypeId)>-1);
return arrSchoolTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrSchoolTypeIdLst.join(","), schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSchoolTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsSchoolTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", schoolType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = SchoolType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param strSchoolTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function SchoolType_DelRecordAsync(strSchoolTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(schoolType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strSchoolTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param arrSchoolTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function SchoolType_DelSchoolTypesAsync(arrSchoolTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelSchoolTypesAsync";
const strAction = "DelSchoolTypes";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrSchoolTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_DelSchoolTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelSchoolTypesByCondAsync";
const strAction = "DelSchoolTypesByCond";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param objSchoolTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SchoolType_AddNewRecordAsync(objSchoolTypeEN: clsSchoolTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objSchoolTypeEN.schoolTypeId === null || objSchoolTypeEN.schoolTypeId === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objSchoolTypeEN);
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param objSchoolTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function SchoolType_AddNewRecordWithMaxIdAsync(objSchoolTypeEN: clsSchoolTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_AddNewObjSave(objSchoolTypeEN: clsSchoolTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
SchoolType_CheckPropertyNew(objSchoolTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ schoolType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await SchoolType_IsExistAsync(objSchoolTypeEN.schoolTypeId);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objSchoolTypeEN.schoolTypeId);
console.error(strMsg);
throw(strMsg);
}
returnBool = await SchoolType_AddNewRecordAsync(objSchoolTypeEN);
if (returnBool == true)
{
SchoolType_ReFreshCache();
}
else
{
const strInfo = `添加[学校类型(SchoolType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objSchoolTypeEN.schoolTypeId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ schoolType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function SchoolType_UpdateObjSave(objSchoolTypeEN: clsSchoolTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objSchoolTypeEN.sfUpdFldSetStr = objSchoolTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objSchoolTypeEN.schoolTypeId == "" || objSchoolTypeEN.schoolTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
SchoolType_CheckProperty4Update(objSchoolTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ schoolType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await SchoolType_UpdateRecordAsync(objSchoolTypeEN);
if (returnBool == true)
{
SchoolType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ schoolType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSchoolTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function SchoolType_AddNewRecordWithReturnKeyAsync(objSchoolTypeEN: clsSchoolTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param objSchoolTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SchoolType_UpdateRecordAsync(objSchoolTypeEN: clsSchoolTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objSchoolTypeEN.sfUpdFldSetStr === undefined || objSchoolTypeEN.sfUpdFldSetStr === null || objSchoolTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolTypeEN.schoolTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param objSchoolTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function SchoolType_EditRecordExAsync(objSchoolTypeEN: clsSchoolTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objSchoolTypeEN.sfUpdFldSetStr === undefined || objSchoolTypeEN.sfUpdFldSetStr === null || objSchoolTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolTypeEN.schoolTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param objSchoolTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function SchoolType_UpdateWithConditionAsync(objSchoolTypeEN: clsSchoolTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objSchoolTypeEN.sfUpdFldSetStr === undefined || objSchoolTypeEN.sfUpdFldSetStr === null || objSchoolTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objSchoolTypeEN.schoolTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);
objSchoolTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objSchoolTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param objstrSchoolTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function SchoolType_IsExistRecordCache(objSchoolTypeCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrSchoolTypeObjLstCache = await SchoolType_GetObjLstCache();
if (arrSchoolTypeObjLstCache == null) return false;
let arrSchoolTypeSel = arrSchoolTypeObjLstCache;
if (objSchoolTypeCond.GetConditions().length == 0) return arrSchoolTypeSel.length>0?true:false;
try {
for (const objCondition of objSchoolTypeCond.GetConditions()) {
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
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrSchoolTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objSchoolTypeCond), schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param strSchoolTypeId:所给的关键字
 * @returns 对象
*/
export  async function SchoolType_IsExistCache(strSchoolTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrSchoolTypeObjLstCache = await SchoolType_GetObjLstCache();
if (arrSchoolTypeObjLstCache == null) return false;
try
{
const arrSchoolTypeSel = arrSchoolTypeObjLstCache.filter(x => x.schoolTypeId == strSchoolTypeId);
if (arrSchoolTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strSchoolTypeId, schoolType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strSchoolTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function SchoolType_IsExistAsync(strSchoolTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strSchoolTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
 * @param objSchoolTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function SchoolType_GetRecCountByCondCache(objSchoolTypeCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrSchoolTypeObjLstCache = await SchoolType_GetObjLstCache();
if (arrSchoolTypeObjLstCache == null) return 0;
let arrSchoolTypeSel = arrSchoolTypeObjLstCache;
if (objSchoolTypeCond.GetConditions().length == 0) return arrSchoolTypeSel.length;
try {
for (const objCondition of objSchoolTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrSchoolTypeSel = arrSchoolTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrSchoolTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objSchoolTypeCond), schoolType_ConstructorName, strThisFuncName);
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
export  async function SchoolType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(schoolType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, schoolType_ConstructorName, strThisFuncName);
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
export  function SchoolType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function SchoolType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsSchoolTypeEN._CurrTabName;
switch (clsSchoolTypeEN.CacheModeId)
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
clsSchoolTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function SchoolType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsSchoolTypeEN._CurrTabName;
switch (clsSchoolTypeEN.CacheModeId)
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
clsSchoolTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function SchoolType_GetLastRefreshTime():string
{
if (clsSchoolTypeEN._RefreshTimeLst.length == 0) return "";
return clsSchoolTypeEN._RefreshTimeLst[clsSchoolTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function SchoolType_BindDdl_SchoolTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_SchoolTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_SchoolTypeIdInDivCache");
const arrObjLstSel = await SchoolType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsSchoolTypeEN.con_SchoolTypeId, clsSchoolTypeEN.con_SchoolTypeName, "选学校类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function SchoolType_GetArrSchoolType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_SchoolTypeIdInDivCache");
const arrSchoolType = new Array<clsSchoolTypeEN>();
const arrObjLstSel = await SchoolType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsSchoolTypeEN();
obj0.schoolTypeId = '0';
obj0.schoolTypeName = '选学校类型...';
arrSchoolType.push(obj0);
arrObjLstSel.forEach(x => arrSchoolType.push(x));
return arrSchoolType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SchoolType_CheckPropertyNew(pobjSchoolTypeEN: clsSchoolTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[学校类型名]不能为空(In 学校类型)!(clsSchoolTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeId) == false && GetStrLen(pobjSchoolTypeEN.schoolTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[学校类型Id(schoolTypeId)]的长度不能超过2(In 学校类型(SchoolType))!值:${pobjSchoolTypeEN.schoolTypeId}(clsSchoolTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeName) == false && GetStrLen(pobjSchoolTypeEN.schoolTypeName) > 30)
{
 throw new Error(`(errid:Watl000413)字段[学校类型名(schoolTypeName)]的长度不能超过30(In 学校类型(SchoolType))!值:${pobjSchoolTypeEN.schoolTypeName}(clsSchoolTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjSchoolTypeEN.memo) == false && GetStrLen(pobjSchoolTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学校类型(SchoolType))!值:${pobjSchoolTypeEN.memo}(clsSchoolTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeId) == false && undefined !== pobjSchoolTypeEN.schoolTypeId && tzDataType.isString(pobjSchoolTypeEN.schoolTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校类型Id(schoolTypeId)]的值:[${pobjSchoolTypeEN.schoolTypeId}], 非法,应该为字符型(In 学校类型(SchoolType))!(clsSchoolTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeName) == false && undefined !== pobjSchoolTypeEN.schoolTypeName && tzDataType.isString(pobjSchoolTypeEN.schoolTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校类型名(schoolTypeName)]的值:[${pobjSchoolTypeEN.schoolTypeName}], 非法,应该为字符型(In 学校类型(SchoolType))!(clsSchoolTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjSchoolTypeEN.memo) == false && undefined !== pobjSchoolTypeEN.memo && tzDataType.isString(pobjSchoolTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjSchoolTypeEN.memo}], 非法,应该为字符型(In 学校类型(SchoolType))!(clsSchoolTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function SchoolType_CheckProperty4Update(pobjSchoolTypeEN: clsSchoolTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeId) == false && GetStrLen(pobjSchoolTypeEN.schoolTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[学校类型Id(schoolTypeId)]的长度不能超过2(In 学校类型(SchoolType))!值:${pobjSchoolTypeEN.schoolTypeId}(clsSchoolTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeName) == false && GetStrLen(pobjSchoolTypeEN.schoolTypeName) > 30)
{
 throw new Error(`(errid:Watl000416)字段[学校类型名(schoolTypeName)]的长度不能超过30(In 学校类型(SchoolType))!值:${pobjSchoolTypeEN.schoolTypeName}(clsSchoolTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolTypeEN.memo) == false && GetStrLen(pobjSchoolTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学校类型(SchoolType))!值:${pobjSchoolTypeEN.memo}(clsSchoolTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeId) == false && undefined !== pobjSchoolTypeEN.schoolTypeId && tzDataType.isString(pobjSchoolTypeEN.schoolTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校类型Id(schoolTypeId)]的值:[${pobjSchoolTypeEN.schoolTypeId}], 非法,应该为字符型(In 学校类型(SchoolType))!(clsSchoolTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeName) == false && undefined !== pobjSchoolTypeEN.schoolTypeName && tzDataType.isString(pobjSchoolTypeEN.schoolTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校类型名(schoolTypeName)]的值:[${pobjSchoolTypeEN.schoolTypeName}], 非法,应该为字符型(In 学校类型(SchoolType))!(clsSchoolTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjSchoolTypeEN.memo) == false && undefined !== pobjSchoolTypeEN.memo && tzDataType.isString(pobjSchoolTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjSchoolTypeEN.memo}], 非法,应该为字符型(In 学校类型(SchoolType))!(clsSchoolTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjSchoolTypeEN.schoolTypeId) === true 
 || pobjSchoolTypeEN.schoolTypeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000064)字段[学校类型Id]不能为空(In 学校类型)!(clsSchoolTypeBL:CheckProperty4Update)`);
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
export  function SchoolType_GetJSONStrByObj (pobjSchoolTypeEN: clsSchoolTypeEN): string
{
pobjSchoolTypeEN.sfUpdFldSetStr = pobjSchoolTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjSchoolTypeEN);
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
export  function SchoolType_GetObjLstByJSONStr (strJSON: string): Array<clsSchoolTypeEN>
{
let arrSchoolTypeObjLst = new Array<clsSchoolTypeEN>();
if (strJSON === "")
{
return arrSchoolTypeObjLst;
}
try
{
arrSchoolTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrSchoolTypeObjLst;
}
return arrSchoolTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSchoolTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function SchoolType_GetObjLstByJSONObjLst (arrSchoolTypeObjLstS: Array<clsSchoolTypeEN>): Array<clsSchoolTypeEN>
{
const arrSchoolTypeObjLst = new Array<clsSchoolTypeEN>();
for (const objInFor of arrSchoolTypeObjLstS) {
const obj1 = SchoolType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrSchoolTypeObjLst.push(obj1);
}
return arrSchoolTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-02
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function SchoolType_GetObjByJSONStr (strJSON: string): clsSchoolTypeEN
{
let pobjSchoolTypeEN = new clsSchoolTypeEN();
if (strJSON === "")
{
return pobjSchoolTypeEN;
}
try
{
pobjSchoolTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjSchoolTypeEN;
}
return pobjSchoolTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function SchoolType_GetCombineCondition(objSchoolTypeCond: clsSchoolTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objSchoolTypeCond.dicFldComparisonOp, clsSchoolTypeEN.con_SchoolTypeId) == true)
{
const strComparisonOpSchoolTypeId:string = objSchoolTypeCond.dicFldComparisonOp[clsSchoolTypeEN.con_SchoolTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolTypeEN.con_SchoolTypeId, objSchoolTypeCond.schoolTypeId, strComparisonOpSchoolTypeId);
}
if (Object.prototype.hasOwnProperty.call(objSchoolTypeCond.dicFldComparisonOp, clsSchoolTypeEN.con_SchoolTypeName) == true)
{
const strComparisonOpSchoolTypeName:string = objSchoolTypeCond.dicFldComparisonOp[clsSchoolTypeEN.con_SchoolTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolTypeEN.con_SchoolTypeName, objSchoolTypeCond.schoolTypeName, strComparisonOpSchoolTypeName);
}
if (Object.prototype.hasOwnProperty.call(objSchoolTypeCond.dicFldComparisonOp, clsSchoolTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objSchoolTypeCond.dicFldComparisonOp[clsSchoolTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsSchoolTypeEN.con_Memo, objSchoolTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSchoolTypeENS:源对象
 * @param objSchoolTypeENT:目标对象
*/
export  function SchoolType_CopyObjTo(objSchoolTypeENS: clsSchoolTypeEN , objSchoolTypeENT: clsSchoolTypeEN ): void 
{
objSchoolTypeENT.schoolTypeId = objSchoolTypeENS.schoolTypeId; //学校类型Id
objSchoolTypeENT.schoolTypeName = objSchoolTypeENS.schoolTypeName; //学校类型名
objSchoolTypeENT.memo = objSchoolTypeENS.memo; //备注
objSchoolTypeENT.sfUpdFldSetStr = objSchoolTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSchoolTypeENS:源对象
 * @param objSchoolTypeENT:目标对象
*/
export  function SchoolType_GetObjFromJsonObj(objSchoolTypeENS: clsSchoolTypeEN): clsSchoolTypeEN 
{
 const objSchoolTypeENT: clsSchoolTypeEN = new clsSchoolTypeEN();
ObjectAssign(objSchoolTypeENT, objSchoolTypeENS);
 return objSchoolTypeENT;
}
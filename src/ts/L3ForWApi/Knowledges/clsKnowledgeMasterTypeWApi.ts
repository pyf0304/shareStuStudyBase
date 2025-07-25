
 /**
 * 类名:clsKnowledgeMasterTypeWApi
 * 表名:KnowledgeMasterType(01120893)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 20:03:08
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
 * 知识点掌握类型(KnowledgeMasterType)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月06日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { CacheHelper } from "@/ts/PubFun/CacheHelper";
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsKnowledgeMasterTypeEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeMasterTypeEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDateTime } from "@/ts/PubFun/clsDateTime";

 export const knowledgeMasterType_Controller = "KnowledgeMasterTypeApi";
 export const knowledgeMasterType_ConstructorName = "knowledgeMasterType";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strMasterTypeId:关键字
 * @returns 对象
 **/
export  async function KnowledgeMasterType_GetObjByMasterTypeIdAsync(strMasterTypeId: string): Promise<clsKnowledgeMasterTypeEN|null>  
{
const strThisFuncName = "GetObjByMasterTypeIdAsync";

if (IsNullOrEmpty(strMasterTypeId) == true)
{
  const strMsg = Format("参数:[strMasterTypeId]不能为空!(In clsKnowledgeMasterTypeWApi.GetObjByMasterTypeIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strMasterTypeId.length != 1)
{
const strMsg = Format("缓存分类变量:[strMasterTypeId]的长度:[{0}]不正确!(clsKnowledgeMasterTypeWApi.GetObjByMasterTypeIdAsync)", strMasterTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByMasterTypeId";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strMasterTypeId,
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
const objKnowledgeMasterType = KnowledgeMasterType_GetObjFromJsonObj(returnObj);
return objKnowledgeMasterType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param strMasterTypeId:所给的关键字
 * @returns 对象
*/
export  async function KnowledgeMasterType_GetObjByMasterTypeIdlocalStorage(strMasterTypeId: string) {
const strThisFuncName = "GetObjByMasterTypeIdlocalStorage";

if (IsNullOrEmpty(strMasterTypeId) == true)
{
  const strMsg = Format("参数:[strMasterTypeId]不能为空!(In clsKnowledgeMasterTypeWApi.GetObjByMasterTypeIdlocalStorage)");
console.error(strMsg);
 throw (strMsg);
}
if (strMasterTypeId.length != 1)
{
const strMsg = Format("缓存分类变量:[strMasterTypeId]的长度:[{0}]不正确!(clsKnowledgeMasterTypeWApi.GetObjByMasterTypeIdlocalStorage)", strMasterTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const strKey = Format("{0}_{1}", clsKnowledgeMasterTypeEN._CurrTabName, strMasterTypeId);
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObj = localStorage.getItem(strKey) as string;
const objKnowledgeMasterTypeCache: clsKnowledgeMasterTypeEN = JSON.parse(strTempObj);
return objKnowledgeMasterTypeCache;
}
try
{
const objKnowledgeMasterType = await KnowledgeMasterType_GetObjByMasterTypeIdAsync(strMasterTypeId);
if (objKnowledgeMasterType != null)
{
localStorage.setItem(strKey, JSON.stringify(objKnowledgeMasterType));
const strInfo = Format("Key:[${ strKey}]的缓存已经建立!");
console.log(strInfo);
return objKnowledgeMasterType;
}
return objKnowledgeMasterType;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strMasterTypeId, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return;
}
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache)
 * @param strMasterTypeId:所给的关键字
 * @returns 对象
*/
export  async function KnowledgeMasterType_GetObjByMasterTypeIdCache(strMasterTypeId: string, bolTryAsyncOnce = true) {
const strThisFuncName = "GetObjByMasterTypeIdCache";

if (IsNullOrEmpty(strMasterTypeId) == true)
{
  const strMsg = Format("参数:[strMasterTypeId]不能为空!(In clsKnowledgeMasterTypeWApi.GetObjByMasterTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strMasterTypeId.length != 1)
{
const strMsg = Format("缓存分类变量:[strMasterTypeId]的长度:[{0}]不正确!(clsKnowledgeMasterTypeWApi.GetObjByMasterTypeIdCache)", strMasterTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
try
{
const arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeObjLstCache.filter(x => 
 x.masterTypeId == strMasterTypeId );
let objKnowledgeMasterType: clsKnowledgeMasterTypeEN;
if (arrKnowledgeMasterTypeSel.length > 0)
{
objKnowledgeMasterType = arrKnowledgeMasterTypeSel[0];
return objKnowledgeMasterType;
}
else
{
if (bolTryAsyncOnce == true)
{
const objKnowledgeMasterTypeConst = await KnowledgeMasterType_GetObjByMasterTypeIdAsync(strMasterTypeId);
if (objKnowledgeMasterTypeConst != null)
{
KnowledgeMasterType_ReFreshThisCache();
return objKnowledgeMasterTypeConst;
}
}
return null;
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})", e, strMasterTypeId, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
}
return null;
}

/**
 * 修改在缓存对象列表中的对象, 与后台数据库无关.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache)
 * @param objKnowledgeMasterType:所给的对象
 * @returns 对象
*/
export  async function KnowledgeMasterType_UpdateObjInLstCache(objKnowledgeMasterType: clsKnowledgeMasterTypeEN) {
const strThisFuncName = "UpdateObjInLstCache";
try
{
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
const obj = arrKnowledgeMasterTypeObjLstCache.find(x => x.masterTypeName == objKnowledgeMasterType.masterTypeName);
if (obj != null)
{
objKnowledgeMasterType.masterTypeId = obj.masterTypeId;
ObjectAssign( obj, objKnowledgeMasterType);
}
else
{
arrKnowledgeMasterTypeObjLstCache.push(objKnowledgeMasterType);
}
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})", e, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function KnowledgeMasterType_SortFunDefa(a:clsKnowledgeMasterTypeEN , b:clsKnowledgeMasterTypeEN): number 
{
return a.masterTypeId.localeCompare(b.masterTypeId);
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
export  function KnowledgeMasterType_SortFunDefa2Fld(a:clsKnowledgeMasterTypeEN , b:clsKnowledgeMasterTypeEN): number 
{
if (a.masterTypeName == b.masterTypeName) return a.masterTypeENName.localeCompare(b.masterTypeENName);
else return a.masterTypeName.localeCompare(b.masterTypeName);
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
export  function KnowledgeMasterType_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsKnowledgeMasterTypeEN.con_MasterTypeId:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
return a.masterTypeId.localeCompare(b.masterTypeId);
}
case clsKnowledgeMasterTypeEN.con_MasterTypeName:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
return a.masterTypeName.localeCompare(b.masterTypeName);
}
case clsKnowledgeMasterTypeEN.con_MasterTypeENName:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
if (a.masterTypeENName == null) return -1;
if (b.masterTypeENName == null) return 1;
return a.masterTypeENName.localeCompare(b.masterTypeENName);
}
case clsKnowledgeMasterTypeEN.con_UpdDate:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsKnowledgeMasterTypeEN.con_UpdUser:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsKnowledgeMasterTypeEN.con_Memo:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeMasterType]中不存在!(in ${ knowledgeMasterType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsKnowledgeMasterTypeEN.con_MasterTypeId:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
return b.masterTypeId.localeCompare(a.masterTypeId);
}
case clsKnowledgeMasterTypeEN.con_MasterTypeName:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
return b.masterTypeName.localeCompare(a.masterTypeName);
}
case clsKnowledgeMasterTypeEN.con_MasterTypeENName:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
if (b.masterTypeENName == null) return -1;
if (a.masterTypeENName == null) return 1;
return b.masterTypeENName.localeCompare(a.masterTypeENName);
}
case clsKnowledgeMasterTypeEN.con_UpdDate:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsKnowledgeMasterTypeEN.con_UpdUser:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsKnowledgeMasterTypeEN.con_Memo:
return (a: clsKnowledgeMasterTypeEN, b: clsKnowledgeMasterTypeEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeMasterType]中不存在!(in ${ knowledgeMasterType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strMasterTypeId:所给的关键字
 * @returns 对象
*/
export  async function KnowledgeMasterType_GetNameByMasterTypeIdCache(strMasterTypeId: string) {

if (IsNullOrEmpty(strMasterTypeId) == true)
{
  const strMsg = Format("参数:[strMasterTypeId]不能为空!(In clsKnowledgeMasterTypeWApi.GetNameByMasterTypeIdCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strMasterTypeId.length != 1)
{
const strMsg = Format("缓存分类变量:[strMasterTypeId]的长度:[{0}]不正确!(clsKnowledgeMasterTypeWApi.GetNameByMasterTypeIdCache)", strMasterTypeId.length);
console.error(strMsg);
throw (strMsg);
}
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
if (arrKnowledgeMasterTypeObjLstCache == null) return "";
try
{
const arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeObjLstCache.filter(x => 
 x.masterTypeId == strMasterTypeId );
let objKnowledgeMasterType: clsKnowledgeMasterTypeEN;
if (arrKnowledgeMasterTypeSel.length > 0)
{
objKnowledgeMasterType = arrKnowledgeMasterTypeSel[0];
return objKnowledgeMasterType.masterTypeName;
}
else
{
return "";
}
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!", e, strMasterTypeId);
console.error(strMsg);
alert(strMsg);
}
return "";
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function KnowledgeMasterType_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsKnowledgeMasterTypeEN.con_MasterTypeId:
return (obj: clsKnowledgeMasterTypeEN) => {
return obj.masterTypeId === value;
}
case clsKnowledgeMasterTypeEN.con_MasterTypeName:
return (obj: clsKnowledgeMasterTypeEN) => {
return obj.masterTypeName === value;
}
case clsKnowledgeMasterTypeEN.con_MasterTypeENName:
return (obj: clsKnowledgeMasterTypeEN) => {
return obj.masterTypeENName === value;
}
case clsKnowledgeMasterTypeEN.con_UpdDate:
return (obj: clsKnowledgeMasterTypeEN) => {
return obj.updDate === value;
}
case clsKnowledgeMasterTypeEN.con_UpdUser:
return (obj: clsKnowledgeMasterTypeEN) => {
return obj.updUser === value;
}
case clsKnowledgeMasterTypeEN.con_Memo:
return (obj: clsKnowledgeMasterTypeEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[KnowledgeMasterType]中不存在!(in ${ knowledgeMasterType_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
*/
export  async function KnowledgeMasterType_func(strInFldName:string , strOutFldName:string , strInValue:string )
{
//const strThisFuncName = "func";

if (strInFldName != clsKnowledgeMasterTypeEN.con_MasterTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (clsKnowledgeMasterTypeEN.AttributeName.indexOf(strOutFldName) == -1)
{
const strMsg = Format("输出字段名:[{0}]不正确,不在输出字段范围之内!({1})",
strOutFldName, clsKnowledgeMasterTypeEN.AttributeName.join(','));
console.error(strMsg);
throw new Error(strMsg);
}
const strMasterTypeId = strInValue;
if (IsNullOrEmpty(strMasterTypeId) == true)
{
return "";
}
const objKnowledgeMasterType = await KnowledgeMasterType_GetObjByMasterTypeIdCache(strMasterTypeId );
if (objKnowledgeMasterType == null) return "";
if (objKnowledgeMasterType.GetFldValue(strOutFldName) == null) return "";
return objKnowledgeMasterType.GetFldValue(strOutFldName).toString();
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
*/
export  async function KnowledgeMasterType_funcKey(strInFldName:string, strInValue: any, strComparisonOp:string): Promise<Array<string>> 
{
//const strThisFuncName = "funcKey";

if (strInFldName == clsKnowledgeMasterTypeEN.con_MasterTypeId)
{
const strMsg = Format("输入字段名:[{0}]不正确, 不能为关键字段!", strInFldName);
console.error(strMsg);
throw new Error(strMsg);
}
if (IsNullOrEmpty(strInValue) == true)
{
return [];
}
const arrKnowledgeMasterType = await KnowledgeMasterType_GetObjLstCache();
if (arrKnowledgeMasterType == null) return [];
let arrKnowledgeMasterTypeSel = arrKnowledgeMasterType;
const strType = typeof(strInValue);
let arrValues: string[];
switch (strType)
{
case "string":
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01: // " = "
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName).toString() == strInValue.toString());
break;
case enumComparisonOp.Like_03:
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1);
break;
case enumComparisonOp.In_04:
arrValues = strInValue.split(',');
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1);
break;
}
break;
case "boolean":
if (strInValue == null) return [];
if (strComparisonOp == enumComparisonOp.Equal_01)
{
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
}
break;
case "number":
if (Number(strInValue) == 0) return [];
switch (strComparisonOp)
{
case enumComparisonOp.Equal_01:
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName) == strInValue);
break;
case enumComparisonOp.NotEqual_02:
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName) != strInValue);
break;
case enumComparisonOp.NotLessThan_05://" >= ":
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName) >= strInValue);
break;
case enumComparisonOp.NotGreaterThan_06://" <= ":
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
case enumComparisonOp.GreaterThan_07://" > ":
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName) > strInValue);
break;
case enumComparisonOp.LessThan_08://" < ":
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strInFldName) <= strInValue);
break;
}
break;
}
if (arrKnowledgeMasterTypeSel.length == 0) return [];
return arrKnowledgeMasterTypeSel.map(x=>x.masterTypeId);
}

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KnowledgeMasterType_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_GetFirstObjAsync(strWhereCond: string): Promise<clsKnowledgeMasterTypeEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const objKnowledgeMasterType = KnowledgeMasterType_GetObjFromJsonObj(returnObj);
return objKnowledgeMasterType;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_GetObjLstClientCache() 
{
const strThisFuncName = "GetObjLstClientCache";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKnowledgeMasterTypeEN._CurrTabName;
if (IsNullOrEmpty(clsKnowledgeMasterTypeEN.WhereFormat) == false)
{
strWhereCond = clsKnowledgeMasterTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsKnowledgeMasterTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKnowledgeMasterTypeEN.CacheAddiCondition);
}
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (CacheHelper.Exsits(strKey))
{
//缓存存在,直接返回
const arrKnowledgeMasterTypeExObjLstCache: Array<clsKnowledgeMasterTypeEN> = CacheHelper.Get(strKey);
const arrKnowledgeMasterTypeObjLstT = KnowledgeMasterType_GetObjLstByJSONObjLst(arrKnowledgeMasterTypeExObjLstCache);
return arrKnowledgeMasterTypeObjLstT;
}
try
{
const arrKnowledgeMasterTypeExObjLst = await KnowledgeMasterType_GetObjLstAsync(strWhereCond);
CacheHelper.Add(strKey, arrKnowledgeMasterTypeExObjLst);
const strInfo = Format("[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKnowledgeMasterTypeExObjLst.length);
console.log(strInfo);
return arrKnowledgeMasterTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterType_GetObjLstlocalStorage() 
{
const strThisFuncName = "GetObjLstlocalStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKnowledgeMasterTypeEN._CurrTabName;
if (IsNullOrEmpty(clsKnowledgeMasterTypeEN.WhereFormat) == false)
{
strWhereCond = clsKnowledgeMasterTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsKnowledgeMasterTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKnowledgeMasterTypeEN.CacheAddiCondition);
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
const arrKnowledgeMasterTypeExObjLstCache: Array<clsKnowledgeMasterTypeEN> = JSON.parse(strTempObjLst);
const arrKnowledgeMasterTypeObjLstT = KnowledgeMasterType_GetObjLstByJSONObjLst(arrKnowledgeMasterTypeExObjLstCache);
return arrKnowledgeMasterTypeObjLstT;
}
try
{
const arrKnowledgeMasterTypeExObjLst = await KnowledgeMasterType_GetObjLstAsync(strWhereCond);
localStorage.setItem(strKey, JSON.stringify(arrKnowledgeMasterTypeExObjLst));
const strInfo = Format("[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKnowledgeMasterTypeExObjLst.length);
console.log(strInfo);
return arrKnowledgeMasterTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.如果本地不存在就返回null,不会去访问WebApi获取数据。
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_localStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterType_GetObjLstlocalStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKnowledgeMasterTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(localStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = localStorage.getItem(strKey) as string;
const arrKnowledgeMasterTypeObjLstCache: Array<clsKnowledgeMasterTypeEN> = JSON.parse(strTempObjLst);
return arrKnowledgeMasterTypeObjLstCache;
}
else return null;
}

 /**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export  async function KnowledgeMasterType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsKnowledgeMasterTypeEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_GetObjLstsessionStorage() 
{
const strThisFuncName = "GetObjLstsessionStorage";
//初始化列表缓存
let strWhereCond = "1=1";
const strKey = clsKnowledgeMasterTypeEN._CurrTabName;
if (IsNullOrEmpty(clsKnowledgeMasterTypeEN.WhereFormat) == false)
{
strWhereCond = clsKnowledgeMasterTypeEN.WhereFormat;
}
if (IsNullOrEmpty(clsKnowledgeMasterTypeEN.CacheAddiCondition) == false)
{
strWhereCond += Format(" and {0}", clsKnowledgeMasterTypeEN.CacheAddiCondition);
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
const arrKnowledgeMasterTypeExObjLstCache: Array<clsKnowledgeMasterTypeEN> = JSON.parse(strTempObjLst);
const arrKnowledgeMasterTypeObjLstT = KnowledgeMasterType_GetObjLstByJSONObjLst(arrKnowledgeMasterTypeExObjLstCache);
return arrKnowledgeMasterTypeObjLstT;
}
try
{
const arrKnowledgeMasterTypeExObjLst = await KnowledgeMasterType_GetObjLstAsync(strWhereCond);
sessionStorage.setItem(strKey, JSON.stringify(arrKnowledgeMasterTypeExObjLst));
const strInfo = Format("[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!", strKey, arrKnowledgeMasterTypeExObjLst.length);
console.log(strInfo);
return arrKnowledgeMasterTypeExObjLst;
}
catch (e)
{
const strMsg = Format("从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})", e, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw (strMsg);
}
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_sessionStorage_PureCache)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterType_GetObjLstsessionStoragePureCache() 
{
//初始化列表缓存
const strKey = clsKnowledgeMasterTypeEN._CurrTabName;
if (strKey == "")
{
console.error("关键字为空!不正确");
throw new Error("关键字为空!不正确");
}
 if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey))
{
//缓存存在,直接返回
const strTempObjLst:string = sessionStorage.getItem(strKey) as string;
const arrKnowledgeMasterTypeObjLstCache: Array<clsKnowledgeMasterTypeEN> = JSON.parse(strTempObjLst);
return arrKnowledgeMasterTypeObjLstCache;
}
else return null;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterType_GetObjLstCache(): Promise<Array<clsKnowledgeMasterTypeEN>> 
{
//const strThisFuncName = "GetObjLst_Cache";

let arrKnowledgeMasterTypeObjLstCache;
switch (clsKnowledgeMasterTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstsessionStorage();
break;
case "03"://localStorage
arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstlocalStorage();
break;
case "02"://ClientCache
arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstClientCache();
break;
default:
arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstClientCache();
break;
}
return arrKnowledgeMasterTypeObjLstCache;
}

 /**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export  async function KnowledgeMasterType_GetObjLstPureCache() 
{
//const strThisFuncName = "GetObjLstPureCache";
let arrKnowledgeMasterTypeObjLstCache;
switch (clsKnowledgeMasterTypeEN.CacheModeId)
{
case "04"://sessionStorage
arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstsessionStoragePureCache();
break;
case "03"://localStorage
arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstlocalStoragePureCache();
break;
case "02"://ClientCache
arrKnowledgeMasterTypeObjLstCache = null;
break;
default:
arrKnowledgeMasterTypeObjLstCache = null;
break;
}
return arrKnowledgeMasterTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrMasterTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function KnowledgeMasterType_GetSubObjLstCache(objKnowledgeMasterTypeCond: ConditionCollection ) {
const strThisFuncName = "GetSubObjLstCache";
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
let arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeObjLstCache;
if (objKnowledgeMasterTypeCond.GetConditions().length == 0) return arrKnowledgeMasterTypeSel;
try {
//console.log(sstrKeys);
for (const objCondition of objKnowledgeMasterTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKnowledgeMasterTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})", e, JSON.stringify( objKnowledgeMasterTypeCond), knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKnowledgeMasterTypeEN>();
}

 /**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrMasterTypeId:关键字列表
 * @returns 对象列表
 **/
export  async function KnowledgeMasterType_GetObjLstByMasterTypeIdLstAsync(arrMasterTypeId: Array<string>): Promise<Array<clsKnowledgeMasterTypeEN>>  
{
const strThisFuncName = "GetObjLstByMasterTypeIdLstAsync";
const strAction = "GetObjLstByMasterTypeIdLst";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMasterTypeId, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param arrstrMasterTypeIdLst:关键字列表
 * @returns 对象列表
*/
export  async function KnowledgeMasterType_GetObjLstByMasterTypeIdLstCache(arrMasterTypeIdLst: Array<string> ) {
const strThisFuncName = "GetObjLstByMasterTypeIdLstCache";
try
{
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
const arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeObjLstCache.filter(x => arrMasterTypeIdLst.indexOf(x.masterTypeId)>-1);
return arrKnowledgeMasterTypeSel;
}
catch (e)
{
const strMsg = Format("错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})", e, arrMasterTypeIdLst.join(","), knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsKnowledgeMasterTypeEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsKnowledgeMasterTypeEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function KnowledgeMasterType_GetObjLstByPagerCache(objPagerPara: stuPagerPara ) {
const strThisFuncName = "GetObjLstByPagerCache";
if (objPagerPara.pageIndex == 0) return new Array<clsKnowledgeMasterTypeEN>();
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
if (arrKnowledgeMasterTypeObjLstCache.length == 0) return arrKnowledgeMasterTypeObjLstCache;
let arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeObjLstCache;
const objKnowledgeMasterTypeCond = objPagerPara.conditionCollection;
if (objKnowledgeMasterTypeCond == null)
{
const strMsg = `根据分布条件从缓存中获取分页对象列表时，objPagerPara.conditionCollection为null,请检查！(in ${ strThisFuncName})`;
alert(strMsg);
console.error(strMsg);
return;
}
//console.log("clsKnowledgeMasterTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
//console.log(dicFldComparisonOp);
try {
for (const objCondition of objKnowledgeMasterTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKnowledgeMasterTypeSel.length == 0) return arrKnowledgeMasterTypeSel;
let intStart: number = objPagerPara.pageSize* (objPagerPara.pageIndex - 1);
if (intStart <= 0) intStart = 0;
const intEnd = intStart + objPagerPara.pageSize;
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.sort(KnowledgeMasterType_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.sort(objPagerPara.sortFun);
}
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.slice(intStart, intEnd);     
return arrKnowledgeMasterTypeSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKnowledgeMasterTypeEN>();
}

 /**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export  async function KnowledgeMasterType_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsKnowledgeMasterTypeEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsKnowledgeMasterTypeEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = KnowledgeMasterType_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param strMasterTypeId:关键字
 * @returns 获取删除的结果
 **/
export  async function KnowledgeMasterType_DelRecordAsync(strMasterTypeId: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strMasterTypeId);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param arrMasterTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function KnowledgeMasterType_DelKnowledgeMasterTypesAsync(arrMasterTypeId: Array<string>): Promise<number> 
{
const strThisFuncName = "DelKnowledgeMasterTypesAsync";
const strAction = "DelKnowledgeMasterTypes";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrMasterTypeId, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_DelKnowledgeMasterTypesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelKnowledgeMasterTypesByCondAsync";
const strAction = "DelKnowledgeMasterTypesByCond";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KnowledgeMasterType_AddNewRecordAsync(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objKnowledgeMasterTypeEN);
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function KnowledgeMasterType_AddNewRecordWithMaxIdAsync(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_AddNewObjSave(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
KnowledgeMasterType_CheckPropertyNew(objKnowledgeMasterTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ knowledgeMasterType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await KnowledgeMasterType_CheckUniCond4Add(objKnowledgeMasterTypeEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
const returnKeyId = await KnowledgeMasterType_AddNewRecordWithMaxIdAsync(objKnowledgeMasterTypeEN);
if (IsNullOrEmpty(returnKeyId) == false)
{
returnBool = true;
}
if (returnBool == true)
{
KnowledgeMasterType_ReFreshCache();
}
else
{
const strInfo = `添加[知识点掌握类型(KnowledgeMasterType)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: returnKeyId, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ knowledgeMasterType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function KnowledgeMasterType_CheckUniCond4Add(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<boolean>{
const strUniquenessCondition = KnowledgeMasterType_GetUniCondStr(objKnowledgeMasterTypeEN);
const bolIsExistCondition = await KnowledgeMasterType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KnowledgeMasterType_CheckUniCond4Update(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<boolean>{
const strUniquenessCondition = KnowledgeMasterType_GetUniCondStr4Update(objKnowledgeMasterTypeEN);
const bolIsExistCondition = await KnowledgeMasterType_IsExistRecordAsync(strUniquenessCondition);
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
export  async function KnowledgeMasterType_UpdateObjSave(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objKnowledgeMasterTypeEN.sfUpdFldSetStr = objKnowledgeMasterTypeEN.updFldString;//设置哪些字段被修改(脏字段)
if (objKnowledgeMasterTypeEN.masterTypeId == "" || objKnowledgeMasterTypeEN.masterTypeId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
KnowledgeMasterType_CheckProperty4Update(objKnowledgeMasterTypeEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ knowledgeMasterType_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await KnowledgeMasterType_CheckUniCond4Update(objKnowledgeMasterTypeEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await KnowledgeMasterType_UpdateRecordAsync(objKnowledgeMasterTypeEN);
if (returnBool == true)
{
KnowledgeMasterType_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ knowledgeMasterType_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objKnowledgeMasterTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function KnowledgeMasterType_AddNewRecordWithReturnKeyAsync(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KnowledgeMasterType_UpdateRecordAsync(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objKnowledgeMasterTypeEN.sfUpdFldSetStr === undefined || objKnowledgeMasterTypeEN.sfUpdFldSetStr === null || objKnowledgeMasterTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeMasterTypeEN.masterTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function KnowledgeMasterType_EditRecordExAsync(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objKnowledgeMasterTypeEN.sfUpdFldSetStr === undefined || objKnowledgeMasterTypeEN.sfUpdFldSetStr === null || objKnowledgeMasterTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeMasterTypeEN.masterTypeId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function KnowledgeMasterType_UpdateWithConditionAsync(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objKnowledgeMasterTypeEN.sfUpdFldSetStr === undefined || objKnowledgeMasterTypeEN.sfUpdFldSetStr === null || objKnowledgeMasterTypeEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objKnowledgeMasterTypeEN.masterTypeId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);
objKnowledgeMasterTypeEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objKnowledgeMasterTypeEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param objstrMasterTypeIdCond:条件对象
 * @returns 对象列表子集
*/
export  async function KnowledgeMasterType_IsExistRecordCache(objKnowledgeMasterTypeCond: ConditionCollection) {
const strThisFuncName = "IsExistRecordCache";
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
if (arrKnowledgeMasterTypeObjLstCache == null) return false;
let arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeObjLstCache;
if (objKnowledgeMasterTypeCond.GetConditions().length == 0) return arrKnowledgeMasterTypeSel.length>0?true:false;
try {
for (const objCondition of objKnowledgeMasterTypeCond.GetConditions()) {
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
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
if (arrKnowledgeMasterTypeSel.length > 0)
{
return true;
}
else
{
return false;
}
}
catch (e) {
const strMsg = Format("根据条件:[{0}]判断是否存在不成功!(in {1}.{2})", JSON.stringify( objKnowledgeMasterTypeCond), knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param strMasterTypeId:所给的关键字
 * @returns 对象
*/
export  async function KnowledgeMasterType_IsExistCache(strMasterTypeId:string) {
const strThisFuncName = "IsExistCache";
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
if (arrKnowledgeMasterTypeObjLstCache == null) return false;
try
{
const arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeObjLstCache.filter(x => x.masterTypeId == strMasterTypeId);
if (arrKnowledgeMasterTypeSel.length > 0)
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
const strMsg = Format("根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})", strMasterTypeId, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
return false;
}

 /**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strMasterTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function KnowledgeMasterType_IsExistAsync(strMasterTypeId: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strMasterTypeId
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  async function KnowledgeMasterType_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
 * @param objKnowledgeMasterTypeCond:条件对象
 * @returns 对象列表记录数
*/
export  async function KnowledgeMasterType_GetRecCountByCondCache(objKnowledgeMasterTypeCond: ConditionCollection ) {
const strThisFuncName = "GetRecCountByCondCache";
const arrKnowledgeMasterTypeObjLstCache = await KnowledgeMasterType_GetObjLstCache();
if (arrKnowledgeMasterTypeObjLstCache == null) return 0;
let arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeObjLstCache;
if (objKnowledgeMasterTypeCond.GetConditions().length == 0) return arrKnowledgeMasterTypeSel.length;
try {
for (const objCondition of objKnowledgeMasterTypeCond.GetConditions()) {
if (objCondition == null) continue; 
const strKey = objCondition.fldName;
const strComparisonOp = objCondition.comparison;
const strValue = objCondition.fldValue;
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) != null);
const strType = typeof(strValue);
switch (strType) {
case "string":
if (strValue == null) continue;
if (strValue == "") continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString() == strValue.toString());
}
else if (strComparisonOp == "like") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1);
}
else if (strComparisonOp == "length greater") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length > Number(strValue.toString()));
}
else if (strComparisonOp == "length not greater") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()));
}
else if (strComparisonOp == "length not less") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()));
}
else if (strComparisonOp == "length less") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length < Number(strValue.toString()));
}
else if (strComparisonOp == "length equal") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey).toString().length == Number(strValue.toString()));
}
else if (strComparisonOp == "in") {
const arrValues = strValue.toString().split(',');
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1);
}
break;
case "boolean":
if (strValue == null) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
break;
case "number":
if (Number(strValue) == 0) continue;
if (strComparisonOp == "=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) == strValue);
}
else if (strComparisonOp == ">=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) >= strValue);
}
else if (strComparisonOp == "<=") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
else if (strComparisonOp == ">") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) > strValue);
}
else if (strComparisonOp == "<") {
arrKnowledgeMasterTypeSel = arrKnowledgeMasterTypeSel.filter(x => x.GetFldValue(strKey) <= strValue);
}
break;
}
}
return arrKnowledgeMasterTypeSel.length;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})", e, JSON.stringify( objKnowledgeMasterTypeCond), knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return 0;
}

 /**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export  async function KnowledgeMasterType_GetMaxStrIdAsync(): Promise<string>  
{
const strThisFuncName = "GetMaxStrIdAsync";
const strAction = "GetMaxStrId";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
*/
export  async function KnowledgeMasterType_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(knowledgeMasterType_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, knowledgeMasterType_ConstructorName, strThisFuncName);
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
export  function KnowledgeMasterType_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function KnowledgeMasterType_ReFreshCache():void
{

 const strMsg:string = Format("刷新缓存成功!");
console.trace(strMsg);
// 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
const strKey = clsKnowledgeMasterTypeEN._CurrTabName;
switch (clsKnowledgeMasterTypeEN.CacheModeId)
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
clsKnowledgeMasterTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
}

 /**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export  function KnowledgeMasterType_ReFreshThisCache():void
{
if (clsSysPara4WebApi.spSetRefreshCacheOn == true)
{
const strKey = clsKnowledgeMasterTypeEN._CurrTabName;
switch (clsKnowledgeMasterTypeEN.CacheModeId)
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
clsKnowledgeMasterTypeEN._RefreshTimeLst.push(clsDateTime.getTodayDateTimeStr(0));
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
export  function KnowledgeMasterType_GetLastRefreshTime():string
{
if (clsKnowledgeMasterTypeEN._RefreshTimeLst.length == 0) return "";
return clsKnowledgeMasterTypeEN._RefreshTimeLst[clsKnowledgeMasterTypeEN._RefreshTimeLst.length - 1];
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KnowledgeMasterType_BindDdl_MasterTypeIdInDivCache(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In BindDdl_MasterTypeIdInDiv)", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_MasterTypeIdInDivCache");
const arrObjLstSel = await KnowledgeMasterType_GetObjLstCache();
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsKnowledgeMasterTypeEN.con_MasterTypeId, clsKnowledgeMasterTypeEN.con_MasterTypeName, "知识点掌握类型...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function KnowledgeMasterType_GetArrKnowledgeMasterType()
{

//为数据源于表的下拉框设置内容
//console.log("开始：BindDdl_MasterTypeIdInDivCache");
const arrKnowledgeMasterType = new Array<clsKnowledgeMasterTypeEN>();
const arrObjLstSel = await KnowledgeMasterType_GetObjLstCache();
if (arrObjLstSel == null) return null;
const obj0 = new clsKnowledgeMasterTypeEN();
obj0.masterTypeId = '0';
obj0.masterTypeName = '选知识点掌握类型...';
arrKnowledgeMasterType.push(obj0);
arrObjLstSel.forEach(x => arrKnowledgeMasterType.push(x));
return arrKnowledgeMasterType;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KnowledgeMasterType_CheckPropertyNew(pobjKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeName) === true )
{
 throw new Error(`(errid:Watl000411)字段[掌握类型名]不能为空(In 知识点掌握类型)!(clsKnowledgeMasterTypeBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeId) == false && GetStrLen(pobjKnowledgeMasterTypeEN.masterTypeId) > 1)
{
 throw new Error(`(errid:Watl000413)字段[掌握类型Id(masterTypeId)]的长度不能超过1(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.masterTypeId}(clsKnowledgeMasterTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeName) == false && GetStrLen(pobjKnowledgeMasterTypeEN.masterTypeName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[掌握类型名(masterTypeName)]的长度不能超过50(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.masterTypeName}(clsKnowledgeMasterTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeENName) == false && GetStrLen(pobjKnowledgeMasterTypeEN.masterTypeENName) > 50)
{
 throw new Error(`(errid:Watl000413)字段[掌握类型英文名(masterTypeENName)]的长度不能超过50(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.masterTypeENName}(clsKnowledgeMasterTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.updDate) == false && GetStrLen(pobjKnowledgeMasterTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.updDate}(clsKnowledgeMasterTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.updUser) == false && GetStrLen(pobjKnowledgeMasterTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.updUser}(clsKnowledgeMasterTypeBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.memo) == false && GetStrLen(pobjKnowledgeMasterTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.memo}(clsKnowledgeMasterTypeBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeId) == false && undefined !== pobjKnowledgeMasterTypeEN.masterTypeId && tzDataType.isString(pobjKnowledgeMasterTypeEN.masterTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握类型Id(masterTypeId)]的值:[${pobjKnowledgeMasterTypeEN.masterTypeId}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeName) == false && undefined !== pobjKnowledgeMasterTypeEN.masterTypeName && tzDataType.isString(pobjKnowledgeMasterTypeEN.masterTypeName) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握类型名(masterTypeName)]的值:[${pobjKnowledgeMasterTypeEN.masterTypeName}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeENName) == false && undefined !== pobjKnowledgeMasterTypeEN.masterTypeENName && tzDataType.isString(pobjKnowledgeMasterTypeEN.masterTypeENName) === false)
{
 throw new Error(`(errid:Watl000414)字段[掌握类型英文名(masterTypeENName)]的值:[${pobjKnowledgeMasterTypeEN.masterTypeENName}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.updDate) == false && undefined !== pobjKnowledgeMasterTypeEN.updDate && tzDataType.isString(pobjKnowledgeMasterTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjKnowledgeMasterTypeEN.updDate}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.updUser) == false && undefined !== pobjKnowledgeMasterTypeEN.updUser && tzDataType.isString(pobjKnowledgeMasterTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjKnowledgeMasterTypeEN.updUser}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.memo) == false && undefined !== pobjKnowledgeMasterTypeEN.memo && tzDataType.isString(pobjKnowledgeMasterTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjKnowledgeMasterTypeEN.memo}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function KnowledgeMasterType_CheckProperty4Update(pobjKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeId) == false && GetStrLen(pobjKnowledgeMasterTypeEN.masterTypeId) > 1)
{
 throw new Error(`(errid:Watl000416)字段[掌握类型Id(masterTypeId)]的长度不能超过1(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.masterTypeId}(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeName) == false && GetStrLen(pobjKnowledgeMasterTypeEN.masterTypeName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[掌握类型名(masterTypeName)]的长度不能超过50(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.masterTypeName}(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeENName) == false && GetStrLen(pobjKnowledgeMasterTypeEN.masterTypeENName) > 50)
{
 throw new Error(`(errid:Watl000416)字段[掌握类型英文名(masterTypeENName)]的长度不能超过50(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.masterTypeENName}(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.updDate) == false && GetStrLen(pobjKnowledgeMasterTypeEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.updDate}(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.updUser) == false && GetStrLen(pobjKnowledgeMasterTypeEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.updUser}(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.memo) == false && GetStrLen(pobjKnowledgeMasterTypeEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点掌握类型(KnowledgeMasterType))!值:${pobjKnowledgeMasterTypeEN.memo}(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeId) == false && undefined !== pobjKnowledgeMasterTypeEN.masterTypeId && tzDataType.isString(pobjKnowledgeMasterTypeEN.masterTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握类型Id(masterTypeId)]的值:[${pobjKnowledgeMasterTypeEN.masterTypeId}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeName) == false && undefined !== pobjKnowledgeMasterTypeEN.masterTypeName && tzDataType.isString(pobjKnowledgeMasterTypeEN.masterTypeName) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握类型名(masterTypeName)]的值:[${pobjKnowledgeMasterTypeEN.masterTypeName}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.masterTypeENName) == false && undefined !== pobjKnowledgeMasterTypeEN.masterTypeENName && tzDataType.isString(pobjKnowledgeMasterTypeEN.masterTypeENName) === false)
{
 throw new Error(`(errid:Watl000417)字段[掌握类型英文名(masterTypeENName)]的值:[${pobjKnowledgeMasterTypeEN.masterTypeENName}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.updDate) == false && undefined !== pobjKnowledgeMasterTypeEN.updDate && tzDataType.isString(pobjKnowledgeMasterTypeEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjKnowledgeMasterTypeEN.updDate}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.updUser) == false && undefined !== pobjKnowledgeMasterTypeEN.updUser && tzDataType.isString(pobjKnowledgeMasterTypeEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjKnowledgeMasterTypeEN.updUser}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjKnowledgeMasterTypeEN.memo) == false && undefined !== pobjKnowledgeMasterTypeEN.memo && tzDataType.isString(pobjKnowledgeMasterTypeEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjKnowledgeMasterTypeEN.memo}], 非法,应该为字符型(In 知识点掌握类型(KnowledgeMasterType))!(clsKnowledgeMasterTypeBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
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
export  function KnowledgeMasterType_GetJSONStrByObj (pobjKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN): string
{
pobjKnowledgeMasterTypeEN.sfUpdFldSetStr = pobjKnowledgeMasterTypeEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjKnowledgeMasterTypeEN);
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
export  function KnowledgeMasterType_GetObjLstByJSONStr (strJSON: string): Array<clsKnowledgeMasterTypeEN>
{
let arrKnowledgeMasterTypeObjLst = new Array<clsKnowledgeMasterTypeEN>();
if (strJSON === "")
{
return arrKnowledgeMasterTypeObjLst;
}
try
{
arrKnowledgeMasterTypeObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrKnowledgeMasterTypeObjLst;
}
return arrKnowledgeMasterTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrKnowledgeMasterTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function KnowledgeMasterType_GetObjLstByJSONObjLst (arrKnowledgeMasterTypeObjLstS: Array<clsKnowledgeMasterTypeEN>): Array<clsKnowledgeMasterTypeEN>
{
const arrKnowledgeMasterTypeObjLst = new Array<clsKnowledgeMasterTypeEN>();
for (const objInFor of arrKnowledgeMasterTypeObjLstS) {
const obj1 = KnowledgeMasterType_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrKnowledgeMasterTypeObjLst.push(obj1);
}
return arrKnowledgeMasterTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function KnowledgeMasterType_GetObjByJSONStr (strJSON: string): clsKnowledgeMasterTypeEN
{
let pobjKnowledgeMasterTypeEN = new clsKnowledgeMasterTypeEN();
if (strJSON === "")
{
return pobjKnowledgeMasterTypeEN;
}
try
{
pobjKnowledgeMasterTypeEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjKnowledgeMasterTypeEN;
}
return pobjKnowledgeMasterTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function KnowledgeMasterType_GetCombineCondition(objKnowledgeMasterTypeCond: clsKnowledgeMasterTypeEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterTypeCond.dicFldComparisonOp, clsKnowledgeMasterTypeEN.con_MasterTypeId) == true)
{
const strComparisonOpMasterTypeId:string = objKnowledgeMasterTypeCond.dicFldComparisonOp[clsKnowledgeMasterTypeEN.con_MasterTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterTypeEN.con_MasterTypeId, objKnowledgeMasterTypeCond.masterTypeId, strComparisonOpMasterTypeId);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterTypeCond.dicFldComparisonOp, clsKnowledgeMasterTypeEN.con_MasterTypeName) == true)
{
const strComparisonOpMasterTypeName:string = objKnowledgeMasterTypeCond.dicFldComparisonOp[clsKnowledgeMasterTypeEN.con_MasterTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterTypeEN.con_MasterTypeName, objKnowledgeMasterTypeCond.masterTypeName, strComparisonOpMasterTypeName);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterTypeCond.dicFldComparisonOp, clsKnowledgeMasterTypeEN.con_MasterTypeENName) == true)
{
const strComparisonOpMasterTypeENName:string = objKnowledgeMasterTypeCond.dicFldComparisonOp[clsKnowledgeMasterTypeEN.con_MasterTypeENName];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterTypeEN.con_MasterTypeENName, objKnowledgeMasterTypeCond.masterTypeENName, strComparisonOpMasterTypeENName);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterTypeCond.dicFldComparisonOp, clsKnowledgeMasterTypeEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objKnowledgeMasterTypeCond.dicFldComparisonOp[clsKnowledgeMasterTypeEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterTypeEN.con_UpdDate, objKnowledgeMasterTypeCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterTypeCond.dicFldComparisonOp, clsKnowledgeMasterTypeEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objKnowledgeMasterTypeCond.dicFldComparisonOp[clsKnowledgeMasterTypeEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterTypeEN.con_UpdUser, objKnowledgeMasterTypeCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objKnowledgeMasterTypeCond.dicFldComparisonOp, clsKnowledgeMasterTypeEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objKnowledgeMasterTypeCond.dicFldComparisonOp[clsKnowledgeMasterTypeEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsKnowledgeMasterTypeEN.con_Memo, objKnowledgeMasterTypeCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KnowledgeMasterType(知识点掌握类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strMasterTypeName: 掌握类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KnowledgeMasterType_GetUniCondStr(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and MasterTypeName = '{0}'", objKnowledgeMasterTypeEN.masterTypeName);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--KnowledgeMasterType(知识点掌握类型),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strMasterTypeName: 掌握类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function KnowledgeMasterType_GetUniCondStr4Update(objKnowledgeMasterTypeEN: clsKnowledgeMasterTypeEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and MasterTypeId <> '{0}'", objKnowledgeMasterTypeEN.masterTypeId);
 strWhereCond +=  Format(" and MasterTypeName = '{0}'", objKnowledgeMasterTypeEN.masterTypeName);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objKnowledgeMasterTypeENS:源对象
 * @param objKnowledgeMasterTypeENT:目标对象
*/
export  function KnowledgeMasterType_CopyObjTo(objKnowledgeMasterTypeENS: clsKnowledgeMasterTypeEN , objKnowledgeMasterTypeENT: clsKnowledgeMasterTypeEN ): void 
{
objKnowledgeMasterTypeENT.masterTypeId = objKnowledgeMasterTypeENS.masterTypeId; //掌握类型Id
objKnowledgeMasterTypeENT.masterTypeName = objKnowledgeMasterTypeENS.masterTypeName; //掌握类型名
objKnowledgeMasterTypeENT.masterTypeENName = objKnowledgeMasterTypeENS.masterTypeENName; //掌握类型英文名
objKnowledgeMasterTypeENT.updDate = objKnowledgeMasterTypeENS.updDate; //修改日期
objKnowledgeMasterTypeENT.updUser = objKnowledgeMasterTypeENS.updUser; //修改人
objKnowledgeMasterTypeENT.memo = objKnowledgeMasterTypeENS.memo; //备注
objKnowledgeMasterTypeENT.sfUpdFldSetStr = objKnowledgeMasterTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objKnowledgeMasterTypeENS:源对象
 * @param objKnowledgeMasterTypeENT:目标对象
*/
export  function KnowledgeMasterType_GetObjFromJsonObj(objKnowledgeMasterTypeENS: clsKnowledgeMasterTypeEN): clsKnowledgeMasterTypeEN 
{
 const objKnowledgeMasterTypeENT: clsKnowledgeMasterTypeEN = new clsKnowledgeMasterTypeEN();
ObjectAssign(objKnowledgeMasterTypeENT, objKnowledgeMasterTypeENS);
 return objKnowledgeMasterTypeENT;
}
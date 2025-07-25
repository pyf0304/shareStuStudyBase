
 /**
 * 类名:clsgs_KnowledgesLogicWApi
 * 表名:gs_KnowledgesLogic(01120872)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:13
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
 * 知识点逻辑(gs_KnowledgesLogic)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月10日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { ObjectAssign,GetExceptionStr,myShowErrorMsg } from "@/ts/PubFun/clsCommFunc4Web";
import { clsgs_KnowledgesLogicENEx } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicENEx";
import { clsgs_KnowledgesLogicEN } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicEN";
import { Format,GetStrLen,tzDataType,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { gs_KnowledgesGraph_func } from "@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesGraphWApi";
import { clsgs_KnowledgesGraphEN } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN";
import { cc_CourseKnowledges_func } from "@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi";
import { clscc_CourseKnowledgesEN } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN";
import { vcc_Course_Sim_func } from "@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi";
import { clsvcc_Course_SimEN } from "@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const gs_KnowledgesLogic_Controller = "gs_KnowledgesLogicApi";
 export const gs_KnowledgesLogic_ConstructorName = "gs_KnowledgesLogic";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function gs_KnowledgesLogic_GetObjBymIdAsync(lngmId: number): Promise<clsgs_KnowledgesLogicEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsgs_KnowledgesLogicWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const objgs_KnowledgesLogic = gs_KnowledgesLogic_GetObjFromJsonObj(returnObj);
return objgs_KnowledgesLogic;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_KnowledgesLogic_SortFunDefa(a:clsgs_KnowledgesLogicEN , b:clsgs_KnowledgesLogicEN): number 
{
return a.mId-b.mId;
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_KnowledgesLogic_SortFunDefa2Fld(a:clsgs_KnowledgesLogicEN , b:clsgs_KnowledgesLogicEN): number 
{
if (a.courseKnowledgeId == b.courseKnowledgeId) return a.knowledgeTitle.localeCompare(b.knowledgeTitle);
else return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_KnowledgesLogic_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_KnowledgesLogicEN.con_mId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return a.mId-b.mId;
}
case clsgs_KnowledgesLogicEN.con_CourseKnowledgeId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsgs_KnowledgesLogicEN.con_KnowledgeTitle:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (a.knowledgeTitle == null) return -1;
if (b.knowledgeTitle == null) return 1;
return a.knowledgeTitle.localeCompare(b.knowledgeTitle);
}
case clsgs_KnowledgesLogicEN.con_XPosition:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return a.xPosition-b.xPosition;
}
case clsgs_KnowledgesLogicEN.con_YPosition:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return a.yPosition-b.yPosition;
}
case clsgs_KnowledgesLogicEN.con_KnowledgeGraphId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (a.knowledgeGraphId == null) return -1;
if (b.knowledgeGraphId == null) return 1;
return a.knowledgeGraphId.localeCompare(b.knowledgeGraphId);
}
case clsgs_KnowledgesLogicEN.con_NodeColor:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (a.nodeColor == null) return -1;
if (b.nodeColor == null) return 1;
return a.nodeColor.localeCompare(b.nodeColor);
}
case clsgs_KnowledgesLogicEN.con_LogicNodeId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (a.logicNodeId == null) return -1;
if (b.logicNodeId == null) return 1;
return a.logicNodeId.localeCompare(b.logicNodeId);
}
case clsgs_KnowledgesLogicEN.con_ClassNameCss:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (a.classNameCss == null) return -1;
if (b.classNameCss == null) return 1;
return a.classNameCss.localeCompare(b.classNameCss);
}
case clsgs_KnowledgesLogicEN.con_CourseId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return a.courseId.localeCompare(b.courseId);
}
case clsgs_KnowledgesLogicEN.con_UpdDate:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsgs_KnowledgesLogicEN.con_UpdUser:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsgs_KnowledgesLogicEN.con_Memo:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesLogic]中不存在!(in ${ gs_KnowledgesLogic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsgs_KnowledgesLogicEN.con_mId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return b.mId-a.mId;
}
case clsgs_KnowledgesLogicEN.con_CourseKnowledgeId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsgs_KnowledgesLogicEN.con_KnowledgeTitle:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (b.knowledgeTitle == null) return -1;
if (a.knowledgeTitle == null) return 1;
return b.knowledgeTitle.localeCompare(a.knowledgeTitle);
}
case clsgs_KnowledgesLogicEN.con_XPosition:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return b.xPosition-a.xPosition;
}
case clsgs_KnowledgesLogicEN.con_YPosition:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return b.yPosition-a.yPosition;
}
case clsgs_KnowledgesLogicEN.con_KnowledgeGraphId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (b.knowledgeGraphId == null) return -1;
if (a.knowledgeGraphId == null) return 1;
return b.knowledgeGraphId.localeCompare(a.knowledgeGraphId);
}
case clsgs_KnowledgesLogicEN.con_NodeColor:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (b.nodeColor == null) return -1;
if (a.nodeColor == null) return 1;
return b.nodeColor.localeCompare(a.nodeColor);
}
case clsgs_KnowledgesLogicEN.con_LogicNodeId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (b.logicNodeId == null) return -1;
if (a.logicNodeId == null) return 1;
return b.logicNodeId.localeCompare(a.logicNodeId);
}
case clsgs_KnowledgesLogicEN.con_ClassNameCss:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (b.classNameCss == null) return -1;
if (a.classNameCss == null) return 1;
return b.classNameCss.localeCompare(a.classNameCss);
}
case clsgs_KnowledgesLogicEN.con_CourseId:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
return b.courseId.localeCompare(a.courseId);
}
case clsgs_KnowledgesLogicEN.con_UpdDate:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsgs_KnowledgesLogicEN.con_UpdUser:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsgs_KnowledgesLogicEN.con_Memo:
return (a: clsgs_KnowledgesLogicEN, b: clsgs_KnowledgesLogicEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesLogic]中不存在!(in ${ gs_KnowledgesLogic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function gs_KnowledgesLogic_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsgs_KnowledgesLogicEN.con_mId:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.mId === value;
}
case clsgs_KnowledgesLogicEN.con_CourseKnowledgeId:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.courseKnowledgeId === value;
}
case clsgs_KnowledgesLogicEN.con_KnowledgeTitle:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.knowledgeTitle === value;
}
case clsgs_KnowledgesLogicEN.con_XPosition:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.xPosition === value;
}
case clsgs_KnowledgesLogicEN.con_YPosition:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.yPosition === value;
}
case clsgs_KnowledgesLogicEN.con_KnowledgeGraphId:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.knowledgeGraphId === value;
}
case clsgs_KnowledgesLogicEN.con_NodeColor:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.nodeColor === value;
}
case clsgs_KnowledgesLogicEN.con_LogicNodeId:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.logicNodeId === value;
}
case clsgs_KnowledgesLogicEN.con_ClassNameCss:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.classNameCss === value;
}
case clsgs_KnowledgesLogicEN.con_CourseId:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.courseId === value;
}
case clsgs_KnowledgesLogicEN.con_UpdDate:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.updDate === value;
}
case clsgs_KnowledgesLogicEN.con_UpdUser:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.updUser === value;
}
case clsgs_KnowledgesLogicEN.con_Memo:
return (obj: clsgs_KnowledgesLogicEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[gs_KnowledgesLogic]中不存在!(in ${ gs_KnowledgesLogic_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[gs_KnowledgesLogic__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_KnowledgesLogic_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetFirstObjAsync(strWhereCond: string): Promise<clsgs_KnowledgesLogicEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const objgs_KnowledgesLogic = gs_KnowledgesLogic_GetObjFromJsonObj(returnObj);
return objgs_KnowledgesLogic;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetObjLstAsync(strWhereCond: string): Promise<Array<clsgs_KnowledgesLogicEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgesLogic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsgs_KnowledgesLogicEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgesLogic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsgs_KnowledgesLogicEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgesLogic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsgs_KnowledgesLogicEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgesLogic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsgs_KnowledgesLogicEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsgs_KnowledgesLogicEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = gs_KnowledgesLogic_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_DelRecordAsync(lngmId: number): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_Delgs_KnowledgesLogicsAsync(arrmId: Array<string>): Promise<number> 
{
const strThisFuncName = "Delgs_KnowledgesLogicsAsync";
const strAction = "Delgs_KnowledgesLogics";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objgs_KnowledgesLogicENS:源对象
 * @returns 目标对象=>clsgs_KnowledgesLogicEN:objgs_KnowledgesLogicENT
 **/
export  function gs_KnowledgesLogic_CopyToEx(objgs_KnowledgesLogicENS:clsgs_KnowledgesLogicEN ): clsgs_KnowledgesLogicENEx
{
const strThisFuncName  = gs_KnowledgesLogic_CopyToEx.name;
 const objgs_KnowledgesLogicENT = new clsgs_KnowledgesLogicENEx();
try
{
ObjectAssign(objgs_KnowledgesLogicENT, objgs_KnowledgesLogicENS);
 return objgs_KnowledgesLogicENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})", e, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objgs_KnowledgesLogicENT;
}
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function gs_KnowledgesLogic_FuncMapByFldName(strFldName: string, objgs_KnowledgesLogicEx: clsgs_KnowledgesLogicENEx)
{
const strThisFuncName = gs_KnowledgesLogic_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsgs_KnowledgesLogicEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsgs_KnowledgesLogicENEx.con_KnowledgeName:
return gs_KnowledgesLogic_FuncMapKnowledgeName(objgs_KnowledgesLogicEx);
case clsgs_KnowledgesLogicENEx.con_CourseName:
return gs_KnowledgesLogic_FuncMapCourseName(objgs_KnowledgesLogicEx);
case clsgs_KnowledgesLogicENEx.con_KnowledgeGraphName:
return gs_KnowledgesLogic_FuncMapKnowledgeGraphName(objgs_KnowledgesLogicEx);
        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function gs_KnowledgesLogic_SortFunByExKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsgs_KnowledgesLogicENEx.con_KnowledgeName:
return (a: clsgs_KnowledgesLogicENEx, b: clsgs_KnowledgesLogicENEx) => {
return a.knowledgeName.localeCompare(b.knowledgeName);
}
case clsgs_KnowledgesLogicENEx.con_CourseName:
return (a: clsgs_KnowledgesLogicENEx, b: clsgs_KnowledgesLogicENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return -1;
if (b.courseName === null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clsgs_KnowledgesLogicENEx.con_KnowledgeGraphName:
return (a: clsgs_KnowledgesLogicENEx, b: clsgs_KnowledgesLogicENEx) => {
    if (a.knowledgeGraphName === null && b.knowledgeGraphName === null) return 0;
if (a.knowledgeGraphName === null) return -1;
if (b.knowledgeGraphName === null) return 1;
return a.knowledgeGraphName.localeCompare(b.knowledgeGraphName);
}
        default:
return gs_KnowledgesLogic_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsgs_KnowledgesLogicENEx.con_KnowledgeName:
return (a: clsgs_KnowledgesLogicENEx, b: clsgs_KnowledgesLogicENEx) => {
return b.knowledgeName.localeCompare(a.knowledgeName);
}
case clsgs_KnowledgesLogicENEx.con_CourseName:
return (a: clsgs_KnowledgesLogicENEx, b: clsgs_KnowledgesLogicENEx) => {
    if (a.courseName === null && b.courseName === null) return 0;
if (a.courseName === null) return 1;
if (b.courseName === null) return -1;
return b.courseName.localeCompare(a.courseName);
}
case clsgs_KnowledgesLogicENEx.con_KnowledgeGraphName:
return (a: clsgs_KnowledgesLogicENEx, b: clsgs_KnowledgesLogicENEx) => {
    if (a.knowledgeGraphName === null && b.knowledgeGraphName === null) return 0;
if (a.knowledgeGraphName === null) return 1;
if (b.knowledgeGraphName === null) return -1;
return b.knowledgeGraphName.localeCompare(a.knowledgeGraphName);
}
        default:
return gs_KnowledgesLogic_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objgs_KnowledgesLogicS:源对象
 **/
export  async function gs_KnowledgesLogic_FuncMapKnowledgeGraphName(objgs_KnowledgesLogic:clsgs_KnowledgesLogicENEx )
{
const strThisFuncName = gs_KnowledgesLogic_FuncMapKnowledgeGraphName.name;
try
{
if (IsNullOrEmpty(objgs_KnowledgesLogic.knowledgeGraphName) == true){
 const gsKnowledgesGraphKnowledgeGraphId = objgs_KnowledgesLogic.knowledgeGraphId;
if (IsNullOrEmpty(objgs_KnowledgesLogic.courseId) == true)
{
const strMsg = `函数映射[KnowledgeGraphName]数据出错,courseId不能为空!(in ${ gs_KnowledgesLogic_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const gsKnowledgesGraphKnowledgeGraphName = await gs_KnowledgesGraph_func(clsgs_KnowledgesGraphEN.con_KnowledgeGraphId, clsgs_KnowledgesGraphEN.con_KnowledgeGraphName, gsKnowledgesGraphKnowledgeGraphId , objgs_KnowledgesLogic.courseId);
 objgs_KnowledgesLogic.knowledgeGraphName = gsKnowledgesGraphKnowledgeGraphName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001446)函数映射表对象数据出错,{0}.(in {1}.{2})", e, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objgs_KnowledgesLogicS:源对象
 **/
export  async function gs_KnowledgesLogic_FuncMapKnowledgeName(objgs_KnowledgesLogic:clsgs_KnowledgesLogicENEx )
{
const strThisFuncName = gs_KnowledgesLogic_FuncMapKnowledgeName.name;
try
{
if (IsNullOrEmpty(objgs_KnowledgesLogic.knowledgeName) == true){
 const ccCourseKnowledgesCourseKnowledgeId = objgs_KnowledgesLogic.courseKnowledgeId;
if (IsNullOrEmpty(objgs_KnowledgesLogic.courseId) == true)
{
const strMsg = `函数映射[KnowledgeName]数据出错,courseId不能为空!(in ${ gs_KnowledgesLogic_ConstructorName }.${strThisFuncName})`
console.error(strMsg);
alert(strMsg);
return;
}
 const ccCourseKnowledgesKnowledgeName = await cc_CourseKnowledges_func(clscc_CourseKnowledgesEN.con_CourseKnowledgeId, clscc_CourseKnowledgesEN.con_KnowledgeName, ccCourseKnowledgesCourseKnowledgeId , objgs_KnowledgesLogic.courseId);
 objgs_KnowledgesLogic.knowledgeName = ccCourseKnowledgesKnowledgeName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001447)函数映射表对象数据出错,{0}.(in {1}.{2})", e, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}
 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objgs_KnowledgesLogicS:源对象
 **/
export  async function gs_KnowledgesLogic_FuncMapCourseName(objgs_KnowledgesLogic:clsgs_KnowledgesLogicENEx )
{
const strThisFuncName = gs_KnowledgesLogic_FuncMapCourseName.name;
try
{
if (IsNullOrEmpty(objgs_KnowledgesLogic.courseName) == true){
 const vccCourseSimCourseId = objgs_KnowledgesLogic.courseId;
 const vccCourseSimCourseName = await vcc_Course_Sim_func(clsvcc_Course_SimEN.con_CourseId, clsvcc_Course_SimEN.con_CourseName, vccCourseSimCourseId );
 objgs_KnowledgesLogic.courseName = vccCourseSimCourseName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl001412)函数映射表对象数据出错,{0}.(in {1}.{2})", e, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export  async function gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "Delgs_KnowledgesLogicsByCondAsync";
const strAction = "Delgs_KnowledgesLogicsByCond";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgesLogicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function gs_KnowledgesLogic_AddNewRecordAsync(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
 //var strJSON = JSON.stringify(objgs_KnowledgesLogicEN);
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgesLogicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_AddNewObjSave(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
gs_KnowledgesLogic_CheckPropertyNew(objgs_KnowledgesLogicEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gs_KnowledgesLogic_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await gs_KnowledgesLogic_CheckUniCond4Add(objgs_KnowledgesLogicEN);
if (bolIsExistCond == false)
{
return { keyword: '', success: false };
}
let returnBool = false;
returnBool = await gs_KnowledgesLogic_AddNewRecordAsync(objgs_KnowledgesLogicEN);
if (returnBool == true)
{
//gs_KnowledgesLogic_ReFreshCache(objgs_KnowledgesLogicEN.courseId);
}
else
{
const strInfo = `添加[知识点逻辑(gs_KnowledgesLogic)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objgs_KnowledgesLogicEN.mId.toString(), success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ gs_KnowledgesLogic_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export  async function gs_KnowledgesLogic_CheckUniCond4Add(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): Promise<boolean>{
const strUniquenessCondition = gs_KnowledgesLogic_GetUniCondStr(objgs_KnowledgesLogicEN);
const bolIsExistCondition = await gs_KnowledgesLogic_IsExistRecordAsync(strUniquenessCondition);
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
export  async function gs_KnowledgesLogic_CheckUniCond4Update(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): Promise<boolean>{
const strUniquenessCondition = gs_KnowledgesLogic_GetUniCondStr4Update(objgs_KnowledgesLogicEN);
const bolIsExistCondition = await gs_KnowledgesLogic_IsExistRecordAsync(strUniquenessCondition);
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
export  async function gs_KnowledgesLogic_UpdateObjSave(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objgs_KnowledgesLogicEN.sfUpdFldSetStr = objgs_KnowledgesLogicEN.updFldString;//设置哪些字段被修改(脏字段)
if (objgs_KnowledgesLogicEN.mId == 0 || objgs_KnowledgesLogicEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
gs_KnowledgesLogic_CheckProperty4Update(objgs_KnowledgesLogicEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ gs_KnowledgesLogic_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const bolIsExistCond = await gs_KnowledgesLogic_CheckUniCond4Update(objgs_KnowledgesLogicEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await gs_KnowledgesLogic_UpdateRecordAsync(objgs_KnowledgesLogicEN);
if (returnBool == true)
{
//gs_KnowledgesLogic_ReFreshCache(objgs_KnowledgesLogicEN.courseId);
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ gs_KnowledgesLogic_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objgs_KnowledgesLogicEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function gs_KnowledgesLogic_AddNewRecordWithReturnKeyAsync(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgesLogicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgesLogicEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_KnowledgesLogic_UpdateRecordAsync(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objgs_KnowledgesLogicEN.sfUpdFldSetStr === undefined || objgs_KnowledgesLogicEN.sfUpdFldSetStr === null || objgs_KnowledgesLogicEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_KnowledgesLogicEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgesLogicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgesLogicEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function gs_KnowledgesLogic_EditRecordExAsync(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objgs_KnowledgesLogicEN.sfUpdFldSetStr === undefined || objgs_KnowledgesLogicEN.sfUpdFldSetStr === null || objgs_KnowledgesLogicEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_KnowledgesLogicEN.mId);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgesLogicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
 * @param objgs_KnowledgesLogicEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function gs_KnowledgesLogic_UpdateWithConditionAsync(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objgs_KnowledgesLogicEN.sfUpdFldSetStr === undefined || objgs_KnowledgesLogicEN.sfUpdFldSetStr === null || objgs_KnowledgesLogicEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objgs_KnowledgesLogicEN.mId);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);
objgs_KnowledgesLogicEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objgs_KnowledgesLogicEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  async function gs_KnowledgesLogic_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(gs_KnowledgesLogic_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, gs_KnowledgesLogic_ConstructorName, strThisFuncName);
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
export  function gs_KnowledgesLogic_GetWebApiUrl(strController: string, strAction: string): string {
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
export  function gs_KnowledgesLogic_CheckPropertyNew(pobjgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseKnowledgeId) === true 
 || pobjgs_KnowledgesLogicEN.courseKnowledgeId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[知识点Id]不能为空(In 知识点逻辑)!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseId) === true 
 || pobjgs_KnowledgesLogicEN.courseId.toString()  ===  "0" )
{
 throw new Error(`(errid:Watl000411)字段[课程Id]不能为空(In 知识点逻辑)!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseKnowledgeId) == false && GetStrLen(pobjgs_KnowledgesLogicEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.courseKnowledgeId}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.knowledgeTitle) == false && GetStrLen(pobjgs_KnowledgesLogicEN.knowledgeTitle) > 200)
{
 throw new Error(`(errid:Watl000413)字段[知识点标题(knowledgeTitle)]的长度不能超过200(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.knowledgeTitle}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.knowledgeGraphId) == false && GetStrLen(pobjgs_KnowledgesLogicEN.knowledgeGraphId) > 10)
{
 throw new Error(`(errid:Watl000413)字段[知识点图Id(knowledgeGraphId)]的长度不能超过10(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.knowledgeGraphId}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.nodeColor) == false && GetStrLen(pobjgs_KnowledgesLogicEN.nodeColor) > 50)
{
 throw new Error(`(errid:Watl000413)字段[结点颜色(nodeColor)]的长度不能超过50(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.nodeColor}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.logicNodeId) == false && GetStrLen(pobjgs_KnowledgesLogicEN.logicNodeId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[逻辑节点Id(logicNodeId)]的长度不能超过20(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.logicNodeId}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.classNameCss) == false && GetStrLen(pobjgs_KnowledgesLogicEN.classNameCss) > 100)
{
 throw new Error(`(errid:Watl000413)字段[样式名称(classNameCss)]的长度不能超过100(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.classNameCss}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseId) == false && GetStrLen(pobjgs_KnowledgesLogicEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课程Id(courseId)]的长度不能超过8(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.courseId}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.updDate) == false && GetStrLen(pobjgs_KnowledgesLogicEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.updDate}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.updUser) == false && GetStrLen(pobjgs_KnowledgesLogicEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.updUser}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.memo) == false && GetStrLen(pobjgs_KnowledgesLogicEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.memo}(clsgs_KnowledgesLogicBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (null != pobjgs_KnowledgesLogicEN.mId && undefined !== pobjgs_KnowledgesLogicEN.mId && tzDataType.isNumber(pobjgs_KnowledgesLogicEN.mId) === false)
{
 throw new Error(`(errid:Watl000414)字段[mId(mId)]的值:[${pobjgs_KnowledgesLogicEN.mId}], 非法,应该为数值型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseKnowledgeId) == false && undefined !== pobjgs_KnowledgesLogicEN.courseKnowledgeId && tzDataType.isString(pobjgs_KnowledgesLogicEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点Id(courseKnowledgeId)]的值:[${pobjgs_KnowledgesLogicEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.knowledgeTitle) == false && undefined !== pobjgs_KnowledgesLogicEN.knowledgeTitle && tzDataType.isString(pobjgs_KnowledgesLogicEN.knowledgeTitle) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点标题(knowledgeTitle)]的值:[${pobjgs_KnowledgesLogicEN.knowledgeTitle}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (null != pobjgs_KnowledgesLogicEN.xPosition && undefined !== pobjgs_KnowledgesLogicEN.xPosition && tzDataType.isNumber(pobjgs_KnowledgesLogicEN.xPosition) === false)
{
 throw new Error(`(errid:Watl000414)字段[X_坐标(xPosition)]的值:[${pobjgs_KnowledgesLogicEN.xPosition}], 非法,应该为数值型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (null != pobjgs_KnowledgesLogicEN.yPosition && undefined !== pobjgs_KnowledgesLogicEN.yPosition && tzDataType.isNumber(pobjgs_KnowledgesLogicEN.yPosition) === false)
{
 throw new Error(`(errid:Watl000414)字段[Y_坐标(yPosition)]的值:[${pobjgs_KnowledgesLogicEN.yPosition}], 非法,应该为数值型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.knowledgeGraphId) == false && undefined !== pobjgs_KnowledgesLogicEN.knowledgeGraphId && tzDataType.isString(pobjgs_KnowledgesLogicEN.knowledgeGraphId) === false)
{
 throw new Error(`(errid:Watl000414)字段[知识点图Id(knowledgeGraphId)]的值:[${pobjgs_KnowledgesLogicEN.knowledgeGraphId}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.nodeColor) == false && undefined !== pobjgs_KnowledgesLogicEN.nodeColor && tzDataType.isString(pobjgs_KnowledgesLogicEN.nodeColor) === false)
{
 throw new Error(`(errid:Watl000414)字段[结点颜色(nodeColor)]的值:[${pobjgs_KnowledgesLogicEN.nodeColor}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.logicNodeId) == false && undefined !== pobjgs_KnowledgesLogicEN.logicNodeId && tzDataType.isString(pobjgs_KnowledgesLogicEN.logicNodeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[逻辑节点Id(logicNodeId)]的值:[${pobjgs_KnowledgesLogicEN.logicNodeId}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.classNameCss) == false && undefined !== pobjgs_KnowledgesLogicEN.classNameCss && tzDataType.isString(pobjgs_KnowledgesLogicEN.classNameCss) === false)
{
 throw new Error(`(errid:Watl000414)字段[样式名称(classNameCss)]的值:[${pobjgs_KnowledgesLogicEN.classNameCss}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseId) == false && undefined !== pobjgs_KnowledgesLogicEN.courseId && tzDataType.isString(pobjgs_KnowledgesLogicEN.courseId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课程Id(courseId)]的值:[${pobjgs_KnowledgesLogicEN.courseId}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.updDate) == false && undefined !== pobjgs_KnowledgesLogicEN.updDate && tzDataType.isString(pobjgs_KnowledgesLogicEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjgs_KnowledgesLogicEN.updDate}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.updUser) == false && undefined !== pobjgs_KnowledgesLogicEN.updUser && tzDataType.isString(pobjgs_KnowledgesLogicEN.updUser) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjgs_KnowledgesLogicEN.updUser}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.memo) == false && undefined !== pobjgs_KnowledgesLogicEN.memo && tzDataType.isString(pobjgs_KnowledgesLogicEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjgs_KnowledgesLogicEN.memo}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function gs_KnowledgesLogic_CheckProperty4Update(pobjgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseKnowledgeId) == false && GetStrLen(pobjgs_KnowledgesLogicEN.courseKnowledgeId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[知识点Id(courseKnowledgeId)]的长度不能超过8(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.courseKnowledgeId}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.knowledgeTitle) == false && GetStrLen(pobjgs_KnowledgesLogicEN.knowledgeTitle) > 200)
{
 throw new Error(`(errid:Watl000416)字段[知识点标题(knowledgeTitle)]的长度不能超过200(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.knowledgeTitle}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.knowledgeGraphId) == false && GetStrLen(pobjgs_KnowledgesLogicEN.knowledgeGraphId) > 10)
{
 throw new Error(`(errid:Watl000416)字段[知识点图Id(knowledgeGraphId)]的长度不能超过10(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.knowledgeGraphId}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.nodeColor) == false && GetStrLen(pobjgs_KnowledgesLogicEN.nodeColor) > 50)
{
 throw new Error(`(errid:Watl000416)字段[结点颜色(nodeColor)]的长度不能超过50(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.nodeColor}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.logicNodeId) == false && GetStrLen(pobjgs_KnowledgesLogicEN.logicNodeId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[逻辑节点Id(logicNodeId)]的长度不能超过20(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.logicNodeId}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.classNameCss) == false && GetStrLen(pobjgs_KnowledgesLogicEN.classNameCss) > 100)
{
 throw new Error(`(errid:Watl000416)字段[样式名称(classNameCss)]的长度不能超过100(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.classNameCss}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseId) == false && GetStrLen(pobjgs_KnowledgesLogicEN.courseId) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课程Id(courseId)]的长度不能超过8(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.courseId}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.updDate) == false && GetStrLen(pobjgs_KnowledgesLogicEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.updDate}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.updUser) == false && GetStrLen(pobjgs_KnowledgesLogicEN.updUser) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.updUser}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.memo) == false && GetStrLen(pobjgs_KnowledgesLogicEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点逻辑(gs_KnowledgesLogic))!值:${pobjgs_KnowledgesLogicEN.memo}(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (null != pobjgs_KnowledgesLogicEN.mId && undefined !== pobjgs_KnowledgesLogicEN.mId && tzDataType.isNumber(pobjgs_KnowledgesLogicEN.mId) === false)
{
 throw new Error(`(errid:Watl000417)字段[mId(mId)]的值:[${pobjgs_KnowledgesLogicEN.mId}], 非法,应该为数值型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseKnowledgeId) == false && undefined !== pobjgs_KnowledgesLogicEN.courseKnowledgeId && tzDataType.isString(pobjgs_KnowledgesLogicEN.courseKnowledgeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点Id(courseKnowledgeId)]的值:[${pobjgs_KnowledgesLogicEN.courseKnowledgeId}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.knowledgeTitle) == false && undefined !== pobjgs_KnowledgesLogicEN.knowledgeTitle && tzDataType.isString(pobjgs_KnowledgesLogicEN.knowledgeTitle) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点标题(knowledgeTitle)]的值:[${pobjgs_KnowledgesLogicEN.knowledgeTitle}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (null != pobjgs_KnowledgesLogicEN.xPosition && undefined !== pobjgs_KnowledgesLogicEN.xPosition && tzDataType.isNumber(pobjgs_KnowledgesLogicEN.xPosition) === false)
{
 throw new Error(`(errid:Watl000417)字段[X_坐标(xPosition)]的值:[${pobjgs_KnowledgesLogicEN.xPosition}], 非法,应该为数值型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (null != pobjgs_KnowledgesLogicEN.yPosition && undefined !== pobjgs_KnowledgesLogicEN.yPosition && tzDataType.isNumber(pobjgs_KnowledgesLogicEN.yPosition) === false)
{
 throw new Error(`(errid:Watl000417)字段[Y_坐标(yPosition)]的值:[${pobjgs_KnowledgesLogicEN.yPosition}], 非法,应该为数值型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.knowledgeGraphId) == false && undefined !== pobjgs_KnowledgesLogicEN.knowledgeGraphId && tzDataType.isString(pobjgs_KnowledgesLogicEN.knowledgeGraphId) === false)
{
 throw new Error(`(errid:Watl000417)字段[知识点图Id(knowledgeGraphId)]的值:[${pobjgs_KnowledgesLogicEN.knowledgeGraphId}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.nodeColor) == false && undefined !== pobjgs_KnowledgesLogicEN.nodeColor && tzDataType.isString(pobjgs_KnowledgesLogicEN.nodeColor) === false)
{
 throw new Error(`(errid:Watl000417)字段[结点颜色(nodeColor)]的值:[${pobjgs_KnowledgesLogicEN.nodeColor}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.logicNodeId) == false && undefined !== pobjgs_KnowledgesLogicEN.logicNodeId && tzDataType.isString(pobjgs_KnowledgesLogicEN.logicNodeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[逻辑节点Id(logicNodeId)]的值:[${pobjgs_KnowledgesLogicEN.logicNodeId}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.classNameCss) == false && undefined !== pobjgs_KnowledgesLogicEN.classNameCss && tzDataType.isString(pobjgs_KnowledgesLogicEN.classNameCss) === false)
{
 throw new Error(`(errid:Watl000417)字段[样式名称(classNameCss)]的值:[${pobjgs_KnowledgesLogicEN.classNameCss}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.courseId) == false && undefined !== pobjgs_KnowledgesLogicEN.courseId && tzDataType.isString(pobjgs_KnowledgesLogicEN.courseId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课程Id(courseId)]的值:[${pobjgs_KnowledgesLogicEN.courseId}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.updDate) == false && undefined !== pobjgs_KnowledgesLogicEN.updDate && tzDataType.isString(pobjgs_KnowledgesLogicEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjgs_KnowledgesLogicEN.updDate}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.updUser) == false && undefined !== pobjgs_KnowledgesLogicEN.updUser && tzDataType.isString(pobjgs_KnowledgesLogicEN.updUser) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjgs_KnowledgesLogicEN.updUser}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjgs_KnowledgesLogicEN.memo) == false && undefined !== pobjgs_KnowledgesLogicEN.memo && tzDataType.isString(pobjgs_KnowledgesLogicEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjgs_KnowledgesLogicEN.memo}], 非法,应该为字符型(In 知识点逻辑(gs_KnowledgesLogic))!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (null === pobjgs_KnowledgesLogicEN.mId 
 || pobjgs_KnowledgesLogicEN.mId != null && pobjgs_KnowledgesLogicEN.mId.toString()  ===  "")
{
 throw new Error(`(errid:Watl000064)字段[mId]不能为空(In 知识点逻辑)!(clsgs_KnowledgesLogicBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_KnowledgesLogic_GetJSONStrByObj (pobjgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN): string
{
pobjgs_KnowledgesLogicEN.sfUpdFldSetStr = pobjgs_KnowledgesLogicEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjgs_KnowledgesLogicEN);
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
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function gs_KnowledgesLogic_GetObjLstByJSONStr (strJSON: string): Array<clsgs_KnowledgesLogicEN>
{
let arrgs_KnowledgesLogicObjLst = new Array<clsgs_KnowledgesLogicEN>();
if (strJSON === "")
{
return arrgs_KnowledgesLogicObjLst;
}
try
{
arrgs_KnowledgesLogicObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrgs_KnowledgesLogicObjLst;
}
return arrgs_KnowledgesLogicObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_KnowledgesLogicObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function gs_KnowledgesLogic_GetObjLstByJSONObjLst (arrgs_KnowledgesLogicObjLstS: Array<clsgs_KnowledgesLogicEN>): Array<clsgs_KnowledgesLogicEN>
{
const arrgs_KnowledgesLogicObjLst = new Array<clsgs_KnowledgesLogicEN>();
for (const objInFor of arrgs_KnowledgesLogicObjLstS) {
const obj1 = gs_KnowledgesLogic_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrgs_KnowledgesLogicObjLst.push(obj1);
}
return arrgs_KnowledgesLogicObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function gs_KnowledgesLogic_GetObjByJSONStr (strJSON: string): clsgs_KnowledgesLogicEN
{
let pobjgs_KnowledgesLogicEN = new clsgs_KnowledgesLogicEN();
if (strJSON === "")
{
return pobjgs_KnowledgesLogicEN;
}
try
{
pobjgs_KnowledgesLogicEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjgs_KnowledgesLogicEN;
}
return pobjgs_KnowledgesLogicEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function gs_KnowledgesLogic_GetCombineCondition(objgs_KnowledgesLogicCond: clsgs_KnowledgesLogicEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_mId) == true)
{
const strComparisonOpmId:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsgs_KnowledgesLogicEN.con_mId, objgs_KnowledgesLogicCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_CourseKnowledgeId, objgs_KnowledgesLogicCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_KnowledgeTitle) == true)
{
const strComparisonOpKnowledgeTitle:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_KnowledgeTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_KnowledgeTitle, objgs_KnowledgesLogicCond.knowledgeTitle, strComparisonOpKnowledgeTitle);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_XPosition) == true)
{
const strComparisonOpXPosition:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_XPosition];
strWhereCond += Format(" And {0} {2} {1}", clsgs_KnowledgesLogicEN.con_XPosition, objgs_KnowledgesLogicCond.xPosition, strComparisonOpXPosition);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_YPosition) == true)
{
const strComparisonOpYPosition:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_YPosition];
strWhereCond += Format(" And {0} {2} {1}", clsgs_KnowledgesLogicEN.con_YPosition, objgs_KnowledgesLogicCond.yPosition, strComparisonOpYPosition);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_KnowledgeGraphId) == true)
{
const strComparisonOpKnowledgeGraphId:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_KnowledgeGraphId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_KnowledgeGraphId, objgs_KnowledgesLogicCond.knowledgeGraphId, strComparisonOpKnowledgeGraphId);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_NodeColor) == true)
{
const strComparisonOpNodeColor:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_NodeColor];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_NodeColor, objgs_KnowledgesLogicCond.nodeColor, strComparisonOpNodeColor);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_LogicNodeId) == true)
{
const strComparisonOpLogicNodeId:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_LogicNodeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_LogicNodeId, objgs_KnowledgesLogicCond.logicNodeId, strComparisonOpLogicNodeId);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_ClassNameCss) == true)
{
const strComparisonOpClassNameCss:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_ClassNameCss];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_ClassNameCss, objgs_KnowledgesLogicCond.classNameCss, strComparisonOpClassNameCss);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_CourseId, objgs_KnowledgesLogicCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_UpdDate, objgs_KnowledgesLogicCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_UpdUser, objgs_KnowledgesLogicCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objgs_KnowledgesLogicCond.dicFldComparisonOp, clsgs_KnowledgesLogicEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objgs_KnowledgesLogicCond.dicFldComparisonOp[clsgs_KnowledgesLogicEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsgs_KnowledgesLogicEN.con_Memo, objgs_KnowledgesLogicCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_KnowledgesLogic(知识点逻辑),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @param strKnowledgeGraphId: 知识点图Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_KnowledgesLogic_GetUniCondStr(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objgs_KnowledgesLogicEN.courseKnowledgeId);
 strWhereCond +=  Format(" and KnowledgeGraphId = '{0}'", objgs_KnowledgesLogicEN.knowledgeGraphId);
 return strWhereCond;
}

 /**
 *获取唯一性条件串(Uniqueness)--gs_KnowledgesLogic(知识点逻辑),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strCourseKnowledgeId: 知识点Id(要求唯一的字段)
 * @param strKnowledgeGraphId: 知识点图Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export  function gs_KnowledgesLogic_GetUniCondStr4Update(objgs_KnowledgesLogicEN: clsgs_KnowledgesLogicEN ):string
{
let strWhereCond = " 1 = 1 ";
 strWhereCond += Format(" and mId <> '{0}'", objgs_KnowledgesLogicEN.mId);
 strWhereCond +=  Format(" and CourseKnowledgeId = '{0}'", objgs_KnowledgesLogicEN.courseKnowledgeId);
 strWhereCond +=  Format(" and KnowledgeGraphId = '{0}'", objgs_KnowledgesLogicEN.knowledgeGraphId);
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_KnowledgesLogicENS:源对象
 * @param objgs_KnowledgesLogicENT:目标对象
*/
export  function gs_KnowledgesLogic_CopyObjTo(objgs_KnowledgesLogicENS: clsgs_KnowledgesLogicEN , objgs_KnowledgesLogicENT: clsgs_KnowledgesLogicEN ): void 
{
objgs_KnowledgesLogicENT.mId = objgs_KnowledgesLogicENS.mId; //mId
objgs_KnowledgesLogicENT.courseKnowledgeId = objgs_KnowledgesLogicENS.courseKnowledgeId; //知识点Id
objgs_KnowledgesLogicENT.knowledgeTitle = objgs_KnowledgesLogicENS.knowledgeTitle; //知识点标题
objgs_KnowledgesLogicENT.xPosition = objgs_KnowledgesLogicENS.xPosition; //X_坐标
objgs_KnowledgesLogicENT.yPosition = objgs_KnowledgesLogicENS.yPosition; //Y_坐标
objgs_KnowledgesLogicENT.knowledgeGraphId = objgs_KnowledgesLogicENS.knowledgeGraphId; //知识点图Id
objgs_KnowledgesLogicENT.nodeColor = objgs_KnowledgesLogicENS.nodeColor; //结点颜色
objgs_KnowledgesLogicENT.logicNodeId = objgs_KnowledgesLogicENS.logicNodeId; //逻辑节点Id
objgs_KnowledgesLogicENT.classNameCss = objgs_KnowledgesLogicENS.classNameCss; //样式名称
objgs_KnowledgesLogicENT.courseId = objgs_KnowledgesLogicENS.courseId; //课程Id
objgs_KnowledgesLogicENT.updDate = objgs_KnowledgesLogicENS.updDate; //修改日期
objgs_KnowledgesLogicENT.updUser = objgs_KnowledgesLogicENS.updUser; //修改人
objgs_KnowledgesLogicENT.memo = objgs_KnowledgesLogicENS.memo; //备注
objgs_KnowledgesLogicENT.sfUpdFldSetStr = objgs_KnowledgesLogicENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_KnowledgesLogicENS:源对象
 * @param objgs_KnowledgesLogicENT:目标对象
*/
export  function gs_KnowledgesLogic_GetObjFromJsonObj(objgs_KnowledgesLogicENS: clsgs_KnowledgesLogicEN): clsgs_KnowledgesLogicEN 
{
 const objgs_KnowledgesLogicENT: clsgs_KnowledgesLogicEN = new clsgs_KnowledgesLogicEN();
ObjectAssign(objgs_KnowledgesLogicENT, objgs_KnowledgesLogicENS);
 return objgs_KnowledgesLogicENT;
}
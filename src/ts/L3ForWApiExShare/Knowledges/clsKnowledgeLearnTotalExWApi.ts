﻿
 /**
 * 类名:clsKnowledgeLearnTotalExWApi
 * 表名:KnowledgeLearnTotal(01120155)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/10 11:14:28
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx,0190)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

 /**
 * 知识点学习汇总表(KnowledgeLearnTotal)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
* Created by pyf on 2025年03月10日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import { ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsKnowledgeLearnTotalENEx } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnTotalENEx";
import { KnowledgeLearnTotal_GetObjLstByPagerAsync,KnowledgeLearnTotal_SortFunByKey,KnowledgeLearnTotal_FilterFunByKey } from "@/ts/L3ForWApi/Knowledges/clsKnowledgeLearnTotalWApi";
import { cc_CourseKnowledges_func,cc_CourseKnowledges_funcKey } from "@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi";
import { clscc_CourseKnowledgesEN } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN";
import { clsKnowledgeLearnTotalEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnTotalEN";
import { Format,IsNullOrEmpty } from "@/ts/PubFun/clsString";
import { enumComparisonOp } from "@/ts/PubFun/enumComparisonOp";
import { clsSysPara4WebApi } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";

export const knowledgeLearnTotalEx_Controller = "KnowledgeLearnTotalExApi";
export const knowledgeLearnTotalEx_ConstructorName = "knowledgeLearnTotalEx";

 /**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export  function KnowledgeLearnTotalEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objKnowledgeLearnTotalENS:源对象
 * @returns 目标对象=>clsKnowledgeLearnTotalEN:objKnowledgeLearnTotalENT
 **/
export  function KnowledgeLearnTotalEx_CopyToEx(objKnowledgeLearnTotalENS:clsKnowledgeLearnTotalEN ): clsKnowledgeLearnTotalENEx
{
const strThisFuncName  = KnowledgeLearnTotalEx_CopyToEx.name;
 const objKnowledgeLearnTotalENT = new clsKnowledgeLearnTotalENEx();
try
{
ObjectAssign(objKnowledgeLearnTotalENT, objKnowledgeLearnTotalENS);
 return objKnowledgeLearnTotalENT;
}
catch (e)
{
const strMsg = Format("(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})", e, knowledgeLearnTotalEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objKnowledgeLearnTotalENT;
}
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
*/
export  async function KnowledgeLearnTotalEx_GetObjExLstByPagerAsync(objPagerPara: stuPagerPara):Promise<Array<clsKnowledgeLearnTotalENEx>> {
const strThisFuncName = "GetObjExLstByPagerAsync";
const arrKnowledgeLearnTotalObjLst = await KnowledgeLearnTotal_GetObjLstByPagerAsync(objPagerPara);
const arrKnowledgeLearnTotalExObjLst = arrKnowledgeLearnTotalObjLst.map(KnowledgeLearnTotalEx_CopyToEx);
if (arrKnowledgeLearnTotalExObjLst.length == 0) return arrKnowledgeLearnTotalExObjLst;
let arrKnowledgeLearnTotalSel: Array < clsKnowledgeLearnTotalENEx > = arrKnowledgeLearnTotalExObjLst;
try {
if (objPagerPara.orderBy != null && objPagerPara.orderBy.length>0) {
const sstrSplit: string[] = objPagerPara.orderBy.split(" ");
let strSortType = "asc";
const strSortFld = sstrSplit[0];
if (sstrSplit.length > 1) strSortType = sstrSplit[1];
arrKnowledgeLearnTotalSel = arrKnowledgeLearnTotalSel.sort(KnowledgeLearnTotalEx_SortFunByKey(strSortFld, strSortType));
}
else {
//如果排序字段名[OrderBy]为空,就调用排序函数
arrKnowledgeLearnTotalSel = arrKnowledgeLearnTotalSel.sort(objPagerPara.sortFun);
}
return arrKnowledgeLearnTotalSel;
}
catch (e) {
const strMsg = Format("错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})", e, objPagerPara.whereCond, knowledgeLearnTotalEx_ConstructorName, strThisFuncName);
console.error(strMsg);
throw new Error(strMsg);
}
return new Array<clsKnowledgeLearnTotalENEx>();
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objKnowledgeLearnTotalS:源对象
 **/
export  async function KnowledgeLearnTotalEx_FuncMapKnowledgeName(objKnowledgeLearnTotal:clsKnowledgeLearnTotalENEx )
{
const strThisFuncName = KnowledgeLearnTotalEx_FuncMapKnowledgeName.name;
try
{
if (IsNullOrEmpty(objKnowledgeLearnTotal.knowledgeName) == true){
 const ccCourseKnowledgesCourseKnowledgeId = objKnowledgeLearnTotal.courseKnowledgeId;
 const ccCourseKnowledgesKnowledgeName = await cc_CourseKnowledges_func(clscc_CourseKnowledgesEN.con_CourseKnowledgeId, clscc_CourseKnowledgesEN.con_KnowledgeName, ccCourseKnowledgesCourseKnowledgeId , objKnowledgeLearnTotal.courseId);
 objKnowledgeLearnTotal.knowledgeName = ccCourseKnowledgesKnowledgeName;
}
}
catch (e)
{
const strMsg = Format("(errid:Watl000895)函数映射表对象数据出错,{0}.(in {1}.{2})", e, knowledgeLearnTotalEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-03-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function KnowledgeLearnTotalEx_SortFunByKey(strKey:string, AscOrDesc: string)
{
strKey = strKey.replace('|Ex', '');
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsKnowledgeLearnTotalENEx.con_KnowledgeName:
return (a: clsKnowledgeLearnTotalENEx, b: clsKnowledgeLearnTotalENEx) => {
return a.knowledgeName.localeCompare(b.knowledgeName);
}
        default:
return KnowledgeLearnTotal_SortFunByKey(strKey, AscOrDesc);
 }
 }
  else
 {
switch (strKey)
{
case clsKnowledgeLearnTotalENEx.con_KnowledgeName:
return (a: clsKnowledgeLearnTotalENEx, b: clsKnowledgeLearnTotalENEx) => {
return b.knowledgeName.localeCompare(a.knowledgeName);
}
        default:
return KnowledgeLearnTotal_SortFunByKey(strKey, AscOrDesc);
 }
 }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-03-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
*/
export  function KnowledgeLearnTotalEx_FuncMapByFldName(strFldName: string, objKnowledgeLearnTotalEx: clsKnowledgeLearnTotalENEx)
{
const strThisFuncName = KnowledgeLearnTotalEx_FuncMapByFldName.name;
strFldName = strFldName.replace('|Ex', '');
let strMsg = "";
//如果是本表中字段,不需要映射
const arrFldName = clsKnowledgeLearnTotalEN.AttributeName;
if (arrFldName.indexOf(strFldName) > -1) return;
//针对扩展字段进行映射
switch (strFldName)
{

case clsKnowledgeLearnTotalENEx.con_KnowledgeName:
return KnowledgeLearnTotalEx_FuncMapKnowledgeName(objKnowledgeLearnTotalEx);
        default:
    strMsg = Format("扩展字段:[{0}]在字段值函数映射中不存在!(in {1})", strFldName, strThisFuncName);
console.error(strMsg);
 }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-03-10
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function KnowledgeLearnTotalEx_FilterFunByKey(strKey:string, value: any)
{
switch (strKey)
{

case clsKnowledgeLearnTotalENEx.con_KnowledgeName:
return (obj: clsKnowledgeLearnTotalENEx) => {
return obj.knowledgeName === value;
}
        default:
return KnowledgeLearnTotal_FilterFunByKey(strKey, value);
 }
}

 /**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objKnowledgeLearnTotalS:源对象
 **/
export  async function KnowledgeLearnTotalEx_FuncMapKeyKnowledgeName(objKnowledgeLearnTotal:clsKnowledgeLearnTotalENEx ): Promise<Array<string>>
{
const strThisFuncName = KnowledgeLearnTotalEx_FuncMapKeyKnowledgeName.name;
try
{
if (IsNullOrEmpty(objKnowledgeLearnTotal.knowledgeName) == true) return [];
 const ccCourseKnowledgesKnowledgeName = objKnowledgeLearnTotal.knowledgeName;
 const arrCourseKnowledgeId = await cc_CourseKnowledges_funcKey(clscc_CourseKnowledgesEN.con_KnowledgeName, ccCourseKnowledgesKnowledgeName , objKnowledgeLearnTotal.courseId, enumComparisonOp.Like_03);
 return arrCourseKnowledgeId;
}
catch (e)
{
const strMsg = Format("(errid:Watl000897)函数映射表对象数据出错,{0}.(in {1}.{2})", e, knowledgeLearnTotalEx_ConstructorName, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw (strMsg);
}
}

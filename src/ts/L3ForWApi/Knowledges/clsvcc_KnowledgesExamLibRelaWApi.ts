
 /**
 * 类名:clsvcc_KnowledgesExamLibRelaWApi
 * 表名:vcc_KnowledgesExamLibRela(01120142)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 20:03:32
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
 * v知识点习题关系(vcc_KnowledgesExamLibRela)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年04月06日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ConditionCollection } from "@/ts/PubFun/ConditionCollection";
import { clsvcc_KnowledgesExamLibRelaEN } from "@/ts/L0Entity/Knowledges/clsvcc_KnowledgesExamLibRelaEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vcc_KnowledgesExamLibRela_Controller = "vcc_KnowledgesExamLibRelaApi";
 export const vcc_KnowledgesExamLibRela_ConstructorName = "vcc_KnowledgesExamLibRela";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export  async function vcc_KnowledgesExamLibRela_GetObjBymIdAsync(lngmId: number): Promise<clsvcc_KnowledgesExamLibRelaEN|null>  
{
const strThisFuncName = "GetObjBymIdAsync";

if (lngmId == 0)
{
  const strMsg = Format("参数:[lngmId]不能为空!(In clsvcc_KnowledgesExamLibRelaWApi.GetObjBymIdAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjBymId";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const objvcc_KnowledgesExamLibRela = vcc_KnowledgesExamLibRela_GetObjFromJsonObj(returnObj);
return objvcc_KnowledgesExamLibRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vcc_KnowledgesExamLibRela_SortFunDefa(a:clsvcc_KnowledgesExamLibRelaEN , b:clsvcc_KnowledgesExamLibRelaEN): number 
{
return a.mId-b.mId;
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
export  function vcc_KnowledgesExamLibRela_SortFunDefa2Fld(a:clsvcc_KnowledgesExamLibRelaEN , b:clsvcc_KnowledgesExamLibRelaEN): number 
{
if (a.questionId == b.questionId) return a.questionIndex - b.questionIndex;
else return a.questionId - b.questionId;
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
export  function vcc_KnowledgesExamLibRela_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvcc_KnowledgesExamLibRelaEN.con_mId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.mId-b.mId;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.questionId-b.questionId;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionIndex:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.questionIndex-b.questionIndex;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionName:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.questionName == null) return -1;
if (b.questionName == null) return 1;
return a.questionName.localeCompare(b.questionName);
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionContent:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.questionContent == null) return -1;
if (b.questionContent == null) return 1;
return a.questionContent.localeCompare(b.questionContent);
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.chapterNameSim == null) return -1;
if (b.chapterNameSim == null) return 1;
return a.chapterNameSim.localeCompare(b.chapterNameSim);
}
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.sectionNameSim == null) return -1;
if (b.sectionNameSim == null) return 1;
return a.sectionNameSim.localeCompare(b.sectionNameSim);
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_PositiveCorrelation:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.positiveCorrelation-b.positiveCorrelation;
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.courseKnowledgeId.localeCompare(b.courseKnowledgeId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeName:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.knowledgeName.localeCompare(b.knowledgeName);
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeTitle:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.knowledgeTitle == null) return -1;
if (b.knowledgeTitle == null) return 1;
return a.knowledgeTitle.localeCompare(b.knowledgeTitle);
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeContent:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.knowledgeContent == null) return -1;
if (b.knowledgeContent == null) return 1;
return a.knowledgeContent.localeCompare(b.knowledgeContent);
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseName:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.courseName == null) return -1;
if (b.courseName == null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseChapterId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.courseChapterId.localeCompare(b.courseChapterId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.chapterId == null) return -1;
if (b.chapterId == null) return 1;
return a.chapterId.localeCompare(b.chapterId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_NegativeCorrelation:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.negativeCorrelation-b.negativeCorrelation;
}
case clsvcc_KnowledgesExamLibRelaEN.con_UpdDate:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return a.updDate.localeCompare(b.updDate);
}
case clsvcc_KnowledgesExamLibRelaEN.con_UpdUserId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_Memo:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim4Question:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.chapterNameSim4Question == null) return -1;
if (b.chapterNameSim4Question == null) return 1;
return a.chapterNameSim4Question.localeCompare(b.chapterNameSim4Question);
}
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim4Question:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (a.sectionNameSim4Question == null) return -1;
if (b.sectionNameSim4Question == null) return 1;
return a.sectionNameSim4Question.localeCompare(b.sectionNameSim4Question);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_KnowledgesExamLibRela]中不存在!(in ${ vcc_KnowledgesExamLibRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvcc_KnowledgesExamLibRelaEN.con_mId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.mId-a.mId;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.questionId-a.questionId;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionIndex:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.questionIndex-a.questionIndex;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionName:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.questionName == null) return -1;
if (a.questionName == null) return 1;
return b.questionName.localeCompare(a.questionName);
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionContent:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.questionContent == null) return -1;
if (a.questionContent == null) return 1;
return b.questionContent.localeCompare(a.questionContent);
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.chapterNameSim == null) return -1;
if (a.chapterNameSim == null) return 1;
return b.chapterNameSim.localeCompare(a.chapterNameSim);
}
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.sectionNameSim == null) return -1;
if (a.sectionNameSim == null) return 1;
return b.sectionNameSim.localeCompare(a.sectionNameSim);
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_PositiveCorrelation:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.positiveCorrelation-a.positiveCorrelation;
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.courseKnowledgeId.localeCompare(a.courseKnowledgeId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeName:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.knowledgeName.localeCompare(a.knowledgeName);
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeTitle:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.knowledgeTitle == null) return -1;
if (a.knowledgeTitle == null) return 1;
return b.knowledgeTitle.localeCompare(a.knowledgeTitle);
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeContent:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.knowledgeContent == null) return -1;
if (a.knowledgeContent == null) return 1;
return b.knowledgeContent.localeCompare(a.knowledgeContent);
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseName:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.courseName == null) return -1;
if (a.courseName == null) return 1;
return b.courseName.localeCompare(a.courseName);
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseChapterId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.courseChapterId.localeCompare(a.courseChapterId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.chapterId == null) return -1;
if (a.chapterId == null) return 1;
return b.chapterId.localeCompare(a.chapterId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_NegativeCorrelation:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.negativeCorrelation-a.negativeCorrelation;
}
case clsvcc_KnowledgesExamLibRelaEN.con_UpdDate:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
return b.updDate.localeCompare(a.updDate);
}
case clsvcc_KnowledgesExamLibRelaEN.con_UpdUserId:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsvcc_KnowledgesExamLibRelaEN.con_Memo:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim4Question:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.chapterNameSim4Question == null) return -1;
if (a.chapterNameSim4Question == null) return 1;
return b.chapterNameSim4Question.localeCompare(a.chapterNameSim4Question);
}
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim4Question:
return (a: clsvcc_KnowledgesExamLibRelaEN, b: clsvcc_KnowledgesExamLibRelaEN) => {
if (b.sectionNameSim4Question == null) return -1;
if (a.sectionNameSim4Question == null) return 1;
return b.sectionNameSim4Question.localeCompare(a.sectionNameSim4Question);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_KnowledgesExamLibRela]中不存在!(in ${ vcc_KnowledgesExamLibRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameBymIdCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vcc_KnowledgesExamLibRela_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvcc_KnowledgesExamLibRelaEN.con_mId:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.mId === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionId:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.questionId === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionIndex:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.questionIndex === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionName:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.questionName === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionContent:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.questionContent === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.chapterNameSim === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.sectionNameSim === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseId:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.courseId === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_PositiveCorrelation:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.positiveCorrelation === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.courseKnowledgeId === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeName:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.knowledgeName === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeTitle:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.knowledgeTitle === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeContent:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.knowledgeContent === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseName:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.courseName === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_CourseChapterId:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.courseChapterId === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterId:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.chapterId === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_NegativeCorrelation:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.negativeCorrelation === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_UpdDate:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.updDate === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_UpdUserId:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.updUserId === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_Memo:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.memo === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim4Question:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.chapterNameSim4Question === value;
}
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim4Question:
return (obj: clsvcc_KnowledgesExamLibRelaEN) => {
return obj.sectionNameSim4Question === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vcc_KnowledgesExamLibRela]中不存在!(in ${ vcc_KnowledgesExamLibRela_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vcc_KnowledgesExamLibRela__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vcc_KnowledgesExamLibRela_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetFirstObjAsync(strWhereCond: string): Promise<clsvcc_KnowledgesExamLibRelaEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const objvcc_KnowledgesExamLibRela = vcc_KnowledgesExamLibRela_GetObjFromJsonObj(returnObj);
return objvcc_KnowledgesExamLibRela;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvcc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetObjLstBymIdLstAsync(arrmId: Array<string>): Promise<Array<clsvcc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetObjLstBymIdLstAsync";
const strAction = "GetObjLstBymIdLst";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvcc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvcc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvcc_KnowledgesExamLibRelaEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvcc_KnowledgesExamLibRelaEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vcc_KnowledgesExamLibRela_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_IsExistAsync(lngmId: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  async function vcc_KnowledgesExamLibRela_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vcc_KnowledgesExamLibRela_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vcc_KnowledgesExamLibRela_ConstructorName, strThisFuncName);
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
export  function vcc_KnowledgesExamLibRela_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vcc_KnowledgesExamLibRela_GetJSONStrByObj (pobjvcc_KnowledgesExamLibRelaEN: clsvcc_KnowledgesExamLibRelaEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvcc_KnowledgesExamLibRelaEN);
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
export  function vcc_KnowledgesExamLibRela_GetObjLstByJSONStr (strJSON: string): Array<clsvcc_KnowledgesExamLibRelaEN>
{
let arrvcc_KnowledgesExamLibRelaObjLst = new Array<clsvcc_KnowledgesExamLibRelaEN>();
if (strJSON === "")
{
return arrvcc_KnowledgesExamLibRelaObjLst;
}
try
{
arrvcc_KnowledgesExamLibRelaObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvcc_KnowledgesExamLibRelaObjLst;
}
return arrvcc_KnowledgesExamLibRelaObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvcc_KnowledgesExamLibRelaObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vcc_KnowledgesExamLibRela_GetObjLstByJSONObjLst (arrvcc_KnowledgesExamLibRelaObjLstS: Array<clsvcc_KnowledgesExamLibRelaEN>): Array<clsvcc_KnowledgesExamLibRelaEN>
{
const arrvcc_KnowledgesExamLibRelaObjLst = new Array<clsvcc_KnowledgesExamLibRelaEN>();
for (const objInFor of arrvcc_KnowledgesExamLibRelaObjLstS) {
const obj1 = vcc_KnowledgesExamLibRela_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvcc_KnowledgesExamLibRelaObjLst.push(obj1);
}
return arrvcc_KnowledgesExamLibRelaObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-04-06
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vcc_KnowledgesExamLibRela_GetObjByJSONStr (strJSON: string): clsvcc_KnowledgesExamLibRelaEN
{
let pobjvcc_KnowledgesExamLibRelaEN = new clsvcc_KnowledgesExamLibRelaEN();
if (strJSON === "")
{
return pobjvcc_KnowledgesExamLibRelaEN;
}
try
{
pobjvcc_KnowledgesExamLibRelaEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvcc_KnowledgesExamLibRelaEN;
}
return pobjvcc_KnowledgesExamLibRelaEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vcc_KnowledgesExamLibRela_GetCombineCondition(objvcc_KnowledgesExamLibRelaCond: clsvcc_KnowledgesExamLibRelaEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_mId) == true)
{
const strComparisonOpmId:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_mId];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_KnowledgesExamLibRelaEN.con_mId, objvcc_KnowledgesExamLibRelaCond.mId, strComparisonOpmId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_QuestionId) == true)
{
const strComparisonOpQuestionId:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_QuestionId];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_KnowledgesExamLibRelaEN.con_QuestionId, objvcc_KnowledgesExamLibRelaCond.questionId, strComparisonOpQuestionId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_QuestionIndex) == true)
{
const strComparisonOpQuestionIndex:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_QuestionIndex];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_KnowledgesExamLibRelaEN.con_QuestionIndex, objvcc_KnowledgesExamLibRelaCond.questionIndex, strComparisonOpQuestionIndex);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_QuestionName) == true)
{
const strComparisonOpQuestionName:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_QuestionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_QuestionName, objvcc_KnowledgesExamLibRelaCond.questionName, strComparisonOpQuestionName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_QuestionContent) == true)
{
const strComparisonOpQuestionContent:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_QuestionContent];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_QuestionContent, objvcc_KnowledgesExamLibRelaCond.questionContent, strComparisonOpQuestionContent);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim) == true)
{
const strComparisonOpChapterNameSim:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim, objvcc_KnowledgesExamLibRelaCond.chapterNameSim, strComparisonOpChapterNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim) == true)
{
const strComparisonOpSectionNameSim:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim, objvcc_KnowledgesExamLibRelaCond.sectionNameSim, strComparisonOpSectionNameSim);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_CourseId, objvcc_KnowledgesExamLibRelaCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_PositiveCorrelation) == true)
{
const strComparisonOpPositiveCorrelation:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_PositiveCorrelation];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_KnowledgesExamLibRelaEN.con_PositiveCorrelation, objvcc_KnowledgesExamLibRelaCond.positiveCorrelation, strComparisonOpPositiveCorrelation);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId) == true)
{
const strComparisonOpCourseKnowledgeId:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId, objvcc_KnowledgesExamLibRelaCond.courseKnowledgeId, strComparisonOpCourseKnowledgeId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeName) == true)
{
const strComparisonOpKnowledgeName:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeName, objvcc_KnowledgesExamLibRelaCond.knowledgeName, strComparisonOpKnowledgeName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeTitle) == true)
{
const strComparisonOpKnowledgeTitle:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeTitle];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeTitle, objvcc_KnowledgesExamLibRelaCond.knowledgeTitle, strComparisonOpKnowledgeTitle);
}
//数据类型string(text)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_CourseName) == true)
{
const strComparisonOpCourseName:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_CourseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_CourseName, objvcc_KnowledgesExamLibRelaCond.courseName, strComparisonOpCourseName);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_CourseChapterId) == true)
{
const strComparisonOpCourseChapterId:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_CourseChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_CourseChapterId, objvcc_KnowledgesExamLibRelaCond.courseChapterId, strComparisonOpCourseChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_ChapterId) == true)
{
const strComparisonOpChapterId:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_ChapterId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_ChapterId, objvcc_KnowledgesExamLibRelaCond.chapterId, strComparisonOpChapterId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_NegativeCorrelation) == true)
{
const strComparisonOpNegativeCorrelation:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_NegativeCorrelation];
strWhereCond += Format(" And {0} {2} {1}", clsvcc_KnowledgesExamLibRelaEN.con_NegativeCorrelation, objvcc_KnowledgesExamLibRelaCond.negativeCorrelation, strComparisonOpNegativeCorrelation);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_UpdDate, objvcc_KnowledgesExamLibRelaCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_UpdUserId, objvcc_KnowledgesExamLibRelaCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_Memo, objvcc_KnowledgesExamLibRelaCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim4Question) == true)
{
const strComparisonOpChapterNameSim4Question:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim4Question];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim4Question, objvcc_KnowledgesExamLibRelaCond.chapterNameSim4Question, strComparisonOpChapterNameSim4Question);
}
if (Object.prototype.hasOwnProperty.call(objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp, clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim4Question) == true)
{
const strComparisonOpSectionNameSim4Question:string = objvcc_KnowledgesExamLibRelaCond.dicFldComparisonOp[clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim4Question];
strWhereCond += Format(" And {0} {2} '{1}'", clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim4Question, objvcc_KnowledgesExamLibRelaCond.sectionNameSim4Question, strComparisonOpSectionNameSim4Question);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvcc_KnowledgesExamLibRelaENS:源对象
 * @param objvcc_KnowledgesExamLibRelaENT:目标对象
*/
export  function vcc_KnowledgesExamLibRela_CopyObjTo(objvcc_KnowledgesExamLibRelaENS: clsvcc_KnowledgesExamLibRelaEN , objvcc_KnowledgesExamLibRelaENT: clsvcc_KnowledgesExamLibRelaEN ): void 
{
objvcc_KnowledgesExamLibRelaENT.mId = objvcc_KnowledgesExamLibRelaENS.mId; //mId
objvcc_KnowledgesExamLibRelaENT.questionId = objvcc_KnowledgesExamLibRelaENS.questionId; //题目Id
objvcc_KnowledgesExamLibRelaENT.questionIndex = objvcc_KnowledgesExamLibRelaENS.questionIndex; //题目序号
objvcc_KnowledgesExamLibRelaENT.questionName = objvcc_KnowledgesExamLibRelaENS.questionName; //题目名称
objvcc_KnowledgesExamLibRelaENT.questionContent = objvcc_KnowledgesExamLibRelaENS.questionContent; //题目内容
objvcc_KnowledgesExamLibRelaENT.chapterNameSim = objvcc_KnowledgesExamLibRelaENS.chapterNameSim; //章名简称
objvcc_KnowledgesExamLibRelaENT.sectionNameSim = objvcc_KnowledgesExamLibRelaENS.sectionNameSim; //节名简称
objvcc_KnowledgesExamLibRelaENT.courseId = objvcc_KnowledgesExamLibRelaENS.courseId; //课程Id
objvcc_KnowledgesExamLibRelaENT.positiveCorrelation = objvcc_KnowledgesExamLibRelaENS.positiveCorrelation; //正相关度
objvcc_KnowledgesExamLibRelaENT.courseKnowledgeId = objvcc_KnowledgesExamLibRelaENS.courseKnowledgeId; //知识点Id
objvcc_KnowledgesExamLibRelaENT.knowledgeName = objvcc_KnowledgesExamLibRelaENS.knowledgeName; //知识点名称
objvcc_KnowledgesExamLibRelaENT.knowledgeTitle = objvcc_KnowledgesExamLibRelaENS.knowledgeTitle; //知识点标题
objvcc_KnowledgesExamLibRelaENT.knowledgeContent = objvcc_KnowledgesExamLibRelaENS.knowledgeContent; //知识点内容
objvcc_KnowledgesExamLibRelaENT.courseName = objvcc_KnowledgesExamLibRelaENS.courseName; //课程名称
objvcc_KnowledgesExamLibRelaENT.courseChapterId = objvcc_KnowledgesExamLibRelaENS.courseChapterId; //课程章节ID
objvcc_KnowledgesExamLibRelaENT.chapterId = objvcc_KnowledgesExamLibRelaENS.chapterId; //章Id
objvcc_KnowledgesExamLibRelaENT.negativeCorrelation = objvcc_KnowledgesExamLibRelaENS.negativeCorrelation; //负相关度
objvcc_KnowledgesExamLibRelaENT.updDate = objvcc_KnowledgesExamLibRelaENS.updDate; //修改日期
objvcc_KnowledgesExamLibRelaENT.updUserId = objvcc_KnowledgesExamLibRelaENS.updUserId; //修改用户Id
objvcc_KnowledgesExamLibRelaENT.memo = objvcc_KnowledgesExamLibRelaENS.memo; //备注
objvcc_KnowledgesExamLibRelaENT.chapterNameSim4Question = objvcc_KnowledgesExamLibRelaENS.chapterNameSim4Question; //章简称4Question
objvcc_KnowledgesExamLibRelaENT.sectionNameSim4Question = objvcc_KnowledgesExamLibRelaENS.sectionNameSim4Question; //节简称4Question
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvcc_KnowledgesExamLibRelaENS:源对象
 * @param objvcc_KnowledgesExamLibRelaENT:目标对象
*/
export  function vcc_KnowledgesExamLibRela_GetObjFromJsonObj(objvcc_KnowledgesExamLibRelaENS: clsvcc_KnowledgesExamLibRelaEN): clsvcc_KnowledgesExamLibRelaEN 
{
 const objvcc_KnowledgesExamLibRelaENT: clsvcc_KnowledgesExamLibRelaEN = new clsvcc_KnowledgesExamLibRelaEN();
ObjectAssign(objvcc_KnowledgesExamLibRelaENT, objvcc_KnowledgesExamLibRelaENS);
 return objvcc_KnowledgesExamLibRelaENT;
}
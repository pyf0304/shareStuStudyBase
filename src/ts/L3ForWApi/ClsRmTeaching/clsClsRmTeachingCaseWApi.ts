
 /**
 * 类名:clsClsRmTeachingCaseWApi
 * 表名:ClsRmTeachingCase(01120381)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/08 09:48:25
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课堂教学(ClsRmTeaching)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 课堂教学案例(ClsRmTeachingCase)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年06月08日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty,GetStrLen,tzDataType,Format } from "@/ts/PubFun/clsString";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { BindDdl_ObjLstInDivObj,GetExceptionStr,myShowErrorMsg,ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { clsClsRmTeachingCaseEN } from "@/ts/L0Entity/ClsRmTeaching/clsClsRmTeachingCaseEN";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";

 export const clsRmTeachingCase_Controller = "ClsRmTeachingCaseApi";
 export const clsRmTeachingCase_ConstructorName = "clsRmTeachingCase";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdClsRmTeachingCase:关键字
 * @returns 对象
 **/
export  async function ClsRmTeachingCase_GetObjByIdClsRmTeachingCaseAsync(strIdClsRmTeachingCase: string): Promise<clsClsRmTeachingCaseEN|null>  
{
const strThisFuncName = "GetObjByIdClsRmTeachingCaseAsync";

if (IsNullOrEmpty(strIdClsRmTeachingCase) == true)
{
  const strMsg = Format("参数:[strIdClsRmTeachingCase]不能为空!(In clsClsRmTeachingCaseWApi.GetObjByIdClsRmTeachingCaseAsync)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdClsRmTeachingCase.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdClsRmTeachingCase]的长度:[{0}]不正确!(clsClsRmTeachingCaseWApi.GetObjByIdClsRmTeachingCaseAsync)", strIdClsRmTeachingCase.length);
console.error(strMsg);
throw (strMsg);
}
const strAction = "GetObjByIdClsRmTeachingCase";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdClsRmTeachingCase,
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
const objClsRmTeachingCase = ClsRmTeachingCase_GetObjFromJsonObj(returnObj);
return objClsRmTeachingCase;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdClsRmTeachingCaselocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdClsRmTeachingCaseCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function ClsRmTeachingCase_SortFunDefa(a:clsClsRmTeachingCaseEN , b:clsClsRmTeachingCaseEN): number 
{
return a.idClsRmTeachingCase.localeCompare(b.idClsRmTeachingCase);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function ClsRmTeachingCase_SortFunDefa2Fld(a:clsClsRmTeachingCaseEN , b:clsClsRmTeachingCaseEN): number 
{
if (a.clsRmTeachingCaseID == b.clsRmTeachingCaseID) return a.clsRmTeachingCaseName.localeCompare(b.clsRmTeachingCaseName);
else return a.clsRmTeachingCaseID.localeCompare(b.clsRmTeachingCaseID);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function ClsRmTeachingCase_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.idClsRmTeachingCase.localeCompare(b.idClsRmTeachingCase);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseID:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.clsRmTeachingCaseID.localeCompare(b.clsRmTeachingCaseID);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.clsRmTeachingCaseName.localeCompare(b.clsRmTeachingCaseName);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTheme:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.clsRmTeachingCaseTheme == null) return -1;
if (b.clsRmTeachingCaseTheme == null) return 1;
return a.clsRmTeachingCaseTheme.localeCompare(b.clsRmTeachingCaseTheme);
}
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCaseType:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.idClsRmTeachingCaseType.localeCompare(b.idClsRmTeachingCaseType);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseText:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.clsRmTeachingCaseText == null) return -1;
if (b.clsRmTeachingCaseText == null) return 1;
return a.clsRmTeachingCaseText.localeCompare(b.clsRmTeachingCaseText);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDate:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.clsRmTeachingCaseDate == null) return -1;
if (b.clsRmTeachingCaseDate == null) return 1;
return a.clsRmTeachingCaseDate.localeCompare(b.clsRmTeachingCaseDate);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTime:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.clsRmTeachingCaseTime == null) return -1;
if (b.clsRmTeachingCaseTime == null) return 1;
return a.clsRmTeachingCaseTime.localeCompare(b.clsRmTeachingCaseTime);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDateIn:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.clsRmTeachingCaseDateIn == null) return -1;
if (b.clsRmTeachingCaseDateIn == null) return 1;
return a.clsRmTeachingCaseDateIn.localeCompare(b.clsRmTeachingCaseDateIn);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTimeIn:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.clsRmTeachingCaseTimeIn == null) return -1;
if (b.clsRmTeachingCaseTimeIn == null) return 1;
return a.clsRmTeachingCaseTimeIn.localeCompare(b.clsRmTeachingCaseTimeIn);
}
case clsClsRmTeachingCaseEN.con_IdStudyLevel:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.idStudyLevel == null) return -1;
if (b.idStudyLevel == null) return 1;
return a.idStudyLevel.localeCompare(b.idStudyLevel);
}
case clsClsRmTeachingCaseEN.con_IdTeachingPlan:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.idTeachingPlan == null) return -1;
if (b.idTeachingPlan == null) return 1;
return a.idTeachingPlan.localeCompare(b.idTeachingPlan);
}
case clsClsRmTeachingCaseEN.con_IdCaseType:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.idCaseType == null) return -1;
if (b.idCaseType == null) return 1;
return a.idCaseType.localeCompare(b.idCaseType);
}
case clsClsRmTeachingCaseEN.con_IdDiscipline:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.idDiscipline.localeCompare(b.idDiscipline);
}
case clsClsRmTeachingCaseEN.con_IdSchool:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.idSchool == null) return -1;
if (b.idSchool == null) return 1;
return a.idSchool.localeCompare(b.idSchool);
}
case clsClsRmTeachingCaseEN.con_IdDisciplinePs:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.idDisciplinePs == null) return -1;
if (b.idDisciplinePs == null) return 1;
return a.idDisciplinePs.localeCompare(b.idDisciplinePs);
}
case clsClsRmTeachingCaseEN.con_IdGradeBase:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsClsRmTeachingCaseEN.con_BrowseCount:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.browseCount-b.browseCount;
}
case clsClsRmTeachingCaseEN.con_IdSenateGaugeVersion:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.idSenateGaugeVersion == null) return -1;
if (b.idSenateGaugeVersion == null) return 1;
return a.idSenateGaugeVersion.localeCompare(b.idSenateGaugeVersion);
}
case clsClsRmTeachingCaseEN.con_IdTeachSkill:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.idTeachSkill.localeCompare(b.idTeachSkill);
}
case clsClsRmTeachingCaseEN.con_CaseLevelId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.caseLevelId == null) return -1;
if (b.caseLevelId == null) return 1;
return a.caseLevelId.localeCompare(b.caseLevelId);
}
case clsClsRmTeachingCaseEN.con_DocFile:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.docFile == null) return -1;
if (b.docFile == null) return 1;
return a.docFile.localeCompare(b.docFile);
}
case clsClsRmTeachingCaseEN.con_IsNeedGeneWord:
return (a: clsClsRmTeachingCaseEN) => {
if (a.isNeedGeneWord == true) return 1;
else return -1
}
case clsClsRmTeachingCaseEN.con_WordCreateDate:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.wordCreateDate == null) return -1;
if (b.wordCreateDate == null) return 1;
return a.wordCreateDate.localeCompare(b.wordCreateDate);
}
case clsClsRmTeachingCaseEN.con_IsVisible:
return (a: clsClsRmTeachingCaseEN) => {
if (a.isVisible == true) return 1;
else return -1
}
case clsClsRmTeachingCaseEN.con_OwnerId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.ownerId.localeCompare(b.ownerId);
}
case clsClsRmTeachingCaseEN.con_UserKindId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return a.userKindId.localeCompare(b.userKindId);
}
case clsClsRmTeachingCaseEN.con_UserTypeId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.userTypeId == null) return -1;
if (b.userTypeId == null) return 1;
return a.userTypeId.localeCompare(b.userTypeId);
}
case clsClsRmTeachingCaseEN.con_IsDualVideo:
return (a: clsClsRmTeachingCaseEN) => {
if (a.isDualVideo == true) return 1;
else return -1
}
case clsClsRmTeachingCaseEN.con_RecommendedDegreeId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.recommendedDegreeId == null) return -1;
if (b.recommendedDegreeId == null) return 1;
return a.recommendedDegreeId.localeCompare(b.recommendedDegreeId);
}
case clsClsRmTeachingCaseEN.con_ftpFileType:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.ftpFileType == null) return -1;
if (b.ftpFileType == null) return 1;
return a.ftpFileType.localeCompare(b.ftpFileType);
}
case clsClsRmTeachingCaseEN.con_VideoUrl:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.videoUrl == null) return -1;
if (b.videoUrl == null) return 1;
return a.videoUrl.localeCompare(b.videoUrl);
}
case clsClsRmTeachingCaseEN.con_VideoPath:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.videoPath == null) return -1;
if (b.videoPath == null) return 1;
return a.videoPath.localeCompare(b.videoPath);
}
case clsClsRmTeachingCaseEN.con_ResErrMsg:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.resErrMsg == null) return -1;
if (b.resErrMsg == null) return 1;
return a.resErrMsg.localeCompare(b.resErrMsg);
}
case clsClsRmTeachingCaseEN.con_UpdDate:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsClsRmTeachingCaseEN.con_UpdUserId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.updUserId == null) return -1;
if (b.updUserId == null) return 1;
return a.updUserId.localeCompare(b.updUserId);
}
case clsClsRmTeachingCaseEN.con_Memo:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ClsRmTeachingCase]中不存在!(in ${ clsRmTeachingCase_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.idClsRmTeachingCase.localeCompare(a.idClsRmTeachingCase);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseID:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.clsRmTeachingCaseID.localeCompare(a.clsRmTeachingCaseID);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.clsRmTeachingCaseName.localeCompare(a.clsRmTeachingCaseName);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTheme:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.clsRmTeachingCaseTheme == null) return -1;
if (a.clsRmTeachingCaseTheme == null) return 1;
return b.clsRmTeachingCaseTheme.localeCompare(a.clsRmTeachingCaseTheme);
}
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCaseType:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.idClsRmTeachingCaseType.localeCompare(a.idClsRmTeachingCaseType);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseText:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.clsRmTeachingCaseText == null) return -1;
if (a.clsRmTeachingCaseText == null) return 1;
return b.clsRmTeachingCaseText.localeCompare(a.clsRmTeachingCaseText);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDate:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.clsRmTeachingCaseDate == null) return -1;
if (a.clsRmTeachingCaseDate == null) return 1;
return b.clsRmTeachingCaseDate.localeCompare(a.clsRmTeachingCaseDate);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTime:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.clsRmTeachingCaseTime == null) return -1;
if (a.clsRmTeachingCaseTime == null) return 1;
return b.clsRmTeachingCaseTime.localeCompare(a.clsRmTeachingCaseTime);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDateIn:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.clsRmTeachingCaseDateIn == null) return -1;
if (a.clsRmTeachingCaseDateIn == null) return 1;
return b.clsRmTeachingCaseDateIn.localeCompare(a.clsRmTeachingCaseDateIn);
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTimeIn:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.clsRmTeachingCaseTimeIn == null) return -1;
if (a.clsRmTeachingCaseTimeIn == null) return 1;
return b.clsRmTeachingCaseTimeIn.localeCompare(a.clsRmTeachingCaseTimeIn);
}
case clsClsRmTeachingCaseEN.con_IdStudyLevel:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.idStudyLevel == null) return -1;
if (a.idStudyLevel == null) return 1;
return b.idStudyLevel.localeCompare(a.idStudyLevel);
}
case clsClsRmTeachingCaseEN.con_IdTeachingPlan:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.idTeachingPlan == null) return -1;
if (a.idTeachingPlan == null) return 1;
return b.idTeachingPlan.localeCompare(a.idTeachingPlan);
}
case clsClsRmTeachingCaseEN.con_IdCaseType:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.idCaseType == null) return -1;
if (a.idCaseType == null) return 1;
return b.idCaseType.localeCompare(a.idCaseType);
}
case clsClsRmTeachingCaseEN.con_IdDiscipline:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.idDiscipline.localeCompare(a.idDiscipline);
}
case clsClsRmTeachingCaseEN.con_IdSchool:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.idSchool == null) return -1;
if (a.idSchool == null) return 1;
return b.idSchool.localeCompare(a.idSchool);
}
case clsClsRmTeachingCaseEN.con_IdDisciplinePs:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.idDisciplinePs == null) return -1;
if (a.idDisciplinePs == null) return 1;
return b.idDisciplinePs.localeCompare(a.idDisciplinePs);
}
case clsClsRmTeachingCaseEN.con_IdGradeBase:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsClsRmTeachingCaseEN.con_BrowseCount:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.browseCount-a.browseCount;
}
case clsClsRmTeachingCaseEN.con_IdSenateGaugeVersion:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.idSenateGaugeVersion == null) return -1;
if (a.idSenateGaugeVersion == null) return 1;
return b.idSenateGaugeVersion.localeCompare(a.idSenateGaugeVersion);
}
case clsClsRmTeachingCaseEN.con_IdTeachSkill:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.idTeachSkill.localeCompare(a.idTeachSkill);
}
case clsClsRmTeachingCaseEN.con_CaseLevelId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.caseLevelId == null) return -1;
if (a.caseLevelId == null) return 1;
return b.caseLevelId.localeCompare(a.caseLevelId);
}
case clsClsRmTeachingCaseEN.con_DocFile:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.docFile == null) return -1;
if (a.docFile == null) return 1;
return b.docFile.localeCompare(a.docFile);
}
case clsClsRmTeachingCaseEN.con_IsNeedGeneWord:
return (b: clsClsRmTeachingCaseEN) => {
if (b.isNeedGeneWord == true) return 1;
else return -1
}
case clsClsRmTeachingCaseEN.con_WordCreateDate:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.wordCreateDate == null) return -1;
if (a.wordCreateDate == null) return 1;
return b.wordCreateDate.localeCompare(a.wordCreateDate);
}
case clsClsRmTeachingCaseEN.con_IsVisible:
return (b: clsClsRmTeachingCaseEN) => {
if (b.isVisible == true) return 1;
else return -1
}
case clsClsRmTeachingCaseEN.con_OwnerId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.ownerId.localeCompare(a.ownerId);
}
case clsClsRmTeachingCaseEN.con_UserKindId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
return b.userKindId.localeCompare(a.userKindId);
}
case clsClsRmTeachingCaseEN.con_UserTypeId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.userTypeId == null) return -1;
if (a.userTypeId == null) return 1;
return b.userTypeId.localeCompare(a.userTypeId);
}
case clsClsRmTeachingCaseEN.con_IsDualVideo:
return (b: clsClsRmTeachingCaseEN) => {
if (b.isDualVideo == true) return 1;
else return -1
}
case clsClsRmTeachingCaseEN.con_RecommendedDegreeId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.recommendedDegreeId == null) return -1;
if (a.recommendedDegreeId == null) return 1;
return b.recommendedDegreeId.localeCompare(a.recommendedDegreeId);
}
case clsClsRmTeachingCaseEN.con_ftpFileType:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.ftpFileType == null) return -1;
if (a.ftpFileType == null) return 1;
return b.ftpFileType.localeCompare(a.ftpFileType);
}
case clsClsRmTeachingCaseEN.con_VideoUrl:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.videoUrl == null) return -1;
if (a.videoUrl == null) return 1;
return b.videoUrl.localeCompare(a.videoUrl);
}
case clsClsRmTeachingCaseEN.con_VideoPath:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.videoPath == null) return -1;
if (a.videoPath == null) return 1;
return b.videoPath.localeCompare(a.videoPath);
}
case clsClsRmTeachingCaseEN.con_ResErrMsg:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.resErrMsg == null) return -1;
if (a.resErrMsg == null) return 1;
return b.resErrMsg.localeCompare(a.resErrMsg);
}
case clsClsRmTeachingCaseEN.con_UpdDate:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsClsRmTeachingCaseEN.con_UpdUserId:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.updUserId == null) return -1;
if (a.updUserId == null) return 1;
return b.updUserId.localeCompare(a.updUserId);
}
case clsClsRmTeachingCaseEN.con_Memo:
return (a: clsClsRmTeachingCaseEN, b: clsClsRmTeachingCaseEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ClsRmTeachingCase]中不存在!(in ${ clsRmTeachingCase_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdClsRmTeachingCaseCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function ClsRmTeachingCase_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idClsRmTeachingCase === value;
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseID:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.clsRmTeachingCaseID === value;
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.clsRmTeachingCaseName === value;
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTheme:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.clsRmTeachingCaseTheme === value;
}
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCaseType:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idClsRmTeachingCaseType === value;
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseText:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.clsRmTeachingCaseText === value;
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDate:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.clsRmTeachingCaseDate === value;
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTime:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.clsRmTeachingCaseTime === value;
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDateIn:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.clsRmTeachingCaseDateIn === value;
}
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTimeIn:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.clsRmTeachingCaseTimeIn === value;
}
case clsClsRmTeachingCaseEN.con_IdStudyLevel:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idStudyLevel === value;
}
case clsClsRmTeachingCaseEN.con_IdTeachingPlan:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idTeachingPlan === value;
}
case clsClsRmTeachingCaseEN.con_IdCaseType:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idCaseType === value;
}
case clsClsRmTeachingCaseEN.con_IdDiscipline:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idDiscipline === value;
}
case clsClsRmTeachingCaseEN.con_IdSchool:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idSchool === value;
}
case clsClsRmTeachingCaseEN.con_IdDisciplinePs:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idDisciplinePs === value;
}
case clsClsRmTeachingCaseEN.con_IdGradeBase:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idGradeBase === value;
}
case clsClsRmTeachingCaseEN.con_BrowseCount:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.browseCount === value;
}
case clsClsRmTeachingCaseEN.con_IdSenateGaugeVersion:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idSenateGaugeVersion === value;
}
case clsClsRmTeachingCaseEN.con_IdTeachSkill:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.idTeachSkill === value;
}
case clsClsRmTeachingCaseEN.con_CaseLevelId:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.caseLevelId === value;
}
case clsClsRmTeachingCaseEN.con_DocFile:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.docFile === value;
}
case clsClsRmTeachingCaseEN.con_IsNeedGeneWord:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.isNeedGeneWord === value;
}
case clsClsRmTeachingCaseEN.con_WordCreateDate:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.wordCreateDate === value;
}
case clsClsRmTeachingCaseEN.con_IsVisible:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.isVisible === value;
}
case clsClsRmTeachingCaseEN.con_OwnerId:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.ownerId === value;
}
case clsClsRmTeachingCaseEN.con_UserKindId:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.userKindId === value;
}
case clsClsRmTeachingCaseEN.con_UserTypeId:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.userTypeId === value;
}
case clsClsRmTeachingCaseEN.con_IsDualVideo:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.isDualVideo === value;
}
case clsClsRmTeachingCaseEN.con_RecommendedDegreeId:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.recommendedDegreeId === value;
}
case clsClsRmTeachingCaseEN.con_ftpFileType:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.ftpFileType === value;
}
case clsClsRmTeachingCaseEN.con_VideoUrl:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.videoUrl === value;
}
case clsClsRmTeachingCaseEN.con_VideoPath:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.videoPath === value;
}
case clsClsRmTeachingCaseEN.con_ResErrMsg:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.resErrMsg === value;
}
case clsClsRmTeachingCaseEN.con_UpdDate:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.updDate === value;
}
case clsClsRmTeachingCaseEN.con_UpdUserId:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.updUserId === value;
}
case clsClsRmTeachingCaseEN.con_Memo:
return (obj: clsClsRmTeachingCaseEN) => {
return obj.memo === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[ClsRmTeachingCase]中不存在!(in ${ clsRmTeachingCase_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[ClsRmTeachingCase__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ClsRmTeachingCase_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_GetFirstObjAsync(strWhereCond: string): Promise<clsClsRmTeachingCaseEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const objClsRmTeachingCase = ClsRmTeachingCase_GetObjFromJsonObj(returnObj);
return objClsRmTeachingCase;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_GetObjLstAsync(strWhereCond: string): Promise<Array<clsClsRmTeachingCaseEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ClsRmTeachingCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param arrIdClsRmTeachingCase:关键字列表
 * @returns 对象列表
 **/
export  async function ClsRmTeachingCase_GetObjLstByIdClsRmTeachingCaseLstAsync(arrIdClsRmTeachingCase: Array<string>): Promise<Array<clsClsRmTeachingCaseEN>>  
{
const strThisFuncName = "GetObjLstByIdClsRmTeachingCaseLstAsync";
const strAction = "GetObjLstByIdClsRmTeachingCaseLst";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdClsRmTeachingCase, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ClsRmTeachingCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdClsRmTeachingCaseLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function ClsRmTeachingCase_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsClsRmTeachingCaseEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ClsRmTeachingCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsClsRmTeachingCaseEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = ClsRmTeachingCase_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param strIdClsRmTeachingCase:关键字
 * @returns 获取删除的结果
 **/
export  async function ClsRmTeachingCase_DelRecordAsync(strIdClsRmTeachingCase: string): Promise<number>  
{
const strThisFuncName = "DelRecordAsync";
const strAction = "DelRecord";
let strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);
strUrl = Format("{0}?Id={1}", strUrl, strIdClsRmTeachingCase);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param arrIdClsRmTeachingCase:关键字列表
 * @returns 实际删除记录的个数
 **/
export  async function ClsRmTeachingCase_DelClsRmTeachingCasesAsync(arrIdClsRmTeachingCase: Array<string>): Promise<number> 
{
const strThisFuncName = "DelClsRmTeachingCasesAsync";
const strAction = "DelClsRmTeachingCases";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdClsRmTeachingCase, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_DelClsRmTeachingCasesByCondAsync(strWhereCond: string): Promise<number> 
{
const strThisFuncName = "DelClsRmTeachingCasesByCondAsync";
const strAction = "DelClsRmTeachingCasesByCond";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param objClsRmTeachingCaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ClsRmTeachingCase_AddNewRecordAsync(objClsRmTeachingCaseEN: clsClsRmTeachingCaseEN): Promise<boolean> 
{
const strThisFuncName = "AddNewRecordAsync";
const strAction = "AddNewRecord";
if (objClsRmTeachingCaseEN.idClsRmTeachingCase === null || objClsRmTeachingCaseEN.idClsRmTeachingCase === "")
{
const strMsg = "需要的对象的关键字为空,不能添加!";
throw strMsg;
}
 //var strJSON = JSON.stringify(objClsRmTeachingCaseEN);
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClsRmTeachingCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param objClsRmTeachingCaseEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export  async function ClsRmTeachingCase_AddNewRecordWithMaxIdAsync(objClsRmTeachingCaseEN: clsClsRmTeachingCaseEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithMaxIdAsync";
const strAction = "AddNewRecordWithMaxId";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClsRmTeachingCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_AddNewObjSave(objClsRmTeachingCaseEN: clsClsRmTeachingCaseEN): Promise<AddRecordResult>{
const strThisFuncName = 'AddNewObjSave';
try
{
ClsRmTeachingCase_CheckPropertyNew(objClsRmTeachingCaseEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ clsRmTeachingCase_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
return { keyword: '', success: false };//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
let returnBool = false;
const bolIsExist = await ClsRmTeachingCase_IsExistAsync(objClsRmTeachingCaseEN.idClsRmTeachingCase);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objClsRmTeachingCaseEN.idClsRmTeachingCase);
console.error(strMsg);
throw(strMsg);
}
returnBool = await ClsRmTeachingCase_AddNewRecordAsync(objClsRmTeachingCaseEN);
if (returnBool == true)
{
//ClsRmTeachingCase_ReFreshCache();
}
else
{
const strInfo = `添加[课堂教学案例(ClsRmTeachingCase)]记录不成功!`;
//显示信息框
throw(strInfo);
}
return { keyword: objClsRmTeachingCaseEN.idClsRmTeachingCase, success: returnBool };//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = `添加记录不成功,${e}.(in ${ clsRmTeachingCase_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export  async function ClsRmTeachingCase_UpdateObjSave(objClsRmTeachingCaseEN: clsClsRmTeachingCaseEN): Promise<boolean>{
const strThisFuncName = 'UpdateObjSave';
objClsRmTeachingCaseEN.sfUpdFldSetStr = objClsRmTeachingCaseEN.updFldString;//设置哪些字段被修改(脏字段)
if (objClsRmTeachingCaseEN.idClsRmTeachingCase == "" || objClsRmTeachingCaseEN.idClsRmTeachingCase == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
ClsRmTeachingCase_CheckProperty4Update(objClsRmTeachingCaseEN);
}
catch(e)
{
const strMsg = `检查数据不成功,${e}.(in ${ clsRmTeachingCase_ConstructorName }.${strThisFuncName})`;
console.error(strMsg);
throw(strMsg);
}
try
{
//检查唯一性条件
const returnBool = await ClsRmTeachingCase_UpdateRecordAsync(objClsRmTeachingCaseEN);
if (returnBool == true)
{
//ClsRmTeachingCase_ReFreshCache();
}
return returnBool;
}
catch(e)
{
const strMsg = `修改记录不成功,${e}.(in ${ clsRmTeachingCase_ConstructorName }.${ strThisFuncName })`;
console.error(strMsg);
throw(strMsg);
}
}

 /**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objClsRmTeachingCaseEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export  async function ClsRmTeachingCase_AddNewRecordWithReturnKeyAsync(objClsRmTeachingCaseEN: clsClsRmTeachingCaseEN): Promise<string> 
{
const strThisFuncName = "AddNewRecordWithReturnKeyAsync";
const strAction = "AddNewRecordWithReturnKey";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClsRmTeachingCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param objClsRmTeachingCaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ClsRmTeachingCase_UpdateRecordAsync(objClsRmTeachingCaseEN: clsClsRmTeachingCaseEN): Promise<boolean>  
{
const strThisFuncName = "UpdateRecordAsync";
const strAction = "UpdateRecord";
 if (objClsRmTeachingCaseEN.sfUpdFldSetStr === undefined || objClsRmTeachingCaseEN.sfUpdFldSetStr === null || objClsRmTeachingCaseEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objClsRmTeachingCaseEN.idClsRmTeachingCase);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClsRmTeachingCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param objClsRmTeachingCaseEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export  async function ClsRmTeachingCase_EditRecordExAsync(objClsRmTeachingCaseEN: clsClsRmTeachingCaseEN): Promise<boolean>  
{
const strThisFuncName = "EditRecordExAsync";
const strAction = "EditRecordEx";
 if (objClsRmTeachingCaseEN.sfUpdFldSetStr === undefined || objClsRmTeachingCaseEN.sfUpdFldSetStr === null || objClsRmTeachingCaseEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objClsRmTeachingCaseEN.idClsRmTeachingCase);
 throw strMsg;
 }
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClsRmTeachingCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param objClsRmTeachingCaseEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export  async function ClsRmTeachingCase_UpdateWithConditionAsync(objClsRmTeachingCaseEN: clsClsRmTeachingCaseEN, strWhereCond: string ): Promise<boolean> 
{
const strThisFuncName = "UpdateWithConditionAsync";
const strAction = "UpdateWithCondition";
 if (objClsRmTeachingCaseEN.sfUpdFldSetStr === undefined || objClsRmTeachingCaseEN.sfUpdFldSetStr === null || objClsRmTeachingCaseEN.sfUpdFldSetStr === "")
{
const strMsg = Format("对象(关键字: {0})的【修改字段集】为空,不能修改!", objClsRmTeachingCaseEN.idClsRmTeachingCase);
 throw new Error(strMsg);
 }
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);
objClsRmTeachingCaseEN.whereCond = strWhereCond;

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, objClsRmTeachingCaseEN, config);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
 * @param strIdClsRmTeachingCase:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function ClsRmTeachingCase_IsExistAsync(strIdClsRmTeachingCase: string): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
strIdClsRmTeachingCase
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  async function ClsRmTeachingCase_GetMaxStrIdByPrefix(strPrefix: string) 
{
const strThisFuncName = "GetMaxStrIdByPrefix";
const strAction = "GetMaxStrIdByPrefix";
const strUrl = GetWebApiUrl(clsRmTeachingCase_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, clsRmTeachingCase_ConstructorName, strThisFuncName);
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
export  function ClsRmTeachingCase_GetWebApiUrl(strController: string, strAction: string): string {
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

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ClsRmTeachingCase_(objDiv: HTMLDivElement, strDdlName: string )
{

const objDdl = document.getElementById(strDdlName);
if (objDdl == null)
{
const strMsg = Format("下拉框：{0} 不存在!(In )", strDdlName);
alert(strMsg);
console.error(strMsg);
throw (strMsg);
}
//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const strCondition = `1=1`;
const arrObjLstSel = await ClsRmTeachingCase_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return;
BindDdl_ObjLstInDivObj(objDiv, strDdlName, arrObjLstSel, clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName, "课堂教学案例...");
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_GetDdlData)-pyf
 * @param objDDL:需要绑定当前表的下拉框

*/
export  async function ClsRmTeachingCase_GetArrClsRmTeachingCase()
{

//为数据源于表的下拉框设置内容
//console.log("开始：Cache");
const arrClsRmTeachingCase = new Array<clsClsRmTeachingCaseEN>();
const strCondition = `1=1`;
const arrObjLstSel = await ClsRmTeachingCase_GetObjLstAsync(strCondition);
if (arrObjLstSel == null) return null;
const obj0 = new clsClsRmTeachingCaseEN();
obj0.idClsRmTeachingCase = '0';
obj0.clsRmTeachingCaseName = '选课堂教学案例...';
arrClsRmTeachingCase.push(obj0);
arrObjLstSel.forEach(x => arrClsRmTeachingCase.push(x));
return arrClsRmTeachingCase;
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ClsRmTeachingCase_CheckPropertyNew(pobjClsRmTeachingCaseEN: clsClsRmTeachingCaseEN)
{
//检查字段非空, 即数据表要求非常非空的字段,不能为空!
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) === true )
{
 throw new Error(`(errid:Watl000411)字段[课堂教学案例ID]不能为空(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) === true )
{
 throw new Error(`(errid:Watl000411)字段[课堂教学案例名称]不能为空(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) === true )
{
 throw new Error(`(errid:Watl000411)字段[课堂案例类型流水号]不能为空(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDiscipline) === true )
{
 throw new Error(`(errid:Watl000411)字段[学科流水号]不能为空(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachSkill) === true )
{
 throw new Error(`(errid:Watl000411)字段[教学技能流水号]不能为空(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ownerId) === true )
{
 throw new Error(`(errid:Watl000411)字段[拥有者Id]不能为空(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userKindId) === true )
{
 throw new Error(`(errid:Watl000411)字段[用户类别Id]不能为空(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) == false && GetStrLen(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课堂教学案例流水号(idClsRmTeachingCase)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idClsRmTeachingCase}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课堂教学案例ID(clsRmTeachingCaseID)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseID}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) > 100)
{
 throw new Error(`(errid:Watl000413)字段[课堂教学案例名称(clsRmTeachingCaseName)]的长度不能超过100(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseName}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme) > 200)
{
 throw new Error(`(errid:Watl000413)字段[课堂教学案例主题词(clsRmTeachingCaseTheme)]的长度不能超过200(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) == false && GetStrLen(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[课堂案例类型流水号(idClsRmTeachingCaseType)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseText) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseText) > 8000)
{
 throw new Error(`(errid:Watl000413)字段[案例文本内容(clsRmTeachingCaseText)]的长度不能超过8000(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseText}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate) > 8)
{
 throw new Error(`(errid:Watl000413)字段[课堂教学日期(clsRmTeachingCaseDate)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime) > 6)
{
 throw new Error(`(errid:Watl000413)字段[课堂教学时间(clsRmTeachingCaseTime)]的长度不能超过6(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn) > 8)
{
 throw new Error(`(errid:Watl000413)字段[案例入库日期(clsRmTeachingCaseDateIn)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn) > 6)
{
 throw new Error(`(errid:Watl000413)字段[案例入库时间(clsRmTeachingCaseTimeIn)]的长度不能超过6(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idStudyLevel) == false && GetStrLen(pobjClsRmTeachingCaseEN.idStudyLevel) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学段流水号(idStudyLevel)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idStudyLevel}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachingPlan) == false && GetStrLen(pobjClsRmTeachingCaseEN.idTeachingPlan) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教案流水号(idTeachingPlan)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idTeachingPlan}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idCaseType) == false && GetStrLen(pobjClsRmTeachingCaseEN.idCaseType) > 4)
{
 throw new Error(`(errid:Watl000413)字段[案例类型流水号(idCaseType)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idCaseType}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDiscipline) == false && GetStrLen(pobjClsRmTeachingCaseEN.idDiscipline) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学科流水号(idDiscipline)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idDiscipline}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSchool) == false && GetStrLen(pobjClsRmTeachingCaseEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idSchool}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDisciplinePs) == false && GetStrLen(pobjClsRmTeachingCaseEN.idDisciplinePs) > 4)
{
 throw new Error(`(errid:Watl000413)字段[学科流水号(idDisciplinePs)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idDisciplinePs}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idGradeBase) == false && GetStrLen(pobjClsRmTeachingCaseEN.idGradeBase) > 4)
{
 throw new Error(`(errid:Watl000413)字段[入学年级流水号(idGradeBase)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idGradeBase}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) == false && GetStrLen(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) > 4)
{
 throw new Error(`(errid:Watl000413)字段[评价量表版本流水号(idSenateGaugeVersion)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idSenateGaugeVersion}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachSkill) == false && GetStrLen(pobjClsRmTeachingCaseEN.idTeachSkill) > 8)
{
 throw new Error(`(errid:Watl000413)字段[教学技能流水号(idTeachSkill)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idTeachSkill}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.caseLevelId) == false && GetStrLen(pobjClsRmTeachingCaseEN.caseLevelId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[课例等级Id(caseLevelId)]的长度不能超过2(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.caseLevelId}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.docFile) == false && GetStrLen(pobjClsRmTeachingCaseEN.docFile) > 200)
{
 throw new Error(`(errid:Watl000413)字段[生成的Word文件名(docFile)]的长度不能超过200(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.docFile}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.wordCreateDate) == false && GetStrLen(pobjClsRmTeachingCaseEN.wordCreateDate) > 14)
{
 throw new Error(`(errid:Watl000413)字段[Word生成日期(wordCreateDate)]的长度不能超过14(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.wordCreateDate}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ownerId) == false && GetStrLen(pobjClsRmTeachingCaseEN.ownerId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[拥有者Id(ownerId)]的长度不能超过20(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.ownerId}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userKindId) == false && GetStrLen(pobjClsRmTeachingCaseEN.userKindId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[用户类别Id(userKindId)]的长度不能超过2(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.userKindId}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userTypeId) == false && GetStrLen(pobjClsRmTeachingCaseEN.userTypeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[用户类型Id(userTypeId)]的长度不能超过2(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.userTypeId}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.recommendedDegreeId) == false && GetStrLen(pobjClsRmTeachingCaseEN.recommendedDegreeId) > 2)
{
 throw new Error(`(errid:Watl000413)字段[推荐度Id(recommendedDegreeId)]的长度不能超过2(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.recommendedDegreeId}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ftpFileType) == false && GetStrLen(pobjClsRmTeachingCaseEN.ftpFileType) > 30)
{
 throw new Error(`(errid:Watl000413)字段[ftp文件类型(ftpFileType)]的长度不能超过30(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.ftpFileType}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.videoUrl) == false && GetStrLen(pobjClsRmTeachingCaseEN.videoUrl) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[视频Url(videoUrl)]的长度不能超过1000(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.videoUrl}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.videoPath) == false && GetStrLen(pobjClsRmTeachingCaseEN.videoPath) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[视频目录(videoPath)]的长度不能超过1000(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.videoPath}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.resErrMsg) == false && GetStrLen(pobjClsRmTeachingCaseEN.resErrMsg) > 30)
{
 throw new Error(`(errid:Watl000413)字段[资源错误信息(resErrMsg)]的长度不能超过30(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.resErrMsg}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.updDate) == false && GetStrLen(pobjClsRmTeachingCaseEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.updDate}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.updUserId) == false && GetStrLen(pobjClsRmTeachingCaseEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.updUserId}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.memo) == false && GetStrLen(pobjClsRmTeachingCaseEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.memo}(clsClsRmTeachingCaseBL:CheckPropertyNew)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) == false && undefined !== pobjClsRmTeachingCaseEN.idClsRmTeachingCase && tzDataType.isString(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) === false)
{
 throw new Error(`(errid:Watl000414)字段[课堂教学案例流水号(idClsRmTeachingCase)]的值:[${pobjClsRmTeachingCaseEN.idClsRmTeachingCase}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseID && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) === false)
{
 throw new Error(`(errid:Watl000414)字段[课堂教学案例ID(clsRmTeachingCaseID)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseID}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseName && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) === false)
{
 throw new Error(`(errid:Watl000414)字段[课堂教学案例名称(clsRmTeachingCaseName)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseName}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme) === false)
{
 throw new Error(`(errid:Watl000414)字段[课堂教学案例主题词(clsRmTeachingCaseTheme)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) == false && undefined !== pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType && tzDataType.isString(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) === false)
{
 throw new Error(`(errid:Watl000414)字段[课堂案例类型流水号(idClsRmTeachingCaseType)]的值:[${pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseText) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseText && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseText) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例文本内容(clsRmTeachingCaseText)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseText}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[课堂教学日期(clsRmTeachingCaseDate)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime) === false)
{
 throw new Error(`(errid:Watl000414)字段[课堂教学时间(clsRmTeachingCaseTime)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例入库日期(clsRmTeachingCaseDateIn)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例入库时间(clsRmTeachingCaseTimeIn)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idStudyLevel) == false && undefined !== pobjClsRmTeachingCaseEN.idStudyLevel && tzDataType.isString(pobjClsRmTeachingCaseEN.idStudyLevel) === false)
{
 throw new Error(`(errid:Watl000414)字段[学段流水号(idStudyLevel)]的值:[${pobjClsRmTeachingCaseEN.idStudyLevel}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachingPlan) == false && undefined !== pobjClsRmTeachingCaseEN.idTeachingPlan && tzDataType.isString(pobjClsRmTeachingCaseEN.idTeachingPlan) === false)
{
 throw new Error(`(errid:Watl000414)字段[教案流水号(idTeachingPlan)]的值:[${pobjClsRmTeachingCaseEN.idTeachingPlan}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idCaseType) == false && undefined !== pobjClsRmTeachingCaseEN.idCaseType && tzDataType.isString(pobjClsRmTeachingCaseEN.idCaseType) === false)
{
 throw new Error(`(errid:Watl000414)字段[案例类型流水号(idCaseType)]的值:[${pobjClsRmTeachingCaseEN.idCaseType}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDiscipline) == false && undefined !== pobjClsRmTeachingCaseEN.idDiscipline && tzDataType.isString(pobjClsRmTeachingCaseEN.idDiscipline) === false)
{
 throw new Error(`(errid:Watl000414)字段[学科流水号(idDiscipline)]的值:[${pobjClsRmTeachingCaseEN.idDiscipline}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSchool) == false && undefined !== pobjClsRmTeachingCaseEN.idSchool && tzDataType.isString(pobjClsRmTeachingCaseEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjClsRmTeachingCaseEN.idSchool}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDisciplinePs) == false && undefined !== pobjClsRmTeachingCaseEN.idDisciplinePs && tzDataType.isString(pobjClsRmTeachingCaseEN.idDisciplinePs) === false)
{
 throw new Error(`(errid:Watl000414)字段[学科流水号(idDisciplinePs)]的值:[${pobjClsRmTeachingCaseEN.idDisciplinePs}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idGradeBase) == false && undefined !== pobjClsRmTeachingCaseEN.idGradeBase && tzDataType.isString(pobjClsRmTeachingCaseEN.idGradeBase) === false)
{
 throw new Error(`(errid:Watl000414)字段[入学年级流水号(idGradeBase)]的值:[${pobjClsRmTeachingCaseEN.idGradeBase}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (null != pobjClsRmTeachingCaseEN.browseCount && undefined !== pobjClsRmTeachingCaseEN.browseCount && tzDataType.isNumber(pobjClsRmTeachingCaseEN.browseCount) === false)
{
 throw new Error(`(errid:Watl000414)字段[浏览次数(browseCount)]的值:[${pobjClsRmTeachingCaseEN.browseCount}], 非法,应该为数值型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) == false && undefined !== pobjClsRmTeachingCaseEN.idSenateGaugeVersion && tzDataType.isString(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) === false)
{
 throw new Error(`(errid:Watl000414)字段[评价量表版本流水号(idSenateGaugeVersion)]的值:[${pobjClsRmTeachingCaseEN.idSenateGaugeVersion}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachSkill) == false && undefined !== pobjClsRmTeachingCaseEN.idTeachSkill && tzDataType.isString(pobjClsRmTeachingCaseEN.idTeachSkill) === false)
{
 throw new Error(`(errid:Watl000414)字段[教学技能流水号(idTeachSkill)]的值:[${pobjClsRmTeachingCaseEN.idTeachSkill}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.caseLevelId) == false && undefined !== pobjClsRmTeachingCaseEN.caseLevelId && tzDataType.isString(pobjClsRmTeachingCaseEN.caseLevelId) === false)
{
 throw new Error(`(errid:Watl000414)字段[课例等级Id(caseLevelId)]的值:[${pobjClsRmTeachingCaseEN.caseLevelId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.docFile) == false && undefined !== pobjClsRmTeachingCaseEN.docFile && tzDataType.isString(pobjClsRmTeachingCaseEN.docFile) === false)
{
 throw new Error(`(errid:Watl000414)字段[生成的Word文件名(docFile)]的值:[${pobjClsRmTeachingCaseEN.docFile}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (null != pobjClsRmTeachingCaseEN.isNeedGeneWord && undefined !== pobjClsRmTeachingCaseEN.isNeedGeneWord && tzDataType.isBoolean(pobjClsRmTeachingCaseEN.isNeedGeneWord) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否需要生成Word(isNeedGeneWord)]的值:[${pobjClsRmTeachingCaseEN.isNeedGeneWord}], 非法,应该为布尔型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.wordCreateDate) == false && undefined !== pobjClsRmTeachingCaseEN.wordCreateDate && tzDataType.isString(pobjClsRmTeachingCaseEN.wordCreateDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[Word生成日期(wordCreateDate)]的值:[${pobjClsRmTeachingCaseEN.wordCreateDate}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (null != pobjClsRmTeachingCaseEN.isVisible && undefined !== pobjClsRmTeachingCaseEN.isVisible && tzDataType.isBoolean(pobjClsRmTeachingCaseEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否显示(isVisible)]的值:[${pobjClsRmTeachingCaseEN.isVisible}], 非法,应该为布尔型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ownerId) == false && undefined !== pobjClsRmTeachingCaseEN.ownerId && tzDataType.isString(pobjClsRmTeachingCaseEN.ownerId) === false)
{
 throw new Error(`(errid:Watl000414)字段[拥有者Id(ownerId)]的值:[${pobjClsRmTeachingCaseEN.ownerId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userKindId) == false && undefined !== pobjClsRmTeachingCaseEN.userKindId && tzDataType.isString(pobjClsRmTeachingCaseEN.userKindId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户类别Id(userKindId)]的值:[${pobjClsRmTeachingCaseEN.userKindId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userTypeId) == false && undefined !== pobjClsRmTeachingCaseEN.userTypeId && tzDataType.isString(pobjClsRmTeachingCaseEN.userTypeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[用户类型Id(userTypeId)]的值:[${pobjClsRmTeachingCaseEN.userTypeId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (null != pobjClsRmTeachingCaseEN.isDualVideo && undefined !== pobjClsRmTeachingCaseEN.isDualVideo && tzDataType.isBoolean(pobjClsRmTeachingCaseEN.isDualVideo) === false)
{
 throw new Error(`(errid:Watl000414)字段[是否双视频(isDualVideo)]的值:[${pobjClsRmTeachingCaseEN.isDualVideo}], 非法,应该为布尔型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.recommendedDegreeId) == false && undefined !== pobjClsRmTeachingCaseEN.recommendedDegreeId && tzDataType.isString(pobjClsRmTeachingCaseEN.recommendedDegreeId) === false)
{
 throw new Error(`(errid:Watl000414)字段[推荐度Id(recommendedDegreeId)]的值:[${pobjClsRmTeachingCaseEN.recommendedDegreeId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ftpFileType) == false && undefined !== pobjClsRmTeachingCaseEN.ftpFileType && tzDataType.isString(pobjClsRmTeachingCaseEN.ftpFileType) === false)
{
 throw new Error(`(errid:Watl000414)字段[ftp文件类型(ftpFileType)]的值:[${pobjClsRmTeachingCaseEN.ftpFileType}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.videoUrl) == false && undefined !== pobjClsRmTeachingCaseEN.videoUrl && tzDataType.isString(pobjClsRmTeachingCaseEN.videoUrl) === false)
{
 throw new Error(`(errid:Watl000414)字段[视频Url(videoUrl)]的值:[${pobjClsRmTeachingCaseEN.videoUrl}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.videoPath) == false && undefined !== pobjClsRmTeachingCaseEN.videoPath && tzDataType.isString(pobjClsRmTeachingCaseEN.videoPath) === false)
{
 throw new Error(`(errid:Watl000414)字段[视频目录(videoPath)]的值:[${pobjClsRmTeachingCaseEN.videoPath}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.resErrMsg) == false && undefined !== pobjClsRmTeachingCaseEN.resErrMsg && tzDataType.isString(pobjClsRmTeachingCaseEN.resErrMsg) === false)
{
 throw new Error(`(errid:Watl000414)字段[资源错误信息(resErrMsg)]的值:[${pobjClsRmTeachingCaseEN.resErrMsg}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.updDate) == false && undefined !== pobjClsRmTeachingCaseEN.updDate && tzDataType.isString(pobjClsRmTeachingCaseEN.updDate) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjClsRmTeachingCaseEN.updDate}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.updUserId) == false && undefined !== pobjClsRmTeachingCaseEN.updUserId && tzDataType.isString(pobjClsRmTeachingCaseEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[${pobjClsRmTeachingCaseEN.updUserId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.memo) == false && undefined !== pobjClsRmTeachingCaseEN.memo && tzDataType.isString(pobjClsRmTeachingCaseEN.memo) === false)
{
 throw new Error(`(errid:Watl000414)字段[备注(memo)]的值:[${pobjClsRmTeachingCaseEN.memo}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckPropertyNew0)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idStudyLevel) == false && pobjClsRmTeachingCaseEN.idStudyLevel != '[nuull]' && GetStrLen(pobjClsRmTeachingCaseEN.idStudyLevel) !=  4)
{
 throw ("(errid:Watl000415)字段[学段流水号]作为外键字段,长度应该为4(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idCaseType) == false && pobjClsRmTeachingCaseEN.idCaseType != '[nuull]' && GetStrLen(pobjClsRmTeachingCaseEN.idCaseType) !=  4)
{
 throw ("(errid:Watl000415)字段[案例类型流水号]作为外键字段,长度应该为4(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) == false && pobjClsRmTeachingCaseEN.idSenateGaugeVersion != '[nuull]' && GetStrLen(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) !=  4)
{
 throw ("(errid:Watl000415)字段[评价量表版本流水号]作为外键字段,长度应该为4(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userKindId) == false && pobjClsRmTeachingCaseEN.userKindId != '[nuull]' && GetStrLen(pobjClsRmTeachingCaseEN.userKindId) !=  2)
{
 throw ("(errid:Watl000415)字段[用户类别Id]作为外键字段,长度应该为2(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew)");
}

//设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
*/
export  function ClsRmTeachingCase_CheckProperty4Update(pobjClsRmTeachingCaseEN: clsClsRmTeachingCaseEN)
{
//检查字段长度, 若字符型字段长度超出规定的长度,即非法!
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) == false && GetStrLen(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课堂教学案例流水号(idClsRmTeachingCase)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idClsRmTeachingCase}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课堂教学案例ID(clsRmTeachingCaseID)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseID}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) > 100)
{
 throw new Error(`(errid:Watl000416)字段[课堂教学案例名称(clsRmTeachingCaseName)]的长度不能超过100(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseName}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme) > 200)
{
 throw new Error(`(errid:Watl000416)字段[课堂教学案例主题词(clsRmTeachingCaseTheme)]的长度不能超过200(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) == false && GetStrLen(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[课堂案例类型流水号(idClsRmTeachingCaseType)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseText) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseText) > 8000)
{
 throw new Error(`(errid:Watl000416)字段[案例文本内容(clsRmTeachingCaseText)]的长度不能超过8000(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseText}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate) > 8)
{
 throw new Error(`(errid:Watl000416)字段[课堂教学日期(clsRmTeachingCaseDate)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime) > 6)
{
 throw new Error(`(errid:Watl000416)字段[课堂教学时间(clsRmTeachingCaseTime)]的长度不能超过6(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn) > 8)
{
 throw new Error(`(errid:Watl000416)字段[案例入库日期(clsRmTeachingCaseDateIn)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn) == false && GetStrLen(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn) > 6)
{
 throw new Error(`(errid:Watl000416)字段[案例入库时间(clsRmTeachingCaseTimeIn)]的长度不能超过6(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idStudyLevel) == false && GetStrLen(pobjClsRmTeachingCaseEN.idStudyLevel) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学段流水号(idStudyLevel)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idStudyLevel}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachingPlan) == false && GetStrLen(pobjClsRmTeachingCaseEN.idTeachingPlan) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教案流水号(idTeachingPlan)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idTeachingPlan}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idCaseType) == false && GetStrLen(pobjClsRmTeachingCaseEN.idCaseType) > 4)
{
 throw new Error(`(errid:Watl000416)字段[案例类型流水号(idCaseType)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idCaseType}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDiscipline) == false && GetStrLen(pobjClsRmTeachingCaseEN.idDiscipline) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学科流水号(idDiscipline)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idDiscipline}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSchool) == false && GetStrLen(pobjClsRmTeachingCaseEN.idSchool) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idSchool}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDisciplinePs) == false && GetStrLen(pobjClsRmTeachingCaseEN.idDisciplinePs) > 4)
{
 throw new Error(`(errid:Watl000416)字段[学科流水号(idDisciplinePs)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idDisciplinePs}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idGradeBase) == false && GetStrLen(pobjClsRmTeachingCaseEN.idGradeBase) > 4)
{
 throw new Error(`(errid:Watl000416)字段[入学年级流水号(idGradeBase)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idGradeBase}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) == false && GetStrLen(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) > 4)
{
 throw new Error(`(errid:Watl000416)字段[评价量表版本流水号(idSenateGaugeVersion)]的长度不能超过4(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idSenateGaugeVersion}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachSkill) == false && GetStrLen(pobjClsRmTeachingCaseEN.idTeachSkill) > 8)
{
 throw new Error(`(errid:Watl000416)字段[教学技能流水号(idTeachSkill)]的长度不能超过8(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.idTeachSkill}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.caseLevelId) == false && GetStrLen(pobjClsRmTeachingCaseEN.caseLevelId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[课例等级Id(caseLevelId)]的长度不能超过2(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.caseLevelId}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.docFile) == false && GetStrLen(pobjClsRmTeachingCaseEN.docFile) > 200)
{
 throw new Error(`(errid:Watl000416)字段[生成的Word文件名(docFile)]的长度不能超过200(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.docFile}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.wordCreateDate) == false && GetStrLen(pobjClsRmTeachingCaseEN.wordCreateDate) > 14)
{
 throw new Error(`(errid:Watl000416)字段[Word生成日期(wordCreateDate)]的长度不能超过14(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.wordCreateDate}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ownerId) == false && GetStrLen(pobjClsRmTeachingCaseEN.ownerId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[拥有者Id(ownerId)]的长度不能超过20(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.ownerId}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userKindId) == false && GetStrLen(pobjClsRmTeachingCaseEN.userKindId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[用户类别Id(userKindId)]的长度不能超过2(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.userKindId}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userTypeId) == false && GetStrLen(pobjClsRmTeachingCaseEN.userTypeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[用户类型Id(userTypeId)]的长度不能超过2(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.userTypeId}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.recommendedDegreeId) == false && GetStrLen(pobjClsRmTeachingCaseEN.recommendedDegreeId) > 2)
{
 throw new Error(`(errid:Watl000416)字段[推荐度Id(recommendedDegreeId)]的长度不能超过2(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.recommendedDegreeId}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ftpFileType) == false && GetStrLen(pobjClsRmTeachingCaseEN.ftpFileType) > 30)
{
 throw new Error(`(errid:Watl000416)字段[ftp文件类型(ftpFileType)]的长度不能超过30(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.ftpFileType}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.videoUrl) == false && GetStrLen(pobjClsRmTeachingCaseEN.videoUrl) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[视频Url(videoUrl)]的长度不能超过1000(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.videoUrl}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.videoPath) == false && GetStrLen(pobjClsRmTeachingCaseEN.videoPath) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[视频目录(videoPath)]的长度不能超过1000(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.videoPath}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.resErrMsg) == false && GetStrLen(pobjClsRmTeachingCaseEN.resErrMsg) > 30)
{
 throw new Error(`(errid:Watl000416)字段[资源错误信息(resErrMsg)]的长度不能超过30(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.resErrMsg}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.updDate) == false && GetStrLen(pobjClsRmTeachingCaseEN.updDate) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.updDate}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.updUserId) == false && GetStrLen(pobjClsRmTeachingCaseEN.updUserId) > 20)
{
 throw new Error(`(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.updUserId}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.memo) == false && GetStrLen(pobjClsRmTeachingCaseEN.memo) > 1000)
{
 throw new Error(`(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 课堂教学案例(ClsRmTeachingCase))!值:${pobjClsRmTeachingCaseEN.memo}(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
//检查字段的数据类型是否正确
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) == false && undefined !== pobjClsRmTeachingCaseEN.idClsRmTeachingCase && tzDataType.isString(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) === false)
{
 throw new Error(`(errid:Watl000417)字段[课堂教学案例流水号(idClsRmTeachingCase)]的值:[${pobjClsRmTeachingCaseEN.idClsRmTeachingCase}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseID && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseID) === false)
{
 throw new Error(`(errid:Watl000417)字段[课堂教学案例ID(clsRmTeachingCaseID)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseID}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseName && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseName) === false)
{
 throw new Error(`(errid:Watl000417)字段[课堂教学案例名称(clsRmTeachingCaseName)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseName}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme) === false)
{
 throw new Error(`(errid:Watl000417)字段[课堂教学案例主题词(clsRmTeachingCaseTheme)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTheme}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) == false && undefined !== pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType && tzDataType.isString(pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType) === false)
{
 throw new Error(`(errid:Watl000417)字段[课堂案例类型流水号(idClsRmTeachingCaseType)]的值:[${pobjClsRmTeachingCaseEN.idClsRmTeachingCaseType}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseText) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseText && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseText) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例文本内容(clsRmTeachingCaseText)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseText}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[课堂教学日期(clsRmTeachingCaseDate)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseDate}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime) === false)
{
 throw new Error(`(errid:Watl000417)字段[课堂教学时间(clsRmTeachingCaseTime)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTime}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例入库日期(clsRmTeachingCaseDateIn)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseDateIn}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn) == false && undefined !== pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn && tzDataType.isString(pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例入库时间(clsRmTeachingCaseTimeIn)]的值:[${pobjClsRmTeachingCaseEN.clsRmTeachingCaseTimeIn}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idStudyLevel) == false && undefined !== pobjClsRmTeachingCaseEN.idStudyLevel && tzDataType.isString(pobjClsRmTeachingCaseEN.idStudyLevel) === false)
{
 throw new Error(`(errid:Watl000417)字段[学段流水号(idStudyLevel)]的值:[${pobjClsRmTeachingCaseEN.idStudyLevel}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachingPlan) == false && undefined !== pobjClsRmTeachingCaseEN.idTeachingPlan && tzDataType.isString(pobjClsRmTeachingCaseEN.idTeachingPlan) === false)
{
 throw new Error(`(errid:Watl000417)字段[教案流水号(idTeachingPlan)]的值:[${pobjClsRmTeachingCaseEN.idTeachingPlan}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idCaseType) == false && undefined !== pobjClsRmTeachingCaseEN.idCaseType && tzDataType.isString(pobjClsRmTeachingCaseEN.idCaseType) === false)
{
 throw new Error(`(errid:Watl000417)字段[案例类型流水号(idCaseType)]的值:[${pobjClsRmTeachingCaseEN.idCaseType}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDiscipline) == false && undefined !== pobjClsRmTeachingCaseEN.idDiscipline && tzDataType.isString(pobjClsRmTeachingCaseEN.idDiscipline) === false)
{
 throw new Error(`(errid:Watl000417)字段[学科流水号(idDiscipline)]的值:[${pobjClsRmTeachingCaseEN.idDiscipline}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSchool) == false && undefined !== pobjClsRmTeachingCaseEN.idSchool && tzDataType.isString(pobjClsRmTeachingCaseEN.idSchool) === false)
{
 throw new Error(`(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjClsRmTeachingCaseEN.idSchool}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idDisciplinePs) == false && undefined !== pobjClsRmTeachingCaseEN.idDisciplinePs && tzDataType.isString(pobjClsRmTeachingCaseEN.idDisciplinePs) === false)
{
 throw new Error(`(errid:Watl000417)字段[学科流水号(idDisciplinePs)]的值:[${pobjClsRmTeachingCaseEN.idDisciplinePs}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idGradeBase) == false && undefined !== pobjClsRmTeachingCaseEN.idGradeBase && tzDataType.isString(pobjClsRmTeachingCaseEN.idGradeBase) === false)
{
 throw new Error(`(errid:Watl000417)字段[入学年级流水号(idGradeBase)]的值:[${pobjClsRmTeachingCaseEN.idGradeBase}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (null != pobjClsRmTeachingCaseEN.browseCount && undefined !== pobjClsRmTeachingCaseEN.browseCount && tzDataType.isNumber(pobjClsRmTeachingCaseEN.browseCount) === false)
{
 throw new Error(`(errid:Watl000417)字段[浏览次数(browseCount)]的值:[${pobjClsRmTeachingCaseEN.browseCount}], 非法,应该为数值型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) == false && undefined !== pobjClsRmTeachingCaseEN.idSenateGaugeVersion && tzDataType.isString(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) === false)
{
 throw new Error(`(errid:Watl000417)字段[评价量表版本流水号(idSenateGaugeVersion)]的值:[${pobjClsRmTeachingCaseEN.idSenateGaugeVersion}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idTeachSkill) == false && undefined !== pobjClsRmTeachingCaseEN.idTeachSkill && tzDataType.isString(pobjClsRmTeachingCaseEN.idTeachSkill) === false)
{
 throw new Error(`(errid:Watl000417)字段[教学技能流水号(idTeachSkill)]的值:[${pobjClsRmTeachingCaseEN.idTeachSkill}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.caseLevelId) == false && undefined !== pobjClsRmTeachingCaseEN.caseLevelId && tzDataType.isString(pobjClsRmTeachingCaseEN.caseLevelId) === false)
{
 throw new Error(`(errid:Watl000417)字段[课例等级Id(caseLevelId)]的值:[${pobjClsRmTeachingCaseEN.caseLevelId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.docFile) == false && undefined !== pobjClsRmTeachingCaseEN.docFile && tzDataType.isString(pobjClsRmTeachingCaseEN.docFile) === false)
{
 throw new Error(`(errid:Watl000417)字段[生成的Word文件名(docFile)]的值:[${pobjClsRmTeachingCaseEN.docFile}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (null != pobjClsRmTeachingCaseEN.isNeedGeneWord && undefined !== pobjClsRmTeachingCaseEN.isNeedGeneWord && tzDataType.isBoolean(pobjClsRmTeachingCaseEN.isNeedGeneWord) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否需要生成Word(isNeedGeneWord)]的值:[${pobjClsRmTeachingCaseEN.isNeedGeneWord}], 非法,应该为布尔型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.wordCreateDate) == false && undefined !== pobjClsRmTeachingCaseEN.wordCreateDate && tzDataType.isString(pobjClsRmTeachingCaseEN.wordCreateDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[Word生成日期(wordCreateDate)]的值:[${pobjClsRmTeachingCaseEN.wordCreateDate}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (null != pobjClsRmTeachingCaseEN.isVisible && undefined !== pobjClsRmTeachingCaseEN.isVisible && tzDataType.isBoolean(pobjClsRmTeachingCaseEN.isVisible) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否显示(isVisible)]的值:[${pobjClsRmTeachingCaseEN.isVisible}], 非法,应该为布尔型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ownerId) == false && undefined !== pobjClsRmTeachingCaseEN.ownerId && tzDataType.isString(pobjClsRmTeachingCaseEN.ownerId) === false)
{
 throw new Error(`(errid:Watl000417)字段[拥有者Id(ownerId)]的值:[${pobjClsRmTeachingCaseEN.ownerId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userKindId) == false && undefined !== pobjClsRmTeachingCaseEN.userKindId && tzDataType.isString(pobjClsRmTeachingCaseEN.userKindId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户类别Id(userKindId)]的值:[${pobjClsRmTeachingCaseEN.userKindId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userTypeId) == false && undefined !== pobjClsRmTeachingCaseEN.userTypeId && tzDataType.isString(pobjClsRmTeachingCaseEN.userTypeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[用户类型Id(userTypeId)]的值:[${pobjClsRmTeachingCaseEN.userTypeId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (null != pobjClsRmTeachingCaseEN.isDualVideo && undefined !== pobjClsRmTeachingCaseEN.isDualVideo && tzDataType.isBoolean(pobjClsRmTeachingCaseEN.isDualVideo) === false)
{
 throw new Error(`(errid:Watl000417)字段[是否双视频(isDualVideo)]的值:[${pobjClsRmTeachingCaseEN.isDualVideo}], 非法,应该为布尔型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.recommendedDegreeId) == false && undefined !== pobjClsRmTeachingCaseEN.recommendedDegreeId && tzDataType.isString(pobjClsRmTeachingCaseEN.recommendedDegreeId) === false)
{
 throw new Error(`(errid:Watl000417)字段[推荐度Id(recommendedDegreeId)]的值:[${pobjClsRmTeachingCaseEN.recommendedDegreeId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.ftpFileType) == false && undefined !== pobjClsRmTeachingCaseEN.ftpFileType && tzDataType.isString(pobjClsRmTeachingCaseEN.ftpFileType) === false)
{
 throw new Error(`(errid:Watl000417)字段[ftp文件类型(ftpFileType)]的值:[${pobjClsRmTeachingCaseEN.ftpFileType}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.videoUrl) == false && undefined !== pobjClsRmTeachingCaseEN.videoUrl && tzDataType.isString(pobjClsRmTeachingCaseEN.videoUrl) === false)
{
 throw new Error(`(errid:Watl000417)字段[视频Url(videoUrl)]的值:[${pobjClsRmTeachingCaseEN.videoUrl}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.videoPath) == false && undefined !== pobjClsRmTeachingCaseEN.videoPath && tzDataType.isString(pobjClsRmTeachingCaseEN.videoPath) === false)
{
 throw new Error(`(errid:Watl000417)字段[视频目录(videoPath)]的值:[${pobjClsRmTeachingCaseEN.videoPath}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.resErrMsg) == false && undefined !== pobjClsRmTeachingCaseEN.resErrMsg && tzDataType.isString(pobjClsRmTeachingCaseEN.resErrMsg) === false)
{
 throw new Error(`(errid:Watl000417)字段[资源错误信息(resErrMsg)]的值:[${pobjClsRmTeachingCaseEN.resErrMsg}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.updDate) == false && undefined !== pobjClsRmTeachingCaseEN.updDate && tzDataType.isString(pobjClsRmTeachingCaseEN.updDate) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjClsRmTeachingCaseEN.updDate}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.updUserId) == false && undefined !== pobjClsRmTeachingCaseEN.updUserId && tzDataType.isString(pobjClsRmTeachingCaseEN.updUserId) === false)
{
 throw new Error(`(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[${pobjClsRmTeachingCaseEN.updUserId}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.memo) == false && undefined !== pobjClsRmTeachingCaseEN.memo && tzDataType.isString(pobjClsRmTeachingCaseEN.memo) === false)
{
 throw new Error(`(errid:Watl000417)字段[备注(memo)]的值:[${pobjClsRmTeachingCaseEN.memo}], 非法,应该为字符型(In 课堂教学案例(ClsRmTeachingCase))!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
//检查主键是否为Null或者空!
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idClsRmTeachingCase) === true )
{
 throw new Error(`(errid:Watl000064)字段[课堂教学案例流水号]不能为空(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckProperty4Update)`);
}
//检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idStudyLevel) == false && pobjClsRmTeachingCaseEN.idStudyLevel != '[nuull]' && GetStrLen(pobjClsRmTeachingCaseEN.idStudyLevel) !=  4)
{
 throw ("(errid:Watl000418)字段[学段流水号]作为外键字段,长度应该为4(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idCaseType) == false && pobjClsRmTeachingCaseEN.idCaseType != '[nuull]' && GetStrLen(pobjClsRmTeachingCaseEN.idCaseType) !=  4)
{
 throw ("(errid:Watl000418)字段[案例类型流水号]作为外键字段,长度应该为4(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) == false && pobjClsRmTeachingCaseEN.idSenateGaugeVersion != '[nuull]' && GetStrLen(pobjClsRmTeachingCaseEN.idSenateGaugeVersion) !=  4)
{
 throw ("(errid:Watl000418)字段[评价量表版本流水号]作为外键字段,长度应该为4(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew)");
}
if (IsNullOrEmpty(pobjClsRmTeachingCaseEN.userKindId) == false && pobjClsRmTeachingCaseEN.userKindId != '[nuull]' && GetStrLen(pobjClsRmTeachingCaseEN.userKindId) !=  2)
{
 throw ("(errid:Watl000418)字段[用户类别Id]作为外键字段,长度应该为2(In 课堂教学案例)!(clsClsRmTeachingCaseBL:CheckPropertyNew)");
}

}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ClsRmTeachingCase_GetJSONStrByObj (pobjClsRmTeachingCaseEN: clsClsRmTeachingCaseEN): string
{
pobjClsRmTeachingCaseEN.sfUpdFldSetStr = pobjClsRmTeachingCaseEN.updFldString;
let strJson = "";
try
{
strJson = JSON.stringify(pobjClsRmTeachingCaseEN);
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
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
*/
export  function ClsRmTeachingCase_GetObjLstByJSONStr (strJSON: string): Array<clsClsRmTeachingCaseEN>
{
let arrClsRmTeachingCaseObjLst = new Array<clsClsRmTeachingCaseEN>();
if (strJSON === "")
{
return arrClsRmTeachingCaseObjLst;
}
try
{
arrClsRmTeachingCaseObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrClsRmTeachingCaseObjLst;
}
return arrClsRmTeachingCaseObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrClsRmTeachingCaseObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function ClsRmTeachingCase_GetObjLstByJSONObjLst (arrClsRmTeachingCaseObjLstS: Array<clsClsRmTeachingCaseEN>): Array<clsClsRmTeachingCaseEN>
{
const arrClsRmTeachingCaseObjLst = new Array<clsClsRmTeachingCaseEN>();
for (const objInFor of arrClsRmTeachingCaseObjLstS) {
const obj1 = ClsRmTeachingCase_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrClsRmTeachingCaseObjLst.push(obj1);
}
return arrClsRmTeachingCaseObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function ClsRmTeachingCase_GetObjByJSONStr (strJSON: string): clsClsRmTeachingCaseEN
{
let pobjClsRmTeachingCaseEN = new clsClsRmTeachingCaseEN();
if (strJSON === "")
{
return pobjClsRmTeachingCaseEN;
}
try
{
pobjClsRmTeachingCaseEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjClsRmTeachingCaseEN;
}
return pobjClsRmTeachingCaseEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function ClsRmTeachingCase_GetCombineCondition(objClsRmTeachingCaseCond: clsClsRmTeachingCaseEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase) == true)
{
const strComparisonOpIdClsRmTeachingCase:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase, objClsRmTeachingCaseCond.idClsRmTeachingCase, strComparisonOpIdClsRmTeachingCase);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseID) == true)
{
const strComparisonOpClsRmTeachingCaseID:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseID];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseID, objClsRmTeachingCaseCond.clsRmTeachingCaseID, strComparisonOpClsRmTeachingCaseID);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName) == true)
{
const strComparisonOpClsRmTeachingCaseName:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName, objClsRmTeachingCaseCond.clsRmTeachingCaseName, strComparisonOpClsRmTeachingCaseName);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTheme) == true)
{
const strComparisonOpClsRmTeachingCaseTheme:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTheme];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTheme, objClsRmTeachingCaseCond.clsRmTeachingCaseTheme, strComparisonOpClsRmTeachingCaseTheme);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdClsRmTeachingCaseType) == true)
{
const strComparisonOpIdClsRmTeachingCaseType:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdClsRmTeachingCaseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdClsRmTeachingCaseType, objClsRmTeachingCaseCond.idClsRmTeachingCaseType, strComparisonOpIdClsRmTeachingCaseType);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseText) == true)
{
const strComparisonOpClsRmTeachingCaseText:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseText];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseText, objClsRmTeachingCaseCond.clsRmTeachingCaseText, strComparisonOpClsRmTeachingCaseText);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDate) == true)
{
const strComparisonOpClsRmTeachingCaseDate:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDate, objClsRmTeachingCaseCond.clsRmTeachingCaseDate, strComparisonOpClsRmTeachingCaseDate);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTime) == true)
{
const strComparisonOpClsRmTeachingCaseTime:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTime];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTime, objClsRmTeachingCaseCond.clsRmTeachingCaseTime, strComparisonOpClsRmTeachingCaseTime);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDateIn) == true)
{
const strComparisonOpClsRmTeachingCaseDateIn:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDateIn];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDateIn, objClsRmTeachingCaseCond.clsRmTeachingCaseDateIn, strComparisonOpClsRmTeachingCaseDateIn);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTimeIn) == true)
{
const strComparisonOpClsRmTeachingCaseTimeIn:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTimeIn];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTimeIn, objClsRmTeachingCaseCond.clsRmTeachingCaseTimeIn, strComparisonOpClsRmTeachingCaseTimeIn);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdStudyLevel) == true)
{
const strComparisonOpIdStudyLevel:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdStudyLevel];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdStudyLevel, objClsRmTeachingCaseCond.idStudyLevel, strComparisonOpIdStudyLevel);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdTeachingPlan) == true)
{
const strComparisonOpIdTeachingPlan:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdTeachingPlan];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdTeachingPlan, objClsRmTeachingCaseCond.idTeachingPlan, strComparisonOpIdTeachingPlan);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdCaseType) == true)
{
const strComparisonOpIdCaseType:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdCaseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdCaseType, objClsRmTeachingCaseCond.idCaseType, strComparisonOpIdCaseType);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdDiscipline) == true)
{
const strComparisonOpIdDiscipline:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdDiscipline];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdDiscipline, objClsRmTeachingCaseCond.idDiscipline, strComparisonOpIdDiscipline);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdSchool) == true)
{
const strComparisonOpIdSchool:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdSchool];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdSchool, objClsRmTeachingCaseCond.idSchool, strComparisonOpIdSchool);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdDisciplinePs) == true)
{
const strComparisonOpIdDisciplinePs:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdDisciplinePs];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdDisciplinePs, objClsRmTeachingCaseCond.idDisciplinePs, strComparisonOpIdDisciplinePs);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdGradeBase, objClsRmTeachingCaseCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_BrowseCount) == true)
{
const strComparisonOpBrowseCount:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_BrowseCount];
strWhereCond += Format(" And {0} {2} {1}", clsClsRmTeachingCaseEN.con_BrowseCount, objClsRmTeachingCaseCond.browseCount, strComparisonOpBrowseCount);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdSenateGaugeVersion) == true)
{
const strComparisonOpIdSenateGaugeVersion:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdSenateGaugeVersion];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdSenateGaugeVersion, objClsRmTeachingCaseCond.idSenateGaugeVersion, strComparisonOpIdSenateGaugeVersion);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IdTeachSkill) == true)
{
const strComparisonOpIdTeachSkill:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_IdTeachSkill];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_IdTeachSkill, objClsRmTeachingCaseCond.idTeachSkill, strComparisonOpIdTeachSkill);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_CaseLevelId) == true)
{
const strComparisonOpCaseLevelId:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_CaseLevelId];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_CaseLevelId, objClsRmTeachingCaseCond.caseLevelId, strComparisonOpCaseLevelId);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_DocFile) == true)
{
const strComparisonOpDocFile:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_DocFile];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_DocFile, objClsRmTeachingCaseCond.docFile, strComparisonOpDocFile);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IsNeedGeneWord) == true)
{
if (objClsRmTeachingCaseCond.isNeedGeneWord == true)
{
strWhereCond += Format(" And {0} = '1'", clsClsRmTeachingCaseEN.con_IsNeedGeneWord);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsClsRmTeachingCaseEN.con_IsNeedGeneWord);
}
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_WordCreateDate) == true)
{
const strComparisonOpWordCreateDate:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_WordCreateDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_WordCreateDate, objClsRmTeachingCaseCond.wordCreateDate, strComparisonOpWordCreateDate);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IsVisible) == true)
{
if (objClsRmTeachingCaseCond.isVisible == true)
{
strWhereCond += Format(" And {0} = '1'", clsClsRmTeachingCaseEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsClsRmTeachingCaseEN.con_IsVisible);
}
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_OwnerId) == true)
{
const strComparisonOpOwnerId:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_OwnerId];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_OwnerId, objClsRmTeachingCaseCond.ownerId, strComparisonOpOwnerId);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_UserKindId) == true)
{
const strComparisonOpUserKindId:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_UserKindId];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_UserKindId, objClsRmTeachingCaseCond.userKindId, strComparisonOpUserKindId);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_UserTypeId) == true)
{
const strComparisonOpUserTypeId:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_UserTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_UserTypeId, objClsRmTeachingCaseCond.userTypeId, strComparisonOpUserTypeId);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_IsDualVideo) == true)
{
if (objClsRmTeachingCaseCond.isDualVideo == true)
{
strWhereCond += Format(" And {0} = '1'", clsClsRmTeachingCaseEN.con_IsDualVideo);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsClsRmTeachingCaseEN.con_IsDualVideo);
}
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_RecommendedDegreeId) == true)
{
const strComparisonOpRecommendedDegreeId:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_RecommendedDegreeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_RecommendedDegreeId, objClsRmTeachingCaseCond.recommendedDegreeId, strComparisonOpRecommendedDegreeId);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ftpFileType) == true)
{
const strComparisonOpftpFileType:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ftpFileType];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ftpFileType, objClsRmTeachingCaseCond.ftpFileType, strComparisonOpftpFileType);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_VideoUrl) == true)
{
const strComparisonOpVideoUrl:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_VideoUrl];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_VideoUrl, objClsRmTeachingCaseCond.videoUrl, strComparisonOpVideoUrl);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_VideoPath) == true)
{
const strComparisonOpVideoPath:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_VideoPath];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_VideoPath, objClsRmTeachingCaseCond.videoPath, strComparisonOpVideoPath);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_ResErrMsg) == true)
{
const strComparisonOpResErrMsg:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_ResErrMsg];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_ResErrMsg, objClsRmTeachingCaseCond.resErrMsg, strComparisonOpResErrMsg);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_UpdDate, objClsRmTeachingCaseCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_UpdUserId) == true)
{
const strComparisonOpUpdUserId:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_UpdUserId];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_UpdUserId, objClsRmTeachingCaseCond.updUserId, strComparisonOpUpdUserId);
}
if (Object.prototype.hasOwnProperty.call(objClsRmTeachingCaseCond.dicFldComparisonOp, clsClsRmTeachingCaseEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objClsRmTeachingCaseCond.dicFldComparisonOp[clsClsRmTeachingCaseEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsClsRmTeachingCaseEN.con_Memo, objClsRmTeachingCaseCond.memo, strComparisonOpMemo);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objClsRmTeachingCaseENS:源对象
 * @param objClsRmTeachingCaseENT:目标对象
*/
export  function ClsRmTeachingCase_CopyObjTo(objClsRmTeachingCaseENS: clsClsRmTeachingCaseEN , objClsRmTeachingCaseENT: clsClsRmTeachingCaseEN ): void 
{
objClsRmTeachingCaseENT.idClsRmTeachingCase = objClsRmTeachingCaseENS.idClsRmTeachingCase; //课堂教学案例流水号
objClsRmTeachingCaseENT.clsRmTeachingCaseID = objClsRmTeachingCaseENS.clsRmTeachingCaseID; //课堂教学案例ID
objClsRmTeachingCaseENT.clsRmTeachingCaseName = objClsRmTeachingCaseENS.clsRmTeachingCaseName; //课堂教学案例名称
objClsRmTeachingCaseENT.clsRmTeachingCaseTheme = objClsRmTeachingCaseENS.clsRmTeachingCaseTheme; //课堂教学案例主题词
objClsRmTeachingCaseENT.idClsRmTeachingCaseType = objClsRmTeachingCaseENS.idClsRmTeachingCaseType; //课堂案例类型流水号
objClsRmTeachingCaseENT.clsRmTeachingCaseText = objClsRmTeachingCaseENS.clsRmTeachingCaseText; //案例文本内容
objClsRmTeachingCaseENT.clsRmTeachingCaseDate = objClsRmTeachingCaseENS.clsRmTeachingCaseDate; //课堂教学日期
objClsRmTeachingCaseENT.clsRmTeachingCaseTime = objClsRmTeachingCaseENS.clsRmTeachingCaseTime; //课堂教学时间
objClsRmTeachingCaseENT.clsRmTeachingCaseDateIn = objClsRmTeachingCaseENS.clsRmTeachingCaseDateIn; //案例入库日期
objClsRmTeachingCaseENT.clsRmTeachingCaseTimeIn = objClsRmTeachingCaseENS.clsRmTeachingCaseTimeIn; //案例入库时间
objClsRmTeachingCaseENT.idStudyLevel = objClsRmTeachingCaseENS.idStudyLevel; //学段流水号
objClsRmTeachingCaseENT.idTeachingPlan = objClsRmTeachingCaseENS.idTeachingPlan; //教案流水号
objClsRmTeachingCaseENT.idCaseType = objClsRmTeachingCaseENS.idCaseType; //案例类型流水号
objClsRmTeachingCaseENT.idDiscipline = objClsRmTeachingCaseENS.idDiscipline; //学科流水号
objClsRmTeachingCaseENT.idSchool = objClsRmTeachingCaseENS.idSchool; //学校流水号
objClsRmTeachingCaseENT.idDisciplinePs = objClsRmTeachingCaseENS.idDisciplinePs; //学科流水号
objClsRmTeachingCaseENT.idGradeBase = objClsRmTeachingCaseENS.idGradeBase; //入学年级流水号
objClsRmTeachingCaseENT.browseCount = objClsRmTeachingCaseENS.browseCount; //浏览次数
objClsRmTeachingCaseENT.idSenateGaugeVersion = objClsRmTeachingCaseENS.idSenateGaugeVersion; //评价量表版本流水号
objClsRmTeachingCaseENT.idTeachSkill = objClsRmTeachingCaseENS.idTeachSkill; //教学技能流水号
objClsRmTeachingCaseENT.caseLevelId = objClsRmTeachingCaseENS.caseLevelId; //课例等级Id
objClsRmTeachingCaseENT.docFile = objClsRmTeachingCaseENS.docFile; //生成的Word文件名
objClsRmTeachingCaseENT.isNeedGeneWord = objClsRmTeachingCaseENS.isNeedGeneWord; //是否需要生成Word
objClsRmTeachingCaseENT.wordCreateDate = objClsRmTeachingCaseENS.wordCreateDate; //Word生成日期
objClsRmTeachingCaseENT.isVisible = objClsRmTeachingCaseENS.isVisible; //是否显示
objClsRmTeachingCaseENT.ownerId = objClsRmTeachingCaseENS.ownerId; //拥有者Id
objClsRmTeachingCaseENT.userKindId = objClsRmTeachingCaseENS.userKindId; //用户类别Id
objClsRmTeachingCaseENT.userTypeId = objClsRmTeachingCaseENS.userTypeId; //用户类型Id
objClsRmTeachingCaseENT.isDualVideo = objClsRmTeachingCaseENS.isDualVideo; //是否双视频
objClsRmTeachingCaseENT.recommendedDegreeId = objClsRmTeachingCaseENS.recommendedDegreeId; //推荐度Id
objClsRmTeachingCaseENT.ftpFileType = objClsRmTeachingCaseENS.ftpFileType; //ftp文件类型
objClsRmTeachingCaseENT.videoUrl = objClsRmTeachingCaseENS.videoUrl; //视频Url
objClsRmTeachingCaseENT.videoPath = objClsRmTeachingCaseENS.videoPath; //视频目录
objClsRmTeachingCaseENT.resErrMsg = objClsRmTeachingCaseENS.resErrMsg; //资源错误信息
objClsRmTeachingCaseENT.updDate = objClsRmTeachingCaseENS.updDate; //修改日期
objClsRmTeachingCaseENT.updUserId = objClsRmTeachingCaseENS.updUserId; //修改用户Id
objClsRmTeachingCaseENT.memo = objClsRmTeachingCaseENS.memo; //备注
objClsRmTeachingCaseENT.sfUpdFldSetStr = objClsRmTeachingCaseENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objClsRmTeachingCaseENS:源对象
 * @param objClsRmTeachingCaseENT:目标对象
*/
export  function ClsRmTeachingCase_GetObjFromJsonObj(objClsRmTeachingCaseENS: clsClsRmTeachingCaseEN): clsClsRmTeachingCaseEN 
{
 const objClsRmTeachingCaseENT: clsClsRmTeachingCaseEN = new clsClsRmTeachingCaseEN();
ObjectAssign(objClsRmTeachingCaseENT, objClsRmTeachingCaseENS);
 return objClsRmTeachingCaseENT;
}
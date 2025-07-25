﻿
 /**
 * 类名:clsvCurrEduClsTeacherWApi
 * 表名:vCurrEduClsTeacher(01120128)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/27 15:26:44
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * v当前教学班教师(vCurrEduClsTeacher)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
* Created by pyf on 2025年02月27日.
* 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from "axios";
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { clsvCurrEduClsTeacherEN } from "@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN";
import { GetExceptionStr, GetObjKeys, myShowErrorMsg, ObjectAssign } from "@/ts/PubFun/clsCommFunc4Web";
import { AddRecordResult } from "@/ts/PubFun/AddRecordResult";
import { clsSysPara4WebApi, GetWebApiUrl } from "@/ts/PubConfig/clsSysPara4WebApi";
import { stuTopPara } from "@/ts/PubFun/stuTopPara";
import { stuRangePara } from "@/ts/PubFun/stuRangePara";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString";

 export const vCurrEduClsTeacher_Controller = "vCurrEduClsTeacherApi";
 export const vCurrEduClsTeacher_ConstructorName = "vCurrEduClsTeacher";

 /**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngIdEduClsTeacher:关键字
 * @returns 对象
 **/
export  async function vCurrEduClsTeacher_GetObjByIdEduClsTeacherAsync(lngIdEduClsTeacher: number): Promise<clsvCurrEduClsTeacherEN|null>  
{
const strThisFuncName = "GetObjByIdEduClsTeacherAsync";

if (lngIdEduClsTeacher == 0)
{
  const strMsg = Format("参数:[lngIdEduClsTeacher]不能为空!(In clsvCurrEduClsTeacherWApi.GetObjByIdEduClsTeacherAsync)");
console.error(strMsg);
 throw (strMsg);
}
const strAction = "GetObjByIdEduClsTeacher";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsTeacher,
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
const objvCurrEduClsTeacher = vCurrEduClsTeacher_GetObjFromJsonObj(returnObj);
return objvCurrEduClsTeacher;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjByIdEduClsTeacherlocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdEduClsTeacherCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
*/
export  function vCurrEduClsTeacher_SortFunDefa(a:clsvCurrEduClsTeacherEN , b:clsvCurrEduClsTeacherEN): number 
{
return a.idEduClsTeacher-b.idEduClsTeacher;
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
export  function vCurrEduClsTeacher_SortFunDefa2Fld(a:clsvCurrEduClsTeacherEN , b:clsvCurrEduClsTeacherEN): number 
{
if (a.idCurrEduCls == b.idCurrEduCls) return a.currEduClsId.localeCompare(b.currEduClsId);
else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export  function vCurrEduClsTeacher_SortFunByKey(strKey:string, AscOrDesc: string)
{
const strThisFuncName = "SortFunByKey";
let strMsg ="";
if (AscOrDesc == "Asc" || AscOrDesc == "")
{
switch (strKey)
{
case clsvCurrEduClsTeacherEN.con_IdEduClsTeacher:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.idEduClsTeacher-b.idEduClsTeacher;
}
case clsvCurrEduClsTeacherEN.con_IdCurrEduCls:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
}
case clsvCurrEduClsTeacherEN.con_CurrEduClsId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.currEduClsId == null) return -1;
if (b.currEduClsId == null) return 1;
return a.currEduClsId.localeCompare(b.currEduClsId);
}
case clsvCurrEduClsTeacherEN.con_EduClsName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.eduClsName.localeCompare(b.eduClsName);
}
case clsvCurrEduClsTeacherEN.con_EduClsTypeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.eduClsTypeId.localeCompare(b.eduClsTypeId);
}
case clsvCurrEduClsTeacherEN.con_EduClsTypeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.eduClsTypeName == null) return -1;
if (b.eduClsTypeName == null) return 1;
return a.eduClsTypeName.localeCompare(b.eduClsTypeName);
}
case clsvCurrEduClsTeacherEN.con_CourseId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.courseId == null) return -1;
if (b.courseId == null) return 1;
return a.courseId.localeCompare(b.courseId);
}
case clsvCurrEduClsTeacherEN.con_CourseCode:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.courseCode == null) return -1;
if (b.courseCode == null) return 1;
return a.courseCode.localeCompare(b.courseCode);
}
case clsvCurrEduClsTeacherEN.con_CourseName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.courseName == null) return -1;
if (b.courseName == null) return 1;
return a.courseName.localeCompare(b.courseName);
}
case clsvCurrEduClsTeacherEN.con_ExampleImgPath:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.exampleImgPath == null) return -1;
if (b.exampleImgPath == null) return 1;
return a.exampleImgPath.localeCompare(b.exampleImgPath);
}
case clsvCurrEduClsTeacherEN.con_TeachingSolutionId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.teachingSolutionId == null) return -1;
if (b.teachingSolutionId == null) return 1;
return a.teachingSolutionId.localeCompare(b.teachingSolutionId);
}
case clsvCurrEduClsTeacherEN.con_TeachingSolutionName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.teachingSolutionName == null) return -1;
if (b.teachingSolutionName == null) return 1;
return a.teachingSolutionName.localeCompare(b.teachingSolutionName);
}
case clsvCurrEduClsTeacherEN.con_IdXzCollege:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idXzCollege == null) return -1;
if (b.idXzCollege == null) return 1;
return a.idXzCollege.localeCompare(b.idXzCollege);
}
case clsvCurrEduClsTeacherEN.con_CollegeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.collegeId == null) return -1;
if (b.collegeId == null) return 1;
return a.collegeId.localeCompare(b.collegeId);
}
case clsvCurrEduClsTeacherEN.con_IdEduWay:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idEduWay == null) return -1;
if (b.idEduWay == null) return 1;
return a.idEduWay.localeCompare(b.idEduWay);
}
case clsvCurrEduClsTeacherEN.con_TotalLessonQty:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.totalLessonQty-b.totalLessonQty;
}
case clsvCurrEduClsTeacherEN.con_MaxStuQty:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.maxStuQty-b.maxStuQty;
}
case clsvCurrEduClsTeacherEN.con_WeekQty:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.weekQty-b.weekQty;
}
case clsvCurrEduClsTeacherEN.con_ScheUnitPW:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.scheUnitPW-b.scheUnitPW;
}
case clsvCurrEduClsTeacherEN.con_WeekStatusId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.weekStatusId == null) return -1;
if (b.weekStatusId == null) return 1;
return a.weekStatusId.localeCompare(b.weekStatusId);
}
case clsvCurrEduClsTeacherEN.con_CustomerWeek:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.customerWeek == null) return -1;
if (b.customerWeek == null) return 1;
return a.customerWeek.localeCompare(b.customerWeek);
}
case clsvCurrEduClsTeacherEN.con_LessonQtyPerWeek:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.lessonQtyPerWeek-b.lessonQtyPerWeek;
}
case clsvCurrEduClsTeacherEN.con_IdUniZone:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idUniZone == null) return -1;
if (b.idUniZone == null) return 1;
return a.idUniZone.localeCompare(b.idUniZone);
}
case clsvCurrEduClsTeacherEN.con_IdGradeBase:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idGradeBase == null) return -1;
if (b.idGradeBase == null) return 1;
return a.idGradeBase.localeCompare(b.idGradeBase);
}
case clsvCurrEduClsTeacherEN.con_GradeBaseId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.gradeBaseId == null) return -1;
if (b.gradeBaseId == null) return 1;
return a.gradeBaseId.localeCompare(b.gradeBaseId);
}
case clsvCurrEduClsTeacherEN.con_GradeBaseName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.gradeBaseName == null) return -1;
if (b.gradeBaseName == null) return 1;
return a.gradeBaseName.localeCompare(b.gradeBaseName);
}
case clsvCurrEduClsTeacherEN.con_IsEffective:
return (a: clsvCurrEduClsTeacherEN) => {
if (a.isEffective == true) return 1;
else return -1
}
case clsvCurrEduClsTeacherEN.con_IdCourseType:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idCourseType == null) return -1;
if (b.idCourseType == null) return 1;
return a.idCourseType.localeCompare(b.idCourseType);
}
case clsvCurrEduClsTeacherEN.con_CourseTypeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.courseTypeId == null) return -1;
if (b.courseTypeId == null) return 1;
return a.courseTypeId.localeCompare(b.courseTypeId);
}
case clsvCurrEduClsTeacherEN.con_CourseTypeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.courseTypeName == null) return -1;
if (b.courseTypeName == null) return 1;
return a.courseTypeName.localeCompare(b.courseTypeName);
}
case clsvCurrEduClsTeacherEN.con_IsDegree:
return (a: clsvCurrEduClsTeacherEN) => {
if (a.isDegree == true) return 1;
else return -1
}
case clsvCurrEduClsTeacherEN.con_IdScoreType:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idScoreType == null) return -1;
if (b.idScoreType == null) return 1;
return a.idScoreType.localeCompare(b.idScoreType);
}
case clsvCurrEduClsTeacherEN.con_IsProportionalCtrl:
return (a: clsvCurrEduClsTeacherEN) => {
if (a.isProportionalCtrl == true) return 1;
else return -1
}
case clsvCurrEduClsTeacherEN.con_IdExamType:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idExamType == null) return -1;
if (b.idExamType == null) return 1;
return a.idExamType.localeCompare(b.idExamType);
}
case clsvCurrEduClsTeacherEN.con_BeginWeek:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.beginWeek-b.beginWeek;
}
case clsvCurrEduClsTeacherEN.con_CurrStuNumValid:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.currStuNumValid-b.currStuNumValid;
}
case clsvCurrEduClsTeacherEN.con_CurrStuNum:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.currStuNum-b.currStuNum;
}
case clsvCurrEduClsTeacherEN.con_IdTeacher:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idTeacher == null) return -1;
if (b.idTeacher == null) return 1;
return a.idTeacher.localeCompare(b.idTeacher);
}
case clsvCurrEduClsTeacherEN.con_TeacherId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.teacherId == null) return -1;
if (b.teacherId == null) return 1;
return a.teacherId.localeCompare(b.teacherId);
}
case clsvCurrEduClsTeacherEN.con_TeacherName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.teacherName == null) return -1;
if (b.teacherName == null) return 1;
return a.teacherName.localeCompare(b.teacherName);
}
case clsvCurrEduClsTeacherEN.con_IdProfGrade:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.idProfGrade == null) return -1;
if (b.idProfGrade == null) return 1;
return a.idProfGrade.localeCompare(b.idProfGrade);
}
case clsvCurrEduClsTeacherEN.con_ProfenssionalGradeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.profenssionalGradeName == null) return -1;
if (b.profenssionalGradeName == null) return 1;
return a.profenssionalGradeName.localeCompare(b.profenssionalGradeName);
}
case clsvCurrEduClsTeacherEN.con_DegreeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.degreeName == null) return -1;
if (b.degreeName == null) return 1;
return a.degreeName.localeCompare(b.degreeName);
}
case clsvCurrEduClsTeacherEN.con_Birthday:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.birthday == null) return -1;
if (b.birthday == null) return 1;
return a.birthday.localeCompare(b.birthday);
}
case clsvCurrEduClsTeacherEN.con_IsGpUser:
return (a: clsvCurrEduClsTeacherEN) => {
if (a.isGpUser == true) return 1;
else return -1
}
case clsvCurrEduClsTeacherEN.con_CollegeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.collegeName == null) return -1;
if (b.collegeName == null) return 1;
return a.collegeName.localeCompare(b.collegeName);
}
case clsvCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.idPk2EduClsTeacherType.localeCompare(b.idPk2EduClsTeacherType);
}
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.eduClsTeacherTypeId == null) return -1;
if (b.eduClsTeacherTypeId == null) return 1;
return a.eduClsTeacherTypeId.localeCompare(b.eduClsTeacherTypeId);
}
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeDesc:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.eduClsTeacherTypeDesc == null) return -1;
if (b.eduClsTeacherTypeDesc == null) return 1;
return a.eduClsTeacherTypeDesc.localeCompare(b.eduClsTeacherTypeDesc);
}
case clsvCurrEduClsTeacherEN.con_SchoolTerm:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.schoolTerm == null) return -1;
if (b.schoolTerm == null) return 1;
return a.schoolTerm.localeCompare(b.schoolTerm);
}
case clsvCurrEduClsTeacherEN.con_SchoolYear:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.schoolYear == null) return -1;
if (b.schoolYear == null) return 1;
return a.schoolYear.localeCompare(b.schoolYear);
}
case clsvCurrEduClsTeacherEN.con_OpenBeginDate:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.openBeginDate == null) return -1;
if (b.openBeginDate == null) return 1;
return a.openBeginDate.localeCompare(b.openBeginDate);
}
case clsvCurrEduClsTeacherEN.con_OpenEndDate:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.openEndDate == null) return -1;
if (b.openEndDate == null) return 1;
return a.openEndDate.localeCompare(b.openEndDate);
}
case clsvCurrEduClsTeacherEN.con_OrderNum:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return a.orderNum-b.orderNum;
}
case clsvCurrEduClsTeacherEN.con_UpdDate:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.updDate == null) return -1;
if (b.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
}
case clsvCurrEduClsTeacherEN.con_UpdUser:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser);
}
case clsvCurrEduClsTeacherEN.con_Memo:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo);
}
case clsvCurrEduClsTeacherEN.con_CollegeName4EduCls:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.collegeName4EduCls == null) return -1;
if (b.collegeName4EduCls == null) return 1;
return a.collegeName4EduCls.localeCompare(b.collegeName4EduCls);
}
case clsvCurrEduClsTeacherEN.con_CollegeName4Teacher:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.collegeName4Teacher == null) return -1;
if (b.collegeName4Teacher == null) return 1;
return a.collegeName4Teacher.localeCompare(b.collegeName4Teacher);
}
case clsvCurrEduClsTeacherEN.con_UserTypeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (a.userTypeId == null) return -1;
if (b.userTypeId == null) return 1;
return a.userTypeId.localeCompare(b.userTypeId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsTeacher]中不存在!(in ${ vCurrEduClsTeacher_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
  else
 {
switch (strKey)
{
case clsvCurrEduClsTeacherEN.con_IdEduClsTeacher:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.idEduClsTeacher-a.idEduClsTeacher;
}
case clsvCurrEduClsTeacherEN.con_IdCurrEduCls:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
}
case clsvCurrEduClsTeacherEN.con_CurrEduClsId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.currEduClsId == null) return -1;
if (a.currEduClsId == null) return 1;
return b.currEduClsId.localeCompare(a.currEduClsId);
}
case clsvCurrEduClsTeacherEN.con_EduClsName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.eduClsName.localeCompare(a.eduClsName);
}
case clsvCurrEduClsTeacherEN.con_EduClsTypeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.eduClsTypeId.localeCompare(a.eduClsTypeId);
}
case clsvCurrEduClsTeacherEN.con_EduClsTypeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.eduClsTypeName == null) return -1;
if (a.eduClsTypeName == null) return 1;
return b.eduClsTypeName.localeCompare(a.eduClsTypeName);
}
case clsvCurrEduClsTeacherEN.con_CourseId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.courseId == null) return -1;
if (a.courseId == null) return 1;
return b.courseId.localeCompare(a.courseId);
}
case clsvCurrEduClsTeacherEN.con_CourseCode:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.courseCode == null) return -1;
if (a.courseCode == null) return 1;
return b.courseCode.localeCompare(a.courseCode);
}
case clsvCurrEduClsTeacherEN.con_CourseName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.courseName == null) return -1;
if (a.courseName == null) return 1;
return b.courseName.localeCompare(a.courseName);
}
case clsvCurrEduClsTeacherEN.con_ExampleImgPath:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.exampleImgPath == null) return -1;
if (a.exampleImgPath == null) return 1;
return b.exampleImgPath.localeCompare(a.exampleImgPath);
}
case clsvCurrEduClsTeacherEN.con_TeachingSolutionId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.teachingSolutionId == null) return -1;
if (a.teachingSolutionId == null) return 1;
return b.teachingSolutionId.localeCompare(a.teachingSolutionId);
}
case clsvCurrEduClsTeacherEN.con_TeachingSolutionName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.teachingSolutionName == null) return -1;
if (a.teachingSolutionName == null) return 1;
return b.teachingSolutionName.localeCompare(a.teachingSolutionName);
}
case clsvCurrEduClsTeacherEN.con_IdXzCollege:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idXzCollege == null) return -1;
if (a.idXzCollege == null) return 1;
return b.idXzCollege.localeCompare(a.idXzCollege);
}
case clsvCurrEduClsTeacherEN.con_CollegeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.collegeId == null) return -1;
if (a.collegeId == null) return 1;
return b.collegeId.localeCompare(a.collegeId);
}
case clsvCurrEduClsTeacherEN.con_IdEduWay:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idEduWay == null) return -1;
if (a.idEduWay == null) return 1;
return b.idEduWay.localeCompare(a.idEduWay);
}
case clsvCurrEduClsTeacherEN.con_TotalLessonQty:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.totalLessonQty-a.totalLessonQty;
}
case clsvCurrEduClsTeacherEN.con_MaxStuQty:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.maxStuQty-a.maxStuQty;
}
case clsvCurrEduClsTeacherEN.con_WeekQty:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.weekQty-a.weekQty;
}
case clsvCurrEduClsTeacherEN.con_ScheUnitPW:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.scheUnitPW-a.scheUnitPW;
}
case clsvCurrEduClsTeacherEN.con_WeekStatusId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.weekStatusId == null) return -1;
if (a.weekStatusId == null) return 1;
return b.weekStatusId.localeCompare(a.weekStatusId);
}
case clsvCurrEduClsTeacherEN.con_CustomerWeek:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.customerWeek == null) return -1;
if (a.customerWeek == null) return 1;
return b.customerWeek.localeCompare(a.customerWeek);
}
case clsvCurrEduClsTeacherEN.con_LessonQtyPerWeek:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.lessonQtyPerWeek-a.lessonQtyPerWeek;
}
case clsvCurrEduClsTeacherEN.con_IdUniZone:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idUniZone == null) return -1;
if (a.idUniZone == null) return 1;
return b.idUniZone.localeCompare(a.idUniZone);
}
case clsvCurrEduClsTeacherEN.con_IdGradeBase:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idGradeBase == null) return -1;
if (a.idGradeBase == null) return 1;
return b.idGradeBase.localeCompare(a.idGradeBase);
}
case clsvCurrEduClsTeacherEN.con_GradeBaseId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.gradeBaseId == null) return -1;
if (a.gradeBaseId == null) return 1;
return b.gradeBaseId.localeCompare(a.gradeBaseId);
}
case clsvCurrEduClsTeacherEN.con_GradeBaseName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.gradeBaseName == null) return -1;
if (a.gradeBaseName == null) return 1;
return b.gradeBaseName.localeCompare(a.gradeBaseName);
}
case clsvCurrEduClsTeacherEN.con_IsEffective:
return (b: clsvCurrEduClsTeacherEN) => {
if (b.isEffective == true) return 1;
else return -1
}
case clsvCurrEduClsTeacherEN.con_IdCourseType:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idCourseType == null) return -1;
if (a.idCourseType == null) return 1;
return b.idCourseType.localeCompare(a.idCourseType);
}
case clsvCurrEduClsTeacherEN.con_CourseTypeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.courseTypeId == null) return -1;
if (a.courseTypeId == null) return 1;
return b.courseTypeId.localeCompare(a.courseTypeId);
}
case clsvCurrEduClsTeacherEN.con_CourseTypeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.courseTypeName == null) return -1;
if (a.courseTypeName == null) return 1;
return b.courseTypeName.localeCompare(a.courseTypeName);
}
case clsvCurrEduClsTeacherEN.con_IsDegree:
return (b: clsvCurrEduClsTeacherEN) => {
if (b.isDegree == true) return 1;
else return -1
}
case clsvCurrEduClsTeacherEN.con_IdScoreType:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idScoreType == null) return -1;
if (a.idScoreType == null) return 1;
return b.idScoreType.localeCompare(a.idScoreType);
}
case clsvCurrEduClsTeacherEN.con_IsProportionalCtrl:
return (b: clsvCurrEduClsTeacherEN) => {
if (b.isProportionalCtrl == true) return 1;
else return -1
}
case clsvCurrEduClsTeacherEN.con_IdExamType:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idExamType == null) return -1;
if (a.idExamType == null) return 1;
return b.idExamType.localeCompare(a.idExamType);
}
case clsvCurrEduClsTeacherEN.con_BeginWeek:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.beginWeek-a.beginWeek;
}
case clsvCurrEduClsTeacherEN.con_CurrStuNumValid:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.currStuNumValid-a.currStuNumValid;
}
case clsvCurrEduClsTeacherEN.con_CurrStuNum:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.currStuNum-a.currStuNum;
}
case clsvCurrEduClsTeacherEN.con_IdTeacher:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idTeacher == null) return -1;
if (a.idTeacher == null) return 1;
return b.idTeacher.localeCompare(a.idTeacher);
}
case clsvCurrEduClsTeacherEN.con_TeacherId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.teacherId == null) return -1;
if (a.teacherId == null) return 1;
return b.teacherId.localeCompare(a.teacherId);
}
case clsvCurrEduClsTeacherEN.con_TeacherName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.teacherName == null) return -1;
if (a.teacherName == null) return 1;
return b.teacherName.localeCompare(a.teacherName);
}
case clsvCurrEduClsTeacherEN.con_IdProfGrade:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.idProfGrade == null) return -1;
if (a.idProfGrade == null) return 1;
return b.idProfGrade.localeCompare(a.idProfGrade);
}
case clsvCurrEduClsTeacherEN.con_ProfenssionalGradeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.profenssionalGradeName == null) return -1;
if (a.profenssionalGradeName == null) return 1;
return b.profenssionalGradeName.localeCompare(a.profenssionalGradeName);
}
case clsvCurrEduClsTeacherEN.con_DegreeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.degreeName == null) return -1;
if (a.degreeName == null) return 1;
return b.degreeName.localeCompare(a.degreeName);
}
case clsvCurrEduClsTeacherEN.con_Birthday:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.birthday == null) return -1;
if (a.birthday == null) return 1;
return b.birthday.localeCompare(a.birthday);
}
case clsvCurrEduClsTeacherEN.con_IsGpUser:
return (b: clsvCurrEduClsTeacherEN) => {
if (b.isGpUser == true) return 1;
else return -1
}
case clsvCurrEduClsTeacherEN.con_CollegeName:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.collegeName == null) return -1;
if (a.collegeName == null) return 1;
return b.collegeName.localeCompare(a.collegeName);
}
case clsvCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.idPk2EduClsTeacherType.localeCompare(a.idPk2EduClsTeacherType);
}
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.eduClsTeacherTypeId == null) return -1;
if (a.eduClsTeacherTypeId == null) return 1;
return b.eduClsTeacherTypeId.localeCompare(a.eduClsTeacherTypeId);
}
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeDesc:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.eduClsTeacherTypeDesc == null) return -1;
if (a.eduClsTeacherTypeDesc == null) return 1;
return b.eduClsTeacherTypeDesc.localeCompare(a.eduClsTeacherTypeDesc);
}
case clsvCurrEduClsTeacherEN.con_SchoolTerm:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.schoolTerm == null) return -1;
if (a.schoolTerm == null) return 1;
return b.schoolTerm.localeCompare(a.schoolTerm);
}
case clsvCurrEduClsTeacherEN.con_SchoolYear:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.schoolYear == null) return -1;
if (a.schoolYear == null) return 1;
return b.schoolYear.localeCompare(a.schoolYear);
}
case clsvCurrEduClsTeacherEN.con_OpenBeginDate:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.openBeginDate == null) return -1;
if (a.openBeginDate == null) return 1;
return b.openBeginDate.localeCompare(a.openBeginDate);
}
case clsvCurrEduClsTeacherEN.con_OpenEndDate:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.openEndDate == null) return -1;
if (a.openEndDate == null) return 1;
return b.openEndDate.localeCompare(a.openEndDate);
}
case clsvCurrEduClsTeacherEN.con_OrderNum:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
return b.orderNum-a.orderNum;
}
case clsvCurrEduClsTeacherEN.con_UpdDate:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return b.updDate.localeCompare(a.updDate);
}
case clsvCurrEduClsTeacherEN.con_UpdUser:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.updUser == null) return -1;
if (a.updUser == null) return 1;
return b.updUser.localeCompare(a.updUser);
}
case clsvCurrEduClsTeacherEN.con_Memo:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.memo == null) return -1;
if (a.memo == null) return 1;
return b.memo.localeCompare(a.memo);
}
case clsvCurrEduClsTeacherEN.con_CollegeName4EduCls:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.collegeName4EduCls == null) return -1;
if (a.collegeName4EduCls == null) return 1;
return b.collegeName4EduCls.localeCompare(a.collegeName4EduCls);
}
case clsvCurrEduClsTeacherEN.con_CollegeName4Teacher:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.collegeName4Teacher == null) return -1;
if (a.collegeName4Teacher == null) return 1;
return b.collegeName4Teacher.localeCompare(a.collegeName4Teacher);
}
case clsvCurrEduClsTeacherEN.con_UserTypeId:
return (a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN) => {
if (b.userTypeId == null) return -1;
if (a.userTypeId == null) return 1;
return b.userTypeId.localeCompare(a.userTypeId);
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsTeacher]中不存在!(in ${ vCurrEduClsTeacher_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
 }
}
//该表没有使用Cache,不需要生成[GetNameByIdEduClsTeacherCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
*/
export  async function vCurrEduClsTeacher_FilterFunByKey(strKey:string, value: any)
{
const strThisFuncName = "FilterFunByKey";
let strMsg ="";
switch (strKey)
{
case clsvCurrEduClsTeacherEN.con_IdEduClsTeacher:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idEduClsTeacher === value;
}
case clsvCurrEduClsTeacherEN.con_IdCurrEduCls:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idCurrEduCls === value;
}
case clsvCurrEduClsTeacherEN.con_CurrEduClsId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.currEduClsId === value;
}
case clsvCurrEduClsTeacherEN.con_EduClsName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.eduClsName === value;
}
case clsvCurrEduClsTeacherEN.con_EduClsTypeId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.eduClsTypeId === value;
}
case clsvCurrEduClsTeacherEN.con_EduClsTypeName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.eduClsTypeName === value;
}
case clsvCurrEduClsTeacherEN.con_CourseId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.courseId === value;
}
case clsvCurrEduClsTeacherEN.con_CourseCode:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.courseCode === value;
}
case clsvCurrEduClsTeacherEN.con_CourseName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.courseName === value;
}
case clsvCurrEduClsTeacherEN.con_ExampleImgPath:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.exampleImgPath === value;
}
case clsvCurrEduClsTeacherEN.con_TeachingSolutionId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.teachingSolutionId === value;
}
case clsvCurrEduClsTeacherEN.con_TeachingSolutionName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.teachingSolutionName === value;
}
case clsvCurrEduClsTeacherEN.con_IdXzCollege:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idXzCollege === value;
}
case clsvCurrEduClsTeacherEN.con_CollegeId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.collegeId === value;
}
case clsvCurrEduClsTeacherEN.con_IdEduWay:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idEduWay === value;
}
case clsvCurrEduClsTeacherEN.con_TotalLessonQty:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.totalLessonQty === value;
}
case clsvCurrEduClsTeacherEN.con_MaxStuQty:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.maxStuQty === value;
}
case clsvCurrEduClsTeacherEN.con_WeekQty:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.weekQty === value;
}
case clsvCurrEduClsTeacherEN.con_ScheUnitPW:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.scheUnitPW === value;
}
case clsvCurrEduClsTeacherEN.con_WeekStatusId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.weekStatusId === value;
}
case clsvCurrEduClsTeacherEN.con_CustomerWeek:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.customerWeek === value;
}
case clsvCurrEduClsTeacherEN.con_LessonQtyPerWeek:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.lessonQtyPerWeek === value;
}
case clsvCurrEduClsTeacherEN.con_IdUniZone:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idUniZone === value;
}
case clsvCurrEduClsTeacherEN.con_IdGradeBase:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idGradeBase === value;
}
case clsvCurrEduClsTeacherEN.con_GradeBaseId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.gradeBaseId === value;
}
case clsvCurrEduClsTeacherEN.con_GradeBaseName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.gradeBaseName === value;
}
case clsvCurrEduClsTeacherEN.con_IsEffective:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.isEffective === value;
}
case clsvCurrEduClsTeacherEN.con_IdCourseType:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idCourseType === value;
}
case clsvCurrEduClsTeacherEN.con_CourseTypeId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.courseTypeId === value;
}
case clsvCurrEduClsTeacherEN.con_CourseTypeName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.courseTypeName === value;
}
case clsvCurrEduClsTeacherEN.con_IsDegree:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.isDegree === value;
}
case clsvCurrEduClsTeacherEN.con_IdScoreType:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idScoreType === value;
}
case clsvCurrEduClsTeacherEN.con_IsProportionalCtrl:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.isProportionalCtrl === value;
}
case clsvCurrEduClsTeacherEN.con_IdExamType:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idExamType === value;
}
case clsvCurrEduClsTeacherEN.con_BeginWeek:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.beginWeek === value;
}
case clsvCurrEduClsTeacherEN.con_CurrStuNumValid:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.currStuNumValid === value;
}
case clsvCurrEduClsTeacherEN.con_CurrStuNum:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.currStuNum === value;
}
case clsvCurrEduClsTeacherEN.con_IdTeacher:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idTeacher === value;
}
case clsvCurrEduClsTeacherEN.con_TeacherId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.teacherId === value;
}
case clsvCurrEduClsTeacherEN.con_TeacherName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.teacherName === value;
}
case clsvCurrEduClsTeacherEN.con_IdProfGrade:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idProfGrade === value;
}
case clsvCurrEduClsTeacherEN.con_ProfenssionalGradeName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.profenssionalGradeName === value;
}
case clsvCurrEduClsTeacherEN.con_DegreeName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.degreeName === value;
}
case clsvCurrEduClsTeacherEN.con_Birthday:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.birthday === value;
}
case clsvCurrEduClsTeacherEN.con_IsGpUser:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.isGpUser === value;
}
case clsvCurrEduClsTeacherEN.con_CollegeName:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.collegeName === value;
}
case clsvCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.idPk2EduClsTeacherType === value;
}
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.eduClsTeacherTypeId === value;
}
case clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeDesc:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.eduClsTeacherTypeDesc === value;
}
case clsvCurrEduClsTeacherEN.con_SchoolTerm:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.schoolTerm === value;
}
case clsvCurrEduClsTeacherEN.con_SchoolYear:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.schoolYear === value;
}
case clsvCurrEduClsTeacherEN.con_OpenBeginDate:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.openBeginDate === value;
}
case clsvCurrEduClsTeacherEN.con_OpenEndDate:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.openEndDate === value;
}
case clsvCurrEduClsTeacherEN.con_OrderNum:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.orderNum === value;
}
case clsvCurrEduClsTeacherEN.con_UpdDate:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.updDate === value;
}
case clsvCurrEduClsTeacherEN.con_UpdUser:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.updUser === value;
}
case clsvCurrEduClsTeacherEN.con_Memo:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.memo === value;
}
case clsvCurrEduClsTeacherEN.con_CollegeName4EduCls:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.collegeName4EduCls === value;
}
case clsvCurrEduClsTeacherEN.con_CollegeName4Teacher:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.collegeName4Teacher === value;
}
case clsvCurrEduClsTeacherEN.con_UserTypeId:
return (obj: clsvCurrEduClsTeacherEN) => {
return obj.userTypeId === value;
}
        default:
strMsg = `字段名:[${strKey}]在表对象:[vCurrEduClsTeacher]中不存在!(in ${ vCurrEduClsTeacher_ConstructorName}.${ strThisFuncName})`;
       console.error(strMsg);
     break;
 }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[vCurrEduClsTeacher__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

 /**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export  async function vCurrEduClsTeacher_GetFldValueAsync(strFldName: string, strWhereCond: string): Promise<Array<string>>  
{
const strThisFuncName = "GetFldValueAsync";
const strAction = "GetFldValue";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsTeacher_GetFirstIDAsync(strWhereCond: string): Promise<string>  
{
const strThisFuncName = "GetFirstIDAsync";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsTeacher_GetFirstID(strWhereCond: string) 
{
const strThisFuncName = "GetFirstID";
const strAction = "GetFirstID";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsTeacher_GetFirstObjAsync(strWhereCond: string): Promise<clsvCurrEduClsTeacherEN|null>  
{
const strThisFuncName = "GetFirstObjAsync";
const strAction = "GetFirstObj";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const objvCurrEduClsTeacher = vCurrEduClsTeacher_GetObjFromJsonObj(returnObj);
return objvCurrEduClsTeacher;
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsTeacher_GetObjLstAsync(strWhereCond: string): Promise<Array<clsvCurrEduClsTeacherEN>>  
{
const strThisFuncName = "GetObjLstAsync";
const strAction = "GetObjLst";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
 * @param arrIdEduClsTeacher:关键字列表
 * @returns 对象列表
 **/
export  async function vCurrEduClsTeacher_GetObjLstByIdEduClsTeacherLstAsync(arrIdEduClsTeacher: Array<string>): Promise<Array<clsvCurrEduClsTeacherEN>>  
{
const strThisFuncName = "GetObjLstByIdEduClsTeacherLstAsync";
const strAction = "GetObjLstByIdEduClsTeacherLst";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
};
try
{
const response = await axios.post(strUrl, arrIdEduClsTeacher, config);
const data = response.data;
if (data.errorId == 0)
{
const returnObjLst = data.returnObjLst;
if (returnObjLst == null)
{
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else
{
throw(error.statusText);
}
}
}
//该表没有使用Cache,不需要生成[GetObjLstByIdEduClsTeacherLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

 /**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export  async function vCurrEduClsTeacher_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsvCurrEduClsTeacherEN>>  
{
const strThisFuncName = "GetTopObjLstAsync";
const strAction = "GetTopObjLst";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsTeacher_GetObjLstByRangeAsync(objRangePara: stuRangePara): Promise<Array<clsvCurrEduClsTeacherEN>>  
{
const strThisFuncName = "GetObjLstByRangeAsync";
const strAction = "GetObjLstByRange";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsTeacher_GetObjLstByPagerAsync(objPagerPara: stuPagerPara): Promise<Array<clsvCurrEduClsTeacherEN>>  
{
const strThisFuncName = "GetObjLstByPagerAsync";
if (objPagerPara.pageIndex == 0) return new Array<clsvCurrEduClsTeacherEN>();
const strAction = "GetObjLstByPager";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strNullInfo = Format("获取数据为null, 请注意!(in {0}.{1})", vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strNullInfo);
throw(strNullInfo);
}
//console.log(returnObjLst);
const arrObjLst = vCurrEduClsTeacher_GetObjLstByJSONObjLst(returnObjLst);
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsTeacher_IsExistRecordAsync(strWhereCond: string): Promise<boolean>  
{
const strThisFuncName = "IsExistRecordAsync";
const strAction = "IsExistRecord";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
 * @param lngIdEduClsTeacher:关键字
 * @returns 是否存在?存在返回True
 **/
export  async function vCurrEduClsTeacher_IsExistAsync(lngIdEduClsTeacher: number): Promise<boolean> 
{
const strThisFuncName = "IsExistAsync";
//检测记录是否存在
const strAction = "IsExist";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

const token = Storage.get(ACCESS_TOKEN_KEY);
//console.error('token:', token);
const config = {
headers: {
Authorization: `${ token}`,
},
params: {
lngIdEduClsTeacher
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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  async function vCurrEduClsTeacher_GetRecCountByCondAsync(strWhereCond: string): Promise<number>  
{
const strThisFuncName = "GetRecCountByCondAsync";
const strAction = "GetRecCountByCond";
const strUrl = GetWebApiUrl(vCurrEduClsTeacher_Controller, strAction);

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
const strInfo = Format("网络错误!访问地址:{0}不成功!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
console.error(strInfo);
throw(strInfo);
}
else if (error.statusText == "Not Found")
{
const strInfo = Format("网络错误!访问地址:{0}可能不存在!(in {1}.{2})", strUrl, vCurrEduClsTeacher_ConstructorName, strThisFuncName);
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
export  function vCurrEduClsTeacher_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduClsTeacher_GetJSONStrByObj (pobjvCurrEduClsTeacherEN: clsvCurrEduClsTeacherEN): string
{
let strJson = "";
try
{
strJson = JSON.stringify(pobjvCurrEduClsTeacherEN);
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
export  function vCurrEduClsTeacher_GetObjLstByJSONStr (strJSON: string): Array<clsvCurrEduClsTeacherEN>
{
let arrvCurrEduClsTeacherObjLst = new Array<clsvCurrEduClsTeacherEN>();
if (strJSON === "")
{
return arrvCurrEduClsTeacherObjLst;
}
try
{
arrvCurrEduClsTeacherObjLst = JSON.parse(strJSON);
}
catch(objException)
{
return arrvCurrEduClsTeacherObjLst;
}
return arrvCurrEduClsTeacherObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvCurrEduClsTeacherObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
*/
export  function vCurrEduClsTeacher_GetObjLstByJSONObjLst (arrvCurrEduClsTeacherObjLstS: Array<clsvCurrEduClsTeacherEN>): Array<clsvCurrEduClsTeacherEN>
{
const arrvCurrEduClsTeacherObjLst = new Array<clsvCurrEduClsTeacherEN>();
for (const objInFor of arrvCurrEduClsTeacherObjLstS) {
const obj1 = vCurrEduClsTeacher_GetObjFromJsonObj(objInFor);
if (obj1 == null) continue;
arrvCurrEduClsTeacherObjLst.push(obj1);
}
return arrvCurrEduClsTeacherObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-02-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
*/
export  function vCurrEduClsTeacher_GetObjByJSONStr (strJSON: string): clsvCurrEduClsTeacherEN
{
let pobjvCurrEduClsTeacherEN = new clsvCurrEduClsTeacherEN();
if (strJSON === "")
{
return pobjvCurrEduClsTeacherEN;
}
try
{
pobjvCurrEduClsTeacherEN = JSON.parse(strJSON);
}
catch(objException)
{
return pobjvCurrEduClsTeacherEN;
}
return pobjvCurrEduClsTeacherEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
*/
export  function vCurrEduClsTeacher_GetCombineCondition(objvCurrEduClsTeacherCond: clsvCurrEduClsTeacherEN ):string
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdEduClsTeacher) == true)
{
const strComparisonOpIdEduClsTeacher:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdEduClsTeacher];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsTeacherEN.con_IdEduClsTeacher, objvCurrEduClsTeacherCond.idEduClsTeacher, strComparisonOpIdEduClsTeacher);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdCurrEduCls) == true)
{
const strComparisonOpIdCurrEduCls:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdCurrEduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdCurrEduCls, objvCurrEduClsTeacherCond.idCurrEduCls, strComparisonOpIdCurrEduCls);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CurrEduClsId) == true)
{
const strComparisonOpCurrEduClsId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CurrEduClsId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CurrEduClsId, objvCurrEduClsTeacherCond.currEduClsId, strComparisonOpCurrEduClsId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_EduClsName) == true)
{
const strComparisonOpEduClsName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_EduClsName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_EduClsName, objvCurrEduClsTeacherCond.eduClsName, strComparisonOpEduClsName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_EduClsTypeId) == true)
{
const strComparisonOpEduClsTypeId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_EduClsTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_EduClsTypeId, objvCurrEduClsTeacherCond.eduClsTypeId, strComparisonOpEduClsTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_EduClsTypeName) == true)
{
const strComparisonOpEduClsTypeName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_EduClsTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_EduClsTypeName, objvCurrEduClsTeacherCond.eduClsTypeName, strComparisonOpEduClsTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CourseId) == true)
{
const strComparisonOpCourseId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CourseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CourseId, objvCurrEduClsTeacherCond.courseId, strComparisonOpCourseId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CourseCode) == true)
{
const strComparisonOpCourseCode:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CourseCode];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CourseCode, objvCurrEduClsTeacherCond.courseCode, strComparisonOpCourseCode);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CourseName) == true)
{
const strComparisonOpCourseName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CourseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CourseName, objvCurrEduClsTeacherCond.courseName, strComparisonOpCourseName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_ExampleImgPath) == true)
{
const strComparisonOpExampleImgPath:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_ExampleImgPath];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_ExampleImgPath, objvCurrEduClsTeacherCond.exampleImgPath, strComparisonOpExampleImgPath);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_TeachingSolutionId) == true)
{
const strComparisonOpTeachingSolutionId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_TeachingSolutionId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_TeachingSolutionId, objvCurrEduClsTeacherCond.teachingSolutionId, strComparisonOpTeachingSolutionId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_TeachingSolutionName) == true)
{
const strComparisonOpTeachingSolutionName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_TeachingSolutionName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_TeachingSolutionName, objvCurrEduClsTeacherCond.teachingSolutionName, strComparisonOpTeachingSolutionName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdXzCollege) == true)
{
const strComparisonOpIdXzCollege:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdXzCollege];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdXzCollege, objvCurrEduClsTeacherCond.idXzCollege, strComparisonOpIdXzCollege);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CollegeId) == true)
{
const strComparisonOpCollegeId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CollegeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CollegeId, objvCurrEduClsTeacherCond.collegeId, strComparisonOpCollegeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdEduWay) == true)
{
const strComparisonOpIdEduWay:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdEduWay];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdEduWay, objvCurrEduClsTeacherCond.idEduWay, strComparisonOpIdEduWay);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_TotalLessonQty) == true)
{
const strComparisonOpTotalLessonQty:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_TotalLessonQty];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsTeacherEN.con_TotalLessonQty, objvCurrEduClsTeacherCond.totalLessonQty, strComparisonOpTotalLessonQty);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_MaxStuQty) == true)
{
const strComparisonOpMaxStuQty:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_MaxStuQty];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsTeacherEN.con_MaxStuQty, objvCurrEduClsTeacherCond.maxStuQty, strComparisonOpMaxStuQty);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_WeekQty) == true)
{
const strComparisonOpWeekQty:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_WeekQty];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsTeacherEN.con_WeekQty, objvCurrEduClsTeacherCond.weekQty, strComparisonOpWeekQty);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_WeekStatusId) == true)
{
const strComparisonOpWeekStatusId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_WeekStatusId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_WeekStatusId, objvCurrEduClsTeacherCond.weekStatusId, strComparisonOpWeekStatusId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CustomerWeek) == true)
{
const strComparisonOpCustomerWeek:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CustomerWeek];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CustomerWeek, objvCurrEduClsTeacherCond.customerWeek, strComparisonOpCustomerWeek);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdUniZone) == true)
{
const strComparisonOpIdUniZone:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdUniZone];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdUniZone, objvCurrEduClsTeacherCond.idUniZone, strComparisonOpIdUniZone);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdGradeBase) == true)
{
const strComparisonOpIdGradeBase:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdGradeBase];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdGradeBase, objvCurrEduClsTeacherCond.idGradeBase, strComparisonOpIdGradeBase);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_GradeBaseId) == true)
{
const strComparisonOpGradeBaseId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_GradeBaseId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_GradeBaseId, objvCurrEduClsTeacherCond.gradeBaseId, strComparisonOpGradeBaseId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_GradeBaseName) == true)
{
const strComparisonOpGradeBaseName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_GradeBaseName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_GradeBaseName, objvCurrEduClsTeacherCond.gradeBaseName, strComparisonOpGradeBaseName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IsEffective) == true)
{
if (objvCurrEduClsTeacherCond.isEffective == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsTeacherEN.con_IsEffective);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsTeacherEN.con_IsEffective);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdCourseType) == true)
{
const strComparisonOpIdCourseType:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdCourseType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdCourseType, objvCurrEduClsTeacherCond.idCourseType, strComparisonOpIdCourseType);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CourseTypeId) == true)
{
const strComparisonOpCourseTypeId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CourseTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CourseTypeId, objvCurrEduClsTeacherCond.courseTypeId, strComparisonOpCourseTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CourseTypeName) == true)
{
const strComparisonOpCourseTypeName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CourseTypeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CourseTypeName, objvCurrEduClsTeacherCond.courseTypeName, strComparisonOpCourseTypeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IsDegree) == true)
{
if (objvCurrEduClsTeacherCond.isDegree == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsTeacherEN.con_IsDegree);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsTeacherEN.con_IsDegree);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdScoreType) == true)
{
const strComparisonOpIdScoreType:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdScoreType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdScoreType, objvCurrEduClsTeacherCond.idScoreType, strComparisonOpIdScoreType);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IsProportionalCtrl) == true)
{
if (objvCurrEduClsTeacherCond.isProportionalCtrl == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsTeacherEN.con_IsProportionalCtrl);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsTeacherEN.con_IsProportionalCtrl);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdExamType) == true)
{
const strComparisonOpIdExamType:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdExamType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdExamType, objvCurrEduClsTeacherCond.idExamType, strComparisonOpIdExamType);
}
//数据类型number(smallint)在函数:[AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj]中没有处理!
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CurrStuNumValid) == true)
{
const strComparisonOpCurrStuNumValid:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CurrStuNumValid];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsTeacherEN.con_CurrStuNumValid, objvCurrEduClsTeacherCond.currStuNumValid, strComparisonOpCurrStuNumValid);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CurrStuNum) == true)
{
const strComparisonOpCurrStuNum:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CurrStuNum];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsTeacherEN.con_CurrStuNum, objvCurrEduClsTeacherCond.currStuNum, strComparisonOpCurrStuNum);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdTeacher) == true)
{
const strComparisonOpIdTeacher:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdTeacher];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdTeacher, objvCurrEduClsTeacherCond.idTeacher, strComparisonOpIdTeacher);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_TeacherId) == true)
{
const strComparisonOpTeacherId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_TeacherId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_TeacherId, objvCurrEduClsTeacherCond.teacherId, strComparisonOpTeacherId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_TeacherName) == true)
{
const strComparisonOpTeacherName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_TeacherName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_TeacherName, objvCurrEduClsTeacherCond.teacherName, strComparisonOpTeacherName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdProfGrade) == true)
{
const strComparisonOpIdProfGrade:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdProfGrade];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdProfGrade, objvCurrEduClsTeacherCond.idProfGrade, strComparisonOpIdProfGrade);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_ProfenssionalGradeName) == true)
{
const strComparisonOpProfenssionalGradeName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_ProfenssionalGradeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_ProfenssionalGradeName, objvCurrEduClsTeacherCond.profenssionalGradeName, strComparisonOpProfenssionalGradeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_DegreeName) == true)
{
const strComparisonOpDegreeName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_DegreeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_DegreeName, objvCurrEduClsTeacherCond.degreeName, strComparisonOpDegreeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_Birthday) == true)
{
const strComparisonOpBirthday:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_Birthday];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_Birthday, objvCurrEduClsTeacherCond.birthday, strComparisonOpBirthday);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IsGpUser) == true)
{
if (objvCurrEduClsTeacherCond.isGpUser == true)
{
strWhereCond += Format(" And {0} = '1'", clsvCurrEduClsTeacherEN.con_IsGpUser);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsvCurrEduClsTeacherEN.con_IsGpUser);
}
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CollegeName) == true)
{
const strComparisonOpCollegeName:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CollegeName];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CollegeName, objvCurrEduClsTeacherCond.collegeName, strComparisonOpCollegeName);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType) == true)
{
const strComparisonOpIdPk2EduClsTeacherType:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType, objvCurrEduClsTeacherCond.idPk2EduClsTeacherType, strComparisonOpIdPk2EduClsTeacherType);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeId) == true)
{
const strComparisonOpEduClsTeacherTypeId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeId, objvCurrEduClsTeacherCond.eduClsTeacherTypeId, strComparisonOpEduClsTeacherTypeId);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeDesc) == true)
{
const strComparisonOpEduClsTeacherTypeDesc:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeDesc];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_EduClsTeacherTypeDesc, objvCurrEduClsTeacherCond.eduClsTeacherTypeDesc, strComparisonOpEduClsTeacherTypeDesc);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_SchoolTerm) == true)
{
const strComparisonOpSchoolTerm:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_SchoolTerm];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_SchoolTerm, objvCurrEduClsTeacherCond.schoolTerm, strComparisonOpSchoolTerm);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_SchoolYear) == true)
{
const strComparisonOpSchoolYear:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_SchoolYear];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_SchoolYear, objvCurrEduClsTeacherCond.schoolYear, strComparisonOpSchoolYear);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_OpenBeginDate) == true)
{
const strComparisonOpOpenBeginDate:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_OpenBeginDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_OpenBeginDate, objvCurrEduClsTeacherCond.openBeginDate, strComparisonOpOpenBeginDate);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_OpenEndDate) == true)
{
const strComparisonOpOpenEndDate:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_OpenEndDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_OpenEndDate, objvCurrEduClsTeacherCond.openEndDate, strComparisonOpOpenEndDate);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_OrderNum) == true)
{
const strComparisonOpOrderNum:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_OrderNum];
strWhereCond += Format(" And {0} {2} {1}", clsvCurrEduClsTeacherEN.con_OrderNum, objvCurrEduClsTeacherCond.orderNum, strComparisonOpOrderNum);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_UpdDate) == true)
{
const strComparisonOpUpdDate:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_UpdDate];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_UpdDate, objvCurrEduClsTeacherCond.updDate, strComparisonOpUpdDate);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_UpdUser) == true)
{
const strComparisonOpUpdUser:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_UpdUser];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_UpdUser, objvCurrEduClsTeacherCond.updUser, strComparisonOpUpdUser);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_Memo) == true)
{
const strComparisonOpMemo:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_Memo];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_Memo, objvCurrEduClsTeacherCond.memo, strComparisonOpMemo);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CollegeName4EduCls) == true)
{
const strComparisonOpCollegeName4EduCls:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CollegeName4EduCls];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CollegeName4EduCls, objvCurrEduClsTeacherCond.collegeName4EduCls, strComparisonOpCollegeName4EduCls);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_CollegeName4Teacher) == true)
{
const strComparisonOpCollegeName4Teacher:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_CollegeName4Teacher];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_CollegeName4Teacher, objvCurrEduClsTeacherCond.collegeName4Teacher, strComparisonOpCollegeName4Teacher);
}
if (Object.prototype.hasOwnProperty.call(objvCurrEduClsTeacherCond.dicFldComparisonOp, clsvCurrEduClsTeacherEN.con_UserTypeId) == true)
{
const strComparisonOpUserTypeId:string = objvCurrEduClsTeacherCond.dicFldComparisonOp[clsvCurrEduClsTeacherEN.con_UserTypeId];
strWhereCond += Format(" And {0} {2} '{1}'", clsvCurrEduClsTeacherEN.con_UserTypeId, objvCurrEduClsTeacherCond.userTypeId, strComparisonOpUserTypeId);
}
 return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvCurrEduClsTeacherENS:源对象
 * @param objvCurrEduClsTeacherENT:目标对象
*/
export  function vCurrEduClsTeacher_CopyObjTo(objvCurrEduClsTeacherENS: clsvCurrEduClsTeacherEN , objvCurrEduClsTeacherENT: clsvCurrEduClsTeacherEN ): void 
{
objvCurrEduClsTeacherENT.idEduClsTeacher = objvCurrEduClsTeacherENS.idEduClsTeacher; //教学班老师流水号
objvCurrEduClsTeacherENT.idCurrEduCls = objvCurrEduClsTeacherENS.idCurrEduCls; //教学班流水号
objvCurrEduClsTeacherENT.currEduClsId = objvCurrEduClsTeacherENS.currEduClsId; //教学班Id
objvCurrEduClsTeacherENT.eduClsName = objvCurrEduClsTeacherENS.eduClsName; //教学班名
objvCurrEduClsTeacherENT.eduClsTypeId = objvCurrEduClsTeacherENS.eduClsTypeId; //教学班类型Id
objvCurrEduClsTeacherENT.eduClsTypeName = objvCurrEduClsTeacherENS.eduClsTypeName; //教学班类型名称
objvCurrEduClsTeacherENT.courseId = objvCurrEduClsTeacherENS.courseId; //课程Id
objvCurrEduClsTeacherENT.courseCode = objvCurrEduClsTeacherENS.courseCode; //课程代码
objvCurrEduClsTeacherENT.courseName = objvCurrEduClsTeacherENS.courseName; //课程名称
objvCurrEduClsTeacherENT.exampleImgPath = objvCurrEduClsTeacherENS.exampleImgPath; //示例图路径
objvCurrEduClsTeacherENT.teachingSolutionId = objvCurrEduClsTeacherENS.teachingSolutionId; //教学方案Id
objvCurrEduClsTeacherENT.teachingSolutionName = objvCurrEduClsTeacherENS.teachingSolutionName; //教学方案名称
objvCurrEduClsTeacherENT.idXzCollege = objvCurrEduClsTeacherENS.idXzCollege; //学院流水号
objvCurrEduClsTeacherENT.collegeId = objvCurrEduClsTeacherENS.collegeId; //学院ID
objvCurrEduClsTeacherENT.idEduWay = objvCurrEduClsTeacherENS.idEduWay; //教学方式流水号
objvCurrEduClsTeacherENT.totalLessonQty = objvCurrEduClsTeacherENS.totalLessonQty; //总课时数
objvCurrEduClsTeacherENT.maxStuQty = objvCurrEduClsTeacherENS.maxStuQty; //最大学生数
objvCurrEduClsTeacherENT.weekQty = objvCurrEduClsTeacherENS.weekQty; //总周数
objvCurrEduClsTeacherENT.scheUnitPW = objvCurrEduClsTeacherENS.scheUnitPW; //周排课次数
objvCurrEduClsTeacherENT.weekStatusId = objvCurrEduClsTeacherENS.weekStatusId; //周状态编号(单,双,全周)
objvCurrEduClsTeacherENT.customerWeek = objvCurrEduClsTeacherENS.customerWeek; //自定义上课周
objvCurrEduClsTeacherENT.lessonQtyPerWeek = objvCurrEduClsTeacherENS.lessonQtyPerWeek; //周课时数
objvCurrEduClsTeacherENT.idUniZone = objvCurrEduClsTeacherENS.idUniZone; //校区流水号
objvCurrEduClsTeacherENT.idGradeBase = objvCurrEduClsTeacherENS.idGradeBase; //入学年级流水号
objvCurrEduClsTeacherENT.gradeBaseId = objvCurrEduClsTeacherENS.gradeBaseId; //年级代号
objvCurrEduClsTeacherENT.gradeBaseName = objvCurrEduClsTeacherENS.gradeBaseName; //年级名称
objvCurrEduClsTeacherENT.isEffective = objvCurrEduClsTeacherENS.isEffective; //是否有效
objvCurrEduClsTeacherENT.idCourseType = objvCurrEduClsTeacherENS.idCourseType; //课程类型流水号
objvCurrEduClsTeacherENT.courseTypeId = objvCurrEduClsTeacherENS.courseTypeId; //课程类型ID
objvCurrEduClsTeacherENT.courseTypeName = objvCurrEduClsTeacherENS.courseTypeName; //课程类型名称
objvCurrEduClsTeacherENT.isDegree = objvCurrEduClsTeacherENS.isDegree; //是否学位课
objvCurrEduClsTeacherENT.idScoreType = objvCurrEduClsTeacherENS.idScoreType; //成绩类型流水号
objvCurrEduClsTeacherENT.isProportionalCtrl = objvCurrEduClsTeacherENS.isProportionalCtrl; //是否比例控制
objvCurrEduClsTeacherENT.idExamType = objvCurrEduClsTeacherENS.idExamType; //考试方式流水号
objvCurrEduClsTeacherENT.beginWeek = objvCurrEduClsTeacherENS.beginWeek; //开始周
objvCurrEduClsTeacherENT.currStuNumValid = objvCurrEduClsTeacherENS.currStuNumValid; //CurrStuNum_Valid
objvCurrEduClsTeacherENT.currStuNum = objvCurrEduClsTeacherENS.currStuNum; //当前学生数
objvCurrEduClsTeacherENT.idTeacher = objvCurrEduClsTeacherENS.idTeacher; //教师流水号
objvCurrEduClsTeacherENT.teacherId = objvCurrEduClsTeacherENS.teacherId; //教师工号
objvCurrEduClsTeacherENT.teacherName = objvCurrEduClsTeacherENS.teacherName; //教师姓名
objvCurrEduClsTeacherENT.idProfGrade = objvCurrEduClsTeacherENS.idProfGrade; //专业职称流水号
objvCurrEduClsTeacherENT.profenssionalGradeName = objvCurrEduClsTeacherENS.profenssionalGradeName; //专业职称
objvCurrEduClsTeacherENT.degreeName = objvCurrEduClsTeacherENS.degreeName; //学位名称
objvCurrEduClsTeacherENT.birthday = objvCurrEduClsTeacherENS.birthday; //出生日期
objvCurrEduClsTeacherENT.isGpUser = objvCurrEduClsTeacherENS.isGpUser; //是否Gp用户
objvCurrEduClsTeacherENT.collegeName = objvCurrEduClsTeacherENS.collegeName; //学院名称
objvCurrEduClsTeacherENT.idPk2EduClsTeacherType = objvCurrEduClsTeacherENS.idPk2EduClsTeacherType; //教学班老师角色(主讲,辅导)流水号
objvCurrEduClsTeacherENT.eduClsTeacherTypeId = objvCurrEduClsTeacherENS.eduClsTeacherTypeId; //教学班教学类型ID
objvCurrEduClsTeacherENT.eduClsTeacherTypeDesc = objvCurrEduClsTeacherENS.eduClsTeacherTypeDesc; //教学班教师类型名
objvCurrEduClsTeacherENT.schoolTerm = objvCurrEduClsTeacherENS.schoolTerm; //学期
objvCurrEduClsTeacherENT.schoolYear = objvCurrEduClsTeacherENS.schoolYear; //学年
objvCurrEduClsTeacherENT.openBeginDate = objvCurrEduClsTeacherENS.openBeginDate; //开放开始日期
objvCurrEduClsTeacherENT.openEndDate = objvCurrEduClsTeacherENS.openEndDate; //开放结束日期
objvCurrEduClsTeacherENT.orderNum = objvCurrEduClsTeacherENS.orderNum; //序号
objvCurrEduClsTeacherENT.updDate = objvCurrEduClsTeacherENS.updDate; //修改日期
objvCurrEduClsTeacherENT.updUser = objvCurrEduClsTeacherENS.updUser; //修改人
objvCurrEduClsTeacherENT.memo = objvCurrEduClsTeacherENS.memo; //备注
objvCurrEduClsTeacherENT.collegeName4EduCls = objvCurrEduClsTeacherENS.collegeName4EduCls; //学院名_教学班
objvCurrEduClsTeacherENT.collegeName4Teacher = objvCurrEduClsTeacherENS.collegeName4Teacher; //学院名_教师
objvCurrEduClsTeacherENT.userTypeId = objvCurrEduClsTeacherENS.userTypeId; //用户类型Id
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvCurrEduClsTeacherENS:源对象
 * @param objvCurrEduClsTeacherENT:目标对象
*/
export  function vCurrEduClsTeacher_GetObjFromJsonObj(objvCurrEduClsTeacherENS: clsvCurrEduClsTeacherEN): clsvCurrEduClsTeacherEN 
{
 const objvCurrEduClsTeacherENT: clsvCurrEduClsTeacherEN = new clsvCurrEduClsTeacherEN();
ObjectAssign(objvCurrEduClsTeacherENT, objvCurrEduClsTeacherENS);
 return objvCurrEduClsTeacherENT;
}
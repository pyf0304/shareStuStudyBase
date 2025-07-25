
 /**
 * 类名:clsCurrEduClsTeacherENEx
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:16
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 当前教学班教师(CurrEduClsTeacher)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCurrEduClsTeacherEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN";

export class  clsCurrEduClsTeacherENEx extends clsCurrEduClsTeacherEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsCurrEduClsTeacherENEx.con_CollegeName:
return this.collegeName;
case clsCurrEduClsTeacherENEx.con_TeacherId:
return this.teacherId;
case clsCurrEduClsTeacherENEx.con_CourseId:
return this.courseId;
case clsCurrEduClsTeacherENEx.con_TeacherName:
return this.teacherName;
case clsCurrEduClsTeacherENEx.con_EduClsName:
return this.eduClsName;
case clsCurrEduClsTeacherENEx.con_CourseName:
return this.courseName;
case clsCurrEduClsTeacherENEx.con_RoleNames:
return this.roleNames;
case clsCurrEduClsTeacherENEx.con_CurrEduClsId:
return this.currEduClsId;
case clsCurrEduClsTeacherENEx.con_CourseTypeName:
return this.courseTypeName;
case clsCurrEduClsTeacherENEx.con_IdSchool:
return this.idSchool;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"TeacherId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_TeacherId(): string {return "teacherId";}    //教师工号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"TeacherName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_TeacherName(): string {return "teacherName";}    //教师姓名

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"RoleNames"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_RoleNames(): string {return "roleNames";}    //角色列表

 /**
 * 常量:"CurrEduClsId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CurrEduClsId(): string {return "currEduClsId";}    //教学班Id

 /**
 * 常量:"CourseTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseTypeName(): string {return "courseTypeName";}    //课程类型名称

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

public collegeName = "";    //学院名称
public teacherId = "";    //教师工号
public courseId = "";    //课程Id
public teacherName = "";    //教师姓名
public eduClsName = "";    //教学班名
public courseName = "";    //课程名称
public roleNames = "";    //角色列表
public currEduClsId = "";    //教学班Id
public courseTypeName = "";    //课程类型名称
public idSchool = "";    //学校流水号

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsCurrEduClsTeacherENEx.con_CollegeName:
this.collegeName = strValue;
    this.hmProperty["collegeName"] = true;
break;
case clsCurrEduClsTeacherENEx.con_TeacherId:
this.teacherId = strValue;
    this.hmProperty["teacherId"] = true;
break;
case clsCurrEduClsTeacherENEx.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsCurrEduClsTeacherENEx.con_TeacherName:
this.teacherName = strValue;
    this.hmProperty["teacherName"] = true;
break;
case clsCurrEduClsTeacherENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsCurrEduClsTeacherENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsCurrEduClsTeacherENEx.con_RoleNames:
this.roleNames = strValue;
    this.hmProperty["roleNames"] = true;
break;
case clsCurrEduClsTeacherENEx.con_CurrEduClsId:
this.currEduClsId = strValue;
    this.hmProperty["currEduClsId"] = true;
break;
case clsCurrEduClsTeacherENEx.con_CourseTypeName:
this.courseTypeName = strValue;
    this.hmProperty["courseTypeName"] = true;
break;
case clsCurrEduClsTeacherENEx.con_IdSchool:
this.idSchool = strValue;
    this.hmProperty["idSchool"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsTeacher]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsCurrEduClsTeacherENEx();
const instance = new clsCurrEduClsTeacherENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
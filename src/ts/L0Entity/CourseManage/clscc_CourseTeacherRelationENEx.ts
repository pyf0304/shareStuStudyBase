
 /**
 * 类名:clscc_CourseTeacherRelationENEx
 * 表名:cc_CourseTeacherRelation(01120097)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:29:25
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 课程教师关系(cc_CourseTeacherRelation)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clscc_CourseTeacherRelationEN } from "@/ts/L0Entity/CourseManage/clscc_CourseTeacherRelationEN";

export class  clscc_CourseTeacherRelationENEx extends clscc_CourseTeacherRelationEN
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
case clscc_CourseTeacherRelationENEx.con_CourseName:
return this.courseName;
case clscc_CourseTeacherRelationENEx.con_TeacherName:
return this.teacherName;
case clscc_CourseTeacherRelationENEx.con_TeacherId:
return this.teacherId;
case clscc_CourseTeacherRelationENEx.con_IdSchool:
return this.idSchool;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"TeacherName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_TeacherName(): string {return "teacherName";}    //教师姓名

 /**
 * 常量:"TeacherId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_TeacherId(): string {return "teacherId";}    //教师工号

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

public courseName = "";    //课程名称
public teacherName = "";    //教师姓名
public teacherId = "";    //教师工号
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
case clscc_CourseTeacherRelationENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clscc_CourseTeacherRelationENEx.con_TeacherName:
this.teacherName = strValue;
    this.hmProperty["teacherName"] = true;
break;
case clscc_CourseTeacherRelationENEx.con_TeacherId:
this.teacherId = strValue;
    this.hmProperty["teacherId"] = true;
break;
case clscc_CourseTeacherRelationENEx.con_IdSchool:
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
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseTeacherRelation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clscc_CourseTeacherRelationENEx();
const instance = new clscc_CourseTeacherRelationENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
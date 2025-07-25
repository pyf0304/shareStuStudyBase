
 /**
 * 类名:clsCurrEduClsStuENEx
 * 表名:CurrEduClsStu(01120125)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:20
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
 * 教学班与学生关系(CurrEduClsStu)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsCurrEduClsStuEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN";

export class  clsCurrEduClsStuENEx extends clsCurrEduClsStuEN
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
case clsCurrEduClsStuENEx.con_StuName:
return this.stuName;
case clsCurrEduClsStuENEx.con_EduClsName:
return this.eduClsName;
case clsCurrEduClsStuENEx.con_CourseTypeName:
return this.courseTypeName;
case clsCurrEduClsStuENEx.con_CourseName:
return this.courseName;
case clsCurrEduClsStuENEx.con_CourseCode:
return this.courseCode;
case clsCurrEduClsStuENEx.con_MajorName:
return this.majorName;
case clsCurrEduClsStuENEx.con_StuId:
return this.stuId;
case clsCurrEduClsStuENEx.con_GradeName:
return this.gradeName;
case clsCurrEduClsStuENEx.con_RoleNames:
return this.roleNames;
case clsCurrEduClsStuENEx.con_AdminClsName:
return this.adminClsName;
case clsCurrEduClsStuENEx.con_CourseId:
return this.courseId;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"StuName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"CourseTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseTypeName(): string {return "courseTypeName";}    //课程类型名称

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"CourseCode"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseCode(): string {return "courseCode";}    //课程代码

 /**
 * 常量:"MajorName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"StuId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_StuId(): string {return "stuId";}    //学号

 /**
 * 常量:"GradeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_GradeName(): string {return "gradeName";}    //年级名称

 /**
 * 常量:"RoleNames"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_RoleNames(): string {return "roleNames";}    //角色列表

 /**
 * 常量:"AdminClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_AdminClsName(): string {return "adminClsName";}    //行政班名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

public stuName = "";    //姓名
public eduClsName = "";    //教学班名
public courseTypeName = "";    //课程类型名称
public courseName = "";    //课程名称
public courseCode = "";    //课程代码
public majorName = "";    //专业名称
public stuId = "";    //学号
public gradeName = "";    //年级名称
public roleNames = "";    //角色列表
public adminClsName = "";    //行政班名称
public courseId = "";    //课程Id

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
case clsCurrEduClsStuENEx.con_StuName:
this.stuName = strValue;
    this.hmProperty["stuName"] = true;
break;
case clsCurrEduClsStuENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsCurrEduClsStuENEx.con_CourseTypeName:
this.courseTypeName = strValue;
    this.hmProperty["courseTypeName"] = true;
break;
case clsCurrEduClsStuENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsCurrEduClsStuENEx.con_CourseCode:
this.courseCode = strValue;
    this.hmProperty["courseCode"] = true;
break;
case clsCurrEduClsStuENEx.con_MajorName:
this.majorName = strValue;
    this.hmProperty["majorName"] = true;
break;
case clsCurrEduClsStuENEx.con_StuId:
this.stuId = strValue;
    this.hmProperty["stuId"] = true;
break;
case clsCurrEduClsStuENEx.con_GradeName:
this.gradeName = strValue;
    this.hmProperty["gradeName"] = true;
break;
case clsCurrEduClsStuENEx.con_RoleNames:
this.roleNames = strValue;
    this.hmProperty["roleNames"] = true;
break;
case clsCurrEduClsStuENEx.con_AdminClsName:
this.adminClsName = strValue;
    this.hmProperty["adminClsName"] = true;
break;
case clsCurrEduClsStuENEx.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsStu]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsCurrEduClsStuENEx();
const instance = new clsCurrEduClsStuENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
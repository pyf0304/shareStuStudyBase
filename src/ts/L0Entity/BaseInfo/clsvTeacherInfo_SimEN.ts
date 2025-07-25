
 /**
 * 类名:clsvTeacherInfo_SimEN
 * 表名:vTeacherInfo_Sim(01120976)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:36:06
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v教师_Sim(vTeacherInfo_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvTeacherInfo_SimEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vTeacherInfo_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeacher"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["idTeacher", "teacherId", "teacherName", "idXzCollege", "idSchool", "teachIdCollege", "teachIdMajor"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsvTeacherInfo_SimEN.con_IdTeacher:
return this.idTeacher;
case clsvTeacherInfo_SimEN.con_TeacherId:
return this.teacherId;
case clsvTeacherInfo_SimEN.con_TeacherName:
return this.teacherName;
case clsvTeacherInfo_SimEN.con_IdXzCollege:
return this.idXzCollege;
case clsvTeacherInfo_SimEN.con_IdSchool:
return this.idSchool;
case clsvTeacherInfo_SimEN.con_TeachIdCollege:
return this.teachIdCollege;
case clsvTeacherInfo_SimEN.con_TeachIdMajor:
return this.teachIdMajor;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vTeacherInfo_Sim]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
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
case clsvTeacherInfo_SimEN.con_IdTeacher:
this.idTeacher = strValue;
break;
case clsvTeacherInfo_SimEN.con_TeacherId:
this.teacherId = strValue;
break;
case clsvTeacherInfo_SimEN.con_TeacherName:
this.teacherName = strValue;
break;
case clsvTeacherInfo_SimEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvTeacherInfo_SimEN.con_IdSchool:
this.idSchool = strValue;
break;
case clsvTeacherInfo_SimEN.con_TeachIdCollege:
this.teachIdCollege = strValue;
break;
case clsvTeacherInfo_SimEN.con_TeachIdMajor:
this.teachIdMajor = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vTeacherInfo_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idTeacher = "";    //教师流水号
public teacherId = "";    //教师工号
public teacherName = "";    //教师姓名
public idXzCollege = "";    //学院流水号
public idSchool = "";    //学校流水号
public teachIdCollege = "";    //Teach_id_College
public teachIdMajor = "";    //Teach_id_Major


 /**
 * 常量:"IdTeacher"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeacher(): string {return "idTeacher";}    //教师流水号

 /**
 * 常量:"TeacherId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeacherId(): string {return "teacherId";}    //教师工号

 /**
 * 常量:"TeacherName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeacherName(): string {return "teacherName";}    //教师姓名

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"TeachIdCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachIdCollege(): string {return "teachIdCollege";}    //Teach_id_College

 /**
 * 常量:"TeachIdMajor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_TeachIdMajor(): string {return "teachIdMajor";}    //Teach_id_Major

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsvTeacherInfo_SimEN();
const instance = new clsvTeacherInfo_SimEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}

 /**
 * 类名:clsvTeacherInfo_Sim
 * 表名:vTeacherInfo_Sim(01120976)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:36:10
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v教师_Sim(vTeacherInfo_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvTeacherInfo_Sim 
{
public static _CurrTabName= "vTeacherInfo_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeacher"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["idTeacher", "teacherId", "teacherName", "idXzCollege", "idSchool", "teachIdCollege", "teachIdMajor"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idTeacher = "";    //教师流水号
public teacherId = "";    //教师工号
public teacherName = "";    //教师姓名
public idXzCollege = "";    //学院流水号
public idSchool = "";    //学校流水号
public teachIdCollege = "";    //Teach_id_College
public teachIdMajor = "";    //Teach_id_Major

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsvTeacherInfo_Sim.con_IdTeacher:
return this.idTeacher;
case clsvTeacherInfo_Sim.con_TeacherId:
return this.teacherId;
case clsvTeacherInfo_Sim.con_TeacherName:
return this.teacherName;
case clsvTeacherInfo_Sim.con_IdXzCollege:
return this.idXzCollege;
case clsvTeacherInfo_Sim.con_IdSchool:
return this.idSchool;
case clsvTeacherInfo_Sim.con_TeachIdCollege:
return this.teachIdCollege;
case clsvTeacherInfo_Sim.con_TeachIdMajor:
return this.teachIdMajor;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vTeacherInfo_Sim]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeacher(): string {return "idTeacher";}    //教师流水号

 /**
 * 常量:"TeacherId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeacherId(): string {return "teacherId";}    //教师工号

 /**
 * 常量:"TeacherName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeacherName(): string {return "teacherName";}    //教师姓名

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"TeachIdCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachIdCollege(): string {return "teachIdCollege";}    //Teach_id_College

 /**
 * 常量:"TeachIdMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachIdMajor(): string {return "teachIdMajor";}    //Teach_id_Major
}
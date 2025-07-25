
 /**
 * 类名:clsSchoolCalendar
 * 表名:SchoolCalendar(01120987)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:23
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 校历(SchoolCalendar)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSchoolCalendar 
{
public static _CurrTabName= "SchoolCalendar"; //当前表名,与该类相关的表名
public static _KeyFldName= "Id_SchoolCelendar"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["id_SchoolCelendar", "currDate", "schoolYear", "schoolTerm", "weekIndex", "weekDay", "weekDayDesc", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public id_SchoolCelendar = 0;    //校历流水号
public currDate = "";    //当前日期
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public weekIndex = 0;    //周序号
public weekDay = 0;    //星期
public weekDayDesc = "";    //星期描述
public memo = "";    //备注

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
case clsSchoolCalendar.con_Id_SchoolCelendar:
return this.id_SchoolCelendar;
case clsSchoolCalendar.con_CurrDate:
return this.currDate;
case clsSchoolCalendar.con_SchoolYear:
return this.schoolYear;
case clsSchoolCalendar.con_SchoolTerm:
return this.schoolTerm;
case clsSchoolCalendar.con_WeekIndex:
return this.weekIndex;
case clsSchoolCalendar.con_WeekDay:
return this.weekDay;
case clsSchoolCalendar.con_WeekDayDesc:
return this.weekDayDesc;
case clsSchoolCalendar.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SchoolCalendar]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"Id_SchoolCelendar"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Id_SchoolCelendar(): string {return "id_SchoolCelendar";}    //校历流水号

 /**
 * 常量:"CurrDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrDate(): string {return "currDate";}    //当前日期

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"WeekIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekIndex(): string {return "weekIndex";}    //周序号

 /**
 * 常量:"WeekDay"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekDay(): string {return "weekDay";}    //星期

 /**
 * 常量:"WeekDayDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekDayDesc(): string {return "weekDayDesc";}    //星期描述

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
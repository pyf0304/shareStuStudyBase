
 /**
 * 类名:clsSchoolCalendarEN
 * 表名:SchoolCalendar(01120987)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:22
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 校历(SchoolCalendar)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsSchoolCalendarEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "SchoolCalendar"; //当前表名,与该类相关的表名
public static _KeyFldName= "Id_SchoolCelendar"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["id_SchoolCelendar", "currDate", "schoolYear", "schoolTerm", "weekIndex", "weekDay", "weekDayDesc", "memo"];
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
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mlngId_SchoolCelendar = 0;    //校历流水号
private mstrCurrDate = "";    //当前日期
private mstrSchoolYear = "";    //学年
private mstrSchoolTerm = "";    //学期
private mintWeekIndex = 0;    //周序号
private mintWeekDay = 0;    //星期
private mstrWeekDayDesc = "";    //星期描述
private mstrMemo = "";    //备注

/**
 * 校历流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetId_SchoolCelendar (value: number)
{
if (value  != undefined)
{
 this.id_SchoolCelendar = value;
    this.hmProperty["id_SchoolCelendar"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 当前日期(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCurrDate (value: string)
{
if (value  != undefined)
{
 this.currDate = value;
    this.hmProperty["currDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学年(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolYear (value: string)
{
if (value  != undefined)
{
 this.schoolYear = value;
    this.hmProperty["schoolYear"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学期(说明:;字段类型:char;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSchoolTerm (value: string)
{
if (value  != undefined)
{
 this.schoolTerm = value;
    this.hmProperty["schoolTerm"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 周序号(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeekIndex (value: number)
{
if (value  != undefined)
{
 this.weekIndex = value;
    this.hmProperty["weekIndex"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 星期(说明:;字段类型:int;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeekDay (value: number)
{
if (value  != undefined)
{
 this.weekDay = value;
    this.hmProperty["weekDay"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 星期描述(说明:;字段类型:varchar;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWeekDayDesc (value: string)
{
if (value  != undefined)
{
 this.weekDayDesc = value;
    this.hmProperty["weekDayDesc"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
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
case clsSchoolCalendarEN.con_Id_SchoolCelendar:
return this.id_SchoolCelendar;
case clsSchoolCalendarEN.con_CurrDate:
return this.currDate;
case clsSchoolCalendarEN.con_SchoolYear:
return this.schoolYear;
case clsSchoolCalendarEN.con_SchoolTerm:
return this.schoolTerm;
case clsSchoolCalendarEN.con_WeekIndex:
return this.weekIndex;
case clsSchoolCalendarEN.con_WeekDay:
return this.weekDay;
case clsSchoolCalendarEN.con_WeekDayDesc:
return this.weekDayDesc;
case clsSchoolCalendarEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SchoolCalendar]中不存在!`;
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
case clsSchoolCalendarEN.con_Id_SchoolCelendar:
this.id_SchoolCelendar = Number(strValue);
    this.hmProperty["id_SchoolCelendar"] = true;
break;
case clsSchoolCalendarEN.con_CurrDate:
this.currDate = strValue;
    this.hmProperty["currDate"] = true;
break;
case clsSchoolCalendarEN.con_SchoolYear:
this.schoolYear = strValue;
    this.hmProperty["schoolYear"] = true;
break;
case clsSchoolCalendarEN.con_SchoolTerm:
this.schoolTerm = strValue;
    this.hmProperty["schoolTerm"] = true;
break;
case clsSchoolCalendarEN.con_WeekIndex:
this.weekIndex = Number(strValue);
    this.hmProperty["weekIndex"] = true;
break;
case clsSchoolCalendarEN.con_WeekDay:
this.weekDay = Number(strValue);
    this.hmProperty["weekDay"] = true;
break;
case clsSchoolCalendarEN.con_WeekDayDesc:
this.weekDayDesc = strValue;
    this.hmProperty["weekDayDesc"] = true;
break;
case clsSchoolCalendarEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SchoolCalendar]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"Id_SchoolCelendar"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Id_SchoolCelendar(): string {return "id_SchoolCelendar";}    //校历流水号

 /**
 * 常量:"CurrDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CurrDate(): string {return "currDate";}    //当前日期

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"WeekIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WeekIndex(): string {return "weekIndex";}    //周序号

 /**
 * 常量:"WeekDay"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WeekDay(): string {return "weekDay";}    //星期

 /**
 * 常量:"WeekDayDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WeekDayDesc(): string {return "weekDayDesc";}    //星期描述

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
//return propName in new clsSchoolCalendarEN();
const instance = new clsSchoolCalendarEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
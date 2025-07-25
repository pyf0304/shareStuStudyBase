
 /**
 * 类名:clscc_CourseStudentRelationEN
 * 表名:cc_CourseStudentRelation(01120150)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:26
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 用户答题结果(cc_CourseStudentRelation)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clscc_CourseStudentRelationEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "cc_CourseStudentRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseStudentRelationId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["courseStudentRelationId", "courseId", "idStudentInfo", "lastVisitedDate", "updDate", "updUserId", "memo"];
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
private mlngCourseStudentRelationId = 0;    //课程学生关系表流水号
private mstrCourseId = "";    //课程Id
private mstrIdStudentInfo = "";    //学生流水号
private mstrLastVisitedDate = "";    //最后访问时间
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 课程学生关系表流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseStudentRelationId (value: number)
{
if (value  != undefined)
{
 this.courseStudentRelationId = value;
    this.hmProperty["courseStudentRelationId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学生流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStudentInfo (value: string)
{
if (value  != undefined)
{
 this.idStudentInfo = value;
    this.hmProperty["idStudentInfo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 最后访问时间(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLastVisitedDate (value: string)
{
if (value  != undefined)
{
 this.lastVisitedDate = value;
    this.hmProperty["lastVisitedDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
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
case clscc_CourseStudentRelationEN.con_CourseStudentRelationId:
return this.courseStudentRelationId;
case clscc_CourseStudentRelationEN.con_CourseId:
return this.courseId;
case clscc_CourseStudentRelationEN.con_IdStudentInfo:
return this.idStudentInfo;
case clscc_CourseStudentRelationEN.con_LastVisitedDate:
return this.lastVisitedDate;
case clscc_CourseStudentRelationEN.con_UpdDate:
return this.updDate;
case clscc_CourseStudentRelationEN.con_UpdUserId:
return this.updUserId;
case clscc_CourseStudentRelationEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseStudentRelation]中不存在!`;
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
case clscc_CourseStudentRelationEN.con_CourseStudentRelationId:
this.courseStudentRelationId = Number(strValue);
    this.hmProperty["courseStudentRelationId"] = true;
break;
case clscc_CourseStudentRelationEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clscc_CourseStudentRelationEN.con_IdStudentInfo:
this.idStudentInfo = strValue;
    this.hmProperty["idStudentInfo"] = true;
break;
case clscc_CourseStudentRelationEN.con_LastVisitedDate:
this.lastVisitedDate = strValue;
    this.hmProperty["lastVisitedDate"] = true;
break;
case clscc_CourseStudentRelationEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clscc_CourseStudentRelationEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clscc_CourseStudentRelationEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseStudentRelation]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public courseStudentRelationId = 0;    //课程学生关系表流水号
public courseId = "";    //课程Id
public idStudentInfo = "";    //学生流水号
public lastVisitedDate = "";    //最后访问时间
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注


 /**
 * 常量:"CourseStudentRelationId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseStudentRelationId(): string {return "courseStudentRelationId";}    //课程学生关系表流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"LastVisitedDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LastVisitedDate(): string {return "lastVisitedDate";}    //最后访问时间

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

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
//return propName in new clscc_CourseStudentRelationEN();
const instance = new clscc_CourseStudentRelationEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
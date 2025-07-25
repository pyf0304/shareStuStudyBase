
 /**
 * 类名:clsKcCrsTypeEN
 * 表名:KcCrsType(01120136)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 20:44:35
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
 * 课程类型(KcCrsType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsKcCrsTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "KcCrsType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCourseType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["idCourseType", "courseTypeId", "courseTypeName", "isMinor", "reqOrElect", "pointEnabled", "idCrsTypeAdminType", "isCrtlScorePropor", "isCrtlEduclsMember", "isElectiveType", "isOccupyResources", "isDistinguishDegree", "modifyUserId", "modifyDate"];
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
private mstrIdCourseType = "";    //课程类型流水号
private mstrCourseTypeId = "";    //课程类型ID
private mstrCourseTypeName = "";    //课程类型名称
private mbolIsMinor = false;    //是否副修
private mbolReqOrElect = false;    //是否必修
private mbolPointEnabled = false;    //是否计学分
private mstrIdCrsTypeAdminType = "";    //课程类型管理类型流水号
private mbolIsCrtlScorePropor = false;    //是否控制成绩比例
private mbolIsCrtlEduclsMember = false;    //是否控制教学班人数
private mbolIsElectiveType = false;    //是否可选类型
private mbolIsOccupyResources = false;    //是否占用资源
private mbolIsDistinguishDegree = false;    //是否区分学位
private mstrModifyUserId = "";    //修改人
private mstrModifyDate = "";    //修改日期

/**
 * 课程类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCourseType (value: string)
{
if (value  != undefined)
{
 this.idCourseType = value;
    this.hmProperty["idCourseType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程类型ID(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseTypeId (value: string)
{
if (value  != undefined)
{
 this.courseTypeId = value;
    this.hmProperty["courseTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程类型名称(说明:;字段类型:varchar;字段长度:30;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseTypeName (value: string)
{
if (value  != undefined)
{
 this.courseTypeName = value;
    this.hmProperty["courseTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否副修(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsMinor (value: boolean)
{
if (value  != undefined)
{
 this.isMinor = value;
    this.hmProperty["isMinor"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否必修(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetReqOrElect (value: boolean)
{
if (value  != undefined)
{
 this.reqOrElect = value;
    this.hmProperty["reqOrElect"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否计学分(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetPointEnabled (value: boolean)
{
if (value  != undefined)
{
 this.pointEnabled = value;
    this.hmProperty["pointEnabled"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程类型管理类型流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCrsTypeAdminType (value: string)
{
if (value  != undefined)
{
 this.idCrsTypeAdminType = value;
    this.hmProperty["idCrsTypeAdminType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否控制成绩比例(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCrtlScorePropor (value: boolean)
{
if (value  != undefined)
{
 this.isCrtlScorePropor = value;
    this.hmProperty["isCrtlScorePropor"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否控制教学班人数(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCrtlEduclsMember (value: boolean)
{
if (value  != undefined)
{
 this.isCrtlEduclsMember = value;
    this.hmProperty["isCrtlEduclsMember"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否可选类型(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsElectiveType (value: boolean)
{
if (value  != undefined)
{
 this.isElectiveType = value;
    this.hmProperty["isElectiveType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否占用资源(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsOccupyResources (value: boolean)
{
if (value  != undefined)
{
 this.isOccupyResources = value;
    this.hmProperty["isOccupyResources"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否区分学位(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDistinguishDegree (value: boolean)
{
if (value  != undefined)
{
 this.isDistinguishDegree = value;
    this.hmProperty["isDistinguishDegree"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModifyUserId (value: string)
{
if (value  != undefined)
{
 this.modifyUserId = value;
    this.hmProperty["modifyUserId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModifyDate (value: string)
{
if (value  != undefined)
{
 this.modifyDate = value;
    this.hmProperty["modifyDate"] = true;
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
case clsKcCrsTypeEN.con_IdCourseType:
return this.idCourseType;
case clsKcCrsTypeEN.con_CourseTypeId:
return this.courseTypeId;
case clsKcCrsTypeEN.con_CourseTypeName:
return this.courseTypeName;
case clsKcCrsTypeEN.con_IsMinor:
return this.isMinor;
case clsKcCrsTypeEN.con_ReqOrElect:
return this.reqOrElect;
case clsKcCrsTypeEN.con_PointEnabled:
return this.pointEnabled;
case clsKcCrsTypeEN.con_IdCrsTypeAdminType:
return this.idCrsTypeAdminType;
case clsKcCrsTypeEN.con_IsCrtlScorePropor:
return this.isCrtlScorePropor;
case clsKcCrsTypeEN.con_IsCrtlEduclsMember:
return this.isCrtlEduclsMember;
case clsKcCrsTypeEN.con_IsElectiveType:
return this.isElectiveType;
case clsKcCrsTypeEN.con_IsOccupyResources:
return this.isOccupyResources;
case clsKcCrsTypeEN.con_IsDistinguishDegree:
return this.isDistinguishDegree;
case clsKcCrsTypeEN.con_ModifyUserId:
return this.modifyUserId;
case clsKcCrsTypeEN.con_ModifyDate:
return this.modifyDate;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KcCrsType]中不存在!`;
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
case clsKcCrsTypeEN.con_IdCourseType:
this.idCourseType = strValue;
    this.hmProperty["idCourseType"] = true;
break;
case clsKcCrsTypeEN.con_CourseTypeId:
this.courseTypeId = strValue;
    this.hmProperty["courseTypeId"] = true;
break;
case clsKcCrsTypeEN.con_CourseTypeName:
this.courseTypeName = strValue;
    this.hmProperty["courseTypeName"] = true;
break;
case clsKcCrsTypeEN.con_IsMinor:
this.isMinor = Boolean(strValue);
    this.hmProperty["isMinor"] = true;
break;
case clsKcCrsTypeEN.con_ReqOrElect:
this.reqOrElect = Boolean(strValue);
    this.hmProperty["reqOrElect"] = true;
break;
case clsKcCrsTypeEN.con_PointEnabled:
this.pointEnabled = Boolean(strValue);
    this.hmProperty["pointEnabled"] = true;
break;
case clsKcCrsTypeEN.con_IdCrsTypeAdminType:
this.idCrsTypeAdminType = strValue;
    this.hmProperty["idCrsTypeAdminType"] = true;
break;
case clsKcCrsTypeEN.con_IsCrtlScorePropor:
this.isCrtlScorePropor = Boolean(strValue);
    this.hmProperty["isCrtlScorePropor"] = true;
break;
case clsKcCrsTypeEN.con_IsCrtlEduclsMember:
this.isCrtlEduclsMember = Boolean(strValue);
    this.hmProperty["isCrtlEduclsMember"] = true;
break;
case clsKcCrsTypeEN.con_IsElectiveType:
this.isElectiveType = Boolean(strValue);
    this.hmProperty["isElectiveType"] = true;
break;
case clsKcCrsTypeEN.con_IsOccupyResources:
this.isOccupyResources = Boolean(strValue);
    this.hmProperty["isOccupyResources"] = true;
break;
case clsKcCrsTypeEN.con_IsDistinguishDegree:
this.isDistinguishDegree = Boolean(strValue);
    this.hmProperty["isDistinguishDegree"] = true;
break;
case clsKcCrsTypeEN.con_ModifyUserId:
this.modifyUserId = strValue;
    this.hmProperty["modifyUserId"] = true;
break;
case clsKcCrsTypeEN.con_ModifyDate:
this.modifyDate = strValue;
    this.hmProperty["modifyDate"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KcCrsType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idCourseType = "";    //课程类型流水号
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public isMinor = false;    //是否副修
public reqOrElect = false;    //是否必修
public pointEnabled = false;    //是否计学分
public idCrsTypeAdminType = "";    //课程类型管理类型流水号
public isCrtlScorePropor = false;    //是否控制成绩比例
public isCrtlEduclsMember = false;    //是否控制教学班人数
public isElectiveType = false;    //是否可选类型
public isOccupyResources = false;    //是否占用资源
public isDistinguishDegree = false;    //是否区分学位
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期


 /**
 * 常量:"IdCourseType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCourseType(): string {return "idCourseType";}    //课程类型流水号

 /**
 * 常量:"CourseTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseTypeId(): string {return "courseTypeId";}    //课程类型ID

 /**
 * 常量:"CourseTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseTypeName(): string {return "courseTypeName";}    //课程类型名称

 /**
 * 常量:"IsMinor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMinor(): string {return "isMinor";}    //是否副修

 /**
 * 常量:"ReqOrElect"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ReqOrElect(): string {return "reqOrElect";}    //是否必修

 /**
 * 常量:"PointEnabled"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PointEnabled(): string {return "pointEnabled";}    //是否计学分

 /**
 * 常量:"IdCrsTypeAdminType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCrsTypeAdminType(): string {return "idCrsTypeAdminType";}    //课程类型管理类型流水号

 /**
 * 常量:"IsCrtlScorePropor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsCrtlScorePropor(): string {return "isCrtlScorePropor";}    //是否控制成绩比例

 /**
 * 常量:"IsCrtlEduclsMember"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsCrtlEduclsMember(): string {return "isCrtlEduclsMember";}    //是否控制教学班人数

 /**
 * 常量:"IsElectiveType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsElectiveType(): string {return "isElectiveType";}    //是否可选类型

 /**
 * 常量:"IsOccupyResources"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsOccupyResources(): string {return "isOccupyResources";}    //是否占用资源

 /**
 * 常量:"IsDistinguishDegree"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDistinguishDegree(): string {return "isDistinguishDegree";}    //是否区分学位

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

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
//return propName in new clsKcCrsTypeEN();
const instance = new clsKcCrsTypeEN();
return instance.hasOwnProperty(propName);
}
}
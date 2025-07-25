
 /**
 * 类名:clsXzMajorTypeEN
 * 表名:XzMajorType(01120068)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:36:16
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 专业类型(XzMajorType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsXzMajorTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "XzMajorType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdMajorType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["idMajorType", "majorTypeID", "majorTypeName", "modifyUserId", "modifyDate", "memo"];
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
private mstrIdMajorType = "";    //专业类型(文理工)流水号
private mstrMajorTypeID = "";    //专业类型代号
private mstrMajorTypeName = "";    //专业类型名称
private mstrModifyUserId = "";    //修改人
private mstrModifyDate = "";    //修改日期
private mstrMemo = "";    //备注

/**
 * 专业类型(文理工)流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdMajorType (value: string)
{
if (value  != undefined)
{
 this.idMajorType = value;
    this.hmProperty["idMajorType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 专业类型代号(说明:;字段类型:varchar;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMajorTypeID (value: string)
{
if (value  != undefined)
{
 this.majorTypeID = value;
    this.hmProperty["majorTypeID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 专业类型名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMajorTypeName (value: string)
{
if (value  != undefined)
{
 this.majorTypeName = value;
    this.hmProperty["majorTypeName"] = true;
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
case clsXzMajorTypeEN.con_IdMajorType:
return this.idMajorType;
case clsXzMajorTypeEN.con_MajorTypeID:
return this.majorTypeID;
case clsXzMajorTypeEN.con_MajorTypeName:
return this.majorTypeName;
case clsXzMajorTypeEN.con_ModifyUserId:
return this.modifyUserId;
case clsXzMajorTypeEN.con_ModifyDate:
return this.modifyDate;
case clsXzMajorTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzMajorType]中不存在!`;
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
case clsXzMajorTypeEN.con_IdMajorType:
this.idMajorType = strValue;
    this.hmProperty["idMajorType"] = true;
break;
case clsXzMajorTypeEN.con_MajorTypeID:
this.majorTypeID = strValue;
    this.hmProperty["majorTypeID"] = true;
break;
case clsXzMajorTypeEN.con_MajorTypeName:
this.majorTypeName = strValue;
    this.hmProperty["majorTypeName"] = true;
break;
case clsXzMajorTypeEN.con_ModifyUserId:
this.modifyUserId = strValue;
    this.hmProperty["modifyUserId"] = true;
break;
case clsXzMajorTypeEN.con_ModifyDate:
this.modifyDate = strValue;
    this.hmProperty["modifyDate"] = true;
break;
case clsXzMajorTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[XzMajorType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idMajorType = "";    //专业类型(文理工)流水号
public majorTypeID = "";    //专业类型代号
public majorTypeName = "";    //专业类型名称
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期
public memo = "";    //备注


 /**
 * 常量:"IdMajorType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdMajorType(): string {return "idMajorType";}    //专业类型(文理工)流水号

 /**
 * 常量:"MajorTypeID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MajorTypeID(): string {return "majorTypeID";}    //专业类型代号

 /**
 * 常量:"MajorTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MajorTypeName(): string {return "majorTypeName";}    //专业类型名称

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
//return propName in new clsXzMajorTypeEN();
const instance = new clsXzMajorTypeEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
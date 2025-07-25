﻿
 /**
 * 类名:clsUserTypeEN
 * 表名:UserType(01120309)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:40
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 用户类型(UserType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsUserTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "UserType"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["userTypeId", "userTypeName", "userTypeNameSim", "userTypeENName", "memo"];
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
private mstrUserTypeId = "";    //用户类型Id
private mstrUserTypeName = "";    //用户类型名称
private mstrUserTypeNameSim = "";    //用户类型名_Sim
private mstrUserTypeENName = "";    //UserTypeENName
private mstrMemo = "";    //备注

/**
 * 用户类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserTypeId (value: string)
{
if (value  != undefined)
{
 this.userTypeId = value;
    this.hmProperty["userTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户类型名称(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserTypeName (value: string)
{
if (value  != undefined)
{
 this.userTypeName = value;
    this.hmProperty["userTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户类型名_Sim(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserTypeNameSim (value: string)
{
if (value  != undefined)
{
 this.userTypeNameSim = value;
    this.hmProperty["userTypeNameSim"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * UserTypeENName(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserTypeENName (value: string)
{
if (value  != undefined)
{
 this.userTypeENName = value;
    this.hmProperty["userTypeENName"] = true;
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
case clsUserTypeEN.con_UserTypeId:
return this.userTypeId;
case clsUserTypeEN.con_UserTypeName:
return this.userTypeName;
case clsUserTypeEN.con_UserTypeNameSim:
return this.userTypeNameSim;
case clsUserTypeEN.con_UserTypeENName:
return this.userTypeENName;
case clsUserTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[UserType]中不存在!`;
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
case clsUserTypeEN.con_UserTypeId:
this.userTypeId = strValue;
    this.hmProperty["userTypeId"] = true;
break;
case clsUserTypeEN.con_UserTypeName:
this.userTypeName = strValue;
    this.hmProperty["userTypeName"] = true;
break;
case clsUserTypeEN.con_UserTypeNameSim:
this.userTypeNameSim = strValue;
    this.hmProperty["userTypeNameSim"] = true;
break;
case clsUserTypeEN.con_UserTypeENName:
this.userTypeENName = strValue;
    this.hmProperty["userTypeENName"] = true;
break;
case clsUserTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[UserType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public userTypeId = "";    //用户类型Id
public userTypeName = "";    //用户类型名称
public userTypeNameSim = "";    //用户类型名_Sim
public userTypeENName = "";    //UserTypeENName
public memo = "";    //备注


 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"UserTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserTypeName(): string {return "userTypeName";}    //用户类型名称

 /**
 * 常量:"UserTypeNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserTypeNameSim(): string {return "userTypeNameSim";}    //用户类型名_Sim

 /**
 * 常量:"UserTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserTypeENName(): string {return "userTypeENName";}    //UserTypeENName

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
//return propName in new clsUserTypeEN();
const instance = new clsUserTypeEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumUserType
{
 /**
 * 职前用户
 **/
static readonly PreEmploymentUser_01 = "01";
 /**
 * 职后用户
 **/
static readonly PostEmploymentUser_02 = "02";
 /**
 * 职后用户2
 **/
static readonly PostEmploymentUser2_03 = "03";
 /**
 * 中小学用户
 **/
static readonly PrimaryandSecondarySchoolUser_04 = "04";
 /**
 * 大学用户
 **/
static readonly UniversityUser_05 = "05";
 /**
 * 公司用户
 **/
static readonly CompanyUser_06 = "06";
}
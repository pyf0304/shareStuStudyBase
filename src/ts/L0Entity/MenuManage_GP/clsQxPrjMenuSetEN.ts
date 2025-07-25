﻿
 /**
 * 类名:clsQxPrjMenuSetEN
 * 表名:QxPrjMenuSet(00140045)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:12:17
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 菜单集(QxPrjMenuSet)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsQxPrjMenuSetEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "QxPrjMenuSet"; //当前表名,与该类相关的表名
public static _KeyFldName= "MenuSetId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["menuSetId", "menuSetName", "menuSetENName", "qxPrjId", "cmPrjId", "isDefault", "updDate", "updUser", "memo"];
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
private mstrMenuSetId = "";    //菜单集Id
private mstrMenuSetName = "";    //菜单集名称
private mstrMenuSetENName = "";    //菜单集英文名
private mstrQxPrjId = "";    //项目Id
private mstrCmPrjId = "";    //Cm项目Id
private mbolIsDefault = false;    //是否默认
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改用户
private mstrMemo = "";    //备注

/**
 * 菜单集Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMenuSetId (value: string)
{
if (value  != undefined)
{
 this.menuSetId = value;
    this.hmProperty["menuSetId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 菜单集名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMenuSetName (value: string)
{
if (value  != undefined)
{
 this.menuSetName = value;
    this.hmProperty["menuSetName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 菜单集英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMenuSetENName (value: string)
{
if (value  != undefined)
{
 this.menuSetENName = value;
    this.hmProperty["menuSetENName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 项目Id(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQxPrjId (value: string)
{
if (value  != undefined)
{
 this.qxPrjId = value;
    this.hmProperty["qxPrjId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Cm项目Id(说明:;字段类型:char;字段长度:6;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCmPrjId (value: string)
{
if (value  != undefined)
{
 this.cmPrjId = value;
    this.hmProperty["cmPrjId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否默认(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDefault (value: boolean)
{
if (value  != undefined)
{
 this.isDefault = value;
    this.hmProperty["isDefault"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:False)
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
 * 修改用户(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
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
case clsQxPrjMenuSetEN.con_MenuSetId:
return this.menuSetId;
case clsQxPrjMenuSetEN.con_MenuSetName:
return this.menuSetName;
case clsQxPrjMenuSetEN.con_MenuSetENName:
return this.menuSetENName;
case clsQxPrjMenuSetEN.con_QxPrjId:
return this.qxPrjId;
case clsQxPrjMenuSetEN.con_CmPrjId:
return this.cmPrjId;
case clsQxPrjMenuSetEN.con_IsDefault:
return this.isDefault;
case clsQxPrjMenuSetEN.con_UpdDate:
return this.updDate;
case clsQxPrjMenuSetEN.con_UpdUser:
return this.updUser;
case clsQxPrjMenuSetEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjMenuSet]中不存在!`;
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
case clsQxPrjMenuSetEN.con_MenuSetId:
this.menuSetId = strValue;
    this.hmProperty["menuSetId"] = true;
break;
case clsQxPrjMenuSetEN.con_MenuSetName:
this.menuSetName = strValue;
    this.hmProperty["menuSetName"] = true;
break;
case clsQxPrjMenuSetEN.con_MenuSetENName:
this.menuSetENName = strValue;
    this.hmProperty["menuSetENName"] = true;
break;
case clsQxPrjMenuSetEN.con_QxPrjId:
this.qxPrjId = strValue;
    this.hmProperty["qxPrjId"] = true;
break;
case clsQxPrjMenuSetEN.con_CmPrjId:
this.cmPrjId = strValue;
    this.hmProperty["cmPrjId"] = true;
break;
case clsQxPrjMenuSetEN.con_IsDefault:
this.isDefault = Boolean(strValue);
    this.hmProperty["isDefault"] = true;
break;
case clsQxPrjMenuSetEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsQxPrjMenuSetEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsQxPrjMenuSetEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[QxPrjMenuSet]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public menuSetId = "";    //菜单集Id
public menuSetName = "";    //菜单集名称
public menuSetENName = "";    //菜单集英文名
public qxPrjId = "";    //项目Id
public cmPrjId = "";    //Cm项目Id
public isDefault = false;    //是否默认
public updDate = "";    //修改日期
public updUser = "";    //修改用户
public memo = "";    //备注


 /**
 * 常量:"MenuSetId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuSetId(): string {return "menuSetId";}    //菜单集Id

 /**
 * 常量:"MenuSetName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuSetName(): string {return "menuSetName";}    //菜单集名称

 /**
 * 常量:"MenuSetENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuSetENName(): string {return "menuSetENName";}    //菜单集英文名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"CmPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CmPrjId(): string {return "cmPrjId";}    //Cm项目Id

 /**
 * 常量:"IsDefault"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDefault(): string {return "isDefault";}    //是否默认

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改用户

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
//return propName in new clsQxPrjMenuSetEN();
const instance = new clsQxPrjMenuSetEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumQxPrjMenuSet
{
 /**
 * 总菜单[学习平台]
 **/
static readonly BackgroundMenu_0001 = "0001";
 /**
 * 学生微格维护子菜单
 **/
static readonly StuMicroteachMaintenance_0002 = "0002";
 /**
 * 书法教学评议
 **/
static readonly WritingOnBB_0003 = "0003";
 /**
 * 普通话教学评议
 **/
static readonly Mandarin_0004 = "0004";
 /**
 * 微格教学评议
 **/
static readonly MicroTeach_0005 = "0005";
 /**
 * 技能示范与评议
 **/
static readonly SkillDemo_0006 = "0006";
 /**
 * 课例点播与评议
 **/
static readonly PubicClassSenate_0007 = "0007";
 /**
 * 青教评优教学评议
 **/
static readonly YoungTAppraised_0008 = "0008";
 /**
 * 职后微格课例添加
 **/
static readonly PostMicroTeachAdd_0009 = "0009";
 /**
 * 职后微格教学评议扩展
 **/
static readonly PostMicroTeachSenate_0010 = "0010";
 /**
 * 学生微格维护
 **/
static readonly StuMicroTeach_0011 = "0011";
 /**
 * 学生板书案例维护
 **/
static readonly StuWritingOnBB_0012 = "0012";
 /**
 * 学生普通话案例维护
 **/
static readonly StuMandarin_0013 = "0013";
 /**
 * 后台案例维护
 **/
static readonly BackgroundCaseMaintenance_0014 = "0014";
 /**
 * 课件点播与评议
 **/
static readonly Courseware_0015 = "0015";
 /**
 * 课堂教学点播与评议
 **/
static readonly ClsRmTeaching_0016 = "0016";
 /**
 * 总菜单[阅读]
 **/
static readonly BackgroundMenu_0017 = "0017";
 /**
 * 个人中心[阅读]
 **/
static readonly PersonalCenterMenu_0018 = "0018";
 /**
 * 硕士优课评议
 **/
static readonly EduMSTRGiftedCls_0023 = "0023";
 /**
 * 课程学习
 **/
static readonly CourseLearn_0024 = "0024";
 /**
 * 总菜单[游戏]
 **/
static readonly BackgroundMenu_0025 = "0025";
 /**
 * 个人中心[游戏]
 **/
static readonly PersonalCenterMenu_0026 = "0026";
}
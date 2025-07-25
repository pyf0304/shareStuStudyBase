
 /**
 * 类名:clsKnowledgeMasterLevelEN
 * 表名:KnowledgeMasterLevel(01120891)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:46
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点掌握度(KnowledgeMasterLevel)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsKnowledgeMasterLevelEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "KnowledgeMasterLevel"; //当前表名,与该类相关的表名
public static _KeyFldName= "MasterLevelId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["masterLevelId", "masterLevelName", "levelMinValue", "levelMaxValue", "updDate", "updUser", "memo"];
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
private mstrMasterLevelId = "";    //掌握度Id
private mstrMasterLevelName = "";    //掌握等级
private mdblLevelMinValue = 0;    //最小值
private mdblLevelMaxValue = 0;    //最大值
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 掌握度Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterLevelId (value: string)
{
if (value  != undefined)
{
 this.masterLevelId = value;
    this.hmProperty["masterLevelId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 掌握等级(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterLevelName (value: string)
{
if (value  != undefined)
{
 this.masterLevelName = value;
    this.hmProperty["masterLevelName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 最小值(说明:;字段类型:numeric;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelMinValue (value: number)
{
if (value  != undefined)
{
 this.levelMinValue = value;
    this.hmProperty["levelMinValue"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 最大值(说明:;字段类型:numeric;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelMaxValue (value: number)
{
if (value  != undefined)
{
 this.levelMaxValue = value;
    this.hmProperty["levelMaxValue"] = true;
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
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
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
case clsKnowledgeMasterLevelEN.con_MasterLevelId:
return this.masterLevelId;
case clsKnowledgeMasterLevelEN.con_MasterLevelName:
return this.masterLevelName;
case clsKnowledgeMasterLevelEN.con_LevelMinValue:
return this.levelMinValue;
case clsKnowledgeMasterLevelEN.con_LevelMaxValue:
return this.levelMaxValue;
case clsKnowledgeMasterLevelEN.con_UpdDate:
return this.updDate;
case clsKnowledgeMasterLevelEN.con_UpdUser:
return this.updUser;
case clsKnowledgeMasterLevelEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeMasterLevel]中不存在!`;
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
case clsKnowledgeMasterLevelEN.con_MasterLevelId:
this.masterLevelId = strValue;
    this.hmProperty["masterLevelId"] = true;
break;
case clsKnowledgeMasterLevelEN.con_MasterLevelName:
this.masterLevelName = strValue;
    this.hmProperty["masterLevelName"] = true;
break;
case clsKnowledgeMasterLevelEN.con_LevelMinValue:
this.levelMinValue = Number(strValue);
    this.hmProperty["levelMinValue"] = true;
break;
case clsKnowledgeMasterLevelEN.con_LevelMaxValue:
this.levelMaxValue = Number(strValue);
    this.hmProperty["levelMaxValue"] = true;
break;
case clsKnowledgeMasterLevelEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsKnowledgeMasterLevelEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsKnowledgeMasterLevelEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeMasterLevel]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public masterLevelId = "";    //掌握度Id
public masterLevelName = "";    //掌握等级
public levelMinValue = 0;    //最小值
public levelMaxValue = 0;    //最大值
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"MasterLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterLevelId(): string {return "masterLevelId";}    //掌握度Id

 /**
 * 常量:"MasterLevelName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterLevelName(): string {return "masterLevelName";}    //掌握等级

 /**
 * 常量:"LevelMinValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelMinValue(): string {return "levelMinValue";}    //最小值

 /**
 * 常量:"LevelMaxValue"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelMaxValue(): string {return "levelMaxValue";}    //最大值

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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
//return propName in new clsKnowledgeMasterLevelEN();
const instance = new clsKnowledgeMasterLevelEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
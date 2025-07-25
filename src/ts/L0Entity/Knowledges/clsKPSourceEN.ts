
 /**
 * 类名:clsKPSourceEN
 * 表名:KPSource(01120995)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:04
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
 * 知识点来源(KPSource)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsKPSourceEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "KPSource"; //当前表名,与该类相关的表名
public static _KeyFldName= "KpSourceId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["kpSourceId", "kpSourceName", "kpSourceEnName", "updDate", "updUser"];
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
private mstrKpSourceId = "";    //知识点来源Id
private mstrKpSourceName = "";    //知识点来源名
private mstrKpSourceEnName = "";    //知识点来源英文名
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人

/**
 * 知识点来源Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKpSourceId (value: string)
{
if (value  != undefined)
{
 this.kpSourceId = value;
    this.hmProperty["kpSourceId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点来源名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKpSourceName (value: string)
{
if (value  != undefined)
{
 this.kpSourceName = value;
    this.hmProperty["kpSourceName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点来源英文名(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKpSourceEnName (value: string)
{
if (value  != undefined)
{
 this.kpSourceEnName = value;
    this.hmProperty["kpSourceEnName"] = true;
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
case clsKPSourceEN.con_KpSourceId:
return this.kpSourceId;
case clsKPSourceEN.con_KpSourceName:
return this.kpSourceName;
case clsKPSourceEN.con_KpSourceEnName:
return this.kpSourceEnName;
case clsKPSourceEN.con_UpdDate:
return this.updDate;
case clsKPSourceEN.con_UpdUser:
return this.updUser;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KPSource]中不存在!`;
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
case clsKPSourceEN.con_KpSourceId:
this.kpSourceId = strValue;
    this.hmProperty["kpSourceId"] = true;
break;
case clsKPSourceEN.con_KpSourceName:
this.kpSourceName = strValue;
    this.hmProperty["kpSourceName"] = true;
break;
case clsKPSourceEN.con_KpSourceEnName:
this.kpSourceEnName = strValue;
    this.hmProperty["kpSourceEnName"] = true;
break;
case clsKPSourceEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsKPSourceEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KPSource]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public kpSourceId = "";    //知识点来源Id
public kpSourceName = "";    //知识点来源名
public kpSourceEnName = "";    //知识点来源英文名
public updDate = "";    //修改日期
public updUser = "";    //修改人


 /**
 * 常量:"KpSourceId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KpSourceId(): string {return "kpSourceId";}    //知识点来源Id

 /**
 * 常量:"KpSourceName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KpSourceName(): string {return "kpSourceName";}    //知识点来源名

 /**
 * 常量:"KpSourceEnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KpSourceEnName(): string {return "kpSourceEnName";}    //知识点来源英文名

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
//return propName in new clsKPSourceEN();
const instance = new clsKPSourceEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumKPSource
{
 /**
 * 当前教材
 **/
static readonly CurrentTeachingMaterial_01 = "01";
 /**
 * 网络
 **/
static readonly Network_02 = "02";
 /**
 * 旧教材
 **/
static readonly OldTeachingMaterial_03 = "03";
 /**
 * 自定义
 **/
static readonly Custom_04 = "04";
}
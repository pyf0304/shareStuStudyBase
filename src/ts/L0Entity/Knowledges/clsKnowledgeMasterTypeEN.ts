
 /**
 * 类名:clsKnowledgeMasterTypeEN
 * 表名:KnowledgeMasterType(01120893)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:54:23
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
 * 知识点掌握类型(KnowledgeMasterType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsKnowledgeMasterTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "KnowledgeMasterType"; //当前表名,与该类相关的表名
public static _KeyFldName= "MasterTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["masterTypeId", "masterTypeName", "masterTypeENName", "updDate", "updUser", "memo"];
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
private mstrMasterTypeId = "";    //掌握类型Id
private mstrMasterTypeName = "";    //掌握类型名
private mstrMasterTypeENName = "";    //掌握类型英文名
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 掌握类型Id(说明:;字段类型:char;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterTypeId (value: string)
{
if (value  != undefined)
{
 this.masterTypeId = value;
    this.hmProperty["masterTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 掌握类型名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterTypeName (value: string)
{
if (value  != undefined)
{
 this.masterTypeName = value;
    this.hmProperty["masterTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 掌握类型英文名(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMasterTypeENName (value: string)
{
if (value  != undefined)
{
 this.masterTypeENName = value;
    this.hmProperty["masterTypeENName"] = true;
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
case clsKnowledgeMasterTypeEN.con_MasterTypeId:
return this.masterTypeId;
case clsKnowledgeMasterTypeEN.con_MasterTypeName:
return this.masterTypeName;
case clsKnowledgeMasterTypeEN.con_MasterTypeENName:
return this.masterTypeENName;
case clsKnowledgeMasterTypeEN.con_UpdDate:
return this.updDate;
case clsKnowledgeMasterTypeEN.con_UpdUser:
return this.updUser;
case clsKnowledgeMasterTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeMasterType]中不存在!`;
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
case clsKnowledgeMasterTypeEN.con_MasterTypeId:
this.masterTypeId = strValue;
    this.hmProperty["masterTypeId"] = true;
break;
case clsKnowledgeMasterTypeEN.con_MasterTypeName:
this.masterTypeName = strValue;
    this.hmProperty["masterTypeName"] = true;
break;
case clsKnowledgeMasterTypeEN.con_MasterTypeENName:
this.masterTypeENName = strValue;
    this.hmProperty["masterTypeENName"] = true;
break;
case clsKnowledgeMasterTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsKnowledgeMasterTypeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsKnowledgeMasterTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeMasterType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public masterTypeId = "";    //掌握类型Id
public masterTypeName = "";    //掌握类型名
public masterTypeENName = "";    //掌握类型英文名
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"MasterTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterTypeId(): string {return "masterTypeId";}    //掌握类型Id

 /**
 * 常量:"MasterTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterTypeName(): string {return "masterTypeName";}    //掌握类型名

 /**
 * 常量:"MasterTypeENName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MasterTypeENName(): string {return "masterTypeENName";}    //掌握类型英文名

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
//return propName in new clsKnowledgeMasterTypeEN();
const instance = new clsKnowledgeMasterTypeEN();
return instance.hasOwnProperty(propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumKnowledgeMasterType
{
 /**
 * 主观
 **/
static readonly subjective_1 = "1";
 /**
 * 客观
 **/
static readonly objective_2 = "2";
}
﻿
 /**
 * 类名:clsDisciplineEN
 * 表名:Discipline(01120315)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:29:06
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:技能示范(SkillDemo)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 学科(Discipline)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsDisciplineEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "Discipline"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdDiscipline"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idDiscipline", "disciplineID", "disciplineName", "sequenceNumber", "memo"];
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
private mstrIdDiscipline = "";    //学科流水号
private mstrDisciplineID = "";    //学科ID
private mstrDisciplineName = "";    //学科名称
private mintSequenceNumber = 0;    //序号
private mstrMemo = "";    //备注

/**
 * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdDiscipline (value: string)
{
if (value  != undefined)
{
 this.idDiscipline = value;
    this.hmProperty["idDiscipline"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学科ID(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDisciplineID (value: string)
{
if (value  != undefined)
{
 this.disciplineID = value;
    this.hmProperty["disciplineID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学科名称(说明:;字段类型:varchar;字段长度:50;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDisciplineName (value: string)
{
if (value  != undefined)
{
 this.disciplineName = value;
    this.hmProperty["disciplineName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSequenceNumber (value: number)
{
if (value  != undefined)
{
 this.sequenceNumber = value;
    this.hmProperty["sequenceNumber"] = true;
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
case clsDisciplineEN.con_IdDiscipline:
return this.idDiscipline;
case clsDisciplineEN.con_DisciplineID:
return this.disciplineID;
case clsDisciplineEN.con_DisciplineName:
return this.disciplineName;
case clsDisciplineEN.con_SequenceNumber:
return this.sequenceNumber;
case clsDisciplineEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Discipline]中不存在!`;
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
case clsDisciplineEN.con_IdDiscipline:
this.idDiscipline = strValue;
    this.hmProperty["idDiscipline"] = true;
break;
case clsDisciplineEN.con_DisciplineID:
this.disciplineID = strValue;
    this.hmProperty["disciplineID"] = true;
break;
case clsDisciplineEN.con_DisciplineName:
this.disciplineName = strValue;
    this.hmProperty["disciplineName"] = true;
break;
case clsDisciplineEN.con_SequenceNumber:
this.sequenceNumber = Number(strValue);
    this.hmProperty["sequenceNumber"] = true;
break;
case clsDisciplineEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[Discipline]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idDiscipline = "";    //学科流水号
public disciplineID = "";    //学科ID
public disciplineName = "";    //学科名称
public sequenceNumber = 0;    //序号
public memo = "";    //备注


 /**
 * 常量:"IdDiscipline"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdDiscipline(): string {return "idDiscipline";}    //学科流水号

 /**
 * 常量:"DisciplineID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DisciplineID(): string {return "disciplineID";}    //学科ID

 /**
 * 常量:"DisciplineName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DisciplineName(): string {return "disciplineName";}    //学科名称

 /**
 * 常量:"SequenceNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SequenceNumber(): string {return "sequenceNumber";}    //序号

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
//return propName in new clsDisciplineEN();
const instance = new clsDisciplineEN();
return instance.hasOwnProperty(propName);
}
}
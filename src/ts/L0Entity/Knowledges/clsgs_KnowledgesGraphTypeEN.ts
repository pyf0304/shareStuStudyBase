﻿
 /**
 * 类名:clsgs_KnowledgesGraphTypeEN
 * 表名:gs_KnowledgesGraphType(01120888)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:28:25
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点图谱类型(gs_KnowledgesGraphType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_KnowledgesGraphTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_KnowledgesGraphType"; //当前表名,与该类相关的表名
public static _KeyFldName= "GraphTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["graphTypeId", "graphTypeName", "memo"];
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
private mstrGraphTypeId = "";    //图谱类型Id
private mstrGraphTypeName = "";    //图谱类型名称
private mstrMemo = "";    //备注

/**
 * 图谱类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGraphTypeId (value: string)
{
if (value  != undefined)
{
 this.graphTypeId = value;
    this.hmProperty["graphTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 图谱类型名称(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGraphTypeName (value: string)
{
if (value  != undefined)
{
 this.graphTypeName = value;
    this.hmProperty["graphTypeName"] = true;
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
case clsgs_KnowledgesGraphTypeEN.con_GraphTypeId:
return this.graphTypeId;
case clsgs_KnowledgesGraphTypeEN.con_GraphTypeName:
return this.graphTypeName;
case clsgs_KnowledgesGraphTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesGraphType]中不存在!`;
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
case clsgs_KnowledgesGraphTypeEN.con_GraphTypeId:
this.graphTypeId = strValue;
    this.hmProperty["graphTypeId"] = true;
break;
case clsgs_KnowledgesGraphTypeEN.con_GraphTypeName:
this.graphTypeName = strValue;
    this.hmProperty["graphTypeName"] = true;
break;
case clsgs_KnowledgesGraphTypeEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesGraphType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public graphTypeId = "";    //图谱类型Id
public graphTypeName = "";    //图谱类型名称
public memo = "";    //备注


 /**
 * 常量:"GraphTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GraphTypeId(): string {return "graphTypeId";}    //图谱类型Id

 /**
 * 常量:"GraphTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GraphTypeName(): string {return "graphTypeName";}    //图谱类型名称

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
const instance = new clsgs_KnowledgesGraphTypeEN();
return instance.hasOwnProperty(propName);
}
}
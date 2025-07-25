﻿
 /**
 * 类名:clsQxPotenceTypeENEx
 * 表名:QxPotenceType(00140003)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:12:31
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:权限管理(PotenceMan)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 权限类型(QxPotenceType)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxPotenceTypeEN } from "@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN";

export class  clsQxPotenceTypeENEx extends clsQxPotenceTypeEN
{
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
 **/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strValue;
switch (strFldName)
{
case "CtrlId":
return "";
case clsQxPotenceTypeENEx.con_FuncModuleName:
return this.funcModuleName;
case clsQxPotenceTypeENEx.con_MenuName:
return this.menuName;
case clsQxPotenceTypeENEx.con_DateTimeSim:
return this.dateTimeSim;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"FuncModuleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_FuncModuleName(): string {return "funcModuleName";}    //模块名

 /**
 * 常量:"MenuName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_MenuName(): string {return "menuName";}    //菜单名

 /**
 * 常量:"DateTimeSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DateTimeSim(): string {return "dateTimeSim";}    //简化日期时间

public funcModuleName = "";    //模块名
public menuName = "";    //菜单名
public dateTimeSim = "";    //简化日期时间
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsQxPotenceTypeENEx();
const instance = new clsQxPotenceTypeENEx();
return instance.hasOwnProperty(propName);
}
}
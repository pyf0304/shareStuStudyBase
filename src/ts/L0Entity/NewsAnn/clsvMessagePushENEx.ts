﻿
 /**
 * 类名:clsvMessagePushENEx
 * 表名:vMessagePush(01120282)
 * 版本:2024.01.29.1(服务器:WIN-SRV103-116)
 * 日期:2024/02/01 11:07:44
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
 /**
 * 消息推送视图(vMessagePush)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvMessagePushEN } from "@/ts/L0Entity/NewsAnn/clsvMessagePushEN";

export class  clsvMessagePushENEx extends clsvMessagePushEN
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
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
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
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vMessagePush]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
}
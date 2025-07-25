﻿
 /**
 * 类名:clsge_UserBadgeTtlENEx
 * 表名:ge_UserBadgeTtl(01120882)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:57:58
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 用户徽章汇总(ge_UserBadgeTtl)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsge_UserBadgeTtlEN } from "@/ts/L0Entity/GameLearn/clsge_UserBadgeTtlEN";

export class  clsge_UserBadgeTtlENEx extends clsge_UserBadgeTtlEN
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
case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
return this.badgeTypeName;
case clsge_UserBadgeTtlENEx.con_UserName:
return this.userName;
case clsge_UserBadgeTtlENEx.con_EduClsName:
return this.eduClsName;
case clsge_UserBadgeTtlENEx.con_ImageDir:
return this.imageDir;
case clsge_UserBadgeTtlENEx.con_CourseId:
return this.courseId;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"BadgeTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_BadgeTypeName(): string {return "badgeTypeName";}    //徽章类型名

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"ImageDir"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_ImageDir(): string {return "imageDir";}    //图像目录

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

public badgeTypeName = "";    //徽章类型名
public userName = "";    //用户名
public eduClsName = "";    //教学班名
public imageDir = "";    //图像目录
public courseId = "";    //课程Id

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
case clsge_UserBadgeTtlENEx.con_BadgeTypeName:
this.badgeTypeName = strValue;
    this.hmProperty["badgeTypeName"] = true;
break;
case clsge_UserBadgeTtlENEx.con_UserName:
this.userName = strValue;
    this.hmProperty["userName"] = true;
break;
case clsge_UserBadgeTtlENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsge_UserBadgeTtlENEx.con_ImageDir:
this.imageDir = strValue;
    this.hmProperty["imageDir"] = true;
break;
case clsge_UserBadgeTtlENEx.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_UserBadgeTtl]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsge_UserBadgeTtlENEx();
const instance = new clsge_UserBadgeTtlENEx();
return instance.hasOwnProperty(propName);
}
}
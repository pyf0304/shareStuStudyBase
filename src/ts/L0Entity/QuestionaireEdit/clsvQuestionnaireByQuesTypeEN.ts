﻿
 /**
 * 类名:clsvQuestionnaireByQuesTypeEN
 * 表名:vQuestionnaireByQuesType(01120982)
 * 版本:2025.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/13 11:31:30
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:问卷维护(QuestionaireEdit)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * vQuestionnaireByQuesType(vQuestionnaireByQuesType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQuestionnaireByQuesTypeEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQuestionnaireByQuesType"; //当前表名,与该类相关的表名
public static _KeyFldName= "QuestionTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["questionTypeId", "questionTypeName", "questionNum", "courseId"];
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
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId:
return this.questionTypeId;
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName:
return this.questionTypeName;
case clsvQuestionnaireByQuesTypeEN.con_QuestionNum:
return this.questionNum;
case clsvQuestionnaireByQuesTypeEN.con_CourseId:
return this.courseId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaireByQuesType]中不存在!`;
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
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeId:
this.questionTypeId = strValue;
break;
case clsvQuestionnaireByQuesTypeEN.con_QuestionTypeName:
this.questionTypeName = strValue;
break;
case clsvQuestionnaireByQuesTypeEN.con_QuestionNum:
this.questionNum = Number(strValue);
break;
case clsvQuestionnaireByQuesTypeEN.con_CourseId:
this.courseId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQuestionnaireByQuesType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public questionTypeId = "";    //题目类型Id
public questionTypeName = "";    //题目类型名
public questionNum = 0;    //题目数
public courseId = "";    //课程Id


 /**
 * 常量:"QuestionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeId(): string {return "questionTypeId";}    //题目类型Id

 /**
 * 常量:"QuestionTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionTypeName(): string {return "questionTypeName";}    //题目类型名

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

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
//return propName in new clsvQuestionnaireByQuesTypeEN();
const instance = new clsvQuestionnaireByQuesTypeEN();
return instance.hasOwnProperty(propName);
}
}
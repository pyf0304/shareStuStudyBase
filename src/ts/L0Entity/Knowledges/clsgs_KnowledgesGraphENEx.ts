
 /**
 * 类名:clsgs_KnowledgesGraphENEx
 * 表名:gs_KnowledgesGraph(01120873)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:36:01
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点逻辑图(gs_KnowledgesGraph)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsgs_KnowledgesGraphEN } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN";

export class  clsgs_KnowledgesGraphENEx extends clsgs_KnowledgesGraphEN
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
case clsgs_KnowledgesGraphENEx.con_CourseName:
return this.courseName;
case clsgs_KnowledgesGraphENEx.con_EduClsName:
return this.eduClsName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

public courseName = "";    //课程名称
public eduClsName = "";    //教学班名

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
case clsgs_KnowledgesGraphENEx.con_CourseName:
this.courseName = strValue;
    this.hmProperty["courseName"] = true;
break;
case clsgs_KnowledgesGraphENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesGraph]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsgs_KnowledgesGraphENEx();
const instance = new clsgs_KnowledgesGraphENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
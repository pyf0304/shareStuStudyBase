
 /**
 * 类名:clsgs_TeachingDateENEx
 * 表名:gs_TeachingDate(01120684)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:47
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 教学班日期范围(gs_TeachingDate)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsgs_TeachingDateEN } from "@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN";

export class  clsgs_TeachingDateENEx extends clsgs_TeachingDateEN
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
case clsgs_TeachingDateENEx.con_EduClsName:
return this.eduClsName;
case clsgs_TeachingDateENEx.con_CourseId:
return this.courseId;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

public eduClsName = "";    //教学班名
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
case clsgs_TeachingDateENEx.con_EduClsName:
this.eduClsName = strValue;
    this.hmProperty["eduClsName"] = true;
break;
case clsgs_TeachingDateENEx.con_CourseId:
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
strMsg = `字段名:[${strFldName}]在表对象:[gs_TeachingDate]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsgs_TeachingDateENEx();
const instance = new clsgs_TeachingDateENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
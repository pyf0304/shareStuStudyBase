
 /**
 * 类名:clsvTeacherInfo_SimENEx
 * 表名:vTeacherInfo_Sim(01120976)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:36:09
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * v教师_Sim(vTeacherInfo_Sim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvTeacherInfo_SimEN } from "@/ts/L0Entity/BaseInfo/clsvTeacherInfo_SimEN";

export class  clsvTeacherInfo_SimENEx extends clsvTeacherInfo_SimEN
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
case clsvTeacherInfo_SimENEx.con_SchoolName:
return this.schoolName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"SchoolName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SchoolName(): string {return "schoolName";}    //学校名称

public schoolName = "";    //学校名称

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
case clsvTeacherInfo_SimENEx.con_SchoolName:
this.schoolName = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vTeacherInfo_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsvTeacherInfo_SimENEx();
const instance = new clsvTeacherInfo_SimENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
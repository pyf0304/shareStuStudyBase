
 /**
 * 类名:clsvStudentInfo_SimENEx
 * 表名:vStudentInfo_Sim(01120945)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:56
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * vStudentInfo_Sim(vStudentInfo_Sim)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsvStudentInfo_SimEN } from "@/ts/L0Entity/UserManage/clsvStudentInfo_SimEN";

export class  clsvStudentInfo_SimENEx extends clsvStudentInfo_SimEN
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
case clsvStudentInfo_SimENEx.con_IdCurrEduCls:
return this.idCurrEduCls;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

public idCurrEduCls = "";    //教学班流水号

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
case clsvStudentInfo_SimENEx.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vStudentInfo_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsvStudentInfo_SimENEx();
const instance = new clsvStudentInfo_SimENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}

 /**
 * 类名:clsXzMajorENEx
 * 表名:XzMajor(01120065)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:29:16
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
 * 专业(XzMajor)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsXzMajorEN } from "@/ts/L0Entity/BaseInfo/clsXzMajorEN";

export class  clsXzMajorENEx extends clsXzMajorEN
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
case clsXzMajorENEx.con_CollegeName:
return this.collegeName;
case clsXzMajorENEx.con_MajorTypeName:
return this.majorTypeName;
case clsXzMajorENEx.con_XwTypeDesc:
return this.xwTypeDesc;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"MajorTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_MajorTypeName(): string {return "majorTypeName";}    //专业类型名称

 /**
 * 常量:"XwTypeDesc"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_XwTypeDesc(): string {return "xwTypeDesc";}    //学位类型名称

public collegeName = "";    //学院名称
public majorTypeName = "";    //专业类型名称
public xwTypeDesc = "";    //学位类型名称

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
case clsXzMajorENEx.con_CollegeName:
this.collegeName = strValue;
    this.hmProperty["collegeName"] = true;
break;
case clsXzMajorENEx.con_MajorTypeName:
this.majorTypeName = strValue;
    this.hmProperty["majorTypeName"] = true;
break;
case clsXzMajorENEx.con_XwTypeDesc:
this.xwTypeDesc = strValue;
    this.hmProperty["xwTypeDesc"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzMajor]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
//return propName in new clsXzMajorENEx();
const instance = new clsXzMajorENEx();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
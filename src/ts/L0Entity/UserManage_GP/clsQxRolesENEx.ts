
 /**
 * 类名:clsQxRolesENEx
 * 表名:QxRoles(00140014)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:11:23
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 角色(QxRoles)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxRolesEN } from "@/ts/L0Entity/UserManage_GP/clsQxRolesEN";

export class  clsQxRolesENEx extends clsQxRolesEN
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
case clsQxRolesENEx.con_UserTypeName:
return this.userTypeName;
case clsQxRolesENEx.con_UserTypeNameSim:
return this.userTypeNameSim;
case clsQxRolesENEx.con_RoleTypeName:
return this.roleTypeName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"UserTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserTypeName(): string {return "userTypeName";}    //用户类型名

 /**
 * 常量:"UserTypeNameSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserTypeNameSim(): string {return "userTypeNameSim";}    //用户类型简称

 /**
 * 常量:"RoleTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_RoleTypeName(): string {return "roleTypeName";}    //角色类型名

public userTypeName = "";    //用户类型名
public userTypeNameSim = "";    //用户类型简称
public roleTypeName = "";    //角色类型名
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsQxRolesENEx();
const instance = new clsQxRolesENEx();
return instance.hasOwnProperty(propName);
}
}
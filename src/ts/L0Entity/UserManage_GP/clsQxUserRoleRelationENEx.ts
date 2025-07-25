
 /**
 * 类名:clsQxUserRoleRelationENEx
 * 表名:QxUserRoleRelation(00140013)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:11:19
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
 * 用户角色关系(QxUserRoleRelation)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxUserRoleRelationEN } from "@/ts/L0Entity/UserManage_GP/clsQxUserRoleRelationEN";

export class  clsQxUserRoleRelationENEx extends clsQxUserRoleRelationEN
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
case clsQxUserRoleRelationENEx.con_DepartmentName:
return this.departmentName;
case clsQxUserRoleRelationENEx.con_DepartmentTypeName:
return this.departmentTypeName;
case clsQxUserRoleRelationENEx.con_RoleName:
return this.roleName;
case clsQxUserRoleRelationENEx.con_UserName:
return this.userName;
case clsQxUserRoleRelationENEx.con_PrjName:
return this.prjName;
case clsQxUserRoleRelationENEx.con_DepartmentId:
return this.departmentId;
case clsQxUserRoleRelationENEx.con_OrderNum:
return this.orderNum;
case clsQxUserRoleRelationENEx.con_DepartmentAbbrName:
return this.departmentAbbrName;
case clsQxUserRoleRelationENEx.con_SchoolName:
return this.schoolName;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"DepartmentName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DepartmentName(): string {return "departmentName";}    //部门名

 /**
 * 常量:"DepartmentTypeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DepartmentTypeName(): string {return "departmentTypeName";}    //部门类型名

 /**
 * 常量:"RoleName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_RoleName(): string {return "roleName";}    //角色名称

 /**
 * 常量:"UserName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UserName(): string {return "userName";}    //用户名

 /**
 * 常量:"PrjName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_PrjName(): string {return "prjName";}    //工程名

 /**
 * 常量:"DepartmentId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DepartmentId(): string {return "departmentId";}    //部门Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //排序号

 /**
 * 常量:"DepartmentAbbrName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DepartmentAbbrName(): string {return "departmentAbbrName";}    //名称缩写

 /**
 * 常量:"SchoolName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_SchoolName(): string {return "schoolName";}    //学校名称

public departmentName = "";    //部门名
public departmentTypeName = "";    //部门类型名
public roleName = "";    //角色名称
public userName = "";    //用户名
public prjName = "";    //工程名
public departmentId = "";    //部门Id
public orderNum = 0;    //排序号
public departmentAbbrName = "";    //名称缩写
public schoolName = "";    //学校名称
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsQxUserRoleRelationENEx();
const instance = new clsQxUserRoleRelationENEx();
return instance.hasOwnProperty(propName);
}
}
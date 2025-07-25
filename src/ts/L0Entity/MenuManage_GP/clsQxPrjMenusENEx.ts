
 /**
 * 类名:clsQxPrjMenusENEx
 * 表名:QxPrjMenus(00140004)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:12:16
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx,0191)
 * 编程语言:TypeScript
 **/
 /**
 * 工程菜单(QxPrjMenus)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsQxPrjMenusEN } from "@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN";

export class  clsQxPrjMenusENEx extends clsQxPrjMenusEN
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
case clsQxPrjMenusENEx.con_PageDispModeName:
return this.pageDispModeName;
case clsQxPrjMenusENEx.con_UpMenuName:
return this.upMenuName;
case clsQxPrjMenusENEx.con_RoleNames:
return this.roleNames;
case clsQxPrjMenusENEx.con_DateTimeSim:
return this.dateTimeSim;
case clsQxPrjMenusENEx.con_MenuSetId:
return this.menuSetId;
case clsQxPrjMenusENEx.con_MenuNameEx:
return this.menuNameEx;
default:
strValue = super.GetFldValue(strFldName);
return strValue;
}
}


 /**
 * 常量:"PageDispModeName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_PageDispModeName(): string {return "pageDispModeName";}    //页面显示模式名称

 /**
 * 常量:"UpMenuName"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_UpMenuName(): string {return "upMenuName";}    //上级菜单名

 /**
 * 常量:"RoleNames"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_RoleNames(): string {return "roleNames";}    //上级菜单名

 /**
 * 常量:"DateTimeSim"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_DateTimeSim(): string {return "dateTimeSim";}    //简化日期时间

 /**
 * 常量:"MenuSetId"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_MenuSetId(): string {return "menuSetId";}    //菜单集Id

 /**
 * 常量:"MenuNameEx"
 * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
 */
 public static get con_MenuNameEx(): string {return "menuNameEx";}    //菜单名

public pageDispModeName = "";    //页面显示模式名称
public upMenuName = "";    //上级菜单名
public roleNames = "";    //上级菜单名
public dateTimeSim = "";    //简化日期时间
public menuSetId = "";    //菜单集Id
public menuNameEx = "";    //菜单名
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsQxPrjMenusENEx();
const instance = new clsQxPrjMenusENEx();
return instance.hasOwnProperty(propName);
}
}
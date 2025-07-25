
 /**
 * 类名:clsvQxPrjMenusSimEN
 * 表名:vQxPrjMenusSim(00140126)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/10 06:22:22
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * vQxPrjMenusSim(vQxPrjMenusSim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvQxPrjMenusSimEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vQxPrjMenusSim"; //当前表名,与该类相关的表名
public static _KeyFldName= "MenuId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["menuId", "menuName", "qxPrjId", "upMenuId", "pageDispModeId", "inUse", "subMenusNum", "roleNum", "menuSetId"];
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
case clsvQxPrjMenusSimEN.con_MenuId:
return this.menuId;
case clsvQxPrjMenusSimEN.con_MenuName:
return this.menuName;
case clsvQxPrjMenusSimEN.con_QxPrjId:
return this.qxPrjId;
case clsvQxPrjMenusSimEN.con_UpMenuId:
return this.upMenuId;
case clsvQxPrjMenusSimEN.con_PageDispModeId:
return this.pageDispModeId;
case clsvQxPrjMenusSimEN.con_InUse:
return this.inUse;
case clsvQxPrjMenusSimEN.con_SubMenusNum:
return this.subMenusNum;
case clsvQxPrjMenusSimEN.con_RoleNum:
return this.roleNum;
case clsvQxPrjMenusSimEN.con_MenuSetId:
return this.menuSetId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPrjMenusSim]中不存在!`;
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
case clsvQxPrjMenusSimEN.con_MenuId:
this.menuId = strValue;
break;
case clsvQxPrjMenusSimEN.con_MenuName:
this.menuName = strValue;
break;
case clsvQxPrjMenusSimEN.con_QxPrjId:
this.qxPrjId = strValue;
break;
case clsvQxPrjMenusSimEN.con_UpMenuId:
this.upMenuId = strValue;
break;
case clsvQxPrjMenusSimEN.con_PageDispModeId:
this.pageDispModeId = strValue;
break;
case clsvQxPrjMenusSimEN.con_InUse:
this.inUse = Boolean(strValue);
break;
case clsvQxPrjMenusSimEN.con_SubMenusNum:
this.subMenusNum = Number(strValue);
break;
case clsvQxPrjMenusSimEN.con_RoleNum:
this.roleNum = Number(strValue);
break;
case clsvQxPrjMenusSimEN.con_MenuSetId:
this.menuSetId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vQxPrjMenusSim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public menuId = "";    //菜单Id
public menuName = "";    //菜单名
public qxPrjId = "";    //项目Id
public upMenuId = "";    //上级菜单Id
public pageDispModeId = "";    //页面显示模式Id
public inUse = false;    //是否在用
public subMenusNum = 0;    //子菜单数
public roleNum = 0;    //角色数
public menuSetId = "";    //菜单集Id


 /**
 * 常量:"MenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuId(): string {return "menuId";}    //菜单Id

 /**
 * 常量:"MenuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuName(): string {return "menuName";}    //菜单名

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"UpMenuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpMenuId(): string {return "upMenuId";}    //上级菜单Id

 /**
 * 常量:"PageDispModeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PageDispModeId(): string {return "pageDispModeId";}    //页面显示模式Id

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"SubMenusNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SubMenusNum(): string {return "subMenusNum";}    //子菜单数

 /**
 * 常量:"RoleNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RoleNum(): string {return "roleNum";}    //角色数

 /**
 * 常量:"MenuSetId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MenuSetId(): string {return "menuSetId";}    //菜单集Id

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
//return propName in new clsvQxPrjMenusSimEN();
const instance = new clsvQxPrjMenusSimEN();
return instance.hasOwnProperty(propName);
}
}
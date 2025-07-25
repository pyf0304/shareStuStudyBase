
 /**
 * 类名:clsQxUserRoleRelation
 * 表名:QxUserRoleRelation(00140013)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/09 22:29:54
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 用户角色关系(QxUserRoleRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsQxUserRoleRelation 
{
public static _CurrTabName= "QxUserRoleRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["mId", "userId", "roleId", "idSchool", "qxPrjId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //流水号
public userId = "";    //用户ID
public roleId = "";    //角色Id
public idSchool = "";    //学校流水号
public qxPrjId = "";    //项目Id
public updDate = "";    //修改日期
public updUser = "";    //修改用户
public memo = "";    //备注

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsQxUserRoleRelation.con_mId:
return this.mId;
case clsQxUserRoleRelation.con_UserId:
return this.userId;
case clsQxUserRoleRelation.con_RoleId:
return this.roleId;
case clsQxUserRoleRelation.con_IdSchool:
return this.idSchool;
case clsQxUserRoleRelation.con_QxPrjId:
return this.qxPrjId;
case clsQxUserRoleRelation.con_UpdDate:
return this.updDate;
case clsQxUserRoleRelation.con_UpdUser:
return this.updUser;
case clsQxUserRoleRelation.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[QxUserRoleRelation]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"RoleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RoleId(): string {return "roleId";}    //角色Id

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"QxPrjId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QxPrjId(): string {return "qxPrjId";}    //项目Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改用户

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
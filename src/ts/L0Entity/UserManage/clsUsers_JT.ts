
 /**
 * 类名:clsUsers_JT
 * 表名:Users_JT(01120227)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:55:36
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 用户表_交通(Users_JT)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsUsers_JT 
{
public static _CurrTabName= "Users_JT"; //当前表名,与该类相关的表名
public static _KeyFldName= "UserId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["userId", "siteName", "jobCategoryId", "managedDepartmentId", "iDNumber", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public userId = "";    //用户ID
public siteName = "";    //工地名称
public jobCategoryId = "";    //岗位类别Id
public managedDepartmentId = "";    //管理的部门Id
public iDNumber = "";    //身份证号
public updDate = "";    //修改日期
public updUser = "";    //修改人
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
case clsUsers_JT.con_UserId:
return this.userId;
case clsUsers_JT.con_SiteName:
return this.siteName;
case clsUsers_JT.con_JobCategoryId:
return this.jobCategoryId;
case clsUsers_JT.con_ManagedDepartmentId:
return this.managedDepartmentId;
case clsUsers_JT.con_IDNumber:
return this.iDNumber;
case clsUsers_JT.con_UpdDate:
return this.updDate;
case clsUsers_JT.con_UpdUser:
return this.updUser;
case clsUsers_JT.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Users_JT]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"SiteName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SiteName(): string {return "siteName";}    //工地名称

 /**
 * 常量:"JobCategoryId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_JobCategoryId(): string {return "jobCategoryId";}    //岗位类别Id

 /**
 * 常量:"ManagedDepartmentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ManagedDepartmentId(): string {return "managedDepartmentId";}    //管理的部门Id

 /**
 * 常量:"IDNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IDNumber(): string {return "iDNumber";}    //身份证号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
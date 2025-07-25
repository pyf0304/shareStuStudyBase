
 /**
 * 类名:clsSex
 * 表名:Sex(01120103)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:27
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 性别(Sex)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSex 
{
public static _CurrTabName= "Sex"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdSex"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["idSex", "sexID", "sexDesc", "sexDescEn", "modifyDate", "modifyUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idSex = "";    //性别流水号
public sexID = "";    //性别ID
public sexDesc = "";    //性别名称
public sexDescEn = "";    //SexDesc_EN
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
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
case clsSex.con_IdSex:
return this.idSex;
case clsSex.con_SexID:
return this.sexID;
case clsSex.con_SexDesc:
return this.sexDesc;
case clsSex.con_SexDescEn:
return this.sexDescEn;
case clsSex.con_ModifyDate:
return this.modifyDate;
case clsSex.con_ModifyUserId:
return this.modifyUserId;
case clsSex.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[Sex]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdSex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"SexID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SexID(): string {return "sexID";}    //性别ID

 /**
 * 常量:"SexDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SexDesc(): string {return "sexDesc";}    //性别名称

 /**
 * 常量:"SexDescEn"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SexDescEn(): string {return "sexDescEn";}    //SexDesc_EN

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
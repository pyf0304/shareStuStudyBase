
 /**
 * 类名:clsXzUniZone
 * 表名:XzUniZone(01120095)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:36:22
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
 * 校区(XzUniZone)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzUniZone 
{
public static _CurrTabName= "XzUniZone"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdUniZone"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["idUniZone", "uniZoneID", "uniZoneDesc", "uniZoneDescA", "idSchool", "idUni", "modifyUserId", "modifyDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idUniZone = "";    //校区流水号
public uniZoneID = "";    //校区编号
public uniZoneDesc = "";    //校区名称
public uniZoneDescA = "";    //UniZoneDescA
public idSchool = "";    //学校流水号
public idUni = "";    //id_Uni
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期
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
case clsXzUniZone.con_IdUniZone:
return this.idUniZone;
case clsXzUniZone.con_UniZoneID:
return this.uniZoneID;
case clsXzUniZone.con_UniZoneDesc:
return this.uniZoneDesc;
case clsXzUniZone.con_UniZoneDescA:
return this.uniZoneDescA;
case clsXzUniZone.con_IdSchool:
return this.idSchool;
case clsXzUniZone.con_IdUni:
return this.idUni;
case clsXzUniZone.con_ModifyUserId:
return this.modifyUserId;
case clsXzUniZone.con_ModifyDate:
return this.modifyDate;
case clsXzUniZone.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzUniZone]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"UniZoneID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UniZoneID(): string {return "uniZoneID";}    //校区编号

 /**
 * 常量:"UniZoneDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UniZoneDesc(): string {return "uniZoneDesc";}    //校区名称

 /**
 * 常量:"UniZoneDescA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UniZoneDescA(): string {return "uniZoneDescA";}    //UniZoneDescA

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"IdUni"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUni(): string {return "idUni";}    //id_Uni

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}

 /**
 * 类名:clsvXzUniZone
 * 表名:vXzUniZone(01120332)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/12 12:47:36
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v校区(vXzUniZone)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvXzUniZone 
{
public static _CurrTabName= "vXzUniZone"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdUniZone"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["idUniZone", "uniZoneID", "uniZoneDesc", "uniZoneDescA", "idSchool", "schoolId", "schoolName", "schoolNameA", "idUni", "modifyDate", "modifyUserId", "memo"];
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
public schoolId = "";    //学校编号
public schoolName = "";    //学校名称
public schoolNameA = "";    //学校简称
public idUni = "";    //id_Uni
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
case clsvXzUniZone.con_IdUniZone:
return this.idUniZone;
case clsvXzUniZone.con_UniZoneID:
return this.uniZoneID;
case clsvXzUniZone.con_UniZoneDesc:
return this.uniZoneDesc;
case clsvXzUniZone.con_UniZoneDescA:
return this.uniZoneDescA;
case clsvXzUniZone.con_IdSchool:
return this.idSchool;
case clsvXzUniZone.con_SchoolId:
return this.schoolId;
case clsvXzUniZone.con_SchoolName:
return this.schoolName;
case clsvXzUniZone.con_SchoolNameA:
return this.schoolNameA;
case clsvXzUniZone.con_IdUni:
return this.idUni;
case clsvXzUniZone.con_ModifyDate:
return this.modifyDate;
case clsvXzUniZone.con_ModifyUserId:
return this.modifyUserId;
case clsvXzUniZone.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vXzUniZone]中不存在!`;
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
 * 常量:"SchoolId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolId(): string {return "schoolId";}    //学校编号

 /**
 * 常量:"SchoolName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolName(): string {return "schoolName";}    //学校名称

 /**
 * 常量:"SchoolNameA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolNameA(): string {return "schoolNameA";}    //学校简称

 /**
 * 常量:"IdUni"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUni(): string {return "idUni";}    //id_Uni

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
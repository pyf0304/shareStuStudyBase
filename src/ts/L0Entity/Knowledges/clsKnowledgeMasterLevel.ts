
 /**
 * 类名:clsKnowledgeMasterLevel
 * 表名:KnowledgeMasterLevel(01120891)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:49
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点掌握度(KnowledgeMasterLevel)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsKnowledgeMasterLevel 
{
public static _CurrTabName= "KnowledgeMasterLevel"; //当前表名,与该类相关的表名
public static _KeyFldName= "MasterLevelId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["masterLevelId", "masterLevelName", "levelMinValue", "levelMaxValue", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public masterLevelId = "";    //掌握度Id
public masterLevelName = "";    //掌握等级
public levelMinValue = 0;    //最小值
public levelMaxValue = 0;    //最大值
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
case clsKnowledgeMasterLevel.con_MasterLevelId:
return this.masterLevelId;
case clsKnowledgeMasterLevel.con_MasterLevelName:
return this.masterLevelName;
case clsKnowledgeMasterLevel.con_LevelMinValue:
return this.levelMinValue;
case clsKnowledgeMasterLevel.con_LevelMaxValue:
return this.levelMaxValue;
case clsKnowledgeMasterLevel.con_UpdDate:
return this.updDate;
case clsKnowledgeMasterLevel.con_UpdUser:
return this.updUser;
case clsKnowledgeMasterLevel.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeMasterLevel]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"MasterLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterLevelId(): string {return "masterLevelId";}    //掌握度Id

 /**
 * 常量:"MasterLevelName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterLevelName(): string {return "masterLevelName";}    //掌握等级

 /**
 * 常量:"LevelMinValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelMinValue(): string {return "levelMinValue";}    //最小值

 /**
 * 常量:"LevelMaxValue"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelMaxValue(): string {return "levelMaxValue";}    //最大值

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
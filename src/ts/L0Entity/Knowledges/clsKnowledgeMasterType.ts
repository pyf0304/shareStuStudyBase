
 /**
 * 类名:clsKnowledgeMasterType
 * 表名:KnowledgeMasterType(01120893)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:54:26
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
 * 知识点掌握类型(KnowledgeMasterType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsKnowledgeMasterType 
{
public static _CurrTabName= "KnowledgeMasterType"; //当前表名,与该类相关的表名
public static _KeyFldName= "MasterTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["masterTypeId", "masterTypeName", "masterTypeENName", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public masterTypeId = "";    //掌握类型Id
public masterTypeName = "";    //掌握类型名
public masterTypeENName = "";    //掌握类型英文名
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
case clsKnowledgeMasterType.con_MasterTypeId:
return this.masterTypeId;
case clsKnowledgeMasterType.con_MasterTypeName:
return this.masterTypeName;
case clsKnowledgeMasterType.con_MasterTypeENName:
return this.masterTypeENName;
case clsKnowledgeMasterType.con_UpdDate:
return this.updDate;
case clsKnowledgeMasterType.con_UpdUser:
return this.updUser;
case clsKnowledgeMasterType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeMasterType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"MasterTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterTypeId(): string {return "masterTypeId";}    //掌握类型Id

 /**
 * 常量:"MasterTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterTypeName(): string {return "masterTypeName";}    //掌握类型名

 /**
 * 常量:"MasterTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MasterTypeENName(): string {return "masterTypeENName";}    //掌握类型英文名

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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumKnowledgeMasterType
{
 /**
 * 主观
 **/
static readonly subjective_1 = "1";
 /**
 * 客观
 **/
static readonly objective_2 = "2";
}
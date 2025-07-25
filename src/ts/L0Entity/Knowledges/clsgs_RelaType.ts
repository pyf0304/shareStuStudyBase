
 /**
 * 类名:clsgs_RelaType
 * 表名:gs_RelaType(01120871)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:12
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
 * 知识点关系类型表(gs_RelaType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_RelaType 
{
public static _CurrTabName= "gs_RelaType"; //当前表名,与该类相关的表名
public static _KeyFldName= "RelaTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["relaTypeId", "relaTypeName", "relaTypeENName", "updDate", "memo", "updUser"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public relaTypeId = "";    //关系类型Id
public relaTypeName = "";    //关系类型名
public relaTypeENName = "";    //关系类型英文名
public updDate = "";    //修改日期
public memo = "";    //备注
public updUser = "";    //修改人

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
case clsgs_RelaType.con_RelaTypeId:
return this.relaTypeId;
case clsgs_RelaType.con_RelaTypeName:
return this.relaTypeName;
case clsgs_RelaType.con_RelaTypeENName:
return this.relaTypeENName;
case clsgs_RelaType.con_UpdDate:
return this.updDate;
case clsgs_RelaType.con_Memo:
return this.memo;
case clsgs_RelaType.con_UpdUser:
return this.updUser;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_RelaType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"RelaTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaTypeId(): string {return "relaTypeId";}    //关系类型Id

 /**
 * 常量:"RelaTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaTypeName(): string {return "relaTypeName";}    //关系类型名

 /**
 * 常量:"RelaTypeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaTypeENName(): string {return "relaTypeENName";}    //关系类型英文名

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumgs_RelaType
{
 /**
 * 相关
 **/
static readonly Related_01 = "01";
 /**
 * 包含
 **/
static readonly Include_02 = "02";
}
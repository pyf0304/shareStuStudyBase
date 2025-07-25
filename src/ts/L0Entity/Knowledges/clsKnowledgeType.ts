
 /**
 * 类名:clsKnowledgeType
 * 表名:KnowledgeType(01120890)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:45
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
 * 知识点类型(KnowledgeType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsKnowledgeType 
{
public static _CurrTabName= "KnowledgeType"; //当前表名,与该类相关的表名
public static _KeyFldName= "KnowledgeTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["knowledgeTypeId", "knowledgeTypeName", "courseId", "orderNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public knowledgeTypeId = "";    //知识点类型Id
public knowledgeTypeName = "";    //知识点类型名
public courseId = "";    //课程Id
public orderNum = 0;    //序号
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
case clsKnowledgeType.con_KnowledgeTypeId:
return this.knowledgeTypeId;
case clsKnowledgeType.con_KnowledgeTypeName:
return this.knowledgeTypeName;
case clsKnowledgeType.con_CourseId:
return this.courseId;
case clsKnowledgeType.con_OrderNum:
return this.orderNum;
case clsKnowledgeType.con_UpdDate:
return this.updDate;
case clsKnowledgeType.con_UpdUser:
return this.updUser;
case clsKnowledgeType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KnowledgeType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"KnowledgeTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTypeId(): string {return "knowledgeTypeId";}    //知识点类型Id

 /**
 * 常量:"KnowledgeTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTypeName(): string {return "knowledgeTypeName";}    //知识点类型名

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
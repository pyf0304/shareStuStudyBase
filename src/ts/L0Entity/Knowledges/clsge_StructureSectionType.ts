
 /**
 * 类名:clsge_StructureSectionType
 * 表名:ge_StructureSectionType(01120901)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:25
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
 * 节点类型(ge_StructureSectionType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_StructureSectionType 
{
public static _CurrTabName= "ge_StructureSectionType"; //当前表名,与该类相关的表名
public static _KeyFldName= "SectionTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["sectionTypeId", "sectionTypeName", "sectionTypeEnName", "courseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public sectionTypeId = "";    //节点类型Id
public sectionTypeName = "";    //节点类型名称
public sectionTypeEnName = "";    //节点类型英文名称
public courseId = "";    //课程Id
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
case clsge_StructureSectionType.con_SectionTypeId:
return this.sectionTypeId;
case clsge_StructureSectionType.con_SectionTypeName:
return this.sectionTypeName;
case clsge_StructureSectionType.con_SectionTypeEnName:
return this.sectionTypeEnName;
case clsge_StructureSectionType.con_CourseId:
return this.courseId;
case clsge_StructureSectionType.con_UpdDate:
return this.updDate;
case clsge_StructureSectionType.con_UpdUser:
return this.updUser;
case clsge_StructureSectionType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureSectionType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"SectionTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionTypeName(): string {return "sectionTypeName";}    //节点类型名称

 /**
 * 常量:"SectionTypeEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionTypeEnName(): string {return "sectionTypeEnName";}    //节点类型英文名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

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
 export class enumge_StructureSectionType
{
 /**
 * 类型1
 **/
static readonly Type1_00000001 = "00000001";
 /**
 * 类型2
 **/
static readonly Type2_00000002 = "00000002";
 /**
 * 类型3
 **/
static readonly Type3_00000003 = "00000003";
 /**
 * 类型4
 **/
static readonly Type4_00000004 = "00000004";
 /**
 * 类型1
 **/
static readonly Type1_00000005 = "00000005";
 /**
 * 类型5
 **/
static readonly Type5_00000006 = "00000006";
 /**
 * 文档的对象模型
 **/
static readonly FileObjModule_00000007 = "00000007";
 /**
 * 事件处理
 **/
static readonly EventAccess_00000008 = "00000008";
 /**
 * AAA2
 **/
static readonly BBB_00000010 = "00000010";
 /**
 * DDD
 **/
static readonly D_00000012 = "00000012";
 /**
 * EEE
 **/
static readonly E_00000013 = "00000013";
 /**
 * FF
 **/
static readonly F_00000014 = "00000014";
}
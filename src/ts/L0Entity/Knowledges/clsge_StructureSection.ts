
 /**
 * 类名:clsge_StructureSection
 * 表名:ge_StructureSection(01120896)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:20
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
 * 结构章节(ge_StructureSection)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsge_StructureSection 
{
public static _CurrTabName= "ge_StructureSection"; //当前表名,与该类相关的表名
public static _KeyFldName= "StructureSectionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["structureSectionId", "structureSectionName", "structureSectionContent", "courseId", "isShow", "updDate", "updUser", "memo", "sectionTypeId", "direction", "isExpanded", "isRoot", "parentId", "orderNum"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public structureSectionId = "";    //结构章节Id
public structureSectionName = "";    //结构章节名称
public structureSectionContent = "";    //结构章节内容
public courseId = "";    //课程Id
public isShow = false;    //是否启用
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public sectionTypeId = "";    //节点类型Id
public direction = "";    //方向
public isExpanded = false;    //是否扩展
public isRoot = false;    //IsRoot
public parentId = "";    //父节点Id
public orderNum = 0;    //序号

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
case clsge_StructureSection.con_StructureSectionId:
return this.structureSectionId;
case clsge_StructureSection.con_StructureSectionName:
return this.structureSectionName;
case clsge_StructureSection.con_StructureSectionContent:
return this.structureSectionContent;
case clsge_StructureSection.con_CourseId:
return this.courseId;
case clsge_StructureSection.con_IsShow:
return this.isShow;
case clsge_StructureSection.con_UpdDate:
return this.updDate;
case clsge_StructureSection.con_UpdUser:
return this.updUser;
case clsge_StructureSection.con_Memo:
return this.memo;
case clsge_StructureSection.con_SectionTypeId:
return this.sectionTypeId;
case clsge_StructureSection.con_Direction:
return this.direction;
case clsge_StructureSection.con_IsExpanded:
return this.isExpanded;
case clsge_StructureSection.con_IsRoot:
return this.isRoot;
case clsge_StructureSection.con_ParentId:
return this.parentId;
case clsge_StructureSection.con_OrderNum:
return this.orderNum;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureSection]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"StructureSectionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureSectionId(): string {return "structureSectionId";}    //结构章节Id

 /**
 * 常量:"StructureSectionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureSectionName(): string {return "structureSectionName";}    //结构章节名称

 /**
 * 常量:"StructureSectionContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StructureSectionContent(): string {return "structureSectionContent";}    //结构章节内容

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

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

 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"Direction"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Direction(): string {return "direction";}    //方向

 /**
 * 常量:"IsExpanded"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsExpanded(): string {return "isExpanded";}    //是否扩展

 /**
 * 常量:"IsRoot"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRoot(): string {return "isRoot";}    //IsRoot

 /**
 * 常量:"ParentId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentId(): string {return "parentId";}    //父节点Id

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号
}
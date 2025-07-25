
 /**
 * 类名:clsgs_KnowledgesLogicRela
 * 表名:gs_KnowledgesLogicRela(01120870)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:08
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
 * 知识点逻辑关系表(gs_KnowledgesLogicRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_KnowledgesLogicRela 
{
public static _CurrTabName= "gs_KnowledgesLogicRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["mId", "courseKnowledgeIdA", "knowledgeTitleA", "courseKnowledgeIdB", "knowledgeTitleB", "knowledgeGraphId", "sourceAnchor", "targetAnchor", "relaTitle", "relaTypeId", "courseId", "updUser", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseKnowledgeIdA = "";    //课程知识点AId
public knowledgeTitleA = "";    //课程知识点标题A
public courseKnowledgeIdB = "";    //课程知识点BId
public knowledgeTitleB = "";    //课程知识点标题B
public knowledgeGraphId = "";    //知识点图Id
public sourceAnchor = "";    //源锚点
public targetAnchor = "";    //目标锚点
public relaTitle = "";    //关系标题
public relaTypeId = "";    //关系类型Id
public courseId = "";    //课程Id
public updUser = "";    //修改人
public updDate = "";    //修改日期
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
case clsgs_KnowledgesLogicRela.con_mId:
return this.mId;
case clsgs_KnowledgesLogicRela.con_CourseKnowledgeIdA:
return this.courseKnowledgeIdA;
case clsgs_KnowledgesLogicRela.con_KnowledgeTitleA:
return this.knowledgeTitleA;
case clsgs_KnowledgesLogicRela.con_CourseKnowledgeIdB:
return this.courseKnowledgeIdB;
case clsgs_KnowledgesLogicRela.con_KnowledgeTitleB:
return this.knowledgeTitleB;
case clsgs_KnowledgesLogicRela.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsgs_KnowledgesLogicRela.con_SourceAnchor:
return this.sourceAnchor;
case clsgs_KnowledgesLogicRela.con_TargetAnchor:
return this.targetAnchor;
case clsgs_KnowledgesLogicRela.con_RelaTitle:
return this.relaTitle;
case clsgs_KnowledgesLogicRela.con_RelaTypeId:
return this.relaTypeId;
case clsgs_KnowledgesLogicRela.con_CourseId:
return this.courseId;
case clsgs_KnowledgesLogicRela.con_UpdUser:
return this.updUser;
case clsgs_KnowledgesLogicRela.con_UpdDate:
return this.updDate;
case clsgs_KnowledgesLogicRela.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesLogicRela]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"CourseKnowledgeIdA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeIdA(): string {return "courseKnowledgeIdA";}    //课程知识点AId

 /**
 * 常量:"KnowledgeTitleA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTitleA(): string {return "knowledgeTitleA";}    //课程知识点标题A

 /**
 * 常量:"CourseKnowledgeIdB"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeIdB(): string {return "courseKnowledgeIdB";}    //课程知识点BId

 /**
 * 常量:"KnowledgeTitleB"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTitleB(): string {return "knowledgeTitleB";}    //课程知识点标题B

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"SourceAnchor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SourceAnchor(): string {return "sourceAnchor";}    //源锚点

 /**
 * 常量:"TargetAnchor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TargetAnchor(): string {return "targetAnchor";}    //目标锚点

 /**
 * 常量:"RelaTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaTitle(): string {return "relaTitle";}    //关系标题

 /**
 * 常量:"RelaTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RelaTypeId(): string {return "relaTypeId";}    //关系类型Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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
}

 /**
 * 类名:clsgs_KnowledgesLogic
 * 表名:gs_KnowledgesLogic(01120872)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:16
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
 * 知识点逻辑(gs_KnowledgesLogic)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_KnowledgesLogic 
{
public static _CurrTabName= "gs_KnowledgesLogic"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["mId", "courseKnowledgeId", "knowledgeTitle", "xPosition", "yPosition", "knowledgeGraphId", "nodeColor", "logicNodeId", "classNameCss", "courseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public courseKnowledgeId = "";    //知识点Id
public knowledgeTitle = "";    //知识点标题
public xPosition = 0.0;    //X_坐标
public yPosition = 0.0;    //Y_坐标
public knowledgeGraphId = "";    //知识点图Id
public nodeColor = "";    //结点颜色
public logicNodeId = "";    //逻辑节点Id
public classNameCss = "";    //样式名称
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
case clsgs_KnowledgesLogic.con_mId:
return this.mId;
case clsgs_KnowledgesLogic.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsgs_KnowledgesLogic.con_KnowledgeTitle:
return this.knowledgeTitle;
case clsgs_KnowledgesLogic.con_XPosition:
return this.xPosition;
case clsgs_KnowledgesLogic.con_YPosition:
return this.yPosition;
case clsgs_KnowledgesLogic.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsgs_KnowledgesLogic.con_NodeColor:
return this.nodeColor;
case clsgs_KnowledgesLogic.con_LogicNodeId:
return this.logicNodeId;
case clsgs_KnowledgesLogic.con_ClassNameCss:
return this.classNameCss;
case clsgs_KnowledgesLogic.con_CourseId:
return this.courseId;
case clsgs_KnowledgesLogic.con_UpdDate:
return this.updDate;
case clsgs_KnowledgesLogic.con_UpdUser:
return this.updUser;
case clsgs_KnowledgesLogic.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesLogic]中不存在!`;
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
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"KnowledgeTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTitle(): string {return "knowledgeTitle";}    //知识点标题

 /**
 * 常量:"XPosition"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_XPosition(): string {return "xPosition";}    //X_坐标

 /**
 * 常量:"YPosition"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_YPosition(): string {return "yPosition";}    //Y_坐标

 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"NodeColor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_NodeColor(): string {return "nodeColor";}    //结点颜色

 /**
 * 常量:"LogicNodeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LogicNodeId(): string {return "logicNodeId";}    //逻辑节点Id

 /**
 * 常量:"ClassNameCss"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClassNameCss(): string {return "classNameCss";}    //样式名称

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
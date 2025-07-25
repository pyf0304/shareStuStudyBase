
 /**
 * 类名:clscc_CourseKnowledges
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/08 09:49:06
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
 * 知识点(cc_CourseKnowledges)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_CourseKnowledges 
{
public static _CurrTabName= "cc_CourseKnowledges"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseKnowledgeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 21;
public static AttributeName = ["courseKnowledgeId", "knowledgeName", "knowledgeTitle", "knowledgeContent", "knowledgeModuleId", "kpSourceId", "levelNo", "courseId", "knowledgeTypeId", "courseChapterId", "moduleWeight", "inUse", "userId", "isShow", "isCast", "likeCount", "questionNum", "orderNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseKnowledgeId = "";    //知识点Id
public knowledgeName = "";    //知识点名称
public knowledgeTitle = "";    //知识点标题
public knowledgeContent = "";    //知识点内容
public knowledgeModuleId = "";    //知识点模块Id
public kpSourceId = "";    //知识点来源Id
public levelNo = 0;    //等级No
public courseId = "";    //课程Id
public knowledgeTypeId = "";    //知识点类型Id
public courseChapterId = "";    //课程章节ID
public moduleWeight = 0;    //模块权重
public inUse = false;    //是否在用
public userId = "";    //用户ID
public isShow = false;    //是否启用
public isCast = false;    //是否播放
public likeCount = 0;    //资源喜欢数量
public questionNum = 0;    //题目数
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
case clscc_CourseKnowledges.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clscc_CourseKnowledges.con_KnowledgeName:
return this.knowledgeName;
case clscc_CourseKnowledges.con_KnowledgeTitle:
return this.knowledgeTitle;
case clscc_CourseKnowledges.con_KnowledgeContent:
return this.knowledgeContent;
case clscc_CourseKnowledges.con_KnowledgeModuleId:
return this.knowledgeModuleId;
case clscc_CourseKnowledges.con_KpSourceId:
return this.kpSourceId;
case clscc_CourseKnowledges.con_LevelNo:
return this.levelNo;
case clscc_CourseKnowledges.con_CourseId:
return this.courseId;
case clscc_CourseKnowledges.con_KnowledgeTypeId:
return this.knowledgeTypeId;
case clscc_CourseKnowledges.con_CourseChapterId:
return this.courseChapterId;
case clscc_CourseKnowledges.con_ModuleWeight:
return this.moduleWeight;
case clscc_CourseKnowledges.con_InUse:
return this.inUse;
case clscc_CourseKnowledges.con_UserId:
return this.userId;
case clscc_CourseKnowledges.con_IsShow:
return this.isShow;
case clscc_CourseKnowledges.con_IsCast:
return this.isCast;
case clscc_CourseKnowledges.con_LikeCount:
return this.likeCount;
case clscc_CourseKnowledges.con_QuestionNum:
return this.questionNum;
case clscc_CourseKnowledges.con_OrderNum:
return this.orderNum;
case clscc_CourseKnowledges.con_UpdDate:
return this.updDate;
case clscc_CourseKnowledges.con_UpdUser:
return this.updUser;
case clscc_CourseKnowledges.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseKnowledges]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"KnowledgeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeName(): string {return "knowledgeName";}    //知识点名称

 /**
 * 常量:"KnowledgeTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTitle(): string {return "knowledgeTitle";}    //知识点标题

 /**
 * 常量:"KnowledgeContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeContent(): string {return "knowledgeContent";}    //知识点内容

 /**
 * 常量:"KnowledgeModuleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeModuleId(): string {return "knowledgeModuleId";}    //知识点模块Id

 /**
 * 常量:"KpSourceId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KpSourceId(): string {return "kpSourceId";}    //知识点来源Id

 /**
 * 常量:"LevelNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LevelNo(): string {return "levelNo";}    //等级No

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"KnowledgeTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeTypeId(): string {return "knowledgeTypeId";}    //知识点类型Id

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"ModuleWeight"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModuleWeight(): string {return "moduleWeight";}    //模块权重

 /**
 * 常量:"InUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"IsCast"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCast(): string {return "isCast";}    //是否播放

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

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
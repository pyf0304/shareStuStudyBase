
 /**
 * 类名:clsvcc_KnowledgesExamLibRela
 * 表名:vcc_KnowledgesExamLibRela(01120142)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:55:12
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
 * v知识点习题关系(vcc_KnowledgesExamLibRela)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvcc_KnowledgesExamLibRela 
{
public static _CurrTabName= "vcc_KnowledgesExamLibRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 22;
public static AttributeName = ["mId", "questionId", "questionIndex", "questionName", "questionContent", "chapterNameSim", "sectionNameSim", "courseId", "positiveCorrelation", "courseKnowledgeId", "knowledgeName", "knowledgeTitle", "knowledgeContent", "courseName", "courseChapterId", "chapterId", "negativeCorrelation", "updDate", "updUserId", "memo", "chapterNameSim4Question", "sectionNameSim4Question"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public questionId = 0;    //题目Id
public questionIndex = 0;    //题目序号
public questionName = "";    //题目名称
public questionContent = "";    //题目内容
public chapterNameSim = "";    //章名简称
public sectionNameSim = "";    //节名简称
public courseId = "";    //课程Id
public positiveCorrelation = 0;    //正相关度
public courseKnowledgeId = "";    //知识点Id
public knowledgeName = "";    //知识点名称
public knowledgeTitle = "";    //知识点标题
public knowledgeContent = "";    //知识点内容
public courseName = "";    //课程名称
public courseChapterId = "";    //课程章节ID
public chapterId = "";    //章Id
public negativeCorrelation = 0;    //负相关度
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
public memo = "";    //备注
public chapterNameSim4Question = "";    //章简称4Question
public sectionNameSim4Question = "";    //节简称4Question

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
case clsvcc_KnowledgesExamLibRela.con_mId:
return this.mId;
case clsvcc_KnowledgesExamLibRela.con_QuestionId:
return this.questionId;
case clsvcc_KnowledgesExamLibRela.con_QuestionIndex:
return this.questionIndex;
case clsvcc_KnowledgesExamLibRela.con_QuestionName:
return this.questionName;
case clsvcc_KnowledgesExamLibRela.con_QuestionContent:
return this.questionContent;
case clsvcc_KnowledgesExamLibRela.con_ChapterNameSim:
return this.chapterNameSim;
case clsvcc_KnowledgesExamLibRela.con_SectionNameSim:
return this.sectionNameSim;
case clsvcc_KnowledgesExamLibRela.con_CourseId:
return this.courseId;
case clsvcc_KnowledgesExamLibRela.con_PositiveCorrelation:
return this.positiveCorrelation;
case clsvcc_KnowledgesExamLibRela.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsvcc_KnowledgesExamLibRela.con_KnowledgeName:
return this.knowledgeName;
case clsvcc_KnowledgesExamLibRela.con_KnowledgeTitle:
return this.knowledgeTitle;
case clsvcc_KnowledgesExamLibRela.con_KnowledgeContent:
return this.knowledgeContent;
case clsvcc_KnowledgesExamLibRela.con_CourseName:
return this.courseName;
case clsvcc_KnowledgesExamLibRela.con_CourseChapterId:
return this.courseChapterId;
case clsvcc_KnowledgesExamLibRela.con_ChapterId:
return this.chapterId;
case clsvcc_KnowledgesExamLibRela.con_NegativeCorrelation:
return this.negativeCorrelation;
case clsvcc_KnowledgesExamLibRela.con_UpdDate:
return this.updDate;
case clsvcc_KnowledgesExamLibRela.con_UpdUserId:
return this.updUserId;
case clsvcc_KnowledgesExamLibRela.con_Memo:
return this.memo;
case clsvcc_KnowledgesExamLibRela.con_ChapterNameSim4Question:
return this.chapterNameSim4Question;
case clsvcc_KnowledgesExamLibRela.con_SectionNameSim4Question:
return this.sectionNameSim4Question;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_KnowledgesExamLibRela]中不存在!`;
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
 * 常量:"QuestionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"QuestionIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionIndex(): string {return "questionIndex";}    //题目序号

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"QuestionContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionContent(): string {return "questionContent";}    //题目内容

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"SectionNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionNameSim(): string {return "sectionNameSim";}    //节名简称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"PositiveCorrelation"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PositiveCorrelation(): string {return "positiveCorrelation";}    //正相关度

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
 * 常量:"CourseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"ChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterId(): string {return "chapterId";}    //章Id

 /**
 * 常量:"NegativeCorrelation"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_NegativeCorrelation(): string {return "negativeCorrelation";}    //负相关度

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ChapterNameSim4Question"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterNameSim4Question(): string {return "chapterNameSim4Question";}    //章简称4Question

 /**
 * 常量:"SectionNameSim4Question"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionNameSim4Question(): string {return "sectionNameSim4Question";}    //节简称4Question
}
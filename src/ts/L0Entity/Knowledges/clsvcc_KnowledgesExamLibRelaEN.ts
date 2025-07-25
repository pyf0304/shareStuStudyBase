
 /**
 * 类名:clsvcc_KnowledgesExamLibRelaEN
 * 表名:vcc_KnowledgesExamLibRela(01120142)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:55:10
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v知识点习题关系(vcc_KnowledgesExamLibRela)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvcc_KnowledgesExamLibRelaEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "02"; //identity
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vcc_KnowledgesExamLibRela"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 22;
public static AttributeName = ["mId", "questionId", "questionIndex", "questionName", "questionContent", "chapterNameSim", "sectionNameSim", "courseId", "positiveCorrelation", "courseKnowledgeId", "knowledgeName", "knowledgeTitle", "knowledgeContent", "courseName", "courseChapterId", "chapterId", "negativeCorrelation", "updDate", "updUserId", "memo", "chapterNameSim4Question", "sectionNameSim4Question"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsvcc_KnowledgesExamLibRelaEN.con_mId:
return this.mId;
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionId:
return this.questionId;
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionIndex:
return this.questionIndex;
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionName:
return this.questionName;
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionContent:
return this.questionContent;
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim:
return this.chapterNameSim;
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim:
return this.sectionNameSim;
case clsvcc_KnowledgesExamLibRelaEN.con_CourseId:
return this.courseId;
case clsvcc_KnowledgesExamLibRelaEN.con_PositiveCorrelation:
return this.positiveCorrelation;
case clsvcc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeName:
return this.knowledgeName;
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeTitle:
return this.knowledgeTitle;
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeContent:
return this.knowledgeContent;
case clsvcc_KnowledgesExamLibRelaEN.con_CourseName:
return this.courseName;
case clsvcc_KnowledgesExamLibRelaEN.con_CourseChapterId:
return this.courseChapterId;
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterId:
return this.chapterId;
case clsvcc_KnowledgesExamLibRelaEN.con_NegativeCorrelation:
return this.negativeCorrelation;
case clsvcc_KnowledgesExamLibRelaEN.con_UpdDate:
return this.updDate;
case clsvcc_KnowledgesExamLibRelaEN.con_UpdUserId:
return this.updUserId;
case clsvcc_KnowledgesExamLibRelaEN.con_Memo:
return this.memo;
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim4Question:
return this.chapterNameSim4Question;
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim4Question:
return this.sectionNameSim4Question;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_KnowledgesExamLibRela]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsvcc_KnowledgesExamLibRelaEN.con_mId:
this.mId = Number(strValue);
break;
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionId:
this.questionId = Number(strValue);
break;
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionIndex:
this.questionIndex = Number(strValue);
break;
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionName:
this.questionName = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_QuestionContent:
this.questionContent = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim:
this.chapterNameSim = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim:
this.sectionNameSim = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_CourseId:
this.courseId = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_PositiveCorrelation:
this.positiveCorrelation = Number(strValue);
break;
case clsvcc_KnowledgesExamLibRelaEN.con_CourseKnowledgeId:
this.courseKnowledgeId = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeName:
this.knowledgeName = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeTitle:
this.knowledgeTitle = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_KnowledgeContent:
this.knowledgeContent = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_CourseName:
this.courseName = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_CourseChapterId:
this.courseChapterId = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterId:
this.chapterId = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_NegativeCorrelation:
this.negativeCorrelation = Number(strValue);
break;
case clsvcc_KnowledgesExamLibRelaEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_UpdUserId:
this.updUserId = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_Memo:
this.memo = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_ChapterNameSim4Question:
this.chapterNameSim4Question = strValue;
break;
case clsvcc_KnowledgesExamLibRelaEN.con_SectionNameSim4Question:
this.sectionNameSim4Question = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_KnowledgesExamLibRela]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"mId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"QuestionId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionId(): string {return "questionId";}    //题目Id

 /**
 * 常量:"QuestionIndex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionIndex(): string {return "questionIndex";}    //题目序号

 /**
 * 常量:"QuestionName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionName(): string {return "questionName";}    //题目名称

 /**
 * 常量:"QuestionContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionContent(): string {return "questionContent";}    //题目内容

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"SectionNameSim"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionNameSim(): string {return "sectionNameSim";}    //节名简称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"PositiveCorrelation"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PositiveCorrelation(): string {return "positiveCorrelation";}    //正相关度

 /**
 * 常量:"CourseKnowledgeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseKnowledgeId(): string {return "courseKnowledgeId";}    //知识点Id

 /**
 * 常量:"KnowledgeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeName(): string {return "knowledgeName";}    //知识点名称

 /**
 * 常量:"KnowledgeTitle"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeTitle(): string {return "knowledgeTitle";}    //知识点标题

 /**
 * 常量:"KnowledgeContent"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeContent(): string {return "knowledgeContent";}    //知识点内容

 /**
 * 常量:"CourseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"ChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterId(): string {return "chapterId";}    //章Id

 /**
 * 常量:"NegativeCorrelation"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_NegativeCorrelation(): string {return "negativeCorrelation";}    //负相关度

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUserId(): string {return "updUserId";}    //修改用户Id

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"ChapterNameSim4Question"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ChapterNameSim4Question(): string {return "chapterNameSim4Question";}    //章简称4Question

 /**
 * 常量:"SectionNameSim4Question"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionNameSim4Question(): string {return "sectionNameSim4Question";}    //节简称4Question

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsvcc_KnowledgesExamLibRelaEN();
const instance = new clsvcc_KnowledgesExamLibRelaEN();
return instance.hasOwnProperty(propName);
}
}
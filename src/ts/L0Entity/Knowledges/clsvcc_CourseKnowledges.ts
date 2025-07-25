﻿
 /**
 * 类名:clsvcc_CourseKnowledges
 * 表名:vcc_CourseKnowledges(01120141)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:31:25
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v课程知识点(vcc_CourseKnowledges)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvcc_CourseKnowledges 
{
public static _CurrTabName= "vcc_CourseKnowledges"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseKnowledgeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["courseKnowledgeId", "knowledgeName", "knowledgeTitle", "knowledgeContent", "courseId", "courseCode", "courseName", "courseChapterId", "userId", "chapterId", "uploadDate", "sectionId", "isShow", "chapterName", "isCast", "sectionName", "likeCount", "chapterNameSim", "updDate", "sectionNameSim", "memo", "questionNum", "orderNum", "updUser", "knowledgeTypeId", "knowledgeTypeName"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseKnowledgeId = "";    //知识点Id
public knowledgeName = "";    //知识点名称
public knowledgeTitle = "";    //知识点标题
public knowledgeContent = "";    //知识点内容
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseName = "";    //课程名称
public courseChapterId = "";    //课程章节ID
public userId = "";    //用户ID
public chapterId = "";    //章Id
public uploadDate = "";    //上传时间
public sectionId = "";    //节Id
public isShow = false;    //是否启用
public chapterName = "";    //章名
public isCast = false;    //是否播放
public sectionName = "";    //节名
public likeCount = 0;    //资源喜欢数量
public chapterNameSim = "";    //章名简称
public updDate = "";    //修改日期
public sectionNameSim = "";    //节名简称
public memo = "";    //备注
public questionNum = 0;    //题目数
public orderNum = 0;    //序号
public updUser = "";    //修改人
public knowledgeTypeId = "";    //知识点类型Id
public knowledgeTypeName = "";    //知识点类型名

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
case clsvcc_CourseKnowledges.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clsvcc_CourseKnowledges.con_KnowledgeName:
return this.knowledgeName;
case clsvcc_CourseKnowledges.con_KnowledgeTitle:
return this.knowledgeTitle;
case clsvcc_CourseKnowledges.con_KnowledgeContent:
return this.knowledgeContent;
case clsvcc_CourseKnowledges.con_CourseId:
return this.courseId;
case clsvcc_CourseKnowledges.con_CourseCode:
return this.courseCode;
case clsvcc_CourseKnowledges.con_CourseName:
return this.courseName;
case clsvcc_CourseKnowledges.con_CourseChapterId:
return this.courseChapterId;
case clsvcc_CourseKnowledges.con_UserId:
return this.userId;
case clsvcc_CourseKnowledges.con_ChapterId:
return this.chapterId;
case clsvcc_CourseKnowledges.con_UploadDate:
return this.uploadDate;
case clsvcc_CourseKnowledges.con_SectionId:
return this.sectionId;
case clsvcc_CourseKnowledges.con_IsShow:
return this.isShow;
case clsvcc_CourseKnowledges.con_ChapterName:
return this.chapterName;
case clsvcc_CourseKnowledges.con_IsCast:
return this.isCast;
case clsvcc_CourseKnowledges.con_SectionName:
return this.sectionName;
case clsvcc_CourseKnowledges.con_LikeCount:
return this.likeCount;
case clsvcc_CourseKnowledges.con_ChapterNameSim:
return this.chapterNameSim;
case clsvcc_CourseKnowledges.con_UpdDate:
return this.updDate;
case clsvcc_CourseKnowledges.con_SectionNameSim:
return this.sectionNameSim;
case clsvcc_CourseKnowledges.con_Memo:
return this.memo;
case clsvcc_CourseKnowledges.con_QuestionNum:
return this.questionNum;
case clsvcc_CourseKnowledges.con_OrderNum:
return this.orderNum;
case clsvcc_CourseKnowledges.con_UpdUser:
return this.updUser;
case clsvcc_CourseKnowledges.con_KnowledgeTypeId:
return this.knowledgeTypeId;
case clsvcc_CourseKnowledges.con_KnowledgeTypeName:
return this.knowledgeTypeName;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_CourseKnowledges]中不存在!`;
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
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CourseCode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseCode(): string {return "courseCode";}    //课程代码

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
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"ChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterId(): string {return "chapterId";}    //章Id

 /**
 * 常量:"UploadDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UploadDate(): string {return "uploadDate";}    //上传时间

 /**
 * 常量:"SectionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionId(): string {return "sectionId";}    //节Id

 /**
 * 常量:"IsShow"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

 /**
 * 常量:"IsCast"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCast(): string {return "isCast";}    //是否播放

 /**
 * 常量:"SectionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"ChapterNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterNameSim(): string {return "chapterNameSim";}    //章名简称

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"SectionNameSim"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionNameSim(): string {return "sectionNameSim";}    //节名简称

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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
}
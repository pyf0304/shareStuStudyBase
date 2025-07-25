
 /**
 * 类名:clscc_CourseChapter
 * 表名:cc_CourseChapter(01120060)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:26:03
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
 * 课程章节(cc_CourseChapter)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_CourseChapter 
{
public static _CurrTabName= "cc_CourseChapter"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseChapterId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 25;
public static AttributeName = ["courseChapterId", "courseChapterName", "chapterId", "sectionId", "chapterName", "sectionName", "chapterNameSim", "sectionNameSim", "chapterContent", "courseId", "parentNodeId", "isOpenToAllStu", "isOpenToSchool", "isOpenToSocial", "isMustMenu", "themeName", "isFile", "isUse", "viewCount", "courseChapterReferred", "orderNum", "createDate", "editPeople", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseChapterId = "";    //课程章节ID
public courseChapterName = "";    //课程章节名称
public chapterId = "";    //章Id
public sectionId = "";    //节Id
public chapterName = "";    //章名
public sectionName = "";    //节名
public chapterNameSim = "";    //章名简称
public sectionNameSim = "";    //节名简称
public chapterContent = "";    //章节内容
public courseId = "";    //课程Id
public parentNodeId = "";    //父节点编号
public isOpenToAllStu = false;    //全校师生
public isOpenToSchool = false;    //全校师生公开
public isOpenToSocial = false;    //社会公众
public isMustMenu = false;    //是否必建栏目
public themeName = "";    //主题名
public isFile = false;    //项目或文件夹
public isUse = false;    //是否使用
public viewCount = 0;    //浏览量
public courseChapterReferred = "";    //节简称
public orderNum = 0;    //序号
public createDate = "";    //建立日期
public editPeople = "";    //修改人
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
case clscc_CourseChapter.con_CourseChapterId:
return this.courseChapterId;
case clscc_CourseChapter.con_CourseChapterName:
return this.courseChapterName;
case clscc_CourseChapter.con_ChapterId:
return this.chapterId;
case clscc_CourseChapter.con_SectionId:
return this.sectionId;
case clscc_CourseChapter.con_ChapterName:
return this.chapterName;
case clscc_CourseChapter.con_SectionName:
return this.sectionName;
case clscc_CourseChapter.con_ChapterNameSim:
return this.chapterNameSim;
case clscc_CourseChapter.con_SectionNameSim:
return this.sectionNameSim;
case clscc_CourseChapter.con_ChapterContent:
return this.chapterContent;
case clscc_CourseChapter.con_CourseId:
return this.courseId;
case clscc_CourseChapter.con_ParentNodeId:
return this.parentNodeId;
case clscc_CourseChapter.con_IsOpenToAllStu:
return this.isOpenToAllStu;
case clscc_CourseChapter.con_IsOpenToSchool:
return this.isOpenToSchool;
case clscc_CourseChapter.con_IsOpenToSocial:
return this.isOpenToSocial;
case clscc_CourseChapter.con_IsMustMenu:
return this.isMustMenu;
case clscc_CourseChapter.con_ThemeName:
return this.themeName;
case clscc_CourseChapter.con_IsFile:
return this.isFile;
case clscc_CourseChapter.con_IsUse:
return this.isUse;
case clscc_CourseChapter.con_ViewCount:
return this.viewCount;
case clscc_CourseChapter.con_CourseChapterReferred:
return this.courseChapterReferred;
case clscc_CourseChapter.con_OrderNum:
return this.orderNum;
case clscc_CourseChapter.con_CreateDate:
return this.createDate;
case clscc_CourseChapter.con_EditPeople:
return this.editPeople;
case clscc_CourseChapter.con_UpdDate:
return this.updDate;
case clscc_CourseChapter.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseChapter]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"CourseChapterName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterName(): string {return "courseChapterName";}    //课程章节名称

 /**
 * 常量:"ChapterId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterId(): string {return "chapterId";}    //章Id

 /**
 * 常量:"SectionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionId(): string {return "sectionId";}    //节Id

 /**
 * 常量:"ChapterName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterName(): string {return "chapterName";}    //章名

 /**
 * 常量:"SectionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SectionName(): string {return "sectionName";}    //节名

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
 * 常量:"ChapterContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ChapterContent(): string {return "chapterContent";}    //章节内容

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"ParentNodeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ParentNodeId(): string {return "parentNodeId";}    //父节点编号

 /**
 * 常量:"IsOpenToAllStu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOpenToAllStu(): string {return "isOpenToAllStu";}    //全校师生

 /**
 * 常量:"IsOpenToSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOpenToSchool(): string {return "isOpenToSchool";}    //全校师生公开

 /**
 * 常量:"IsOpenToSocial"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOpenToSocial(): string {return "isOpenToSocial";}    //社会公众

 /**
 * 常量:"IsMustMenu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMustMenu(): string {return "isMustMenu";}    //是否必建栏目

 /**
 * 常量:"ThemeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ThemeName(): string {return "themeName";}    //主题名

 /**
 * 常量:"IsFile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsFile(): string {return "isFile";}    //项目或文件夹

 /**
 * 常量:"IsUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

 /**
 * 常量:"ViewCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

 /**
 * 常量:"CourseChapterReferred"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseChapterReferred(): string {return "courseChapterReferred";}    //节简称

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"EditPeople"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EditPeople(): string {return "editPeople";}    //修改人

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
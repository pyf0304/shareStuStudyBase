
 /**
 * 类名:clsClsRmTeachingCase
 * 表名:ClsRmTeachingCase(01120381)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/08 09:48:27
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课堂教学(ClsRmTeaching)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 课堂教学案例(ClsRmTeachingCase)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsClsRmTeachingCase 
{
public static _CurrTabName= "ClsRmTeachingCase"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdClsRmTeachingCase"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 37;
public static AttributeName = ["idClsRmTeachingCase", "clsRmTeachingCaseID", "clsRmTeachingCaseName", "clsRmTeachingCaseTheme", "idClsRmTeachingCaseType", "clsRmTeachingCaseText", "clsRmTeachingCaseDate", "clsRmTeachingCaseTime", "clsRmTeachingCaseDateIn", "clsRmTeachingCaseTimeIn", "idStudyLevel", "idTeachingPlan", "idCaseType", "idDiscipline", "idSchool", "idDisciplinePs", "idGradeBase", "browseCount", "idSenateGaugeVersion", "idTeachSkill", "caseLevelId", "docFile", "isNeedGeneWord", "wordCreateDate", "isVisible", "ownerId", "userKindId", "userTypeId", "isDualVideo", "recommendedDegreeId", "ftpFileType", "videoUrl", "videoPath", "resErrMsg", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idClsRmTeachingCase = "";    //课堂教学案例流水号
public clsRmTeachingCaseID = "";    //课堂教学案例ID
public clsRmTeachingCaseName = "";    //课堂教学案例名称
public clsRmTeachingCaseTheme = "";    //课堂教学案例主题词
public idClsRmTeachingCaseType = "";    //课堂案例类型流水号
public clsRmTeachingCaseText = "";    //案例文本内容
public clsRmTeachingCaseDate = "";    //课堂教学日期
public clsRmTeachingCaseTime = "";    //课堂教学时间
public clsRmTeachingCaseDateIn = "";    //案例入库日期
public clsRmTeachingCaseTimeIn = "";    //案例入库时间
public idStudyLevel = "";    //学段流水号
public idTeachingPlan = "";    //教案流水号
public idCaseType = "";    //案例类型流水号
public idDiscipline = "";    //学科流水号
public idSchool = "";    //学校流水号
public idDisciplinePs = "";    //学科流水号
public idGradeBase = "";    //入学年级流水号
public browseCount = 0;    //浏览次数
public idSenateGaugeVersion = "";    //评价量表版本流水号
public idTeachSkill = "";    //教学技能流水号
public caseLevelId = "";    //课例等级Id
public docFile = "";    //生成的Word文件名
public isNeedGeneWord = false;    //是否需要生成Word
public wordCreateDate = "";    //Word生成日期
public isVisible = false;    //是否显示
public ownerId = "";    //拥有者Id
public userKindId = "";    //用户类别Id
public userTypeId = "";    //用户类型Id
public isDualVideo = false;    //是否双视频
public recommendedDegreeId = "";    //推荐度Id
public ftpFileType = "";    //ftp文件类型
public videoUrl = "";    //视频Url
public videoPath = "";    //视频目录
public resErrMsg = "";    //资源错误信息
public updDate = "";    //修改日期
public updUserId = "";    //修改用户Id
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
case clsClsRmTeachingCase.con_IdClsRmTeachingCase:
return this.idClsRmTeachingCase;
case clsClsRmTeachingCase.con_ClsRmTeachingCaseID:
return this.clsRmTeachingCaseID;
case clsClsRmTeachingCase.con_ClsRmTeachingCaseName:
return this.clsRmTeachingCaseName;
case clsClsRmTeachingCase.con_ClsRmTeachingCaseTheme:
return this.clsRmTeachingCaseTheme;
case clsClsRmTeachingCase.con_IdClsRmTeachingCaseType:
return this.idClsRmTeachingCaseType;
case clsClsRmTeachingCase.con_ClsRmTeachingCaseText:
return this.clsRmTeachingCaseText;
case clsClsRmTeachingCase.con_ClsRmTeachingCaseDate:
return this.clsRmTeachingCaseDate;
case clsClsRmTeachingCase.con_ClsRmTeachingCaseTime:
return this.clsRmTeachingCaseTime;
case clsClsRmTeachingCase.con_ClsRmTeachingCaseDateIn:
return this.clsRmTeachingCaseDateIn;
case clsClsRmTeachingCase.con_ClsRmTeachingCaseTimeIn:
return this.clsRmTeachingCaseTimeIn;
case clsClsRmTeachingCase.con_IdStudyLevel:
return this.idStudyLevel;
case clsClsRmTeachingCase.con_IdTeachingPlan:
return this.idTeachingPlan;
case clsClsRmTeachingCase.con_IdCaseType:
return this.idCaseType;
case clsClsRmTeachingCase.con_IdDiscipline:
return this.idDiscipline;
case clsClsRmTeachingCase.con_IdSchool:
return this.idSchool;
case clsClsRmTeachingCase.con_IdDisciplinePs:
return this.idDisciplinePs;
case clsClsRmTeachingCase.con_IdGradeBase:
return this.idGradeBase;
case clsClsRmTeachingCase.con_BrowseCount:
return this.browseCount;
case clsClsRmTeachingCase.con_IdSenateGaugeVersion:
return this.idSenateGaugeVersion;
case clsClsRmTeachingCase.con_IdTeachSkill:
return this.idTeachSkill;
case clsClsRmTeachingCase.con_CaseLevelId:
return this.caseLevelId;
case clsClsRmTeachingCase.con_DocFile:
return this.docFile;
case clsClsRmTeachingCase.con_IsNeedGeneWord:
return this.isNeedGeneWord;
case clsClsRmTeachingCase.con_WordCreateDate:
return this.wordCreateDate;
case clsClsRmTeachingCase.con_IsVisible:
return this.isVisible;
case clsClsRmTeachingCase.con_OwnerId:
return this.ownerId;
case clsClsRmTeachingCase.con_UserKindId:
return this.userKindId;
case clsClsRmTeachingCase.con_UserTypeId:
return this.userTypeId;
case clsClsRmTeachingCase.con_IsDualVideo:
return this.isDualVideo;
case clsClsRmTeachingCase.con_RecommendedDegreeId:
return this.recommendedDegreeId;
case clsClsRmTeachingCase.con_ftpFileType:
return this.ftpFileType;
case clsClsRmTeachingCase.con_VideoUrl:
return this.videoUrl;
case clsClsRmTeachingCase.con_VideoPath:
return this.videoPath;
case clsClsRmTeachingCase.con_ResErrMsg:
return this.resErrMsg;
case clsClsRmTeachingCase.con_UpdDate:
return this.updDate;
case clsClsRmTeachingCase.con_UpdUserId:
return this.updUserId;
case clsClsRmTeachingCase.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ClsRmTeachingCase]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdClsRmTeachingCase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdClsRmTeachingCase(): string {return "idClsRmTeachingCase";}    //课堂教学案例流水号

 /**
 * 常量:"ClsRmTeachingCaseID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseID(): string {return "clsRmTeachingCaseID";}    //课堂教学案例ID

 /**
 * 常量:"ClsRmTeachingCaseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseName(): string {return "clsRmTeachingCaseName";}    //课堂教学案例名称

 /**
 * 常量:"ClsRmTeachingCaseTheme"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseTheme(): string {return "clsRmTeachingCaseTheme";}    //课堂教学案例主题词

 /**
 * 常量:"IdClsRmTeachingCaseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdClsRmTeachingCaseType(): string {return "idClsRmTeachingCaseType";}    //课堂案例类型流水号

 /**
 * 常量:"ClsRmTeachingCaseText"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseText(): string {return "clsRmTeachingCaseText";}    //案例文本内容

 /**
 * 常量:"ClsRmTeachingCaseDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseDate(): string {return "clsRmTeachingCaseDate";}    //课堂教学日期

 /**
 * 常量:"ClsRmTeachingCaseTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseTime(): string {return "clsRmTeachingCaseTime";}    //课堂教学时间

 /**
 * 常量:"ClsRmTeachingCaseDateIn"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseDateIn(): string {return "clsRmTeachingCaseDateIn";}    //案例入库日期

 /**
 * 常量:"ClsRmTeachingCaseTimeIn"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseTimeIn(): string {return "clsRmTeachingCaseTimeIn";}    //案例入库时间

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"IdTeachingPlan"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachingPlan(): string {return "idTeachingPlan";}    //教案流水号

 /**
 * 常量:"IdCaseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCaseType(): string {return "idCaseType";}    //案例类型流水号

 /**
 * 常量:"IdDiscipline"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDiscipline(): string {return "idDiscipline";}    //学科流水号

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"IdDisciplinePs"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDisciplinePs(): string {return "idDisciplinePs";}    //学科流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"BrowseCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BrowseCount(): string {return "browseCount";}    //浏览次数

 /**
 * 常量:"IdSenateGaugeVersion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSenateGaugeVersion(): string {return "idSenateGaugeVersion";}    //评价量表版本流水号

 /**
 * 常量:"IdTeachSkill"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeachSkill(): string {return "idTeachSkill";}    //教学技能流水号

 /**
 * 常量:"CaseLevelId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CaseLevelId(): string {return "caseLevelId";}    //课例等级Id

 /**
 * 常量:"DocFile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DocFile(): string {return "docFile";}    //生成的Word文件名

 /**
 * 常量:"IsNeedGeneWord"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsNeedGeneWord(): string {return "isNeedGeneWord";}    //是否需要生成Word

 /**
 * 常量:"WordCreateDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WordCreateDate(): string {return "wordCreateDate";}    //Word生成日期

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"OwnerId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OwnerId(): string {return "ownerId";}    //拥有者Id

 /**
 * 常量:"UserKindId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserKindId(): string {return "userKindId";}    //用户类别Id

 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"IsDualVideo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDualVideo(): string {return "isDualVideo";}    //是否双视频

 /**
 * 常量:"RecommendedDegreeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RecommendedDegreeId(): string {return "recommendedDegreeId";}    //推荐度Id

 /**
 * 常量:"ftpFileType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ftpFileType(): string {return "ftpFileType";}    //ftp文件类型

 /**
 * 常量:"VideoUrl"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_VideoUrl(): string {return "videoUrl";}    //视频Url

 /**
 * 常量:"VideoPath"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_VideoPath(): string {return "videoPath";}    //视频目录

 /**
 * 常量:"ResErrMsg"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ResErrMsg(): string {return "resErrMsg";}    //资源错误信息

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
}
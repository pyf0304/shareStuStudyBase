
 /**
 * 类名:clsClsRmTeachingCaseEN
 * 表名:ClsRmTeachingCase(01120381)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/08 09:48:24
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课堂教学(ClsRmTeaching)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 课堂教学案例(ClsRmTeachingCase)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsClsRmTeachingCaseEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "05"; //未知
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ClsRmTeachingCase"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdClsRmTeachingCase"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 37;
public static AttributeName = ["idClsRmTeachingCase", "clsRmTeachingCaseID", "clsRmTeachingCaseName", "clsRmTeachingCaseTheme", "idClsRmTeachingCaseType", "clsRmTeachingCaseText", "clsRmTeachingCaseDate", "clsRmTeachingCaseTime", "clsRmTeachingCaseDateIn", "clsRmTeachingCaseTimeIn", "idStudyLevel", "idTeachingPlan", "idCaseType", "idDiscipline", "idSchool", "idDisciplinePs", "idGradeBase", "browseCount", "idSenateGaugeVersion", "idTeachSkill", "caseLevelId", "docFile", "isNeedGeneWord", "wordCreateDate", "isVisible", "ownerId", "userKindId", "userTypeId", "isDualVideo", "recommendedDegreeId", "ftpFileType", "videoUrl", "videoPath", "resErrMsg", "updDate", "updUserId", "memo"];
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
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrIdClsRmTeachingCase = "";    //课堂教学案例流水号
private mstrClsRmTeachingCaseID = "";    //课堂教学案例ID
private mstrClsRmTeachingCaseName = "";    //课堂教学案例名称
private mstrClsRmTeachingCaseTheme = "";    //课堂教学案例主题词
private mstrIdClsRmTeachingCaseType = "";    //课堂案例类型流水号
private mstrClsRmTeachingCaseText = "";    //案例文本内容
private mstrClsRmTeachingCaseDate = "";    //课堂教学日期
private mstrClsRmTeachingCaseTime = "";    //课堂教学时间
private mstrClsRmTeachingCaseDateIn = "";    //案例入库日期
private mstrClsRmTeachingCaseTimeIn = "";    //案例入库时间
private mstrIdStudyLevel = "";    //学段流水号
private mstrIdTeachingPlan = "";    //教案流水号
private mstrIdCaseType = "";    //案例类型流水号
private mstrIdDiscipline = "";    //学科流水号
private mstrIdSchool = "";    //学校流水号
private mstrIdDisciplinePs = "";    //学科流水号
private mstrIdGradeBase = "";    //入学年级流水号
private mintBrowseCount = 0;    //浏览次数
private mstrIdSenateGaugeVersion = "";    //评价量表版本流水号
private mstrIdTeachSkill = "";    //教学技能流水号
private mstrCaseLevelId = "";    //课例等级Id
private mstrDocFile = "";    //生成的Word文件名
private mbolIsNeedGeneWord = false;    //是否需要生成Word
private mstrWordCreateDate = "";    //Word生成日期
private mbolIsVisible = false;    //是否显示
private mstrOwnerId = "";    //拥有者Id
private mstrUserKindId = "";    //用户类别Id
private mstrUserTypeId = "";    //用户类型Id
private mbolIsDualVideo = false;    //是否双视频
private mstrRecommendedDegreeId = "";    //推荐度Id
private mstrftpFileType = "";    //ftp文件类型
private mstrVideoUrl = "";    //视频Url
private mstrVideoPath = "";    //视频目录
private mstrResErrMsg = "";    //资源错误信息
private mstrUpdDate = "";    //修改日期
private mstrUpdUserId = "";    //修改用户Id
private mstrMemo = "";    //备注

/**
 * 课堂教学案例流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdClsRmTeachingCase (value: string)
{
if (value  != undefined)
{
 this.idClsRmTeachingCase = value;
    this.hmProperty["idClsRmTeachingCase"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课堂教学案例ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClsRmTeachingCaseID (value: string)
{
if (value  != undefined)
{
 this.clsRmTeachingCaseID = value;
    this.hmProperty["clsRmTeachingCaseID"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课堂教学案例名称(说明:;字段类型:varchar;字段长度:100;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClsRmTeachingCaseName (value: string)
{
if (value  != undefined)
{
 this.clsRmTeachingCaseName = value;
    this.hmProperty["clsRmTeachingCaseName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课堂教学案例主题词(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClsRmTeachingCaseTheme (value: string)
{
if (value  != undefined)
{
 this.clsRmTeachingCaseTheme = value;
    this.hmProperty["clsRmTeachingCaseTheme"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课堂案例类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdClsRmTeachingCaseType (value: string)
{
if (value  != undefined)
{
 this.idClsRmTeachingCaseType = value;
    this.hmProperty["idClsRmTeachingCaseType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例文本内容(说明:;字段类型:varchar;字段长度:8000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClsRmTeachingCaseText (value: string)
{
if (value  != undefined)
{
 this.clsRmTeachingCaseText = value;
    this.hmProperty["clsRmTeachingCaseText"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课堂教学日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClsRmTeachingCaseDate (value: string)
{
if (value  != undefined)
{
 this.clsRmTeachingCaseDate = value;
    this.hmProperty["clsRmTeachingCaseDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课堂教学时间(说明:;字段类型:char;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClsRmTeachingCaseTime (value: string)
{
if (value  != undefined)
{
 this.clsRmTeachingCaseTime = value;
    this.hmProperty["clsRmTeachingCaseTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例入库日期(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClsRmTeachingCaseDateIn (value: string)
{
if (value  != undefined)
{
 this.clsRmTeachingCaseDateIn = value;
    this.hmProperty["clsRmTeachingCaseDateIn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例入库时间(说明:;字段类型:char;字段长度:6;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetClsRmTeachingCaseTimeIn (value: string)
{
if (value  != undefined)
{
 this.clsRmTeachingCaseTimeIn = value;
    this.hmProperty["clsRmTeachingCaseTimeIn"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学段流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdStudyLevel (value: string)
{
if (value  != undefined)
{
 this.idStudyLevel = value;
    this.hmProperty["idStudyLevel"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教案流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdTeachingPlan (value: string)
{
if (value  != undefined)
{
 this.idTeachingPlan = value;
    this.hmProperty["idTeachingPlan"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 案例类型流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCaseType (value: string)
{
if (value  != undefined)
{
 this.idCaseType = value;
    this.hmProperty["idCaseType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdDiscipline (value: string)
{
if (value  != undefined)
{
 this.idDiscipline = value;
    this.hmProperty["idDiscipline"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSchool (value: string)
{
if (value  != undefined)
{
 this.idSchool = value;
    this.hmProperty["idSchool"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdDisciplinePs (value: string)
{
if (value  != undefined)
{
 this.idDisciplinePs = value;
    this.hmProperty["idDisciplinePs"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 入学年级流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdGradeBase (value: string)
{
if (value  != undefined)
{
 this.idGradeBase = value;
    this.hmProperty["idGradeBase"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 浏览次数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetBrowseCount (value: number)
{
if (value  != undefined)
{
 this.browseCount = value;
    this.hmProperty["browseCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 评价量表版本流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdSenateGaugeVersion (value: string)
{
if (value  != undefined)
{
 this.idSenateGaugeVersion = value;
    this.hmProperty["idSenateGaugeVersion"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学技能流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdTeachSkill (value: string)
{
if (value  != undefined)
{
 this.idTeachSkill = value;
    this.hmProperty["idTeachSkill"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课例等级Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCaseLevelId (value: string)
{
if (value  != undefined)
{
 this.caseLevelId = value;
    this.hmProperty["caseLevelId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 生成的Word文件名(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetDocFile (value: string)
{
if (value  != undefined)
{
 this.docFile = value;
    this.hmProperty["docFile"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否需要生成Word(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsNeedGeneWord (value: boolean)
{
if (value  != undefined)
{
 this.isNeedGeneWord = value;
    this.hmProperty["isNeedGeneWord"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * Word生成日期(说明:;字段类型:varchar;字段长度:14;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetWordCreateDate (value: string)
{
if (value  != undefined)
{
 this.wordCreateDate = value;
    this.hmProperty["wordCreateDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsVisible (value: boolean)
{
if (value  != undefined)
{
 this.isVisible = value;
    this.hmProperty["isVisible"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 拥有者Id(说明:;字段类型:varchar;字段长度:20;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOwnerId (value: string)
{
if (value  != undefined)
{
 this.ownerId = value;
    this.hmProperty["ownerId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户类别Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserKindId (value: string)
{
if (value  != undefined)
{
 this.userKindId = value;
    this.hmProperty["userKindId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户类型Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserTypeId (value: string)
{
if (value  != undefined)
{
 this.userTypeId = value;
    this.hmProperty["userTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否双视频(说明:;字段类型:bit;字段长度:1;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDualVideo (value: boolean)
{
if (value  != undefined)
{
 this.isDualVideo = value;
    this.hmProperty["isDualVideo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 推荐度Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetRecommendedDegreeId (value: string)
{
if (value  != undefined)
{
 this.recommendedDegreeId = value;
    this.hmProperty["recommendedDegreeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * ftp文件类型(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetftpFileType (value: string)
{
if (value  != undefined)
{
 this.ftpFileType = value;
    this.hmProperty["ftpFileType"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 视频Url(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVideoUrl (value: string)
{
if (value  != undefined)
{
 this.videoUrl = value;
    this.hmProperty["videoUrl"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 视频目录(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetVideoPath (value: string)
{
if (value  != undefined)
{
 this.videoPath = value;
    this.hmProperty["videoPath"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源错误信息(说明:;字段类型:varchar;字段长度:30;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetResErrMsg (value: string)
{
if (value  != undefined)
{
 this.resErrMsg = value;
    this.hmProperty["resErrMsg"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改用户Id(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUserId (value: string)
{
if (value  != undefined)
{
 this.updUserId = value;
    this.hmProperty["updUserId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
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
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase:
return this.idClsRmTeachingCase;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseID:
return this.clsRmTeachingCaseID;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName:
return this.clsRmTeachingCaseName;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTheme:
return this.clsRmTeachingCaseTheme;
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCaseType:
return this.idClsRmTeachingCaseType;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseText:
return this.clsRmTeachingCaseText;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDate:
return this.clsRmTeachingCaseDate;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTime:
return this.clsRmTeachingCaseTime;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDateIn:
return this.clsRmTeachingCaseDateIn;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTimeIn:
return this.clsRmTeachingCaseTimeIn;
case clsClsRmTeachingCaseEN.con_IdStudyLevel:
return this.idStudyLevel;
case clsClsRmTeachingCaseEN.con_IdTeachingPlan:
return this.idTeachingPlan;
case clsClsRmTeachingCaseEN.con_IdCaseType:
return this.idCaseType;
case clsClsRmTeachingCaseEN.con_IdDiscipline:
return this.idDiscipline;
case clsClsRmTeachingCaseEN.con_IdSchool:
return this.idSchool;
case clsClsRmTeachingCaseEN.con_IdDisciplinePs:
return this.idDisciplinePs;
case clsClsRmTeachingCaseEN.con_IdGradeBase:
return this.idGradeBase;
case clsClsRmTeachingCaseEN.con_BrowseCount:
return this.browseCount;
case clsClsRmTeachingCaseEN.con_IdSenateGaugeVersion:
return this.idSenateGaugeVersion;
case clsClsRmTeachingCaseEN.con_IdTeachSkill:
return this.idTeachSkill;
case clsClsRmTeachingCaseEN.con_CaseLevelId:
return this.caseLevelId;
case clsClsRmTeachingCaseEN.con_DocFile:
return this.docFile;
case clsClsRmTeachingCaseEN.con_IsNeedGeneWord:
return this.isNeedGeneWord;
case clsClsRmTeachingCaseEN.con_WordCreateDate:
return this.wordCreateDate;
case clsClsRmTeachingCaseEN.con_IsVisible:
return this.isVisible;
case clsClsRmTeachingCaseEN.con_OwnerId:
return this.ownerId;
case clsClsRmTeachingCaseEN.con_UserKindId:
return this.userKindId;
case clsClsRmTeachingCaseEN.con_UserTypeId:
return this.userTypeId;
case clsClsRmTeachingCaseEN.con_IsDualVideo:
return this.isDualVideo;
case clsClsRmTeachingCaseEN.con_RecommendedDegreeId:
return this.recommendedDegreeId;
case clsClsRmTeachingCaseEN.con_ftpFileType:
return this.ftpFileType;
case clsClsRmTeachingCaseEN.con_VideoUrl:
return this.videoUrl;
case clsClsRmTeachingCaseEN.con_VideoPath:
return this.videoPath;
case clsClsRmTeachingCaseEN.con_ResErrMsg:
return this.resErrMsg;
case clsClsRmTeachingCaseEN.con_UpdDate:
return this.updDate;
case clsClsRmTeachingCaseEN.con_UpdUserId:
return this.updUserId;
case clsClsRmTeachingCaseEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ClsRmTeachingCase]中不存在!`;
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
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCase:
this.idClsRmTeachingCase = strValue;
    this.hmProperty["idClsRmTeachingCase"] = true;
break;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseID:
this.clsRmTeachingCaseID = strValue;
    this.hmProperty["clsRmTeachingCaseID"] = true;
break;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseName:
this.clsRmTeachingCaseName = strValue;
    this.hmProperty["clsRmTeachingCaseName"] = true;
break;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTheme:
this.clsRmTeachingCaseTheme = strValue;
    this.hmProperty["clsRmTeachingCaseTheme"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdClsRmTeachingCaseType:
this.idClsRmTeachingCaseType = strValue;
    this.hmProperty["idClsRmTeachingCaseType"] = true;
break;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseText:
this.clsRmTeachingCaseText = strValue;
    this.hmProperty["clsRmTeachingCaseText"] = true;
break;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDate:
this.clsRmTeachingCaseDate = strValue;
    this.hmProperty["clsRmTeachingCaseDate"] = true;
break;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTime:
this.clsRmTeachingCaseTime = strValue;
    this.hmProperty["clsRmTeachingCaseTime"] = true;
break;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseDateIn:
this.clsRmTeachingCaseDateIn = strValue;
    this.hmProperty["clsRmTeachingCaseDateIn"] = true;
break;
case clsClsRmTeachingCaseEN.con_ClsRmTeachingCaseTimeIn:
this.clsRmTeachingCaseTimeIn = strValue;
    this.hmProperty["clsRmTeachingCaseTimeIn"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdStudyLevel:
this.idStudyLevel = strValue;
    this.hmProperty["idStudyLevel"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdTeachingPlan:
this.idTeachingPlan = strValue;
    this.hmProperty["idTeachingPlan"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdCaseType:
this.idCaseType = strValue;
    this.hmProperty["idCaseType"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdDiscipline:
this.idDiscipline = strValue;
    this.hmProperty["idDiscipline"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdSchool:
this.idSchool = strValue;
    this.hmProperty["idSchool"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdDisciplinePs:
this.idDisciplinePs = strValue;
    this.hmProperty["idDisciplinePs"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdGradeBase:
this.idGradeBase = strValue;
    this.hmProperty["idGradeBase"] = true;
break;
case clsClsRmTeachingCaseEN.con_BrowseCount:
this.browseCount = Number(strValue);
    this.hmProperty["browseCount"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdSenateGaugeVersion:
this.idSenateGaugeVersion = strValue;
    this.hmProperty["idSenateGaugeVersion"] = true;
break;
case clsClsRmTeachingCaseEN.con_IdTeachSkill:
this.idTeachSkill = strValue;
    this.hmProperty["idTeachSkill"] = true;
break;
case clsClsRmTeachingCaseEN.con_CaseLevelId:
this.caseLevelId = strValue;
    this.hmProperty["caseLevelId"] = true;
break;
case clsClsRmTeachingCaseEN.con_DocFile:
this.docFile = strValue;
    this.hmProperty["docFile"] = true;
break;
case clsClsRmTeachingCaseEN.con_IsNeedGeneWord:
this.isNeedGeneWord = Boolean(strValue);
    this.hmProperty["isNeedGeneWord"] = true;
break;
case clsClsRmTeachingCaseEN.con_WordCreateDate:
this.wordCreateDate = strValue;
    this.hmProperty["wordCreateDate"] = true;
break;
case clsClsRmTeachingCaseEN.con_IsVisible:
this.isVisible = Boolean(strValue);
    this.hmProperty["isVisible"] = true;
break;
case clsClsRmTeachingCaseEN.con_OwnerId:
this.ownerId = strValue;
    this.hmProperty["ownerId"] = true;
break;
case clsClsRmTeachingCaseEN.con_UserKindId:
this.userKindId = strValue;
    this.hmProperty["userKindId"] = true;
break;
case clsClsRmTeachingCaseEN.con_UserTypeId:
this.userTypeId = strValue;
    this.hmProperty["userTypeId"] = true;
break;
case clsClsRmTeachingCaseEN.con_IsDualVideo:
this.isDualVideo = Boolean(strValue);
    this.hmProperty["isDualVideo"] = true;
break;
case clsClsRmTeachingCaseEN.con_RecommendedDegreeId:
this.recommendedDegreeId = strValue;
    this.hmProperty["recommendedDegreeId"] = true;
break;
case clsClsRmTeachingCaseEN.con_ftpFileType:
this.ftpFileType = strValue;
    this.hmProperty["ftpFileType"] = true;
break;
case clsClsRmTeachingCaseEN.con_VideoUrl:
this.videoUrl = strValue;
    this.hmProperty["videoUrl"] = true;
break;
case clsClsRmTeachingCaseEN.con_VideoPath:
this.videoPath = strValue;
    this.hmProperty["videoPath"] = true;
break;
case clsClsRmTeachingCaseEN.con_ResErrMsg:
this.resErrMsg = strValue;
    this.hmProperty["resErrMsg"] = true;
break;
case clsClsRmTeachingCaseEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsClsRmTeachingCaseEN.con_UpdUserId:
this.updUserId = strValue;
    this.hmProperty["updUserId"] = true;
break;
case clsClsRmTeachingCaseEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ClsRmTeachingCase]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"IdClsRmTeachingCase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdClsRmTeachingCase(): string {return "idClsRmTeachingCase";}    //课堂教学案例流水号

 /**
 * 常量:"ClsRmTeachingCaseID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseID(): string {return "clsRmTeachingCaseID";}    //课堂教学案例ID

 /**
 * 常量:"ClsRmTeachingCaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseName(): string {return "clsRmTeachingCaseName";}    //课堂教学案例名称

 /**
 * 常量:"ClsRmTeachingCaseTheme"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseTheme(): string {return "clsRmTeachingCaseTheme";}    //课堂教学案例主题词

 /**
 * 常量:"IdClsRmTeachingCaseType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdClsRmTeachingCaseType(): string {return "idClsRmTeachingCaseType";}    //课堂案例类型流水号

 /**
 * 常量:"ClsRmTeachingCaseText"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseText(): string {return "clsRmTeachingCaseText";}    //案例文本内容

 /**
 * 常量:"ClsRmTeachingCaseDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseDate(): string {return "clsRmTeachingCaseDate";}    //课堂教学日期

 /**
 * 常量:"ClsRmTeachingCaseTime"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseTime(): string {return "clsRmTeachingCaseTime";}    //课堂教学时间

 /**
 * 常量:"ClsRmTeachingCaseDateIn"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseDateIn(): string {return "clsRmTeachingCaseDateIn";}    //案例入库日期

 /**
 * 常量:"ClsRmTeachingCaseTimeIn"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ClsRmTeachingCaseTimeIn(): string {return "clsRmTeachingCaseTimeIn";}    //案例入库时间

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"IdTeachingPlan"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachingPlan(): string {return "idTeachingPlan";}    //教案流水号

 /**
 * 常量:"IdCaseType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCaseType(): string {return "idCaseType";}    //案例类型流水号

 /**
 * 常量:"IdDiscipline"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdDiscipline(): string {return "idDiscipline";}    //学科流水号

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"IdDisciplinePs"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdDisciplinePs(): string {return "idDisciplinePs";}    //学科流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"BrowseCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_BrowseCount(): string {return "browseCount";}    //浏览次数

 /**
 * 常量:"IdSenateGaugeVersion"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSenateGaugeVersion(): string {return "idSenateGaugeVersion";}    //评价量表版本流水号

 /**
 * 常量:"IdTeachSkill"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdTeachSkill(): string {return "idTeachSkill";}    //教学技能流水号

 /**
 * 常量:"CaseLevelId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CaseLevelId(): string {return "caseLevelId";}    //课例等级Id

 /**
 * 常量:"DocFile"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_DocFile(): string {return "docFile";}    //生成的Word文件名

 /**
 * 常量:"IsNeedGeneWord"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsNeedGeneWord(): string {return "isNeedGeneWord";}    //是否需要生成Word

 /**
 * 常量:"WordCreateDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_WordCreateDate(): string {return "wordCreateDate";}    //Word生成日期

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"OwnerId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OwnerId(): string {return "ownerId";}    //拥有者Id

 /**
 * 常量:"UserKindId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserKindId(): string {return "userKindId";}    //用户类别Id

 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"IsDualVideo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsDualVideo(): string {return "isDualVideo";}    //是否双视频

 /**
 * 常量:"RecommendedDegreeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RecommendedDegreeId(): string {return "recommendedDegreeId";}    //推荐度Id

 /**
 * 常量:"ftpFileType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ftpFileType(): string {return "ftpFileType";}    //ftp文件类型

 /**
 * 常量:"VideoUrl"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_VideoUrl(): string {return "videoUrl";}    //视频Url

 /**
 * 常量:"VideoPath"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_VideoPath(): string {return "videoPath";}    //视频目录

 /**
 * 常量:"ResErrMsg"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ResErrMsg(): string {return "resErrMsg";}    //资源错误信息

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
//return propName in new clsClsRmTeachingCaseEN();
const instance = new clsClsRmTeachingCaseEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
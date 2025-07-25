
 /**
 * 类名:clscc_CourseKnowledgesEN
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/08 09:48:58
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
 * 知识点(cc_CourseKnowledges)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clscc_CourseKnowledgesEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "cc_CourseKnowledges"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseKnowledgeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 21;
public static AttributeName = ["courseKnowledgeId", "knowledgeName", "knowledgeTitle", "knowledgeContent", "knowledgeModuleId", "kpSourceId", "levelNo", "courseId", "knowledgeTypeId", "courseChapterId", "moduleWeight", "inUse", "userId", "isShow", "isCast", "likeCount", "questionNum", "orderNum", "updDate", "updUser", "memo"];
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
private mstrCourseKnowledgeId = "";    //知识点Id
private mstrKnowledgeName = "";    //知识点名称
private mstrKnowledgeTitle = "";    //知识点标题
private mstrKnowledgeContent = "";    //知识点内容
private mstrKnowledgeModuleId = "";    //知识点模块Id
private mstrKpSourceId = "";    //知识点来源Id
private mintLevelNo = 0;    //等级No
private mstrCourseId = "";    //课程Id
private mstrKnowledgeTypeId = "";    //知识点类型Id
private mstrCourseChapterId = "";    //课程章节ID
private mdblModuleWeight = 0;    //模块权重
private mbolInUse = false;    //是否在用
private mstrUserId = "";    //用户ID
private mbolIsShow = false;    //是否启用
private mbolIsCast = false;    //是否播放
private mintLikeCount = 0;    //资源喜欢数量
private mintQuestionNum = 0;    //题目数
private mintOrderNum = 0;    //序号
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 知识点Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseKnowledgeId (value: string)
{
if (value  != undefined)
{
 this.courseKnowledgeId = value;
    this.hmProperty["courseKnowledgeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点名称(说明:;字段类型:varchar;字段长度:200;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeName (value: string)
{
if (value  != undefined)
{
 this.knowledgeName = value;
    this.hmProperty["knowledgeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点标题(说明:;字段类型:varchar;字段长度:200;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeTitle (value: string)
{
if (value  != undefined)
{
 this.knowledgeTitle = value;
    this.hmProperty["knowledgeTitle"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点内容(说明:;字段类型:text;字段长度:2147483647;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeContent (value: string)
{
if (value  != undefined)
{
 this.knowledgeContent = value;
    this.hmProperty["knowledgeContent"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点模块Id(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeModuleId (value: string)
{
if (value  != undefined)
{
 this.knowledgeModuleId = value;
    this.hmProperty["knowledgeModuleId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点来源Id(说明:;字段类型:char;字段长度:2;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKpSourceId (value: string)
{
if (value  != undefined)
{
 this.kpSourceId = value;
    this.hmProperty["kpSourceId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 等级No(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLevelNo (value: number)
{
if (value  != undefined)
{
 this.levelNo = value;
    this.hmProperty["levelNo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 知识点类型Id(说明:;字段类型:char;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeTypeId (value: string)
{
if (value  != undefined)
{
 this.knowledgeTypeId = value;
    this.hmProperty["knowledgeTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程章节ID(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseChapterId (value: string)
{
if (value  != undefined)
{
 this.courseChapterId = value;
    this.hmProperty["courseChapterId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 模块权重(说明:;字段类型:numeric;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetModuleWeight (value: number)
{
if (value  != undefined)
{
 this.moduleWeight = value;
    this.hmProperty["moduleWeight"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否在用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetInUse (value: boolean)
{
if (value  != undefined)
{
 this.inUse = value;
    this.hmProperty["inUse"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 用户ID(说明:;字段类型:varchar;字段长度:18;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUserId (value: string)
{
if (value  != undefined)
{
 this.userId = value;
    this.hmProperty["userId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否启用(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsShow (value: boolean)
{
if (value  != undefined)
{
 this.isShow = value;
    this.hmProperty["isShow"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否播放(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsCast (value: boolean)
{
if (value  != undefined)
{
 this.isCast = value;
    this.hmProperty["isCast"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 资源喜欢数量(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetLikeCount (value: number)
{
if (value  != undefined)
{
 this.likeCount = value;
    this.hmProperty["likeCount"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 题目数(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetQuestionNum (value: number)
{
if (value  != undefined)
{
 this.questionNum = value;
    this.hmProperty["questionNum"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetOrderNum (value: number)
{
if (value  != undefined)
{
 this.orderNum = value;
    this.hmProperty["orderNum"] = true;
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
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
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
case clscc_CourseKnowledgesEN.con_CourseKnowledgeId:
return this.courseKnowledgeId;
case clscc_CourseKnowledgesEN.con_KnowledgeName:
return this.knowledgeName;
case clscc_CourseKnowledgesEN.con_KnowledgeTitle:
return this.knowledgeTitle;
case clscc_CourseKnowledgesEN.con_KnowledgeContent:
return this.knowledgeContent;
case clscc_CourseKnowledgesEN.con_KnowledgeModuleId:
return this.knowledgeModuleId;
case clscc_CourseKnowledgesEN.con_KpSourceId:
return this.kpSourceId;
case clscc_CourseKnowledgesEN.con_LevelNo:
return this.levelNo;
case clscc_CourseKnowledgesEN.con_CourseId:
return this.courseId;
case clscc_CourseKnowledgesEN.con_KnowledgeTypeId:
return this.knowledgeTypeId;
case clscc_CourseKnowledgesEN.con_CourseChapterId:
return this.courseChapterId;
case clscc_CourseKnowledgesEN.con_ModuleWeight:
return this.moduleWeight;
case clscc_CourseKnowledgesEN.con_InUse:
return this.inUse;
case clscc_CourseKnowledgesEN.con_UserId:
return this.userId;
case clscc_CourseKnowledgesEN.con_IsShow:
return this.isShow;
case clscc_CourseKnowledgesEN.con_IsCast:
return this.isCast;
case clscc_CourseKnowledgesEN.con_LikeCount:
return this.likeCount;
case clscc_CourseKnowledgesEN.con_QuestionNum:
return this.questionNum;
case clscc_CourseKnowledgesEN.con_OrderNum:
return this.orderNum;
case clscc_CourseKnowledgesEN.con_UpdDate:
return this.updDate;
case clscc_CourseKnowledgesEN.con_UpdUser:
return this.updUser;
case clscc_CourseKnowledgesEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseKnowledges]中不存在!`;
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
case clscc_CourseKnowledgesEN.con_CourseKnowledgeId:
this.courseKnowledgeId = strValue;
    this.hmProperty["courseKnowledgeId"] = true;
break;
case clscc_CourseKnowledgesEN.con_KnowledgeName:
this.knowledgeName = strValue;
    this.hmProperty["knowledgeName"] = true;
break;
case clscc_CourseKnowledgesEN.con_KnowledgeTitle:
this.knowledgeTitle = strValue;
    this.hmProperty["knowledgeTitle"] = true;
break;
case clscc_CourseKnowledgesEN.con_KnowledgeContent:
this.knowledgeContent = strValue;
    this.hmProperty["knowledgeContent"] = true;
break;
case clscc_CourseKnowledgesEN.con_KnowledgeModuleId:
this.knowledgeModuleId = strValue;
    this.hmProperty["knowledgeModuleId"] = true;
break;
case clscc_CourseKnowledgesEN.con_KpSourceId:
this.kpSourceId = strValue;
    this.hmProperty["kpSourceId"] = true;
break;
case clscc_CourseKnowledgesEN.con_LevelNo:
this.levelNo = Number(strValue);
    this.hmProperty["levelNo"] = true;
break;
case clscc_CourseKnowledgesEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clscc_CourseKnowledgesEN.con_KnowledgeTypeId:
this.knowledgeTypeId = strValue;
    this.hmProperty["knowledgeTypeId"] = true;
break;
case clscc_CourseKnowledgesEN.con_CourseChapterId:
this.courseChapterId = strValue;
    this.hmProperty["courseChapterId"] = true;
break;
case clscc_CourseKnowledgesEN.con_ModuleWeight:
this.moduleWeight = Number(strValue);
    this.hmProperty["moduleWeight"] = true;
break;
case clscc_CourseKnowledgesEN.con_InUse:
this.inUse = Boolean(strValue);
    this.hmProperty["inUse"] = true;
break;
case clscc_CourseKnowledgesEN.con_UserId:
this.userId = strValue;
    this.hmProperty["userId"] = true;
break;
case clscc_CourseKnowledgesEN.con_IsShow:
this.isShow = Boolean(strValue);
    this.hmProperty["isShow"] = true;
break;
case clscc_CourseKnowledgesEN.con_IsCast:
this.isCast = Boolean(strValue);
    this.hmProperty["isCast"] = true;
break;
case clscc_CourseKnowledgesEN.con_LikeCount:
this.likeCount = Number(strValue);
    this.hmProperty["likeCount"] = true;
break;
case clscc_CourseKnowledgesEN.con_QuestionNum:
this.questionNum = Number(strValue);
    this.hmProperty["questionNum"] = true;
break;
case clscc_CourseKnowledgesEN.con_OrderNum:
this.orderNum = Number(strValue);
    this.hmProperty["orderNum"] = true;
break;
case clscc_CourseKnowledgesEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clscc_CourseKnowledgesEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clscc_CourseKnowledgesEN.con_Memo:
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
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseKnowledges]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
 * 常量:"KnowledgeModuleId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeModuleId(): string {return "knowledgeModuleId";}    //知识点模块Id

 /**
 * 常量:"KpSourceId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KpSourceId(): string {return "kpSourceId";}    //知识点来源Id

 /**
 * 常量:"LevelNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LevelNo(): string {return "levelNo";}    //等级No

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"KnowledgeTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_KnowledgeTypeId(): string {return "knowledgeTypeId";}    //知识点类型Id

 /**
 * 常量:"CourseChapterId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseChapterId(): string {return "courseChapterId";}    //课程章节ID

 /**
 * 常量:"ModuleWeight"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_ModuleWeight(): string {return "moduleWeight";}    //模块权重

 /**
 * 常量:"InUse"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"IsShow"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsShow(): string {return "isShow";}    //是否启用

 /**
 * 常量:"IsCast"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsCast(): string {return "isCast";}    //是否播放

 /**
 * 常量:"LikeCount"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LikeCount(): string {return "likeCount";}    //资源喜欢数量

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

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
//return propName in new clscc_CourseKnowledgesEN();
const instance = new clscc_CourseKnowledgesEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}

 /**
 * 类名:clsCurrEduClsStu
 * 表名:CurrEduClsStu(01120125)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:21
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学班与学生关系(CurrEduClsStu)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsCurrEduClsStu 
{
public static _CurrTabName= "CurrEduClsStu"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsStu"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 26;
public static AttributeName = ["idEduClsStu", "idCurrEduCls", "idStu", "eduClsStuStateId", "getScoreTimes", "score", "totalScores", "ranking", "percentile", "ranking2", "percentile2", "ranking3", "percentile3", "confirmed", "schoolTerm", "schoolYear", "exportDate", "signInDate", "signInStateID", "signInUser", "isOpByTeacher", "isSynScore", "lastVisitedDate", "modifyDate", "modifyUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idEduClsStu = 0;    //教学班学生流水号
public idCurrEduCls = "";    //教学班流水号
public idStu = "";    //学生流水号
public eduClsStuStateId = "";    //教学班学生状态编号
public getScoreTimes = 0;    //获得成绩次数
public score = 0;    //得分
public totalScores = 0;    //总分值
public ranking = 0;    //名次
public percentile = 0;    //百分位
public ranking2 = 0;    //Ranking2
public percentile2 = 0;    //Percentile2
public ranking3 = 0;    //Ranking3
public percentile3 = 0;    //Percentile3
public confirmed = false;    //是否确认
public schoolTerm = "";    //学期
public schoolYear = "";    //学年
public exportDate = "";    //导出日期
public signInDate = "";    //签入时间
public signInStateID = "";    //签入状态表流水号
public signInUser = "";    //签入人
public isOpByTeacher = false;    //是否教师操作
public isSynScore = false;    //是否同步成绩
public lastVisitedDate = "";    //最后访问时间
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
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
case clsCurrEduClsStu.con_IdEduClsStu:
return this.idEduClsStu;
case clsCurrEduClsStu.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsCurrEduClsStu.con_IdStu:
return this.idStu;
case clsCurrEduClsStu.con_EduClsStuStateId:
return this.eduClsStuStateId;
case clsCurrEduClsStu.con_GetScoreTimes:
return this.getScoreTimes;
case clsCurrEduClsStu.con_Score:
return this.score;
case clsCurrEduClsStu.con_TotalScores:
return this.totalScores;
case clsCurrEduClsStu.con_Ranking:
return this.ranking;
case clsCurrEduClsStu.con_Percentile:
return this.percentile;
case clsCurrEduClsStu.con_Ranking2:
return this.ranking2;
case clsCurrEduClsStu.con_Percentile2:
return this.percentile2;
case clsCurrEduClsStu.con_Ranking3:
return this.ranking3;
case clsCurrEduClsStu.con_Percentile3:
return this.percentile3;
case clsCurrEduClsStu.con_Confirmed:
return this.confirmed;
case clsCurrEduClsStu.con_SchoolTerm:
return this.schoolTerm;
case clsCurrEduClsStu.con_SchoolYear:
return this.schoolYear;
case clsCurrEduClsStu.con_ExportDate:
return this.exportDate;
case clsCurrEduClsStu.con_SignInDate:
return this.signInDate;
case clsCurrEduClsStu.con_SignInStateID:
return this.signInStateID;
case clsCurrEduClsStu.con_SignInUser:
return this.signInUser;
case clsCurrEduClsStu.con_IsOpByTeacher:
return this.isOpByTeacher;
case clsCurrEduClsStu.con_IsSynScore:
return this.isSynScore;
case clsCurrEduClsStu.con_LastVisitedDate:
return this.lastVisitedDate;
case clsCurrEduClsStu.con_ModifyDate:
return this.modifyDate;
case clsCurrEduClsStu.con_ModifyUserId:
return this.modifyUserId;
case clsCurrEduClsStu.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsStu]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdEduClsStu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduClsStu(): string {return "idEduClsStu";}    //教学班学生流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IdStu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStu(): string {return "idStu";}    //学生流水号

 /**
 * 常量:"EduClsStuStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsStuStateId(): string {return "eduClsStuStateId";}    //教学班学生状态编号

 /**
 * 常量:"GetScoreTimes"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GetScoreTimes(): string {return "getScoreTimes";}    //获得成绩次数

 /**
 * 常量:"Score"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Score(): string {return "score";}    //得分

 /**
 * 常量:"TotalScores"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalScores(): string {return "totalScores";}    //总分值

 /**
 * 常量:"Ranking"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Ranking(): string {return "ranking";}    //名次

 /**
 * 常量:"Percentile"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Percentile(): string {return "percentile";}    //百分位

 /**
 * 常量:"Ranking2"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Ranking2(): string {return "ranking2";}    //Ranking2

 /**
 * 常量:"Percentile2"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Percentile2(): string {return "percentile2";}    //Percentile2

 /**
 * 常量:"Ranking3"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Ranking3(): string {return "ranking3";}    //Ranking3

 /**
 * 常量:"Percentile3"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Percentile3(): string {return "percentile3";}    //Percentile3

 /**
 * 常量:"Confirmed"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Confirmed(): string {return "confirmed";}    //是否确认

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"ExportDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExportDate(): string {return "exportDate";}    //导出日期

 /**
 * 常量:"SignInDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SignInDate(): string {return "signInDate";}    //签入时间

 /**
 * 常量:"SignInStateID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SignInStateID(): string {return "signInStateID";}    //签入状态表流水号

 /**
 * 常量:"SignInUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SignInUser(): string {return "signInUser";}    //签入人

 /**
 * 常量:"IsOpByTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOpByTeacher(): string {return "isOpByTeacher";}    //是否教师操作

 /**
 * 常量:"IsSynScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSynScore(): string {return "isSynScore";}    //是否同步成绩

 /**
 * 常量:"LastVisitedDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LastVisitedDate(): string {return "lastVisitedDate";}    //最后访问时间

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
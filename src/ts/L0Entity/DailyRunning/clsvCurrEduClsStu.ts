
 /**
 * 类名:clsvCurrEduClsStu
 * 表名:vCurrEduClsStu(01120127)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:30:07
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v教学班与学生关系(vCurrEduClsStu)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvCurrEduClsStu 
{
public static _CurrTabName= "vCurrEduClsStu"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsStu"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 50;
public static AttributeName = ["idEduClsStu", "idCurrEduCls", "currEduClsId", "eduClsName", "courseId", "courseCode", "courseName", "teachingSolutionId", "teachingSolutionName", "idXzCollege", "collegeId", "collegeName", "lessonQtyPerWeek", "mark", "idUniZone", "gradeBaseName", "isEffective", "idCourseType", "courseTypeId", "courseTypeName", "isDegree", "currStuNum", "idStu", "stuId", "stuName", "idSex", "sexDesc", "majorId", "majorName", "idAdminCls", "birthday", "eduClsStuStateId", "getScoreTimes", "score", "totalScores", "ranking", "percentile", "confirmed", "schoolTerm", "schoolYear", "signInDate", "signInStateID", "signInUser", "modifyDate", "modifyUserId", "collegeName4Stu", "eduClsTypeName", "isSynScore", "eduClsTypeId", "userTypeId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idEduClsStu = 0;    //教学班学生流水号
public idCurrEduCls = "";    //教学班流水号
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseName = "";    //课程名称
public teachingSolutionId = "";    //教学方案Id
public teachingSolutionName = "";    //教学方案名称
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public lessonQtyPerWeek = 0;    //周课时数
public mark = 0;    //获得学分
public idUniZone = "";    //校区流水号
public gradeBaseName = "";    //年级名称
public isEffective = false;    //是否有效
public idCourseType = "";    //课程类型流水号
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public isDegree = false;    //是否学位课
public currStuNum = 0;    //当前学生数
public idStu = "";    //学生流水号
public stuId = "";    //学号
public stuName = "";    //姓名
public idSex = "";    //性别流水号
public sexDesc = "";    //性别名称
public majorId = "";    //专业Id
public majorName = "";    //专业名称
public idAdminCls = "";    //行政班流水号
public birthday = "";    //出生日期
public eduClsStuStateId = "";    //教学班学生状态编号
public getScoreTimes = 0;    //获得成绩次数
public score = 0;    //得分
public totalScores = 0;    //总分值
public ranking = 0;    //名次
public percentile = 0;    //百分位
public confirmed = false;    //是否确认
public schoolTerm = "";    //学期
public schoolYear = "";    //学年
public signInDate = "";    //签入时间
public signInStateID = "";    //签入状态表流水号
public signInUser = "";    //签入人
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public collegeName4Stu = "";    //CollegeName4Stu
public eduClsTypeName = "";    //教学班类型名称
public isSynScore = false;    //是否同步成绩
public eduClsTypeId = "";    //教学班类型Id
public userTypeId = "";    //用户类型Id

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
case clsvCurrEduClsStu.con_IdEduClsStu:
return this.idEduClsStu;
case clsvCurrEduClsStu.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduClsStu.con_CurrEduClsId:
return this.currEduClsId;
case clsvCurrEduClsStu.con_EduClsName:
return this.eduClsName;
case clsvCurrEduClsStu.con_CourseId:
return this.courseId;
case clsvCurrEduClsStu.con_CourseCode:
return this.courseCode;
case clsvCurrEduClsStu.con_CourseName:
return this.courseName;
case clsvCurrEduClsStu.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsvCurrEduClsStu.con_TeachingSolutionName:
return this.teachingSolutionName;
case clsvCurrEduClsStu.con_IdXzCollege:
return this.idXzCollege;
case clsvCurrEduClsStu.con_CollegeId:
return this.collegeId;
case clsvCurrEduClsStu.con_CollegeName:
return this.collegeName;
case clsvCurrEduClsStu.con_LessonQtyPerWeek:
return this.lessonQtyPerWeek;
case clsvCurrEduClsStu.con_Mark:
return this.mark;
case clsvCurrEduClsStu.con_IdUniZone:
return this.idUniZone;
case clsvCurrEduClsStu.con_GradeBaseName:
return this.gradeBaseName;
case clsvCurrEduClsStu.con_IsEffective:
return this.isEffective;
case clsvCurrEduClsStu.con_IdCourseType:
return this.idCourseType;
case clsvCurrEduClsStu.con_CourseTypeId:
return this.courseTypeId;
case clsvCurrEduClsStu.con_CourseTypeName:
return this.courseTypeName;
case clsvCurrEduClsStu.con_IsDegree:
return this.isDegree;
case clsvCurrEduClsStu.con_CurrStuNum:
return this.currStuNum;
case clsvCurrEduClsStu.con_IdStu:
return this.idStu;
case clsvCurrEduClsStu.con_StuId:
return this.stuId;
case clsvCurrEduClsStu.con_StuName:
return this.stuName;
case clsvCurrEduClsStu.con_IdSex:
return this.idSex;
case clsvCurrEduClsStu.con_SexDesc:
return this.sexDesc;
case clsvCurrEduClsStu.con_MajorId:
return this.majorId;
case clsvCurrEduClsStu.con_MajorName:
return this.majorName;
case clsvCurrEduClsStu.con_IdAdminCls:
return this.idAdminCls;
case clsvCurrEduClsStu.con_Birthday:
return this.birthday;
case clsvCurrEduClsStu.con_EduClsStuStateId:
return this.eduClsStuStateId;
case clsvCurrEduClsStu.con_GetScoreTimes:
return this.getScoreTimes;
case clsvCurrEduClsStu.con_Score:
return this.score;
case clsvCurrEduClsStu.con_TotalScores:
return this.totalScores;
case clsvCurrEduClsStu.con_Ranking:
return this.ranking;
case clsvCurrEduClsStu.con_Percentile:
return this.percentile;
case clsvCurrEduClsStu.con_Confirmed:
return this.confirmed;
case clsvCurrEduClsStu.con_SchoolTerm:
return this.schoolTerm;
case clsvCurrEduClsStu.con_SchoolYear:
return this.schoolYear;
case clsvCurrEduClsStu.con_SignInDate:
return this.signInDate;
case clsvCurrEduClsStu.con_SignInStateID:
return this.signInStateID;
case clsvCurrEduClsStu.con_SignInUser:
return this.signInUser;
case clsvCurrEduClsStu.con_ModifyDate:
return this.modifyDate;
case clsvCurrEduClsStu.con_ModifyUserId:
return this.modifyUserId;
case clsvCurrEduClsStu.con_CollegeName4Stu:
return this.collegeName4Stu;
case clsvCurrEduClsStu.con_EduClsTypeName:
return this.eduClsTypeName;
case clsvCurrEduClsStu.con_IsSynScore:
return this.isSynScore;
case clsvCurrEduClsStu.con_EduClsTypeId:
return this.eduClsTypeId;
case clsvCurrEduClsStu.con_UserTypeId:
return this.userTypeId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsStu]中不存在!`;
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
 * 常量:"CurrEduClsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrEduClsId(): string {return "currEduClsId";}    //教学班Id

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

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
 * 常量:"TeachingSolutionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingSolutionId(): string {return "teachingSolutionId";}    //教学方案Id

 /**
 * 常量:"TeachingSolutionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingSolutionName(): string {return "teachingSolutionName";}    //教学方案名称

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeId(): string {return "collegeId";}    //学院ID

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"LessonQtyPerWeek"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LessonQtyPerWeek(): string {return "lessonQtyPerWeek";}    //周课时数

 /**
 * 常量:"Mark"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Mark(): string {return "mark";}    //获得学分

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"IsEffective"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

 /**
 * 常量:"IdCourseType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCourseType(): string {return "idCourseType";}    //课程类型流水号

 /**
 * 常量:"CourseTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseTypeId(): string {return "courseTypeId";}    //课程类型ID

 /**
 * 常量:"CourseTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseTypeName(): string {return "courseTypeName";}    //课程类型名称

 /**
 * 常量:"IsDegree"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDegree(): string {return "isDegree";}    //是否学位课

 /**
 * 常量:"CurrStuNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrStuNum(): string {return "currStuNum";}    //当前学生数

 /**
 * 常量:"IdStu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStu(): string {return "idStu";}    //学生流水号

 /**
 * 常量:"StuId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuId(): string {return "stuId";}    //学号

 /**
 * 常量:"StuName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"IdSex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"SexDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SexDesc(): string {return "sexDesc";}    //性别名称

 /**
 * 常量:"MajorId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorId(): string {return "majorId";}    //专业Id

 /**
 * 常量:"MajorName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"Birthday"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

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
 * 常量:"CollegeName4Stu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeName4Stu(): string {return "collegeName4Stu";}    //CollegeName4Stu

 /**
 * 常量:"EduClsTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTypeName(): string {return "eduClsTypeName";}    //教学班类型名称

 /**
 * 常量:"IsSynScore"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSynScore(): string {return "isSynScore";}    //是否同步成绩

 /**
 * 常量:"EduClsTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTypeId(): string {return "eduClsTypeId";}    //教学班类型Id

 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id
}
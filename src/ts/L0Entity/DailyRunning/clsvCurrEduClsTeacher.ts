
 /**
 * 类名:clsvCurrEduClsTeacher
 * 表名:vCurrEduClsTeacher(01120128)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/20 16:02:51
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
 * v当前教学班教师(vCurrEduClsTeacher)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvCurrEduClsTeacher 
{
public static _CurrTabName= "vCurrEduClsTeacher"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsTeacher"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 60;
public static AttributeName = ["idEduClsTeacher", "idCurrEduCls", "currEduClsId", "eduClsName", "eduClsTypeId", "eduClsTypeName", "courseId", "courseCode", "courseName", "exampleImgPath", "teachingSolutionId", "teachingSolutionName", "idXzCollege", "collegeId", "idEduWay", "totalLessonQty", "maxStuQty", "weekQty", "scheUnitPW", "weekStatusId", "customerWeek", "lessonQtyPerWeek", "idUniZone", "idGradeBase", "gradeBaseId", "gradeBaseName", "isEffective", "idCourseType", "courseTypeId", "courseTypeName", "isDegree", "idScoreType", "isProportionalCtrl", "idExamType", "beginWeek", "currStuNumValid", "currStuNum", "idTeacher", "teacherId", "teacherName", "idProfGrade", "profenssionalGradeName", "degreeName", "birthday", "isGpUser", "collegeName", "idPk2EduClsTeacherType", "eduClsTeacherTypeId", "eduClsTeacherTypeDesc", "schoolTerm", "schoolYear", "openBeginDate", "openEndDate", "orderNum", "updDate", "updUser", "memo", "collegeName4EduCls", "collegeName4Teacher", "userTypeId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idEduClsTeacher = 0;    //教学班老师流水号
public idCurrEduCls = "";    //教学班流水号
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名
public eduClsTypeId = "";    //教学班类型Id
public eduClsTypeName = "";    //教学班类型名称
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseName = "";    //课程名称
public exampleImgPath = "";    //示例图路径
public teachingSolutionId = "";    //教学方案Id
public teachingSolutionName = "";    //教学方案名称
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public idEduWay = "";    //教学方式流水号
public totalLessonQty = 0;    //总课时数
public maxStuQty = 0;    //最大学生数
public weekQty = 0;    //总周数
public scheUnitPW = 0;    //周排课次数
public weekStatusId = "";    //周状态编号(单,双,全周)
public customerWeek = "";    //自定义上课周
public lessonQtyPerWeek = 0;    //周课时数
public idUniZone = "";    //校区流水号
public idGradeBase = "";    //入学年级流水号
public gradeBaseId = "";    //年级代号
public gradeBaseName = "";    //年级名称
public isEffective = false;    //是否有效
public idCourseType = "";    //课程类型流水号
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public isDegree = false;    //是否学位课
public idScoreType = "";    //成绩类型流水号
public isProportionalCtrl = false;    //是否比例控制
public idExamType = "";    //考试方式流水号
public beginWeek = 0;    //开始周
public currStuNumValid = 0;    //CurrStuNum_Valid
public currStuNum = 0;    //当前学生数
public idTeacher = "";    //教师流水号
public teacherId = "";    //教师工号
public teacherName = "";    //教师姓名
public idProfGrade = "";    //专业职称流水号
public profenssionalGradeName = "";    //专业职称
public degreeName = "";    //学位名称
public birthday = "";    //出生日期
public isGpUser = false;    //是否Gp用户
public collegeName = "";    //学院名称
public idPk2EduClsTeacherType = "";    //教学班老师角色(主讲,辅导)流水号
public eduClsTeacherTypeId = "";    //教学班教学类型ID
public eduClsTeacherTypeDesc = "";    //教学班教师类型名
public schoolTerm = "";    //学期
public schoolYear = "";    //学年
public openBeginDate = "";    //开放开始日期
public openEndDate = "";    //开放结束日期
public orderNum = 0;    //序号
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public collegeName4EduCls = "";    //学院名_教学班
public collegeName4Teacher = "";    //学院名_教师
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
case clsvCurrEduClsTeacher.con_IdEduClsTeacher:
return this.idEduClsTeacher;
case clsvCurrEduClsTeacher.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduClsTeacher.con_CurrEduClsId:
return this.currEduClsId;
case clsvCurrEduClsTeacher.con_EduClsName:
return this.eduClsName;
case clsvCurrEduClsTeacher.con_EduClsTypeId:
return this.eduClsTypeId;
case clsvCurrEduClsTeacher.con_EduClsTypeName:
return this.eduClsTypeName;
case clsvCurrEduClsTeacher.con_CourseId:
return this.courseId;
case clsvCurrEduClsTeacher.con_CourseCode:
return this.courseCode;
case clsvCurrEduClsTeacher.con_CourseName:
return this.courseName;
case clsvCurrEduClsTeacher.con_ExampleImgPath:
return this.exampleImgPath;
case clsvCurrEduClsTeacher.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsvCurrEduClsTeacher.con_TeachingSolutionName:
return this.teachingSolutionName;
case clsvCurrEduClsTeacher.con_IdXzCollege:
return this.idXzCollege;
case clsvCurrEduClsTeacher.con_CollegeId:
return this.collegeId;
case clsvCurrEduClsTeacher.con_IdEduWay:
return this.idEduWay;
case clsvCurrEduClsTeacher.con_TotalLessonQty:
return this.totalLessonQty;
case clsvCurrEduClsTeacher.con_MaxStuQty:
return this.maxStuQty;
case clsvCurrEduClsTeacher.con_WeekQty:
return this.weekQty;
case clsvCurrEduClsTeacher.con_ScheUnitPW:
return this.scheUnitPW;
case clsvCurrEduClsTeacher.con_WeekStatusId:
return this.weekStatusId;
case clsvCurrEduClsTeacher.con_CustomerWeek:
return this.customerWeek;
case clsvCurrEduClsTeacher.con_LessonQtyPerWeek:
return this.lessonQtyPerWeek;
case clsvCurrEduClsTeacher.con_IdUniZone:
return this.idUniZone;
case clsvCurrEduClsTeacher.con_IdGradeBase:
return this.idGradeBase;
case clsvCurrEduClsTeacher.con_GradeBaseId:
return this.gradeBaseId;
case clsvCurrEduClsTeacher.con_GradeBaseName:
return this.gradeBaseName;
case clsvCurrEduClsTeacher.con_IsEffective:
return this.isEffective;
case clsvCurrEduClsTeacher.con_IdCourseType:
return this.idCourseType;
case clsvCurrEduClsTeacher.con_CourseTypeId:
return this.courseTypeId;
case clsvCurrEduClsTeacher.con_CourseTypeName:
return this.courseTypeName;
case clsvCurrEduClsTeacher.con_IsDegree:
return this.isDegree;
case clsvCurrEduClsTeacher.con_IdScoreType:
return this.idScoreType;
case clsvCurrEduClsTeacher.con_IsProportionalCtrl:
return this.isProportionalCtrl;
case clsvCurrEduClsTeacher.con_IdExamType:
return this.idExamType;
case clsvCurrEduClsTeacher.con_BeginWeek:
return this.beginWeek;
case clsvCurrEduClsTeacher.con_CurrStuNumValid:
return this.currStuNumValid;
case clsvCurrEduClsTeacher.con_CurrStuNum:
return this.currStuNum;
case clsvCurrEduClsTeacher.con_IdTeacher:
return this.idTeacher;
case clsvCurrEduClsTeacher.con_TeacherId:
return this.teacherId;
case clsvCurrEduClsTeacher.con_TeacherName:
return this.teacherName;
case clsvCurrEduClsTeacher.con_IdProfGrade:
return this.idProfGrade;
case clsvCurrEduClsTeacher.con_ProfenssionalGradeName:
return this.profenssionalGradeName;
case clsvCurrEduClsTeacher.con_DegreeName:
return this.degreeName;
case clsvCurrEduClsTeacher.con_Birthday:
return this.birthday;
case clsvCurrEduClsTeacher.con_IsGpUser:
return this.isGpUser;
case clsvCurrEduClsTeacher.con_CollegeName:
return this.collegeName;
case clsvCurrEduClsTeacher.con_IdPk2EduClsTeacherType:
return this.idPk2EduClsTeacherType;
case clsvCurrEduClsTeacher.con_EduClsTeacherTypeId:
return this.eduClsTeacherTypeId;
case clsvCurrEduClsTeacher.con_EduClsTeacherTypeDesc:
return this.eduClsTeacherTypeDesc;
case clsvCurrEduClsTeacher.con_SchoolTerm:
return this.schoolTerm;
case clsvCurrEduClsTeacher.con_SchoolYear:
return this.schoolYear;
case clsvCurrEduClsTeacher.con_OpenBeginDate:
return this.openBeginDate;
case clsvCurrEduClsTeacher.con_OpenEndDate:
return this.openEndDate;
case clsvCurrEduClsTeacher.con_OrderNum:
return this.orderNum;
case clsvCurrEduClsTeacher.con_UpdDate:
return this.updDate;
case clsvCurrEduClsTeacher.con_UpdUser:
return this.updUser;
case clsvCurrEduClsTeacher.con_Memo:
return this.memo;
case clsvCurrEduClsTeacher.con_CollegeName4EduCls:
return this.collegeName4EduCls;
case clsvCurrEduClsTeacher.con_CollegeName4Teacher:
return this.collegeName4Teacher;
case clsvCurrEduClsTeacher.con_UserTypeId:
return this.userTypeId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsTeacher]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdEduClsTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduClsTeacher(): string {return "idEduClsTeacher";}    //教学班老师流水号

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
 * 常量:"EduClsTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTypeId(): string {return "eduClsTypeId";}    //教学班类型Id

 /**
 * 常量:"EduClsTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTypeName(): string {return "eduClsTypeName";}    //教学班类型名称

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
 * 常量:"ExampleImgPath"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExampleImgPath(): string {return "exampleImgPath";}    //示例图路径

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
 * 常量:"IdEduWay"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduWay(): string {return "idEduWay";}    //教学方式流水号

 /**
 * 常量:"TotalLessonQty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TotalLessonQty(): string {return "totalLessonQty";}    //总课时数

 /**
 * 常量:"MaxStuQty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MaxStuQty(): string {return "maxStuQty";}    //最大学生数

 /**
 * 常量:"WeekQty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekQty(): string {return "weekQty";}    //总周数

 /**
 * 常量:"ScheUnitPW"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ScheUnitPW(): string {return "scheUnitPW";}    //周排课次数

 /**
 * 常量:"WeekStatusId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WeekStatusId(): string {return "weekStatusId";}    //周状态编号(单,双,全周)

 /**
 * 常量:"CustomerWeek"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CustomerWeek(): string {return "customerWeek";}    //自定义上课周

 /**
 * 常量:"LessonQtyPerWeek"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LessonQtyPerWeek(): string {return "lessonQtyPerWeek";}    //周课时数

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"GradeBaseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeBaseId(): string {return "gradeBaseId";}    //年级代号

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
 * 常量:"IdScoreType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdScoreType(): string {return "idScoreType";}    //成绩类型流水号

 /**
 * 常量:"IsProportionalCtrl"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsProportionalCtrl(): string {return "isProportionalCtrl";}    //是否比例控制

 /**
 * 常量:"IdExamType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdExamType(): string {return "idExamType";}    //考试方式流水号

 /**
 * 常量:"BeginWeek"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_BeginWeek(): string {return "beginWeek";}    //开始周

 /**
 * 常量:"CurrStuNumValid"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrStuNumValid(): string {return "currStuNumValid";}    //CurrStuNum_Valid

 /**
 * 常量:"CurrStuNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrStuNum(): string {return "currStuNum";}    //当前学生数

 /**
 * 常量:"IdTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeacher(): string {return "idTeacher";}    //教师流水号

 /**
 * 常量:"TeacherId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeacherId(): string {return "teacherId";}    //教师工号

 /**
 * 常量:"TeacherName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeacherName(): string {return "teacherName";}    //教师姓名

 /**
 * 常量:"IdProfGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdProfGrade(): string {return "idProfGrade";}    //专业职称流水号

 /**
 * 常量:"ProfenssionalGradeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ProfenssionalGradeName(): string {return "profenssionalGradeName";}    //专业职称

 /**
 * 常量:"DegreeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DegreeName(): string {return "degreeName";}    //学位名称

 /**
 * 常量:"Birthday"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

 /**
 * 常量:"IsGpUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsGpUser(): string {return "isGpUser";}    //是否Gp用户

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"IdPk2EduClsTeacherType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPk2EduClsTeacherType(): string {return "idPk2EduClsTeacherType";}    //教学班老师角色(主讲,辅导)流水号

 /**
 * 常量:"EduClsTeacherTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTeacherTypeId(): string {return "eduClsTeacherTypeId";}    //教学班教学类型ID

 /**
 * 常量:"EduClsTeacherTypeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTeacherTypeDesc(): string {return "eduClsTeacherTypeDesc";}    //教学班教师类型名

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
 * 常量:"OpenBeginDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OpenBeginDate(): string {return "openBeginDate";}    //开放开始日期

 /**
 * 常量:"OpenEndDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OpenEndDate(): string {return "openEndDate";}    //开放结束日期

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

 /**
 * 常量:"CollegeName4EduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeName4EduCls(): string {return "collegeName4EduCls";}    //学院名_教学班

 /**
 * 常量:"CollegeName4Teacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeName4Teacher(): string {return "collegeName4Teacher";}    //学院名_教师

 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id
}
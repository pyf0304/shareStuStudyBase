
 /**
 * 类名:clsvCurrEduCls
 * 表名:vCurrEduCls(01120126)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:30:15
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
 * v当前教学班(vCurrEduCls)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvCurrEduCls 
{
public static _CurrTabName= "vCurrEduCls"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 57;
public static AttributeName = ["idCurrEduCls", "currEduClsId", "eduClsName", "eduClsTypeId", "eduClsTypeName", "courseId", "courseCode", "courseDescription", "courseName", "viewCount", "exampleImgPath", "teachingSolutionId", "teachingSolutionName", "idTeacher", "teacherId", "teacherName", "idXzCollege", "collegeId", "collegeName", "clgEnglishName", "phoneNumber", "idXzMajor", "majorName", "idEduWay", "idClassRoomType", "totalLessonQty", "maxStuQty", "weekQty", "scheUnitPW", "weekStatusId", "customerWeek", "lessonQtyPerWeek", "mark", "idUniZone", "idGradeBase", "gradeBaseId", "gradeBaseName", "gradeBaseNameA", "isEffective", "isForPaperReading", "schoolYear", "schoolTerm", "idCourseType", "courseTypeId", "courseTypeName", "isDegree", "idScoreType", "getScoreWayId", "isProportionalCtrl", "idExamType", "beginWeek", "userTypeId", "modifyDate", "modifyUserId", "memo", "currStuNumValid", "currStuNum"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idCurrEduCls = "";    //教学班流水号
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名
public eduClsTypeId = "";    //教学班类型Id
public eduClsTypeName = "";    //教学班类型名称
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseDescription = "";    //课程描述
public courseName = "";    //课程名称
public viewCount = 0;    //浏览量
public exampleImgPath = "";    //示例图路径
public teachingSolutionId = "";    //教学方案Id
public teachingSolutionName = "";    //教学方案名称
public idTeacher = "";    //教师流水号
public teacherId = "";    //教师工号
public teacherName = "";    //教师姓名
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public clgEnglishName = "";    //ClgEnglishName
public phoneNumber = "";    //电话
public idXzMajor = "";    //专业流水号
public majorName = "";    //专业名称
public idEduWay = "";    //教学方式流水号
public idClassRoomType = "";    //教室类型流水号
public totalLessonQty = 0;    //总课时数
public maxStuQty = 0;    //最大学生数
public weekQty = 0;    //总周数
public scheUnitPW = 0;    //周排课次数
public weekStatusId = "";    //周状态编号(单,双,全周)
public customerWeek = "";    //自定义上课周
public lessonQtyPerWeek = 0;    //周课时数
public mark = 0;    //获得学分
public idUniZone = "";    //校区流水号
public idGradeBase = "";    //入学年级流水号
public gradeBaseId = "";    //年级代号
public gradeBaseName = "";    //年级名称
public gradeBaseNameA = "";    //年级名称缩写
public isEffective = false;    //是否有效
public isForPaperReading = false;    //是否参与论文阅读
public schoolYear = "";    //学年
public schoolTerm = "";    //学期
public idCourseType = "";    //课程类型流水号
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public isDegree = false;    //是否学位课
public idScoreType = "";    //成绩类型流水号
public getScoreWayId = "";    //获得成绩方式Id
public isProportionalCtrl = false;    //是否比例控制
public idExamType = "";    //考试方式流水号
public beginWeek = 0;    //开始周
public userTypeId = "";    //用户类型Id
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注
public currStuNumValid = 0;    //CurrStuNum_Valid
public currStuNum = 0;    //当前学生数

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
case clsvCurrEduCls.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduCls.con_CurrEduClsId:
return this.currEduClsId;
case clsvCurrEduCls.con_EduClsName:
return this.eduClsName;
case clsvCurrEduCls.con_EduClsTypeId:
return this.eduClsTypeId;
case clsvCurrEduCls.con_EduClsTypeName:
return this.eduClsTypeName;
case clsvCurrEduCls.con_CourseId:
return this.courseId;
case clsvCurrEduCls.con_CourseCode:
return this.courseCode;
case clsvCurrEduCls.con_CourseDescription:
return this.courseDescription;
case clsvCurrEduCls.con_CourseName:
return this.courseName;
case clsvCurrEduCls.con_ViewCount:
return this.viewCount;
case clsvCurrEduCls.con_ExampleImgPath:
return this.exampleImgPath;
case clsvCurrEduCls.con_TeachingSolutionId:
return this.teachingSolutionId;
case clsvCurrEduCls.con_TeachingSolutionName:
return this.teachingSolutionName;
case clsvCurrEduCls.con_IdTeacher:
return this.idTeacher;
case clsvCurrEduCls.con_TeacherId:
return this.teacherId;
case clsvCurrEduCls.con_TeacherName:
return this.teacherName;
case clsvCurrEduCls.con_IdXzCollege:
return this.idXzCollege;
case clsvCurrEduCls.con_CollegeId:
return this.collegeId;
case clsvCurrEduCls.con_CollegeName:
return this.collegeName;
case clsvCurrEduCls.con_ClgEnglishName:
return this.clgEnglishName;
case clsvCurrEduCls.con_PhoneNumber:
return this.phoneNumber;
case clsvCurrEduCls.con_IdXzMajor:
return this.idXzMajor;
case clsvCurrEduCls.con_MajorName:
return this.majorName;
case clsvCurrEduCls.con_IdEduWay:
return this.idEduWay;
case clsvCurrEduCls.con_IdClassRoomType:
return this.idClassRoomType;
case clsvCurrEduCls.con_TotalLessonQty:
return this.totalLessonQty;
case clsvCurrEduCls.con_MaxStuQty:
return this.maxStuQty;
case clsvCurrEduCls.con_WeekQty:
return this.weekQty;
case clsvCurrEduCls.con_ScheUnitPW:
return this.scheUnitPW;
case clsvCurrEduCls.con_WeekStatusId:
return this.weekStatusId;
case clsvCurrEduCls.con_CustomerWeek:
return this.customerWeek;
case clsvCurrEduCls.con_LessonQtyPerWeek:
return this.lessonQtyPerWeek;
case clsvCurrEduCls.con_Mark:
return this.mark;
case clsvCurrEduCls.con_IdUniZone:
return this.idUniZone;
case clsvCurrEduCls.con_IdGradeBase:
return this.idGradeBase;
case clsvCurrEduCls.con_GradeBaseId:
return this.gradeBaseId;
case clsvCurrEduCls.con_GradeBaseName:
return this.gradeBaseName;
case clsvCurrEduCls.con_GradeBaseNameA:
return this.gradeBaseNameA;
case clsvCurrEduCls.con_IsEffective:
return this.isEffective;
case clsvCurrEduCls.con_IsForPaperReading:
return this.isForPaperReading;
case clsvCurrEduCls.con_SchoolYear:
return this.schoolYear;
case clsvCurrEduCls.con_SchoolTerm:
return this.schoolTerm;
case clsvCurrEduCls.con_IdCourseType:
return this.idCourseType;
case clsvCurrEduCls.con_CourseTypeId:
return this.courseTypeId;
case clsvCurrEduCls.con_CourseTypeName:
return this.courseTypeName;
case clsvCurrEduCls.con_IsDegree:
return this.isDegree;
case clsvCurrEduCls.con_IdScoreType:
return this.idScoreType;
case clsvCurrEduCls.con_GetScoreWayId:
return this.getScoreWayId;
case clsvCurrEduCls.con_IsProportionalCtrl:
return this.isProportionalCtrl;
case clsvCurrEduCls.con_IdExamType:
return this.idExamType;
case clsvCurrEduCls.con_BeginWeek:
return this.beginWeek;
case clsvCurrEduCls.con_UserTypeId:
return this.userTypeId;
case clsvCurrEduCls.con_ModifyDate:
return this.modifyDate;
case clsvCurrEduCls.con_ModifyUserId:
return this.modifyUserId;
case clsvCurrEduCls.con_Memo:
return this.memo;
case clsvCurrEduCls.con_CurrStuNumValid:
return this.currStuNumValid;
case clsvCurrEduCls.con_CurrStuNum:
return this.currStuNum;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduCls]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"CourseDescription"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseDescription(): string {return "courseDescription";}    //课程描述

 /**
 * 常量:"CourseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"ViewCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

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
 * 常量:"ClgEnglishName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClgEnglishName(): string {return "clgEnglishName";}    //ClgEnglishName

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"IdEduWay"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduWay(): string {return "idEduWay";}    //教学方式流水号

 /**
 * 常量:"IdClassRoomType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdClassRoomType(): string {return "idClassRoomType";}    //教室类型流水号

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
 * 常量:"GradeBaseNameA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeBaseNameA(): string {return "gradeBaseNameA";}    //年级名称缩写

 /**
 * 常量:"IsEffective"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsEffective(): string {return "isEffective";}    //是否有效

 /**
 * 常量:"IsForPaperReading"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsForPaperReading(): string {return "isForPaperReading";}    //是否参与论文阅读

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

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
 * 常量:"GetScoreWayId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GetScoreWayId(): string {return "getScoreWayId";}    //获得成绩方式Id

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
 * 常量:"UserTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

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
}

 /**
 * 类名:clscc_Course
 * 表名:cc_Course(01120056)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:34:00
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程学习(CourseLearning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 课程(cc_Course)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_Course 
{
public static _CurrTabName= "cc_Course"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 25;
public static AttributeName = ["courseId", "courseCode", "courseDescription", "courseName", "courseTypeId", "createDate", "excellentTypeId", "excellentYear", "isBuildingCourse", "isDoubleLanguageCourse", "isOpen", "isRecommendedCourse", "isSelfPropelledCourse", "operationDate", "orderNum", "outerLink", "viewCount", "themeId", "idSchool", "idXzMajor", "idXzCollege", "isHasOpQues", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseDescription = "";    //课程描述
public courseName = "";    //课程名称
public courseTypeId = "";    //课程类型ID
public createDate = "";    //建立日期
public excellentTypeId = "";    //精品课程类型Id
public excellentYear = 0;    //课程年份
public isBuildingCourse = false;    //是否已建设课程
public isDoubleLanguageCourse = false;    //是否双语课程
public isOpen = false;    //是否公开
public isRecommendedCourse = false;    //是否推荐课程
public isSelfPropelledCourse = false;    //是否自荐课程
public operationDate = "";    //操作时间
public orderNum = 0;    //序号
public outerLink = "";    //外链地址
public viewCount = 0;    //浏览量
public themeId = "";    //主题Id
public idSchool = "";    //学校流水号
public idXzMajor = "";    //专业流水号
public idXzCollege = "";    //学院流水号
public isHasOpQues = false;    //是否有操作题
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
case clscc_Course.con_CourseId:
return this.courseId;
case clscc_Course.con_CourseCode:
return this.courseCode;
case clscc_Course.con_CourseDescription:
return this.courseDescription;
case clscc_Course.con_CourseName:
return this.courseName;
case clscc_Course.con_CourseTypeId:
return this.courseTypeId;
case clscc_Course.con_CreateDate:
return this.createDate;
case clscc_Course.con_ExcellentTypeId:
return this.excellentTypeId;
case clscc_Course.con_ExcellentYear:
return this.excellentYear;
case clscc_Course.con_IsBuildingCourse:
return this.isBuildingCourse;
case clscc_Course.con_IsDoubleLanguageCourse:
return this.isDoubleLanguageCourse;
case clscc_Course.con_IsOpen:
return this.isOpen;
case clscc_Course.con_IsRecommendedCourse:
return this.isRecommendedCourse;
case clscc_Course.con_IsSelfPropelledCourse:
return this.isSelfPropelledCourse;
case clscc_Course.con_OperationDate:
return this.operationDate;
case clscc_Course.con_OrderNum:
return this.orderNum;
case clscc_Course.con_OuterLink:
return this.outerLink;
case clscc_Course.con_ViewCount:
return this.viewCount;
case clscc_Course.con_ThemeId:
return this.themeId;
case clscc_Course.con_IdSchool:
return this.idSchool;
case clscc_Course.con_IdXzMajor:
return this.idXzMajor;
case clscc_Course.con_IdXzCollege:
return this.idXzCollege;
case clscc_Course.con_IsHasOpQues:
return this.isHasOpQues;
case clscc_Course.con_UpdDate:
return this.updDate;
case clscc_Course.con_UpdUserId:
return this.updUserId;
case clscc_Course.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_Course]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"CourseTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseTypeId(): string {return "courseTypeId";}    //课程类型ID

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"ExcellentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExcellentTypeId(): string {return "excellentTypeId";}    //精品课程类型Id

 /**
 * 常量:"ExcellentYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExcellentYear(): string {return "excellentYear";}    //课程年份

 /**
 * 常量:"IsBuildingCourse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsBuildingCourse(): string {return "isBuildingCourse";}    //是否已建设课程

 /**
 * 常量:"IsDoubleLanguageCourse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDoubleLanguageCourse(): string {return "isDoubleLanguageCourse";}    //是否双语课程

 /**
 * 常量:"IsOpen"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOpen(): string {return "isOpen";}    //是否公开

 /**
 * 常量:"IsRecommendedCourse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRecommendedCourse(): string {return "isRecommendedCourse";}    //是否推荐课程

 /**
 * 常量:"IsSelfPropelledCourse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSelfPropelledCourse(): string {return "isSelfPropelledCourse";}    //是否自荐课程

 /**
 * 常量:"OperationDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OperationDate(): string {return "operationDate";}    //操作时间

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"OuterLink"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OuterLink(): string {return "outerLink";}    //外链地址

 /**
 * 常量:"ViewCount"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ViewCount(): string {return "viewCount";}    //浏览量

 /**
 * 常量:"ThemeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ThemeId(): string {return "themeId";}    //主题Id

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IsHasOpQues"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsHasOpQues(): string {return "isHasOpQues";}    //是否有操作题

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

 /**
 * 类名:clscc_CourseTeacherRelation
 * 表名:cc_CourseTeacherRelation(01120097)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:29:26
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 课程教师关系(cc_CourseTeacherRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_CourseTeacherRelation 
{
public static _CurrTabName= "cc_CourseTeacherRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseTeacherRelationId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["courseTeacherRelationId", "courseId", "idTeacher", "isCourseManager", "lastVisitedDate", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseTeacherRelationId = 0;    //课程教师关系表流水号
public courseId = "";    //课程Id
public idTeacher = "";    //教师流水号
public isCourseManager = false;    //是否课程主要人
public lastVisitedDate = "";    //最后访问时间
public updDate = "";    //修改日期
public updUser = "";    //修改人
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
case clscc_CourseTeacherRelation.con_CourseTeacherRelationId:
return this.courseTeacherRelationId;
case clscc_CourseTeacherRelation.con_CourseId:
return this.courseId;
case clscc_CourseTeacherRelation.con_IdTeacher:
return this.idTeacher;
case clscc_CourseTeacherRelation.con_IsCourseManager:
return this.isCourseManager;
case clscc_CourseTeacherRelation.con_LastVisitedDate:
return this.lastVisitedDate;
case clscc_CourseTeacherRelation.con_UpdDate:
return this.updDate;
case clscc_CourseTeacherRelation.con_UpdUser:
return this.updUser;
case clscc_CourseTeacherRelation.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseTeacherRelation]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CourseTeacherRelationId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseTeacherRelationId(): string {return "courseTeacherRelationId";}    //课程教师关系表流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeacher(): string {return "idTeacher";}    //教师流水号

 /**
 * 常量:"IsCourseManager"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCourseManager(): string {return "isCourseManager";}    //是否课程主要人

 /**
 * 常量:"LastVisitedDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LastVisitedDate(): string {return "lastVisitedDate";}    //最后访问时间

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
}
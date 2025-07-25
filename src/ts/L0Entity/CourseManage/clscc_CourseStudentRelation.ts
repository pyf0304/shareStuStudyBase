
 /**
 * 类名:clscc_CourseStudentRelation
 * 表名:cc_CourseStudentRelation(01120150)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:29
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
 * 用户答题结果(cc_CourseStudentRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_CourseStudentRelation 
{
public static _CurrTabName= "cc_CourseStudentRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseStudentRelationId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["courseStudentRelationId", "courseId", "idStudentInfo", "lastVisitedDate", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseStudentRelationId = 0;    //课程学生关系表流水号
public courseId = "";    //课程Id
public idStudentInfo = "";    //学生流水号
public lastVisitedDate = "";    //最后访问时间
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
case clscc_CourseStudentRelation.con_CourseStudentRelationId:
return this.courseStudentRelationId;
case clscc_CourseStudentRelation.con_CourseId:
return this.courseId;
case clscc_CourseStudentRelation.con_IdStudentInfo:
return this.idStudentInfo;
case clscc_CourseStudentRelation.con_LastVisitedDate:
return this.lastVisitedDate;
case clscc_CourseStudentRelation.con_UpdDate:
return this.updDate;
case clscc_CourseStudentRelation.con_UpdUserId:
return this.updUserId;
case clscc_CourseStudentRelation.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseStudentRelation]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CourseStudentRelationId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseStudentRelationId(): string {return "courseStudentRelationId";}    //课程学生关系表流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

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
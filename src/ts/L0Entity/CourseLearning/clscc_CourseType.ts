
 /**
 * 类名:clscc_CourseType
 * 表名:cc_CourseType(01120057)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:34:18
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
 * 课程类型(cc_CourseType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_CourseType 
{
public static _CurrTabName= "cc_CourseType"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["courseTypeId", "courseTypeName", "idSchool", "isUse", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public idSchool = "";    //学校流水号
public isUse = false;    //是否使用
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
case clscc_CourseType.con_CourseTypeId:
return this.courseTypeId;
case clscc_CourseType.con_CourseTypeName:
return this.courseTypeName;
case clscc_CourseType.con_IdSchool:
return this.idSchool;
case clscc_CourseType.con_IsUse:
return this.isUse;
case clscc_CourseType.con_UpdDate:
return this.updDate;
case clscc_CourseType.con_UpdUserId:
return this.updUserId;
case clscc_CourseType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_CourseType]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"IsUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsUse(): string {return "isUse";}    //是否使用

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
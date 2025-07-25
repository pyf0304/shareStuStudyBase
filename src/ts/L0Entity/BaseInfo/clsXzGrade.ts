
 /**
 * 类名:clsXzGrade
 * 表名:XzGrade(01120349)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:36:09
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 年级(XzGrade)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzGrade 
{
public static _CurrTabName= "XzGrade"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdGrade"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["idGrade", "gradeName", "idStudyLevel", "gradeLeaderId", "gradeIndex", "modifyUserId", "modifyDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idGrade = "";    //年级流水号
public gradeName = "";    //年级名称
public idStudyLevel = "";    //学段流水号
public gradeLeaderId = "";    //年级组长Id
public gradeIndex = 0;    //年级序号
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期
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
case clsXzGrade.con_IdGrade:
return this.idGrade;
case clsXzGrade.con_GradeName:
return this.gradeName;
case clsXzGrade.con_IdStudyLevel:
return this.idStudyLevel;
case clsXzGrade.con_GradeLeaderId:
return this.gradeLeaderId;
case clsXzGrade.con_GradeIndex:
return this.gradeIndex;
case clsXzGrade.con_ModifyUserId:
return this.modifyUserId;
case clsXzGrade.con_ModifyDate:
return this.modifyDate;
case clsXzGrade.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzGrade]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"GradeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeName(): string {return "gradeName";}    //年级名称

 /**
 * 常量:"IdStudyLevel"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudyLevel(): string {return "idStudyLevel";}    //学段流水号

 /**
 * 常量:"GradeLeaderId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeLeaderId(): string {return "gradeLeaderId";}    //年级组长Id

 /**
 * 常量:"GradeIndex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeIndex(): string {return "gradeIndex";}    //年级序号

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
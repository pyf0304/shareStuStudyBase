
 /**
 * 类名:clsEduClsTeacherType
 * 表名:EduClsTeacherType(01120133)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:28:51
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
 * 教学班教师角色表2(EduClsTeacherType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsEduClsTeacherType 
{
public static _CurrTabName= "EduClsTeacherType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsTeacherType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["idEduClsTeacherType", "eduClsTeacherTypeId", "eduClsTeacherTypeDesc"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idEduClsTeacherType = "";    //教学班老师角色(主讲,辅导)流水号
public eduClsTeacherTypeId = "";    //教学班教学类型ID
public eduClsTeacherTypeDesc = "";    //教学班教师类型名

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
case clsEduClsTeacherType.con_IdEduClsTeacherType:
return this.idEduClsTeacherType;
case clsEduClsTeacherType.con_EduClsTeacherTypeId:
return this.eduClsTeacherTypeId;
case clsEduClsTeacherType.con_EduClsTeacherTypeDesc:
return this.eduClsTeacherTypeDesc;
default:
strMsg = `字段名:[${strFldName}]在表对象:[EduClsTeacherType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdEduClsTeacherType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduClsTeacherType(): string {return "idEduClsTeacherType";}    //教学班老师角色(主讲,辅导)流水号

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
}
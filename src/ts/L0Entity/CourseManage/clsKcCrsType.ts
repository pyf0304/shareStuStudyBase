
 /**
 * 类名:clsKcCrsType
 * 表名:KcCrsType(01120136)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 20:44:41
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
 * 课程类型(KcCrsType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsKcCrsType 
{
public static _CurrTabName= "KcCrsType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCourseType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 14;
public static AttributeName = ["idCourseType", "courseTypeId", "courseTypeName", "isMinor", "reqOrElect", "pointEnabled", "idCrsTypeAdminType", "isCrtlScorePropor", "isCrtlEduclsMember", "isElectiveType", "isOccupyResources", "isDistinguishDegree", "modifyUserId", "modifyDate"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idCourseType = "";    //课程类型流水号
public courseTypeId = "";    //课程类型ID
public courseTypeName = "";    //课程类型名称
public isMinor = false;    //是否副修
public reqOrElect = false;    //是否必修
public pointEnabled = false;    //是否计学分
public idCrsTypeAdminType = "";    //课程类型管理类型流水号
public isCrtlScorePropor = false;    //是否控制成绩比例
public isCrtlEduclsMember = false;    //是否控制教学班人数
public isElectiveType = false;    //是否可选类型
public isOccupyResources = false;    //是否占用资源
public isDistinguishDegree = false;    //是否区分学位
public modifyUserId = "";    //修改人
public modifyDate = "";    //修改日期

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
case clsKcCrsType.con_IdCourseType:
return this.idCourseType;
case clsKcCrsType.con_CourseTypeId:
return this.courseTypeId;
case clsKcCrsType.con_CourseTypeName:
return this.courseTypeName;
case clsKcCrsType.con_IsMinor:
return this.isMinor;
case clsKcCrsType.con_ReqOrElect:
return this.reqOrElect;
case clsKcCrsType.con_PointEnabled:
return this.pointEnabled;
case clsKcCrsType.con_IdCrsTypeAdminType:
return this.idCrsTypeAdminType;
case clsKcCrsType.con_IsCrtlScorePropor:
return this.isCrtlScorePropor;
case clsKcCrsType.con_IsCrtlEduclsMember:
return this.isCrtlEduclsMember;
case clsKcCrsType.con_IsElectiveType:
return this.isElectiveType;
case clsKcCrsType.con_IsOccupyResources:
return this.isOccupyResources;
case clsKcCrsType.con_IsDistinguishDegree:
return this.isDistinguishDegree;
case clsKcCrsType.con_ModifyUserId:
return this.modifyUserId;
case clsKcCrsType.con_ModifyDate:
return this.modifyDate;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KcCrsType]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"IsMinor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMinor(): string {return "isMinor";}    //是否副修

 /**
 * 常量:"ReqOrElect"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReqOrElect(): string {return "reqOrElect";}    //是否必修

 /**
 * 常量:"PointEnabled"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PointEnabled(): string {return "pointEnabled";}    //是否计学分

 /**
 * 常量:"IdCrsTypeAdminType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCrsTypeAdminType(): string {return "idCrsTypeAdminType";}    //课程类型管理类型流水号

 /**
 * 常量:"IsCrtlScorePropor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCrtlScorePropor(): string {return "isCrtlScorePropor";}    //是否控制成绩比例

 /**
 * 常量:"IsCrtlEduclsMember"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCrtlEduclsMember(): string {return "isCrtlEduclsMember";}    //是否控制教学班人数

 /**
 * 常量:"IsElectiveType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsElectiveType(): string {return "isElectiveType";}    //是否可选类型

 /**
 * 常量:"IsOccupyResources"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsOccupyResources(): string {return "isOccupyResources";}    //是否占用资源

 /**
 * 常量:"IsDistinguishDegree"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDistinguishDegree(): string {return "isDistinguishDegree";}    //是否区分学位

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
}
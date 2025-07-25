
 /**
 * 类名:clsXzMajorType
 * 表名:XzMajorType(01120068)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:36:18
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
 * 专业类型(XzMajorType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzMajorType 
{
public static _CurrTabName= "XzMajorType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdMajorType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["idMajorType", "majorTypeID", "majorTypeName", "modifyUserId", "modifyDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idMajorType = "";    //专业类型(文理工)流水号
public majorTypeID = "";    //专业类型代号
public majorTypeName = "";    //专业类型名称
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
case clsXzMajorType.con_IdMajorType:
return this.idMajorType;
case clsXzMajorType.con_MajorTypeID:
return this.majorTypeID;
case clsXzMajorType.con_MajorTypeName:
return this.majorTypeName;
case clsXzMajorType.con_ModifyUserId:
return this.modifyUserId;
case clsXzMajorType.con_ModifyDate:
return this.modifyDate;
case clsXzMajorType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzMajorType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdMajorType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdMajorType(): string {return "idMajorType";}    //专业类型(文理工)流水号

 /**
 * 常量:"MajorTypeID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorTypeID(): string {return "majorTypeID";}    //专业类型代号

 /**
 * 常量:"MajorTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorTypeName(): string {return "majorTypeName";}    //专业类型名称

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
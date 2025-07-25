
 /**
 * 类名:clsSchoolType
 * 表名:SchoolType(01120030)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:25
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学校类型(SchoolType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSchoolType 
{
public static _CurrTabName= "SchoolType"; //当前表名,与该类相关的表名
public static _KeyFldName= "SchoolTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 3;
public static AttributeName = ["schoolTypeId", "schoolTypeName", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public schoolTypeId = "";    //学校类型Id
public schoolTypeName = "";    //学校类型名
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
case clsSchoolType.con_SchoolTypeId:
return this.schoolTypeId;
case clsSchoolType.con_SchoolTypeName:
return this.schoolTypeName;
case clsSchoolType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SchoolType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"SchoolTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTypeId(): string {return "schoolTypeId";}    //学校类型Id

 /**
 * 常量:"SchoolTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTypeName(): string {return "schoolTypeName";}    //学校类型名

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
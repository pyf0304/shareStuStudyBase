
 /**
 * 类名:clsXzDegreeType
 * 表名:XzDegreeType(01120067)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:36:07
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
 * 行政学位类型(XzDegreeType)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzDegreeType 
{
public static _CurrTabName= "XzDegreeType"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdDegreeType"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["idDegreeType", "xwTypeID", "xwTypeDesc", "xwTypeDescEN", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idDegreeType = "";    //学位类型流水号
public xwTypeID = "";    //学位类型ID
public xwTypeDesc = "";    //学位类型名称
public xwTypeDescEN = "";    //学位类型名称_EN
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
case clsXzDegreeType.con_IdDegreeType:
return this.idDegreeType;
case clsXzDegreeType.con_XwTypeID:
return this.xwTypeID;
case clsXzDegreeType.con_XwTypeDesc:
return this.xwTypeDesc;
case clsXzDegreeType.con_XwTypeDescEN:
return this.xwTypeDescEN;
case clsXzDegreeType.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzDegreeType]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdDegreeType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDegreeType(): string {return "idDegreeType";}    //学位类型流水号

 /**
 * 常量:"XwTypeID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_XwTypeID(): string {return "xwTypeID";}    //学位类型ID

 /**
 * 常量:"XwTypeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_XwTypeDesc(): string {return "xwTypeDesc";}    //学位类型名称

 /**
 * 常量:"XwTypeDescEN"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_XwTypeDescEN(): string {return "xwTypeDescEN";}    //学位类型名称_EN

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
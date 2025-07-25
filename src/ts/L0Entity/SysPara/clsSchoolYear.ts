
 /**
 * 类名:clsSchoolYear
 * 表名:SchoolYear(01120134)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:54:32
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
 * 学年(SchoolYear)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsSchoolYear 
{
public static _CurrTabName= "SchoolYear"; //当前表名,与该类相关的表名
public static _KeyFldName= "SchoolYear"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 4;
public static AttributeName = ["schoolYear", "schoolYearName", "isCurrentSchoolYear", "isVisible"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public schoolYear = "";    //学年
public schoolYearName = "";    //学年名
public isCurrentSchoolYear = false;    //是否当前学年
public isVisible = false;    //是否显示

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
case clsSchoolYear.con_SchoolYear:
return this.schoolYear;
case clsSchoolYear.con_SchoolYearName:
return this.schoolYearName;
case clsSchoolYear.con_IsCurrentSchoolYear:
return this.isCurrentSchoolYear;
case clsSchoolYear.con_IsVisible:
return this.isVisible;
default:
strMsg = `字段名:[${strFldName}]在表对象:[SchoolYear]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"SchoolYearName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYearName(): string {return "schoolYearName";}    //学年名

 /**
 * 常量:"IsCurrentSchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCurrentSchoolYear(): string {return "isCurrentSchoolYear";}    //是否当前学年

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示
}
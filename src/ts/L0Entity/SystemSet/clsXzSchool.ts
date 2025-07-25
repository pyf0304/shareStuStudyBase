
 /**
 * 类名:clsXzSchool
 * 表名:XzSchool(01120029)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:29:13
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 学校(XzSchool)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzSchool 
{
public static _CurrTabName= "XzSchool"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdSchool"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["idSchool", "schoolId", "schoolName", "schoolENName", "schoolNameA", "schoolTypeId", "isCurrentUse", "updDate", "updUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idSchool = "";    //学校流水号
public schoolId = "";    //学校编号
public schoolName = "";    //学校名称
public schoolENName = "";    //学校英文名
public schoolNameA = "";    //学校简称
public schoolTypeId = "";    //学校类型Id
public isCurrentUse = false;    //是否当前使用
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
case clsXzSchool.con_IdSchool:
return this.idSchool;
case clsXzSchool.con_SchoolId:
return this.schoolId;
case clsXzSchool.con_SchoolName:
return this.schoolName;
case clsXzSchool.con_SchoolENName:
return this.schoolENName;
case clsXzSchool.con_SchoolNameA:
return this.schoolNameA;
case clsXzSchool.con_SchoolTypeId:
return this.schoolTypeId;
case clsXzSchool.con_IsCurrentUse:
return this.isCurrentUse;
case clsXzSchool.con_UpdDate:
return this.updDate;
case clsXzSchool.con_UpdUserId:
return this.updUserId;
case clsXzSchool.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzSchool]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"SchoolId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolId(): string {return "schoolId";}    //学校编号

 /**
 * 常量:"SchoolName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolName(): string {return "schoolName";}    //学校名称

 /**
 * 常量:"SchoolENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolENName(): string {return "schoolENName";}    //学校英文名

 /**
 * 常量:"SchoolNameA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolNameA(): string {return "schoolNameA";}    //学校简称

 /**
 * 常量:"SchoolTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTypeId(): string {return "schoolTypeId";}    //学校类型Id

 /**
 * 常量:"IsCurrentUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsCurrentUse(): string {return "isCurrentUse";}    //是否当前使用

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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumXzSchool
{
 /**
 * 未知
 **/
static readonly Unknown_0000 = "0000";
 /**
 * 淮阴师范学院
 **/
static readonly HYSF_0001 = "0001";
 /**
 * 上海师范大学
 **/
static readonly SHNU_0002 = "0002";
 /**
 * 温州大学
 **/
static readonly WZU_0003 = "0003";
 /**
 * 宁波大学
 **/
static readonly NBU_0004 = "0004";
 /**
 * 淮阴师范测试
 **/
static readonly HYSF_TEST_0005 = "0005";
 /**
 * 江苏二师
 **/
static readonly JSIE_0006 = "0006";
 /**
 * 上海泰泽
 **/
static readonly TZ_0007 = "0007";
 /**
 * 上海师大第二附属中学
 **/
static readonly SSDEFZ_0008 = "0008";
 /**
 * 上海市交通局下属单位
 **/
static readonly JT_0009 = "0009";
 /**
 * 上海师大智能语音学习平台
 **/
static readonly YYXX_0010 = "0010";
 /**
 * BB
 **/
static readonly BB_0015 = "0015";
}
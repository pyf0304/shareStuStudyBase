
 /**
 * 类名:clsvStudentInfo_SimEN
 * 表名:vStudentInfo_Sim(01120945)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:54
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * vStudentInfo_Sim(vStudentInfo_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvStudentInfo_SimEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = "IdStudentInfo in (Select IdStudentInfo from CurrEduClsStu where IdCurrEduCls='{0}')"; //条件格式串
public static _CurrTabName= "vStudentInfo_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudentInfo"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["idStudentInfo", "stuId", "stuName", "idSex", "idPolitics", "idStuType", "idGrade", "idGradeBase", "idXzMajor", "idXzCollege", "idAdminCls", "userId"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsvStudentInfo_SimEN.con_IdStudentInfo:
return this.idStudentInfo;
case clsvStudentInfo_SimEN.con_StuId:
return this.stuId;
case clsvStudentInfo_SimEN.con_StuName:
return this.stuName;
case clsvStudentInfo_SimEN.con_IdSex:
return this.idSex;
case clsvStudentInfo_SimEN.con_IdPolitics:
return this.idPolitics;
case clsvStudentInfo_SimEN.con_IdStuType:
return this.idStuType;
case clsvStudentInfo_SimEN.con_IdGrade:
return this.idGrade;
case clsvStudentInfo_SimEN.con_IdGradeBase:
return this.idGradeBase;
case clsvStudentInfo_SimEN.con_IdXzMajor:
return this.idXzMajor;
case clsvStudentInfo_SimEN.con_IdXzCollege:
return this.idXzCollege;
case clsvStudentInfo_SimEN.con_IdAdminCls:
return this.idAdminCls;
case clsvStudentInfo_SimEN.con_UserId:
return this.userId;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vStudentInfo_Sim]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsvStudentInfo_SimEN.con_IdStudentInfo:
this.idStudentInfo = strValue;
break;
case clsvStudentInfo_SimEN.con_StuId:
this.stuId = strValue;
break;
case clsvStudentInfo_SimEN.con_StuName:
this.stuName = strValue;
break;
case clsvStudentInfo_SimEN.con_IdSex:
this.idSex = strValue;
break;
case clsvStudentInfo_SimEN.con_IdPolitics:
this.idPolitics = strValue;
break;
case clsvStudentInfo_SimEN.con_IdStuType:
this.idStuType = strValue;
break;
case clsvStudentInfo_SimEN.con_IdGrade:
this.idGrade = strValue;
break;
case clsvStudentInfo_SimEN.con_IdGradeBase:
this.idGradeBase = strValue;
break;
case clsvStudentInfo_SimEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvStudentInfo_SimEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvStudentInfo_SimEN.con_IdAdminCls:
this.idAdminCls = strValue;
break;
case clsvStudentInfo_SimEN.con_UserId:
this.userId = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vStudentInfo_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idStudentInfo = "";    //学生流水号
public stuId = "";    //学号
public stuName = "";    //姓名
public idSex = "";    //性别流水号
public idPolitics = "";    //政治面貌流水号
public idStuType = "";    //学生类别流水号
public idGrade = "";    //年级流水号
public idGradeBase = "";    //入学年级流水号
public idXzMajor = "";    //专业流水号
public idXzCollege = "";    //学院流水号
public idAdminCls = "";    //行政班流水号
public userId = "";    //用户ID


 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

 /**
 * 常量:"StuId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuId(): string {return "stuId";}    //学号

 /**
 * 常量:"StuName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"IdSex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"IdPolitics"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"IdStuType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStuType(): string {return "idStuType";}    //学生类别流水号

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsvStudentInfo_SimEN();
const instance = new clsvStudentInfo_SimEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
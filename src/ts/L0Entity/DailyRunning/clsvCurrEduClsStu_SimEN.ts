
 /**
 * 类名:clsvCurrEduClsStu_SimEN
 * 表名:vCurrEduClsStu_Sim(01120993)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:47
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * vCurrEduClsStu_Sim(vCurrEduClsStu_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvCurrEduClsStu_SimEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vCurrEduClsStu_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsStu"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["idEduClsStu", "idCurrEduCls", "idStu", "stuId", "stuName", "idSex", "eduClsStuStateId", "schoolTerm", "schoolYear", "idAdminCls", "idGrade", "userTypeId", "idSchool"];
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
case clsvCurrEduClsStu_SimEN.con_IdEduClsStu:
return this.idEduClsStu;
case clsvCurrEduClsStu_SimEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduClsStu_SimEN.con_IdStu:
return this.idStu;
case clsvCurrEduClsStu_SimEN.con_StuId:
return this.stuId;
case clsvCurrEduClsStu_SimEN.con_StuName:
return this.stuName;
case clsvCurrEduClsStu_SimEN.con_IdSex:
return this.idSex;
case clsvCurrEduClsStu_SimEN.con_EduClsStuStateId:
return this.eduClsStuStateId;
case clsvCurrEduClsStu_SimEN.con_SchoolTerm:
return this.schoolTerm;
case clsvCurrEduClsStu_SimEN.con_SchoolYear:
return this.schoolYear;
case clsvCurrEduClsStu_SimEN.con_IdAdminCls:
return this.idAdminCls;
case clsvCurrEduClsStu_SimEN.con_IdGrade:
return this.idGrade;
case clsvCurrEduClsStu_SimEN.con_UserTypeId:
return this.userTypeId;
case clsvCurrEduClsStu_SimEN.con_IdSchool:
return this.idSchool;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsStu_Sim]中不存在!`;
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
case clsvCurrEduClsStu_SimEN.con_IdEduClsStu:
this.idEduClsStu = Number(strValue);
break;
case clsvCurrEduClsStu_SimEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_IdStu:
this.idStu = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_StuId:
this.stuId = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_StuName:
this.stuName = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_IdSex:
this.idSex = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_EduClsStuStateId:
this.eduClsStuStateId = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_SchoolTerm:
this.schoolTerm = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_SchoolYear:
this.schoolYear = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_IdAdminCls:
this.idAdminCls = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_IdGrade:
this.idGrade = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_UserTypeId:
this.userTypeId = strValue;
break;
case clsvCurrEduClsStu_SimEN.con_IdSchool:
this.idSchool = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsStu_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idEduClsStu = 0;    //教学班学生流水号
public idCurrEduCls = "";    //教学班流水号
public idStu = "";    //学生流水号
public stuId = "";    //学号
public stuName = "";    //姓名
public idSex = "";    //性别流水号
public eduClsStuStateId = "";    //教学班学生状态编号
public schoolTerm = "";    //学期
public schoolYear = "";    //学年
public idAdminCls = "";    //行政班流水号
public idGrade = "";    //年级流水号
public userTypeId = "";    //用户类型Id
public idSchool = "";    //学校流水号


 /**
 * 常量:"IdEduClsStu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEduClsStu(): string {return "idEduClsStu";}    //教学班学生流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IdStu"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStu(): string {return "idStu";}    //学生流水号

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
 * 常量:"EduClsStuStateId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsStuStateId(): string {return "eduClsStuStateId";}    //教学班学生状态编号

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

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
//return propName in new clsvCurrEduClsStu_SimEN();
const instance = new clsvCurrEduClsStu_SimEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
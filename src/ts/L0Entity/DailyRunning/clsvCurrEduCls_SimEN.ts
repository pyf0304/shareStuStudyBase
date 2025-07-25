
 /**
 * 类名:clsvCurrEduCls_SimEN
 * 表名:vCurrEduCls_Sim(01120951)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:44
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
 * vCurrEduCls_Sim(vCurrEduCls_Sim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvCurrEduCls_SimEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vCurrEduCls_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["idCurrEduCls", "currEduClsId", "eduClsName", "eduClsTypeId", "courseId", "idXzCollege", "idXzMajor", "schoolYear"];
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
case clsvCurrEduCls_SimEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduCls_SimEN.con_CurrEduClsId:
return this.currEduClsId;
case clsvCurrEduCls_SimEN.con_EduClsName:
return this.eduClsName;
case clsvCurrEduCls_SimEN.con_EduClsTypeId:
return this.eduClsTypeId;
case clsvCurrEduCls_SimEN.con_CourseId:
return this.courseId;
case clsvCurrEduCls_SimEN.con_IdXzCollege:
return this.idXzCollege;
case clsvCurrEduCls_SimEN.con_IdXzMajor:
return this.idXzMajor;
case clsvCurrEduCls_SimEN.con_SchoolYear:
return this.schoolYear;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduCls_Sim]中不存在!`;
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
case clsvCurrEduCls_SimEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
break;
case clsvCurrEduCls_SimEN.con_CurrEduClsId:
this.currEduClsId = strValue;
break;
case clsvCurrEduCls_SimEN.con_EduClsName:
this.eduClsName = strValue;
break;
case clsvCurrEduCls_SimEN.con_EduClsTypeId:
this.eduClsTypeId = strValue;
break;
case clsvCurrEduCls_SimEN.con_CourseId:
this.courseId = strValue;
break;
case clsvCurrEduCls_SimEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvCurrEduCls_SimEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvCurrEduCls_SimEN.con_SchoolYear:
this.schoolYear = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduCls_Sim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public idCurrEduCls = "";    //教学班流水号
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名
public eduClsTypeId = "";    //教学班类型Id
public courseId = "";    //课程Id
public idXzCollege = "";    //学院流水号
public idXzMajor = "";    //专业流水号
public schoolYear = "";    //学年


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CurrEduClsId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CurrEduClsId(): string {return "currEduClsId";}    //教学班Id

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"EduClsTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EduClsTypeId(): string {return "eduClsTypeId";}    //教学班类型Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

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
//return propName in new clsvCurrEduCls_SimEN();
const instance = new clsvCurrEduCls_SimEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
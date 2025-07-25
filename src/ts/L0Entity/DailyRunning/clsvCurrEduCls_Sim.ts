
 /**
 * 类名:clsvCurrEduCls_Sim
 * 表名:vCurrEduCls_Sim(01120951)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:46
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
 * vCurrEduCls_Sim(vCurrEduCls_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvCurrEduCls_Sim 
{
public static _CurrTabName= "vCurrEduCls_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdCurrEduCls"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["idCurrEduCls", "currEduClsId", "eduClsName", "eduClsTypeId", "courseId", "idXzCollege", "idXzMajor", "schoolYear"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsvCurrEduCls_Sim.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduCls_Sim.con_CurrEduClsId:
return this.currEduClsId;
case clsvCurrEduCls_Sim.con_EduClsName:
return this.eduClsName;
case clsvCurrEduCls_Sim.con_EduClsTypeId:
return this.eduClsTypeId;
case clsvCurrEduCls_Sim.con_CourseId:
return this.courseId;
case clsvCurrEduCls_Sim.con_IdXzCollege:
return this.idXzCollege;
case clsvCurrEduCls_Sim.con_IdXzMajor:
return this.idXzMajor;
case clsvCurrEduCls_Sim.con_SchoolYear:
return this.schoolYear;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduCls_Sim]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CurrEduClsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrEduClsId(): string {return "currEduClsId";}    //教学班Id

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"EduClsTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsTypeId(): string {return "eduClsTypeId";}    //教学班类型Id

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年
}
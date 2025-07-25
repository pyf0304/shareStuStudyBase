
 /**
 * 类名:clsvCurrEduClsStu_Sim
 * 表名:vCurrEduClsStu_Sim(01120993)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:48
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
 * vCurrEduClsStu_Sim(vCurrEduClsStu_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvCurrEduClsStu_Sim 
{
public static _CurrTabName= "vCurrEduClsStu_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdEduClsStu"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 13;
public static AttributeName = ["idEduClsStu", "idCurrEduCls", "idStu", "stuId", "stuName", "idSex", "eduClsStuStateId", "schoolTerm", "schoolYear", "idAdminCls", "idGrade", "userTypeId", "idSchool"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsvCurrEduClsStu_Sim.con_IdEduClsStu:
return this.idEduClsStu;
case clsvCurrEduClsStu_Sim.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvCurrEduClsStu_Sim.con_IdStu:
return this.idStu;
case clsvCurrEduClsStu_Sim.con_StuId:
return this.stuId;
case clsvCurrEduClsStu_Sim.con_StuName:
return this.stuName;
case clsvCurrEduClsStu_Sim.con_IdSex:
return this.idSex;
case clsvCurrEduClsStu_Sim.con_EduClsStuStateId:
return this.eduClsStuStateId;
case clsvCurrEduClsStu_Sim.con_SchoolTerm:
return this.schoolTerm;
case clsvCurrEduClsStu_Sim.con_SchoolYear:
return this.schoolYear;
case clsvCurrEduClsStu_Sim.con_IdAdminCls:
return this.idAdminCls;
case clsvCurrEduClsStu_Sim.con_IdGrade:
return this.idGrade;
case clsvCurrEduClsStu_Sim.con_UserTypeId:
return this.userTypeId;
case clsvCurrEduClsStu_Sim.con_IdSchool:
return this.idSchool;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCurrEduClsStu_Sim]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdEduClsStu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEduClsStu(): string {return "idEduClsStu";}    //教学班学生流水号

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"IdStu"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStu(): string {return "idStu";}    //学生流水号

 /**
 * 常量:"StuId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuId(): string {return "stuId";}    //学号

 /**
 * 常量:"StuName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuName(): string {return "stuName";}    //姓名

 /**
 * 常量:"IdSex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"EduClsStuStateId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsStuStateId(): string {return "eduClsStuStateId";}    //教学班学生状态编号

 /**
 * 常量:"SchoolTerm"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolTerm(): string {return "schoolTerm";}    //学期

 /**
 * 常量:"SchoolYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SchoolYear(): string {return "schoolYear";}    //学年

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号
}
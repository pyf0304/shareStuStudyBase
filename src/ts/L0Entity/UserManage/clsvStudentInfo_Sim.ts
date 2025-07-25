
 /**
 * 类名:clsvStudentInfo_Sim
 * 表名:vStudentInfo_Sim(01120945)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:56
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * vStudentInfo_Sim(vStudentInfo_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvStudentInfo_Sim 
{
public static _CurrTabName= "vStudentInfo_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudentInfo"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 12;
public static AttributeName = ["idStudentInfo", "stuId", "stuName", "idSex", "idPolitics", "idStuType", "idGrade", "idGradeBase", "idXzMajor", "idXzCollege", "idAdminCls", "userId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsvStudentInfo_Sim.con_IdStudentInfo:
return this.idStudentInfo;
case clsvStudentInfo_Sim.con_StuId:
return this.stuId;
case clsvStudentInfo_Sim.con_StuName:
return this.stuName;
case clsvStudentInfo_Sim.con_IdSex:
return this.idSex;
case clsvStudentInfo_Sim.con_IdPolitics:
return this.idPolitics;
case clsvStudentInfo_Sim.con_IdStuType:
return this.idStuType;
case clsvStudentInfo_Sim.con_IdGrade:
return this.idGrade;
case clsvStudentInfo_Sim.con_IdGradeBase:
return this.idGradeBase;
case clsvStudentInfo_Sim.con_IdXzMajor:
return this.idXzMajor;
case clsvStudentInfo_Sim.con_IdXzCollege:
return this.idXzCollege;
case clsvStudentInfo_Sim.con_IdAdminCls:
return this.idAdminCls;
case clsvStudentInfo_Sim.con_UserId:
return this.userId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vStudentInfo_Sim]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdStudentInfo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStudentInfo(): string {return "idStudentInfo";}    //学生流水号

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
 * 常量:"IdPolitics"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"IdStuType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStuType(): string {return "idStuType";}    //学生类别流水号

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID
}
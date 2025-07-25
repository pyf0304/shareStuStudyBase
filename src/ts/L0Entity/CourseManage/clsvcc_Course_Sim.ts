
 /**
 * 类名:clsvcc_Course_Sim
 * 表名:vcc_Course_Sim(01120950)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:44
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:课程管理(CourseManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * vcc_Course_Sim(vcc_Course_Sim)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvcc_Course_Sim 
{
public static _CurrTabName= "vcc_Course_Sim"; //当前表名,与该类相关的表名
public static _KeyFldName= "CourseId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["courseId", "courseCode", "courseName", "orderNum", "courseTypeId", "idXzMajor", "idXzCollege", "excellentTypeId"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public courseId = "";    //课程Id
public courseCode = "";    //课程代码
public courseName = "";    //课程名称
public orderNum = 0;    //序号
public courseTypeId = "";    //课程类型ID
public idXzMajor = "";    //专业流水号
public idXzCollege = "";    //学院流水号
public excellentTypeId = "";    //精品课程类型Id

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
case clsvcc_Course_Sim.con_CourseId:
return this.courseId;
case clsvcc_Course_Sim.con_CourseCode:
return this.courseCode;
case clsvcc_Course_Sim.con_CourseName:
return this.courseName;
case clsvcc_Course_Sim.con_OrderNum:
return this.orderNum;
case clsvcc_Course_Sim.con_CourseTypeId:
return this.courseTypeId;
case clsvcc_Course_Sim.con_IdXzMajor:
return this.idXzMajor;
case clsvcc_Course_Sim.con_IdXzCollege:
return this.idXzCollege;
case clsvcc_Course_Sim.con_ExcellentTypeId:
return this.excellentTypeId;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vcc_Course_Sim]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CourseCode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseCode(): string {return "courseCode";}    //课程代码

 /**
 * 常量:"CourseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseName(): string {return "courseName";}    //课程名称

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"CourseTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseTypeId(): string {return "courseTypeId";}    //课程类型ID

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
 * 常量:"ExcellentTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ExcellentTypeId(): string {return "excellentTypeId";}    //精品课程类型Id
}
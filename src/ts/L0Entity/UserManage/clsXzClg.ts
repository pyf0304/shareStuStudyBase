
 /**
 * 类名:clsXzClg
 * 表名:XzClg(01120064)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:36:05
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
 * 学院(XzClg)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzClg 
{
public static _CurrTabName= "XzClg"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdXzCollege"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 18;
public static AttributeName = ["idXzCollege", "collegeId", "collegeName", "collegeIdInGP", "clgEnglishName", "collegeNameA", "userTypeId", "userType", "phoneNumber", "webSite", "idSchool", "idUni", "isVisible4Tea", "isVisible", "orderNum", "modifyDate", "modifyUserId", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public collegeIdInGP = "";    //CollegeIdInGP
public clgEnglishName = "";    //ClgEnglishName
public collegeNameA = "";    //学院名称简写
public userTypeId = "";    //用户类型Id
public userType = "";    //用户类型
public phoneNumber = "";    //电话
public webSite = "";    //个人主页
public idSchool = "";    //学校流水号
public idUni = "";    //id_Uni
public isVisible4Tea = false;    //IsVisible4Tea
public isVisible = false;    //是否显示
public orderNum = 0;    //序号
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
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
case clsXzClg.con_IdXzCollege:
return this.idXzCollege;
case clsXzClg.con_CollegeId:
return this.collegeId;
case clsXzClg.con_CollegeName:
return this.collegeName;
case clsXzClg.con_CollegeIdInGP:
return this.collegeIdInGP;
case clsXzClg.con_ClgEnglishName:
return this.clgEnglishName;
case clsXzClg.con_CollegeNameA:
return this.collegeNameA;
case clsXzClg.con_UserTypeId:
return this.userTypeId;
case clsXzClg.con_UserType:
return this.userType;
case clsXzClg.con_PhoneNumber:
return this.phoneNumber;
case clsXzClg.con_WebSite:
return this.webSite;
case clsXzClg.con_IdSchool:
return this.idSchool;
case clsXzClg.con_IdUni:
return this.idUni;
case clsXzClg.con_IsVisible4Tea:
return this.isVisible4Tea;
case clsXzClg.con_IsVisible:
return this.isVisible;
case clsXzClg.con_OrderNum:
return this.orderNum;
case clsXzClg.con_ModifyDate:
return this.modifyDate;
case clsXzClg.con_ModifyUserId:
return this.modifyUserId;
case clsXzClg.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzClg]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeId(): string {return "collegeId";}    //学院ID

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"CollegeIdInGP"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeIdInGP(): string {return "collegeIdInGP";}    //CollegeIdInGP

 /**
 * 常量:"ClgEnglishName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClgEnglishName(): string {return "clgEnglishName";}    //ClgEnglishName

 /**
 * 常量:"CollegeNameA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeNameA(): string {return "collegeNameA";}    //学院名称简写

 /**
 * 常量:"UserTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserTypeId(): string {return "userTypeId";}    //用户类型Id

 /**
 * 常量:"UserType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserType(): string {return "userType";}    //用户类型

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"WebSite"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WebSite(): string {return "webSite";}    //个人主页

 /**
 * 常量:"IdSchool"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchool(): string {return "idSchool";}    //学校流水号

 /**
 * 常量:"IdUni"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUni(): string {return "idUni";}    //id_Uni

 /**
 * 常量:"IsVisible4Tea"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible4Tea(): string {return "isVisible4Tea";}    //IsVisible4Tea

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
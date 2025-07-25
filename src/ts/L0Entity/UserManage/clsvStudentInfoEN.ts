
 /**
 * 类名:clsvStudentInfoEN
 * 表名:vStudentInfo(01120132)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:23:26
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * v学生(vStudentInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class  clsvStudentInfoEN extends clsGeneralTabV
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = ""; //
public static PrimaryTypeId = "01"; //关键字
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "vStudentInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudentInfo"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 60;
public static AttributeName = ["idStudentInfo", "stuId", "stuName", "idPolitics", "politicsId", "politicsName", "idSex", "sexDesc", "idEthnic", "ethnicId", "ethnicName", "idUniZone", "uniZoneDesc", "idStuType", "stuTypeID", "stuTypeDesc", "idXzCollege", "collegeId", "collegeName", "collegeIdInGP", "collegeNameA", "idXzMajor", "majorId", "majorName", "isNormal", "idGradeBase", "gradeBaseName", "idAdminCls", "adminClsName", "adminClsId", "idAdminClsType", "adminClsTypeName", "birthday", "nativePlace", "duty", "idCardNo", "stuCardNo", "liveAddress", "homePhone", "idCardNo2", "cardNo", "isAvconClassUser", "isAvconUser", "isGpUser", "isLocalUser", "isLeaved", "userId", "userId4Avcon", "enrollmentDate", "postCode", "email", "isMessage", "microblog", "phoneNumber", "qQ", "registerPassword", "updDate", "updUser", "memo", "idGrade"];
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
case clsvStudentInfoEN.con_IdStudentInfo:
return this.idStudentInfo;
case clsvStudentInfoEN.con_StuId:
return this.stuId;
case clsvStudentInfoEN.con_StuName:
return this.stuName;
case clsvStudentInfoEN.con_IdPolitics:
return this.idPolitics;
case clsvStudentInfoEN.con_PoliticsId:
return this.politicsId;
case clsvStudentInfoEN.con_PoliticsName:
return this.politicsName;
case clsvStudentInfoEN.con_IdSex:
return this.idSex;
case clsvStudentInfoEN.con_SexDesc:
return this.sexDesc;
case clsvStudentInfoEN.con_IdEthnic:
return this.idEthnic;
case clsvStudentInfoEN.con_EthnicId:
return this.ethnicId;
case clsvStudentInfoEN.con_EthnicName:
return this.ethnicName;
case clsvStudentInfoEN.con_IdUniZone:
return this.idUniZone;
case clsvStudentInfoEN.con_UniZoneDesc:
return this.uniZoneDesc;
case clsvStudentInfoEN.con_IdStuType:
return this.idStuType;
case clsvStudentInfoEN.con_StuTypeID:
return this.stuTypeID;
case clsvStudentInfoEN.con_StuTypeDesc:
return this.stuTypeDesc;
case clsvStudentInfoEN.con_IdXzCollege:
return this.idXzCollege;
case clsvStudentInfoEN.con_CollegeId:
return this.collegeId;
case clsvStudentInfoEN.con_CollegeName:
return this.collegeName;
case clsvStudentInfoEN.con_CollegeIdInGP:
return this.collegeIdInGP;
case clsvStudentInfoEN.con_CollegeNameA:
return this.collegeNameA;
case clsvStudentInfoEN.con_IdXzMajor:
return this.idXzMajor;
case clsvStudentInfoEN.con_MajorId:
return this.majorId;
case clsvStudentInfoEN.con_MajorName:
return this.majorName;
case clsvStudentInfoEN.con_IsNormal:
return this.isNormal;
case clsvStudentInfoEN.con_IdGradeBase:
return this.idGradeBase;
case clsvStudentInfoEN.con_GradeBaseName:
return this.gradeBaseName;
case clsvStudentInfoEN.con_IdAdminCls:
return this.idAdminCls;
case clsvStudentInfoEN.con_AdminClsName:
return this.adminClsName;
case clsvStudentInfoEN.con_AdminClsId:
return this.adminClsId;
case clsvStudentInfoEN.con_IdAdminClsType:
return this.idAdminClsType;
case clsvStudentInfoEN.con_AdminClsTypeName:
return this.adminClsTypeName;
case clsvStudentInfoEN.con_Birthday:
return this.birthday;
case clsvStudentInfoEN.con_NativePlace:
return this.nativePlace;
case clsvStudentInfoEN.con_Duty:
return this.duty;
case clsvStudentInfoEN.con_IdCardNo:
return this.idCardNo;
case clsvStudentInfoEN.con_StuCardNo:
return this.stuCardNo;
case clsvStudentInfoEN.con_LiveAddress:
return this.liveAddress;
case clsvStudentInfoEN.con_HomePhone:
return this.homePhone;
case clsvStudentInfoEN.con_IdCardNo2:
return this.idCardNo2;
case clsvStudentInfoEN.con_CardNo:
return this.cardNo;
case clsvStudentInfoEN.con_IsAvconClassUser:
return this.isAvconClassUser;
case clsvStudentInfoEN.con_IsAvconUser:
return this.isAvconUser;
case clsvStudentInfoEN.con_IsGpUser:
return this.isGpUser;
case clsvStudentInfoEN.con_IsLocalUser:
return this.isLocalUser;
case clsvStudentInfoEN.con_IsLeaved:
return this.isLeaved;
case clsvStudentInfoEN.con_UserId:
return this.userId;
case clsvStudentInfoEN.con_UserId4Avcon:
return this.userId4Avcon;
case clsvStudentInfoEN.con_EnrollmentDate:
return this.enrollmentDate;
case clsvStudentInfoEN.con_PostCode:
return this.postCode;
case clsvStudentInfoEN.con_Email:
return this.email;
case clsvStudentInfoEN.con_IsMessage:
return this.isMessage;
case clsvStudentInfoEN.con_Microblog:
return this.microblog;
case clsvStudentInfoEN.con_PhoneNumber:
return this.phoneNumber;
case clsvStudentInfoEN.con_QQ:
return this.qQ;
case clsvStudentInfoEN.con_RegisterPassword:
return this.registerPassword;
case clsvStudentInfoEN.con_UpdDate:
return this.updDate;
case clsvStudentInfoEN.con_UpdUser:
return this.updUser;
case clsvStudentInfoEN.con_Memo:
return this.memo;
case clsvStudentInfoEN.con_IdGrade:
return this.idGrade;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vStudentInfo]中不存在!`;
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
case clsvStudentInfoEN.con_IdStudentInfo:
this.idStudentInfo = strValue;
break;
case clsvStudentInfoEN.con_StuId:
this.stuId = strValue;
break;
case clsvStudentInfoEN.con_StuName:
this.stuName = strValue;
break;
case clsvStudentInfoEN.con_IdPolitics:
this.idPolitics = strValue;
break;
case clsvStudentInfoEN.con_PoliticsId:
this.politicsId = strValue;
break;
case clsvStudentInfoEN.con_PoliticsName:
this.politicsName = strValue;
break;
case clsvStudentInfoEN.con_IdSex:
this.idSex = strValue;
break;
case clsvStudentInfoEN.con_SexDesc:
this.sexDesc = strValue;
break;
case clsvStudentInfoEN.con_IdEthnic:
this.idEthnic = strValue;
break;
case clsvStudentInfoEN.con_EthnicId:
this.ethnicId = strValue;
break;
case clsvStudentInfoEN.con_EthnicName:
this.ethnicName = strValue;
break;
case clsvStudentInfoEN.con_IdUniZone:
this.idUniZone = strValue;
break;
case clsvStudentInfoEN.con_UniZoneDesc:
this.uniZoneDesc = strValue;
break;
case clsvStudentInfoEN.con_IdStuType:
this.idStuType = strValue;
break;
case clsvStudentInfoEN.con_StuTypeID:
this.stuTypeID = strValue;
break;
case clsvStudentInfoEN.con_StuTypeDesc:
this.stuTypeDesc = strValue;
break;
case clsvStudentInfoEN.con_IdXzCollege:
this.idXzCollege = strValue;
break;
case clsvStudentInfoEN.con_CollegeId:
this.collegeId = strValue;
break;
case clsvStudentInfoEN.con_CollegeName:
this.collegeName = strValue;
break;
case clsvStudentInfoEN.con_CollegeIdInGP:
this.collegeIdInGP = strValue;
break;
case clsvStudentInfoEN.con_CollegeNameA:
this.collegeNameA = strValue;
break;
case clsvStudentInfoEN.con_IdXzMajor:
this.idXzMajor = strValue;
break;
case clsvStudentInfoEN.con_MajorId:
this.majorId = strValue;
break;
case clsvStudentInfoEN.con_MajorName:
this.majorName = strValue;
break;
case clsvStudentInfoEN.con_IsNormal:
this.isNormal = Boolean(strValue);
break;
case clsvStudentInfoEN.con_IdGradeBase:
this.idGradeBase = strValue;
break;
case clsvStudentInfoEN.con_GradeBaseName:
this.gradeBaseName = strValue;
break;
case clsvStudentInfoEN.con_IdAdminCls:
this.idAdminCls = strValue;
break;
case clsvStudentInfoEN.con_AdminClsName:
this.adminClsName = strValue;
break;
case clsvStudentInfoEN.con_AdminClsId:
this.adminClsId = strValue;
break;
case clsvStudentInfoEN.con_IdAdminClsType:
this.idAdminClsType = strValue;
break;
case clsvStudentInfoEN.con_AdminClsTypeName:
this.adminClsTypeName = strValue;
break;
case clsvStudentInfoEN.con_Birthday:
this.birthday = strValue;
break;
case clsvStudentInfoEN.con_NativePlace:
this.nativePlace = strValue;
break;
case clsvStudentInfoEN.con_Duty:
this.duty = strValue;
break;
case clsvStudentInfoEN.con_IdCardNo:
this.idCardNo = strValue;
break;
case clsvStudentInfoEN.con_StuCardNo:
this.stuCardNo = strValue;
break;
case clsvStudentInfoEN.con_LiveAddress:
this.liveAddress = strValue;
break;
case clsvStudentInfoEN.con_HomePhone:
this.homePhone = strValue;
break;
case clsvStudentInfoEN.con_IdCardNo2:
this.idCardNo2 = strValue;
break;
case clsvStudentInfoEN.con_CardNo:
this.cardNo = strValue;
break;
case clsvStudentInfoEN.con_IsAvconClassUser:
this.isAvconClassUser = Boolean(strValue);
break;
case clsvStudentInfoEN.con_IsAvconUser:
this.isAvconUser = Boolean(strValue);
break;
case clsvStudentInfoEN.con_IsGpUser:
this.isGpUser = Boolean(strValue);
break;
case clsvStudentInfoEN.con_IsLocalUser:
this.isLocalUser = Boolean(strValue);
break;
case clsvStudentInfoEN.con_IsLeaved:
this.isLeaved = Boolean(strValue);
break;
case clsvStudentInfoEN.con_UserId:
this.userId = strValue;
break;
case clsvStudentInfoEN.con_UserId4Avcon:
this.userId4Avcon = strValue;
break;
case clsvStudentInfoEN.con_EnrollmentDate:
this.enrollmentDate = strValue;
break;
case clsvStudentInfoEN.con_PostCode:
this.postCode = strValue;
break;
case clsvStudentInfoEN.con_Email:
this.email = strValue;
break;
case clsvStudentInfoEN.con_IsMessage:
this.isMessage = Boolean(strValue);
break;
case clsvStudentInfoEN.con_Microblog:
this.microblog = strValue;
break;
case clsvStudentInfoEN.con_PhoneNumber:
this.phoneNumber = strValue;
break;
case clsvStudentInfoEN.con_QQ:
this.qQ = strValue;
break;
case clsvStudentInfoEN.con_RegisterPassword:
this.registerPassword = strValue;
break;
case clsvStudentInfoEN.con_UpdDate:
this.updDate = strValue;
break;
case clsvStudentInfoEN.con_UpdUser:
this.updUser = strValue;
break;
case clsvStudentInfoEN.con_Memo:
this.memo = strValue;
break;
case clsvStudentInfoEN.con_IdGrade:
this.idGrade = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vStudentInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
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
public idPolitics = "";    //政治面貌流水号
public politicsId = "";    //政治面貌Id
public politicsName = "";    //政治面貌
public idSex = "";    //性别流水号
public sexDesc = "";    //性别名称
public idEthnic = "";    //民族流水号
public ethnicId = "";    //民族Id
public ethnicName = "";    //民族名称
public idUniZone = "";    //校区流水号
public uniZoneDesc = "";    //校区名称
public idStuType = "";    //学生类别流水号
public stuTypeID = "";    //学生类别ID
public stuTypeDesc = "";    //学生类别名称
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public collegeIdInGP = "";    //CollegeIdInGP
public collegeNameA = "";    //学院名称简写
public idXzMajor = "";    //专业流水号
public majorId = "";    //专业Id
public majorName = "";    //专业名称
public isNormal = false;    //IsNormal
public idGradeBase = "";    //入学年级流水号
public gradeBaseName = "";    //年级名称
public idAdminCls = "";    //行政班流水号
public adminClsName = "";    //行政班名称
public adminClsId = "";    //行政班代号
public idAdminClsType = "";    //行政班级类型流水号
public adminClsTypeName = "";    //行政班级类型名称
public birthday = "";    //出生日期
public nativePlace = "";    //籍贯
public duty = "";    //职位
public idCardNo = "";    //身份证号
public stuCardNo = "";    //学生证号
public liveAddress = "";    //居住地址
public homePhone = "";    //住宅电话
public idCardNo2 = "";    //内卡号
public cardNo = "";    //卡号
public isAvconClassUser = false;    //IsAvconClassUser
public isAvconUser = false;    //IsAvconUser
public isGpUser = false;    //是否Gp用户
public isLocalUser = false;    //是否本地用户
public isLeaved = false;    //是否离开
public userId = "";    //用户ID
public userId4Avcon = "";    //UserId4Avcon
public enrollmentDate = "";    //入校日期
public postCode = "";    //邮编
public email = "";    //电子邮箱
public isMessage = false;    //IsMessage
public microblog = "";    //Microblog
public phoneNumber = "";    //电话
public qQ = "";    //QQ
public registerPassword = "";    //RegisterPassword
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public idGrade = "";    //年级流水号


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
 * 常量:"IdPolitics"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"PoliticsId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PoliticsId(): string {return "politicsId";}    //政治面貌Id

 /**
 * 常量:"PoliticsName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PoliticsName(): string {return "politicsName";}    //政治面貌

 /**
 * 常量:"IdSex"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"SexDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SexDesc(): string {return "sexDesc";}    //性别名称

 /**
 * 常量:"IdEthnic"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdEthnic(): string {return "idEthnic";}    //民族流水号

 /**
 * 常量:"EthnicId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EthnicId(): string {return "ethnicId";}    //民族Id

 /**
 * 常量:"EthnicName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EthnicName(): string {return "ethnicName";}    //民族名称

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"UniZoneDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UniZoneDesc(): string {return "uniZoneDesc";}    //校区名称

 /**
 * 常量:"IdStuType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdStuType(): string {return "idStuType";}    //学生类别流水号

 /**
 * 常量:"StuTypeID"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuTypeID(): string {return "stuTypeID";}    //学生类别ID

 /**
 * 常量:"StuTypeDesc"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuTypeDesc(): string {return "stuTypeDesc";}    //学生类别名称

 /**
 * 常量:"IdXzCollege"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzCollege(): string {return "idXzCollege";}    //学院流水号

 /**
 * 常量:"CollegeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeId(): string {return "collegeId";}    //学院ID

 /**
 * 常量:"CollegeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeName(): string {return "collegeName";}    //学院名称

 /**
 * 常量:"CollegeIdInGP"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeIdInGP(): string {return "collegeIdInGP";}    //CollegeIdInGP

 /**
 * 常量:"CollegeNameA"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CollegeNameA(): string {return "collegeNameA";}    //学院名称简写

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MajorId(): string {return "majorId";}    //专业Id

 /**
 * 常量:"MajorName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"IsNormal"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsNormal(): string {return "isNormal";}    //IsNormal

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"AdminClsName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AdminClsName(): string {return "adminClsName";}    //行政班名称

 /**
 * 常量:"AdminClsId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AdminClsId(): string {return "adminClsId";}    //行政班代号

 /**
 * 常量:"IdAdminClsType"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdAdminClsType(): string {return "idAdminClsType";}    //行政班级类型流水号

 /**
 * 常量:"AdminClsTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_AdminClsTypeName(): string {return "adminClsTypeName";}    //行政班级类型名称

 /**
 * 常量:"Birthday"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

 /**
 * 常量:"NativePlace"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_NativePlace(): string {return "nativePlace";}    //籍贯

 /**
 * 常量:"Duty"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Duty(): string {return "duty";}    //职位

 /**
 * 常量:"IdCardNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCardNo(): string {return "idCardNo";}    //身份证号

 /**
 * 常量:"StuCardNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_StuCardNo(): string {return "stuCardNo";}    //学生证号

 /**
 * 常量:"LiveAddress"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_LiveAddress(): string {return "liveAddress";}    //居住地址

 /**
 * 常量:"HomePhone"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_HomePhone(): string {return "homePhone";}    //住宅电话

 /**
 * 常量:"IdCardNo2"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdCardNo2(): string {return "idCardNo2";}    //内卡号

 /**
 * 常量:"CardNo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CardNo(): string {return "cardNo";}    //卡号

 /**
 * 常量:"IsAvconClassUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAvconClassUser(): string {return "isAvconClassUser";}    //IsAvconClassUser

 /**
 * 常量:"IsAvconUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsAvconUser(): string {return "isAvconUser";}    //IsAvconUser

 /**
 * 常量:"IsGpUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsGpUser(): string {return "isGpUser";}    //是否Gp用户

 /**
 * 常量:"IsLocalUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsLocalUser(): string {return "isLocalUser";}    //是否本地用户

 /**
 * 常量:"IsLeaved"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsLeaved(): string {return "isLeaved";}    //是否离开

 /**
 * 常量:"UserId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UserId4Avcon"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UserId4Avcon(): string {return "userId4Avcon";}    //UserId4Avcon

 /**
 * 常量:"EnrollmentDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_EnrollmentDate(): string {return "enrollmentDate";}    //入校日期

 /**
 * 常量:"PostCode"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PostCode(): string {return "postCode";}    //邮编

 /**
 * 常量:"Email"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

 /**
 * 常量:"IsMessage"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IsMessage(): string {return "isMessage";}    //IsMessage

 /**
 * 常量:"Microblog"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Microblog(): string {return "microblog";}    //Microblog

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"QQ"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_QQ(): string {return "qQ";}    //QQ

 /**
 * 常量:"RegisterPassword"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_RegisterPassword(): string {return "registerPassword";}    //RegisterPassword

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号

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
const instance = new clsvStudentInfoEN();
return instance.hasOwnProperty(propName);
}
}
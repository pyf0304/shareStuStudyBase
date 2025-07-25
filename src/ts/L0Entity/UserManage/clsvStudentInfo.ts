
 /**
 * 类名:clsvStudentInfo
 * 表名:vStudentInfo(01120132)
 * 版本:2024.12.05.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/05 10:23:28
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v学生(vStudentInfo)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvStudentInfo 
{
public static _CurrTabName= "vStudentInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdStudentInfo"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 60;
public static AttributeName = ["idStudentInfo", "stuId", "stuName", "idPolitics", "politicsId", "politicsName", "idSex", "sexDesc", "idEthnic", "ethnicId", "ethnicName", "idUniZone", "uniZoneDesc", "idStuType", "stuTypeID", "stuTypeDesc", "idXzCollege", "collegeId", "collegeName", "collegeIdInGP", "collegeNameA", "idXzMajor", "majorId", "majorName", "isNormal", "idGradeBase", "gradeBaseName", "idAdminCls", "adminClsName", "adminClsId", "idAdminClsType", "adminClsTypeName", "birthday", "nativePlace", "duty", "idCardNo", "stuCardNo", "liveAddress", "homePhone", "idCardNo2", "cardNo", "isAvconClassUser", "isAvconUser", "isGpUser", "isLocalUser", "isLeaved", "userId", "userId4Avcon", "enrollmentDate", "postCode", "email", "isMessage", "microblog", "phoneNumber", "qQ", "registerPassword", "updDate", "updUser", "memo", "idGrade"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
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
case clsvStudentInfo.con_IdStudentInfo:
return this.idStudentInfo;
case clsvStudentInfo.con_StuId:
return this.stuId;
case clsvStudentInfo.con_StuName:
return this.stuName;
case clsvStudentInfo.con_IdPolitics:
return this.idPolitics;
case clsvStudentInfo.con_PoliticsId:
return this.politicsId;
case clsvStudentInfo.con_PoliticsName:
return this.politicsName;
case clsvStudentInfo.con_IdSex:
return this.idSex;
case clsvStudentInfo.con_SexDesc:
return this.sexDesc;
case clsvStudentInfo.con_IdEthnic:
return this.idEthnic;
case clsvStudentInfo.con_EthnicId:
return this.ethnicId;
case clsvStudentInfo.con_EthnicName:
return this.ethnicName;
case clsvStudentInfo.con_IdUniZone:
return this.idUniZone;
case clsvStudentInfo.con_UniZoneDesc:
return this.uniZoneDesc;
case clsvStudentInfo.con_IdStuType:
return this.idStuType;
case clsvStudentInfo.con_StuTypeID:
return this.stuTypeID;
case clsvStudentInfo.con_StuTypeDesc:
return this.stuTypeDesc;
case clsvStudentInfo.con_IdXzCollege:
return this.idXzCollege;
case clsvStudentInfo.con_CollegeId:
return this.collegeId;
case clsvStudentInfo.con_CollegeName:
return this.collegeName;
case clsvStudentInfo.con_CollegeIdInGP:
return this.collegeIdInGP;
case clsvStudentInfo.con_CollegeNameA:
return this.collegeNameA;
case clsvStudentInfo.con_IdXzMajor:
return this.idXzMajor;
case clsvStudentInfo.con_MajorId:
return this.majorId;
case clsvStudentInfo.con_MajorName:
return this.majorName;
case clsvStudentInfo.con_IsNormal:
return this.isNormal;
case clsvStudentInfo.con_IdGradeBase:
return this.idGradeBase;
case clsvStudentInfo.con_GradeBaseName:
return this.gradeBaseName;
case clsvStudentInfo.con_IdAdminCls:
return this.idAdminCls;
case clsvStudentInfo.con_AdminClsName:
return this.adminClsName;
case clsvStudentInfo.con_AdminClsId:
return this.adminClsId;
case clsvStudentInfo.con_IdAdminClsType:
return this.idAdminClsType;
case clsvStudentInfo.con_AdminClsTypeName:
return this.adminClsTypeName;
case clsvStudentInfo.con_Birthday:
return this.birthday;
case clsvStudentInfo.con_NativePlace:
return this.nativePlace;
case clsvStudentInfo.con_Duty:
return this.duty;
case clsvStudentInfo.con_IdCardNo:
return this.idCardNo;
case clsvStudentInfo.con_StuCardNo:
return this.stuCardNo;
case clsvStudentInfo.con_LiveAddress:
return this.liveAddress;
case clsvStudentInfo.con_HomePhone:
return this.homePhone;
case clsvStudentInfo.con_IdCardNo2:
return this.idCardNo2;
case clsvStudentInfo.con_CardNo:
return this.cardNo;
case clsvStudentInfo.con_IsAvconClassUser:
return this.isAvconClassUser;
case clsvStudentInfo.con_IsAvconUser:
return this.isAvconUser;
case clsvStudentInfo.con_IsGpUser:
return this.isGpUser;
case clsvStudentInfo.con_IsLocalUser:
return this.isLocalUser;
case clsvStudentInfo.con_IsLeaved:
return this.isLeaved;
case clsvStudentInfo.con_UserId:
return this.userId;
case clsvStudentInfo.con_UserId4Avcon:
return this.userId4Avcon;
case clsvStudentInfo.con_EnrollmentDate:
return this.enrollmentDate;
case clsvStudentInfo.con_PostCode:
return this.postCode;
case clsvStudentInfo.con_Email:
return this.email;
case clsvStudentInfo.con_IsMessage:
return this.isMessage;
case clsvStudentInfo.con_Microblog:
return this.microblog;
case clsvStudentInfo.con_PhoneNumber:
return this.phoneNumber;
case clsvStudentInfo.con_QQ:
return this.qQ;
case clsvStudentInfo.con_RegisterPassword:
return this.registerPassword;
case clsvStudentInfo.con_UpdDate:
return this.updDate;
case clsvStudentInfo.con_UpdUser:
return this.updUser;
case clsvStudentInfo.con_Memo:
return this.memo;
case clsvStudentInfo.con_IdGrade:
return this.idGrade;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vStudentInfo]中不存在!`;
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
 * 常量:"IdPolitics"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"PoliticsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PoliticsId(): string {return "politicsId";}    //政治面貌Id

 /**
 * 常量:"PoliticsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PoliticsName(): string {return "politicsName";}    //政治面貌

 /**
 * 常量:"IdSex"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSex(): string {return "idSex";}    //性别流水号

 /**
 * 常量:"SexDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SexDesc(): string {return "sexDesc";}    //性别名称

 /**
 * 常量:"IdEthnic"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEthnic(): string {return "idEthnic";}    //民族流水号

 /**
 * 常量:"EthnicId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EthnicId(): string {return "ethnicId";}    //民族Id

 /**
 * 常量:"EthnicName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EthnicName(): string {return "ethnicName";}    //民族名称

 /**
 * 常量:"IdUniZone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdUniZone(): string {return "idUniZone";}    //校区流水号

 /**
 * 常量:"UniZoneDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UniZoneDesc(): string {return "uniZoneDesc";}    //校区名称

 /**
 * 常量:"IdStuType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStuType(): string {return "idStuType";}    //学生类别流水号

 /**
 * 常量:"StuTypeID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuTypeID(): string {return "stuTypeID";}    //学生类别ID

 /**
 * 常量:"StuTypeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuTypeDesc(): string {return "stuTypeDesc";}    //学生类别名称

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
 * 常量:"CollegeNameA"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CollegeNameA(): string {return "collegeNameA";}    //学院名称简写

 /**
 * 常量:"IdXzMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajor(): string {return "idXzMajor";}    //专业流水号

 /**
 * 常量:"MajorId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorId(): string {return "majorId";}    //专业Id

 /**
 * 常量:"MajorName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorName(): string {return "majorName";}    //专业名称

 /**
 * 常量:"IsNormal"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsNormal(): string {return "isNormal";}    //IsNormal

 /**
 * 常量:"IdGradeBase"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGradeBase(): string {return "idGradeBase";}    //入学年级流水号

 /**
 * 常量:"GradeBaseName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GradeBaseName(): string {return "gradeBaseName";}    //年级名称

 /**
 * 常量:"IdAdminCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminCls(): string {return "idAdminCls";}    //行政班流水号

 /**
 * 常量:"AdminClsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsName(): string {return "adminClsName";}    //行政班名称

 /**
 * 常量:"AdminClsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsId(): string {return "adminClsId";}    //行政班代号

 /**
 * 常量:"IdAdminClsType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminClsType(): string {return "idAdminClsType";}    //行政班级类型流水号

 /**
 * 常量:"AdminClsTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminClsTypeName(): string {return "adminClsTypeName";}    //行政班级类型名称

 /**
 * 常量:"Birthday"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

 /**
 * 常量:"NativePlace"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_NativePlace(): string {return "nativePlace";}    //籍贯

 /**
 * 常量:"Duty"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Duty(): string {return "duty";}    //职位

 /**
 * 常量:"IdCardNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCardNo(): string {return "idCardNo";}    //身份证号

 /**
 * 常量:"StuCardNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StuCardNo(): string {return "stuCardNo";}    //学生证号

 /**
 * 常量:"LiveAddress"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_LiveAddress(): string {return "liveAddress";}    //居住地址

 /**
 * 常量:"HomePhone"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_HomePhone(): string {return "homePhone";}    //住宅电话

 /**
 * 常量:"IdCardNo2"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCardNo2(): string {return "idCardNo2";}    //内卡号

 /**
 * 常量:"CardNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CardNo(): string {return "cardNo";}    //卡号

 /**
 * 常量:"IsAvconClassUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAvconClassUser(): string {return "isAvconClassUser";}    //IsAvconClassUser

 /**
 * 常量:"IsAvconUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAvconUser(): string {return "isAvconUser";}    //IsAvconUser

 /**
 * 常量:"IsGpUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsGpUser(): string {return "isGpUser";}    //是否Gp用户

 /**
 * 常量:"IsLocalUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsLocalUser(): string {return "isLocalUser";}    //是否本地用户

 /**
 * 常量:"IsLeaved"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsLeaved(): string {return "isLeaved";}    //是否离开

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"UserId4Avcon"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId4Avcon(): string {return "userId4Avcon";}    //UserId4Avcon

 /**
 * 常量:"EnrollmentDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EnrollmentDate(): string {return "enrollmentDate";}    //入校日期

 /**
 * 常量:"PostCode"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PostCode(): string {return "postCode";}    //邮编

 /**
 * 常量:"Email"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

 /**
 * 常量:"IsMessage"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMessage(): string {return "isMessage";}    //IsMessage

 /**
 * 常量:"Microblog"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Microblog(): string {return "microblog";}    //Microblog

 /**
 * 常量:"PhoneNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PhoneNumber(): string {return "phoneNumber";}    //电话

 /**
 * 常量:"QQ"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QQ(): string {return "qQ";}    //QQ

 /**
 * 常量:"RegisterPassword"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RegisterPassword(): string {return "registerPassword";}    //RegisterPassword

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"IdGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdGrade(): string {return "idGrade";}    //年级流水号
}
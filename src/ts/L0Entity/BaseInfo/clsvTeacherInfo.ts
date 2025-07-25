
 /**
 * 类名:clsvTeacherInfo
 * 表名:vTeacherInfo(01120094)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 22:41:38
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * v教师(vTeacherInfo)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvTeacherInfo 
{
public static _CurrTabName= "vTeacherInfo"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdTeacher"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 62;
public static AttributeName = ["idTeacher", "teacherId", "teacherName", "idSex", "sexDesc", "idSchoolPs", "idDisciplinePs", "idUniZone", "uniZoneDesc", "idEthnic", "ethnicName", "idPolitics", "politicsName", "idAdminGrade", "adminGradeDesc", "idProfGrade", "profenssionalGradeName", "idQualif", "qualifDesc", "idDegree", "degreeName", "idStaffType", "staffTypeName", "idProvince", "provinceName", "citizenId", "cardNo", "birthday", "graduationMajor", "telNo", "email", "webSite", "personBlog", "entryDate", "offed", "isAvconUser", "isGpUser", "isLocalUser", "fromUnit", "memo", "idXzCollege", "collegeId", "collegeName", "collegeNameA", "idXzMajor", "entryDay", "idPhoto", "idReligion", "religionName", "isMessage", "microblog", "modifyUserId", "offedBak", "phoneNumber", "qQ", "teachIdCollege", "teachIdMajor", "tel", "modifyDate", "registerPassword", "entryYear", "idCardNo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idTeacher = "";    //教师流水号
public teacherId = "";    //教师工号
public teacherName = "";    //教师姓名
public idSex = "";    //性别流水号
public sexDesc = "";    //性别名称
public idSchoolPs = "";    //学校流水号
public idDisciplinePs = "";    //学科流水号
public idUniZone = "";    //校区流水号
public uniZoneDesc = "";    //校区名称
public idEthnic = "";    //民族流水号
public ethnicName = "";    //民族名称
public idPolitics = "";    //政治面貌流水号
public politicsName = "";    //政治面貌
public idAdminGrade = "";    //行政职务流水号
public adminGradeDesc = "";    //行政职务描述
public idProfGrade = "";    //专业职称流水号
public profenssionalGradeName = "";    //专业职称
public idQualif = "";    //学历流水号
public qualifDesc = "";    //QualifDesc
public idDegree = "";    //学位流水号
public degreeName = "";    //学位名称
public idStaffType = "";    //职工类型流水号
public staffTypeName = "";    //职工类型名称
public idProvince = "";    //省份流水号
public provinceName = "";    //ProvinceName
public citizenId = "";    //身份证号
public cardNo = "";    //卡号
public birthday = "";    //出生日期
public graduationMajor = "";    //毕业专业
public telNo = "";    //电话
public email = "";    //电子邮箱
public webSite = "";    //个人主页
public personBlog = "";    //个人博客
public entryDate = "";    //进校日期
public offed = false;    //是否离校
public isAvconUser = false;    //IsAvconUser
public isGpUser = false;    //是否Gp用户
public isLocalUser = false;    //是否本地用户
public fromUnit = "";    //来自单位
public memo = "";    //备注
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public collegeNameA = "";    //学院名称简写
public idXzMajor = "";    //专业流水号
public entryDay = "";    //EntryDay
public idPhoto = "";    //id_Photo
public idReligion = "";    //id_Religion
public religionName = "";    //ReligionName
public isMessage = false;    //IsMessage
public microblog = "";    //Microblog
public modifyUserId = "";    //修改人
public offedBak = false;    //OffedBak
public phoneNumber = "";    //电话
public qQ = "";    //QQ
public teachIdCollege = "";    //Teach_id_College
public teachIdMajor = "";    //Teach_id_Major
public tel = "";    //Tel
public modifyDate = "";    //修改日期
public registerPassword = "";    //RegisterPassword
public entryYear = "";    //EntryYear
public idCardNo = "";    //身份证号

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
case clsvTeacherInfo.con_IdTeacher:
return this.idTeacher;
case clsvTeacherInfo.con_TeacherId:
return this.teacherId;
case clsvTeacherInfo.con_TeacherName:
return this.teacherName;
case clsvTeacherInfo.con_IdSex:
return this.idSex;
case clsvTeacherInfo.con_SexDesc:
return this.sexDesc;
case clsvTeacherInfo.con_IdSchoolPs:
return this.idSchoolPs;
case clsvTeacherInfo.con_IdDisciplinePs:
return this.idDisciplinePs;
case clsvTeacherInfo.con_IdUniZone:
return this.idUniZone;
case clsvTeacherInfo.con_UniZoneDesc:
return this.uniZoneDesc;
case clsvTeacherInfo.con_IdEthnic:
return this.idEthnic;
case clsvTeacherInfo.con_EthnicName:
return this.ethnicName;
case clsvTeacherInfo.con_IdPolitics:
return this.idPolitics;
case clsvTeacherInfo.con_PoliticsName:
return this.politicsName;
case clsvTeacherInfo.con_IdAdminGrade:
return this.idAdminGrade;
case clsvTeacherInfo.con_AdminGradeDesc:
return this.adminGradeDesc;
case clsvTeacherInfo.con_IdProfGrade:
return this.idProfGrade;
case clsvTeacherInfo.con_ProfenssionalGradeName:
return this.profenssionalGradeName;
case clsvTeacherInfo.con_IdQualif:
return this.idQualif;
case clsvTeacherInfo.con_QualifDesc:
return this.qualifDesc;
case clsvTeacherInfo.con_IdDegree:
return this.idDegree;
case clsvTeacherInfo.con_DegreeName:
return this.degreeName;
case clsvTeacherInfo.con_IdStaffType:
return this.idStaffType;
case clsvTeacherInfo.con_StaffTypeName:
return this.staffTypeName;
case clsvTeacherInfo.con_IdProvince:
return this.idProvince;
case clsvTeacherInfo.con_ProvinceName:
return this.provinceName;
case clsvTeacherInfo.con_CitizenId:
return this.citizenId;
case clsvTeacherInfo.con_CardNo:
return this.cardNo;
case clsvTeacherInfo.con_Birthday:
return this.birthday;
case clsvTeacherInfo.con_GraduationMajor:
return this.graduationMajor;
case clsvTeacherInfo.con_TelNo:
return this.telNo;
case clsvTeacherInfo.con_Email:
return this.email;
case clsvTeacherInfo.con_WebSite:
return this.webSite;
case clsvTeacherInfo.con_PersonBlog:
return this.personBlog;
case clsvTeacherInfo.con_EntryDate:
return this.entryDate;
case clsvTeacherInfo.con_Offed:
return this.offed;
case clsvTeacherInfo.con_IsAvconUser:
return this.isAvconUser;
case clsvTeacherInfo.con_IsGpUser:
return this.isGpUser;
case clsvTeacherInfo.con_IsLocalUser:
return this.isLocalUser;
case clsvTeacherInfo.con_FromUnit:
return this.fromUnit;
case clsvTeacherInfo.con_Memo:
return this.memo;
case clsvTeacherInfo.con_IdXzCollege:
return this.idXzCollege;
case clsvTeacherInfo.con_CollegeId:
return this.collegeId;
case clsvTeacherInfo.con_CollegeName:
return this.collegeName;
case clsvTeacherInfo.con_CollegeNameA:
return this.collegeNameA;
case clsvTeacherInfo.con_IdXzMajor:
return this.idXzMajor;
case clsvTeacherInfo.con_EntryDay:
return this.entryDay;
case clsvTeacherInfo.con_IdPhoto:
return this.idPhoto;
case clsvTeacherInfo.con_IdReligion:
return this.idReligion;
case clsvTeacherInfo.con_ReligionName:
return this.religionName;
case clsvTeacherInfo.con_IsMessage:
return this.isMessage;
case clsvTeacherInfo.con_Microblog:
return this.microblog;
case clsvTeacherInfo.con_ModifyUserId:
return this.modifyUserId;
case clsvTeacherInfo.con_OffedBak:
return this.offedBak;
case clsvTeacherInfo.con_PhoneNumber:
return this.phoneNumber;
case clsvTeacherInfo.con_QQ:
return this.qQ;
case clsvTeacherInfo.con_TeachIdCollege:
return this.teachIdCollege;
case clsvTeacherInfo.con_TeachIdMajor:
return this.teachIdMajor;
case clsvTeacherInfo.con_Tel:
return this.tel;
case clsvTeacherInfo.con_ModifyDate:
return this.modifyDate;
case clsvTeacherInfo.con_RegisterPassword:
return this.registerPassword;
case clsvTeacherInfo.con_EntryYear:
return this.entryYear;
case clsvTeacherInfo.con_IdCardNo:
return this.idCardNo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vTeacherInfo]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"IdTeacher"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdTeacher(): string {return "idTeacher";}    //教师流水号

 /**
 * 常量:"TeacherId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeacherId(): string {return "teacherId";}    //教师工号

 /**
 * 常量:"TeacherName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeacherName(): string {return "teacherName";}    //教师姓名

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
 * 常量:"IdSchoolPs"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdSchoolPs(): string {return "idSchoolPs";}    //学校流水号

 /**
 * 常量:"IdDisciplinePs"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDisciplinePs(): string {return "idDisciplinePs";}    //学科流水号

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
 * 常量:"IdEthnic"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdEthnic(): string {return "idEthnic";}    //民族流水号

 /**
 * 常量:"EthnicName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EthnicName(): string {return "ethnicName";}    //民族名称

 /**
 * 常量:"IdPolitics"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPolitics(): string {return "idPolitics";}    //政治面貌流水号

 /**
 * 常量:"PoliticsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PoliticsName(): string {return "politicsName";}    //政治面貌

 /**
 * 常量:"IdAdminGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdAdminGrade(): string {return "idAdminGrade";}    //行政职务流水号

 /**
 * 常量:"AdminGradeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_AdminGradeDesc(): string {return "adminGradeDesc";}    //行政职务描述

 /**
 * 常量:"IdProfGrade"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdProfGrade(): string {return "idProfGrade";}    //专业职称流水号

 /**
 * 常量:"ProfenssionalGradeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ProfenssionalGradeName(): string {return "profenssionalGradeName";}    //专业职称

 /**
 * 常量:"IdQualif"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdQualif(): string {return "idQualif";}    //学历流水号

 /**
 * 常量:"QualifDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QualifDesc(): string {return "qualifDesc";}    //QualifDesc

 /**
 * 常量:"IdDegree"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDegree(): string {return "idDegree";}    //学位流水号

 /**
 * 常量:"DegreeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_DegreeName(): string {return "degreeName";}    //学位名称

 /**
 * 常量:"IdStaffType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdStaffType(): string {return "idStaffType";}    //职工类型流水号

 /**
 * 常量:"StaffTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StaffTypeName(): string {return "staffTypeName";}    //职工类型名称

 /**
 * 常量:"IdProvince"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdProvince(): string {return "idProvince";}    //省份流水号

 /**
 * 常量:"ProvinceName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ProvinceName(): string {return "provinceName";}    //ProvinceName

 /**
 * 常量:"CitizenId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CitizenId(): string {return "citizenId";}    //身份证号

 /**
 * 常量:"CardNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CardNo(): string {return "cardNo";}    //卡号

 /**
 * 常量:"Birthday"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Birthday(): string {return "birthday";}    //出生日期

 /**
 * 常量:"GraduationMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GraduationMajor(): string {return "graduationMajor";}    //毕业专业

 /**
 * 常量:"TelNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TelNo(): string {return "telNo";}    //电话

 /**
 * 常量:"Email"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Email(): string {return "email";}    //电子邮箱

 /**
 * 常量:"WebSite"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_WebSite(): string {return "webSite";}    //个人主页

 /**
 * 常量:"PersonBlog"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_PersonBlog(): string {return "personBlog";}    //个人博客

 /**
 * 常量:"EntryDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EntryDate(): string {return "entryDate";}    //进校日期

 /**
 * 常量:"Offed"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Offed(): string {return "offed";}    //是否离校

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
 * 常量:"FromUnit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_FromUnit(): string {return "fromUnit";}    //来自单位

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

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
 * 常量:"EntryDay"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EntryDay(): string {return "entryDay";}    //EntryDay

 /**
 * 常量:"IdPhoto"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdPhoto(): string {return "idPhoto";}    //id_Photo

 /**
 * 常量:"IdReligion"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdReligion(): string {return "idReligion";}    //id_Religion

 /**
 * 常量:"ReligionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReligionName(): string {return "religionName";}    //ReligionName

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
 * 常量:"ModifyUserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyUserId(): string {return "modifyUserId";}    //修改人

 /**
 * 常量:"OffedBak"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OffedBak(): string {return "offedBak";}    //OffedBak

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
 * 常量:"TeachIdCollege"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachIdCollege(): string {return "teachIdCollege";}    //Teach_id_College

 /**
 * 常量:"TeachIdMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachIdMajor(): string {return "teachIdMajor";}    //Teach_id_Major

 /**
 * 常量:"Tel"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Tel(): string {return "tel";}    //Tel

 /**
 * 常量:"ModifyDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ModifyDate(): string {return "modifyDate";}    //修改日期

 /**
 * 常量:"RegisterPassword"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_RegisterPassword(): string {return "registerPassword";}    //RegisterPassword

 /**
 * 常量:"EntryYear"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EntryYear(): string {return "entryYear";}    //EntryYear

 /**
 * 常量:"IdCardNo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCardNo(): string {return "idCardNo";}    //身份证号
}
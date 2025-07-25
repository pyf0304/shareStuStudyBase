
 /**
 * 类名:clsvXzMajor
 * 表名:vXzMajor(01120066)
 * 版本:2024.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/16 14:27:21
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
 * v专业(vXzMajor)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvXzMajor 
{
public static _CurrTabName= "vXzMajor"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdXzMajor"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 24;
public static AttributeName = ["idXzMajor", "majorId", "majorName", "majorEnglishName", "majorExplain", "majorNationalID", "idXzCollege", "collegeId", "collegeName", "collegeNameA", "idMajorType", "majorTypeName", "idDegreeType", "xwTypeDesc", "isMainMajor", "majorDirection", "isVisible", "isNormal", "modifyDate", "modifyUserId", "memo", "isVisible4XzClg", "typeName", "idXzMajorShoolType"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public idXzMajor = "";    //专业流水号
public majorId = "";    //专业Id
public majorName = "";    //专业名称
public majorEnglishName = "";    //专业英文名称
public majorExplain = "";    //专业说明
public majorNationalID = "";    //专业国家代码
public idXzCollege = "";    //学院流水号
public collegeId = "";    //学院ID
public collegeName = "";    //学院名称
public collegeNameA = "";    //学院名称简写
public idMajorType = "";    //专业类型(文理工)流水号
public majorTypeName = "";    //专业类型名称
public idDegreeType = "";    //学位类型流水号
public xwTypeDesc = "";    //学位类型名称
public isMainMajor = false;    //是否重要专业
public majorDirection = "";    //专业方向
public isVisible = false;    //是否显示
public isNormal = false;    //IsNormal
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注
public isVisible4XzClg = false;    //IsVisible4XzClg
public typeName = "";    //类型名称
public idXzMajorShoolType = "";    //专业学校类型流水号

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
case clsvXzMajor.con_IdXzMajor:
return this.idXzMajor;
case clsvXzMajor.con_MajorId:
return this.majorId;
case clsvXzMajor.con_MajorName:
return this.majorName;
case clsvXzMajor.con_MajorEnglishName:
return this.majorEnglishName;
case clsvXzMajor.con_MajorExplain:
return this.majorExplain;
case clsvXzMajor.con_MajorNationalID:
return this.majorNationalID;
case clsvXzMajor.con_IdXzCollege:
return this.idXzCollege;
case clsvXzMajor.con_CollegeId:
return this.collegeId;
case clsvXzMajor.con_CollegeName:
return this.collegeName;
case clsvXzMajor.con_CollegeNameA:
return this.collegeNameA;
case clsvXzMajor.con_IdMajorType:
return this.idMajorType;
case clsvXzMajor.con_MajorTypeName:
return this.majorTypeName;
case clsvXzMajor.con_IdDegreeType:
return this.idDegreeType;
case clsvXzMajor.con_XwTypeDesc:
return this.xwTypeDesc;
case clsvXzMajor.con_IsMainMajor:
return this.isMainMajor;
case clsvXzMajor.con_MajorDirection:
return this.majorDirection;
case clsvXzMajor.con_IsVisible:
return this.isVisible;
case clsvXzMajor.con_IsNormal:
return this.isNormal;
case clsvXzMajor.con_ModifyDate:
return this.modifyDate;
case clsvXzMajor.con_ModifyUserId:
return this.modifyUserId;
case clsvXzMajor.con_Memo:
return this.memo;
case clsvXzMajor.con_IsVisible4XzClg:
return this.isVisible4XzClg;
case clsvXzMajor.con_TypeName:
return this.typeName;
case clsvXzMajor.con_IdXzMajorShoolType:
return this.idXzMajorShoolType;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vXzMajor]中不存在!`;
console.error(strMsg);
return "";
}
}


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
 * 常量:"MajorEnglishName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorEnglishName(): string {return "majorEnglishName";}    //专业英文名称

 /**
 * 常量:"MajorExplain"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorExplain(): string {return "majorExplain";}    //专业说明

 /**
 * 常量:"MajorNationalID"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorNationalID(): string {return "majorNationalID";}    //专业国家代码

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
 * 常量:"IdMajorType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdMajorType(): string {return "idMajorType";}    //专业类型(文理工)流水号

 /**
 * 常量:"MajorTypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorTypeName(): string {return "majorTypeName";}    //专业类型名称

 /**
 * 常量:"IdDegreeType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDegreeType(): string {return "idDegreeType";}    //学位类型流水号

 /**
 * 常量:"XwTypeDesc"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_XwTypeDesc(): string {return "xwTypeDesc";}    //学位类型名称

 /**
 * 常量:"IsMainMajor"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsMainMajor(): string {return "isMainMajor";}    //是否重要专业

 /**
 * 常量:"MajorDirection"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirection(): string {return "majorDirection";}    //专业方向

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

 /**
 * 常量:"IsNormal"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsNormal(): string {return "isNormal";}    //IsNormal

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

 /**
 * 常量:"IsVisible4XzClg"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible4XzClg(): string {return "isVisible4XzClg";}    //IsVisible4XzClg

 /**
 * 常量:"TypeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TypeName(): string {return "typeName";}    //类型名称

 /**
 * 常量:"IdXzMajorShoolType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajorShoolType(): string {return "idXzMajorShoolType";}    //专业学校类型流水号
}
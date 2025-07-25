
 /**
 * 类名:clsXzMajor
 * 表名:XzMajor(01120065)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:29:17
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 专业(XzMajor)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzMajor 
{
public static _CurrTabName= "XzMajor"; //当前表名,与该类相关的表名
public static _KeyFldName= "IdXzMajor"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["idXzMajor", "majorId", "majorName", "majorEnglishName", "majorExplain", "majorNationalID", "idXzCollege", "idMajorType", "idDegreeType", "isMainMajor", "majorDirection", "isVisible", "isNormal", "modifyDate", "modifyUserId", "memo", "idXzMajorShoolType"];
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
public idMajorType = "";    //专业类型(文理工)流水号
public idDegreeType = "";    //学位类型流水号
public isMainMajor = false;    //是否重要专业
public majorDirection = "";    //专业方向
public isVisible = false;    //是否显示
public isNormal = false;    //IsNormal
public modifyDate = "";    //修改日期
public modifyUserId = "";    //修改人
public memo = "";    //备注
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
case clsXzMajor.con_IdXzMajor:
return this.idXzMajor;
case clsXzMajor.con_MajorId:
return this.majorId;
case clsXzMajor.con_MajorName:
return this.majorName;
case clsXzMajor.con_MajorEnglishName:
return this.majorEnglishName;
case clsXzMajor.con_MajorExplain:
return this.majorExplain;
case clsXzMajor.con_MajorNationalID:
return this.majorNationalID;
case clsXzMajor.con_IdXzCollege:
return this.idXzCollege;
case clsXzMajor.con_IdMajorType:
return this.idMajorType;
case clsXzMajor.con_IdDegreeType:
return this.idDegreeType;
case clsXzMajor.con_IsMainMajor:
return this.isMainMajor;
case clsXzMajor.con_MajorDirection:
return this.majorDirection;
case clsXzMajor.con_IsVisible:
return this.isVisible;
case clsXzMajor.con_IsNormal:
return this.isNormal;
case clsXzMajor.con_ModifyDate:
return this.modifyDate;
case clsXzMajor.con_ModifyUserId:
return this.modifyUserId;
case clsXzMajor.con_Memo:
return this.memo;
case clsXzMajor.con_IdXzMajorShoolType:
return this.idXzMajorShoolType;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzMajor]中不存在!`;
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
 * 常量:"IdMajorType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdMajorType(): string {return "idMajorType";}    //专业类型(文理工)流水号

 /**
 * 常量:"IdDegreeType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdDegreeType(): string {return "idDegreeType";}    //学位类型流水号

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
 * 常量:"IdXzMajorShoolType"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdXzMajorShoolType(): string {return "idXzMajorShoolType";}    //专业学校类型流水号
}
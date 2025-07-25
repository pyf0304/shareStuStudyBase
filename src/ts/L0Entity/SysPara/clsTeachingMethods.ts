﻿
 /**
 * 类名:clsTeachingMethods
 * 表名:TeachingMethods(01120966)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:36
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统参数(SysPara)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 教学方式(TeachingMethods)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsTeachingMethods 
{
public static _CurrTabName= "TeachingMethods"; //当前表名,与该类相关的表名
public static _KeyFldName= "TeachingMethodId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["teachingMethodId", "teachingMethodName", "teachingMethodEnName", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public teachingMethodId = "";    //教学方式Id
public teachingMethodName = "";    //教学方式名
public teachingMethodEnName = "";    //教学方式英文名
public updDate = "";    //修改日期
public updUser = "";    //修改人
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
case clsTeachingMethods.con_TeachingMethodId:
return this.teachingMethodId;
case clsTeachingMethods.con_TeachingMethodName:
return this.teachingMethodName;
case clsTeachingMethods.con_TeachingMethodEnName:
return this.teachingMethodEnName;
case clsTeachingMethods.con_UpdDate:
return this.updDate;
case clsTeachingMethods.con_UpdUser:
return this.updUser;
case clsTeachingMethods.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[TeachingMethods]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"TeachingMethodId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingMethodId(): string {return "teachingMethodId";}    //教学方式Id

 /**
 * 常量:"TeachingMethodName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingMethodName(): string {return "teachingMethodName";}    //教学方式名

 /**
 * 常量:"TeachingMethodEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TeachingMethodEnName(): string {return "teachingMethodEnName";}    //教学方式英文名

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
}
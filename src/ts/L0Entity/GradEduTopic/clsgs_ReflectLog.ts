﻿
 /**
 * 类名:clsgs_ReflectLog
 * 表名:gs_ReflectLog(01120702)
 * 版本:2025.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2025/01/01 10:39:16
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 反思日志(gs_ReflectLog)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_ReflectLog 
{
public static _CurrTabName= "gs_ReflectLog"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["mId", "userId", "idCurrEduCls", "topicId", "reflectLogName", "reflectLogContent", "updUser", "createDate", "updDate", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public userId = "";    //用户ID
public idCurrEduCls = "";    //教学班流水号
public topicId = "";    //主题Id
public reflectLogName = "";    //标题
public reflectLogContent = "";    //内容
public updUser = "";    //修改人
public createDate = "";    //建立日期
public updDate = "";    //修改日期
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
case clsgs_ReflectLog.con_mId:
return this.mId;
case clsgs_ReflectLog.con_UserId:
return this.userId;
case clsgs_ReflectLog.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsgs_ReflectLog.con_TopicId:
return this.topicId;
case clsgs_ReflectLog.con_ReflectLogName:
return this.reflectLogName;
case clsgs_ReflectLog.con_ReflectLogContent:
return this.reflectLogContent;
case clsgs_ReflectLog.con_UpdUser:
return this.updUser;
case clsgs_ReflectLog.con_CreateDate:
return this.createDate;
case clsgs_ReflectLog.con_UpdDate:
return this.updDate;
case clsgs_ReflectLog.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_ReflectLog]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"mId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_mId(): string {return "mId";}    //mId

 /**
 * 常量:"UserId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UserId(): string {return "userId";}    //用户ID

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"TopicId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TopicId(): string {return "topicId";}    //主题Id

 /**
 * 常量:"ReflectLogName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReflectLogName(): string {return "reflectLogName";}    //标题

 /**
 * 常量:"ReflectLogContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReflectLogContent(): string {return "reflectLogContent";}    //内容

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"CreateDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateDate(): string {return "createDate";}    //建立日期

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
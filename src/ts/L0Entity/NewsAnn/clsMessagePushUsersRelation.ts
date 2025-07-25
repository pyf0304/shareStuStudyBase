
 /**
 * 类名:clsMessagePushUsersRelation
 * 表名:MessagePushUsersRelation(01120284)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:09
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 消息推送与用户关系(MessagePushUsersRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsMessagePushUsersRelation 
{
public static _CurrTabName= "MessagePushUsersRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "MessagePushUsersRelationId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 6;
public static AttributeName = ["messagePushUsersRelationId", "messagePushId", "receivePeople", "isReceive", "createTime", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public messagePushUsersRelationId = 0;    //消息推送与用户关系Id
public messagePushId = "";    //消息Id
public receivePeople = "";    //接收人员
public isReceive = false;    //是否接收
public createTime = new Date();    //CreateTime
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
case clsMessagePushUsersRelation.con_MessagePushUsersRelationId:
return this.messagePushUsersRelationId;
case clsMessagePushUsersRelation.con_MessagePushId:
return this.messagePushId;
case clsMessagePushUsersRelation.con_ReceivePeople:
return this.receivePeople;
case clsMessagePushUsersRelation.con_IsReceive:
return this.isReceive;
case clsMessagePushUsersRelation.con_CreateTime:
return this.createTime;
case clsMessagePushUsersRelation.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[MessagePushUsersRelation]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"MessagePushUsersRelationId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessagePushUsersRelationId(): string {return "messagePushUsersRelationId";}    //消息推送与用户关系Id

 /**
 * 常量:"MessagePushId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessagePushId(): string {return "messagePushId";}    //消息Id

 /**
 * 常量:"ReceivePeople"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ReceivePeople(): string {return "receivePeople";}    //接收人员

 /**
 * 常量:"IsReceive"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsReceive(): string {return "isReceive";}    //是否接收

 /**
 * 常量:"CreateTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateTime(): string {return "createTime";}    //CreateTime

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
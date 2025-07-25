
 /**
 * 类名:clsvMessagePushUsersRelation
 * 表名:vMessagePushUsersRelation(01120285)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:54:18
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
 * 消息推送用户关系视图(vMessagePushUsersRelation)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvMessagePushUsersRelation 
{
public static _CurrTabName= "vMessagePushUsersRelation"; //当前表名,与该类相关的表名
public static _KeyFldName= "MessagePushUsersRelationId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["messagePushUsersRelationId", "messagePushId", "messagePushNumber", "messageTitle", "messageContent", "messageTypeId", "isAllpush", "clientVersionTypeId", "receivePeople", "isReceive", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public messagePushUsersRelationId = 0;    //消息推送与用户关系Id
public messagePushId = "";    //消息Id
public messagePushNumber = "";    //消息编号
public messageTitle = "";    //消息标题
public messageContent = "";    //消息内容
public messageTypeId = "";    //消息类型Id
public isAllpush = false;    //是否全体推送
public clientVersionTypeId = "";    //客户端版本类型Id
public receivePeople = "";    //接收人员
public isReceive = false;    //是否接收
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
case clsvMessagePushUsersRelation.con_MessagePushUsersRelationId:
return this.messagePushUsersRelationId;
case clsvMessagePushUsersRelation.con_MessagePushId:
return this.messagePushId;
case clsvMessagePushUsersRelation.con_MessagePushNumber:
return this.messagePushNumber;
case clsvMessagePushUsersRelation.con_MessageTitle:
return this.messageTitle;
case clsvMessagePushUsersRelation.con_MessageContent:
return this.messageContent;
case clsvMessagePushUsersRelation.con_MessageTypeId:
return this.messageTypeId;
case clsvMessagePushUsersRelation.con_IsAllpush:
return this.isAllpush;
case clsvMessagePushUsersRelation.con_ClientVersionTypeId:
return this.clientVersionTypeId;
case clsvMessagePushUsersRelation.con_ReceivePeople:
return this.receivePeople;
case clsvMessagePushUsersRelation.con_IsReceive:
return this.isReceive;
case clsvMessagePushUsersRelation.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vMessagePushUsersRelation]中不存在!`;
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
 * 常量:"MessagePushNumber"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessagePushNumber(): string {return "messagePushNumber";}    //消息编号

 /**
 * 常量:"MessageTitle"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessageTitle(): string {return "messageTitle";}    //消息标题

 /**
 * 常量:"MessageContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessageContent(): string {return "messageContent";}    //消息内容

 /**
 * 常量:"MessageTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MessageTypeId(): string {return "messageTypeId";}    //消息类型Id

 /**
 * 常量:"IsAllpush"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAllpush(): string {return "isAllpush";}    //是否全体推送

 /**
 * 常量:"ClientVersionTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_ClientVersionTypeId(): string {return "clientVersionTypeId";}    //客户端版本类型Id

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
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
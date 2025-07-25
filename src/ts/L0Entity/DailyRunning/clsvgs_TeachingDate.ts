
 /**
 * 类名:clsvgs_TeachingDate
 * 表名:vgs_TeachingDate(01120687)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:52
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * vgs_TeachingDate(vgs_TeachingDate)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvgs_TeachingDate 
{
public static _CurrTabName= "vgs_TeachingDate"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["mId", "currEduClsId", "eduClsName", "memo", "updDate", "endDate", "startDate", "idCurrEduCls", "updUser"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public currEduClsId = "";    //教学班Id
public eduClsName = "";    //教学班名
public memo = "";    //备注
public updDate = "";    //修改日期
public endDate = "";    //截止日期
public startDate = "";    //开始日期
public idCurrEduCls = "";    //教学班流水号
public updUser = "";    //修改人

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
case clsvgs_TeachingDate.con_mId:
return this.mId;
case clsvgs_TeachingDate.con_CurrEduClsId:
return this.currEduClsId;
case clsvgs_TeachingDate.con_EduClsName:
return this.eduClsName;
case clsvgs_TeachingDate.con_Memo:
return this.memo;
case clsvgs_TeachingDate.con_UpdDate:
return this.updDate;
case clsvgs_TeachingDate.con_EndDate:
return this.endDate;
case clsvgs_TeachingDate.con_StartDate:
return this.startDate;
case clsvgs_TeachingDate.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsvgs_TeachingDate.con_UpdUser:
return this.updUser;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vgs_TeachingDate]中不存在!`;
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
 * 常量:"CurrEduClsId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CurrEduClsId(): string {return "currEduClsId";}    //教学班Id

 /**
 * 常量:"EduClsName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EduClsName(): string {return "eduClsName";}    //教学班名

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"EndDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_EndDate(): string {return "endDate";}    //截止日期

 /**
 * 常量:"StartDate"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StartDate(): string {return "startDate";}    //开始日期

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人
}
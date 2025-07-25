
 /**
 * 类名:clsvXzMajorDirection
 * 表名:vXzMajorDirection(01120553)
 * 版本:2025.04.06.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/06 21:43:43
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
 * v专业方向(vXzMajorDirection)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvXzMajorDirection 
{
public static _CurrTabName= "vXzMajorDirection"; //当前表名,与该类相关的表名
public static _KeyFldName= "MajorDirectionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 11;
public static AttributeName = ["majorDirectionId", "idXzMajor", "majorId", "majorName", "majorDirectionName", "majorDirectionENName", "majorDirectionExplain", "isVisible", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public majorDirectionId = "";    //研究方向Id
public idXzMajor = "";    //专业流水号
public majorId = "";    //专业Id
public majorName = "";    //专业名称
public majorDirectionName = "";    //研究方向名
public majorDirectionENName = "";    //研究方向英文名
public majorDirectionExplain = "";    //专业方向说明
public isVisible = false;    //是否显示
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
case clsvXzMajorDirection.con_MajorDirectionId:
return this.majorDirectionId;
case clsvXzMajorDirection.con_IdXzMajor:
return this.idXzMajor;
case clsvXzMajorDirection.con_MajorId:
return this.majorId;
case clsvXzMajorDirection.con_MajorName:
return this.majorName;
case clsvXzMajorDirection.con_MajorDirectionName:
return this.majorDirectionName;
case clsvXzMajorDirection.con_MajorDirectionENName:
return this.majorDirectionENName;
case clsvXzMajorDirection.con_MajorDirectionExplain:
return this.majorDirectionExplain;
case clsvXzMajorDirection.con_IsVisible:
return this.isVisible;
case clsvXzMajorDirection.con_UpdDate:
return this.updDate;
case clsvXzMajorDirection.con_UpdUser:
return this.updUser;
case clsvXzMajorDirection.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vXzMajorDirection]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"MajorDirectionId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirectionId(): string {return "majorDirectionId";}    //研究方向Id

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
 * 常量:"MajorDirectionName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirectionName(): string {return "majorDirectionName";}    //研究方向名

 /**
 * 常量:"MajorDirectionENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirectionENName(): string {return "majorDirectionENName";}    //研究方向英文名

 /**
 * 常量:"MajorDirectionExplain"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_MajorDirectionExplain(): string {return "majorDirectionExplain";}    //专业方向说明

 /**
 * 常量:"IsVisible"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsVisible(): string {return "isVisible";}    //是否显示

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
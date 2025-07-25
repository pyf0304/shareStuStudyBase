
 /**
 * 类名:clsXzMajorDirection
 * 表名:XzMajorDirection(01120552)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:52
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
 * 专业方向(XzMajorDirection)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsXzMajorDirection 
{
public static _CurrTabName= "XzMajorDirection"; //当前表名,与该类相关的表名
public static _KeyFldName= "MajorDirectionId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 9;
public static AttributeName = ["majorDirectionId", "idXzMajor", "majorDirectionName", "majorDirectionENName", "majorDirectionExplain", "isVisible", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public majorDirectionId = "";    //研究方向Id
public idXzMajor = "";    //专业流水号
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
case clsXzMajorDirection.con_MajorDirectionId:
return this.majorDirectionId;
case clsXzMajorDirection.con_IdXzMajor:
return this.idXzMajor;
case clsXzMajorDirection.con_MajorDirectionName:
return this.majorDirectionName;
case clsXzMajorDirection.con_MajorDirectionENName:
return this.majorDirectionENName;
case clsXzMajorDirection.con_MajorDirectionExplain:
return this.majorDirectionExplain;
case clsXzMajorDirection.con_IsVisible:
return this.isVisible;
case clsXzMajorDirection.con_UpdDate:
return this.updDate;
case clsXzMajorDirection.con_UpdUser:
return this.updUser;
case clsXzMajorDirection.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[XzMajorDirection]中不存在!`;
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
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumXzMajorDirection
{
 /**
 * testlyl
 **/
static readonly testlyl_00000001 = "00000001";
 /**
 * test0118
 **/
static readonly test_00000003 = "00000003";
 /**
 * 杨雪姣
 **/
static readonly Lucy_00000004 = "00000004";
 /**
 * 信息化教育
 **/
static readonly InformationTechnology_00000005 = "00000005";
 /**
 * 绩效培训
 **/
static readonly PerformanceTraining_00000006 = "00000006";
 /**
 * 网络方向
 **/
static readonly NetworkingDirection_00000007 = "00000007";
 /**
 * 数字媒体
 **/
static readonly DigitalMedia_00000008 = "00000008";
 /**
 * 自适应学习与个性化学习
 **/
static readonly AdaptiveLearningAndPersonalizedLearning_00000009 = "00000009";
}
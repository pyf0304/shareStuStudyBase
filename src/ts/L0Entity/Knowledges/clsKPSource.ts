
 /**
 * 类名:clsKPSource
 * 表名:KPSource(01120995)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:35:05
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点来源(KPSource)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsKPSource 
{
public static _CurrTabName= "KPSource"; //当前表名,与该类相关的表名
public static _KeyFldName= "KpSourceId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["kpSourceId", "kpSourceName", "kpSourceEnName", "updDate", "updUser"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public kpSourceId = "";    //知识点来源Id
public kpSourceName = "";    //知识点来源名
public kpSourceEnName = "";    //知识点来源英文名
public updDate = "";    //修改日期
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
case clsKPSource.con_KpSourceId:
return this.kpSourceId;
case clsKPSource.con_KpSourceName:
return this.kpSourceName;
case clsKPSource.con_KpSourceEnName:
return this.kpSourceEnName;
case clsKPSource.con_UpdDate:
return this.updDate;
case clsKPSource.con_UpdUser:
return this.updUser;
default:
strMsg = `字段名:[${strFldName}]在表对象:[KPSource]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"KpSourceId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KpSourceId(): string {return "kpSourceId";}    //知识点来源Id

 /**
 * 常量:"KpSourceName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KpSourceName(): string {return "kpSourceName";}    //知识点来源名

 /**
 * 常量:"KpSourceEnName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KpSourceEnName(): string {return "kpSourceEnName";}    //知识点来源英文名

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
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumKPSource
{
 /**
 * 当前教材
 **/
static readonly CurrentTeachingMaterial_01 = "01";
 /**
 * 网络
 **/
static readonly Network_02 = "02";
 /**
 * 旧教材
 **/
static readonly OldTeachingMaterial_03 = "03";
 /**
 * 自定义
 **/
static readonly Custom_04 = "04";
}
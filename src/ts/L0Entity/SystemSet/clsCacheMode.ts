
 /**
 * 类名:clsCacheMode
 * 表名:CacheMode(01120688)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/02 10:33:56
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:系统设置(SystemSet)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer,0262)
 * 编程语言:TypeScript
 **/
 /**
 * 缓存方式(CacheMode)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsCacheMode 
{
public static _CurrTabName= "CacheMode"; //当前表名,与该类相关的表名
public static _KeyFldName= "CacheModeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 5;
public static AttributeName = ["cacheModeId", "cacheModeName", "cacheModeENName", "inUse", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public cacheModeId = "";    //缓存方式Id
public cacheModeName = "";    //缓存方式名
public cacheModeENName = "";    //缓存方式英文名
public inUse = false;    //是否在用
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
case clsCacheMode.con_CacheModeId:
return this.cacheModeId;
case clsCacheMode.con_CacheModeName:
return this.cacheModeName;
case clsCacheMode.con_CacheModeENName:
return this.cacheModeENName;
case clsCacheMode.con_InUse:
return this.inUse;
case clsCacheMode.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[CacheMode]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"CacheModeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CacheModeId(): string {return "cacheModeId";}    //缓存方式Id

 /**
 * 常量:"CacheModeName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CacheModeName(): string {return "cacheModeName";}    //缓存方式名

 /**
 * 常量:"CacheModeENName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CacheModeENName(): string {return "cacheModeENName";}    //缓存方式英文名

 /**
 * 常量:"InUse"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_InUse(): string {return "inUse";}    //是否在用

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
 export class enumCacheMode
{
 /**
 * Web服务器缓存
 **/
static readonly WebServerCache_01 = "01";
 /**
 * 客户端缓存
 **/
static readonly ClientCache_02 = "02";
 /**
 * localStorage
 **/
static readonly localStorage_03 = "03";
 /**
 * sessionStorage
 **/
static readonly sessionStorage_04 = "04";
 /**
 * 未知
 **/
static readonly UnKnown_05 = "05";
}
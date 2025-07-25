
 /**
 * 类名:clsvCacheUseState
 * 表名:vCacheUseState(01120690)
 * 版本:2025.03.17.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/17 14:54:40
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
 * vCacheUseState(vCacheUseState)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsvCacheUseState 
{
public static _CurrTabName= "vCacheUseState"; //当前表名,与该类相关的表名
public static _KeyFldName= "mId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 8;
public static AttributeName = ["mId", "userId", "cacheModeId", "cacheModeName", "cacheModeENName", "cacheKey", "cacheSize", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public mId = 0;    //mId
public userId = "";    //用户ID
public cacheModeId = "";    //缓存方式Id
public cacheModeName = "";    //缓存方式名
public cacheModeENName = "";    //缓存方式英文名
public cacheKey = "";    //缓存关键字
public cacheSize = 0;    //缓存大小
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
case clsvCacheUseState.con_mId:
return this.mId;
case clsvCacheUseState.con_UserId:
return this.userId;
case clsvCacheUseState.con_CacheModeId:
return this.cacheModeId;
case clsvCacheUseState.con_CacheModeName:
return this.cacheModeName;
case clsvCacheUseState.con_CacheModeENName:
return this.cacheModeENName;
case clsvCacheUseState.con_CacheKey:
return this.cacheKey;
case clsvCacheUseState.con_CacheSize:
return this.cacheSize;
case clsvCacheUseState.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[vCacheUseState]中不存在!`;
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
 * 常量:"CacheKey"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CacheKey(): string {return "cacheKey";}    //缓存关键字

 /**
 * 常量:"CacheSize"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CacheSize(): string {return "cacheSize";}    //缓存大小

 /**
 * 常量:"Memo"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注
}
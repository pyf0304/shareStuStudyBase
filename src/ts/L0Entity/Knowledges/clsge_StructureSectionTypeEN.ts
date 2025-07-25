
 /**
 * 类名:clsge_StructureSectionTypeEN
 * 表名:ge_StructureSectionType(01120901)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:21
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
 /**
 * 节点类型(ge_StructureSectionType)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsge_StructureSectionTypeEN extends clsGeneralTab
{
public static _RefreshTimeLst = new Array<string>();
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "03"; //localStorage
public static PrimaryTypeId = "03"; //自增
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "ge_StructureSectionType"; //当前表名,与该类相关的表名
public static _KeyFldName= "SectionTypeId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 7;
public static AttributeName = ["sectionTypeId", "sectionTypeName", "sectionTypeEnName", "courseId", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrSectionTypeId = "";    //节点类型Id
private mstrSectionTypeName = "";    //节点类型名称
private mstrSectionTypeEnName = "";    //节点类型英文名称
private mstrCourseId = "";    //课程Id
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注

/**
 * 节点类型Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSectionTypeId (value: string)
{
if (value  != undefined)
{
 this.sectionTypeId = value;
    this.hmProperty["sectionTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节点类型名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSectionTypeName (value: string)
{
if (value  != undefined)
{
 this.sectionTypeName = value;
    this.hmProperty["sectionTypeName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 节点类型英文名称(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSectionTypeEnName (value: string)
{
if (value  != undefined)
{
 this.sectionTypeEnName = value;
    this.hmProperty["sectionTypeEnName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsge_StructureSectionTypeEN.con_SectionTypeId:
return this.sectionTypeId;
case clsge_StructureSectionTypeEN.con_SectionTypeName:
return this.sectionTypeName;
case clsge_StructureSectionTypeEN.con_SectionTypeEnName:
return this.sectionTypeEnName;
case clsge_StructureSectionTypeEN.con_CourseId:
return this.courseId;
case clsge_StructureSectionTypeEN.con_UpdDate:
return this.updDate;
case clsge_StructureSectionTypeEN.con_UpdUser:
return this.updUser;
case clsge_StructureSectionTypeEN.con_Memo:
return this.memo;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureSectionType]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsge_StructureSectionTypeEN.con_SectionTypeId:
this.sectionTypeId = strValue;
    this.hmProperty["sectionTypeId"] = true;
break;
case clsge_StructureSectionTypeEN.con_SectionTypeName:
this.sectionTypeName = strValue;
    this.hmProperty["sectionTypeName"] = true;
break;
case clsge_StructureSectionTypeEN.con_SectionTypeEnName:
this.sectionTypeEnName = strValue;
    this.hmProperty["sectionTypeEnName"] = true;
break;
case clsge_StructureSectionTypeEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsge_StructureSectionTypeEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsge_StructureSectionTypeEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsge_StructureSectionTypeEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[ge_StructureSectionType]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public sectionTypeId = "";    //节点类型Id
public sectionTypeName = "";    //节点类型名称
public sectionTypeEnName = "";    //节点类型英文名称
public courseId = "";    //课程Id
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注


 /**
 * 常量:"SectionTypeId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionTypeId(): string {return "sectionTypeId";}    //节点类型Id

 /**
 * 常量:"SectionTypeName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionTypeName(): string {return "sectionTypeName";}    //节点类型名称

 /**
 * 常量:"SectionTypeEnName"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_SectionTypeEnName(): string {return "sectionTypeEnName";}    //节点类型英文名称

 /**
 * 常量:"CourseId"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"UpdDate"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 设置条件字段值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
 * @param strFldName:字段名
 * @param strFldValue:字段值
 * @param strComparisonOp:比较操作条符
 * @returns 根据关键字获取的名称
 **/
public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {                
this.SetFldValue(strFldName, strFldValue);
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
/**
* 判断一个字符串是否是类的属性
* @param propName: 属性名
* @returns 是否是属性
*/
public static hasProperty(propName: string) : boolean {
//return propName in new clsge_StructureSectionTypeEN();
const instance = new clsge_StructureSectionTypeEN();
return Object.prototype.hasOwnProperty.call(instance, propName);
}
}
 /**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
 export class enumge_StructureSectionType
{
 /**
 * 类型1
 **/
static readonly Type1_00000001 = "00000001";
 /**
 * 类型2
 **/
static readonly Type2_00000002 = "00000002";
 /**
 * 类型3
 **/
static readonly Type3_00000003 = "00000003";
 /**
 * 类型4
 **/
static readonly Type4_00000004 = "00000004";
 /**
 * 类型1
 **/
static readonly Type1_00000005 = "00000005";
 /**
 * 类型5
 **/
static readonly Type5_00000006 = "00000006";
 /**
 * 文档的对象模型
 **/
static readonly FileObjModule_00000007 = "00000007";
 /**
 * 事件处理
 **/
static readonly EventAccess_00000008 = "00000008";
 /**
 * AAA2
 **/
static readonly BBB_00000010 = "00000010";
 /**
 * DDD
 **/
static readonly D_00000012 = "00000012";
 /**
 * EEE
 **/
static readonly E_00000013 = "00000013";
 /**
 * FF
 **/
static readonly F_00000014 = "00000014";
}
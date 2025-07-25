
 /**
 * 类名:clscc_KnowledgeModules
 * 表名:cc_KnowledgeModules(01120959)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:35:32
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
 * 知识点模块(cc_KnowledgeModules)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clscc_KnowledgeModules 
{
public static _CurrTabName= "cc_KnowledgeModules"; //当前表名,与该类相关的表名
public static _KeyFldName= "KnowledgeModuleId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 10;
public static AttributeName = ["knowledgeModuleId", "knowledgeModuleName", "knowledgeModuleContent", "courseId", "knowledgeNum", "questionNum", "orderNum", "updDate", "updUser", "memo"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public knowledgeModuleId = "";    //知识点模块Id
public knowledgeModuleName = "";    //知识点模块名称
public knowledgeModuleContent = "";    //知识点模块内容
public courseId = "";    //课程Id
public knowledgeNum = 0;    //知识点数
public questionNum = 0;    //题目数
public orderNum = 0;    //序号
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
case clscc_KnowledgeModules.con_KnowledgeModuleId:
return this.knowledgeModuleId;
case clscc_KnowledgeModules.con_KnowledgeModuleName:
return this.knowledgeModuleName;
case clscc_KnowledgeModules.con_KnowledgeModuleContent:
return this.knowledgeModuleContent;
case clscc_KnowledgeModules.con_CourseId:
return this.courseId;
case clscc_KnowledgeModules.con_KnowledgeNum:
return this.knowledgeNum;
case clscc_KnowledgeModules.con_QuestionNum:
return this.questionNum;
case clscc_KnowledgeModules.con_OrderNum:
return this.orderNum;
case clscc_KnowledgeModules.con_UpdDate:
return this.updDate;
case clscc_KnowledgeModules.con_UpdUser:
return this.updUser;
case clscc_KnowledgeModules.con_Memo:
return this.memo;
default:
strMsg = `字段名:[${strFldName}]在表对象:[cc_KnowledgeModules]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"KnowledgeModuleId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeModuleId(): string {return "knowledgeModuleId";}    //知识点模块Id

 /**
 * 常量:"KnowledgeModuleName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeModuleName(): string {return "knowledgeModuleName";}    //知识点模块名称

 /**
 * 常量:"KnowledgeModuleContent"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeModuleContent(): string {return "knowledgeModuleContent";}    //知识点模块内容

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"KnowledgeNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeNum(): string {return "knowledgeNum";}    //知识点数

 /**
 * 常量:"QuestionNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_QuestionNum(): string {return "questionNum";}    //题目数

 /**
 * 常量:"OrderNum"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_OrderNum(): string {return "orderNum";}    //序号

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
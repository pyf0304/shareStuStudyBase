
 /**
 * 类名:clsgs_KnowledgesGraph
 * 表名:gs_KnowledgesGraph(01120873)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:36:01
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
 * 知识点逻辑图(gs_KnowledgesGraph)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class  clsgs_KnowledgesGraph 
{
public static _CurrTabName= "gs_KnowledgesGraph"; //当前表名,与该类相关的表名
public static _KeyFldName= "KnowledgeGraphId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["knowledgeGraphId", "knowledgeGraphName", "idCurrEduCls", "courseId", "createUser", "updDate", "updUser", "memo", "graphTypeId", "isDisplay", "isExtend", "isRecommend", "isAnswer", "isSubmit", "submitTime", "takeUpTime", "startTime"];
//以下是属性变量

/**
 * 设置对象中公共属性.
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
*/
public knowledgeGraphId = "";    //知识点图Id
public knowledgeGraphName = "";    //连连看图名
public idCurrEduCls = "";    //教学班流水号
public courseId = "";    //课程Id
public createUser = "";    //建立用户
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public graphTypeId = "";    //图谱类型Id
public isDisplay = false;    //是否显示
public isExtend = false;    //是否扩展
public isRecommend = false;    //是否推荐
public isAnswer = false;    //是否回答
public isSubmit = false;    //是否提交
public submitTime = "";    //提交时间
public takeUpTime = "";    //耗时
public startTime = "";    //开始时间(s)

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
case clsgs_KnowledgesGraph.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsgs_KnowledgesGraph.con_KnowledgeGraphName:
return this.knowledgeGraphName;
case clsgs_KnowledgesGraph.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsgs_KnowledgesGraph.con_CourseId:
return this.courseId;
case clsgs_KnowledgesGraph.con_CreateUser:
return this.createUser;
case clsgs_KnowledgesGraph.con_UpdDate:
return this.updDate;
case clsgs_KnowledgesGraph.con_UpdUser:
return this.updUser;
case clsgs_KnowledgesGraph.con_Memo:
return this.memo;
case clsgs_KnowledgesGraph.con_GraphTypeId:
return this.graphTypeId;
case clsgs_KnowledgesGraph.con_IsDisplay:
return this.isDisplay;
case clsgs_KnowledgesGraph.con_IsExtend:
return this.isExtend;
case clsgs_KnowledgesGraph.con_IsRecommend:
return this.isRecommend;
case clsgs_KnowledgesGraph.con_IsAnswer:
return this.isAnswer;
case clsgs_KnowledgesGraph.con_IsSubmit:
return this.isSubmit;
case clsgs_KnowledgesGraph.con_SubmitTime:
return this.submitTime;
case clsgs_KnowledgesGraph.con_TakeUpTime:
return this.takeUpTime;
case clsgs_KnowledgesGraph.con_StartTime:
return this.startTime;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesGraph]中不存在!`;
console.error(strMsg);
return "";
}
}


 /**
 * 常量:"KnowledgeGraphId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"KnowledgeGraphName"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_KnowledgeGraphName(): string {return "knowledgeGraphName";}    //连连看图名

 /**
 * 常量:"IdCurrEduCls"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CourseId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CreateUser"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_CreateUser(): string {return "createUser";}    //建立用户

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

 /**
 * 常量:"GraphTypeId"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_GraphTypeId(): string {return "graphTypeId";}    //图谱类型Id

 /**
 * 常量:"IsDisplay"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsDisplay(): string {return "isDisplay";}    //是否显示

 /**
 * 常量:"IsExtend"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsExtend(): string {return "isExtend";}    //是否扩展

 /**
 * 常量:"IsRecommend"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

 /**
 * 常量:"IsAnswer"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsAnswer(): string {return "isAnswer";}    //是否回答

 /**
 * 常量:"IsSubmit"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"SubmitTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_SubmitTime(): string {return "submitTime";}    //提交时间

 /**
 * 常量:"TakeUpTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_TakeUpTime(): string {return "takeUpTime";}    //耗时

 /**
 * 常量:"StartTime"
 * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
 */
 public static get con_StartTime(): string {return "startTime";}    //开始时间(s)
}
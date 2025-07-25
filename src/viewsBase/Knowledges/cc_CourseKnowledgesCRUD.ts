
 /**
 * 类名:cc_CourseKnowledgesCRUD(界面:cc_CourseKnowledgesCRUD,01120180)
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2025.04.07.1(服务器:WIN-SRV103-116)
 * 日期:2025/04/07 14:50:50
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from "@/ts/PubFun/ExportExcelData";
import { clscc_CourseKnowledgesENEx } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesENEx";
import { CourseId_Session,Combinecc_CourseKnowledgesConditionObj4ExportExcel,CourseChapterId_Static,Combinecc_CourseKnowledgesConditionObj,cc_CourseKnowledges_DeleteKeyIdCache,divVarSet,viewVarSet,dataColumn,BindTabByList,refcc_CourseKnowledges_List } from "@/viewsShare/Knowledges/cc_CourseKnowledgesVueShare";
import { cc_CourseKnowledges_GetRecCountByCondCache,cc_CourseKnowledges_GetSubObjLstCache,cc_CourseKnowledges_ReOrderAsync,cc_CourseKnowledges_ReFreshCache,cc_CourseKnowledges_GoBottomAsync,cc_CourseKnowledges_DownMoveAsync,cc_CourseKnowledges_UpMoveAsync,cc_CourseKnowledges_GoTopAsync,cc_CourseKnowledges_DelRecordAsync,cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync,cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync,cc_CourseKnowledges_GetMaxStrIdAsync,cc_CourseKnowledges_AddNewRecordAsync,cc_CourseKnowledges_UpdateRecordAsync,cc_CourseKnowledges_Delcc_CourseKnowledgessAsync } from "@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi";
import { cc_CourseKnowledgesEx_CopyToEx,cc_CourseKnowledgesEx_FuncMapByFldName,cc_CourseKnowledgesEx_GetObjExLstByPagerCache } from "@/ts/L3ForWApiExShare/Knowledges/clscc_CourseKnowledgesExWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { cc_KnowledgeModules_BindDdl_KnowledgeModuleIdByCourseIdInDivCache } from "@/ts/L3ForWApi/Knowledges/clscc_KnowledgeModulesWApi";
import { cc_CourseChapter_BindDdl_CourseChapterIdInDivCache } from "@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi";
import { KPSource_BindDdl_KPSourceIdInDivCache } from "@/ts/L3ForWApi/Knowledges/clsKPSourceWApi";
import { GetCheckedKeyIdsInDivObj,GetSelectValueInDivObj,SetCheckedItem4KeyIdInDiv,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { clsOrderByData } from "@/ts/PubFun/clsOrderByData";
import { clscc_CourseKnowledgesEN } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN";
import { ObjectAssign,BindTab,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /** cc_CourseKnowledgesCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  cc_CourseKnowledgesCRUD implements clsOperateList
{
public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
public static GetPropValue: (strPropName: string) => string;

//专门用于数据列表的界面变量,用于分页功能等
public currPageIndex = 0;
public divName4DataList = "divDataLst";  //列表中数据区的层Id
public divName4Pager = "divPager";  //列表中的分页区的层Id
public bolIsTableSm = true;//是否窄行的小表,即表中加样式： table-sm
public listPara: ListPara;//是否窄行的小表,即表中加样式： table-sm
public objPager: clsPager;
public static objPageCRUD: cc_CourseKnowledgesCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
cc_CourseKnowledgesCRUD.objPageCRUD = this;
this.objPager = new clsPager(this);
}
 /**
 * 获取当前组件的divList的层对象
 **/
public get thisDivList(): HTMLDivElement {
return divVarSet.refDivList;
}
 /**
 * 获取当前组件的divLayout的层对象
 **/
public get thisDivLayout(): HTMLDivElement {
return divVarSet.refDivLayout;
}
 /**
 * 获取当前界面的主表名
 **/
public get thisTabName(): string {
return clscc_CourseKnowledgesEN._CurrTabName;
}
 /**
 * 每页记录数,在扩展类可以修改
 **/
public get pageSize():number {
return 5;
}
public recCount = 0;

/** 
* 函数功能:初始设置，用来初始化一些变量值
**/
  public abstract InitVarSet() : void; 
/** 
* 函数功能:初始化界面控件值，放在绑定下拉框之后
**/
  public abstract InitCtlVar() : void; 

 /** 函数功能:页面导入,当页面开始运行时所发生的事件
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
 **/
public async PageLoadCache()
{
const strThisFuncName = this.PageLoadCache.name;
// 在此处放置用户代码以初始化页面
try
{
//初始设置，用来初始化一些变量值
await this.InitVarSet();
//初始化界面控件值，放在绑定下拉框之后
await this.InitCtlVar();
if (viewVarSet.sortcc_CourseKnowledgesBy == '') viewVarSet.sortcc_CourseKnowledgesBy = `${ clscc_CourseKnowledgesEN.con_KnowledgeName } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}
catch (e)
{
const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}


 /** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 **/
public async btnQuery_Click() 
{
this.SetCurrPageIndex(1);
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
 **/
public CombineData(arrcc_CourseKnowledgesObjLst: Array<clscc_CourseKnowledgesEN>, arrDataColumn: Array<clsDataColumn>): ExportExcelData 
{
const intRowNum = arrcc_CourseKnowledgesObjLst.length;
const intColNum = arrDataColumn.length;
const arrData: Array <Record<string, any>> = [];
for (let i = 0; i < intRowNum; i++)
{
const objEN: clscc_CourseKnowledgesEN = arrcc_CourseKnowledgesObjLst[i];
const objRow: Record<string, any> = { };
for (let j = 0; j < intColNum; j++)
{
const fldName = arrDataColumn[j].fldName;
const colHeader = arrDataColumn[j].colHeader;
const value = objEN.GetFldValue(fldName); // Get the value using fldName
objRow[colHeader] = value; // Use colHeader as the property name
}
arrData.push(objRow);
}
//console.log("arrData", arrData);
const strFileName = Format("知识点({0})导出.xlsx",
 clscc_CourseKnowledgesEN._CurrTabName);
const strSheetName = "知识点列表";
return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
 **/
public CombineData4Func(arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx>, arrDataColumn: Array<clsDataColumn>): ExportExcelData 
{
const intRowNum = arrcc_CourseKnowledgesExObjLst.length;
const intColNum = arrDataColumn.length;
const arrData: Array <Record<string, any>> = [];
for (let i = 0; i < intRowNum; i++)
{
const objEN: clscc_CourseKnowledgesENEx = arrcc_CourseKnowledgesExObjLst[i];
const objRow: Record<string, any> = { };
for (let j = 0; j < intColNum; j++)
{
const fldName = arrDataColumn[j].fldName;
const colHeader = arrDataColumn[j].colHeader;
const value = objEN.GetFldValue(fldName); // Get the value using fldName
objRow[colHeader] = value; // Use colHeader as the property name
}
arrData.push(objRow);
}
//console.log("arrData", arrData);
const strFileName = Format("知识点({0})导出.xlsx",
 clscc_CourseKnowledgesEN._CurrTabName);
const strSheetName = "知识点列表"; 
return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func)
 **/
public async ExportExcel_cc_CourseKnowledges4Func(): Promise<ExportExcelData> 
{
const strThisFuncName = this.ExportExcel_cc_CourseKnowledges4Func.name;
if (viewVarSet.sortcc_CourseKnowledgesBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortcc_CourseKnowledgesBy)为空,请检查!(In BindGv_cc_CourseKnowledgesCache)");
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}
const objcc_CourseKnowledgesCond = await Combinecc_CourseKnowledgesConditionObj4ExportExcel();
 let arrcc_CourseKnowledgesExObjLst: Array <clscc_CourseKnowledgesENEx> = [];
try
{

this.recCount = await cc_CourseKnowledges_GetRecCountByCondCache(objcc_CourseKnowledgesCond ,CourseId_Session.value);
if (this.recCount == 0)
{
const strMsg = Format("在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!", objcc_CourseKnowledgesCond.whereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}

const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetSubObjLstCache(objcc_CourseKnowledgesCond ,CourseId_Session.value);
arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesObjLst.map(cc_CourseKnowledgesEx_CopyToEx);
}
catch(e)
{
const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}
if (arrcc_CourseKnowledgesExObjLst.length == 0)
{
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, CourseId_Session.value);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
return { arrObjLst: [], sheetName: '', fileName: '' };
}
try
{
const arrDataColumn: Array < clsDataColumn > =
       [
{
fldName: clscc_CourseKnowledgesEN.con_OrderNum,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "序号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_CourseCode,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "课程代码",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_KnowledgeName,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_KnowledgeContent,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点内容",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_ChapterName,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "章名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_SectionName,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "节名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_IsShow,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否启用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_LikeCount,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "资源喜欢数量",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_CourseId,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "课程Id",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_CourseName,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "课程名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_DateTimeSim,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "日期时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_Memo,
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "备注",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrcc_CourseKnowledgesExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}
arrcc_CourseKnowledgesExObjLst = arrcc_CourseKnowledgesExObjLst.sort(this.SortFunExportExcel);
 return this.CombineData(arrcc_CourseKnowledgesExObjLst, arrDataColumn); 
//console.log("完成BindGv_cc_CourseKnowledges!");
}
catch(e)
{
const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}
}

 /**
 * 设置绑定下拉框，针对字段:[KnowledgeModuleId]
 * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
 **/

public async SetDdl_KnowledgeModuleIdInDivInFeature(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In .SetDdl_KnowledgeModuleIdInDivInFeature)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(.SetDdl_KnowledgeModuleIdInDivInFeature)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In .SetDdl_KnowledgeModuleIdInDivInFeature)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(.SetDdl_KnowledgeModuleIdInDivInFeature)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
await cc_KnowledgeModules_BindDdl_KnowledgeModuleIdByCourseIdInDivCache(divVarSet.refDivFunction, "ddlKnowledgeModuleId" , strCourseId);//
}

 /**
 * 设置绑定下拉框，针对字段:[CourseChapterId]
 * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
 **/

public async SetDdl_CourseChapterIdInDivInFeature(strCourseId: string)
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In .SetDdl_CourseChapterIdInDivInFeature)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(.SetDdl_CourseChapterIdInDivInFeature)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In .SetDdl_CourseChapterIdInDivInFeature)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(.SetDdl_CourseChapterIdInDivInFeature)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}
await cc_CourseChapter_BindDdl_CourseChapterIdInDivCache(divVarSet.refDivFunction, "ddlCourseChapterId" , strCourseId);//
}

 /**
 * 设置绑定下拉框，针对字段:[KpSourceId]
 * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
 **/

public async SetDdl_KpSourceIdInDivInFeature()
{

await KPSource_BindDdl_KPSourceIdInDivCache(divVarSet.refDivFunction, "ddlKpSourceId" );//
}


 /** 设置字段值-InUse
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
 **/
public async btnSetInUse_Click() {
const strThisFuncName = this.btnSetInUse_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要设置是否在用的${this.thisTabName}记录!`);
return "";
}
const bolInUse: boolean = $("#ddlbInUse_SetFldValue").prop("checked");
//console.log('bolInUse=' + bolInUse);
//console.log('arrKeyIds=');
//console.log(arrKeyIds);
await this.SetInUse(arrKeyIds, bolInUse);
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}
 /** 设置字段值-KnowledgeModuleId
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
 **/
public async btnSetKnowledgeModuleId_Click() {
const strThisFuncName = this.btnSetKnowledgeModuleId_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要设置知识点模块Id的${this.thisTabName}记录!`);
return "";
}
const strKnowledgeModuleId = GetSelectValueInDivObj(divVarSet.refDivFunction, "ddlKnowledgeModuleId_SetFldValue");
if (strKnowledgeModuleId == "")
{
const strMsg = "请输入知识点模块Id(KnowledgeModuleId)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
//console.log('strKnowledgeModuleId=' + strKnowledgeModuleId);
//console.log('arrKeyIds=');
//console.log(arrKeyIds);
await this.SetKnowledgeModuleId(arrKeyIds, strKnowledgeModuleId);
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}
 /** 设置字段值-KpSourceId
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
 **/
public async btnSetKpSourceId_Click() {
const strThisFuncName = this.btnSetKpSourceId_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要设置知识点来源Id的${this.thisTabName}记录!`);
return "";
}
const strKpSourceId = GetSelectValueInDivObj(divVarSet.refDivFunction, "ddlKpSourceId_SetFldValue");
if (strKpSourceId == "")
{
const strMsg = "请输入知识点来源Id(KpSourceId)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
//console.log('strKpSourceId=' + strKpSourceId);
//console.log('arrKeyIds=');
//console.log(arrKeyIds);
await this.SetKpSourceId(arrKeyIds, strKpSourceId);
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 重序
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
 **/
public async btnReOrder_Click()
{
const strThisFuncName = this.btnReOrder_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseChapterId =CourseChapterId_Static.value;
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
const jsonObject =
{
"courseChapterId": strCourseChapterId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await cc_CourseKnowledges_ReOrderAsync(objOrderByData);
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `重序出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}

 /**
 * 置底
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
 **/
public async btnGoBottum_Click()
{
const strThisFuncName = this.btnGoBottum_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseChapterId =CourseChapterId_Static.value;
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要置底的${this.thisTabName}记录!`);
return "";
}
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
objOrderByData.KeyIdLst = arrKeyIds;
const jsonObject =
{
"coursechapterid": strCourseChapterId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await cc_CourseKnowledges_GoBottomAsync(objOrderByData);
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `置底出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
}

 /**
 * 移动记录序号时的预检查函数
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
 **/
public PreCheck4Order(): boolean
{
const strCourseChapterId =CourseChapterId_Static.value;
if (strCourseChapterId == "")
{
const strMsg = Format("请输入CourseChapterId!");
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return false;
}
return true;
}

 /**
 * 下移
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
 **/
public async btnDownMove_Click()
{
const strThisFuncName = this.btnDownMove_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseChapterId =CourseChapterId_Static.value;
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    if (arrKeyIds.length == 0)
{
alert(`请选择需要下移的${this.thisTabName}记录!`);
return;
}
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
objOrderByData.KeyIdLst = arrKeyIds;
const jsonObject =
{
"coursechapterid": strCourseChapterId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await cc_CourseKnowledges_DownMoveAsync(objOrderByData);
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `下移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
}

 /**
 * 上移
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
 **/
public async btnUpMove_Click()
{
const strThisFuncName = this.btnUpMove_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseChapterId =CourseChapterId_Static.value;
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要上移的${this.thisTabName}记录!`);
return;
}
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
objOrderByData.KeyIdLst = arrKeyIds;
const jsonObject =
{
"coursechapterid": strCourseChapterId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await cc_CourseKnowledges_UpMoveAsync(objOrderByData);
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `上移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
}

 /** 置顶
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
 **/
public async btnGoTop_Click()
{
const strThisFuncName = this.btnGoTop_Click.name;
if (this.PreCheck4Order() == false) return;
const strCourseChapterId =CourseChapterId_Static.value;
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要置顶的${this.thisTabName}记录!`);
return "";
}
try
{
const objOrderByData: clsOrderByData = new clsOrderByData();
objOrderByData.KeyIdLst = arrKeyIds;
const jsonObject =
{
"coursechapterid": strCourseChapterId,
}
const jsonStr = JSON.stringify(jsonObject);
objOrderByData.ClassificationFieldValueLst = jsonStr;
await cc_CourseKnowledges_GoTopAsync(objOrderByData);
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
}
catch (e)
{
const strMsg = `置顶出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
const divDataLst = GetDivObjInDivObj(divVarSet.refDivList, 'divDataLst');
arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
}

 /**
 * 添加新记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
 **/
public async btnCopyRecord_Click() {
const strThisFuncName = this.btnCopyRecord_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要克隆的${this.thisTabName}记录!`);
return "";
}
await this.CopyRecord(arrKeyIds);
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 
 * 在数据表里删除记录
 * "strCourseKnowledgeId": 表关键字
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
 **/
public async btnDelRecordInTab_Click(strKeyId:string) {
const strThisFuncName = this.btnDelRecordInTab_Click.name;
try
{
 if (strKeyId == "")
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
if (confirmDel(0) == false)
{
return;
}
await this.DelRecord(strKeyId);
 await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 
 * 在数据表里选择记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
 **/
public async btnSelectRecordInTab_Click(strCourseKnowledgeId: string) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (IsNullOrEmpty(strCourseKnowledgeId) == true)
{
const strMsg = "请选择相关记录,请检查!";
console.error(strMsg);
alert(strMsg);
return;
}
if (confirmDel(0) == false)
{
return;
}
this.SelectRecord(strCourseKnowledgeId);
}
catch(e)
{
const strMsg = `选择记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 
 * 根据关键字删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
 **/
public async DelRecord(strCourseKnowledgeId: string) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await cc_CourseKnowledges_DelRecordAsync(strCourseKnowledgeId);
if (returnInt > 0)
{
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
//显示信息框
alert(strInfo);
}
else
{
const strInfo = `删除${this.thisTabName}记录不成功!`;
//显示信息框
alert(strInfo);
}
console.log("完成DelRecord!");
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 
 * 根据关键字选择相应的记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
 * @param sender:参数列表
 **/
public async SelectRecord(strCourseKnowledgeId: string) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objcc_CourseKnowledgesEN = await cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync(strCourseKnowledgeId);
console.log('完成SelectRecord!', objcc_CourseKnowledgesEN);
Redirect("/Index/Main_cc_CourseKnowledges");
}
catch(e)
{
const strMsg = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}

 /** 删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
 **/
public async btnDelRecord_Click() {
const strThisFuncName = this.btnDelRecord_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
if (confirmDel(arrKeyIds.length) == false)
{
return;
}
await this.DelMultiRecord(arrKeyIds);
await this.BindGv_cc_CourseKnowledges4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}



 /** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
 **/
public async btnExportExcel_Click() 
{
await this.ExportExcel_cc_CourseKnowledges4Func();
}

 /** 显示cc_CourseKnowledges对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrcc_CourseKnowledgesObjLst:需要绑定的对象列表
 **/
public async BindTab_cc_CourseKnowledges(divContainer: HTMLDivElement, arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx>) 
{
if (divContainer == null)
{
alert(Format("{0}不存在!",divContainer));
return;
}
const arrDataColumn: Array < clsDataColumn > =
       [
{
fldName: "",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "",
text: "",
tdClass: "text-left",
columnType: "CheckBox",
orderNum: 1,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_OrderNum,
sortBy: clscc_CourseKnowledgesEN.con_OrderNum,
sortFun: SortFun,
getDataSource: "",
colHeader: "序号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_QuestionNum,
sortBy: "questionNum",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_KnowledgeName,
sortBy: "knowledgeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_KnowledgeModuleName,
sortBy: "knowledgeModuleName",
sortFun: SortFun,
getDataSource: "",
colHeader: "模块",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_KpSourceName,
sortBy: "kPSourceName",
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点来源名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_CourseChapterName,
sortBy: "courseChapterName",
sortFun: SortFun,
getDataSource: "",
colHeader: "章节名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_UserId,
sortBy: "userId",
sortFun: SortFun,
getDataSource: "",
colHeader: "用户",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_KnowledgeTypeName,
sortBy: "knowledgeTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "类型",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_IsShow,
sortBy: clscc_CourseKnowledgesEN.con_IsShow,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否启用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_CourseName,
sortBy: "courseName",
sortFun: SortFun,
getDataSource: "",
colHeader: "课程",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_LikeCount,
sortBy: "likeCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "喜欢度",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_DateTimeSim,
sortBy: "dateTimeSim",
sortFun: SortFun,
getDataSource: "",
colHeader: "日期时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refcc_CourseKnowledges_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrcc_CourseKnowledgesExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_cc_CourseKnowledges函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrcc_CourseKnowledgesExObjLst, arrDataColumn,  clscc_CourseKnowledgesEN.con_CourseKnowledgeId, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}
/**
* 是否显示所有错误
**/
public get dispAllErrMsg_q(): boolean {
return true;
}

 /** 显示cc_CourseKnowledges对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrcc_CourseKnowledgesExObjLst:需要绑定的对象列表
 **/
public async BindTab_cc_CourseKnowledges4Func(divContainer: HTMLDivElement, arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx>) 
{
const strThisFuncName = this.BindTab_cc_CourseKnowledges4Func.name;
if (divContainer == null)
{
alert(Format("{0}不存在!",divContainer));
return;
}
const arrDataColumn: Array < clsDataColumn > =
       [
{
fldName: "",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "",
text: "",
tdClass: "text-left",
columnType: "CheckBox",
orderNum: 1,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_OrderNum,
sortBy: clscc_CourseKnowledgesEN.con_OrderNum,
sortFun: SortFun,
getDataSource: "",
colHeader: "序号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_QuestionNum,
sortBy: "questionNum",
sortFun: SortFun,
getDataSource: "",
colHeader: "题目数",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_KnowledgeName,
sortBy: "knowledgeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_KnowledgeModuleName,
sortBy: "knowledgeModuleName",
sortFun: SortFun,
getDataSource: "",
colHeader: "模块",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_KpSourceName,
sortBy: "kPSourceName",
sortFun: SortFun,
getDataSource: "",
colHeader: "知识点来源名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_CourseChapterName,
sortBy: "courseChapterName",
sortFun: SortFun,
getDataSource: "",
colHeader: "章节名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_UserId,
sortBy: "userId",
sortFun: SortFun,
getDataSource: "",
colHeader: "用户",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_KnowledgeTypeName,
sortBy: "knowledgeTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "类型",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_IsShow,
sortBy: clscc_CourseKnowledgesEN.con_IsShow,
sortFun: SortFun,
getDataSource: "",
colHeader: "是否启用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_CourseName,
sortBy: "courseName",
sortFun: SortFun,
getDataSource: "",
colHeader: "课程",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesEN.con_LikeCount,
sortBy: "likeCount",
sortFun: SortFun,
getDataSource: "",
colHeader: "喜欢度",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clscc_CourseKnowledgesENEx.con_DateTimeSim,
sortBy: "dateTimeSim",
sortFun: SortFun,
getDataSource: "",
colHeader: "日期时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrcc_CourseKnowledgesExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refcc_CourseKnowledges_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrcc_CourseKnowledgesExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_cc_CourseKnowledges4Func函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrcc_CourseKnowledgesExObjLst, arrDataColumn,  clscc_CourseKnowledgesEN.con_CourseKnowledgeId, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrcc_CourseKnowledgesExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrcc_CourseKnowledgesExObjLst: Array<clscc_CourseKnowledgesENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clscc_CourseKnowledgesEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrcc_CourseKnowledgesExObjLst) {
await cc_CourseKnowledgesEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
}
}
}

 /** 函数功能:在数据 列表中跳转到某一页
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 * @param intPageIndex:页序号
 **/
public async IndexPage(intPageIndex:number)
{
if (intPageIndex == 0)
{
intPageIndex = this.objPager.pageCount;
}
//console.log("跳转到" + intPageIndex + "页");
this.SetCurrPageIndex(intPageIndex);
await this.BindGv_cc_CourseKnowledges4Func(this.listPara.listDiv);
}

 /** 函数功能:在数据列表中跳转到下一页
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
 **/
public async NextPage()
{
const intCurrPageIndex = this.objPager.currPageIndex;
const intPageIndex = Number(intCurrPageIndex) + 1;
//console.log("跳转到" + intPageIndex + "页");
this.IndexPage(intPageIndex);
}

 /** 函数功能:在数据列表中跳转到前一页
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
 **/
public async PrevPage()
{
const intCurrPageIndex = this.objPager.currPageIndex;
const intPageIndex = Number(intCurrPageIndex) - 1;
//console.log("跳转到" + intPageIndex + "页");
this.IndexPage(intPageIndex);
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func)
 **/
public async BindGv_cc_CourseKnowledges4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_cc_CourseKnowledges4Func.name;
if (viewVarSet.sortcc_CourseKnowledgesBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortcc_CourseKnowledgesBy)为空,请检查!(In BindGv_cc_CourseKnowledgesCache)");
console.error(strMsg);
alert(strMsg);
return;
}
const objcc_CourseKnowledgesCond = await Combinecc_CourseKnowledgesConditionObj();
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_CourseId, CourseId_Session.value, "=");
const strWhereCond = JSON.stringify(objcc_CourseKnowledgesCond);
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrcc_CourseKnowledgesExObjLst: Array <clscc_CourseKnowledgesENEx> = [];
try
{

this.recCount = await cc_CourseKnowledges_GetRecCountByCondCache(objcc_CourseKnowledgesCond ,CourseId_Session.value);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", objcc_CourseKnowledgesCond.whereCond);
const strMsg = Format("在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!", objcc_CourseKnowledgesCond.whereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrcc_CourseKnowledgesExObjLst, true);
return;
}

let strSortFun = (x: any, y: any) => { console.log(x,y); return 0};
if (cc_CourseKnowledgesCRUD.sortFunStatic != undefined)
{
strSortFun = cc_CourseKnowledgesCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
}
const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
conditionCollection: objcc_CourseKnowledgesCond,
orderBy: viewVarSet.sortcc_CourseKnowledgesBy,
sortFun: strSortFun
}
arrcc_CourseKnowledgesExObjLst = await cc_CourseKnowledgesEx_GetObjExLstByPagerCache(objPagerPara ,CourseId_Session.value);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrcc_CourseKnowledgesExObjLst.length == 0)
{
const strKey = Format("{0}_{1}", clscc_CourseKnowledgesEN._CurrTabName, CourseId_Session.value);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_cc_CourseKnowledges4Func(divList, arrcc_CourseKnowledgesExObjLst);
//console.log("完成BindGv_cc_CourseKnowledges4Func!");
}
catch(e)
{
const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 * @param objcc_CourseKnowledgesENS:源对象
 * @returns 目标对象=>clscc_CourseKnowledgesEN:objcc_CourseKnowledgesENT
 **/
 public CopyToEx(objcc_CourseKnowledgesENS:clscc_CourseKnowledgesEN ): clscc_CourseKnowledgesENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objcc_CourseKnowledgesENT = new clscc_CourseKnowledgesENEx();
try
{
ObjectAssign(objcc_CourseKnowledgesENT, objcc_CourseKnowledgesENS);
 return objcc_CourseKnowledgesENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objcc_CourseKnowledgesENT;
}
}

 /**
 * 排序函数。根据表对象中随机两个字段的值进行比较,正常使用时,需用该类的扩展类的同名函数
 * 作者:pyf
 * 日期:
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortFunExportExcel)
 * @param a:比较的第1个对象
 * @param b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 **/
public SortFunExportExcel(a:clscc_CourseKnowledgesEN , b:clscc_CourseKnowledgesEN): number 
{
if (a.updUser == b.updUser) {
if (a.updUser == null) return -1;
if (b.updUser == null) return 1;
return a.updUser.localeCompare(b.updUser) ;
}
else {
if (b.updDate == null) return -1;
if (a.updDate == null) return 1;
return a.updDate.localeCompare(b.updDate);
};
}

 /** 函数功能:特别处理列表中某一个字段排序，特别针对扩展字段
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
 * @param sortColumnKey:排序字段名
 * @param sortDirection:排序方向，升序还是降序
 **/
  public abstract SortColumn(sortColumnKey: string, sortDirection: string) : void;
 /** 函数功能:从界面列表中根据某一个字段排序
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
 * @param objAnchorElement:带有排序字段的Anchors
 **/
public async SortBy(objAnchorElement:any) {
 //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
let strSortExpress = "";
//event = window.event || event;
if (typeof(objAnchorElement) != "function")
{
const thisEventObj: HTMLInputElement = objAnchorElement;
strSortExpress = thisEventObj.getAttribute("FldName") as string;
}
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortcc_CourseKnowledgesBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (clscc_CourseKnowledgesENEx.hasProperty(sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortcc_CourseKnowledgesBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
cc_CourseKnowledgesCRUD.sortFunStatic = sortFun;
await this.BindGv_cc_CourseKnowledges4Func(this.listPara.listDiv);
}

 /** 复制记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
 **/
public async CopyRecord(arrCourseKnowledgeId: Array<string>) {
const strThisFuncName = this.CopyRecord.name;
try
{
const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync(arrCourseKnowledgeId);
//console.log('responseText=');
//console.log(responseText);
let intCount = 0;
for (const objInFor of arrcc_CourseKnowledgesObjLst)
{
const strMaxStrId = await cc_CourseKnowledges_GetMaxStrIdAsync();
//console.log('strMaxStrId=' + strMaxStrId);
objInFor.courseKnowledgeId = strMaxStrId;
const returnBool = await cc_CourseKnowledges_AddNewRecordAsync(objInFor);
//console.log('returnBool=');
//console.log(returnBool);
if (returnBool == true)
{
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
intCount++;
}
else
{
const strInfo = Format("克隆记录不成功!");
//显示信息框
alert(strInfo);
}
}
const strInfo = Format("共克隆了{0}条记录!", intCount);
alert(strInfo);
//console.log('完成!');
}
catch (e)
{
const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}

 /** 设置字段值-InUse
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
 **/
public async SetInUse(arrCourseKnowledgeId: Array<string>, bolInUse: boolean)
{
const strThisFuncName = this.SetInUse.name;
if (arrCourseKnowledgeId.length == 0)
{
const strMsg = "没有选择记录,不能设置字段值!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
try
{
const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync(arrCourseKnowledgeId);
let intCount = 0;
for (const objInFor of arrcc_CourseKnowledgesObjLst)
{
const objcc_CourseKnowledgesEN = new clscc_CourseKnowledgesEN();
ObjectAssign(objcc_CourseKnowledgesEN, objInFor);
objcc_CourseKnowledgesEN.SetCourseKnowledgeId(objInFor.courseKnowledgeId);
objcc_CourseKnowledgesEN.SetInUse(bolInUse);
let returnBool = false;
try
{
    objcc_CourseKnowledgesEN.sfUpdFldSetStr = objcc_CourseKnowledgesEN.updFldString;//设置哪些字段被修改(脏字段)
returnBool = await cc_CourseKnowledges_UpdateRecordAsync(objcc_CourseKnowledgesEN);
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
throw (strMsg);
}
if (returnBool == true)
{
cc_CourseKnowledges_DeleteKeyIdCache(CourseId_Session.value, objInFor.courseKnowledgeId);
intCount++;
}
else
{
const strInfo = Format("设置记录不成功!");
//显示信息框
alert(strInfo);
}
}
const strInfo = Format("共设置了{0}条记录!", intCount);
alert(strInfo);
//console.log('完成!');
if (intCount > 0)
{
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
}
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}
 /** 设置字段值-KnowledgeModuleId
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
 **/
public async SetKnowledgeModuleId(arrCourseKnowledgeId: Array<string>, strKnowledgeModuleId: string)
{
const strThisFuncName = this.SetKnowledgeModuleId.name;
if (strKnowledgeModuleId == null || strKnowledgeModuleId == "" )
{
const strMsg = "请输入知识点模块Id(KnowledgeModuleId)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
if (arrCourseKnowledgeId.length == 0)
{
const strMsg = "没有选择记录,不能设置字段值!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
try
{
const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync(arrCourseKnowledgeId);
let intCount = 0;
for (const objInFor of arrcc_CourseKnowledgesObjLst)
{
const objcc_CourseKnowledgesEN = new clscc_CourseKnowledgesEN();
ObjectAssign(objcc_CourseKnowledgesEN, objInFor);
objcc_CourseKnowledgesEN.SetCourseKnowledgeId(objInFor.courseKnowledgeId);
objcc_CourseKnowledgesEN.SetKnowledgeModuleId(strKnowledgeModuleId);
let returnBool = false;
try
{
    objcc_CourseKnowledgesEN.sfUpdFldSetStr = objcc_CourseKnowledgesEN.updFldString;//设置哪些字段被修改(脏字段)
returnBool = await cc_CourseKnowledges_UpdateRecordAsync(objcc_CourseKnowledgesEN);
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
throw (strMsg);
}
if (returnBool == true)
{
cc_CourseKnowledges_DeleteKeyIdCache(CourseId_Session.value, objInFor.courseKnowledgeId);
intCount++;
}
else
{
const strInfo = Format("设置记录不成功!");
//显示信息框
alert(strInfo);
}
}
const strInfo = Format("共设置了{0}条记录!", intCount);
alert(strInfo);
//console.log('完成!');
if (intCount > 0)
{
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
}
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}
 /** 设置字段值-KpSourceId
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
 **/
public async SetKpSourceId(arrCourseKnowledgeId: Array<string>, strKpSourceId: string)
{
const strThisFuncName = this.SetKpSourceId.name;
if (strKpSourceId == null || strKpSourceId == "" )
{
const strMsg = "请输入知识点来源Id(KpSourceId)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
if (arrCourseKnowledgeId.length == 0)
{
const strMsg = "没有选择记录,不能设置字段值!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
try
{
const arrcc_CourseKnowledgesObjLst = await cc_CourseKnowledges_GetObjLstByCourseKnowledgeIdLstAsync(arrCourseKnowledgeId);
let intCount = 0;
for (const objInFor of arrcc_CourseKnowledgesObjLst)
{
const objcc_CourseKnowledgesEN = new clscc_CourseKnowledgesEN();
ObjectAssign(objcc_CourseKnowledgesEN, objInFor);
objcc_CourseKnowledgesEN.SetCourseKnowledgeId(objInFor.courseKnowledgeId);
objcc_CourseKnowledgesEN.SetKpSourceId(strKpSourceId);
let returnBool = false;
try
{
    objcc_CourseKnowledgesEN.sfUpdFldSetStr = objcc_CourseKnowledgesEN.updFldString;//设置哪些字段被修改(脏字段)
returnBool = await cc_CourseKnowledges_UpdateRecordAsync(objcc_CourseKnowledgesEN);
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
throw (strMsg);
}
if (returnBool == true)
{
cc_CourseKnowledges_DeleteKeyIdCache(CourseId_Session.value, objInFor.courseKnowledgeId);
intCount++;
}
else
{
const strInfo = Format("设置记录不成功!");
//显示信息框
alert(strInfo);
}
}
const strInfo = Format("共设置了{0}条记录!", intCount);
alert(strInfo);
//console.log('完成!');
if (intCount > 0)
{
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
}
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}

 /** 根据关键字列表删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
 **/
public async DelMultiRecord(arrCourseKnowledgeId: Array<string>) {
const strThisFuncName = this.DelMultiRecord.name;
try
{
const returnInt = await cc_CourseKnowledges_Delcc_CourseKnowledgessAsync(arrCourseKnowledgeId);
if (returnInt > 0)
{
cc_CourseKnowledges_ReFreshCache(CourseId_Session.value);
const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
//显示信息框
alert(strInfo);
}
else
{
const strInfo = `删除${this.thisTabName}记录不成功!`;
//显示信息框
alert(strInfo);
}
console.log("完成DelMultiRecord!");
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /** 显示{0}对象的所有属性值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
 * @param divContainer:显示容器
 * @param objcc_CourseKnowledges:需要显示的对象
 **/
public Showcc_CourseKnowledgesObj(divContainer: HTMLDivElement, objcc_CourseKnowledges: clscc_CourseKnowledgesEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objcc_CourseKnowledges);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objcc_CourseKnowledges.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjcc_CourseKnowledgesEN:表实体类对象
 * @returns 列表的第一个关键字值
 **/
public GetFirstKey(): string {
if (arrSelectedKeys.length == 1) {
return arrSelectedKeys[0];
}
else {
alert(`请选择一个关键字!目前选择了:${ arrSelectedKeys.length}个关键字。`);
return "";
}
}

 /** 函数功能:预留函数,在某一个层(div)里绑定数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
 **/
public async BindInDiv(divBind: HTMLDivElement) {
console.log(divBind);
}

 /** 函数功能:设置当前页序号
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
 * @param value:页序号
 * @param strDivName4Pager:当前分页所在的层(div)
 **/
public SetCurrPageIndex(value: number) {
       this.objPager.currPageIndex = value;
}

 /**
 * 设置界面标题-相当使用ViewState功能
 **/
public  set ViewTitle(value: string) {
 SetLabelHtmlByIdInDivObj(divVarSet.refDivLayout, "lblViewTitle", value);
}
 /**
 * 设置界面标题
 **/
public  get ViewTitle():string {
const strValue = GetLabelHtmlInDivObj(divVarSet.refDivLayout, "lblViewTitle");
return strValue;
}
}
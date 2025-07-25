
 /**
 * 类名:XzSchoolCRUD(界面:XzSchoolCRUD,01120260)
 * 表名:XzSchool(01120029)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:33:14
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from "@/ts/PubFun/ExportExcelData";
import { CombineXzSchoolConditionObj4ExportExcel,CombineXzSchoolConditionObj,XzSchool_DeleteKeyIdCache,divVarSet,viewVarSet,dataColumn,BindTabByList,refXzSchool_List } from "@/viewsShare/SystemSet/XzSchoolVueShare";
import { XzSchool_GetRecCountByCondCache,XzSchool_GetSubObjLstCache,XzSchool_DelRecordAsync,XzSchool_ReFreshCache,XzSchool_GetObjByIdSchoolAsync,XzSchool_FuncMapByFldName,XzSchool_GetObjExLstByPagerCache,XzSchool_GetObjLstByIdSchoolLstAsync,XzSchool_AddNewRecordAsync,XzSchool_UpdateRecordAsync,XzSchool_DelXzSchoolsAsync } from "@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi";
import { SchoolType_BindDdl_SchoolTypeIdInDivCache } from "@/ts/L3ForWApi/SysPara/clsSchoolTypeWApi";
import { GetCheckedKeyIdsInDivObj,GetSelectValueInDivObj,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsXzSchoolENEx } from "@/ts/L0Entity/SystemSet/clsXzSchoolENEx";
import { clsXzSchoolEN } from "@/ts/L0Entity/SystemSet/clsXzSchoolEN";
import { ObjectAssign,BindTab,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /** XzSchoolCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  XzSchoolCRUD implements clsOperateList
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
public static objPageCRUD: XzSchoolCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
XzSchoolCRUD.objPageCRUD = this;
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
return clsXzSchoolEN._CurrTabName;
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
if (viewVarSet.sortXzSchoolBy == '') viewVarSet.sortXzSchoolBy = `${ clsXzSchoolEN.con_IdSchool } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_XzSchool4Func(divVarSet.refDivList);
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
await this.BindGv_XzSchool4Func(divVarSet.refDivList);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
 **/
public CombineData(arrXzSchoolObjLst: Array<clsXzSchoolEN>, arrDataColumn: Array<clsDataColumn>): ExportExcelData 
{
const intRowNum = arrXzSchoolObjLst.length;
const intColNum = arrDataColumn.length;
const arrData: Array <Record<string, any>> = [];
for (let i = 0; i < intRowNum; i++)
{
const objEN: clsXzSchoolEN = arrXzSchoolObjLst[i];
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
const strFileName = Format("学校({0})导出.xlsx",
 clsXzSchoolEN._CurrTabName);
const strSheetName = "学校列表";
return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
 **/
public async ExportExcel_XzSchoolCache(): Promise<ExportExcelData> 
{
const strThisFuncName = this.ExportExcel_XzSchoolCache.name;
if (viewVarSet.sortXzSchoolBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortXzSchoolBy)为空,请检查!(In BindGv_XzSchoolCache)");
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}
const objXzSchoolCond = await CombineXzSchoolConditionObj4ExportExcel();
 let arrXzSchoolObjLst: Array <clsXzSchoolEN> = [];
try
{

this.recCount = await XzSchool_GetRecCountByCondCache(objXzSchoolCond );
if (this.recCount == 0)
{
const strMsg = Format("在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!", objXzSchoolCond.whereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}

arrXzSchoolObjLst = await XzSchool_GetSubObjLstCache(objXzSchoolCond );
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}
if (arrXzSchoolObjLst.length == 0)
{
const strKey = Format("{0}", clsXzSchoolEN._CurrTabName);
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
fldName: "idSchool",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "schoolId",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校编号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "schoolName",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "schoolENName",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "SchoolENName",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "schoolNameA",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校简称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isCurrentUse",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否当前使用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "updDate",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "memo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "备注",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
arrXzSchoolObjLst = arrXzSchoolObjLst.sort(this.SortFunExportExcel);
 return this.CombineData(arrXzSchoolObjLst, arrDataColumn); 
//console.log("完成BindGv_XzSchool!");
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
 * 设置绑定下拉框，针对字段:[SchoolTypeId]
 * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
 **/

public async SetDdl_SchoolTypeIdInDivInFeature()
{

await SchoolType_BindDdl_SchoolTypeIdInDivCache(divVarSet.refDivFunction, "ddlSchoolTypeId" );//
}


 /** 设置字段值-SchoolTypeId
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
 **/
public async btnSetSchoolTypeId_Click() {
const strThisFuncName = this.btnSetSchoolTypeId_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要设置学校类型Id的${this.thisTabName}记录!`);
return "";
}
const strSchoolTypeId = GetSelectValueInDivObj(divVarSet.refDivFunction, "ddlSchoolTypeId_SetFldValue");
if (strSchoolTypeId == "")
{
const strMsg = "请输入学校类型Id(SchoolTypeId)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
//console.log('strSchoolTypeId=' + strSchoolTypeId);
//console.log('arrKeyIds=');
//console.log(arrKeyIds);
await this.SetSchoolTypeId(arrKeyIds, strSchoolTypeId);
await this.BindGv_XzSchool4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
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
await this.BindGv_XzSchool4Func(divVarSet.refDivList);
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
 * "strIdSchool": 表关键字
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
 await this.BindGv_XzSchool4Func(divVarSet.refDivList);
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
public async btnSelectRecordInTab_Click(strIdSchool: string) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (IsNullOrEmpty(strIdSchool) == true)
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
this.SelectRecord(strIdSchool);
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
public async DelRecord(strIdSchool: string) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await XzSchool_DelRecordAsync(strIdSchool);
if (returnInt > 0)
{
XzSchool_ReFreshCache();
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
public async SelectRecord(strIdSchool: string) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objXzSchoolEN = await XzSchool_GetObjByIdSchoolAsync(strIdSchool);
console.log('完成SelectRecord!', objXzSchoolEN);
Redirect("/Index/Main_XzSchool");
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
await this.BindGv_XzSchool4Func(divVarSet.refDivList);
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
await this.ExportExcel_XzSchoolCache();
}

 /** 显示XzSchool对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrXzSchoolObjLst:需要绑定的对象列表
 **/
public async BindTab_XzSchool(divContainer: HTMLDivElement, arrXzSchoolExObjLst: Array<clsXzSchoolENEx>) 
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
fldName: clsXzSchoolEN.con_IdSchool,
sortBy: "idSchool",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_SchoolName,
sortBy: "schoolName",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_SchoolNameA,
sortBy: "schoolNameA",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校简称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_SchoolENName,
sortBy: "schoolENName",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校英文名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolENEx.con_SchoolTypeName,
sortBy: "schoolTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校类型名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_IsCurrentUse,
sortBy: "isCurrentUse",
sortFun: SortFun,
getDataSource: "",
colHeader: "当前使用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_UpdDate,
sortBy: "updDate",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refXzSchool_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrXzSchoolExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_XzSchool函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrXzSchoolExObjLst, arrDataColumn,  clsXzSchoolEN.con_IdSchool, this); 
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

 /** 显示XzSchool对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrXzSchoolExObjLst:需要绑定的对象列表
 **/
public async BindTab_XzSchool4Func(divContainer: HTMLDivElement, arrXzSchoolExObjLst: Array<clsXzSchoolENEx>) 
{
const strThisFuncName = this.BindTab_XzSchool4Func.name;
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
fldName: clsXzSchoolEN.con_IdSchool,
sortBy: "idSchool",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_SchoolName,
sortBy: "schoolName",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_SchoolNameA,
sortBy: "schoolNameA",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校简称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_SchoolENName,
sortBy: "schoolENName",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校英文名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolENEx.con_SchoolTypeName,
sortBy: "schoolTypeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校类型名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_IsCurrentUse,
sortBy: "isCurrentUse",
sortFun: SortFun,
getDataSource: "",
colHeader: "当前使用",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsXzSchoolEN.con_UpdDate,
sortBy: "updDate",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrXzSchoolExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refXzSchool_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrXzSchoolExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_XzSchool4Func函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrXzSchoolExObjLst, arrDataColumn,  clsXzSchoolEN.con_IdSchool, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrXzSchoolExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrXzSchoolExObjLst: Array<clsXzSchoolENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clsXzSchoolEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrXzSchoolExObjLst) {
await XzSchool_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
await this.BindGv_XzSchool4Func(this.listPara.listDiv);
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
public async BindGv_XzSchool4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_XzSchool4Func.name;
if (viewVarSet.sortXzSchoolBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortXzSchoolBy)为空,请检查!(In BindGv_XzSchoolCache)");
console.error(strMsg);
alert(strMsg);
return;
}
const objXzSchoolCond = await CombineXzSchoolConditionObj();
const strWhereCond = JSON.stringify(objXzSchoolCond);
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrXzSchoolExObjLst: Array <clsXzSchoolENEx> = [];
try
{

this.recCount = await XzSchool_GetRecCountByCondCache(objXzSchoolCond );
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", objXzSchoolCond.whereCond);
const strMsg = Format("在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!", objXzSchoolCond.whereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrXzSchoolExObjLst, true);
return;
}

let strSortFun = (x: any, y: any) => { console.log(x,y); return 0};
if (XzSchoolCRUD.sortFunStatic != undefined)
{
strSortFun = XzSchoolCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
}
const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
conditionCollection: objXzSchoolCond,
orderBy: viewVarSet.sortXzSchoolBy,
sortFun: strSortFun
}
arrXzSchoolExObjLst = await XzSchool_GetObjExLstByPagerCache(objPagerPara );
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrXzSchoolExObjLst.length == 0)
{
const strKey = Format("{0}", clsXzSchoolEN._CurrTabName);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_XzSchool4Func(divList, arrXzSchoolExObjLst);
//console.log("完成BindGv_XzSchool4Func!");
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
 * @param objXzSchoolENS:源对象
 * @returns 目标对象=>clsXzSchoolEN:objXzSchoolENT
 **/
 public CopyToEx(objXzSchoolENS:clsXzSchoolEN ): clsXzSchoolENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objXzSchoolENT = new clsXzSchoolENEx();
try
{
ObjectAssign(objXzSchoolENT, objXzSchoolENS);
 return objXzSchoolENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objXzSchoolENT;
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
public SortFunExportExcel(a:clsXzSchoolEN , b:clsXzSchoolEN): number 
{
if (a.memo == b.memo) {
if (a.memo == null) return -1;
if (b.memo == null) return 1;
return a.memo.localeCompare(b.memo) ;
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
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortXzSchoolBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (Object.prototype.hasOwnProperty.call(clsXzSchoolENEx, sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortXzSchoolBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
XzSchoolCRUD.sortFunStatic = sortFun;
await this.BindGv_XzSchool4Func(this.listPara.listDiv);
}

 /** 复制记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
 **/
public async CopyRecord(arrIdSchool: Array<string>) {
const strThisFuncName = this.CopyRecord.name;
try
{
const arrXzSchoolObjLst = await XzSchool_GetObjLstByIdSchoolLstAsync(arrIdSchool);
//console.log('responseText=');
//console.log(responseText);
let intCount = 0;
for (const objInFor of arrXzSchoolObjLst)
{
const returnBool = await XzSchool_AddNewRecordAsync(objInFor);
//console.log('returnBool=');
//console.log(returnBool);
if (returnBool == true)
{
XzSchool_ReFreshCache();
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

 /** 设置字段值-SchoolTypeId
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
 **/
public async SetSchoolTypeId(arrIdSchool: Array<string>, strSchoolTypeId: string)
{
const strThisFuncName = this.SetSchoolTypeId.name;
if (strSchoolTypeId == null || strSchoolTypeId == "" )
{
const strMsg = "请输入学校类型Id(SchoolTypeId)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
if (arrIdSchool.length == 0)
{
const strMsg = "没有选择记录,不能设置字段值!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
try
{
const arrXzSchoolObjLst = await XzSchool_GetObjLstByIdSchoolLstAsync(arrIdSchool);
let intCount = 0;
for (const objInFor of arrXzSchoolObjLst)
{
const objXzSchoolEN = new clsXzSchoolEN();
ObjectAssign(objXzSchoolEN, objInFor);
objXzSchoolEN.SetIdSchool(objInFor.idSchool);
objXzSchoolEN.SetSchoolTypeId(strSchoolTypeId);
let returnBool = false;
try
{
    objXzSchoolEN.sfUpdFldSetStr = objXzSchoolEN.updFldString;//设置哪些字段被修改(脏字段)
returnBool = await XzSchool_UpdateRecordAsync(objXzSchoolEN);
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
throw (strMsg);
}
if (returnBool == true)
{
XzSchool_DeleteKeyIdCache(objInFor.idSchool);
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
XzSchool_ReFreshCache();
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
public async DelMultiRecord(arrIdSchool: Array<string>) {
const strThisFuncName = this.DelMultiRecord.name;
try
{
const returnInt = await XzSchool_DelXzSchoolsAsync(arrIdSchool);
if (returnInt > 0)
{
XzSchool_ReFreshCache();
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
 * @param objXzSchool:需要显示的对象
 **/
public ShowXzSchoolObj(divContainer: HTMLDivElement, objXzSchool: clsXzSchoolEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objXzSchool);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objXzSchool.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjXzSchoolEN:表实体类对象
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
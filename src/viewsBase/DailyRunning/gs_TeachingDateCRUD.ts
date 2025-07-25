
 /**
 * 类名:gs_TeachingDateCRUD(界面:gs_TeachingDateCRUD,01120139)
 * 表名:gs_TeachingDate(01120684)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:25:00
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日常运行(DailyRunning)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { GetCheckedKeyIdsInDivObj,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { gs_TeachingDate_DelRecordAsync,gs_TeachingDate_ReFreshCache,gs_TeachingDate_GetObjBymIdAsync,gs_TeachingDate_FuncMapByFldName,gs_TeachingDate_GetRecCountByCondCache,gs_TeachingDate_GetObjExLstByPagerCache,gs_TeachingDate_GetObjLstBymIdLstAsync,gs_TeachingDate_AddNewRecordAsync,gs_TeachingDate_Delgs_TeachingDatesAsync } from "@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi";
import { IdCurrEduCls_Session,CourseId_Session,Combinegs_TeachingDateConditionObj,divVarSet,viewVarSet,dataColumn,BindTabByList,refgs_TeachingDate_List } from "@/viewsShare/DailyRunning/gs_TeachingDateVueShare";
import { clsgs_TeachingDateENEx } from "@/ts/L0Entity/DailyRunning/clsgs_TeachingDateENEx";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsgs_TeachingDateEN } from "@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN";
import { ObjectAssign,BindTab,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /** gs_TeachingDateCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  gs_TeachingDateCRUD implements clsOperateList
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
public static objPageCRUD: gs_TeachingDateCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
gs_TeachingDateCRUD.objPageCRUD = this;
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
return clsgs_TeachingDateEN._CurrTabName;
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
if (viewVarSet.sortgs_TeachingDateBy == '') viewVarSet.sortgs_TeachingDateBy = `${ clsgs_TeachingDateEN.con_StartDate } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_gs_TeachingDate4Func(divVarSet.refDivList);
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
await this.BindGv_gs_TeachingDate4Func(divVarSet.refDivList);
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
await this.BindGv_gs_TeachingDate4Func(divVarSet.refDivList);
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
 * "lngmId": 表关键字
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
const lngKeyId =  Number(strKeyId);
await this.DelRecord(lngKeyId);
 await this.BindGv_gs_TeachingDate4Func(divVarSet.refDivList);
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
public async btnSelectRecordInTab_Click(lngmId: number) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (lngmId == 0)
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
this.SelectRecord(lngmId);
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
public async DelRecord(lngmId: number) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await gs_TeachingDate_DelRecordAsync(lngmId);
if (returnInt > 0)
{
gs_TeachingDate_ReFreshCache(IdCurrEduCls_Session.value);
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
public async SelectRecord(lngmId: number) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objgs_TeachingDateEN = await gs_TeachingDate_GetObjBymIdAsync(lngmId);
console.log('完成SelectRecord!', objgs_TeachingDateEN);
Redirect("/Index/Main_gs_TeachingDate");
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
await this.BindGv_gs_TeachingDate4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}



 /** 显示gs_TeachingDate对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrgs_TeachingDateObjLst:需要绑定的对象列表
 **/
public async BindTab_gs_TeachingDate(divContainer: HTMLDivElement, arrgs_TeachingDateExObjLst: Array<clsgs_TeachingDateENEx>) 
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
fldName: clsgs_TeachingDateENEx.con_EduClsName,
sortBy: "eduClsName",
sortFun: SortFun,
getDataSource: "",
colHeader: "教学班名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsgs_TeachingDateEN.con_StartDate,
sortBy: clsgs_TeachingDateEN.con_StartDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "开始日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsgs_TeachingDateEN.con_EndDate,
sortBy: clsgs_TeachingDateEN.con_EndDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "截止日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsgs_TeachingDateEN.con_UpdDate,
sortBy: clsgs_TeachingDateEN.con_UpdDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsgs_TeachingDateEN.con_UpdUser,
sortBy: clsgs_TeachingDateEN.con_UpdUser,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refgs_TeachingDate_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrgs_TeachingDateExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_gs_TeachingDate函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrgs_TeachingDateExObjLst, arrDataColumn,  clsgs_TeachingDateEN.con_mId, this); 
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

 /** 显示gs_TeachingDate对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrgs_TeachingDateExObjLst:需要绑定的对象列表
 **/
public async BindTab_gs_TeachingDate4Func(divContainer: HTMLDivElement, arrgs_TeachingDateExObjLst: Array<clsgs_TeachingDateENEx>) 
{
const strThisFuncName = this.BindTab_gs_TeachingDate4Func.name;
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
fldName: clsgs_TeachingDateENEx.con_EduClsName,
sortBy: "eduClsName",
sortFun: SortFun,
getDataSource: "",
colHeader: "教学班名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsgs_TeachingDateEN.con_StartDate,
sortBy: clsgs_TeachingDateEN.con_StartDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "开始日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsgs_TeachingDateEN.con_EndDate,
sortBy: clsgs_TeachingDateEN.con_EndDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "截止日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsgs_TeachingDateEN.con_UpdDate,
sortBy: clsgs_TeachingDateEN.con_UpdDate,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsgs_TeachingDateEN.con_UpdUser,
sortBy: clsgs_TeachingDateEN.con_UpdUser,
sortFun: SortFun,
getDataSource: "",
colHeader: "修改人",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrgs_TeachingDateExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refgs_TeachingDate_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrgs_TeachingDateExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_gs_TeachingDate4Func函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrgs_TeachingDateExObjLst, arrDataColumn,  clsgs_TeachingDateEN.con_mId, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrgs_TeachingDateExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrgs_TeachingDateExObjLst: Array<clsgs_TeachingDateENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clsgs_TeachingDateEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrgs_TeachingDateExObjLst) {
objInFor.courseId = CourseId_Session.value;
await gs_TeachingDate_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
await this.BindGv_gs_TeachingDate4Func(this.listPara.listDiv);
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
public async BindGv_gs_TeachingDate4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_gs_TeachingDate4Func.name;
if (viewVarSet.sortgs_TeachingDateBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortgs_TeachingDateBy)为空,请检查!(In BindGv_gs_TeachingDateCache)");
console.error(strMsg);
alert(strMsg);
return;
}
const objgs_TeachingDateCond = await Combinegs_TeachingDateConditionObj();
objgs_TeachingDateCond.SetCondFldValue(clsgs_TeachingDateEN.con_IdCurrEduCls, IdCurrEduCls_Session.value, "=");
const strWhereCond = JSON.stringify(objgs_TeachingDateCond);
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrgs_TeachingDateExObjLst: Array <clsgs_TeachingDateENEx> = [];
try
{

this.recCount = await gs_TeachingDate_GetRecCountByCondCache(objgs_TeachingDateCond ,IdCurrEduCls_Session.value);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", objgs_TeachingDateCond.whereCond);
const strMsg = Format("在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!", objgs_TeachingDateCond.whereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrgs_TeachingDateExObjLst, true);
return;
}

let strSortFun = (x: any, y: any) => { console.log(x,y); return 0};
if (gs_TeachingDateCRUD.sortFunStatic != undefined)
{
strSortFun = gs_TeachingDateCRUD.sortFunStatic(viewVarSet.ascOrDesc4SortFun);
}
const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
conditionCollection: objgs_TeachingDateCond,
orderBy: viewVarSet.sortgs_TeachingDateBy,
sortFun: strSortFun
}
arrgs_TeachingDateExObjLst = await gs_TeachingDate_GetObjExLstByPagerCache(objPagerPara ,IdCurrEduCls_Session.value);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrgs_TeachingDateExObjLst.length == 0)
{
const strKey = Format("{0}_{1}", clsgs_TeachingDateEN._CurrTabName, IdCurrEduCls_Session.value);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_gs_TeachingDate4Func(divList, arrgs_TeachingDateExObjLst);
//console.log("完成BindGv_gs_TeachingDate4Func!");
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
 * @param objgs_TeachingDateENS:源对象
 * @returns 目标对象=>clsgs_TeachingDateEN:objgs_TeachingDateENT
 **/
 public CopyToEx(objgs_TeachingDateENS:clsgs_TeachingDateEN ): clsgs_TeachingDateENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objgs_TeachingDateENT = new clsgs_TeachingDateENEx();
try
{
ObjectAssign(objgs_TeachingDateENT, objgs_TeachingDateENS);
 return objgs_TeachingDateENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objgs_TeachingDateENT;
}
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
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortgs_TeachingDateBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (Object.prototype.hasOwnProperty.call(clsgs_TeachingDateENEx, sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortgs_TeachingDateBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
gs_TeachingDateCRUD.sortFunStatic = sortFun;
await this.BindGv_gs_TeachingDate4Func(this.listPara.listDiv);
}

 /** 复制记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
 **/
public async CopyRecord(arrmId: Array<string>) {
const strThisFuncName = this.CopyRecord.name;
try
{
const arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstBymIdLstAsync(arrmId);
//console.log('responseText=');
//console.log(responseText);
let intCount = 0;
for (const objInFor of arrgs_TeachingDateObjLst)
{
const returnBool = await gs_TeachingDate_AddNewRecordAsync(objInFor);
//console.log('returnBool=');
//console.log(returnBool);
if (returnBool == true)
{
gs_TeachingDate_ReFreshCache(IdCurrEduCls_Session.value);
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

 /** 根据关键字列表删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
 **/
public async DelMultiRecord(arrmId: Array<string>) {
const strThisFuncName = this.DelMultiRecord.name;
try
{
const returnInt = await gs_TeachingDate_Delgs_TeachingDatesAsync(arrmId);
if (returnInt > 0)
{
gs_TeachingDate_ReFreshCache(IdCurrEduCls_Session.value);
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
 * @param objgs_TeachingDate:需要显示的对象
 **/
public Showgs_TeachingDateObj(divContainer: HTMLDivElement, objgs_TeachingDate: clsgs_TeachingDateEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objgs_TeachingDate);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objgs_TeachingDate.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjgs_TeachingDateEN:表实体类对象
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
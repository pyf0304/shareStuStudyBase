﻿
 /**
 * 类名:ge_UserScoreCurrWeekCRUD(界面:ge_UserScoreCurrWeekCRUD,01120262)
 * 表名:ge_UserScoreCurrWeek(01120989)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:33:34
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { ge_UserScoreCurrWeek_DelRecKeyLstAsync,ge_UserScoreCurrWeek_GetObjByKeyLstAsync,ge_UserScoreCurrWeek_FuncMapByFldName,ge_UserScoreCurrWeek_GetRecCountByCondAsync,ge_UserScoreCurrWeek_DelRecKeyLstsAsync } from "@/ts/L3ForWApi/GameLearn/clsge_UserScoreCurrWeekWApi";
import { GetCheckedKeyLstsInDivObj,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { clsge_UserScoreCurrWeekENEx } from "@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekENEx";
import { CourseId_Session,IdCurrEduCls_Session,Combinege_UserScoreCurrWeekCondition,divVarSet,viewVarSet,dataColumn,BindTabByList,refge_UserScoreCurrWeek_List } from "@/viewsShare/GameLearn/ge_UserScoreCurrWeekVueShare";
import { ge_UserScoreCurrWeekEx_GetObjExLstByPagerAsync } from "@/ts/L3ForWApiExShare/GameLearn/clsge_UserScoreCurrWeekExWApi";
import { clsge_UserScoreCurrWeekEN } from "@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekEN";
import { ObjectAssign,BindTab_KeyLst,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /** ge_UserScoreCurrWeekCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  ge_UserScoreCurrWeekCRUD implements clsOperateList
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
public static objPageCRUD: ge_UserScoreCurrWeekCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
ge_UserScoreCurrWeekCRUD.objPageCRUD = this;
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
return clsge_UserScoreCurrWeekEN._CurrTabName;
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
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
 **/
public async PageLoad()
{
const strThisFuncName = this.PageLoad.name;
// 在此处放置用户代码以初始化页面
try
{
//初始设置，用来初始化一些变量值
await this.InitVarSet();
//初始化界面控件值，放在绑定下拉框之后
await this.InitCtlVar();
if (viewVarSet.sortge_UserScoreCurrWeekBy == '') viewVarSet.sortge_UserScoreCurrWeekBy = `${ clsge_UserScoreCurrWeekEN.con_UserId } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_ge_UserScoreCurrWeek4Func(divVarSet.refDivList);
}
catch (e)
{
const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
}
}


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
if (viewVarSet.sortge_UserScoreCurrWeekBy == '') viewVarSet.sortge_UserScoreCurrWeekBy = `${ clsge_UserScoreCurrWeekEN.con_UserId } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_ge_UserScoreCurrWeek4Func(divVarSet.refDivList);
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
await this.BindGv_ge_UserScoreCurrWeek4Func(divVarSet.refDivList);
}
//多关键字,不支持复制功能!

 /** 
 * 在数据表里删除记录
 * "strIdCurrEduCls": 表关键字
 * "strUserId": 表关键字
 * "lngIdEduClsCalendar": 表关键字
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
 **/
public async btnDelRecordInTab_Click(strIdCurrEduCls: string,strUserId: string,lngIdEduClsCalendar: number) {
const strThisFuncName = this.btnDelRecordInTab_Click.name;
try
{
 if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
 if (IsNullOrEmpty(strUserId) == true)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
 if (lngIdEduClsCalendar == 0)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
if (confirmDel(0) == false)
{
return;
}
await this.DelRecord(strIdCurrEduCls,strUserId,lngIdEduClsCalendar);
 await this.BindGv_ge_UserScoreCurrWeek4Func(divVarSet.refDivList);
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
public async btnSelectRecordInTab_Click(strIdCurrEduCls: string,strUserId: string,lngIdEduClsCalendar: number) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
const strMsg = "请选择相关记录,请检查!";
console.error(strMsg);
alert(strMsg);
return;
}
if (IsNullOrEmpty(strUserId) == true)
{
const strMsg = "请选择相关记录,请检查!";
console.error(strMsg);
alert(strMsg);
return;
}
if (lngIdEduClsCalendar == 0)
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
this.SelectRecord(strIdCurrEduCls,strUserId,lngIdEduClsCalendar);
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
public async DelRecord(strIdCurrEduCls: string,strUserId: string,lngIdEduClsCalendar: number) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await ge_UserScoreCurrWeek_DelRecKeyLstAsync(strIdCurrEduCls,strUserId,lngIdEduClsCalendar);
if (returnInt > 0)
{
//_ReFreshCache();
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
public async SelectRecord(strIdCurrEduCls: string,strUserId: string,lngIdEduClsCalendar: number) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objge_UserScoreCurrWeekEN = await ge_UserScoreCurrWeek_GetObjByKeyLstAsync(strIdCurrEduCls,strUserId,lngIdEduClsCalendar);
console.log('完成SelectRecord!', objge_UserScoreCurrWeekEN);
Redirect("/Index/Main_ge_UserScoreCurrWeek");
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
const arrKeyLsts = GetCheckedKeyLstsInDivObj(divVarSet.refDivList);
if (arrKeyLsts.length == 0)
{
alert(`请选择需要删除的${this.thisTabName}记录!`);
return "";
}
if (confirmDel(arrKeyLsts.length) == false)
{
return;
}
await this.DelMultiRecord_KeyLst(arrKeyLsts);
await this.BindGv_ge_UserScoreCurrWeek4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}



 /** 显示ge_UserScoreCurrWeek对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrge_UserScoreCurrWeekObjLst:需要绑定的对象列表
 **/
public async BindTab_ge_UserScoreCurrWeek(divContainer: HTMLDivElement, arrge_UserScoreCurrWeekExObjLst: Array<clsge_UserScoreCurrWeekENEx>) 
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
fldName: clsge_UserScoreCurrWeekENEx.con_WeekIndex,
sortBy: "weekIndex",
sortFun: SortFun,
getDataSource: "",
colHeader: "周序号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekENEx.con_EduClsName,
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
fldName: clsge_UserScoreCurrWeekEN.con_UserId,
sortBy: "userId",
sortFun: SortFun,
getDataSource: "",
colHeader: "用户ID",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekENEx.con_UserName,
sortBy: "userName",
sortFun: SortFun,
getDataSource: "",
colHeader: "用户名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekEN.con_Credits,
sortBy: "credits",
sortFun: SortFun,
getDataSource: "",
colHeader: "积分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekEN.con_Passed,
sortBy: "passed",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否合格",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekEN.con_UpdDate,
sortBy: "updDate",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refge_UserScoreCurrWeek_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrge_UserScoreCurrWeekExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_ge_UserScoreCurrWeek函数中，divDataLst不存在!");
return;
}
 const arrKeyLst = [clsge_UserScoreCurrWeekEN.con_IdCurrEduCls , clsge_UserScoreCurrWeekEN.con_UserId, clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar];
await BindTab_KeyLst(divDataLst, arrge_UserScoreCurrWeekExObjLst, arrDataColumn, arrKeyLst, this); 
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

 /** 显示ge_UserScoreCurrWeek对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrge_UserScoreCurrWeekExObjLst:需要绑定的对象列表
 **/
public async BindTab_ge_UserScoreCurrWeek4Func(divContainer: HTMLDivElement, arrge_UserScoreCurrWeekExObjLst: Array<clsge_UserScoreCurrWeekENEx>) 
{
const strThisFuncName = this.BindTab_ge_UserScoreCurrWeek4Func.name;
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
fldName: clsge_UserScoreCurrWeekENEx.con_WeekIndex,
sortBy: "weekIndex",
sortFun: SortFun,
getDataSource: "",
colHeader: "周序号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekENEx.con_EduClsName,
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
fldName: clsge_UserScoreCurrWeekEN.con_UserId,
sortBy: "userId",
sortFun: SortFun,
getDataSource: "",
colHeader: "用户ID",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekENEx.con_UserName,
sortBy: "userName",
sortFun: SortFun,
getDataSource: "",
colHeader: "用户名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekEN.con_Credits,
sortBy: "credits",
sortFun: SortFun,
getDataSource: "",
colHeader: "积分",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekEN.con_Passed,
sortBy: "passed",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否合格",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsge_UserScoreCurrWeekEN.con_UpdDate,
sortBy: "updDate",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrge_UserScoreCurrWeekExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refge_UserScoreCurrWeek_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrge_UserScoreCurrWeekExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_ge_UserScoreCurrWeek4Func函数中，divDataLst不存在!");
return;
}
 const arrKeyLst = [clsge_UserScoreCurrWeekEN.con_IdCurrEduCls , clsge_UserScoreCurrWeekEN.con_UserId, clsge_UserScoreCurrWeekEN.con_IdEduClsCalendar];
await BindTab_KeyLst(divDataLst, arrge_UserScoreCurrWeekExObjLst, arrDataColumn, arrKeyLst, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrge_UserScoreCurrWeekExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrge_UserScoreCurrWeekExObjLst: Array<clsge_UserScoreCurrWeekENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clsge_UserScoreCurrWeekEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrge_UserScoreCurrWeekExObjLst) {
objInFor.courseId = CourseId_Session.value;
objInFor.idCurrEduCls = IdCurrEduCls_Session.value;
await ge_UserScoreCurrWeek_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
await this.BindGv_ge_UserScoreCurrWeek4Func(this.listPara.listDiv);
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
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindGv4Func_NoCache)
 **/
public async BindGv_ge_UserScoreCurrWeek4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_ge_UserScoreCurrWeek4Func.name;
if (divList == null)
{
const strMsg = Format(
'用于显示列表的div为空,请检查!(in {0}.{1})',
this.constructor.name,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return;
}
this.listPara.listDiv = divList;
if (viewVarSet.sortge_UserScoreCurrWeekBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortge_UserScoreCurrWeekBy)为空,请检查!(In BindGv_ge_UserScoreCurrWeekCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await Combinege_UserScoreCurrWeekCondition();
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrge_UserScoreCurrWeekExObjLst: Array <clsge_UserScoreCurrWeekENEx> = [];
try
{

this.recCount = await ge_UserScoreCurrWeek_GetRecCountByCondAsync(strWhereCond);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
const strMsg = Format("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrge_UserScoreCurrWeekExObjLst, true);
return;
}

const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
orderBy: viewVarSet.sortge_UserScoreCurrWeekBy,//如果该字段为空,就使用下面的排序函数
sortFun: (x, y) => { console.log(x,y);return 0;}
}
arrge_UserScoreCurrWeekExObjLst = await ge_UserScoreCurrWeekEx_GetObjExLstByPagerAsync(objPagerPara);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrge_UserScoreCurrWeekExObjLst.length == 0)
{
const strKey = Format("{0}", clsge_UserScoreCurrWeekEN._CurrTabName);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_ge_UserScoreCurrWeek4Func(divList, arrge_UserScoreCurrWeekExObjLst);
}
catch(e)
{
const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}

 /**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
 * @param objge_UserScoreCurrWeekENS:源对象
 * @returns 目标对象=>clsge_UserScoreCurrWeekEN:objge_UserScoreCurrWeekENT
 **/
 public CopyToEx(objge_UserScoreCurrWeekENS:clsge_UserScoreCurrWeekEN ): clsge_UserScoreCurrWeekENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objge_UserScoreCurrWeekENT = new clsge_UserScoreCurrWeekENEx();
try
{
ObjectAssign(objge_UserScoreCurrWeekENT, objge_UserScoreCurrWeekENS);
 return objge_UserScoreCurrWeekENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objge_UserScoreCurrWeekENT;
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
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortge_UserScoreCurrWeekBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (Object.prototype.hasOwnProperty.call(clsge_UserScoreCurrWeekENEx, sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortge_UserScoreCurrWeekBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
ge_UserScoreCurrWeekCRUD.sortFunStatic = sortFun;
await this.BindGv_ge_UserScoreCurrWeek4Func(this.listPara.listDiv);
}
//多关键字,不支持复制功能!

 /** 根据关键字列表删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
 **/
public async DelMultiRecord_KeyLst(arrKeyLsts: Array<string>) {
const strThisFuncName = this.DelMultiRecord_KeyLst.name;
try
{
const returnInt = await ge_UserScoreCurrWeek_DelRecKeyLstsAsync(arrKeyLsts);
if (returnInt > 0)
{
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
 * @param objge_UserScoreCurrWeek:需要显示的对象
 **/
public Showge_UserScoreCurrWeekObj(divContainer: HTMLDivElement, objge_UserScoreCurrWeek: clsge_UserScoreCurrWeekEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objge_UserScoreCurrWeek);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objge_UserScoreCurrWeek.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjge_UserScoreCurrWeekEN:表实体类对象
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
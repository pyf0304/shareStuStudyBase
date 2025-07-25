
 /**
 * 类名:StudentInfoZxCRUD(界面:StudentInfoZxCRUD,01120257)
 * 表名:StudentInfo(01120131)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:32:59
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS,0254)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { ExportExcelData } from "@/ts/PubFun/ExportExcelData";
import { clsStudentInfoENEx } from "@/ts/L0Entity/UserManage/clsStudentInfoENEx";
import { CombineStudentInfoCondition,StudentInfo_DeleteKeyIdCache,divVarSet,viewVarSet,dataColumn,BindTabByList,refStudentInfoZx_List } from "@/viewsShare/UserManage/StudentInfoZxCRUDVueShare";
import { StudentInfo_GetRecCountByCondAsync,StudentInfo_GetObjLstAsync,StudentInfo_DelRecordAsync,StudentInfo_GetObjByIdStudentInfoAsync,StudentInfo_FuncMapByFldName,StudentInfo_GetObjLstByIdStudentInfoLstAsync,StudentInfo_GetMaxStrIdAsync,StudentInfo_AddNewRecordAsync,StudentInfo_UpdateRecordAsync,StudentInfo_DelStudentInfosAsync } from "@/ts/L3ForWApi/UserManage/clsStudentInfoWApi";
import { StudentInfoEx_CopyToEx,StudentInfoEx_GetObjExLstByPagerAsync } from "@/ts/L3ForWApiExShare/UserManage/clsStudentInfoExWApi";
import { XzGrade_BindDdl_IdGradeInDivCache } from "@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { XzAdminCls_BindDdl_IdAdminClsByIdGradeCache } from "@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi";
import { XzSchool_BindDdl_IdSchoolInDivCache } from "@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi";
import { GetCheckedKeyIdsInDivObj,GetSelectValueInDivObj,GetDivObjInDivObj,SetLabelHtmlByIdInDivObj,GetLabelHtmlInDivObj } from "@/ts/PubFun/clsCommFunc4Ctrl";
import { clsStudentInfoEN } from "@/ts/L0Entity/UserManage/clsStudentInfoEN";
import { ObjectAssign,BindTab,arrSelectedKeys,confirmDel,GetObjKeys,Redirect,SortFun } from "@/ts/PubFun/clsCommFunc4Web";
import { clsPager } from "@/ts/PubFun/clsPager";
import { stuPagerPara } from "@/ts/PubFun/stuPagerPara";
import { clsDataColumn } from "@/ts/PubFun/clsDataColumn";
import { ListPara,clsOperateList,GetCurrPageIndex,GetSortBy } from "@/ts/PubFun/clsOperateList";
 /** StudentInfoZxCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class  StudentInfoZxCRUD implements clsOperateList
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
public static objPageCRUD: StudentInfoZxCRUD;
public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
constructor() {
this.listPara = new ListPara(divVarSet.refDivLayout, divVarSet.refDivList);
StudentInfoZxCRUD.objPageCRUD = this;
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
return clsStudentInfoEN._CurrTabName;
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
if (viewVarSet.sortStudentInfoBy == '') viewVarSet.sortStudentInfoBy = `${ clsStudentInfoEN.con_StuId } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
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
if (viewVarSet.sortStudentInfoBy == '') viewVarSet.sortStudentInfoBy = `${ clsStudentInfoEN.con_StuId } Asc`;
//2、显示无条件的表内容在GridView中
await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
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
await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
 **/
public CombineData(arrStudentInfoObjLst: Array<clsStudentInfoEN>, arrDataColumn: Array<clsDataColumn>): ExportExcelData 
{
const intRowNum = arrStudentInfoObjLst.length;
const intColNum = arrDataColumn.length;
const arrData: Array <Record<string, any>> = [];
for (let i = 0; i < intRowNum; i++)
{
const objEN: clsStudentInfoEN = arrStudentInfoObjLst[i];
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
const strFileName = Format("学生({0})导出.xlsx",
 clsStudentInfoEN._CurrTabName);
const strSheetName = "学生列表";
return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
}

 /** 合并数据
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
 **/
public CombineData4Func(arrStudentInfoExObjLst: Array<clsStudentInfoENEx>, arrDataColumn: Array<clsDataColumn>): ExportExcelData 
{
const intRowNum = arrStudentInfoExObjLst.length;
const intColNum = arrDataColumn.length;
const arrData: Array <Record<string, any>> = [];
for (let i = 0; i < intRowNum; i++)
{
const objEN: clsStudentInfoENEx = arrStudentInfoExObjLst[i];
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
const strFileName = Format("学生({0})导出.xlsx",
 clsStudentInfoEN._CurrTabName);
const strSheetName = "学生列表"; 
return { arrObjLst: arrData, sheetName: strSheetName, fileName: strFileName };
}

 /** 根据条件获取相应的对象列表
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_ExportExcel4Func_NoCache)
 **/
public async ExportExcel_StudentInfo4Func(): Promise<ExportExcelData> 
{
const strThisFuncName = this.ExportExcel_StudentInfo4Func.name;
if (viewVarSet.sortStudentInfoBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortStudentInfoBy)为空,请检查!(In BindGv_StudentInfoCache)");
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}

const strWhereCond = await CombineStudentInfoCondition();
 let arrStudentInfoExObjLst: Array <clsStudentInfoENEx> = [];
try
{

this.recCount = await StudentInfo_GetRecCountByCondAsync(strWhereCond);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
const strMsg = Format("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}

const arrStudentInfoObjLst = await StudentInfo_GetObjLstAsync(strWhereCond);
arrStudentInfoExObjLst = arrStudentInfoObjLst.map(StudentInfoEx_CopyToEx);
}
catch(e)
{
const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}
if (arrStudentInfoExObjLst.length == 0)
{
const strKey = Format("{0}", clsStudentInfoEN._CurrTabName);
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
fldName: "idStudentInfo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学生流水号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "stuName",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "姓名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "birthday",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "出生日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "stuCardNo",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学生证号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "liveAddress",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "居住地址",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 6,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isGpUser",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否Gp用户",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "isLeaved",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "是否离开",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "userType",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "用户类型",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "enrollmentDate",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "入校日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "postCode",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "邮编",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "email",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "电子邮箱",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 12,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "phoneNumber",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "电话",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 13,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idUniZone",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "校区名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 17,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idXzCollege",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "学院名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 18,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idXzMajor",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "专业名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 19,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "updDate",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "简化日期时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 20,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: "idSex",
sortBy: "",
sortFun: SortFun,
getDataSource: "",
colHeader: "性别名称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 21,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrStudentInfoExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return { arrObjLst: [], sheetName: '', fileName: '' };
}
arrStudentInfoExObjLst = arrStudentInfoExObjLst.sort(this.SortFunExportExcel);
 return this.CombineData(arrStudentInfoExObjLst, arrDataColumn); 
//console.log("完成BindGv_StudentInfo!");
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
 * 设置绑定下拉框，针对字段:[IdGrade]
 * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
 **/

public async SetDdl_IdGradeInDivInFeature()
{

await XzGrade_BindDdl_IdGradeInDivCache(divVarSet.refDivFunction, "ddlIdGrade" );//
}

 /**
 * 设置绑定下拉框，针对字段:[IdAdminCls]
 * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
 **/

public async SetDdl_IdAdminClsInDivInFeature(strIdGrade: string)
{

if (IsNullOrEmpty(strIdGrade) == true)
{
  const strMsg = Format("参数:[strIdGrade]不能为空!(In .SetDdl_IdAdminClsInDivInFeature)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdGrade.length != 2)
{
const strMsg = Format("缓存分类变量:[strIdGrade]的长度:[{0}]不正确!(.SetDdl_IdAdminClsInDivInFeature)", strIdGrade.length);
console.error(strMsg);
throw (strMsg);
}

await XzAdminCls_BindDdl_IdAdminClsByIdGradeCache(divVarSet.refDivFunction, "ddlIdAdminCls" , strIdGrade);//
}

 /**
 * 设置绑定下拉框，针对字段:[IdSchool]
 * (AGC.BusinessLogicEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
 **/

public async SetDdl_IdSchoolInDivInFeature()
{

await XzSchool_BindDdl_IdSchoolInDivCache(divVarSet.refDivFunction, "ddlIdSchool" );//
}


 /** 设置字段值-IdGrade
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
 **/
public async btnSetIdGrade_Click() {
const strThisFuncName = this.btnSetIdGrade_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要设置年级流水号的${this.thisTabName}记录!`);
return "";
}
const strIdGrade = GetSelectValueInDivObj(divVarSet.refDivFunction, "ddlIdGrade_SetFldValue");
if (strIdGrade == "")
{
const strMsg = "请输入年级流水号(IdGrade)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
//console.log('strIdGrade=' + strIdGrade);
//console.log('arrKeyIds=');
//console.log(arrKeyIds);
await this.SetIdGrade(arrKeyIds, strIdGrade);
await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}
 /** 设置字段值-IdAdminCls
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
 **/
public async btnSetIdAdminCls_Click() {
const strThisFuncName = this.btnSetIdAdminCls_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要设置行政班流水号的${this.thisTabName}记录!`);
return "";
}
const strIdAdminCls = GetSelectValueInDivObj(divVarSet.refDivFunction, "ddlIdAdminCls_SetFldValue");
if (strIdAdminCls == "")
{
const strMsg = "请输入行政班流水号(IdAdminCls)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
//console.log('strIdAdminCls=' + strIdAdminCls);
//console.log('arrKeyIds=');
//console.log(arrKeyIds);
await this.SetIdAdminCls(arrKeyIds, strIdAdminCls);
await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
}
catch(e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
}
}
 /** 设置字段值-IdSchool
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_btnSetFldValue_Click)
 **/
public async btnSetIdSchool_Click() {
const strThisFuncName = this.btnSetIdSchool_Click.name;
try
{
const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
if (arrKeyIds.length == 0)
{
alert(`请选择需要设置学校流水号的${this.thisTabName}记录!`);
return "";
}
const strIdSchool = GetSelectValueInDivObj(divVarSet.refDivFunction, "ddlIdSchool_SetFldValue");
if (strIdSchool == "")
{
const strMsg = "请输入学校流水号(IdSchool)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return;
}
//console.log('strIdSchool=' + strIdSchool);
//console.log('arrKeyIds=');
//console.log(arrKeyIds);
await this.SetIdSchool(arrKeyIds, strIdSchool);
await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
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
await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
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
 * "strIdStudentInfo": 表关键字
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
 await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
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
public async btnSelectRecordInTab_Click(strIdStudentInfo: string) {
const strThisFuncName = this.btnSelectRecordInTab_Click.name;
try
{
if (IsNullOrEmpty(strIdStudentInfo) == true)
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
this.SelectRecord(strIdStudentInfo);
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
public async DelRecord(strIdStudentInfo: string) {
const strThisFuncName = this.DelRecord.name;
try
{
const returnInt = await StudentInfo_DelRecordAsync(strIdStudentInfo);
if (returnInt > 0)
{
//StudentInfo_ReFreshCache();
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
public async SelectRecord(strIdStudentInfo: string) 
{
const strThisFuncName = this.SelectRecord.name;
try
{
const objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
console.log('完成SelectRecord!', objStudentInfoEN);
Redirect("/Index/Main_StudentInfo");
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
await this.BindGv_StudentInfo4Func(divVarSet.refDivList);
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
await this.ExportExcel_StudentInfo4Func();
}

 /** 显示StudentInfo对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab)
 * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
 * @param arrStudentInfoObjLst:需要绑定的对象列表
 **/
public async BindTab_StudentInfo(divContainer: HTMLDivElement, arrStudentInfoExObjLst: Array<clsStudentInfoENEx>) 
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
fldName: clsStudentInfoEN.con_StuId,
sortBy: "stuId",
sortFun: SortFun,
getDataSource: "",
colHeader: "学号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoEN.con_StuName,
sortBy: "stuName",
sortFun: SortFun,
getDataSource: "",
colHeader: "姓名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_SexDesc,
sortBy: "sexDesc",
sortFun: SortFun,
getDataSource: "",
colHeader: "性别",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_GradeBaseName,
sortBy: "gradeBaseName",
sortFun: SortFun,
getDataSource: "",
colHeader: "入学年级",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_GradeName,
sortBy: "gradeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "年级",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_AdminClsName,
sortBy: "adminClsName",
sortFun: SortFun,
getDataSource: "",
colHeader: "行政班",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_SchoolNameA,
sortBy: "schoolNameA",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校简称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_DateTimeSim,
sortBy: "dateTimeSim",
sortFun: SortFun,
getDataSource: "",
colHeader: "简化日期时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoEN.con_UpdDate,
sortBy: "updDate",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoEN.con_IsGpUser,
sortBy: clsStudentInfoEN.con_IsGpUser,
sortFun: SortFun,
getDataSource: "",
colHeader: "平台用户",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
if (refStudentInfoZx_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrStudentInfoExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_StudentInfo函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrStudentInfoExObjLst, arrDataColumn,  clsStudentInfoEN.con_IdStudentInfo, this); 
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

 /** 显示StudentInfo对象的所有属性值
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_BindTab4Func)
 * @param divContainer:显示容器
 * @param arrStudentInfoExObjLst:需要绑定的对象列表
 **/
public async BindTab_StudentInfo4Func(divContainer: HTMLDivElement, arrStudentInfoExObjLst: Array<clsStudentInfoENEx>) 
{
const strThisFuncName = this.BindTab_StudentInfo4Func.name;
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
fldName: clsStudentInfoEN.con_StuId,
sortBy: "stuId",
sortFun: SortFun,
getDataSource: "",
colHeader: "学号",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 2,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoEN.con_StuName,
sortBy: "stuName",
sortFun: SortFun,
getDataSource: "",
colHeader: "姓名",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 3,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_SexDesc,
sortBy: "sexDesc",
sortFun: SortFun,
getDataSource: "",
colHeader: "性别",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 4,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_GradeBaseName,
sortBy: "gradeBaseName",
sortFun: SortFun,
getDataSource: "",
colHeader: "入学年级",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 5,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_GradeName,
sortBy: "gradeName",
sortFun: SortFun,
getDataSource: "",
colHeader: "年级",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 7,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_AdminClsName,
sortBy: "adminClsName",
sortFun: SortFun,
getDataSource: "",
colHeader: "行政班",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 8,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_SchoolNameA,
sortBy: "schoolNameA",
sortFun: SortFun,
getDataSource: "",
colHeader: "学校简称",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 9,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoENEx.con_DateTimeSim,
sortBy: "dateTimeSim",
sortFun: SortFun,
getDataSource: "",
colHeader: "简化日期时间",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 10,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoEN.con_UpdDate,
sortBy: "updDate",
sortFun: SortFun,
getDataSource: "",
colHeader: "修改日期",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
{
fldName: clsStudentInfoEN.con_IsGpUser,
sortBy: clsStudentInfoEN.con_IsGpUser,
sortFun: SortFun,
getDataSource: "",
colHeader: "平台用户",
text: "",
tdClass: "text-left",
columnType: "Label",
orderNum: 11,
funcName: (strKey:string, strText:string) => { console.log(strKey, strText);return new HTMLElement();}
},
];
try
{
await this.ExtendFldFuncMap(arrStudentInfoExObjLst, arrDataColumn);
}
catch (e)
{
const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (refStudentInfoZx_List.value != null){
dataColumn.value = arrDataColumn;
await BindTabByList(arrStudentInfoExObjLst, this.dispAllErrMsg_q); 
}
else {
const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
if (divDataLst == null)
{
alert("在BindTab_StudentInfo4Func函数中，divDataLst不存在!");
return;
}
await BindTab(divDataLst, arrStudentInfoExObjLst, arrDataColumn,  clsStudentInfoEN.con_IdStudentInfo, this); 
}
if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
this.objPager.InitShow(divContainer, this.divName4Pager);
this.objPager.recCount = this.recCount;
this.objPager.pageSize = this.pageSize;
this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
}

 /** 扩展字段值的函数映射
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
 * @param arrStudentInfoExObjLst:需要映射的对象列表
 * @param arrDataColumn:用于绑定表的数据列信息
 **/
public async ExtendFldFuncMap(arrStudentInfoExObjLst: Array<clsStudentInfoENEx>, arrDataColumn: Array<clsDataColumn>) {
const arrFldName = clsStudentInfoEN.AttributeName;
for (const objDataColumn of arrDataColumn) {
if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
for (const objInFor of arrStudentInfoExObjLst) {
await StudentInfo_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
await this.BindGv_StudentInfo4Func(this.listPara.listDiv);
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
public async BindGv_StudentInfo4Func(divList: HTMLDivElement) 
{
const strThisFuncName = this.BindGv_StudentInfo4Func.name;
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
if (viewVarSet.sortStudentInfoBy == null)
{
const strMsg = Format("在显示列表时,排序字段(sortStudentInfoBy)为空,请检查!(In BindGv_StudentInfoCache)");
console.error(strMsg);
alert(strMsg);
return;
}

const strWhereCond = await CombineStudentInfoCondition();
const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
 let arrStudentInfoExObjLst: Array <clsStudentInfoENEx> = [];
try
{

this.recCount = await StudentInfo_GetRecCountByCondAsync(strWhereCond);
if (this.recCount == 0)
{
const lblMsg: HTMLSpanElement = < HTMLSpanElement > document.createElement("span");
lblMsg.innerHTML = Format("根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
const strMsg = Format("在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!", strWhereCond);
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
BindTabByList(arrStudentInfoExObjLst, true);
return;
}

const objPagerPara: stuPagerPara = {
pageIndex: intCurrPageIndex,
pageSize: this.pageSize,
whereCond: strWhereCond,
orderBy: viewVarSet.sortStudentInfoBy,//如果该字段为空,就使用下面的排序函数
sortFun: (x, y) => { console.log(x,y);return 0;}
}
arrStudentInfoExObjLst = await StudentInfoEx_GetObjExLstByPagerAsync(objPagerPara);
}
catch(e)
{
const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
alert(strMsg);
return;
}
if (arrStudentInfoExObjLst.length == 0)
{
const strKey = Format("{0}", clsStudentInfoEN._CurrTabName);
const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
console.error("Error: ", strMsg);
//console.trace();
this.objPager.Hide(divList, this.divName4Pager);
return;
}
try
{
await this.BindTab_StudentInfo4Func(divList, arrStudentInfoExObjLst);
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
 * @param objStudentInfoENS:源对象
 * @returns 目标对象=>clsStudentInfoEN:objStudentInfoENT
 **/
 public CopyToEx(objStudentInfoENS:clsStudentInfoEN ): clsStudentInfoENEx
{
const strThisFuncName = this.CopyToEx.name;
 const objStudentInfoENT = new clsStudentInfoENEx();
try
{
ObjectAssign(objStudentInfoENT, objStudentInfoENS);
 return objStudentInfoENT;
}
catch (e)
{
const strMsg = Format("(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
 return objStudentInfoENT;
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
public SortFunExportExcel(a:clsStudentInfoEN , b:clsStudentInfoEN): number 
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
const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(objAnchorElement, viewVarSet.ascOrDesc4SortFun, viewVarSet.sortStudentInfoBy, strSortExpress);
// 将 sortBy 按空格分成两部分
const [sortColumnKey, sortDirection] = sortBy.split(' ');
if (Object.prototype.hasOwnProperty.call(clsStudentInfoENEx, sortColumnKey))
{
// 调用 SortColumn 函数
this.SortColumn(sortColumnKey, sortDirection);
return;
}
viewVarSet.sortStudentInfoBy = sortBy;
viewVarSet.ascOrDesc4SortFun = ascOrDesc4SortFun;
StudentInfoZxCRUD.sortFunStatic = sortFun;
await this.BindGv_StudentInfo4Func(this.listPara.listDiv);
}

 /** 复制记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
 **/
public async CopyRecord(arrIdStudentInfo: Array<string>) {
const strThisFuncName = this.CopyRecord.name;
try
{
const arrStudentInfoObjLst = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(arrIdStudentInfo);
//console.log('responseText=');
//console.log(responseText);
let intCount = 0;
for (const objInFor of arrStudentInfoObjLst)
{
const strMaxStrId = await StudentInfo_GetMaxStrIdAsync();
//console.log('strMaxStrId=' + strMaxStrId);
objInFor.idStudentInfo = strMaxStrId;
const returnBool = await StudentInfo_AddNewRecordAsync(objInFor);
//console.log('returnBool=');
//console.log(returnBool);
if (returnBool == true)
{
//StudentInfo_ReFreshCache();
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

 /** 设置字段值-IdGrade
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
 **/
public async SetIdGrade(arrIdStudentInfo: Array<string>, strIdGrade: string)
{
const strThisFuncName = this.SetIdGrade.name;
if (strIdGrade == null || strIdGrade == "" )
{
const strMsg = "请输入年级流水号(IdGrade)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
if (arrIdStudentInfo.length == 0)
{
const strMsg = "没有选择记录,不能设置字段值!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
try
{
const arrStudentInfoObjLst = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(arrIdStudentInfo);
let intCount = 0;
for (const objInFor of arrStudentInfoObjLst)
{
const objStudentInfoEN = new clsStudentInfoEN();
ObjectAssign(objStudentInfoEN, objInFor);
objStudentInfoEN.SetIdStudentInfo(objInFor.idStudentInfo);
objStudentInfoEN.SetIdGrade(strIdGrade);
let returnBool = false;
try
{
    objStudentInfoEN.sfUpdFldSetStr = objStudentInfoEN.updFldString;//设置哪些字段被修改(脏字段)
returnBool = await StudentInfo_UpdateRecordAsync(objStudentInfoEN);
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
throw (strMsg);
}
if (returnBool == true)
{
//StudentInfo_DeleteKeyIdCache(objInFor.idStudentInfo);
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
//StudentInfo_ReFreshCache();
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
 /** 设置字段值-IdAdminCls
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
 **/
public async SetIdAdminCls(arrIdStudentInfo: Array<string>, strIdAdminCls: string)
{
const strThisFuncName = this.SetIdAdminCls.name;
if (strIdAdminCls == null || strIdAdminCls == "" )
{
const strMsg = "请输入行政班流水号(IdAdminCls)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
if (arrIdStudentInfo.length == 0)
{
const strMsg = "没有选择记录,不能设置字段值!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
try
{
const arrStudentInfoObjLst = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(arrIdStudentInfo);
let intCount = 0;
for (const objInFor of arrStudentInfoObjLst)
{
const objStudentInfoEN = new clsStudentInfoEN();
ObjectAssign(objStudentInfoEN, objInFor);
objStudentInfoEN.SetIdStudentInfo(objInFor.idStudentInfo);
objStudentInfoEN.SetIdAdminCls(strIdAdminCls);
let returnBool = false;
try
{
    objStudentInfoEN.sfUpdFldSetStr = objStudentInfoEN.updFldString;//设置哪些字段被修改(脏字段)
returnBool = await StudentInfo_UpdateRecordAsync(objStudentInfoEN);
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
throw (strMsg);
}
if (returnBool == true)
{
//StudentInfo_DeleteKeyIdCache(objInFor.idStudentInfo);
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
//StudentInfo_ReFreshCache();
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
 /** 设置字段值-IdSchool
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_SetFieldValue)
 **/
public async SetIdSchool(arrIdStudentInfo: Array<string>, strIdSchool: string)
{
const strThisFuncName = this.SetIdSchool.name;
if (strIdSchool == null || strIdSchool == "" )
{
const strMsg = "请输入学校流水号(IdSchool)!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
if (arrIdStudentInfo.length == 0)
{
const strMsg = "没有选择记录,不能设置字段值!";
console.error("Error: ", strMsg);
//console.trace();
alert(strMsg);
return "";
}
try
{
const arrStudentInfoObjLst = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(arrIdStudentInfo);
let intCount = 0;
for (const objInFor of arrStudentInfoObjLst)
{
const objStudentInfoEN = new clsStudentInfoEN();
ObjectAssign(objStudentInfoEN, objInFor);
objStudentInfoEN.SetIdStudentInfo(objInFor.idStudentInfo);
objStudentInfoEN.SetIdSchool(strIdSchool);
let returnBool = false;
try
{
    objStudentInfoEN.sfUpdFldSetStr = objStudentInfoEN.updFldString;//设置哪些字段被修改(脏字段)
returnBool = await StudentInfo_UpdateRecordAsync(objStudentInfoEN);
}
catch (e)
{
const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
console.error(strMsg);
throw (strMsg);
}
if (returnBool == true)
{
//StudentInfo_DeleteKeyIdCache(objInFor.idStudentInfo);
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
//StudentInfo_ReFreshCache();
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
public async DelMultiRecord(arrIdStudentInfo: Array<string>) {
const strThisFuncName = this.DelMultiRecord.name;
try
{
const returnInt = await StudentInfo_DelStudentInfosAsync(arrIdStudentInfo);
if (returnInt > 0)
{
//StudentInfo_ReFreshCache();
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
 * @param objStudentInfo:需要显示的对象
 **/
public ShowStudentInfoObj(divContainer: HTMLDivElement, objStudentInfo: clsStudentInfoEN) 
{
if (divContainer == null)
{
alert(Format("所给div为空，divContainer为null!",divContainer));
return;
}
const sstrKeys = GetObjKeys(objStudentInfo);
const ul: HTMLUListElement = document.createElement("ul");
for (const strKey of sstrKeys)
{
const strValue = objStudentInfo.GetFldValue(strKey);
const li: HTMLLIElement = document.createElement("li");
li.innerHTML = Format("{0}:{1}", strKey, strValue);
ul.appendChild(li);
}
divContainer.appendChild(ul);
}

 /** 函数功能:从界面列表中获取第一个关键字的值
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
 * @param pobjStudentInfoEN:表实体类对象
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
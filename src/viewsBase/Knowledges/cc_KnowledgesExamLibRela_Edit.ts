﻿
 /**
 * 类名:cc_KnowledgesExamLibRela_Edit(界面:cc_KnowledgesExamLibRelaCRUD,01120185)
 * 表名:cc_KnowledgesExamLibRela(01120140)
 * 版本:2025.02.27.1(服务器:WIN-SRV103-116)
 * 日期:2025/03/09 23:52:14
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS,0257)
 * 编程语言:TypeScript
 **/
import $ from "jquery";
import { cc_KnowledgesExamLibRela_CheckPropertyNew,cc_KnowledgesExamLibRela_AddNewRecordAsync,cc_KnowledgesExamLibRela_ReFreshCache,cc_KnowledgesExamLibRela_GetUniCondStr,cc_KnowledgesExamLibRela_IsExistRecordAsync,cc_KnowledgesExamLibRela_GetUniCondStr4Update,cc_KnowledgesExamLibRela_AddNewRecordWithReturnKeyAsync,cc_KnowledgesExamLibRela_IsExistAsync,cc_KnowledgesExamLibRela_GetObjBymIdAsync,cc_KnowledgesExamLibRela_CheckProperty4Update,cc_KnowledgesExamLibRela_UpdateRecordAsync,cc_KnowledgesExamLibRela_EditRecordExAsync } from "@/ts/L3ForWApi/Knowledges/clscc_KnowledgesExamLibRelaWApi";
import { CourseId_Session,cc_KnowledgesExamLibRela_DeleteKeyIdCache,divVarSet,refcc_KnowledgesExamLibRela_Edit } from "@/viewsShare/Knowledges/cc_KnowledgesExamLibRelaVueShare";
import { clscc_KnowledgesExamLibRelaEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgesExamLibRelaEN";
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /** cc_KnowledgesExamLibRela_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class  cc_KnowledgesExamLibRela_Edit 
{
protected _className = "Unknown"; // 基类中的实际字段
// 定义虚拟属性
get className(): string {
return this._className;
}
public static times4TestShowDialog = 0;
public opType = "";
public keyId = 0;
public isShowMsg = true; //编辑记录时是否显示提示信息
public tag = ""; //编辑对象的标志，用于存放或者标志一些信息
public static strPageDispModeId = "01";//PopupBox(弹出框)
public static objPageEdit: cc_KnowledgesExamLibRela_Edit;
public static objPageEdit2: cc_KnowledgesExamLibRela_Edit;
public static objPageEdit3: cc_KnowledgesExamLibRela_Edit;
public iShowList: IShowList | null;
public bolIsLoadEditRegion = false;  //记录是否导入编辑区的变量
public divName4Edit = "divEditLayout";  //编辑区的Id
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivEdit(): HTMLDivElement {
return divVarSet.refDivEdit;
}
 /**
 * 获取当前组件的divEdit的层对象
 **/
public get thisDivLayout(): HTMLDivElement {
return divVarSet.refDivEdit;
}
constructor(strClassName: string, objShowList: IShowList | null) {
this._className = strClassName;
this.iShowList = objShowList;
if (cc_KnowledgesExamLibRela_Edit.SetPageEdit(this, 1) == true) return;
if (cc_KnowledgesExamLibRela_Edit.SetPageEdit(this, 2) == true) return;
if (cc_KnowledgesExamLibRela_Edit.SetPageEdit(this, 3) == true) return;
}
public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
const strNewClassName = objDataLst.className;
switch (intIndex)
{
case 1:
if (cc_KnowledgesExamLibRela_Edit.objPageEdit == null)
{
cc_KnowledgesExamLibRela_Edit.objPageEdit = objDataLst;
return true;
}
else
{
const strClassNameOld = cc_KnowledgesExamLibRela_Edit.objPageEdit.className;
if (strClassNameOld == strNewClassName)
{
cc_KnowledgesExamLibRela_Edit.objPageEdit = objDataLst;
return true;
}
else return false;
}
break;
case 2:
if (cc_KnowledgesExamLibRela_Edit.objPageEdit2 == null)
{
cc_KnowledgesExamLibRela_Edit.objPageEdit2 = objDataLst;
return true;
}
else
{
const strClassNameOld = cc_KnowledgesExamLibRela_Edit.objPageEdit2.className;
if (strClassNameOld == strNewClassName)
{
cc_KnowledgesExamLibRela_Edit.objPageEdit2 = objDataLst;
return true;
}
else return false;
}
break;
case 3:
if (cc_KnowledgesExamLibRela_Edit.objPageEdit3 == null)
{
cc_KnowledgesExamLibRela_Edit.objPageEdit3 = objDataLst;
return true;
}
else
{
const strClassNameOld = cc_KnowledgesExamLibRela_Edit.objPageEdit3.className;
if (strClassNameOld == strNewClassName)
{
cc_KnowledgesExamLibRela_Edit.objPageEdit3 = objDataLst;
return true;
}
else return false;
}
break;
default:
return false;
// break;
}
}
public static GetPageEditObj(strClassName: string): any {
if (cc_KnowledgesExamLibRela_Edit.objPageEdit != null)
{
const strClassNameOld = cc_KnowledgesExamLibRela_Edit.objPageEdit.className;
if (strClassNameOld == strClassName) return cc_KnowledgesExamLibRela_Edit.objPageEdit;
}
if (cc_KnowledgesExamLibRela_Edit.objPageEdit2 != null)
{
const strClassNameOld = cc_KnowledgesExamLibRela_Edit.objPageEdit2.className;
if (strClassNameOld == strClassName) return cc_KnowledgesExamLibRela_Edit.objPageEdit2;
}
if (cc_KnowledgesExamLibRela_Edit.objPageEdit3 != null)
{
const strClassNameOld = cc_KnowledgesExamLibRela_Edit.objPageEdit3.className;
if (strClassNameOld == strClassName) return cc_KnowledgesExamLibRela_Edit.objPageEdit3;
}
return null;
}


 /**
 * 隐藏对话框
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
 **/
public HideDialog_cc_KnowledgesExamLibRela() {
if (cc_KnowledgesExamLibRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refcc_KnowledgesExamLibRela_Edit.value.hideDialog();
}
}

 /** 函数功能:页面导入,当页面开始运行时所发生的事件
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
 **/
public async PageLoad()
{
const strThisFuncName = this.PageLoad.name;
// 在此处放置用户代码以初始化页面
try
{
}
catch (e)
{
const strMsg = Format("页面启动不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}


 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_cc_KnowledgesExamLibRela(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_cc_KnowledgesExamLibRela.name;
if (cc_KnowledgesExamLibRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refcc_KnowledgesExamLibRela_Edit.value == null)
{
const strMsg = Format(
'当前编辑区的EditObj为空，请检查！(in {0}.{1})',
this.className,
strThisFuncName,
);
console.error(strMsg);
alert(strMsg);
return false;
}
await refcc_KnowledgesExamLibRela_Edit.value.showDialog(this);
}
       if (strOp === "Add" || strOp === "AddWithMaxId") {
this.btnSubmitcc_KnowledgesExamLibRela = "确认添加";
this.btnCancelcc_KnowledgesExamLibRela = "取消添加";
        }
else if (strOp === "Update")
{
this.btnSubmitcc_KnowledgesExamLibRela = "确认修改";
this.btnCancelcc_KnowledgesExamLibRela = "取消修改";
}
return true;
}

 /** 添加新记录
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecord_Click)
 **/
public async btnAddNewRecord_Click() {
const strThisFuncName = this.btnAddNewRecord_Click.name;
try
{
this.opType = "Add";
const bolIsSuccess = await this.ShowDialog_cc_KnowledgesExamLibRela(this.opType);
if (bolIsSuccess == false) return;
if (['02', '03', '06'].indexOf(clscc_KnowledgesExamLibRelaEN.PrimaryTypeId) > -1)
{
await this.AddNewRecordWithMaxId();
}
else
{
await this.AddNewRecord();
}
}
catch(e)
{
const strMsg = Format("添加新记录初始化不成功,{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /** 在数据表里修改记录
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecordInTab_Click)
 **/
public async btnUpdateRecordInTab_Click(lngmId: number) {
const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (lngmId == 0)
{
alert("请选择需要修改的记录!");
return;
}
try {
this.opType = "Update";
const bolIsSuccess = await this.ShowDialog_cc_KnowledgesExamLibRela(this.opType);
if (bolIsSuccess == false) return;
const lngKeyId =  lngmId;
this.UpdateRecord(lngKeyId);
}
catch (e)
{
const strMsg = Format("(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /** 修改记录
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
 **/
public async btnUpdateRecord_Click(lngmId: number) {
const strThisFuncName = this.btnUpdateRecord_Click.name;
if (lngmId == 0)
{
const strMsg = "修改记录的关键字为空,请检查!";
console.error(strMsg);
alert(strMsg);
return;
}
try {
this.opType = "Update";
const bolIsSuccess = await this.ShowDialog_cc_KnowledgesExamLibRela(this.opType);
if (bolIsSuccess == false) return;
this.bolIsLoadEditRegion = true;  //
const lngKeyId =  lngmId;
const update = await this.UpdateRecord(lngKeyId);
if (update == false)
{
const strMsg = Format("在修改记录时,显示记录数据不成功!");
console.error(strMsg);
alert(strMsg);
return;
}
}
catch (e)
{
const strMsg = Format("(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
}
}

 /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnOKUpd_Click)
 **/
public async btnSubmit_Click()
{
const strThisFuncName = this.btnSubmit_Click.name;
const strCommandText: string = this.btnSubmitcc_KnowledgesExamLibRela;
try {
let returnBool = false;
let strInfo = "";
let strMsg = "";
switch(strCommandText)
{
case "添加":
this.btnSubmitcc_KnowledgesExamLibRela = "确认添加";
this.btnCancelcc_KnowledgesExamLibRela = "取消添加";
 await this.AddNewRecord();
break;				
case "确认添加":
//这是一个单表的插入的代码,由于逻辑层太简单,
//就把逻辑层合并到控制层,
if (['02', '03', '06'].indexOf(clscc_KnowledgesExamLibRelaEN.PrimaryTypeId) > -1)
{
const returnKeyId = await this.AddNewRecordWithReturnKeySave();
if (returnKeyId != 0)
{
refcc_KnowledgesExamLibRela_Edit.value.hideDialog();
if (this.iShowList != null) this.iShowList.BindGvCache(clscc_KnowledgesExamLibRelaEN._CurrTabName, "");
}
}
else
{
returnBool = await this.AddNewRecordSave();
if (returnBool == true)
{
if (cc_KnowledgesExamLibRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
refcc_KnowledgesExamLibRela_Edit.value.hideDialog();
}
if (this.iShowList != null) this.iShowList.BindGvCache(clscc_KnowledgesExamLibRelaEN._CurrTabName, this.keyId.toString());
}
}
break;
case "确认修改":
//这是一个单表的修改的代码,由于逻辑层太简单,
returnBool = await this.UpdateRecordSave();
strInfo = returnBool ? "修改成功!" : "修改不成功!";
strInfo += "(In cc_KnowledgesExamLibRela_Edit.btnSubmit_Click)";
//显示信息框
//console.log(strInfo);
alert(strInfo);
if (returnBool == true)
{
if (cc_KnowledgesExamLibRela_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
refcc_KnowledgesExamLibRela_Edit.value.hideDialog();
}
if (this.iShowList != null) this.iShowList.BindGvCache(clscc_KnowledgesExamLibRelaEN._CurrTabName, this.keyId.toString());
}
break;
default:
strMsg = Format("strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())", strCommandText);
console.error(strMsg);
alert(strMsg);
break;
}
}
catch (e)
{
const strMsg = Format("(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})", e, this.className, strThisFuncName, strCommandText);
console.error(strMsg);
alert(strMsg);
}
}

 /** 为插入记录做准备工作
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
 **/
public async AddNewRecord()
{
const strThisFuncName = this.AddNewRecord.name;
console.log('strThisFuncName1', strThisFuncName);
refcc_KnowledgesExamLibRela_Edit.value.Clear();
//wuccc_KnowledgesExamLibRelaB1.mId = cc_KnowledgesExamLibRelaGetMaxStrId_S();
}

 /** 为插入记录做准备工作
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
 **/
public async AddNewRecordWithMaxId()
{
refcc_KnowledgesExamLibRela_Edit.value.Clear();

//this.mId = await cc_KnowledgesExamLibRela_GetMaxStrIdAsync();
}

 /** 添加新记录,保存函数
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
 **/
public async AddNewRecordSave(): Promise<boolean>{
const strThisFuncName = this.AddNewRecordSave.name;
let objcc_KnowledgesExamLibRelaEN;
try
{
objcc_KnowledgesExamLibRelaEN = await refcc_KnowledgesExamLibRela_Edit.value.GetEditDatacc_KnowledgesExamLibRelaObj();
}
catch(e)
{
const strMsg = Format("从界面获取数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
try
{
cc_KnowledgesExamLibRela_CheckPropertyNew(objcc_KnowledgesExamLibRelaEN);
}
catch(e)
{
const strMsg = Format("检查数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await this.CheckUniCond4Add(objcc_KnowledgesExamLibRelaEN);
if (bolIsExistCond == false)
{
return false;
}
let returnBool = false;
returnBool = await cc_KnowledgesExamLibRela_AddNewRecordAsync(objcc_KnowledgesExamLibRelaEN);
if (returnBool == true)
{
cc_KnowledgesExamLibRela_ReFreshCache(CourseId_Session.value);
const strInfo = `添加[知识点习题关系(cc_KnowledgesExamLibRela)]记录成功!`;
//显示信息框
if (this.isShowMsg == true) alert(strInfo);
}
else
{
const strInfo = `添加[知识点习题关系(cc_KnowledgesExamLibRela)]记录不成功!`;
//显示信息框
alert(strInfo);
}
return returnBool;//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = Format("添加记录不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
}

 /** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
 **/
public async CheckUniCond4Add(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<boolean>{
const strUniquenessCondition = cc_KnowledgesExamLibRela_GetUniCondStr(objcc_KnowledgesExamLibRelaEN);
const bolIsExistCondition = await cc_KnowledgesExamLibRela_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
 **/
public async CheckUniCond4Update(objcc_KnowledgesExamLibRelaEN: clscc_KnowledgesExamLibRelaEN): Promise<boolean>{
const strUniquenessCondition = cc_KnowledgesExamLibRela_GetUniCondStr4Update(objcc_KnowledgesExamLibRelaEN);
const bolIsExistCondition = await cc_KnowledgesExamLibRela_IsExistRecordAsync(strUniquenessCondition);
if (bolIsExistCondition == true)
{
const strMsg = Format("不能满足唯一性条件。满足条件：{0}的记录已经存在!", strUniquenessCondition);
console.error(strMsg);
alert(strMsg);
return false;
}
return true;
}

 /** 添加新记录,由后台自动获取最大值的关键字。保存函数
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithReturnKeySave)
 **/
public async AddNewRecordWithReturnKeySave(): Promise<number>{
const strThisFuncName = this.AddNewRecordWithReturnKeySave.name;
let objcc_KnowledgesExamLibRelaEN;
try
{
objcc_KnowledgesExamLibRelaEN = await refcc_KnowledgesExamLibRela_Edit.value.GetEditDatacc_KnowledgesExamLibRelaObj();
}
catch(e)
{
const strMsg = Format("从界面获取数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw(strMsg);//一定要有一个返回值,否则会出错!
}
try
{
cc_KnowledgesExamLibRela_CheckPropertyNew(objcc_KnowledgesExamLibRelaEN);
}
catch(e)
{
const strMsg = Format("检查数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw(strMsg);//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await this.CheckUniCond4Add(objcc_KnowledgesExamLibRelaEN);
if (bolIsExistCond == false)
{
return 0;
}
const responseKeyId = await cc_KnowledgesExamLibRela_AddNewRecordWithReturnKeyAsync(objcc_KnowledgesExamLibRelaEN);
const returnKeyId: string = responseKeyId;
if (IsNullOrEmpty(returnKeyId) == false)
{
objcc_KnowledgesExamLibRelaEN.mId = Number(returnKeyId);
cc_KnowledgesExamLibRela_ReFreshCache(CourseId_Session.value);
const strInfo = `添加[知识点习题关系(cc_KnowledgesExamLibRela)]记录成功!`;
//显示信息框
if (this.isShowMsg == true) alert(strInfo);
}
else
{
const strInfo = `添加[知识点习题关系(cc_KnowledgesExamLibRela)]记录不成功!`;
//显示信息框
alert(strInfo);
}
return Number(responseKeyId);//一定要有一个返回值,否则会出错!
}
catch(e)
{
const strMsg = Format("添加记录不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
throw(strMsg);
}
return 0;//一定要有一个返回值,否则会出错!
}

 /** 函数功能:把以该关键字的记录内容显示在界面上,
* 在这里是把值传到表控件中
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_ShowData)
 * @param lngmId: 表记录的关键字,显示该表关键字的内容
 **/
  public async ShowData(lngmId: number) {
const strThisFuncName = this.ShowData.name;
        //操作步骤:
        //1、检查关键字是否为空；
        //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
        //3、用提供的关键字初始化一个类对象；
        //4、获取类对象的所有属性；
        //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
        //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
        let objcc_KnowledgesExamLibRelaEN = new clscc_KnowledgesExamLibRelaEN();
        try {
const returnBool = await cc_KnowledgesExamLibRela_IsExistAsync(lngmId);
            if (returnBool == false) {
                const strInfo = Format("关键字:[{0}] 的记录不存在!", lngmId);
                //显示信息框
                alert(strInfo);
            }
        }
        catch (e) {
            const strMsg = Format("检查相应关键字的记录存在不成功, {0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
        }
        try {
const objcc_KnowledgesExamLibRelaENConst = await cc_KnowledgesExamLibRela_GetObjBymIdAsync(lngmId);
       if (objcc_KnowledgesExamLibRelaENConst == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return;
        }
 objcc_KnowledgesExamLibRelaEN = objcc_KnowledgesExamLibRelaENConst; 
        }
        catch (e) {
            const strMsg = Format("根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
        }
        //3、用提供的关键字初始化一个类对象；
refcc_KnowledgesExamLibRela_Edit.value.ShowDataFromcc_KnowledgesExamLibRelaObj(objcc_KnowledgesExamLibRelaEN);
}

 /** 根据关键字获取相应的记录的对象
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
 * @param sender">参数列表</param>
 **/
public async UpdateRecord(lngmId: number):Promise<boolean> 
{
const strThisFuncName = this.UpdateRecord.name;
this.keyId = lngmId;
try
{
const objcc_KnowledgesExamLibRelaEN = await cc_KnowledgesExamLibRela_GetObjBymIdAsync(lngmId);
       if (objcc_KnowledgesExamLibRelaEN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.className, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
await refcc_KnowledgesExamLibRela_Edit.value.ShowDataFromcc_KnowledgesExamLibRelaObj(objcc_KnowledgesExamLibRelaEN);
console.log("完成UpdateRecord!");
return true;
}
catch(e)
{
const strMsg = Format("根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})", e, this.className, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
}

 /** 修改记录
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecordSave)
 **/
public async UpdateRecordSave(): Promise<boolean> {
const strThisFuncName = this.UpdateRecordSave.name;
const objcc_KnowledgesExamLibRelaEN = await refcc_KnowledgesExamLibRela_Edit.value.GetEditDatacc_KnowledgesExamLibRelaObj();
objcc_KnowledgesExamLibRelaEN.SetmId(Number(this.keyId));
objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr = objcc_KnowledgesExamLibRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_KnowledgesExamLibRelaEN.mId == 0 || objcc_KnowledgesExamLibRelaEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_KnowledgesExamLibRela_CheckProperty4Update(objcc_KnowledgesExamLibRelaEN);
}
catch(e)
{
const strMsg = Format("检查数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await this.CheckUniCond4Update(objcc_KnowledgesExamLibRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_KnowledgesExamLibRela_UpdateRecordAsync(objcc_KnowledgesExamLibRelaEN);
if (returnBool == true)
{
cc_KnowledgesExamLibRela_ReFreshCache(CourseId_Session.value);
cc_KnowledgesExamLibRela_DeleteKeyIdCache(CourseId_Session.value, this.keyId);
}
return returnBool;
}
catch(e)
{
const strMsg = Format("修改记录不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
}

 /** 编辑记录，存在就修改，不存在就添加
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_EditRecordExSave)
 **/
public async EditRecordExSave(): Promise<boolean> {
const strThisFuncName = this.EditRecordExSave.name;
const objcc_KnowledgesExamLibRelaEN = await refcc_KnowledgesExamLibRela_Edit.value.GetEditDatacc_KnowledgesExamLibRelaObj();
objcc_KnowledgesExamLibRelaEN.SetmId(Number(this.keyId));
objcc_KnowledgesExamLibRelaEN.sfUpdFldSetStr = objcc_KnowledgesExamLibRelaEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_KnowledgesExamLibRelaEN.mId == 0 || objcc_KnowledgesExamLibRelaEN.mId == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_KnowledgesExamLibRela_CheckProperty4Update(objcc_KnowledgesExamLibRelaEN);
}
catch(e)
{
const strMsg = Format("检查数据不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
try
{
//检查唯一性条件
const bolIsExistCond = await this.CheckUniCond4Update(objcc_KnowledgesExamLibRelaEN);
if (bolIsExistCond == false)
{
return false;
}
const returnBool = await cc_KnowledgesExamLibRela_EditRecordExAsync(objcc_KnowledgesExamLibRelaEN);
if (returnBool == true)
{
cc_KnowledgesExamLibRela_ReFreshCache(CourseId_Session.value);
}
return returnBool;
}
catch(e)
{
const strMsg = Format("修改记录不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
alert(strMsg);
return false;
}
}

 /**
 * 设置取消按钮的标题(Used In AddNewRecord())
 **/
public  set btnCancelcc_KnowledgesExamLibRela(value: string) {
refcc_KnowledgesExamLibRela_Edit.value.strCancelButtonText = value;
}
 /**
 * 获取按钮的标题
 **/
public  get btnSubmitcc_KnowledgesExamLibRela():string {
const strValue = refcc_KnowledgesExamLibRela_Edit.value.strSubmitButtonText;
return strValue;
}
 /**
 * 设置确定按钮的标题(Used In AddNewRecord())
 **/
public  set btnSubmitcc_KnowledgesExamLibRela(value: string) {
refcc_KnowledgesExamLibRela_Edit.value.strSubmitButtonText = value;
}
}
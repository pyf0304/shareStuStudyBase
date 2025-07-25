﻿
 /**
 * 类名:cc_KnowledgeStuTeachLog_Edit(界面:cc_KnowledgeStuTeachLogCRUD,01120255)
 * 表名:cc_KnowledgeStuTeachLog(01120973)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 20:15:10
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
import { cc_KnowledgeStuTeachLog_CheckPropertyNew,cc_KnowledgeStuTeachLog_IsExistAsync,cc_KnowledgeStuTeachLog_AddNewRecordAsync,cc_KnowledgeStuTeachLog_GetObjByKeyLstAsync,cc_KnowledgeStuTeachLog_CheckProperty4Update,cc_KnowledgeStuTeachLog_UpdateRecordAsync } from "@/ts/L3ForWApi/Knowledges/clscc_KnowledgeStuTeachLogWApi";
import { divVarSet,refcc_KnowledgeStuTeachLog_Edit } from "@/viewsShare/Knowledges/cc_KnowledgeStuTeachLogVueShare";
import { clscc_KnowledgeStuTeachLogEN } from "@/ts/L0Entity/Knowledges/clscc_KnowledgeStuTeachLogEN";
import { Format } from "@/ts/PubFun/clsString";
import { IShowList } from "@/ts/PubFun/IShowList";
import { enumPageDispMode } from "@/ts/PubFun/enumPageDispMode";
 /** cc_KnowledgeStuTeachLog_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class  cc_KnowledgeStuTeachLog_Edit 
{
protected _className = "Unknown"; // 基类中的实际字段
// 定义虚拟属性
get className(): string {
return this._className;
}
public static times4TestShowDialog = 0;
public opType = "";
public keyId = "";
public isShowMsg = true; //编辑记录时是否显示提示信息
public tag = ""; //编辑对象的标志，用于存放或者标志一些信息
public static strPageDispModeId = "01";//PopupBox(弹出框)
public static objPageEdit: cc_KnowledgeStuTeachLog_Edit;
public static objPageEdit2: cc_KnowledgeStuTeachLog_Edit;
public static objPageEdit3: cc_KnowledgeStuTeachLog_Edit;
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
if (cc_KnowledgeStuTeachLog_Edit.SetPageEdit(this, 1) == true) return;
if (cc_KnowledgeStuTeachLog_Edit.SetPageEdit(this, 2) == true) return;
if (cc_KnowledgeStuTeachLog_Edit.SetPageEdit(this, 3) == true) return;
}
public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
const strNewClassName = objDataLst.className;
switch (intIndex)
{
case 1:
if (cc_KnowledgeStuTeachLog_Edit.objPageEdit == null)
{
cc_KnowledgeStuTeachLog_Edit.objPageEdit = objDataLst;
return true;
}
else
{
const strClassNameOld = cc_KnowledgeStuTeachLog_Edit.objPageEdit.className;
if (strClassNameOld == strNewClassName)
{
cc_KnowledgeStuTeachLog_Edit.objPageEdit = objDataLst;
return true;
}
else return false;
}
break;
case 2:
if (cc_KnowledgeStuTeachLog_Edit.objPageEdit2 == null)
{
cc_KnowledgeStuTeachLog_Edit.objPageEdit2 = objDataLst;
return true;
}
else
{
const strClassNameOld = cc_KnowledgeStuTeachLog_Edit.objPageEdit2.className;
if (strClassNameOld == strNewClassName)
{
cc_KnowledgeStuTeachLog_Edit.objPageEdit2 = objDataLst;
return true;
}
else return false;
}
break;
case 3:
if (cc_KnowledgeStuTeachLog_Edit.objPageEdit3 == null)
{
cc_KnowledgeStuTeachLog_Edit.objPageEdit3 = objDataLst;
return true;
}
else
{
const strClassNameOld = cc_KnowledgeStuTeachLog_Edit.objPageEdit3.className;
if (strClassNameOld == strNewClassName)
{
cc_KnowledgeStuTeachLog_Edit.objPageEdit3 = objDataLst;
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
if (cc_KnowledgeStuTeachLog_Edit.objPageEdit != null)
{
const strClassNameOld = cc_KnowledgeStuTeachLog_Edit.objPageEdit.className;
if (strClassNameOld == strClassName) return cc_KnowledgeStuTeachLog_Edit.objPageEdit;
}
if (cc_KnowledgeStuTeachLog_Edit.objPageEdit2 != null)
{
const strClassNameOld = cc_KnowledgeStuTeachLog_Edit.objPageEdit2.className;
if (strClassNameOld == strClassName) return cc_KnowledgeStuTeachLog_Edit.objPageEdit2;
}
if (cc_KnowledgeStuTeachLog_Edit.objPageEdit3 != null)
{
const strClassNameOld = cc_KnowledgeStuTeachLog_Edit.objPageEdit3.className;
if (strClassNameOld == strClassName) return cc_KnowledgeStuTeachLog_Edit.objPageEdit3;
}
return null;
}


 /**
 * 隐藏对话框
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
 **/
public HideDialog_cc_KnowledgeStuTeachLog() {
if (cc_KnowledgeStuTeachLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
 refcc_KnowledgeStuTeachLog_Edit.value.hideDialog();
}
}

 /**
 * 显示对话框
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
 **/
public async ShowDialog_cc_KnowledgeStuTeachLog(strOp:string): Promise<boolean> {
const strThisFuncName = this.ShowDialog_cc_KnowledgeStuTeachLog.name;
if (cc_KnowledgeStuTeachLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
if (refcc_KnowledgeStuTeachLog_Edit.value == null)
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
await refcc_KnowledgeStuTeachLog_Edit.value.showDialog(this);
}
       if (strOp === "Add" || strOp === "AddWithMaxId") {
this.btnSubmitcc_KnowledgeStuTeachLog = "确认添加";
this.btnCancelcc_KnowledgeStuTeachLog = "取消添加";
        }
else if (strOp === "Update")
{
this.btnSubmitcc_KnowledgeStuTeachLog = "确认修改";
this.btnCancelcc_KnowledgeStuTeachLog = "取消修改";
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
const bolIsSuccess = await this.ShowDialog_cc_KnowledgeStuTeachLog(this.opType);
if (bolIsSuccess == false) return;
if (['02', '03', '06'].indexOf(clscc_KnowledgeStuTeachLogEN.PrimaryTypeId) > -1)
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
public async btnUpdateRecordInTab_Click(lngQuestionId: number,strIdStudentInfo: string) {
const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
try {
this.opType = "Update";
const bolIsSuccess = await this.ShowDialog_cc_KnowledgeStuTeachLog(this.opType);
if (bolIsSuccess == false) return;
this.UpdateRecord(lngQuestionId,strIdStudentInfo);
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
public async btnUpdateRecord_Click(lngQuestionId: number,strIdStudentInfo: string) {
const strThisFuncName = this.btnUpdateRecord_Click.name;
try {
this.opType = "Update";
const bolIsSuccess = await this.ShowDialog_cc_KnowledgeStuTeachLog(this.opType);
if (bolIsSuccess == false) return;
this.bolIsLoadEditRegion = true;  //
const update = await this.UpdateRecord(lngQuestionId,strIdStudentInfo);
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
const strCommandText: string = this.btnSubmitcc_KnowledgeStuTeachLog;
try {
let returnBool = false;
let strInfo = "";
let strMsg = "";
switch(strCommandText)
{
case "添加":
this.btnSubmitcc_KnowledgeStuTeachLog = "确认添加";
this.btnCancelcc_KnowledgeStuTeachLog = "取消添加";
 await this.AddNewRecord();
break;				
case "确认添加":
//这是一个单表的插入的代码,由于逻辑层太简单,
//就把逻辑层合并到控制层,
returnBool = await this.AddNewRecordSave();
if (returnBool == true)
{
if (cc_KnowledgeStuTeachLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
refcc_KnowledgeStuTeachLog_Edit.value.hideDialog();
}
if (this.iShowList != null) this.iShowList.BindGv(clscc_KnowledgeStuTeachLogEN._CurrTabName, this.keyId);
}
break;
case "确认修改":
//这是一个单表的修改的代码,由于逻辑层太简单,
returnBool = await this.UpdateRecordSave();
strInfo = returnBool ? "修改成功!" : "修改不成功!";
strInfo += "(In cc_KnowledgeStuTeachLog_Edit.btnSubmit_Click)";
//显示信息框
//console.log(strInfo);
alert(strInfo);
if (returnBool == true)
{
if (cc_KnowledgeStuTeachLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
{
refcc_KnowledgeStuTeachLog_Edit.value.hideDialog();
}
if (this.iShowList != null) this.iShowList.BindGv(clscc_KnowledgeStuTeachLogEN._CurrTabName, this.keyId);
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

/**
*  在用户自定义控件中,设置关键字的值,是否只读
 * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
 * @param bolReadonly:是否只读
 **/
public SetKeyReadOnly(bolReadonly:boolean)
{
$('#txtIdStudentInfo').attr('ReadOnly', bolReadonly.toString());
}

 /** 为插入记录做准备工作
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
 **/
public async AddNewRecord()
{
const strThisFuncName = this.AddNewRecord.name;
console.log('strThisFuncName1', strThisFuncName);
refcc_KnowledgeStuTeachLog_Edit.value.Clear();
//wuccc_KnowledgeStuTeachLogB1.idStudentInfo = cc_KnowledgeStuTeachLogGetMaxStrId_S();
}

 /** 为插入记录做准备工作
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
 **/
public async AddNewRecordWithMaxId()
{
this.SetKeyReadOnly(false);
refcc_KnowledgeStuTeachLog_Edit.value.Clear();

//this.idStudentInfo = await cc_KnowledgeStuTeachLog_GetMaxStrIdAsync();
}

 /** 添加新记录,保存函数
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordSave)
 **/
public async AddNewRecordSave(): Promise<boolean>{
const strThisFuncName = this.AddNewRecordSave.name;
let objcc_KnowledgeStuTeachLogEN;
try
{
objcc_KnowledgeStuTeachLogEN = await refcc_KnowledgeStuTeachLog_Edit.value.GetEditDatacc_KnowledgeStuTeachLogObj();
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
cc_KnowledgeStuTeachLog_CheckPropertyNew(objcc_KnowledgeStuTeachLogEN);
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
let returnBool = false;
const bolIsExist = await cc_KnowledgeStuTeachLog_IsExistAsync(objcc_KnowledgeStuTeachLogEN.questionId,objcc_KnowledgeStuTeachLogEN.idStudentInfo,);
if (bolIsExist == true)
{
const strMsg = Format("添加记录时,关键字：{0}已经存在!", objcc_KnowledgeStuTeachLogEN.idStudentInfo);
console.error(strMsg);
alert(strMsg);
return false;//一定要有一个返回值,否则会出错!
}
returnBool = await cc_KnowledgeStuTeachLog_AddNewRecordAsync(objcc_KnowledgeStuTeachLogEN);
if (returnBool == true)
{
//cc_KnowledgeStuTeachLog_ReFreshCache();
const strInfo = `添加[学生知识点教学日志(cc_KnowledgeStuTeachLog)]记录成功!`;
//显示信息框
if (this.isShowMsg == true) alert(strInfo);
}
else
{
const strInfo = `添加[学生知识点教学日志(cc_KnowledgeStuTeachLog)]记录不成功!`;
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

 /** 函数功能:把以该关键字的记录内容显示在界面上,
* 在这里是把值传到表控件中
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_ShowData)
 * @param strIdStudentInfo: 表记录的关键字,显示该表关键字的内容
 **/
  public async ShowData(lngQuestionId: number,strIdStudentInfo: string) {
const strThisFuncName = this.ShowData.name;
        //操作步骤:
        //1、检查关键字是否为空；
        //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
        //3、用提供的关键字初始化一个类对象；
        //4、获取类对象的所有属性；
        //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
        //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
        let objcc_KnowledgeStuTeachLogEN = new clscc_KnowledgeStuTeachLogEN();
        try {
const returnBool = await cc_KnowledgeStuTeachLog_IsExistAsync(lngQuestionId,strIdStudentInfo);
            if (returnBool == false) {
                const strInfo = Format("关键字:[{0}] 的记录不存在!", strIdStudentInfo);
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
const objcc_KnowledgeStuTeachLogENConst = await cc_KnowledgeStuTeachLog_GetObjByKeyLstAsync(lngQuestionId,strIdStudentInfo);
       if (objcc_KnowledgeStuTeachLogENConst == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return;
        }
 objcc_KnowledgeStuTeachLogEN = objcc_KnowledgeStuTeachLogENConst; 
        }
        catch (e) {
            const strMsg = Format("根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})", e, this.constructor.name, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
        }
        //3、用提供的关键字初始化一个类对象；
refcc_KnowledgeStuTeachLog_Edit.value.ShowDataFromcc_KnowledgeStuTeachLogObj(objcc_KnowledgeStuTeachLogEN);
}

 /** 根据关键字获取相应的记录的对象
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
 * @param sender">参数列表</param>
 **/
public async UpdateRecord(lngQuestionId: number,strIdStudentInfo: string):Promise<boolean> 
{
const strThisFuncName = this.UpdateRecord.name;
this.keyId = strIdStudentInfo;
try
{
const objcc_KnowledgeStuTeachLogEN = await cc_KnowledgeStuTeachLog_GetObjByKeyLstAsync(lngQuestionId,strIdStudentInfo);
       if (objcc_KnowledgeStuTeachLogEN == null)
        {
            const strMsg = Format("根据关键字获取相应的记录的对象为空.(in {0}.{1})", this.className, strThisFuncName);
console.error(strMsg);
            alert(strMsg);
            return false;
        }
await refcc_KnowledgeStuTeachLog_Edit.value.ShowDataFromcc_KnowledgeStuTeachLogObj(objcc_KnowledgeStuTeachLogEN);
console.log("完成UpdateRecord!");
return true;
}
catch(e)
{
const strMsg = Format("修改记录时，显示信息出错,{0}.(in {1}.{2})", e, this.className, strThisFuncName);
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
const objcc_KnowledgeStuTeachLogEN = await refcc_KnowledgeStuTeachLog_Edit.value.GetEditDatacc_KnowledgeStuTeachLogObj();
objcc_KnowledgeStuTeachLogEN.SetIdStudentInfo(this.keyId);
objcc_KnowledgeStuTeachLogEN.sfUpdFldSetStr = objcc_KnowledgeStuTeachLogEN.updFldString;//设置哪些字段被修改(脏字段)
if (objcc_KnowledgeStuTeachLogEN.idStudentInfo == "" || objcc_KnowledgeStuTeachLogEN.idStudentInfo == undefined){
console.error("关键字不能为空!");
throw "关键字不能为空!";
}
try
{
cc_KnowledgeStuTeachLog_CheckProperty4Update(objcc_KnowledgeStuTeachLogEN);
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
const returnBool = await cc_KnowledgeStuTeachLog_UpdateRecordAsync(objcc_KnowledgeStuTeachLogEN);
if (returnBool == true)
{
//cc_KnowledgeStuTeachLog_ReFreshCache();
//cc_KnowledgeStuTeachLog_DeleteKeyIdCache(this.keyId);
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
public  set btnCancelcc_KnowledgeStuTeachLog(value: string) {
refcc_KnowledgeStuTeachLog_Edit.value.strCancelButtonText = value;
}
 /**
 * 获取按钮的标题
 **/
public  get btnSubmitcc_KnowledgeStuTeachLog():string {
const strValue = refcc_KnowledgeStuTeachLog_Edit.value.strSubmitButtonText;
return strValue;
}
 /**
 * 设置确定按钮的标题(Used In AddNewRecord())
 **/
public  set btnSubmitcc_KnowledgeStuTeachLog(value: string) {
refcc_KnowledgeStuTeachLog_Edit.value.strSubmitButtonText = value;
}
}
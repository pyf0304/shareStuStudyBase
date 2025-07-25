
 /**
 * 类名:gs_RelaTypeVueShare(界面:gs_RelaTypeCRUD,01120184)
 * 表名:gs_RelaType(01120871)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 09:55:17
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsgs_RelaTypeENEx } from "@/ts/L0Entity/Knowledges/clsgs_RelaTypeENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsgs_RelaTypeEN } from "@/ts/L0Entity/Knowledges/clsgs_RelaTypeEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortgs_RelaTypeBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortgs_RelaTypeBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refgs_RelaType_Edit = ref ();
const refgs_RelaType_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refgs_RelaType_Edit,
refgs_RelaType_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refgs_RelaType_Edit,
refgs_RelaType_List, };

export const showErrorMessage = ref (false);
export const dataListgs_RelaType = ref<Array<clsgs_RelaTypeENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const gs_RelaTypeCache: { [key: string]: clsgs_RelaTypeENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const relaTypeName_q = ref('');
const qryVarSet = reactive({
 relaTypeName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinegs_RelaTypeCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( relaTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_RelaTypeEN.con_RelaTypeName, relaTypeName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinegs_RelaTypeCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_RelaTypeConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_RelaTypeCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( relaTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_RelaTypeEN.con_RelaTypeName, relaTypeName_q.value);
objgs_RelaTypeCond.SetCondFldValue(clsgs_RelaTypeEN.con_RelaTypeName, relaTypeName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinegs_RelaTypeConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_RelaTypeCond.whereCond = strWhereCond;
return objgs_RelaTypeCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_RelaTypeConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_RelaTypeCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( relaTypeName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_RelaTypeEN.con_RelaTypeName, relaTypeName_q.value);
objgs_RelaTypeCond.SetCondFldValue(clsgs_RelaTypeEN.con_RelaTypeName, relaTypeName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinegs_RelaTypeConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_RelaTypeCond.whereCond = strWhereCond;
return objgs_RelaTypeCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsgs_RelaTypeENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListgs_RelaType.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refgs_RelaType_List.value != null) refgs_RelaType_List.value.selectAllChecked = false;
};

export  function gs_RelaType_DeleteKeyIdCache( strRelaTypeId:string):void
{


if (
IsNullOrEmpty(strRelaTypeId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strRelaTypeId }`;
delete gs_RelaTypeCache[cacheKey];
return;
}
}
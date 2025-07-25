
 /**
 * 类名:XzMajorVueShare(界面:XzMajorCRUD,01120117)
 * 表名:XzMajor(01120065)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:24:32
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsXzMajorENEx } from "@/ts/L0Entity/BaseInfo/clsXzMajorENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsXzMajorEN } from "@/ts/L0Entity/BaseInfo/clsXzMajorEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortXzMajorBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortXzMajorBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refXzMajor_Edit = ref ();
const refXzMajor_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refXzMajor_Edit,
refXzMajor_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refXzMajor_Edit,
refXzMajor_List, };

export const showErrorMessage = ref (false);
export const dataListXzMajor = ref<Array<clsXzMajorENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const xzMajorCache: { [key: string]: clsXzMajorENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const majorId_q = ref('');
export const majorName_q = ref('');
export const idXzCollege_q = ref('');
const qryVarSet = reactive({
 majorId_q,
 majorName_q,
 idXzCollege_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineXzMajorCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( majorId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorEN.con_MajorId, majorId_q.value);
}
if ( majorName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorEN.con_MajorName, majorName_q.value);
}
if ( idXzCollege_q.value != "" && idXzCollege_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsXzMajorEN.con_IdXzCollege, idXzCollege_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineXzMajorCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineXzMajorConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objXzMajorCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( majorId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorEN.con_MajorId, majorId_q.value);
objXzMajorCond.SetCondFldValue(clsXzMajorEN.con_MajorId, majorId_q.value, "like");
}
if ( majorName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorEN.con_MajorName, majorName_q.value);
objXzMajorCond.SetCondFldValue(clsXzMajorEN.con_MajorName, majorName_q.value, "like");
}
if ( idXzCollege_q.value != "" && idXzCollege_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsXzMajorEN.con_IdXzCollege, idXzCollege_q.value);
objXzMajorCond.SetCondFldValue(clsXzMajorEN.con_IdXzCollege, idXzCollege_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineXzMajorConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objXzMajorCond.whereCond = strWhereCond;
return objXzMajorCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineXzMajorConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objXzMajorCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( majorId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorEN.con_MajorId, majorId_q.value);
objXzMajorCond.SetCondFldValue(clsXzMajorEN.con_MajorId, majorId_q.value, "like");
}
if ( majorName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorEN.con_MajorName, majorName_q.value);
objXzMajorCond.SetCondFldValue(clsXzMajorEN.con_MajorName, majorName_q.value, "like");
}
if ( idXzCollege_q.value != "" && idXzCollege_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsXzMajorEN.con_IdXzCollege, idXzCollege_q.value);
objXzMajorCond.SetCondFldValue(clsXzMajorEN.con_IdXzCollege, idXzCollege_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineXzMajorConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objXzMajorCond.whereCond = strWhereCond;
return objXzMajorCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsXzMajorENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListXzMajor.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refXzMajor_List.value != null) refXzMajor_List.value.selectAllChecked = false;
};

export  function XzMajor_DeleteKeyIdCache( strIdXzMajor:string):void
{


if (
IsNullOrEmpty(strIdXzMajor) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdXzMajor }`;
delete xzMajorCache[cacheKey];
return;
}
}
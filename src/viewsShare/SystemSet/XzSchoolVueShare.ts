
 /**
 * 类名:XzSchoolVueShare(界面:XzSchoolCRUD,01120260)
 * 表名:XzSchool(01120029)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:33:23
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsXzSchoolENEx } from "@/ts/L0Entity/SystemSet/clsXzSchoolENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsXzSchoolEN } from "@/ts/L0Entity/SystemSet/clsXzSchoolEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortXzSchoolBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortXzSchoolBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refXzSchool_Edit = ref ();
const refXzSchool_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refXzSchool_Edit,
refXzSchool_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refXzSchool_Edit,
refXzSchool_List, };

export const showErrorMessage = ref (false);
export const dataListXzSchool = ref<Array<clsXzSchoolENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const xzSchoolCache: { [key: string]: clsXzSchoolENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const idSchool_q = ref('');
export const schoolId_q = ref('');
export const schoolName_q = ref('');
export const schoolTypeId_q = ref('');
export const isCurrentUse_q = ref('0')
const qryVarSet = reactive({
 idSchool_q,
 schoolId_q,
 schoolName_q,
 schoolTypeId_q,
 isCurrentUse_q,});
export { qryVarSet };

//功能区变量定义
export const schoolTypeId_f = ref('');
const featureVarSet = reactive({
 schoolTypeId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineXzSchoolCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( idSchool_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_IdSchool, idSchool_q.value);
}
if ( schoolId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_SchoolId, schoolId_q.value);
}
if ( schoolName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_SchoolName, schoolName_q.value);
}
if ( schoolTypeId_q.value != "" && schoolTypeId_q.value != "0")
{
strWhereCond += Format(" And XzSchool.{0} = '{1}'", clsXzSchoolEN.con_SchoolTypeId, schoolTypeId_q.value);
}
if (isCurrentUse_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsXzSchoolEN.con_IsCurrentUse); 
}
else if (isCurrentUse_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsXzSchoolEN.con_IsCurrentUse);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineXzSchoolCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineXzSchoolConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objXzSchoolCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idSchool_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_IdSchool, idSchool_q.value);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_IdSchool, idSchool_q.value, "like");
}
if ( schoolId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_SchoolId, schoolId_q.value);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_SchoolId, schoolId_q.value, "like");
}
if ( schoolName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_SchoolName, schoolName_q.value);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_SchoolName, schoolName_q.value, "like");
}
if ( schoolTypeId_q.value != "" && schoolTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsXzSchoolEN.con_SchoolTypeId, schoolTypeId_q.value);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_SchoolTypeId, schoolTypeId_q.value, "=");
}
if (isCurrentUse_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsXzSchoolEN.con_IsCurrentUse); 
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_IsCurrentUse, true, "=");
}
else if (isCurrentUse_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsXzSchoolEN.con_IsCurrentUse);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_IsCurrentUse, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineXzSchoolConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objXzSchoolCond.whereCond = strWhereCond;
return objXzSchoolCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineXzSchoolConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objXzSchoolCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idSchool_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_IdSchool, idSchool_q.value);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_IdSchool, idSchool_q.value, "like");
}
if ( schoolId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_SchoolId, schoolId_q.value);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_SchoolId, schoolId_q.value, "like");
}
if ( schoolName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzSchoolEN.con_SchoolName, schoolName_q.value);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_SchoolName, schoolName_q.value, "like");
}
if ( schoolTypeId_q.value != "" && schoolTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsXzSchoolEN.con_SchoolTypeId, schoolTypeId_q.value);
objXzSchoolCond.SetCondFldValue(clsXzSchoolEN.con_SchoolTypeId, schoolTypeId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineXzSchoolConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objXzSchoolCond.whereCond = strWhereCond;
return objXzSchoolCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsXzSchoolENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListXzSchool.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refXzSchool_List.value != null) refXzSchool_List.value.selectAllChecked = false;
};

export  function XzSchool_DeleteKeyIdCache( strIdSchool:string):void
{


if (
IsNullOrEmpty(strIdSchool) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdSchool }`;
delete xzSchoolCache[cacheKey];
return;
}
}
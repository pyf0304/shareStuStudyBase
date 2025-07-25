
 /**
 * 类名:gs_TeachingDateVueShare(界面:gs_TeachingDateCRUD,01120139)
 * 表名:gs_TeachingDate(01120684)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:25:06
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日常运行(DailyRunning)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsgs_TeachingDateENEx } from "@/ts/L0Entity/DailyRunning/clsgs_TeachingDateENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsgs_TeachingDateEN } from "@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortgs_TeachingDateBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortgs_TeachingDateBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdCurrEduCls_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refgs_TeachingDate_Edit = ref ();
const refgs_TeachingDate_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refgs_TeachingDate_Edit,
refgs_TeachingDate_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refgs_TeachingDate_Edit,
refgs_TeachingDate_List, };

export const showErrorMessage = ref (false);
export const dataListgs_TeachingDate = ref<Array<clsgs_TeachingDateENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const gs_TeachingDateCache: { [key: string]: clsgs_TeachingDateENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const startDate_q = ref('');
export const endDate_q = ref('');
const qryVarSet = reactive({
 startDate_q,
 endDate_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinegs_TeachingDateCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( startDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_TeachingDateEN.con_StartDate, startDate_q.value);
}
if ( endDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_TeachingDateEN.con_EndDate, endDate_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinegs_TeachingDateCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_TeachingDateConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_TeachingDateCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( startDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_TeachingDateEN.con_StartDate, startDate_q.value);
objgs_TeachingDateCond.SetCondFldValue(clsgs_TeachingDateEN.con_StartDate, startDate_q.value, "like");
}
if ( endDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_TeachingDateEN.con_EndDate, endDate_q.value);
objgs_TeachingDateCond.SetCondFldValue(clsgs_TeachingDateEN.con_EndDate, endDate_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinegs_TeachingDateConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_TeachingDateCond.whereCond = strWhereCond;
return objgs_TeachingDateCond;
};



/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsgs_TeachingDateENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListgs_TeachingDate.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refgs_TeachingDate_List.value != null) refgs_TeachingDate_List.value.selectAllChecked = false;
};

export  function gs_TeachingDate_DeleteKeyIdCache(strIdCurrEduCls: string,  lngmId:number):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In gs_TeachingDateVueShare.gs_TeachingDate.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(gs_TeachingDateVueShare.gs_TeachingDate.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strIdCurrEduCls }`;
delete gs_TeachingDateCache[cacheKey];
return;
}
}
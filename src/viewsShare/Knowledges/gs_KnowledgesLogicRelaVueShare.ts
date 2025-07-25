
 /**
 * 类名:gs_KnowledgesLogicRelaVueShare(界面:gs_KnowledgesLogicRelaCRUD,01120183)
 * 表名:gs_KnowledgesLogicRela(01120870)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:26:49
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
import { clsgs_KnowledgesLogicRelaENEx } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsgs_KnowledgesLogicRelaEN } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaEN";
import { gs_KnowledgesLogicRelaEx_FuncMapKeyKnowledgeNameA } from '@/ts/L3ForWApiExShare/Knowledges/clsgs_KnowledgesLogicRelaExWApi';
import { gs_KnowledgesLogicRelaEx_FuncMapKeyKnowledgeNameB } from '@/ts/L3ForWApiExShare/Knowledges/clsgs_KnowledgesLogicRelaExWApi';
import { intersectSets } from '@/ts/PubFun/clsCommFunc4Ctrl';

const ascOrDesc4SortFun = ref ('Asc');
const sortgs_KnowledgesLogicRelaBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortgs_KnowledgesLogicRelaBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refgs_KnowledgesLogicRela_Edit = ref ();
const refKnowledgesLogicRela_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refgs_KnowledgesLogicRela_Edit,
refKnowledgesLogicRela_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refgs_KnowledgesLogicRela_Edit,
refKnowledgesLogicRela_List, };

export const showErrorMessage = ref (false);
export const dataListgs_KnowledgesLogicRela = ref<Array<clsgs_KnowledgesLogicRelaENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const gs_KnowledgesLogicRelaCache: { [key: string]: clsgs_KnowledgesLogicRelaENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const knowledgeNameA_q = ref('');
export const knowledgeNameB_q = ref('');
const qryVarSet = reactive({
 knowledgeNameA_q,
 knowledgeNameB_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinegs_KnowledgesLogicRelaCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{

//处理针对扩展字段:[CourseKnowledgeIdA]的查询
const arrCourseKnowledgeIdA = await GetCondition_CourseKnowledgeIdALst_In();
if (arrCourseKnowledgeIdA.length > 0)
{
strWhereCond += Format(" And {0} in ({1})", clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA, arrCourseKnowledgeIdA.join(','));
}
//处理针对扩展字段:[CourseKnowledgeIdB]的查询
const arrCourseKnowledgeIdB = await GetCondition_CourseKnowledgeIdBLst_In();
if (arrCourseKnowledgeIdB.length > 0)
{
strWhereCond += Format(" And {0} in ({1})", clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB, arrCourseKnowledgeIdB.join(','));
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinegs_KnowledgesLogicRelaCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_KnowledgesLogicRelaConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_KnowledgesLogicRelaCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{

//处理针对扩展字段:[CourseKnowledgeIdA]的查询
const arrCourseKnowledgeIdA = await GetCondition_CourseKnowledgeIdALst_In();
if (arrCourseKnowledgeIdA.length > 0)
{
objgs_KnowledgesLogicRelaCond.SetCondFldValue(clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA, arrCourseKnowledgeIdA.join(','), "in");
}
//处理针对扩展字段:[CourseKnowledgeIdB]的查询
const arrCourseKnowledgeIdB = await GetCondition_CourseKnowledgeIdBLst_In();
if (arrCourseKnowledgeIdB.length > 0)
{
objgs_KnowledgesLogicRelaCond.SetCondFldValue(clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB, arrCourseKnowledgeIdB.join(','), "in");
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinegs_KnowledgesLogicRelaConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_KnowledgesLogicRelaCond.whereCond = strWhereCond;
return objgs_KnowledgesLogicRelaCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_KnowledgesLogicRelaConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_KnowledgesLogicRelaCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{

//处理针对扩展字段:[CourseKnowledgeIdA]的查询
const arrCourseKnowledgeIdA = await GetCondition_CourseKnowledgeIdALst_In();
if (arrCourseKnowledgeIdA.length > 0)
{
objgs_KnowledgesLogicRelaCond.SetCondFldValue(clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdA, arrCourseKnowledgeIdA.join(','), "in");
}
//处理针对扩展字段:[CourseKnowledgeIdB]的查询
const arrCourseKnowledgeIdB = await GetCondition_CourseKnowledgeIdBLst_In();
if (arrCourseKnowledgeIdB.length > 0)
{
objgs_KnowledgesLogicRelaCond.SetCondFldValue(clsgs_KnowledgesLogicRelaEN.con_CourseKnowledgeIdB, arrCourseKnowledgeIdB.join(','), "in");
}
}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinegs_KnowledgesLogicRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_KnowledgesLogicRelaCond.whereCond = strWhereCond;
return objgs_KnowledgesLogicRelaCond;
}

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
 export async function GetCondition_CourseKnowledgeIdALst_In(): Promise<Array<string>> 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_KnowledgesLogicRelaCond = new clsgs_KnowledgesLogicRelaENEx();
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
let arrCourseKnowledgeIdAInclude: Array<string> = [];
try
{
if ( knowledgeNameA_q.value != "")
{
objgs_KnowledgesLogicRelaCond.SetCondFldValue(clsgs_KnowledgesLogicRelaENEx.con_KnowledgeNameA, knowledgeNameA_q.value, "like");

const arrCourseKnowledgeIdA_KnowledgeNameA = await gs_KnowledgesLogicRelaEx_FuncMapKeyKnowledgeNameA(objgs_KnowledgesLogicRelaCond);
if (arrCourseKnowledgeIdAInclude.length == 0)
{
arrCourseKnowledgeIdAInclude = arrCourseKnowledgeIdA_KnowledgeNameA.map(x=>x.toString());
}
else
{
arrCourseKnowledgeIdAInclude = intersectSets(arrCourseKnowledgeIdAInclude, arrCourseKnowledgeIdA_KnowledgeNameA.map(x=>x.toString())); 
}
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return arrCourseKnowledgeIdAInclude;
}
 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
 export async function GetCondition_CourseKnowledgeIdBLst_In(): Promise<Array<string>> 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_KnowledgesLogicRelaCond = new clsgs_KnowledgesLogicRelaENEx();
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
let arrCourseKnowledgeIdBInclude: Array<string> = [];
try
{
if ( knowledgeNameB_q.value != "")
{
objgs_KnowledgesLogicRelaCond.SetCondFldValue(clsgs_KnowledgesLogicRelaENEx.con_KnowledgeNameB, knowledgeNameB_q.value, "like");

const arrCourseKnowledgeIdB_KnowledgeNameB = await gs_KnowledgesLogicRelaEx_FuncMapKeyKnowledgeNameB(objgs_KnowledgesLogicRelaCond);
if (arrCourseKnowledgeIdBInclude.length == 0)
{
arrCourseKnowledgeIdBInclude = arrCourseKnowledgeIdB_KnowledgeNameB.map(x=>x.toString());
}
else
{
arrCourseKnowledgeIdBInclude = intersectSets(arrCourseKnowledgeIdBInclude, arrCourseKnowledgeIdB_KnowledgeNameB.map(x=>x.toString())); 
}
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return arrCourseKnowledgeIdBInclude;
}

/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsgs_KnowledgesLogicRelaENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListgs_KnowledgesLogicRela.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refKnowledgesLogicRela_List.value != null) refKnowledgesLogicRela_List.value.selectAllChecked = false;
};

export  function gs_KnowledgesLogicRela_DeleteKeyIdCache(strCourseId: string,  lngmId:number):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In gs_KnowledgesLogicRelaVueShare.gs_KnowledgesLogicRela.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(gs_KnowledgesLogicRelaVueShare.gs_KnowledgesLogicRela.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strCourseId }`;
delete gs_KnowledgesLogicRelaCache[cacheKey];
return;
}
}

 /**
 * 类名:gs_KnowledgesGraphVueShare(界面:gs_KnowledgesGraphCRUD,01120181)
 * 表名:gs_KnowledgesGraph(01120873)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:26:32
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
import { clsgs_KnowledgesGraphENEx } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsgs_KnowledgesGraphEN } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortgs_KnowledgesGraphBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortgs_KnowledgesGraphBy,
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
const refgs_KnowledgesGraph_Edit = ref ();
const refgs_KnowledgesGraph_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refgs_KnowledgesGraph_Edit,
refgs_KnowledgesGraph_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refgs_KnowledgesGraph_Edit,
refgs_KnowledgesGraph_List, };

export const showErrorMessage = ref (false);
export const dataListgs_KnowledgesGraph = ref<Array<clsgs_KnowledgesGraphENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const gs_KnowledgesGraphCache: { [key: string]: clsgs_KnowledgesGraphENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const knowledgeGraphName_q = ref('');
export const courseId_q = ref('');
export const createUser_q = ref('');
export const updDate_q = ref('');
const qryVarSet = reactive({
 knowledgeGraphName_q,
 courseId_q,
 createUser_q,
 updDate_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinegs_KnowledgesGraphCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( knowledgeGraphName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_KnowledgeGraphName, knowledgeGraphName_q.value);
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And gs_KnowledgesGraph.{0} = '{1}'", clsgs_KnowledgesGraphEN.con_CourseId, courseId_q.value);
}
if ( createUser_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_CreateUser, createUser_q.value);
}
if ( updDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_UpdDate, updDate_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinegs_KnowledgesGraphCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_KnowledgesGraphConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_KnowledgesGraphCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( knowledgeGraphName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_KnowledgeGraphName, knowledgeGraphName_q.value);
objgs_KnowledgesGraphCond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_KnowledgeGraphName, knowledgeGraphName_q.value, "like");
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsgs_KnowledgesGraphEN.con_CourseId, courseId_q.value);
objgs_KnowledgesGraphCond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_CourseId, courseId_q.value, "=");
}
if ( createUser_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_CreateUser, createUser_q.value);
objgs_KnowledgesGraphCond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_CreateUser, createUser_q.value, "like");
}
if ( updDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_UpdDate, updDate_q.value);
objgs_KnowledgesGraphCond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_UpdDate, updDate_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinegs_KnowledgesGraphConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_KnowledgesGraphCond.whereCond = strWhereCond;
return objgs_KnowledgesGraphCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_KnowledgesGraphConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_KnowledgesGraphCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( knowledgeGraphName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_KnowledgeGraphName, knowledgeGraphName_q.value);
objgs_KnowledgesGraphCond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_KnowledgeGraphName, knowledgeGraphName_q.value, "like");
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsgs_KnowledgesGraphEN.con_CourseId, courseId_q.value);
objgs_KnowledgesGraphCond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_CourseId, courseId_q.value, "=");
}
if ( createUser_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_CreateUser, createUser_q.value);
objgs_KnowledgesGraphCond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_CreateUser, createUser_q.value, "like");
}
if ( updDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsgs_KnowledgesGraphEN.con_UpdDate, updDate_q.value);
objgs_KnowledgesGraphCond.SetCondFldValue(clsgs_KnowledgesGraphEN.con_UpdDate, updDate_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinegs_KnowledgesGraphConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objgs_KnowledgesGraphCond.whereCond = strWhereCond;
return objgs_KnowledgesGraphCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsgs_KnowledgesGraphENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListgs_KnowledgesGraph.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refgs_KnowledgesGraph_List.value != null) refgs_KnowledgesGraph_List.value.selectAllChecked = false;
};

export  function gs_KnowledgesGraph_DeleteKeyIdCache(strCourseId: string,  strKnowledgeGraphId:string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In gs_KnowledgesGraphVueShare.gs_KnowledgesGraph.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(gs_KnowledgesGraphVueShare.gs_KnowledgesGraph.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strKnowledgeGraphId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strKnowledgeGraphId }_${ strCourseId }`;
delete gs_KnowledgesGraphCache[cacheKey];
return;
}
}

 /**
 * 类名:KnowledgeLearnTotalVueShare(界面:KnowledgeLearnTotalCRUD,01120192)
 * 表名:KnowledgeLearnTotal(01120155)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:27:34
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
import { clsKnowledgeLearnTotalENEx } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnTotalENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsKnowledgeLearnTotalEN } from "@/ts/L0Entity/Knowledges/clsKnowledgeLearnTotalEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortKnowledgeLearnTotalBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortKnowledgeLearnTotalBy,
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
const refKnowledgeLearnTotal_Edit = ref ();
const refKnowledgeLearnTotal_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refKnowledgeLearnTotal_Edit,
refKnowledgeLearnTotal_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refKnowledgeLearnTotal_Edit,
refKnowledgeLearnTotal_List, };

export const showErrorMessage = ref (false);
export const dataListKnowledgeLearnTotal = ref<Array<clsKnowledgeLearnTotalENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const knowledgeLearnTotalCache: { [key: string]: clsKnowledgeLearnTotalENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const userId_q = ref('');
export const courseKnowledgeId_q = ref('');
export const lastLearnDate_q = ref('');
export const recommendedNextReviewDate_q = ref('');
const qryVarSet = reactive({
 userId_q,
 courseKnowledgeId_q,
 lastLearnDate_q,
 recommendedNextReviewDate_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineKnowledgeLearnTotalCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_UserId, userId_q.value);
}
if ( courseKnowledgeId_q.value != "" && courseKnowledgeId_q.value != "0")
{
strWhereCond += Format(" And KnowledgeLearnTotal.{0} = '{1}'", clsKnowledgeLearnTotalEN.con_CourseKnowledgeId, courseKnowledgeId_q.value);
}
if ( lastLearnDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_LastLearnDate, lastLearnDate_q.value);
}
if ( recommendedNextReviewDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate, recommendedNextReviewDate_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineKnowledgeLearnTotalCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineKnowledgeLearnTotalConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objKnowledgeLearnTotalCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_UserId, userId_q.value);
objKnowledgeLearnTotalCond.SetCondFldValue(clsKnowledgeLearnTotalEN.con_UserId, userId_q.value, "like");
}
if ( courseKnowledgeId_q.value != "" && courseKnowledgeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsKnowledgeLearnTotalEN.con_CourseKnowledgeId, courseKnowledgeId_q.value);
objKnowledgeLearnTotalCond.SetCondFldValue(clsKnowledgeLearnTotalEN.con_CourseKnowledgeId, courseKnowledgeId_q.value, "=");
}
if ( lastLearnDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_LastLearnDate, lastLearnDate_q.value);
objKnowledgeLearnTotalCond.SetCondFldValue(clsKnowledgeLearnTotalEN.con_LastLearnDate, lastLearnDate_q.value, "like");
}
if ( recommendedNextReviewDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate, recommendedNextReviewDate_q.value);
objKnowledgeLearnTotalCond.SetCondFldValue(clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate, recommendedNextReviewDate_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineKnowledgeLearnTotalConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objKnowledgeLearnTotalCond.whereCond = strWhereCond;
return objKnowledgeLearnTotalCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineKnowledgeLearnTotalConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objKnowledgeLearnTotalCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( userId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_UserId, userId_q.value);
objKnowledgeLearnTotalCond.SetCondFldValue(clsKnowledgeLearnTotalEN.con_UserId, userId_q.value, "like");
}
if ( courseKnowledgeId_q.value != "" && courseKnowledgeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsKnowledgeLearnTotalEN.con_CourseKnowledgeId, courseKnowledgeId_q.value);
objKnowledgeLearnTotalCond.SetCondFldValue(clsKnowledgeLearnTotalEN.con_CourseKnowledgeId, courseKnowledgeId_q.value, "=");
}
if ( lastLearnDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_LastLearnDate, lastLearnDate_q.value);
objKnowledgeLearnTotalCond.SetCondFldValue(clsKnowledgeLearnTotalEN.con_LastLearnDate, lastLearnDate_q.value, "like");
}
if ( recommendedNextReviewDate_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate, recommendedNextReviewDate_q.value);
objKnowledgeLearnTotalCond.SetCondFldValue(clsKnowledgeLearnTotalEN.con_RecommendedNextReviewDate, recommendedNextReviewDate_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineKnowledgeLearnTotalConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objKnowledgeLearnTotalCond.whereCond = strWhereCond;
return objKnowledgeLearnTotalCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsKnowledgeLearnTotalENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListKnowledgeLearnTotal.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refKnowledgeLearnTotal_List.value != null) refKnowledgeLearnTotal_List.value.selectAllChecked = false;
};

export  function KnowledgeLearnTotal_DeleteKeyIdCache(strCourseId: string,  lngmId:number):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In KnowledgeLearnTotalVueShare.KnowledgeLearnTotal.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(KnowledgeLearnTotalVueShare.KnowledgeLearnTotal.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strCourseId }`;
delete knowledgeLearnTotalCache[cacheKey];
return;
}
}
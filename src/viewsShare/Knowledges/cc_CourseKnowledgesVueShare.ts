
 /**
 * 类名:cc_CourseKnowledgesVueShare(界面:cc_CourseKnowledgesCRUD,01120180)
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:26:24
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
import { clscc_CourseKnowledgesENEx } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clscc_CourseKnowledgesEN } from "@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortcc_CourseKnowledgesBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortcc_CourseKnowledgesBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const CourseChapterId_Static = ref("");//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refcc_CourseKnowledges_Edit = ref ();
const refcc_CourseKnowledges_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refcc_CourseKnowledges_Edit,
refcc_CourseKnowledges_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refcc_CourseKnowledges_Edit,
refcc_CourseKnowledges_List, };

export const showErrorMessage = ref (false);
export const dataListcc_CourseKnowledges = ref<Array<clscc_CourseKnowledgesENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const cc_CourseKnowledgesCache: { [key: string]: clscc_CourseKnowledgesENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const knowledgeTitle_q = ref('');
export const courseChapterId_q = ref('');
export const knowledgeModuleId_q = ref('');
export const knowledgeTypeId_q = ref('');
export const courseId_q = ref('');
export const levelNo_q = ref(0);
export const inUse_q = ref('0')
export const kpSourceId_q = ref('');
const qryVarSet = reactive({
 knowledgeTitle_q,
 courseChapterId_q,
 knowledgeModuleId_q,
 knowledgeTypeId_q,
 courseId_q,
 levelNo_q,
 inUse_q,
 kpSourceId_q,});
export { qryVarSet };

//功能区变量定义
export const knowledgeModuleId_f = ref('');
export const courseChapterId_f = ref('');
export const orderNum_f = ref(0);
export const inUse_f = ref('0')
export const kpSourceId_f = ref('');
const featureVarSet = reactive({
 knowledgeModuleId_f,
 courseChapterId_f,
 orderNum_f,
 inUse_f,
 kpSourceId_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinecc_CourseKnowledgesCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( knowledgeTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseKnowledgesEN.con_KnowledgeTitle, knowledgeTitle_q.value);
}
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And cc_CourseKnowledges.{0} = '{1}'", clscc_CourseKnowledgesEN.con_CourseChapterId, courseChapterId_q.value);
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And cc_CourseKnowledges.{0} = '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeModuleId, knowledgeModuleId_q.value);
}
if ( knowledgeTypeId_q.value != "" && knowledgeTypeId_q.value != "0")
{
strWhereCond += Format(" And cc_CourseKnowledges.{0} = '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeTypeId, knowledgeTypeId_q.value);
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And cc_CourseKnowledges.{0} = '{1}'", clscc_CourseKnowledgesEN.con_CourseId, courseId_q.value);
}
if (levelNo_q.value != 0)
{
strWhereCond += Format(" And {0} = {1}", clscc_CourseKnowledgesEN.con_LevelNo, levelNo_q.value);
}
if (inUse_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clscc_CourseKnowledgesEN.con_InUse); 
}
else if (inUse_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clscc_CourseKnowledgesEN.con_InUse);
}
if ( kpSourceId_q.value != "" && kpSourceId_q.value != "0")
{
strWhereCond += Format(" And cc_CourseKnowledges.{0} = '{1}'", clscc_CourseKnowledgesEN.con_KpSourceId, kpSourceId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinecc_CourseKnowledgesCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseKnowledgesConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseKnowledgesCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( knowledgeTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseKnowledgesEN.con_KnowledgeTitle, knowledgeTitle_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_KnowledgeTitle, knowledgeTitle_q.value, "like");
}
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_CourseChapterId, courseChapterId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_CourseChapterId, courseChapterId_q.value, "=");
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeModuleId, knowledgeModuleId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_KnowledgeModuleId, knowledgeModuleId_q.value, "=");
}
if ( knowledgeTypeId_q.value != "" && knowledgeTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeTypeId, knowledgeTypeId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_KnowledgeTypeId, knowledgeTypeId_q.value, "=");
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_CourseId, courseId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_CourseId, courseId_q.value, "=");
}
if (levelNo_q.value != 0)
{
strWhereCond += Format(" And {0} = {1}", clscc_CourseKnowledgesEN.con_LevelNo, levelNo_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_LevelNo, levelNo_q.value, "=");
}
if (inUse_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clscc_CourseKnowledgesEN.con_InUse); 
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_InUse, true, "=");
}
else if (inUse_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clscc_CourseKnowledgesEN.con_InUse);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_InUse, false, "=");
}
if ( kpSourceId_q.value != "" && kpSourceId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_KpSourceId, kpSourceId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_KpSourceId, kpSourceId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinecc_CourseKnowledgesConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseKnowledgesCond.whereCond = strWhereCond;
return objcc_CourseKnowledgesCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseKnowledgesConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseKnowledgesCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( knowledgeTitle_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseKnowledgesEN.con_KnowledgeTitle, knowledgeTitle_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_KnowledgeTitle, knowledgeTitle_q.value, "like");
}
if ( courseChapterId_q.value != "" && courseChapterId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_CourseChapterId, courseChapterId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_CourseChapterId, courseChapterId_q.value, "=");
}
if ( knowledgeModuleId_q.value != "" && knowledgeModuleId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeModuleId, knowledgeModuleId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_KnowledgeModuleId, knowledgeModuleId_q.value, "=");
}
if ( knowledgeTypeId_q.value != "" && knowledgeTypeId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_KnowledgeTypeId, knowledgeTypeId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_KnowledgeTypeId, knowledgeTypeId_q.value, "=");
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_CourseId, courseId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_CourseId, courseId_q.value, "=");
}
if (levelNo_q.value != 0)
{
strWhereCond += Format(" And {0} = {1}", clscc_CourseKnowledgesEN.con_LevelNo, levelNo_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_LevelNo, levelNo_q.value, "=");
}
if ( kpSourceId_q.value != "" && kpSourceId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseKnowledgesEN.con_KpSourceId, kpSourceId_q.value);
objcc_CourseKnowledgesCond.SetCondFldValue(clscc_CourseKnowledgesEN.con_KpSourceId, kpSourceId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinecc_CourseKnowledgesConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseKnowledgesCond.whereCond = strWhereCond;
return objcc_CourseKnowledgesCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clscc_CourseKnowledgesENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListcc_CourseKnowledges.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refcc_CourseKnowledges_List.value != null) refcc_CourseKnowledges_List.value.selectAllChecked = false;
};

export  function cc_CourseKnowledges_DeleteKeyIdCache(strCourseId: string,  strCourseKnowledgeId:string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In cc_CourseKnowledgesVueShare.cc_CourseKnowledges.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(cc_CourseKnowledgesVueShare.cc_CourseKnowledges.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strCourseKnowledgeId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strCourseKnowledgeId }_${ strCourseId }`;
delete cc_CourseKnowledgesCache[cacheKey];
return;
}
}
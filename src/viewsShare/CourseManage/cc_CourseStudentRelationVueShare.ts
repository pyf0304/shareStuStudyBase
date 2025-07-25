
 /**
 * 类名:cc_CourseStudentRelationVueShare(界面:cc_CourseStudentRelationCRUD,01120196)
 * 表名:cc_CourseStudentRelation(01120150)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:29:27
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:课程管理(CourseManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clscc_CourseStudentRelationENEx } from "@/ts/L0Entity/CourseManage/clscc_CourseStudentRelationENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clscc_CourseStudentRelationEN } from "@/ts/L0Entity/CourseManage/clscc_CourseStudentRelationEN";
import { Format } from "@/ts/PubFun/clsString";

const ascOrDesc4SortFun = ref ('Asc');
const sortcc_CourseStudentRelationBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortcc_CourseStudentRelationBy,
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
const refcc_CourseStudentRelation_Edit = ref ();
const refcc_CourseStudentRelation_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refcc_CourseStudentRelation_Edit,
refcc_CourseStudentRelation_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refcc_CourseStudentRelation_Edit,
refcc_CourseStudentRelation_List, };

export const showErrorMessage = ref (false);
export const dataListcc_CourseStudentRelation = ref<Array<clscc_CourseStudentRelationENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const cc_CourseStudentRelationCache: { [key: string]: clscc_CourseStudentRelationENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseId_q = ref('');
const qryVarSet = reactive({
 courseId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinecc_CourseStudentRelationCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseStudentRelationEN.con_CourseId, courseId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinecc_CourseStudentRelationCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseStudentRelationConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseStudentRelationCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseStudentRelationEN.con_CourseId, courseId_q.value);
objcc_CourseStudentRelationCond.SetCondFldValue(clscc_CourseStudentRelationEN.con_CourseId, courseId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinecc_CourseStudentRelationConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseStudentRelationCond.whereCond = strWhereCond;
return objcc_CourseStudentRelationCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseStudentRelationConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseStudentRelationCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clscc_CourseStudentRelationEN.con_CourseId, courseId_q.value);
objcc_CourseStudentRelationCond.SetCondFldValue(clscc_CourseStudentRelationEN.con_CourseId, courseId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinecc_CourseStudentRelationConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseStudentRelationCond.whereCond = strWhereCond;
return objcc_CourseStudentRelationCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clscc_CourseStudentRelationENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListcc_CourseStudentRelation.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refcc_CourseStudentRelation_List.value != null) refcc_CourseStudentRelation_List.value.selectAllChecked = false;
};

export  function cc_CourseStudentRelation_DeleteKeyIdCache( lngCourseStudentRelationId:number):void
{


if (
lngCourseStudentRelationId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngCourseStudentRelationId }`;
delete cc_CourseStudentRelationCache[cacheKey];
return;
}
}

 /**
 * 类名:cc_CourseVueShare(界面:cc_CourseCRUD,01120072)
 * 表名:cc_Course(01120056)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:24:05
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:课程学习(CourseLearning)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clscc_CourseENEx } from "@/ts/L0Entity/CourseLearning/clscc_CourseENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clscc_CourseEN } from "@/ts/L0Entity/CourseLearning/clscc_CourseEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortcc_CourseBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortcc_CourseBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refcc_Course_Edit = ref ();
const refcc_Course_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refcc_Course_Edit,
refcc_Course_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refcc_Course_Edit,
refcc_Course_List, };

export const showErrorMessage = ref (false);
export const dataListcc_Course = ref<Array<clscc_CourseENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const cc_CourseCache: { [key: string]: clscc_CourseENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const courseCode_q = ref('');
export const courseName_q = ref('');
const qryVarSet = reactive({
 courseCode_q,
 courseName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinecc_CourseCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( courseCode_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseEN.con_CourseCode, courseCode_q.value);
}
if ( courseName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseEN.con_CourseName, courseName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinecc_CourseCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseCode_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseEN.con_CourseCode, courseCode_q.value);
objcc_CourseCond.SetCondFldValue(clscc_CourseEN.con_CourseCode, courseCode_q.value, "like");
}
if ( courseName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseEN.con_CourseName, courseName_q.value);
objcc_CourseCond.SetCondFldValue(clscc_CourseEN.con_CourseName, courseName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinecc_CourseConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseCond.whereCond = strWhereCond;
return objcc_CourseCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objcc_CourseCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( courseCode_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseEN.con_CourseCode, courseCode_q.value);
objcc_CourseCond.SetCondFldValue(clscc_CourseEN.con_CourseCode, courseCode_q.value, "like");
}
if ( courseName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clscc_CourseEN.con_CourseName, courseName_q.value);
objcc_CourseCond.SetCondFldValue(clscc_CourseEN.con_CourseName, courseName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinecc_CourseConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objcc_CourseCond.whereCond = strWhereCond;
return objcc_CourseCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clscc_CourseENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListcc_Course.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refcc_Course_List.value != null) refcc_Course_List.value.selectAllChecked = false;
};

export  function cc_Course_DeleteKeyIdCache( strCourseId:string):void
{


if (
IsNullOrEmpty(strCourseId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strCourseId }`;
delete cc_CourseCache[cacheKey];
return;
}
}
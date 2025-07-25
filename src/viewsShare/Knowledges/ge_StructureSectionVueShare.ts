
 /**
 * 类名:ge_StructureSectionVueShare(界面:ge_StructureSectionCRUD,01120221)
 * 表名:ge_StructureSection(01120896)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:31:22
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
import { clsge_StructureSectionENEx } from "@/ts/L0Entity/Knowledges/clsge_StructureSectionENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsge_StructureSectionEN } from "@/ts/L0Entity/Knowledges/clsge_StructureSectionEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_StructureSectionBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_StructureSectionBy,
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
const refge_StructureSection_Edit = ref ();
const refge_StructureSection_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_StructureSection_Edit,
refge_StructureSection_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_StructureSection_Edit,
refge_StructureSection_List, };

export const showErrorMessage = ref (false);
export const dataListge_StructureSection = ref<Array<clsge_StructureSectionENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_StructureSectionCache: { [key: string]: clsge_StructureSectionENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const structureSectionName_q = ref('');
const qryVarSet = reactive({
 structureSectionName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_StructureSectionCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( structureSectionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StructureSectionEN.con_StructureSectionName, structureSectionName_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_StructureSectionCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_StructureSectionConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_StructureSectionCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( structureSectionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StructureSectionEN.con_StructureSectionName, structureSectionName_q.value);
objge_StructureSectionCond.SetCondFldValue(clsge_StructureSectionEN.con_StructureSectionName, structureSectionName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_StructureSectionConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_StructureSectionCond.whereCond = strWhereCond;
return objge_StructureSectionCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_StructureSectionConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_StructureSectionCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( structureSectionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsge_StructureSectionEN.con_StructureSectionName, structureSectionName_q.value);
objge_StructureSectionCond.SetCondFldValue(clsge_StructureSectionEN.con_StructureSectionName, structureSectionName_q.value, "like");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_StructureSectionConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_StructureSectionCond.whereCond = strWhereCond;
return objge_StructureSectionCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_StructureSectionENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_StructureSection.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_StructureSection_List.value != null) refge_StructureSection_List.value.selectAllChecked = false;
};

export  function ge_StructureSection_DeleteKeyIdCache(strCourseId: string,  strStructureSectionId:string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In ge_StructureSectionVueShare.ge_StructureSection.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(ge_StructureSectionVueShare.ge_StructureSection.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strStructureSectionId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strStructureSectionId }_${ strCourseId }`;
delete ge_StructureSectionCache[cacheKey];
return;
}
}
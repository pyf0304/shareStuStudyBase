
 /**
 * 类名:gs_KnowledgesLogicVueShare(界面:gs_KnowledgesLogicCRUD,01120182)
 * 表名:gs_KnowledgesLogic(01120872)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:26:41
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
import { clsgs_KnowledgesLogicENEx } from "@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";

const ascOrDesc4SortFun = ref ('Asc');
const sortgs_KnowledgesLogicBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortgs_KnowledgesLogicBy,
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
const refgs_KnowledgesLogic_Edit = ref ();
const refgs_KnowledgesLogic_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refgs_KnowledgesLogic_Edit,
refgs_KnowledgesLogic_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refgs_KnowledgesLogic_Edit,
refgs_KnowledgesLogic_List, };

export const showErrorMessage = ref (false);
export const dataListgs_KnowledgesLogic = ref<Array<clsgs_KnowledgesLogicENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const gs_KnowledgesLogicCache: { [key: string]: clsgs_KnowledgesLogicENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
const qryVarSet = reactive({});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinegs_KnowledgesLogicCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const strWhereCond = " 1 = 1 ";
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_KnowledgesLogicConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_KnowledgesLogicCond = new ConditionCollection();
return objgs_KnowledgesLogicCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinegs_KnowledgesLogicConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objgs_KnowledgesLogicCond = new ConditionCollection();
return objgs_KnowledgesLogicCond;
};


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsgs_KnowledgesLogicENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListgs_KnowledgesLogic.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refgs_KnowledgesLogic_List.value != null) refgs_KnowledgesLogic_List.value.selectAllChecked = false;
};

export  function gs_KnowledgesLogic_DeleteKeyIdCache(strCourseId: string,  lngmId:number):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In gs_KnowledgesLogicVueShare.gs_KnowledgesLogic.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(gs_KnowledgesLogicVueShare.gs_KnowledgesLogic.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngmId != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngmId }_${ strCourseId }`;
delete gs_KnowledgesLogicCache[cacheKey];
return;
}
}
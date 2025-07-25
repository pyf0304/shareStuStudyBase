
 /**
 * 类名:CurrEduClsVueShare(界面:CurrEduClsCRUD,01120118)
 * 表名:CurrEduCls(01120123)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:24:42
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
import { clsCurrEduClsENEx } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsCurrEduClsEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortCurrEduClsBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortCurrEduClsBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IsVisible_Giving = ref(false);//6、定义下拉框条件给定值2

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refCurrEduCls_Edit = ref ();
const refCurrEduCls_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refCurrEduCls_Edit,
refCurrEduCls_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refCurrEduCls_Edit,
refCurrEduCls_List, };

export const showErrorMessage = ref (false);
export const dataListCurrEduCls = ref<Array<clsCurrEduClsENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const currEduClsCache: { [key: string]: clsCurrEduClsENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const currEduClsId_q = ref('');
export const eduClsName_q = ref('');
export const courseId_q = ref('');
const qryVarSet = reactive({
 currEduClsId_q,
 eduClsName_q,
 courseId_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineCurrEduClsCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( currEduClsId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsEN.con_CurrEduClsId, currEduClsId_q.value);
}
if ( eduClsName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsEN.con_EduClsName, eduClsName_q.value);
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And CurrEduCls.{0} = '{1}'", clsCurrEduClsEN.con_CourseId, courseId_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineCurrEduClsCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCurrEduClsConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objCurrEduClsCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( currEduClsId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsEN.con_CurrEduClsId, currEduClsId_q.value);
objCurrEduClsCond.SetCondFldValue(clsCurrEduClsEN.con_CurrEduClsId, currEduClsId_q.value, "like");
}
if ( eduClsName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsEN.con_EduClsName, eduClsName_q.value);
objCurrEduClsCond.SetCondFldValue(clsCurrEduClsEN.con_EduClsName, eduClsName_q.value, "like");
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsEN.con_CourseId, courseId_q.value);
objCurrEduClsCond.SetCondFldValue(clsCurrEduClsEN.con_CourseId, courseId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineCurrEduClsConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objCurrEduClsCond.whereCond = strWhereCond;
return objCurrEduClsCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCurrEduClsConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objCurrEduClsCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( currEduClsId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsEN.con_CurrEduClsId, currEduClsId_q.value);
objCurrEduClsCond.SetCondFldValue(clsCurrEduClsEN.con_CurrEduClsId, currEduClsId_q.value, "like");
}
if ( eduClsName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsEN.con_EduClsName, eduClsName_q.value);
objCurrEduClsCond.SetCondFldValue(clsCurrEduClsEN.con_EduClsName, eduClsName_q.value, "like");
}
if ( courseId_q.value != "" && courseId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsEN.con_CourseId, courseId_q.value);
objCurrEduClsCond.SetCondFldValue(clsCurrEduClsEN.con_CourseId, courseId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineCurrEduClsConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objCurrEduClsCond.whereCond = strWhereCond;
return objCurrEduClsCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsCurrEduClsENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListCurrEduCls.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refCurrEduCls_List.value != null) refCurrEduCls_List.value.selectAllChecked = false;
};

export  function CurrEduCls_DeleteKeyIdCache(strCourseId: string,  strIdCurrEduCls:string):void
{

if (IsNullOrEmpty(strCourseId) == true)
{
  const strMsg = Format("参数:[strCourseId]不能为空!(In CurrEduClsVueShare.CurrEduCls.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strCourseId.length != 8)
{
const strMsg = Format("缓存分类变量:[strCourseId]的长度:[{0}]不正确!(CurrEduClsVueShare.CurrEduCls.ReFreshCache)", strCourseId.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strIdCurrEduCls) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdCurrEduCls }_${ strCourseId }`;
delete currEduClsCache[cacheKey];
return;
}
}
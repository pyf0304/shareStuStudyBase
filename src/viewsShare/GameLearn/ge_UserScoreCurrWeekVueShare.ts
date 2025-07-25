
 /**
 * 类名:ge_UserScoreCurrWeekVueShare(界面:ge_UserScoreCurrWeekCRUD,01120262)
 * 表名:ge_UserScoreCurrWeek(01120989)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:33:40
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsge_UserScoreCurrWeekENEx } from "@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsge_UserScoreCurrWeekEN } from "@/ts/L0Entity/GameLearn/clsge_UserScoreCurrWeekEN";
import { Format } from "@/ts/PubFun/clsString";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_UserScoreCurrWeekBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_UserScoreCurrWeekBy,
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
const refge_UserScoreCurrWeek_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_UserScoreCurrWeek_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_UserScoreCurrWeek_List, };

export const showErrorMessage = ref (false);
export const dataListge_UserScoreCurrWeek = ref<Array<clsge_UserScoreCurrWeekENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_UserScoreCurrWeekCache: { [key: string]: clsge_UserScoreCurrWeekENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const idCurrEduCls_q = ref('');
export const userId_q = ref('');
export const passed_q = ref('0')
const qryVarSet = reactive({
 idCurrEduCls_q,
 userId_q,
 passed_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_UserScoreCurrWeekCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And ge_UserScoreCurrWeek.{0} = '{1}'", clsge_UserScoreCurrWeekEN.con_IdCurrEduCls, idCurrEduCls_q.value);
}
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserScoreCurrWeekEN.con_UserId, userId_q.value);
}
if (passed_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserScoreCurrWeekEN.con_Passed); 
}
else if (passed_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_UserScoreCurrWeekEN.con_Passed);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_UserScoreCurrWeekCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserScoreCurrWeekConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_UserScoreCurrWeekCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserScoreCurrWeekEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objge_UserScoreCurrWeekCond.SetCondFldValue(clsge_UserScoreCurrWeekEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserScoreCurrWeekEN.con_UserId, userId_q.value);
objge_UserScoreCurrWeekCond.SetCondFldValue(clsge_UserScoreCurrWeekEN.con_UserId, userId_q.value, "=");
}
if (passed_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserScoreCurrWeekEN.con_Passed); 
objge_UserScoreCurrWeekCond.SetCondFldValue(clsge_UserScoreCurrWeekEN.con_Passed, true, "=");
}
else if (passed_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_UserScoreCurrWeekEN.con_Passed);
objge_UserScoreCurrWeekCond.SetCondFldValue(clsge_UserScoreCurrWeekEN.con_Passed, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_UserScoreCurrWeekConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_UserScoreCurrWeekCond.whereCond = strWhereCond;
return objge_UserScoreCurrWeekCond;
};



/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_UserScoreCurrWeekENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_UserScoreCurrWeek.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_UserScoreCurrWeek_List.value != null) refge_UserScoreCurrWeek_List.value.selectAllChecked = false;
};

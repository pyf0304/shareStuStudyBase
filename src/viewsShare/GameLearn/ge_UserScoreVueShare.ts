
 /**
 * 类名:ge_UserScoreVueShare(界面:ge_UserScoreCRUD,01120261)
 * 表名:ge_UserScore(01120985)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:33:31
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
import { clsge_UserScoreENEx } from "@/ts/L0Entity/GameLearn/clsge_UserScoreENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsge_UserScoreEN } from "@/ts/L0Entity/GameLearn/clsge_UserScoreEN";
import { Format } from "@/ts/PubFun/clsString";

const ascOrDesc4SortFun = ref ('Asc');
const sortge_UserScoreBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortge_UserScoreBy,
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
const refge_UserScore_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refge_UserScore_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refge_UserScore_List, };

export const showErrorMessage = ref (false);
export const dataListge_UserScore = ref<Array<clsge_UserScoreENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const ge_UserScoreCache: { [key: string]: clsge_UserScoreENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const idCurrEduCls_q = ref('');
export const userId_q = ref('');
export const courseId_q = ref('');
export const passed_q = ref('0')
const qryVarSet = reactive({
 idCurrEduCls_q,
 userId_q,
 courseId_q,
 passed_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  Combinege_UserScoreCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

strWhereCond += Format(" and CourseId ='{0}'", CourseId_Session.value);
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And ge_UserScore.{0} = '{1}'", clsge_UserScoreEN.con_IdCurrEduCls, idCurrEduCls_q.value);
}
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserScoreEN.con_UserId, userId_q.value);
}
if (passed_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserScoreEN.con_Passed); 
}
else if (passed_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_UserScoreEN.con_Passed);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(Combinege_UserScoreCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserScoreConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_UserScoreCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objge_UserScoreCond.SetCondFldValue(clsge_UserScoreEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserScoreEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objge_UserScoreCond.SetCondFldValue(clsge_UserScoreEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserScoreEN.con_UserId, userId_q.value);
objge_UserScoreCond.SetCondFldValue(clsge_UserScoreEN.con_UserId, userId_q.value, "=");
}
if (passed_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsge_UserScoreEN.con_Passed); 
objge_UserScoreCond.SetCondFldValue(clsge_UserScoreEN.con_Passed, true, "=");
}
else if (passed_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsge_UserScoreEN.con_Passed);
objge_UserScoreCond.SetCondFldValue(clsge_UserScoreEN.con_Passed, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(Combinege_UserScoreConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_UserScoreCond.whereCond = strWhereCond;
return objge_UserScoreCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinege_UserScoreConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objge_UserScoreCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
objge_UserScoreCond.SetCondFldValue(clsge_UserScoreEN.con_CourseId, CourseId_Session.value, "=");
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserScoreEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objge_UserScoreCond.SetCondFldValue(clsge_UserScoreEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( userId_q.value != "" && userId_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsge_UserScoreEN.con_UserId, userId_q.value);
objge_UserScoreCond.SetCondFldValue(clsge_UserScoreEN.con_UserId, userId_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(Combinege_UserScoreConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objge_UserScoreCond.whereCond = strWhereCond;
return objge_UserScoreCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsge_UserScoreENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListge_UserScore.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refge_UserScore_List.value != null) refge_UserScore_List.value.selectAllChecked = false;
};

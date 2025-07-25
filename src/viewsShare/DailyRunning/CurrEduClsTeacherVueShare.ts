
 /**
 * 类名:CurrEduClsTeacherVueShare(界面:CurrEduClsTeacherCRUD,01120119)
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 20:09:09
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
import { clsCurrEduClsTeacherENEx } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { clsCurrEduClsTeacherEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN";
import { Format } from "@/ts/PubFun/clsString";

const ascOrDesc4SortFun = ref ('Asc');
const sortCurrEduClsTeacherBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortCurrEduClsTeacherBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdCurrEduCls_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const IdSchool_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refCurrEduClsTeacher_Edit = ref ();
const refCurrEduClsTeacher_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refCurrEduClsTeacher_Edit,
refCurrEduClsTeacher_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refCurrEduClsTeacher_Edit,
refCurrEduClsTeacher_List, };

export const showErrorMessage = ref (false);
export const dataListCurrEduClsTeacher = ref<Array<clsCurrEduClsTeacherENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const currEduClsTeacherCache: { [key: string]: clsCurrEduClsTeacherENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const idCurrEduCls_q = ref('');
export const teacherId_q = ref('');
export const teacherName_q = ref('');
export const schoolTerm_q = ref('');
export const schoolYear_q = ref('');
const qryVarSet = reactive({
 idCurrEduCls_q,
 teacherId_q,
 teacherName_q,
 schoolTerm_q,
 schoolYear_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineCurrEduClsTeacherCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And CurrEduClsTeacher.{0} = '{1}'", clsCurrEduClsTeacherEN.con_IdCurrEduCls, idCurrEduCls_q.value);
}
if ( teacherId_q.value != "")
{
strWhereCond += Format(" And  IdTeacher in (Select IdTeacher from vTeacherInfo_Sim where TeacherId like '%{0}%') ", teacherId_q.value);
}
if ( teacherName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsTeacherENEx.con_TeacherName, teacherName_q.value);
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsTeacherEN.con_SchoolTerm, schoolTerm_q.value);
}
if ( schoolYear_q.value != "" && schoolYear_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsTeacherEN.con_SchoolYear, schoolYear_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineCurrEduClsTeacherCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCurrEduClsTeacherConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objCurrEduClsTeacherCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsTeacherEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( teacherId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsTeacherENEx.con_TeacherId, teacherId_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherENEx.con_TeacherId, teacherId_q.value, "like");
}
if ( teacherName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsTeacherENEx.con_TeacherName, teacherName_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherENEx.con_TeacherName, teacherName_q.value, "like");
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsTeacherEN.con_SchoolTerm, schoolTerm_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherEN.con_SchoolTerm, schoolTerm_q.value, "=");
}
if ( schoolYear_q.value != "" && schoolYear_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsTeacherEN.con_SchoolYear, schoolYear_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherEN.con_SchoolYear, schoolYear_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineCurrEduClsTeacherConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objCurrEduClsTeacherCond.whereCond = strWhereCond;
return objCurrEduClsTeacherCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCurrEduClsTeacherConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objCurrEduClsTeacherCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsTeacherEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( teacherId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsTeacherENEx.con_TeacherId, teacherId_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherENEx.con_TeacherId, teacherId_q.value, "like");
}
if ( teacherName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsTeacherENEx.con_TeacherName, teacherName_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherENEx.con_TeacherName, teacherName_q.value, "like");
}
if ( schoolTerm_q.value != "" && schoolTerm_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsTeacherEN.con_SchoolTerm, schoolTerm_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherEN.con_SchoolTerm, schoolTerm_q.value, "=");
}
if ( schoolYear_q.value != "" && schoolYear_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsTeacherEN.con_SchoolYear, schoolYear_q.value);
objCurrEduClsTeacherCond.SetCondFldValue(clsCurrEduClsTeacherEN.con_SchoolYear, schoolYear_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineCurrEduClsTeacherConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objCurrEduClsTeacherCond.whereCond = strWhereCond;
return objCurrEduClsTeacherCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsCurrEduClsTeacherENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListCurrEduClsTeacher.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refCurrEduClsTeacher_List.value != null) refCurrEduClsTeacher_List.value.selectAllChecked = false;
};

export  function CurrEduClsTeacher_DeleteKeyIdCache( lngIdEduClsTeacher:number):void
{


if (
lngIdEduClsTeacher != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngIdEduClsTeacher }`;
delete currEduClsTeacherCache[cacheKey];
return;
}
}

 /**
 * 类名:TeacherInfoVueShare(界面:TeacherInfoCRUD,01120122)
 * 表名:TeacherInfo(01120093)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:24:58
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsTeacherInfoENEx } from "@/ts/L0Entity/BaseInfo/clsTeacherInfoENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsTeacherInfoEN } from "@/ts/L0Entity/BaseInfo/clsTeacherInfoEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortTeacherInfoBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortTeacherInfoBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const UserTypeId_Session = ref("");//1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refTeacherInfo_Edit = ref ();
const refTeacherInfo_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refTeacherInfo_Edit,
refTeacherInfo_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refTeacherInfo_Edit,
refTeacherInfo_List, };

export const showErrorMessage = ref (false);
export const dataListTeacherInfo = ref<Array<clsTeacherInfoENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const teacherInfoCache: { [key: string]: clsTeacherInfoENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const teacherId_q = ref('');
export const teacherName_q = ref('');
export const idXzCollege_q = ref('');
export const idStaffType_q = ref('');
export const idSchool_q = ref('');
const qryVarSet = reactive({
 teacherId_q,
 teacherName_q,
 idXzCollege_q,
 idStaffType_q,
 idSchool_q,});
export { qryVarSet };

//功能区变量定义
export const idSchool_f = ref('');
const featureVarSet = reactive({
 idSchool_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineTeacherInfoCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( teacherId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsTeacherInfoEN.con_TeacherId, teacherId_q.value);
}
if ( teacherName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsTeacherInfoEN.con_TeacherName, teacherName_q.value);
}
if ( idXzCollege_q.value != "" && idXzCollege_q.value != "0")
{
strWhereCond += Format(" And TeacherInfo.{0} = '{1}'", clsTeacherInfoEN.con_IdXzCollege, idXzCollege_q.value);
}
if ( idStaffType_q.value != "" && idStaffType_q.value != "0")
{
strWhereCond += Format(" And TeacherInfo.{0} = '{1}'", clsTeacherInfoEN.con_IdStaffType, idStaffType_q.value);
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And TeacherInfo.{0} = '{1}'", clsTeacherInfoEN.con_IdSchool, idSchool_q.value);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineTeacherInfoCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTeacherInfoConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objTeacherInfoCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( teacherId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsTeacherInfoEN.con_TeacherId, teacherId_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_TeacherId, teacherId_q.value, "like");
}
if ( teacherName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsTeacherInfoEN.con_TeacherName, teacherName_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_TeacherName, teacherName_q.value, "like");
}
if ( idXzCollege_q.value != "" && idXzCollege_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdXzCollege, idXzCollege_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_IdXzCollege, idXzCollege_q.value, "=");
}
if ( idStaffType_q.value != "" && idStaffType_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdStaffType, idStaffType_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_IdStaffType, idStaffType_q.value, "=");
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdSchool, idSchool_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_IdSchool, idSchool_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineTeacherInfoConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objTeacherInfoCond.whereCond = strWhereCond;
return objTeacherInfoCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTeacherInfoConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objTeacherInfoCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( teacherId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsTeacherInfoEN.con_TeacherId, teacherId_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_TeacherId, teacherId_q.value, "like");
}
if ( teacherName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsTeacherInfoEN.con_TeacherName, teacherName_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_TeacherName, teacherName_q.value, "like");
}
if ( idXzCollege_q.value != "" && idXzCollege_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdXzCollege, idXzCollege_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_IdXzCollege, idXzCollege_q.value, "=");
}
if ( idStaffType_q.value != "" && idStaffType_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdStaffType, idStaffType_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_IdStaffType, idStaffType_q.value, "=");
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdSchool, idSchool_q.value);
objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_IdSchool, idSchool_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineTeacherInfoConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objTeacherInfoCond.whereCond = strWhereCond;
return objTeacherInfoCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsTeacherInfoENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListTeacherInfo.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refTeacherInfo_List.value != null) refTeacherInfo_List.value.selectAllChecked = false;
};

export  function TeacherInfo_DeleteKeyIdCache( strIdTeacher:string):void
{


if (
IsNullOrEmpty(strIdTeacher) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdTeacher }`;
delete teacherInfoCache[cacheKey];
return;
}
}
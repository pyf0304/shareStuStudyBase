
 /**
 * 类名:StudentInfoZxCRUDVueShare(界面:StudentInfoZxCRUD,01120257)
 * 表名:StudentInfo(01120131)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/11 00:33:12
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsStudentInfoENEx } from "@/ts/L0Entity/UserManage/clsStudentInfoENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsStudentInfoEN } from "@/ts/L0Entity/UserManage/clsStudentInfoEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortStudentInfoBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortStudentInfoBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const IdGrade_Static = ref("");//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const IsVisible_Giving = ref(false);//6、定义下拉框条件给定值2

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refStudentInfoZx_Detail = ref ();
const refStudentInfoZx_Edit = ref ();
const refStudentInfoZx_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refStudentInfoZx_Detail,
refStudentInfoZx_Edit,
refStudentInfoZx_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refStudentInfoZx_Detail,
refStudentInfoZx_Edit,
refStudentInfoZx_List, };

export const showErrorMessage = ref (false);
export const dataListStudentInfo = ref<Array<clsStudentInfoENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const studentInfoCache: { [key: string]: clsStudentInfoENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const stuId_q = ref('');
export const stuName_q = ref('');
export const idSex_q = ref('');
export const idGradeBase_q = ref('');
export const idGrade_q = ref('');
export const idAdminCls_q = ref('');
export const idSchool_q = ref('');
export const isGpUser_q = ref('0')
const qryVarSet = reactive({
 stuId_q,
 stuName_q,
 idSex_q,
 idGradeBase_q,
 idGrade_q,
 idAdminCls_q,
 idSchool_q,
 isGpUser_q,});
export { qryVarSet };

//功能区变量定义
export const idGrade_f = ref('');
export const idAdminCls_f = ref('');
export const idSchool_f = ref('');
const featureVarSet = reactive({
 idGrade_f,
 idAdminCls_f,
 idSchool_f,});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineStudentInfoCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( stuId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStudentInfoEN.con_StuId, stuId_q.value);
}
if ( stuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStudentInfoEN.con_StuName, stuName_q.value);
}
if ( idSex_q.value != "" && idSex_q.value != "0")
{
strWhereCond += Format(" And StudentInfo.{0} = '{1}'", clsStudentInfoEN.con_IdSex, idSex_q.value);
}
if ( idGradeBase_q.value != "" && idGradeBase_q.value != "0")
{
strWhereCond += Format(" And StudentInfo.{0} = '{1}'", clsStudentInfoEN.con_IdGradeBase, idGradeBase_q.value);
}
if ( idGrade_q.value != "" && idGrade_q.value != "0")
{
strWhereCond += Format(" And StudentInfo.{0} = '{1}'", clsStudentInfoEN.con_IdGrade, idGrade_q.value);
}
if ( idAdminCls_q.value != "" && idAdminCls_q.value != "0")
{
strWhereCond += Format(" And StudentInfo.{0} = '{1}'", clsStudentInfoEN.con_IdAdminCls, idAdminCls_q.value);
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And StudentInfo.{0} = '{1}'", clsStudentInfoEN.con_IdSchool, idSchool_q.value);
}
if (isGpUser_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsStudentInfoEN.con_IsGpUser); 
}
else if (isGpUser_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsStudentInfoEN.con_IsGpUser);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineStudentInfoCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineStudentInfoConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objStudentInfoCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( stuId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStudentInfoEN.con_StuId, stuId_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_StuId, stuId_q.value, "like");
}
if ( stuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStudentInfoEN.con_StuName, stuName_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_StuName, stuName_q.value, "like");
}
if ( idSex_q.value != "" && idSex_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdSex, idSex_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdSex, idSex_q.value, "=");
}
if ( idGradeBase_q.value != "" && idGradeBase_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdGradeBase, idGradeBase_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdGradeBase, idGradeBase_q.value, "=");
}
if ( idGrade_q.value != "" && idGrade_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdGrade, idGrade_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdGrade, idGrade_q.value, "=");
}
if ( idAdminCls_q.value != "" && idAdminCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdAdminCls, idAdminCls_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdAdminCls, idAdminCls_q.value, "=");
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdSchool, idSchool_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdSchool, idSchool_q.value, "=");
}
if (isGpUser_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsStudentInfoEN.con_IsGpUser); 
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IsGpUser, true, "=");
}
else if (isGpUser_q.value == 'false')
{
strWhereCond += Format(" And {0} = '0'", clsStudentInfoEN.con_IsGpUser);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IsGpUser, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineStudentInfoConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objStudentInfoCond.whereCond = strWhereCond;
return objStudentInfoCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineStudentInfoConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objStudentInfoCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( stuId_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStudentInfoEN.con_StuId, stuId_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_StuId, stuId_q.value, "like");
}
if ( stuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsStudentInfoEN.con_StuName, stuName_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_StuName, stuName_q.value, "like");
}
if ( idSex_q.value != "" && idSex_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdSex, idSex_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdSex, idSex_q.value, "=");
}
if ( idGradeBase_q.value != "" && idGradeBase_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdGradeBase, idGradeBase_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdGradeBase, idGradeBase_q.value, "=");
}
if ( idGrade_q.value != "" && idGrade_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdGrade, idGrade_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdGrade, idGrade_q.value, "=");
}
if ( idAdminCls_q.value != "" && idAdminCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdAdminCls, idAdminCls_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdAdminCls, idAdminCls_q.value, "=");
}
if ( idSchool_q.value != "" && idSchool_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdSchool, idSchool_q.value);
objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdSchool, idSchool_q.value, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineStudentInfoConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objStudentInfoCond.whereCond = strWhereCond;
return objStudentInfoCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsStudentInfoENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListStudentInfo.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refStudentInfoZx_List.value != null) refStudentInfoZx_List.value.selectAllChecked = false;
};

export  function StudentInfo_DeleteKeyIdCache( strIdStudentInfo:string):void
{


if (
IsNullOrEmpty(strIdStudentInfo) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strIdStudentInfo }`;
delete studentInfoCache[cacheKey];
return;
}
}
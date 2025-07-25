
 /**
 * 类名:CurrEduClsStuVueShare(界面:CurrEduClsStuCRUD,01120075)
 * 表名:CurrEduClsStu(01120125)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:24:14
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
import { clsCurrEduClsStuENEx } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsStuENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsCurrEduClsStuEN } from "@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN";
import { CurrEduClsStuEx_FuncMapKeyStuId } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';
import { intersectSets } from '@/ts/PubFun/clsCommFunc4Ctrl';

const ascOrDesc4SortFun = ref ('Asc');
const sortCurrEduClsStuBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortCurrEduClsStuBy,
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
const refCurrEduClsStu_Edit = ref ();
const refCurrEduClsStu_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refCurrEduClsStu_Edit,
refCurrEduClsStu_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refCurrEduClsStu_Edit,
refCurrEduClsStu_List, };

export const showErrorMessage = ref (false);
export const dataListCurrEduClsStu = ref<Array<clsCurrEduClsStuENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const currEduClsStuCache: { [key: string]: clsCurrEduClsStuENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const idCurrEduCls_q = ref('');
export const eduClsName_q = ref('');
export const stuId_q = ref('');
export const stuName_q = ref('');
const qryVarSet = reactive({
 idCurrEduCls_q,
 eduClsName_q,
 stuId_q,
 stuName_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineCurrEduClsStuCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And CurrEduClsStu.{0} = '{1}'", clsCurrEduClsStuEN.con_IdCurrEduCls, idCurrEduCls_q.value);
}
if ( eduClsName_q.value != "")
{
strWhereCond += Format(" And  IdCurrEduCls in (Select IdCurrEduCls from vCurrEduCls_Sim where EduClsName like '%{0}%') ", eduClsName_q.value);
}
if ( stuName_q.value != "")
{
strWhereCond += Format(" And  IdStudentInfo in (Select IdStudentInfo from vStudentInfo_Sim where StuName like '%{0}%') ", stuName_q.value);
}

//处理针对扩展字段:[IdStu]的查询
const arrIdStu = await GetCondition_IdStuLst_In();
if (arrIdStu.length > 0)
{
strWhereCond += Format(" And {0} in ({1})", clsCurrEduClsStuEN.con_IdStu, arrIdStu.join(','));
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineCurrEduClsStuCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCurrEduClsStuConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objCurrEduClsStuCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsStuEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( eduClsName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsStuENEx.con_EduClsName, eduClsName_q.value);
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuENEx.con_EduClsName, eduClsName_q.value, "like");
}
if ( stuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsStuENEx.con_StuName, stuName_q.value);
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuENEx.con_StuName, stuName_q.value, "like");
}

//处理针对扩展字段:[IdStu]的查询
const arrIdStu = await GetCondition_IdStuLst_In();
if (arrIdStu.length > 0)
{
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuEN.con_IdStu, arrIdStu.join(','), "in");
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineCurrEduClsStuConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objCurrEduClsStuCond.whereCond = strWhereCond;
return objCurrEduClsStuCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCurrEduClsStuConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objCurrEduClsStuCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idCurrEduCls_q.value != "" && idCurrEduCls_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsCurrEduClsStuEN.con_IdCurrEduCls, idCurrEduCls_q.value);
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuEN.con_IdCurrEduCls, idCurrEduCls_q.value, "=");
}
if ( eduClsName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsStuENEx.con_EduClsName, eduClsName_q.value);
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuENEx.con_EduClsName, eduClsName_q.value, "like");
}
if ( stuName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsCurrEduClsStuENEx.con_StuName, stuName_q.value);
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuENEx.con_StuName, stuName_q.value, "like");
}

//处理针对扩展字段:[IdStu]的查询
const arrIdStu = await GetCondition_IdStuLst_In();
if (arrIdStu.length > 0)
{
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuEN.con_IdStu, arrIdStu.join(','), "in");
}
}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineCurrEduClsStuConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objCurrEduClsStuCond.whereCond = strWhereCond;
return objCurrEduClsStuCond;
}

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_Ts_CombineConditionInFldValueLst_GeneFun)
 * @returns 相关字段的关键字列表(Array<string>)
 **/
 export async function GetCondition_IdStuLst_In(): Promise<Array<string>> 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objCurrEduClsStuCond = new clsCurrEduClsStuENEx();
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
let arrIdStuInclude: Array<string> = [];
try
{
if ( stuId_q.value != "")
{
objCurrEduClsStuCond.SetCondFldValue(clsCurrEduClsStuENEx.con_StuId, stuId_q.value, "like");

const arrIdStu_StuId = await CurrEduClsStuEx_FuncMapKeyStuId(objCurrEduClsStuCond);
if (arrIdStuInclude.length == 0)
{
arrIdStuInclude = arrIdStu_StuId.map(x=>x.toString());
}
else
{
arrIdStuInclude = intersectSets(arrIdStuInclude, arrIdStu_StuId.map(x=>x.toString())); 
}
}
}
catch(objException)
{
const strMsg:string = Format("在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return arrIdStuInclude;
}

/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsCurrEduClsStuENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListCurrEduClsStu.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refCurrEduClsStu_List.value != null) refCurrEduClsStu_List.value.selectAllChecked = false;
};

export  function CurrEduClsStu_DeleteKeyIdCache(strIdCurrEduCls: string,  lngIdEduClsStu:number):void
{

if (IsNullOrEmpty(strIdCurrEduCls) == true)
{
  const strMsg = Format("参数:[strIdCurrEduCls]不能为空!(In CurrEduClsStuVueShare.CurrEduClsStu.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdCurrEduCls.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(CurrEduClsStuVueShare.CurrEduClsStu.ReFreshCache)", strIdCurrEduCls.length);
console.error(strMsg);
throw (strMsg);
}


if (
lngIdEduClsStu != 0 )
{
// 使用 delete 删除特定的键
const cacheKey = `${ lngIdEduClsStu }_${ strIdCurrEduCls }`;
delete currEduClsStuCache[cacheKey];
return;
}
}
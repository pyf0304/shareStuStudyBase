
 /**
 * 类名:XzMajorDirectionVueShare(界面:XzMajorDirectionCRUD,01120090)
 * 表名:XzMajorDirection(01120552)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 22:24:23
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
import { clsXzMajorDirectionENEx } from "@/ts/L0Entity/BaseInfo/clsXzMajorDirectionENEx";
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty,Format } from "@/ts/PubFun/clsString";
import { clsXzMajorDirectionEN } from "@/ts/L0Entity/BaseInfo/clsXzMajorDirectionEN";

const ascOrDesc4SortFun = ref ('Asc');
const sortXzMajorDirectionBy = ref ('');
const viewVarSet = reactive({
ascOrDesc4SortFun,
sortXzMajorDirectionBy,
});
export { viewVarSet };


//界面公共变量，可以在多个相关界面中共享
export const IdXzMajor_Cache = ref("");//5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref ();
const refDivQuery = ref ();
const refDivFunction = ref ();
const refDivList = ref ();
const refDivEdit = ref ();
const refDivDetail = ref ();
const refXzMajorDirection_Edit = ref ();
const refvXzMajorDirection_List = ref ();
const divVarSet = reactive({
 refDivLayout,
refDivQuery,
refDivFunction,
refDivList,
refDivEdit,
refDivDetail,
refXzMajorDirection_Edit,
refvXzMajorDirection_List,});
export { divVarSet, refDivLayout,refDivQuery,refDivFunction,refDivList,refDivEdit,refDivDetail,
refXzMajorDirection_Edit,
refvXzMajorDirection_List, };

export const showErrorMessage = ref (false);
export const dataListXzMajorDirection = ref<Array<clsXzMajorDirectionENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>> ([]);
export const emptyRecNumInfo = ref ('');
export const xzMajorDirectionCache: { [key: string]: clsXzMajorDirectionENEx } = { };
export const isFuncMapCache: { [key: string]: boolean } = { };

//查询区变量定义
export const idXzMajor_q = ref('');
export const majorDirectionName_q = ref('');
export const majorDirectionENName_q = ref('');
export const isVisible_q = ref('0')
const qryVarSet = reactive({
 idXzMajor_q,
 majorDirectionName_q,
 majorDirectionENName_q,
 isVisible_q,});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };


 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const  CombineXzMajorDirectionCondition = async():Promise<string> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

try
{
if ( idXzMajor_q.value != "" && idXzMajor_q.value != "0")
{
strWhereCond += Format(" And XzMajorDirection.{0} = '{1}'", clsXzMajorDirectionEN.con_IdXzMajor, idXzMajor_q.value);
}
if ( majorDirectionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorDirectionEN.con_MajorDirectionName, majorDirectionName_q.value);
}
if ( majorDirectionENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorDirectionEN.con_MajorDirectionENName, majorDirectionENName_q.value);
}
if (isVisible_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsXzMajorDirectionEN.con_IsVisible);
}
else
{
strWhereCond += Format(" And {0} = '0'", clsXzMajorDirectionEN.con_IsVisible);
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件(CombineXzMajorDirectionCondition)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
return strWhereCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineXzMajorDirectionConditionObj=async (): Promise<ConditionCollection> =>
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objXzMajorDirectionCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idXzMajor_q.value != "" && idXzMajor_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsXzMajorDirectionEN.con_IdXzMajor, idXzMajor_q.value);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_IdXzMajor, idXzMajor_q.value, "=");
}
if ( majorDirectionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorDirectionEN.con_MajorDirectionName, majorDirectionName_q.value);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_MajorDirectionName, majorDirectionName_q.value, "like");
}
if ( majorDirectionENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorDirectionEN.con_MajorDirectionENName, majorDirectionENName_q.value);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_MajorDirectionENName, majorDirectionENName_q.value, "like");
}
if (isVisible_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsXzMajorDirectionEN.con_IsVisible);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_IsVisible, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsXzMajorDirectionEN.con_IsVisible);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_IsVisible, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合查询条件对象(CombineXzMajorDirectionConditionObj)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objXzMajorDirectionCond.whereCond = strWhereCond;
return objXzMajorDirectionCond;
};

 /** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineXzMajorDirectionConditionObj4ExportExcel = async ():Promise<ConditionCollection> => 
{
//使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
//例如 1 = 1 && UserName = '张三'
const objXzMajorDirectionCond = new ConditionCollection();
let strWhereCond = " 1 = 1 ";
//如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
try
{
if ( idXzMajor_q.value != "" && idXzMajor_q.value != "0")
{
strWhereCond += Format(" And {0} = '{1}'", clsXzMajorDirectionEN.con_IdXzMajor, idXzMajor_q.value);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_IdXzMajor, idXzMajor_q.value, "=");
}
if ( majorDirectionName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorDirectionEN.con_MajorDirectionName, majorDirectionName_q.value);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_MajorDirectionName, majorDirectionName_q.value, "like");
}
if ( majorDirectionENName_q.value != "")
{
strWhereCond += Format(" And {0} like '%{1}%'", clsXzMajorDirectionEN.con_MajorDirectionENName, majorDirectionENName_q.value);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_MajorDirectionENName, majorDirectionENName_q.value, "like");
}
if (isVisible_q.value == 'true')
{
strWhereCond += Format(" And {0} = '1'", clsXzMajorDirectionEN.con_IsVisible);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_IsVisible, true, "=");
}
else
{
strWhereCond += Format(" And {0} = '0'", clsXzMajorDirectionEN.con_IsVisible);
objXzMajorDirectionCond.SetCondFldValue(clsXzMajorDirectionEN.con_IsVisible, false, "=");
}

}
catch(objException)
{
const strMsg:string = Format("在组合导出Excel条件对象(CombineXzMajorDirectionConditionObj4ExportExcel)时出错!请联系管理员!{0}", objException);
throw strMsg;
}
objXzMajorDirectionCond.whereCond = strWhereCond;
return objXzMajorDirectionCond;
}


/**
 * 通过List组件来绑定表数据
*/
export const BindTabByList = async(
arrObjLst: Array<clsXzMajorDirectionENEx>,
bolIsShowErrMsg: boolean,
): Promise<void> => {
dataListXzMajorDirection.value = arrObjLst;
showErrorMessage.value = bolIsShowErrMsg;
if (refvXzMajorDirection_List.value != null) refvXzMajorDirection_List.value.selectAllChecked = false;
};

export  function XzMajorDirection_DeleteKeyIdCache(strIdXzMajor: string,  strMajorDirectionId:string):void
{

if (IsNullOrEmpty(strIdXzMajor) == true)
{
  const strMsg = Format("参数:[strIdXzMajor]不能为空!(In XzMajorDirectionVueShare.XzMajorDirection.ReFreshCache)");
console.error(strMsg);
 throw (strMsg);
}
if (strIdXzMajor.length != 8)
{
const strMsg = Format("缓存分类变量:[strIdXzMajor]的长度:[{0}]不正确!(XzMajorDirectionVueShare.XzMajorDirection.ReFreshCache)", strIdXzMajor.length);
console.error(strMsg);
throw (strMsg);
}


if (
IsNullOrEmpty(strMajorDirectionId) == false )
{
// 使用 delete 删除特定的键
const cacheKey = `${ strMajorDirectionId }_${ strIdXzMajor }`;
delete xzMajorDirectionCache[cacheKey];
return;
}
}
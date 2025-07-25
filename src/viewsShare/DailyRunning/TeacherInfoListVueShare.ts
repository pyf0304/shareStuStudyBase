/**
 * 类名:TeacherInfoCRUDVueShare(界面:TeacherInfoCRUD,01120257)
 * 表名:TeacherInfo(01120131)
 * 版本:2024.11.25.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/27 11:16:50
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clsTeacherInfoENEx } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoENEx';
import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';

const ascOrDesc4SortFun = ref('Asc');
const sortTeacherInfoBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortTeacherInfoBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const IdGrade_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const IdCurrEduCls_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const UserTypeId_Session = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const pageType = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refTeacherInfo_Detail = ref();
const refTeacherInfo_Edit = ref();
const refTeacherInfo_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refTeacherInfo_Detail,
  refTeacherInfo_Edit,
  refTeacherInfo_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refTeacherInfo_Detail,
  refTeacherInfo_Edit,
  refTeacherInfo_List,
};

export const showErrorMessage = ref(false);
export const dataListTeacherInfo = ref<Array<clsTeacherInfoENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const TeacherId_q = ref('');
export const TeacherName_q = ref('');
export const idSex_q = ref('');
export const idGradeBase_q = ref('');
export const idGrade_q = ref('');
export const idAdminCls_q = ref('');
export const idXzCollege_q = ref('');

const qryVarSet = reactive({
  TeacherId_q,
  TeacherName_q,
  idSex_q,
  idGradeBase_q,
  idGrade_q,
  idAdminCls_q,
  idXzCollege_q,
});
export { qryVarSet };

//功能区变量定义
export const idGrade_f = ref('');
export const idAdminCls_f = ref('');
const featureVarSet = reactive({
  idGrade_f,
  idAdminCls_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTeacherInfoCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (TeacherId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTeacherInfoEN.con_TeacherId,
        TeacherId_q.value,
      );
    }
    if (TeacherName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTeacherInfoEN.con_TeacherName,
        TeacherName_q.value,
      );
    }
    if (idSex_q.value != '' && idSex_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdSex, idSex_q.value);
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineTeacherInfoCondition)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  return strWhereCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTeacherInfoConditionObj = async (): Promise<clsTeacherInfoEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objTeacherInfoCond = new clsTeacherInfoEN();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (TeacherId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTeacherInfoEN.con_TeacherId,
        TeacherId_q.value,
      );
      objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_TeacherId, TeacherId_q.value, 'like');
    }
    if (TeacherName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTeacherInfoEN.con_TeacherName,
        TeacherName_q.value,
      );
      objTeacherInfoCond.SetCondFldValue(
        clsTeacherInfoEN.con_TeacherName,
        TeacherName_q.value,
        'like',
      );
    }
    if (idSex_q.value != '' && idSex_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdSex, idSex_q.value);
      objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_IdSex, idSex_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineTeacherInfoConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objTeacherInfoCond.whereCond = strWhereCond;
  return objTeacherInfoCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineTeacherInfoConditionObj4ExportExcel = async (): Promise<clsTeacherInfoEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objTeacherInfoCond = new clsTeacherInfoENEx();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (TeacherId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTeacherInfoEN.con_TeacherId,
        TeacherId_q.value,
      );
      objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_TeacherId, TeacherId_q.value, 'like');
    }
    if (TeacherName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsTeacherInfoEN.con_TeacherName,
        TeacherName_q.value,
      );
      objTeacherInfoCond.SetCondFldValue(
        clsTeacherInfoEN.con_TeacherName,
        TeacherName_q.value,
        'like',
      );
    }
    if (idSex_q.value != '' && idSex_q.value != '0') {
      strWhereCond += Format(" And {0} = '{1}'", clsTeacherInfoEN.con_IdSex, idSex_q.value);
      objTeacherInfoCond.SetCondFldValue(clsTeacherInfoEN.con_IdSex, idSex_q.value, '=');
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合导出Excel条件对象(CombineTeacherInfoConditionObj4ExportExcel)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objTeacherInfoCond.whereCond = strWhereCond;
  return objTeacherInfoCond;
};

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsTeacherInfoENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListTeacherInfo.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};

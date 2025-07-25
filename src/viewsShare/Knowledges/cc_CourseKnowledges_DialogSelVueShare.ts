/**
 * 类名:cc_CourseKnowledgesVueShare(界面:cc_CourseKnowledgesCRUD,01120180)
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2025.02.16.1(服务器:WIN-SRV103-116)
 * 日期:2025/02/16 09:21:50
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
import { clscc_CourseKnowledgesENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';

const ascOrDesc4SortFun = ref('Asc');
const sortcc_CourseKnowledgesBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortcc_CourseKnowledgesBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Session = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储
export const CourseChapterId_Static = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

export const addiCondition = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refcc_CourseKnowledges_Edit = ref();
const refcc_CourseKnowledges_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refcc_CourseKnowledges_Edit,
  refcc_CourseKnowledges_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refcc_CourseKnowledges_Edit,
  refcc_CourseKnowledges_List,
};

export const showErrorMessage = ref(false);
export const dataListcc_CourseKnowledges = ref<Array<clscc_CourseKnowledgesENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const knowledgeTitle_q = ref('');
export const courseChapterId_q = ref('');
export const knowledgeModuleId_q = ref('');
export const knowledgeTypeId_q = ref('');
export const courseId_q = ref('');
const qryVarSet = reactive({
  knowledgeTitle_q,
  courseChapterId_q,
  knowledgeModuleId_q,
  knowledgeTypeId_q,
  courseId_q,
});
export { qryVarSet };

//功能区变量定义
export const knowledgeModuleId_f = ref('');
export const courseChapterId_f = ref('');
export const orderNum_f = ref(0);
const featureVarSet = reactive({
  knowledgeModuleId_f,
  courseChapterId_f,
  orderNum_f,
});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseKnowledgesCondition_DialogSel = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += ` and ${clscc_CourseKnowledgesEN.con_CourseId} = '${CourseId_Session.value}'`;
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (addiCondition.value != '') {
    strWhereCond += ` and ${addiCondition.value}`;
  }

  try {
    if (knowledgeTitle_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clscc_CourseKnowledgesEN.con_KnowledgeTitle,
        knowledgeTitle_q.value,
      );
    }
    if (courseChapterId_q.value != '' && courseChapterId_q.value != '0') {
      strWhereCond += Format(
        " And cc_CourseKnowledges.{0} = '{1}'",
        clscc_CourseKnowledgesEN.con_CourseChapterId,
        courseChapterId_q.value,
      );
    }
    if (knowledgeModuleId_q.value != '' && knowledgeModuleId_q.value != '0') {
      strWhereCond += Format(
        " And cc_CourseKnowledges.{0} = '{1}'",
        clscc_CourseKnowledgesEN.con_KnowledgeModuleId,
        knowledgeModuleId_q.value,
      );
    }
    if (knowledgeTypeId_q.value != '' && knowledgeTypeId_q.value != '0') {
      strWhereCond += Format(
        " And cc_CourseKnowledges.{0} = '{1}'",
        clscc_CourseKnowledgesEN.con_KnowledgeTypeId,
        knowledgeTypeId_q.value,
      );
    }
    if (courseId_q.value != '' && courseId_q.value != '0') {
      strWhereCond += Format(
        " And cc_CourseKnowledges.{0} = '{1}'",
        clscc_CourseKnowledgesEN.con_CourseId,
        courseId_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(Combinecc_CourseKnowledgesCondition)时出错!请联系管理员!{0}',
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
export const Combinecc_CourseKnowledgesConditionObj_DialogSel =
  async (): Promise<clscc_CourseKnowledgesEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objcc_CourseKnowledgesCond = new clscc_CourseKnowledgesEN();
    let strWhereCond = ' 1 = 1 ';
    if (addiCondition.value != '') {
      strWhereCond += ` and ${addiCondition.value}`;
    }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (knowledgeTitle_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clscc_CourseKnowledgesEN.con_KnowledgeTitle,
          knowledgeTitle_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeTitle,
          knowledgeTitle_q.value,
          'like',
        );
      }
      if (courseChapterId_q.value != '' && courseChapterId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_CourseKnowledgesEN.con_CourseChapterId,
          courseChapterId_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_CourseChapterId,
          courseChapterId_q.value,
          '=',
        );
      }
      if (knowledgeModuleId_q.value != '' && knowledgeModuleId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_CourseKnowledgesEN.con_KnowledgeModuleId,
          knowledgeModuleId_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeModuleId,
          knowledgeModuleId_q.value,
          '=',
        );
      }
      if (knowledgeTypeId_q.value != '' && knowledgeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_CourseKnowledgesEN.con_KnowledgeTypeId,
          knowledgeTypeId_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeTypeId,
          knowledgeTypeId_q.value,
          '=',
        );
      }
      if (courseId_q.value != '' && courseId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_CourseKnowledgesEN.con_CourseId,
          courseId_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_CourseId,
          courseId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合查询条件对象(Combinecc_CourseKnowledgesConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objcc_CourseKnowledgesCond.whereCond = strWhereCond;
    return objcc_CourseKnowledgesCond;
  };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const Combinecc_CourseKnowledgesConditionObj4ExportExcel =
  async (): Promise<clscc_CourseKnowledgesEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objcc_CourseKnowledgesCond = new clscc_CourseKnowledgesENEx();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (knowledgeTitle_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clscc_CourseKnowledgesEN.con_KnowledgeTitle,
          knowledgeTitle_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeTitle,
          knowledgeTitle_q.value,
          'like',
        );
      }
      if (courseChapterId_q.value != '' && courseChapterId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_CourseKnowledgesEN.con_CourseChapterId,
          courseChapterId_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_CourseChapterId,
          courseChapterId_q.value,
          '=',
        );
      }
      if (knowledgeModuleId_q.value != '' && knowledgeModuleId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_CourseKnowledgesEN.con_KnowledgeModuleId,
          knowledgeModuleId_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeModuleId,
          knowledgeModuleId_q.value,
          '=',
        );
      }
      if (knowledgeTypeId_q.value != '' && knowledgeTypeId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_CourseKnowledgesEN.con_KnowledgeTypeId,
          knowledgeTypeId_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_KnowledgeTypeId,
          knowledgeTypeId_q.value,
          '=',
        );
      }
      if (courseId_q.value != '' && courseId_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clscc_CourseKnowledgesEN.con_CourseId,
          courseId_q.value,
        );
        objcc_CourseKnowledgesCond.SetCondFldValue(
          clscc_CourseKnowledgesEN.con_CourseId,
          courseId_q.value,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(Combinecc_CourseKnowledgesConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objcc_CourseKnowledgesCond.whereCond = strWhereCond;
    return objcc_CourseKnowledgesCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clscc_CourseKnowledgesENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListcc_CourseKnowledges.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refcc_CourseKnowledges_List.value != null)
    refcc_CourseKnowledges_List.value.selectAllChecked = false;
};

/**
 * 类名:KnowledgeMasterLevelVueShare(界面:KnowledgeMasterLevelCRUD,01120215)
 * 表名:KnowledgeMasterLevel(01120891)
 * 版本:2025.06.10.1(服务器:PYF-AI)
 * 日期:2025/06/11 01:26:51
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/

import { reactive, ref } from 'vue';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsKnowledgeMasterLevelENEx } from '@/ts/L0Entity/Knowledges/clsKnowledgeMasterLevelENEx';
import { ConditionCollection } from '@/ts/PubFun/ConditionCollection';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsKnowledgeMasterLevelEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeMasterLevelEN';

const ascOrDesc4SortFun = ref('Asc');
const sortKnowledgeMasterLevelBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortKnowledgeMasterLevelBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refKnowledgeMasterLevel_Edit = ref();
const refKnowledgeMasterLevel_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refKnowledgeMasterLevel_Edit,
  refKnowledgeMasterLevel_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refKnowledgeMasterLevel_Edit,
  refKnowledgeMasterLevel_List,
};

export const showErrorMessage = ref(false);
export const dataListKnowledgeMasterLevel = ref<Array<clsKnowledgeMasterLevelENEx>>([]);
export const dataColumn = ref<Array<clsDataColumn>>([]);
export const emptyRecNumInfo = ref('');
export const knowledgeMasterLevelCache: { [key: string]: clsKnowledgeMasterLevelENEx } = {};
export const isFuncMapCache: { [key: string]: boolean } = {};

//查询区变量定义
export const masterLevelId_q = ref('');
export const masterLevelName_q = ref('');
const qryVarSet = reactive({
  masterLevelId_q,
  masterLevelName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineKnowledgeMasterLevelCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (masterLevelId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsKnowledgeMasterLevelEN.con_MasterLevelId,
        masterLevelId_q.value,
      );
    }
    if (masterLevelName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsKnowledgeMasterLevelEN.con_MasterLevelName,
        masterLevelName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineKnowledgeMasterLevelCondition)时出错!请联系管理员!{0}',
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
export const CombineKnowledgeMasterLevelConditionObj = async (): Promise<ConditionCollection> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  const objKnowledgeMasterLevelCond = new ConditionCollection();
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (masterLevelId_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsKnowledgeMasterLevelEN.con_MasterLevelId,
        masterLevelId_q.value,
      );
      objKnowledgeMasterLevelCond.SetCondFldValue(
        clsKnowledgeMasterLevelEN.con_MasterLevelId,
        masterLevelId_q.value,
        'like',
      );
    }
    if (masterLevelName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsKnowledgeMasterLevelEN.con_MasterLevelName,
        masterLevelName_q.value,
      );
      objKnowledgeMasterLevelCond.SetCondFldValue(
        clsKnowledgeMasterLevelEN.con_MasterLevelName,
        masterLevelName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineKnowledgeMasterLevelConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objKnowledgeMasterLevelCond.whereCond = strWhereCond;
  return objKnowledgeMasterLevelCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineKnowledgeMasterLevelConditionObj4ExportExcel =
  async (): Promise<ConditionCollection> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objKnowledgeMasterLevelCond = new ConditionCollection();
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (masterLevelId_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsKnowledgeMasterLevelEN.con_MasterLevelId,
          masterLevelId_q.value,
        );
        objKnowledgeMasterLevelCond.SetCondFldValue(
          clsKnowledgeMasterLevelEN.con_MasterLevelId,
          masterLevelId_q.value,
          'like',
        );
      }
      if (masterLevelName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsKnowledgeMasterLevelEN.con_MasterLevelName,
          masterLevelName_q.value,
        );
        objKnowledgeMasterLevelCond.SetCondFldValue(
          clsKnowledgeMasterLevelEN.con_MasterLevelName,
          masterLevelName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineKnowledgeMasterLevelConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objKnowledgeMasterLevelCond.whereCond = strWhereCond;
    return objKnowledgeMasterLevelCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsKnowledgeMasterLevelENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListKnowledgeMasterLevel.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
  if (refKnowledgeMasterLevel_List.value != null)
    refKnowledgeMasterLevel_List.value.selectAllChecked = false;
};

export function KnowledgeMasterLevel_DeleteKeyIdCache(strMasterLevelId: string): void {
  if (IsNullOrEmpty(strMasterLevelId) == false) {
    // 使用 delete 删除特定的键
    const cacheKey = `${strMasterLevelId}`;
    delete knowledgeMasterLevelCache[cacheKey];
    return;
  }
}

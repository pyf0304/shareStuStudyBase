/**
 * 类名:CurrEduClsStuVueShare(界面:CurrEduClsStuCRUD,01120075)
 * 表名:CurrEduClsStu(01120125)
 * 版本:2024.11.28.1(服务器:WIN-SRV103-116)
 * 日期:2024/12/04 16:53:10
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日常运行(DailyRunning)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';
import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
import { clsCurrEduClsStuENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuENEx';

const ascOrDesc4SortFun = ref('Asc');
const sortCurrEduClsStuBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortCurrEduClsStuBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享
export const CourseId_Cache = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
export const IdCurrEduCls_Cache = ref(''); //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
//界面公共变量，可以在多个相关界面中共享
export const QxPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList_Teacher = ref();
const refDivList_Stu = ref();

const refDivEdit = ref();
const refDivDetail = ref();
const refCurrEduClsStu_Edit = ref();
const refCurrEduClsStu_List = ref();

const refStudentInfoList = ref();
const TeacherInfoListRef = ref();

const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList_Teacher,
  refDivList_Stu,
  refDivEdit,
  refDivDetail,
  refCurrEduClsStu_Edit,
  refCurrEduClsStu_List,
  refStudentInfoList,
  TeacherInfoListRef,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList_Teacher,
  refDivList_Stu,
  refDivEdit,
  refDivDetail,
  refCurrEduClsStu_Edit,
  refCurrEduClsStu_List,
  refStudentInfoList,
  TeacherInfoListRef,
};

export const showErrorMessage = ref(false);
export const dataListCurrEduClsStu = ref<Array<clsCurrEduClsStuENEx>>([]);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const idCurrEduCls_q = ref('');
export const eduClsName_q = ref('');
export const courseName_q = ref('');
const qryVarSet = reactive({
  idCurrEduCls_q,
  eduClsName_q,
  courseName_q,
});
export { qryVarSet };
//功能区变量定义
export const roleId_Stu_f = ref('');
export const roleId_Tea_f = ref('');
const featureVarSet = reactive({
  roleId_Stu_f,
  roleId_Tea_f,
});
//功能区变量定义

export { featureVarSet };

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineCondition)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCurrEduClsStuCondition = async (): Promise<string> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

  try {
    if (idCurrEduCls_q.value != '' && idCurrEduCls_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCurrEduClsStuEN.con_IdCurrEduCls,
        idCurrEduCls_q.value,
      );
    }
    if (eduClsName_q.value != '') {
      strWhereCond += Format(
        " And  IdCurrEduCls in (Select IdCurrEduCls from vCurrEduCls_Sim where EduClsName like '%{0}%') ",
        eduClsName_q.value,
      );
    }
    if (courseName_q.value != '') {
      strWhereCond += Format(
        " And  IdCurrEduCls in (Select IdCurrEduCls from vCurrEduCls_Sim where CourseId like '%{0}%') ",
        courseName_q.value,
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件(CombineCurrEduClsStuCondition)时出错!请联系管理员!{0}',
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
export const CombineCurrEduClsStuConditionObj = async (): Promise<clsCurrEduClsStuEN> => {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  const objCurrEduClsStuCond = new clsCurrEduClsStuEN();
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  try {
    if (idCurrEduCls_q.value != '' && idCurrEduCls_q.value != '0') {
      strWhereCond += Format(
        " And {0} = '{1}'",
        clsCurrEduClsStuEN.con_IdCurrEduCls,
        idCurrEduCls_q.value,
      );
      objCurrEduClsStuCond.SetCondFldValue(
        clsCurrEduClsStuEN.con_IdCurrEduCls,
        idCurrEduCls_q.value,
        '=',
      );
    }
    if (eduClsName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCurrEduClsStuENEx.con_EduClsName,
        eduClsName_q.value,
      );
      objCurrEduClsStuCond.SetCondFldValue(
        clsCurrEduClsStuENEx.con_EduClsName,
        eduClsName_q.value,
        'like',
      );
    }
    if (courseName_q.value != '') {
      strWhereCond += Format(
        " And {0} like '%{1}%'",
        clsCurrEduClsStuENEx.con_CourseName,
        courseName_q.value,
      );
      objCurrEduClsStuCond.SetCondFldValue(
        clsCurrEduClsStuENEx.con_CourseName,
        courseName_q.value,
        'like',
      );
    }
  } catch (objException) {
    const strMsg: string = Format(
      '在组合查询条件对象(CombineCurrEduClsStuConditionObj)时出错!请联系管理员!{0}',
      objException,
    );
    throw strMsg;
  }
  objCurrEduClsStuCond.whereCond = strWhereCond;
  return objCurrEduClsStuCond;
};

/** 把所有的查询控件内容组合成一个条件串
 * (AutoGCLib.Vue_Share_TS4TypeScript:Gen_vue_ts_setup_fun_CombineConditionObj4ExportExcel)
 * @returns 条件串(strWhereCond)
 **/
export const CombineCurrEduClsStuConditionObj4ExportExcel =
  async (): Promise<clsCurrEduClsStuEN> => {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objCurrEduClsStuCond = new clsCurrEduClsStuENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (idCurrEduCls_q.value != '' && idCurrEduCls_q.value != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCurrEduClsStuEN.con_IdCurrEduCls,
          idCurrEduCls_q.value,
        );
        objCurrEduClsStuCond.SetCondFldValue(
          clsCurrEduClsStuEN.con_IdCurrEduCls,
          idCurrEduCls_q.value,
          '=',
        );
      }
      if (eduClsName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsCurrEduClsStuENEx.con_EduClsName,
          eduClsName_q.value,
        );
        objCurrEduClsStuCond.SetCondFldValue(
          clsCurrEduClsStuENEx.con_EduClsName,
          eduClsName_q.value,
          'like',
        );
      }
      if (courseName_q.value != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsCurrEduClsStuENEx.con_CourseName,
          courseName_q.value,
        );
        objCurrEduClsStuCond.SetCondFldValue(
          clsCurrEduClsStuENEx.con_CourseName,
          courseName_q.value,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '在组合导出Excel条件对象(CombineCurrEduClsStuConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objCurrEduClsStuCond.whereCond = strWhereCond;
    return objCurrEduClsStuCond;
  };

/**
 * 通过List组件来绑定表数据
 */
export const BindTabByList = async (
  arrObjLst: Array<clsCurrEduClsStuENEx>,
  bolIsShowErrMsg: boolean,
): Promise<void> => {
  dataListCurrEduClsStu.value = arrObjLst;
  showErrorMessage.value = bolIsShowErrMsg;
};

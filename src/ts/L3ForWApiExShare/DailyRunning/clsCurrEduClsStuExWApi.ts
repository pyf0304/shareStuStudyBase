import { Storage } from '@/utils/Storage';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';

import {
  ObjectAssign,
  GetSortExpressInfo,
  GetObjKeys,
  BindDdl_ObjLstInDivObj,
  BindDdl_ObjLstInDiv_V,
  BindDdl_ObjLstInDivObj_V,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  CurrEduClsStu_GetObjLstAsync,
  CurrEduClsStu_SortFunByKey,
  CurrEduClsStu_FilterFunByKey,
  CurrEduClsStu_UpdateRecordAsync,
  CurrEduClsStu_AddNewRecordAsync,
  CurrEduClsStu_IsExistRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
import { clsCurrEduClsStuENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuENEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import StudentInfoCRUD from '@/viewsShare/UserManage/StudentInfoCRUD.vue';
import { StudentInfo_GetObjLstByIdStudentInfoLstAsync } from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { StudentInfoEx_CopyToEx } from '@/ts/L3ForWApiExShare/UserManage/clsStudentInfoExWApi';
import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';

import {
  vStudentInfo_Sim_func,
  vStudentInfo_Sim_funcKey,
} from '@/ts/L3ForWApi/UserManage/clsvStudentInfo_SimWApi.js';
import { clsvStudentInfo_SimEN } from '@/ts/L0Entity/UserManage/clsvStudentInfo_SimEN.js';

import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi.js';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN.js';
import {
  cc_CourseType_func,
  cc_CourseType_funcKey,
} from '@/ts/L3ForWApi/CourseLearning/clscc_CourseTypeWApi.js';
import { clscc_CourseTypeEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseTypeEN.js';
import { XzMajor_func, XzMajor_funcKey } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi.js';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN.js';
import {
  vCurrEduCls_Sim_func,
  vCurrEduCls_Sim_funcKey,
  vCurrEduCls_Sim_GetObjLstCache,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
import { clsvCurrEduCls_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { XzGrade_func, XzGrade_funcKey } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
import { XzAdminCls_func, XzAdminCls_funcKey } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
import { GetA_Empty, GetDiv_Empty, GetSpan_Empty } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { QxRoles_GetNameByRoleIdCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { useUserStore } from '@/store/modulesShare/user';

export const currEduClsStuEx_Controller = 'CurrEduClsStuExApi';
export const currEduClsStuEx_ConstructorName = 'currEduClsStuEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function CurrEduClsStuEx_GetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objCurrEduClsStuENS:源对象
 * @returns 目标对象=>clsCurrEduClsStuEN:objCurrEduClsStuENT
 **/
export function CurrEduClsStuEx_CopyToEx(
  objCurrEduClsStuENS: clsCurrEduClsStuEN,
): clsCurrEduClsStuENEx {
  const strThisFuncName = CurrEduClsStuEx_CopyToEx.name;
  const objCurrEduClsStuENT = new clsCurrEduClsStuENEx();
  try {
    ObjectAssign(objCurrEduClsStuENT, objCurrEduClsStuENS);
    return objCurrEduClsStuENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objCurrEduClsStuENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function CurrEduClsStuEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsCurrEduClsStuENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrCurrEduClsStuObjLst = await CurrEduClsStu_GetObjLstAsync(objPagerPara.whereCond);
  const arrCurrEduClsStuExObjLst = arrCurrEduClsStuObjLst.map(CurrEduClsStuEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsCurrEduClsStuEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrCurrEduClsStuExObjLst) {
      await CurrEduClsStuEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrCurrEduClsStuExObjLst.length == 0) return arrCurrEduClsStuExObjLst;
  let arrCurrEduClsStuSel: Array<clsCurrEduClsStuENEx> = arrCurrEduClsStuExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(
        CurrEduClsStuEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrCurrEduClsStuSel = arrCurrEduClsStuSel.sort(objPagerPara.sortFun);
    }
    arrCurrEduClsStuSel = arrCurrEduClsStuSel.slice(intStart, intEnd);
    return arrCurrEduClsStuSel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsCurrEduClsStuENEx>();
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-08-26
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function CurrEduClsStuEx_FilterFunByKey(strKey: string, value: any) {
  switch (strKey) {
    case clsCurrEduClsStuENEx.con_StuName:
      return (obj: clsCurrEduClsStuENEx) => {
        return obj.stuName === value;
      };
    default:
      return CurrEduClsStu_FilterFunByKey(strKey, value);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 * @param stridCurrEduCls:教学班流水号
 */
export async function CurrEduClsStuEx_BindDdl_IdStuByIdCurrEduClsInDivExCache(
  divName: HTMLDivElement,
  strDdlName: string,
  stridCurrEduCls: string,
) {
  // const strThisFuncName = 'BindDdl_id_StuByidCurrEduClsInDiv_Cache';

  if (IsNullOrEmpty(stridCurrEduCls) == true) {
    const strMsg = Format('参数:[stridCurrEduCls]不能为空！(In BindDdl_id_StuByidCurrEduClsInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (stridCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[stridCurrEduCls]的长度:[{0}]不正确！',
      stridCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_id_StuByidCurrEduClsInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_StuByidCurrEduClsInDiv_Cache");
  let arrObjLst_Sel = await CurrEduClsStu_GetObjLstAsync(
    `${clsCurrEduClsStuEN.con_IdCurrEduCls} = '${stridCurrEduCls}'`,
  );
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.idCurrEduCls == stridCurrEduCls);
  const arrIdStu = arrObjLst_Sel.map((x) => x.idStu);
  const arrStudenetInfo = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(arrIdStu);

  BindDdl_ObjLstInDivObj(
    divName,
    strDdlName,
    arrStudenetInfo,
    clsStudentInfoEN.con_IdStudentInfo,
    clsStudentInfoEN.con_StuName,
    '教学班学生',
  );
}

export async function CurrEduClsStuEx_BindDdl_IdStuWithStuIdByIdCurrEduClsInDivExCache(
  divName: HTMLDivElement,
  strDdlName: string,
  stridCurrEduCls: string,
) {
  // const strThisFuncName = 'BindDdl_id_StuByidCurrEduClsInDiv_Cache';

  if (IsNullOrEmpty(stridCurrEduCls) == true) {
    const strMsg = Format('参数:[stridCurrEduCls]不能为空！(In BindDdl_id_StuByidCurrEduClsInDiv)');
    console.error(strMsg);
    throw strMsg;
  }
  if (stridCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[stridCurrEduCls]的长度:[{0}]不正确！',
      stridCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_id_StuByidCurrEduClsInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_StuByidCurrEduClsInDiv_Cache");
  let arrObjLst_Sel = await CurrEduClsStu_GetObjLstAsync(
    `${clsCurrEduClsStuEN.con_IdCurrEduCls} = '${stridCurrEduCls}'`,
  );
  if (arrObjLst_Sel == null) return;
  arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.idCurrEduCls == stridCurrEduCls);
  const arrIdStu = arrObjLst_Sel.map((x) => x.idStu);
  const arrStudenetInfo = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(arrIdStu);
  const arrStudenetInfoEx = arrStudenetInfo.map(StudentInfoEx_CopyToEx);
  arrStudenetInfoEx.forEach((x) => (x.stuNameEx = `${x.stuId}-${x.stuName}`));
  BindDdl_ObjLstInDivObj(
    divName,
    strDdlName,
    arrStudenetInfoEx,
    clsStudentInfoEN.con_IdStudentInfo,
    clsStudentInfoENEx.con_StuNameEx,
    '教学班学生',
  );
}
/**
 * 根据学生Id获取教学班流水号列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strStuId: 学号
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsStuEx_GetIdCurrEduClsListByStuId(
  strStuId: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetidCurrEduClsListByStuId';
  const strAction = 'GetidCurrEduClsListByStuId';
  const strUrl = CurrEduClsStuEx_GetWebApiUrl(currEduClsStuEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { strStuId },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          currEduClsStuEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = returnObjLst;
      return arrObjLst;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        currEduClsStuEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        currEduClsStuEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
type CurrEduClsStuEx_GetStuIDLstByIdCurrEduClsType = (
  strIdCurrEduCls: string,
) => Promise<Array<string>>;

/**
 * 根据教学班流水号获取学生Id列表
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdCurrEduCls: 教学班流水号
 * @returns 获取的相应对象列表
 */
const CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls: CurrEduClsStuEx_GetStuIDLstByIdCurrEduClsType =
  async (strIdCurrEduCls: string) => {
    const strThisFuncName = 'GetStuIDLstByIdCurrEduCls';
    const strAction = 'GetStuIDLstByIdCurrEduCls';
    const strUrl = CurrEduClsStuEx_GetWebApiUrl(currEduClsStuEx_Controller, strAction);
    //const mapParam: Dictionary = new Dictionary();
    //mapParam.add("strIdCurrEduCls", strIdCurrEduCls);
    //let strData = mapParam.getParamText();// "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strIdCurrEduCls },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            currEduClsStuEx_Controller,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = returnObjLst;
        return arrObjLst;
      } else {
        console.error(data.errorMsg);
        throw data.errorMsg;
      }
    } catch (error: any) {
      console.error(error);
      if (error.statusText == undefined) {
        throw error;
      }
      if (error.statusText == 'error') {
        const strInfo = Format(
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          currEduClsStuEx_Controller,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          currEduClsStuEx_Controller,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  };

/**
 * 绑定基于Web的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框
 */
export async function CurrEduClsStuEx_BindDdl_IdCurrEduClsByStuIdInDivCache(
  divName: HTMLDivElement,
  strDdlName: string,
  strStuId: string,
) {
  const strCourseId = clsPubLocalStorage.courseId;
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在！(In BindDdl_idCurrEduClsInDiv_Cache)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_idCurrEduClsInDiv_Cache');
  const arrObjLst_Sel: Array<clsvCurrEduCls_SimEN> = await vCurrEduCls_Sim_GetObjLstCache(
    strCourseId,
  );

  const arrIdCurrEduClsLst = await CurrEduClsStuEx_GetIdCurrEduClsListByStuId(strStuId);
  const arrObjLst_Sel2 = arrObjLst_Sel.filter(
    (x) => arrIdCurrEduClsLst.indexOf(x.idCurrEduCls) > -1,
  );

  BindDdl_ObjLstInDivObj_V(
    divName,
    strDdlName,
    arrObjLst_Sel2,
    clsCurrEduClsEN.con_IdCurrEduCls,
    clsCurrEduClsEN.con_EduClsName,
    '教学班',
  );
}

export async function CurrEduClsStuEx_UpdateLastVisitedDate(
  strIdCurrEduCls: string,
  strIdStu: string,
): Promise<boolean> {
  const strThisFuncName = CurrEduClsStuEx_UpdateLastVisitedDate.name;

  const arr = await CurrEduClsStu_GetObjLstAsync(
    `${clsCurrEduClsStuEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`,
  );
  const objCurrEduClsStu = arr.find((x) => x.idStu == strIdStu);

  if (objCurrEduClsStu == null) {
    const strMsg = Format(
      '根据IdCurrEduCls:[{0}], IdStu:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strIdCurrEduCls,
      strIdStu,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }

  objCurrEduClsStu.SetLastVisitedDate(clsDateTime.getTodayDateTimeStr(0));
  objCurrEduClsStu.SetIdEduClsStu(objCurrEduClsStu.idEduClsStu);
  const bolIsSuccess = await CurrEduClsStu_UpdateRecordAsync(objCurrEduClsStu);

  return bolIsSuccess;
}

export async function CurrEduClsStuEx_GetLastVisitedDate(
  strIdCurrEduCls: string,
  strIdStu: string,
): Promise<string> {
  const strThisFuncName = CurrEduClsStuEx_GetLastVisitedDate.name;

  const arr = await CurrEduClsStu_GetObjLstAsync(
    `${clsCurrEduClsStuEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`,
  );
  const objCurrEduClsStu = arr.find((x) => x.idStu == strIdStu);
  if (objCurrEduClsStu == null) {
    const strMsg = Format(
      '根据IdCurrEduCls:[{0}], IdStu:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strIdCurrEduCls,
      strIdStu,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    // alert(strMsg);
    return '';
  }
  return objCurrEduClsStu.lastVisitedDate;
}

/**
 * 添加学生Id到教学班
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strIdStu: 学生流水号
 * @param strIdCurrEduCls: 教学班流水号
 * @param strOperator: 操作者
 * @returns 获取的相应对象列表
 */
export async function CurrEduClsStuEx_AddId_Stu4EduCls(
  strIdStu: string,
  strIdCurrEduCls: string,
  strOperator: string,
): Promise<boolean> {
  const strThisFuncName = CurrEduClsStuEx_AddId_Stu4EduCls.name;
  const strAction = 'AddId_Stu4EduCls';
  const strUrl = CurrEduClsStuEx_GetWebApiUrl(currEduClsStuEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStu,
      strIdCurrEduCls,
      strOperator,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnBool;
    } else {
      console.error(data.errorMsg);
      throw data.errorMsg;
    }
  } catch (error: any) {
    console.error(error);
    if (error.statusText == undefined) {
      throw error;
    }
    if (error.statusText == 'error') {
      const strInfo = Format(
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        currEduClsStuEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        currEduClsStuEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapStuName(objCurrEduClsStu: clsCurrEduClsStuENEx) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapStuName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.stuName) == true) {
      const vStudentInfoSimIdStudentInfo = objCurrEduClsStu.idStu;
      const vStudentInfoSimStuName = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_StuName,
        vStudentInfoSimIdStudentInfo,
        objCurrEduClsStu.idCurrEduCls,
      );
      objCurrEduClsStu.stuName = vStudentInfoSimStuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000680)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapEduClsName(objCurrEduClsStu: clsCurrEduClsStuENEx) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapEduClsName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.eduClsName) == true) {
      const vCurrEduClsSimIdCurrEduCls = objCurrEduClsStu.idCurrEduCls;
      const vCurrEduClsSimEduClsName = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_EduClsName,
        vCurrEduClsSimIdCurrEduCls,
        clsPubLocalStorage.courseId,
      );
      objCurrEduClsStu.eduClsName = vCurrEduClsSimEduClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000534)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapCourseTypeName(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapCourseTypeName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.courseTypeName) == true) {
      const vCurrEduClsSimIdCurrEduCls = objCurrEduClsStu.idCurrEduCls;
      const vCurrEduClsSimCourseId = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_CourseId,
        vCurrEduClsSimIdCurrEduCls,
        clsPubLocalStorage.courseId,
      );
      const vccCourseSimCourseId = vCurrEduClsSimCourseId;
      const vccCourseSimCourseTypeId = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseTypeId,
        vccCourseSimCourseId,
      );
      const ccCourseTypeCourseTypeId = vccCourseSimCourseTypeId;
      const ccCourseTypeCourseTypeName = await cc_CourseType_func(
        clscc_CourseTypeEN.con_CourseTypeId,
        clscc_CourseTypeEN.con_CourseTypeName,
        ccCourseTypeCourseTypeId,
      );
      objCurrEduClsStu.courseTypeName = ccCourseTypeCourseTypeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000550)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapCourseName(objCurrEduClsStu: clsCurrEduClsStuENEx) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapCourseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.courseName) == true) {
      const vCurrEduClsSimIdCurrEduCls = objCurrEduClsStu.idCurrEduCls;
      const vCurrEduClsSimCourseId = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_CourseId,
        vCurrEduClsSimIdCurrEduCls,
        clsPubLocalStorage.courseId,
      );
      const vccCourseSimCourseId = vCurrEduClsSimCourseId;
      const vccCourseSimCourseName = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseName,
        vccCourseSimCourseId,
      );
      objCurrEduClsStu.courseName = vccCourseSimCourseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000535)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapCourseCode(objCurrEduClsStu: clsCurrEduClsStuENEx) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapCourseCode.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.courseCode) == true) {
      const vCurrEduClsSimIdCurrEduCls = objCurrEduClsStu.idCurrEduCls;
      const vCurrEduClsSimCourseId = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_CourseId,
        vCurrEduClsSimIdCurrEduCls,
        clsPubLocalStorage.courseId,
      );
      const vccCourseSimCourseId = vCurrEduClsSimCourseId;
      const vccCourseSimCourseCode = await vcc_Course_Sim_func(
        clsvcc_Course_SimEN.con_CourseId,
        clsvcc_Course_SimEN.con_CourseCode,
        vccCourseSimCourseId,
      );
      objCurrEduClsStu.courseCode = vccCourseSimCourseCode;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000932)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapMajorName(objCurrEduClsStu: clsCurrEduClsStuENEx) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.majorName) == true) {
      const vCurrEduClsSimIdCurrEduCls = objCurrEduClsStu.idCurrEduCls;
      const vCurrEduClsSimIdXzMajor = await vCurrEduCls_Sim_func(
        clsvCurrEduCls_SimEN.con_IdCurrEduCls,
        clsvCurrEduCls_SimEN.con_IdXzMajor,
        vCurrEduClsSimIdCurrEduCls,
        clsPubLocalStorage.courseId,
      );
      const XzMajorIdXzMajor = vCurrEduClsSimIdXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajorIdXzMajor,
      );
      objCurrEduClsStu.majorName = XzMajorMajorName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000947)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapStuId(objCurrEduClsStu: clsCurrEduClsStuENEx) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapStuId.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.stuId) == true) {
      const vStudentInfoSimIdStudentInfo = objCurrEduClsStu.idStu;
      const vStudentInfoSimStuId = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_StuId,
        vStudentInfoSimIdStudentInfo,
        objCurrEduClsStu.idCurrEduCls,
      );
      objCurrEduClsStu.stuId = vStudentInfoSimStuId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000853)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyStuName(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyStuName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.stuName) == true) return [];
    const vStudentInfoSimStuName = objCurrEduClsStu.stuName;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_StuName,
      vStudentInfoSimStuName,
      objCurrEduClsStu.idCurrEduCls,
      enumComparisonOp.Like_03,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000684)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyEduClsName(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyEduClsName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.eduClsName) == true) return [];
    const vCurrEduClsSimEduClsName = objCurrEduClsStu.eduClsName;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_EduClsName,
      vCurrEduClsSimEduClsName,
      clsPubLocalStorage.courseId,
      enumComparisonOp.Like_03,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000540)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyCourseTypeName(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyCourseTypeName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.courseTypeName) == true) return [];
    const ccCourseTypeCourseTypeName = objCurrEduClsStu.courseTypeName;
    const arrCourseTypeId = await cc_CourseType_funcKey(
      clscc_CourseTypeEN.con_CourseTypeName,
      ccCourseTypeCourseTypeName,
      enumComparisonOp.Like_03,
    );
    const strCourseTypeIdLst = arrCourseTypeId;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseTypeId,
      strCourseTypeIdLst,
      enumComparisonOp.In_04,
    );
    const strCourseIdLst = arrCourseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_CourseId,
      strCourseIdLst,
      clsPubLocalStorage.courseId,
      enumComparisonOp.In_04,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000551)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyCourseName(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyCourseName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.courseName) == true) return [];
    const vccCourseSimCourseName = objCurrEduClsStu.courseName;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseName,
      vccCourseSimCourseName,
      enumComparisonOp.Like_03,
    );
    const strCourseIdLst = arrCourseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_CourseId,
      strCourseIdLst,
      clsPubLocalStorage.courseId,
      enumComparisonOp.In_04,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000541)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyCourseCode(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyCourseCode.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.courseCode) == true) return [];
    const vccCourseSimCourseCode = objCurrEduClsStu.courseCode;
    const arrCourseId = await vcc_Course_Sim_funcKey(
      clsvcc_Course_SimEN.con_CourseCode,
      vccCourseSimCourseCode,
      enumComparisonOp.Like_03,
    );
    const strCourseIdLst = arrCourseId;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_CourseId,
      strCourseIdLst,
      clsPubLocalStorage.courseId,
      enumComparisonOp.In_04,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000935)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyMajorName(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyMajorName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.majorName) == true) return [];
    const XzMajorMajorName = objCurrEduClsStu.majorName;
    const arrIdXzMajor = await XzMajor_funcKey(
      clsXzMajorEN.con_MajorName,
      XzMajorMajorName,
      enumComparisonOp.Like_03,
    );
    const strIdXzMajorLst = arrIdXzMajor;
    const arrIdCurrEduCls = await vCurrEduCls_Sim_funcKey(
      clsvCurrEduCls_SimEN.con_IdXzMajor,
      strIdXzMajorLst,
      clsPubLocalStorage.courseId,
      enumComparisonOp.In_04,
    );
    return arrIdCurrEduCls;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000948)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyStuId(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyStuId.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.stuId) == true) return [];
    const vStudentInfoSimStuId = objCurrEduClsStu.stuId;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_StuId,
      vStudentInfoSimStuId,
      enumComparisonOp.Like_03,
      objCurrEduClsStu.idCurrEduCls,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000854)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyGradeName(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyGradeName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.gradeName) == true) return [];
    const XzGradeGradeName = objCurrEduClsStu.gradeName;
    const arrIdGrade = await XzGrade_funcKey(
      clsXzGradeEN.con_GradeName,
      XzGradeGradeName,
      enumComparisonOp.Like_03,
    );
    const strIdGradeLst = arrIdGrade;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_IdGrade,
      strIdGradeLst,
      objCurrEduClsStu.idCurrEduCls,
      enumComparisonOp.In_04,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000559)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapKeyAdminClsName(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
): Promise<Array<string>> {
  const strThisFuncName = CurrEduClsStuEx_FuncMapKeyAdminClsName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.adminClsName) == true) return [];
    const XzAdminClsAdminClsName = objCurrEduClsStu.adminClsName;
    const arrIdAdminCls = await XzAdminCls_funcKey(
      clsXzAdminClsEN.con_AdminClsName,
      XzAdminClsAdminClsName,
      enumComparisonOp.Like_03,
    );
    const strIdAdminClsLst = arrIdAdminCls;
    const arrIdStudentInfo = await vStudentInfo_Sim_funcKey(
      clsvStudentInfo_SimEN.con_IdAdminCls,
      strIdAdminClsLst,
      objCurrEduClsStu.idCurrEduCls,
      enumComparisonOp.In_04,
    );
    return arrIdStudentInfo;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000674)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function CurrEduClsStuEx_FuncMapByFldName(
  strFldName: string,
  objCurrEduClsStuEx: clsCurrEduClsStuENEx,
) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsCurrEduClsStuEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsCurrEduClsStuENEx.con_StuName:
      return CurrEduClsStuEx_FuncMapStuName(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_EduClsName:
      return CurrEduClsStuEx_FuncMapEduClsName(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_CourseTypeName:
      return CurrEduClsStuEx_FuncMapCourseTypeName(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_CourseName:
      return CurrEduClsStuEx_FuncMapCourseName(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_CourseCode:
      return CurrEduClsStuEx_FuncMapCourseCode(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_MajorName:
      return CurrEduClsStuEx_FuncMapMajorName(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_StuId:
      return CurrEduClsStuEx_FuncMapStuId(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_GradeName:
      return CurrEduClsStuEx_FuncMapGradeName(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_AdminClsName:
      return CurrEduClsStuEx_FuncMapAdminClsName(objCurrEduClsStuEx);
    case clsCurrEduClsStuENEx.con_RoleNames:
      return CurrEduClsStuEx_FuncMapRoleNamesWithDelButton(objCurrEduClsStuEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapGradeName(objCurrEduClsStu: clsCurrEduClsStuENEx) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapGradeName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.gradeName) == true) {
      const vStudentInfoSimIdStudentInfo = objCurrEduClsStu.idStu;
      const vStudentInfoSimIdGrade = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_IdGrade,
        vStudentInfoSimIdStudentInfo,
        objCurrEduClsStu.idCurrEduCls,
      );
      const XzGradeIdGrade = vStudentInfoSimIdGrade;
      const XzGradeGradeName = await XzGrade_func(
        clsXzGradeEN.con_IdGrade,
        clsXzGradeEN.con_GradeName,
        XzGradeIdGrade,
      );
      objCurrEduClsStu.gradeName = XzGradeGradeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000554)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objCurrEduClsStuS:源对象
 **/
export async function CurrEduClsStuEx_FuncMapAdminClsName(objCurrEduClsStu: clsCurrEduClsStuENEx) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapAdminClsName.name;
  try {
    if (IsNullOrEmpty(objCurrEduClsStu.adminClsName) == true) {
      const vStudentInfoSimIdStudentInfo = objCurrEduClsStu.idStu;
      const vStudentInfoSimIdAdminCls = await vStudentInfo_Sim_func(
        clsvStudentInfo_SimEN.con_IdStudentInfo,
        clsvStudentInfo_SimEN.con_IdAdminCls,
        vStudentInfoSimIdStudentInfo,
        objCurrEduClsStu.idCurrEduCls,
      );
      const XzAdminClsIdAdminCls = vStudentInfoSimIdAdminCls;
      const XzAdminClsAdminClsName = await XzAdminCls_func(
        clsXzAdminClsEN.con_IdAdminCls,
        clsXzAdminClsEN.con_AdminClsName,
        XzAdminClsIdAdminCls,
      );
      objCurrEduClsStu.adminClsName = XzAdminClsAdminClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000670)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function CurrEduClsStuEx_FuncMapRoleNamesWithDelButton(
  objCurrEduClsStu: clsCurrEduClsStuENEx,
) {
  const strThisFuncName = CurrEduClsStuEx_FuncMapRoleNamesWithDelButton.name;
  try {
    const qxUserRoleRelationStore = useQxUserRoleRelationStore();
    if (IsNullOrEmpty(objCurrEduClsStu.roleNames) == true) {
      const strPrjId = clsSysPara4WebApi.currSelPrjId;
      await CurrEduClsStuEx_FuncMapStuId(objCurrEduClsStu);

      const arrRoleIds = await qxUserRoleRelationStore.getRoleIds(objCurrEduClsStu.stuId, strPrjId);
      const divRoleNames = GetDiv_Empty('');

      for (const strRoleId of arrRoleIds) {
        if (strRoleId == '') continue;
        const strRoleName = await QxRoles_GetNameByRoleIdCache(strRoleId, strPrjId);
        const spnRole = GetSpan_Empty('text-secondary');
        spnRole.innerHTML = strRoleName;
        const aDel = GetA_Empty('text-primary ml-2 mr-2');
        aDel.innerHTML = '删除';
        aDel.id = 'aDel';
        aDel.href = 'javascript:void(0)';
        const objData = `${objCurrEduClsStu.stuId}|${strRoleId} `;
        aDel.setAttribute('keyId', objData);
        // aDel.href = 'http://www.shnu.edu.cn';

        // (function (objData: any) {
        //   aDel.onclick = function () {
        //     console.error('aDel.onclick');
        //     clsCurrEduClsStuExWApi.vuebtn_Click('DelRole', objData);
        //   };
        // })(objData);
        const spnEmpty = GetSpan_Empty('text-secondary ml-2');
        spnEmpty.innerHTML = '&nbsp;';
        const spnEmpty1 = GetSpan_Empty('text-secondary ml-2');
        spnEmpty1.innerHTML = '&nbsp;&nbsp;';
        divRoleNames.appendChild(spnRole);
        divRoleNames.appendChild(spnEmpty);
        divRoleNames.appendChild(aDel);
        divRoleNames.appendChild(spnEmpty1);
      }
      if (arrRoleIds.length > 0) {
        objCurrEduClsStu.roleNames = divRoleNames.outerHTML;
      }
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      currEduClsStuEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function CurrEduClsStuEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsCurrEduClsStuENEx.con_StuName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.stuName.localeCompare(b.stuName);
        };
      case clsCurrEduClsStuENEx.con_EduClsName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsCurrEduClsStuENEx.con_CourseTypeName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.courseTypeName.localeCompare(b.courseTypeName);
        };
      case clsCurrEduClsStuENEx.con_CourseName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.courseName.localeCompare(b.courseName);
        };
      case clsCurrEduClsStuENEx.con_CourseCode:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.courseCode.localeCompare(b.courseCode);
        };
      case clsCurrEduClsStuENEx.con_MajorName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsCurrEduClsStuENEx.con_StuId:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.stuId.localeCompare(b.stuId);
        };
      case clsCurrEduClsStuENEx.con_GradeName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.gradeName.localeCompare(b.gradeName);
        };
      case clsCurrEduClsStuENEx.con_AdminClsName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.adminClsName.localeCompare(b.adminClsName);
        };
      case clsCurrEduClsStuENEx.con_RoleNames:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return a.roleNames.localeCompare(b.roleNames);
        };
      default:
        return CurrEduClsStu_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsCurrEduClsStuENEx.con_StuName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.stuName.localeCompare(a.stuName);
        };
      case clsCurrEduClsStuENEx.con_EduClsName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsCurrEduClsStuENEx.con_CourseTypeName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.courseTypeName.localeCompare(a.courseTypeName);
        };
      case clsCurrEduClsStuENEx.con_CourseName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.courseName.localeCompare(a.courseName);
        };
      case clsCurrEduClsStuENEx.con_CourseCode:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.courseCode.localeCompare(a.courseCode);
        };
      case clsCurrEduClsStuENEx.con_MajorName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsCurrEduClsStuENEx.con_StuId:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.stuId.localeCompare(a.stuId);
        };
      case clsCurrEduClsStuENEx.con_GradeName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.gradeName.localeCompare(a.gradeName);
        };
      case clsCurrEduClsStuENEx.con_AdminClsName:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.adminClsName.localeCompare(a.adminClsName);
        };
      case clsCurrEduClsStuENEx.con_RoleNames:
        return (a: clsCurrEduClsStuENEx, b: clsCurrEduClsStuENEx) => {
          return b.roleNames.localeCompare(a.roleNames);
        };
      default:
        return CurrEduClsStu_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/* 添加新记录，保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
export async function CurrEduClsStuEx_AddNewRecordSaveCurrEduClsStu(
  strCurrEduClsId: string,
  strIdStu: string,
) {
  // this.DivName = "divAddNewRecordSave";

  // const strCurrEduClsId = GetInputValueInDivObj(divName, 'hidCurrEduClsId');
  // const strId_Teacher = strid_Teacher;
  const objCurrEduClsStuEN: clsCurrEduClsStuEN = new clsCurrEduClsStuEN();
  await CurrEduClsStuEx_PutDataToCurrEduClsStu(objCurrEduClsStuEN, strCurrEduClsId, strIdStu);
  try {
    //同一用户，同一主题 同一观点 只能添加一次；
    const strWhere = ` 1 = 1 And idCurrEduCls = '${strCurrEduClsId}' And idStu = '${strIdStu}'`;
    const bolIsExist: boolean = await CurrEduClsStu_IsExistRecordAsync(strWhere);

    if (bolIsExist == true) {
      const strMsg = `您已经加入过该教学班了！`;
      alert(strMsg);
      return bolIsExist; //一定要有一个返回值，否则会出错！
    }

    const returnBool = await CurrEduClsStu_AddNewRecordAsync(objCurrEduClsStuEN);

    if (returnBool == true) {
      const strInfo = `添加记录成功!`;

      //显示信息框
      // alert(strInfo);
    } else {
      const strInfo = `添加记录不成功!`;

      //显示信息框
      alert(strInfo);
    }
    return returnBool; //一定要有一个返回值，否则会出错！
  } catch (e: any) {
    console.error('catch(e)=');
    console.error(e);
    const strMsg = `添加记录不成功,${e}.`;
    alert(strMsg);
    return false;
  }
  return true; //一定要有一个返回值，否则会出错！
}

/* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjCurrEduClsStuEN">数据传输的目的类对象</param>
*/
export async function CurrEduClsStuEx_PutDataToCurrEduClsStu(
  pobjCurrEduClsStuEN: clsCurrEduClsStuEN,
  strCurrEduClsId: string,
  strid_Stu: string,
) {
  const userStore = useUserStore();
  pobjCurrEduClsStuEN.SetIdCurrEduCls(strCurrEduClsId); // 教学班

  //获取用户，通过用户Id 查询学生表数据得到学生流水号；
  const strUserId = userStore.getUserId;
  // const strid_TeacherInfo = '';
  // const strSchoolTeam = '';
  // const strSchoolYear = '';
  pobjCurrEduClsStuEN.SetIdStu(strid_Stu); // 老
  //pobjCurrEduClsStuEN.schoolTerm = this.schoolTerm;// 学期
  //pobjCurrEduClsStuEN.schoolYear = this.schoolYear;// 学年
  pobjCurrEduClsStuEN.SetModifyDate(clsDateTime.getTodayDateTimeStr(0)); //
  pobjCurrEduClsStuEN.SetModifyUserId(strUserId); //
  // pobjCurrEduClsStuEN.SetMemo(this.memo;// 备注
}

export { CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls, CurrEduClsStuEx_GetStuIDLstByIdCurrEduClsType };

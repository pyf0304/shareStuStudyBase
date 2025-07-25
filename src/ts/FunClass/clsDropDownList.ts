import { BindDdl_ObjLst, BindDdl_ObjLst_V } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';

import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';

import { gs_TotalDataType_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataTypeWApi';

import { clsgs_TotalDataTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';

import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';

import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';

import { useUserStore } from '@/store/modulesShare/user';

export class clsDropDownList {
  public static XzMajorUniq(arr: Array<clsXzMajorEN>): Array<clsXzMajorEN> {
    const arrObjLst_New: Array<clsXzMajorEN> = new Array<clsXzMajorEN>();
    for (const x of arr) {
      if (clsDropDownList.XzMajorIsExist(arrObjLst_New, x) == false) {
        arrObjLst_New.push(x);
      }
    }
    return arrObjLst_New;
  }

  public static XzMajorIsExist(arr: Array<clsXzMajorEN>, key: clsXzMajorEN) {
    const arr_Sel = arr.filter((x) => x.idXzMajor == key.idXzMajor);
    if (arr_Sel.length > 0) return true;
    return false;
  }

  //教学班学生关系
  public static async BindDdl_CurrEduClsStuUser(ddlUserId_q: string) {
    //strWhereCond = " idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "' order by stuName Asc";
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objDdl = document.getElementById(ddlUserId_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlUserId_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsvCurrEduClsStuEN> = await vCurrEduClsStu_GetObjLstAsync(
        `${clsvCurrEduClsStuEN.con_IdCurrEduCls}='${strIdCurrEducls}'`,
      );

      arrObjLst_Sel = arrObjLst_Sel.sort((x) => x.GetFldValue(clsvCurrEduClsStuEN.con_StuId));
      BindDdl_ObjLst_V(
        ddlUserId_q,
        arrObjLst_Sel,
        clsvCurrEduClsStuEN.con_StuId,
        clsvCurrEduClsStuEN.con_StuName,
        '教学班学生',
      );
      console.log('完成BindDdl_vCurrEduClsStuId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //总表类型数据
  public static async BindDdl_TotalTypeId(ddlTotalType_q: string) {
    const strWhereCond = " totalDataTypeId !='02'";
    const objDdl = document.getElementById(ddlTotalType_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlTotalType_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsgs_TotalDataTypeEN> = await gs_TotalDataType_GetObjLstAsync(
        strWhereCond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsgs_TotalDataTypeEN.con_TotalDataTypeId),
      );
      BindDdl_ObjLst(
        ddlTotalType_q,
        arrObjLst_Sel,
        clsgs_TotalDataTypeEN.con_TotalDataTypeId,
        clsgs_TotalDataTypeEN.con_TotalDataTypeName,
        '问题回答',
      );
      console.log('完成BindDdl_ResearchTopicId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班学生关系
  public static async BindDdl_CurrEduClsStu(ddlCurrEduCls_q: string) {
    const userStore = useUserStore();
    const strWhereCond = ` stuId='${userStore.getUserId}' order by modifyDate Desc`;
    const objDdl = document.getElementById(ddlCurrEduCls_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlCurrEduCls_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsvCurrEduClsStuEN> = await vCurrEduClsStu_GetObjLstAsync(
        strWhereCond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsvCurrEduClsStuEN.con_IdCurrEduCls),
      );
      BindDdl_ObjLst_V(
        ddlCurrEduCls_q,
        arrObjLst_Sel,
        clsvCurrEduClsStuEN.con_IdCurrEduCls,
        clsvCurrEduClsStuEN.con_EduClsName,
        '其他教学班',
      );
      console.log('完成BindDdl_vCurrEduClsStuId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师关系
  public static async BindDdl_CurrEduClsTea(ddlCurrEduCls_q: string) {
    const userStore = useUserStore();
    const strWhereCond = ` teacherId='${userStore.getUserId}' order by updDate Desc`;
    const objDdl = document.getElementById(ddlCurrEduCls_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlCurrEduCls_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsvCurrEduClsTeacherEN> = await vCurrEduClsTeacher_GetObjLstAsync(
        strWhereCond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsvCurrEduClsTeacherEN.con_IdCurrEduCls),
      );
      BindDdl_ObjLst_V(
        ddlCurrEduCls_q,
        arrObjLst_Sel,
        clsvCurrEduClsTeacherEN.con_IdCurrEduCls,
        clsvCurrEduClsTeacherEN.con_EduClsName,
        '其他教学班',
      );
      console.log('完成BindDdl_vCurrEduClsTeacherId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
}

﻿import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { CurrEduClsEx_GetCourseIdByIdCurrEduCls } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { qa_Push_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetAHtmlInDivObj, SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { useUserStore } from '@/store/modulesShare/user';

import { refPageHead, divVarSet } from '@/ts/components/PageHead_ShowVueShare';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PageHead_Show {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    try {
      const userStore = useUserStore();
      if (userStore.getUserId != '') {
        SetAHtmlInDivObj(
          divVarSet.refDivLayout_Head,
          'lnkUserName',
          `${userStore.getUserId}-${userStore.getUserName}(${userStore.getRoleName})`,
        );

        refPageHead.value.majorName = `${userStore.getMajorName}专业`;
        //获得被邀请数
        await this.Bind_QuestionsCount();

        // 判断角色
        // 管理员
        const isShowEduCls = PageHead_Show.GetPropValue('isShowEduCls');
        if (isShowEduCls == 'true') {
          refPageHead.value.eduClsName = clsPubLocalStorage.eduClsName;
        }
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //答疑被邀请数
  public async Bind_QuestionsCount() {
    try {
      const userStore = useUserStore();
      let strWhereCond = ` 1=1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      strWhereCond += ` and receiveUser='${userStore.getUserId}' and isReceive=0`;
      const intQuestionsCount = await qa_Push_GetRecCountByCondAsync(strWhereCond);
      $('#questionsCount').html(intQuestionsCount.toString());
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      //alert(strMsg);
      console.log(strMsg);
    }
  }

  //教学班教师
  public static async EduCls_Click(
    divName: HTMLDivElement,
    strIdCurrEduCls: string,
    strEduName: string,
    strTypeID: string,
  ) {
    //$("#hidIdCurrEduCls").val(strkey);
    // $('#spnEduClsName_Head').html(strEduName);
    SetSpanHtmlInDivObj(divVarSet.refDivLayout_Head, 'spnEduClsName_Head', strEduName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strIdCurrEduCls);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strEduName;

    // $('#Paper_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Paper_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    message.success('已切换教学班！');
  }

  public static async Topic_Click(strTopicId: string, strTopicName: string) {
    //$("#hidIdCurrEduCls").val(strkey);
    // $('#spnEduClsName_Head').html(strEduName);
    refPageHead.value.currTopicName = strTopicName;
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strTopicId);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strTopicId;

    clsPubLocalStorage.topicName = strTopicName;

    // $('#Paper_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Paper_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    message.success('已切换教学班！');
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    // const objPage = new SysScoreSummaryCRUD();
    console.log(strKeyId);

    switch (strCommandName) {
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PageHead_Show.btn_Click');

        break;
    }
  }
}

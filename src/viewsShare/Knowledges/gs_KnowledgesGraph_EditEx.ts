import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { gs_KnowledgesGraph_Edit } from '@/viewsBase/Knowledges/gs_KnowledgesGraph_Edit';
import { gs_KnowledgesGraph_UpdateRecordAsync } from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesGraphWApi';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetFirstCheckedKeyIdInDiv, GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { useUserStore } from '@/store/modulesShare/user';
import { refgs_KnowledgesGraph_Edit } from '@/viewsShare/Knowledges/gs_KnowledgesGraphVueShare';

declare function ShowDialog_gs_KnowledgesGraph(strOpType: string): void;
declare function HideDialog_gs_KnowledgesGraph(): void;

/* gs_KnowledgesGraph_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class gs_KnowledgesGraph_EditEx extends gs_KnowledgesGraph_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = gs_KnowledgesGraph_EditEx.objPageEdit;
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecord_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        const strKeyId = GetFirstCheckedKeyIdInDiv('divList');
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnUpdateRecord_Click(strKeyId);
        break;
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        const strMsg =
          '命令:' + strCommandName + '在函数(gs_KnowledgesGraph_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  public async GetDataFromgs_KnowledgesGraphClass(
    pobjgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN,
  ) {
    refgs_KnowledgesGraph_Edit.value.knowledgeGraphName =
      pobjgs_KnowledgesGraphEN.knowledgeGraphName; // 知识点图名

    //this.courseId = pobjgs_KnowledgesGraphEN.courseId;// 课程Id
  }

  public async PutDataTogs_KnowledgesGraphClass(pobjgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN) {
    pobjgs_KnowledgesGraphEN.SetKnowledgeGraphName(
      refgs_KnowledgesGraph_Edit.value.knowledgeGraphName,
    ); // 知识点图名
    const userStore = useUserStore();
    pobjgs_KnowledgesGraphEN.SetCourseId(clsPubLocalStorage.courseId); // 课程Id
    pobjgs_KnowledgesGraphEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_KnowledgesGraphEN.SetUpdUser(userStore.userId); // 修改用户Id
    pobjgs_KnowledgesGraphEN.SetCreateUser(userStore.userId); // 修改用户Id
    pobjgs_KnowledgesGraphEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    const strRoleId = userStore.getRoleId;
    //判断角色
    //学生
    if (strRoleId == '00620003') {
      pobjgs_KnowledgesGraphEN.SetGraphTypeId('02');
      pobjgs_KnowledgesGraphEN.SetIsRecommend(false);
      pobjgs_KnowledgesGraphEN.SetIsAnswer(false);
    } else {
      pobjgs_KnowledgesGraphEN.SetGraphTypeId('01');
      pobjgs_KnowledgesGraphEN.SetIsRecommend(true);
      pobjgs_KnowledgesGraphEN.SetIsAnswer(true);
    }
  }
  /* 修改标准答案
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async UpdateIsAnswerRecordSave(strKey: string): Promise<boolean> {
    //this.DivName = "divUpdateRecordSave";
    const objgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN = new clsgs_KnowledgesGraphEN();
    objgs_KnowledgesGraphEN.knowledgeGraphId = strKey;
    //设置提交状态；
    if (GetInputValueInDivObj(this.thisDivLayout, 'hidAnswer') == '1') {
      objgs_KnowledgesGraphEN.isAnswer = true;
    } else {
      objgs_KnowledgesGraphEN.isAnswer = false;
    }

    objgs_KnowledgesGraphEN.sfUpdFldSetStr = objgs_KnowledgesGraphEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objgs_KnowledgesGraphEN.knowledgeGraphId == '' ||
      objgs_KnowledgesGraphEN.knowledgeGraphId == undefined
    ) {
      throw '关键字不能为空!';
    }
    return new Promise(async (resolve, reject) => {
      try {
        const returnBool = await gs_KnowledgesGraph_UpdateRecordAsync(objgs_KnowledgesGraphEN);
        if (returnBool == true) {
          const strInfo: string = `操作成功!`;

          //显示信息框
          alert(strInfo);
          //刷新缓存
          if (this.iShowList) {
            this.iShowList.BindGvCache(clsgs_KnowledgesGraphEN._CurrTabName, returnBool.toString());
          }
        } else {
          const strInfo: string = `操作不成功!`;

          //显示信息框
          alert(strInfo);
          console.log('设置标准答案失败');
        }
      } catch (e) {
        console.log('catch(e)=');
        console.error(e);
        const strMsg: string = `修改记录不成功,${e}.`;
        alert(strMsg);
      }
    });
  }

  //是否标准答案
  public async btnAnswer_Click() {
    const strKeyId = GetFirstCheckedKeyIdInDiv('divList');
    if (strKeyId == '') {
      alert('请选择需要推荐的记录！');
      return;
    }

    this.UpdateIsAnswerRecordSave(strKeyId);
  }

  // public async PutDataTogs_KnowledgesGraphClass(pobjgs_KnowledgesGraphEN: clsgs_KnowledgesGraphEN) {
  //   pobjgs_KnowledgesGraphEN.SetKnowledgeGraphName(this.knowledgeGraphName); // 知识点图名
  //   pobjgs_KnowledgesGraphEN.SetCourseId(this.courseId); // 课程Id
  //   pobjgs_KnowledgesGraphEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
  //   pobjgs_KnowledgesGraphEN.SetUpdUser(userStore.getUserId); // 修改用户Id
  //   pobjgs_KnowledgesGraphEN.SetCreateUser(userStore.getUserId); // 修改用户Id
  //   pobjgs_KnowledgesGraphEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
  // }
}

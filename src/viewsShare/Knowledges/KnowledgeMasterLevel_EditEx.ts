import { KnowledgeMasterLevel_Edit } from '@/viewsBase/Knowledges/KnowledgeMasterLevel_Edit';
import { GetFirstCheckedKeyIdInDiv } from '@/ts/PubFun/clsCommFunc4Ctrl';

import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

/* KnowledgeMasterLevel_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class KnowledgeMasterLevel_EditEx extends KnowledgeMasterLevel_Edit {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = KnowledgeMasterLevel_EditEx.objPageEdit;
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
          '命令:' + strCommandName + '在函数(KnowledgeMasterLevel_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }
}

import { clsge_StructureSectionEN } from '@/ts/L0Entity/Knowledges/clsge_StructureSectionEN';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetFirstCheckedKeyIdInDiv, GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { ge_StructureSection_Edit } from '@/viewsBase/Knowledges/ge_StructureSection_Edit';
import { useUserStore } from '@/store/modulesShare/user';
import {
  ge_StructureSection_AddNewRecordWithMaxIdAsync,
  ge_StructureSection_CheckProperty4Update,
  ge_StructureSection_CheckPropertyNew,
  ge_StructureSection_UpdateRecordAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionWApi';
import { refge_ControlAttribute_Edit } from '@/viewsShare/GameLearn/ge_ControlAttributeVueShare';
import { refge_StructureSection_Edit } from '@/viewsShare/Knowledges/ge_StructureSectionVueShare';

/* ge_StructureSection_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class ge_StructureSection_EditEx extends ge_StructureSection_Edit {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const objPage = ge_StructureSection_EditEx.objPageEdit;
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
          '命令:' + strCommandName + '在函数(ge_StructureSection_EditEx.btn_Click)中没有被处理！';
        alert(strMsg);
        break;
    }
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_ge_StructureSection(this.opType);
      if (bolIsSuccess == false) return;

      this.AddNewRecordWithMaxId();
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateStructureSectionRecordSave() {
    const objge_StructureSectionEN: clsge_StructureSectionEN = new clsge_StructureSectionEN();
    objge_StructureSectionEN.structureSectionId = this.keyId;
    this.PutDataToge_StructureSectionClass(objge_StructureSectionEN);
    objge_StructureSectionEN.sfUpdFldSetStr = objge_StructureSectionEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objge_StructureSectionEN.structureSectionId == '' ||
      objge_StructureSectionEN.structureSectionId == undefined
    ) {
      throw '关键字不能为空!';
    }
    try {
      ge_StructureSection_CheckProperty4Update(objge_StructureSectionEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseText = await ge_StructureSection_UpdateRecordAsync(objge_StructureSectionEN);
      const returnBool: boolean = !!responseText;
      if (returnBool == true) {
        //ge_StructureSection_ReFreshCache();
      }
      return returnBool;
    } catch (e) {
      const strMsg: string = `修改记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  public async PutDataToge_StructureSectionClass(
    pobjge_StructureSectionEN: clsge_StructureSectionEN,
  ) {
    const userStore = useUserStore();
    pobjge_StructureSectionEN.SetStructureSectionName(
      refge_ControlAttribute_Edit.value.structureSectionName,
    );
    pobjge_StructureSectionEN.SetStructureSectionContent(
      refge_ControlAttribute_Edit.value.structureSectionContent,
    ); // 知识点内容;
    pobjge_StructureSectionEN.SetSectionTypeId(refge_ControlAttribute_Edit.value.sectionTypeId);
    pobjge_StructureSectionEN.SetCourseId(clsPubLocalStorage.courseId); // 课程Id
    pobjge_StructureSectionEN.SetIsRoot(false);
    pobjge_StructureSectionEN.SetIsExpanded(true);
    pobjge_StructureSectionEN.SetDirection('right');

    pobjge_StructureSectionEN.SetIsShow(refge_ControlAttribute_Edit.value.isShow); // 是否启用
    pobjge_StructureSectionEN.SetUpdUser(userStore.userId); // 修改用户Id
    pobjge_StructureSectionEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjge_StructureSectionEN.SetCourseId(clsPubLocalStorage.courseId); // 课程Id
    pobjge_StructureSectionEN.SetMemo(refge_ControlAttribute_Edit.value.memo); // 备注
  }
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitge_StructureSection;
    try {
      switch (strCommandText) {
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          const returnKeyId = await this.AddStructureSection_Click();
          this.HideDialog_ge_StructureSection();
          if (this.iShowList) {
            this.iShowList.BindGvCache(
              clsge_StructureSectionEN._CurrTabName,
              returnKeyId.toString(),
            );
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,

          const returnBool = await this.UpdateStructureSectionRecordSave();
          if (returnBool == true) {
            // this.BindGv_ge_StructureSection();
            if (this.iShowList) {
              this.iShowList.BindGvCache(
                clsge_StructureSectionEN._CurrTabName,
                returnBool.toString(),
              );
            }
            this.HideDialog_ge_StructureSection();
          }

          break;
        default:
          const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnSubmit_Click())`;
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //添加结构章节表
  public async AddStructureSection_Click() {
    const objge_StructureSectionEN: clsge_StructureSectionEN = new clsge_StructureSectionEN();
    const strStructureSectionName_Content =
      GetInputValueInDivObj(this.thisDivLayout, 'txtStructureSectionName') +
      '-' +
      GetInputValueInDivObj(this.thisDivLayout, 'txtStructureSectionContent');
    objge_StructureSectionEN.SetParentId(this.parentId);
    this.PutDataToge_StructureSectionClass(objge_StructureSectionEN);
    try {
      ge_StructureSection_CheckPropertyNew(objge_StructureSectionEN);
    } catch (e) {
      const strMsg: string = `检查数据不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
    try {
      const responseKeyId = await ge_StructureSection_AddNewRecordWithMaxIdAsync(
        objge_StructureSectionEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //ge_StructureSection_ReFreshCache();
        //const strInfo: string = `添加记录成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        // add_node(returnKeyId, strStructureSectionName_Content);
        const objData = { keyId: returnKeyId, keyName: strStructureSectionName_Content };
        ge_StructureSection_EditEx.vuebtn_Click('add_node', objData);
      } else {
        const strInfo: string = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e) {
      const strMsg: string = `添加记录不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  public Clear() {
    refge_StructureSection_Edit.value.structureSectionName = '';
    refge_StructureSection_Edit.value.structureSectionContent = '';
    refge_StructureSection_Edit.value.isShow = false;
    // this.updUser = '';
    refge_StructureSection_Edit.value.memo = '';
  }
  /*
   * 存放题目ID
   */
  public get sectionTypeId() {
    const strQuestionId = ge_StructureSection_EditEx.GetPropValue('sectionTypeId');
    return strQuestionId;
  }
  public get parentId() {
    const strParentId = ge_StructureSection_EditEx.GetPropValue('parentId');
    return strParentId;
  }
}

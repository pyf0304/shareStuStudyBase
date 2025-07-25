/**
 * 类名:cc_CourseChapter_EditEx(界面:cc_CourseChapterCRUD)
 * 表名:cc_CourseChapter(01120060)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:16:41
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { cc_CourseChapter_Edit } from '@/viewsBase/Knowledges/cc_CourseChapter_Edit';
import {
  refcc_CourseChapter_Edit,
  CourseId_Session,
} from '@/viewsShare/Knowledges/cc_CourseChapterVueShare';

/* cc_CourseChapter_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class cc_CourseChapter_EditEx extends cc_CourseChapter_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: cc_CourseChapter_EditEx = <cc_CourseChapter_EditEx>(
      cc_CourseChapter_Edit.GetPageEditObj('cc_CourseChapter_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'cc_CourseChapter_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjcc_CourseChapterEN">数据传输的目的类对象</param>
   **/
  public async PutDataTocc_CourseChapterClass(pobjcc_CourseChapterEN: clscc_CourseChapterEN) {
    pobjcc_CourseChapterEN.SetCourseChapterName(refcc_CourseChapter_Edit.value.courseChapterName); // 课程章节名称
    pobjcc_CourseChapterEN.SetChapterName(refcc_CourseChapter_Edit.value.chapterName); // 章名
    pobjcc_CourseChapterEN.SetSectionName(refcc_CourseChapter_Edit.value.sectionName); // 节名
    pobjcc_CourseChapterEN.SetChapterNameSim(refcc_CourseChapter_Edit.value.chapterNameSim); // 章名简称
    pobjcc_CourseChapterEN.SetSectionNameSim(refcc_CourseChapter_Edit.value.sectionNameSim); // 节名简称
    pobjcc_CourseChapterEN.SetIsUse(refcc_CourseChapter_Edit.value.isUse); // 是否使用
    pobjcc_CourseChapterEN.SetChapterContent(refcc_CourseChapter_Edit.value.chapterContent); // 章节内容
    pobjcc_CourseChapterEN.SetMemo(refcc_CourseChapter_Edit.value.memo); // 备注
    pobjcc_CourseChapterEN.SetCourseId(CourseId_Session.value); // 课程Id
    if (
      refcc_CourseChapter_Edit.value.parentNodeId == '' ||
      refcc_CourseChapter_Edit.value.parentNodeId == '0'
    ) {
      pobjcc_CourseChapterEN.SetParentNodeId('00000000');
    } else {
      pobjcc_CourseChapterEN.SetParentNodeId(refcc_CourseChapter_Edit.value.parentNodeId);
    }
  }
}

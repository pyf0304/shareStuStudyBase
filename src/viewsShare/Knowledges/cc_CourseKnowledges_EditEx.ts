/**
 * 类名:cc_CourseKnowledges_EditEx(界面:cc_CourseKnowledgesCRUD)
 * 表名:cc_CourseKnowledges(01120082)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:16:28
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
import { useUserStore } from '@/store/modulesShare/user';
import { clscc_CourseKnowledgesEN } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { cc_CourseKnowledges_Edit } from '@/viewsBase/Knowledges/cc_CourseKnowledges_Edit';
import {
  refcc_CourseKnowledges_Edit,
  CourseId_Session,
} from '@/viewsShare/Knowledges/cc_CourseKnowledgesVueShare';

/* cc_CourseKnowledges_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class cc_CourseKnowledges_EditEx extends cc_CourseKnowledges_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: cc_CourseKnowledges_EditEx = <cc_CourseKnowledges_EditEx>(
      cc_CourseKnowledges_Edit.GetPageEditObj('cc_CourseKnowledges_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'cc_CourseKnowledges_EditEx'初始化过，请检查！`;
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
   * @param pobjcc_CourseKnowledgesEN">数据传输的目的类对象</param>
   **/
  public async PutDataTocc_CourseKnowledgesClass(
    pobjcc_CourseKnowledgesEN: clscc_CourseKnowledgesEN,
  ) {
    const userStore = useUserStore();
    pobjcc_CourseKnowledgesEN.SetKnowledgeName(refcc_CourseKnowledges_Edit.value.knowledgeName); // 知识点名称
    pobjcc_CourseKnowledgesEN.SetKnowledgeTitle(refcc_CourseKnowledges_Edit.value.knowledgeTitle); // 知识点标题
    pobjcc_CourseKnowledgesEN.SetKnowledgeTypeId(refcc_CourseKnowledges_Edit.value.knowledgeTypeId); // 知识点类型
    pobjcc_CourseKnowledgesEN.SetCourseChapterId(refcc_CourseKnowledges_Edit.value.courseChapterId); // 课程章节
    pobjcc_CourseKnowledgesEN.SetKnowledgeContent(
      refcc_CourseKnowledges_Edit.value.knowledgeContent,
    ); // 知识点内容
    pobjcc_CourseKnowledgesEN.SetMemo(refcc_CourseKnowledges_Edit.value.memo); // 备注
    pobjcc_CourseKnowledgesEN.SetCourseId(CourseId_Session.value); // 课程
    pobjcc_CourseKnowledgesEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjcc_CourseKnowledgesEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjcc_CourseKnowledgesEN.SetUserId(userStore.getUserId); // 修改人
  }
}

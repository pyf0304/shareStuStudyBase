/**
 * 类名:cc_CourseChapterCRUDEx(界面:cc_CourseChapterCRUD)
 * 表名:cc_CourseChapter(01120060)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:16:39
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import cc_CourseChapter_EditEx from '@/viewsShare/Knowledges/cc_CourseChapter_EditEx';
import { cc_CourseChapterCRUD } from '@/viewsBase/Knowledges/cc_CourseChapterCRUD';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { cc_CourseChapter_Edit } from '@/viewsBase/Knowledges/cc_CourseChapter_Edit';
import {
  refcc_CourseChapter_Edit,
  divVarSet,
  CourseId_Session,
  viewVarSet,
} from '@/viewsShare/Knowledges/cc_CourseChapterVueShare';
import { Format } from '@/ts/PubFun/clsString';
import {
  cc_CourseChapter_AddNewRecordAsync,
  cc_CourseChapter_GetMaxStrIdAsync,
  cc_CourseChapter_GetObjLstByCourseChapterIdLstAsync,
  cc_CourseChapter_ReFreshCache,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
/** cc_CourseChapterCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class cc_CourseChapterCRUDEx extends cc_CourseChapterCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortcc_CourseChapterBy = "CourseChapterId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 20;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
    CourseId_Session.value = clsPubLocalStorage.courseId;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_cc_CourseChapter]!${strType}${strPara}`);
    //this.BindGv_cc_CourseChapter4Func();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'cc_CourseChapter':
        this.BindGv_cc_CourseChapter4Func(divVarSet.refDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string) {
    let objPage: cc_CourseChapterCRUDEx;
    let objPageEdit;
    if (cc_CourseChapterCRUD.objPageCRUD == null) {
      cc_CourseChapterCRUD.objPageCRUD = new cc_CourseChapterCRUDEx();
      objPage = <cc_CourseChapterCRUDEx>cc_CourseChapterCRUD.objPageCRUD;
    } else {
      objPage = <cc_CourseChapterCRUDEx>cc_CourseChapterCRUD.objPageCRUD;
    }

    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divVarSet.refDivList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divVarSet.refDivList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new cc_CourseChapter_EditEx('cc_CourseChapter_EditEx', objPage);
        objPageEdit.btnAddNewRecord_Click();

        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new cc_CourseChapter_EditEx('cc_CourseChapter_EditEx', objPage);

        refcc_CourseChapter_Edit.value.btncc_CourseChapter_Edit_Click(strCommandName, strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录!');
          return;
        }
        objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录!');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录!');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录!');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录!');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        strMsg = `命令:strCommandName在函数(cc_CourseChapterCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrCourseChapterId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrcc_CourseChapterObjLst = await cc_CourseChapter_GetObjLstByCourseChapterIdLstAsync(
        arrCourseChapterId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrcc_CourseChapterObjLst) {
        const strMaxStrId = await cc_CourseChapter_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.courseChapterId = strMaxStrId;
        objInFor.SetCourseChapterName(`C_${objInFor.courseChapterName}`);
        const returnBool = await cc_CourseChapter_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          cc_CourseChapter_ReFreshCache(CourseId_Session.value);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public async SortColumn(sortColumnKey: string, sortDirection: string) {
    switch (sortColumnKey) {
      case 'courseName|Ex':
        viewVarSet.sortcc_CourseChapterBy = `vcc_Course_Sim|courseName ${sortDirection}|cc_CourseChapter.CourseId = vcc_Course_Sim.CourseId`;
        break;
      default:
        viewVarSet.sortcc_CourseChapterBy = Format('{0} {1}', sortColumnKey, sortDirection);
        break;
    }
    await this.BindGv_cc_CourseChapter4Func(this.thisDivList);
  }
}

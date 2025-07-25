/**
 * 类名:CurrEduCls_EditEx(界面:CurrEduClsCRUD)
 * 表名:CurrEduCls(01120123)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:10:12
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日常运行(DailyRunning)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { useUserStore } from '@/store/modulesShare/user';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
import { clsvCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsEN';
import {
  CurrEduCls_GetMaxStrIdAsync,
  CurrEduCls_GetObjByIdCurrEduClsAsync,
  CurrEduCls_UpdateRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import {
  gs_TeachingDate_AddNewRecordAsync,
  gs_TeachingDate_UpdateRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
// import { gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import {
  GetInputObjInDivObjN,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueByIdInDiv,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { CurrEduCls_Edit } from '@/viewsBase/DailyRunning/CurrEduCls_Edit';
import {
  CourseId_Session,
  divVarSet,
  refCurrEduCls_Edit,
} from '@/viewsShare/DailyRunning/CurrEduClsVueShare';
/* CurrEduCls_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export default class CurrEduCls_EditEx extends CurrEduCls_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: CurrEduCls_EditEx = <CurrEduCls_EditEx>(
      CurrEduCls_Edit.GetPageEditObj('CurrEduCls_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'CurrEduCls_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        CourseId_Session.value = clsPubLocalStorage.courseId;
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
      case 'NewEduCls':
        CourseId_Session.value = clsPubLocalStorage.courseId;
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

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnSubmit_Click.name;
    try {
      const userStore = useUserStore();
      //判断session是否失效
      if (userStore.getUserId != '') {
        let strInfo;
        switch (strCommandText) {
          case '添加':
            const responseText1 = await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
                const returnKeyId: string = <string>jsonData;
                if (IsNullOrEmpty(returnKeyId) == false) {
                  this.HideDialog_CurrEduCls();
                  if (this.iShowList) {
                    this.iShowList.BindGv(clsvCurrEduClsEN._CurrTabName, returnKeyId);
                  }
                }
              });
            } else {
              const responseText2 = await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  this.HideDialog_CurrEduCls();
                  if (this.iShowList) {
                    this.iShowList.BindGv(clsvCurrEduClsEN._CurrTabName, returnBool.toString());
                  }
                }
              });
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            const responseText3 = await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              strInfo = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In CurrEduClsCRUD.btnOKUpd_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                this.HideDialog_CurrEduCls();
                if (this.iShowList) {
                  this.iShowList.BindGv(clsvCurrEduClsEN._CurrTabName, returnBool.toString());
                }
              }
            });
            break;
          default:
            const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnOKUpd_Click())`;
            alert(strMsg);
            break;
        }
      } else {
        alert('登录超时，请重新登录');
        //    reLogin();
      }
      HideDivInDivObj(this.thisDivLayout, 'divLoading');
      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /* 为插入记录做准备工作
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewSetDate() {
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';
    //this.SetKeyReadOnly(false);
    this.btnSubmitCurrEduCls = '确认添加';
    this.btnCancelCurrEduCls = '取消添加';
    refCurrEduCls_Edit.value.Clear();
  }

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';
    //const strKeyId = GetFirstCheckedKeyIdInDiv(objPage.divName4List);;
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    const userStore = useUserStore();
    //读取session角色 来判断绑定不同数据列表
    //获取用户角色来判断显示不同的列表数据；
    const strUserId = userStore.getUserId;
    const strRoleId = userStore.getRoleId;
    this.opType = 'Update';
    const bolIsSuccess = await this.ShowDialog_CurrEduCls(this.opType);
    if (bolIsSuccess == false) return;
    //判断角色
    //管理员
    if (strRoleId == '00620001') {
      if (this.bolIsLoadEditRegion == false) {
        //

        // 为编辑区绑定下拉框
        // const conBindDdl = await this.BindDdl4EditRegionInDiv();
        this.ShowDialog_CurrEduCls('Update');
        this.bolIsLoadEditRegion = true; //
        this.UpdateRecord(strKeyId);
      } else {
        this.ShowDialog_CurrEduCls('Update');
        this.UpdateRecord(strKeyId);
      }
    } else if (strRoleId == '00620002') {
      //教师
      //修改前需要判断 数据是否是当前用户添加 是则可以修改，否则不可修改；
      const responseText = await CurrEduCls_GetObjByIdCurrEduClsAsync(strKeyId);
      const objCurrEduClsEN: clsCurrEduClsEN = <clsCurrEduClsEN>responseText;
      if (objCurrEduClsEN.modifyUserId == strUserId) {
        if (this.bolIsLoadEditRegion == false) {
          //

          // 为编辑区绑定下拉框
          // const conBindDdl = await this.BindDdl4EditRegionInDiv();
          this.ShowDialog_CurrEduCls('Update');
          this.bolIsLoadEditRegion = true; //
          this.UpdateRecord(strKeyId);
        } else {
          this.ShowDialog_CurrEduCls('Update');
          this.UpdateRecord(strKeyId);
        }
      } else {
        const strInfo: string = `当前数据不是您添加，不可修改`;
        //显示信息框
        alert(strInfo);
        return;
      }
    }
  }

  /* 为插入记录做准备工作
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';
    //this.SetKeyReadOnly(false);
    this.btnSubmitCurrEduCls = '确认添加';
    this.btnCancelCurrEduCls = '取消添加';
    refCurrEduCls_Edit.value.Clear();
    //wucCurrEduClsB1.idCurrEduCls = clsCurrEduClsBL.GetMaxStrId_S();
    try {
      const responseText = await CurrEduCls_GetMaxStrIdAsync();
      const returnString: string = responseText;
      if (returnString == '') {
        const strInfo: string = `获取表CurrEduCls的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtid_CurrEduCls').val(returnString);
      }
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg: string = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
*/
  public async AddNewRecordWithMaxId() {
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';
    //this.SetKeyReadOnly(false);
    this.btnSubmitCurrEduCls = '确认添加';
    this.btnCancelCurrEduCls = '取消添加';
    refCurrEduCls_Edit.value.Clear();
    //wucCurrEduClsB1.idCurrEduCls = clsCurrEduClsBL.GetMaxStrId_S();
  }

  //设置日期；
  public async SetUpDate() {
    const strIdCurrEduCls = this.keyId; // $('#txtid_CurrEduCls').val();
    const userStore = useUserStore();
    const strCommandText: string = this.btnSubmit_Click.name;
    try {
      if (userStore.getUserId != '') {
        switch (strCommandText) {
          case '添加':
            const responseText1 = await this.AddNewRecord();
            break;
          case '确认添加':
            const objgs_TeachingDateEN: clsgs_TeachingDateEN = new clsgs_TeachingDateEN();
            objgs_TeachingDateEN.SetIdCurrEduCls(strIdCurrEduCls);
            objgs_TeachingDateEN.SetStartDate(this.startDate);
            objgs_TeachingDateEN.SetEndDate(this.endDate);
            objgs_TeachingDateEN.SetUpdDate(clsPubFun4Web.getNowDate());
            objgs_TeachingDateEN.SetUpdUser(userStore.getUserId);
            // this.PutDataToConceptClass(objConceptEN);
            objgs_TeachingDateEN.sfUpdFldSetStr = objgs_TeachingDateEN.updFldString; //设置哪些字段被修改(脏字段)

            try {
              const responseText2 = await gs_TeachingDate_AddNewRecordAsync(objgs_TeachingDateEN);
              const returnBool: boolean = !!responseText2;
              if (returnBool == true) {
                //更新教学班日期范围；把备注字段存放日期
                const objCurrEduClsEN: clsCurrEduClsEN = new clsCurrEduClsEN();
                objCurrEduClsEN.SetIdCurrEduCls(strIdCurrEduCls);
                objCurrEduClsEN.SetMemo(this.startDate + '-' + this.endDate);
                objCurrEduClsEN.sfUpdFldSetStr = objCurrEduClsEN.updFldString; //设置哪些字段被修改(脏字段)
                const responseText3 = await CurrEduCls_UpdateRecordAsync(objCurrEduClsEN);
                const returnBool: boolean = !!responseText3;
                if (returnBool == true) {
                  console.log('教学班更新成功');
                  //数据同步；
                }

                const strInfo: string = `设置成功!`;

                //显示信息框
                alert(strInfo);
                // HideDialogOne();
              } else {
                const strInfo: string = `设置失败!`;

                //显示信息框
                alert(strInfo);
              }
              return responseText2; //一定要有一个返回值，否则会出错！
            } catch (e) {
              console.error('catch(e)=');
              console.error(e);
              const strMsg: string = `添加记录不成功,${e}.`;
              alert(strMsg);
              return false; //一定要有一个返回值，否则会出错！
            }

            break;
          case '确认修改':
            const mId = GetInputValueInDivObjN(divVarSet.refDivEdit, 'hidgs_DateId');
            if (mId != 0) {
              //更新教学班日期表
              const objgs_TeachingDateEN: clsgs_TeachingDateEN = new clsgs_TeachingDateEN();
              objgs_TeachingDateEN.SetmId(mId);
              objgs_TeachingDateEN.SetIdCurrEduCls(strIdCurrEduCls);
              objgs_TeachingDateEN.SetStartDate(this.startDate);
              objgs_TeachingDateEN.SetEndDate(this.endDate);
              objgs_TeachingDateEN.SetUpdDate(clsPubFun4Web.getNowDate());
              objgs_TeachingDateEN.SetUpdUser(userStore.getUserId);

              objgs_TeachingDateEN.sfUpdFldSetStr = objgs_TeachingDateEN.updFldString; //设置哪些字段被修改(脏字段)
              const responseText2 = await gs_TeachingDate_UpdateRecordAsync(objgs_TeachingDateEN);
              const returnBool: boolean = !!responseText2;
              if (returnBool == true) {
                console.log('教学班日期表更新成功');

                //更新教学班日期范围字段
                const objCurrEduClsEN: clsCurrEduClsEN = new clsCurrEduClsEN();
                objCurrEduClsEN.SetIdCurrEduCls(strIdCurrEduCls);
                objCurrEduClsEN.SetMemo(this.startDate + '-' + this.endDate);
                objCurrEduClsEN.sfUpdFldSetStr = objCurrEduClsEN.updFldString; //设置哪些字段被修改(脏字段)
                const responseText3 = await CurrEduCls_UpdateRecordAsync(objCurrEduClsEN);
                const returnBool: boolean = !!responseText3;
                if (returnBool == true) {
                  console.log('教学班更新范围成功');
                  //数据同步；
                } else {
                  console.log('教学班更新范围失败');
                }

                const strInfo: string = `设置成功!`;

                //显示信息框
                alert(strInfo);
                // HideDialogOne();
              } else {
                console.log('教学班日期范围更新失败');
                const strInfo: string = `设置失败!`;

                //显示信息框
                alert(strInfo);
              }
            } else {
              console.log('教学班日期范围更新失败');
            }

            break;
          default:
            const strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnOKUpd_Click())`;
            alert(strMsg);
            break;
        }
      } else {
        alert('登录超时，请重新登录');
        //    reLogin();
      }
      HideDivInDivObj(this.thisDivLayout, 'divLoading');

      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e) {
      const strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }

    HideDivInDivObj(this.thisDivLayout, 'divLoading');
  }

  /*
   * 开始时间
   */
  public set startDate(value: string) {
    SetInputValueInDivObj(divVarSet.refDivEdit, 'txtStartDate', value);
  }
  /*
   * 开始时间
   */
  public get startDate(): string {
    return GetInputValueInDivObj(divVarSet.refDivEdit, 'txtStartDate');
  }

  /*
   * 结束时间
   */
  public set endDate(value: string) {
    SetInputValueInDivObj(divVarSet.refDivEdit, 'txtEndDate', value);
  }
  /*
   * 结束时间
   */
  public get endDate(): string {
    return GetInputValueInDivObj(divVarSet.refDivEdit, 'txtEndDate');
  }
}

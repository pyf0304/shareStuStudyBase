/**
 * 类名:clsStudentInfoWApi
 * 表名:StudentInfo(01120131)
 * 版本:2025.06.10.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/10 21:30:23
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 应用类型:Vue应用InCore-TS(30)
 CM工程:学生学习基本信息共享(000064, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access,0155)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 学生(StudentInfo)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2025年06月10日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format, GetStrLen, tzDataType } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { ObjectAssign, GetExceptionStr, myShowErrorMsg } from '@/ts/PubFun/clsCommFunc4Web';
import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { XzGrade_func } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
import { XzGradeBase_func } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { XzUniZone_func } from '@/ts/L3ForWApi/SysPara/clsXzUniZoneWApi';
import { clsXzUniZoneEN } from '@/ts/L0Entity/SysPara/clsXzUniZoneEN';
import { XzClg_func } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzMajor_func } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { Sex_func } from '@/ts/L3ForWApi/SysPara/clsSexWApi';
import { clsSexEN } from '@/ts/L0Entity/SysPara/clsSexEN';
import { XzAdminCls_func } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
import { XzSchool_func } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
import { AddRecordResult } from '@/ts/PubFun/AddRecordResult';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

export const studentInfo_Controller = 'StudentInfoApi';
export const studentInfo_ConstructorName = 'studentInfo';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdStudentInfo:关键字
 * @returns 对象
 **/
export async function StudentInfo_GetObjByIdStudentInfoAsync(
  strIdStudentInfo: string,
): Promise<clsStudentInfoEN | null> {
  const strThisFuncName = 'GetObjByIdStudentInfoAsync';

  if (IsNullOrEmpty(strIdStudentInfo) == true) {
    const strMsg = Format(
      '参数:[strIdStudentInfo]不能为空!(In clsStudentInfoWApi.GetObjByIdStudentInfoAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdStudentInfo.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdStudentInfo]的长度:[{0}]不正确!(clsStudentInfoWApi.GetObjByIdStudentInfoAsync)',
      strIdStudentInfo.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdStudentInfo';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStudentInfo,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objStudentInfo = StudentInfo_GetObjFromJsonObj(returnObj);
      return objStudentInfo;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjByIdStudentInfolocalStorage]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
//该表没有使用Cache,不需要生成[GetObjByIdStudentInfoCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdCache )
//该表没有使用Cache,不需要生成[UpdateObjInLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjInLstCache

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function StudentInfo_SortFunDefa(a: clsStudentInfoEN, b: clsStudentInfoEN): number {
  return a.idStudentInfo.localeCompare(b.idStudentInfo);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function StudentInfo_SortFunDefa2Fld(a: clsStudentInfoEN, b: clsStudentInfoEN): number {
  if (a.stuId == b.stuId) return a.stuName.localeCompare(b.stuName);
  else return a.stuId.localeCompare(b.stuId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function StudentInfo_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsStudentInfoEN.con_IdStudentInfo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          return a.idStudentInfo.localeCompare(b.idStudentInfo);
        };
      case clsStudentInfoEN.con_StuId:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          return a.stuId.localeCompare(b.stuId);
        };
      case clsStudentInfoEN.con_StuName:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          return a.stuName.localeCompare(b.stuName);
        };
      case clsStudentInfoEN.con_IdPolitics:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idPolitics == null) return -1;
          if (b.idPolitics == null) return 1;
          return a.idPolitics.localeCompare(b.idPolitics);
        };
      case clsStudentInfoEN.con_IdSex:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idSex == null) return -1;
          if (b.idSex == null) return 1;
          return a.idSex.localeCompare(b.idSex);
        };
      case clsStudentInfoEN.con_IdEthnic:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idEthnic == null) return -1;
          if (b.idEthnic == null) return 1;
          return a.idEthnic.localeCompare(b.idEthnic);
        };
      case clsStudentInfoEN.con_IdUniZone:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idUniZone == null) return -1;
          if (b.idUniZone == null) return 1;
          return a.idUniZone.localeCompare(b.idUniZone);
        };
      case clsStudentInfoEN.con_IdStuType:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idStuType == null) return -1;
          if (b.idStuType == null) return 1;
          return a.idStuType.localeCompare(b.idStuType);
        };
      case clsStudentInfoEN.con_IdXzCollege:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idXzCollege == null) return -1;
          if (b.idXzCollege == null) return 1;
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsStudentInfoEN.con_IdXzMajor:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idXzMajor == null) return -1;
          if (b.idXzMajor == null) return 1;
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsStudentInfoEN.con_IdGradeBase:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idGradeBase == null) return -1;
          if (b.idGradeBase == null) return 1;
          return a.idGradeBase.localeCompare(b.idGradeBase);
        };
      case clsStudentInfoEN.con_IdGrade:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idGrade == null) return -1;
          if (b.idGrade == null) return 1;
          return a.idGrade.localeCompare(b.idGrade);
        };
      case clsStudentInfoEN.con_IdXsStatus:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idXsStatus == null) return -1;
          if (b.idXsStatus == null) return 1;
          return a.idXsStatus.localeCompare(b.idXsStatus);
        };
      case clsStudentInfoEN.con_IdAdminCls:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idAdminCls == null) return -1;
          if (b.idAdminCls == null) return 1;
          return a.idAdminCls.localeCompare(b.idAdminCls);
        };
      case clsStudentInfoEN.con_Birthday:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.birthday == null) return -1;
          if (b.birthday == null) return 1;
          return a.birthday.localeCompare(b.birthday);
        };
      case clsStudentInfoEN.con_NativePlace:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.nativePlace == null) return -1;
          if (b.nativePlace == null) return 1;
          return a.nativePlace.localeCompare(b.nativePlace);
        };
      case clsStudentInfoEN.con_Duty:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.duty == null) return -1;
          if (b.duty == null) return 1;
          return a.duty.localeCompare(b.duty);
        };
      case clsStudentInfoEN.con_IdCardNo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idCardNo == null) return -1;
          if (b.idCardNo == null) return 1;
          return a.idCardNo.localeCompare(b.idCardNo);
        };
      case clsStudentInfoEN.con_StuCardNo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.stuCardNo == null) return -1;
          if (b.stuCardNo == null) return 1;
          return a.stuCardNo.localeCompare(b.stuCardNo);
        };
      case clsStudentInfoEN.con_LiveAddress:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.liveAddress == null) return -1;
          if (b.liveAddress == null) return 1;
          return a.liveAddress.localeCompare(b.liveAddress);
        };
      case clsStudentInfoEN.con_HomePhone:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.homePhone == null) return -1;
          if (b.homePhone == null) return 1;
          return a.homePhone.localeCompare(b.homePhone);
        };
      case clsStudentInfoEN.con_IdCardNo2:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idCardNo2 == null) return -1;
          if (b.idCardNo2 == null) return 1;
          return a.idCardNo2.localeCompare(b.idCardNo2);
        };
      case clsStudentInfoEN.con_StudentNumber:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.studentNumber == null) return -1;
          if (b.studentNumber == null) return 1;
          return a.studentNumber.localeCompare(b.studentNumber);
        };
      case clsStudentInfoEN.con_CardNo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.cardNo == null) return -1;
          if (b.cardNo == null) return 1;
          return a.cardNo.localeCompare(b.cardNo);
        };
      case clsStudentInfoEN.con_IsGpUser:
        return (a: clsStudentInfoEN) => {
          if (a.isGpUser == true) return 1;
          else return -1;
        };
      case clsStudentInfoEN.con_IsLocalUser:
        return (a: clsStudentInfoEN) => {
          if (a.isLocalUser == true) return 1;
          else return -1;
        };
      case clsStudentInfoEN.con_IsLeaved:
        return (a: clsStudentInfoEN) => {
          if (a.isLeaved == true) return 1;
          else return -1;
        };
      case clsStudentInfoEN.con_IdSchool:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.idSchool == null) return -1;
          if (b.idSchool == null) return 1;
          return a.idSchool.localeCompare(b.idSchool);
        };
      case clsStudentInfoEN.con_UserId:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.userId == null) return -1;
          if (b.userId == null) return 1;
          return a.userId.localeCompare(b.userId);
        };
      case clsStudentInfoEN.con_UserTypeId:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.userTypeId == null) return -1;
          if (b.userTypeId == null) return 1;
          return a.userTypeId.localeCompare(b.userTypeId);
        };
      case clsStudentInfoEN.con_UserType:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.userType == null) return -1;
          if (b.userType == null) return 1;
          return a.userType.localeCompare(b.userType);
        };
      case clsStudentInfoEN.con_EnrollmentDate:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.enrollmentDate == null) return -1;
          if (b.enrollmentDate == null) return 1;
          return a.enrollmentDate.localeCompare(b.enrollmentDate);
        };
      case clsStudentInfoEN.con_PostCode:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.postCode == null) return -1;
          if (b.postCode == null) return 1;
          return a.postCode.localeCompare(b.postCode);
        };
      case clsStudentInfoEN.con_Email:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.email == null) return -1;
          if (b.email == null) return 1;
          return a.email.localeCompare(b.email);
        };
      case clsStudentInfoEN.con_IsMessage:
        return (a: clsStudentInfoEN) => {
          if (a.isMessage == true) return 1;
          else return -1;
        };
      case clsStudentInfoEN.con_Microblog:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.microblog == null) return -1;
          if (b.microblog == null) return 1;
          return a.microblog.localeCompare(b.microblog);
        };
      case clsStudentInfoEN.con_PhoneNumber:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.phoneNumber == null) return -1;
          if (b.phoneNumber == null) return 1;
          return a.phoneNumber.localeCompare(b.phoneNumber);
        };
      case clsStudentInfoEN.con_Headphoto:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.headphoto == null) return -1;
          if (b.headphoto == null) return 1;
          return a.headphoto.localeCompare(b.headphoto);
        };
      case clsStudentInfoEN.con_QQ:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.qQ == null) return -1;
          if (b.qQ == null) return 1;
          return a.qQ.localeCompare(b.qQ);
        };
      case clsStudentInfoEN.con_RegisterPassword:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.registerPassword == null) return -1;
          if (b.registerPassword == null) return 1;
          return a.registerPassword.localeCompare(b.registerPassword);
        };
      case clsStudentInfoEN.con_UpdDate:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsStudentInfoEN.con_UpdUser:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsStudentInfoEN.con_Memo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[StudentInfo]中不存在!(in ${studentInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsStudentInfoEN.con_IdStudentInfo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          return b.idStudentInfo.localeCompare(a.idStudentInfo);
        };
      case clsStudentInfoEN.con_StuId:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          return b.stuId.localeCompare(a.stuId);
        };
      case clsStudentInfoEN.con_StuName:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          return b.stuName.localeCompare(a.stuName);
        };
      case clsStudentInfoEN.con_IdPolitics:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idPolitics == null) return -1;
          if (a.idPolitics == null) return 1;
          return b.idPolitics.localeCompare(a.idPolitics);
        };
      case clsStudentInfoEN.con_IdSex:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idSex == null) return -1;
          if (a.idSex == null) return 1;
          return b.idSex.localeCompare(a.idSex);
        };
      case clsStudentInfoEN.con_IdEthnic:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idEthnic == null) return -1;
          if (a.idEthnic == null) return 1;
          return b.idEthnic.localeCompare(a.idEthnic);
        };
      case clsStudentInfoEN.con_IdUniZone:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idUniZone == null) return -1;
          if (a.idUniZone == null) return 1;
          return b.idUniZone.localeCompare(a.idUniZone);
        };
      case clsStudentInfoEN.con_IdStuType:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idStuType == null) return -1;
          if (a.idStuType == null) return 1;
          return b.idStuType.localeCompare(a.idStuType);
        };
      case clsStudentInfoEN.con_IdXzCollege:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idXzCollege == null) return -1;
          if (a.idXzCollege == null) return 1;
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsStudentInfoEN.con_IdXzMajor:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idXzMajor == null) return -1;
          if (a.idXzMajor == null) return 1;
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsStudentInfoEN.con_IdGradeBase:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idGradeBase == null) return -1;
          if (a.idGradeBase == null) return 1;
          return b.idGradeBase.localeCompare(a.idGradeBase);
        };
      case clsStudentInfoEN.con_IdGrade:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idGrade == null) return -1;
          if (a.idGrade == null) return 1;
          return b.idGrade.localeCompare(a.idGrade);
        };
      case clsStudentInfoEN.con_IdXsStatus:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idXsStatus == null) return -1;
          if (a.idXsStatus == null) return 1;
          return b.idXsStatus.localeCompare(a.idXsStatus);
        };
      case clsStudentInfoEN.con_IdAdminCls:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idAdminCls == null) return -1;
          if (a.idAdminCls == null) return 1;
          return b.idAdminCls.localeCompare(a.idAdminCls);
        };
      case clsStudentInfoEN.con_Birthday:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.birthday == null) return -1;
          if (a.birthday == null) return 1;
          return b.birthday.localeCompare(a.birthday);
        };
      case clsStudentInfoEN.con_NativePlace:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.nativePlace == null) return -1;
          if (a.nativePlace == null) return 1;
          return b.nativePlace.localeCompare(a.nativePlace);
        };
      case clsStudentInfoEN.con_Duty:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.duty == null) return -1;
          if (a.duty == null) return 1;
          return b.duty.localeCompare(a.duty);
        };
      case clsStudentInfoEN.con_IdCardNo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idCardNo == null) return -1;
          if (a.idCardNo == null) return 1;
          return b.idCardNo.localeCompare(a.idCardNo);
        };
      case clsStudentInfoEN.con_StuCardNo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.stuCardNo == null) return -1;
          if (a.stuCardNo == null) return 1;
          return b.stuCardNo.localeCompare(a.stuCardNo);
        };
      case clsStudentInfoEN.con_LiveAddress:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.liveAddress == null) return -1;
          if (a.liveAddress == null) return 1;
          return b.liveAddress.localeCompare(a.liveAddress);
        };
      case clsStudentInfoEN.con_HomePhone:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.homePhone == null) return -1;
          if (a.homePhone == null) return 1;
          return b.homePhone.localeCompare(a.homePhone);
        };
      case clsStudentInfoEN.con_IdCardNo2:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idCardNo2 == null) return -1;
          if (a.idCardNo2 == null) return 1;
          return b.idCardNo2.localeCompare(a.idCardNo2);
        };
      case clsStudentInfoEN.con_StudentNumber:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.studentNumber == null) return -1;
          if (a.studentNumber == null) return 1;
          return b.studentNumber.localeCompare(a.studentNumber);
        };
      case clsStudentInfoEN.con_CardNo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.cardNo == null) return -1;
          if (a.cardNo == null) return 1;
          return b.cardNo.localeCompare(a.cardNo);
        };
      case clsStudentInfoEN.con_IsGpUser:
        return (b: clsStudentInfoEN) => {
          if (b.isGpUser == true) return 1;
          else return -1;
        };
      case clsStudentInfoEN.con_IsLocalUser:
        return (b: clsStudentInfoEN) => {
          if (b.isLocalUser == true) return 1;
          else return -1;
        };
      case clsStudentInfoEN.con_IsLeaved:
        return (b: clsStudentInfoEN) => {
          if (b.isLeaved == true) return 1;
          else return -1;
        };
      case clsStudentInfoEN.con_IdSchool:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.idSchool == null) return -1;
          if (a.idSchool == null) return 1;
          return b.idSchool.localeCompare(a.idSchool);
        };
      case clsStudentInfoEN.con_UserId:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.userId == null) return -1;
          if (a.userId == null) return 1;
          return b.userId.localeCompare(a.userId);
        };
      case clsStudentInfoEN.con_UserTypeId:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.userTypeId == null) return -1;
          if (a.userTypeId == null) return 1;
          return b.userTypeId.localeCompare(a.userTypeId);
        };
      case clsStudentInfoEN.con_UserType:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.userType == null) return -1;
          if (a.userType == null) return 1;
          return b.userType.localeCompare(a.userType);
        };
      case clsStudentInfoEN.con_EnrollmentDate:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.enrollmentDate == null) return -1;
          if (a.enrollmentDate == null) return 1;
          return b.enrollmentDate.localeCompare(a.enrollmentDate);
        };
      case clsStudentInfoEN.con_PostCode:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.postCode == null) return -1;
          if (a.postCode == null) return 1;
          return b.postCode.localeCompare(a.postCode);
        };
      case clsStudentInfoEN.con_Email:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.email == null) return -1;
          if (a.email == null) return 1;
          return b.email.localeCompare(a.email);
        };
      case clsStudentInfoEN.con_IsMessage:
        return (b: clsStudentInfoEN) => {
          if (b.isMessage == true) return 1;
          else return -1;
        };
      case clsStudentInfoEN.con_Microblog:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.microblog == null) return -1;
          if (a.microblog == null) return 1;
          return b.microblog.localeCompare(a.microblog);
        };
      case clsStudentInfoEN.con_PhoneNumber:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.phoneNumber == null) return -1;
          if (a.phoneNumber == null) return 1;
          return b.phoneNumber.localeCompare(a.phoneNumber);
        };
      case clsStudentInfoEN.con_Headphoto:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.headphoto == null) return -1;
          if (a.headphoto == null) return 1;
          return b.headphoto.localeCompare(a.headphoto);
        };
      case clsStudentInfoEN.con_QQ:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.qQ == null) return -1;
          if (a.qQ == null) return 1;
          return b.qQ.localeCompare(a.qQ);
        };
      case clsStudentInfoEN.con_RegisterPassword:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.registerPassword == null) return -1;
          if (a.registerPassword == null) return 1;
          return b.registerPassword.localeCompare(a.registerPassword);
        };
      case clsStudentInfoEN.con_UpdDate:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsStudentInfoEN.con_UpdUser:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsStudentInfoEN.con_Memo:
        return (a: clsStudentInfoEN, b: clsStudentInfoEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[StudentInfo]中不存在!(in ${studentInfo_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
//该表没有使用Cache,不需要生成[GetNameByIdStudentInfoCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function StudentInfo_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsStudentInfoEN.con_IdStudentInfo:
      return (obj: clsStudentInfoEN) => {
        return obj.idStudentInfo === value;
      };
    case clsStudentInfoEN.con_StuId:
      return (obj: clsStudentInfoEN) => {
        return obj.stuId === value;
      };
    case clsStudentInfoEN.con_StuName:
      return (obj: clsStudentInfoEN) => {
        return obj.stuName === value;
      };
    case clsStudentInfoEN.con_IdPolitics:
      return (obj: clsStudentInfoEN) => {
        return obj.idPolitics === value;
      };
    case clsStudentInfoEN.con_IdSex:
      return (obj: clsStudentInfoEN) => {
        return obj.idSex === value;
      };
    case clsStudentInfoEN.con_IdEthnic:
      return (obj: clsStudentInfoEN) => {
        return obj.idEthnic === value;
      };
    case clsStudentInfoEN.con_IdUniZone:
      return (obj: clsStudentInfoEN) => {
        return obj.idUniZone === value;
      };
    case clsStudentInfoEN.con_IdStuType:
      return (obj: clsStudentInfoEN) => {
        return obj.idStuType === value;
      };
    case clsStudentInfoEN.con_IdXzCollege:
      return (obj: clsStudentInfoEN) => {
        return obj.idXzCollege === value;
      };
    case clsStudentInfoEN.con_IdXzMajor:
      return (obj: clsStudentInfoEN) => {
        return obj.idXzMajor === value;
      };
    case clsStudentInfoEN.con_IdGradeBase:
      return (obj: clsStudentInfoEN) => {
        return obj.idGradeBase === value;
      };
    case clsStudentInfoEN.con_IdGrade:
      return (obj: clsStudentInfoEN) => {
        return obj.idGrade === value;
      };
    case clsStudentInfoEN.con_IdXsStatus:
      return (obj: clsStudentInfoEN) => {
        return obj.idXsStatus === value;
      };
    case clsStudentInfoEN.con_IdAdminCls:
      return (obj: clsStudentInfoEN) => {
        return obj.idAdminCls === value;
      };
    case clsStudentInfoEN.con_Birthday:
      return (obj: clsStudentInfoEN) => {
        return obj.birthday === value;
      };
    case clsStudentInfoEN.con_NativePlace:
      return (obj: clsStudentInfoEN) => {
        return obj.nativePlace === value;
      };
    case clsStudentInfoEN.con_Duty:
      return (obj: clsStudentInfoEN) => {
        return obj.duty === value;
      };
    case clsStudentInfoEN.con_IdCardNo:
      return (obj: clsStudentInfoEN) => {
        return obj.idCardNo === value;
      };
    case clsStudentInfoEN.con_StuCardNo:
      return (obj: clsStudentInfoEN) => {
        return obj.stuCardNo === value;
      };
    case clsStudentInfoEN.con_LiveAddress:
      return (obj: clsStudentInfoEN) => {
        return obj.liveAddress === value;
      };
    case clsStudentInfoEN.con_HomePhone:
      return (obj: clsStudentInfoEN) => {
        return obj.homePhone === value;
      };
    case clsStudentInfoEN.con_IdCardNo2:
      return (obj: clsStudentInfoEN) => {
        return obj.idCardNo2 === value;
      };
    case clsStudentInfoEN.con_StudentNumber:
      return (obj: clsStudentInfoEN) => {
        return obj.studentNumber === value;
      };
    case clsStudentInfoEN.con_CardNo:
      return (obj: clsStudentInfoEN) => {
        return obj.cardNo === value;
      };
    case clsStudentInfoEN.con_IsGpUser:
      return (obj: clsStudentInfoEN) => {
        return obj.isGpUser === value;
      };
    case clsStudentInfoEN.con_IsLocalUser:
      return (obj: clsStudentInfoEN) => {
        return obj.isLocalUser === value;
      };
    case clsStudentInfoEN.con_IsLeaved:
      return (obj: clsStudentInfoEN) => {
        return obj.isLeaved === value;
      };
    case clsStudentInfoEN.con_IdSchool:
      return (obj: clsStudentInfoEN) => {
        return obj.idSchool === value;
      };
    case clsStudentInfoEN.con_UserId:
      return (obj: clsStudentInfoEN) => {
        return obj.userId === value;
      };
    case clsStudentInfoEN.con_UserTypeId:
      return (obj: clsStudentInfoEN) => {
        return obj.userTypeId === value;
      };
    case clsStudentInfoEN.con_UserType:
      return (obj: clsStudentInfoEN) => {
        return obj.userType === value;
      };
    case clsStudentInfoEN.con_EnrollmentDate:
      return (obj: clsStudentInfoEN) => {
        return obj.enrollmentDate === value;
      };
    case clsStudentInfoEN.con_PostCode:
      return (obj: clsStudentInfoEN) => {
        return obj.postCode === value;
      };
    case clsStudentInfoEN.con_Email:
      return (obj: clsStudentInfoEN) => {
        return obj.email === value;
      };
    case clsStudentInfoEN.con_IsMessage:
      return (obj: clsStudentInfoEN) => {
        return obj.isMessage === value;
      };
    case clsStudentInfoEN.con_Microblog:
      return (obj: clsStudentInfoEN) => {
        return obj.microblog === value;
      };
    case clsStudentInfoEN.con_PhoneNumber:
      return (obj: clsStudentInfoEN) => {
        return obj.phoneNumber === value;
      };
    case clsStudentInfoEN.con_Headphoto:
      return (obj: clsStudentInfoEN) => {
        return obj.headphoto === value;
      };
    case clsStudentInfoEN.con_QQ:
      return (obj: clsStudentInfoEN) => {
        return obj.qQ === value;
      };
    case clsStudentInfoEN.con_RegisterPassword:
      return (obj: clsStudentInfoEN) => {
        return obj.registerPassword === value;
      };
    case clsStudentInfoEN.con_UpdDate:
      return (obj: clsStudentInfoEN) => {
        return obj.updDate === value;
      };
    case clsStudentInfoEN.con_UpdUser:
      return (obj: clsStudentInfoEN) => {
        return obj.updUser === value;
      };
    case clsStudentInfoEN.con_Memo:
      return (obj: clsStudentInfoEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[StudentInfo]中不存在!(in ${studentInfo_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}
//该表没有使用Cache,不需要生成[func]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func )
//该表没有使用Cache,不需要生成[StudentInfo__funcKey]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFldValueAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function StudentInfo_GetFldValueAsync(
  strFldName: string,
  strWhereCond: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetFldValueAsync';
  const strAction = 'GetFldValue';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strFldName,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const arrId = data.returnStrLst.split(',');
      return arrId;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function StudentInfo_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 */
export async function StudentInfo_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 根据条件获取满足条件的第一条记录对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * @param strWhereCond:条件
 * @returns 第一条记录对象
 **/
export async function StudentInfo_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsStudentInfoEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObj = data.returnObj;
      if (returnObj == null) {
        return null;
      }
      //console.log(returnObj);
      const objStudentInfo = StudentInfo_GetObjFromJsonObj(returnObj);
      return objStudentInfo;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstClientCache]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstlocalStoragePureCache]函数;

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function StudentInfo_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsStudentInfoEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          studentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = StudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstsessionStorage]函数;
//该表没有使用Cache,不需要生成[GetObjLstsessionStoragePureCache]函数;
//该表没有使用Cache,不需要生成[GetObjLst_Cache]函数;
//该表没有使用Cache,不需要生成[GetObjLstPureCache]函数;
//该表没有使用Cache,不需要生成[GetSubObjLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdStudentInfo:关键字列表
 * @returns 对象列表
 **/
export async function StudentInfo_GetObjLstByIdStudentInfoLstAsync(
  arrIdStudentInfo: Array<string>,
): Promise<Array<clsStudentInfoEN>> {
  const strThisFuncName = 'GetObjLstByIdStudentInfoLstAsync';
  const strAction = 'GetObjLstByIdStudentInfoLst';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdStudentInfo, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          studentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = StudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByIdStudentInfoLstCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstCache)

/**
 * 根据顶部条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * @param objTopPara:获取顶部对象列表的参数对象
 * @returns 获取的相应对象列表
 **/
export async function StudentInfo_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsStudentInfoEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          studentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = StudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 根据范围条件获取相应的记录对象列表,获取某范围的记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * @param objRangePara:根据范围获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function StudentInfo_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsStudentInfoEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRangePara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          studentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = StudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function StudentInfo_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsStudentInfoEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsStudentInfoEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objPagerPara, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          studentInfo_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = StudentInfo_GetObjLstByJSONObjLst(returnObjLst);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 调用WebApi来删除记录,根据关键字来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * @param strIdStudentInfo:关键字
 * @returns 获取删除的结果
 **/
export async function StudentInfo_DelRecordAsync(strIdStudentInfo: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(studentInfo_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdStudentInfo);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const configDel = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.delete(strUrl, configDel);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * @param arrIdStudentInfo:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function StudentInfo_DelStudentInfosAsync(
  arrIdStudentInfo: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelStudentInfosAsync';
  const strAction = 'DelStudentInfos';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdStudentInfo, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetObjExLstByPagerCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjExLstByPagerCache)

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CopyToEx)
 * @param objStudentInfoENS:源对象
 * @returns 目标对象=>clsStudentInfoEN:objStudentInfoENT
 **/
export function StudentInfo_CopyToEx(objStudentInfoENS: clsStudentInfoEN): clsStudentInfoENEx {
  const strThisFuncName = StudentInfo_CopyToEx.name;
  const objStudentInfoENT = new clsStudentInfoENEx();
  try {
    ObjectAssign(objStudentInfoENT, objStudentInfoENS);
    return objStudentInfoENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001294)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objStudentInfoENT;
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function StudentInfo_FuncMapByFldName(
  strFldName: string,
  objStudentInfoEx: clsStudentInfoENEx,
) {
  const strThisFuncName = StudentInfo_FuncMapByFldName.name;
  strFldName = strFldName.replace('|Ex', '');
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsStudentInfoEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsStudentInfoENEx.con_GradeName:
      return StudentInfo_FuncMapGradeName(objStudentInfoEx);
    case clsStudentInfoENEx.con_GradeBaseName:
      return StudentInfo_FuncMapGradeBaseName(objStudentInfoEx);
    case clsStudentInfoENEx.con_UniZoneDesc:
      return StudentInfo_FuncMapUniZoneDesc(objStudentInfoEx);
    case clsStudentInfoENEx.con_CollegeName:
      return StudentInfo_FuncMapCollegeName(objStudentInfoEx);
    case clsStudentInfoENEx.con_MajorName:
      return StudentInfo_FuncMapMajorName(objStudentInfoEx);
    case clsStudentInfoENEx.con_DateTimeSim:
      return StudentInfo_FuncMapDateTimeSim(objStudentInfoEx);
    case clsStudentInfoENEx.con_SexDesc:
      return StudentInfo_FuncMapSexDesc(objStudentInfoEx);
    case clsStudentInfoENEx.con_AdminClsName:
      return StudentInfo_FuncMapAdminClsName(objStudentInfoEx);
    case clsStudentInfoENEx.con_SchoolNameA:
      return StudentInfo_FuncMapSchoolNameA(objStudentInfoEx);
    case clsStudentInfoENEx.con_SchoolName:
      return StudentInfo_FuncMapSchoolName(objStudentInfoEx);
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
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByExKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function StudentInfo_SortFunByExKey(strKey: string, AscOrDesc: string) {
  strKey = strKey.replace('|Ex', '');
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsStudentInfoENEx.con_GradeName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.gradeName === null && b.gradeName === null) return 0;
          if (a.gradeName === null) return -1;
          if (b.gradeName === null) return 1;
          return a.gradeName.localeCompare(b.gradeName);
        };
      case clsStudentInfoENEx.con_GradeBaseName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsStudentInfoENEx.con_UniZoneDesc:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
        };
      case clsStudentInfoENEx.con_CollegeName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsStudentInfoENEx.con_MajorName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsStudentInfoENEx.con_DateTimeSim:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return -1;
          if (b.dateTimeSim === null) return 1;
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      case clsStudentInfoENEx.con_SexDesc:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.sexDesc === null && b.sexDesc === null) return 0;
          if (a.sexDesc === null) return -1;
          if (b.sexDesc === null) return 1;
          return a.sexDesc.localeCompare(b.sexDesc);
        };
      case clsStudentInfoENEx.con_StuNameEx:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.stuNameEx === null && b.stuNameEx === null) return 0;
          if (a.stuNameEx === null) return -1;
          if (b.stuNameEx === null) return 1;
          return a.stuNameEx.localeCompare(b.stuNameEx);
        };
      case clsStudentInfoENEx.con_AdminClsName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.adminClsName === null && b.adminClsName === null) return 0;
          if (a.adminClsName === null) return -1;
          if (b.adminClsName === null) return 1;
          return a.adminClsName.localeCompare(b.adminClsName);
        };
      case clsStudentInfoENEx.con_SchoolNameA:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.schoolNameA === null && b.schoolNameA === null) return 0;
          if (a.schoolNameA === null) return -1;
          if (b.schoolNameA === null) return 1;
          return a.schoolNameA.localeCompare(b.schoolNameA);
        };
      case clsStudentInfoENEx.con_SchoolName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.schoolName === null && b.schoolName === null) return 0;
          if (a.schoolName === null) return -1;
          if (b.schoolName === null) return 1;
          return a.schoolName.localeCompare(b.schoolName);
        };
      default:
        return StudentInfo_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsStudentInfoENEx.con_GradeName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.gradeName === null && b.gradeName === null) return 0;
          if (a.gradeName === null) return 1;
          if (b.gradeName === null) return -1;
          return b.gradeName.localeCompare(a.gradeName);
        };
      case clsStudentInfoENEx.con_GradeBaseName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsStudentInfoENEx.con_UniZoneDesc:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.uniZoneDesc.localeCompare(a.uniZoneDesc);
        };
      case clsStudentInfoENEx.con_CollegeName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsStudentInfoENEx.con_MajorName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsStudentInfoENEx.con_DateTimeSim:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.dateTimeSim === null && b.dateTimeSim === null) return 0;
          if (a.dateTimeSim === null) return 1;
          if (b.dateTimeSim === null) return -1;
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      case clsStudentInfoENEx.con_SexDesc:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.sexDesc === null && b.sexDesc === null) return 0;
          if (a.sexDesc === null) return 1;
          if (b.sexDesc === null) return -1;
          return b.sexDesc.localeCompare(a.sexDesc);
        };
      case clsStudentInfoENEx.con_StuNameEx:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.stuNameEx === null && b.stuNameEx === null) return 0;
          if (a.stuNameEx === null) return 1;
          if (b.stuNameEx === null) return -1;
          return b.stuNameEx.localeCompare(a.stuNameEx);
        };
      case clsStudentInfoENEx.con_AdminClsName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.adminClsName === null && b.adminClsName === null) return 0;
          if (a.adminClsName === null) return 1;
          if (b.adminClsName === null) return -1;
          return b.adminClsName.localeCompare(a.adminClsName);
        };
      case clsStudentInfoENEx.con_SchoolNameA:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.schoolNameA === null && b.schoolNameA === null) return 0;
          if (a.schoolNameA === null) return 1;
          if (b.schoolNameA === null) return -1;
          return b.schoolNameA.localeCompare(a.schoolNameA);
        };
      case clsStudentInfoENEx.con_SchoolName:
        return (a: clsStudentInfoENEx, b: clsStudentInfoENEx) => {
          if (a.schoolName === null && b.schoolName === null) return 0;
          if (a.schoolName === null) return 1;
          if (b.schoolName === null) return -1;
          return b.schoolName.localeCompare(a.schoolName);
        };
      default:
        return StudentInfo_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapGradeName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapGradeName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.gradeName) == true) {
      const XzGradeIdGrade = objStudentInfo.idGrade;
      const XzGradeGradeName = await XzGrade_func(
        clsXzGradeEN.con_IdGrade,
        clsXzGradeEN.con_GradeName,
        XzGradeIdGrade,
      );
      objStudentInfo.gradeName = XzGradeGradeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001434)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapGradeBaseName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.gradeBaseName) == true) {
      const XzGradeBaseIdGradeBase = objStudentInfo.idGradeBase;
      const XzGradeBaseGradeBaseName = await XzGradeBase_func(
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        XzGradeBaseIdGradeBase,
      );
      objStudentInfo.gradeBaseName = XzGradeBaseGradeBaseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001429)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapUniZoneDesc(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapUniZoneDesc.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.uniZoneDesc) == true) {
      const XzUniZoneIdUniZone = objStudentInfo.idUniZone;
      const XzUniZoneUniZoneDesc = await XzUniZone_func(
        clsXzUniZoneEN.con_IdUniZone,
        clsXzUniZoneEN.con_UniZoneDesc,
        XzUniZoneIdUniZone,
      );
      objStudentInfo.uniZoneDesc = XzUniZoneUniZoneDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001459)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapCollegeName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.collegeName) == true) {
      const XzClgIdXzCollege = objStudentInfo.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgIdXzCollege,
      );
      objStudentInfo.collegeName = XzClgCollegeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001405)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapMajorName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.majorName) == true) {
      const XzMajorIdXzMajor = objStudentInfo.idXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajorIdXzMajor,
      );
      objStudentInfo.majorName = XzMajorMajorName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001404)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapDateTimeSim(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objStudentInfo.updDate);
      objStudentInfo.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001326)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapSexDesc(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapSexDesc.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.sexDesc) == true) {
      const SexIdSex = objStudentInfo.idSex;
      const SexSexDesc = await Sex_func(clsSexEN.con_IdSex, clsSexEN.con_SexDesc, SexIdSex);
      objStudentInfo.sexDesc = SexSexDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001460)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapAdminClsName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapAdminClsName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.adminClsName) == true) {
      const XzAdminClsIdAdminCls = objStudentInfo.idAdminCls;
      const XzAdminClsAdminClsName = await XzAdminCls_func(
        clsXzAdminClsEN.con_IdAdminCls,
        clsXzAdminClsEN.con_AdminClsName,
        XzAdminClsIdAdminCls,
      );
      objStudentInfo.adminClsName = XzAdminClsAdminClsName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001435)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapSchoolNameA(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapSchoolNameA.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.schoolNameA) == true) {
      const XzSchoolIdSchool = objStudentInfo.idSchool;
      const XzSchoolSchoolNameA = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolNameA,
        XzSchoolIdSchool,
      );
      objStudentInfo.schoolNameA = XzSchoolSchoolNameA;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001461)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FuncMap)
 * @param objStudentInfoS:源对象
 **/
export async function StudentInfo_FuncMapSchoolName(objStudentInfo: clsStudentInfoENEx) {
  const strThisFuncName = StudentInfo_FuncMapSchoolName.name;
  try {
    if (IsNullOrEmpty(objStudentInfo.schoolName) == true) {
      const XzSchoolIdSchool = objStudentInfo.idSchool;
      const XzSchoolSchoolName = await XzSchool_func(
        clsXzSchoolEN.con_IdSchool,
        clsXzSchoolEN.con_SchoolName,
        XzSchoolIdSchool,
      );
      objStudentInfo.schoolName = XzSchoolSchoolName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl001403)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      studentInfo_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * @returns 实际删除记录的个数
 **/
export async function StudentInfo_DelStudentInfosByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelStudentInfosByCondAsync';
  const strAction = 'DelStudentInfosByCond';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 调用WebApi来添加记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * @param objStudentInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function StudentInfo_AddNewRecordAsync(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objStudentInfoEN);
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objStudentInfoEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 调用WebApi来添加记录,关键字用最大关键字,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
 * @param objStudentInfoEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function StudentInfo_AddNewRecordWithMaxIdAsync(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objStudentInfoEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/** 添加新记录,保存函数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewObjSave)
 **/
export async function StudentInfo_AddNewObjSave(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<AddRecordResult> {
  const strThisFuncName = 'AddNewObjSave';
  try {
    StudentInfo_CheckPropertyNew(objStudentInfoEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${studentInfo_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    alert(strMsg);
    return { keyword: '', success: false }; //一定要有一个返回值,否则会出错!
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await StudentInfo_CheckUniCond4Add(objStudentInfoEN);
    if (bolIsExistCond == false) {
      return { keyword: '', success: false };
    }
    let returnBool = false;
    const returnKeyId = await StudentInfo_AddNewRecordWithMaxIdAsync(objStudentInfoEN);
    if (IsNullOrEmpty(returnKeyId) == false) {
      returnBool = true;
    }
    if (returnBool == true) {
      //StudentInfo_ReFreshCache();
    } else {
      const strInfo = `添加[学生(StudentInfo)]记录不成功!`;
      //显示信息框
      throw strInfo;
    }
    return { keyword: returnKeyId, success: returnBool }; //一定要有一个返回值,否则会出错!
  } catch (e) {
    const strMsg = `添加记录不成功,${e}.(in ${studentInfo_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/** 为添加记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Add)
 **/
export async function StudentInfo_CheckUniCond4Add(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<boolean> {
  const strUniquenessCondition = StudentInfo_GetUniCondStr(objStudentInfoEN);
  const bolIsExistCondition = await StudentInfo_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 为修改记录检查唯一性条件
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_CheckUniCondition4Update)
 **/
export async function StudentInfo_CheckUniCond4Update(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<boolean> {
  const strUniquenessCondition = StudentInfo_GetUniCondStr4Update(objStudentInfoEN);
  const bolIsExistCondition = await StudentInfo_IsExistRecordAsync(strUniquenessCondition);
  if (bolIsExistCondition == true) {
    const strMsg = Format(
      '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
      strUniquenessCondition,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }
  return true;
}

/** 修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateObjSave)
 **/
export async function StudentInfo_UpdateObjSave(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateObjSave';
  objStudentInfoEN.sfUpdFldSetStr = objStudentInfoEN.updFldString; //设置哪些字段被修改(脏字段)
  if (objStudentInfoEN.idStudentInfo == '' || objStudentInfoEN.idStudentInfo == undefined) {
    console.error('关键字不能为空!');
    throw '关键字不能为空!';
  }
  try {
    StudentInfo_CheckProperty4Update(objStudentInfoEN);
  } catch (e) {
    const strMsg = `检查数据不成功,${e}.(in ${studentInfo_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
  try {
    //检查唯一性条件
    const bolIsExistCond = await StudentInfo_CheckUniCond4Update(objStudentInfoEN);
    if (bolIsExistCond == false) {
      return false;
    }
    const returnBool = await StudentInfo_UpdateRecordAsync(objStudentInfoEN);
    if (returnBool == true) {
      //StudentInfo_ReFreshCache();
    }
    return returnBool;
  } catch (e) {
    const strMsg = `修改记录不成功,${e}.(in ${studentInfo_ConstructorName}.${strThisFuncName})`;
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objStudentInfoEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function StudentInfo_AddNewRecordWithReturnKeyAsync(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objStudentInfoEN, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 调用WebApi来修改记录,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * @param objStudentInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function StudentInfo_UpdateRecordAsync(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objStudentInfoEN.sfUpdFldSetStr === undefined ||
    objStudentInfoEN.sfUpdFldSetStr === null ||
    objStudentInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objStudentInfoEN.idStudentInfo,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objStudentInfoEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 调用WebApi来编辑记录（存在就修改，不存在就添加）,数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_EditRecordExAsync)
 * @param objStudentInfoEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function StudentInfo_EditRecordExAsync(
  objStudentInfoEN: clsStudentInfoEN,
): Promise<boolean> {
  const strThisFuncName = 'EditRecordExAsync';
  const strAction = 'EditRecordEx';
  if (
    objStudentInfoEN.sfUpdFldSetStr === undefined ||
    objStudentInfoEN.sfUpdFldSetStr === null ||
    objStudentInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objStudentInfoEN.idStudentInfo,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objStudentInfoEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateWithConditionAsync)
 * @param objStudentInfoEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function StudentInfo_UpdateWithConditionAsync(
  objStudentInfoEN: clsStudentInfoEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objStudentInfoEN.sfUpdFldSetStr === undefined ||
    objStudentInfoEN.sfUpdFldSetStr === null ||
    objStudentInfoEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objStudentInfoEN.idStudentInfo,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);
  objStudentInfoEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objStudentInfoEN, config);
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistRecordCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordCache)

/**
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * @param strWhereCond:条件
 * @returns 是否存在记录？
 **/
export async function StudentInfo_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[IsExistCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)

/**
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * @param strIdStudentInfo:关键字
 * @returns 是否存在?存在返回True
 **/
export async function StudentInfo_IsExistAsync(strIdStudentInfo: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdStudentInfo,
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondAsync)
 * @param strWhereCond:条件
 * @returns 获取某一条件的记录数
 **/
export async function StudentInfo_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnInt;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
//该表没有使用Cache,不需要生成[GetRecCountByCondCache]函数;(in AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)

/**
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * @returns 获取表的最大关键字
 **/
export async function StudentInfo_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/*该表的关键字类型不是字符型带前缀自增,不需要生成获取最大关键字函数!*/

/**
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * @param mapParam:参数列表
 * @returns 获取当前表关键字值的最大值
 */
export async function StudentInfo_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(studentInfo_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrefix,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      return data.returnStr;
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
        '网络错误!访问地址:{0}不成功!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        studentInfo_ConstructorName,
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
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function StudentInfo_GetWebApiUrl(strController: string, strAction: string): string {
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
//该表没有使用Cache,不需要生成[ReFreshCache]函数;
//该表没有使用Cache,不需要生成[ReFreshThisCache]函数;
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function StudentInfo_CheckPropertyNew(pobjStudentInfoEN: clsStudentInfoEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjStudentInfoEN.stuId) === true) {
    throw new Error(
      `(errid:Watl000411)字段[学号]不能为空(In 学生)!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.stuName) === true) {
    throw new Error(
      `(errid:Watl000411)字段[姓名]不能为空(In 学生)!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idStudentInfo) == false &&
    GetStrLen(pobjStudentInfoEN.idStudentInfo) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idStudentInfo}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.stuId) == false && GetStrLen(pobjStudentInfoEN.stuId) > 20) {
    throw new Error(
      `(errid:Watl000413)字段[学号(stuId)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.stuId}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuName) == false &&
    GetStrLen(pobjStudentInfoEN.stuName) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[姓名(stuName)]的长度不能超过50(In 学生(StudentInfo))!值:${pobjStudentInfoEN.stuName}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idPolitics) == false &&
    GetStrLen(pobjStudentInfoEN.idPolitics) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[政治面貌流水号(idPolitics)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idPolitics}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.idSex) == false && GetStrLen(pobjStudentInfoEN.idSex) > 4) {
    throw new Error(
      `(errid:Watl000413)字段[性别流水号(idSex)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idSex}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idEthnic) == false &&
    GetStrLen(pobjStudentInfoEN.idEthnic) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[民族流水号(idEthnic)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idEthnic}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idUniZone) == false &&
    GetStrLen(pobjStudentInfoEN.idUniZone) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[校区流水号(idUniZone)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idUniZone}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idStuType) == false &&
    GetStrLen(pobjStudentInfoEN.idStuType) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[学生类别流水号(idStuType)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idStuType}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXzCollege) == false &&
    GetStrLen(pobjStudentInfoEN.idXzCollege) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[学院流水号(idXzCollege)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idXzCollege}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXzMajor) == false &&
    GetStrLen(pobjStudentInfoEN.idXzMajor) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idXzMajor}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idGradeBase) == false &&
    GetStrLen(pobjStudentInfoEN.idGradeBase) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[入学年级流水号(idGradeBase)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idGradeBase}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idGrade) == false &&
    GetStrLen(pobjStudentInfoEN.idGrade) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[年级流水号(idGrade)]的长度不能超过2(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idGrade}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXsStatus) == false &&
    GetStrLen(pobjStudentInfoEN.idXsStatus) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[学生状态流水号(idXsStatus)]的长度不能超过2(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idXsStatus}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idAdminCls) == false &&
    GetStrLen(pobjStudentInfoEN.idAdminCls) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[行政班流水号(idAdminCls)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idAdminCls}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.birthday) == false &&
    GetStrLen(pobjStudentInfoEN.birthday) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[出生日期(birthday)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.birthday}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.nativePlace) == false &&
    GetStrLen(pobjStudentInfoEN.nativePlace) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[籍贯(nativePlace)]的长度不能超过200(In 学生(StudentInfo))!值:${pobjStudentInfoEN.nativePlace}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.duty) == false && GetStrLen(pobjStudentInfoEN.duty) > 30) {
    throw new Error(
      `(errid:Watl000413)字段[职位(duty)]的长度不能超过30(In 学生(StudentInfo))!值:${pobjStudentInfoEN.duty}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idCardNo) == false &&
    GetStrLen(pobjStudentInfoEN.idCardNo) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[身份证号(idCardNo)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idCardNo}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuCardNo) == false &&
    GetStrLen(pobjStudentInfoEN.stuCardNo) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[学生证号(stuCardNo)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.stuCardNo}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.liveAddress) == false &&
    GetStrLen(pobjStudentInfoEN.liveAddress) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[居住地址(liveAddress)]的长度不能超过200(In 学生(StudentInfo))!值:${pobjStudentInfoEN.liveAddress}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.homePhone) == false &&
    GetStrLen(pobjStudentInfoEN.homePhone) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[住宅电话(homePhone)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.homePhone}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idCardNo2) == false &&
    GetStrLen(pobjStudentInfoEN.idCardNo2) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[内卡号(idCardNo2)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idCardNo2}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.studentNumber) == false &&
    GetStrLen(pobjStudentInfoEN.studentNumber) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[学籍号(studentNumber)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.studentNumber}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.cardNo) == false &&
    GetStrLen(pobjStudentInfoEN.cardNo) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[卡号(cardNo)]的长度不能超过18(In 学生(StudentInfo))!值:${pobjStudentInfoEN.cardNo}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idSchool) == false &&
    GetStrLen(pobjStudentInfoEN.idSchool) > 4
  ) {
    throw new Error(
      `(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idSchool}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userId) == false &&
    GetStrLen(pobjStudentInfoEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 学生(StudentInfo))!值:${pobjStudentInfoEN.userId}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userTypeId) == false &&
    GetStrLen(pobjStudentInfoEN.userTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户类型Id(userTypeId)]的长度不能超过2(In 学生(StudentInfo))!值:${pobjStudentInfoEN.userTypeId}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userType) == false &&
    GetStrLen(pobjStudentInfoEN.userType) > 50
  ) {
    throw new Error(
      `(errid:Watl000413)字段[用户类型(userType)]的长度不能超过50(In 学生(StudentInfo))!值:${pobjStudentInfoEN.userType}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.enrollmentDate) == false &&
    GetStrLen(pobjStudentInfoEN.enrollmentDate) > 8
  ) {
    throw new Error(
      `(errid:Watl000413)字段[入校日期(enrollmentDate)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.enrollmentDate}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.postCode) == false &&
    GetStrLen(pobjStudentInfoEN.postCode) > 6
  ) {
    throw new Error(
      `(errid:Watl000413)字段[邮编(postCode)]的长度不能超过6(In 学生(StudentInfo))!值:${pobjStudentInfoEN.postCode}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.email) == false && GetStrLen(pobjStudentInfoEN.email) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[电子邮箱(email)]的长度不能超过100(In 学生(StudentInfo))!值:${pobjStudentInfoEN.email}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.microblog) == false &&
    GetStrLen(pobjStudentInfoEN.microblog) > 200
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Microblog(microblog)]的长度不能超过200(In 学生(StudentInfo))!值:${pobjStudentInfoEN.microblog}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.phoneNumber) == false &&
    GetStrLen(pobjStudentInfoEN.phoneNumber) > 15
  ) {
    throw new Error(
      `(errid:Watl000413)字段[电话(phoneNumber)]的长度不能超过15(In 学生(StudentInfo))!值:${pobjStudentInfoEN.phoneNumber}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.headphoto) == false &&
    GetStrLen(pobjStudentInfoEN.headphoto) > 500
  ) {
    throw new Error(
      `(errid:Watl000413)字段[Headphoto(headphoto)]的长度不能超过500(In 学生(StudentInfo))!值:${pobjStudentInfoEN.headphoto}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.qQ) == false && GetStrLen(pobjStudentInfoEN.qQ) > 100) {
    throw new Error(
      `(errid:Watl000413)字段[QQ(qQ)]的长度不能超过100(In 学生(StudentInfo))!值:${pobjStudentInfoEN.qQ}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.registerPassword) == false &&
    GetStrLen(pobjStudentInfoEN.registerPassword) > 30
  ) {
    throw new Error(
      `(errid:Watl000413)字段[RegisterPassword(registerPassword)]的长度不能超过30(In 学生(StudentInfo))!值:${pobjStudentInfoEN.registerPassword}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.updDate) == false &&
    GetStrLen(pobjStudentInfoEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.updDate}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.updUser) == false &&
    GetStrLen(pobjStudentInfoEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.updUser}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.memo) == false && GetStrLen(pobjStudentInfoEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 学生(StudentInfo))!值:${pobjStudentInfoEN.memo}(clsStudentInfoBL:CheckPropertyNew)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idStudentInfo) == false &&
    undefined !== pobjStudentInfoEN.idStudentInfo &&
    tzDataType.isString(pobjStudentInfoEN.idStudentInfo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学生流水号(idStudentInfo)]的值:[${pobjStudentInfoEN.idStudentInfo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuId) == false &&
    undefined !== pobjStudentInfoEN.stuId &&
    tzDataType.isString(pobjStudentInfoEN.stuId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学号(stuId)]的值:[${pobjStudentInfoEN.stuId}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuName) == false &&
    undefined !== pobjStudentInfoEN.stuName &&
    tzDataType.isString(pobjStudentInfoEN.stuName) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[姓名(stuName)]的值:[${pobjStudentInfoEN.stuName}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idPolitics) == false &&
    undefined !== pobjStudentInfoEN.idPolitics &&
    tzDataType.isString(pobjStudentInfoEN.idPolitics) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[政治面貌流水号(idPolitics)]的值:[${pobjStudentInfoEN.idPolitics}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idSex) == false &&
    undefined !== pobjStudentInfoEN.idSex &&
    tzDataType.isString(pobjStudentInfoEN.idSex) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[性别流水号(idSex)]的值:[${pobjStudentInfoEN.idSex}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idEthnic) == false &&
    undefined !== pobjStudentInfoEN.idEthnic &&
    tzDataType.isString(pobjStudentInfoEN.idEthnic) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[民族流水号(idEthnic)]的值:[${pobjStudentInfoEN.idEthnic}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idUniZone) == false &&
    undefined !== pobjStudentInfoEN.idUniZone &&
    tzDataType.isString(pobjStudentInfoEN.idUniZone) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[校区流水号(idUniZone)]的值:[${pobjStudentInfoEN.idUniZone}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idStuType) == false &&
    undefined !== pobjStudentInfoEN.idStuType &&
    tzDataType.isString(pobjStudentInfoEN.idStuType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学生类别流水号(idStuType)]的值:[${pobjStudentInfoEN.idStuType}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXzCollege) == false &&
    undefined !== pobjStudentInfoEN.idXzCollege &&
    tzDataType.isString(pobjStudentInfoEN.idXzCollege) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学院流水号(idXzCollege)]的值:[${pobjStudentInfoEN.idXzCollege}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXzMajor) == false &&
    undefined !== pobjStudentInfoEN.idXzMajor &&
    tzDataType.isString(pobjStudentInfoEN.idXzMajor) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[${pobjStudentInfoEN.idXzMajor}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idGradeBase) == false &&
    undefined !== pobjStudentInfoEN.idGradeBase &&
    tzDataType.isString(pobjStudentInfoEN.idGradeBase) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[入学年级流水号(idGradeBase)]的值:[${pobjStudentInfoEN.idGradeBase}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idGrade) == false &&
    undefined !== pobjStudentInfoEN.idGrade &&
    tzDataType.isString(pobjStudentInfoEN.idGrade) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[年级流水号(idGrade)]的值:[${pobjStudentInfoEN.idGrade}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXsStatus) == false &&
    undefined !== pobjStudentInfoEN.idXsStatus &&
    tzDataType.isString(pobjStudentInfoEN.idXsStatus) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学生状态流水号(idXsStatus)]的值:[${pobjStudentInfoEN.idXsStatus}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idAdminCls) == false &&
    undefined !== pobjStudentInfoEN.idAdminCls &&
    tzDataType.isString(pobjStudentInfoEN.idAdminCls) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[行政班流水号(idAdminCls)]的值:[${pobjStudentInfoEN.idAdminCls}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.birthday) == false &&
    undefined !== pobjStudentInfoEN.birthday &&
    tzDataType.isString(pobjStudentInfoEN.birthday) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[出生日期(birthday)]的值:[${pobjStudentInfoEN.birthday}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.nativePlace) == false &&
    undefined !== pobjStudentInfoEN.nativePlace &&
    tzDataType.isString(pobjStudentInfoEN.nativePlace) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[籍贯(nativePlace)]的值:[${pobjStudentInfoEN.nativePlace}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.duty) == false &&
    undefined !== pobjStudentInfoEN.duty &&
    tzDataType.isString(pobjStudentInfoEN.duty) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[职位(duty)]的值:[${pobjStudentInfoEN.duty}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idCardNo) == false &&
    undefined !== pobjStudentInfoEN.idCardNo &&
    tzDataType.isString(pobjStudentInfoEN.idCardNo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[身份证号(idCardNo)]的值:[${pobjStudentInfoEN.idCardNo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuCardNo) == false &&
    undefined !== pobjStudentInfoEN.stuCardNo &&
    tzDataType.isString(pobjStudentInfoEN.stuCardNo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学生证号(stuCardNo)]的值:[${pobjStudentInfoEN.stuCardNo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.liveAddress) == false &&
    undefined !== pobjStudentInfoEN.liveAddress &&
    tzDataType.isString(pobjStudentInfoEN.liveAddress) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[居住地址(liveAddress)]的值:[${pobjStudentInfoEN.liveAddress}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.homePhone) == false &&
    undefined !== pobjStudentInfoEN.homePhone &&
    tzDataType.isString(pobjStudentInfoEN.homePhone) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[住宅电话(homePhone)]的值:[${pobjStudentInfoEN.homePhone}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idCardNo2) == false &&
    undefined !== pobjStudentInfoEN.idCardNo2 &&
    tzDataType.isString(pobjStudentInfoEN.idCardNo2) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[内卡号(idCardNo2)]的值:[${pobjStudentInfoEN.idCardNo2}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.studentNumber) == false &&
    undefined !== pobjStudentInfoEN.studentNumber &&
    tzDataType.isString(pobjStudentInfoEN.studentNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学籍号(studentNumber)]的值:[${pobjStudentInfoEN.studentNumber}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.cardNo) == false &&
    undefined !== pobjStudentInfoEN.cardNo &&
    tzDataType.isString(pobjStudentInfoEN.cardNo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[卡号(cardNo)]的值:[${pobjStudentInfoEN.cardNo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjStudentInfoEN.isGpUser &&
    undefined !== pobjStudentInfoEN.isGpUser &&
    tzDataType.isBoolean(pobjStudentInfoEN.isGpUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否Gp用户(isGpUser)]的值:[${pobjStudentInfoEN.isGpUser}], 非法,应该为布尔型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjStudentInfoEN.isLocalUser &&
    undefined !== pobjStudentInfoEN.isLocalUser &&
    tzDataType.isBoolean(pobjStudentInfoEN.isLocalUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否本地用户(isLocalUser)]的值:[${pobjStudentInfoEN.isLocalUser}], 非法,应该为布尔型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjStudentInfoEN.isLeaved &&
    undefined !== pobjStudentInfoEN.isLeaved &&
    tzDataType.isBoolean(pobjStudentInfoEN.isLeaved) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[是否离开(isLeaved)]的值:[${pobjStudentInfoEN.isLeaved}], 非法,应该为布尔型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idSchool) == false &&
    undefined !== pobjStudentInfoEN.idSchool &&
    tzDataType.isString(pobjStudentInfoEN.idSchool) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[学校流水号(idSchool)]的值:[${pobjStudentInfoEN.idSchool}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userId) == false &&
    undefined !== pobjStudentInfoEN.userId &&
    tzDataType.isString(pobjStudentInfoEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户ID(userId)]的值:[${pobjStudentInfoEN.userId}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userTypeId) == false &&
    undefined !== pobjStudentInfoEN.userTypeId &&
    tzDataType.isString(pobjStudentInfoEN.userTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户类型Id(userTypeId)]的值:[${pobjStudentInfoEN.userTypeId}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userType) == false &&
    undefined !== pobjStudentInfoEN.userType &&
    tzDataType.isString(pobjStudentInfoEN.userType) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[用户类型(userType)]的值:[${pobjStudentInfoEN.userType}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.enrollmentDate) == false &&
    undefined !== pobjStudentInfoEN.enrollmentDate &&
    tzDataType.isString(pobjStudentInfoEN.enrollmentDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[入校日期(enrollmentDate)]的值:[${pobjStudentInfoEN.enrollmentDate}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.postCode) == false &&
    undefined !== pobjStudentInfoEN.postCode &&
    tzDataType.isString(pobjStudentInfoEN.postCode) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[邮编(postCode)]的值:[${pobjStudentInfoEN.postCode}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.email) == false &&
    undefined !== pobjStudentInfoEN.email &&
    tzDataType.isString(pobjStudentInfoEN.email) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[电子邮箱(email)]的值:[${pobjStudentInfoEN.email}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    null != pobjStudentInfoEN.isMessage &&
    undefined !== pobjStudentInfoEN.isMessage &&
    tzDataType.isBoolean(pobjStudentInfoEN.isMessage) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[IsMessage(isMessage)]的值:[${pobjStudentInfoEN.isMessage}], 非法,应该为布尔型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.microblog) == false &&
    undefined !== pobjStudentInfoEN.microblog &&
    tzDataType.isString(pobjStudentInfoEN.microblog) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Microblog(microblog)]的值:[${pobjStudentInfoEN.microblog}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.phoneNumber) == false &&
    undefined !== pobjStudentInfoEN.phoneNumber &&
    tzDataType.isString(pobjStudentInfoEN.phoneNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[电话(phoneNumber)]的值:[${pobjStudentInfoEN.phoneNumber}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.headphoto) == false &&
    undefined !== pobjStudentInfoEN.headphoto &&
    tzDataType.isString(pobjStudentInfoEN.headphoto) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[Headphoto(headphoto)]的值:[${pobjStudentInfoEN.headphoto}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.qQ) == false &&
    undefined !== pobjStudentInfoEN.qQ &&
    tzDataType.isString(pobjStudentInfoEN.qQ) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[QQ(qQ)]的值:[${pobjStudentInfoEN.qQ}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.registerPassword) == false &&
    undefined !== pobjStudentInfoEN.registerPassword &&
    tzDataType.isString(pobjStudentInfoEN.registerPassword) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[RegisterPassword(registerPassword)]的值:[${pobjStudentInfoEN.registerPassword}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.updDate) == false &&
    undefined !== pobjStudentInfoEN.updDate &&
    tzDataType.isString(pobjStudentInfoEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改日期(updDate)]的值:[${pobjStudentInfoEN.updDate}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.updUser) == false &&
    undefined !== pobjStudentInfoEN.updUser &&
    tzDataType.isString(pobjStudentInfoEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[修改人(updUser)]的值:[${pobjStudentInfoEN.updUser}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.memo) == false &&
    undefined !== pobjStudentInfoEN.memo &&
    tzDataType.isString(pobjStudentInfoEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000414)字段[备注(memo)]的值:[${pobjStudentInfoEN.memo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckPropertyNew0)`,
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function StudentInfo_CheckProperty4Update(pobjStudentInfoEN: clsStudentInfoEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idStudentInfo) == false &&
    GetStrLen(pobjStudentInfoEN.idStudentInfo) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[学生流水号(idStudentInfo)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idStudentInfo}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.stuId) == false && GetStrLen(pobjStudentInfoEN.stuId) > 20) {
    throw new Error(
      `(errid:Watl000416)字段[学号(stuId)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.stuId}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuName) == false &&
    GetStrLen(pobjStudentInfoEN.stuName) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[姓名(stuName)]的长度不能超过50(In 学生(StudentInfo))!值:${pobjStudentInfoEN.stuName}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idPolitics) == false &&
    GetStrLen(pobjStudentInfoEN.idPolitics) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[政治面貌流水号(idPolitics)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idPolitics}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.idSex) == false && GetStrLen(pobjStudentInfoEN.idSex) > 4) {
    throw new Error(
      `(errid:Watl000416)字段[性别流水号(idSex)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idSex}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idEthnic) == false &&
    GetStrLen(pobjStudentInfoEN.idEthnic) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[民族流水号(idEthnic)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idEthnic}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idUniZone) == false &&
    GetStrLen(pobjStudentInfoEN.idUniZone) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[校区流水号(idUniZone)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idUniZone}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idStuType) == false &&
    GetStrLen(pobjStudentInfoEN.idStuType) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[学生类别流水号(idStuType)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idStuType}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXzCollege) == false &&
    GetStrLen(pobjStudentInfoEN.idXzCollege) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[学院流水号(idXzCollege)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idXzCollege}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXzMajor) == false &&
    GetStrLen(pobjStudentInfoEN.idXzMajor) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idXzMajor}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idGradeBase) == false &&
    GetStrLen(pobjStudentInfoEN.idGradeBase) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[入学年级流水号(idGradeBase)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idGradeBase}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idGrade) == false &&
    GetStrLen(pobjStudentInfoEN.idGrade) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[年级流水号(idGrade)]的长度不能超过2(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idGrade}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXsStatus) == false &&
    GetStrLen(pobjStudentInfoEN.idXsStatus) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[学生状态流水号(idXsStatus)]的长度不能超过2(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idXsStatus}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idAdminCls) == false &&
    GetStrLen(pobjStudentInfoEN.idAdminCls) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[行政班流水号(idAdminCls)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idAdminCls}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.birthday) == false &&
    GetStrLen(pobjStudentInfoEN.birthday) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[出生日期(birthday)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.birthday}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.nativePlace) == false &&
    GetStrLen(pobjStudentInfoEN.nativePlace) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[籍贯(nativePlace)]的长度不能超过200(In 学生(StudentInfo))!值:${pobjStudentInfoEN.nativePlace}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.duty) == false && GetStrLen(pobjStudentInfoEN.duty) > 30) {
    throw new Error(
      `(errid:Watl000416)字段[职位(duty)]的长度不能超过30(In 学生(StudentInfo))!值:${pobjStudentInfoEN.duty}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idCardNo) == false &&
    GetStrLen(pobjStudentInfoEN.idCardNo) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[身份证号(idCardNo)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idCardNo}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuCardNo) == false &&
    GetStrLen(pobjStudentInfoEN.stuCardNo) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[学生证号(stuCardNo)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.stuCardNo}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.liveAddress) == false &&
    GetStrLen(pobjStudentInfoEN.liveAddress) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[居住地址(liveAddress)]的长度不能超过200(In 学生(StudentInfo))!值:${pobjStudentInfoEN.liveAddress}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.homePhone) == false &&
    GetStrLen(pobjStudentInfoEN.homePhone) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[住宅电话(homePhone)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.homePhone}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idCardNo2) == false &&
    GetStrLen(pobjStudentInfoEN.idCardNo2) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[内卡号(idCardNo2)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idCardNo2}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.studentNumber) == false &&
    GetStrLen(pobjStudentInfoEN.studentNumber) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[学籍号(studentNumber)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.studentNumber}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.cardNo) == false &&
    GetStrLen(pobjStudentInfoEN.cardNo) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[卡号(cardNo)]的长度不能超过18(In 学生(StudentInfo))!值:${pobjStudentInfoEN.cardNo}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idSchool) == false &&
    GetStrLen(pobjStudentInfoEN.idSchool) > 4
  ) {
    throw new Error(
      `(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 学生(StudentInfo))!值:${pobjStudentInfoEN.idSchool}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userId) == false &&
    GetStrLen(pobjStudentInfoEN.userId) > 18
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 学生(StudentInfo))!值:${pobjStudentInfoEN.userId}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userTypeId) == false &&
    GetStrLen(pobjStudentInfoEN.userTypeId) > 2
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户类型Id(userTypeId)]的长度不能超过2(In 学生(StudentInfo))!值:${pobjStudentInfoEN.userTypeId}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userType) == false &&
    GetStrLen(pobjStudentInfoEN.userType) > 50
  ) {
    throw new Error(
      `(errid:Watl000416)字段[用户类型(userType)]的长度不能超过50(In 学生(StudentInfo))!值:${pobjStudentInfoEN.userType}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.enrollmentDate) == false &&
    GetStrLen(pobjStudentInfoEN.enrollmentDate) > 8
  ) {
    throw new Error(
      `(errid:Watl000416)字段[入校日期(enrollmentDate)]的长度不能超过8(In 学生(StudentInfo))!值:${pobjStudentInfoEN.enrollmentDate}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.postCode) == false &&
    GetStrLen(pobjStudentInfoEN.postCode) > 6
  ) {
    throw new Error(
      `(errid:Watl000416)字段[邮编(postCode)]的长度不能超过6(In 学生(StudentInfo))!值:${pobjStudentInfoEN.postCode}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.email) == false && GetStrLen(pobjStudentInfoEN.email) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[电子邮箱(email)]的长度不能超过100(In 学生(StudentInfo))!值:${pobjStudentInfoEN.email}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.microblog) == false &&
    GetStrLen(pobjStudentInfoEN.microblog) > 200
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Microblog(microblog)]的长度不能超过200(In 学生(StudentInfo))!值:${pobjStudentInfoEN.microblog}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.phoneNumber) == false &&
    GetStrLen(pobjStudentInfoEN.phoneNumber) > 15
  ) {
    throw new Error(
      `(errid:Watl000416)字段[电话(phoneNumber)]的长度不能超过15(In 学生(StudentInfo))!值:${pobjStudentInfoEN.phoneNumber}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.headphoto) == false &&
    GetStrLen(pobjStudentInfoEN.headphoto) > 500
  ) {
    throw new Error(
      `(errid:Watl000416)字段[Headphoto(headphoto)]的长度不能超过500(In 学生(StudentInfo))!值:${pobjStudentInfoEN.headphoto}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.qQ) == false && GetStrLen(pobjStudentInfoEN.qQ) > 100) {
    throw new Error(
      `(errid:Watl000416)字段[QQ(qQ)]的长度不能超过100(In 学生(StudentInfo))!值:${pobjStudentInfoEN.qQ}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.registerPassword) == false &&
    GetStrLen(pobjStudentInfoEN.registerPassword) > 30
  ) {
    throw new Error(
      `(errid:Watl000416)字段[RegisterPassword(registerPassword)]的长度不能超过30(In 学生(StudentInfo))!值:${pobjStudentInfoEN.registerPassword}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.updDate) == false &&
    GetStrLen(pobjStudentInfoEN.updDate) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.updDate}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.updUser) == false &&
    GetStrLen(pobjStudentInfoEN.updUser) > 20
  ) {
    throw new Error(
      `(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 学生(StudentInfo))!值:${pobjStudentInfoEN.updUser}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (IsNullOrEmpty(pobjStudentInfoEN.memo) == false && GetStrLen(pobjStudentInfoEN.memo) > 1000) {
    throw new Error(
      `(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 学生(StudentInfo))!值:${pobjStudentInfoEN.memo}(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idStudentInfo) == false &&
    undefined !== pobjStudentInfoEN.idStudentInfo &&
    tzDataType.isString(pobjStudentInfoEN.idStudentInfo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学生流水号(idStudentInfo)]的值:[${pobjStudentInfoEN.idStudentInfo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuId) == false &&
    undefined !== pobjStudentInfoEN.stuId &&
    tzDataType.isString(pobjStudentInfoEN.stuId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学号(stuId)]的值:[${pobjStudentInfoEN.stuId}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuName) == false &&
    undefined !== pobjStudentInfoEN.stuName &&
    tzDataType.isString(pobjStudentInfoEN.stuName) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[姓名(stuName)]的值:[${pobjStudentInfoEN.stuName}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idPolitics) == false &&
    undefined !== pobjStudentInfoEN.idPolitics &&
    tzDataType.isString(pobjStudentInfoEN.idPolitics) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[政治面貌流水号(idPolitics)]的值:[${pobjStudentInfoEN.idPolitics}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idSex) == false &&
    undefined !== pobjStudentInfoEN.idSex &&
    tzDataType.isString(pobjStudentInfoEN.idSex) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[性别流水号(idSex)]的值:[${pobjStudentInfoEN.idSex}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idEthnic) == false &&
    undefined !== pobjStudentInfoEN.idEthnic &&
    tzDataType.isString(pobjStudentInfoEN.idEthnic) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[民族流水号(idEthnic)]的值:[${pobjStudentInfoEN.idEthnic}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idUniZone) == false &&
    undefined !== pobjStudentInfoEN.idUniZone &&
    tzDataType.isString(pobjStudentInfoEN.idUniZone) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[校区流水号(idUniZone)]的值:[${pobjStudentInfoEN.idUniZone}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idStuType) == false &&
    undefined !== pobjStudentInfoEN.idStuType &&
    tzDataType.isString(pobjStudentInfoEN.idStuType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学生类别流水号(idStuType)]的值:[${pobjStudentInfoEN.idStuType}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXzCollege) == false &&
    undefined !== pobjStudentInfoEN.idXzCollege &&
    tzDataType.isString(pobjStudentInfoEN.idXzCollege) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学院流水号(idXzCollege)]的值:[${pobjStudentInfoEN.idXzCollege}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXzMajor) == false &&
    undefined !== pobjStudentInfoEN.idXzMajor &&
    tzDataType.isString(pobjStudentInfoEN.idXzMajor) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[${pobjStudentInfoEN.idXzMajor}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idGradeBase) == false &&
    undefined !== pobjStudentInfoEN.idGradeBase &&
    tzDataType.isString(pobjStudentInfoEN.idGradeBase) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[入学年级流水号(idGradeBase)]的值:[${pobjStudentInfoEN.idGradeBase}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idGrade) == false &&
    undefined !== pobjStudentInfoEN.idGrade &&
    tzDataType.isString(pobjStudentInfoEN.idGrade) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[年级流水号(idGrade)]的值:[${pobjStudentInfoEN.idGrade}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idXsStatus) == false &&
    undefined !== pobjStudentInfoEN.idXsStatus &&
    tzDataType.isString(pobjStudentInfoEN.idXsStatus) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学生状态流水号(idXsStatus)]的值:[${pobjStudentInfoEN.idXsStatus}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idAdminCls) == false &&
    undefined !== pobjStudentInfoEN.idAdminCls &&
    tzDataType.isString(pobjStudentInfoEN.idAdminCls) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[行政班流水号(idAdminCls)]的值:[${pobjStudentInfoEN.idAdminCls}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.birthday) == false &&
    undefined !== pobjStudentInfoEN.birthday &&
    tzDataType.isString(pobjStudentInfoEN.birthday) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[出生日期(birthday)]的值:[${pobjStudentInfoEN.birthday}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.nativePlace) == false &&
    undefined !== pobjStudentInfoEN.nativePlace &&
    tzDataType.isString(pobjStudentInfoEN.nativePlace) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[籍贯(nativePlace)]的值:[${pobjStudentInfoEN.nativePlace}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.duty) == false &&
    undefined !== pobjStudentInfoEN.duty &&
    tzDataType.isString(pobjStudentInfoEN.duty) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[职位(duty)]的值:[${pobjStudentInfoEN.duty}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idCardNo) == false &&
    undefined !== pobjStudentInfoEN.idCardNo &&
    tzDataType.isString(pobjStudentInfoEN.idCardNo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[身份证号(idCardNo)]的值:[${pobjStudentInfoEN.idCardNo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.stuCardNo) == false &&
    undefined !== pobjStudentInfoEN.stuCardNo &&
    tzDataType.isString(pobjStudentInfoEN.stuCardNo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学生证号(stuCardNo)]的值:[${pobjStudentInfoEN.stuCardNo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.liveAddress) == false &&
    undefined !== pobjStudentInfoEN.liveAddress &&
    tzDataType.isString(pobjStudentInfoEN.liveAddress) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[居住地址(liveAddress)]的值:[${pobjStudentInfoEN.liveAddress}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.homePhone) == false &&
    undefined !== pobjStudentInfoEN.homePhone &&
    tzDataType.isString(pobjStudentInfoEN.homePhone) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[住宅电话(homePhone)]的值:[${pobjStudentInfoEN.homePhone}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idCardNo2) == false &&
    undefined !== pobjStudentInfoEN.idCardNo2 &&
    tzDataType.isString(pobjStudentInfoEN.idCardNo2) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[内卡号(idCardNo2)]的值:[${pobjStudentInfoEN.idCardNo2}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.studentNumber) == false &&
    undefined !== pobjStudentInfoEN.studentNumber &&
    tzDataType.isString(pobjStudentInfoEN.studentNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学籍号(studentNumber)]的值:[${pobjStudentInfoEN.studentNumber}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.cardNo) == false &&
    undefined !== pobjStudentInfoEN.cardNo &&
    tzDataType.isString(pobjStudentInfoEN.cardNo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[卡号(cardNo)]的值:[${pobjStudentInfoEN.cardNo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjStudentInfoEN.isGpUser &&
    undefined !== pobjStudentInfoEN.isGpUser &&
    tzDataType.isBoolean(pobjStudentInfoEN.isGpUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否Gp用户(isGpUser)]的值:[${pobjStudentInfoEN.isGpUser}], 非法,应该为布尔型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjStudentInfoEN.isLocalUser &&
    undefined !== pobjStudentInfoEN.isLocalUser &&
    tzDataType.isBoolean(pobjStudentInfoEN.isLocalUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否本地用户(isLocalUser)]的值:[${pobjStudentInfoEN.isLocalUser}], 非法,应该为布尔型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjStudentInfoEN.isLeaved &&
    undefined !== pobjStudentInfoEN.isLeaved &&
    tzDataType.isBoolean(pobjStudentInfoEN.isLeaved) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[是否离开(isLeaved)]的值:[${pobjStudentInfoEN.isLeaved}], 非法,应该为布尔型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.idSchool) == false &&
    undefined !== pobjStudentInfoEN.idSchool &&
    tzDataType.isString(pobjStudentInfoEN.idSchool) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[学校流水号(idSchool)]的值:[${pobjStudentInfoEN.idSchool}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userId) == false &&
    undefined !== pobjStudentInfoEN.userId &&
    tzDataType.isString(pobjStudentInfoEN.userId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户ID(userId)]的值:[${pobjStudentInfoEN.userId}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userTypeId) == false &&
    undefined !== pobjStudentInfoEN.userTypeId &&
    tzDataType.isString(pobjStudentInfoEN.userTypeId) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户类型Id(userTypeId)]的值:[${pobjStudentInfoEN.userTypeId}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.userType) == false &&
    undefined !== pobjStudentInfoEN.userType &&
    tzDataType.isString(pobjStudentInfoEN.userType) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[用户类型(userType)]的值:[${pobjStudentInfoEN.userType}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.enrollmentDate) == false &&
    undefined !== pobjStudentInfoEN.enrollmentDate &&
    tzDataType.isString(pobjStudentInfoEN.enrollmentDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[入校日期(enrollmentDate)]的值:[${pobjStudentInfoEN.enrollmentDate}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.postCode) == false &&
    undefined !== pobjStudentInfoEN.postCode &&
    tzDataType.isString(pobjStudentInfoEN.postCode) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[邮编(postCode)]的值:[${pobjStudentInfoEN.postCode}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.email) == false &&
    undefined !== pobjStudentInfoEN.email &&
    tzDataType.isString(pobjStudentInfoEN.email) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[电子邮箱(email)]的值:[${pobjStudentInfoEN.email}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    null != pobjStudentInfoEN.isMessage &&
    undefined !== pobjStudentInfoEN.isMessage &&
    tzDataType.isBoolean(pobjStudentInfoEN.isMessage) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[IsMessage(isMessage)]的值:[${pobjStudentInfoEN.isMessage}], 非法,应该为布尔型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.microblog) == false &&
    undefined !== pobjStudentInfoEN.microblog &&
    tzDataType.isString(pobjStudentInfoEN.microblog) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Microblog(microblog)]的值:[${pobjStudentInfoEN.microblog}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.phoneNumber) == false &&
    undefined !== pobjStudentInfoEN.phoneNumber &&
    tzDataType.isString(pobjStudentInfoEN.phoneNumber) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[电话(phoneNumber)]的值:[${pobjStudentInfoEN.phoneNumber}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.headphoto) == false &&
    undefined !== pobjStudentInfoEN.headphoto &&
    tzDataType.isString(pobjStudentInfoEN.headphoto) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[Headphoto(headphoto)]的值:[${pobjStudentInfoEN.headphoto}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.qQ) == false &&
    undefined !== pobjStudentInfoEN.qQ &&
    tzDataType.isString(pobjStudentInfoEN.qQ) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[QQ(qQ)]的值:[${pobjStudentInfoEN.qQ}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.registerPassword) == false &&
    undefined !== pobjStudentInfoEN.registerPassword &&
    tzDataType.isString(pobjStudentInfoEN.registerPassword) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[RegisterPassword(registerPassword)]的值:[${pobjStudentInfoEN.registerPassword}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.updDate) == false &&
    undefined !== pobjStudentInfoEN.updDate &&
    tzDataType.isString(pobjStudentInfoEN.updDate) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改日期(updDate)]的值:[${pobjStudentInfoEN.updDate}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.updUser) == false &&
    undefined !== pobjStudentInfoEN.updUser &&
    tzDataType.isString(pobjStudentInfoEN.updUser) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[修改人(updUser)]的值:[${pobjStudentInfoEN.updUser}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  if (
    IsNullOrEmpty(pobjStudentInfoEN.memo) == false &&
    undefined !== pobjStudentInfoEN.memo &&
    tzDataType.isString(pobjStudentInfoEN.memo) === false
  ) {
    throw new Error(
      `(errid:Watl000417)字段[备注(memo)]的值:[${pobjStudentInfoEN.memo}], 非法,应该为字符型(In 学生(StudentInfo))!(clsStudentInfoBL:CheckProperty4Update)`,
    );
  }
  //检查主键是否为Null或者空!
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function StudentInfo_GetJSONStrByObj(pobjStudentInfoEN: clsStudentInfoEN): string {
  pobjStudentInfoEN.sfUpdFldSetStr = pobjStudentInfoEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjStudentInfoEN);
  } catch (objException) {
    const strEx = GetExceptionStr(objException);
    myShowErrorMsg(strEx);
  }
  if (strJson == undefined) return '';
  else return strJson;
}

/**
 * 把一个JSON串转化为一个对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function StudentInfo_GetObjLstByJSONStr(strJSON: string): Array<clsStudentInfoEN> {
  let arrStudentInfoObjLst = new Array<clsStudentInfoEN>();
  if (strJSON === '') {
    return arrStudentInfoObjLst;
  }
  try {
    arrStudentInfoObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrStudentInfoObjLst;
  }
  return arrStudentInfoObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrStudentInfoObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function StudentInfo_GetObjLstByJSONObjLst(
  arrStudentInfoObjLstS: Array<clsStudentInfoEN>,
): Array<clsStudentInfoEN> {
  const arrStudentInfoObjLst = new Array<clsStudentInfoEN>();
  for (const objInFor of arrStudentInfoObjLstS) {
    const obj1 = StudentInfo_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrStudentInfoObjLst.push(obj1);
  }
  return arrStudentInfoObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2025-06-10
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function StudentInfo_GetObjByJSONStr(strJSON: string): clsStudentInfoEN {
  let pobjStudentInfoEN = new clsStudentInfoEN();
  if (strJSON === '') {
    return pobjStudentInfoEN;
  }
  try {
    pobjStudentInfoEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjStudentInfoEN;
  }
  return pobjStudentInfoEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function StudentInfo_GetCombineCondition(objStudentInfoCond: clsStudentInfoEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdStudentInfo,
    ) == true
  ) {
    const strComparisonOpIdStudentInfo: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdStudentInfo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdStudentInfo,
      objStudentInfoCond.idStudentInfo,
      strComparisonOpIdStudentInfo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_StuId,
    ) == true
  ) {
    const strComparisonOpStuId: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_StuId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_StuId,
      objStudentInfoCond.stuId,
      strComparisonOpStuId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_StuName,
    ) == true
  ) {
    const strComparisonOpStuName: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_StuName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_StuName,
      objStudentInfoCond.stuName,
      strComparisonOpStuName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdPolitics,
    ) == true
  ) {
    const strComparisonOpIdPolitics: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdPolitics];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdPolitics,
      objStudentInfoCond.idPolitics,
      strComparisonOpIdPolitics,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdSex,
    ) == true
  ) {
    const strComparisonOpIdSex: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdSex];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdSex,
      objStudentInfoCond.idSex,
      strComparisonOpIdSex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdEthnic,
    ) == true
  ) {
    const strComparisonOpIdEthnic: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdEthnic];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdEthnic,
      objStudentInfoCond.idEthnic,
      strComparisonOpIdEthnic,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdUniZone,
    ) == true
  ) {
    const strComparisonOpIdUniZone: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdUniZone];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdUniZone,
      objStudentInfoCond.idUniZone,
      strComparisonOpIdUniZone,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdStuType,
    ) == true
  ) {
    const strComparisonOpIdStuType: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdStuType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdStuType,
      objStudentInfoCond.idStuType,
      strComparisonOpIdStuType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdXzCollege,
      objStudentInfoCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdXzMajor,
      objStudentInfoCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdGradeBase,
    ) == true
  ) {
    const strComparisonOpIdGradeBase: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdGradeBase];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdGradeBase,
      objStudentInfoCond.idGradeBase,
      strComparisonOpIdGradeBase,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdGrade,
    ) == true
  ) {
    const strComparisonOpIdGrade: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdGrade];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdGrade,
      objStudentInfoCond.idGrade,
      strComparisonOpIdGrade,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdXsStatus,
    ) == true
  ) {
    const strComparisonOpIdXsStatus: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdXsStatus];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdXsStatus,
      objStudentInfoCond.idXsStatus,
      strComparisonOpIdXsStatus,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdAdminCls,
    ) == true
  ) {
    const strComparisonOpIdAdminCls: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdAdminCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdAdminCls,
      objStudentInfoCond.idAdminCls,
      strComparisonOpIdAdminCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_Birthday,
    ) == true
  ) {
    const strComparisonOpBirthday: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_Birthday];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_Birthday,
      objStudentInfoCond.birthday,
      strComparisonOpBirthday,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_NativePlace,
    ) == true
  ) {
    const strComparisonOpNativePlace: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_NativePlace];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_NativePlace,
      objStudentInfoCond.nativePlace,
      strComparisonOpNativePlace,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_Duty,
    ) == true
  ) {
    const strComparisonOpDuty: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_Duty];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_Duty,
      objStudentInfoCond.duty,
      strComparisonOpDuty,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdCardNo,
    ) == true
  ) {
    const strComparisonOpIdCardNo: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdCardNo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdCardNo,
      objStudentInfoCond.idCardNo,
      strComparisonOpIdCardNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_StuCardNo,
    ) == true
  ) {
    const strComparisonOpStuCardNo: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_StuCardNo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_StuCardNo,
      objStudentInfoCond.stuCardNo,
      strComparisonOpStuCardNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_LiveAddress,
    ) == true
  ) {
    const strComparisonOpLiveAddress: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_LiveAddress];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_LiveAddress,
      objStudentInfoCond.liveAddress,
      strComparisonOpLiveAddress,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_HomePhone,
    ) == true
  ) {
    const strComparisonOpHomePhone: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_HomePhone];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_HomePhone,
      objStudentInfoCond.homePhone,
      strComparisonOpHomePhone,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdCardNo2,
    ) == true
  ) {
    const strComparisonOpIdCardNo2: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdCardNo2];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdCardNo2,
      objStudentInfoCond.idCardNo2,
      strComparisonOpIdCardNo2,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_StudentNumber,
    ) == true
  ) {
    const strComparisonOpStudentNumber: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_StudentNumber];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_StudentNumber,
      objStudentInfoCond.studentNumber,
      strComparisonOpStudentNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_CardNo,
    ) == true
  ) {
    const strComparisonOpCardNo: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_CardNo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_CardNo,
      objStudentInfoCond.cardNo,
      strComparisonOpCardNo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IsGpUser,
    ) == true
  ) {
    if (objStudentInfoCond.isGpUser == true) {
      strWhereCond += Format(" And {0} = '1'", clsStudentInfoEN.con_IsGpUser);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsStudentInfoEN.con_IsGpUser);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IsLocalUser,
    ) == true
  ) {
    if (objStudentInfoCond.isLocalUser == true) {
      strWhereCond += Format(" And {0} = '1'", clsStudentInfoEN.con_IsLocalUser);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsStudentInfoEN.con_IsLocalUser);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IsLeaved,
    ) == true
  ) {
    if (objStudentInfoCond.isLeaved == true) {
      strWhereCond += Format(" And {0} = '1'", clsStudentInfoEN.con_IsLeaved);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsStudentInfoEN.con_IsLeaved);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IdSchool,
    ) == true
  ) {
    const strComparisonOpIdSchool: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_IdSchool];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_IdSchool,
      objStudentInfoCond.idSchool,
      strComparisonOpIdSchool,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_UserId,
      objStudentInfoCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_UserTypeId,
    ) == true
  ) {
    const strComparisonOpUserTypeId: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_UserTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_UserTypeId,
      objStudentInfoCond.userTypeId,
      strComparisonOpUserTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_UserType,
    ) == true
  ) {
    const strComparisonOpUserType: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_UserType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_UserType,
      objStudentInfoCond.userType,
      strComparisonOpUserType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_EnrollmentDate,
    ) == true
  ) {
    const strComparisonOpEnrollmentDate: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_EnrollmentDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_EnrollmentDate,
      objStudentInfoCond.enrollmentDate,
      strComparisonOpEnrollmentDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_PostCode,
    ) == true
  ) {
    const strComparisonOpPostCode: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_PostCode];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_PostCode,
      objStudentInfoCond.postCode,
      strComparisonOpPostCode,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_Email,
    ) == true
  ) {
    const strComparisonOpEmail: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_Email];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_Email,
      objStudentInfoCond.email,
      strComparisonOpEmail,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_IsMessage,
    ) == true
  ) {
    if (objStudentInfoCond.isMessage == true) {
      strWhereCond += Format(" And {0} = '1'", clsStudentInfoEN.con_IsMessage);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsStudentInfoEN.con_IsMessage);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_Microblog,
    ) == true
  ) {
    const strComparisonOpMicroblog: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_Microblog];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_Microblog,
      objStudentInfoCond.microblog,
      strComparisonOpMicroblog,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_PhoneNumber,
    ) == true
  ) {
    const strComparisonOpPhoneNumber: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_PhoneNumber];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_PhoneNumber,
      objStudentInfoCond.phoneNumber,
      strComparisonOpPhoneNumber,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_Headphoto,
    ) == true
  ) {
    const strComparisonOpHeadphoto: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_Headphoto];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_Headphoto,
      objStudentInfoCond.headphoto,
      strComparisonOpHeadphoto,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_QQ,
    ) == true
  ) {
    const strComparisonOpQQ: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_QQ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_QQ,
      objStudentInfoCond.qQ,
      strComparisonOpQQ,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_RegisterPassword,
    ) == true
  ) {
    const strComparisonOpRegisterPassword: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_RegisterPassword];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_RegisterPassword,
      objStudentInfoCond.registerPassword,
      strComparisonOpRegisterPassword,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_UpdDate,
      objStudentInfoCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_UpdUser,
      objStudentInfoCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objStudentInfoCond.dicFldComparisonOp,
      clsStudentInfoEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objStudentInfoCond.dicFldComparisonOp[clsStudentInfoEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsStudentInfoEN.con_Memo,
      objStudentInfoCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--StudentInfo(学生),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strStuId: 学号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function StudentInfo_GetUniCondStr(objStudentInfoEN: clsStudentInfoEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and StuId = '{0}'", objStudentInfoEN.stuId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--StudentInfo(学生),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strStuId: 学号(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function StudentInfo_GetUniCondStr4Update(objStudentInfoEN: clsStudentInfoEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdStudentInfo <> '{0}'", objStudentInfoEN.idStudentInfo);
  strWhereCond += Format(" and StuId = '{0}'", objStudentInfoEN.stuId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objStudentInfoENS:源对象
 * @param objStudentInfoENT:目标对象
 */
export function StudentInfo_CopyObjTo(
  objStudentInfoENS: clsStudentInfoEN,
  objStudentInfoENT: clsStudentInfoEN,
): void {
  objStudentInfoENT.idStudentInfo = objStudentInfoENS.idStudentInfo; //学生流水号
  objStudentInfoENT.stuId = objStudentInfoENS.stuId; //学号
  objStudentInfoENT.stuName = objStudentInfoENS.stuName; //姓名
  objStudentInfoENT.idPolitics = objStudentInfoENS.idPolitics; //政治面貌流水号
  objStudentInfoENT.idSex = objStudentInfoENS.idSex; //性别流水号
  objStudentInfoENT.idEthnic = objStudentInfoENS.idEthnic; //民族流水号
  objStudentInfoENT.idUniZone = objStudentInfoENS.idUniZone; //校区流水号
  objStudentInfoENT.idStuType = objStudentInfoENS.idStuType; //学生类别流水号
  objStudentInfoENT.idXzCollege = objStudentInfoENS.idXzCollege; //学院流水号
  objStudentInfoENT.idXzMajor = objStudentInfoENS.idXzMajor; //专业流水号
  objStudentInfoENT.idGradeBase = objStudentInfoENS.idGradeBase; //入学年级流水号
  objStudentInfoENT.idGrade = objStudentInfoENS.idGrade; //年级流水号
  objStudentInfoENT.idXsStatus = objStudentInfoENS.idXsStatus; //学生状态流水号
  objStudentInfoENT.idAdminCls = objStudentInfoENS.idAdminCls; //行政班流水号
  objStudentInfoENT.birthday = objStudentInfoENS.birthday; //出生日期
  objStudentInfoENT.nativePlace = objStudentInfoENS.nativePlace; //籍贯
  objStudentInfoENT.duty = objStudentInfoENS.duty; //职位
  objStudentInfoENT.idCardNo = objStudentInfoENS.idCardNo; //身份证号
  objStudentInfoENT.stuCardNo = objStudentInfoENS.stuCardNo; //学生证号
  objStudentInfoENT.liveAddress = objStudentInfoENS.liveAddress; //居住地址
  objStudentInfoENT.homePhone = objStudentInfoENS.homePhone; //住宅电话
  objStudentInfoENT.idCardNo2 = objStudentInfoENS.idCardNo2; //内卡号
  objStudentInfoENT.studentNumber = objStudentInfoENS.studentNumber; //学籍号
  objStudentInfoENT.cardNo = objStudentInfoENS.cardNo; //卡号
  objStudentInfoENT.isGpUser = objStudentInfoENS.isGpUser; //是否Gp用户
  objStudentInfoENT.isLocalUser = objStudentInfoENS.isLocalUser; //是否本地用户
  objStudentInfoENT.isLeaved = objStudentInfoENS.isLeaved; //是否离开
  objStudentInfoENT.idSchool = objStudentInfoENS.idSchool; //学校流水号
  objStudentInfoENT.userId = objStudentInfoENS.userId; //用户ID
  objStudentInfoENT.userTypeId = objStudentInfoENS.userTypeId; //用户类型Id
  objStudentInfoENT.userType = objStudentInfoENS.userType; //用户类型
  objStudentInfoENT.enrollmentDate = objStudentInfoENS.enrollmentDate; //入校日期
  objStudentInfoENT.postCode = objStudentInfoENS.postCode; //邮编
  objStudentInfoENT.email = objStudentInfoENS.email; //电子邮箱
  objStudentInfoENT.isMessage = objStudentInfoENS.isMessage; //IsMessage
  objStudentInfoENT.microblog = objStudentInfoENS.microblog; //Microblog
  objStudentInfoENT.phoneNumber = objStudentInfoENS.phoneNumber; //电话
  objStudentInfoENT.headphoto = objStudentInfoENS.headphoto; //Headphoto
  objStudentInfoENT.qQ = objStudentInfoENS.qQ; //QQ
  objStudentInfoENT.registerPassword = objStudentInfoENS.registerPassword; //RegisterPassword
  objStudentInfoENT.updDate = objStudentInfoENS.updDate; //修改日期
  objStudentInfoENT.updUser = objStudentInfoENS.updUser; //修改人
  objStudentInfoENT.memo = objStudentInfoENS.memo; //备注
  objStudentInfoENT.sfUpdFldSetStr = objStudentInfoENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objStudentInfoENS:源对象
 * @param objStudentInfoENT:目标对象
 */
export function StudentInfo_GetObjFromJsonObj(
  objStudentInfoENS: clsStudentInfoEN,
): clsStudentInfoEN {
  const objStudentInfoENT: clsStudentInfoEN = new clsStudentInfoEN();
  ObjectAssign(objStudentInfoENT, objStudentInfoENS);
  return objStudentInfoENT;
}

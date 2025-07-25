/**
 * 类名:clsvQxUsersSimEN
 * 表名:vQxUsersSim(00140121)
 * 版本:2025.05.26.1(服务器:WIN-SRV103-116)
 * 日期:2025/06/05 02:21:32
 * 生成者:pyf
 工程名称:统一平台(0014)
 CM工程:统一平台前端(000057, 变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,8433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage_GP)
 * 框架-层名:实体层(TS)(EntityLayer,0121)
 * 编程语言:TypeScript
 **/
/**
 * v用户Sim(vQxUsersSim)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvQxUsersSimEN extends clsGeneralTabV {
  public static _RefreshTimeLst = new Array<string>();
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '04'; //sessionStorage
  public static PrimaryTypeId = '01'; //关键字
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vQxUsersSim'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'UserId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 4;
  public static AttributeName = ['userId', 'userName', 'idXzCollege', 'departmentId'];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvQxUsersSimEN.con_UserId:
        return this.userId;
      case clsvQxUsersSimEN.con_UserName:
        return this.userName;
      case clsvQxUsersSimEN.con_IdXzCollege:
        return this.idXzCollege;
      case clsvQxUsersSimEN.con_DepartmentId:
        return this.departmentId;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vQxUsersSim]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsvQxUsersSimEN.con_UserId:
        this.userId = strValue;
        break;
      case clsvQxUsersSimEN.con_UserName:
        this.userName = strValue;
        break;
      case clsvQxUsersSimEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        break;
      case clsvQxUsersSimEN.con_DepartmentId:
        this.departmentId = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vQxUsersSim]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public userId = ''; //用户ID
  public userName = ''; //用户名
  public idXzCollege = ''; //学院Id
  public departmentId = ''; //部门Id

  /**
   * 常量:"UserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserId(): string {
    return 'userId';
  } //用户ID

  /**
   * 常量:"UserName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UserName(): string {
    return 'userName';
  } //用户名

  /**
   * 常量:"IdXzCollege"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院Id

  /**
   * 常量:"DepartmentId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DepartmentId(): string {
    return 'departmentId';
  } //部门Id

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
  /**
   * 判断一个字符串是否是类的属性
   * @param propName: 属性名
   * @returns 是否是属性
   */
  public static hasProperty(propName: string): boolean {
    //return propName in new clsvQxUsersSimEN();
    const instance = new clsvQxUsersSimEN();
    return Object.prototype.hasOwnProperty.call(instance, propName);
  }
}

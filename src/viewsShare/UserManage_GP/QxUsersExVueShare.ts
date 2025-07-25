import { useQxUserRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { QxUserRoleRelationEx_DelRecord } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxUserRoleRelationExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';
import { ref } from 'vue';
//界面公共变量，可以在多个相关界面中共享
export const QxPrjId_Local = ref(''); //1、界面列表区主表的缓存分类字段变量1-Session,local存储

/** 删除记录
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
 **/
export async function DelUserRole(strUserId: string, strRoleId: string) {
  const strThisFuncName = DelUserRole.name;
  try {
    const qxUserRoleRelationStore = useQxUserRoleRelationStore();
    await QxUserRoleRelationEx_DelRecord(strUserId, strRoleId);
    qxUserRoleRelationStore.delUser(strUserId, clsSysPara4WebApi.currSelPrjId);
  } catch (e) {
    const strMsg = Format(
      '删除用户角色不成功. {0}.(in {1})',
      e,

      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

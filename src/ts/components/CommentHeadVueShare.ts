/**
 * 类名:BadgeTypeVueShare(界面:BadgeTypeCRUD,01120206)
 * 表名:BadgeType(01120880)
 * 版本:2024.11.23.1(服务器:WIN-SRV103-116)
 * 日期:2024/11/23 17:41:18
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(000041, 变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:游戏化学习(GameLearn)
 * 框架-层名:Vue共享(TS)(Vue_Share_TS,0264)
 * 编程语言:TypeScript
 **/
import { reactive, ref } from 'vue';
import { Format } from '@/ts/PubFun/clsString';

const ascOrDesc4SortFun = ref('Asc');
const sortBadgeTypeBy = ref('');
const viewVarSet = reactive({
  ascOrDesc4SortFun,
  sortBadgeTypeBy,
});
export { viewVarSet };

//界面公共变量，可以在多个相关界面中共享

const refDivLayout = ref();
const refDivQuery = ref();
const refDivFunction = ref();
const refDivList = ref();
const refDivEdit = ref();
const refDivDetail = ref();
const refBadgeType_Edit = ref();
const refBadgeType_List = ref();
const divVarSet = reactive({
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refBadgeType_Edit,
  refBadgeType_List,
});
export {
  divVarSet,
  refDivLayout,
  refDivQuery,
  refDivFunction,
  refDivList,
  refDivEdit,
  refDivDetail,
  refBadgeType_Edit,
  refBadgeType_List,
};

export const showErrorMessage = ref(false);
export const emptyRecNumInfo = ref('');

//查询区变量定义
export const badgeTypeName_q = ref('');
const qryVarSet = reactive({
  badgeTypeName_q,
});
export { qryVarSet };

//功能区变量定义
const featureVarSet = reactive({});
export { featureVarSet };

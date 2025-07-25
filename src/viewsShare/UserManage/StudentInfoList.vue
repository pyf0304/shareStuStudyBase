<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->

      <div
        v-if="showTitle"
        style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px"
      >
        <label id="lblViewTitle" class="h5"> 学生列表Dialog </label>
      </div>
      <div v-if="idCurrEduCls != ''">
        <span id="spnEduClsName" class="h6"> 教学班 </span>
        <button id="btnAddStuToEduCls" @click="btn_Click('AddStuToEduCls', '')">添加学生</button>
      </div>
      <!-- 查询层 -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabEdit"
          style="width: 900px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tbody>
            <tr>
              <td class="text-left">
                <label id="lblStuID_q" class="col-form-label text-right" style="width: 50px">
                  学号
                </label>
              </td>
              <td class="text-left">
                <input id="txtStuId_q" class="form-control" style="width: 60px" />
              </td>
              <td class="text-left">
                <label id="lblStuName_q" class="col-form-label text-right" style="width: 50px">
                  姓名
                </label>
              </td>
              <td class="text-left">
                <input id="txtStuName_q" class="form-control" style="width: 60px" />
              </td>
              <td v-show="isShowMiddleSchool == false" class="text-right">
                <label
                  id="lblIdXzCollege_q"
                  name="lblIdXzCollege_q"
                  class="col-form-label text-right"
                  style="width: 50px"
                  >学院
                </label>
              </td>
              <td v-show="isShowMiddleSchool == false" class="text-left">
                <select
                  id="ddlIdXzCollege_q"
                  v-model="idXzCollege_q"
                  class="form-control form-control-sm"
                  @change="ddlIdXzCollegeq_SelectedIndexChanged($event)"
                  style="width: 120px"
                >
                  <option v-for="(item, index) in arrXzClg" :key="index" :value="item.idXzCollege">
                    {{ item.collegeName }}
                  </option></select
                >
              </td>
              <td v-show="isShowMiddleSchool == false" class="text-right">
                <label id="lblIdXzMajor_q" class="col-form-label text-right" style="width: 50px"
                  >专业
                </label>
              </td>
              <td v-show="isShowMiddleSchool == false" class="text-left">
                <select
                  id="ddlIdXzMajor_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                ></select>
              </td>

              <td v-show="isShowMiddleSchool == true" class="text-right">
                <label
                  id="lblIdGrade_q"
                  name="lblIdGrade_q"
                  class="col-form-label text-right"
                  style="width: 50px"
                  >年级
                </label>
              </td>
              <td v-show="isShowMiddleSchool == true" class="text-left">
                <select
                  id="ddlIdGrade_q"
                  v-model="idGrade_q"
                  class="form-control form-control-sm"
                  @change="ddlIdGradeq_SelectedIndexChanged($event)"
                  style="width: 50px"
                >
                  <option v-for="(item, index) in arrXzGrade" :key="index" :value="item.idGrade">
                    {{ item.gradeName }}
                  </option></select
                >
              </td>
              <td v-show="isShowMiddleSchool == true" class="text-right">
                <label
                  id="lblIdAdminCls_q"
                  name="lblIdAdminCls_q"
                  class="col-form-label text-right"
                  style="width: 50px"
                  >行政班
                </label>
              </td>
              <td v-show="isShowMiddleSchool == true" class="text-left">
                <select
                  id="ddlIdAdminCls_q"
                  v-model="idAdminCls_q"
                  class="form-control form-control-sm"
                  style="width: 80px"
                >
                  <option
                    v-for="(item, index) in arrXzAdminCls"
                    :key="index"
                    :value="item.idAdminCls"
                  >
                    {{ item.adminClsName }}
                  </option></select
                >
              </td>
              <td class="text-left">
                <button
                  type="submit"
                  id="btnQuery"
                  class="btn btn-outline-warning text-nowrap"
                  @click="btnQuery_Click"
                  >查询</button
                >
              </td>
              <td> <label id="lblMsg_List" class="text-warning" style="width: 150px"> </label></td>
            </tr> </tbody
        ></table>
      </div>
      <!-- 功能区 -->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav"> </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager"> </div>
      </div>
      <!-- 编辑层 -->
      <div id="divEdit" value="1"></div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvStudentInfoBy" type="hidden" value="" />

    <input id="hidCurrEduClsId" type="hidden" />
    <!-- 页面类型 -->
    <input id="hidPagetype" type="hidden" />
    <!-- 课文Id -->
    <input id="hidTextId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/site.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';

  import '@/assets/css/public.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import StudentInfoList from '@/viewsShare/UserManage/StudentInfoList';
  import { useRoute } from 'vue-router';
  import { GetCheckedKeyIds } from '@/ts/PubFun/clsCommFunc4Web';

  import {
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    IdGrade_Static,
    idGrade_q,
    idAdminCls_q,
    idXzCollege_q,
    IdCurrEduCls_Static,
    UserTypeId_Session,
    pageType,
  } from '@/viewsShare/UserManage/StudentInfoListVueShare';
  import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
  import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
  import { XzGrade_GetArrXzGrade } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
  import { XzAdminCls_GetArrXzAdminClsByIdGrade } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { enumUserType } from '@/ts/L0Entity/UserManage/clsUserTypeEN';
  import StudentInfoCRUDEx from '@/viewsShare/UserManage/StudentInfoCRUDEx';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
  import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
  import { XzClg_GetArrXzClgByUserTypeId } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
  import { XzMajor_GetArrXzMajorByIdXzCollege } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
  import { XzGradeBase_GetArrXzGradeBaseByIsVisible } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
  import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
  import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
  import {
    CurrEduClsStu_AddNewRecordAsync,
    CurrEduClsStu_IsExistRecordAsync,
  } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
  import { CurrEduClsStuEx_AddNewRecordSaveCurrEduClsStu } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';

  export default defineComponent({
    name: 'StudentInfoList',
    components: {
      // 组件注册
    },
    props: {
      idCurrEduCls: {
        type: String,
        required: false,
      },
      pageType: {
        type: String,
        required: true,
      },
      showTitle: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    emits: ['finish-add-to-eduCls'],
    setup(props, { emit }) {
      const userStore = useUserStore();
      const objPage = ref<StudentInfoList>();
      IdCurrEduCls_Static.value = props.idCurrEduCls == undefined ? '' : props.idCurrEduCls;
      UserTypeId_Session.value = userStore.getUserTypeId;
      const arrXzClg = ref<clsXzClgEN[] | null>([]);
      const arrXzMajor = ref<clsXzMajorEN[] | null>([]);
      const arrXzGradeBase = ref<clsXzGradeBaseEN[] | null>([]);
      const arrXzGrade = ref<clsXzGradeEN[] | null>([]);

      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnQuery_Click)
       **/
      const btnQuery_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!(in btnQuery_Click)');
          return;
        }
        objPage.value.SetCurrPageIndex(1);
        await objPage.value.BindGv_StudentInfo4Func(refDivList.value);
      };
      /** 函数功能:系统生成的Change事件函数
       * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
       **/
      async function ddlIdXzCollegeq_SelectedIndexChanged($event: Event) {
        console.log(event);
        //alert('请在扩展层:UsersCRUDExEx中重写该函数！');
        if (IsNullOrEmpty(idXzCollege_q.value) == true) return;
        SetDdl_idXzMajorById_CollegeInDiv(idXzCollege_q.value);
      }
      async function SetDdl_idXzMajorById_CollegeInDiv(stridXzCollege: string) {
        const objDivQuery = refDivQuery.value;
        if (objDivQuery == null) return;
        await XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(
          objDivQuery,
          'ddlIdXzMajor_q',
          stridXzCollege,
        ); //
      }
      const strTitle = ref('学生列表');

      const arrXzAdminCls = ref<clsXzAdminClsEN[] | null>([]);
      const userTypeId = userStore.userTypeId;
      const isShowMiddleSchool = userTypeId == enumUserType.PrimaryandSecondarySchoolUser_04;
      const route = useRoute(); // 获取当前路由信息
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      const Pagetype = ref(''); // 声明一个 ref 用于存储参数
      const TextId = ref(''); // 声明一个 ref 用于存储参数
      const ddlIdGradeq_SelectedIndexChanged = async (event: Event) => {
        const selectedGradeId = (event.target as HTMLSelectElement).value;
        const selectedId = (event.target as HTMLSelectElement).id;
        console.log(' selectedId:', selectedId);
        // 根据选中的年级 ID 获取行政班数据
        arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(selectedGradeId);
        idAdminCls_q.value = '0';

        // 其他处理逻辑
      };
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        const strIdGrade_Static = IdGrade_Static.value; //静态变量;//静态变量

        // const strIdXzCollege_Static = IdXzCollege_Static.value; //静态变量;//静态变量

        arrXzClg.value = await XzClg_GetArrXzClgByUserTypeId(UserTypeId_Session.value); //查询区域
        idXzCollege_q.value = '0';

        // arrXzMajor.value = await XzMajor_GetArrXzMajorByIdXzCollege(strIdXzCollege_Static); //查询区域
        // idXzMajor_q.value = '0';

        arrXzGrade.value = await XzGrade_GetArrXzGrade(); //查询区域
        idGrade_q.value = '0';

        // arrSex.value = await Sex_GetArrSex(); //查询区域
        // idSex_q.value = '0';

        // arrXzGradeBase.value = await XzGradeBase_GetArrXzGradeBaseByIsVisible(true); //查询区域
        // idGradeBase_q.value = '0';

        arrXzGrade.value = await XzGrade_GetArrXzGrade(); //查询区域
        idGrade_q.value = '0';

        if (strIdGrade_Static != '') {
          arrXzAdminCls.value = await XzAdminCls_GetArrXzAdminClsByIdGrade(strIdGrade_Static); //查询区域
          idAdminCls_q.value = '0';
        }
      }

      onMounted(() => {
        pageType.value = props.pageType;
        if (IdCurrEduCls_Static.value == '') {
          alert('教学班Id为空，请联系管理员！');
          console.error('教学班Id为空，请联系管理员！');
          return;
        }
        BindDdl4QryRegion();
        StudentInfoList.vuebtn_Click = btn_Click;
        // StudentInfoList.GetPropValue = GetPropValue;
        objPage.value = new StudentInfoList();

        GetCurrEduClsId();
        objPage.value.PageLoad();
      });
      function SetDiv() {}
      const dialogVisible = ref(false);
      const dialogWidth = ref('1000px'); // 设置对话框的宽度

      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      async function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'SetDiv':
            SetDiv();
            break;
          case 'AddStuToEduCls':
            break;
          case 'AddSingleStuToEduCls':
            await btnAddStuToEduCls_Click(strKeyId);
            return;

          default:
            break;
        }
        StudentInfoList.btn_Click(strCommandName, strKeyId);
      }

      async function btnAddStuToEduCls_Click(strid_StudentInfo: string) {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!(in btnQuery_Click)');
          return;
        }
        let intCount = 0;
        try {
          const returnBool = await CurrEduClsStuEx_AddNewRecordSaveCurrEduClsStu(
            IdCurrEduCls_Static.value,
            strid_StudentInfo,
          );

          if (returnBool == true) {
            // const strInfo = `克隆记录成功!`;
            intCount++;
          } else {
            const strInfo = `添加到教学班不成功!`;
            //显示信息框
            alert(strInfo);
          }

          const strInfo = `共添加了${intCount}条记录!`;
          alert(strInfo);
          console.log('完成！');
          emit('finish-add-to-eduCls');
          //2、显示无条件的表内容在GridView中
          await objPage.value.BindGv_StudentInfo4Func(refDivList.value);
        } catch (e: any) {
          const strMsg = `添加到教学班不成功,${e}.`;
          console.error('Error: ', strMsg);
          //console.trace();
          alert(strMsg);
        }
      }

      /*
       * 确定推送
       **/
      function btnOkPushStuText() {
        const arrKeyIds = GetCheckedKeyIds();
        if (arrKeyIds.length == 0) {
          alert('请选择需要推送的记录！');
          return;
        }
        // const objPage = new StudentInfoList();
        // objPage.btnOkPushStuText();
      }

      function GetCurrEduClsId() {
        // const Request = new Object();
        // Request = GetRequest();

        if (typeof route.query.idCurrEduCls === 'string') {
          idCurrEduCls.value = route.query.idCurrEduCls;
        } else {
          // 如果不是字符串，可以在这里处理
          idCurrEduCls.value = ''; // 或者设置默认值
        }

        // SetInputValueInDivObj(StudentInfoList.divLayout, 'hidCurrEduClsId', idCurrEduCls.value);

        if (typeof route.query.Pagetype === 'string') {
          Pagetype.value = route.query.Pagetype;
        } else {
          // 如果不是字符串，可以在这里处理
          Pagetype.value = ''; // 或者设置默认值
        }
        //根据参数判断是什么界面传入；01 教学班界面、02中学课文界面；

        // SetInputValueInDivObj(StudentInfoList.divLayout, 'hidPagetype', Pagetype.value);

        //课程Id

        if (typeof route.query.TextId === 'string') {
          TextId.value = route.query.TextId;
        } else {
          // 如果不是字符串，可以在这里处理
          TextId.value = ''; // 或者设置默认值
        }
      }

      return {
        idGrade_q,
        strTitle,
        btn_Click,

        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        dialogVisible,
        dialogWidth,

        handleSave,
        hideDialog,
        ddlIdGradeq_SelectedIndexChanged,
        arrXzGrade,
        idAdminCls_q,
        arrXzAdminCls,
        isShowMiddleSchool,
        btnQuery_Click,
        idXzCollege_q,
        ddlIdXzCollegeq_SelectedIndexChanged,
        arrXzClg,
      };
    },

    methods: {
      // 方法定义
      /**
       * 页面导入-在导入页面后运行的函数
       **/
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

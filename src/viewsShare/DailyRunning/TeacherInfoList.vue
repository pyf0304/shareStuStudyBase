<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->

      <div
        v-if="showTitle"
        style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px"
      >
        <label id="lblViewTitle" class="h5"> 教师列表2 </label>
      </div>
      <div v-if="idCurrEduCls != ''">
        <span id="spnEduClsName" class="h6"> 教学班 </span>
        <button id="btnAddTeacherToEduCls" @click="btn_Click('AddTeacherToEduCls', '')"
          >添加教师</button
        >
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
                <label id="lblTeacherId_q" class="col-form-label text-right" style="width: 50px">
                  工号
                </label>
              </td>
              <td class="text-left">
                <input id="txtTeacherId_q" class="form-control" style="width: 60px" />
              </td>
              <td class="text-left">
                <label id="lblTeacherName_q" class="col-form-label text-right" style="width: 50px">
                  姓名
                </label>
              </td>
              <td class="text-left">
                <input id="txtTeacherName_q" class="form-control" style="width: 60px" />
              </td>

              <td class="text-left">
                <select
                  id="ddlIdXzCollege_q"
                  v-model="idXzCollege_q"
                  title="学院"
                  class="form-control form-control-sm"
                  style="width: 120px"
                >
                  <option v-for="(item, index) in arrXzClg" :key="index" :value="item.idXzCollege">
                    {{ item.collegeName }}
                  </option></select
                >
              </td>

              <td class="text-left">
                <button
                  type="submit"
                  id="btnQuery"
                  class="btn btn-outline-warning text-nowrap"
                  @click="btnQuery_Click()"
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
    <input id="hidSortvTeacherInfoBy" type="hidden" value="" />

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
  // import '@/assets/images/favicon.ico" type="image/x-icon';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  // import '@/assets/lib/Xadmin/lib/layui/layui.js';
  // import '@/assets/lib/Xadmin/js/x1admin.js';

  import '@/assets/css/public.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import TeacherInfoList from '@/viewsShare/DailyRunning/TeacherInfoList';
  import { useRoute } from 'vue-router';
  import { GetCheckedKeyIds } from '@/ts/PubFun/clsCommFunc4Web';
  import {
    refTeacherInfo_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    IdCurrEduCls_Static,
    idXzCollege_q,
    UserTypeId_Session,
  } from '@/viewsShare/DailyRunning/TeacherInfoListVueShare';
  import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
  import { XzClg_GetArrXzClgByUserTypeId } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
  import { useUserStore } from '@/store/modulesShare/user';
  import { CurrEduClsTeacherEx_AddNewRecordSaveCurrEduClsTeacher } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';
  import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  export default defineComponent({
    name: 'TeacherInfoList',
    components: {
      // 组件注册
    },
    props: {
      idCurrEduCls: {
        type: String,
        required: false,
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
      UserTypeId_Session.value = userStore.getUserTypeId;
      IdCurrEduCls_Static.value = props.idCurrEduCls == null ? '' : props.idCurrEduCls;
      const objPage = ref<TeacherInfoList>();
      const arrXzClg = ref<clsXzClgEN[] | null>([]);
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrXzClg.value = await XzClg_GetArrXzClgByUserTypeId(UserTypeId_Session.value); //查询区域
        idXzCollege_q.value = '0';
      }
      const strTitle = ref('教师列表1');

      const route = useRoute(); // 获取当前路由信息
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      const Pagetype = ref(''); // 声明一个 ref 用于存储参数
      const TextId = ref(''); // 声明一个 ref 用于存储参数

      onMounted(() => {
        BindDdl4QryRegion();
        TeacherInfoList.vuebtn_Click = btn_Click;
        TeacherInfoList.GetPropValue = GetPropValue;
        objPage.value = new TeacherInfoList();

        GetCurrEduClsId();
        objPage.value.PageLoad();
      });
      function SetDiv() {}
      const dialogVisible = ref(false);
      const dialogWidth = ref('1000px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'idCurrEduCls':
            if (props.idCurrEduCls == null) return '';
            return props.idCurrEduCls;
          default:
            return '';
        }
        return '';
      }
      /* 根据条件获取相应的对象列表
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
       */
      async function btnQuery_Click() {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!(in btnQuery_Click)');
          return;
        }
        await objPage.value.BindGv_TeacherInfo4Func(refDivList.value);
      }
      //确定选择 并添加到关系表中
      async function btnAddSingleTeacherToEduCls_Click(strkeyId: string) {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!(in btnQuery_Click)');
          return;
        }
        await CurrEduClsTeacherEx_AddNewRecordSaveCurrEduClsTeacher(
          IdCurrEduCls_Static.value,
          strkeyId,
        );
        emit('finish-add-to-eduCls');
        await objPage.value.BindGv_TeacherInfo4Func(refDivList.value);
      }
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
          case 'AddTeacherToEduCls':
            break;
          case 'AddSingleTeacherToEduCls':
            await btnAddSingleTeacherToEduCls_Click(strKeyId);
            return;
          default:
            break;
        }
        TeacherInfoList.btn_Click(strCommandName, strKeyId);
      }
      //所有用户自定义的JS函数建议都放在这里

      function btnCurrEduClsInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        //ShowDialogOne();
        // const objPage = new TeacherInfoList();
        //   objPage.btnCurrEduClsInTab_Click(strKeyId);

        TeacherInfoList.btn_Click('CurrEduClsInTab', strKeyId);
      }

      function CloseWindow() {
        // try {
        //   const index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        //   parent.layer.close(index); //再执行关闭
        //   window.parent.btn_Click('Query');
        // } catch (e) {
        //   window.opener.location = '父页面地址';
        //   window.opener = null;
        //   window.close();
        // }
      }

      /*
       * 确定推送
       **/
      function btnOkPushTeacherText() {
        const arrKeyIds = GetCheckedKeyIds();
        if (arrKeyIds.length == 0) {
          alert('请选择需要推送的记录！');
          return;
        }
        // const objPage = new TeacherInfoList();
        // objPage.btnOkPushTeacherText();
      }

      //   function GetRequest() {
      //     const url = location.search; //获取url中"?"符后的字串
      //     const theRequest = new Object();
      //     if (url.indexOf('?') != -1) {
      //       const str = url.substring(1);
      //       const strs = str.split('&');
      //       for (let i = 0; i < strs.length; i++) {
      //         theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //       }
      //     }
      //     return theRequest;
      //   }

      function GetCurrEduClsId() {
        // const Request = new Object();
        // Request = GetRequest();

        if (typeof route.query.idCurrEduCls === 'string') {
          idCurrEduCls.value = route.query.idCurrEduCls;
        } else {
          // 如果不是字符串，可以在这里处理
          idCurrEduCls.value = ''; // 或者设置默认值
        }

        // SetInputValueInDivObj(TeacherInfoList.divLayout, 'hidCurrEduClsId', idCurrEduCls.value);

        if (typeof route.query.Pagetype === 'string') {
          Pagetype.value = route.query.Pagetype;
        } else {
          // 如果不是字符串，可以在这里处理
          Pagetype.value = ''; // 或者设置默认值
        }
        //根据参数判断是什么界面传入；01 教学班界面、02中学课文界面；

        // SetInputValueInDivObj(TeacherInfoList.divLayout, 'hidPagetype', Pagetype.value);

        //课程Id

        if (typeof route.query.TextId === 'string') {
          TextId.value = route.query.TextId;
        } else {
          // 如果不是字符串，可以在这里处理
          TextId.value = ''; // 或者设置默认值
        }
        // SetInputValueInDivObj(TeacherInfoList.divLayout, 'hidTextId', TextId.value);
      }

      return {
        strTitle,
        btn_Click,
        refTeacherInfo_Edit,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,

        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        btnQuery_Click,
        idXzCollege_q,
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

<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->
    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" class="h5">{{ strTitle }}-Share </label>
      <label id="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <div style="width: 100%; height: 50px" class="mt-2">
      <ul class="nav">
        <li class="nav-item">
          <label id="lbllocalStorage" class="col-form-label-sm text-right"> localStorage: </label>
        </li>
        <li class="nav-item ml-1">
          <input id="txtlocalStorage" class="form-control-sm" style="width: 200px"
        /></li>
        <li class="nav-item ml-2">
          <label id="lblsessionStorage" class="col-form-label-sm text-right">
            sessionStorage:
          </label>
        </li>
        <li class="nav-item ml-1">
          <input id="txtsessionStorage" class="form-control-sm" style="width: 200px" />
        </li>
        <li class="nav-item ml-2">
          <label id="lblClientCache" class="col-form-label-sm text-right"> 客户端缓存: </label>
        </li>
        <li class="nav-item ml-1">
          <input id="txtClientCache" class="form-control-sm" style="width: 200px"
        /></li>
      </ul>
    </div>
    <!--查询层-->
    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabQuery"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-left">
              <label id="lblCacheModeId_q" class="col-form-label-sm text-right" style="width: 90px">
                缓存方式
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCacheModeId_q"
                v-model="cacheModeId_q"
                class="form-control form-control-sm"
                style="width: 120px"
              >
                <option
                  v-for="(item, index) in arrCacheMode"
                  :key="index"
                  :value="item.cacheModeId"
                >
                  {{ item.cacheModeName }}
                </option></select
              >
            </td>
            <td class="text-left">
              <label id="lblCacheKey_q" class="col-form-label-sm text-right" style="width: 90px">
                缓存关键字
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCacheKey_q"
                v-model="cacheKey_q"
                class="form-control-sm"
                style="width: 120px"
              />
            </td>
            <td class="text-left">
              <button
                id="btnQuery"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btn_Click('Query', '')"
                >查询</button
              >
            </td>
            <td class="text-left">
              <button
                id="btnExportExcel"
                type="submit"
                class="btn btn-outline-warning text-nowrap"
                @click="btnExportExcel_Click"
                >导出Excel</button
              >
            </td>
          </tr>
        </tbody></table
      >
    </div>
    <!--功能区-->
    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label id="lblCacheUseStateList" class="col-form-label-sm text-info" style="width: 250px">
            缓存使用状态列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddNewRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnGetCacheUseState"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('GetCacheUseState', '')"
            >获取缓存状态</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnRemoveLocalCache"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ClearLocalStorage', '')"
            >删除本地缓存</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnRemoveSessionCache"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ClearSessionStorage', '')"
            >删除Session缓存</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCacheUseStateBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CacheUseState_EditCom ref="refCacheUseState_Edit"></CacheUseState_EditCom>
    <!--详细信息层-->
    <CacheUseState_DetailCom ref="CacheUseState_Detail"></CacheUseState_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  import * as XLSX from 'xlsx';
  import { ExportExcelData } from '@/ts/PubFun/ExportExcelData';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import CacheUseStateCRUDEx from '@/viewsShare/SystemSet/CacheUseStateCRUDEx';
  import CacheUseState_EditCom from '@/viewsShare/SystemSet/CacheUseState_Edit.vue';
  import CacheUseState_DetailCom from '@/viewsShare/SystemSet/CacheUseState_Detail.vue';
  import {
    refCacheUseState_Detail,
    refCacheUseState_Edit,
    refDivLayout,
    refDivQuery,
    refDivFunction,
    refDivList,
    UserId_Local,
    cacheModeId_q,
    cacheKey_q,
  } from '@/viewsShare/SystemSet/CacheUseStateVueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsCacheModeEN } from '@/ts/L0Entity/SystemSet/clsCacheModeEN';
  import { CacheMode_GetArrCacheModeByInUse } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
  import CacheUseState_EditEx from './CacheUseState_EditEx';

  export default defineComponent({
    name: 'CacheUseStateCRUD',
    components: {
      // 组件注册
      CacheUseState_EditCom,
      CacheUseState_DetailCom,
    },
    setup() {
      const userStore = useUserStore();

      UserId_Local.value = userStore.userId;
      const objPage = ref<CacheUseStateCRUDEx>();
      const objPage_Edit = ref<CacheUseState_EditEx>();
      const arrCacheMode = ref<clsCacheModeEN[] | null>([]);

      const strTitle = ref('缓存使用状态维护');
      /** 函数功能:为功能区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4FeatureRegion)
       **/
      async function BindDdl4FeatureRegion() {}

      onMounted(async () => {
        await BindDdl4QryRegion();
        await BindDdl4FeatureRegion();
        objPage.value = new CacheUseStateCRUDEx();
        await objPage.value.PageLoadCache();
      });
      /** 函数功能:为查询区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_Ts_BindDdl4QryRegion)
       **/
      async function BindDdl4QryRegion() {
        arrCacheMode.value = await CacheMode_GetArrCacheModeByInUse(true); //查询区域
        cacheModeId_q.value = '0';
      }

      const exportToExcel = (
        arrData: Array<Record<string, any>>,
        strSheetName: string,
        strFileName: string,
      ) => {
        try {
          // Convert object list to worksheet
          const worksheet = XLSX.utils.json_to_sheet(arrData);
          // Create a new workbook and append the worksheet
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, strSheetName);
          // Export the workbook to an Excel file
          XLSX.writeFile(workbook, strFileName);
          alert('导出成功！');
        } catch (error) {
          console.error('导出失败:', error);
          alert('导出失败，请检查控制台日志！');
        }
      };
      /** 根据条件获取相应的对象列表
       * (AutoGCLib.Vue_ViewScript_TS4Html:Gen_Vue_setup_ts_btnExportExcel_Click)
       **/
      const btnExportExcel_Click = async () => {
        if (objPage.value == null) {
          alert('页面初始化不成功,请联系管理员!');
          return;
        }
        const objExportExcelData: ExportExcelData =
          await objPage.value.ExportExcel_CacheUseState4Func();
        if (objExportExcelData.sheetName == '') {
          alert('获取导出数据出错,请检查!');
          return;
        }
        exportToExcel(
          objExportExcelData.arrObjLst,
          objExportExcelData.sheetName,
          objExportExcelData.fileName,
        );
      };

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        CacheUseStateCRUDEx.btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        refCacheUseState_Edit,
        refCacheUseState_Detail,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        arrCacheMode,
        cacheModeId_q,
        cacheKey_q,
        btnExportExcel_Click,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
@/viewsShare/SystemSet/CacheUseStateCRUDEx

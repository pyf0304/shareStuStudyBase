﻿<template>
  <div>
    <span v-if="emptyRecNumInfo !== '' && items.length === 0">{ emptyRecNumInfo }</span>
    <template v-else>
      <table>
        <tbody>
          <tr class="text-primary">
            <th style="width: 30px">
              <input v-model="selectAllChecked" type="checkbox" @change="selectAllRows" />
            </th>

            <th @click="sortColumn('')">
              试卷序号
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              考卷名称
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              是否启用
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              总得分
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              浏览量
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              已做人数
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              考试时间（分钟）
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              下载数目
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              收藏数量
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              资源喜欢数量
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              考卷建立时间
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              全校师生
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              全校师生公开
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              社会公众
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              是否自动生成题目
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              是否可以做多次
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('majorName')">
              专业
              <span v-if="sortColumnKey === 'majorName'">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('')">
              修改日期
              <span v-if="sortColumnKey === ''">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('courseName')">
              课程名称
              <span v-if="sortColumnKey === 'courseName'">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>

            <th @click="sortColumn('examPaperTypeName')">
              试卷类型名称
              <span v-if="sortColumnKey === 'examPaperTypeName'">
                <i :class="sortDirection === 'Asc' ? 'arrow-up' : 'arrow-down'"></i>
              </span>
            </th>
          </tr>

          <tr v-for="(item, index) in items" :key="index" class="text-secondary">
            <td>
              <input
                :id="'chk' + item.courseExamPaperId"
                v-model="item.checked"
                type="checkbox"
                name="chkInTab"
                class="CheckInTab"
              />
            </td>

            <td v-html="item.paperIndex"></td>

            <td v-html="item.examPaperName"></td>

            <td v-html="item.isShow"></td>

            <td v-html="item.totalScore"></td>

            <td v-html="item.viewCount"></td>

            <td v-html="item.doneNumber"></td>

            <td v-html="item.paperTime"></td>

            <td v-html="item.downloadNumber"></td>

            <td v-html="item.collectionCount"></td>

            <td v-html="item.likeCount"></td>

            <td v-html="item.examCreateTime"></td>

            <td v-html="item.isOpenToAllStu"></td>

            <td v-html="item.isOpenToSchool"></td>

            <td v-html="item.isOpenToSocial"></td>

            <td v-html="item.isAutoGeneQuestion"></td>

            <td v-html="item.isCanMultiDo"></td>

            <td v-html="item.idXzMajor"></td>

            <td v-html="item.updDate"></td>

            <td v-html="item.courseName"></td>

            <td v-html="item.examPaperTypeName"></td>
          </tr> </tbody
      ></table>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  //import router from '@/router';
  export default defineComponent({
    name: 'CcCourseExamPaper4Gv',
    components: {
      // 组件注册
    },

    props: {
      items: {
        type: Array<any>,
        required: true,
      },
      showErrorMessage: {
        type: Boolean,
        required: true,
        default: false,
      },
      emptyRecNumInfo: {
        type: String,
        required: true,
        default: '',
      },
    },

    emits: ['on-edit-tab-relainfo', 'on-sort-column'],

    setup(_, { emit }) {
      const selectAllChecked = ref(false); // 初始化复选框列头选中状态为 false);
      const sortColumnKey = ref(''); // 初始化排序列
      const sortDirection = ref('asc'); // 初始化排序方向

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_btnClickInRow)
       **/
      const btnClickInRow = (item: any) => {
        emit('on-edit-tab-relainfo', {
          tabId: item.tabId,
          content: '这是当前表的关键字',
        });
      };

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_List_TS4Html:Gen_List_Setup_Fun_sortColumn)
       **/
      const sortColumn = (columnKey: string) => {
        if (sortColumnKey.value === columnKey) {
          // 如果点击的是当前排序列，则切换排序方向
          sortDirection.value = sortDirection.value === 'Asc' ? 'Desc' : 'Asc';
        } else {
          // 如果点击的是其他列，则设置新的排序列和排序方向
          sortColumnKey.value = columnKey;
          sortDirection.value = 'Asc';
        }
        emit('on-sort-column', {
          sortColumnKey: sortColumnKey.value,
          sortDirection: sortDirection.value,
          content: '这是当前列表的列头排序',
        });
      };

      const selectAllRows = () => {
        console.error(selectAllChecked.value);
      };
      return {
        btnClickInRow,
        sortColumn,
        sortColumnKey,
        sortDirection,
        selectAllChecked,
        selectAllRows,
      };
    },

    watch: {
      // 监听 selectAllChecked 变化，当复选框列头状态改变时，修改所有记录的选中状态
      selectAllChecked(newValue) {
        this.items.forEach((item) => (item.checked = newValue));
      },
    },

    methods: {},
  });
</script>

<style scoped>
  .read-the-docs {
    color: #888;
  }
  /* 样式可根据实际情况自行调整 */
  .arrow-up {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #000; /* 箭头向上，可根据需要设置颜色 */
    margin-left: 5px;
  }

  .arrow-down {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000; /* 箭头向下，可根据需要设置颜色 */
    margin-left: 5px;
  }

  th:not(:last-child) {
    margin-right: 10px;
    border-right: 1px solid #ccc;
    background-color: rgba(0, 0, 255, 0.6);
    color: white;
    font-weight: bold;
  }

  th:last-child {
    margin-right: 0; /* Reset margin for the last column */
    border-right: none; /* Remove the border for the last column */
    background-color: rgba(0, 0, 255, 0.6);
    color: white;
    font-weight: bold;
  }

  .Bakth:not(:last-child) {
    margin-right: 10px; /* Adjust the value to control the spacing */
    border-right: 1px solid #ccc; /* Adjust the color and width as needed */
    background-color: #333; /* Adjust the color as needed */
    color: #fff; /* Adjust the text color as needed */
  }

  td {
    border-right: 1px solid #ccc; /* Adjust the color and width as needed */
  }

  tr:nth-child(odd) {
    background-color: #f2f2f2; /* Adjust the color as needed for odd rows */
  }

  tr:nth-child(even) {
    background-color: #ffffff; /* Adjust the color as needed for even rows */
  }
</style>

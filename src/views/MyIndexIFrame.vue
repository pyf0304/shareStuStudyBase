<template>
  <div id="my-index-iframe">
    <Header :title="strTitle" />
    <div class="main-layout">
      <MenuTree :menuItems="menuItems" @menuClick="handleMenuClick" />
      <!-- <PageContent /> -->
      <div class="content-area">
        <el-tabs v-model="activeTab" type="card" closable @tab-remove="removeTab">
          <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
            <component :is="tab.component" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
  import Header from '@/components/Header.vue';
  import MenuTree from '@/components/MenuTree.vue';
  import PageContent from '@/components/PageContent.vue';
  import Footer from '@/components/Footer.vue';

  import AnotherPage from '@/components/AnotherPage.vue'; // Example of another page component
  import $ from 'jquery';
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import { markRaw, computed, defineComponent, onMounted, ref } from 'vue';
  // import DiscussionTopics0 from '@/views/GradEduTools/DiscussionTopics.vue';
  // import DiscussionTopics_QUDI0 from '@/views/GradEduTools/DiscussionTopics_QUDI.vue';
  import XzMajorDirectionCRUD0 from '@/viewsShare/BaseInfo/XzMajorDirectionCRUD.vue';

  import gs_KnowledgesGraphCRUD0 from '@/viewsShare/Knowledges/gs_KnowledgesGraphCRUD.vue';
  import StudentInfoList0 from '@/viewsShare/UserManage/StudentInfoList.vue';
  import TeacherInfoList0 from '@/viewsShare/DailyRunning/TeacherInfoList.vue';
  import StudentInfoCRUD0 from '@/viewsShare/UserManage/StudentInfoCRUD.vue';
  import StudentInfoZxCRUD0 from '@/viewsShare/UserManage/StudentInfoZxCRUD.vue';

  import TeacherInfoCRUD0 from '@/viewsShare/BaseInfo/TeacherInfoCRUD.vue';

  import cc_CourseKnowledgesCRUD0 from '@/viewsShare/Knowledges/cc_CourseKnowledgesCRUD.vue';
  import cc_CourseKnowledgesCRUD_Weight0 from '@/viewsShare/Knowledges/cc_CourseKnowledgesCRUD_Weight.vue';
  import cc_KnowledgeModulesCRUD0 from '@/viewsShare/Knowledges/cc_KnowledgeModulesCRUD.vue';

  // import StructureChart0 from '@/views/Knowledges/StructureChart.vue';
  import XzMajorCRUD0 from '@/viewsShare/BaseInfo/XzMajorCRUD.vue';
  import cc_CourseCRUD0 from '@/viewsShare/CourseLearning/cc_CourseCRUD.vue';
  import CurrEduClsCRUD0 from '@/viewsShare/DailyRunning/CurrEduClsCRUD.vue';
  import CurrEduClsStuCRUD0 from '@/viewsShare/DailyRunning/CurrEduClsStuCRUD.vue';
  import CurrEduClsTeacherCRUD0 from '@/viewsShare/DailyRunning/CurrEduClsTeacherCRUD.vue';
  import gs_TeachingDateCRUD0 from '@/viewsShare/DailyRunning/gs_TeachingDateCRUD.vue';

  // import PersonalKnowledgeView0 from '@/views/GradEduTopic/PersonalKnowledgeView.vue';
  // import gs_UserConfig0 from '@/views/GradEduTools/gs_UserConfig.vue';
  import CacheUseStateCRUD0 from '@/viewsShare/SystemSet/CacheUseStateCRUD.vue';
  import XzSchoolCRUD0 from '@/viewsShare/SystemSet/XzSchoolCRUD.vue';

  // import SysCommentTypeCRUD0 from '@/views/RT_Params/SysCommentTypeCRUD.vue';

  import Welcome0 from '@/views/web/Welcome.vue';

  import cc_CourseExamPaperCRUD0 from '@/viewsShare/Knowledges/cc_CourseExamPaperCRUD.vue';
  import LearnModeCRUD0 from '@/viewsShare/CourseLearning/LearnModeCRUD.vue';
  import KnowledgeTypeCRUD0 from '@/viewsShare/Knowledges/KnowledgeTypeCRUD.vue';

  import cc_CourseStudentRelationCRUD0 from '@/viewsShare/CourseManage/cc_CourseStudentRelationCRUD.vue';
  import cc_CourseTeacherRelationCRUD0 from '@/viewsShare/CourseManage/cc_CourseTeacherRelationCRUD.vue';

  import UploadXlsFile0 from '@/viewsShare/tools/UploadXlsFile.vue';
  import UploadXlsFile4Ques0 from '@/viewsShare/tools/UploadXlsFile4Ques.vue';

  import KnowledgeMasterLevelCRUD0 from '@/viewsShare/Knowledges/KnowledgeMasterLevelCRUD.vue';
  import cc_CourseChapterCRUD0 from '@/viewsShare/Knowledges/cc_CourseChapterCRUD.vue';
  import gs_RelaTypeCRUD0 from '@/viewsShare/Knowledges/gs_RelaTypeCRUD.vue';

  import gs_KnowledgesLogicRelaCRUD0 from '@/viewsShare/Knowledges/gs_KnowledgesLogicRelaCRUD.vue';

  import gs_KnowledgesLogicCRUD0 from '@/viewsShare/Knowledges/gs_KnowledgesLogicCRUD.vue';
  import StructureChart0 from '@/views/Knowledges/StructureChart.vue';
  import StructureSection0 from '@/views/Knowledges/StructureSection.vue';
  import ge_StructureSectionTypeCRUD0 from '@/viewsShare/Knowledges/ge_StructureSectionTypeCRUD.vue';

  import ge_StructureGraphCRUD0 from '@/viewsShare/Knowledges/ge_StructureGraphCRUD.vue';
  import ge_StructureSectionCRUD0 from '@/viewsShare/Knowledges/ge_StructureSectionCRUD.vue';

  import router from '@/router';

  import { SIndexIframe } from '@/views/web/SIndexIframe';
  import { message } from '@/utils/myMessage';
  import { GetDivObjInDivObj, GetDivObjInDivObjN } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import PageHeadCom from '@/ts/components/PageHead_GE.vue';
  import { useQxRoleMenusStore } from '@/store/modulesShare/qxRoleMenus';
  import { useUserStore } from '@/store/modulesShare/user';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'Lsn_0111',
    components: {
      Header,
      MenuTree,
      PageContent,
      Footer,
      AnotherPage,
    },

    setup() {
      const strTitle = ref('游戏化学习-后台管理');
      const ge_StructureSectionCRUD = markRaw(ge_StructureSectionCRUD0);
      const ge_StructureGraphCRUD = markRaw(ge_StructureGraphCRUD0);
      const StructureSection = markRaw(StructureSection0);
      const ge_StructureSectionTypeCRUD = markRaw(ge_StructureSectionTypeCRUD0);

      const StructureChart = markRaw(StructureChart0);
      const gs_KnowledgesLogicCRUD = markRaw(gs_KnowledgesLogicCRUD0);

      // const cc_KnowledgesExamLibRelaCRUD = markRaw(cc_KnowledgesExamLibRelaCRUD0);
      const gs_KnowledgesLogicRelaCRUD = markRaw(gs_KnowledgesLogicRelaCRUD0);

      const gs_RelaTypeCRUD = markRaw(gs_RelaTypeCRUD0);
      const cc_CourseChapterCRUD = markRaw(cc_CourseChapterCRUD0);
      const KnowledgeMasterLevelCRUD = markRaw(KnowledgeMasterLevelCRUD0);

      const UploadXlsFile = markRaw(UploadXlsFile0);
      const UploadXlsFile4Ques = markRaw(UploadXlsFile4Ques0);

      const cc_CourseTeacherRelationCRUD = markRaw(cc_CourseTeacherRelationCRUD0);
      const cc_CourseStudentRelationCRUD = markRaw(cc_CourseStudentRelationCRUD0);

      const KnowledgeTypeCRUD = markRaw(KnowledgeTypeCRUD0);
      const LearnModeCRUD = markRaw(LearnModeCRUD0);
      const cc_CourseExamPaperCRUD = markRaw(cc_CourseExamPaperCRUD0);

      const XzMajorDirectionCRUD = markRaw(XzMajorDirectionCRUD0);

      const gs_KnowledgesGraphCRUD = markRaw(gs_KnowledgesGraphCRUD0);
      const StudentInfoList = markRaw(StudentInfoList0);
      const TeacherInfoList = markRaw(TeacherInfoList0);
      const StudentInfoCRUD = markRaw(StudentInfoCRUD0);
      const StudentInfoZxCRUD = markRaw(StudentInfoZxCRUD0);

      const TeacherInfoCRUD = markRaw(TeacherInfoCRUD0);

      const cc_CourseKnowledgesCRUD = markRaw(cc_CourseKnowledgesCRUD0);
      const cc_CourseKnowledgesCRUD_Weight = markRaw(cc_CourseKnowledgesCRUD_Weight0);

      const cc_KnowledgeModulesCRUD = markRaw(cc_KnowledgeModulesCRUD0);
      const XzMajorCRUD = markRaw(XzMajorCRUD0);
      const cc_CourseCRUD = markRaw(cc_CourseCRUD0);
      const CurrEduClsCRUD = markRaw(CurrEduClsCRUD0);
      const CurrEduClsStuCRUD = markRaw(CurrEduClsStuCRUD0);
      const CurrEduClsTeacherCRUD = markRaw(CurrEduClsTeacherCRUD0);
      const gs_TeachingDateCRUD = markRaw(gs_TeachingDateCRUD0);

      const CacheUseStateCRUD = markRaw(CacheUseStateCRUD0);
      const XzSchoolCRUD = markRaw(XzSchoolCRUD0);

      const Welcome = markRaw(Welcome0);

      const btn_Click = (strCommandName: string): void => {
        const strKeyId = '';
        alert(`"命令:${strCommandName}, 关键字:${strKeyId}.`);
      };
      const menuItemsBak2 = [
        {
          id: 1,
          name: 'Parent 1',
          children: [
            { id: 2, name: 'PageContent', component: 'PageContent' }, // Component name to load},
            { id: 3, name: 'AnotherPage', component: 'AnotherPage' }, // Another component},
          ],
        },
        {
          id: 4,
          name: 'Parent 2',
          children: [
            { id: 2, name: 'PageContent', component: 'PageContent' }, // Component name to load},
            { id: 3, name: 'AnotherPage', component: 'AnotherPage' }, // Another component},
          ],
        },
      ] as MenuItemBak[];
      const menuItems = ref<MenuItem[]>([
        {
          id: 1,
          name: '专业方向',
          active: false,
          children: [
            {
              id: 101,
              name: '用户专业方向维护',
              title: '',
              active: false,
              component: XzMajorDirectionCRUD,
              paras: '',
            },
          ],
        },

        {
          id: 2,
          name: '用户管理',
          active: false,
          children: [
            {
              id: 201,
              name: '学生维护',
              title: '',
              active: false,
              component: StudentInfoCRUD,
              paras: '',
            },
            {
              id: 202,
              name: '学生维护Zx',
              title: '',
              active: false,
              component: StudentInfoZxCRUD,
              paras: '',
            },
            {
              id: 203,
              name: '教师维护',
              title: '',
              active: false,
              component: TeacherInfoCRUD,
              paras: '',
            },
          ],
        },
        {
          id: 3,
          name: '个人中心',
          active: false,
          children: [
            {
              id: 301,
              name: '知识点逻辑图',
              title: '',
              active: false,
              component: gs_KnowledgesGraphCRUD,
              paras: '',
            },

            {
              id: 302,
              name: '结构章节维护(旧)',
              title: '',
              active: false,
              component: ge_StructureSectionCRUD,
              paras: '',
            },

            {
              id: 303,
              name: '结构图谱维护(旧)',
              title: '',
              active: false,
              component: ge_StructureGraphCRUD,
              paras: '',
            },

            {
              id: 304,
              name: '章节结构维护',
              title: '',
              active: false,
              component: StructureSection,
              paras: '',
            },
            {
              id: 305,
              name: '章节结构分类',
              title: '',
              active: false,
              component: ge_StructureSectionTypeCRUD,
              paras: '',
            },

            {
              id: 306,
              name: '知识结构图',
              title: '',
              active: false,
              component: StructureChart,
              paras: '',
            },
          ],
        },
        {
          id: 4,
          name: '教学班课程',
          active: false,
          children: [
            { id: 401, name: '专业', title: '', active: false, component: XzMajorCRUD, paras: '' },
            // <a @click="xadmin.add_tab('专业', '../BaseInfo/XzMajorCRUD')">
            {
              id: 402,
              name: '课程',
              title: '',
              active: false,
              component: cc_CourseCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('课程', '../CourseLearning_Share/cc_CourseCRUD')">
            {
              id: 403,
              name: '教学班',
              title: '',
              active: false,
              component: CurrEduClsCRUD,
              paras: '',
            },
            {
              id: 404,
              name: '教学班学生',
              title: '',
              active: false,
              component: CurrEduClsStuCRUD,
              paras: '',
            },
            {
              id: 405,
              name: '教学班教师',
              title: '',
              active: false,
              component: CurrEduClsTeacherCRUD,
              paras: '',
            },
            {
              id: 406,
              name: '教学班日期',
              title: '',
              active: false,
              component: gs_TeachingDateCRUD,
              paras: '',
            },
          ],
        },
        {
          id: 5,
          name: '系统设置',
          active: false,
          children: [
            {
              id: 501,
              name: '缓存配置',
              title: '',
              active: false,
              component: CacheUseStateCRUD,
              paras: '',
            },
            {
              id: 502,
              name: '学校维护',
              title: '',
              active: false,
              component: XzSchoolCRUD,
              paras: '',
            },
          ],
        },
        {
          id: 6,
          name: '知识点相关',
          active: false,
          children: [
            {
              id: 601,
              name: '知识点模块',
              title: '',
              active: false,
              component: cc_KnowledgeModulesCRUD,
              paras: '',
            },
            {
              id: 602,
              name: '知识点',
              title: '',
              active: false,
              component: cc_CourseKnowledgesCRUD,
              paras: '',
            },
            {
              id: 603,
              name: '知识点权重设置',
              title: '',
              active: false,
              component: cc_CourseKnowledgesCRUD_Weight,
              paras: '',
            },

            {
              id: 604,
              name: '知识点逻辑',
              title: '',
              active: false,
              component: gs_KnowledgesLogicCRUD,
              paras: '',
            },

            {
              id: 605,
              name: '知识点逻辑图',
              title: '',
              active: false,
              component: gs_KnowledgesGraphCRUD,
              paras: '',
            },

            {
              id: 606,
              name: '知识点逻辑关系',
              title: '',
              active: false,
              component: gs_KnowledgesLogicRelaCRUD,
              paras: '',
            },

            {
              id: 607,
              name: '知识点关系类型',
              title: '',
              active: false,
              component: gs_RelaTypeCRUD,
              paras: '',
            },

            {
              id: 608,
              name: '知识点掌握度',
              title: '',
              active: false,
              component: KnowledgeMasterLevelCRUD,
              paras: '',
            },

            {
              id: 609,
              name: '知识点类别',
              title: '',
              active: false,
              component: KnowledgeTypeCRUD,
              paras: '',
            },

            {
              id: 610,
              name: '学习模式',
              title: '',
              active: false,
              component: LearnModeCRUD,
              paras: '',
            },
          ],
        },
        {
          id: 7,
          name: '试卷习题管理',
          active: false,
          children: [
            // <a onclick="xadmin.add_tab('考卷维护', '../Knowledges/cc_CourseExamPaperCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>考卷维护</cite>
            // </a>
            {
              id: 701,
              name: '考卷维护',
              title: '',
              active: false,
              component: cc_CourseExamPaperCRUD,
              paras: '',
            },
          ],
        },

        {
          id: 8,
          name: '课程相关管理',
          active: false,
          children: [
            // <a onclick="xadmin.add_tab('课程维护', '../CourseLearning/cc_CourseCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>课程维护</cite>
            // </a>
            {
              id: 801,
              name: '课程维护',
              title: '',
              active: false,
              component: cc_CourseCRUD,
              paras: '',
            },

            {
              id: 802,
              name: '章节',
              title: '',
              active: false,
              component: cc_CourseChapterCRUD,
              paras: '',
            },
            {
              id: 803,
              name: '课程学生关系',
              title: '',
              active: false,
              component: cc_CourseStudentRelationCRUD,
              paras: '',
            },
            {
              id: 804,
              name: '课程教师关系',
              title: '',
              active: false,
              component: cc_CourseTeacherRelationCRUD,
              paras: '',
            },
          ],
        },

        {
          id: 9,
          name: '编码代码检查',
          active: false,
          children: [
            {
              id: 901,
              name: '测试上传Excel',
              title: '',
              active: false,
              component: UploadXlsFile,
              paras: '',
            },
            {
              id: 902,
              name: '测试上传Excel4Ques',
              title: '',
              active: false,
              component: UploadXlsFile4Ques,
              paras: '',
            },
          ],
        },
      ]);
      const menuItemsBak = [
        {
          id: 1,
          name: 'Page 1',
          component: 'PageContent', // Component name to load
        },
        {
          id: 2,
          name: 'Page 2',
          component: 'AnotherPage', // Another component
        },
      ] as MenuItem[];
      const tabs = ref([
        {
          name: 'default',
          label: 'Welcome',
          component: 'PageContent', // Default tab
        },
      ]);

      const activeTab = ref('default');

      const handleMenuClick = (menuItem: MenuItem) => {
        const existingTab = tabs.value.find((tab) => tab.name === menuItem.name);
        if (!existingTab) {
          tabs.value.push({
            name: menuItem.name,
            label: menuItem.name,
            component: menuItem.component,
          });
        }
        activeTab.value = menuItem.name;
      };

      const removeTab = (tabName: string) => {
        const index = tabs.value.findIndex((tab) => tab.name === tabName);
        if (index !== -1) {
          tabs.value.splice(index, 1);
          if (activeTab.value === tabName && tabs.value.length > 0) {
            activeTab.value = tabs.value[tabs.value.length - 1].name;
          }
        }
      };
      return {
        btn_Click,
        menuItems,
        tabs,
        activeTab,
        handleMenuClick,
        removeTab,
        strTitle,
      };
    },
  });
</script>

<style scoped>
  #my-index-iframe {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .main-layout {
    display: flex;
    flex: 1;
  }

  main {
    display: flex;
    flex: 1;
  }
</style>

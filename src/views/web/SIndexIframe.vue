<template>
  <div id="divLayout" ref="refDivLayout" class="app-container">
    <!-- 顶部开始 -->
    <header>
      <PageHeadCom
        ref="PageHeadRef"
        :title="strTitle"
        :isShowEduCls="'true'"
        :header-height="'60px'"
        :is-show-paper-iframe="'false'"
        :is-show-topic="'false'"
        :is-show-search="'false'"
        :is-show-major="'true'"
        :is-show-user-cache="'true'"
        :is-show-attention="'true'"
        :paper-id="''"
        @showUserCacheStatus="showUserCacheStatus"
      ></PageHeadCom>
    </header>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
    <div class="main-content">
      <!-- 左侧菜单开始 -->
      <aside class="sidebar">
        <!-- 菜单内容 -->
        <!-- <div> -->
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">游戏化学习平台</a>
          </div>
        </nav>
        <div class="container-fluid">
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(module, index) in menu" :key="index">
              <a
                class="nav-link module-name"
                :class="{ active: module.active }"
                href="javascript:void"
                @click="toggleActive(module)"
              >
                {{ module.name }}
              </a>
              <ul class="nav flex-column ml-1" v-if="module.active">
                <li class="nav-item" v-for="(item, idx) in module.items" :key="idx">
                  <a
                    class="nav-link item-name"
                    :class="{ item_active: item.active }"
                    href="javascript:void"
                    @click="addTab(module.name, item.name)"
                    >{{ item.name }}
                  </a>
                </li>
              </ul>
              <!-- 分隔底纹 -->
              <!-- <hr class="module-divider mt-1" v-if="index !== menu.length - 1" /> -->
            </li>
          </ul>
        </div>
        <!-- </div> -->
      </aside>

      <!-- 左侧菜单结束 -->
      <!-- 右侧主体开始 -->
      <main class="content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
          <ul class="layui-tab-title">
            <li class="home"> <font-awesome-icon icon="fa-regular fa-heart" />我的桌面0 </li>
          </ul>
          <div id="tab_right" class="layui-unselect layui-form-select layui-form-selected">
            <dl>
              <dd data-type="this">关闭当前</dd>
              <dd data-type="other">关闭其它</dd>
              <dd data-type="all">关闭全部</dd>
            </dl>
          </div>

          <el-tabs v-model="currentTab">
            <el-tab-pane v-for="tab in tabs" :key="tab.name">
              <template v-slot:label>
                <span class="mr-2">{{ tab.label }}</span>
                <span>&nbsp;&nbsp;</span>

                <a href="javascript:void(0)" class="ml-2" title="移除该页面" @click="closeTab(tab)">
                  <font-awesome-icon icon="times" style="color: rgb(164, 207, 247)" />
                </a>
              </template>
              <component :is="tab.component" :paras="tab.paras"></component>
            </el-tab-pane>
          </el-tabs>

          <div id="tab_show"></div>
        </div>
      </main>
      <div class="page-content-bg"></div>
    </div>
    <!-- 右侧主体结束 -->
    <!-- 中部结束 -->

    <input id="hidPage" type="hidden" />
  </div>
</template>
<script lang="ts">
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
  import { refDivLayout } from './SIndexIframeVueShare';
  // 定义 item 的类型
  interface Item {
    name: string;
    title: string;
    active: boolean;
    component: any; // 根据实际情况定义类型
    paras: string;
  }
  export default defineComponent({
    name: 'SIndexIframe',
    components: {
      // 组件注册
      //   Paper_QUDI,
      //   Paper_List,
      //   SysScoreSummaryNewTotal,
      PageHeadCom,
    },
    props: {
      page: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      const userStore = useUserStore();
      const qxRoleMenusStore = useQxRoleMenusStore();
      const route = useRoute(); // 获取当前路由信息
      const strTitle = ref('游戏化学习-后台管理');

      // const About = markRaw(About0);
      const menuSetId = ref('');

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
      // 菜单数据
      const menu = ref([
        {
          name: '专业方向',
          active: false,
          items: [
            {
              name: '用户专业方向维护',
              title: '',
              active: false,
              component: XzMajorDirectionCRUD,
              paras: '',
            },
          ],
        },

        {
          name: '用户管理',
          active: false,
          items: [
            { name: '学生维护', title: '', active: false, component: StudentInfoCRUD, paras: '' },
            {
              name: '学生维护Zx',
              title: '',
              active: false,
              component: StudentInfoZxCRUD,
              paras: '',
            },
            { name: '教师维护', title: '', active: false, component: TeacherInfoCRUD, paras: '' },
            // { name: '用户维护', title: '', active: false, component: UsersCRUD, paras: '' },
            // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
          ],
        },
        {
          name: '个人中心',
          active: false,
          items: [
            {
              name: '知识点逻辑图',
              title: '',
              active: false,
              component: gs_KnowledgesGraphCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('知识点逻辑图', '../Knowledges/gs_KnowledgesGraphCRUD')"
            // { name: '结构思维图', title: '', active: false, component: StructureChart, paras: '' },
            // <a @click="xadmin.add_tab('结构思维图', '../Knowledges/StructureChart')">

            // <a onclick="xadmin.add_tab('结构章节维护(旧)', '../Knowledges/ge_StructureSectionCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>结构章节维护(旧)</cite>
            // </a>
            {
              name: '结构章节维护(旧)',
              title: '',
              active: false,
              component: ge_StructureSectionCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('结构图谱维护(旧)', '../Knowledges/ge_StructureGraphCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>结构图谱维护(旧)</cite>
            // </a>
            {
              name: '结构图谱维护(旧)',
              title: '',
              active: false,
              component: ge_StructureGraphCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('章节结构维护', '../Knowledges/StructureSection')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>章节结构维护</cite>
            // </a>
            {
              name: '章节结构维护',
              title: '',
              active: false,
              component: StructureSection,
              paras: '',
            },
            {
              name: '章节结构分类',
              title: '',
              active: false,
              component: ge_StructureSectionTypeCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('知识结构图', '../Knowledges/StructureChart')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>结构思维图</cite>
            // </a>
            { name: '知识结构图', title: '', active: false, component: StructureChart, paras: '' },
          ],
        },
        {
          name: '教学班课程',
          active: false,
          items: [
            { name: '专业', title: '', active: false, component: XzMajorCRUD, paras: '' },
            // <a @click="xadmin.add_tab('专业', '../BaseInfo/XzMajorCRUD')">
            { name: '课程', title: '', active: false, component: cc_CourseCRUD, paras: '' },
            // <a @click="xadmin.add_tab('课程', '../CourseLearning_Share/cc_CourseCRUD')">
            { name: '教学班', title: '', active: false, component: CurrEduClsCRUD, paras: '' },
            // <a @click="xadmin.add_tab('教学班', '../DailyRunning/CurrEduClsCRUD')">
            {
              name: '教学班学生',
              title: '',
              active: false,
              component: CurrEduClsStuCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('教学班学生', '../DailyRunning/CurrEduClsStuCRUD')">
            {
              name: '教学班教师',
              title: '',
              active: false,
              component: CurrEduClsTeacherCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('教学班老师', '../DailyRunning/CurrEduClsTeacherCRUD')"
            {
              name: '教学班日期',
              title: '',
              active: false,
              component: gs_TeachingDateCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('教学班日期', '../GradEduTools/gs_TeachingDateCRUD')">
          ],
        },
        {
          name: '系统设置',
          active: false,
          items: [
            // <a  @click="xadmin.add_tab('分数权重管理','../ParameterTable/SysScoreWeight_QUDI_TS')"
            // {
            //   name: '个人知识点查看',
            //   title: '',
            //   active: false,
            //   component: PersonalKnowledgeView,
            //   paras: '',
            // },
            // <a  @click="xadmin.add_tab('个人知识点查看', '../GradEduTopic/PersonalKnowledgeView')"

            // <a @click="xadmin.add_tab('各观点分享配置', '../GradEduTools/gs_UserConfig')">
            { name: '缓存配置', title: '', active: false, component: CacheUseStateCRUD, paras: '' },
            { name: '学校维护', title: '', active: false, component: XzSchoolCRUD, paras: '' },

            // <a @click="xadmin.add_tab('缓存配置', '../SystemSet_Share/CacheUseStateCRUD')">

            // <a  @click="xadmin.add_tab('评论类型管理','../GradEduTopic/SysCommentType_QUDI_TS')"

            // <a onclick="xadmin.add_tab('个人知识点查看', '../GraduateEduTopic/PersonalKnowledgeView')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>个人知识点查看</cite>
            // </a>
            // {
            //   name: '个人知识点查看',
            //   title: '',
            //   active: false,
            //   component: PersonalKnowledgeView,
            //   paras: '',
            // },
          ],
        },
        {
          name: '知识点相关',
          active: false,
          items: [
            // <a  @click="xadmin.add_tab('分数权重管理','../ParameterTable/SysScoreWeight_QUDI_TS')"
            // {
            //   name: '个人知识点查看',
            //   title: '',
            //   active: false,
            //   component: PersonalKnowledgeView,
            //   paras: '',
            // },
            // <a  @click="xadmin.add_tab('个人知识点查看', '../GradEduTopic/PersonalKnowledgeView')"

            // <a @click="xadmin.add_tab('各观点分享配置', '../GradEduTools/gs_UserConfig')">

            // <a onclick="xadmin.add_tab('知识点', '../Knowledges_Share/cc_CourseKnowledgesCRUD')">
            //                   <i class="iconfont">&#xe6a7;</i>
            //                   <cite>知识点</cite>
            //               </a>
            {
              name: '知识点模块',
              title: '',
              active: false,
              component: cc_KnowledgeModulesCRUD,
              paras: '',
            },
            {
              name: '知识点',
              title: '',
              active: false,
              component: cc_CourseKnowledgesCRUD,
              paras: '',
            },
            {
              name: '知识点权重设置',
              title: '',
              active: false,
              component: cc_CourseKnowledgesCRUD_Weight,
              paras: '',
            },

            {
              name: '知识点逻辑',
              title: '',
              active: false,
              component: gs_KnowledgesLogicCRUD,
              paras: '',
            },
            // <a onclick="xadmin.add_tab('知识点逻辑图', '../Knowledges/gs_KnowledgesGraphCRUD')">
            //                     <i class="iconfont">&#xe6a7;</i>
            //                     <cite>知识点逻辑图</cite>
            //                 </a>
            {
              name: '知识点逻辑图',
              title: '',
              active: false,
              component: gs_KnowledgesGraphCRUD,
              paras: '',
            },
            //     <a onclick="xadmin.add_tab('知识点习题', '../Knowledges/cc_KnowledgesExamLibRelaCRUD')">
            //                         <i class="iconfont">&#xe6a7;</i>
            //                         <cite>知识点习题</cite>
            // < /a>
            // {
            //   name: '知识点习题',
            //   title: '',
            //   active: false,
            //   component: cc_KnowledgesExamLibRelaCRUD,
            //   paras: 'isDialog=false',
            // },
            // <a onclick="xadmin.add_tab('知识点逻辑关系', '../Knowledges/gs_KnowledgesLogicRelaCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点逻辑关系</cite>
            // </a>
            {
              name: '知识点逻辑关系',
              title: '',
              active: false,
              component: gs_KnowledgesLogicRelaCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('知识点关系类型', '../Knowledges_Share/gs_RelaTypeCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点关系类型</cite>
            // </a>
            {
              name: '知识点关系类型',
              title: '',
              active: false,
              component: gs_RelaTypeCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('知识点掌握度', '../Knowledges/KnowledgeMasterLevelCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点掌握度</cite>
            // </a>
            {
              name: '知识点掌握度',
              title: '',
              active: false,
              component: KnowledgeMasterLevelCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('知识点类别', '../Knowledges_Share/KnowledgeTypeCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>知识点类别</cite>
            // </a>
            {
              name: '知识点类别',
              title: '',
              active: false,
              component: KnowledgeTypeCRUD,
              paras: '',
            },
            // <a onclick="xadmin.add_tab('学习模式', '../CourseLearning/LearnModeCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>学习模式</cite>
            // </a>
            { name: '学习模式', title: '', active: false, component: LearnModeCRUD, paras: '' },
          ],
        },
        {
          name: '试卷习题管理',
          active: false,
          items: [
            // <a onclick="xadmin.add_tab('考卷维护', '../Knowledges/cc_CourseExamPaperCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>考卷维护</cite>
            // </a>
            {
              name: '考卷维护',
              title: '',
              active: false,
              component: cc_CourseExamPaperCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('学生批次题目关系', '../InteractManage/ge_StuBatchQuesRelaCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>学生批次题目关系</cite>
            // </a>
          ],
        },

        {
          name: '题库管理',
          active: false,
          items: [
            // <a title="可以查看当前教学班内的所有题目" onclick="xadmin.add_tab('题目', '../QuestionaireEdit/QuestionnaireCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>题目</cite>
            // </a>
          ],
        },
        {
          name: '课程相关管理',
          active: false,
          items: [
            // <a onclick="xadmin.add_tab('课程维护', '../CourseLearning/cc_CourseCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>课程维护</cite>
            // </a>
            { name: '课程维护', title: '', active: false, component: cc_CourseCRUD, paras: '' },
            // <a onclick="xadmin.add_tab('章节', '../Knowledges_Share/cc_CourseChapterCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>章节</cite>
            // </a>
            { name: '章节', title: '', active: false, component: cc_CourseChapterCRUD, paras: '' },
            // <a onclick="xadmin.add_tab('课程学习案例', '../CourseLearning/CourseLearningCaseCRUD')" >
            //                     <i class="iconfont">&#xe6a7;</i>
            //                     <cite>课程学习案例</cite>
            //                 </a>

            // <a onclick="xadmin.add_tab('课程学生关系', '../CourseManage/cc_CourseStudentRelationCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>课程学生关系</cite>
            // </a>
            {
              name: '课程学生关系',
              title: '',
              active: false,
              component: cc_CourseStudentRelationCRUD,
              paras: '',
            },

            // <a onclick="xadmin.add_tab('课程教师关系', '../CourseManage/cc_CourseTeacherRelationCRUD')">
            //     <i class="iconfont">&#xe6a7;</i>
            //     <cite>课程教师关系</cite>
            // </a>
            {
              name: '课程教师关系',
              title: '',
              active: false,
              component: cc_CourseTeacherRelationCRUD,
              paras: '',
            },
          ],
        },

        {
          name: '编码代码检查',
          active: false,
          items: [
            {
              name: '测试上传Excel',
              title: '',
              active: false,
              component: UploadXlsFile,
              paras: '',
            },
            {
              name: '测试上传Excel4Ques',
              title: '',
              active: false,
              component: UploadXlsFile4Ques,
              paras: '',
            },
          ],
        },
      ]);

      const tabs = ref<any[]>([
        {
          label: '欢迎',
          name: 'Welcome',
          component: Welcome,
          paras: '',
        },
      ]);
      // 当前标签页
      const currentTab = ref('');
      const lastCurrentTab = ref('');
      // 添加标签页
      const addTab = (moduleName: string, componentName: string) => {
        const existingTab = tabs.value.find((tab: any) => tab.name === componentName);
        if (!existingTab) {
          const selectedModule = menu.value.find((module: any) => module.name === moduleName);
          if (selectedModule) {
            const selectedComponent = (selectedModule.items as Item[]).find(
              (item: any) => item.name === componentName,
            );
            if (selectedComponent) {
              tabs.value.push({
                label: componentName,
                name: componentName,
                component: selectedComponent.component,
                paras: selectedComponent.paras,
              });
              lastCurrentTab.value = currentTab.value;
              currentTab.value = componentName;
            }
            toggleActiveItem(selectedComponent);
          }
        } else {
          lastCurrentTab.value = currentTab.value;
          currentTab.value = componentName;
        }

        setTimeout(() => {
          SelectedTab(componentName);
        }, 500);
      };
      const SelectedTab = (componentName: string) => {
        for (let i = 0; i < tabs.value.length; i++) {
          if (tabs.value[i].name == componentName) {
            const divName = refDivLayout.value;
            const divCurr = GetDivObjInDivObjN(divName, `tab-${i}`);
            if (divCurr) divCurr.click();
          }
        }
      };
      const removeTab = (moduleName: string, componentName: string) => {
        const existingTab = tabs.value.find((tab: any) => tab.name === componentName);
        if (existingTab) {
          let indexToRemove = tabs.value.indexOf(componentName); // 获取要移除的元素的索引
          if (indexToRemove !== -1) {
            tabs.value.splice(indexToRemove, 1); // 从数组中移除一个元素
          }

          currentTab.value = lastCurrentTab.value;
        }
        toggleActive(currentTab.value);

        setTimeout(() => {
          SelectedTab(componentName);
        }, 100);
      };
      const closeTab = (tabName: string) => {
        let indexToRemove = tabs.value.indexOf(tabName); // 获取要移除的元素的索引

        tabs.value.splice(indexToRemove, 1);
        if (currentTab.value === tabs.value[indexToRemove]?.name) {
          currentTab.value = ''; // 关闭当前标签页
        }
      };
      // function removeTab(tabName: string): void {
      //   let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引

      //   tabsStore.removeTab(tabName);
      //   tabsRef.value = tabsStore.myTabs;
      //   if (indexToActive > 0) {
      //     activeTab.value = indexToActive - 1;
      //   } else {
      //     activeTab.value = 0;
      //   }
      // }
      const activeTab = ref(0);
      // 切换菜单状态
      const toggleActive = (module: any) => {
        menu.value.forEach((m: any) => {
          if (m !== module) {
            m.active = false;
          }
        });
        module.active = !module.active;
      };
      const toggleActiveItem = (item: any) => {
        menu.value.forEach((m: any) => {
          m.items.forEach((i: any) => {
            if (i !== item) {
              i.active = false;
            }
          });
        });
        item.active = !item.active;
      };
      function showUserCacheStatus() {
        // alert('showUserCacheStatus');
        // router.push('/CacheUseStateCRUD');
        window.open('/#/CacheUseStateCRUD', '_blank');
      }
      // const currentTabComponent = computed(() => {
      //   return tabs[activeTab.value].component;
      // });
      onMounted(async () => {
        if (typeof route.query.menuSetId === 'string') {
          menuSetId.value = route.query.menuSetId;
        }
        let strMsg;
        switch (menuSetId.value) {
          case '0018':
            strTitle.value = '研究生论文阅读系统-个人中心';
            break;
          case '0025':
            strTitle.value = '游戏化教育平台-后台管理';
            break;
          case '0026':
            strTitle.value = '游戏化教育平台-个人中心';
            break;
          default:
            strMsg = `菜单集Id:${menuSetId.value} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
        const strRoleId = userStore.roleId;
        // console.log(strRoleId);

        const arrMenuName_CurrMenuSet = await qxRoleMenusStore.getMenuNamesByCmPrjId(
          strRoleId,
          menuSetId.value,
          clsSysPara4WebApi.cmPrjId,
        );
        // console.log('arrMenuName_CurrMenuSet:', arrMenuName_CurrMenuSet);
        menu.value = menu.value.filter((x: any) => arrMenuName_CurrMenuSet.indexOf(x.name) > -1);
        // console.log(menu.value);
        SIndexIframe.GetPropValue = GetPropValue;
        SIndexIframe.divLayout = refDivLayout.value;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'menuSetId':
            return menuSetId.value;
          default:
            return '';
        }
        return '';
      }
      //清空框架页
      function RemoveIfame_Click() {
        localStorage.removeItem('hid');
        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
      }
      //接收的参数
      // function GetRequest() {
      //   const url = location.search; //获取url中"?"符后的字串
      //   const theRequest = new Object();
      //   if (url.indexOf('?') != -1) {
      //  const str = url.substring(1);
      //  strs = str.split('&');
      //  for (let i = 0; i < strs.length; i++) {
      // theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //  }
      //   }
      //   return theRequest;
      // }
      //加载首页
      function window_onload() {
        //加载页面的时候关闭控制框架的所有缓存页面
        RemoveIfame_Click();
        // const Request = new Object();
        // Request = GetRequest();
        // const str1 = Request['page'];

        // const objPage = new SIndexIframe();
        // objPage.PageLoad();
        // setInterval('Bind_QuestionsCount1()', 300000); //指定300s刷新一次
      }
      //加载答疑统计数量

      function Bind_QuestionsCount1() {
        const objPage = new SIndexIframe();
        objPage.Bind_QuestionsCount();
      }
      //切换教学班
      function EduCls_Click(strkey: string, strName: string, strTypeID: string) {
        const objPage = new SIndexIframe();
        const divName = refDivLayout.value;
        objPage.EduCls_Click(divName, strkey, strName, strTypeID, '');
        //RemoveIfame_Click();
      }
      //加载欢迎页
      //function WelcomeLoad_Click() {
      //  const objPage = new welcome.Welcome();
      //  objPage.PageLoad();
      //}
      //信息提示
      function layui_Alert(iconKey: string, strMsg: string) {
        message.success(strMsg);
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
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
          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          default:
            break;
        }
      }
      return {
        refDivLayout,
        tabs,
        activeTab,

        btn_Click,
        toggleActive,
        menu,
        addTab,
        removeTab,
        currentTab,
        closeTab,
        Bind_QuestionsCount1,
        menuSetId,
        strTitle,
        showUserCacheStatus,
      };
    },
  });
</script>
<style scoped>
  #ModularName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
  }
  /* 样式可以根据需求进行修改 */
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  header {
    /* background-color: #333; */
    /* color: white; */
    padding: 20px;
    text-align: center;
  }
  .main-content {
    display: flex;
    flex: 1;
  }
  .sidebar {
    background-color: #f0f0f0;
    width: 250px;
    padding: 20px;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    margin-bottom: 1px;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  .nav-link {
    cursor: pointer;
    background-color: #f2f8fc;
  }

  .nav-link.active {
    font-weight: bold;
    background-color: #60b6f3;
  }
  /* .nav-item {
  } */

  .module-divider {
    border-top: 2px solid #d1b1b1;
    margin: 0;
  }
  .module-name {
    font-weight: bold;
    padding: 10px 0;
    font-size: 1.05rem;
  }
  .item-name {
    font-weight: normal;
    /* background-color: #7ac2f5; */
    font-size: 0.9rem;
  }
  .module-active {
    font-weight: bold;
    background-color: #1a9bf7;
  }
  .item_active {
    font-weight: bold;
    background-color: #dadcf3;
  }
</style>

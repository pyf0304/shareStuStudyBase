import { createPinia, setActivePinia } from 'pinia';

// 创建并设置 Pinia 实例
const pinia = createPinia();
setActivePinia(pinia);

export * from './viewsShare/BaseInfo';
export * from './viewsShare/CourseLearning';
export * from './viewsShare/CourseManage';
export * from './viewsShare/DailyRunning';
export * from './viewsShare/Knowledges';
export * from './viewsShare/LearnChart';
export * from './viewsShare/GameLearn';

export * from './viewsShare/ResourceMan';
export * from './viewsShare/SystemSet';
export * from './viewsShare/UserManage';
export * from './ts/L0Entity/BaseInfo';
import { clsXzMajorEN } from './ts/L0Entity/BaseInfo/clsXzMajorEN';

import {
  StudentInfoEx_ImportExcel,
  StudentInfoEx_SynchStudentToPlatform,
  StudentInfoEx_TestShare,
  StudentInfoEx_SynchUsersToStudent,
  StudentInfoEx_GetObjByStuId,
  StudentInfoEx_GetIdStudentInfoByStuId,
} from '@/ts/L3ForWApiExShare/UserManage/clsStudentInfoExWApi';

import {
  XzMajor_func,
  XzMajor_funcKey,
  XzMajor_GetObjByIdXzMajorAsync,
  XzMajor_IsExistAsync,
  XzMajor_GetObjLstCache,
  XzMajor_GetArrXzMajor,
  XzMajor_GetArrXzMajorByIdXzCollege,
  XzMajor_GetObjLstAsync,
  XzMajor_GetNameByIdXzMajorCache,
  XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache,
  XzMajor_BindDdl_IdXzMajorInDivCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { XzMajorEx_SortFun_MajorName } from '@/ts/L3ForWApiExShare/BaseInfo/clsXzMajorExWApi';
import { clsvStudentInfo_SimEN } from '@/ts/L0Entity/UserManage/clsvStudentInfo_SimEN';
// import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { clsStudentInfo } from '@/ts/L0Entity/UserManage/clsStudentInfo';
import { clsStudentInfoEN } from './types/entities.d';

import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import { clsTeacherInfo } from './types/entities.d';
import { clsTeacherInfoEN } from './types/entities.d';

import { clsCurrEduClsEN } from './types/entities.d';
import { clsCurrEduCls } from './types/entities.d';
import { clscc_CourseKnowledgesEN } from './types/entities.d';
import { clscc_CourseKnowledges } from './types/entities.d';

import {
  vStudentInfo_Sim_func,
  vStudentInfo_Sim_funcKey,
  vStudentInfo_Sim_GetArrvStudentInfo_Sim,
  vStudentInfo_Sim_GetObjLstCache,
} from '@/ts/L3ForWApi/UserManage/clsvStudentInfo_SimWApi';
import {
  CurrEduClsStuEx_AddId_Stu4EduCls,
  CurrEduClsStuEx_BindDdl_IdStuByIdCurrEduClsInDivExCache,
  CurrEduClsStuEx_BindDdl_IdStuWithStuIdByIdCurrEduClsInDivExCache,
  CurrEduClsStuEx_GetIdCurrEduClsListByStuId,
  CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';
import {
  CurrEduClsEx_Bind_EduClsStuList,
  CurrEduClsEx_Bind_EduClsTeaList,
  CurrEduClsEx_GetCourseIdByIdCurrEduCls,
  CurrEduClsEx_GetObjByCurrEduClsId,
  CurrEduClsEx_SortFunByKey,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { StudentInfo_GetObjByIdStudentInfoAsync } from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';

import { CurrEduClsTeacherEx_GetIdCurrEduClsListByTeacherId } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';
import { TeacherInfoEx_GetObjByTeacherId } from '@/ts/L3ForWApiExShare/BaseInfo/clsTeacherInfoExWApi';

import { TeacherInfo_GetObjByIdTeacherAsync } from '@/ts/L3ForWApi/BaseInfo/clsTeacherInfoWApi';
import { vTeacherInfo_Sim_func } from '@/ts/L3ForWApi/BaseInfo/clsvTeacherInfo_SimWApi';
import {
  CurrEduCls_GetFirstObjAsync,
  CurrEduCls_GetObjByIdCurrEduClsAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import {
  cc_CourseKnowledges_BindDdl_CourseKnowledgeIdByCourseIdInDivCache,
  cc_CourseKnowledges_CopyObjTo,
  cc_CourseKnowledges_func,
  cc_CourseKnowledges_funcKey,
  cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId,
  cc_CourseKnowledges_GetFirstObjAsync,
  cc_CourseKnowledges_GetFldValueAsync,
  cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache,
  cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync,
  cc_CourseKnowledges_GetObjLstAsync,
  cc_CourseKnowledges_GetObjLstByPagerCache,
  cc_CourseKnowledges_GetObjLstCache,
  cc_CourseKnowledges_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseKnowledgesWApi';
import {
  cc_KnowledgeModules_func,
  cc_KnowledgeModules_funcKey,
  cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId,
  cc_KnowledgeModules_GetNameByKnowledgeModuleIdCache,
  cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync,
  cc_KnowledgeModules_GetObjLstAsync,
  cc_KnowledgeModules_GetObjLstCache,
} from '@/ts/L3ForWApi/Knowledges/clscc_KnowledgeModulesWApi';
import { clscc_CourseKnowledgesENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseKnowledgesENEx';
import { clscc_KnowledgeModules } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModules';
import { clscc_KnowledgeModulesEN } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesEN';
import { clscc_KnowledgeModulesENEx } from '@/ts/L0Entity/Knowledges/clscc_KnowledgeModulesENEx';
import { cc_KnowledgeModulesEx_GetKeyIdByKnowledgeModuleName } from '@/ts/L3ForWApiEx/Knowledges/clscc_KnowledgeModulesExWApi';
import {
  cc_CourseKnowledgesEx_CopyToEx,
  cc_CourseKnowledgesEx_FuncMapCourseName,
  cc_CourseKnowledgesEx_FuncMapNameWithQuestionNum,
  cc_CourseKnowledgesEx_GetArrcc_CourseKnowledgesByQuestionType,
  cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache,
  cc_CourseKnowledgesEx_GetKnowledgeModuleIdByCourseKnowledgeIdCache,
} from '@/ts/L3ForWApiExShare/Knowledges/clscc_CourseKnowledgesExWApi';
import { clsgs_KnowledgesLogicEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicEN';
import { clsgs_KnowledgesLogicENEx } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicENEx';
import { clsgs_KnowledgesLogicRelaEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaEN';
import { clsgs_KnowledgesLogicRelaENEx } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaENEx';
import { gs_KnowledgesLogicEx_AddNewRecordAsync } from '@/ts/L3ForWApiExShare/Knowledges/clsgs_KnowledgesLogicExWApi';
import { gs_KnowledgesLogicRelaEx_AddNewRecordAsync } from '@/ts/L3ForWApiExShare/Knowledges/clsgs_KnowledgesLogicRelaExWApi';
import {
  gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync,
  gs_KnowledgesLogicRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesLogicRelaWApi';
import {
  gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync,
  gs_KnowledgesLogic_GetObjLstAsync,
} from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesLogicWApi';
import { clsXzSchoolEN } from '@/ts/L0Entity/SystemSet/clsXzSchoolEN';
import {
  XzSchool_BindDdl_IdSchoolInDivCache,
  XzSchool_func,
  XzSchool_funcKey,
  XzSchool_GetArrXzSchool,
  XzSchool_GetObjByIdSchoolAsync,
  XzSchool_GetObjByIdSchoolCache,
} from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
import { clsvcc_Course_SimEN } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimEN';
import { clsXzGradeEN } from '@/ts/L0Entity/BaseInfo/clsXzGradeEN';
import { clsvCurrEduCls_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduCls_SimEN';
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { clsvcc_Course_SimENEx } from '@/ts/L0Entity/CourseManage/clsvcc_Course_SimENEx';
import { clscc_CourseTypeEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseTypeEN';
import { clscc_CourseTypeENEx } from '@/ts/L0Entity/CourseLearning/clscc_CourseTypeENEx';
import { clsSchoolTermEN } from '@/ts/L0Entity/SysPara/clsSchoolTermEN';
import { clsXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorDirectionEN';
import {
  XzGrade_BindDdl_IdGradeInDivCache,
  XzGrade_func,
  XzGrade_funcKey,
  XzGrade_GetArrXzGrade,
  XzGrade_GetObjLstCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { clsKnowledgeMasterLevelEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeMasterLevelEN';
import { clsKnowledgeMasterLevelENEx } from '@/ts/L0Entity/Knowledges/clsKnowledgeMasterLevelENEx';
import { clsge_StructureSectionTypeEN } from '@/ts/L0Entity/Knowledges/clsge_StructureSectionTypeEN';
import { ge_StructureSectionType_GetObjLstAsync } from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionTypeWApi';
import { clscc_CourseChapter } from '@/ts/L0Entity/Knowledges/clscc_CourseChapter';
import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
import { clsXzClg } from '@/ts/L0Entity/UserManage/clsXzClg';
import {
  XzClgEx_BindDdl_IdXzCollegeByUserTypeInDivCache,
  XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx,
  XzClgEx_GetDepartmentIdInGPByIdCollege,
  XzClgEx_GetObjByCollegeId,
  XzClgEx_GetObjByCollegeName,
} from '@/ts/L3ForWApiExShare/BaseInfo/clsXzClgExWApi';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { clsKnowledgeMasterTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeMasterTypeEN';
import { clsKnowledgeMasterTypeENEx } from '@/ts/L0Entity/Knowledges/clsKnowledgeMasterTypeENEx';
import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';
import { clsgs_KnowledgesGraphENEx } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphENEx';
import {
  cc_Course_func,
  cc_Course_funcKey,
  cc_Course_GetArrcc_Course,
  cc_Course_GetNameByCourseIdCache,
  cc_Course_GetObjByCourseIdCache,
  cc_Course_GetObjLstCache,
} from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
import { vCurrEduClsStu_Sim_GetArrvCurrEduClsStu_SimByEduClsOrByStuName } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStu_SimWApi';
import { clsvCurrEduClsStu_SimEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStu_SimEN';
import { cc_CourseChapterEx_GetArrCourseChapterByParentIdCourseIdInDiv } from '@/ts/L3ForWApiExShare/Knowledges/clscc_CourseChapterExWApi';
import { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache } from '@/ts/L3ForWApiExShare/SysPara/clsvXzGradeBaseExWApi';
import {
  vCurrEduCls_Sim_func,
  vCurrEduCls_Sim_funcKey,
  vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduCls_SimWApi';
import {
  vcc_Course_Sim_func,
  vcc_Course_Sim_funcKey,
} from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import {
  cc_CourseChapter_BindDdl_CourseChapterIdInDivCache,
  cc_CourseChapter_CopyObjTo,
  cc_CourseChapter_func,
  cc_CourseChapter_GetArrcc_CourseChapterByCourseId,
  cc_CourseChapter_GetObjByCourseChapterIdAsync,
  cc_CourseChapter_GetObjByCourseChapterIdCache,
  cc_CourseChapter_GetObjLstAsync,
  cc_CourseChapter_GetObjLstByPagerCache,
  cc_CourseChapter_GetObjLstCache,
  cc_CourseChapter_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
import { clscc_CourseChapterENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterENEx';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import {
  XzMajorDirection_func,
  XzMajorDirection_funcKey,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
import {
  XzClg_BindDdl_IdXzCollegeByUserTypeIdInDivCache,
  XzClg_func,
  XzClg_funcKey,
  XzClg_GetObjByIdXzCollegeAsync,
  XzClg_GetObjLstAsync,
} from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import {
  XzGradeBase_BindDdl_IdGradeBaseByIsVisibleInDivCache,
  XzGradeBase_func,
  XzGradeBase_funcKey,
  XzGradeBase_GetObjLstAsync,
} from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsKnowledgeTypeEN } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeEN';
import {
  KnowledgeType_func,
  KnowledgeType_GetObjLstAsync,
} from '@/ts/L3ForWApi/Knowledges/clsKnowledgeTypeWApi';
import {
  gs_KnowledgesGraph_AddNewRecordWithMaxIdAsync,
  gs_KnowledgesGraph_BindDdl_KnowledgeGraphIdInDivCache,
  gs_KnowledgesGraph_CheckPropertyNew,
  gs_KnowledgesGraph_GetFirstObjAsync,
  gs_KnowledgesGraph_GetObjLstAsync,
  gs_KnowledgesGraph_GetObjLstCache,
} from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesGraphWApi';
import { clsgs_RelaTypeEN } from '@/ts/L0Entity/Knowledges/clsgs_RelaTypeEN';
import { gs_RelaType_GetSubObjLstCache } from '@/ts/L3ForWApi/Knowledges/clsgs_RelaTypeWApi';
import {
  KnowledgeMasterLevel_BindDdl_MasterLevelIdInDivCache,
  KnowledgeMasterLevel_func,
  KnowledgeMasterLevel_funcKey,
  KnowledgeMasterLevel_GetArrKnowledgeMasterLevel,
} from '@/ts/L3ForWApi/Knowledges/clsKnowledgeMasterLevelWApi';
import {
  KnowledgeMasterType_func,
  KnowledgeMasterType_funcKey,
  KnowledgeMasterType_GetArrKnowledgeMasterType,
} from '@/ts/L3ForWApi/Knowledges/clsKnowledgeMasterTypeWApi';
import {
  SchoolTerm_func,
  SchoolTerm_funcKey,
  SchoolTerm_GetObjLstCache,
} from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';
import { clsKnowledgeTypeENEx } from '@/ts/L0Entity/Knowledges/clsKnowledgeTypeENEx';
import { clsvXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsvXzMajorDirectionEN';
import { vXzMajorDirection_GetSubObjLstCache } from '@/ts/L3ForWApi/BaseInfo/clsvXzMajorDirectionWApi';
import {
  gs_KnowledgesGraphEx_SortByUpdDate,
  gs_KnowledgesGraphEx_SubmitKnowledgeGraphAsync,
} from '@/ts/L3ForWApiExShare/Knowledges/clsgs_KnowledgesGraphExWApi';
import {
  ge_StructureSection_DelRecordAsync,
  ge_StructureSection_GetObjLstAsync,
  ge_StructureSection_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/Knowledges/clsge_StructureSectionWApi';
import {
  ge_StructureGraphEx_FuncMapByFldName,
  ge_StructureGraphEx_GetObjExLstByPagerCache,
  ge_StructureGraphEx_SubmitStructureGraphAsync,
} from '@/ts/L3ForWApiExShare/Knowledges/clsge_StructureGraphExWApi';

export {
  XzMajor_func,
  XzMajor_funcKey,
  XzMajor_GetObjByIdXzMajorAsync,
  XzMajor_IsExistAsync,
  XzMajor_GetObjLstCache,
  XzMajor_GetArrXzMajor,
  XzMajor_GetArrXzMajorByIdXzCollege,
  XzMajor_GetObjLstAsync,
  XzMajor_GetNameByIdXzMajorCache,
  XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache,
  XzMajor_BindDdl_IdXzMajorInDivCache,
};
export { XzMajorEx_SortFun_MajorName };
export { StudentInfo_GetObjByIdStudentInfoAsync };
export { StudentInfoEx_GetObjByStuId, StudentInfoEx_GetIdStudentInfoByStuId };
export {
  vStudentInfo_Sim_func,
  vStudentInfo_Sim_funcKey,
  vStudentInfo_Sim_GetObjLstCache,
  vStudentInfo_Sim_GetArrvStudentInfo_Sim,
  StudentInfoEx_SynchUsersToStudent,
  StudentInfoEx_ImportExcel,
  StudentInfoEx_SynchStudentToPlatform,
  StudentInfoEx_TestShare,
};
export { CurrEduCls_GetObjByIdCurrEduClsAsync, CurrEduCls_GetFirstObjAsync };
export {
  CurrEduClsEx_SortFunByKey,
  CurrEduClsEx_Bind_EduClsStuList,
  CurrEduClsEx_Bind_EduClsTeaList,
  CurrEduClsEx_GetCourseIdByIdCurrEduCls,
  CurrEduClsEx_GetObjByCurrEduClsId,
};

export {
  CurrEduClsStuEx_AddId_Stu4EduCls,
  CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls,
  CurrEduClsStuEx_BindDdl_IdStuByIdCurrEduClsInDivExCache,
  CurrEduClsStuEx_GetIdCurrEduClsListByStuId,
  CurrEduClsStuEx_BindDdl_IdStuWithStuIdByIdCurrEduClsInDivExCache,
};
export { CurrEduClsTeacherEx_GetIdCurrEduClsListByTeacherId };
export { TeacherInfo_GetObjByIdTeacherAsync };
export { TeacherInfoEx_GetObjByTeacherId };
export { vTeacherInfo_Sim_func };

export {
  cc_CourseKnowledges_GetNameByCourseKnowledgeIdCache,
  cc_CourseKnowledges_GetObjLstCache,
  cc_CourseKnowledges_GetArrcc_CourseKnowledgesByCourseId,
  cc_CourseKnowledges_GetFirstObjAsync,
  cc_CourseKnowledges_GetFldValueAsync,
  cc_CourseKnowledges_GetObjLstAsync,
  cc_CourseKnowledges_GetObjByCourseKnowledgeIdAsync,
  cc_CourseKnowledges_CopyObjTo,
  cc_CourseKnowledges_GetObjLstByPagerCache,
  cc_CourseKnowledges_GetRecCountByCondCache,
  cc_CourseKnowledges_BindDdl_CourseKnowledgeIdByCourseIdInDivCache,
};
export { cc_CourseKnowledges_func, cc_CourseKnowledges_funcKey };
export {
  cc_CourseKnowledgesEx_GetArrcc_CourseKnowledgesByQuestionType,
  cc_CourseKnowledgesEx_GetKnowledgeModuleIdByCourseKnowledgeIdCache,
  cc_CourseKnowledgesEx_CopyToEx,
  cc_CourseKnowledgesEx_FuncMapCourseName,
  cc_CourseKnowledgesEx_FuncMapNameWithQuestionNum,
  cc_CourseKnowledgesEx_GetKeyIdLstByKnowledgeModuleIdCache,
};

export {
  cc_KnowledgeModules_GetObjLstCache,
  cc_KnowledgeModules_GetObjLstAsync,
  cc_KnowledgeModules_GetNameByKnowledgeModuleIdCache,
  cc_KnowledgeModules_GetObjByKnowledgeModuleIdAsync,
  cc_KnowledgeModules_func,
  cc_KnowledgeModules_funcKey,
};

export { cc_KnowledgeModules_GetArrcc_KnowledgeModulesByCourseId };

export { cc_KnowledgeModulesEx_GetKeyIdByKnowledgeModuleName };

export { gs_KnowledgesLogicEx_AddNewRecordAsync };
export { gs_KnowledgesLogicRelaEx_AddNewRecordAsync };
export {
  gs_KnowledgesLogicRela_Delgs_KnowledgesLogicRelasByCondAsync,
  gs_KnowledgesLogicRela_GetObjLstAsync,
};

export { gs_KnowledgesLogic_Delgs_KnowledgesLogicsByCondAsync, gs_KnowledgesLogic_GetObjLstAsync };

export {
  XzSchool_GetObjByIdSchoolAsync,
  XzSchool_GetObjByIdSchoolCache,
  XzSchool_GetArrXzSchool,
  XzSchool_BindDdl_IdSchoolInDivCache,
  XzSchool_func,
  XzSchool_funcKey,
};
export { XzGrade_GetArrXzGrade, XzGrade_BindDdl_IdGradeInDivCache };

export { ge_StructureSectionType_GetObjLstAsync };
export { ge_StructureGraphEx_FuncMapByFldName, ge_StructureGraphEx_GetObjExLstByPagerCache };
export {
  XzClgEx_GetObjByCollegeId,
  XzClgEx_GetObjByCollegeName,
  XzClgEx_BindDdl_IdXzCollegeByUserTypeInDivCache,
  XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx,
  XzClgEx_GetDepartmentIdInGPByIdCollege,
};
export { vCurrEduClsTeacher_GetObjLstAsync };
export { vCurrEduClsStu_GetObjLstAsync };
export {
  cc_Course_func,
  cc_Course_funcKey,
  cc_Course_GetArrcc_Course,
  cc_Course_GetNameByCourseIdCache,
  cc_Course_GetObjLstCache,
  cc_Course_GetObjByCourseIdCache,
};
export { vCurrEduClsStu_Sim_GetArrvCurrEduClsStu_SimByEduClsOrByStuName };

export { XzGrade_GetObjLstCache, XzGrade_func, XzGrade_funcKey };

export { cc_CourseChapterEx_GetArrCourseChapterByParentIdCourseIdInDiv };

export { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache };
export {
  vCurrEduCls_Sim_GetArrvCurrEduCls_SimByCourseId,
  vCurrEduCls_Sim_func,
  vCurrEduCls_Sim_funcKey,
};
export { vcc_Course_Sim_func, vcc_Course_Sim_funcKey };
export {
  cc_CourseChapter_CopyObjTo,
  cc_CourseChapter_GetObjLstByPagerCache,
  cc_CourseChapter_GetRecCountByCondCache,
  cc_CourseChapter_func,
  cc_CourseChapter_GetObjByCourseChapterIdAsync,
  cc_CourseChapter_GetObjByCourseChapterIdCache,
  cc_CourseChapter_GetObjLstCache,
  cc_CourseChapter_BindDdl_CourseChapterIdInDivCache,
  cc_CourseChapter_GetObjLstAsync,
  cc_CourseChapter_GetArrcc_CourseChapterByCourseId,
};
export { XzMajorDirection_func, XzMajorDirection_funcKey };
export {
  XzClg_funcKey,
  XzClg_GetObjByIdXzCollegeAsync,
  XzClg_func,
  XzClg_GetObjLstAsync,
  XzClg_BindDdl_IdXzCollegeByUserTypeIdInDivCache,
};
export {
  XzGradeBase_func,
  XzGradeBase_funcKey,
  XzGradeBase_BindDdl_IdGradeBaseByIsVisibleInDivCache,
};

export { KnowledgeType_func, KnowledgeType_GetObjLstAsync };
export {
  gs_KnowledgesGraph_GetObjLstCache,
  gs_KnowledgesGraph_GetFirstObjAsync,
  gs_KnowledgesGraph_GetObjLstAsync,
  gs_KnowledgesGraph_AddNewRecordWithMaxIdAsync,
  gs_KnowledgesGraph_CheckPropertyNew,
};
export { gs_KnowledgesGraphEx_SubmitKnowledgeGraphAsync, gs_KnowledgesGraphEx_SortByUpdDate };

export { gs_RelaType_GetSubObjLstCache };

export {
  KnowledgeMasterLevel_GetArrKnowledgeMasterLevel,
  KnowledgeMasterLevel_func,
  KnowledgeMasterLevel_funcKey,
  KnowledgeMasterLevel_BindDdl_MasterLevelIdInDivCache,
};

export {
  KnowledgeMasterType_func,
  KnowledgeMasterType_funcKey,
  KnowledgeMasterType_GetArrKnowledgeMasterType,
};
export { SchoolTerm_GetObjLstCache, SchoolTerm_func, SchoolTerm_funcKey };

export { XzGradeBase_GetObjLstAsync };
export { vXzMajorDirection_GetSubObjLstCache };
export {
  ge_StructureSection_GetObjLstAsync,
  ge_StructureSection_DelRecordAsync,
  ge_StructureSection_GetRecCountByCondAsync,
};
export { gs_KnowledgesGraph_BindDdl_KnowledgeGraphIdInDivCache };
export { ge_StructureGraphEx_SubmitStructureGraphAsync };
// 导出加法函数
export function add(a: number, b: number) {
  return a + b;
}

// 导出减法函数
export function mySubtract(a: number, b: number) {
  return a - b;
}

// 导出生成随机数函数
export function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { clsXzMajorEN };
export { clsXzMajorDirectionEN };
export { clsvStudentInfo_SimEN };
export { clsStudentInfo };
// export { clsStudentInfoEN };
export { clsStudentInfoENEx };

export { clsStudentInfoEN };
export { clsTeacherInfo };
export { clsTeacherInfoEN };
export { clsCurrEduCls };
export { clsCurrEduClsEN };
export { clscc_CourseKnowledges };
export { clscc_CourseKnowledgesEN };
export { clscc_CourseKnowledgesENEx };
export { clscc_KnowledgeModules };
export { clscc_KnowledgeModulesEN };
export { clscc_KnowledgeModulesENEx };

export { clsgs_KnowledgesLogicEN };
export { clsgs_KnowledgesLogicENEx };

export { clsgs_KnowledgesLogicRelaEN };
export { clsgs_KnowledgesLogicRelaENEx };

export { clsXzSchoolEN };

export { clsvcc_Course_SimEN };
export { clsvcc_Course_SimENEx };
export { clsXzGradeEN };

export { clsvCurrEduCls_SimEN };
export { clscc_CourseEN };
export { clsXzGradeBaseEN };
export { clsXzClgEN, clsXzClg };

export { clscc_CourseTypeEN, clscc_CourseTypeENEx };
export { clsSchoolTermEN };

export { clsKnowledgeMasterLevelEN, clsKnowledgeMasterLevelENEx };
export { clsge_StructureSectionTypeEN };

export { clscc_CourseChapter, clscc_CourseChapterEN };

export { clsKnowledgeMasterTypeEN };
export { clsKnowledgeMasterTypeENEx };
export { clsgs_KnowledgesGraphEN };
export { clsgs_KnowledgesGraphENEx };

export { clsvCurrEduClsStu_SimEN };

export { clscc_CourseChapterENEx };

export { clsvCurrEduClsTeacherEN };

export { clsvCurrEduClsStuEN };

export { clsKnowledgeTypeEN };

export { clsgs_RelaTypeEN };

export { clsKnowledgeTypeENEx };

export { clsvXzMajorDirectionEN };

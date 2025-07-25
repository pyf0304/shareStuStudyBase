import { ComponentMap } from '@/types';

const components = import.meta.glob('./*.vue', { eager: true });
console.log('components:in src/viewsShare/BaseInfo/index', components);
const baseInfoMap: ComponentMap = Object.entries(components).reduce((acc, [path, module]) => {
  // const name = path.replace("./components/", "").replace(".vue", "");
  const name = path.replace('./', '').replace('.vue', '');
  acc[name] = (module as { default: any }).default; // 类型断言
  return acc;
}, {} as ComponentMap);
// 单独导出每个组件
export const ComponentA = baseInfoMap['ComponentA'];
export const ComponentB = baseInfoMap['ComponentB'];
export const TeacherInfoCRUD = baseInfoMap['TeacherInfoCRUD'];

console.log('ComponentA:', ComponentA);
console.log('baseInfoMap:', baseInfoMap);
console.log('TeacherInfoCRUD:', TeacherInfoCRUD);
export { baseInfoMap };
// export { ComponentMap };

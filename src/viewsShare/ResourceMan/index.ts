const components = import.meta.glob('./*.vue', { eager: true });
console.log('components:in src/viewsShare/ResourceMan/index', components);
const resourceManMap = Object.entries(components).reduce((acc, [path, module]) => {
  // const name = path.replace("./components/", "").replace(".vue", "");
  const name = path.replace('./', '').replace('.vue', '');
  acc[name] = (module as { default: any }).default; // 类型断言
  return acc;
}, {} as Record<string, any>);
// 单独导出每个组件
// export const TeacherInfoCRUD = resourceManMap['TeacherInfoCRUD'];

console.log('resourceManMap:', resourceManMap);

export { resourceManMap };

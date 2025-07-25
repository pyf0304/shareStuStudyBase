const components = import.meta.glob('./*.vue', { eager: true });
console.log('components:in src/viewsShare/LearnChart/index', components);
const learnchartMap = Object.entries(components).reduce((acc, [path, module]) => {
  // const name = path.replace("./components/", "").replace(".vue", "");
  const name = path.replace('./', '').replace('.vue', '');
  acc[name] = (module as { default: any }).default; // 类型断言
  return acc;
}, {} as Record<string, any>);
// 单独导出每个组件

// export const TeacherInfoCRUD = learnchartMap['TeacherInfoCRUD'];

console.log('learnchartMap:', learnchartMap);

export { learnchartMap };

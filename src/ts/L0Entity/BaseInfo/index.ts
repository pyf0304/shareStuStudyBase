// // 自动导出 utils 目录下的所有 .ts 文件
// const utils = import.meta.glob('./*.ts', { eager: true });

// export default Object.entries(utils).reduce((acc, [path, module]) => {
//   const name = path.replace('./', '').replace('.ts', '');
//   acc[name] = module;
//   return acc;
// }, {} as Record<string, any>);

import { EntityMap } from '@/types/myComponents';

const entities = import.meta.glob('./*.ts', { eager: true });

const enBaseInfoMap: EntityMap = Object.entries(entities).reduce((acc, [path, module]) => {
  const name = path.replace('./', '').replace('.ts', '');
  acc[name] = module;
  return acc;
}, {} as EntityMap);
console.log('enBaseInfoMap:', enBaseInfoMap);
export default enBaseInfoMap;
export { enBaseInfoMap };

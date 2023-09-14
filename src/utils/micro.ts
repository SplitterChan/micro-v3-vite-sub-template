import SubApps from '~/subApp.config';

// 主应用初始化
export function mainAppInitial({ bus, setupApp }) {
  return new Promise(async (resolve, reject) => {
    try {
      // 子路由监听
      bus.$on('sub-route-change', (name, path) => {
        console.log(name, path);
      });
      SubApps.forEach(({ name, url }) => {
        setupApp({
          name,
          url,
          exec: true
        });
      });
      resolve();
    } catch (e) {
      reject();
    }
  });
}

import { AxiosHandlerType } from '@/utils/request';
import { filterEmptyQuery } from '@/utils/common';
import { reactive, ref, UnwrapNestedRefs } from 'vue';
import { request } from '@/utils/request';
import cloneDeep from 'lodash/cloneDeep';
import keys from 'lodash/keys';
import qs from 'qs';

type TableHookParams = {
  url: string;
  method?: AxiosHandlerType;
  form: UnwrapNestedRefs<any>;
  searchOnCreated?: boolean;
  beforeSearch?: (form: UnwrapNestedRefs<any>) => void;
};

const useTableHook = (params: TableHookParams) => {
  const { url, method, form, searchOnCreated = true, beforeSearch } = params;

  const table = reactive({
    data: [],
    total: 0,
    loading: false,
    page: 1,
    size: 10
  });

  const initailQuery = ref({});

  const paginationConfig = {
    showTotal: true,
    showJumper: true,
    showPageSize: true
  };

  // 初始化数据
  const search = (flag = false) => {
    return new Promise(async (resolve, reject) => {
      table.loading = true;
      beforeSearch && beforeSearch(form);
      if (flag) {
        table.page = 1;
      }
      const query = {
        ...filterEmptyQuery(form),
        page: table.page,
        size: table.size
      };
      try {
        const {
          data: { pageData, totalElement }
        }: any = await request(
          method === AxiosHandlerType.POST
            ? url
            : `${url}?${qs.stringify(query, { arrayFormat: 'repeat' })}`,
          method,
          {
            data: method === AxiosHandlerType.POST ? query : undefined
          }
        );
        table.data = pageData || [];
        table.total = totalElement;
        resolve(table.data);
      } catch (e) {
        reject(e);
      } finally {
        table.loading = false;
      }
    });
  };

  const reset = () => {
    const cloneInititalData = cloneDeep(initailQuery.value);
    keys(cloneInititalData).forEach(key => {
      form[key] = cloneInititalData[key];
    });
    table.page = 1;
    table.size = 10;
    search();
  };

  const changePage = (page: number) => {
    table.page = page;
    search();
  };

  const changeSize = (size: number) => {
    table.page = 1;
    table.size = size;
    search();
  };

  initailQuery.value = cloneDeep(form);

  searchOnCreated && search();

  return {
    table,
    search,
    reset,
    paginationConfig,
    changePage,
    changeSize
  };
};

export default useTableHook;

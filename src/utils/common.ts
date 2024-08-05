import { UnwrapNestedRefs } from 'vue';
import assign from 'lodash/assign';
import keys from 'lodash/keys';
import { ref } from 'vue';
import dayjs from 'dayjs';

export const rangeShortcuts = ref([
  {
    label: '今天',
    value: () => [dayjs().startOf('day'), dayjs().endOf('day')]
  },
  {
    label: '昨天',
    value: () => [
      dayjs().subtract(1, 'day').startOf('day'),
      dayjs().subtract(1, 'day').endOf('day')
    ]
  },
  {
    label: '近7天',
    value: () => [
      dayjs().subtract(7, 'day').startOf('day'),
      dayjs().endOf('day')
    ]
  },
  {
    label: '近30天',
    value: () => [
      dayjs().subtract(1, 'month').startOf('day'),
      dayjs().endOf('day')
    ]
  }
] as any);

// 判读是否是json数据
export function isJsonString(str) {
  try {
    if (typeof JSON.parse(str) == 'object') {
      return true;
    }
  } catch (e) {}
  return false;
}

export function logout() {
  window.$wujie && window.$wujie?.bus.$emit('logout');
}

// 判断是否为复杂类型数据
export function isComplexData(data) {
  return (
    Object.prototype.toString.call(data) === '[object Array]' ||
    Object.prototype.toString.call(data) === '[object Object]'
  );
}

// reactive对象整体赋值
export function reactiveMapKey(
  target: UnwrapNestedRefs<any>,
  copy: UnwrapNestedRefs<any>
) {
  assign(target, copy);
}

export const filterEmptyQuery = (query: Record<string, any>) => {
  return keys(query).reduce(
    (acc, cur) => {
      if (
        query[cur] !== undefined &&
        query[cur] !== null &&
        query[cur] !== ''
      ) {
        acc[cur] = query[cur];
      }
      return acc;
    },
    {} as Record<string, any>
  );
};

export const isExternal = path => {
  return /^(https?:|mailto:|tel:)/.test(path);
};

export const throwLabelByValue = (
  options: Array<any>,
  value: number | string
) => {
  if (!options || !options.length || (!value && value !== 0)) return '';
  const obj = options.find(v => v.value === value);
  return obj && obj.label;
};

export const formatInput = value => {
  console.log(`${value}`, typeof value, 'formatter');
  if (typeof value == 'string' && value.startsWith('0')) {
    return value.slice(1) || '0';
  }
  // if (!value) return 1;
  return value || '0';
};

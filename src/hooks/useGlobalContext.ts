import { name } from '~/package.json';

export default function useGlobalContext() {
  const state = window.$wujie.props;
  const setState = (data: any) => {
    window.$wujie?.bus.$emit('store-inject', name, data);
  };
  return {
    state,
    setState
  };
}

import { router } from '@/main';

export default function useDispatchRouteChange() {
  const dispatch = path => {
    window.$wujie
      ? window.$wujie?.bus.$emit('route-change', path)
      : router.push({ path });
  };
  return { dispatch };
}

import { useRouter } from 'vue-router';
import { stringify } from 'qs';

export default function useDispatchRouteChange() {
  const router = useRouter();

  const dispatch = (...arg) => {
    const [path, query = {}] = arg;
    window.$wujie
      ? window.$wujie?.bus.$emit(
          'route-change',
          query ? `${path}=${stringify(query)}` : path
        )
      : router.push({ path, query });
  };
  return { dispatch };
}

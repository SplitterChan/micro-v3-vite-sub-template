import { AsyncComponentLoader, defineAsyncComponent } from 'vue';
import LoadingError from '@/components/LoadingError/index.vue';
import LoadingSkeleton from '@/components/LoadingSkeleton/index.vue';

const lazyLoadRouteComponent = (component: AsyncComponentLoader) => {
  return defineAsyncComponent({
    loader: component,
    errorComponent: LoadingError,
    loadingComponent: LoadingSkeleton
  });
};

export default lazyLoadRouteComponent;

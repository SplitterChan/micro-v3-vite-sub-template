import { Directive } from 'vue';
import useGlobalContext from '@/hooks/useGlobalContext';
const { state } = useGlobalContext();

const is_dev = import.meta.env.DEV;

console.log(is_dev);

const permission: Directive = {
  mounted: (el, bind) => {
    const permissions = is_dev ? ['ADMIN_USER'] : state.main.permission;
    const { value }: { value: string[] | string } = bind;
    const access =
      permissions.includes('ADMIN_USER') ||
      (typeof value === 'string' && permissions.includes(value)) ||
      (Object.prototype.toString.call(value) === '[object Array]' &&
        Array.prototype.every.call(value, v =>
          permissions.value.find(p => p === v)
        ));
    if (!access) {
      el.parentNode?.removeChild(el);
    }
  }
};

export default permission;

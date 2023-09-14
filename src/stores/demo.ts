import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

interface UserInfo {
  name?: string;
  age?: number;
}

export const useDemoStore = defineStore('demo', () => {
  const name = ref('name');

  let userInfo: UserInfo = reactive({});

  function changeName(value: string) {
    name.value = value;
  }

  function changeUserInfo(action: UserInfo) {
    userInfo = action;
  }

  return {
    name,
    changeName,
    userInfo,
    changeUserInfo
  };
});

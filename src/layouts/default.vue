<script lang="ts" setup>
import { PlusLayout, type PlusSidebarProps } from 'plus-pro-components';
import { menus } from '../router/menu';

import { ElConfigProvider } from 'element-plus'
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import plusZhCn from 'plus-pro-components/es/locale/lang/zh-cn'
import plusEn from 'plus-pro-components/es/locale/lang/en'
import { computed, ref } from 'vue'
import { useDark } from '@vueuse/core';

const zhCnLocales = {
  ...zhCn,
  ...plusZhCn
}
const enLocales = {
  ...en,
  ...plusEn
}

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCnLocales : enLocales))

const toggleLanguage = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
const sidebarProps: PlusSidebarProps = {
  routes: menus,
}
const isDark = useDark()
</script>
<template>
  <el-config-provider :locale="locale">
    <PlusLayout :sidebar-props="sidebarProps">
      <RouterView />
    </PlusLayout>
  </el-config-provider>
</template>
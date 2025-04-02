<script setup lang="ts">

import { PlusPage, PlusSearch, type PageInfo, type PlusColumn, type PlusPageInstance, type RecordType } from 'plus-pro-components';
import { ref, unref, useTemplateRef } from 'vue';

const requestWrapper = async (params: Partial<PageInfo> & RecordType) => {
  console.log(params)
  return {
    data: [],
    total: 0
  }
}

const commonCol: PlusColumn[] = [
  { label: 'param', prop: 'param' },
  { label: 'name', prop: 'name' },
  { label: 'age', prop: 'age' },
  { label: 'address', prop: 'address' },
]

/**
 * search block
 */
const pageRef = useTemplateRef<PlusPageInstance>('pageRef')
const tempSearch = ref({})
function handleSearch(params: Partial<PageInfo> & RecordType) {
  tempSearch.value = params
  unref(pageRef)?.getList()
}
</script>
<template>
  <PlusSearch :columns="[
    { label: 'param', prop: 'param' },
  ]" @search="handleSearch" />

  <PlusPage :columns="commonCol" :is-card="false" :search="false" ref="pageRef" :params="tempSearch"
    :table="{ titleBar: false }" :request="requestWrapper">

  </PlusPage>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus';
import { PlusPage, PlusSearch, type PageInfo, type PlusColumn, type PlusPageInstance, type RecordType } from 'plus-pro-components';
import { ref, unref, useTemplateRef } from 'vue';

const request = async (params: Partial<PageInfo> & RecordType) => {
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
  <PlusPage :columns="commonCol" :search="false" ref="pageRef" :params="tempSearch" :table="{ toolbar: false }"
    :request="request">
    <template #table-title>
      <ElButton>plus</ElButton>
    </template>
    <template #table-toolbar>
      <ElButton>download</ElButton>
    </template>
  </PlusPage>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
function handleSelect(_key: string, _keyPath: string[]) {
  // console.log(key, keyPath)
}
</script>

<template>
  <div class="root">
    <ElMenu
      :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="#fff"
      active-text-color="#fff" background-color="#21242C" @select="handleSelect"
    >
      <ElMenuItem index="1">
        Processing Center
      </ElMenuItem>
      <ElSubMenu index="2">
        <template #title>
          Workspace
        </template>
        <ElMenuItem index="2-1">
          item one
        </ElMenuItem>
        <ElMenuItem index="2-2">
          item two
        </ElMenuItem>
        <ElMenuItem index="2-3">
          item three
        </ElMenuItem>
        <ElSubMenu index="2-4">
          <template #title>
            item four
          </template>
          <ElMenuItem index="2-4-1">
            item one
          </ElMenuItem>
          <ElMenuItem index="2-4-2">
            item two
          </ElMenuItem>
          <ElMenuItem index="2-4-3">
            item three
          </ElMenuItem>
        </ElSubMenu>
      </ElSubMenu>
      <ElMenuItem index="3" disabled>
        Info
      </ElMenuItem>
      <ElMenuItem index="4">
        Orders
      </ElMenuItem>
    </ElMenu>
  </div>
</template>

<style lang="scss" scoped>
.root {
  :deep(.el-menu-demo) {
    position: relative;
    z-index: 1;
    border-bottom: none;
    background: transparent;
  }
}
</style>

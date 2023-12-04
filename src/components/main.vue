<script setup>
import { getIntegrationsData } from '~/service/integrations'

const data = await getIntegrationsData()
</script>

<template>
  <div class="main">
    <el-card class="card">
      <pre>{{ data }}</pre>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
  .main {
    display: flex;
    justify-content: center;
    margin-top: 60px;

    .card {
      width: 80%;
    }
  }
</style>

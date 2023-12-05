<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

import { getIntegrationsData } from '~/service/integrations'
import { changeSearchIntegrations, genClassificationByTag, type IntegrationByTag, searchIntegrations } from '~/utils/integration'

const props = defineProps<{ integration: string }>()

const integrations = await getIntegrationsData()
const data = genClassificationByTag(integrations)
const searchInfo = ref<string>(searchIntegrations)

const integrationList = computed(() => {
  return search(props.integration === 'all' ? Object.values(data).flat() : data[props.integration]!, searchInfo.value)
})

function search(record: IntegrationByTag, searchValue: string) {
  return record.filter(item => item.display.toLowerCase().includes(searchValue.toLowerCase()))
}
</script>

<template>
  <div class="main">
    <el-card class="card">
      <!-- 上面 -->
      <div class="top mb-30px">
        <div class="inputBox">
          <el-input
            v-model="searchInfo" size="large" placeholder="搜索模块" :prefix-icon="Search" class="myInput"
            @input="changeSearchIntegrations"
          />
        </div>
      </div>
      <!-- 下面 -->
      <div class="bottom flex justify-between">
        <!-- 左边导航 -->
        <div class="w-15%">
          <h3 class="text-19px">
            分类
          </h3>
          <el-menu :default-active="props.integration">
            <el-menu-item index="all">
              <template #default>
                <a href="/" class="w-100%">所有</a>
              </template>
            </el-menu-item>
            <el-menu-item v-for="(_v, k) in data" :key="k" :index="k">
              <template #default>
                <a :href="`/integrations/${k}`" class="w-100%">{{ k }}</a>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 右边展示 -->
        <div class="content w-81%">
          <a
            v-for="(v, k) in integrationList"
            :key="k" class="46% 93%) everyIntegration border-hsl(208deg border rounded-5px border-solid h-180px"
          >
            <div class="mb-15% mt-16% flex justify-center">
              <div><img :src="v.imageUrl" class="h-60px w-60px"></div>
            </div>
            <div class="flex flex-col justify-center">
              <div text-20px text-center>
                {{ v.display }}
              </div>
              <div class="text-14.45px text-center color-#ccc">
                {{ v.description }}
              </div>
            </div>
          </a>
        </div>
      </div>
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

    .top {
      .inputBox {
        display: flex;
        justify-content: center;

        :deep(.myInput) {
          width: 500px;

          .el-input__wrapper {
            padding-left: 20px;
            transition: border linear .2s, box-shadow linear .2s;
            border: 1px solid hsl(208deg 46% 93%);
            border-radius: 40px;
            box-shadow: 0 0 7px 2px hsl(0deg 0% 0% / 3%);
            color: hsl(0deg 0% 33%);

            .el-input__prefix {
              color: hsl(170deg 47% 53%);
              font-size: 19px;
            }

            .el-input__inner {
              height: 45px;
              font-size: 19px;
            }
          }

        }
      }
    }

    .content {
      display: grid;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      grid-template-columns: repeat(auto-fill, 18%);

      .everyIntegration:hover {
        transition: all .3s ease;
        border-color: hsl(170deg 47% 33%);
        cursor: pointer;
      }
    }

  }
}
</style>

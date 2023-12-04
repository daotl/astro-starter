// import { acceptHMRUpdate, defineStore } from 'pinia'

// import type { Integration, Integrations } from '~/content/integrations'
// import { getIntegrationsData } from '~/service/integrations'
// import { genClassificationByTag, type IntegrationByTag, type IntegrationByTags } from '~/utils/integration'

// export const useIntegrationsStore = defineStore('integrations', async () => {
//   const data = ref<Integrations>(await getIntegrationsData())

// async function getAllData(): Promise<Ref<Integrations>> {
//   if (!data.value) {
//     data.value = await getIntegrationsData()
//   }

//   return data
// }

//   const getDataFromKey = async (key: string): Promise<Integration> => {
//     const record = await getAllData()

//     return record.value[key]!
//   }

//   const classificationByTag = computed<IntegrationByTags>(() => {
//     console.log(data.value, 'data')

//     return genClassificationByTag(data.value ?? {})
//   })

//   const allTags = computed(() => {
//     return Object.keys(classificationByTag.value)
//   })

//   const getDataByTag = async (tag: string): Promise<IntegrationByTag> => {
//     const d = await getAllData()

//     const record = genClassificationByTag(d.value)

//     if (tag === 'all') {
//       return Object.values(record).flat()
//     }

//     return record[tag]!
//   }

//   return { getAllData, getDataFromKey, allTags, classificationByTag, getDataByTag }
// })

// export const useIntegrationsStore = defineStore('integrations', {
//   state: async () => ({ data: await getIntegrationsData() }),
//   actions: {
//     getAllData: () => {
//       if (!this.data) {
//         // this.data =  getIntegrationsData()
//       }

//       return this.data
//     },
//   },
// })

// if (import.meta.hot) {
//   import.meta.hot.accept(
//     acceptHMRUpdate(useIntegrationsStore, import.meta.hot),
//   )
// }

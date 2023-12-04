import type { Integration, Integrations } from '~/content/integrations'

export type IntegrationByTag = (Integration & { key: string })[]

export type IntegrationByTags = Record<string, IntegrationByTag>

export function genClassificationByTag(data: Integrations) {
  return Object.entries(data).reduce<IntegrationByTags>((pre, [k, v]) => {
    const record = { ...v, key: k }
    for (const t of v.tags) {
      pre[t] = Reflect.has(pre, t) ? [...pre[t]!, record] : [record]
    }
    return pre
  }, {} as IntegrationByTags)
}

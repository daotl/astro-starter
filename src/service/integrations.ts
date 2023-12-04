import { type Integrations, integrations } from '~/content/integrations'

let integrationsData: Integrations

export async function getIntegrationsData(): Promise<Integrations> {
  if (!integrationsData) {
    integrationsData = await Promise.resolve(integrations)
  }

  return integrationsData
}

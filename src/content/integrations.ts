export interface Integration {
  tags: string[]
  imageUrl: string
  description: string
  display: string
}

export type Integrations = Record<string, Integration>

export const integrations: Integrations = {
  gitea: {
    tags: ['version-control'],
    imageUrl: 'https://static.zulipchat.com/static/images/integrations/logos/gitea.png',
    description: '',
    display: 'GITEA',
  },
  github: {
    tags: ['version-control'],
    imageUrl: 'https://static.zulipchat.com/static/images/integrations/logos/github.svg',
    description: '',
    display: 'GITHUB',
  },
  errbot: {
    tags: ['bots'],
    imageUrl: 'https://static.zulipchat.com/static/images/integrations/logos/github.svg',
    description: '',
    display: 'Errbot',
  },
  appfollow: {
    tags: ['bots'],
    imageUrl: 'https://static.zulipchat.com/static/images/integrations/logos/appfollow.svg',
    description: '',
    display: 'AppFollow',
  },
  email: {
    tags: ['communication'],
    imageUrl: 'https://static.zulipchat.com/static/images/integrations/logos/email.svg',
    description: '',
    display: 'Email',
  },
  mastodon: {
    tags: ['communication'],
    imageUrl: 'https://static.zulipchat.com/static/images/integrations/logos/mastodon.svg',
    description: '',
    display: 'Mastodon',
  },
  ansibletower: {
    tags: ['deployment'],
    imageUrl: 'https://static.zulipchat.com/static/images/integrations/logos/ansibletower.svg',
    description: '',
    display: 'Ansible Tower',
  },
}

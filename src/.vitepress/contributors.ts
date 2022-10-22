import contributorNames from './contributor-names.json'

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam {
  avatar: string
  name: string
  title: string
  links?: object
}

const contributorsAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const contributors = (contributorNames as string[]).reduce((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: contributorsAvatars[name] })
  return acc
}, [] as Contributor[])

export const teamMembers: CoreTeam[] = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/737459216175857686/d11d34f434ff0af0acedf6520e78d6c7.png?size=128',
    name: 'Elon',
    title: 'Developer',
    links: [
        { icon: 'github', link: 'https://github.com/Elon10' },
        { icon: 'discord', link: 'https://discord.com/users/737459216175857686' }
    ]
  },
{
    avatar: 'https://cdn.discordapp.com/avatars/710271395438788660/a_8b60a559052841cf282c5096255da356.gif?size=512',
    name: 'OpticalDrop',
    title: 'Director',
    links: [
        { icon: 'discord', link: 'https://discord.com/users/710271395438788660' }
    ]
},
{
  avatar: 'https://cdn.discordapp.com/avatars/705040331695063100/a_5e188e3cf40c22b61318c744f2b243d1.gif?size=2048',
  name: 'Humvee',
  title: 'Deputy Director',
  links: [
      { icon: 'discord', link: 'https://discord.com/users/705040331695063100' }
  ]
},
{
    avatar: 'https://cdn.discordapp.com/embed/avatars/0.png',
    name: 'Hi801',
    title: 'Assistant Director',
    links: [
        { icon: 'discord', link: 'https://discord.com/users/250840062286102530' }
    ]
},
]
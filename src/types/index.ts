import type { IconType } from 'react-icons'

export type Status = 'live' | 'build' | 'idle'

export type Service = {
  id: string
  name: string
  domain?: string
  url?: string
  repo?: string

  api?: string

  shot?: string

  highlights?: string[]
  role: string
  summary: string
  stack: string[]
  status: Status
}

export type JournalEntry = {
  id: string
  from: string
  to?: string
  org: string
  kind: 'Alternance' | 'Stage' | 'Formation' | 'Projet'
  title: string
  detail: string

  missions?: string[]
  stack?: string[]
}

export type StackLayer = {
  id: string
  label: string
  hint: string
  items: string[]
}

export type ContactChannel = {
  label: string
  value: string
  href?: string
  copyable?: boolean
  icon: IconType
}

export type NavItem = {
  id: string
  label: string
  index: string
}

export type Profile = {
  firstName: string
  lastName: string
  role: string
  city: string
  age: number
  timeZone: string
  situation: string
  pitch: string
  cvPath: string
  githubUsername: string
}

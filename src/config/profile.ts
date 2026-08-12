import { LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import type { ContactChannel, Profile } from '@/types'

export const profile: Profile = {
  firstName: 'Axel',
  lastName: 'Roubaud',
  role: 'Développeur full stack',
  city: 'Marseille',
  timeZone: 'Europe/Paris',
  situation: 'Alternance chez Viaxoft · Mastère Esimed',
  age: 21,
  pitch:
    "En alternance chez Viaxoft, en Mastère Expert en architecture et développement logiciel à l'Esimed.",
  bio: [
    "J'ai 21 ans et j'ai obtenu un BUT Informatique à l'IUT d'Aix-en-Provence.",
    "Passionné par l'informatique depuis le collège, j'ai voulu continuer pour créer des applications et des sites web. Je suis aujourd'hui un Mastère Expert en architecture et développement logiciel à l'Esimed, en alternance chez Viaxoft.",
  ],
  cvPath: '/CV_Axel_Roubaud.pdf',
  githubUsername: 'Ayzem-13',
}

export const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: 'roubaudaxel2@gmail.com',
    href: 'mailto:roubaudaxel2@gmail.com',
    copyable: true,
    icon: LuMail,
  },
  {
    label: 'Téléphone',
    value: '—',
    href: undefined,
    copyable: true,
    icon: LuPhone,
  },
  {
    label: 'GitHub',
    value: 'Ayzem-13',
    href: 'https://github.com/Ayzem-13',
    icon: LuGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Axel Roubaud',
    href: 'https://www.linkedin.com/in/axel-roubaud/',
    icon: LuLinkedin,
  },
  {
    label: 'Localisation',
    value: 'Marseille, France',
    icon: LuMapPin,
  },
]

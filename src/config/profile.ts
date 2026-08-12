import { LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { ageOn } from '@/lib/format'
import type { ContactChannel, Profile } from '@/types'

const BIRTH_DATE = '2004-09-27'

export const profile: Profile = {
  firstName: 'Axel',
  lastName: 'Roubaud',
  role: 'Développeur full stack',
  city: 'Marseille',
  timeZone: 'Europe/Paris',
  situation: 'Alternance chez Viaxoft · Mastère Esimed',
  birthDate: BIRTH_DATE,
  pitch:
    "En alternance chez Viaxoft, en Mastère Expert en architecture et développement logiciel à l'Esimed.",
  bio: [
    `J'ai ${ageOn(BIRTH_DATE)} ans et j'ai obtenu mon BUT Informatique à l'IUT d'Aix-en-Provence.`,
    "Passionné par l'informatique depuis le collège, j'ai voulu poursuivre ce cursus pour découvrir de nouvelles technologies et créer des applications et des sites web. Je prépare aujourd'hui un Mastère Expert en architecture et développement logiciel à l'Esimed, en alternance chez Viaxoft.",
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

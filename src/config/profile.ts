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
    "Je construis des applications web de bout en bout : l'interface, l'API, la base de données et la mise en production par intégration continue.",
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
    value: '06 69 61 77 75',
    href: 'tel:+33669617775',
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

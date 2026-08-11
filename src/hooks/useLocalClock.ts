import { useCallback, useEffect, useState } from 'react'

export function useLocalClock(timeZone: string): string {
  const format = useCallback(
    () =>
      new Intl.DateTimeFormat('fr-FR', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date()),
    [timeZone]
  )

  const [time, setTime] = useState(format)

  useEffect(() => {
    setTime(format())
    const id = setInterval(() => setTime(format()), 1000)
    return () => clearInterval(id)
  }, [format])

  return time
}

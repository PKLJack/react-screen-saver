import styles from "@/styles/Clock1.module.scss"
import { getTime } from "@/utils"
import { useEffect, useState } from "react"

type Props = {
  showSeconds: boolean
  showDate: boolean
}

export default function Clock1(props: Props) {
  const [timeString, setTimeString] = useState(getTime)

  useEffect(() => {
    setTimeString(getTime(props.showSeconds, props.showDate))
    // console.log("Initiate Clock1 timer")
    const timerId = window.setInterval(() => {
      setTimeString(getTime(props.showSeconds, props.showDate))
    }, 1000)

    return () => {
      // console.log("Clear Clock1 timer")
      window.clearInterval(timerId)
    }
  }, [props.showSeconds, props.showDate])

  return <main className={styles.main}>{timeString}</main>
}

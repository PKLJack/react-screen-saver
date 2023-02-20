import Clock1 from "@/components/Clock1"
import Footer from "@/components/Footer"
import styles from "@/styles/Home.module.scss"
import Head from "next/head"
import { useState } from "react"

export default function Home() {
  const [isHudHidden, setIsHudHidden] = useState(false)
  const [currAppId, setCurrAppId] = useState(0)

  const [showSeconds, setShowSeconds] = useState(false)
  const [showDate, setShowDate] = useState(false)

  // console.log("RENDER Home")

  return (
    <>
      <Head>
        <title>Screen Saver</title>
        <meta name="description" content="A simple clock screen saver." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={styles.hud}
        style={{ visibility: isHudHidden ? "hidden" : "visible" }}
      >
        <div className={styles.top}>
          <ul className={styles.tabs}>
            {/* {fakeData.map((obj, idx) => (
              <li key={idx} onClick={() => setCurrAppId(idx)}>
                {obj.name}
              </li>
            ))} */}
          </ul>
          {/* bi-dash-square-dotted / bi-dash-square / bi-dash-square-fill */}
          <i
            className={`bi bi-dash-square-dotted ${styles.close_btn}`}
            onClick={() => setIsHudHidden(true)}
          />
        </div>

        <div className={styles.config}>
          <h2 className={styles.heading}>Config</h2>
          <div className={styles.row}>
            <input
              id="checkbox-show-seconds"
              type="checkbox"
              checked={showSeconds}
              onChange={() => setShowSeconds((prevState) => !prevState)}
            />
            <label htmlFor="checkbox-show-seconds">Show Seconds</label>
          </div>
          <div className={styles.row}>
            <input
              id="checkbox-show-date"
              type="checkbox"
              checked={showDate}
              onChange={() => setShowDate((prevState) => !prevState)}
            />
            <label htmlFor="checkbox-show-date">Show Date</label>
          </div>
        </div>
      </div>
      <div onClick={() => setIsHudHidden(false)}>
        {/* {currApp} */}
        {currAppId === 0 && (
          <Clock1 showSeconds={showSeconds} showDate={showDate} />
        )}
        {/* {currAppId === 1 && <Clock2 />} */}
        {/* {currAppId === 2 && <Clock1 />} */}
      </div>
      <Footer />
    </>
  )
}

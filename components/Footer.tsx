import styles from "../styles/Footer.module.scss"
import React from "react"

export default function Footer() {
  const githubUrl = "https://github.com/PKLJack"
  const sourceUrl = "https://github.com/PKLJack/react-screen-saver"

  const reactUrl = "https://reactjs.org/"
  const nextjsUrl = "https://nextjs.org/"

  return (
    <footer className={styles.footer}>
      <div>
        Made by
        <a href={githubUrl}>
          {/* <i className="bi bi-github"></i> */}
          <i className={`bi bi-github ${styles.bi} ${styles["bi-github"]}`}></i>
          PKLJack
        </a>
      </div>
      <div>
        <a href={sourceUrl}>view source</a>
      </div>
      <div>
        Build with{" "}
        <span className={styles.buildwith}>
          <a href={reactUrl}>React</a>
          <a href={nextjsUrl}>(Next.js)</a>
        </span>
      </div>
    </footer>
  )
}

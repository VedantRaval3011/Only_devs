import Link from "next/link"
import styles from "./authLink.module.css"

const AuthLinks = () => {
  const status = "notauthenticated"
  return (
    <>
      {status === 'notauthenticated' ? (<Link href='/login'>Login</Link>) :(
        <>
        <Link href='/write'>Write</Link>
        <span className={styles.link}>Logout</span>
        </>
      ) }
    </>
  )
}

export default AuthLinks
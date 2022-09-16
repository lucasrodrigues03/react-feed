import styles from "./Header.module.css"
// quando tem o module.css , é preciso dar um nome (variável) pra funcionar,
//nesse caso 'styles'
import igniteLogo from "../assets/Ignite-logo.svg"
export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo"/>
      <strong></strong>
    </header>
  )
}
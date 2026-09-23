import "./header.scss";
import '../styles/styles.scss'
interface HeaderProps {
  logo: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className="header">
      <img className="header__logo" src={props.logo} alt="Escobar logo" />
      <div className="header__location">location should put there</div>
    </header>
  );
}

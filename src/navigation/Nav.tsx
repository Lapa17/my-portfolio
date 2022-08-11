import style from './Nav.module.css'

export function Nav() {
    return (
      <nav className={style.nav}>
        <a href=''>Home</a>
        <a href=''>Skills</a>
        <a href=''>Projects</a>
        <a href=''>Contacts</a>   
      </nav>
    );
  }
  
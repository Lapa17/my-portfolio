import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import { Social } from './social/Social';


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Social media</h2>
                <div className={style.footer}>
                    <Social />
                    <Social />
                    <Social />
                    <Social />
                </div>
            </div>
        </div>
    );
}
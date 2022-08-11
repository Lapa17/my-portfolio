import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.intro}>
                    <span>Hi there</span>
                    <h1>I'm Pavel Laparevich</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
}
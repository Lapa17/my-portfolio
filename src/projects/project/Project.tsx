import style from './Project.module.css'


export const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.image}> </div>
            <h3 className={style.title}>Title</h3>
            <p className={style.descr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in obcaecati earum quae incidunt</p>
        </div>
    );
}
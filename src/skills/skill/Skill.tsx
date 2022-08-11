import style from './Skill.module.css'


export const Skill = () => {
    return (
        <div className={style.skill}>
            <div className={style.icon}> </div>
            <h3 className={style.title}>Title</h3>
            <p className={style.descr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in obcaecati earum quae incidunt</p>
        </div>
    );
}
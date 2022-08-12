import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill';


export const Skills = () => {

    const skillCount = [1,2,3,4,5,6]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    {skillCount.map(skill => <Skill />)}
                </div>
            </div>
        </div>
    );
}
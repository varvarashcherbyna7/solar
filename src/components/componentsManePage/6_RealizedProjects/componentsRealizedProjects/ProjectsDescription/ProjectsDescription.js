import React from "react";
import "./ProjectsDescription.sass";

const ProjectsDescription = () => {
    return (
                <div className="projectsDescription">
                    <div className="projectsDescription__header">
                        Проекти, які ми <br/>
                        реалізували <br/><span className="projectsDescription__header-yellowText">
                            за 2020 рік
                        </span>
                    </div>
                    <div className="projectsDescription__text">
                        <p className="projectsDescription__text-block">
                            <span className="projectsDescription__text-black">
                                Сонячні електростанції</span> - це реальна
                            можливість отримати доступ
                            до невичерпного джерела енергії.
                        </p>
                        <p className="projectsDescription__text-block">
                            Щорічно Земля поглинає близько 1 мільярда терават-годин сонячної енергії і
                            стільки ж відображає назад в космос. Річне виробництво електроенергії в світі
                            складає всього 2 сотих від цього числа, а шкоди приносить незрівнянно більше.
                            Традиційні методи отримання електроенергії трудомісткі, дорогі і небезпечні для
                            довкілля.
                        </p>
                        <p className="projectsDescription__text-block">
                            Використовуйте перспективи території
                            України в сонячній енергетиці на користь
                            свого бізнесу. Кожне підприємство має потребу в стабільному
                            енергопостачанні для
                            коректної роботи. При цьому електрику йдуть величезні бюджети,
                            які окупаються лише
                            за рахунок підвищення собівартості виробленого товару. <span className="projectsDescription__text-black">
                            Сонячна електростанція
                            дозволяє підвищити рентабельність бізнесу</span>
                            і домогтися повної енергетичної
                            самостійності підприємства.
                        </p>
                    </div>
                </div>
    )
}
export default ProjectsDescription;
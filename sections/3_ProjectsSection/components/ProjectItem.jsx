/* eslint-disable @next/next/no-img-element */
import { colors } from '@/app/theme'
import Image from 'next/image'

export const ProjectItem = ( { project, lang } ) => {


  return (
    <>
    { project.active &&
        <div className={`project-item ${project.size == "s"? "small":"large"}`}>

        <a className="project-image" href={ project.url } target="_blank" rel="noopener noreferrer">
        <div className="project-image-div">
            <Image src={`/assets/projects-section/projects/${project.image1}.jpg`} alt="" width={300} height={150}/>
            <Image src={`/assets/projects-section/projects/${project.image2}.jpg`} alt="" width={300} height={150}/>
        </div>
        </a>

        <div className="project-info">

            <div className="project-info1">

                <div className="project-name">
                    {project.name }
                </div>

                <div className="project-devices">
                  {project.mobile == true? 
                      <box-icon name='mobile' 
                                color={ colors.blue }
                                size={ project.size == "s"? "sm":"md"}

                      ></box-icon> : null}
                  {project.pc == true? 
                      <box-icon name='laptop' 
                                color={ colors.blue }
                                size={ project.size == "s"? "sm":"md"}
                      ></box-icon>
                      : null}
                </div>
            </div>
              
            <div className="project-info2">
                <div className="project-description">
                    { lang === 'es'? project.descriptionEs : project.descriptionEn }
                </div>

                <div className="project-tech">
                    {
                        project.technologies.map(tech =>(
                            <Image key={tech}src={`/assets/projects-section/technologies/${tech}.png`} alt="" width={48} height={48}/>
                        ))
                    }

                </div>

                <div className="project-bottom">
                
                    <a href={ project.github_url } target="_blank">
                        <div className="project-button">
                            <i className='button-icon bx bxl-github'></i>
                            { lang === 'es'? 'REPOSITORIO' : 'REPOSITORY' }
                        </div>
                    </a>
                    <a href={ project.url } target="_blank">
                        <div className="project-button">
                            <i className='button-icon bx bx-fullscreen'></i>
                            { lang === 'es'? 'DESPLEGAR' : 'DEPLOY' }
                        </div>
                    </a>

                </div>

            </div>
          </div>

        </div>
    }

    <style jsx>{`

        .project-item{
            box-shadow: 10px 10px ${ colors.yellow };
        }

        .project-image img{
            width: 50%;
        }

        .project-item.large{
            width: fit-content;
            background-color: ${ colors.orange };
            color: ${ colors.orange };
        }

        .project-item.small{
            width: 200px;
        }

        .project-image{
            width: 100%;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .project-image-div{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2,auto);
            justify-content: center;
            align-items: center;
            background-color: ${ colors.black };
            gap: 2px;
            overflow: hidden;

        }

        .project-screenshot{
            width: 100%;
            z-index: 500;
        }

        .project-image > img{
            width: 50%;
            object-fit: cover;
        }


        .project-name{
            color: ${ colors.blue };
            font-weight: 700;
        }

        .project-info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: space-between;
            padding: 10px;
            padding-bottom: 20px;
            gap: 20px;
        }

        .project-info1{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
        }
        .project-info2{
            height: calc(100% - 41px);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
        }

        .project-item.large .project-name{
            font-size: 25px;

        }

        .project-item.small .project-name{
            font-size: 22px;

        }

        .project-bottom{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            width: 100%;
            gap: 10px;
            flex-wrap: wrap;
        }
        .project-description{
            color: ${ colors.yellow };
            font-weight: 400;
            width: calc(100% - 50px);
        }

        .project-description{
            font-size: 18px;

        }

        .section-title{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            
        }

        .section-title a{
            text-decoration: none;
        }
            
        .transUp{
            transition: .5s, color .10s;
            -webkit-transition: .5s, color .10s;
            -moz-transition: .5s, color .10s;
        }
        .transUp:hover{
            transform: translatey(-20px);
            -webkit-transform: translatey(-20px);
            -moz-transform: translatey(-20px);
        }

        .project-button:hover{
            background-color: ${ colors.blue };

        }
        a{
            text-decoration: none;
        }
        .project-bottom > a > div {
            color: ${ colors.blue };
            background-color: ${ colors.yellow };
            width: fit-content;
            text-align: center;
            padding: 15px;
            font-weight: 800;
            transition: .2s;
        }
        .project-bottom > a > div:hover {
            background-color: ${ colors.blue };
            color: ${ colors.yellow};
        }
        .project-bottom > a > div:hover .github-icon {
            color: ${ colors.yellow};
        }
        .project-button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

        }
        .button-icon{
            font-size: 25px;
        }
        .project-tech-icon{
            color: ${ colors.blue };
            font-size: 20px;
        }
        .project-tech{
            display: flex;
            gap: 10px;
        }
        .project-tech > img{
            width: 50px;
        }

        @media (max-width: 900px) {
        .project-description{
            min-height: 0px;

        }
        .project-item{
            display: ${ project.responsive? 'inline':'none'}
        }

      }
    `}</style>

    </>
  )
}

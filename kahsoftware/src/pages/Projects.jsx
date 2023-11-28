import {Helmet} from "react-helmet-async";
import ProjectsComp from '../components/ProjectsComp/ProjectsComp'


const Projects = () => {
  return (
    <>
     <Helmet>
        <title> Projeler | KAH YAZILIM </title>
        <meta name="description" content="Edirne, Tekirdağ, Kırklareli, Çorlu'daki işletmeler için özel dijital hizmetler sunuyoruz. İşletmenizi en iyi şekilde temsil etmek için buradayız."/>
        <link rel='canonical' href='/projeler' />
      </Helmet>
        <ProjectsComp />
    </>
  )
}

export default Projects
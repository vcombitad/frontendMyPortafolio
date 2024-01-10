import Layout from "../../components/Layout"
import './Skills.css'

function Skills() {

    return (
      <>
        <Layout>
          Skills
        </Layout>
        <div className="skills-container">
          <div className="skills-container-text"><h3>Frontend</h3> <p>Html5, Css3, BootsTrap, Tailwind, JavaScript, React</p></div>
          <div className="skills-container-text"><h3>Backend</h3> <p>Node, Express, SQL: Postgres, NoSQL:MongoDB</p></div>
          <div className="skills-container-text"><h3>Design</h3> <p>CorelDraw, PhotoShop, Figma</p></div>
        </div>
      </>
    )
  }
  
  export default Skills
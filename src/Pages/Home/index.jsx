
import Layout from "../../components/Layout"
import './Home.css'


function Home() {
      return (
      <>
        <Layout>
          Home </Layout>
        <div className="home-contain">
          <div className="home-contain-text">
            <p>Hello,</p>
            <p>I am Esteban Cómbita</p>
            <p>Web Developer</p>
          </div>

          <div className="home-image"></div>
        </div>
      </>
    )
  }
  
  export default Home
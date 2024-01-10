import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import './Mywork.css'

function MyWork() {
const [items, setItems] = useState (null)

useEffect (()=> {
  fetch('https://backendmiportafolio-production.up.railway.app/api/projects')
  .then(response=>response.json())
  .then(data=>setItems(data))
}, [])
    return (
      <>
        <Layout>
          My Work 
          <div className='mywork-contain'>
            
            {
            items?.map((project)=>{
              return <Card 
              key={project._id}
              data={project}
              
              />
            })
          }
            
          
          </div>
          
        </Layout>
       
      </>
    )
  }
  
  export default MyWork
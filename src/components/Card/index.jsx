import './Card.css'

const Card =(data)=>{
    return (
        <div className="card-contain">
            
            <figure>
            <img src={data.data.img} className="imagen" alt="..."/>
            </figure>

            <div className="card-contain--text">
                <h5 className="">{data.data.name}</h5>
                <p className="">{data.data.description}</p>
                <a href={data.data.url} className="btn btn-primary">Go to project</a>
            </div>
        </div>
    )
}

export default Card
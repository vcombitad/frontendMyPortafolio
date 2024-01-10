import './Social.css'

function Social () {
    return (
    <>
    <h5 className='title-social'>Social</h5>
    <div className='social-contain'>
        <a href="https://github.com/vcombitad">
            <div className='social-contain--div'>
                <div className='social-img--github'></div>
                <p>GIthub</p>
            </div>
        </a>
        
        <a href="https://www.linkedin.com/in/victorestebancombitadaza/">
            <div className='social-contain--div'>
            <div className='social-img--linkedin'></div>
                <p>Linkedin</p>
            </div>
        </a>
       
       <a href="https://www.facebook.com/victor.e.combita/">
        <div className='social-contain--div'>
                <div className='social-img--facebook'></div>
                <p>Facebook</p>
            </div>
       </a>
        
    </div>
    </>
    )
}

export default Social
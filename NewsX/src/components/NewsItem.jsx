import image from '../assets/news.jpg'

function NewsItem({tittle, description, src, url}) {
    return (
        <>
            <div className="card   justify-content-center bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-4 pt-4" style={{maxWidth:"345px"}}>
                <img src={src?src:image} className="card-img-top align-items-center" style={{height: "300px", width:"300px"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tittle} </h5>
                    <p className="card-text">{description?description:"this is news about that has just happen in recently few day or months."}</p>
                    <a href={url} className="btn btn-primary">More Info</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem
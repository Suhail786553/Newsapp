import React from 'react';

// export class NewsItem extends Component {
  const NewsItem=(props)=>{
  
    let{title,description,imageUrl,newsurl,author,date,source}=props;//when we change class based component into function based component then this.props change into only props
    return (
      <div>
    <div className="cont"><span class="badge rounded-pill bg-danger">{source}</span>
    </div>
      <div className="card">
  <img src={imageUrl} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} 
    </h5>
    
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author ?"unknown":author} on {new Date(date).toGMTString()}</small></p>
   <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
   </div>
  </div>
      </div>
    );
  }


export default NewsItem;

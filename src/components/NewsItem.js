import React, { Component } from 'react'
//class Model

// export class NewsItem extends Component {
//     render() {
//        let {title , description ,imageurl , newsurl , author ,date , source} = this.props;
//         return (
//             <div className="my-3">
//                 <div className="card">
//                 <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'10%',  zIndex: '1' , fontSize:'0.8rem'}}>
//     {source}
//   </span>
//   <img src={imageurl?imageurl:"https://cdn.wallpapersafari.com/24/34/oKb8aR.jpg"} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}...
//     </h5>
//     <p className="card-text">{description}...</p>
//     <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
//     <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
//   </div>
// </div>
//             </div>
//         )
//     }
// }

const NewsItem = (props) => {
     let {title , description ,imageurl , newsurl , author ,date , source} = props;
      return (
          <div className="my-3">
              <div className="card">
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'10%',  zIndex: '1' , fontSize:'0.8rem'}}>
  {source}
</span>
<img src={imageurl?imageurl:"https://cdn.wallpapersafari.com/24/34/oKb8aR.jpg"} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{title}...
  </h5>
  <p className="card-text">{description}...</p>
  <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
  <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
</div>
</div>
          </div>
      )
}

export default NewsItem
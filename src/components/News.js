import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

//Class based Model
// export class News extends Component {

//     static defaultProps = {
//       country: 'in' ,
//       pagesize: '10' ,
//       category: 'general',
//       source: 'NAN',
//       totalResults:'0',
//       apikey: '00ef52a0b0c447899665dbe9c37deb3b'
//     }
//     static propTypes = {
//       country: PropTypes.string ,
//       pagesize: PropTypes.number ,
//       category: PropTypes.string ,
//       source: PropTypes.string
//     }
//     capitalizeFirstLetter = (string) => {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//     }
    
//     constructor(props){
//         super(props)
//         console.log("hello");
//         this.state={
//            articles :[] ,
//            loading : true ,
//            page : 1 
//         }
//         document.title = `${this.capitalizeFirstLetter(props.category)}- Newsdaily`;
//     }
//     async updtnws(){
//       props.setProgress(0);
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pagesize}`;
//       // this.setState({loading: true});
//       let data = await fetch(url);
//       let parsedata = await data.json();
//       // props.setProgress(100);
//       console.log(parsedata);
//       this.setState({
//         articles : parsedata.articles , 
//         totalresults : parsedata.totalResults ,
//         // loading : false,
//         totalResults: parsedata.totalResults
//       });
//       props.setProgress(100);
//     }
//     async componentDidMount(){
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}=1&pageSize=${props.pagesize}`;
//         // this.setState({loading: true});
//         // let data = await fetch(url);
//         // let parsedata = await data.json();
//         // console.log(parsedata);
//         // this.setState({
//         //   articles : parsedata.articles , 
//         //   totalresults : parsedata.totalResults ,
//         //   loading : false
//         // });
//         this.updtnws();
//     }
//     fetchMoreData = async () => {
//       props.setProgress(0);
//      this.setState({page: this.state.page + 1});
//      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.pagesize}`;
//      this.setState({loading: true});
//      let data = await fetch(url);
//      props.setProgress(40);
//      let parsedata = await data.json();
//      props.setProgress(70);
//      console.log(parsedata);
//      this.setState({
//       //  page: this.state.page + 1 ,
//        articles : this.state.articles.concat(parsedata.articles) , 
//        totalresults : parsedata.totalResults ,
//        loading : false,
//        totalResults: parsedata.totalResults
//      });
//      props.setProgress(100);
//     };
  
//     prevclicked = async () => {
//       // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}=${this.state.page - 1}&pageSize=${props.pagesize}`;
//       // let data = await fetch(url);
//       // let parsedata = await data.json();
//       // this.setState({
//       //   page : this.state.page -1 ,
//       //   articles : parsedata.articles
//       // })
//       this.setState({page: this.state.page - 1});
//       this.updtnws();
//     }
//     nextclicked = async () => {
//       if(!(this.state.page + 1 > Math.ceil(this.state.totalresults/props.pagesize))){
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}=${this.state.page + 1}&pageSize=${props.pagesize}`;
//       this.setState({loading:true});    
//       let data = await fetch(url);
//       props.setProgress(30);
//       let parsedata = await data.json();
//       props.setProgress(70);
//       this.setState({
//         page : this.state.page + 1 ,
//         articles : parsedata.articles ,
//         loading : false
//       })
//     }
//       // this.setState({page: this.state.page + 1});
//       // this.updtnws();
//     }
//     render() {
//         return (
//             <div className="container my-3">
//                 <h1 className='text-center' style={{margin: '35px 0px'}}>News Daily - Top Headlines - {this.capitalizeFirstLetter(props.category)}</h1>
//                 {/* {this.state.loading && <Spiner/>} */}
//                 <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spiner/>}>
//                 <div className="row">
//                 {/* {!this.state.loading && this.state.articles.map((element)=> */}
                
//                 {this.state.articles.map((element)=>
//                     <div className="col-md-4" key={element.url}>
//               <NewsItem  title={element.title} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//               </div>
//               )}
//             </div>
//             </InfiniteScroll>
            
//             {/* <div className="d-flex justify-content-between">
//             <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevclicked}>&larr; prev</button>
//               <button disabled={this.state.page + 1 > Math.ceil(this.state.totalresults/props.pagesize)} type="button" className="btn btn-dark" onClick={this.nextclicked}>next &rarr;</button>
//                 </div>*/}
//           </div>
//         );
//     }
// }
// Function Based

const News = (props) => {
  const [articles , setArticals] = useState([])
  const [loading , setLoading] = useState(false)
  const [page , setPage] = useState(1)
  const [totalResults , setTotalResults] = useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  document.title = capitalizeFirstLetter(props.category) + " - News Daily";
 
  
  
  const updtnws= async() => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pagesize}`;
    // setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    // props.setProgress(100);
    console.log(parsedata);
    setArticals(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
   updtnws();
  }, []);
  
  const fetchMoreData = async () => {
    props.setProgress(0);
    
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
   setPage(page+1)
   let data = await fetch(url);
   props.setProgress(40);
   let parsedata = await data.json();
   props.setProgress(70);
   console.log(parsedata);
   setArticals(articles.concat(parsedata.articles));
   setTotalResults(parsedata.totalResult);
   setLoading(false);
    //  totalResults: parsedata.totalResults
  
   props.setProgress(100);
  };
      return (
          <div className="container my-3">
              <h1 className='text-center' style={{margin: '35px 0px' , marginTop: '90px'}}>News Daily - Top Headlines - {capitalizeFirstLetter(props.category)}</h1>
              {/* {loading && <Spiner/>} */}
              <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner/>}>
              <div className="row">
              {/* {!loading && articles.map((element)=> */}
              
              {articles.map((element)=>
                  <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            )}
          </div>
          </InfiniteScroll>
        </div>
      );
              }

News.defaultProps = {
  country: 'in' ,
  pagesize: '10' ,
  category: 'general',
  source: 'NAN',
  totalResults:'0',
  apikey: ''
}
News.propTypes = {
  country: PropTypes.string ,
  pagesize: PropTypes.number ,
  category: PropTypes.string ,
  source: PropTypes.string
}

export default News;

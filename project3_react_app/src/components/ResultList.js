import React from "react";
import "./style.css";


function ResultList(props) {
  return (
    // <ul className="list-group">
    //   {props.results.map(result => (
    //     <li className="list-group-item" key={result.id}>
    //       <p>{result.title}: <a href={result.url}>Link</a></p>
    //       <img alt={result.title} className="img-fluid" src={result.images.fixed_width.url} />
    //     </li>
    //   ))}
    // </ul>
    
    <div className="center">
    {props.results.map(result => (
      <div className="card">
      <div className="img-container fill" >
      {/* <img alt={result.title} className="img-fluid" src={result.images.fixed_height.url} /> */}
      {/* <img alt={result.title} src={result.images.original.url} /> */}
      <img className="fill" alt="any" src={result.volumeInfo.imageLinks.thumbnail} />


      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {result.volumeInfo.title}
          </li>
          <li>
            <strong>Preview:</strong> <a href={result.volumeInfo.previewLink}>Link</a>
          </li>
          <li>
            <strong>Authors:</strong> {result.volumeInfo.authors}
          </li>
          <li>
            <strong>Avg Ratings:</strong> {result.volumeInfo.averageRating}
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
    ))}
  </div>

  );
}

export default ResultList;

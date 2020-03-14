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
    
    <div>
    {props.results.map(result => (
      <div className="card">
      <div className="img-container">
      <img alt={result.title} className="img-fluid" src={result.images.fixed_height.url} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {result.title}
          </li>
          <li>
            <strong>URL:</strong> <a href={result.url}>Link</a>
          </li>
          <li>
            <strong>Rating:</strong> {result.rating}
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

import React from 'react'
function NavBar() {
  return (
<>
<ul className="nav fali sticky-top bg-dark d-flex justify-content-between text-light">
  {/* <div className="div"><span class="badge bg-secondary float-right mx-3 my-3">New</span></div>
  <div className="li d-flex">
    
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
  </div> */}
      <h1>  <span class="badge bg-secondary float-right mx-3 my-3">NewsX</span></h1>
      
      <a class="btn  border border-danger btn-dark float-right mx-2 my-4" href="https://github.com/akhileshverma92/NewsX" role="button">GITHUB❤️</a>
</ul>
</> 
 )
}

export default NavBar

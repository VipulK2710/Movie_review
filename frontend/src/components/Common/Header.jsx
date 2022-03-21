import React from 'react'

function Header() {
  return (
    <div>
        <header>
        <div className="Navbar">
            <div className="header">
                <div className="logo">
                  <img src="img/logo.png" alt="" height="30px" width="70px" />
                </div>
                <div className="nav1">
                  <div className="search-bar">
                    <input type="text" />
                    <div className="search-img">
                      <img
                        src="img/search.png"
                        style="width: 20px; height: 20px"
                        alt=""
                      />
                    </div>
                  </div>
                  <select className="Category">
                    <option value="Category">Category</option>
                    <option value="New-Movies">New Movies</option>
                    <option value="Comming-Soon">Comming Soon</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Favorites">Favorites</option>
                  </select>
                  <div className="favorites">
                    <img src="img/fav1.png" style="height: 18px" />
                  </div>
                </div>
            </div>
            <div className="poster-img">
                <img src="img/no-time-to-die-poster.png" alt="" style="width: 100%;"/>
            </div>
        </div>
    </header>
    </div>
    )
}

export default Header
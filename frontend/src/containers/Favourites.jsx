import React from 'react'

function Favourites() {
  return (
    <div>
        <div className="content">
        <h1>
            Favorites
        </h1>
        <div className="Movies">
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/shang-chi.png" alt=""/>
                    <img className="like-icon" src="img/red-heart-icon.svg" alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Shang-Chi And The Legend of Ten Rings</p>
                    <div className="ratings-trailer">
                        <img className="star" src="img/star.png" alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=8YjFbMbfXaQ" target="_blank" type="image"> <img src="img/trailer-button.png" alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/FreeGuy.png" alt=""/>
                    <img className="like-icon" src="img/heart-icon.svg" alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Free Guy</p>
                    <div className="ratings-trailer">
                        <img className="star" src="img/star.png" alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=X2m-08cOAbc" target="_blank" type="image"> <img src="img/trailer-button.png" alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/cruella.png" alt=""/>
                    <img className="like-icon" src="img/heart-icon.svg" alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Cruella</p>
                    <div className="ratings-trailer">
                        <img className="star" src="img/star.png" alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=gmRKv7n2If8" target="_blank" type="image"> <img src="img/trailer-button.png" alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/father.png" alt=""/>
                    <img className="like-icon" src="img/red-heart-icon.svg" alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Father</p>
                    <div className="ratings-trailer">
                        <img className="star" src="img/star.png" alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=OFnoRaLAclg" target="_blank" type="image"> <img src="img/trailer-button.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Favourites
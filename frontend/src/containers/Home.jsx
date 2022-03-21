import React from 'react' 
import shang from '../assets/img/shang-chi.png'
import redheart from '../assets/img/red-heart-icon.svg'
import star from '../assets/img/star.png'
import trailer from '../assets/img/trailer-button.png'
import FreeGuy from '../assets/img/FreeGuy.png'
import cruella from '../assets/img/cruella.png'
import father from '../assets/img/father.png'

function Home() {
  return (
    <div>
      <div className="content">
        <h1>
            Newly Released
        </h1>
        <div className="Movies">
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src={shang} alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Shang-Chi And The Legend of Ten Rings</p>
                    <div className="ratings-trailer">
                        <img className="star" src={star} alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=8YjFbMbfXaQ" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src={FreeGuy} alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Free Guy</p>
                    <div className="ratings-trailer">
                        <img className="star" src={star} alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=X2m-08cOAbc" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src={cruella} alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Cruella</p>
                    <div className="ratings-trailer">
                        <img className="star" src={star} alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=gmRKv7n2If8" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src={father} alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Father</p>
                    <div className="ratings-trailer">
                        <img className="star" src={star} alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=OFnoRaLAclg" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="Movies">
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/Raya.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Raya and Last Dragon</p>
                    <div className="ratings-trailer">
                        <img className="star" src={star} alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=9BPMTr-NS9s" target="_blank" type="image"> <img src={trailer} alt="" /></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/Namadland.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Nomadland</p>
                    <div className="ratings-trailer">
                        <img className="star" src={star} alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=6sxCFZ8_d84" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/minari.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Minari</p>
                    <div className="ratings-trailer">
                        <img className="star" src={star} alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=KQ0gFidlro8" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/judas.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Judads and the black messiah</p>
                    <div className="ratings-trailer">
                        <img className="star" src={star} alt="" />
                        <div className="ratings">4.5/5</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=sSjtGqRXQ9Y" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="content">
        <h1>
            Newly Released
        </h1>
        <div className="Movies">
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/no-die.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>No time to die</p>
                    <div className="ratings-trailer">
                        <div className="date">October 1st</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=9EaBdOkMT_Q" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>
            
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/Venom.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Venom</p>
                    <div className="ratings-trailer">
                        <div className="date">October 1st</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=u9Mv98Gr5pY" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>
            
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/Titane.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Titnae</p>
                    <div className="ratings-trailer">
                        <div className="date">October 1st</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=rzq-_f1fW_s" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>
            
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/addoms.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>The Addams Family 2</p>
                    <div className="ratings-trailer">
                        <div className="date">October 1st</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=Kd82bSBDE84" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="Movies">
            <div className="Movies-info">
                <div className="Movies-poster">
                    <img className="Movies-img" src="img/mass.png" alt=""/>
                    <img className="like-icon" src={redheart} alt=""/>
                </div>
                <div className="Movies-details">
                    <p>Mass</p>
                    <div className="ratings-trailer">
                        <div className="date">October 1st</div>
                        <a className="trailer-button" href="https://www.youtube.com/watch?v=oU56Ns1nXsE" target="_blank" type="image"> <img src={trailer} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    </div>
  )
}

export default Home
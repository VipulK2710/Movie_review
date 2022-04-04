import React from 'react'
import Header from './Header'
import button from '../../assets/img/button.png'

function Cover() {
  return (
    <div class="main-cover">
        <Header/>
        <section class="cover">
            <div class="cover-info">
                <a href="https://www.youtube.com/watch?v=vw2FOYjCz38" target='_blank' ><img src={button} alt="" /></a>
                <pre>
                    October 1st
                    In Cinemas
                </pre>
                <br />
                <br />
                <div class="description">
                    James Bond has left active service. His peace is short-lived when Felix Leiter,
                    an oldfriend from the CIA, turns up asking for help, leading Bond ontobr
                    the trail of a mysterious villain armed with dangerous new technology.
                </div>
            </div>      
        </section>
    </div>
  )
}

export default Cover
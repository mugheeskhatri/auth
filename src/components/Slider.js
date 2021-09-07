import React from 'react'

function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://k.nooncdn.com/mon/1623874312404-ckpzwu6l004cyxqqtjj0dkmre.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://k.nooncdn.com/cms/pages/20210618/8daeb8fe378bd22d05a5547c16df1274/en_slider-01-1DAY.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://k.nooncdn.com/cms/pages/20210902/f5d66deed375040dcb24936ef981b037/en_banner-01.gif" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Slider

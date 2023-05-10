

export default function Caurosel() {
  return (
    <div>
      

     
    <div className="carousel-inner">
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
        <div className="carousel-item">
            <img src="http://tarkiolinks.weebly.com/uploads/1/0/7/5/10753929/og-image_orig.png"/>
        </div>
        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
        <div className="carousel-item">
            <img src="https://static.vecteezy.com/system/resources/previews/000/523/378/original/web-development-application-design-coding-and-programming-on-laptop-and-smartphone-concept-with-programming-language-and-program-code-and-layout-on-screen-vector.jpg"/>
        </div>
        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
        <div className="carousel-item">
            <img src="https://static.vecteezy.com/system/resources/previews/000/523/336/original/software-development-and-web-development-isometric-concept-programming-language-coding-vector.jpg"/>
        </div>
        <label for="carousel-3" className="carousel-control prev control-1">‹</label>
        <label for="carousel-2" className="carousel-control next control-1">›</label>
        <label for="carousel-1" className="carousel-control prev control-2">‹</label>
        <label for="carousel-3" className="carousel-control next control-2">›</label>
        <label for="carousel-2" className="carousel-control prev control-3">‹</label>
        <label for="carousel-1" className="carousel-control next control-3">›</label>
        <ol className="carousel-indicators">
            <li>
                <label for="carousel-1" className="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-2" className="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-3" className="carousel-bullet">•</label>
            </li>
        </ol>
    </div>


    </div>
  )
}

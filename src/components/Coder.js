
import { Link } from "react-router-dom";

export default function Coder() {
  return (
    <div>
    <div className="div">
      <h1 className="bigt">Want to become a coder. We change lives by teaching people to code.</h1>
      <h3 className="bigsub">We are on a mission to build the most fun and effective learning experience that bridges skills to your future careers. Join us!</h3>
      <center><a className="startlnk" href="#">START NOW</a></center>
    </div>

    <div className="cmpy">
        <h1>“We launched Creative Coding in 2024 to change the way people learn. We started on mobile devices so we could reach as many people around the globe as possible. Years later, we’re still here and have helped over 20 million people learn how to code.”</h1>
        <br />
        <h3>- Adepu Praveen, co-founder and CEO</h3>
    </div>

    <div className="cmpy2">
        <h1>Do we sound like a good fit? 
 <br />Check out our Explore page.</h1>
 <Link to="/explore"><a>Explore</a></Link>
    </div>




    </div>
  )
}

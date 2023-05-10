import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="footer">
     <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">online class</a></li>
            <li><a href="#">benifits</a></li>
            <li><a href="#">certificate status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online training</h4>
          <ul>
            <li><a href="#">front-end</a></li>
            <li><a href="#">back-end</a></li>
            <li><a href="#">full stack</a></li>
            
          </ul>
        </div>
        
      </div>
     </div>
  </footer>
    </div>
  )
}

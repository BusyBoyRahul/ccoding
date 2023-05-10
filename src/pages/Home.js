import Navbar from "../components/Navbar";
import Caurosel from "../components/Caurosel";
import Popular from "../components/Popular";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Caurosel />
      <Popular />
      <Welcome />
      <Footer />
    </div>
  )
}

import logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import MyDialog from "../components/MyDialog";

export default function Venues() {
  return (
    <>
      <MyDialog />
      <div className="py-10">
        <a href="/" className="flex justify-center">
          <img width="30%" src={logo} alt="Logo" />
        </a>
      </div>
      <Navbar></Navbar>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

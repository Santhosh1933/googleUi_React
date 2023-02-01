import logo from "../img/google.png";
import menu from "../img/menu.png";
import mic from "../img/mic.png";
import camera from "../img/camera.png";
const GoogleUI = () => {
  var key;
  var val;
  function enter(e){
    key=e.key;
    val=e.target.value;
    if(key=="Enter"){
      window.location.replace("https://www.google.com/search?q="+val);
    }
  }
  function search(e){
  }

  return (
    <>
      <header>
        <ul className="ul">
          <li>Gmail</li>
          <li>Images</li>
          <li>
            <img src={menu} alt="" className="menu" />
          </li>
          <li>
            <button className="button">Sign in</button>
          </li>
        </ul>
      </header>
      <div className="container">
        <img src={logo} alt="" className="google" />
        <div className="input">
          <i class="fa-solid fa-magnifying-glass" id="search"></i>
          <input type="text" onChange={search} onKeyPress={enter}/>
          <div className="micCam">
            <img src={mic} id="mic" alt="" className="mic" />
            <img src={camera} id="mic" alt="" />
          </div>
        </div>
        <div className="buttons">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
        <p>
          Google offered in :{" "}
          <span>
            हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
          </span>
        </p>
      </div>
      <div className="footer1">
        <div className="india">India</div>
      </div>
      <div className="footer2">
        <ul className="footerUL">
          <li className="li"> About</li> <li> Advertising </li>
          <li> Business</li>
          <li> How Search works</li>
        </ul>
        <ul className="footerUL">
          <li> Privacy</li>
          <li> Terms</li>
          <li className="finalLi"> Settings</li>
        </ul>
      </div>
    </>
  );
};
export default GoogleUI;

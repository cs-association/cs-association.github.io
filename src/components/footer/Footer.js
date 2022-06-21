import React from "react";
import "./footer.css";
// import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Facebook from '../../icons/Facebook.svg';
import Facebook_active from '../../icons/Facebook_active.svg';
import Youtube from '../../icons/Youtube.svg';
import Youtube_active from '../../icons/Youtube_active.svg';
import Instagram from '../../icons/Instagram.svg';
import Instagram_active from '../../icons/Instagram_active.svg';
import LinkedIn from '../../icons/LinkedIn.svg';
import LinkedIn_active from '../../icons/LinkedIn_active.svg';
import Twitter from '../../icons/Twitter.svg';
import Twitter_active from '../../icons/Twitter_active.svg';

class Hover extends React.Component {
  constructor() {
    super();

    this.state = {
      isHover: false
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler() {
    this.setState({
      isHover: true
    });
  }

  onMouseLeaveHandler() {
    this.setState({
      isHover: false
    });
  }

}

const footer = new Hover();
const Footer = () => {
  return (
    <>
      <div className="footer" style={{ background: "#6906B7" }}>
        <div className="footer-content">
          <div className="footer-content-main">
            <h5>Contents</h5>
            <li>
              <h6>Contact Us</h6>
              <h7>+91 1234567890</h7><br />
              <h7>+91 1234567890</h7>
            </li>
            <li>
              <h6>Sponsors</h6>
              <h7>GTech &mu;Learn</h7>
            </li>
          </div>
          <h6 className="tag">Follow for more updates</h6>
          <div className="social-media">
            <li>
              {/* <a href="https://www.facebook.com/">
              <FaFacebook className="social-icons"/>
            </a> */}

              <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                <a href="https://www.facebook.com/">
                  {footer.state.isHover
                    ? <img src={Facebook_active} alt="facebook" className="social-icons" />
                    : <img src={Facebook} alt="facebook" className="social-icons" />
                  }
                </a>
              </div>
            </li>
            <li>
              {/* <a href="https://www.instagram.com/">
              <FaInstagram className="social-icons" />
            </a> */}
              <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                <a href="https://www.instagram.com/">
                  {footer.state.isHover
                    ? <img src={Instagram_active} alt="Instagram" className="social-icons" />
                    : <img src={Instagram} alt="Instagram" className="social-icons" />
                  }
                </a>
              </div>
            </li>
            <li>
              {/* <a href="https://www.linkedin.com/">
                <FaLinkedinIn className="social-icons" />
              </a> */}
              <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                <a href="https://www.linkedin.com/">
                  {footer.state.isHover
                    ? <img src={LinkedIn_active} alt="LinkedIn" className="social-icons" />
                    : <img src={LinkedIn} alt="LinkedIn" className="social-icons" />
                  }
                </a>
              </div>
            </li>
            <li>
              {/* <a href="https://www.twitter.com/">
                <FaTwitter className="social-icons" />
              </a> */}
              <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                <a href="https://www.twitter.com/">
                  {footer.state.isHover
                    ? <img src={Twitter_active} alt="Twitter" className="social-icons" />
                    : <img src={Twitter} alt="Twitter" className="social-icons" />
                  }
                </a>
              </div>
            </li>
            <li>
              {/* <a href="https://www.youtube.com/">
                <FaYoutube className="social-icons" />
              </a> */}
              <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                <a href="https://www.youtube.com/">
                  {footer.state.isHover
                    ? <img src={Youtube_active} alt="Youtube" className="social-icons" />
                    : <img src={Youtube} alt="Youtube" className="social-icons" />
                  }
                </a>
              </div>
            </li>
          </div>
        </div>
      </div>


    </>
  );
};

export default Footer;

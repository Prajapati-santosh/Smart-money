import React from "react";
import './Footer.css';
function Footer(props){
    const styleClass=props.className?props.className:"Footer";
    return <div className="footerMain">
    <div className={styleClass}>
        <p className="Logo-text">
            Smart 
            <br />&nbsp;Money.</p>
        <div className="container">
            <div className="container-1">
                <p className="heading-text">COMPANY</p>
                <ul className="li">
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="container-2">
                <p className="heading-text">SOCIALS</p>
                <ul className="li">
                    <li>Linkedin</li>
                    <li>Twitter X</li>
                </ul>
            </div>
        </div>
    </div>
     <div className="legal">
        <p className="copyright">copyright reserved ©2024-24 DreamBig technologies</p>
        <p className="privacy">privacy policy | terms and conditions</p>
    </div>
 </div>
}

export default Footer;
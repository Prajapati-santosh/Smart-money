import './impressionpage.css';
// import fivedollarbill from '/workspaces/Smart-money/developement/front-end/smartmonkey/src/Assets/fiveDollarBill.jpeg';
// import fivedollarbillCropped from '/workspaces/Smart-money/developement/front-end/smartmonkey/src/Assets/Croppedfivedollarbill.jpg';
import fivedollarbillCropped from '../../Assets/Croppedfivedollarbill.jpg';

function Impressionpage(){
    return <div className="impression-div"> 
                    <div className="impression-text">
                        <span className="text-italic">Track. </span>
                        <span className="text-normal">Plan.</span>
                        <br></br>
                        <span className="text-normal">Thrive. </span>
                        <span className="text-italic">Secure.</span>
                        <br></br>
                        <span className="sub-text">Optimize every dollar you</span>
                        <br></br>
                        <span className="sub-text">spend and save more effortlessly</span>
                    </div>
                    <div className="design">
                        <img className="dollarbill" src={fivedollarbillCropped} alt="five dollar bill"></img>
                    </div>
            </div>
}

export default Impressionpage;
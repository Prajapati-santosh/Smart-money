import './MyExpense.css';
import {Home,Transactions,Account,Goals,Chart,PiggyBank,Down,Up,Dollar} from '../images.jsx';
import Logo from '../Logo/Logo.jsx';
import Card from './Card.jsx';

function MyExpense() {
    return <div>
        <div className='my-expense'>
            <div className='side-bar'>
                <Logo className="expense-logo"/>
                <div className='sidebar-options'>
                    <div className='first'>
                        <div className='nav-bar-content'>
                            <img src={Home} alt='dashboard'></img>
                            <label>&nbsp;Dashboard</label>
                        </div>
                        <div className='nav-bar-content'>
                            <img src={Transactions} alt='dashboard'></img>
                            <label>&nbsp;Transactions</label>
                        </div>
                        <div className='nav-bar-content'>
                            <img src={Goals} alt='dashboard'></img>
                            <label> &nbsp;Goals</label>
                        </div>
                        <div className='nav-bar-content'>
                            <img src={Chart} alt='dashboard'></img>
                            <label> &nbsp;Analytics</label>
                        </div>
                    </div>
                    <div className='second'>
                        <div className='nav-bar-content'>
                            <img src={Account} alt='Account'></img>
                            <label> &nbsp;Account</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-content'>
                <div className='heading'>
                    <p className='heading-h1'>Financial Dashboard</p>
                    <p className='heading-h5'>Welcome Back! Here's your financial overview</p>
                    <hr></hr>
                </div>
                <div className='dash-board'>
                    <Card logo={Dollar} heading={"Total Balance"} subHeading={"$12000"} height={170} width={255} color={"white"}
                        logoColor={"#d9f1daff"} subHeadinColor={"green"} symbol={"^10%"}/>
                    <Card logo={Up} heading={"Monthly Income"} subHeading={"$8420.00"} height={170} width={255} color={"white"}
                        logoColor={"#98e7faff"} subHeadinColor={"blue"} symbol={"+8.2%"}/>
                    <Card logo={Down} heading={"Monthly Expenses"} subHeading={"$2400"} height={170} width={255} color={"white"}
                        logoColor={"#f49898ff"} subHeadinColor={"red"} symbol={"-3.1%"}/>
                    <Card logo={PiggyBank} heading={"Savings goal"} subHeading={"$2400"} height={170} width={255} color={"white"}
                        logoColor={"#d5a2f3ff"} subHeadinColor={"purple"} symbol={"+15.7%"}/>
                </div>
            </div>
        </div>
    </div>
}

export default MyExpense;
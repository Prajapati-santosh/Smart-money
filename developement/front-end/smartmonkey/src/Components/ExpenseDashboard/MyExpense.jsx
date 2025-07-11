import './MyExpense.css'
import Card from './Card.jsx';

function MyExpense() {
    return <div>
        <div className='my-expense'>
            <div className='side-bar'>
                Side bar
            </div>
            <div className='dash-board'>
                <div className='dashboard-content'>
                    <Card className="income-card"
                        heading="Total Income"
                        dimensions={{ height: "90px", width: "140px" }}
                        color="white"
                        borderRadius='true'
                        content={<div>
                            <div style={{ fontFamily: "sans-serif", fontSize: "30px" }}>$4000</div>
                            <div>10%^</div>
                        </div>}
                    />
                    <Card className="expense-card"
                        heading="Total Expenses"
                        dimensions={{ height: "90px", width: "150px" }}
                        color="white"
                        borderRadius='true'
                        content={<div>
                            <div style={{ fontFamily: "sans-serif", fontSize: "30px" }}>$400</div>
                            <div>10%^</div>
                        </div>}
                    />
                    <Card className="market-card"
                    heading="Market Trends"
                    dimensions={{height:"300px",width:"200px"}}
                    color="white"
                    borderRadius="true"

                    />
                    <Card className="spending-card"
                    heading="Spending Trends"
                    dimensions={{height:"300px",width:"200px"}}
                    color="white"
                    borderRadius="true"

                    />
                    <Card className="transactions"
                    heading="Reccent transactions"
                    dimensions={{height:"200px",width:"300px"}}
                    color="white"
                    borderRadius="true"

                    />
                   
                </div>
            </div>
        </div>
    </div>
}

export default MyExpense;
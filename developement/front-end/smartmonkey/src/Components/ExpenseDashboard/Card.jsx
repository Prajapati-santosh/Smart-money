function Card(props) {
    return <div style={{
        height: props.height, width: props.width, backgroundColor: props.color,
        fontFamily: "sans-serif",
        borderRadius: 10,
        border: "1px solid #9EA3A3",
    }}>
        <div className="logo-dollar" style={{
            display: "flex",
            height: "30%",
            flexDirection: "row",
            paddingTop: "10%",
            margin: "0px",
            alignItems: "center",
            justifyContent: "space-arround",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "5px",
            justifyContent: "space-between"
        }}>
            <div style={{ backgroundColor: props.logoColor, height: "100%", borderRadius: "5px", display: "flex" }}>
                <img src={props.logo} alt="LOL"></img>
            </div>
            <p style={{ margin: "0", padding: "0", color: props.logoColor, fontSize: "150%", color: props.subHeadinColor }}>{props.symbol}</p>
        </div>

        <div style={{ marginLeft: "10%", fontSize: "120%", height: "70%" }}>
            {props.heading}
            <h1 style={{ color: "#5b5b5bff", padding: "0px", margin: "0px" }}>
                {props.subHeading}
            </h1>
        </div>
    </div>
}
export default Card;
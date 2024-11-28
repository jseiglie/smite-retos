

export const Pop = ({ item }) => {

    const popWrapper = {
        display: "none",
        position: "absolute",
        top: "0",
        left: "0",
        width: "20%",
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "100",
    };

    return (
        <div className="pop-wrapper" style={popWrapper}>
                <div className="pop-image">
                    <img
                        width={"120px"}
                        height={"120px"}
                        src={`https://static.smite.guru/i/items/${item.guru_id}.jpg`}
                        alt={item.DeviceName}
                    />
                </div>
                <div className="pop-content">
                    <h3>{item.DeviceName}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        
    )
 }

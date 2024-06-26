const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString
}) => {

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{areaName}</h5>
            <span>
                <h4
                    style={
                        avgRatingString < 4
                            ? {backgroundColor: "red"}
                            : avgRatingString === "--"
                                ? {backgroundColor: "white", color: "black"}
                                : {color: "white"}   
                }
                >
                    <i className="fa-solid fa-star"></i>
                    {avgRatingString}
                </h4>
                <h4>.</h4>
                <h4>{costForTwo ?? '200 for two'}</h4>
            </span>
        </div>
    );
}

export default RestaurantCard;
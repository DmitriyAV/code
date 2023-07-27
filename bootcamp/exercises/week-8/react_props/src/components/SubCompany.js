import React from "react";

const SubCompany = (props) => {

    let explodedRevenue = props.revenue * 100
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.name} earns {explodedRevenue}</p>
        </div>
    )

}

export default SubCompany
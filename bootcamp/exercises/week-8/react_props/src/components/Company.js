import React from "react";
import SubCompany from "./SubCompany";
function Company(props) {
    let explodedRevenue = props.revenue * 100

    return (
     <SubCompany name={props.name} revenue={explodedRevenue} />
    )

}

export default Company
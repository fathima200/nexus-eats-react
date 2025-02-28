import React from 'react'
import smothie from "../../assets/smoothie.png"
import salad from "../../assets/scrambled-egg.png"
import Rice from "../../assets/rice-and-chicken.png"

const FoodBanner = () => {
  return (
    <div>
        <div className="explore">
        <h1>EXPLORE REAL TASTE</h1>
        <div className="pics">
            <div className="item"> <img src={smothie} alt /></div>
            <div className="itemm"> <img src={salad} alt /></div>
            <div className="item"> <img src={Rice} alt /></div>
        </div>
        </div>

    </div>
  )
}

export default FoodBanner
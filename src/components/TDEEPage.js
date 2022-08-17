import React from 'react'
import TDEECalculator from './TDEECalculator'
function TDEEPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">TDEE Calculator</h3>

          <p className="text-center">
            "Your <strong>total daily energy expenditure (TDEE) </strong> is the
            number of calories you burn throughout a 24-hour period. These
            calories come from the work your body does to keep you alive,
            including your brain functions, breathing, digestion, and so on as
            well as all of your physical activity."
          </p>
          {/* TDEE definition - https://www.verywellfit.com/what-is-energy-expenditure-3496103#:~:text=Your%20total%20daily%20energy%20expenditure%20(TDEE)%20is%20the%20number%20of,all%20of%20your%20physical%20activity.*/}

          <TDEECalculator />
        </div>
      </div>
    </div>
  )
}

export default TDEEPage

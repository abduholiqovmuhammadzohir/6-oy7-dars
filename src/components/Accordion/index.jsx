import React from 'react'
import "./index.css"

export default function Accordion({ title , active , setActive }) {
  return (
    <>
      <div className="accordion">
        <div className="accordionHeading">
          <div className="container">
            <p>{title}</p>
            <span onClick={() => setActive(title)}>
              {active === title ? "X" : "|||"}
            </span>
          </div>
        </div>
        <div className={(active === title ? "show" : "") + "accordionContent"}>
          <div className="containerer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi quo voluptatum incidunt soluta quod praesentium? Iusto minus consequuntur, doloremque, recusandae neque, aspernatur debitis explicabo excepturi blanditiis ipsam sed assumenda.</p>
          </div>
        </div>
      </div>
    </>
  )
}

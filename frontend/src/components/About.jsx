import React from 'react'

export default function About(props) {
  return (
    <div className="about my-5">
        <div className="about-head">
            <h3>{props.title}</h3>
            <p className="text-black-50">{props.description}</p>
        </div>
        <div className="about-body d-flex flex-wrap gap-3 my-5">
            {props.items.map(item =>{
                return <div key={item._id} className='bg-white rounded-2 p-4 flex-grow-1' style={{
                    minWidth : "300px" ,
                    width : "600px"
                }}>
                    <div className="icon mb-4 rounded-3 d-flex align-items-center justify-content-center" style={{
                        background : "var(--icons)" ,
                        width : "56px" ,
                        height : "56px"
                    }}>
                        <img src={item.icon} alt="" />
                    </div>
                    <h5 className='fw-bold my-3'>{item.title}</h5>
                    <p className="text-black-50">{item.description}</p>
                </div>
            })}
        </div>
      </div>
  )
}

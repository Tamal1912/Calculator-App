import React from 'react'

const BtnLists = ({buttons}) => {
  return (
    <div className="btn-lists pt-2 w-45 flex flex-wrap justify-center gap-1">
        {buttons.map(item=><button className=" bg-sky-700 w-20 h-20 rounded-md text-white hover:bg-amber-500">{item}</button>)}
       
       
    </div>
  )
}

export default BtnLists
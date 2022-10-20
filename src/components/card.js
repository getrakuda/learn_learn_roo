import React from "react";

export default function Card(props){
  const handle_change = () => {
    props.SetShowModal(true);
    props.SetChangeMsg(props.KeepMsg);
  }
  return(
    <>
      <div className={'h-20 w-48 bg-white mx-auto flex flex-col justify-center items-center'}>
        <p className={'text-black mx-3'}>src/components/card.js</p>
        <button
          onClick={handle_change}
          className={'h-10 w-20 bg-cyan-600'}>
          OPEN
        </button>
      </div>
    </>
  )
}
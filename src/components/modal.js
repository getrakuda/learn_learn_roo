import React from "react";

export default function Modal(props){
  const handle_change = () => {
    props.SetShowModal(false);
    props.SetChangeMsg(props.EndMsg);
  }
  return(
    <>
      <div className={'fixed top-0 left-0 h-screen w-screen bg-original-modal-bg z-10'}>
        <div className={'absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2'}>

          <div className={'flex flex-col w-full items-center mt-36'}>

            <p className={'text-white my-3 font-semibold text-2xl'}>
              src/components/modal.js
            </p>

            <button
              className={'h-10 w-20 bg-purple-500'}
              onClick={handle_change}
            >
              CLOSE
            </button>

          </div>

        </div>
      </div>
    </>
  )
}
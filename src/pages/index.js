import React, {useState} from "react"
import Card from "../components/card";
import Modal from "../components/modal";

export default function Home() {
  const [ShowModal, SetShowModal] = useState(false);
  const [ChangeMsg, SetChangeMsg] = useState('頑張っちゃって!');
  const Keep_fight = '頑張っちゃってるね!';
  const ez = '簡単だね!';

  return(
    <>
      <div className={'w-screen h-screen bg-gray-800 text-white pt-28'}>

        <h1 className={'text-center text-white text-3xl font-semibold'}>
          {ChangeMsg}
        </h1>

        <p className={'text-center my-10'}>src/pages/index.js</p>

        <Card
          SetShowModal={SetShowModal}
          SetChangeMsg={SetChangeMsg}
          KeepMsg={Keep_fight}
        />

        {ShowModal ? (
          <>
            <Modal
              SetShowModal={SetShowModal}
              SetChangeMsg={SetChangeMsg}
              EndMsg={ez}
            />
          </>
        ):(<></>)}

        <div className={'flex justify-center'}>
          <button
            className={'mt-4 h-10 w-20 bg-yellow-500 text-black'}
            onClick={() => {
              SetChangeMsg(Keep_fight);
              SetShowModal(true);
            }}>
            OPEN
          </button>
        </div>

      </div>
    </>
  )
}

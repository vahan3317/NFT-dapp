import ABI  from '../scripts/ABI'
import nftAddress  from '../scripts/nftAddress'
import {useState} from 'react'
import Web3 from 'web3'
import React from "react";

function BuyTokens() {
 const web3 = new Web3(window.ethereum)
 const [showModal, setShowModal] = React.useState(false);
const [result,setResult] = useState('')
 const [amount, setAmount] = useState('');


 const mint = async () =>{

  
 const { ethereum } = window;
 const accounts = await ethereum.request({
   method: 'eth_requestAccounts',
 });
 const account = accounts[0];
 
 
 const Contract = await new web3.eth.Contract(ABI, nftAddress);
const owner = Contract.methods.owner().call().then((result) =>console.log(result + " BOSS account")).catch(console.error)
 Contract.methods.buyTokens(nftAddress).send({from:account}).then((res)=>setResult(res))
setShowModal(false)
}
 return(
  <div>
  <p className='text-center text-[32px]'>GET TOKEN</p>
 <div className="mx-auto bg-gradient-to-t from-[#eb1ebb] via-[#0e0a4a]  to-[#0e0a4a] pt-[24px] w-[300px] h-[200px] text-center mt-[14px] rounded-lg shadow-lg shadow-gray-700/50 ">
        
    
  <button
        className="bg-pink-500 mt-[20px] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}>
       Buy
      </button>
      {showModal ? (
        <>
          <div
            className="w-[320px]  mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-black">
                   Do you want to buy?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Each Token ~ 0.1 BNB
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={mint}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
 </div>
 </div>
)

}



export default BuyTokens;
// import { useState, useEffect } from 'react'
import ABI  from '../scripts/ABI'
import nftAddress  from '../scripts/nftAddress'
import {useState} from 'react'
import Web3 from 'web3'
// import ehters from 'ethers'



function TransferFrom() {
 const web3 = new Web3(window.ethereum)
 
const [result,setResult] = useState('')
 const [id, setId] = useState('');
 const [to, setTo] = useState('');
 const [from, setFrom] = useState('');


 const transferFrom = async () =>{
 
 
 const { ethereum } = window;
 const accounts = await ethereum.request({
   method: 'eth_requestAccounts',
 });
 const account = accounts[0];
 

 console.log(account + " is account address")

 const Contract = await new web3.eth.Contract(ABI, nftAddress);
const owner = Contract.methods.owner().call().then((result) =>console.log(result + " BOSS account")).catch(console.error)
const transfer=  Contract.methods.transferFrom(from,to,id).call({from:account}).then((res)=>setResult(res)).catch((err)=>console.log(err))





}
 


 const handleChange = event => {
  
  setFrom(event.target.value)

  console.log('from:', event.target.value);
};
const handleChange2 = event => {
setTo(event.target.value);
 console.log('to:', event.target.value);
};
const handleChange3 = event => {
 setId(event.target.value);
 console.log('id:', event.target.value);
};


 

return(
 
 <div>
 <p className='text-center text-[32px]'>Want to Transfer Token?</p>
 <div className="mx-auto bg-gradient-to-t from-[#eb1ebb] via-[#0e0a4a]  to-[#0e0a4a] pt-[24px] w-[320px] h-[420px] text-center mt-[14px] rounded-lg shadow-lg shadow-gray-700/50 ">
 <p className='text-red-600'>{result.slice(0,10)}...</p>
   <p>Please input fields </p>
  <input type="text"  onChange={handleChange} value={from} placeholder={"from"} className="bg-gray-300 text-center text-black text-[18 px] mt-[24px] w-[90px] h-[50px] rounded "   /><br />
  <input type="text"  onChange={handleChange2} value={to} placeholder={"to"} className="bg-gray-300 text-center text-black text-[18 px] mt-[24px] w-[90px] h-[50px] rounded "   /><br />
   
  <input type="number"  onChange={handleChange3} value={id} placeholder={"id"} className="bg-gray-300 text-center text-black text-[18 px] mt-[24px] w-[90px] h-[50px] rounded "   /><br />
  
  <button className="bg-[#7009b5] shadow-lg shadow-blue-500/50 hover:bg-blue-400 mt-[12px] w-[182px]  h-[42px] bg-[#05a9b3] rounded flex justify-center items-center mx-auto" onClick={transferFrom} >Find</button><br />
</div>




 </div>
)

}



export default TransferFrom;
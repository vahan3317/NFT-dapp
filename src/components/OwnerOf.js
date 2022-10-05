// import { useState, useEffect } from 'react'
import ABI  from '../scripts/ABI'
import nftAddress  from '../scripts/nftAddress'
import {useState} from 'react'
import Web3 from 'web3'
// import ehters from 'ethers'



function OwnerOf() {
 const web3 = new Web3(window.ethereum)
 
const [result,setResult] = useState('')
 const [id, setId] = useState('');


 const ownerOf = async () =>{
 
 
 const { ethereum } = window;
 const accounts = await ethereum.request({
   method: 'eth_requestAccounts',
 });
 const account = accounts[0];
 console.log(account + " is account address")

 const Contract = await new web3.eth.Contract(ABI, nftAddress);
const owner = Contract.methods.owner().call().then((result) =>console.log(result + " BOSS account")).catch(console.error)
const ownerOf=  Contract.methods.ownerOf(id).call({from:account}).then((res)=>setResult(res))





}
 


 const handleChange = event => {
  setId(event.target.value);

  console.log('value is:', event.target.value);
};


 

return(
 
 <div>
 <p className='text-center text-[32px]'>Want to know owner address?</p>
 <div className="mx-auto bg-gradient-to-t from-[#eb1ebb] via-[#0e0a4a]  to-[#0e0a4a] pt-[24px] w-[300px] h-[220px] text-center mt-[14px] rounded-lg shadow-lg shadow-gray-700/50 ">
 <p className='text-red-600'>{result.slice(0,14)}</p>
   <p>Please set ID of Token </p>
   
  <input type="number"  onChange={handleChange} value={id} placeholder={"1-1000"} className="bg-gray-300 text-center text-black text-[18 px] mt-[24px] w-[90px] h-[50px] rounded "   /><br />
  
  <button className="bg-[#7009b5] shadow-lg shadow-blue-500/50 hover:bg-blue-400 mt-[12px] w-[182px]  h-[42px] bg-[#05a9b3] rounded flex justify-center items-center mx-auto" onClick={ownerOf} >Find</button><br />
</div>




 </div>
)

}



export default OwnerOf;
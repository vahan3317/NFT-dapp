// import { useState, useEffect } from 'react'
import ABI  from '../scripts/ABI'
import nftAddress  from '../scripts/nftAddress'
import {useState} from 'react'
import Web3 from 'web3'
// import ehters from 'ethers'



function Mint() {
 const web3 = new Web3(window.ethereum)
 const [isLoading, setIsLoading] = useState(false);
const [result,setResult] = useState('')
 const [amountOfToken, setamountOfToken] = useState('');


 const mint = async () =>{
 
  setIsLoading(true)
 const { ethereum } = window;
 const accounts = await ethereum.request({
   method: 'eth_requestAccounts',
 });
 const account = accounts[0];
 console.log(account + " is account address")

 const Contract = await new web3.eth.Contract(ABI, nftAddress);
const owner = Contract.methods.owner().call().then((result) =>console.log(result + " BOSS account")).catch(console.error)
const minted= Contract.methods.mintTokens(nftAddress,amountOfToken).send({from:account}).then((res)=>setResult(res.transactionHash))




}
 


 const handleChange = event => {
  setamountOfToken(event.target.value);

  console.log('value is:', event.target.value);
};


 

return(
 
 <div>
 <p className='text-center text-[32px]'>DO YOU WANT TO MINT TOKEN?</p>
 <div className="mx-auto bg-gradient-to-l from-[#ad2343] via-[#0e0a4a]  to-[#0e0a4a #a13b53] pt-[24px] w-[300px] h-[200px] text-center mt-[14px] rounded-lg shadow-lg shadow-gray-700/50 ">
   <p>How many tokens do you want?</p>
  <input type="number"  onChange={handleChange} value={amountOfToken} placeholder={"1-1000"} className="bg-gray-300 text-center text-black text-[18 px] mt-[24px] w-[90px] h-[50px] rounded " min={1} max={1000}  defaultValue={1}  /><br />
  
  <button className="bg-yellow-500 shadow-lg shadow-blue-300/50 hover:bg-gradient-to-r hover:from-[#a13b53] hover:via-[#0e0a4a]  hover:to-[#0e0a4a] mt-[12px] w-[182px]  h-[42px] bg-[#05a9b3] rounded flex justify-center items-center mx-auto" onClick={mint} >Mint</button><br />

  
   {result.slice(0, 4)}{result.slice(38, 42)}
  
 </div>
 </div>
)

}



export default Mint;
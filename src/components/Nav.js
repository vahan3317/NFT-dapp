
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
// import BuyTokens from './BuyTokens';
// import Mint from './Mint';



    
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');
    const [accountBalance, setAccountBalance] = useState('');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;
    
    
    
    useEffect(() => {
 
        const checkMetamaskAvailability = async () => {
          if (!ethereum) {
            sethaveMetamask(false);
          }
          sethaveMetamask(true);
        };
        checkMetamaskAvailability();
      }, []);
      
      const connectWallet = async () => {
       try {
        if (ethereum) {
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
              });
              let balance = await provider.getBalance(accounts[0]);
              let bal = ethers.utils.formatEther(balance);
              setAccountAddress(accounts[0]);
              setAccountBalance(bal);
             setIsConnected(true);
        }
        else{
        sethaveMetamask(false);
    }
      } catch (error) {
        setIsConnected(false);
      
       }
       
      };

    return (
        
        <nav className="w-[100%] mx-auto mt-2 bg-gradient-to-l from-[#a13b53] via-[#0e0a4a]  to-[#0e0a4a]  rounded shadow">
            
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href={`/`}>
                            <h2 className="text-2xl font-bold">NFT-Dapp</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}>
                            
                        
                        
{isConnected && haveMetamask ?(
                        
                            
                            <div className="grid grid-cols-1 gap-2 md:flex text-gray-600 hover:text-blue-600" >
                                <a href={`/OwnerOF`} className='w-[140px] h-[42px] text-center lg:inline-block py-2 px-6 bg-[#7009b5] shadow-lg shadow-blue-500/50 hover:bg-blue-400 text-sm text-white font-bold rounded-xl transition duration-200'>OwnerOf</a>
                                <a href={`/transferFrom`} className='w-[140px] h-[42px] text-center  lg:inline-block py-2 px-6 bg-[#7009b5] shadow-lg shadow-blue-500/50 hover:bg-blue-400 text-sm text-white font-bold rounded-xl transition duration-200'>TransferFrom</a>
                               
                                <a href={`/buy`} className='w-[140px] h-[42px] text-center py-2  lg:inline-block  bg-[#7009b5] shadow-lg shadow-blue-500/50 hover:bg-blue-400 text-sm text-white font-bold rounded-xl transition duration-200'>Buy</a>
                            <a className="w-[140px] h-[42px] text-center hidden  py-2 px-6 bg-[#7009b5] shadow-lg shadow-blue-500/50 hover:bg-blue-400 text-sm text-white font-bold rounded-xl transition duration-200" href="#" > Address: {accountAddress.slice(0, 4)}...
                                {accountAddress.slice(38, 42)}</a>
                                <a className="w-[140px] h-[42px] text-center  text-sm  lg:inline-block  px-6 bg-[#7009b5] shadow-lg shadow-pink-500/50 hover:bg-blue-400 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Balance: {accountBalance.slice(0,8)}BNB </a>
                            </div>
                            
                            ):(
                            
                                 <a className=" lg:block py-2 px-6 bg-[#7009b5] shadow-lg shadow-blue-500/50 hover:bg-blue-400 text-sm text-white font-bold rounded-xl transition duration-200" href="#" onClick={connectWallet}>My Wallet</a>
                            
                             )}
                        
                        
                    </div>
                </div>
            </div>
           
        
        
     
  
        </nav>
        
    );
}
'use client'
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
const ModernNavbar = () => {
  const { setVisible: setModalVisible } = useWalletModal();
  const {connect, publicKey} = useWallet();
  return (
    <nav className=" p-4 w-[40%] flex justify-between items-center border-b-[0.2px] border-red-600">
      <div className="flex items-center">
       <img className="h-12 w-26 rounded-xl " src='/favicon16.png' alt='image' />
      </div>
      <button onClick={() => setModalVisible(true)} className="bg-primary font-serif text border border-red-800 p-1 rounded hover:bg-opacity-90 mt-2">
        {publicKey ? publicKey.toString().slice(0,4) + "..." + publicKey.toString().slice(38, -1) : "Connect Wallet"}
      </button>
    </nav>
  );
};

export default ModernNavbar;

'use client'
import React from 'react';
import Image from 'next/image'; // Correct import for Next.js Image component
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

const ModernNavbar = () => {
  const { setVisible: setModalVisible } = useWalletModal();
  const { publicKey } = useWallet();

  return (
    <nav className="p-4 w-full flex justify-between items-center border-b-[0.2px] border-primary">
      <div className="flex items-center">
        <Image
          src='/favicon16.png'
          alt='Logo'
          width={50}  // Add appropriate width
          height={50} // Add appropriate height
          className="rounded-xl"
        />
      </div>
      <button
        onClick={() => setModalVisible(true)}
        className="bg-secondary text-primary font-serif border border-primary p-1 rounded hover:bg-opacity-90 mt-2"
        style={{ fontWeight: 'bold' }}
      >
        {publicKey ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}` : "Connect Wallet"}
      </button>
    </nav>
  );
};

export default ModernNavbar;

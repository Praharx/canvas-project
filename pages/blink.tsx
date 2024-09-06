'use client'
import '@dialectlabs/blinks/index.css';
import { useEffect, useState } from 'react';
import { Action, Blink, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana"
import "../styles/blink.module.css"

const App = () => {
  const [action, setAction] = useState<Action | null>(null);

  const actionApiUrl = 'https://dial.to/?action=solana-action%3Ahttps%3A%2F%2Fmain.bounty-spread.pages.dev%2Fapi%2Fapp%2Factions%3Fid%3Db9ec451d-1f2a-421b-a39b-294cbe7bdd95&cluster=devnet';
  const { adapter } = useActionSolanaWalletAdapter('https://api.devnet.solana.com');
  const { action: something } = useAction({url: actionApiUrl, adapter});

  useEffect(() => {
    console.log(something)
    setAction(something)
  }, [something])

  return action ?
     <div className="h-[40vh] mx-auto w-[20vw]" >
     <Blink action={action} stylePreset='x-dark' websiteText={new URL(actionApiUrl).hostname} />
     </div>
     :
     <div className='text-6xl'>
      No blink loaded:(
     </div>;
}


export default App

import React, { useState } from 'react';
import App from '@/pages/blink';


const CustomTabbedSection = () => {
  const [activeTab, setActiveTab] = useState('arguments');

  const baseColor = '#FFFBCE';
  const complementaryColor = '#000';
  const activeTabColor = '#FFF5A3';

  const tabs = [
    { id: 'arguments', label: 'Arguments' },
    { id: 'rewards', label: 'Earning Rewards' },
  ];

  return (
    <div className="p-4 rounded-lg w-[35%] min-h-screen " style={{ backgroundColor: baseColor }}>
      <div className="flex justify-center w-[100%] mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-lg font-semibold rounded-t-lg transition-all duration-300 ease-in-out ${
              activeTab === tab.id
                ? 'bg-white text-gray-800 shadow-md'
                : ' text-gray-600 '
            }`}
            style={{
              backgroundColor: activeTab === tab.id ? activeTabColor : undefined,
              transform: activeTab === tab.id ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
        <App/>
    </div>
  );
};

export default CustomTabbedSection;

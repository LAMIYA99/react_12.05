import React, { useState } from 'react';

const ModuleSection = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specification', label: 'Specification' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className="container  mx-auto mt-10">

      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition duration-200
              ${
                activeTab === tab.id
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-400 hover:text-black'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>


      <div className="p-4 rounded-b-xl bg-white">
        {activeTab === 'description' && (
          <div className='flex flex-col gap-5'>
            <h2 className="text-xl  font-semibold mb-2">Product Description</h2>
            <p className='text-[16px] font-inter text-[#212529]'>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
            <p className='text-[16px] font-inter text-[#212529]'>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
      <p></p>
          </div>
        )}

        {activeTab === 'specification' && (
          <div className="grid grid-cols-2 gap-x-8 gap-11 text-sm">
          <div><strong>Brand:</strong> Apple</div>
          <div><strong>Model:</strong> iPad Air Wi-Fi + Cellular</div>
          <div><strong>Release date:</strong> September 2013</div>
          <div><strong>Dimensions (mm):</strong> 240.00 x 169.50 x 7.50</div>
          <div><strong>Weight (g):</strong> 478.00</div>
          <div><strong>Battery capacity (mAh):</strong> 8820</div>
          <div><strong>Removable battery:</strong> No</div>
          <div><strong>Screen size (inches):</strong> 9.70</div>
          <div><strong>Resolution:</strong> 1536x2048 pixels</div>
          <div><strong>Pixels per inch (PPI):</strong> 264</div>
        </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
         <p>SLAMMM PARVIN TEACHERIMIZ BURANI CATDIRA BILMEDIM</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleSection;





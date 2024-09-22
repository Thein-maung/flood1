import React, { useState } from 'react';

interface FloodData {
  floodLevel: number;
  rainfallIntensity: number;
}

const FloodAlertApp = () => {
  const [floodData, setFloodData] = useState<FloodData>({ floodLevel: 0, rainfallIntensity: 0 });
  const [sosMessage, setSosMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleFloodDataSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(floodData);
  };

  const handleSosMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, sosMessage]);
    setSosMessage('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">Flood Alert App</h1>
      <form onSubmit={handleFloodDataSubmit} className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Flood Data Entry Form</h2>
        <div className="flex flex-col mb-2">
          <label className="text-lg font-bold mb-1">Flood Level:</label>
          <input
            type="number"
            value={floodData.floodLevel}
            onChange={(e) => setFloodData({ ...floodData, floodLevel: Number(e.target.value) })}
            className="p-2 border border-gray-400 rounded-md"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="text-lg font-bold mb-1">Rainfall Intensity:</label>
          <input
            type="number"
            value={floodData.rainfallIntensity}
            onChange={(e) => setFloodData({ ...floodData, rainfallIntensity: Number(e.target.value) })}
            className="p-2 border border-gray-400 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
      <form onSubmit={handleSosMessageSubmit} className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Send SOS Message</h2>
        <div className="flex flex-col mb-2">
          <label className="text-lg font-bold mb-1">Message:</label>
          <input
            type="text"
            value={sosMessage}
            onChange={(e) => setSosMessage(e.target.value)}
            className="p-2 border border-gray-400 rounded-md"
          />
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
          Send SOS
        </button>
      </form>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Received Messages</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="text-lg font-bold mb-1">{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FloodAlertApp;
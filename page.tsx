'use client';

import { useState } from 'react';
import BotStatus from '@/components/BotStatus';

export default function Home() {
const [botStatus, setBotStatus] = useState<'running' | 'stopped' | 'error'>('stopped');

const startBot = async () => {
  try {
    const response = await fetch('/api/bot', {
      method: 'POST',
    });

    if (response.ok) {
      setBotStatus('running');
    } else {
      setBotStatus('error');
    }
  } catch (error) {
    console.error('Failed to start bot:', error);
    setBotStatus('error');
  }
};

return (
  <main className="min-h-screen bg-gray-900 text-white p-8">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Underscore Bot Control Panel</h1>
      <div className="mb-8">
        <BotStatus status={botStatus} />
      </div>
      <button
        onClick={startBot}
        disabled={botStatus === 'running'}
        className={`px-6 py-3 rounded-lg font-semibold ${
          botStatus === 'running'
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {botStatus === 'running' ? 'Bot Running' : 'Start Bot'}
      </button>
    </div>
  </main>
);
}
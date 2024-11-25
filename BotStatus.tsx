interface BotStatusProps {
status: 'running' | 'stopped' | 'error';
}

export default function BotStatus({ status }: BotStatusProps) {
return (
  <div className="p-4 border rounded-lg bg-gray-800">
    <h2 className="text-xl font-semibold text-white">Bot Status</h2>
    <p className={`mt-2 ${
      status === 'running' 
        ? 'text-green-500' 
        : status === 'error' 
          ? 'text-red-500' 
          : 'text-yellow-500'
    }`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </p>
  </div>
);
}
export async function generateSarcasticResponse(apiKey: string) {
try {
  const response = await fetch('https://api.abacus.ai/v0/prediction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'text-generation',
      prompt: 'Generate a sarcastic, despondent response for a Twitch chat bot that emphasizes existential dread and mild annoyance:',
      max_tokens: 100,
      temperature: 0.8
    })
  });

  const data = await response.json();
  return data.prediction || "Just... whatever.";
} catch (error) {
  console.error('Error generating response:', error);
  return "Error generating response. How fitting.";
}
}
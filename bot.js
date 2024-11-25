// bot.js
import tmi from 'tmi.js';
import { TWITCH_CONFIG, ABACUS_CONFIG } from './config';

class UnderscoreBot {
constructor() {
  this.client = new tmi.Client(TWITCH_CONFIG);
}

async generateResponse() {
  const response = await fetch('https://api.abacus.ai/v0/prediction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ABACUS_CONFIG.apiKey}`
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
}

async start() {
  try {
    await this.client.connect();
    console.log('Connected to Twitch');

    this.client.on('message', async (channel, tags, message, self) => {
      if (self) return;

      if (message.toLowerCase() === '!underscore') {
        const response = await this.generateResponse();
        this.client.say(channel, response);
      }
    });
  } catch (error) {
    console.error('Error connecting to Twitch:', error);
  }
}
}

export default UnderscoreBot;

// bot.js
require('dotenv').config();
const tmi = require('tmi.js');
const axios = require('axios');

// Environment variables
const TWITCH_BOT_USERNAME = process.env.TWITCH_BOT_USERNAME;
const TWITCH_OAUTH_TOKEN = process.env.TWITCH_OAUTH_TOKEN;
const TWITCH_CHANNEL_NAME = process.env.TWITCH_CHANNEL_NAME;
const ABACUS_API_KEY = process.env.ABACUS_API_KEY;

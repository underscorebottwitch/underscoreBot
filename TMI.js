const client = new tmi.Client({
  options: { debug: true },
  identity: {
      username: TWITCH_BOT_USERNAME,
      password: TWITCH_OAUTH_TOKEN
  },
  channels: [TWITCH_CHANNEL_NAME]
});

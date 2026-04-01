/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['917034898741','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Kuttu Bot Mini', 'Goutham Josh'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Kuttu Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU247iOBD9F7+ChtwvSC1tgEDCNXQCAVbzYBInmFyxnUAY8e+r0N3b/bA72/tml0unjk+dql8gLzBFM9SA/i9QElxDhtoja0oE+mBQRREioAtCyCDoA9eiSb1O1jNve8TNKE0upmBGI++WcZm+kWbUvcKjabzinfQCHl1QVscUB78BnPXuFdMNirantZ9oirGbSdvjYehMka0nxaFzNIfy0RV6bvICHi0ixATnsVmeUIYITGeocSAm36OvrIhjrv2kN1hfZEswvITYqdtJ4eEq6n5ysJUqTS8Wm4uL79H3OzGyZEKWsijKaRCxeiNerJ3K6SvNHIlBJynGBoz08Sl4o09xnKPQDlHOMGu+rbtkHifKvrrNT1P7Vd2V80rqTdyC8pcmdUYjJF6M2TzVzvwu+R7xDRdJHaFajlYXM1ipR14ewDznOHUdbzr7+bU+JwWzNkttsP5K3CEfXkn+j+7FdMgvr2hespEGByfbuO1KSSTGhS7n5NpLRDhe5PuljMf0e/SJ5cfLm2QsVpr/qmVbYeHX20zfQNvzh56JksZYi3uhiOLNJ33IKvI7lrp/3S8cuLbq63XvVPX5TKdzHG2Lk3/ohPzaFDS81b1izLHN2BxGvWJxy4PT8sJNbBW7F3b2zZjBYMySTMTbCPuOObi+PH+UoMYOQZ9/dAFBMaaMQIaL/BlTugCGtYsCgthTXbAxZsV9yXMJUu71TpJzR3IsTYVBODuuLptJMze9prbsva+9gC4oSREgSlFoYcoK0iwQpTBGFPT//NkFObqxt7611US+CyJMKNvkVZkWMPxo6scjDIKiypnb5MGwPSAC+txnGDGG85i2MlY5JMEJ12h4goyCfgRTiv7+ICIofI91QQopc0hRWpCeQB+IWcqfXdAFpKhaODuPit80Zjiw7cE6tlsh33m02SFiEKe0TXDcSlCMkTmFNQukycQwY2MYG+CT90f/3wS+rHzv3Mmd6Oj62dx1kvvSQbtdJty8Y140OhaZiA6pdhHoyz+AtItLylLLHm/p3XMtfX+ljen0qgBJu1IbF4HI8WSS34aWzupardwxm67WvbuuME0ONrf5TO3kxyrwxjutUA9XJPBOMxrGL221ENU4QF+LLZNXxxesOBft2qFbTY38cYDwcmBxe328qxTlPr+hK6N4r07r81bQRV1fF+eM0472+cSpd3iZSEfvpAfVzbAbJjaaYbw5M3uOBA7bAeA1QeNlXVMlvs8rf9Af17azsCx/5IiBLkifaRKn85IkyYqiSbLSJrbxjyFL35cbfvqvRW6vEUbPXZHDtt5/V3rToPUk9+h+wXjfPv9ilAE8p4nUK++iwKUl5s7y4u6JKS8zuhFkZVHvmRqK2SGaMQIej59dUKaQRQXJQB/APCQFDsGbW43PMfBwhiiDWQn6vKrKnCLpmvb4CxLn1vc7BwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Kuttu Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/im_goutham_josh',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  

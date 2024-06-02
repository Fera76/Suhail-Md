const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_45_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRSc1RkenB0UzRtYnozZWxkbUttVldVS2Z3ZjR2Qi9VelFLNXFTVlZSbWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3NDI1MTcyOTg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMjhFQzI0NEJFM0Y5QkQ0QzA4NTFCQ0NBOEY3QURBNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTczMzU5MTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc0MjUxNzI5ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwQTUxNEFBMEYxNkRCNEEzQjE1MTVDODBFOERBNzc2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzMzNTkxNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyYnlYaTFuWVNSS2t1WXdZVTlEbENRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRjNjRmNGQ0LTAxMzItNDNmNS04NzZhLWNmN2QyYjc0MGNhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAxMzUsXG4gICAgICAyMzAsXG4gICAgICAxOTMsXG4gICAgICAyMTIsXG4gICAgICAxMzUsXG4gICAgICAxNzgsXG4gICAgICA5OSxcbiAgICAgIDI3LFxuICAgICAgMTk4LFxuICAgICAgNzEsXG4gICAgICAxNTQsXG4gICAgICAyNTQsXG4gICAgICAxMyxcbiAgICAgIDg1LFxuICAgICAgMzQsXG4gICAgICA3NixcbiAgICAgIDE2MyxcbiAgICAgIDEwMyxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDIxLFxuICAgICAgMTg3LFxuICAgICAgNDUsXG4gICAgICA4LFxuICAgICAgMTk5LFxuICAgICAgMzYsXG4gICAgICAxNDcsXG4gICAgICAxOTMsXG4gICAgICAxMDgsXG4gICAgICAxNzYsXG4gICAgICAyMixcbiAgICAgIDk1LFxuICAgICAgMTMyLFxuICAgICAgNzMsXG4gICAgICAyMDksXG4gICAgICAxMTQsXG4gICAgICAxMjcsXG4gICAgICAxMjMsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEI1TlhYTTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzQyNTE3Mjk4ODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzUzNjA4Njg0MzgwNjc6MjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVyYVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmLzREa1E1Tzd4c2dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidXVFS2dxKzFhYXZveEVTN2NVTmVPL2hSem82VzRCM01BYmFLSldWS1p6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKRkhNcW0yUkpVcThtektwcTJnbU84SHdvU3kwVUhwdGFXMFVKYUt4TXJuT2I1SElLdFBpWm85eit3SG9JL0dZV0trWFdiWDYyVkdsNGpkdnVRVUFBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXTlBpMWgwQzZBYVJ5YmRxTys0U3BwNzhDdEN1OGhJS0dUQVRpWGMwaUE2S0F4Y3hVb0xlRm9CanZ5ZHJ2QkxiaFhRV0kxRTlPZk9NeTZwN3haUjFEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc0MjUxNzI5ODg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTczMzU5MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPWFZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9YVi5qc29uIjogIntcImtleURhdGFcIjpcIjl2bXRHVXQ4RWg1aDNZekl2UnVTdzZuV09xR3haZXB0WWVqdFU1MDluLzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxMTI2ODIxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

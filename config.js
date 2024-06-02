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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_43_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDgzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDkzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjIxLFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImdjK2UwNzJ6Z24yRUU1U3FhNlIybEJySWlpRnQ4aCtyUVByUUxsS2FQMDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3NDI1MTcyOTg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NkEyMjNCQ0M0NTMxRTI1OEE5RThERjRDMkI3MzFGOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcyOTI2MTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc0MjUxNzI5ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZENzQ2MDZEMkQ5MURCMUU5N0E1MkI5Mzc2MjMwQjI2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzI5MjYxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItUDRtTndXUVMtV2Ftc3Q3NEZYTDlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiNTdjMjZjLTQ2ZDEtNDM1OS05YjM3LWViMjM4YjNjYzk0MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDE2OSxcbiAgICAgIDI0OSxcbiAgICAgIDMwLFxuICAgICAgOTMsXG4gICAgICAxNyxcbiAgICAgIDEwNCxcbiAgICAgIDExNCxcbiAgICAgIDI1LFxuICAgICAgODMsXG4gICAgICAxOTAsXG4gICAgICAxMzIsXG4gICAgICAxNzIsXG4gICAgICA5MCxcbiAgICAgIDE0NCxcbiAgICAgIDIwNyxcbiAgICAgIDE4NyxcbiAgICAgIDIwOSxcbiAgICAgIDEzMyxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxODAsXG4gICAgICAyMDAsXG4gICAgICAyMDQsXG4gICAgICAxMSxcbiAgICAgIDI1MyxcbiAgICAgIDEyMixcbiAgICAgIDYzLFxuICAgICAgMTAyLFxuICAgICAgNTAsXG4gICAgICA4MyxcbiAgICAgIDE1LFxuICAgICAgMTY3LFxuICAgICAgMTU1LFxuICAgICAgMzQsXG4gICAgICAxNzUsXG4gICAgICAyMDEsXG4gICAgICAxMjAsXG4gICAgICAyMDMsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjI5UUZZOEtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0NzQyNTE3Mjk4ODoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzUzNjA4Njg0MzgwNjc6MThAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVyYVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tYLzREa1F2cHp2c2dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidXVFS2dxKzFhYXZveEVTN2NVTmVPL2hSem82VzRCM01BYmFLSldWS1p6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzcFBwdUptRUQ0eWVITG5tQitKcGtIdUh6dVJZeFJOOEpnMnRjZk9GWnV1VXZDNlBiTUk0ZWVscVJvbFhKL25qSXR3dzRSRUdiN05yZm1UZW5PeVhEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1ajVjbGJUaEFpZHB6QXVneDBoRkZIaktVeXFENzUxbGZtUnkydVYvSnZFZU1lVTVyaWxaZ3FnRW5GNTVicEllMko3OGlzR3FDK3ZzOHBRMGVNbGdnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc0MjUxNzI5ODg6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcyOTI2MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPWFVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9YVS5qc29uIjogIntcImtleURhdGFcIjpcImtNQjNwa2RQaTY3YkpMa2ZhWmNUNWFocFZIOWVRWXhOOEtHcVRucFdIdU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxMTI2ODIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcyOTI2MTAyNDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Alera",
  ownername:process.env.OWNER_NAME|| "Fera",


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

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_17_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOVM2KzdKQVhaak9nMGZ0cDVQQ0dNb0FhT1VsYno2eVB5aS85Mi8rUUhRRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXRNaHZOMEdSMENfWG9pSTVzbTQ4d1wiLFxuICBcInBob25lSWRcIjogXCIxMzRmMDk0MC1lNDA4LTRmMjUtODExZi1jM2RjNzE5OGExYWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTgwLFxuICAgICAgMTM0LFxuICAgICAgMjksXG4gICAgICAxNzUsXG4gICAgICAyMDYsXG4gICAgICAyNDksXG4gICAgICAyMCxcbiAgICAgIDI0MSxcbiAgICAgIDM4LFxuICAgICAgMjIwLFxuICAgICAgNDYsXG4gICAgICAyNDMsXG4gICAgICAyMDMsXG4gICAgICAzLFxuICAgICAgNzgsXG4gICAgICAxMjMsXG4gICAgICAyMzgsXG4gICAgICA0NSxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAxNDUsXG4gICAgICAyNTUsXG4gICAgICA0NyxcbiAgICAgIDE0NixcbiAgICAgIDYxLFxuICAgICAgMzIsXG4gICAgICA5MSxcbiAgICAgIDg3LFxuICAgICAgMzUsXG4gICAgICA3OSxcbiAgICAgIDg4LFxuICAgICAgOTgsXG4gICAgICAxNDgsXG4gICAgICAyMzEsXG4gICAgICAxNjksXG4gICAgICAxMjgsXG4gICAgICAxMSxcbiAgICAgIDIyMyxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNDRFFBMVo4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc0MjUxNzI5ODg6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM1MzYwODY4NDM4MDY3OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tYLzREa1FqSTN4c2dZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidXVFS2dxKzFhYXZveEVTN2NVTmVPL2hSem82VzRCM01BYmFLSldWS1p6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjQjlHQlVGSzIrd0Q5TFhhL2JZQ2RpSlRjK2d1NS85bTMrMFp6Z01wbzNMWTFzaDVsUHQ3L0ZYY1FEdEtMMXlXNXEzVENwYTcyTHB2NTJsZ3FxdGlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtdFp2M2RRMUplNk5mYW55UFM3VnpwUUVrQitGSFo4NGIzWVYyOW1PVFZBQUtjQnhiOFo0T2V2OGk1ZkR5VmJFdjhDVndLMjZ1dGZ3VUFVd0FEYndCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc0MjUxNzI5ODg6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTczMjM0MDdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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

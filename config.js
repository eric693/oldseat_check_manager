// config.js

const API_CONFIG = {
  // 正式環境的 API URL
  apiUrl: "https://script.google.com/macros/s/AKfycbzdHooOqRCw0X169nuzrJ8sgddJUKHSosQYXrpt4Qtc73Rnzk9BpZGwCL2BdOyBBgRZ/exec",
  
  // 新增回呼網址
  redirectUrl: "https://eric693.github.io/oldseat_check_manager/"
  // 你也可以在這裡加入其他設定，例如：
  // timeout: 5000,
  // version: 'v4.5.8'
};
// 👇 新增：為了兼容性，同時定義全域變數 apiUrl
const apiUrl = API_CONFIG.apiUrl;

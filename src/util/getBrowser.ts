import { Browsers } from '../interface/browser'

const getBrowser = () => {
  const userAgent = navigator.userAgent;
  let browser = 'Unknown';
    
  // Detect Chrome
  if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
    browser = Browsers.chrome;
  }
  // Detect Chromium-based Edge
  else if (/Edg/.test(userAgent)) {
    browser = Browsers.edge
  }
  // Detect Firefox
  else if (/Firefox/.test(userAgent)) {
    browser = Browsers.firefox
  }
  // Detect Safari
  else if (/Safari/.test(userAgent)) {
    browser = Browsers.safari
  }
    
  return browser;
}

export default getBrowser
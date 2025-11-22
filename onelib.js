/**
 * OneLib.js - A lightweight utility library with 50+ one-word functions
 * Version: 1.0.0
 * License: MIT
 */

const OneLib = {
  // DOM Utilities
  select: (selector) => document.querySelector(selector),
  selectall: (selector) => document.querySelectorAll(selector),
  html: (selector, content) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    return content !== undefined ? (el.innerHTML = content, el) : el.innerHTML;
  },
  text: (selector, content) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    return content !== undefined ? (el.textContent = content, el) : el.textContent;
  },
  cls: (selector, className) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.classList.toggle(className);
    return el;
  },
  show: (selector) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.style.display = 'block';
    return el;
  },
  hide: (selector) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.style.display = 'none';
    return el;
  },
  toggle: (selector) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
    return el;
  },
  on: (selector, event, callback) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.addEventListener(event, callback);
    return el;
  },
  css: (selector, styles) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    Object.assign(el.style, styles);
    return el;
  },
  create: (tag) => document.createElement(tag),
  append: (parent, child) => {
    const p = typeof parent === 'string' ? document.querySelector(parent) : parent;
    const c = typeof child === 'string' ? document.createElement(child) : child;
    return p.appendChild(c);
  },
  remove: (selector) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    return el.remove();
  },

  // Storage / Data
  save: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  load: (key) => {
    try { return JSON.parse(localStorage.getItem(key)); }
    catch { return localStorage.getItem(key); }
  },
  clear: () => localStorage.clear(),
  copy: async (text) => {
    try { await navigator.clipboard.writeText(text); return true; }
    catch { return false; }
  },

  // Math Helpers
  rand: (min = 0, max = 1) => Math.random() * (max - min) + min,
  randint: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
  clamp: (value, min, max) => Math.min(Math.max(value, min), max),
  avg: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
  sum: (arr) => arr.reduce((a, b) => a + b, 0),
  max: (arr) => Math.max(...arr),
  min: (arr) => Math.min(...arr),
  round: (num, decimals = 0) => Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals),
  id: () => Math.random().toString(36).substr(2, 9),
  uuid: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  }),

  // Array / Object Helpers
  unique: (arr) => [...new Set(arr)],
  merge: (obj1, obj2) => ({ ...obj1, ...obj2 }),
  clone: (obj) => JSON.parse(JSON.stringify(obj)),
  sortnum: (arr) => [...arr].sort((a, b) => a - b),
  chunk: (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  },
  shuffle: (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
  flatten: (arr) => arr.flat(Infinity),
  pick: (obj, keys) => keys.reduce((result, key) => {
    if (key in obj) result[key] = obj[key];
    return result;
  }, {}),

  // Date Helpers
  now: () => new Date(),
  timestamp: () => Date.now(),
  format: (date, style = 'YYYY-MM-DD') => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hour = String(d.getHours()).padStart(2, '0');
    const minute = String(d.getMinutes()).padStart(2, '0');
    
    return style
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hour)
      .replace('mm', minute);
  },
  since: (date) => {
    const seconds = Math.floor((Date.now() - new Date(date)) / 1000);
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 }
    ];
    
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count > 0) return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
    return 'just now';
  },

  // Network Helpers
  get: async (url) => {
    const response = await fetch(url);
    return response.text();
  },
  post: async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  json: async (url) => {
    const response = await fetch(url);
    return response.json();
  },
  download: (url, filename) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  },

  // Animations
  fadein: (selector, duration = 300) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.style.opacity = '0';
    el.style.display = 'block';
    el.style.transition = `opacity ${duration}ms`;
    setTimeout(() => el.style.opacity = '1', 10);
    return el;
  },
  fadeout: (selector, duration = 300) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.style.transition = `opacity ${duration}ms`;
    el.style.opacity = '0';
    setTimeout(() => el.style.display = 'none', duration);
    return el;
  },
  move: (selector, x, y) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.style.transform = `translate(${x}px, ${y}px)`;
    return el;
  },
  scale: (selector, size) => {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    el.style.transform = `scale(${size})`;
    return el;
  },

  // Type Checking
  isnum: (val) => typeof val === 'number' && !isNaN(val),
  isstr: (val) => typeof val === 'string',
  isarr: (val) => Array.isArray(val),
  isobj: (val) => val !== null && typeof val === 'object' && !Array.isArray(val),
  isbool: (val) => typeof val === 'boolean',
  isfunc: (val) => typeof val === 'function',
  isempty: (val) => {
    if (val == null) return true;
    if (typeof val === 'string' || Array.isArray(val)) return val.length === 0;
    if (typeof val === 'object') return Object.keys(val).length === 0;
    return false;
  },

  // Text Helpers
  upper: (text) => String(text).toUpperCase(),
  lower: (text) => String(text).toLowerCase(),
  trim: (text) => String(text).trim(),
  words: (text) => String(text).split(/\s+/).filter(Boolean),
  reverse: (text) => String(text).split('').reverse().join(''),
  slug: (text) => String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  capitalize: (text) => String(text).charAt(0).toUpperCase() + String(text).slice(1).toLowerCase(),
  truncate: (text, length = 100) => {
    const str = String(text);
    return str.length > length ? str.slice(0, length) + '...' : str;
  },

  // Misc Utilities
  wait: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
  log: (...args) => console.log(...args),
  pipe: (value, ...functions) => functions.reduce((acc, fn) => fn(acc), value),
  debounce: (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(null, args), delay);
    };
  },
  throttle: (func, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func.apply(null, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.OneLib = OneLib;
}

// Export for ES modules
export default OneLib;
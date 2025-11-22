# OneLib.js

A lightweight JavaScript utility library with 63+ one-word functions for modern web development.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/onelib.svg)](https://badge.fury.io/js/onelib)
[![GitHub stars](https://img.shields.io/github/stars/Games-of-Ayaan/OneLib.js.svg)](https://github.com/Games-of-Ayaan/OneLib.js/stargazers)

## Features

- **Zero Dependencies** - Pure JavaScript, no external libraries
- **Lightweight** - Only 12KB minified
- **63+ Functions** - Comprehensive utility collection
- **TypeScript Support** - Full type definitions included
- **Universal** - Works in browser, Node.js, and Deno
- **Modern ES6+** - Clean, performant code

## Quick Start

### Installation

```bash
# NPM
npm install onelib

# Yarn
yarn add onelib

# CDN
<script src="https://cdn.jsdelivr.net/npm/onelib@latest/onelib.min.js"></script>
```

### Usage

```javascript
// ES6 Import
import OneLib from 'onelib';

// CommonJS
const OneLib = require('onelib');

// Browser Global
// OneLib is available globally after including the script

// Examples
OneLib.select('#myElement');
OneLib.sum([1, 2, 3, 4, 5]); // 15
OneLib.slug('Hello World!'); // 'hello-world'
OneLib.save('user', {name: 'John'});
```

## Function Categories

### DOM Utilities (13 functions)
- `select(selector)` - Select first element
- `html(selector, content)` - Get/set innerHTML
- `css(selector, styles)` - Apply CSS styles
- `on(selector, event, callback)` - Add event listener
- `show(selector)` / `hide(selector)` - Show/hide elements
- `cls(selector, className)` - Toggle CSS class
- And more...

### Math Helpers (10 functions)
- `sum(array)` - Calculate sum
- `avg(array)` - Calculate average
- `rand(min, max)` - Random number
- `clamp(value, min, max)` - Clamp value
- `round(num, decimals)` - Round to decimals
- And more...

### Text Processing (8 functions)
- `slug(text)` - Create URL slug
- `words(text)` - Split into words
- `truncate(text, length)` - Truncate with ellipsis
- `capitalize(text)` - Capitalize first letter
- `upper(text)` / `lower(text)` - Case conversion
- And more...

### Array & Object Helpers (8 functions)
- `unique(array)` - Remove duplicates
- `chunk(array, size)` - Split into chunks
- `shuffle(array)` - Random shuffle
- `merge(obj1, obj2)` - Merge objects
- `clone(obj)` - Deep clone
- And more...

### Storage & Data (4 functions)
- `save(key, value)` - Save to localStorage
- `load(key)` - Load from localStorage
- `copy(text)` - Copy to clipboard
- `clear()` - Clear localStorage

### Date Helpers (4 functions)
- `now()` - Current date
- `format(date, style)` - Format date
- `since(date)` - Time since date
- `timestamp()` - Current timestamp

### Network Helpers (4 functions)
- `get(url)` - GET request
- `post(url, data)` - POST request
- `json(url)` - Fetch JSON
- `download(url, filename)` - Download file

### Animations (4 functions)
- `fadein(selector, duration)` - Fade in element
- `fadeout(selector, duration)` - Fade out element
- `move(selector, x, y)` - Move element
- `scale(selector, size)` - Scale element

### Type Checking (7 functions)
- `isnum(val)` - Check if number
- `isstr(val)` - Check if string
- `isarr(val)` - Check if array
- `isobj(val)` - Check if object
- `isbool(val)` - Check if boolean
- `isfunc(val)` - Check if function
- `isempty(val)` - Check if empty

### Utilities (5 functions)
- `wait(ms)` - Async delay
- `log(...args)` - Console wrapper
- `pipe(value, ...functions)` - Function composition
- `debounce(func, delay)` - Debounce function
- `throttle(func, limit)` - Throttle function

## Real-World Examples

### E-commerce Cart
```javascript
// Add items and calculate total
const items = [19.99, 29.99, 9.99];
const total = OneLib.sum(items);
const rounded = OneLib.round(total, 2);
OneLib.save('cart', items);
```

### Form Validation
```javascript
// Validate and format user input
const email = OneLib.trim(OneLib.lower(userInput));
const isValid = !OneLib.isempty(email) && email.includes('@');
const name = OneLib.capitalize(OneLib.trim(nameInput));
```

### Content Management
```javascript
// Create SEO-friendly URLs
const title = "How to Build Amazing Web Apps";
const slug = OneLib.slug(title); // "how-to-build-amazing-web-apps"
const wordCount = OneLib.words(content).length;
const preview = OneLib.truncate(content, 150);
```

### Data Processing
```javascript
// Process analytics data
const data = [45, 67, 23, 89, 12, 56, 78];
const stats = {
  average: OneLib.avg(data),
  total: OneLib.sum(data),
  max: OneLib.max(data),
  min: OneLib.min(data)
};
```

## Framework Integration

### React
```javascript
import React, { useState, useEffect } from 'react';
import OneLib from 'onelib';

function MyComponent() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const saved = OneLib.load('userData');
    if (saved) setData(saved);
  }, []);
  
  const handleSave = () => {
    OneLib.save('userData', data);
  };
  
  return <div>Total: {OneLib.sum(data)}</div>;
}
```

### Vue.js
```javascript
import OneLib from 'onelib';

export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      total: 0
    }
  },
  methods: {
    calculate() {
      this.total = OneLib.sum(this.numbers);
    }
  }
}
```

### Angular
```typescript
import { Injectable } from '@angular/core';
import OneLib from 'onelib';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  processData(items: number[]) {
    return {
      sum: OneLib.sum(items),
      avg: OneLib.avg(items),
      max: OneLib.max(items)
    };
  }
}
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Node.js 12+
- Deno 1.0+

## API Documentation

For complete API documentation with all functions, parameters, and examples, visit:
- [Full Documentation](https://games-of-ayaan.github.io/OneLib.js/docs.html)
- [Interactive Demo](https://games-of-ayaan.github.io/OneLib.js/)
- [All Functions Reference](https://games-of-ayaan.github.io/OneLib.js/functions.html)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Games-of-Ayaan/OneLib.js.git
cd OneLib.js

# Install dependencies
npm install

# Run tests
npm test

# Build minified version
npm run build

# Start development server
npm run dev
```

## Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --grep "math functions"
```

## Building

```bash
# Build minified version
npm run build

# Build with source maps
npm run build:dev

# Generate TypeScript definitions
npm run build:types
```

## Performance

OneLib.js is designed for performance:
- **Tree-shakable** - Import only what you need
- **Optimized algorithms** - Efficient implementations
- **Small bundle size** - 12KB minified, 4KB gzipped
- **Zero dependencies** - No external library overhead

## Changelog

### v1.0.0 (Latest)
- Initial release with 63 utility functions
- Full TypeScript support
- Browser and Node.js compatibility
- Comprehensive test suite
- Interactive documentation

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

**GameDev Ayaan**
- Email: gamedevayaan@gmail.com
- GitHub: [@Games-of-Ayaan](https://github.com/Games-of-Ayaan)

## Support

- 🐛 [Report Issues](https://github.com/Games-of-Ayaan/OneLib.js/issues)
- 💡 [Feature Requests](https://github.com/Games-of-Ayaan/OneLib.js/issues/new)
- 📧 [Email Support](mailto:gamedevayaan@gmail.com)
- ⭐ [Star on GitHub](https://github.com/Games-of-Ayaan/OneLib.js)

---

A GameDev Ayaan Creation

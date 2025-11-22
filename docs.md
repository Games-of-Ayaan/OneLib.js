# OneLib.js Documentation

A lightweight utility library with 50+ one-word functions for modern web development.

## Introduction

OneLib.js is a minimalist JavaScript utility library designed to provide common functionality through simple, memorable one-word function names. With zero dependencies and a tiny footprint, it's perfect for rapid prototyping and production applications.

## Installation

### NPM
```bash
npm install onelib
```

### CDN
```html
<script src="https://cdn.example.com/onelib/v1/onelib.min.js"></script>
```

### ES Modules
```javascript
import OneLib from 'onelib';
```

## Basic Usage

```javascript
// DOM manipulation
OneLib.select('#myElement');
OneLib.html('#content', 'Hello World');

// Utilities
OneLib.rand(1, 100);
OneLib.unique([1, 2, 2, 3]);

// Storage
OneLib.save('user', { name: 'John' });
const user = OneLib.load('user');
```

## Full API Reference

### DOM Utilities

#### select(selector)
Select the first element matching the CSS selector.
- **Parameters:** `selector` (string) - CSS selector
- **Returns:** Element or null
- **Example:** `OneLib.select('#myDiv')`

#### selectall(selector)
Select all elements matching the CSS selector.
- **Parameters:** `selector` (string) - CSS selector
- **Returns:** NodeList
- **Example:** `OneLib.selectall('.item')`

#### html(selector, content)
Get or set innerHTML of an element.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `content` (string, optional) - HTML content to set
- **Returns:** String (get) or Element (set)
- **Example:** 
```javascript
OneLib.html('#content', '<p>Hello</p>');
const content = OneLib.html('#content');
```

#### text(selector, content)
Get or set textContent of an element.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `content` (string, optional) - Text content to set
- **Returns:** String (get) or Element (set)
- **Example:** `OneLib.text('#title', 'New Title')`

#### cls(selector, className)
Toggle a CSS class on an element.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `className` (string) - Class name to toggle
- **Returns:** Element
- **Example:** `OneLib.cls('#menu', 'active')`

#### show(selector)
Show an element by setting display to 'block'.
- **Parameters:** `selector` (string|Element) - CSS selector or element
- **Returns:** Element
- **Example:** `OneLib.show('#modal')`

#### hide(selector)
Hide an element by setting display to 'none'.
- **Parameters:** `selector` (string|Element) - CSS selector or element
- **Returns:** Element
- **Example:** `OneLib.hide('#loading')`

#### toggle(selector)
Toggle element visibility.
- **Parameters:** `selector` (string|Element) - CSS selector or element
- **Returns:** Element
- **Example:** `OneLib.toggle('#sidebar')`

#### on(selector, event, callback)
Add event listener to an element.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `event` (string) - Event name
  - `callback` (function) - Event handler
- **Returns:** Element
- **Example:** `OneLib.on('#btn', 'click', () => alert('Clicked!'))`

#### css(selector, styles)
Apply CSS styles to an element.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `styles` (object) - Style properties
- **Returns:** Element
- **Example:** `OneLib.css('#box', { color: 'red', fontSize: '16px' })`

#### create(tag)
Create a new HTML element.
- **Parameters:** `tag` (string) - HTML tag name
- **Returns:** Element
- **Example:** `const div = OneLib.create('div')`

#### append(parent, child)
Append child element to parent.
- **Parameters:** 
  - `parent` (string|Element) - Parent selector or element
  - `child` (string|Element) - Child tag name or element
- **Returns:** Child element
- **Example:** `OneLib.append('#container', 'div')`

#### remove(selector)
Remove an element from the DOM.
- **Parameters:** `selector` (string|Element) - CSS selector or element
- **Returns:** undefined
- **Example:** `OneLib.remove('#temp')`

### Storage / Data

#### save(key, value)
Save data to localStorage with JSON serialization.
- **Parameters:** 
  - `key` (string) - Storage key
  - `value` (any) - Value to store
- **Returns:** undefined
- **Example:** `OneLib.save('settings', { theme: 'dark' })`

#### load(key)
Load data from localStorage with JSON parsing.
- **Parameters:** `key` (string) - Storage key
- **Returns:** Any stored value or null
- **Example:** `const settings = OneLib.load('settings')`

#### clear()
Clear all localStorage data.
- **Parameters:** None
- **Returns:** undefined
- **Example:** `OneLib.clear()`

#### copy(text)
Copy text to clipboard.
- **Parameters:** `text` (string) - Text to copy
- **Returns:** Promise<boolean> - Success status
- **Example:** `await OneLib.copy('Hello World')`

### Math Helpers

#### rand(min, max)
Generate random number between min and max.
- **Parameters:** 
  - `min` (number, default: 0) - Minimum value
  - `max` (number, default: 1) - Maximum value
- **Returns:** Number
- **Example:** `OneLib.rand(1, 100)`

#### randint(min, max)
Generate random integer between min and max (inclusive).
- **Parameters:** 
  - `min` (number) - Minimum value
  - `max` (number) - Maximum value
- **Returns:** Integer
- **Example:** `OneLib.randint(1, 6)` // dice roll

#### clamp(value, min, max)
Clamp a value between min and max bounds.
- **Parameters:** 
  - `value` (number) - Value to clamp
  - `min` (number) - Minimum bound
  - `max` (number) - Maximum bound
- **Returns:** Number
- **Example:** `OneLib.clamp(150, 0, 100)` // returns 100

#### avg(array)
Calculate average of numbers in array.
- **Parameters:** `array` (Array<number>) - Array of numbers
- **Returns:** Number
- **Example:** `OneLib.avg([1, 2, 3, 4, 5])` // returns 3

#### sum(array)
Calculate sum of numbers in array.
- **Parameters:** `array` (Array<number>) - Array of numbers
- **Returns:** Number
- **Example:** `OneLib.sum([1, 2, 3])` // returns 6

#### max(array)
Find maximum value in array.
- **Parameters:** `array` (Array<number>) - Array of numbers
- **Returns:** Number
- **Example:** `OneLib.max([1, 5, 3])` // returns 5

#### min(array)
Find minimum value in array.
- **Parameters:** `array` (Array<number>) - Array of numbers
- **Returns:** Number
- **Example:** `OneLib.min([1, 5, 3])` // returns 1

#### round(num, decimals)
Round number to specified decimal places.
- **Parameters:** 
  - `num` (number) - Number to round
  - `decimals` (number, default: 0) - Decimal places
- **Returns:** Number
- **Example:** `OneLib.round(3.14159, 2)` // returns 3.14

#### id()
Generate random ID string.
- **Parameters:** None
- **Returns:** String
- **Example:** `OneLib.id()` // returns "k2j8h9x1m"

#### uuid()
Generate UUID v4 string.
- **Parameters:** None
- **Returns:** String
- **Example:** `OneLib.uuid()` // returns "f47ac10b-58cc-4372-a567-0e02b2c3d479"

### Array / Object Helpers

#### unique(array)
Remove duplicate values from array.
- **Parameters:** `array` (Array) - Input array
- **Returns:** Array
- **Example:** `OneLib.unique([1, 2, 2, 3])` // returns [1, 2, 3]

#### merge(obj1, obj2)
Merge two objects (shallow).
- **Parameters:** 
  - `obj1` (Object) - First object
  - `obj2` (Object) - Second object
- **Returns:** Object
- **Example:** `OneLib.merge({a: 1}, {b: 2})` // returns {a: 1, b: 2}

#### clone(obj)
Deep clone an object.
- **Parameters:** `obj` (Object) - Object to clone
- **Returns:** Object
- **Example:** `OneLib.clone({a: {b: 1}})`

#### sortnum(array)
Sort array of numbers in ascending order.
- **Parameters:** `array` (Array<number>) - Array to sort
- **Returns:** Array<number>
- **Example:** `OneLib.sortnum([3, 1, 4, 1, 5])` // returns [1, 1, 3, 4, 5]

#### chunk(array, size)
Split array into chunks of specified size.
- **Parameters:** 
  - `array` (Array) - Array to chunk
  - `size` (number) - Chunk size
- **Returns:** Array<Array>
- **Example:** `OneLib.chunk([1, 2, 3, 4, 5], 2)` // returns [[1, 2], [3, 4], [5]]

#### shuffle(array)
Randomly shuffle array elements.
- **Parameters:** `array` (Array) - Array to shuffle
- **Returns:** Array
- **Example:** `OneLib.shuffle([1, 2, 3, 4, 5])`

#### flatten(array)
Flatten nested arrays completely.
- **Parameters:** `array` (Array) - Nested array
- **Returns:** Array
- **Example:** `OneLib.flatten([1, [2, [3, 4]]])` // returns [1, 2, 3, 4]

#### pick(obj, keys)
Pick specified keys from object.
- **Parameters:** 
  - `obj` (Object) - Source object
  - `keys` (Array<string>) - Keys to pick
- **Returns:** Object
- **Example:** `OneLib.pick({a: 1, b: 2, c: 3}, ['a', 'c'])` // returns {a: 1, c: 3}

### Date Helpers

#### now()
Get current date object.
- **Parameters:** None
- **Returns:** Date
- **Example:** `OneLib.now()`

#### timestamp()
Get current timestamp in milliseconds.
- **Parameters:** None
- **Returns:** Number
- **Example:** `OneLib.timestamp()`

#### format(date, style)
Format date according to style pattern.
- **Parameters:** 
  - `date` (Date|string) - Date to format
  - `style` (string, default: 'YYYY-MM-DD') - Format pattern
- **Returns:** String
- **Example:** `OneLib.format(new Date(), 'YYYY-MM-DD HH:mm')`

#### since(date)
Get human-readable time since date.
- **Parameters:** `date` (Date|string) - Past date
- **Returns:** String
- **Example:** `OneLib.since('2023-01-01')` // returns "5 months ago"

### Network Helpers

#### get(url)
Make GET request and return text response.
- **Parameters:** `url` (string) - Request URL
- **Returns:** Promise<string>
- **Example:** `const html = await OneLib.get('/api/data')`

#### post(url, data)
Make POST request with JSON data.
- **Parameters:** 
  - `url` (string) - Request URL
  - `data` (Object) - Data to send
- **Returns:** Promise<Object>
- **Example:** `await OneLib.post('/api/users', {name: 'John'})`

#### json(url)
Make GET request and return JSON response.
- **Parameters:** `url` (string) - Request URL
- **Returns:** Promise<Object>
- **Example:** `const data = await OneLib.json('/api/users')`

#### download(url, filename)
Trigger file download from URL.
- **Parameters:** 
  - `url` (string) - File URL
  - `filename` (string) - Download filename
- **Returns:** undefined
- **Example:** `OneLib.download('/files/report.pdf', 'report.pdf')`

### Animations

#### fadein(selector, duration)
Fade in an element.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `duration` (number, default: 300) - Animation duration in ms
- **Returns:** Element
- **Example:** `OneLib.fadein('#modal', 500)`

#### fadeout(selector, duration)
Fade out an element.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `duration` (number, default: 300) - Animation duration in ms
- **Returns:** Element
- **Example:** `OneLib.fadeout('#alert', 1000)`

#### move(selector, x, y)
Move element to specified coordinates.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `x` (number) - X coordinate
  - `y` (number) - Y coordinate
- **Returns:** Element
- **Example:** `OneLib.move('#box', 100, 50)`

#### scale(selector, size)
Scale element by specified factor.
- **Parameters:** 
  - `selector` (string|Element) - CSS selector or element
  - `size` (number) - Scale factor
- **Returns:** Element
- **Example:** `OneLib.scale('#image', 1.5)`

### Type Checking

#### isnum(val)
Check if value is a number.
- **Parameters:** `val` (any) - Value to check
- **Returns:** Boolean
- **Example:** `OneLib.isnum(42)` // returns true

#### isstr(val)
Check if value is a string.
- **Parameters:** `val` (any) - Value to check
- **Returns:** Boolean
- **Example:** `OneLib.isstr('hello')` // returns true

#### isarr(val)
Check if value is an array.
- **Parameters:** `val` (any) - Value to check
- **Returns:** Boolean
- **Example:** `OneLib.isarr([1, 2, 3])` // returns true

#### isobj(val)
Check if value is an object (not array or null).
- **Parameters:** `val` (any) - Value to check
- **Returns:** Boolean
- **Example:** `OneLib.isobj({a: 1})` // returns true

#### isbool(val)
Check if value is a boolean.
- **Parameters:** `val` (any) - Value to check
- **Returns:** Boolean
- **Example:** `OneLib.isbool(true)` // returns true

#### isfunc(val)
Check if value is a function.
- **Parameters:** `val` (any) - Value to check
- **Returns:** Boolean
- **Example:** `OneLib.isfunc(() => {})` // returns true

#### isempty(val)
Check if value is empty (null, undefined, empty string, array, or object).
- **Parameters:** `val` (any) - Value to check
- **Returns:** Boolean
- **Example:** `OneLib.isempty('')` // returns true

### Text Helpers

#### upper(text)
Convert text to uppercase.
- **Parameters:** `text` (string) - Text to convert
- **Returns:** String
- **Example:** `OneLib.upper('hello')` // returns "HELLO"

#### lower(text)
Convert text to lowercase.
- **Parameters:** `text` (string) - Text to convert
- **Returns:** String
- **Example:** `OneLib.lower('HELLO')` // returns "hello"

#### trim(text)
Remove whitespace from both ends of text.
- **Parameters:** `text` (string) - Text to trim
- **Returns:** String
- **Example:** `OneLib.trim('  hello  ')` // returns "hello"

#### words(text)
Split text into array of words.
- **Parameters:** `text` (string) - Text to split
- **Returns:** Array<string>
- **Example:** `OneLib.words('hello world')` // returns ["hello", "world"]

#### reverse(text)
Reverse the characters in text.
- **Parameters:** `text` (string) - Text to reverse
- **Returns:** String
- **Example:** `OneLib.reverse('hello')` // returns "olleh"

#### slug(text)
Convert text to URL-friendly slug.
- **Parameters:** `text` (string) - Text to convert
- **Returns:** String
- **Example:** `OneLib.slug('Hello World!')` // returns "hello-world"

#### capitalize(text)
Capitalize first letter of text.
- **Parameters:** `text` (string) - Text to capitalize
- **Returns:** String
- **Example:** `OneLib.capitalize('hello')` // returns "Hello"

#### truncate(text, length)
Truncate text to specified length with ellipsis.
- **Parameters:** 
  - `text` (string) - Text to truncate
  - `length` (number, default: 100) - Maximum length
- **Returns:** String
- **Example:** `OneLib.truncate('Long text here', 5)` // returns "Long..."

### Misc Utilities

#### wait(ms)
Wait for specified milliseconds (Promise-based).
- **Parameters:** `ms` (number) - Milliseconds to wait
- **Returns:** Promise<void>
- **Example:** `await OneLib.wait(1000)` // wait 1 second

#### log(...args)
Console.log wrapper.
- **Parameters:** `...args` (any) - Values to log
- **Returns:** undefined
- **Example:** `OneLib.log('Hello', 'World')`

#### pipe(value, ...functions)
Pipe value through series of functions.
- **Parameters:** 
  - `value` (any) - Initial value
  - `...functions` (Function[]) - Functions to apply
- **Returns:** Any
- **Example:** `OneLib.pipe(5, x => x * 2, x => x + 1)` // returns 11

#### debounce(func, delay)
Create debounced version of function.
- **Parameters:** 
  - `func` (Function) - Function to debounce
  - `delay` (number) - Delay in milliseconds
- **Returns:** Function
- **Example:** `const debouncedSave = OneLib.debounce(save, 300)`

#### throttle(func, limit)
Create throttled version of function.
- **Parameters:** 
  - `func` (Function) - Function to throttle
  - `limit` (number) - Time limit in milliseconds
- **Returns:** Function
- **Example:** `const throttledScroll = OneLib.throttle(onScroll, 100)`

## Examples

### DOM Manipulation
```html
<div id="content">Original content</div>
<button id="btn">Click me</button>

<script>
// Change content
OneLib.html('#content', '<h1>New Content</h1>');

// Add click handler
OneLib.on('#btn', 'click', () => {
  OneLib.cls('#content', 'highlight');
});

// Style element
OneLib.css('#content', {
  color: 'blue',
  fontSize: '18px'
});
</script>
```

### Data Processing
```javascript
const numbers = [1, 2, 2, 3, 4, 5, 5];
const unique = OneLib.unique(numbers); // [1, 2, 3, 4, 5]
const average = OneLib.avg(unique); // 3
const chunks = OneLib.chunk(unique, 2); // [[1, 2], [3, 4], [5]]
```

### Async Operations
```javascript
// Fetch data
const users = await OneLib.json('/api/users');

// Save to storage
OneLib.save('users', users);

// Wait and then load
await OneLib.wait(1000);
const savedUsers = OneLib.load('users');
```

## Changelog

### v1.0.0
- Initial release with 50+ utility functions
- DOM manipulation utilities
- Storage helpers
- Math and array utilities
- Date formatting
- Network helpers
- Animation functions
- Type checking utilities
- Text processing functions

## License

MIT License - feel free to use in personal and commercial projects.
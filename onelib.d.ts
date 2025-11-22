declare const OneLib: {
  // DOM Utilities
  select(selector: string): Element | null;
  selectall(selector: string): NodeListOf<Element>;
  html(selector: string | Element): string;
  html(selector: string | Element, content: string): Element;
  text(selector: string | Element): string;
  text(selector: string | Element, content: string): Element;
  cls(selector: string | Element, className: string): Element;
  show(selector: string | Element): Element;
  hide(selector: string | Element): Element;
  toggle(selector: string | Element): Element;
  on(selector: string | Element, event: string, callback: EventListener): Element;
  css(selector: string | Element, styles: Partial<CSSStyleDeclaration>): Element;
  create(tag: string): HTMLElement;
  append(parent: string | Element, child: string | Element): Element;
  remove(selector: string | Element): void;

  // Storage / Data
  save(key: string, value: any): void;
  load(key: string): any;
  clear(): void;
  copy(text: string): Promise<boolean>;

  // Math Helpers
  rand(min?: number, max?: number): number;
  randint(min: number, max: number): number;
  clamp(value: number, min: number, max: number): number;
  avg(array: number[]): number;
  sum(array: number[]): number;
  max(array: number[]): number;
  min(array: number[]): number;
  round(num: number, decimals?: number): number;
  id(): string;
  uuid(): string;

  // Array / Object Helpers
  unique<T>(array: T[]): T[];
  merge<T, U>(obj1: T, obj2: U): T & U;
  clone<T>(obj: T): T;
  sortnum(array: number[]): number[];
  chunk<T>(array: T[], size: number): T[][];
  shuffle<T>(array: T[]): T[];
  flatten<T>(array: any[]): T[];
  pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;

  // Date Helpers
  now(): Date;
  timestamp(): number;
  format(date: Date | string, style?: string): string;
  since(date: Date | string): string;

  // Network Helpers
  get(url: string): Promise<string>;
  post(url: string, data: any): Promise<any>;
  json(url: string): Promise<any>;
  download(url: string, filename: string): void;

  // Animations
  fadein(selector: string | Element, duration?: number): Element;
  fadeout(selector: string | Element, duration?: number): Element;
  move(selector: string | Element, x: number, y: number): Element;
  scale(selector: string | Element, size: number): Element;

  // Type Checking
  isnum(val: any): val is number;
  isstr(val: any): val is string;
  isarr(val: any): val is any[];
  isobj(val: any): val is object;
  isbool(val: any): val is boolean;
  isfunc(val: any): val is Function;
  isempty(val: any): boolean;

  // Text Helpers
  upper(text: string): string;
  lower(text: string): string;
  trim(text: string): string;
  words(text: string): string[];
  reverse(text: string): string;
  slug(text: string): string;
  capitalize(text: string): string;
  truncate(text: string, length?: number): string;

  // Misc Utilities
  wait(ms: number): Promise<void>;
  log(...args: any[]): void;
  pipe<T>(value: T, ...functions: Function[]): any;
  debounce<T extends Function>(func: T, delay: number): T;
  throttle<T extends Function>(func: T, limit: number): T;
};

export default OneLib;

declare global {
  interface Window {
    OneLib: typeof OneLib;
  }
}
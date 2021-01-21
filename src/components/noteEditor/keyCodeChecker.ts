let buffer: string[] = [];
const keys = ["Control", "Shift", "s"];
export const keyCodeChecker = (e: KeyboardEvent) => {
  buffer.push(e.key);

  setTimeout(() => {
    buffer = [];
  }, 300);

  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] !== keys[i]) {
      buffer = [];
      break;
    }
  }

  if (buffer.length === keys.length) {
    if (JSON.stringify(buffer) === JSON.stringify(keys)) {
      buffer = [];
      return true;
    } else {
      buffer = [];
    }
  }
};

let buffer = [];
const keys = [17, 16, 83];
export const keyCodeChecker = (e) => {
  buffer.push(e.keyCode);

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

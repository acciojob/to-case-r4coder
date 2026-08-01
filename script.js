function toCase(text) {
  // Handle empty, null, or undefined input
  if (!text) {
    return "-";
  }

  return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below

// const text = prompt("Enter text:");
alert(toCase(text));
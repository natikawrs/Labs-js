function truncateString(str, length) {
    if (str.length > length) {
      return str.slice(0, length - 1) + "...";
    } else {
      return str;
    }
  }


console.log(truncateString("What I'd like to tell on this topic is:", 20))
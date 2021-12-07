class Formatter {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(word) {
    return word.replace(/[^a-zA-Z0-9-' ]+/g, "");
  }

  static titleize(word) {
    const wordSplit = word.split(" ");
    const wordCap = wordSplit.map((word) => {
      if (
        (word === "the") |
        (word === "a") |
        (word === "an") |
        (word === "but") |
        (word === "of") |
        (word === "and") |
        (word === "for") |
        (word === "at") |
        (word === "by") |
        (word === "from")
      ) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    const capitalFirst =
      wordCap[0].charAt(0).toUpperCase() + wordCap[0].slice(1);

    return capitalFirst + " " + wordCap.slice(1).join(" ");
  }
}

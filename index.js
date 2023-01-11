const quotes = [
  "People will always have opinions about your decision because they're not courageous enough to take action on their opinion.",
  "At the end of the day, let there be no excuses, no explanations, no regrets.",
  "You get in life what you have the courage to ask for.",
  "If you can't you must, and if you must you can.",
  "You must take life the way it comes at you and make the best of it.",
  "There was another life that I might have had, but I am having this one.",
];

const grabRandomQuote = () => {
  const randomNum = Math.floor(Math.random() * 6);
  return quotes[randomNum];
};

const getQuote = (name) => {
  return `Hello ${name}, your random quote is: \n${grabRandomQuote()}`;
};

console.log(getQuote("jarrell"));

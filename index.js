const quotes = [
  "People will always have opinions about your decision because they're not courageous enough to take action on their opinion.",
  "At the end of the day, let there be no excuses, no explanations, no regrets.",
  "You get in life what you have the courage to ask for.",
  "If you can't you must, and if you must you can.",
  "You must take life the way it comes at you and make the best of it.",
  "There was another life that I might have had, but I am having this one.",
];
const names = ["billy", "john", "jill", "jess", "james", "jack", "johan"];
const grabRandomQuote = () => {
  const randomQuote = Math.floor(Math.random() * 6);
  return quotes[randomQuote];
};
const randomName = Math.floor(Math.random() * 7);

const getQuote = (name = names[randomName]) => {
  return `Hello ${name}, your random quote is: \n${grabRandomQuote()}`;
};

console.log(getQuote());

console.clear();

const games = [
  {
    id: 1,
    name: "Barbie Horse Adventure",
    publishingYear: 2003,
    devices: ["Xbox", "PS2"],
    description:
      "Barbie rides a horse, while looking for a flock of other horses that managed to get themselves lost.",
  },
  {
    id: 2,
    name: "If It Moves, Shoot It!",
    publishingYear: 1989,
    devices: ["Amiga", "DOS"],
    description:
      "A top-down shooter, in which killing creatures from the depths of the cosmos is far more appealing than asking them to explain the mysteries of pi.",
  },
  {
    id: 3,
    name: "Attack of the Mutant Camels",
    publishingYear: 1983,
    devices: ["Atari"],
    description:
      "A bunch of enormous yellow camels are making their way to your base. Since you're fond of your base, you must massacre them from a plane.",
  },
  {
    id: 4,
    name: "Frogger: Helmet Chaos",
    publishingYear: 2005,
    devices: ["Nintdendo DS", "PSP"],
    description:
      "You play a frog. Stop a bloke destroying your home by jumping around various landscapes. There's some chaos to be had, but disappointingly not in the anatomical region the title so coyly alludes to.",
  },
  {
    id: 5,
    name: "Billy the Wizard: Rocket Broomstick Racing",
    publishingYear: 2007,
    devices: ["Wii", "PC", "PS2"],
    description:
      "It's exactly as it sounds: you're a wizard that races on a fast broomstick. Extraordinary. Where did they get that idea?",
  },
  {
    id: 6,
    name: "Yes Prime Minister",
    publishingYear: 1987,
    devices: ["Commodore 64", "Amstrad CPC", "ZX Spectrum"],
    description:
      "Tie-in game from the popular BBC political comedy of the same name. You play as Prime Minister of the UK for a week.",
  },
  {
    id: 7,
    name: "How To Be A Complete Bastard",
    publishingYear: 1987,
    devices: ["ZX Spectrum", "Commodore 64", "Amstrad CPC"],
    description:
      "Invade a party for rich folks and demonstrate your boyish skills of being a complete and utter git, by for example loosening the screws on the handles of the disabled toilet.",
  },
  {
    id: 8,
    name: "Princess Tomato in Salad Kingdom",
    publishingYear: 1988,
    devices: ["NES"],
    description:
      "As one Sir Cucumber, you must win the hand of Princess Tomato -- daughter of King Broccoli -- by retrieving the stolen royal Turnip Emblem, in this first-person puzzle-solving adventure game.",
  },
  {
    id: 9,
    name: "Ninjabread Man",
    publishingYear: 2005,
    devices: ["PC", "PS2", "Wii"],
    description:
      "It's a ninja again, but this time it's a gingerbread man who needs to save the world from evil pastries. Oh goody.",
  },
  {
    id: 10,
    name: "Extreme Laser Cats From Jupiter",
    publishingYear: 2042,
    devices: ["DOS", "Mac"],
    description:
      "Have you heard of the Extreme Laser Cats From Jupiter? Of course you have! Unfortunately, they have decided to attack earth. The Apocalypse is upon us - and it's very cute.",
  },
];

// forEach
// Konsumiert eine Callback Function
// ruft diese CB Function mit dem Element auf
// returnt nichts!

const numbers = [1, 2, 3, 4, 5];
games.forEach((game) => {
  console.log(game.name);
});
numbers.forEach((number) => {
  console.log(number * 100);
});

// games.forEach((game) => {
//   const article = document.createElement("article");
//   const h2 = document.createElement("h2");
//   h2.textContent = game.name;
//   article.append(h2);
//   const description = document.createElement("p");
//   description.textContent = game.description;
//   article.append(description);
//   document.body.append(article);
// });

// map
// Konsumiert eine Callback Function
// Die CB Function muss etwas returnen!
// nämlich das neue Element
// map returnt ein neues Array!
// Ursprungsarray bleibt unverändert

const upperCaseNames = games.map((game) => game.name.toUpperCase());
console.log(upperCaseNames);

// filter
// Konsumiert eine Callback Function
// Wenn true: Element wird ins neue Array kopiert - sonst nicht!
// filter returnt ein neues Array (Teilarray des alten)
// Ursprungsarray bleibt unberührt

const gamesBefore2000 = games.filter((game) => game.publishingYear < 2000);
console.log(gamesBefore2000);

// Chaining

const upperCaseNamesBefore2000 = games
  .filter((game) => game.publishingYear < 2000)
  .forEach((game) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.textContent = game.name;
    article.append(h2);
    const description = document.createElement("p");
    description.textContent = game.description;
    article.append(description);
    document.body.append(article);
  });


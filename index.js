#!/usr/bin/env node

import chalk from "chalk";

const main = async () => {
  const args = process.argv.slice(2);

  const getHeroes = async () => {
    const response = await fetch("https://api.opendota.com/api/heroes");
    const data = await response.json();
    return data;
  };

  if (args[0] === "best-hero-to-play") {
    const heroes = await getHeroes();
    const randomHero = Math.floor(Math.random() * heroes.length);
    console.log(
      `You should play with ${chalk.green(heroes[randomHero].localized_name)}`
    );
  }

  if (args[0] === "avoid-hero") {
    const heroes = await getHeroes();
    const randomHero = Math.floor(Math.random() * heroes.length);
    console.log(
      `You should avoid playing with ${chalk.red(
        heroes[randomHero].localized_name
      )} for now`
    );
  }

  if (args[0] === "best-time-to-play") {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const randomDate = new Date(
      today.getTime() + Math.random() * (tomorrow.getTime() - today.getTime())
    );

    console.log(
      chalk.green(`${randomDate.toLocaleString({ language: "br" })}`)
    );
  }

  if (args[0] === "should-i-open-this") {
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      console.log(chalk.red("No, you should not open this shit"));
    } else {
      console.log(chalk.green("Yes, you should open this blessed content"));
    }
  }
};

main();

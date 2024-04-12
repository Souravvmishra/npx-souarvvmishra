
import chalk from "chalk";
import boxen from "boxen";

const options = {
  padding: 1,
  width: 75,
  title: "Hello there!",
  titleAlignment: "center",
  borderStyle: "single",
  borderColor: "#008080",
};

const data = {
  intro: chalk.white.bold(
    "I am Sourav Mishra, your friendly neighborhood coder, focused on helping future developers be better!"
  ),
  work: chalk.white("Co-Founder - ") + chalk.blue("Codestam Technologies"),
  community: chalk.white("Google Developers Group, Jammu"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("souravvmishra"),
  github: chalk.gray("https://github.com/") + chalk.green("souravvmishra"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("souravvmishra"),
  // web: chalk.cyan.underline("https://rohan.sh"),
  labelWork: chalk.bgWhite.black.bold("       Work"),
  labelTwitter: chalk.bgWhite.black.bold("    Twitter"),
  labelGitHub: chalk.bgWhite.black.bold("     GitHub"),
  labelLinkedIn: chalk.bgWhite.black.bold("   LinkedIn"),
  labelYouTube: chalk.bgWhite.black.bold("   YouTube"),
  labelWeb: chalk.bgWhite.black.bold("        Web"),
  labelCommunity: chalk.bgWhite.black.bold("        Community Moderator & Speaker"),
};

const newline = "\n";
const introduction = `${data.intro}`;
const working = `${data.labelWork}     ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const youtubing = `${data.labelYouTube}  ${data.youtube}`;
const webing = `${data.labelWeb}  ${data.web}`;
const communityWork = `${data.labelCommunity}  ${data.community}`;

const output =
  introduction +
  newline +
  newline +
  newline +
  working +
  newline +
  communityWork+
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining ;

console.log(chalk.white(boxen(output, options)));

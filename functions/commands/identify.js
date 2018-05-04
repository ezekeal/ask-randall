const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const magicItems = require('../../magic-items.json');
/**
* /identify
*
*   Identifies items
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/

const itemList = Object.keys(magicItems);

module.exports = (text = '', callback) => {

  if(itemList.includes(text)) {
    const responseText = '*' + text + '*' + '\n' + magicItems[text].content.join('\n');
    callback(null, {
      text: responseText,
      attachments: [
          // You can customize your messages with attachments.
          // See https://api.slack.com/docs/message-attachments for more info.
        ]
    });
  } else {
    callback(null, {
      text: `${text}? That doesn\'t sound like anything to me`,
      attachments: []
    });
  }
};

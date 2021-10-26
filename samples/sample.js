// Sample file to test css
const { os } = require('os')

// Shout out to Better Comments https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
// This is a regular comment
// ! This is an important comment
// * This is a highlighted comment
// ? Is this a question comment?
// TODO: write a todo comment
// // This is a strike comment */
// # This is a pound comment

/** Print a welcome message
 * @param {Object} greeting
 * @returns {Void)}
 */
async function hello(greeting) {
  console.log(`${greeting.salutation}, ${greeting.who}! It is ${greeting.time} 👋`)
  console.log(greeting.aesthetic.join(' '), greeting.bonusCSS)
}

const greeting = {
  salutation: 'Hello',
  time: new Date(),
  'who': os.userInfo().username,
  aesthetic: ['%c', '🕶', '【', "ｖａｐｏｒｗａｖｅ", "ａｅｓｔｈｅｔｉｃ", `】`, "🕶"],
  bonusCSS: ['color: #92f1b8;', 'font-weight: 500', 'text-shadow: 0px 0px 0px #72f1b8, 0 0 1em #72f1b8, 0 0 1em #72f1b8;'],
  nested: {
    hey: 'there',
    anArray: ['oh', 'boy'],
    aLevelFurtherBeyond: {
      viz: 'goku_screaming.gif',
      sound: 'goku_screaming.mp3',
      aLevelFurtherBeyond2: {
        status: 'ssj3',
        aLevelFurtherBeyond3: {
          aLevelFurtherBeyond4: {
            aLevelFurtherBeyond5: {
              status: 'too deep'
            }
          }
        }
      }
    }
  }
};

hello(greeting);
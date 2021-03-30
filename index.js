  const request = require('request')
  const colors = require('colors')

  function post(url, json) {
    const options = {
      url: url,
      json: true,
      body: json
  }; 

  request.post(options, (err, res, body) => {
      if (err) {
          return console.log(err);
      }
      console.log(colors.yellow(`Status: ${res.statusCode}`));
      console.log(colors.green('Sent message as ' + body.author.username + '#' + body.author.discriminator + ' with content: ' + body.content));
  });
  }

  function spam() {
    let token = prompt('Token (MUST BE INSIDE THE SERVER TO SPAM): ')
    let channelid = prompt('Channel ID: ')
    let amount = prompt('Amount of times to spam the message: ')
    let message = prompt('Message to spam:')
    let check = prompt('Is this config ok? (yes / no): ')

    for (let i = 0;i < amount;i++) {
    if (check === 'yes') {
      post('https://discord.com/api/v6/channels/' + channelid + '/messages?token=' + token, {
      "content":message
      })
    } else if (check === 'no') {
      spam()
    } else {
      console.log(colors.red('Invalid response. Code ended.'))
      break
    }
    }
  let go = prompt(colors.yellow('Do you want to make another request? (yes / no): '))
  if (go === 'yes') {
    console.clear()
    spam()
  } else if (go === 'no') {
    console.log(colors.red('Code ended.'))
  } else {
    console.log(colors.red('Invalid response. Code ended.'))
  }
  }

  spam();

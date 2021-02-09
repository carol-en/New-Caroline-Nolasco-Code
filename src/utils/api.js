const contentful = require('contentful')
const defaultConfig = {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  }


// const client = contentful.createClient({
//     space: "6jizbkvr12of",
//     accessToken: "L60lNNHrqGGj8Y3zXd-cnI58eWKKwwcSCxyt1Z9Pm2Q"
//     });



module.exports = {
  createClient (config = defaultConfig) {
    return contentful.createClient({
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CDA_ACCESS_TOKEN
    })
  }
}
// This is the default configuration for the Popcorn Maker server
// You shouldn't edit this file. Instead, look at the README for
// various configuration options

module.exports = {
  // hostname must match the address in your browser's URL bar
  // If it does not, then Persona sign-in will not work
  // Don't add any trailing slashes, just protocol://hostname[:port]
  "hostname": "http://localhost:8888",

  "OPTIMIZE_JS": false,
  "OPTIMIZE_CSS": false,
  "FORCE_SSL": false,
  "DEBUG": true,

  // PORT is the port that the server will bind to
  // PORT is all caps because all the PaaS providers do it this way

  "PORT": 8888,

  "MAKE_ENDPOINT": "http://localhost:5000",

  // make authentication - private and public keys must be generated by the MakeAPI
  "MAKE_PRIVATEKEY": "00000000-0000-0000-000000000000",
  "MAKE_PUBLICKEY": "00000000-0000-0000-000000000000",

  "USER_BAR": "http://localhost:3000",

  "LOGIN_SERVER_URL_WITH_AUTH": "http://testuser:password@localhost:3000",

  "AUDIENCE": "http://localhost:7777",

  "GA_ACCOUNT": "",
  "GA_DOMAIN": "",

  // i18n
  "LANG_MAPPINGS": {
    "en": "en-US",
    "ru": "ru-RU",
    "th": "th-TH"
  },
  "SUPPORTED_LANGS": [
    "en-US",
    "ru-RU",
    "th-TH"
  ],

  "EMBED_HOSTNAME": "",

  "USER_SUBDOMAIN": "",

  "S3_KEY": "",
  "S3_BUCKET": "org.webmadecontent.staging.popcorn",
  "S3_SECRET": "",
  "S3_DOMAIN": "http://localhost:12319",
  "S3_EMULATION": false,

  "MOX_PORT": 12319,

  // API Keys for Media Sync
  "SYNC_SOUNDCLOUD": "",
  "SYNC_FLICKR": "b939e5bd8aa696db965888a31b2f1964",
  // Public API Key
  "SYNC_GIPHY": "dc6zaTOxFJmzC",
  "SYNC_LIMIT": 20,

  "logger" : {
    "format" : "dev"
  },
  "session" : {
    "key": "popcorn.sid",
    "secret": "thisisareallyreallylongsecrettoencryptcookies",
    "cookie": {
      "maxAge": 2419200000,
      "httpOnly": true,
      "secure": false
    },
    "proxy": true
  },
  "staticMiddleware": {
    "maxAge": "0"
  },
  "database": {
    "database": "popcorn",
    "username": null,
    "password": null,
    "options": {
      "logging": false,
      "dialect": "sqlite",
      "storage": "popcorn.sqlite",
      "define": {
        "charset": "utf8",
        "collate": "utf8_general_ci"
      }
    }
  }
};

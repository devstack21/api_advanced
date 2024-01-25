export const CORS_OPTIONS = {"origin":"http://localhost:4000",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 203}

export const PATH_CONFIG_ENV = './config.app/.env'
export const KEY_OBJECT_IGNORE_LOWER =[
    'email',
    'mdp' || 'password'
]
export const TIME_MAX_TOKEN_IS_ACTIVE = 60*60*24*15
export const SALT_ROUNDS = 10


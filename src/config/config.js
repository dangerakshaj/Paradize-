require('dotenv').config();


module.exports = {
    token: 'MTI5MDU3Mjc0MzE5NjE1MTkxMQ.G171Nx.XgERGEs3CiN7bCB1ipB6Ulm2aHnC-DgXy6OkmM',
    clientId: '1273230302822797312',
    guildId: '1106591466651922502',
    youtubeApiKey: process.env.AIzaSyA5h2nPm315aZXn6_y0aUpTh1PquKfa0pM,
    mongoUri: process.env.MONGO_URI,
    spotify: {
        clientId: process.env.8eecc1aa7fb44d38a5a2bd2ea8fdc600,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};

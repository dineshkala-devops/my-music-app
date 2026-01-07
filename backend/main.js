function main(params) {
    const songs = [
        {
            name: "Song A - Happy Melody",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            name: "Song B - Summer Vibes",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            name: "Song C - Night Dreams",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
            name: "Song D - Ocean Waves",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        },
        {
            name: "Song E - Mountain High",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        },
        {
            name: "Song F - City Lights",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        }
    ];
    
    return {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        body: {
            songs: songs
        }
    };
}

module.exports.main = main;

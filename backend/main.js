function main(params) {
    const songs = [
        "Song A - Happy Melody",
        "Song B - Summer Vibes", 
        "Song C - Night Dreams"
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

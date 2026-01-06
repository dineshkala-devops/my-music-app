/**
 * This is an IBM Cloud Function
 * It returns a list of songs
 */

function main(params) {
    // This is our hardcoded list of songs
    const songs = [
        "Song A - Summer Vibes",
        "Song B - Midnight Blues",
        "Song C - Happy Days"
    ];

    // Send the songs back to the frontend
    return {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'  // This lets frontend talk to backend
        },
        statusCode: 200,
        body: {
            songs: songs
        }
    };
}

// This line is required for IBM Cloud Functions
exports.main = main;

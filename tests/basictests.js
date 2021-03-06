var test = require('tape');
var getImagesFromTweet = require('../index');

var testCases = [
  {
    tweet: {
      "text": "Four more years. http:\/\/t.co\/bAJE6Vom",
      "entities": {
        "hashtags": [],
        "symbols": [],
        "urls": [],
        "user_mentions": [],
        "media": [{
          "id": 266031293949698048,
          "id_str": "266031293949698048",
          "indices": [17, 37],
          "media_url": "http:\/\/pbs.twimg.com\/media\/A7EiDWcCYAAZT1D.jpg",
          "media_url_https": "https:\/\/pbs.twimg.com\/media\/A7EiDWcCYAAZT1D.jpg",
          "url": "http:\/\/t.co\/bAJE6Vom",
          "display_url": "pic.twitter.com\/bAJE6Vom",
          "expanded_url": "http:\/\/twitter.com\/BarackObama\/status\/266031293945503744\/photo\/1",
          "type": "photo",
          "sizes": {
            "medium": {
              "w": 600,
              "h": 399,
              "resize": "fit"
            },
            "thumb": {
              "w": 150,
              "h": 150,
              "resize": "crop"
            },
            "small": {
              "w": 340,
              "h": 226,
              "resize": "fit"
            },
            "large": {
              "w": 800,
              "h": 532,
              "resize": "fit"
            }
          }
        }]
      }
    },
    expected: [
      'http:\/\/pbs.twimg.com\/media\/A7EiDWcCYAAZT1D.jpg'
    ]
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Basic test', basicTest);

  function basicTest(t) {
    t.deepEqual(
      getImagesFromTweet(testCase.tweet),
      testCase.expected,
      'Photo mediaURLs are extracted correctly.'
    );
    t.end();
  }
}

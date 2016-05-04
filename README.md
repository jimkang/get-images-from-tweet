get-images-from-tweet
==================

Gets images out of a Tweet object. (Tweets, the things from Twitter, that is.)

Installation
------------

    npm install get-images-from-tweet

Usage
-----

    var getImagesFromTweet = require('get-images-from-tweet');

    var tweet = {
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
    };

    console.log(getImagesFromTweet(tweet));

Output:

    [
      'http://pbs.twimg.com/media/A7EiDWcCYAAZT1D.jpg'
    ]

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

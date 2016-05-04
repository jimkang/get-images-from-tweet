var pathExists = require('object-path-exists');
var pluck = require('lodash.pluck');

function getImagesFromTweet(tweet) {
  var mediaURLs = [];

  if (pathExists(tweet, ['entities', 'media'])) {
    var media = tweet.entities.media;
    if (media.length > 0) {
      var photos =  media.filter(isPhoto);
      mediaURLs = pluck(photos, 'media_url');
    }
  }

  return mediaURLs;
}

function isPhoto(medium) {
  return medium.type === 'photo';
}

module.exports = getImagesFromTweet;

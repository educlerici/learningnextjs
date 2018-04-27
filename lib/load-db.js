import 'fetch-everywhere';

export default async () => {
  const parseString = require('react-native-xml2js').parseString;

    fetch('http://www.elesquiu.com/rss/feed.html?r=10')
        .then(response => response.text())
        .then((response) => {
            parseString(response, function (err, result) {
                console.log(response)
            });
        }).catch((err) => {
            console.log('fetch', err)
        })
}
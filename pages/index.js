import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import 'fetch-everywhere';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = ({ stories }) => (
  <Layout>
    <h1>Hacker News - Latest</h1>
    <ul>
      {stories.map(story => (
        <PostLink
          key={story.id}
          id={story.id}
          title={story.title}
        />
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
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

export default Index

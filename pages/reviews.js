import Layout from '../layouts/Main'
import InstaCard from '../components/InstaCard'
import data from '../data.json'

export default () => (
  <Layout>{data.reviews.map(review => <InstaCard {...review} />)}</Layout>
)

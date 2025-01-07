import { GraphQLClient } from 'graphql-request';

const HASHNODE_API = 'https://gql.hashnode.com/';
const client = new GraphQLClient(HASHNODE_API);

const query = `
  query GetUserArticles($host: String!) {
    publication(host: $host) {
      posts(first: 6) {
        edges {
          node {
            title
            brief
            slug
            publishedAt
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;

export async function getHashnodeArticles() {
  try {
    const variables = { host: 'medhansh.hashnode.dev' };
    const data = await client.request(query, variables);
    return data.publication.posts.edges.map(({ node }: any) => ({
      title: node.title,
      brief: node.brief,
      slug: node.slug,
      dateAdded: node.publishedAt,
      coverImage: node.coverImage?.url
    }));
  } catch (error) {
    console.error('Error fetching Hashnode articles:', error);
    return [];
  }
}
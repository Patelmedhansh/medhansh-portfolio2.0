import { GraphQLClient } from 'graphql-request';

interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
}

interface HashnodeResponse {
  publication: {
    posts: {
      edges: Array<{
        node: HashnodePost;
      }>;
    };
  };
}

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
    const data = await client.request<HashnodeResponse>(query, variables);
    return data.publication.posts.edges.map(({ node }) => ({
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
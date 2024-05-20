// index.js

const fetch = require('node-fetch');

const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';

const query = `
  query {
    tokens {
      id
      symbol
      name
      decimals
    }
  }
`;

const fetchGraphQLData = async (query) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  return response.json();
};

const runQuery = async () => {
  try {
    const data = await fetchGraphQLData(query);
    console.log('Subgraph data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

runQuery();

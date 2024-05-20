### README.md

# Graph Query Repository

This repository includes a basic Node.js application that uses plain HTTP requests to query a subgraph that is deployed to The Graph.
With the API you can make HTTP requests directly. Here's how you can set up such a project.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Query-code-sample/graph-query-repo.git
   cd graph-query-repo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Update the `API_URL` variable in `index.js` with your API key and subgraph ID:
   ```javascript
   const API_URL = 'https://gateway.thegraph.com/api/<API_KEY>/subgraphs/id/<SUBGRAPH_ID>';
   ```

4. Run the script:
   ```sh
   node index.js
   ```

## Dependencies

- `node-fetch`: A lightweight module that brings `window.fetch` to Node.js.

## Example Query

The example query in this repository fetches token data including ID, symbol, name, and decimals.


### Conclusion
This setup provides a simple Node.js application that queries a subgraph on The Graph using plain HTTP requests with the `fetch` API. This approach does not rely on any specific GraphQL client library, making it lightweight and flexible.


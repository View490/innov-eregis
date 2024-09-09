# Minor Hotels E-Registration

This project is a [Next.js](https://nextjs.org) application that interacts with the Oracle API to retrieve data. The application first obtains an access token from the Oracle API and then uses this token to read data.

## Features

- **Oracle API Authentication**: Securely obtain an access token from Oracle API.
- **Data Retrieval**: Use the access token to fetch data from Oracle API.
- **Next.js Application**: Built on the fast and scalable Next.js framework.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) version 14.x or later.
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for dependency management.

## Setup

1. Install the required dependencies:

   Using npm:
    ```bash
    npm install
    ```

   Using yarn:
    ```bash
    yarn install
    ```

2. Configure your environment variables:

   Create a `.env.local` file in the root of your project and add the necessary environment variables for accessing the Oracle API:

    ```bash
    ORACLE_API_URL=<oracle-api-url>
    ORACLE_CLIENT_ID=<your-client-id>
    ORACLE_CLIENT_SECRET=<your-client-secret>
    ORACLE_AUTH_URL=<oracle-auth-url>
    ```

## Running the Project

Start the development server:

- Using npm:
    ```bash
    npm run dev
    ```

- Using yarn:
    ```bash
    yarn dev
    ```

- Using pnpm:
    ```bash
    pnpm dev
    ```

- Using bun:
    ```bash
    bun dev
    ```

Once the server is running, you can access the application at `http://localhost:3000`.

## Accessing Oracle API

The project uses Oracle's OAuth 2.0 authentication system to obtain an access token. After the token is received, it is used to make authenticated requests to the Oracle API to read the necessary data.

Make sure to update the API endpoints and authentication details according to Oracle's documentation and your specific needs.

## Building for Production

To build the application for production, run the following command:

```bash
npm run build

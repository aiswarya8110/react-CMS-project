import { createClient } from 'contentful';

const client = createClient({
    space: 'h6oj66qgv8gb',
    environment: 'master',
    accessToken: process.env.ACCESS_TOKEN
});

export default client;
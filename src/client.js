import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'ffexcly8',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
})

export default client;
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    dataset: `${process.env.REACT_APP_API_DATASET}`,
    apiVersion: `2021-06-01`,
    useCdn: `${process.env.REACT_APP_API_VERSION}`,
})
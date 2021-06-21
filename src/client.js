import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: `${process.env.REACT_APP_API_PROJECT_ID}`,
    dataset: `${process.env.REACT_APP_API_DATASET}`,
    apiVersion: `${process.env.REACT_APP_API_VERSION}`,
    useCdn: `${process.env.REACT_APP_USE_CDN}`,
})
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "blwwtoyc",
  dataset: "production",
  apiVersion: `2021-06-01`,
  useCdn: true,
});

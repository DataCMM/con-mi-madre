// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import additionalBoardMembers from './additionalBoardMembers'
import blockContent from './blockContent'
import events from './events'
import centralTexasStaff from './centralTexasStaff'
import corporate_sponsors from './corporateSponsors'
import executiveCommittee from './executiveCommittee'
import fortWorthStaff from './fortWorthStaff'
import foundations from './foundations'
import schoolPartners from './schoolPartners'
import adminStaff from './adminStaff'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    additionalBoardMembers,
    adminStaff,
    centralTexasStaff,
    corporate_sponsors,
    events,
    executiveCommittee,
    fortWorthStaff,
    foundations,
    schoolPartners,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})

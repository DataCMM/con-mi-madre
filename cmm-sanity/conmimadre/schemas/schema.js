// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import additionalBoardMembers from './additionalBoardMembers'
import annualReport from './annualReport'
import events from './events'
import corporate_sponsors from './corporateSponsors'
import executiveCommittee from './executiveCommittee'
import foundations from './foundations'
import schoolPartners from './schoolPartners'
import statements from './statements'
import adminStaff from './adminStaff'
import internships from './internships'
import testimonials from './testimonials'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    additionalBoardMembers,
    adminStaff,
    annualReport,
    corporate_sponsors,
    events,
    executiveCommittee,
    foundations,
    schoolPartners,
    statements,
    internships,
    testimonials,
  ]),
})

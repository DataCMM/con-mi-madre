// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import additionalBoardMembers from './additionalBoardMembers'
import annualReport from './annualReport'
import corporate_sponsors from './corporateSponsors'
import executiveCommittee from './executiveCommittee'
import foundations from './foundations'
import schoolPartners from './schoolPartners'
import statements from './statements'
import adminStaff from './adminStaff'
import internships from './internships'
import testimonials from './testimonials'
import getInvolved from './getInvolved'
import blueAwards from './blueAwardsBox'
import whiteAwards from './whiteAwardsBox'
import media from './media'
import awardsCarousel from './awardsCarousel'
import centralResources from './centralResources'
import fortWorthResources from './fortWorthResources'
import fallCalendar from './fallCalendar'
import springCalendar from './springCalendar'
import annualInvitation from './annualInvitation'
import cmmAward from './cmmAward'
import corazon from './corazon'
import mariposa from './mariposa'
import eventNotification from './eventNotification'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    additionalBoardMembers,
    adminStaff,
    annualReport,
    corporate_sponsors,
    executiveCommittee,
    foundations,
    schoolPartners,
    statements,
    internships,
    testimonials,
    getInvolved,
    blueAwards,
    whiteAwards,
    media,
    awardsCarousel,
    centralResources,
    fortWorthResources,
    fallCalendar,
    springCalendar,
    annualInvitation,
    cmmAward,
    corazon,
    mariposa,
    eventNotification
  ]),
})

import { Compass, Calculator, LineChart, Share2, Palette, Megaphone, Cake } from 'lucide-react'
import oruLogo from '../assets/oru-bite-logo.png'
import jjDentalLogo from '../assets/jj_dental.png'
import smDentalLogo from '../assets/S.M_dentalclinic.png'
import smileShineLogo from '../assets/smile-shine-dentalcare.png'
export const clients = [
{
 id: 'choose-chew', name: 'Choose & Chew Restaurant', logo: null,
 industry: 'Hospitality & Food Service', focus: 'Brand Scaling, Financial Optimization & Digital Growth',
 overview: 'Partnered with Choose & Chew Restaurant to overhaul business strategy, optimize operational margins, and drive customer acquisition through structured digital campaigns.',
 initial: [
  'Opportunity to improve market positioning and establish a structured scaling strategy.',
  'Need to review operational overheads and food costs to protect profit margins.',
  'Potential to improve peak-hour order planning and menu profitability.',
  'Opportunity to strengthen local visibility and customer acquisition through digital marketing.',
  'Need to review marketing performance and return on ad spend (ROAS).'],
 modules: [
  { icon: Compass, title: 'Strategy Building & Execution', points: ['Developed targeted market positioning.', 'Created scaling frameworks suited to local food service operations.'] },
  { icon: Calculator, title: 'Cost Analysis & Profit Optimization', points: ['Evaluated operational overheads and food costs.', 'Reviewed digital marketing return on ad spend.', 'Focused on protecting profit margins while supporting sales growth.'] },
  { icon: LineChart, title: 'Business Growth Factor Analysis', points: ['Identified revenue drivers.', 'Explored peak-hour order scaling.', 'Evaluated menu engineering opportunities.', 'Considered local foot-traffic strategies.'] },
  { icon: Share2, title: 'Meta Business Management', points: ['Managed Meta Business Suite setup.', 'Supported targeted Facebook and Instagram campaigns.', 'Focused on localized social media customer acquisition.'] },
 ],
 snapshots: [
  { label: 'Dashboard Sales Snapshot 1', value: 1075618, image: 'ccd1' },
  { label: 'Dashboard Sales Snapshot 2', value: 1113325, image: 'ccd3' },
  { label: 'Dashboard Sales Snapshot 3', value: 1221412, image: 'ccd2' },
 ],
 conclusion: 'The engagement integrates business planning, cost analysis, revenue opportunities and digital customer acquisition into one growth approach. No specific improvement in sales, profit, customer numbers or ROAS is claimed without supporting data.',
},
{
 id: 'oru-bite', name: 'Oru Bite', logo: oruLogo,
 industry: 'Food & Beverage / Bakery & Cafe', focus: 'Social Media Management, Meta Business Suite & Hyper-Local Brand Engagement',
 overview: 'Handled end-to-end digital brand strategy, social media operations, and targeted Meta ad campaigns for Oru Bite to elevate visual brand presence, promote signature menu items such as walnut brownies, and scale local customer acquisition along the Kumarakovil-Nagercoil corridor.',
 initial: [
  'Strengthen visual brand presence across social media.',
  'Establish a consistent brand identity and tone.',
  'Improve local engagement with food enthusiasts and college students.',
  'Promote signature products and seasonal offers.',
  'Support local customer acquisition along the Kumarakovil-Nagercoil corridor.'],
 modules: [
  { icon: Palette, title: 'Social Media Management & Visual Content Strategy', points: ['Planned Instagram and Facebook content.', 'Developed custom graphics and product showcases.', 'Created compelling story captions.', 'Established a consistent visual identity and brand tone.'] },
  { icon: Megaphone, title: 'Meta Business Suite & Targeted Ad Campaigns', points: ['Set up and managed Meta ad campaigns.', 'Targeted relevant age groups, food enthusiasts and college student audiences locally.', 'Reviewed click-through rates and optimized ad spend.', 'Supported campaigns for walk-ins, takeaways and online order enquiries.'] },
  { icon: Cake, title: 'Local Market Positioning & Menu Promotions', points: ['Promoted signature bakery items such as walnut brownies.', 'Designed seasonal combo and limited-time offer campaigns.', 'Focused on local visibility, impulse purchases and repeat visits.'] },
 ],
 activities: ['Social media brand presentation', 'Consistent content strategy', 'Targeted digital advertising', 'Signature product promotions', 'Hyper-local customer acquisition efforts'],
 activityItems: [
  {
   title: 'Social media brand presentation',
   type: 'Brand Identity & Visuals',
   image: 'oru-brand-presentation.jpg',
   alt: 'Oru Bite brand identity presentation with custom takeaway packaging, branded coffee cup and menu card',
   description: 'Custom-designed visual brand identity and premium packaging presentation.',
  },
  {
   title: 'Consistent content strategy',
   type: 'Content Curation',
   image: 'oru-content-strategy.jpg',
   alt: 'Oru Bite curated social media grid and editorial content strategy planning',
   description: 'Aesthetic Instagram grid and cohesive storytelling for food lovers.',
  },
  {
   title: 'Targeted digital advertising',
   type: 'Paid Ad Campaign',
   image: 'oru-targeted-ads.jpg',
   alt: 'Meta ad promotional creative featuring cafe combos for college students and foodies',
   description: 'High-converting promotional creatives designed for hyper-local ad sets.',
  },
  {
   title: 'Signature product promotions',
   type: 'Food Photography',
   image: 'oru-walnut-brownies.jpg',
   alt: 'Artisan dark chocolate walnut brownies food photography on rustic plate with cocoa dusting',
   description: 'Professional food photography showcasing signature walnut brownies and treats.',
  },
  {
   title: 'Hyper-local customer acquisition efforts',
   type: 'Local Growth & Walk-ins',
   image: 'oru-local-acquisition.jpg',
   alt: 'Oru Bite welcoming cafe storefront entrance along Kumarakovil-Nagercoil corridor',
   description: 'Hyper-local engagement driving walk-ins and takeaway traffic along Kumarakovil-Nagercoil corridor.',
  },
 ],
 placeholders: ['Social media reach', 'Engagement rate', 'Customer enquiries', 'Advertising CTR'],
 dashboardSnapshots: [
  {
   label: 'Social Media Reach',
   sublabel: 'Illustrative Analytics Overview (Sample Data)',
   image: 'oru-dash-reach.jpg',
   alt: 'Social media reach analytics dashboard showing monthly impressions and audience growth trends',
   metricNote: 'Audience reach and impression trendlines (Sample illustrative preview)',
  },
  {
   label: 'Engagement Rate',
   sublabel: 'Illustrative Engagement Metrics (Sample Data)',
   image: 'oru-dash-engagement.svg',
   alt: 'Audience engagement rate dashboard showing interaction distribution and peak activity hours',
   metricNote: 'Audience interaction breakdown (Sample illustrative preview)',
  },
  {
   label: 'Customer Enquiries',
   sublabel: 'Illustrative CRM & Enquiries (Sample Data)',
   image: 'oru-dash-enquiries.svg',
   alt: 'Customer enquiries and direct message order queries management dashboard',
   metricNote: 'Direct message inquiry and order tracking (Sample illustrative preview)',
  },
  {
   label: 'Advertising CTR',
   sublabel: 'Illustrative Meta Ads Performance (Sample Data)',
   image: 'oru-dash-ctr.svg',
   alt: 'Advertising click-through rate CTR performance curve and link clicks dashboard',
   metricNote: 'Ad campaign CTR trendline and link click performance (Sample illustrative preview)',
  },
 ],
 snapshotNote: 'Dashboard screenshots and preview data shown above are illustrative sample representations of analytics layouts. Verified client figures are subject to signed reporting.',
 conclusion: "Content strategy, targeted advertising and localized promotions work together to strengthen Oru Bite's digital brand presence and support customer acquisition.",
},
{
 id: 'jj-dental', name: 'JJ Dental', logo: jjDentalLogo,
 industry: 'Healthcare & Dental Services', focus: 'Digital Brand Growth & Patient Acquisition',
 overview: 'Client information will be added soon.',
 initial: [
  'Initial business details to be added.',
 ],
 modules: [
  { icon: Compass, title: 'Strategy Overview', points: ['Strategy details will be added soon.'] },
 ],
 activities: ['Details coming soon'],
 placeholders: ['Client updates will be added later'],
 conclusion: 'Case study details are pending.',
},
{
 id: 'sm-dental', name: 'SM Dental Clinic', logo: smDentalLogo,
 industry: 'Healthcare & Dental Services', focus: 'Digital Brand Growth & Patient Acquisition',
 overview: 'Client information will be added soon.',
 initial: [
  'Initial business details to be added.',
 ],
 modules: [
  { icon: Compass, title: 'Strategy Overview', points: ['Strategy details will be added soon.'] },
 ],
 activities: ['Details coming soon'],
 placeholders: ['Client updates will be added later'],
 conclusion: 'Case study details are pending.',
},
{
 id: 'smile-shine-dental', name: 'Smile and Shine Dental Care', logo: smileShineLogo,
 industry: 'Healthcare & Dental Services', focus: 'Digital Brand Growth & Patient Acquisition',
 overview: 'Client information will be added soon.',
 initial: [
  'Initial business details to be added.',
 ],
 modules: [
  { icon: Compass, title: 'Strategy Overview', points: ['Strategy details will be added soon.'] },
 ],
 activities: ['Details coming soon'],
 placeholders: ['Client updates will be added later'],
 conclusion: 'Case study details are pending.',
},
]
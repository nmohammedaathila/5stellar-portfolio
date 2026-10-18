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
 statusTitle: 'Revenue Growth Within Two Months of Consulting Engagement',
 statusDescription: [
  "5 Stellar began its Business Growth & Revenue Consulting engagement with Oru Bite in August. Using unique social media visibility and content strategies, Oru Bite's monthly revenue increased from ₹43,354 in July (pre-engagement) to ₹75,900 in September.",
  "This represents a 75% increase in monthly revenue from July to September, with August serving as the first month of the consulting engagement.",
 ],
 snapshots: [
  {
   label: 'Dashboard Revenue Snapshot 1',
   value: 75900,
   sublabel: 'Dashboard-reported September monthly revenue',
   image: 'obd1',
   alt: 'Oru Bite monthly revenue chart showing growth from ₹43,354 in July to ₹75,900 in September',
  },
  {
   label: 'Dashboard Revenue Snapshot 2',
   value: 32546,
   sublabel: 'Dashboard-reported net revenue increase (+75%)',
   image: 'obd2',
   alt: 'Oru Bite revenue growth timeline showing 75% increase from July to September',
  },
 ],
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
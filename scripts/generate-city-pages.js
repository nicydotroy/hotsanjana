const fs = require('fs');
const path = require('path');

const slugs = [
  'delhi','bangalore','chennai','hyderabad','kolkata','pune','ahmedabad','jaipur','lucknow',
  'surat','kanpur','nagpur','indore','bhopal','visakhapatnam','patna','vadodara','agra',
  'nashik','meerut','rajkot','varanasi','amritsar','chandigarh','coimbatore','kochi','goa',
  'mysuru','thiruvananthapuram','ludhiana','madurai','jodhpur','raipur','dehradun','ranchi',
  'guwahati','shimla','bhubaneswar','vijaywada','mangaluru','hubli-dharwad','jabalpur',
  'thirupur','aligarh','solapur','tiruchirappalli','guntur','noida','gurugram','faridabad',
  'allahabad','howrah'
];

let created = 0;
slugs.forEach(slug => {
  // Convert slug to PascalCase component name, strip non-alpha
  const cityVar = slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
    .replace(/[^a-zA-Z]/g, '');

  const dir = path.join('app', 'escorts', slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const content = `import type { Metadata } from 'next'
import { getMetroCityBySlug } from '@/data/metro-cities'
import MetroCityEscortPage, { generateMetroCityMetadata } from '@/components/MetroCityEscortPage'
import { notFound } from 'next/navigation'

const SLUG = '${slug}'

export async function generateMetadata(): Promise<Metadata> {
  const city = getMetroCityBySlug(SLUG)
  if (!city) return { title: 'Not Found' }
  return generateMetroCityMetadata(city)
}

export default function ${cityVar}EscortsPage() {
  const city = getMetroCityBySlug(SLUG)
  if (!city) notFound()
  return <MetroCityEscortPage city={city} />
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  created++;
});

console.log('Created:', created, 'pages');

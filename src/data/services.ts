import { Flame, ClipboardList, Boxes, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import steelStructure from '../assets/steel.jpg'
import workersSteel from '../assets/workers-steel.jpg'
import warehouse from '../assets/warehouse.jpg'
import warehouseAisle from '../assets/warehouse-aisle.jpg'
import containerPort from '../assets/container-port.jpg'
import cargoShip from '../assets/cargo-ship.jpg'
import truck from '../assets/truck.jpg'
import aircraft from '../assets/aircraft.jpg'

// One item within a service group (a solution, category, capability, benefit).
export type ServiceItem = { title: string; body?: string }

// A titled block on a service page. `cards` renders title + body tiles;
// `list` renders a compact checklist of titles.
export type ServiceGroup = {
  heading: string
  layout: 'cards' | 'list'
  items: ServiceItem[]
}

export type Service = {
  slug: string
  icon: LucideIcon
  label: string // short label used in the strip, nav and footer
  title: string // page heading
  tagline: string // one-liner shown under the title
  intro: string // opening paragraph on the detail page
  heroImage: string
  gallery: string[]
  groups: ServiceGroup[]
}

// The 4 core service lines. Content mirrors the Shando Nigeria corporate
// profile — each entry also powers its own /services/:slug detail page.
export const services: Service[] = [
  {
    slug: 'energy-services-support',
    icon: Flame,
    label: 'Energy Services Support',
    title: 'Energy Services Support',
    tagline:
      'Procurement and operational support across the upstream, midstream, and downstream energy industry.',
    intro:
      'We provide procurement and operational support services to companies operating across the upstream, midstream, and downstream segments of the energy industry — helping clients keep operations running efficiently and reliably.',
    heroImage: steelStructure,
    gallery: [workersSteel, containerPort],
    groups: [
      {
        heading: 'Services',
        layout: 'list',
        items: [
          { title: 'Energy Sector Procurement' },
          { title: 'Vendor Sourcing & Management' },
          { title: 'Equipment Supply Coordination' },
          { title: 'Materials Procurement' },
          { title: 'Contract Support Services' },
          { title: 'Project Procurement Management' },
        ],
      },
      {
        heading: 'Sectors We Support',
        layout: 'cards',
        items: [
          {
            title: 'Upstream Operations',
            body: 'Sourcing and supply support for exploration and production activities.',
          },
          {
            title: 'Midstream Operations',
            body: 'Procurement coordination for processing, storage, and transport.',
          },
          {
            title: 'Downstream Operations',
            body: 'Materials and equipment supply for refining and distribution.',
          },
          {
            title: 'Power & Energy Infrastructure',
            body: 'Support for power generation companies and energy projects.',
          },
          {
            title: 'Marine & Offshore',
            body: 'Logistics and procurement support for offshore operations.',
          },
        ],
      },
    ],
  },
  {
    slug: 'procurement-services',
    icon: ClipboardList,
    label: 'Procurement Services',
    title: 'Procurement Services',
    tagline:
      'Strategic sourcing engineered for cost efficiency, quality assurance, and timely delivery.',
    intro:
      'Our procurement solutions are designed to ensure cost efficiency, quality assurance, and timely delivery — from strategic sourcing through vendor qualification, tendering, and contract procurement.',
    heroImage: warehouse,
    gallery: [warehouseAisle, truck],
    groups: [
      {
        heading: 'Capabilities',
        layout: 'list',
        items: [
          { title: 'Strategic Sourcing' },
          { title: 'Vendor Identification & Qualification' },
          { title: 'International Procurement' },
          { title: 'Tender Management' },
          { title: 'Bid Support Services' },
          { title: 'Contract Procurement' },
          { title: 'Industrial Materials Sourcing' },
          { title: 'OEM Sourcing & Coordination' },
        ],
      },
      {
        heading: 'Why It Matters',
        layout: 'cards',
        items: [
          {
            title: 'Cost Efficiency',
            body: 'Optimized processes and smart sourcing that maximize value and savings.',
          },
          {
            title: 'Quality Assurance',
            body: 'We source only products that meet applicable standards and specifications.',
          },
          {
            title: 'Timely Delivery',
            body: 'Efficient systems that keep procurement aligned with project schedules.',
          },
          {
            title: 'Global Supplier Network',
            body: 'Access to trusted OEMs, manufacturers, and distributors worldwide.',
          },
        ],
      },
    ],
  },
  {
    slug: 'supply-chain-management',
    icon: Boxes,
    label: 'Supply Chain Management',
    title: 'Supply Chain Management',
    tagline:
      'End-to-end supply chain solutions that improve operational performance and business continuity.',
    intro:
      'We provide end-to-end supply chain solutions that improve operational performance and business continuity — from planning and forecasting through inventory, warehousing, and optimization.',
    heroImage: warehouseAisle,
    gallery: [warehouse, containerPort],
    groups: [
      {
        heading: 'Services',
        layout: 'list',
        items: [
          { title: 'Supply Chain Planning' },
          { title: 'Inventory Management' },
          { title: 'Vendor Management' },
          { title: 'Procurement Outsourcing' },
          { title: 'Warehousing Coordination' },
          { title: 'Materials Management' },
          { title: 'Demand Forecasting' },
          { title: 'Supply Chain Optimization' },
        ],
      },
      {
        heading: 'Outcomes',
        layout: 'cards',
        items: [
          {
            title: 'Improved Visibility',
            body: 'Integrated systems that give you a clear view across the supply chain.',
          },
          {
            title: 'Operational Efficiency',
            body: 'Streamlined processes that reduce waste and improve performance.',
          },
          {
            title: 'Business Continuity',
            body: 'Dependable planning that keeps materials and operations flowing.',
          },
          {
            title: 'Optimized Delivery',
            body: 'Better forecasting and coordination for on-time delivery performance.',
          },
        ],
      },
    ],
  },
  {
    slug: 'logistics-coordination',
    icon: Truck,
    label: 'Logistics Coordination',
    title: 'Logistics Coordination',
    tagline:
      'Smooth movement of goods and materials across local and international supply chains.',
    intro:
      'Our logistics support services ensure the smooth movement of goods and materials across local and international supply chains — including freight, import/export support, customs documentation, and project logistics.',
    heroImage: truck,
    gallery: [cargoShip, containerPort, aircraft],
    groups: [
      {
        heading: 'Services',
        layout: 'list',
        items: [
          { title: 'Freight Coordination' },
          { title: 'Import & Export Support' },
          { title: 'Customs Documentation Support' },
          { title: 'Delivery Tracking' },
          { title: 'Project Logistics Planning' },
          { title: 'Vendor Logistics Coordination' },
        ],
      },
      {
        heading: 'Coverage',
        layout: 'cards',
        items: [
          {
            title: 'Local Distribution',
            body: 'Reliable movement of goods and materials across Nigeria.',
          },
          {
            title: 'International Freight',
            body: 'Coordinated sea and air freight for imports and exports.',
          },
          {
            title: 'Customs & Documentation',
            body: 'Support with clearing and the paperwork that keeps cargo moving.',
          },
          {
            title: 'Project Logistics',
            body: 'End-to-end logistics planning for projects of any size.',
          },
        ],
      },
    ],
  },
]

// Quick lookup by slug for the detail route.
export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug)

# Cloud Patrons Info Solutions

![App Preview](https://imgix.cosmicjs.com/33ff1070-5fd6-11f1-b25a-95d4ebff12bd-autopilot-photo-1487412720507-e7ab37603c6f-1780550902510.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive corporate website for **Cloud Patrons Info Solutions** — a leading IT services and cloud management company. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com), the site showcases services, team members, case studies, and client testimonials with a clean, professional design.

## Features

- 🏠 **Dynamic Homepage** — Hero, featured services, case studies, testimonials, and team highlights
- 🛠️ **Services** — Detailed pages with key features, industries served, and rich descriptions
- 👥 **Team Members** — Photos, bios, areas of expertise, and LinkedIn links
- 📊 **Case Studies** — Challenge / Solution / Results breakdown with related services
- 💬 **Testimonials** — Client quotes with star ratings and company details
- 📱 **Fully Responsive** — Beautiful on mobile, tablet, and desktop
- ⚡ **Server Components** — Fast, secure data fetching directly from Cosmic
- 🎨 **Modern UI** — Tailwind CSS with a refined cloud/tech aesthetic

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a210c8fd66dd9646b9df305&clone_repository=6a210db8d66dd9646b9df33a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: Cloud Patrons Info Solutions is a leading IT services and cloud management company specializing in Managed Cloud Services, DevOps, Cybersecurity, IT Infrastructure Support, PCI DSS Compliance, NOC Monitoring, and Helpdesk Solutions. Serving clients across fintech, logistics, software, and other industries, the company delivers 24×7×365 support to help organizations optimize performance, strengthen security, and maintain business continuity."

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: Cloud Patrons Info Solutions is a leading IT services and cloud management company specializing in Managed Cloud Services, DevOps, Cybersecurity, IT Infrastructure Support, PCI DSS Compliance, NOC Monitoring, and Helpdesk Solutions. Serving clients across fintech, logistics, software, and other industries, the company delivers 24×7×365 support to help organizations optimize performance, strengthen security, and maintain business continuity.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([docs](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing the required object types

### Installation

```bash
bun install
```

Set up your environment variables (these are provided automatically in the Cosmic dashboard):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single case study with related services
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from four object types:

- **services** — `service_name`, `icon_emoji`, `summary`, `description`, `key_features`, `industries_served`, `featured_image`
- **team-members** — `name`, `job_title`, `photo`, `bio`, `areas_of_expertise`, `linkedin_url`
- **case-studies** — `project_title`, `client_name`, `industry`, `challenge`, `solution`, `results`, `related_services`, `featured_image`
- **testimonials** — `quote`, `client_name`, `client_title`, `company`, `client_photo`, `star_rating`

All data fetching happens in Server Components using the [Cosmic SDK](https://www.cosmicjs.com/docs) with the `depth` parameter to resolve connected objects.

## Deployment Options

- **Vercel** — Connect your repo, add the environment variables, and deploy.
- **Netlify** — Set the build command to `bun run build` and add environment variables.

For production, set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform's dashboard.

<!-- README_END -->
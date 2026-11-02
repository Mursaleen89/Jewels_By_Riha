# Jewels by Riha

An editorial jewelry storefront built with Next.js, React, TypeScript, and Tailwind CSS. The modular UI keeps the shop, product details, bag, checkout, and studio dashboard as separate components and routes.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install` and `npm run dev`.
3. Visit `http://localhost:3000`.

The shop and bag work without a backend. The checkout records the last submitted order in local browser storage in this mode. For shared product and order data, image uploads, and studio authentication, create a Supabase project, copy `.env.example` to `.env.local`, add the project URL and anon key, then run `supabase/schema.sql` in the Supabase SQL editor. Create the store owner's account in Supabase Authentication. Product images should use the public `product-images` bucket created in the schema.

The studio dashboard is at `/admin`. It uses Supabase Auth and the browser-safe anon key; database access is guarded by row-level security policies in the supplied schema. Set `app_metadata.store_role` to `admin` for the store owner's Auth user using a trusted server-side/admin process. Never put a Supabase service-role key in client code. Customer accounts use Supabase email/password Auth when configured.

## Payments and fulfillment

Checkout supports cash on delivery and bank transfer and stores orders for fulfillment. No payment processor credentials were supplied, so card processing is not enabled. Connect a payment provider through a server-side checkout endpoint and verify its webhook before marking orders paid. Shipping and tax amounts are starter defaults and should be configured for the store's actual market before launch.

## Production setup notes

- Configure the production domain in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `public/robots.txt`.
- Replace sample collection copy, review quotes, and catalog photos with approved brand assets and genuine customer reviews.
- The seeded display collection is in `src/lib/products.ts`; database catalog records are managed from the dashboard after Supabase is configured.

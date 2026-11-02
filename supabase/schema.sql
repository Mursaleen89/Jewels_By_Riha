create extension if not exists "pgcrypto";
create table if not exists public.products (
 id uuid primary key default gen_random_uuid(), name text not null, category text not null,
 price numeric(10,2) not null check(price >= 0), description text not null,
 image text not null default '', images jsonb not null default '[]'::jsonb, sizes jsonb not null default '[]'::jsonb,
 created_at timestamptz not null default now()
);
create table if not exists public.orders (
 id uuid primary key default gen_random_uuid(), customer_name text not null, email text not null,
 phone text not null, address text not null, payment_method text not null,
 items jsonb not null, total numeric(10,2) not null check(total >= 0),
 status text not null default 'pending', created_at timestamptz not null default now()
);
alter table public.products enable row level security;
alter table public.orders enable row level security;
create or replace function public.is_store_admin() returns boolean language sql stable as $$
 select coalesce(auth.jwt()->'app_metadata'->>'store_role'='admin', false);
$$;
create policy "Products are publicly readable" on public.products for select using (true);
create policy "Only store admins manage products" on public.products for all to authenticated using (public.is_store_admin()) with check (public.is_store_admin());
create policy "Customers can place orders" on public.orders for insert with check (true);
create policy "Customers can view their own orders" on public.orders for select to authenticated using (email = (auth.jwt()->>'email'));
create policy "Only store admins view orders" on public.orders for select to authenticated using (public.is_store_admin());
create policy "Only store admins update orders" on public.orders for update to authenticated using (public.is_store_admin()) with check (public.is_store_admin());
insert into storage.buckets (id,name,public) values ('product-images','product-images',true) on conflict (id) do nothing;
create policy "Product images are public" on storage.objects for select using (bucket_id='product-images');
create policy "Store admins upload product images" on storage.objects for insert to authenticated with check (bucket_id='product-images' and public.is_store_admin());
create policy "Store admins update product images" on storage.objects for update to authenticated using (bucket_id='product-images' and public.is_store_admin());

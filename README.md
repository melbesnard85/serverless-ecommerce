# Elliot's ZEIT Next.js Boilerplate Ecommerce website

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/helloiamelliot/zeit-checkout-boilerplate)

## Features

- Static SSR products, collections, products pages, collections pages and all pages by language
- Scores GOOD on a11y / Performance / SEO
- Easy to customize
- Nice project structure
- Tablet & mobile friendly
- Continuous deployment with [ZEIT Now](https://zeit.co)

## Structure

```bash
.
├── src
│   ├── components          # Components
│   │   │── cart              # Components used on the cart page
│   │   │── checkout          # Components used on the checkout page
│   │   │── common            # Common components
│   │   │── listing           # Components used on the landing page
│   │   │── product           # Components used on the product page
│   │   └── theme             # Header, Footer, global style and theme config
│   ├── helpers             # Helpers functions
│   ├── hoc                 # Higher order components
│   ├── lang                # i18n json files
│   ├── pages               # Pages
│   ├── providers           # Providers
│   ├── queries             # GraphQL queries we run during build time
│   ├── reducers            # Reducers
│   ├── scripts             # Scripts meant to be executed before building the website
│   └── pages               # Pages
└── public/.well-known/    # Where you'd put the Apple verification file
```

## Prerequisites

[Elliot store](https://admin-dev.elliot.store/)

> Start by creating a store at Elliot and add few products to it

[Yarn](https://yarnpkg.com/en/) or [NPM](https://nodejs.org/)

1- Create dev environment file from template `./.env.development.tempate` by running `cp .env.development.template .env.development`
2- Create prod environment file from template `./.env.production.tempate` by running `cp .env.production.template .env.production`
3- Use [Elliot CLI](https://github.com/helloiamelliot/elliot-cli) to get: - ELLIOT_API_KEY - ELLIOT_STORE_FRONT_ID - ELLIOT_DOMAIN_ID - ELLIOT_STORE_FRONT_NAME
3.1- Or get them at [Elliot Dashboard](https://admin-dev.elliot.store/)
4- Get your Google Places API key from: [Google](https://developers.google.com/places/web-service/get-api-key)
5- To enable Apple Pay, you will have to get the Apple verification file, follow this [Guide](https://github.com/helloiamelliot/zeit-checkout-boilerplate#Apple)
6-

```bash
npm i && npm run dev
```

When deploying on [ZEIT Now](https://zeit.co), you will have to set the [Now secrets](https://zeit.co/docs/v2/build-step#adding-secrets), so make sure to add them

## Built with

- Next js
- React
- VSCode
- And these useful of JavaScript libraries [package.json](package.json)

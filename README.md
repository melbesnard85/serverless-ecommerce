# Elliot's Vercel Next.js Ecommerce Boilerplate

![ELLIOT X VERCEL](elliot-vercel.jpg)

## Features

- Deploy, sell and fulfill in seconds
- Fully localized: multi-currency and language, duties and taxes (DDP - Delivered Duty Paid)
- Native cross border fulfillment: packing, shipping and return labels, commercial invoices and custom declarations forms
- Instant global payments: Apple, Google, Ali and WeChat Pay, plus all major credit cards and leading payment options (Klarna, iDEAL)
- Static SSR for collections, products and all simple pages, in 100+ languages
- Fast and high performing (90%+ across a11y, Performance, and SEO)
- Fully customizable
- Mobile-first and fully responsive
- Cutting-edge project structure and architecture (GraphQL, Next.js and serverless)
- Continuous deployment with [Vercel](https://vercel.co)

## Prerequisites

[Create an Elliot account](https://elliot.store/)

> Start by creating a store and add a few products to it!

[Yarn](https://yarnpkg.com/en/) or [NPM](https://nodejs.org/)

### Online

1. Login on [Elliot](https://elliot.store)
2. Choose a domain space
3. Click on "Get Headless"
4. Follow the onboarding and you will be good to go!

> To enable Apple Pay, you will have to get the Apple verification file and place it under `/public/.well-known/`

> Follow this [Guide](https://github.com/helloiamelliot/elliot-serverless-ecommerce#enabling-digital-wallets) to get the Apple verification file

> You might have to upgrade your Vercel account in order to prolonge the serverless function running time to go over 10 seconds in order to enable all the benefits of SSG on run time

[Video tutorial](https://youtu.be/SJ92bp1y1I0)

### Locally

#### Using the CLI

1. Install the [Elliot CLI](https://github.com/helloiamelliot/elliot-cli) running

   ```bash
   npm i -g elliot-cli
   ```

   Or

   ```bash
   yarn global add elliot-cli
   ```

2. Login to Elliot via the CLI running

   ```bash
   elliot login
   ```

3. Get your domain and experience by running

   ```bash
   elliot deploy
   ```

4. Choose your domain ID and experience and it will automatically clone this boilerplate and handle everything for you

   > It will create `.env.development` file with the right env variables keys//values, delete any files unrelated and install the dependencies used.

5. To enable Apple Pay, you will have to get the Apple verification file and place it under `/public/.well-known/`

   > Follow this [Guide](https://github.com/helloiamelliot/elliot-serverless-ecommerce#enabling-digital-wallets) to get the Apple verification file

6. Run the following commands to start the server locally on port `3000`:

   ```bash
   yarn run dev
   ```

7. When deploying to [Vercel](https://vercel.co), you will have to set the [Now secrets](https://vercel.co/docs/v2/build-step#adding-secrets), so ensure that they've been added:

   ```bash
   now secrets add base_url <your domain name>
   now secrets add elliot_env_variables <your Elliot env variable>
   now --prod
   ```

   > You can get these values from your `.env.development` file

## Custom theme

You can easily customize the theme by changing the values on the theme config [here](https://github.com/helloiamelliot/elliot-serverless-ecommerce/blob/master/src/components/theme/index.js)

## Core Team

If you're new and need some guidance feel free reach out to any of our core team members:

- [Franco Arza](https://github.com/arzafran): `@arzafran`
- [Ismail Ghallou](https://github.com/smakosh): `@smakosh`
- [Omoefe Dukuye](https://github.com/un-tethered): `@un-tethered`

## Structure

```bash
.
├── src
│   ├── assets              # Assets used including the default thumbnail of the website
│   ├── components          # Components
│   │   │── cart              # Components used on the cart page
│   │   │── checkout          # Components used on the checkout page
│   │   │── common            # Common components
│   │   │── listing           # Components used on the landing page
│   │   │── product           # Components used on the product page
│   │   │── shipping          # Components used on the checkout page
│   │   └── theme             # Header, Footer, global style and theme config
│   ├── config              # Config variables
│   ├── helpers             # Helpers functions
│   │   │── buildtime         # queries run on build time
│   │   │── constants         # constants
│   │   │── i18n              # functions to get browser's locale and anything related to i18n
│   │   │── payment           # payment logic
│   │   │── runtime           # queries run on run time
│   │   │── shipping          # shipping logic
│   │   └── ...               # 3 files, alert out of stock, attributes and isEmpty without lodash
│   ├── hoc                 # Higher order components
│   ├── hooks               # Custom hooks
│   ├── lang                # i18n json files
│   ├── pages               # Pages
│   │   │── [lang]            # To have a page for each language supported
│   │   │   │── collection            # Collection page
│   │   │   │   └── [slug]
│   │   │   │── product               # Product page
│   │   │   │   └── [slug]
│   │   │   │── about                 # About page
│   │   │   │── cart                  # Cart page
│   │   │   │── checkout              # Checkout page
│   │   │   │── failed-order          # Failed order page
│   │   │   │── faqs                  # Faqs page
│   │   │   │── index                 # Home page
│   │   │   │── privacy-policy        # Privacy policy page
│   │   │   │── return-policy         # Return policy page
│   │   │   │── successful-order      # About page
│   │   │   └── terms-and-conditions  # Terms and conditions page
│   │   │── _app
│   │   │── _document
│   │   │── _error
│   │   │── product
│   │   │── shipping
│   │   └── _error
│   ├── providers           # Providers
│   ├── queries             # GraphQL queries we run during build time
│   ├── reducers            # Reducers
│   └── scripts             # Scripts meant to be executed before building the website
└── public/.well-known/    # Where you'd put the Apple verification file
```

## Built with

- Next.js
- React
- VSCode
- And these useful JavaScript libraries [package.json](package.json)

## Want to contribute?

Want to invest some time in building the future of global commerce? Email us at devs@elliot.store.

If you have discovered a 🐜 or have a feature suggestion, feel free to create an issue on Github.

## Enabling Digital Wallets

To enable wallets such as Apple Pay, your Vercel package will need a verification file from Elliot.

To receive that verification file, and be added to our Slack, email our [Partnerships team](mailto:devs@elliot.store).

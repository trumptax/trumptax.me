# trumptax.me

This website is an attempt to visualize how much U.S. taxpayers are forking
over to support Donald Trump's extravagant lifestyle.

There are many things we could be using this money for (social security,
social programs, infrastructure improvements, etc), but instead we're paying
for security at a private residence and extravagant vacations. Not cool.

## Contributing

### Install locally for development

This is a client side JavaScript thingy. It uses node, npm, and webpack for compilation and building.

```sh
# clone the trumptax.me:
git clone https://github.com/trumptax/trumptax.me.git

# navigate into the project directory
cd trumptax.me

# install dependencies (make sure node 5+ and npm 3+ are installed), then:
npm install

# start the dev server:
npm start
```

Open up the local page in your web browser at http://localhost:9000/webpack-dev-server/

### Add line items and adjust the calculations

Take a look in `js/index.js` – it should be pretty self-explanatory.

### Not a coder? Suggest new tax payer costs associated with Trump's lifestyle

Just open up an issue with a link to your source and how you think the value should be included (line item, ongoing, etc).

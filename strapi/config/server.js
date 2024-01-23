module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["074a7a645237e0c43ab74fd048891cf802bbe4b990c7e3521f78ebef6e056ce0460230afbbe537db4e4a0ca0c5d32a5bb3ce9f7577d28977654d59da68fbe1f891000dfdb280bfa1ab0cf1bcc74ef1b337db0a6b9a8cc29e181b82625ee8a0ee8a849027523beaec263385d819574fb74f9f89e0c26f3cad8a986bb04d7db486"],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

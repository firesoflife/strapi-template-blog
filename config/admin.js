module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '250ad1c1c4f434ef544b1333229d34ee'),
  },
});

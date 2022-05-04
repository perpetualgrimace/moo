module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/assets",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/tools",
        destination: "/assets",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};

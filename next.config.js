module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/getting-started",
        permanent: true,
      },
    ];
  },
};

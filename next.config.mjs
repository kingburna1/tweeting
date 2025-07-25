/** @type {import('next').NextConfig} */
const nextConfig = {
    
    webpack: (config, { isServer }) => {
        console.log("Webpack entries:", Object.keys(config.entry));
        return config;
      }

    // future: {
    //     webpack5: true,
    //   },
};

   
  
export default nextConfig;

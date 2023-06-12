/** @type {import('next').NextConfig} */
const nextConfig = {

// içi komple silinebilir 
    reactStrictMode:true,

    experimental:{
        appDir:true
    },
    images:{
        domains: ['upload.wikimedia.org', 'lh3.googleusercontent.com']
      }
    
}

module.exports = nextConfig

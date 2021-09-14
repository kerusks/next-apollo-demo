const securityHeaders = [{
  key: "X-XSS-Protection",
  value: "1; mode=block"
},
{
  key: "X-Frame-Options",
  value: "SAMEORIGIN"
},
{
  key: "X-Content-Type-Options",
  value: "nosniff"
},
{
  key: "Referrer-Policy",
  value: "origin-when-cross-origin"
},
{
  key: "Content-Security-Policy",
  value: "frame-ancestors 'self';"
}
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
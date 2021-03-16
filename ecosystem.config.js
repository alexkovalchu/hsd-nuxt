module.exports = {
  apps: [
    {
      name: 'hsd-nuxt',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        PORT: '3000',
      },
      env_production: {
        PORT: '3000',
      },
    },
  ],
}

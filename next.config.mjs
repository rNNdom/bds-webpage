// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     turbo: {
//       rules: {
//         '*.svg': {
//           loaders: ['@svgr/webpack'],
//           as: '*.js',
//         },
//       },
//     },
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         and: [/\.(css|scss)$/],
//       },
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[hash].[ext]',
//             outputPath: 'static/media/backgrounds/',

//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// export default nextConfig;

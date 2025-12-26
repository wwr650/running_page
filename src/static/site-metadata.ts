interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://wwr650.github.io/running_page',
  logo: 'https://pub-21bfc399998f49b3be629ce080154177.r2.dev/favicon.ico',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://wwr650.github.io',
    },
    {
      name: 'About',
      url: 'https://github.com/wwr650/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;

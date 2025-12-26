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
  logo: 'https://xiaowang2004.xyz/assets/img/favicons/apple-touch-icon.png',
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

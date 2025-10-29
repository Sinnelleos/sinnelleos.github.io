// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-the-catcher-in-the-rye-my-thoughts",
        
          title: "The Catcher in the Rye, my thoughts",
        
        description: "My impressions after reading &quot;The Catcher in the Rye&quot; by J.D. Salinger.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/catcher-in-the-rye-thoughts/";
          
        },
      },{id: "post-exploración-de-la-patagonia-sur-i-my-thoughts",
        
          title: "Exploración de la Patagonia sur I, my thoughts",
        
        description: "My impressions after reading &quot;Exploración de la Patagonia sur I&quot; by Francisco P. Moreno.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/exploracion-patagonia-1-thoughts/";
          
        },
      },{id: "books-the-catcher-in-the-rye",
          title: 'The Catcher in the Rye',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/catcher-in-the-rye/";
            },},{id: "books-at-the-existentialist-café",
          title: 'At the Existentialist Café',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/existentialist-cafe/";
            },},{id: "books-exploración-de-la-patagonia-sur-i",
          title: 'Exploración de la Patagonia sur I',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/exploracion-patagonia-1/";
            },},{id: "books-the-ghost-in-the-machine",
          title: 'The Ghost in the Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ghost-in-the-machine/";
            },},{id: "books-the-influence-of-sea-power-upon-history-1660-1783",
          title: 'The Influence of Sea Power upon History, 1660-1783',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sea-power-history/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/179577675898159105", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%69%6E%6E%65%6C%6C%65%6F%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/sinnelleos", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

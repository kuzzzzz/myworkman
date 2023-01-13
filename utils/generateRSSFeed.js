import fs from "fs";
import RSS from "rss";


export default async function generateRssFeed() {
  const site_url = "localhost:3000";
  const allPosts = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {},
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {},
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ];

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
  };

  const feed = new RSS(feedOptions);
   allPosts.map((post) => {
     feed.item({
       title: post.title,
       description: post.description,
       url: `${site_url}/shows/${post.slug}`,
       date: post.date,
     });
   });

 fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));

}

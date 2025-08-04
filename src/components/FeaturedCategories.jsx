import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 3,
    title: "Bracelets ˚⊹♡",
    imageUrl: "https://scontent.flhe3-1.fna.fbcdn.net/v/t1.15752-9/525726381_1903376620457972_1981382405673860219_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=HHitoNNiSx8Q7kNvwFm60lb&_nc_oc=AdmvGNueyih2qgo-h18PlK4WwG7Yeb8biBa1DYdeaK2e5LLFUcaBsaCmUD2RokdQIMQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-1.fna&oh=03_Q7cD3AEovTQi9Gs8lBlXHeWytzhLLjL8sMyDcNmAxktKEiKyCw&oe=68B8492F",
    link: "Bracelets"
  },
        {
    id: 5,
    title: "Necklaces ｡°✩",
    imageUrl:"https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/525345605_741309368892040_9071009789739616947_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=S1CdiutR2eAQ7kNvwHDktrO&_nc_oc=AdmHGDc4hCzG8R-Ex2iC7TDk5jyWBefkZWAZsKq6dLAxRd1FatpRSe13fROEMrSCh9E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AHeho76gethz1XA5nqtKgayGXGQhNJDYI3wkSdlL-q__g&oe=68B81BC7",
     link: "Necklaces"
  },
  {
    id: 1,
    title: "charms ⋆｡𖦹°",
    imageUrl: "https://scontent.flhe7-1.fna.fbcdn.net/v/t1.15752-9/525385164_2353479705054305_896651680661581963_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=1u22rtT0O4sQ7kNvwHj5PfJ&_nc_oc=Adkr3oqJvwMQBHwC3-dGpaVQ8DBkyru_yM3rxK263y1oBJ8O33saQX_rlE0HbyFaPds&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-1.fna&oh=03_Q7cD3AEHj16_Qaslsy1LKX2SbYtDEbW8weaPbK5pbF_Oy0Bt_Q&oe=68B84416",
      link: "charms",
  },


  //   {
  //   id: 4,
  //   title: "Bookmarks",
  //   imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/520429125_1334742338219253_2531984894124566733_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j7XYMWWmVY8Q7kNvwFYLOQX&_nc_oc=Adkef7qEPDIiflArvyMlAj0FTg2JoPnp6bRd6DV5GSZcJB7m97b8m8ZRWL8id8lVe1k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wF-rY8Fqy79pbeR3ML53F8zqAW-4GruhgPAjdrVNB5Twg&oe=68AC16BF"
  // },
      {
    id: 2,
    title: "Earings ˚⋆𐙚｡",
    imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/525024338_1482983156032925_1031801619945981844_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gCzZVOGknIYQ7kNvwGUI9I0&_nc_oc=AdkRCI12kIGTek7SuSoVWGqhcZ7AAT3CxK_mL46urtlDnn-8dooGBYRSwNLebYw7fVM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD3AFJ8bfb5p0IrO4eRIVWzfYGBt4ieSuPzYdaFRu1gXKnqw&oe=68B81C7A",
      link: "Earings"
  },

        {
    id: 5,
    title: "Bags ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/525031772_1459471468574303_3780443272747306948_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CroguHdkfGMQ7kNvwFGsgvx&_nc_oc=Adnu_cI8CTYuzpw0_oiOELDfmtsYG0NcdFJs0Vp7yVtILEqpJojwS704OSsCw3ponOc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD3AG9eA0ZIBJgR-EPEFQPOsh6VlbTqLe-5AtlEIV_lJIfOQ&oe=68B84190",
     link: "Bags"
  },
          {
    id: 5,
    title: "Rings ⋆⭒˚.⋆",
    imageUrl:"https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/527585629_1256178492658187_2432738701847868178_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=538zYwAIuSoQ7kNvwGFIbQn&_nc_oc=AdnhmGWOZILruwgZmTv--43gkIy8NLgyyzabvcfUEr8h6xH3_fvFxWvT6h9Nu3TGHec&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD3AG9Ic7ZJs88oAKy4W_SQ6E-MMLfMGaqpfwqdvX9qelh_g&oe=68B82C4C",
     link: "Rings"
  },
  //       {
  //   id: 6,
  //   title: "Bag charms",
  //   imageUrl: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.15752-9/520244288_1267810474939004_9048492148598199566_n.png?stp=dst-png_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=neIk5TZGFm4Q7kNvwEuXfQ_&_nc_oc=AdmxJ4KDwZ-uqPdqouvocGIJ_PMCJuOMaF7ERpOXqSlLAudbRPv9J7oqkY8r3siKLZI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe3-2.fna&oh=03_Q7cD2wFMPcWh2mt2rXhc_FNIMeleWIzjCbZQawAV-wDep1F7MQ&oe=68A70F62"
  // },

];

function FeaturedCategories() {
  return (
<div>
  <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Featured Categories
  </h2>

  <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
    {categories.map(category => (
      <Link
        to={`/products?category=${encodeURIComponent(category.link)}`}
        key={category.id}
        className="flex flex-col gap-2 group bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
      >
        <div
          className="w-full aspect-[1/1] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <p className="text-[#141414] text-base font-medium leading-normal text-center px-2 pb-3">
          {category.title}
        </p>
      </Link>
    ))}
  </div>
</div>

  );
}

export default FeaturedCategories;

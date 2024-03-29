import { createSlice } from '@reduxjs/toolkit'


const productData = [
    {
      id: "topcloth_1",
      type: "topclothes",
      name: "Top Cloth 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./topcloth1_show.jpg",
      imgSrc_png: "./topcloth1.png",
    },
    {
      id: "topcloth_2",
      type: "topclothes",
      name: "Top Cloth 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./topcloth2_show.jpg",
      imgSrc_png: "./topcloth2.png",
    },
    {
      id: "topcloth_3",
      type: "topclothes",
      name: "Top Cloth 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./topcloth3_show.jpg",
      imgSrc_png: "./topcloth3.png",
    },
    {
      id: "topcloth_4",
      type: "topclothes",
      name: "Top Cloth 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./topcloth4_show.jpg",
      imgSrc_png: "./topcloth4.png",
    },
    {
      id: "topcloth_5",
      type: "topclothes",
      name: "Top Cloth 5",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./topcloth5_show.jpg",
      imgSrc_png: "./topcloth5.png",
    },
    {
      id: "topcloth_6",
      type: "topclothes",
      name: "Top Cloth ",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./topcloth6_show.jpg",
      imgSrc_png: "./topcloth6.png",
    },
    {
      id: "botcloth_1",
      type: "botclothes",
      name: "Bot Cloth 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./botcloth1_show.jpg",
      imgSrc_png: "./botcloth1.png",
    },
    {
      id: "botcloth_2",
      type: "botclothes",
      name: "Bot Cloth 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./botcloth2_show.jpg",
      imgSrc_png: "./botcloth2.png",
    },
    {
      id: "botcloth_3",
      type: "botclothes",
      name: "Bot Cloth 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./botcloth3_show.jpg",
      imgSrc_png: "./botcloth3.png",
    },
    {
      id: "botcloth_4",
      type: "botclothes",
      name: "Bot Cloth 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./botcloth4_show.jpg",
      imgSrc_png: "./botcloth4.png",
    },
    {
      id: "botcloth_5",
      type: "botclothes",
      name: "Bot Cloth 5",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./botcloth5_show.jpg",
      imgSrc_png: "./botcloth5.png",
    },
    {
      id: "shoes_1",
      type: "shoes",
      name: "Shoes 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./shoes1_show.jpg",
      imgSrc_png: "./shoes1.png",
    },
    {
      id: "shoes_2",
      type: "shoes",
      name: "Shoes 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./shoes2_show.jpg",
      imgSrc_png: "./shoes2.png",
    },
    {
      id: "shoes_3",
      type: "shoes",
      name: "Shoes 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./shoes3_show.jpg",
      imgSrc_png: "./shoes3.png",
    },
    {
      id: "shoes_4",
      type: "shoes",
      name: "Shoes 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./shoes4_show.jpg",
      imgSrc_png: "./shoes4.png",
    },
    {
      id: "shoes_5",
      type: "shoes",
      name: "Shoes 5",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./shoes5_show.jpg",
      imgSrc_png: "./shoes5.png",
    },
    {
      id: "handbag_1",
      type: "handbags",
      name: "Handbag 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./handbag1_show.jpg",
      imgSrc_png: "./handbag1.png",
    },
    {
      id: "handbag_2",
      type: "handbags",
      name: "Handbag 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./handbag2_show.jpg",
      imgSrc_png: "./handbag2.png",
    },
    {
      id: "handbag_3",
      type: "handbags",
      name: "Handbag 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./handbag3_show.jpg",
      imgSrc_png: "./handbag3.png",
    },
    {
      id: "necklace_1",
      type: "necklaces",
      name: "Necklace 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./necklace1_show.jpg",
      imgSrc_png: "./necklace1.png",
    },
    {
      id: "necklace_2",
      type: "necklaces",
      name: "Necklace 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./necklace2_show.jpg",
      imgSrc_png: "./necklace2.png",
    },
    {
      id: "necklace_3",
      type: "necklaces",
      name: "Necklace 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./necklace3_show.jpg",
      imgSrc_png: "./necklace3.png",
    },
    {
      id: "hairstyle_1",
      type: "hairstyle",
      name: "Hairstyle 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./hairstyle1_show.jpg",
      imgSrc_png: "./hairstyle1.png",
    },
    {
      id: "hairstyle_2",
      type: "hairstyle",
      name: "Hairstyle 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./hairstyle2_show.jpg",
      imgSrc_png: "./hairstyle2.png",
    },
    {
      id: "hairstyle_3",
      type: "hairstyle",
      name: "Hairstyle 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./hairstyle3_show.jpg",
      imgSrc_png: "./hairstyle3.png",
    },
    {
      id: "background_1",
      type: "background",
      name: "Background 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./background1_show.jpg",
      imgSrc_png: "./background1.jpg",
    },
    {
      id: "background_2",
      type: "background",
      name: "Background 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./background2_show.jpg",
      imgSrc_png: "./background2.jpg",
    },
    {
      id: "background_3",
      type: "background",
      name: "Background 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./background3_show.jpg",
      imgSrc_png: "./background3.jpg",
    },
    {
      id: "background_4",
      type: "background",
      name: "Background 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./background4_show.jpg",
      imgSrc_png: "./background4.jpg",
    },
  ];

const categoriesData = [
    { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
    { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
    { tabName: "tabShoes", showName: "Giày dép", type: "shoes" },
    { tabName: "tabHandBags", showName: "Túi xách", type: "handbags" },
    {
      tabName: "tabNecklaces",
      showName: "Dây chuyền",
      type: "necklaces",
    },
    { tabName: "tabHairStyle", showName: "Kiểu tóc", type: "hairstyle" },
    { tabName: "tabBackground", showName: "Nền", type: "background" },
]

const initialState = {
    productData,
    categoriesData,
    chooseCategory: 'topclothes',
    wearClothes: {},
}

const dressingRoomSlice = createSlice({
  name: 'dressingRoomSlice',
  initialState,
  reducers: {
    chosseClothesType: (state,action) =>{
        state.chooseCategory = action.payload
    },
    getCloth: (state,action) =>{
      state.wearClothes[action.payload.type] = action.payload.img
    }
  }
});

export const {chosseClothesType,getCloth} = dressingRoomSlice.actions

export const dressingRoomReducer = dressingRoomSlice.reducer
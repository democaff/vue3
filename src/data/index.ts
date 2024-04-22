interface Imenu {
  key: string;
  name: string;
  icon?: any;
}
interface InavList {
  name: string;
  menus: Imenu[];
}

import { Planet, Music, VideoOne, Fm } from "@icon-park/vue-next";

export const useMenu = () => {
  const menus: InavList[] = [
    {
      name: "Vue3基础",
      menus: [
        {
          name: "props",
          key: "discover",
          icon: Planet, // 使用组件对象，而非字符串
        },
        {
          name: "自定义事件",
          key: "music",
          icon: Music, // 同上
        },
        {
          name: "Mitt",
          key: "video",
          icon: VideoOne, // 同上
        },
        {
          name: "V-model",
          key: "dj",
          icon: Fm, // 同上
        },
      ],
    },
    {
      name: "我的音乐",
      menus: [
        {
          name: "本地音乐",
          key: "localMusic",
          icon: Music, // 同上
        },
      ],
    },
  ];

  return menus;
};

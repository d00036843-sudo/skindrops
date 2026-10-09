const SKINS = [
  {id:1,name:"Karambit | Fade",short:"Fade",price:18500,cat:"knives",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlYG0kfbwNoTdn2xZ_Isn3uyTpN7zjlHt-ENsZjumcoCUJAZqaV_QqVa9xL3thsC-tZyYznIypGB8sly_Gx3i"},
  {id:2,name:"Karambit | Doppler",short:"Doppler",price:12500,cat:"knives",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7j--YXygED6qUI9am_1IteTIwQ6M13S_gfoyefpgpXqtZSbyCdivnYq5ynfyUPhhgYMMLJI3Aal3g"},
  {id:3,name:"Karambit | Tiger Tooth",short:"Tiger Tooth",price:9800,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY60g_7zNqnumXlQ5sJ0teXI8oThxg2yrUJvZWqicYLBe1c_ZgnY-Vi6w7jvhcS1vJyfnXJluCkk5X7bnR2pwUYb2myqBHU"},
  {id:4,name:"Karambit | Marble Fade",short:"Marble Fade",price:14000,cat:"knives",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20mvbmMbfUqW1Q7MBOhuDG_Zi73g3i_UQ-Mjz7ddKccQ44aVGD_1W8wenphMS07snJyHtj7nUm4X7aywv3309PGbb8_A"},
  {id:5,name:"Karambit | Slaughter",short:"Slaughter",price:7500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2Ibrum25V4dB8xOjF9Irw31Cy8kdqNmDwI4XGIAA6ZFjVrlPvwr_ngMW5uc_NyXA2vnE8pSGKqodykhQ"},
  {id:6,name:"Karambit | Crimson Web",short:"Crimson Web",price:6000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITck29Y_cg_3bjCpd_3iwDtqRFrYW2lcdSTJlVoY1qF-VPsleu7h5XuucucnXow6D5iuyhqD-gTcw"},
  {id:7,name:"Karambit | Case Hardened",short:"Case Hardened",price:5500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_um25V4dB8xO-WrY7z2Ffs_RI_amDyJdCTdw45ZA2C-Fi9lObsgJPt6ZrMzXJjvSA8pSGK2tpG8Vg"},
  {id:8,name:"Karambit | Lore",short:"Lore",price:11000,cat:"knives",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJl5W0nPbmMrbummRD7fp8j-3I4IG7jlHjqURuNTv6LYTBelI-ZFjS81W7l7_ogMK7vprLn3JivnMk5yuMzQv3308VwVZ0eg"},
  {id:9,name:"Karambit | Autotronic",short:"Autotronic",price:8000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJk5O0nPbmMrbul35F59FjhefI9rP4jVC9vh5yMTinJdCSc1JrZwvYq1S6xu_t0Z-16pvOmnY1syEg5XzVzkCzgxkYO_sv26JSMSS8Jw"},
  {id:10,name:"Karambit | Gamma Doppler",short:"Gamma Doppler",price:13000,cat:"knives",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20kPb5PrrukmRB-Ml0mNbR_Y3mjQWLpxo7Oy3tcIeUJABrMw7Xq1O_xOjmgsW4tZ-fzSRmuCVzsXrazhy1hR8aOrFpg-veFwszX91FHg"},
  {id:11,name:"Karambit | Night",short:"Night",price:3500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8xOqR8I-l2AKy-kZoMTqgcIacIw9tZ1qG_gPtwe_m0JG_6JTKnXVk6yY8pSGKagmpe8M"},
  {id:12,name:"Karambit | Blue Steel",short:"Blue Steel",price:4000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8xOrHpois2Fbs-RU4MTz2d4KUcFVtYF7V_gS6x7y80Z-1tJjByXcyuSM8pSGKCJVi5TQ"},
  {id:13,name:"Butterfly Knife | Fade",short:"Fade",price:16000,cat:"knives",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NE_3erHotSg2wbn-0tkZ2r3d4aUcwE4N1HR_QS_xe7sjZPv7ZzMwHVi7D5iuyh9aKz8BA"},
  {id:14,name:"Butterfly Knife | Doppler",short:"Doppler",price:14000,cat:"knives",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPP7I6vdk3lu-M1wmeySyoD8j1yg5UVoMGzwJdPDcwE4YV6Dq1Xtk-bohJC4up3NzXE1sydwsHvenka_iR9SLrs4QYialh4"},
  {id:15,name:"Butterfly Knife | Slaughter",short:"Slaughter",price:9000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWZU7Mxkh6fHodX23FW1rxBuMTvwLNWdcgE-NA7W_FG6yOrn1Me-vJnOzyFnuyYn-z-DyEinUkqn"},
  {id:16,name:"Butterfly Knife | Tiger Tooth",short:"Tiger Tooth",price:11000,cat:"knives",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GFqOP9NL7DqWRD6ct2j9bN_Iv9nBrm8xdlYmGgJ4XEegM8aAzX-AK9xu_s18O_6cmazHIw7nJ35y3YmxLmn1gSOVFuzwR4"},
  {id:17,name:"Butterfly Knife | Marble Fade",short:"Marble Fade",price:13000,cat:"knives",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPr1Ibndk1RX6cF0teXI8oThxlG1rRA5Z2rzdtfHeldqZ13U-QO-w-jth8C4upzOnyFguSUq4XndyUepwUYb00RQWkk"},
  {id:18,name:"Butterfly Knife | Lore",short:"Lore",price:10000,cat:"knives",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4OeqPXhJ6_UhG1d8fp9hfvEyoHwjF2hpl1sZGj0LdLDcAM-MwvU_AS-xLzp0Z-1v8icn3UwvikhsymMnxPjgxBIcKUx0itzAnCZ"},
  {id:19,name:"M9 Bayonet | Fade",short:"Fade",price:12000,cat:"knives",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lxLnFoNygiwfnqUNla2ihJ4XGclNqZ17U_Vm7yO7v1MPpu5mYzHBr6CI8pSGKferYZ_4"},
  {id:20,name:"M9 Bayonet | Doppler",short:"Doppler",price:10000,cat:"knives",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEobP5gVO8v11qZGilItfGe1Q_YwmG8wC9wrrojJG9v53LwCM1vHF04nndzBTigE4ecKUx0lKv9IQ3"},
  {id:21,name:"M9 Bayonet | Tiger Tooth",short:"Tiger Tooth",price:8500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmcjgOrzUhFRe-sR_jez--YXygED6_0Y-Ym-icoORcVA9NFuF81W2k7i-g5G96ZucyXViuCEh7XuOnkPjiAYMMLKWpdxQng"},
  {id:22,name:"M9 Bayonet | Marble Fade",short:"Marble Fade",price:11000,cat:"knives",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Kmsj5MqnTmm5u7sR1j9bN_Iv9nBrs_0A-MWynIYXBJAJqY1iC-QLowefujcXtvJSYwHpmvnR3tHreyka_n1gSOd_hUi1h"},
  {id:23,name:"M9 Bayonet | Slaughter",short:"Slaughter",price:7000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rc7cF4n-SPp9Wk3QG3-UtrZm6iJYGdJAY3MwqC-wK8wu3o0ZC4tJrMznpn73V04GGdwUIok3K-sA"},
  {id:24,name:"M9 Bayonet | Lore",short:"Lore",price:9000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Igsj5aoTTl3Ju5Mpjj9bM8Ij8nVn68kNvMGDwd4HBcVdvZA6F_FS7wOrp18e1tczOnSYwviFxt3zVzBK-hwYMMLLWytMrNA"},
  {id:25,name:"Bayonet | Fade",short:"Fade",price:8500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gfezQlDoA650k27jEpY3w0VfmrhVkZW2mctKXJAQ7NFrZq1m4ku7s1p6i_MOeEPs7mq8"},
  {id:26,name:"Bayonet | Doppler",short:"Doppler",price:7000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJG48ymmIWZqOf8MqjUx1Rd4cJ5nqfHpo720QfmqkQ4ZmjyLYOQdQNqZV-E-Va_lbvujZ-7vZTMnXcxviAg-z-DyENGQTnj"},
  {id:27,name:"Bayonet | Tiger Tooth",short:"Tiger Tooth",price:6000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfwJW5duzhr-Ehfb6NL7ummJW4NE_jOqWo4ijiQew_RVsZj-hJNDEc1A4aA6F_gW_yebnjMLo6JXLy3dguT5iuyg7TQfKWA"},
  {id:28,name:"Bayonet | Slaughter",short:"Slaughter",price:4500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-GkvP9JrafwTJT7ZZwj7yTpNvx2we2rhVlZz_3JY-dcQNoNV2BqwC9we660ZW1vIOJlyUT4IXAqw"},
  {id:29,name:"Talon Knife | Fade",short:"Fade",price:10000,cat:"knives",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KlsjyMr_UqWdY781lxOiZrIqs2Q3k_0pvYTunJ4XHIQc3ZA3Q_FDowOjq1JDvtMidzCFmuXQ8pSGKbt7Pe8k"},
  {id:30,name:"Talon Knife | Doppler",short:"Doppler",price:8500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjwPKvBmm5D19V5i_rEprPigVC7vCwwOj6rYJiddFU_YgvX_ATvxem5gpe6vZ7IwSAxviUm53-JzByziExIOOBrh_yfVxzAUHD9Uz99"},
  {id:31,name:"Stiletto Knife | Fade",short:"Fade",price:7000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlYG0kfbwNoTdn2xZ_Isk2-iW99qh2wax_0ZtZ2HzLdKQcQ89MArSrFe8xbzogce5tM6dwHtmpGB8soikElfs"},
  {id:32,name:"Stiletto Knife | Doppler",short:"Doppler",price:5500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlY20k_jkI7fUhFRB4MRij7j--YXygED6qEJqYzz1JIGVdw49MlCC_FG5kOrnh8W-6ZrJwXBk7yIgtirZlxTmgwYMMLJW9L8mgA"},
  {id:33,name:"Ursus Knife | Fade",short:"Fade",price:5000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597d2JkoGPksj4OrzZgiUEvcchj72Sp9jx3Q3hqkM6YDzyI4SRIw48NQuD_gW4wOe80ZDu6Jma1zI97XwrdSZd"},
  {id:34,name:"Ursus Knife | Doppler",short:"Doppler",price:4000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597dGJkI-bh_vxIYTBnmpC7ZZOhuDG_Zi7jQC1rxdsMmmmJILAcgY_M1-CqwW8lO7mjcW8vc-cmnNi7nMi4n3bmQv330994c3yWw"},
  {id:35,name:"Huntsman Knife | Fade",short:"Fade",price:4500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlYG0kfbwNoTdn2xZ_ItzjOuS847w2ATnrUtsZ2r6LdTHJAI6ZV_Qq1Dqxey615a_6JvOnXAypGB8srmr7cYd"},
  {id:36,name:"Huntsman Knife | Doppler",short:"Doppler",price:3500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY20k_jkI7fUhFRB4MRij7r--YXygED6_RVrZTz7coeQdwZqNFCC-QDvwL_mgZG76MnMzCc1uScl5XyIyhOyhQYMMLJzgnWvwQ"},
  {id:37,name:"Bowie Knife | Fade",short:"Fade",price:4000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrrukGpV7fp9g-7J4cKi2QW18kpsa2j7JYWRdFA9MwzQ_QW5l7vvgsXtvs_PnXRjsyh0t3bdgVXp1kn_z8T2"},
  {id:38,name:"Bowie Knife | Doppler",short:"Doppler",price:3200,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tI9CVdg5sN1nRqVLsyOfn1JK-uZ_LyydivScq4XncmxCwgRBMaONm1uveFwskVkI00Q"},
  {id:39,name:"Flip Knife | Fade",short:"Fade",price:5000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD7eOwlYSOqPv9NLPF2GkE651z07mSoN-niQLn-EI-MW_ycYLGc1M6NAnZqQPol-291pO_upzXiSw0YqJPqGY"},
  {id:40,name:"Flip Knife | Doppler",short:"Doppler",price:4000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOym5Cbm_LmDKvZl3hUuvp9g-7J4cKt3VDgrRBvN2mmcIKRcwE4Ml7XrgW5weq6gJfuvZ_OwXJj6CYr43nbgVXp1lSP-ZpH"},
  {id:41,name:"Gut Knife | Fade",short:"Fade",price:2500,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6-fwztQucEo0rHDpI723wKw-hA6MWn1J4DHew5oNFCD-1W5yOvs0ZG0voOJlyWndXsZpg"},
  {id:42,name:"Gut Knife | Doppler",short:"Doppler",price:2000,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP09i5hJCHkuXLI7PQhW4C18l4jeHVu9Wk0FWy-UdvNzj2J4DHIAQ2aV_YrwK5xey80JXo75WcmiMy7ikj7X7D30vgvYNy_YI"},
  {id:43,name:"Shadow Daggers | Fade",short:"Fade",price:2200,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJD7eOwlYSOqPv9NLPF2DNX7Mcn3r7F9tqj0APm-UM6N2qid47GcQQ5Y1nY-FS2xuvrg5O16MjXiSw0BdoeL0U"},
  {id:44,name:"Shadow Daggers | Doppler",short:"Doppler",price:1800,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJD4eOym5Cbm_LmDKvZl3hUu_p9g-7J4cKk3lLj8hZlNm37IY6RcAE8YluDqQS4kufqhZ_t6Z2fzyA26yYq43_VgVXp1ufqKN5g"},
  {id:45,name:"Falchion Knife | Fade",short:"Fade",price:3000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlYG0kfbwNoTdn2xZ_Isl0-yUpY7w0AHm-kY6Z2v1JtWXcAA7ZArQ-wXswu3qgcO5vJuam3YxpGB8snhSvk-v"},
  {id:46,name:"Falchion Knife | Doppler",short:"Doppler",price:2500,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlY20k_jkI7fUhFRB4MRij73--YXygED6-hE-MTrwIILAcFI-MF3T_1O-wu_o0Z_o75vLnHRnvXF27S6JmkCw0gYMMLI6TjKvJQ"},
  {id:47,name:"Navaja Knife | Fade",short:"Fade",price:2000,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrQqW1Q7MBOhuDG_Zi7igbl-RZvNW6nJoLGdg5vYFGEr1e-kOu805-7ucyayiBg6HEhtyqInwv330-lDIlcIA"},
  {id:48,name:"Navaja Knife | Doppler",short:"Doppler",price:1600,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrcqW9e-NV9j_v-5YT0m1HnlB81NDG3OtWQIVA6Nw7Q-FLvxe3qhZC17cnJm3c16yV05n3fm0S_gxEYO-Bq1qGACQLJK3Emelg"},
  {id:49,name:"Nomad Knife | Fade",short:"Fade",price:3500,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO3lb-NlvPxDLfYkWNFppEpieuSpY3zigLj-BY4ZD2mJY6Wew5tYV3Y81HrwOzmg5G-vJuczXB9-n51VqLQnyQ"},
  {id:50,name:"Skeleton Knife | Fade",short:"Fade",price:6000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlYG0kfbwNoTdn2xZ_Islju2T9Imj2AW2_EdlYj2mdoKQIAI7ZFqG-Vbswevng5-47Z6dzXE2pGB8ssSmklVi"},
  {id:51,name:"Paracord Knife | Fade",short:"Fade",price:2800,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJD7eOwlYSOqPv9NLPF2DlQ6sEl07iW9IqijVXirRdvYDz1J9eRewI5aV7Z_wS7lefrh5e6usnXiSw0LweZKdw"},
  {id:52,name:"Survival Knife | Fade",short:"Fade",price:2500,cat:"knives",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597d2JkoGPksj4OrzZgiUD65B02evD8d-s2lfsqhBvamumd9PAIFM3YQ6FqVLoleq6gZ7vtJ7P1zI97Qw5rMae"},
  {id:53,name:"Classic Knife | Fade",short:"Fade",price:4000,cat:"knives",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxD09q3kIW0m_7zO6-fkjoH6ZZ1iOyYpYjziVXl-ENoZDqiIdPAclI6ZA6C-QC9kurp1pDovoOJlyWALxJFgQ"},
  {id:54,name:"Sport Gloves | Pandora's Box",short:"Pandora's Box",price:12000,cat:"gloves",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOmgZKbm_LLPr7Vn35cppYj3LmVpo-hi1fn-BdkYWH0ddfHdAY4MlHY-1i-lea60Za-vsjAwHZ9-n51Whc_j2Y"},
  {id:55,name:"Sport Gloves | Superconductor",short:"Superconductor",price:8000,cat:"gloves",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO6nYeDg8j2P67UqWZU7Mxkh6eVpdv33wbhrUA-ZTj1cI-SI1I8NF3Z_gW8x7rq15TvtJrKnXQ37ykg-z-DyEuqIZGC"},
  {id:56,name:"Sport Gloves | Hedge Maze",short:"Hedge Maze",price:9000,cat:"gloves",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOxhoWOmcj5Nr_Yg2Yf6sYkie-UptWi0A3sqhdta2H0LNDEc1NsNV_W-Va-l73q1Ja96p6dz2wj5HevREuBKg"},
  {id:57,name:"Driver Gloves | Crimson Weave",short:"Crimson Weave",price:5000,cat:"gloves",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ9_tmyq42Ok_7hPvWAwm1XvJQh07-So9ytjVK1-hdpNmHycICUcAQ3aVvQ-QC3wLvv05Tuot2XnkQ7uFh_"},
  {id:58,name:"Driver Gloves | Imperial Plaid",short:"Imperial Plaid",price:4500,cat:"gloves",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ9_NC3nYS0h-LmI7fUqWZU7Mxkh6fF89v32Qfm_xBsZTj3IdKcJwFoaA3XqVS9yOm90JO4uJTNyXUx63Ml-z-DyJQzRVLD"},
  {id:59,name:"Specialist Gloves | Crimson Kimono",short:"Crimson Kimono",price:7000,cat:"gloves",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1h3LAVbv6mxFABs3OXNYgJR_Nm1nYGHnuTgDLDYm2Rf5_p1g-jM-oLxm2umrhcDPjynfcPIbAM9ZVvZ_1i_x7vtgMW8vZXKzXVh6SQr5CvfyxCwhRgZbuZm0PHLTw6AR_sebbIuqqc"},
  {id:60,name:"Hand Wraps | Cobalt Skulls",short:"Cobalt Skulls",price:3500,cat:"gloves",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FS6we_qhce-6JjMnHpn7Cl35Xjfnxa3ghpEbOxn1KaaHAnKAKMaGamcRi2HqvyoA00"},
  {id:61,name:"Moto Gloves | Cool Mint",short:"Cool Mint",price:2500,cat:"gloves",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DeXEl7NwdOtbagFABs3OXNYgJP48i5hoOSlPvxDK_Dn2pf78l0tevN4InKhVGwogYxfTigcNeQdAdvYV-CrFO5xOvqgZHotc7PmiEysyMg5nyMyke-0E1FPORxxavJfL7WpEI"},
  {id:62,name:"Bloodhound Gloves | Charred",short:"Charred",price:2000,cat:"gloves",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAR0hwIQFTibipJAhk2_zdfzl969C5goWYqPX4PLTVnmRE5sFOiOXA9ofKm124vRYuDDSmcN_QLxhoNFjV-QXtxubt1Jbv75-dzHVmuCF04i3ZmBW0hktOb-Fsh_fMTVrNGeUXSxsbBApC"},
  {id:63,name:"AWP | Dragon Lore",short:"Dragon Lore",price:20000,cat:"rifles",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5cB1g_zMu9Wk2ATh_0tkMWrzLY7BIQM2NArQq1O9kL_qgJTt6Ziam3Bh6SR3sHfD30vgriIWFx4"},
  {id:64,name:"AWP | Gungnir",short:"Gungnir",price:18000,cat:"rifles",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJF-dKxmomZqPrxN7LEmyVT65wl2r7HrdWm21a3r0I_ZmimIoDEIVA8YlDQr1TswOjmh5G-tM_J1zI97acIhrrF"},
  {id:65,name:"AWP | Medusa",short:"Medusa",price:12000,cat:"rifles",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdShR7eO3g5C0mvLwOq7c2GkIvJMn3OyVptqs3wLj-UdqZG6mJo7HIwM-YA6FqVbtyO_u0ZS7u5jXiSw0r2poEy4"},
  {id:66,name:"AWP | The Prince",short:"The Prince",price:14000,cat:"rifles",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH4t27kYy0mvLwOq7c2D4B7cQl3byS89um2Ffh_RE-Yzz3IYHDd1BoZ1yC_FLqyL2-gpa7u5jXiSw0eTyRlhg"},
  {id:67,name:"AWP | Fade",short:"Fade",price:9000,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZh7PLfYQJE7dizq4yCkP_gfezXxj0IvJBy2rrH9NSh2VXs80VsYWGnd9SWcAFoaFCEqVa7wu3oh5Gi_MOeScxOzqI"},
  {id:68,name:"AWP | Lightning Strike",short:"Lightning Strike",price:7500,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn8fsJEh0uuR9I6m3gbi_Uppamn2d4CTcVc4NFDZ_Qe4x-rmgMPtuZucnGwj5He2etKLyw"},
  {id:69,name:"AWP | Oni Taiji",short:"Oni Taiji",price:6500,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJK7dK4jYG0mvLwOq7c2DIDvJ0oiO-Rrdugi1e2rRZrZDiiJ47HJ1NqY1mB_wDrybjs0564u5jXiSw0W5U1Yj4"},
  {id:70,name:"AWP | Containment Breach",short:"Containment Breach",price:5500,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-GkvP9JrafkDkH7p0mjrrHpt-l2QTiqhFpZG3yJoWVdAA5ZlCE_1G2lOi7hZ7uv4OJlyUVIS1xtQ"},
  {id:71,name:"AWP | Wildfire",short:"Wildfire",price:4200,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJV5dCykomZksj5Nr_Yg2YfvpMm3-uZ8d2jjVax80tkMm_xIoSXcgRtZgyC_Ae4w-q-hMPp7pSazmwj5Hc-mUutYg"},
  {id:72,name:"AWP | Neo-Noir",short:"Neo-Noir",price:3800,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJM6dO4m4mZqPrxN7LEmyVVsJAijL7D8I2njAzlqkY9Nm_ycYadewY2Z1zX8lPsyO3tjZW_vpmY1zI97fJZpdj_"},
  {id:73,name:"AWP | Hyper Beast",short:"Hyper Beast",price:3200,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJK9cyzhr-JkvbnJ4Tck29Y_cg_jrGYrNSl0VGwrUJpMW77cIGdcFQ8YwvSrlS-lO3sjcC178vKz3syvT5iuyhKfAjUdQ"},
  {id:74,name:"AWP | Asiimov",short:"Asiimov",price:2800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7c2DMBupQn2eqVotqkiwHiqhdlMmigJtOWJwE5Zw3X8wS-yea8jcDo7c7XiSw0g89L9us"},
  {id:75,name:"AWP | Redline",short:"Redline",price:400,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-GkvP9Jrafxj0Iu5wh3r6V8I2i2QK3-0JlNW_0IYbAcQ5qN1-Dr1i-we27hJW_7oOJlyW4ZaUDog"},
  {id:76,name:"AWP | BOOM",short:"BOOM",price:350,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPrxN7LEmyUEscdwiOyRpdugilfk-0JpMWj2d9WTewM4NV7R_gK6k-66hMe1v5zA1zI97RiCZAd_"},
  {id:77,name:"AWP | Graphite",short:"Graphite",price:600,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PDaZDBS4NmJlpKKgfjLP7LWnn8f7cMl2-uTptqkjgSx_kNvNmmgI4-TcFRtaVyFrlLow-_nhJW9vpTLy2wj5Hfw3aKhng"},
  {id:78,name:"AWP | Man-o'-war",short:"Man-o'-war",price:500,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PLfYQJF4NOkjb-GkvP9JrafxT5TucEhj-uSpNujjgPk80tuMm33ItCRcwRrMg3T_wS5lLzo08Tu7oOJlyUYbJwUOA"},
  {id:79,name:"AWP | Electric Hive",short:"Electric Hive",price:300,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94dmynZWG2fGjMeuCkm1V7ZV03u_D9N6n3wbs_UJoYm6lLYKddwRtaAuF-gLokOjxxcjrDLTvzgI"},
  {id:80,name:"AWP | Worm God",short:"Worm God",price:150,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZx7PLfYQJW-9W4kb-GkvP9JrafkDMB7JYi2byRotik2gPs_0Y_a27ycIKcdwA2YVqG8wLvxO2705a5tYOJlyVepNPmuQ"},
  {id:81,name:"AWP | Atheris",short:"Atheris",price:200,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5cyzhr-GkvP9Jrafxj5Sv8Z12-uX8I_x3VW1-kBoMmqmcYacelQ4YF_Xrwe-wefo0J7pvYOJlyWox3ZyVw"},
  {id:82,name:"AWP | PAW",short:"PAW",price:80,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PLfYQJS7cumlZe0mvLwOq7c2D8D7sQli7GXrd2i2FW2r0Y_MDr7coWXJgM3YQqE-FW3xLvthse76ZnXiSw0Dp2Yjv0"},
  {id:83,name:"AK-47 | Fire Serpent",short:"Fire Serpent",price:15000,cat:"rifles",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghRq2-UpoazrzIYPDewdtY1jSrwDqkL2905C7uZvAyXA26Ckj4SvenkPin1gSOWBtMceQ"},
  {id:84,name:"AK-47 | Gold Arabesque",short:"Gold Arabesque",price:11000,cat:"rifles",rarity:"Covert",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09u5mIS0luX1Mb7Ch35U18h0juDU-MKjiQTnqEJpZm2lLIXHJwU8YQvX_Vjswuro1p64u5qayCZquyQl7HjdgVXp1puqHVel"},
  {id:85,name:"AK-47 | Wild Lotus",short:"Wild Lotus",price:25000,cat:"rifles",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJL_9C3moS0kfv7IbrdqWZU7Mxkh6fDo9jzjgfmqhdpaj3wJIPDegA7ZlnSr1fowbvq05Xpu5TIm3Zl6SYn-z-DyAUz6gey"},
  {id:86,name:"AK-47 | Vulcan",short:"Vulcan",price:4500,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2Yf6cR02LmS9tn3ilK1qBVkMGzyIICRdgRvYVCDqwTsyO7n1JTo6M7PwGwj5Hei-fvc4A"},
  {id:87,name:"AK-47 | Bloodsport",short:"Bloodsport",price:3800,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV0966m4-PhOf7Ia_um25V4dB8xO2Vp4ij2Q2yqkFrZG_1doeQcAdqaFvU_Va2xee71sS_78_AwSAyvXE8pSGK0jPkXRs"},
  {id:88,name:"AK-47 | Neon Revolution",short:"Neon Revolution",price:2800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LPr7Vn35cppEh2b3D9N6silG1qEs5ZDz3INSVcw9vYAmC8wO3xee5hZK0up7AmCR9-n51OuB78N8"},
  {id:89,name:"AK-47 | Fuel Injector",short:"Fuel Injector",price:2400,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08-jhIWZlP_1IbzUklRc7cF4n-SPrNuh3FXjrhBkNW70Io7AdgY_YlzXr1Xvw-a71Je07cifzXdluiYj5mGdwULUSdU1BA"},
  {id:90,name:"AK-47 | The Empress",short:"The Empress",price:2000,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09m7hJKOhOTLPr7Vn35cppFyi72Q8Y30jgLk_BFvMWnwIIPAIAE6aVuCrlG8wOjpgJbt6pianCZ9-n51MzNSOW4"},
  {id:91,name:"AK-47 | Asiimov",short:"Asiimov",price:2200,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV092lnYmGmOHLPr7Vn35cppch3LGRrI-n2gTt_EJka2CmJ4aTclBsY1rXq1K3l-m905C1u8vPz3N9-n51tTAQyJo"},
  {id:92,name:"AK-47 | Case Hardened",short:"Case Hardened",price:1800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvq6YOKFkD1XvZRz2rmYporw3Vfk_RZkMGD6doeUcA86Yg6C-APtyO_v0Ij84sqHVshLpA"},
  {id:93,name:"AK-47 | Redline",short:"Redline",price:1200,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVS7cYg3LuT94qm21GyqUpsa2j7IIDDJwI7YwvRrFi7lOa5hpfpvs_A1zI97fpmYHCU"},
  {id:94,name:"AK-47 | Jaguar",short:"Jaguar",price:800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35cppdw2OvDp9qs3AO2_EM5Ymr6LdCdJgRsZ1DX-1S5wLu91MS_v8ibziZ9-n51K8u9PJM"},
  {id:95,name:"AK-47 | Neon Rider",short:"Neon Rider",price:1500,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJegJM6dO4q5KCk_LmDLbUkmJE5Ytz0r6U8Y_ziVHn-UY5MT-icIWRJlJoYFnTr1W-lbjrh8Xtu8vAmHY3pGB8sth0zE2w"},
  {id:96,name:"AK-47 | Frontside Misty",short:"Frontside Misty",price:600,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08u_mpSOhcjnI7TDglRc7cF4n-SPrduh2lft_kJoa2-iLIWdcgFrYl3SrAC4xb2-1JC575SdzSNl6XV25mGdwUIM9cnVOA"},
  {id:97,name:"AK-47 | Aquamarine Revenge",short:"Aquamarine Revenge",price:900,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWZU7Mxkh6fDrN_zjVa3rUo6NmCncdTDdlJtMgrTqFe9wuvmgcLq7ZmdwSQwuiMn-z-DyJACIiUs"},
  {id:98,name:"AK-47 | Point Disarray",short:"Point Disarray",price:400,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV08y5nY6fqPP9ILrDhGpI18h0juDU-MKt2wHs-kduYj3ycNWTJlI8ZgqE81S_kr-7gZHttZTJmCZk6CZwsH-OgVXp1vQ2jVgn"},
  {id:99,name:"AK-47 | Cartel",short:"Cartel",price:350,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszJemkV09-3hpSOm8j5Nr_Yg2Yf65Ap2O2Y89um2Vfi-0I9ZGr6LYaVc1BoN17Z-1W_x-vsgpHpvpSammwj5Hf6bGh9NQ"},
  {id:100,name:"AK-47 | Wasteland Rebel",short:"Wasteland Rebel",price:700,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35cpsRy3LGWo42g2FLmqkQ9ZWuhI4OTdAA2ZVrV-lftl-_t1pXuvZTNmCF9-n515M784kA"},
  {id:101,name:"AK-47 | Elite Build",short:"Elite Build",price:200,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09G3h5SOhe7LPr7Vn35cppwpju2Z9N6l3AKx_0E6Mjv3IYOSIQc5MlGE-VW_kLu5jMLovs7LyyN9-n51sJxz0nI"},
  {id:102,name:"AK-47 | Blue Laminate",short:"Blue Laminate",price:150,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35cpsQp2OiZ8Inx2FCy8kBsZjr0JI-dIQBsZlzWrAK6yLu-0JLquc7Mm3t9-n51h7U8MfQ"},
  {id:103,name:"AK-47 | Red Laminate",short:"Red Laminate",price:180,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPvWIwGpV6ZMn2OzHrNX22AS28kpsNWinIoXDcwU9ZliCrAS2w-q60cLvot2XnuVsDguD"},
  {id:104,name:"AK-47 | Jet Set",short:"Jet Set",price:3000,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszfdDFO08iklZaOm_LwDLrawjxu5cB1g_zMu9im3QPgr0RvMGzwd4_GJgVoZ1nSr1W-kO-60Me1u8jPyXVmsiQr4XjD30vgq0tbBAI"},
  {id:105,name:"AK-47 | Hydroponic",short:"Hydroponic",price:5000,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLbUkmJE5Ysl3e3AodysjgCw8kdqZGmiIICVJgM9Zw2F-QS2x7jujJHu7Z-YzyYypGB8skMZAvuI"},
  {id:106,name:"AK-47 | Emerald Pinstripe",short:"Emerald Pinstripe",price:2200,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYeDNR-M6_hIW0lvygZITck29Y_cg_iOqT9tin2lC3_0NrYzqndYTAcQ5qNV_T_Qe5w--71JO67pudmHdmuz5iuyjC1NkzVg"},
  {id:107,name:"M4A4 | Howl",short:"Howl",price:16000,cat:"rifles",rarity:"Covert",badge:"NEW",
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLPr7Vn35cppJy0r3A8NT02Qy1r0ZvZ2uiIILDdFA9ZwrSrle5ybvrgp676ZvKmiZ9-n51fIaZrsI"},
  {id:108,name:"M4A4 | Asiimov",short:"Asiimov",price:2500,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7c2GpQ7JMg0uyYoYin2wHj-kU6YGD0cYOUcFA9YFnS_AC9xeq508K0us7XiSw0vgXM_Rw"},
  {id:109,name:"M4A4 | Neo-Noir",short:"Neo-Noir",price:1800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09Kzm7-FmP7mDLbUkmJE5Yt02L7Crd6ljFfhqkRpNmj0IoHGJg48NFHQ-APrk-fmgJS47ZqaznEwpGB8snTjxNBG"},
  {id:110,name:"M4A4 | The Emperor",short:"The Emperor",price:3000,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09m7hIWZmOXLPr7Vn35cpsAn3OuTrYit2Afi_ktrNmqiI4eWJlU6NF7Zrwe9wubpjJS7usnKwSZ9-n51LPua7N4"},
  {id:111,name:"M4A4 | Desolate Space",short:"Desolate Space",price:800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18h0juDU-ML02lCwqUFtZG-iI4HHelA5YFvU-1O6w-vng8C6u87BySNh6CNx5nfegVXp1tTZc_LR"},
  {id:112,name:"M4A4 | Buzz Kill",short:"Buzz Kill",price:600,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW08-zl5SEhcj5Nr_Yg2YfvpEhi77FrNqg2Qfh-Uo6NmqiIdDBclQ_ZljS_QLswbzth5e9uc-ayWwj5HebQIBhcA"},
  {id:113,name:"M4A4 | Royal Paladin",short:"Royal Paladin",price:1200,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW0865jYGHqOTlJrLDk1Rc7cF4n-SP9tnz2VHk-BJuZGClcIeRIQM4NAmGrFPolL_v0Me6usmfzSZgvCh34GGdwULzs1Yd7w"},
  {id:114,name:"M4A4 | Poseidon",short:"Poseidon",price:4500,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszYfi5H5di5mr-GkvP9JrafxjxTvpYg372Y99mi2VKy8kVtYGCmI4bBdFM7MFmC8wS6kOi90cC-u4OJlyXlGmScAw"},
  {id:115,name:"M4A4 | Daybreak",short:"Daybreak",price:900,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhh3szDeDBN4tOJh5WFhf7nNoTck29Y_cg_jOyZo46s2VG2-xE6a2ynJ4XGdgNsMA2G8gO-kL3vhp666prJync27j5iuyirt9G25Q"},
  {id:116,name:"M4A1-S | Printstream",short:"Printstream",price:3500,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf_NZlmOzA-LP4jVC9vh5yYmGhJIKRdVA_NF6C-AC2yOjngJXu6MiaznU3v3Un7X-Iy0e1iEoeP_sv26JaEqwbxg"},
  {id:117,name:"M4A1-S | Hyper Beast",short:"Hyper Beast",price:2200,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoHwjF2hpl1kNzqlIITBJAA3ZlnT_VHtxOm715ftu5SamHJg7yYmtivczhG3hE0ecKUx0uGnXixz"},
  {id:118,name:"M4A1-S | Player Two",short:"Player Two",price:1600,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITShWxeupUl0tbM8Ij8nVn6-BBkYm7xJIWWdFdqZQnY-wS5xui7gZe46pjBzSdhvHUq5H2MmRDm1AYMMLKkkEWdsg"},
  {id:119,name:"M4A1-S | Cyrex",short:"Cyrex",price:900,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp8j-3I4IG72gPtqUM4Zz_wJYXEJwdsaArR8gfolezvjJPo78yawHo16SkqsX_Zygv3309JkzbY_w"},
  {id:120,name:"M4A1-S | Golden Coil",short:"Golden Coil",price:2800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alIITCmGpa7cd4nuz-8oP5jGu5rhc1JjTtdoWSeg85MliB_1Lrwei6jJG_6pXPzyE37CAktnuOnR3kh05MaORmguveFwuVS_OSUQ"},
  {id:121,name:"M4A1-S | Hot Rod",short:"Hot Rod",price:5500,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mr-ZkvPLPu_Qx3hu5Mx2gv2Pp9yn31Li_ERtYW70dYaXdFI8NVvYq1i7xOrohcTt7sudySZnsyNz7GGdwUICPND1TA"},
  {id:122,name:"M4A1-S | Icarus Fell",short:"Icarus Fell",price:4000,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ClPbmJqjummJW4NE_0uiV99zwjA3j-EpoZW3zJ9KUJ1c6Y1rZrgXqwebphpPv7s-cm3Y36D5iuyjUCbMLPg"},
  {id:123,name:"M4A1-S | Knight",short:"Knight",price:8000,cat:"rifles",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-GkuP1P6jummJW4NE_3euYoNujiVHj_Eo-YjunJoKcIAc8Z1jX-gK8k7y6h5O4vZXIyiNisj5iuyg-Y-6U4A"},
  {id:124,name:"M4A1-S | Mecha Industries",short:"Mecha Industries",price:1400,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLphY4OiyuOoDBcQI9Z13Ur1i-k-_ogJa1u8mfn3sxuyQh5XfZmhzlgRxPbOw7g_CACQLJK2Vmcs0"},
  {id:125,name:"M4A1-S | Chantico's Fire",short:"Chantico's Fire",price:1100,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITCmX5d_MR6j_v--InxgUG55UVvZTyhd4WTI1A9Zw7Y8lfrlOm8g566vpTLySBkuHYnsX7byRDkg05SLrs45bGI7Bc"},
  {id:126,name:"M4A1-S | Decimator",short:"Decimator",price:700,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDL_UlWJc6dF-mNbM8Ij8nVn6rUZpZj_7ddfGIFA9YFqG_1S4yLjujZbv78_PynYy63Yr7XiJzRG1gAYMMLJRV2t2dw"},
  {id:127,name:"Desert Eagle | Blaze",short:"Blaze",price:5500,cat:"pistols",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XSwGkG65d1juqZp4rz3VLhrhc_azqhJtORdgM4YFvR-1C5wry5gpHqot2XnpVn5DmP"},
  {id:128,name:"Desert Eagle | Code Red",short:"Code Red",price:1800,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-KkPDmNqjCmXlu5cB1g_zMu9un21XgrxBtamCnd9WWd1NoYlCGr1S2lOzm0cPq78zLznRnsilxsHjD30vghpPff7g"},
  {id:129,name:"Desert Eagle | Golden Koi",short:"Golden Koi",price:1200,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5B7dCzh7-JhfbiPITdn2xZ_Ismi7DA9tWg0VHm_EVtY2iicoTAdAI3YFGBq1XowObp05K9v8-YnycxpGB8ssNrD69j"},
  {id:130,name:"Desert Eagle | Kumicho Dragon",short:"Kumicho Dragon",price:900,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgIWKkPvxDLDEm2JS4Mp1mOjG-oLKhVGwogYxfW2mcYXEdwNqaFzR-Fbvl-jm1pHovpvOwXVrsih27CmMnUTmhhpFa-1xxavJmKBM1Ag"},
  {id:131,name:"Desert Eagle | Printstream",short:"Printstream",price:1500,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5cB1g_zMu9mliwbm-hE6MjyiINORcAVsMFDV_li_yeq8h8TvuZ_IyCYx7HJ343vD30vgwZLZMlg"},
  {id:132,name:"Desert Eagle | Crimson Web",short:"Crimson Web",price:400,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLbUkmJE5Yt02L3F9o2gi1Xt_xU4N27zcIOTJw43NVnX-le7xrq7gcK_vp6fznBnpGB8sjwFbKcx"},
  {id:133,name:"Desert Eagle | Hypnotic",short:"Hypnotic",price:800,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6-flW9U6ZN0juyVpdym2QftqhFkYTqncofEcA9qZwzS81bsw-66jJO1u4OJlyW5goh8Mg"},
  {id:134,name:"USP-S | Kill Confirmed",short:"Kill Confirmed",price:2800,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYmugd9KRJlI_MAnY_AS3kOy9h5ftuMvPmiE2vSQm5S3ZmBXigk5Eavsv26LMgCO2Og"},
  {id:135,name:"USP-S | Neo-Noir",short:"Neo-Noir",price:1200,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh-TLPbTYhFRc7cF4n-SP99qm31G1-EJpZmH6JYaWdFJtY1HRrFW_xezt1J_v6JrKnSBhvycn4mGdwUK5GAJRtw"},
  {id:136,name:"USP-S | The Traitor",short:"The Traitor",price:900,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09ulq5WYh-TLO7rfkW5V5cR_teTE8YXghRrj_EVqMmmmJoSVJFQ6YF2E-AS8xL_q15a4ucjOznZk6HQkt37VnRHmn1gSORPm8QJe"},
  {id:137,name:"USP-S | Orion",short:"Orion",price:600,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp8j-3I4IG72gWy-EtuZmilJYWQcwA2ZFDZrFPrkOjq1JPv7Z-YnXo3vnQgsX7angv3308GYiteYg"},
  {id:138,name:"USP-S | Caiman",short:"Caiman",price:400,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTck29Y_cg_2u2R94-n2QTt_Bc9ZDzyItCVd1c2Zg2BqATryL_p1pW17ZSYnCBl6T5iuygdU0huyg"},
  {id:139,name:"USP-S | Cortex",short:"Cortex",price:350,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j3Jq_um25V4dB8xLrCo9Tw3VGx80RvYTqmdYHDeg9saVmGq1m4xry7gJK56M_BwXA26Ck8pSGKD6d5YK8"},
  {id:140,name:"USP-S | Ticket to Hell",short:"Ticket to Hell",price:250,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jgPITZk2dd18h0juDU-ML02wHh80Nqa2HwJoXAJ1c3N1CE-lW6wOq5gJ_o6pjBzCRluScm4y6JgVXp1o_PXmgb"},
  {id:141,name:"USP-S | Printstream",short:"Printstream",price:1100,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jkIbLfgnhF-sBwh9bM8Ij8nVn6qRZuZGr1ctDBdw9vYF3V_FO6yee50cfv7sjMz3Jj7HIr7C2Ilx3i1AYMMLId9XKCBQ"},
  {id:142,name:"Glock-18 | Fade",short:"Fade",price:4500,cat:"pistols",rarity:"Classified",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3dzxG6eO6nYeDg7n1a-6GkDoC7pMp3rGYpNqiiQ23-UM5ZT-hcIeQJgZsMFvR_lTox7i-m9bi6-pjfulG"},
  {id:143,name:"Glock-18 | Twilight Galaxy",short:"Twilight Galaxy",price:2200,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73cCxX7eOwmIWInOTLPr7Vn35cpsMkierH8Yjz2FLl-BFvazv7dYKScFVqMF7U_lK9wue80ZG0tMjJmiB9-n51fVVSDyI"},
  {id:144,name:"Glock-18 | Water Elemental",short:"Water Elemental",price:800,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRc7cF4n-SP9oqi2QOx_RJrZzv0ItKTIwA6M1iE_le4x-7sgpK76J7KwXVhu3Uk4mGdwUIygoGHyA"},
  {id:145,name:"Glock-18 | Wasteland Rebel",short:"Wasteland Rebel",price:500,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJg4GYg_L4MrXVqXlU6sB9teTE8YXghRrjrUs5MGnzctTBcldqNFDU-wC_x72-1MLvu8_LyyZnuiNxs3rUmkCwn1gSOSRz69nF"},
  {id:146,name:"Glock-18 | Bullet Queen",short:"Bullet Queen",price:700,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79fnzL-cluX5MrLVk2Vu5cB1g_zMu9Tzi1Lgr0VoYz3wIoOdIAQ8ZQuC-gS_k73rgcS4ucjJziBmvikm4i7D30vgkBOw7cE"},
  {id:147,name:"Glock-18 | Neo-Noir",short:"Neo-Noir",price:600,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJmo-Chcj5Nr_Yg2Yf7pEniL2VoNql0Abt_0VvYW2nJ9PBdQdqMwrWrwC6lbrmjJK7uszOnWwj5Hcq7I0xkg"},
  {id:148,name:"Glock-18 | Vogue",short:"Vogue",price:400,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJkZmOlPj6J7rSglRc7cF4n-SP9NSsiwHj-BVrYjv2JY7Dcwc2YVDV81G8yObvhJa57s7ImHFi7iEq5mGdwUK7pKU3-w"},
  {id:149,name:"Glock-18 | Moonrise",short:"Moonrise",price:200,cat:"pistols",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0vL3djFN79eJxdi0guX2MrXum2Re5vp3j__E57P4jVC9vh5yZGHzJNSScwc7MFGBqFHoyOu60cS6vJ2cn3VnvHIn4S2OmES01E5PbPsv26LZKopslQ"},
  {id:150,name:"P250 | See Ya Later",short:"See Ya Later",price:1500,cat:"pistols",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITck29Y_cg_3bmYpNmm0FK3qUY5NWjwJYfEI1U_ZFiF-1e5krztgZTquc_NwSY3sj5iuygDgd78YA"},
  {id:151,name:"P90 | Asiimov",short:"Asiimov",price:1200,cat:"smgs",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPrxN7LEmyUEu5El3eiY9tz02Qe2qBJsMGjzIdSTcAVrMgvS-VO-kObpgZK77syb1zI97U9gXU9J"},
  {id:152,name:"MAC-10 | Neon Rider",short:"Neon Rider",price:400,cat:"smgs",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJmoWEmeX9N77DqWZU7Mxkh6eT8Imm3ley-kNsMGD1JNSWc1A-N1CEqVLrx7rq0cS16cvMmidk6yh0-z-DyGkg1tFj"},
  {id:153,name:"MP9 | Hydra",short:"Hydra",price:600,cat:"smgs",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJK9diklb-GkvP9JraflDIH7JEni-vEp9X2igzt-kNvYGuicNLHcAdtN1DQ_QS6xu-8gMTt6IOJlyUWK4u21g"},
  {id:154,name:"SSG 08 | Blood in the Water",short:"Blood in the Water",price:1800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmYWPnuL5feqIlDJUvJAjibGQrYrwigHj8hVkZmD7LYeQJwRtYFjT-1i3k-nog5Ci_MOeaYRNgso"},
  {id:155,name:"SSG 08 | Dragonfire",short:"Dragonfire",price:900,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bM8Ij8nVn6r0JtNjqhLIWQJlRvNwnUr1C6k7-6g5G_vsvBz3djvCN3syyMlkSxhwYMMLKTPmEptQ"},
  {id:156,name:"FAMAS | Commemoration",short:"Commemoration",price:800,cat:"rifles",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf1OD3dzxP7c-JmIWMlvTtDLzemm9u5cB1g_zMu9T2jATk8xZtMm30cIGSdQ5vNA3Q-Ve3lOa-hsS-upSdnyFg6HEr4C3D30vgQzM5A44"},
  {id:157,name:"Galil AR | Cerberus",short:"Cerberus",price:500,cat:"rifles",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJB6c60hpWYqPD1P7LdqWZU7Mxkh6fF8I6sjVbkrhJsMmyncY_Hegc8YV3X8lC8ye3ugcK07ZybzHFmsnR2-z-DyMZX64bv"},
  {id:158,name:"Nova | Hyper Beast",short:"Hyper Beast",price:300,cat:"heavy",rarity:"Mil-Spec",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09SvhIWZlfL1IK_um25V4dB8xLDH8I7z0Va1-hFuZGDzJ4-celRvMwrV_wO7wersg8O8uJ7BmnFnuiU8pSGK6fzQTHA"},
  {id:159,name:"Negev | Mjölnir",short:"Mjölnir",price:2000,cat:"heavy",rarity:"Restricted",badge:null,
   img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf1OD3fzhF6cqJgIiEhcj5Nr_Yg2Yf6ZUp07qV9Nqn3QOw-hJoNmn3dtOSewVtYw7V-Vjqx7zog5W96J-ayGwj5HdHwZKzdw"},
  {id:160, name:"★ Butterfly Knife | Gamma Doppler", short:"Gamma Doppler", price:22000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPD1PrbQqW9e-NV9j_v-5YT0m1HnlB81NDG3Oo7HcwM5NQ7U_gO8yb28gZG07ZvIzXdivXMg4HvUyhDkiR4eZ-Rv1qGACQLJqUKvgfw", badge: "NEW"},
  {id:161, name:"★ Butterfly Knife | Doppler", short:"Doppler", price:16000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPP7I6vdk3lu-M1wmeyTyo7KhF2zowdyNW-mcNKUdQY-Y1iDqFS9ye3sgJfv6pvAzXJluCAj5CnUlke3hRgdP_sv26J0Ho7kIQ", badge: "NEW"},
  {id:162, name:"★ Butterfly Knife | Fade", short:"Fade", price:17000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NE_3erHotSg2wbn-0tkZ2r3d4aUcwE4N1HR_QS_xe7sjZPv7ZzMwHVi7D5iuyh9aKz8BA", badge: "NEW"},
  {id:163, name:"★ Butterfly Knife | Marble Fade", short:"Marble Fade", price:14000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPr1Ibndk1RX6cF0teXI8oThxlG1rRA5Z2rzdtfHeldqZ13U-QO-w-jth8C4upzOnyFguSUq4XndyUepwUYb00RQWkk"},
  {id:164, name:"★ Butterfly Knife | Lore", short:"Lore", price:13500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4OeqPXhJ6_UhG1d8fp9hfvEyoD8j1yg5UplNz_ydo-ddw5rYQqB-1G4ye_vhMftuMubyCdn6XUk4XneyUS0hh1SLrs4xn-YYas"},
  {id:165, name:"★ Butterfly Knife | Tiger Tooth", short:"Tiger Tooth", price:11000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GFqOP9NL7DqWRD6ct2j9bN_Iv9nBrm8xdlYmGgJ4XEegM8aAzX-AK9xu_s18O_6cmazHIw7nJ35y3YmxLmn1gSOVFuzwR4"},
  {id:166, name:"★ Karambit | Gamma Doppler", short:"Gamma Doppler", price:18500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20kPb5PrrukmRB-Ml0mNbR_Y3mjQCLpxo7Oy3tJIPBIVM4Zw7U81C7x7_q1sS8tM-bmntjs3Qq5S2MnBa3hxxLZuFn1-veFwu1gXfnHg", badge: "NEW"},
  {id:167, name:"★ Karambit | Doppler", short:"Doppler", price:15000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij73--YXygED6rkRuZGDxLYCddlc3MFzSrlDslOfr1J_uup7MzHUxviUjtimPmxWyhAYMMLLRA6IwHA", badge: "NEW"},
  {id:168, name:"★ Karambit | Fade", short:"Fade", price:16000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlYG0kfbwNoTdn2xZ_Isn3uyTpN7zjlHt-ENsZjumcoCUJAZqaV_QqVa9xL3thsC-tZyYznIypGB8sly_Gx3i", badge: "NEW"},
  {id:169, name:"★ Karambit | Marble Fade", short:"Marble Fade", price:13000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20mvbmMbfUqW1Q7MBOhuDG_Zi73g3i_UQ-Mjz7ddKccQ44aVGD_1W8wenphMS07snJyHtj7nUm4X7aywv3309PGbb8_A"},
  {id:170, name:"★ Karambit | Lore", short:"Lore", price:12000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJl5W0nPbmMrbummRD7fp9g-7J4cLw2lXtrks_ZW_3cY_DI1NvNwvYrFi5k-u60ZG5vs7BwXFkvHYh7XnfgVXp1vw0lsRe"},
  {id:171, name:"★ Karambit | Tiger Tooth", short:"Tiger Tooth", price:10000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY60g_7zNqnumXlQ5sJ0teXI8oThxg2yrUJvZWqicYLBe1c_ZgnY-Vi6w7jvhcS1vJyfnXJluCkk5X7bnR2pwUYb2myqBHU"},
  {id:172, name:"★ M9 Bayonet | Gamma Doppler", short:"Gamma Doppler", price:15000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjzMrbcl1RV59VhhuzTypz9iUex_ywwOj6rYJiXdwQ-NwvT_VG8xO27jJDttJ6YwSRjvCggtH_YnBG1gh4dP-Y-0_aaVxzAULHZOJiw", badge: "NEW"},
  {id:173, name:"★ M9 Bayonet | Doppler", short:"Doppler", price:12000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEpLP5gVO8v11lZGqnIdOVew9sN1HUrgK6k-m8hZ676ZWYyidg6CUqtiqIl0TmghlPcKUx0rpPOX91"},
  {id:174, name:"★ M9 Bayonet | Fade", short:"Fade", price:13000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lxLnFoNygiwfnqUNla2ihJ4XGclNqZ17U_Vm7yO7v1MPpu5mYzHBr6CI8pSGKferYZ_4"},
  {id:175, name:"★ M9 Bayonet | Marble Fade", short:"Marble Fade", price:11000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Kmsj5MqnTmm5u7sR1j9bN_Iv9nBrs_0A-MWynIYXBJAJqY1iC-QLowefujcXtvJSYwHpmvnR3tHreyka_n1gSOd_hUi1h"},
  {id:176, name:"★ M9 Bayonet | Lore", short:"Lore", price:9000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Igsj5aoTTl3Ju5Mpjj9bN_Iv9nBq1rRZkNWz1INeUdwJvY1zXrFDsxum5hpXq75zLwSFlvCUn53bdlhCyn1gSOZQxQ1V1"},
  {id:177, name:"★ Bayonet | Gamma Doppler", short:"Gamma Doppler", price:9000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJF7dG7lb-PmOfkP77DqXtZ6dZ03tbN_Iv9nBrgrhY9YWv3ddOQe1VrZlrSr1i3x7y8gp7tuMjKy3BnvHMm53iPzRzin1gSOeS3UoKk"},
  {id:178, name:"★ Bayonet | Doppler", short:"Doppler", price:7500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJG48ymmIWZqOf8MqjUxVRd4cJ5nqfDo9-m0Azm-Upsaz31LYSUcAU5Y16Crlm6wujmgJK_vZ3JnSAx6yAh-z-DyLGLsdXe"},
  {id:179, name:"★ Bayonet | Fade", short:"Fade", price:8000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gfezQlDoA650k27jEpY3w0VfmrhVkZW2mctKXJAQ7NFrZq1m4ku7s1p6i_MOeEPs7mq8"},
  {id:180, name:"★ Bayonet | Lore", short:"Lore", price:5500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zLZAJA7cW5moWfqPv7Ib7ummJW4NE_jr6Vp9iljlHg_kZtMW_wIYeVeg9sYA7XrAO-ku3p08e0v86cwSNguj5iuygqkB6roA"},
  {id:181, name:"★ Bayonet | Marble Fade", short:"Marble Fade", price:7000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJP7c60mIW0kfbwNoTdn2xZ_It03-uWo4n32gHi_kZuZG6md9CTcwc4Z1DQ_le8yObvgp-7vM-cwXoxpGB8si0vvFLA"},
  {id:182, name:"★ Talon Knife | Doppler", short:"Doppler", price:8000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KmsjwPKvBmm5D19V5i_rEprPigVC7vCwwOj6rYJiddFU_YgvX_ATvxem5gpe6vZ7IwSAxviUm53-JzByziExIOOBrh_yfVxzAUHD9Uz99"},
  {id:183, name:"★ Talon Knife | Fade", short:"Fade", price:8500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-KlsjyMr_UqWdY781lxOiZrIqs2Q3k_0pvYTunJ4XHIQc3ZA3Q_FDowOjq1JDvtMidzCFmuXQ8pSGKbt7Pe8k"},
  {id:184, name:"★ Talon Knife | Marble Fade", short:"Marble Fade", price:7500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-Kmsj5MqnTmm5u7sR1j9bW_Ij6n2u4ohQ0J3fycYKVelU7YA2C-Vbvw7vr1MW17p_KyXdi6XR05n2OmUHihR9Ka7Zpm7XAHhcAmaWL"},
  {id:185, name:"★ Stiletto Knife | Fade", short:"Fade", price:7200, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlYG0kfbwNoTdn2xZ_Isk2-iW99qh2wax_0ZtZ2HzLdKQcQ89MArSrFe8xbzogce5tM6dwHtmpGB8soikElfs"},
  {id:186, name:"★ Stiletto Knife | Doppler", short:"Doppler", price:6500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwOfBfThW-NOJlY20k_jkI7fUhFRB4MRij73--YXygED6qkI5Mmz1IYfEdQBoZVnY-Vm9x-i5hZ60uZnBnCFk7nIj5Cranxbk0gYMMLKjhzEAbA"},
  {id:187, name:"★ Ursus Knife | Doppler", short:"Doppler", price:4800, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597dGJkI-bh_vxIYTBnmpC7ZZOhuDG_Zi7jQC1rxdsMmmmJILAcgY_M1-CqwW8lO7mjcW8vc-cmnNi7nMi4n3bmQv330994c3yWw"},
  {id:188, name:"★ Ursus Knife | Fade", short:"Fade", price:5200, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC597d2JkoGPksj4OrzZgiUEvcchj72Sp9jx3Q3hqkM6YDzyI4SRIw48NQuD_gW4wOe80ZDu6Jma1zI97XwrdSZd"},
  {id:189, name:"★ Bowie Knife | Fade", short:"Fade", price:4500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrrukGpV7fp9g-7J4cKi2QW18kpsa2j7JYWRdFA9MwzQ_QW5l7vvgsXtvs_PnXRjsyh0t3bdgVXp1kn_z8T2"},
  {id:190, name:"★ Bowie Knife | Doppler", short:"Doppler", price:4000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukmRB-Ml0mNbR_Y3mjQeLpxo7Oy3tJIDDIwM7N1_QrwC_kLy7jZS-u5TLznowvSQqsS3VnROz1UtLaedqgeveFwtWkcZrCw"},
  {id:191, name:"★ Falchion Knife | Fade", short:"Fade", price:3500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlYG0kfbwNoTdn2xZ_Isl0-yUpY7w0AHm-kY6Z2v1JtWXcAA7ZArQ-wXswu3qgcO5vJuam3YxpGB8snhSvk-v"},
  {id:192, name:"★ Falchion Knife | Doppler", short:"Doppler", price:3200, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlY20k_jkI7fUhFRB4MRij7r--YXygED6rxE_NWumcIfGJFA_YA6CqFO5yb29hcTt6szLzyNluCMh4XaJyxK_iQYMMLInUpH_sQ"},
  {id:193, name:"★ Classic Knife | Fade", short:"Fade", price:5000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxD09q3kIW0m_7zO6-fkjoH6ZZ1iOyYpYjziVXl-ENoZDqiIdPAclI6ZA6C-QC9kurp1pDovoOJlyWALxJFgQ"},
  {id:194, name:"★ Nomad Knife | Fade", short:"Fade", price:7000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3ObcdTJN_uO3lb-NlvPxDLfYkWNFppEpieuSpY3zigLj-BY4ZD2mJY6Wew5tYV3Y81HrwOzmg5G-vJuczXB9-n51VqLQnyQ"},
  {id:195, name:"★ Skeleton Knife | Fade", short:"Fade", price:11000, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwPjNfThW49KJlYG0kfbwNoTdn2xZ_Islju2T9Imj2AW2_EdlYj2mdoKQIAI7ZFqG-Vbswevng5-47Z6dzXE2pGB8ssSmklVi"},
  {id:196, name:"★ Survival Knife | Fade", short:"Fade", price:4500, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597d2JkoGPksj4OrzZgiUD65B02evD8d-s2lfsqhBvamumd9PAIFM3YQ6FqVLoleq6gZ7vtJ7P1zI97Qw5rMae"},
  {id:197, name:"★ Paracord Knife | Fade", short:"Fade", price:4200, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PzadQJD7eOwlYSOqPv9NLPF2DlQ6sEl07iW9IqijVXirRdvYDz1J9eRewI5aV7Z_wS7lefrh5e6usnXiSw0LweZKdw"},
  {id:198, name:"★ Navaja Knife | Fade", short:"Fade", price:2800, cat:"knives", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrQqW1Q7MBOhuDG_Zi7igbl-RZvNW6nJoLGdg5vYFGEr1e-kOu805-7ucyayiBg6HEhtyqInwv330-lDIlcIA"},
  {id:199, name:"M4A1-S | Welcome to the Jungle", short:"Welcome to the Jungle", price:15000, cat:"rifles", rarity:"Covert", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDKjfl2BU18l4jeHVu9vw0Vfnqks9ZDz2dtCQdwI8MlrZ_AS7xrzpjcC6tJ3MyXBjuiUq5y7D30vgmmQTww0", badge: "NEW"},
  {id:200, name:"Glock-18 | Gamma Doppler", short:"Gamma Doppler", price:2800, cat:"pistols", rarity:"Covert", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73djxP4d2JkI-bh_vxIYTBnmpC7ZZOjeXO9ofKhF2zowdyZTqiINfAIAFsYlmE_VS3kufngZHvuZiYzHdh7yUn43vYzRW_iEtIPPsv26I355lLig"},
  {id:201, name:"★ Sport Gloves | Vice", short:"Vice", price:18000, cat:"gloves", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO0mJWOqOf9PbDummJW4NE_3LmYo43w31Cx-xE4ZmilJoWVdFRvNQzX_1DtlLjq15G5tJnLzCFh7j5iuyjrgJbKOg", badge: "NEW"},
  {id:202, name:"★ Sport Gloves | Pandora's Box", short:"Pandora's Box", price:22000, cat:"gloves", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOmgZKbm_LLP7LWnn8fv8Qki7qZp9_02Q23rhc4amD3I4KdJAFvMgvQ_lm6kOq80MK4u8zOymwj5HddNdpRlg", badge: "NEW"},
  {id:203, name:"★ Sport Gloves | Superconductor", short:"Superconductor", price:12000, cat:"gloves", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO6nYeDg8j2P67UqWdY781lxO2Upd732AXlqRZoZ2ClJYCVIARrMFnWqFa4kru6h5Hp7p_BnyZruyM8pSGKZlt0krQ"},
  {id:204, name:"★ Driver Gloves | King Snake", short:"King Snake", price:9000, cat:"gloves", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ9_9K3n4WYnP76DKzZn39U18l4jeHVu47w3VDk_RBlYW_yddCcJwBvMFnVrwTrkO7phJG0uMzPyXZivCEj4H7D30vgh70AmsQ"},
  {id:205, name:"★ Specialist Gloves | Crimson Kimono", short:"Crimson Kimono", price:15000, cat:"gloves", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1h3LAVbv6mxFABs3OXNYgJR_Nm1nYGHnuTgDLDYm2Rf5_p1g-jM-oLxm2umrhcDPzCkfMKLIQM-aVvX8lm2xrzq15K-tZzInXZrunQqsCncmBSzhEsdbeY-gaPITkLeWfL-CHIpnw", badge: "NEW"},
  {id:206, name:"★ Specialist Gloves | Emerald Web", short:"Emerald Web", price:8500, cat:"gloves", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1h3LAVbv6mxFABs3OXNYgJR_Nm1nYGHnuTgDL7ck3lQ5MFOnezDyoD8j1yg5RFrZmilcoORcFQ9Ml6Br1W9wLq7hpW6vZ6YynoyvyInti6IyRzmiUtSLrs4n1yTH6M"},
  {id:207, name:"★ Moto Gloves | Spearmint", short:"Spearmint", price:11000, cat:"gloves", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DeXEl7NwdOtbagFABs3OXNYgJP48i5hoOSlPvxDLbYmH9u_Nd4i-fG-YnKhF2zowdyNmjwcI-XcgNvYF2C-QDrwuzph8Lv6s6fyCdlvXIq53jYyhTj0BgYafsv26Lo8-tfHQ"},
  {id:208, name:"★ Hand Wraps | Cobalt Skulls", short:"Cobalt Skulls", price:6000, cat:"gloves", rarity:"Extraordinary", img:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6Ll9pORzOrFe6xu6-hce47c_MwHZk6CRxtCrdnBDi1x9Ea-xr0fGaS1XNUvdLH77CWCR9IaxTog"}
];

const CASE_IMGS = {
  "Operation Phoenix Weapon Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg",
  "Chroma Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFEuh_KQJTtEuI63xIXbxqOtauyClTMEsJV1jruS89T3iQKx_BBqa2j3JpjVLFH1xpp0EQ",
  "Spectrum Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY2nfKadD4U7Y7lwYXexaGlYb3QzjlUvZ0k0ujHptug2VbirkRrNW2md4SLMlhph09hpX0",
  "Dreams & Nightmares Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQwnfCcJmxDv9rhwIHZwqP3a-uGwz9Xv8F0j-qQrI3xiVLkrxVuZW-mJoWLMlhpWhFkc9M",
  "Revolution Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U",
  "Glove Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY1naTMdzwTtNrukteIkqT2MO_Uwz5Q6cYhibyXo4rw2ALsrkRoYjuncNCLMlhpEV4XDTk",
  "Gamma Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYznarJJjkQ6ovjw4SPlfP3auqEl2oBuJB1j--WoY322QziqkdpZGr3IteLMlhpw4RJCv8",
  "Horizon Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUwnfbOdDgavYXukYTZkqf2ZbrTwmkE6scgj7CY94ml3FXl-ENkMW3wctOLMlhpVHKV9YA",
  "Prisma Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUynfWaI25G6Ijkl9iPw_SnNrjXw2oBu8cj3b2Qo4_33QbnrUdlYD37ddCLMlhpvs0XIz0",
  "Fracture Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU2nfGaJG0btN2wwYHfxa-hY-uFxj4Dv50nj7uXpI7w3AewrhBpMWH6d9CLMlhpEbAe-Zk",
  "Recoil Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQxnaecIT8Wv9rilYTYkfTyNuiFwmhUvpZz3-2Z9oqg0Vew80NvZzuiJdeLMlhpwFO-XdA",
  "Kilowatt Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQznaKdID5D6d23ldHSwKOmZeyEz21XvZZ12LzE9t6nigbgqkplNjihJIaLMlhpF1ZeR5c",
  "Spectrum 2 Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY4naeaJGhGtdnmx4Tek_bwY-iFlGlUsJMp3LuTot-mjFGxqUttZ2r3d4eLMlhpnZPxZK0",
  "Chroma 2 Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFAuhqSaKWtEu43mxtbbk6b1a77Twm4Iu8Yl3bCU9Imii1Xt80M5MmD7JZjVLFH-6VnQJQ",
  "Gamma 2 Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVFx5KAVo5PSkKV4xhfGfKTgVvIXlxNPSwaOmMLiGwzgJvJMniO-Zoo_z2wXg-EVvfSmtc78HsNoy",
  "Prisma 2 Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU1nfbOIj8W7oWzkYLdlPOsMOmIk2kGscAj2erE99Sn2AGw_0M4NW2hIYOLMlhpcmY0CRM",
  "Operation Breakout Weapon Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFMu1aPMI24auITjxteJwPXxY72AkGgIvZAniLjHpon2jlbl-kpvNjz3JJjVLFG9rl1YLQ",
  "Operation Wildfire Case": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYxnaeQImRGu4S1x9TawfSmY-iHkmoD7cEl2LiQpIjz3wPl_ERkYWHwLY-LMlhp9pkR_UQ",
};

/* ===== DATA ===== */
const PROS = [
  {name:"m0NESY",tag:"pro",wealth:2850000},
  {name:"s1mple",tag:"pro",wealth:2420000},
  {name:"ZywOo",tag:"pro",wealth:2180000},
  {name:"NiKo",tag:"pro",wealth:1950000},
  {name:"donk",tag:"pro",wealth:1760000},
  {name:"sh1ro",tag:"pro",wealth:1540000},
  {name:"ropz",tag:"pro",wealth:1420000},
  {name:"b1t",tag:"pro",wealth:1280000},
  {name:"jL",tag:"pro",wealth:980000},
  {name:"Strogo",tag:"stream",wealth:680000},
  {name:"Ceh9",tag:"stream",wealth:520000},
  {name:"Anomaly",tag:"stream",wealth:480000},
  {name:"fl0m",tag:"stream",wealth:410000},
  {name:"Striker",tag:"cyber",wealth:190000},
  {name:"SPUNJ",tag:"cyber",wealth:160000},
  {name:"machine",tag:"cyber",wealth:145000},
];

const CASE_LIST = [
  {id:"phoenix",name:"Phoenix Case",price:250,key:"Operation Phoenix Weapon Case",drops:[{id:76,w:40},{id:79,w:40},{id:80,w:40},{id:81,w:40},{id:82,w:40},{id:99,w:40},{id:44,w:12},{id:48,w:12},{id:75,w:12},{id:77,w:12},{id:83,w:8},{id:84,w:8},{id:85,w:8},{id:86,w:8},{id:3,w:3},{id:5,w:3},{id:1,w:0.5}]},
  {id:"chroma",name:"Chroma Case",price:180,key:"Chroma Case",drops:[{id:76,w:40},{id:79,w:40},{id:80,w:40},{id:81,w:40},{id:82,w:40},{id:99,w:40},{id:44,w:14},{id:48,w:14},{id:75,w:14},{id:77,w:14},{id:127,w:10},{id:128,w:10},{id:129,w:10},{id:130,w:10},{id:131,w:10},{id:1,w:1},{id:2,w:1}]},
  {id:"chroma2",name:"Chroma 2 Case",price:160,key:"Chroma 2 Case",drops:[{id:76,w:45},{id:79,w:45},{id:80,w:45},{id:81,w:45},{id:82,w:45},{id:99,w:45},{id:44,w:12},{id:48,w:12},{id:75,w:12},{id:77,w:12},{id:107,w:8},{id:108,w:8},{id:109,w:8},{id:110,w:8},{id:3,w:2},{id:5,w:2}]},
  {id:"spectrum",name:"Spectrum Case",price:220,key:"Spectrum Case",drops:[{id:76,w:35},{id:79,w:35},{id:80,w:35},{id:81,w:35},{id:82,w:35},{id:44,w:14},{id:48,w:14},{id:75,w:14},{id:77,w:14},{id:63,w:6},{id:64,w:6},{id:65,w:6},{id:1,w:1.5},{id:2,w:1.5},{id:3,w:1.5}]},
  {id:"spectrum2",name:"Spectrum 2 Case",price:200,key:"Spectrum 2 Case",drops:[{id:76,w:40},{id:79,w:40},{id:80,w:40},{id:81,w:40},{id:82,w:40},{id:44,w:14},{id:48,w:14},{id:75,w:14},{id:77,w:14},{id:107,w:7},{id:108,w:7},{id:109,w:7},{id:3,w:3},{id:5,w:3},{id:6,w:3}]},
  {id:"dreams",name:"Dreams & Nightmares",price:300,key:"Dreams & Nightmares Case",drops:[{id:44,w:22},{id:48,w:22},{id:75,w:22},{id:77,w:22},{id:78,w:22},{id:3,w:8},{id:5,w:8},{id:6,w:8},{id:7,w:8},{id:9,w:8},{id:63,w:4},{id:64,w:4},{id:65,w:4},{id:1,w:2},{id:2,w:2},{id:4,w:2}]},
  {id:"revolution",name:"Revolution Case",price:280,key:"Revolution Case",drops:[{id:76,w:30},{id:79,w:30},{id:80,w:30},{id:81,w:30},{id:44,w:14},{id:48,w:14},{id:75,w:14},{id:77,w:14},{id:83,w:10},{id:84,w:10},{id:85,w:10},{id:86,w:10},{id:3,w:4},{id:5,w:4},{id:6,w:4},{id:1,w:1},{id:2,w:1}]},
  {id:"gamma",name:"Gamma Case",price:200,key:"Gamma Case",drops:[{id:76,w:40},{id:79,w:40},{id:80,w:40},{id:81,w:40},{id:82,w:40},{id:44,w:12},{id:48,w:12},{id:75,w:12},{id:77,w:12},{id:2,w:2.5},{id:10,w:2.5},{id:14,w:2.5},{id:20,w:2.5}]},
  {id:"gamma2",name:"Gamma 2 Case",price:190,key:"Gamma 2 Case",drops:[{id:76,w:40},{id:79,w:40},{id:80,w:40},{id:81,w:40},{id:82,w:40},{id:44,w:12},{id:48,w:12},{id:75,w:12},{id:77,w:12},{id:107,w:6},{id:108,w:6},{id:109,w:6},{id:3,w:2},{id:5,w:2}]},
  {id:"horizon",name:"Horizon Case",price:170,key:"Horizon Case",drops:[{id:76,w:45},{id:79,w:45},{id:80,w:45},{id:81,w:45},{id:82,w:45},{id:99,w:45},{id:44,w:12},{id:48,w:12},{id:75,w:12},{id:127,w:8},{id:128,w:8},{id:129,w:8},{id:130,w:8},{id:63,w:3},{id:64,w:3}]},
  {id:"prisma",name:"Prisma Case",price:210,key:"Prisma Case",drops:[{id:76,w:40},{id:79,w:40},{id:80,w:40},{id:81,w:40},{id:82,w:40},{id:44,w:14},{id:48,w:14},{id:75,w:14},{id:77,w:14},{id:3,w:4},{id:5,w:4},{id:6,w:4},{id:8,w:1.2},{id:18,w:1.2},{id:24,w:1.2}]},
  {id:"prisma2",name:"Prisma 2 Case",price:200,key:"Prisma 2 Case",drops:[{id:76,w:40},{id:79,w:40},{id:80,w:40},{id:81,w:40},{id:82,w:40},{id:44,w:14},{id:48,w:14},{id:75,w:14},{id:77,w:14},{id:83,w:6},{id:84,w:6},{id:85,w:6},{id:3,w:2},{id:5,w:2}]},
  {id:"fracture",name:"Fracture Case",price:230,key:"Fracture Case",drops:[{id:76,w:35},{id:79,w:35},{id:80,w:35},{id:81,w:35},{id:82,w:35},{id:44,w:15},{id:48,w:15},{id:75,w:15},{id:77,w:15},{id:107,w:8},{id:108,w:8},{id:109,w:8},{id:110,w:8},{id:3,w:3},{id:5,w:3},{id:6,w:3},{id:1,w:0.6}]},
  {id:"recoil",name:"Recoil Case",price:260,key:"Recoil Case",drops:[{id:44,w:18},{id:48,w:18},{id:75,w:18},{id:77,w:18},{id:78,w:18},{id:3,w:6},{id:5,w:6},{id:6,w:6},{id:7,w:6},{id:83,w:5},{id:84,w:5},{id:85,w:5},{id:1,w:1.5},{id:2,w:1.5}]},
  {id:"kilowatt",name:"Kilowatt Case",price:290,key:"Kilowatt Case",drops:[{id:44,w:16},{id:48,w:16},{id:75,w:16},{id:77,w:16},{id:3,w:7},{id:5,w:7},{id:6,w:7},{id:7,w:7},{id:9,w:7},{id:63,w:4},{id:64,w:4},{id:65,w:4},{id:1,w:1.5},{id:2,w:1.5}]},
  {id:"glove",name:"Glove Case",price:1200,key:"Glove Case",drops:[{id:54,w:18},{id:55,w:18},{id:56,w:18},{id:57,w:18},{id:58,w:18},{id:59,w:18},{id:60,w:18},{id:61,w:18},{id:62,w:18},{id:201,w:18},{id:202,w:18},{id:203,w:18},{id:3,w:3},{id:5,w:3}]},
  {id:"breakout",name:"Breakout Case",price:150,key:"Operation Breakout Weapon Case",drops:[{id:76,w:50},{id:79,w:50},{id:80,w:50},{id:81,w:50},{id:82,w:50},{id:99,w:50},{id:101,w:50},{id:44,w:10},{id:48,w:10},{id:75,w:10},{id:127,w:8},{id:128,w:8},{id:129,w:8},{id:130,w:8},{id:131,w:8},{id:1,w:0.8}]},
  {id:"wildfire",name:"Wildfire Case",price:140,key:"Operation Wildfire Case",drops:[{id:76,w:50},{id:79,w:50},{id:80,w:50},{id:81,w:50},{id:82,w:50},{id:99,w:50},{id:101,w:50},{id:44,w:10},{id:48,w:10},{id:75,w:10},{id:83,w:6},{id:84,w:6},{id:85,w:6},{id:3,w:1}]},
  {id:"knife",name:"Knife Case",price:2500,key:"Glove Case",drops:[{id:5,w:12},{id:6,w:12},{id:7,w:12},{id:8,w:12},{id:9,w:12},{id:10,w:12},{id:11,w:12},{id:12,w:12},{id:13,w:12},{id:14,w:12},{id:15,w:12},{id:16,w:12},{id:1,w:6},{id:2,w:6},{id:3,w:6},{id:4,w:6}]},
  {id:"awp_coll",name:"AWP Collection",price:800,key:"Horizon Case",drops:[{id:63,w:18},{id:64,w:18},{id:65,w:18},{id:66,w:18},{id:67,w:18},{id:68,w:18},{id:69,w:18},{id:70,w:18},{id:71,w:18},{id:72,w:18},{id:73,w:18},{id:74,w:18},{id:44,w:5},{id:48,w:5},{id:75,w:5}]},
];
CASE_LIST.forEach(function(c){ c.img = (typeof CASE_IMGS !== "undefined" && CASE_IMGS[c.key]) ? CASE_IMGS[c.key] : ""; });

/* ===== STORAGE ===== */
function getUsers(){ try{return JSON.parse(localStorage.getItem("sd_users")||"[]");}catch(e){return[];} }
function saveUsers(u){ localStorage.setItem("sd_users", JSON.stringify(u)); }
function getSession(){ return localStorage.getItem("sd_session"); }
function setSession(n){ localStorage.setItem("sd_session", n); }
function clearSession(){ localStorage.removeItem("sd_session"); }
function nextId(){ const u=getUsers(); return u.length?Math.max(...u.map(x=>x.id))+1:1; }

/* seed founder */
(function(){
  let users=getUsers();
  let f=users.find(u=>u.name.toLowerCase()==="klat4ik");
  if(!f){
    users=users.map(u=>({...u,id:u.id+1}));
    f={id:1,name:"klat4ik",pass:"157230723gg",role:"founder",balance:999999,inventory:[],uidCounter:1,casesOpened:0,upgradesWon:0,upgradesLost:0,created:Date.now()};
    users.unshift(f);
    saveUsers(users);
  } else {
    f.role="founder"; f.pass="157230723gg";
    if(f.balance<10000) f.balance=999999;
    if(!f.inventory) f.inventory=[];
    saveUsers(users.map(u=>u.name.toLowerCase()==="klat4ik"?f:u));
  }
})();

/* ===== STATE ===== */
let user=null, source=null, target=null, mult=1, spinning=false, cat="all";
let curCase=null, lastWin=null, authMode="login", themeIdx=0;
const THEMES=["","theme-purple","theme-blue","theme-crimson","theme-gold"];
let liveDrops=[];
try{ liveDrops=JSON.parse(localStorage.getItem("sd_live")||"[]"); }catch(e){}

function $(id){ return document.getElementById(id); }
function fmt(n){ return Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g," "); }
function wealth(u){ return (u.balance||0)+(u.inventory||[]).reduce((s,i)=>s+i.price,0); }
function saveUser(){
  if(!user) return;
  const users=getUsers();
  const i=users.findIndex(x=>x.id===user.id);
  if(i>=0) users[i]=user; else users.push(user);
  saveUsers(users);
}
function updateBal(){ if(user) $("balance").textContent=fmt(user.balance); }

/* ===== LIVE ===== */
function pushLive(d){
  liveDrops.unshift(d);
  if(liveDrops.length>50) liveDrops.length=50;
  localStorage.setItem("sd_live", JSON.stringify(liveDrops));
  renderLive();
}
function renderLive(){
  const track=$("liveTrack");
  if(!track) return;
  if(!liveDrops.length){
    for(let i=0;i<12;i++){
      const s=SKINS[Math.floor(Math.random()*Math.min(30,SKINS.length))];
      const names=["m0NESY","Strogo","donk","Ceh9","s1mple","ZywOo"];
      liveDrops.push({user:names[i%names.length],short:s.short,name:s.name,price:s.price,img:s.img});
    }
  }
  const html=liveDrops.map(d=>`<div class="liveItem"><img src="${d.img||""}" onerror="this.style.opacity=.3"><div><div class="n">${d.short||d.name}</div><div class="u">${d.user}</div></div><div class="p">✦ ${fmt(d.price)}</div></div>`).join("");
  track.innerHTML=html+html;
}
setInterval(function(){
  if(!user) return;
  const s=SKINS[Math.floor(Math.random()*SKINS.length)];
  const names=["m0NESY","Strogo","donk","player_"+Math.floor(Math.random()*999)];
  pushLive({user:names[Math.floor(Math.random()*names.length)],short:s.short,name:s.name,price:s.price,img:s.img});
},10000);

/* ===== AUTH ===== */
function doLogin(){
  const name=$("loginName").value.trim();
  const pass=$("loginPass").value;
  const err=$("loginErr");
  err.textContent="";
  if(name.length<2){ err.textContent="Ник минимум 2 символа"; return; }
  if(pass.length<3){ err.textContent="Пароль минимум 3 символа"; return; }
  let users=getUsers();
  if(authMode==="reg"){
    if(users.find(u=>u.name.toLowerCase()===name.toLowerCase())){ err.textContent="Ник занят"; return; }
    const nu={id:nextId(),name,pass,role:"user",balance:5000,inventory:[],uidCounter:1,casesOpened:0,upgradesWon:0,upgradesLost:0,created:Date.now()};
    users.push(nu); saveUsers(users); setSession(name); enterApp(nu);
  } else {
    const u=users.find(x=>x.name.toLowerCase()===name.toLowerCase());
    if(!u||u.pass!==pass){ err.textContent="Неверный ник или пароль"; return; }
    setSession(u.name); enterApp(u);
  }
}
function enterApp(u){
  user=u;
  if(!user.inventory) user.inventory=[];
  if(!user.uidCounter) user.uidCounter=1;
  if(user.xp==null) user.xp=0;
  if(user.level==null) user.level=1;
  if(!user.lastDaily) user.lastDaily=0;
  if(!user.missions) user.missions={};
  if(!user.promos) user.promos=[];
  if(user.streak==null) user.streak=0;
  if(user.bestStreak==null) user.bestStreak=0;
  if(user.totalSpent==null) user.totalSpent=0;
  $("authScreen").hidden=true;
  $("app").hidden=false;
  updateBal();
  updateLevelUI();
  updateDailyBtn();
  updateStreakUI();
  renderLive();
  renderCases();
  renderCatalog();
  calcChance();
}
function doLogout(){
  saveUser(); clearSession(); user=null;
  $("app").hidden=true;
  $("authScreen").hidden=false;
  $("loginName").value=""; $("loginPass").value=""; $("loginErr").textContent="";
}

/* ===== NAV ===== */
function goPage(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".navBtn").forEach(b=>b.classList.remove("active"));
  const el=$("page-"+page);
  if(el) el.classList.add("active");
  const btn=document.querySelector('.navBtn[data-page="'+page+'"]');
  if(btn) btn.classList.add("active");
  if(page==="inv") renderInv();
  if(page==="cases") renderCases();
  if(page==="top") renderTop();
  if(page==="profile") renderProfile();
  if(page==="cat") renderCatalog();
  if(page==="missions") renderMissions();
  if(page==="upgrade") renderQuickInv();
}

/* ===== CASES ===== */
function renderCases(){
  const grid=$("casesGrid");
  if(!grid) return;
  grid.innerHTML="";
  CASE_LIST.forEach(c=>{
    const div=document.createElement("div");
    div.className="caseCard";
    div.innerHTML=`<img src="${c.img}" alt="" onerror="this.src='https://placehold.co/120x90/141820/ffd60a/png?text=CASE'"><h3>${c.name}</h3><div class="price">✦ ${fmt(c.price)}</div>`;
    div.addEventListener("click", function(){ openCase(c.id); });
    grid.appendChild(div);
  });
}
function pickDrop(c){
  const total=c.drops.reduce((s,d)=>s+d.w,0);
  let r=Math.random()*total;
  for(const d of c.drops){ r-=d.w; if(r<=0){ const s=SKINS.find(x=>x.id===d.id); if(s) return s; } }
  return SKINS[0];
}
function openCase(id){
  if(!user) return;
  const c=CASE_LIST.find(x=>x.id===id);
  if(!c) return;
  if(user.balance<c.price){ alert("Недостаточно монет"); return; }
  user.balance-=c.price;
  user.totalSpent=(user.totalSpent||0)+c.price;
  user.casesOpened=(user.casesOpened||0)+1;
  saveUser(); updateBal(); addXp(15);
  curCase=c;
  const won=pickDrop(c);
  lastWin=won;

  const track=$("rouletteTrack");
  const items=[];
  for(let i=0;i<50;i++){
    const d=c.drops[Math.floor(Math.random()*c.drops.length)];
    items.push(SKINS.find(s=>s.id===d.id)||SKINS[0]);
  }
  const wi=42; items[wi]=won;
  track.innerHTML=items.map(function(s){
    var rc=s.price>=10000?"gold":s.price>=3000?"cov":s.price>=800?"cls":s.price>=300?"res":"mil";
    return '<div class="rItem '+rc+'"><img src="'+s.img+'" onerror="this.style.opacity=.3"><span>'+s.short+'</span></div>';
  }).join("");
  track.style.transition="none"; track.style.transform="translateX(0)";
  $("caseModalTitle").textContent=c.name;
  $("caseResult").hidden=true;
  $("caseModal").hidden=false;

  const iw=145; const fw=Math.min(window.innerWidth*0.95,900);
  const tx=fw/2-(wi*iw+iw/2);
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      track.style.transition="transform 5s cubic-bezier(0.08,0.75,0.12,1)";
      track.style.transform="translateX("+tx+"px)";
    });
  });
  setTimeout(function(){
    $("caseResult").hidden=false; burstFx(true);
    $("caseResultImg").src=won.img;
    $("caseResultName").textContent=won.name;
    $("caseResultPrice").textContent="✦ "+fmt(won.price);
    $("caseAgainBtn").disabled=user.balance<c.price;
  },5200);
}
function takeWin(){
  if(lastWin&&user){
    const item={uid:user.uidCounter++,skinId:lastWin.id,name:lastWin.name,short:lastWin.short,price:lastWin.price,img:lastWin.img};
    user.inventory.push(item);
    pushLive({user:user.name,short:lastWin.short,name:lastWin.name,price:lastWin.price,img:lastWin.img});
    const won=lastWin;
    lastWin=null; saveUser();
    return item;
  }
  return null;
}

/* ===== INVENTORY ===== */
function renderInv(){
  const grid=$("invGrid");
  if(!user) return;
  $("invCount").textContent=user.inventory.length;
  $("invSum").textContent=fmt(user.inventory.reduce((s,i)=>s+i.price,0));
  if(!user.inventory.length){ grid.innerHTML='<div class="empty">Пусто. Открой кейс.</div>'; return; }
  grid.innerHTML="";
  user.inventory.forEach(item=>{
    const div=document.createElement("div");
    div.className="skinCard";
    div.innerHTML=`<img src="${item.img}" onerror="this.style.opacity=.3"><div class="name" title="${item.name}">${item.name}</div><div class="price">✦ ${fmt(item.price)}</div><div class="actions"></div>`;
    const actions=div.querySelector(".actions");
    const b1=document.createElement("button"); b1.className="btnSrc"; b1.textContent="Апгрейд";
    b1.addEventListener("click",function(){ useInv(item.uid); });
    const b2=document.createElement("button"); b2.className="btnSell"; b2.textContent="Продать";
    b2.addEventListener("click",function(){ sellInv(item.uid); });
    actions.appendChild(b1); actions.appendChild(b2);
    grid.appendChild(div);
  });
}
function useInv(uid){
  const item=user.inventory.find(x=>x.uid===uid); if(!item) return;
  sendToUpgrade(item, uid);
}
function sellInv(uid){
  const ix=user.inventory.findIndex(x=>x.uid===uid); if(ix<0) return;
  user.balance+=Math.floor(user.inventory[ix].price*0.85);
  user.inventory.splice(ix,1); saveUser(); updateBal(); renderInv(); renderQuickInv();
}

/* ===== CATALOG ===== */
function renderCatalog(){
  const grid=$("catGrid"); if(!grid) return;
  let list=SKINS.slice();
  if(cat!=="all") list=list.filter(s=>s.cat===cat);
  const q=(($("catSearch")&&$("catSearch").value)||"").trim().toLowerCase();
  if(q) list=list.filter(s=>s.name.toLowerCase().includes(q)||(s.short||"").toLowerCase().includes(q));
  const sort=($("catSort")&&$("catSort").value)||"default";
  if(sort==="price-desc") list.sort((a,b)=>b.price-a.price);
  else if(sort==="price-asc") list.sort((a,b)=>a.price-b.price);
  else if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  grid.innerHTML="";
  if(!list.length){ grid.innerHTML='<div class="empty">Ничего не найдено</div>'; return; }
  list.forEach(s=>{
    const div=document.createElement("div");
    div.className="skinCard";
    div.innerHTML='<img src="'+s.img+'" loading="lazy" onerror="this.style.opacity=.3"><div class="name" title="'+s.name+'">'+s.name+'</div><div class="price">✦ '+fmt(s.price)+'</div><div class="actions"></div>';
    const actions=div.querySelector(".actions");
    const b1=document.createElement("button"); b1.className="btnSrc"; b1.textContent="Ставка";
    b1.addEventListener("click",function(){ setSource(s); });
    const b2=document.createElement("button"); b2.className="btnTgt"; b2.textContent="Цель";
    b2.addEventListener("click",function(){ setTarget(s); });
    actions.appendChild(b1); actions.appendChild(b2);
    grid.appendChild(div);
  });
}
function setSource(s){
  source={type:"skin",id:s.id,name:s.name,short:s.short,price:s.price,img:s.img};
  renderSource(); autoTarget(); goPage("upgrade");
}
function setTarget(s){
  target={id:s.id,name:s.name,short:s.short,price:s.price,img:s.img};
  renderTarget(); calcChance(); goPage("upgrade");
}
function setCoins(pct){
  if(!user) return;
  const amount=Math.floor(user.balance*pct/100);
  if(amount<=0) return;
  source={type:"coins",name:fmt(amount)+" монет",price:amount,img:null};
  renderSource(); autoTarget();
  document.querySelectorAll(".coinBtn").forEach(b=>b.classList.toggle("active", +b.getAttribute("data-pct")===pct));
}
function autoTarget(){
  if(!source) return;
  const want=source.price*mult*2.2;
  const cands=SKINS.filter(s=>s.price>source.price*1.05).map(s=>({...s,d:Math.abs(s.price-want)})).sort((a,b)=>a.d-b.d);
  if(cands.length){ const b=cands[0]; target={id:b.id,name:b.name,short:b.short,price:b.price,img:b.img}; }
  renderTarget(); calcChance();
}
function renderSource(){
  const body=$("sourceBody"), price=$("sourcePrice"), clear=$("clearSource"), slot=$("sourceSlot");
  if(!source){
    body.innerHTML='<div class="placeholder">+</div><span>Инвентарь или монеты</span>';
    price.hidden=true; clear.hidden=true; if(slot) slot.classList.remove("has-item"); return;
  }
  if(slot) slot.classList.add("has-item");
  clear.hidden=false; price.hidden=false;
  price.textContent="✦ "+fmt(source.price);
  if(source.type==="coins") body.innerHTML='<div style="font-size:2.5rem;margin-bottom:8px">✦</div><div class="nm">'+source.name+'</div>';
  else body.innerHTML='<img src="'+source.img+'" onerror="this.style.opacity=.3"><div class="nm">'+source.name+'</div>';
}
function renderTarget(){
  const body=$("targetBody"), price=$("targetPrice"), clear=$("clearTarget"), slot=$("targetSlot");
  if(!target){
    body.innerHTML='<div class="placeholder">◎</div><span>Из каталога</span>';
    price.hidden=true; clear.hidden=true; if(slot) slot.classList.remove("has-item"); return;
  }
  if(slot) slot.classList.add("has-item");
  clear.hidden=false; price.hidden=false;
  price.textContent="✦ "+fmt(target.price);
  body.innerHTML='<img src="'+target.img+'" onerror="this.style.opacity=.3"><div class="nm">'+target.name+'</div>';
}
function calcChance(){
  const text=$("chanceText"), sub=$("chanceSub"), arc=$("chanceArc"), btn=$("upgradeBtn");
  if(!source||!target||source.price<=0){
    text.textContent="—"; sub.textContent="шанс";
    arc.setAttribute("stroke-dasharray","0 755"); btn.disabled=true;
    btn.classList.remove("ready");
    return 0;
  }
  const c=Math.max(1,Math.min(75,Math.round(source.price/target.price*100*0.92*10)/10));
  text.textContent=c.toFixed(1)+"%";
  sub.textContent=c<12?"очень низкий":c<30?"низкий":c<50?"средний":"высокий";
  const circ=2*Math.PI*120;
  arc.setAttribute("stroke-dasharray",(c/100*circ)+" "+circ);
  btn.disabled=false;
  btn.classList.add("ready");
  return c;
}
function doUpgrade(){
  if(!user||spinning) return;
  const chance=calcChance(); if(!chance) return;
  const btn=$("upgradeBtn"), needle=$("needle");
  spinning=true; btn.disabled=true; btn.textContent="Крутим…";
  const win=Math.random()*100<chance;
  const spins=5+Math.floor(Math.random()*3);
  const ang=win?Math.random()*(chance/100)*360:(chance/100)*360+Math.random()*((100-chance)/100)*360;
  needle.style.transition="none"; needle.style.transform="rotate(0deg)";
  void needle.offsetWidth;
  needle.style.transition="transform 4.5s cubic-bezier(0.12,0.8,0.15,1)";
  needle.style.transform="rotate("+(spins*360+ang)+"deg)";
  setTimeout(function(){
    if(source&&source.invUid) user.inventory=user.inventory.filter(i=>i.uid!==source.invUid);
    if(win&&target){
      user.inventory.push({uid:user.uidCounter++,skinId:target.id,name:target.name,short:target.short,price:target.price,img:target.img});
      user.upgradesWon=(user.upgradesWon||0)+1; addXp(25);
      user.streak=(user.streak||0)+1;
      if(user.streak>(user.bestStreak||0)) user.bestStreak=user.streak;
      updateStreakUI();
      if(user.streak>=3) toast("Серия x"+user.streak+"!","Продолжай в том же духе","win");
      pushLive({user:user.name,short:target.short,name:target.name,price:target.price,img:target.img});
    } else {
      user.upgradesLost=(user.upgradesLost||0)+1; user.streak=0; updateStreakUI();
      if(source&&source.type==="coins") user.balance=Math.max(0,user.balance-source.price);
    }
    saveUser(); updateBal();
    $("resultIcon").textContent=win?"🎉":"💀";
    $("resultTitle").textContent=win?"УСПЕХ!":"НЕУДАЧА";
    $("resultTitle").style.color=win?"var(--green)":"var(--red)";
    $("resultMsg").textContent=win?("Получен "+target.name):"Ставка сгорела";
    burstFx(win); $("resultModal").hidden=false;
    toast(win?"Апгрейд успешен!":"Неудача", win?(target.name):"Ставка сгорела", win?"win":"lose");
    source=null; renderSource();
    spinning=false; btn.textContent="Апгрейд";
    setTimeout(function(){ needle.style.transition="none"; needle.style.transform="rotate(0deg)"; btn.disabled=false; calcChance(); },300);
  },4800);
}

/* ===== TOP / PROFILE ===== */
function renderTop(){
  const list=$("topList"); if(!list) return;
  const real=getUsers().map(u=>({name:u.name,tag:u.role==="founder"?"founder":"player",wealth:wealth(u),isMe:user&&u.id===user.id}));
  const all=[...PROS.map(p=>({...p,isMe:false})),...real].sort((a,b)=>b.wealth-a.wealth);
  list.innerHTML=all.map((p,i)=>{
    const rank=i+1;
    const rc=rank===1?"g":rank===2?"s":rank===3?"b":"";
    const tag=p.tag==="pro"?"PRO":p.tag==="stream"?"STREAM":p.tag==="cyber"?"CYBER":p.tag==="founder"?"ОСНОВАТЕЛЬ":"";
    const tc=p.tag==="pro"?"tag-pro":p.tag==="stream"?"tag-stream":p.tag==="cyber"?"tag-cyber":p.tag==="founder"?"tag-founder":"";
    return `<div class="topRow ${p.isMe?"me":""}"><div class="topRank ${rc}">${rank}</div><div class="topName">${p.name}${tag?`<span class="tag ${tc}">${tag}</span>`:""}${p.isMe?' <span class="tag tag-founder">ВЫ</span>':""}</div><div class="topVal">✦ ${fmt(p.wealth)}</div></div>`;
  }).join("");
}
function renderProfile(){
  const box=$("profileBox"); if(!box||!user) return;
  const w=wealth(user);
  box.innerHTML=`
    <div class="av">${user.name[0].toUpperCase()}</div>
    <h2>${user.name}</h2>
    ${user.role==="founder"?'<div class="badge">★ ОСНОВАТЕЛЬ</div>':""}
    <div style="color:var(--muted);font-size:.9rem">ID: <b style="color:var(--green)">#${user.id}</b></div>
    <div class="stats">
      <div class="stat"><div class="l">Баланс</div><div class="v">✦ ${fmt(user.balance)}</div></div>
      <div class="stat"><div class="l">Состояние</div><div class="v">✦ ${fmt(w)}</div></div>
      <div class="stat"><div class="l">Уровень</div><div class="v">${user.level||1}</div></div>
      <div class="stat"><div class="l">XP</div><div class="v">${user.xp||0}/${(user.level||1)*100}</div></div>
      <div class="stat"><div class="l">Инвентарь</div><div class="v">${user.inventory.length}</div></div>
      <div class="stat"><div class="l">Кейсов</div><div class="v">${user.casesOpened||0}</div></div>
      <div class="stat"><div class="l">Апгрейд +</div><div class="v">${user.upgradesWon||0}</div></div>
      <div class="stat"><div class="l">Апгрейд −</div><div class="v">${user.upgradesLost||0}</div></div>
      <div class="stat"><div class="l">Серия</div><div class="v">${user.streak||0}</div></div>
      <div class="stat"><div class="l">Лучшая серия</div><div class="v">${user.bestStreak||0}</div></div>
    </div>
    <button type="button" class="btn primary" id="logoutBtn" style="margin-top:8px">Выйти</button>`;
  $("logoutBtn").addEventListener("click", doLogout);
}





/* ===== MISSIONS / PROMO / STREAK ===== */
const MISSIONS = [
  {id:"open3", icon:"📦", title:"Новичок", desc:"Открой 3 кейса", need:3, key:"casesOpened", reward:400, xp:30},
  {id:"open10", icon:"📦", title:"Кейс-хантер", desc:"Открой 10 кейсов", need:10, key:"casesOpened", reward:1200, xp:80},
  {id:"win1", icon:"🎯", title:"Первый апгрейд", desc:"Выиграй 1 апгрейд", need:1, key:"upgradesWon", reward:500, xp:40},
  {id:"win5", icon:"🎯", title:"Апгрейд-мастер", desc:"Выиграй 5 апгрейдов", need:5, key:"upgradesWon", reward:2000, xp:100},
  {id:"inv5", icon:"🎒", title:"Коллекционер", desc:"Собери 5 скинов в инвентаре", need:5, key:"invCount", reward:600, xp:50},
  {id:"lvl3", icon:"⭐", title:"Прокачка", desc:"Достигни 3 уровня", need:3, key:"level", reward:800, xp:0},
  {id:"streak3", icon:"🔥", title:"Серия x3", desc:"Выиграй 3 апгрейда подряд", need:3, key:"bestStreak", reward:1500, xp:70},
  {id:"spend5k", icon:"💸", title:"Крупный игрок", desc:"Потрать 5000 монет", need:5000, key:"totalSpent", reward:1000, xp:60},
];

function missionProgress(m) {
  if (!user) return 0;
  if (m.key === "invCount") return (user.inventory || []).length;
  return user[m.key] || 0;
}
function renderMissions() {
  const list = $("missionsList");
  if (!list || !user) return;
  list.innerHTML = "";
  MISSIONS.forEach(function(m) {
    const prog = missionProgress(m);
    const done = !!user.missions[m.id];
    const ready = !done && prog >= m.need;
    const pct = Math.min(100, (prog / m.need) * 100);
    const div = document.createElement("div");
    div.className = "mission" + (done ? " done" : "");
    div.innerHTML =
      '<div class="mi">' + m.icon + '</div>' +
      '<div class="minfo"><div class="mtitle">' + m.title + '</div>' +
      '<div class="mdesc">' + m.desc + ' · ' + Math.min(prog, m.need) + '/' + m.need + '</div>' +
      '<div class="mprog"><div class="mfill" style="width:' + (done ? 100 : pct) + '%"></div></div></div>' +
      '<div class="mreward">✦ ' + m.reward + '</div>';
    const btn = document.createElement("button");
    btn.className = "mclaim";
    if (done) { btn.textContent = "✓"; btn.disabled = true; }
    else if (ready) { btn.textContent = "Забрать"; btn.addEventListener("click", function(){ claimMission(m.id); }); }
    else { btn.textContent = "..."; btn.disabled = true; }
    div.appendChild(btn);
    list.appendChild(div);
  });
}
function claimMission(id) {
  const m = MISSIONS.find(x => x.id === id);
  if (!m || !user || user.missions[id]) return;
  if (missionProgress(m) < m.need) return;
  user.missions[id] = true;
  user.balance += m.reward;
  saveUser(); updateBal();
  if (m.xp) addXp(m.xp);
  toast("Миссия выполнена!", m.title + " · +" + m.reward + " ✦", "win");
  burstFx(true);
  renderMissions();
}
function activatePromo() {
  if (!user) return;
  const code = ($("promoInput").value || "").trim().toUpperCase();
  if (!code) { toast("Введи код", "", "lose"); return; }
  if (user.promos.indexOf(code) >= 0) { toast("Уже использован", code, "lose"); return; }
  const codes = {
    "SKINDROP": {bal: 1000, xp: 50, msg: "+1000 монет"},
    "VIP1000": {bal: 2500, xp: 100, msg: "+2500 монет"},
    "KNIFE": {bal: 0, xp: 30, msg: "Бонусный нож!", skin: true},
    "LEVELUP": {bal: 500, xp: 200, msg: "+500 и много XP"}
  };
  const p = codes[code];
  if (!p) { toast("Неверный код", code, "lose"); return; }
  user.promos.push(code);
  if (p.bal) user.balance += p.bal;
  if (p.skin) {
    const knives = SKINS.filter(s => s.cat === "knives" && s.price >= 3000 && s.price <= 8000);
    const s = knives[Math.floor(Math.random() * knives.length)] || SKINS.find(x => x.cat === "knives");
    if (s) {
      user.inventory.push({uid: user.uidCounter++, skinId: s.id, name: s.name, short: s.short, price: s.price, img: s.img});
    }
  }
  saveUser(); updateBal();
  if (p.xp) addXp(p.xp);
  $("promoInput").value = "";
  toast("Промокод!", p.msg, "win");
  burstFx(true);
}
function updateStreakUI() {
  const badge = $("streakBadge");
  const num = $("streakNum");
  if (!badge || !user) return;
  if ((user.streak || 0) >= 2) {
    badge.hidden = false;
    if (num) num.textContent = user.streak;
  } else badge.hidden = true;
}



function sendToUpgrade(skinObj, invUid) {
  source = {
    type: "skin",
    id: skinObj.skinId || skinObj.id,
    name: skinObj.name,
    short: skinObj.short,
    price: skinObj.price,
    img: skinObj.img,
    invUid: invUid || null
  };
  renderSource();
  autoTarget();
  renderQuickInv();
  goPage("upgrade");
  toast("В апгрейде", skinObj.short || skinObj.name, "win");
}
function renderQuickInv() {
  const strip = $("quickInv");
  if (!strip || !user) return;
  const items = (user.inventory || []).slice().reverse().slice(0, 12);
  if (!items.length) { strip.innerHTML = ""; return; }
  strip.innerHTML = "";
  items.forEach(function(item) {
    const el = document.createElement("div");
    el.className = "qItem" + (source && source.invUid === item.uid ? " on" : "");
    el.innerHTML = '<img src="'+item.img+'" onerror="this.style.opacity=.3"><div class="qn">'+item.short+'</div><div class="qp">✦ '+fmt(item.price)+'</div>';
    el.addEventListener("click", function() {
      sendToUpgrade(item, item.uid);
    });
    strip.appendChild(el);
  });
}
function quickTargetMult(m) {
  if (!source) { toast("Сначала ставка", "Выбери скин или монеты", "lose"); return; }
  mult = m;
  document.querySelectorAll(".multBtn").forEach(function(b) {
    b.classList.toggle("active", +b.getAttribute("data-mult") === m);
  });
  autoTarget();
  toast("Цель ×"+m, target ? target.short : "", "win");
}


/* ===== TOASTS ===== */
function toast(title, body, type) {
  const box = $("toasts");
  if (!box) return;
  const el = document.createElement("div");
  el.className = "toast " + (type || "");
  const icon = type === "win" ? "✨" : type === "lose" ? "💀" : "ℹ️";
  el.innerHTML = '<div class="ti">' + icon + '</div><div><div class="tt">' + title + '</div><div class="tb">' + (body || "") + '</div></div>';
  box.appendChild(el);
  setTimeout(function() {
    el.classList.add("out");
    setTimeout(function() { el.remove(); }, 300);
  }, 3200);
}

/* ===== LEVEL / XP / DAILY ===== */
function xpForLevel(lv){ return lv * 100; }
function addXp(amount){
  if(!user) return;
  user.xp = (user.xp||0) + amount;
  let leveled = false;
  while(user.xp >= xpForLevel(user.level||1)){
    user.xp -= xpForLevel(user.level||1);
    user.level = (user.level||1) + 1;
    leveled = true;
  }
  saveUser();
  updateLevelUI();
  if(leveled){
    // small reward
    const bonus = (user.level||1) * 50;
    user.balance += bonus;
    saveUser(); updateBal();
    burstFx(true);
    setTimeout(function(){
      toast("Уровень "+user.level+"!","Бонус ✦ "+bonus,"win");
    }, 300);
  }
}
function updateLevelUI(){
  if(!user) return;
  const el = $("levelNum");
  if(el) el.textContent = user.level||1;
}
function updateDailyBtn(){
  const btn = $("dailyBtn");
  if(!btn||!user) return;
  const now = Date.now();
  const day = 24*60*60*1000;
  if(user.lastDaily && (now - user.lastDaily) < day){
    btn.classList.add("claimed");
    btn.textContent = "✓ Бонус";
  } else {
    btn.classList.remove("claimed");
    btn.textContent = "🎁 Бонус";
  }
}
function claimDaily(){
  if(!user) return;
  const now = Date.now();
  const day = 24*60*60*1000;
  if(user.lastDaily && (now - user.lastDaily) < day){
    const left = day - (now - user.lastDaily);
    const h = Math.ceil(left/3600000);
    $("dailyTitle").textContent = "Уже получено";
    $("dailyMsg").textContent = "Следующий бонус через ~"+h+" ч.";
    const need = xpForLevel(user.level||1);
    $("xpBar").style.width = Math.min(100, ((user.xp||0)/need)*100) + "%";
    $("xpText").textContent = "XP: "+(user.xp||0)+" / "+need+" · Уровень "+(user.level||1);
    $("dailyOkBtn").textContent = "OK";
    $("dailyModal").hidden = false;
    return;
  }
  const reward = 300 + (user.level||1) * 50;
  const xpGain = 40 + (user.level||1) * 5;
  user.balance += reward;
  user.lastDaily = now;
  saveUser(); updateBal();
  addXp(xpGain);
  updateDailyBtn();
  $("dailyTitle").textContent = "Ежедневный бонус!";
  $("dailyMsg").textContent = "Получено ✦ "+reward+" и +"+xpGain+" XP";
  const need = xpForLevel(user.level||1);
  $("xpBar").style.width = Math.min(100, ((user.xp||0)/need)*100) + "%";
  $("xpText").textContent = "XP: "+(user.xp||0)+" / "+need+" · Уровень "+(user.level||1);
  $("dailyOkBtn").textContent = "Забрать";
  $("dailyModal").hidden = false;
  burstFx(true);
}


/* ===== FX / CONFETTI ===== */
function burstFx(isWin) {
  const c = $("fx");
  if (!c) return;
  c.classList.add("on");
  const ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  const parts = [];
  const colors = isWin
    ? ["#30d158","#ffd60a","#00c8ff","#ff9f0a","#fff"]
    : ["#ff2d55","#666","#888"];
  for (let i = 0; i < (isWin ? 80 : 30); i++) {
    parts.push({
      x: c.width / 2 + (Math.random() - 0.5) * 200,
      y: c.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: -Math.random() * 12 - 4,
      g: 0.25 + Math.random() * 0.15,
      size: 3 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1,
      decay: 0.01 + Math.random() * 0.015,
      rot: Math.random() * 360,
      rv: (Math.random() - 0.5) * 10
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    let alive = false;
    for (const p of parts) {
      if (p.life <= 0) continue;
      alive = true;
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      p.rot += p.rv;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    }
    frame++;
    if (alive && frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, c.width, c.height); c.classList.remove("on"); }
  }
  draw();
}


/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", function(){
  // Tick marks on dial
  const ticks = document.getElementById("tickMarks");
  if (ticks) {
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * 360;
      const r1 = i % 5 === 0 ? 136 : 142;
      const r2 = 148;
      const rad = (a - 90) * Math.PI / 180;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", 160 + r1 * Math.cos(rad));
      line.setAttribute("y1", 160 + r1 * Math.sin(rad));
      line.setAttribute("x2", 160 + r2 * Math.cos(rad));
      line.setAttribute("y2", 160 + r2 * Math.sin(rad));
      line.setAttribute("stroke", i % 5 === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)");
      line.setAttribute("stroke-width", i % 5 === 0 ? "1.5" : "1");
      ticks.appendChild(line);
    }
  }

  // Auth tabs
  $("tabLogin").addEventListener("click", function(){
    authMode="login"; this.classList.add("active"); $("tabReg").classList.remove("active");
    $("loginBtn").textContent="Войти"; $("loginErr").textContent="";
  });
  $("tabReg").addEventListener("click", function(){
    authMode="reg"; this.classList.add("active"); $("tabLogin").classList.remove("active");
    $("loginBtn").textContent="Создать аккаунт"; $("loginErr").textContent="";
  });
  $("loginBtn").addEventListener("click", doLogin);
  $("loginPass").addEventListener("keydown", function(e){ if(e.key==="Enter") doLogin(); });
  $("loginName").addEventListener("keydown", function(e){ if(e.key==="Enter") $("loginPass").focus(); });

  // Nav
  document.querySelectorAll(".navBtn").forEach(function(btn){
    btn.addEventListener("click", function(){ goPage(this.getAttribute("data-page")); });
  });

  // Theme
  $("dailyBtn").addEventListener("click", claimDaily);
  if($("promoBtn")) $("promoBtn").addEventListener("click", activatePromo);
  if($("promoInput")) $("promoInput").addEventListener("keydown", function(e){ if(e.key==="Enter") activatePromo(); });
  if($("catSearch")) $("catSearch").addEventListener("input", function(){ renderCatalog(); });
  if($("catSort")) $("catSort").addEventListener("change", function(){ renderCatalog(); });
  $("dailyOkBtn").addEventListener("click", function(){ $("dailyModal").hidden=true; });
  $("themeBtn").addEventListener("click", function(){
    themeIdx=(themeIdx+1)%THEMES.length;
    document.body.className=THEMES[themeIdx];
    localStorage.setItem("sd_theme", THEMES[themeIdx]);
    var names=["Классика","Фиолет","Синий","Кримсон","Золото"];
    toast("Тема", names[themeIdx]||"Классика", "");
  });
  const savedTheme=localStorage.getItem("sd_theme")||"";
  themeIdx=Math.max(0, THEMES.indexOf(savedTheme));
  document.body.className=THEMES[themeIdx];

  // Catalog tabs
  document.querySelectorAll(".tabBtn").forEach(function(btn){
    btn.addEventListener("click", function(){
      document.querySelectorAll(".tabBtn").forEach(b=>b.classList.remove("active"));
      this.classList.add("active");
      cat=this.getAttribute("data-cat");
      renderCatalog();
    });
  });

  // Multipliers
  document.querySelectorAll(".qTgt").forEach(function(btn){
    btn.addEventListener("click", function(){ quickTargetMult(+this.getAttribute("data-mult")); });
  });
  document.querySelectorAll(".multBtn").forEach(function(btn){
    btn.addEventListener("click", function(){
      document.querySelectorAll(".multBtn").forEach(b=>b.classList.remove("active"));
      this.classList.add("active");
      mult=+this.getAttribute("data-mult");
      if(source) autoTarget(); else calcChance();
    });
  });

  // Coins
  document.querySelectorAll(".coinBtn").forEach(function(btn){
    btn.addEventListener("click", function(){ setCoins(+this.getAttribute("data-pct")); });
  });

  // Clear slots
  $("clearSource").addEventListener("click", function(){
    source=null; renderSource(); calcChance();
    document.querySelectorAll(".coinBtn").forEach(b=>b.classList.remove("active"));
  });
  $("clearTarget").addEventListener("click", function(){ target=null; renderTarget(); calcChance(); });

  // Upgrade
  $("upgradeBtn").addEventListener("click", doUpgrade);

  // Case modal
  $("caseTakeBtn").addEventListener("click", function(){
    takeWin(); $("caseModal").hidden=true; goPage("inv"); renderQuickInv();
  });
  if ($("caseUpgradeBtn")) $("caseUpgradeBtn").addEventListener("click", function(){
    const item = takeWin();
    $("caseModal").hidden = true;
    if (item) sendToUpgrade(item, item.uid);
    else goPage("upgrade");
  });
  $("caseAgainBtn").addEventListener("click", function(){
    takeWin();
    if(curCase&&user.balance>=curCase.price) openCase(curCase.id);
    else $("caseModal").hidden=true;
  });
  $("caseCloseBtn").addEventListener("click", function(){
    takeWin(); $("caseModal").hidden=true; renderCases();
  });

  // Result modal
  $("resultOkBtn").addEventListener("click", function(){ $("resultModal").hidden=true; });

  // Auto login
  const ses=getSession();
  if(ses){
    const u=getUsers().find(x=>x.name===ses);
    if(u) enterApp(u);
  }
});

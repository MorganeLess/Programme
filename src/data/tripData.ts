export interface TripPoint {
    category: any;
    name: string;
    description: string;
    coordinates: [number, number];
    image?: string; 
    link?: string; 
    address?: string; 
  }
  
  
  export interface TripDay {
    date: string;
    title: string;
    points: TripPoint[];
  }
  
  export const tripData: TripDay[] = [
  {
    date: "21/08",
    title: "Arrivée à Osaka",
    points: [
      {
        name: "Arrivée à l'aéroport d'Osaka à 10h",
        description:
          "Vol atterrissant à l’aéroport de Kansai, à environ 1h du centre-ville.",
        coordinates: [34.2601, 135.1403],
        image:
          "https://lh3.googleusercontent.com/p/AF1QipOMJfMZYGmXYs52s3ejgj5C6Mmf4MacyMSHkFoy=s1360-w1360-h1020",
        category: "",
      },
      {
        name: "Dépot des valise dans un locker",
        description:
          "On dépose nos bagage au Airbnb soit au Locker Yamato Transport Osaka Ote-dori 1 Center (Bounce). Puis go manger dans un truc rapide et pas trop cher (mcdo, starbuck)",
        coordinates: [34.6938, 135.5183],
        image:
          "https://fee-revee.com/wp-content/uploads/2022/07/faire-sa-valise-pour-un-long-sejour-conseils-et-astuces-01.jpg",
        link: "",
        address: "",
        category: "",
      },
      {
        name: "Exploration de Temmabashi et visite du château d'Osaka",
        description:
          "Balade dans le quartier, puis visite des jardins et du château emblématique d’Osaka. Exploration du quartier de Temmabashi, et visite du château d'Osaka et ses jardins. L'intérieur du chateau est un musée qu'on va visiter",
        coordinates: [34.68733, 135.52564],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Nishinomaru_Garden_Osaka_Castle06s4s4272.jpg/960px-Nishinomaru_Garden_Osaka_Castle06s4s4272.jpg",
        link: "https://fr.wikipedia.org/wiki/Ch%C3%A2teau_d%27Osaka",
        address: "1-1 Osakajo, Chuo Ward, Osaka, 540-0002, Japon",
        category: "culture",
      },
      {
        name: "Hébergement près du pont Temmabashi",
        description:
          "Airbnb situé à quelques minutes à pied du métro, dans un quartier calme et central. Soit on dépose nos bagage au Airbnb soit au Locker Yamato Transport Osaka Ote-dori 1 Center (Bounce)",
        coordinates: [34.6938, 135.5183],
        image:
          "https://a0.muscache.com/im/pictures/miso/Hosting-1084618355066337500/original/ee6c92e4-0d93-4036-b352-1f44b6503857.jpeg?im_w=960",
        link: "https://www.airbnb.fr/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMKFMX4MWD",
        address: "Tenma Kita Ward, Osaka, Osaka 530-0043, Japon",
        category: "",
      },
      {
        name: "Dîner sur un rooftop stylé (Blue Birds)",
        description:
          "Il faut rentrer se préparer et se faire beau car on va manger dans un roopftop bien stylé réservation à 19h avec bbq japonais et viandes de qualité.",
        coordinates: [34.6876, 135.5256],
        image:
          "https://tblg.k-img.com/restaurant/images/Rvw/202965/640x640_rect_ca4999ee0cba6fe4eb88cf9cff3e1bc9.jpg",
        link: "https://booking.ebica.jp/webrsv/booked/info/345981663?site_code=e014007601&shop_id=15214&auth_key=64be6200c4295e6ee9e03d55a77f43ba29ff8da31412083e285c8ffbbb2382d50ef28e1c736da66b1987d1bc748559f6f0bb38142d52bbf7d61a275669cbc1ac",
        address: "1-chōme-7-5 Ōtemae, Chuo Ward, Osaka, 540-0008, Japon",
        category: "food",
      },
    ],
  },

  {
    date: "22/08",
    title: "Osaka - Shinsekai",
    points: [
      {
        name: "Transfert vers l'Airbnb de Tengachaya",
        description: "Transfert vers notre nouvel hébergement à Tengachaya, on peut mettre nos valises dans le locker du airbnb ",
        coordinates: [34.6384, 135.4989],
        image:
          "https://a0.muscache.com/im/pictures/e4ff7b4c-03fe-4109-934f-f2490035299c.jpg?sw_cache=trips_images&im_w=720",
        link: "https://www.airbnb.fr/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HM25N3JQ2B",
        address:
          "3-23-8 Tengachaya, Nishinari-ku, Ōsaka-shi, Ōsaka-fu 557-0014, Japon",
        category: "",
      },
      {
        name: "Visite de l’un des plus vieux temple du japon le shi tennō-ji",
        description:
          "Shitenno-ji est l’un des plus vieux temples bouddhistes japonais situé au sud-est d’Osaka. Il s'agit du premier édifice à avoir été commandité par l'Empereur, alors que le bouddhisme ne s'était pas encore répandu au Japon. Bien que des incendies successifs l'aient ravagé au fil des siècles, il est actuellement reconstruit à l’image de sa création au VIe siècle.",
        coordinates: [34.6546058654785161, 135.5167694091797],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Shitennoji03s3200.jpg/1200px-Shitennoji03s3200.jpg",
        link: "https://www.kanpai.fr/osaka/shitenno-ji",
        address: "1 Chome-11-18 Shitennoji, Tennoji Ward, Osaka, 543-0051, Japon",
        category: "culture",
      },
      {
        name: "Direction le Kuromon market pour découvir des spécialités et manger le midi ",
        description:
          "Des étals de poissons et de produits frais bordent la longue ruelle étroite de Kuromon Ichiba, un marché à l'ancienne dans le quartier Namba à Osaka. Les clients choisissent soigneusement leurs produits parmi tous ceux présentés, au son des cris des pêcheurs faisant la promotion de leurs prises.",
        coordinates: [34.6664433, 135.5070407],
        image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e0/90/c2/kuromon-market.jpg?w=900&h=500&s=1",       
        link: "https://www.kanpai.fr/osaka/kuromon",
        address: "2 Chome Nipponbashi, Chuo Ward, Osaka, 542-0073, Japon",
        category: "food",
      },
      {
        name: "Nipponbashi Denden Town",
        description:
          "Quartier très prisé comprenant des magasins spécialisés dans les jeux vidéo d'occasion, le high-tech, les animes et les mangas.",
        coordinates: [34.6671327, 135.5064118],
        image:"https://www.kanpai.fr/sites/default/files/styles/big_header_lg/public/uploads/2020/08/den-den-town-osaka-12.jpg",       
        link: "https://www.kanpai.fr/osaka/den-den-town-otaroad",
        address: "Nipponbashi, Naniwa Ward, Osaka, 556-0005, Japon",
        category: "shopping",
      },
      {
        name: "America mura",
        description:
          "America-Mura est un quartier animé axé sur la culture jeune occidentale. Il forme un petit village autour du parc triangulaire Sankaku Koen, où les habitants aiment se retrouver.",
        coordinates: [34.672815, 135.498492],
        image:"https://imagedelivery.net/Ahwf2rDz3ZiXm1qkpDKg1w/live/-/media/C8FD8945F9DA438392ED655730057126.jpg/w=750?d=20241120T085945&w=750",       
        link: "https://www.kanpai.fr/osaka/america-mura",
        address: "アメリカ村, 清水町筋, 中央区, Osaka, Préfecture d'Osaka 542-0086, Japon",
        category: "shopping",
      },
      {
        name: "Direction le quartier de Shinsekai",
        description:
          "Le quartier de Shinsekai est un quartier populaire d'Osaka, connu pour son ambiance rétro et ses attractions touristiques. C'est carrément une fête foraine à ciel ouvert, avec des manèges, des jeux d'arcade. Pour le midi on peut manger dans un des nombreux restaurants de kushikatsu (brochettes frites) de Shinsekai (Une des spécialité culinaire d’Osaka). Tsutenkaku, littéralement la tour qui mène au ciel, se situe au cœur du quartier de Shinsekai à Osaka. Son plus haut point culmine à 108 mètres d'altitude et elle propose plusieurs plateformes d’observation sur la ville. Ses illuminations nocturnes quotidiennes et sa silhouette singulière en ont fait un des symboles d’Osaka et l’emblème de Shinsekai.",
        coordinates: [34.6520901, 135.5061908],
        image:
          "https://s3.voyapon.com/wp-content/uploads/sites/2/2020/06/03173538/Osaka_Shinsekai_86.jpg",
        link: "https://www.kanpai.fr/osaka/shinsekai",
        address: "2 Chome Ebisuhigashi, Naniwa Ward, Osaka, 556-0002, Japon",
        category: "culture",
      },

      {
        name: "Dîner au restaurant Kitanoya + promenade nocturne",
        description:
          "Diner au restaurant Kitanoya. On peut ensuite se promener dans le quartier la nuit apparement la nuit l’ambiance est totalement différentes. (Puisque la journée aura été assez tranquille on peut se coucher tôt et se lever en pleines nuit pour aller dans un kombini ou se coucher tard pour aller dans un kombini la nuit) ",
        coordinates: [34.6524, 135.5062],
        image:
          "https://lh3.googleusercontent.com/p/AF1QipO9YIo_N_K8Y1wqs_rabLhnK3R6v0IMCM5va6Jj=s1600-w640",
        link: "https://www.instagram.com/kitanoya_official?igshid=YmMyMTA2M2Y%3D",
        address: "3 Chome-2-19 Ebisuhigashi, Naniwa Ward, Osaka, 556-0002, Japon",
        category: "food",
      },
    ],
  },
  {
    date: "23/08",
    title: "Excursion à Nara",
    points: [
      {
        name: "Visite du parc de Nara (daims en liberté)",
        description:
          "Le parc de Nara (奈良公園, Narakōen?) est un parc public de la ville de Nara au Japon, situé au pied du mont Wakakusa, fondé en 1880 et administré par la préfecture de Nara. Le parc est l'un des lieux de beauté pittoresques désignés par le ministère de l'Éducation. Plus de 1 200 cerfs sika sauvages ((シカ?) ou (鹿?) shika) déambulant librement dans le parc.",
        coordinates: [34.6829008, 135.8545975],
        image: "https://www.kanpai.fr/sites/default/files/uploads/parc-nara-5.jpg",
        link: "https://www.kanpai.fr/nara/parc",
        address: "Nara, Japon",
        category: "nature",
      },

      {
        name: "Temple Tōdai-ji + Grand Bouddha",
        description:
          "Le Tōdai-ji, de son nom complet Kegon-shū daihonzan Tōdai-ji, est un temple bouddhique situé à Nara au Japon. Il est le centre des écoles Kegon et Ritsu, mais toutes les branches du bouddhisme japonais y sont étudiées et le site comprend de nombreux temples et sanctuaires annexes.",
        coordinates: [34.6895449, 135.8474922],
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNh5NW0LFaa9dAcIMJDM9fhd_DYGW9SWtjsNM2z=s1360-w1360-h1020-rw",
        link: "https://www.kanpai.fr/nara/todai-ji",
        address: "406-1 Zoshicho, Nara, 630-8587, Japon",
        category: "temple",
      },
      {
        name: "Sanctuaire Kasuga-taisha",
        description:
          "Le Kasuga-taisha est un sanctuaire shinto de la ville de Nara, dans la préfecture du même nom au Japon. Établi en 768 et reconstruit plusieurs fois au cours des siècles, c'est le sanctuaire tutélaire de la famille Fujiwara.",
        coordinates: [34.681312561035156, 135.84657287597656],
        image:
          "https://lh3.googleusercontent.com/p/AF1QipN9pxavBjdsw03OGmMTyzTsv314Am-MsUBrBUXE=s1360-w1360-h1020-rw",
        link: "https://www.kanpai.fr/nara/kasuga-taisha",
        address: "160 Kasuganocho, Nara, 630-8212, Japon",
        category: "temple",
      },

      {
        name: "Arrêt à la boutique Nakatanidou",
        description:
          "Cette boutique fabrique des mochi de manière traditionnels environ toutes les 30min de plus ils sont apparement excellent !!",
        coordinates: [34.6821036, 135.828883],
        image:
          "https://nakatanidou.jp/aELdh6v3FzCf/wp-content/themes/nakatanidou/images/item/bg.jpg",
        link: "https://nakatanidou.jp/",
        address: "29 Hashimotocho, Nara 630-8217 Préfecture de Nara",
        category: "food",
      },

        {
          name: "Retour a Osaka Découverte de Dotonbori",
          description:
            "Dōtonbori (道頓堀?) est l'une des principales destinations touristiques de la ville d'Osaka au Japon. C'est une rue unique, longeant le canal Dōtonbori entre le pont Dōtonbori (道頓堀橋) et le pont Nipponbashi (日本橋), dans le quartier de Namba.",
          coordinates: [34.6690306, 135.5015715],
          image:
            "https://onb-cdn.b-cdn.net/images-stn-osaka/118-Dotonbori-Area-Osaka1.jpg",
          link: "https://www.kanpai.fr/osaka/dotonbori",
          address: "Dotonbori, Chūō-ku, Osaka",
          category: "culture",
        },

      {
        name: "Okonomiyaki",
        description:
          "Go manger une spécialité locale les okonomiyaki. L'okonomiyaki est une épaisse crêpe salée réalisée à base de farine de blé et fourrée au chou, au porc et aux fruits de mer. Il s'agit d'un plat chaud typique de la cuisine japonaise quotidienne et festive, originaire de la région du Kansai et d'Osaka. Par exemple dans ce restaurant",
        coordinates: [34.6685086, 135.5104901],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/1200px-Okonomiyaki_001.jpg",
        link: "https://mizuno.gorp.jp/",
        address:
          "1 Chome-4-15 Dotonbori, Chuo Ward, Osaka, 542-0071, Japon",
        category: "food",
      },
    ],
  },
  {
    date: "24/08",
    title: "Anniversaire de Morgane = shoppingggg",
    points: [
      {
        name: "Visite du temple Namba Yasaka-jinja",
        description:
          "Le Namba Yasaka-jinja (難波八阪神社?) est un sanctuaire shinto dans l'arrondissement Naniwa-ku d'Osaka.",
        coordinates: [34.662410736083984, 135.4961700439453],
        image:
          "https://www.kanpai.fr/sites/default/files/styles/og/public/uploads/2014/04/namba-yasaka-jinja-5.jpg",
        link: "https://www.kanpai.fr/osaka/namba-yasaka-jinja",
        address: "2 Chome-9-19 Motomachi, Naniwa Ward, Osaka, 556-0016, Japon",
        category: "temple",
      },
      {
        name: "Shopping à Daimaru Shinsaibashi",
        description:
          "Grand magasin animé composé de diverses boutiques célèbres et de restaurants (Jump store, pokemon center, pokemon café).",
        coordinates: [34.69374, 135.50218],
        image:
          "https://lh3.googleusercontent.com/p/AF1QipOnKaN5Fxwhh6Jrt_qTQvvyqeFIRfR_IvqCHWZz=s1360-w1360-h1020-rw",
        link: "https://www.daimaru.co.jp/shinsaibashi-store/e/",
        address:
          "1 Chome-7-1 Shinsaibashisuji, Chuo Ward, Osaka, 542-8501, Japon",
        category: "shopping",
      },
      {
        name: "Shopping dans la boutique side b",
        description:
          "B-Side Label est composé d'artistes japonais qui créent des stickers et s'expriment à travers leurs styles pop art personnels. Le résultat est une œuvre très originale qui, nous l'espérons, plaira à tous et égayera votre journée.",
        coordinates: [34.6704311, 135.5060499],
        image:
          "https://bside-label.com/wp-content/uploads/2018/07/top.png",
        link: "https://bside-label.com/en",
        address:
          "2-8-27 Shinsaibashi, Chuo-ku, Osaka-shi Osaka 542-0085",
        category: "shopping",
      },
      {
        name: "Shopping au Namba Parks",
        description:
          "Namba Parks est un complexe de bureaux et de commerces situé à Namba-naka Nichome, Naniwa-ku, Osaka, Japon, au sud de la gare de Namba sur la voie ferrée de Nankai. Il se compose d'un immeuble de bureaux de grande hauteur appelé Parks Tower et d'un centre commercial de 120 locataires avec jardin sur le toit. (ABC-Mart 😉😉😉😉)",
        coordinates: [34.69374, 135.50218],
        image:
          "https://lh3.googleusercontent.com/p/AF1QipOy52ehU2iPo2lrROeQ3lr9BW8qsA5odUocBkdt=s1360-w1360-h1020-rw",
        link: "https://nambaparks.com/",
        address: "2 Chome-10-70 Nanbanaka, Naniwa Ward, Osaka, 556-0011, Japon",
        category: "shopping",
      },
      {
        name: "Apple Store",
        description:
          "Boutique Apple proposant des iPhone, des iPad et d'autres articles dans des espaces élégants.",
        coordinates: [34.6704311, 135.5060499],
        image:
          "https://pic.k-cdn.media/2019/06/IMG_0429-720x480.jpg",
        link: "https://metronine.osaka/en/spot-details/?spot_id=15623436455012",
        address:
          "Japon, 〒542-0086 Osaka, Chuo Ward, Nishishinsaibashi, 1 Chome−5−5 アーバンBLD心斎橋",
        category: "shopping",
      },

      {
        name: "Diner au restaurant SKY DINING UOMAN 24/08 à 19h ",
        description:
          "Profitez de la vue nocturne et de la délicieuse cuisine japonaise au restaurant buffet du 40e étage",
        coordinates: [34.6657301, 135.495488],
        image:
          "https://media.esprot.cloud/images/GGSMODT96WB7uNIapgRR/WUbCVTRlH0gGFowdasRj/GjG8OCO9cAM5YETc5XkA.jpg?quality=60&size=xl&square=1",
        link: "https://media.discordapp.net/attachments/1368956290755334144/1387328663531552870/Screenshot_2025-06-20_at_11.49.41.png?ex=68813340&is=687fe1c0&hm=033dc625fe7dd9c3bcd7cc943a3ab8c685a0d1bcdddefec8f44f6577f4dbacc5&=&format=webp&quality=lossless&width=1108&height=1554",
        address: "1 Chome-2-13 Minatomachi, Naniwa Ward, Osaka, 556-0017, Japon",
        category: "culture",
      },
    ],
  },
  {
    date: "25/08",
    title: "Excurssion à Minoo",
    points: [
      {
        name: "Temple Katsuō-ji ",
        description:
          "Katsuo-ji est un temple bouddhiste situé dans les montagnes de la ville de Minoh, en banlieue nord d'Osaka. Il est depuis plusieurs siècles l'une des étapes du pèlerinage de Kansai Kannon. Aujourd'hui, il est également réputé pour ses poupées traditionnelles Daruma, symbole de bonne fortune et de vœux exaucés.",
        coordinates: [34.844588, 135.508782],
        image:
          "https://osaka-info.jp/spot/images/933364acff8de637e6e70f4ccc4e3013410542a2.jpg",
        link: "https://www.kanpai.fr/osaka/katsuo-ji-minoh",
        address: "2914-1 Aomatani, Minoh, Osaka 562-8508, Japon",
        category: "temple",
      },
      {
        name: "Randonée pour rejoindre la cascade de Minoo",
        description:
          "Cascade de 33 mètres entourée d'arbres à feuillage caduc, avec sentier de randonnée facile et nombreux bancs.",
        coordinates: [34.8439, 135.4715],
        image:
          "https://www.kanpai.fr/sites/default/files/uploads/2013/02/minoh-16.jpg",
        link: "https://www.kanpai.fr/osaka/parc-minoh",
        address: "2-２ Minookoen, Minoh, Osaka 562-0002, Japon",
        category: "nature",
      },
      {
        name: "Dégustation momiji tempura",
        description:
          "Momiji signifie « érable » en Japonais, Momiji tempura est donc une tempura de feuille d’érable, c’est-à-dire des beignets frits de feuilles d’érables",
        coordinates: [34.846375, 135.472672],
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1aFmtGBLhhyg4U5RQNlzSyaRhrulF5OPYw&s",
        link: "https://www.geo.fr/voyage/le-tempura-a-la-feuille-erable-une-specialite-japonaise-tres-originale-beignet-momiji-217659",
        address: "2-２ Minookoen, Minoh, Osaka 562-0002, Japon",
        category: "food",
      },

      {
        name: "Retour à Osaka + soirée sushis",
        description:
          "J'ai trouvé un restaurant de sushis à Osaka qui a l'air bon, mais assez loin du Airbnb donc au pire on ira ailleurs",
        coordinates: [34.7015017, 135.5317706],
        image:
          "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/64EF898D-2EDD-4B47-A456-E6A7D137AC91/Derivates/00f76cac-64f6-4573-be4f-e604a7d99143.jpg",
        link: "https://tabelog.com/en/osaka/A2701/A270304/27002956/",
        address: "1-1-1, Miyakojima-minamidori, Miyakojima-ku, Osaka, Osaka",
        category: "food",
      },
    ],
  },
  {
    date: "26/08",
    title: "Universal Studios Japan",
    points: [
      {
        name: "Journée au parc Universal studio Osaka (arriver 1h avant l’ouverture !! on va devoir se lever tôt zebi)",
        description:
          "Les zones et attractions les plus intéressantes sont, Nitendo world, Le monde d’Harry potter, L’attraction JJK",
        coordinates: [34.6686609, 135.425249],
        image:
          "https://www.usj.co.jp/tridiondata/usj/ja/jp/files/images/gds-images/usj-gds-super-nintendo-world-overall-view-gallery-a.jpg",
        link: "https://www.usj.co.jp/web/ja/jp",
        address: "2 Chome-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031, Japon",
        category: "activities",
      },
    ],
  },
  {
    date: "27/08",
    title: "Osaka puis départ Kyoto",
    points: [
      {
        name: "Visite temple Shitenno-ji",
        description:
          "L’un des plus anciens temples bouddhistes du Japon, fondé en 593. Un lieu paisible et riche en histoire",
        coordinates: [34.6559, 135.5156],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Shitennoji03s3200.jpg",
        link: "https://www.kanpai.fr/osaka/shitenno-ji",
        address: "1 Chome-11-18 Shitennoji, Tennoji Ward, Osaka, 543-0051, Japon",
        category: "temple",
      },
      {
        name: "Balade dans le quartier d'Umeda puis shopping au Grand Front Osaka",
        description:
          "Grand Front Osaka (グ ラ ン フ ロ ン ト 大阪) est un grand complexe commercial au nord de la gare JR Osaka dans le quartier d’Umeda ",
        coordinates: [34.7044291, 135.4945025],
        image: "https://nippon-touch.com/wp-content/uploads/Grand-Front-Osaka.jpg",
        link: "https://www.grandfront-osaka.jp/",
        address: " 4-20 Ofukacho, Kita Ward, Osaka, 530-0011, Japon",
        category: "shopping",
      },
      {
        name: "Vue depuis l’Umeda Sky Building",
        description:
          "L'Umeda Sky Building est un gratte-ciel situé à Osaka au Japon achevé en 1993. Situé dans le quartier d'Umeda, arrondissement de Kita-ku, il est accessible par les gares d'Osaka ou d'Umeda.",
        coordinates: [34.6937, 135.5023],
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqRrN0t3vPk3Gv4D_I8Qih0ZItxNOy3J865rGgJZcN_4r7ok9eraNcKnOL7YMYx2ymrb9VwNoVKuWk0bFK47j6j33O1hY0WwgildqOYbBoqYbN8J7RYF12ochdIicJ5-DER-EI=s1360-w1360-h1020-rw",
        link: "https://docs.google.com/document/d/1V1S0ArXpHU0oQ5aInwuV_07SmL-KpHJ18A7ElmjDYks/edit?usp=sharing",
        address: " 1 Chome-1-88 Oyodonaka, Kita Ward, Osaka, 531-6023, Japon",
        category: "activities",
      },
      {
        name: "Départ pour notre Airbnb à Kyoto",
        description: "On prend le train pour Kyoto, environ 30min de trajet",
        coordinates: [35.0076, 135.7387],
        image:
          "https://a0.muscache.com/im/pictures/b6139d44-327c-49f1-84fd-35b92812dc28.jpg?sw_cache=trips_images&im_w=720",
        link: "https://www.airbnb.fr/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMJ4KR4DYM",
        address:
          "1-106 Mibushinmeichō 中京区, Nakagyō-ku, Kyōto-shi, Kyōto-fu 604-8861, Japon",
        category: "",
      },
    ],
  },
  {
    date: "28/08",
    title: "Temples emblématiques ",
    points: [
      {
        name: "Visite du Kinkaku-ji (Pavillon d'Or)",
        description:
          "Le Kinkaku-ji est le nom d'usage donné au temple bouddhiste Rokuon-ji, situé au nord de Kyoto. Très célèbre, inscrit au Patrimoine de l'Unesco et donc extrêmement fréquenté par les visiteurs, il est surnommé le Pavillon d'Or pour ces magnifiques façades recouvertes à la feuille d'or.",
        coordinates: [35.0222, 135.4342],
        image:
          "https://www.kanpai.fr/sites/default/files/styles/big_header_lg/public/uploads/2021/10/kinkaku-ji-18.jpg",
        link: "https://fr.wikipedia.org/wiki/Kinkaku-ji",
        address: "1 Kinkakujicho, Kita Ward, Kyoto, 603-8361, Japon",
        category: "temple",
      },
      {
        name: "Ryoan-ji",
        description:
          "Littéralement « Temple du repos du dragon ») est un temple zen situé dans le nord-ouest de Kyōto, construit au xvie siècle, à l'époque de Muromachi. Il fait partie du Patrimoine mondial de l'UNESCO",
        coordinates: [35.0204, 135.4306],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9b/RyoanJi-Dry_garden.jpg",
        link: "https://fr.wikipedia.org/wiki/Ry%C5%8DAn-ji",
        address: " 4-20 Ofukacho, Kita Ward, Osaka, 530-0011, Japon",
        category: "temple",
      },
      {
        name: "Ninna-ji",
        description:
          "Le Ninna-ji est un temple bouddhiste japonais de la secte shingon, fondé en 888 par l'empereur Uda et faisant partie des monuments historiques de l'ancienne Kyōto inscrits au patrimoine mondial de l'UNESCO",
        coordinates: [35.0159, 135.4250],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ninnaji_Kyoto06s3s4410.jpg/500px-Ninnaji_Kyoto06s3s4410.jpg",
        link: "https://fr.wikipedia.org/wiki/Ninna-ji",
        address: "33 Omuroouchi, Ukyo Ward, Kyoto, 616-8092, Japon",
        category: "temple",
      },
      {
        name: "Balade nocturne dans l'allée de Ponto-chō",
        description:
          "Pontocho est une célèbre allée piétonne typique de 500 mètres de long située entre les avenues Shijo-dori et Sanjo-dori, parallèle à la rivière Kamo-gawa dans le centre-ville de Kyoto. Bordée de nombreux restaurants et bars, elle est réputée pour sa vie nocturne animée et ses bonnes adresses pour dîner. Pontocho désigne également un quartier de Geisha historique de la ville.",
        coordinates: [35.0029, 135.4616],
        image:
          "https://www.kanpai.fr/sites/default/files/uploads/2022/01/pontocho-kyoto-6.jpg",
        link: "https://fr.wikipedia.org/wiki/Ponto-ch%C5%8D",
        address: "Pontocho s'étend de la rue Sanjo à la rue Shijo",
        category: "culture",
      },
    ],
  },
  {
    date: "29/08",
    title: "Visite du centre historique de Kyoto",
    points: [
      {
        name: "Départ tôt direction Fushimi Inari Taisha, les torii rouges",
        description:
          "Le Fushimi Inari-taisha (伏見稲荷大社?) est le sanctuaire principal de la déesse (kami) Inari et est situé dans le district de Fushimi-ku à Kyoto au Japon.",
        coordinates: [34.9678, 135.7822],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/KyotoFushimiInariLarge.jpg/2560px-KyotoFushimiInariLarge.jpg",
        link: "https://fr.wikipedia.org/wiki/Fushimi_Inari-taisha",
        address: "68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto, 612-0882, Japon",
        category: "temple",
      },
      {
        name: "Gion Le quartier traditionnel au cœur de Kyoto",
        description:
          "Gion est l'un des quartiers historiques de Kyoto situé en son cœur, proche de l'avenue Shijo. Servant à l'origine d'escale aux visiteurs du sanctuaire Yasaka-jinja, ce district traditionnel s'avère aujourd'hui très apprécié des touristes car on peut y croiser des geiko et maiko à la nuit tombée. En journée, on apprécie l'architecture japonaise typique des anciennes maisons de ville qui s'alignent le long des rues du quartier.",
        coordinates: [35.00663757324219, 135.77549743652344],
        image:
          "https://www.kanpai.fr/sites/default/files/styles/big_header_lg/public/uploads/2024/04/gion-tokuya-kyoto-02.jpg",
        link: "https://www.kanpai.fr/kyoto/gion",
        address: "Quartier de Gion",
        category: "culture",
      },
      {
        name: "Gekkeikan Okura Sake Museum",
        description:
          "Le Ninna-ji est un temple bouddhiste japonais de la secte shingon, fondé en 888 par l'empereur Uda et faisant partie des monuments historiques de l'ancienne Kyōto inscrits au patrimoine mondial de l'UNESCO",
        coordinates: [34.9303321, 135.7603553],
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr9ok5Skr6Erd0YO1NV3QzH2ruO8uzjbcgg5-gn9QFl7SIX9z7hblobVCtWmwtA0H5g889lwXeUVERDLECogyskVPw2M228CUQzax1PzrHdgjZobKJf2_LV4LexHYndq82bKToS=s1360-w1360-h1020-rw",
        link: "https://gekkeikansake.resv.jp/reserve/calendar.php?direct_id=1&x=1748871776",
        address: "247 Minamihamacho, Fushimi Ward, Kyoto, 612-8660, Japon",
        category: "culture",
      },
      {
        name: "Balade dans les ruelles Sannenzaka et Ninenzaka, ruelles pavées ambiance vieille époque.",
        description:
          "Les ruelles japonaises traditionnelles de Ninenzaka et Sannenzaka se situent dans le quartier historique de Higashiyama, à l’est de Kyoto. Restaurants et boutiques de souvenirs bordent les nombreuses marches de ces rues pavées et piétonnes qui permettent de rejoindre les temples des environs. C’est aussi le lieu privilégié pour croiser des Japonais en kimono ou yukata.",
        coordinates: [34.9965, 135.7799],
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noqz_Ulzn6GzGm8qn-ijoWmtRe4jAu794L_dx9rWbgNTeVKPCiOHp7_DfTpgeN-XXMLhh9N5qTNgCyneAFfrP0-KYscusnzlcMh2GO78HIiWZ53higSZdPsP5ZubYj7jU5RMwjA=s1360-w1360-h1020-rw",
        link: "https://www.kanpai.fr/kyoto/ninenzaka-sannenzaka",
        address: "2 Chome-211 Kiyomizu, Higashiyama Ward, Kyoto, 605-0862, Japon",
        category: "culture",
      },
      {
        name: "Shopping au Kyoto Takashimaya Shopping Center",
        description:
          "Kyoto Takashimaya S.C. est un grand magasin situé au carrefour des avenues Shijo-dori et Karawamachi, dans le centre-ville de Kyoto au Japon. Largement rénové en 2023, il inaugure le nouveau bâtiment T8 qui abrite des grandes marques de la culture populaire japonaise telles que la boutique officielle Nintendo à Kyoto et l'enseigne de produits d'occasion Mandarake.",
        coordinates: [34.99289, 135.7505],
        image:
          "https://www.kanpai.fr/sites/default/files/styles/content_lg/public/uploads/2024/12/takashimaya-kyoto-02.jpg",
        link: "https://www.kanpai.fr/kyoto/takashimaya",
        address: "52 4-jo Dori Kawaramachi, Shimogyo-ku, Kyoto 600-8520 Préfecture de Kyoto",
        category: "shopping",
      },
    ],
  },

  {
    date: "30/08",
    title: "Arashiyama & nature",
    points: [
      {
        name: "Forêt de bambous de Sagano",
        description:
          "La forêt de bambous, Arashiyama Bamboo Grove ou Sagano Bamboo Forest est une forêt de bambous naturelle à Arashiyama, Kyoto, Japon. Il se compose principalement de bambous mōsō et dispose de plusieurs sentiers pour les touristes et les visiteurs.",
        coordinates: [35.016556, 135.670566],
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq1wa-ZcuO9yw0pdLdc5Ok3wtJsmih82w5QwGlMoaJ5Y7U3CNApfqyIbxMkrwDHnbOgC-g4NirbUcbjJkO1equOsJoyP0naZ3FCjv4wbRlrpHjY9YBl2hmMCRLPAB7mgpjewKloWw=s1360-w1360-h1020-rw",
        link: "https://www.kanpai.fr/kyoto/foret-bambous-arashiyama",
        address: "Sagaogurayama Tabuchiyamacho, Ukyo Ward, Kyoto, 616-8394, Japon",
        category: "nature",
      },
      {
        name: "Temple Tenryu-ji ",
        description:
          "Le Tenryū-ji est un temple bouddhiste zen relevant de l'école Rinzai. Fondé en 1345 par le shogun Takauji Ashikaga et le moine Musō Soseki, c'est le temple principal de la branche Rinzai Tenryū-ji et le premier des gozan de Kyōto.",
        coordinates: [35.015144, 135.675153],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Tenryu-Ji_Front.jpg/600px-Tenryu-Ji_Front.jpg",
        link: "https://fr.wikipedia.org/wiki/Tenry%C5%AB-ji",
        address: "Japon, 〒616-8385 Kyoto, Ukyo Ward, Sagatenryuji Susukinobabacho, ６８",
        category: "temple",
      },
      {
        name: "Randonée vers Arashiyama Monkey Park Iwatayama",
        description:
          "Le parc aux singes d'Iwatayama est un parc situé à Arashiyama à Kyoto, au Japon. Le parc est situé au sommet du mont Arashiyama, de l'autre côté de la rivière Ōi de la gare. Il est habité par une troupe de plus de 120 singes macaques japonais. Recommandation il ne faut pas les nourrir, ils sont sauvages et peuvent mordre.",
        coordinates: [35.0100073, 135.6788993],
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/df/b8/2d/singe-d-iwatayama.jpg?w=1200&h=-1&s=1",
        link: "http://www.monkeypark.jp/",
        address: "Japon, 〒616-0004 Kyoto, Nishikyo Ward, Arashiyama Nakaoshitacho, ６１",
        category: "nature",
      },
      {
        name: "Shopping au l’AEON Mall Kyoto",
        description:
          "Les ruelles japonaises traditionnelles de Ninenzaka et Sannenzaka se situent dans le quartier historique de Higashiyama, à l’est de Kyoto. Restaurants et boutiques de souvenirs bordent les nombreuses marches de ces rues pavées et piétonnes qui permettent de rejoindre les temples des environs. C’est aussi le lieu privilégié pour croiser des Japonais en kimono ou yukata.",
        coordinates: [34.9965, 135.7799],
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noqz_Ulzn6GzGm8qn-ijoWmtRe4jAu794L_dx9rWbgNTeVKPCiOHp7_DfTpgeN-XXMLhh9N5qTNgCyneAFfrP0-KYscusnzlcMh2GO78HIiWZ53higSZdPsP5ZubYj7jU5RMwjA=s1360-w1360-h1020-rw",
        link: "https://www.kanpai.fr/kyoto/ninenzaka-sannenzaka",
        address: "1 Nishikujo Toriiguchicho, Minami Ward, Kyoto, 601-8417, Japon",
        category: "shopping",
      },
    ],
  },
    {
    date: "31/08",
    title: "Derniers achats et retour à nos endroit préféré",
    points: [
      {
        name: "Marché de Nishiki",
        description:
          "Le marché de Nishiki est un marché situé à Kyoto, situé à l'extrémité est de la rue Nishikikōji-dōri. Riche d'histoires et de traditions, ce marché est visité à la fois par les touristes et les locaux, et présente une centaine de magasins spécialisés dans les produits de la région de Kyoto.",
        coordinates: [35.0103167,135.7512979],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/ac/Tsukudani_and_sozai_shop_by_drebes_in_Nishiki-ichiba%2C_Kyoto.jpg",
        link: "https://fr.wikipedia.org/wiki/March%C3%A9_de_Nishiki",
        address: "Nakagyo Ward, Kyoto, 604-8055, Japon",
        category: "food",
      },
    ],
  },
];
  
const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "What",
      artist: "Karan Aujla",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FWhat.mp3?alt=media&token=c335ceb6-297d-44d5-8ae2-e2b7df923b21",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2Fkaran%20aujla.jpg?alt=media&token=b96a03d2-1e7d-4a47-8512-c0fd204e67ec",
      category:"punjabi dance all"
    },
    {
      id: 2,
      favourite: false,
      songName: "2 Number",
      artist: "Amrinder Gill",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2F2%20Number.mp3?alt=media&token=2b618320-a451-4af5-9067-4580e074784e",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FAmrinder%20Gill.jpg?alt=media&token=ab734712-e0bb-41f4-a860-83c9066a628e",
      category:"punjabi all"
    },
    {
      id: 3,
      favourite: false,
      songName: "Admirin You",
      artist: "Karan Aujla",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FAdmirin%20You.mp3?alt=media&token=d68fba3f-f252-4c5c-890f-bbca0d08901d",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2Fkaran%20aujla.jpg?alt=media&token=b96a03d2-1e7d-4a47-8512-c0fd204e67ec",
      category:"punjabi all"
    },
    {
      id: 4,
      favourite: false,
      songName: "Badnam",
      artist: "Mankirat Aulakh",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FBadnam.mp3?alt=media&token=d4eb643e-205e-4eb8-a587-a7b3a9afff91",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FMankirt%20Aulakh.jpg?alt=media&token=0828b68d-09a0-4ec1-b5da-a31608fbe7e2",
      category:"all punjabi"
    },
    {
        id: 5,
        favourite: false,
        songName: "Baller",
        artist: "Shubh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FBaller.mp3?alt=media&token=9ec7ab40-6c86-4f9e-84de-0d68938cb8cc",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FShubh.jpg?alt=media&token=71926bff-9ddc-404a-be45-1bd5e520e38b",
        category:"all punjabi"
      },
    {
        id: 6,
        favourite: false,
        songName: "Bhabi",
        artist: "Mankirat Aulakh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FBhabi.mp3?alt=media&token=dd35accc-93a3-48a9-ae60-f2775ff436bc",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FMankirt%20Aulakh.jpg?alt=media&token=0828b68d-09a0-4ec1-b5da-a31608fbe7e2",
        category:"all punjabi"   
      },
    {
        id: 7,
        favourite: false,
        songName: "Case",
        artist: "Shubh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FCase.mp3?alt=media&token=3004da98-e82e-4e01-becc-01c9d1f71eaf",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FShubh.jpg?alt=media&token=71926bff-9ddc-404a-be45-1bd5e520e38b",
        category:"all punjabi"
      },
    {
        id: 8,
        favourite: false,
        songName: "Champion Anthem",
        artist: "Karan Aujla",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FChampions%20Anthem.mp3?alt=media&token=32994503-11d4-4d30-8224-883577300ca2",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2Fkaran%20aujla.jpg?alt=media&token=b96a03d2-1e7d-4a47-8512-c0fd204e67ec",
        category:"all punjabi"
      },
    {
        id: 9,
        favourite: false,
        songName: "Cheques",
        artist: "Shubh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FCheques.mp3?alt=media&token=b4610204-65ca-4a4a-8d0c-50b8a9224a94",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FShubh.jpg?alt=media&token=71926bff-9ddc-404a-be45-1bd5e520e38b",
        category:"all punjabi"
    },
    {
        id: 10,
        favourite: false,
        songName: "College",
        artist: "Mankirat Aulakh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FCollege.mp3?alt=media&token=96f4be7a-06db-43ae-85c7-ed1a85cc91cb",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FMankirt%20Aulakh.jpg?alt=media&token=0828b68d-09a0-4ec1-b5da-a31608fbe7e2",
        category:"all punjabi"
      },
    {
        id: 11,
        favourite: false,
        songName: "Daka",
        artist: "Diljit Dosanjh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FDaka.mp3?alt=media&token=bb10b6de-b0df-42b5-8fb0-e8924c89ebcein",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FDiljit%20Dosanjh.jpg?alt=media&token=18359aa1-c612-40a7-9420-ebc9689a2029",
        category:"all punjabi"   
      },
    {
        id: 12,
        favourite: false,
        songName: "Droptop",
        artist: "AP Dhillon",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FDroptop.mp3?alt=media&token=051a3741-1058-4ad9-8172-fbb9dc930f7e",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FAP%20Dhillon.jpg?alt=media&token=e93a9a4c-96b8-4a70-9110-c5f32ee0d110",
        category:"all punjabi"
      },
      {
        id: 13,
        favourite: false,
        songName: " Bade Miyan Chote Miyan",
        artist: " Vishal Mishra, Anirudh Ravichander",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FTitle%20Track%20Bade%20Miyan%20Chote%20Miyan.mp3?alt=media&token=8a0f14f7-8db3-4414-9fc1-8769846cbef9",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FVishal%20Mishra.jpeg?alt=media&token=5d4a95ba-ddcb-41a6-aa09-62fe8671674a",
        category:"all "
      },
      {
        id: 14,
        favourite: false,
        songName: "Khushiyaan Bator Lo",
        artist: "Jubin Nautiyal",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FKhushiyaan%20Bator%20Lo%20Shaitaan.mp3?alt=media&token=35f8b745-4c7f-48db-abc5-f3fbe4ea8c1a",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FJubin%20Nautiyal.jpeg?alt=media&token=f6976c54-c6d8-4c46-932f-e7a17753eee5",
        category:"all "
      },
      {
        id: 15,
        favourite: false,
        songName: "O Mahi O Mahi",
        artist: "Arijit Singh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FO%20Mahi%20O%20Mahi.mp3?alt=media&token=25de7e76-d089-404f-acab-73171dfda6c7",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FArijit%20Singh.jpeg?alt=media&token=80e1bee0-bb59-4f4e-8491-27158f2d97c0",
        category:"all "
      },{
        id: 16,
        favourite: false,
        songName: "Teri Baaton Mein Aisa Uljha Jiya",
        artist: "Raghav, Asees Kaur",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FTeri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya.mp3?alt=media&token=f0188aff-6a46-4155-bb54-257d95c83e6f",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FAsees%20Kaur.jpeg?alt=media&token=330aa770-329e-48d1-8adf-76fdc02151c9",
        category:"all "
      },{
        id: 17,
        favourite: false,
        songName: "Ve Haniya Ve Dil Janiya ",
        artist: "Danny",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FVe%20Haniya%20Ve%20Dil%20Janiya.mp3?alt=media&token=c6732353-e038-48f3-a222-b8cd541fe864",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FVe%20Haniya%20Ve%20Dil%20Janiya.jpeg?alt=media&token=1534bce2-54e9-4232-89f5-e78caaeb3c52",
        category:"all "
      },{
        id:18 ,
        favourite: false,
        songName: "Jeena Sikhaya",
        artist: "Guru Randhawa, Parampara Tandon",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FJeena%20Sikhaya.mp3?alt=media&token=1cff42f1-6e87-4579-9375-cb892357e658",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FGuru%20Randhawa.jpeg?alt=media&token=ca29911a-ce6f-4780-9a77-4cb61ebfe965",
        category:"all "
      },{
        id: 19,
        favourite: false,
        songName: "Bhole Ke Mandir Mein",
        artist: "Sonu Nigam",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FBhole%20Ke%20Mandir%20Mein.mp3?alt=media&token=09a19b3e-4f2f-46e4-9181-9287fc460229",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FSonu%20Nigam.jpeg?alt=media&token=d7f578fb-2d88-4503-b6d8-552b98ae298d",
        category:"all "
      },{
        id: 20,
        favourite: false,
        songName: "Shoulder",
        artist: "Sahib Gill",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FShoulder.mp3?alt=media&token=6273c855-9fbc-4337-95a2-1f6774fc2ebc",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FSahib%20Gill.jpeg?alt=media&token=33e6b02d-06cd-46bf-8b63-18c271011768",
        category:"all "
      },{
        id: 21,
        favourite: false,
        songName: "Daaku",
        artist: "Badshah, Sharvi Yadav",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2F_Daaku.mp3?alt=media&token=c60d10a7-9b54-498f-a594-93bb7844c772",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FBadshah.jpeg?alt=media&token=d1ed62a4-16d8-4a43-a1be-21b712e9cd09",
        category:"all workout"
      },{
        id: 22,
        favourite: false,
        songName: "Galti",
        artist: "Vishal Mishra",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2F_Galti.mp3?alt=media&token=f690eaf6-0098-4d86-abc7-a563539ad736",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FVishal%20Mishra.jpeg?alt=media&token=5d4a95ba-ddcb-41a6-aa09-62fe8671674a",
        category:"all "
      },{
        id: 23,
        favourite: false,
        songName: "Pegg Ch Burf ",
        artist: "Geeta Zaildar",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FPegg%20Ch%20Burf.mp3?alt=media&token=fe729db9-3665-4be2-9abe-63cc9d3dcb26",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FGeeta%20Zaildar.jpeg?alt=media&token=555f7641-d164-4062-9b55-05589ffdf5dd",
        category:"all "
      },{
        id: 24,
        favourite: false,
        songName: "Shareef",
        artist: "Ezu, Afsana Khan",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2F_Shareef.mp3?alt=media&token=0b2dcc60-e414-42e3-b62b-76221379c072",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FEzu.jpeg?alt=media&token=bbb43e12-eed0-4d82-9684-1f44199f1d2f",
        category:"all "
      },{
        id: 25,
        favourite: false,
        songName: "Pehle Bhi Main",
        artist: "Vishal Mishra",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FPehle%20Bhi%20Main.mp3?alt=media&token=7937a080-f254-449a-a852-80ff4cac8566",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FVishal%20Mishra.jpeg?alt=media&token=5d4a95ba-ddcb-41a6-aa09-62fe8671674a",
        category:"all top hits"
      },{
        id: 26,
        favourite: false,
        songName: "Maan Meri Jaan ",
        artist: "King",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FMaan%20Meri%20Jaan.mp3?alt=media&token=f04bdba7-75b2-47e7-9186-832a6fd1ca06",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FKing.jpeg?alt=media&token=970b0cff-a78d-4d3b-aad2-21ecbbd4e4ba",
        category:"all "
      },{
        id: 27,
        favourite: false,
        songName: "Heeriye",
        artist: "Jasleen Royal, Arijit Singh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2F_Heeriye.mp3?alt=media&token=929aa709-ad5f-43c5-96ed-4e11122771ac",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FArijit%20Singh.jpeg?alt=media&token=80e1bee0-bb59-4f4e-8491-27158f2d97c0",
        category:"all "
      },{
        id: 28,
        favourite: false,
        songName: "Saari Duniya Jalaa Denge",
        artist: "B Praak",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FSaari%20Duniya%20Jalaa%20Denge.mp3?alt=media&token=5b706617-f3e9-43de-8259-6660f9f0c37a",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FB%20Praak.jpeg?alt=media&token=38c0a564-ef11-4fb6-a895-7a2cb5e74dbc",
        category:"all "
      },{
        id: 29,
        favourite: false,
        songName: "Kahani Suno",
        artist: "Kaifi Khalil",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FKahani%20Suno.mp3?alt=media&token=8854f786-ce1a-4c4c-a925-54c8b7b10334",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FKaifi%20Khalil.jpeg?alt=media&token=f22fd7fb-cdc8-4ca5-923e-a2150309729d",
        category:"all top hits"
      },{
        id: 30,
        favourite: false,
        songName: "Bekaar Dil ",
        artist: "Vishal Mishra, Shilpa Rao",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FBekaar%20Dil.mp3?alt=media&token=58d307ed-d080-4ba3-98ef-348de5f1869d",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FVishal%20Mishra.jpeg?alt=media&token=5d4a95ba-ddcb-41a6-aa09-62fe8671674a",
        category:"all "
      }/*,{
        id: ,
        favourite: false,
        songName: "Kinni Kinni",
        artist: "",
        song: "",
        imgSrc:"",
        category:"dance"
      },{
        id: ,
        favourite: false,
        songName: "Elevated",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FElevated.mp3?alt=media&token=b838d210-d3d4-4319-bda6-43d527059cce",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Excuses",
        artist: "",
        song: "",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FExcuses.mp3?alt=media&token=36df8511-f73c-4e45-9e5d-a1743c70f2ec",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Ghost",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FGhost.mp3?alt=media&token=d06d3047-d7a1-45d6-b82c-a2f5dbaeb909",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Girl I Love You",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FGirl%20I%20Love%20You.mp3?alt=media&token=077d16be-45e3-4257-9d3c-8568b32903a8",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Hass Hass",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FHass%20Hass.mp3?alt=media&token=cad86b09-d9ac-49f1-b03d-1f8568dea9e0",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Ice",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FIce.mp3?alt=media&token=3ee5d095-a15a-4ce7-a6c2-9e3c82126431",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Insane",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FInsane.mp3?alt=media&token=ae00e1a6-7e39-4ef1-a0e6-bca94667274e",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Jatt Da Kaleja",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FJatt%20Da%20Kaleja.mp3?alt=media&token=4f2db969-bd0d-4af8-8c89-2bed6de8d341",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Jatt Vailly",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FJatt%20Vailly.mp3?alt=media&token=1d941ca9-81ac-4079-acfe-5edb5c82327f",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Jee Ni Lagda",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FJee%20Ni%20Lagda.mp3?alt=media&token=eee92d03-5025-4c43-ae6d-97285c7f16ed",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Jeena Shikhaya",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FJeena%20Sikhaya.mp3?alt=media&token=1cff42f1-6e87-4579-9375-cb892357e658",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Khushiyaan bator Lo Shaitaan",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FKhushiyaan%20Bator%20Lo%20Shaitaan.mp3?alt=media&token=35f8b745-4c7f-48db-abc5-f3fbe4ea8c1a",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Ki Banu Duniya Da",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FKi%20Banu%20Duniya%20Da.mp3?alt=media&token=4af3aa42-2087-4203-bab0-df3752acb23d",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Ki Samjhaiye",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FKi%20Samjhaiye.mp3?alt=media&token=80aabbab-4a25-4c32-a2a5-01d0f9973269",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Lak 28 Kudi da",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FLak%2028%20Kudi%20Da.mp3?alt=media&token=e9f997d7-12ce-4f0e-ab1f-f4b64b3bd64a",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Lalkara",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FLalkara.mp3?alt=media&token=64659392-1384-428d-bbf8-363c4e075f0f",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Ma Belle",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FMa%20Belle.mp3?alt=media&token=a18509a8-6df4-4354-94e9-b84cbfd5a9fc",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Mera deewanapan",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FMera%20Deewanapan.mp3?alt=media&token=021b2de8-653c-47d2-b439-4cc1d18b3c76",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "No Love",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FNo%20Love.mp3?alt=media&token=d9fbb397-f934-4907-ae54-0bf0cefe2021",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "OG",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FOG.mp3?alt=media&token=a4ea20db-a898-40a4-8974-d05e77ff95ff",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "One Love",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FOne%20Love.mp3?alt=media&token=12fe30a1-9801-445c-a71d-82a2058ad213",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Pendu",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FPendu.mp3?alt=media&token=ad863b8d-31bd-4655-bfa8-1654d4f30b17",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Proper Patola",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FPendu.mp3?alt=media&token=ad863b8d-31bd-4655-bfa8-1654d4f30b17",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Qismat",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FQismat.mp3?alt=media&token=a67ccd8c-33e3-4008-9984-82b0cece6bfa",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Record Bolde",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FRecord%20Bolde.mp3?alt=media&token=ee82dfd9-e037-4fd5-8c98-1830af57d243",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Sochan Vich Tu",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FSochan%20Vich%20Tu.mp3?alt=media&token=b1f1bddc-a911-4632-85f1-4c0eff321873",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Softly",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FSoftly%20-%20DjPunjab.Com.Se.mp3?alt=media&token=f78ae22e-f985-4679-8c20-9bb8991922b5",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Still Rollin ",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FStill%20Rollin.mp3?alt=media&token=832c638d-2b76-4280-99b1-1cc24fa130a3",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Summer High",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FSummer%20High.mp3?alt=media&token=8fe512e4-0883-42b2-9bd8-c22f5540955e",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Supna",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FSupna.mp3?alt=media&token=7ebd2e92-fca4-4888-b514-60897af098ba",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Taara",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FTaara.mp3?alt=media&token=9a5abfaa-5792-45ab-be46-8c04544a6607",
        imgSrc:"",
        category:""
      },{
        id: ,
        favourite: false,
        songName: "Takeover",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FTakeover.mp3?alt=media&token=d0b78728-71e0-4fa1-bb1b-e47471845ca5",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "Toxic",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FToxic.mp3?alt=media&token=0ec0071f-13b4-43d7-adba-d9a5b60f4e6c",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "Try Me",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FTry%20Me.mp3?alt=media&token=a05ae0db-3b62-4280-8d0f-3337429513da",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "Tu Judda",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FTu%20Judda.mp3?alt=media&token=f90fe183-72f0-4043-a024-de87a0347c5c",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "vail",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FVail.mp3?alt=media&token=b5c3d8aa-1a6c-48fd-9e42-3b9547cfc29b",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "We Rollin",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FWe%20Rollin.mp3?alt=media&token=bbcfbaad-dd29-4f92-9587-ad8dac21cf95",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "With You",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FWith%20You.mp3?alt=media&token=358cd810-5211-4e0f-a398-c628ae1b8d2d",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "Yaarian",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FYaarian.mp3?alt=media&token=d2c8ed8d-e311-4198-bac1-016041b9869c",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "Zindabaad Yaarian",
        artist: "",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FZindabaad%20Yaarian.mp3?alt=media&token=229ae8fb-bfbb-4d58-bdba-c7c87f97f889",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      {
        id: ,
        favourite: false,
        songName: "",
        artist: "",
        song: "",
        imgSrc:"",
        category:""
      },
      */
  ];
  
  export { Songs };
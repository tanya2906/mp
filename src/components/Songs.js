const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "What",
      artist: "Karan Aujla",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FWhat.mp3?alt=media&token=c335ceb6-297d-44d5-8ae2-e2b7df923b21",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2Fkaran%20aujla.jpg?alt=media&token=b96a03d2-1e7d-4a47-8512-c0fd204e67ec",
      category:"punjabi dance"
    },
    {
      id: 2,
      favourite: false,
      songName: "2 Number",
      artist: "Amrinder Gill",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2F2%20Number.mp3?alt=media&token=2b618320-a451-4af5-9067-4580e074784e",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FAmrinder%20Gill.jpg?alt=media&token=ab734712-e0bb-41f4-a860-83c9066a628e",
      category:"punjabi"
    },
    {
      id: 3,
      favourite: false,
      songName: "Admirin You",
      artist: "Karan Aujla",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FAdmirin%20You.mp3?alt=media&token=d68fba3f-f252-4c5c-890f-bbca0d08901d",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2Fkaran%20aujla.jpg?alt=media&token=b96a03d2-1e7d-4a47-8512-c0fd204e67ec",
      category:"punjabi"
    },
    {
      id: 4,
      favourite: false,
      songName: "Badnam",
      artist: "Mankirat Aulakh",
      song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FBadnam.mp3?alt=media&token=d4eb643e-205e-4eb8-a587-a7b3a9afff91",
      imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FMankirt%20Aulakh.jpg?alt=media&token=0828b68d-09a0-4ec1-b5da-a31608fbe7e2",
      category:"punjabi"
    },
    {
        id: 5,
        favourite: false,
        songName: "Baller",
        artist: "Shubh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FBaller.mp3?alt=media&token=9ec7ab40-6c86-4f9e-84de-0d68938cb8cc",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FShubh.jpg?alt=media&token=71926bff-9ddc-404a-be45-1bd5e520e38b",
        category:"punjabi"
      },
    {
        id: 6,
        favourite: false,
        songName: "Bhabi",
        artist: "Mankirat Aulakh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FBhabi.mp3?alt=media&token=dd35accc-93a3-48a9-ae60-f2775ff436bc",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FMankirt%20Aulakh.jpg?alt=media&token=0828b68d-09a0-4ec1-b5da-a31608fbe7e2",
        category:"punjabi"   
      },
    {
        id: 7,
        favourite: false,
        songName: "Case",
        artist: "Shubh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FCase.mp3?alt=media&token=3004da98-e82e-4e01-becc-01c9d1f71eaf",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FShubh.jpg?alt=media&token=71926bff-9ddc-404a-be45-1bd5e520e38b",
        category:"punjabi"
      },
    {
        id: 8,
        favourite: false,
        songName: "Champion Anthem",
        artist: "Karan Aujla",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FChampions%20Anthem.mp3?alt=media&token=32994503-11d4-4d30-8224-883577300ca2",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2Fkaran%20aujla.jpg?alt=media&token=b96a03d2-1e7d-4a47-8512-c0fd204e67ec",
        category:"punjabi"
      },
    {
        id: 9,
        favourite: false,
        songName: "Cheques",
        artist: "Shubh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FCheques.mp3?alt=media&token=b4610204-65ca-4a4a-8d0c-50b8a9224a94",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FShubh.jpg?alt=media&token=71926bff-9ddc-404a-be45-1bd5e520e38b",
        category:"punjabi"
    },
    {
        id: 10,
        favourite: false,
        songName: "College",
        artist: "Mankirat Aulakh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FCollege.mp3?alt=media&token=96f4be7a-06db-43ae-85c7-ed1a85cc91cb",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FMankirt%20Aulakh.jpg?alt=media&token=0828b68d-09a0-4ec1-b5da-a31608fbe7e2",
        category:"punjabi"
      },
    {
        id: 11,
        favourite: false,
        songName: "Daka",
        artist: "Diljit Dosanjh",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FDaka.mp3?alt=media&token=bb10b6de-b0df-42b5-8fb0-e8924c89ebcein",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FDiljit%20Dosanjh.jpg?alt=media&token=18359aa1-c612-40a7-9420-ebc9689a2029",
        category:"punjabi"   
      },
    {
        id: 12,
        favourite: false,
        songName: "Droptop",
        artist: "AP Dhillon",
        song: "https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/Ringtones%2FDroptop.mp3?alt=media&token=051a3741-1058-4ad9-8172-fbb9dc930f7e",
        imgSrc:"https://firebasestorage.googleapis.com/v0/b/musicplayer-2906.appspot.com/o/images%2FAP%20Dhillon.jpg?alt=media&token=e93a9a4c-96b8-4a70-9110-c5f32ee0d110",
        category:"punjabi"
      },
  ];
  
  export { Songs };
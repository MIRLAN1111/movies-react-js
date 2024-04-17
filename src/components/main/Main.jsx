import './Main.css'
const Main = () => {
  const movies = [
		{
			id: "1",
      images:"https://greenhouse.hulu.com/app/uploads/sites/11/MazeRunner_Hulu_600x338_cp.jpg",
      name:"THE MAZE RUNNER"
		},
		{
			id: "2",
      images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NS6mmCoZbR06fl4l7NWLG-ul6Nw04p4vm43RWnnzGjIbPP-vfxLsK-mnnnbd-rA7Ckw&usqp=CAU",
      name:"BLACK ADAM"
		},
		{
			id: "3",
      images:"https://lionsgate.brightspotcdn.com/aa/fe/605228eb4508b778ec6c334b3f05/imaginary-movies-he-poster.jpg",
      name:"IMAGINARY"
		},
		{
			id: "4",
      images:"https://pic.uma.media/cwebp/pic/cardimage/7f/0a/7f0af330daf2723b7178ba51d8918f95.jpg?size=370&quality=95",
      name:"FORSAJ",
      moviName: "СЕРИАЛЫ"
		},
		{
			id: "5",
      images:"https://pic.uma.media/cwebp/pic/cardimage/98/f2/98f26a68ccdf5c66426f2d087cba7c87.jpg?size=370&quality=95",
      name:"ПЛЕВАКО"
		},
		{
			id: "6",
      images:"https://pic.uma.media/cwebp/pic/cardimage/4a/1b/4a1b5b3a56c09451e874fd9c5da9512f.jpg?size=370&quality=95",
      name:"ПЕРЕВОЗЧИК 3"
		},
		{
			id: "7",
      images:"https://pic.uma.media/cwebp/pic/cardimage/65/21/6521bc7b72907253d8a34b49dc1b1196.jpg?size=370&quality=95",
      name:"НЕФТЬ"
		},
    
		{
			id: "8",
      images:"https://pic.uma.media/cwebp/pic/cardimage/bb/67/bb674ac71b70b366e36c5e18755615e0.jpg?size=200&quality=95",
      name:"КИБЕР ПАПА"
		},
		{
			id: "9",
      images:"https://pic.uma.media/cwebp/pic/cardimage/d4/91/d49132dd59a5839965111949a3fba67c.jpg?size=200&quality=95",
      name:"КРАСНЫЙ 5"
		},
		{
			id: "10",
      images:"https://pic.uma.media/cwebp/pic/cardimage/1c/1a/1c1a0ce5a2faa8e7430536ea99bddc40.jpg?size=370&quality=95",
      name:"БУКИНЫ"
		},
		{
			id: "11",
      images:"https://pic.uma.media/cwebp/pic/cardimage/93/60/9360573dd54c272ce6f0b3ca94675c80.jpg?size=370&quality=95",
      name:"ПАТРИОТ",
      moviName: "УЖАСЫ"
		},
		{
			id: "12",
      images:"https://pic.uma.media/cwebp/pic/cardimage/48/fa/48fa2d80a19cf249a74d97a1a7b4239a.jpg?size=370&quality=95",
      name:"БИМ"
		},
		{
			id: "13",
      images:"https://pic.uma.media/cwebp/pic/cardimage/2d/e2/2de20f923283d62e67b8a3c39570efab.jpg?size=370&quality=95",
      name:"РАЗВОД"
		},
		{
			id: "14",
      images:"https://pic.uma.media/cwebp/pic/cardimage/10/b4/10b431ac576440b44fc6c1e5ba4b5b62.jpg?size=370&quality=95",
      name:"СЕМЬЯ "
		},
		{
			id: "15",
      images:"https://pic.uma.media/cwebp/pic/cardimage/29/83/2983205a9734edd835595bb511052feb.jpg?size=370&quality=95",
      name:"ПИРАНЬИ 3DD"
		},
		{
			id: "16",
      images:"https://pic.uma.media/cwebp/pic/cardimage/94/ca/94ca490f2ebe003470b5ab202868cfc1.jpg?size=370&quality=95",
      name:"ЛЕС САМОУБИЙЦ"
		},
		{
			id: "17",
      images:"https://pic.uma.media/cwebp/pic/cardimage/5f/54/5f5401bda766df4806abbe155c49538f.jpg?size=370&quality=95",
      name:"ВЫПУСТИ МЕНЯ САГА "
		},
		{
			id: "18",
      images:"https://pic.uma.media/cwebp/pic/cardimage/03/60/03603971ecc4b2b99ebe8cfb1cc6c8de.jpg?size=370&quality=95",
      name:"С ДНЕМ СМЕРТИ  "
		},
		{
			id: "19",
      images:"https://pic.uma.media/cwebp/pic/cardimage/d7/32/d73255ef2c8aaab39c6cd7d5689f96d0.jpg?size=370&quality=95",
      name:"БАБУШКА"
		},
		{
			id: "20",
      images:"https://pic.uma.media/cwebp/pic/cardimage/e1/12/e112ec23a7168778ab103c2b1cd61b8c.jpg?size=370&quality=95",
      name:"МЕДЕЯ "
		},
		{
			id: "21",
      images:"https://pic.uma.media/cwebp/pic/cardimage/96/21/9621ea7c9490983b07ace314ddc014cc.jpg?size=370&quality=95",
      name:"ДРУГАЯ "
		},
		{
			id: "22",
      images:"https://pic.uma.media/cwebp/pic/cardimage/75/2d/752dcce2cc4361173356f71f5b8efdba.jpg?size=370&quality=95",
      name:"ТЕБЕ КОНЕЦ"
		},
		{
			id: "23",
      images:"https://pic.uma.media/cwebp/pic/cardimage/9a/f0/9af0e992a1c7d82e420aa7d1bbb4c760.jpg?size=370&quality=95",
      name:"ДЖИПЕРС КРИПЕРС"
		},
		{
			id: "24",
      images:"https://pic.uma.media/cwebp/pic/cardimage/31/08/3108bbe0b87bfa147c6bf02790b40f80.jpg?size=370&quality=95",
      name:"ДИТЯ ТЬМЫ"
		},
		{
			id: "25",
      images:"https://pic.uma.media/cwebp/pic/cardimage/cf/52/cf521d808ac7288ef16d0b5de067c848.jpg?size=370&quality=95",
      name:"ИГРА В ЛИФТЕ "
		},
		{
			id: "26",
      images:"https://pic.uma.media/cwebp/pic/cardimage/ab/a3/aba356fb4a2628b3b567604131526fef.jpg?size=370&quality=95",
      name:"АСТРАЛ СОМНИЯ"
		},
      {
        id: "27",
        images:"https://pic.uma.media/cwebp/pic/cardimage/e4/0a/e40add1c78fb9d13730dee39ba2439f2.jpg?size=370&quality=95",
        name:"ПИЛА"
      },
      {
        id: "28",
        images:"https://pic.uma.media/cwebp/pic/cardimage/98/24/9824099f881342c7cec4c55116f0b293.jpg?size=370&quality=95",
        name:"ШКАТУЛКА ДЬЯВОЛА "
      },
	

	]; 
  return (
    <div className='papasha'>
      
    {movies.map((item)=>(
      <div  key={item.id}>
        <img className='movies-image' src={item.images}/>
        <h5>{item.name}</h5>
        <h1>{item.moviName}</h1>
				
      </div>
			
    ))}
		
    </div>
  )
}

export default Main
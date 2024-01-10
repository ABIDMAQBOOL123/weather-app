import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}){
   const INIT_URL = "https://images.unsplash.com/photo-1561485039-765c8e81686d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"

   const HOT_URL = "https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.jpg?s=612x612&w=0&k=20&c=teOfq7uXuu9DyPh-O4JDvJju6uJ_TU1TL0U4LTetMpY="
   const COLD_URL = "https://media.istockphoto.com/id/1070035592/photo/woman-with-warm-clothing-feeling-the-cold-inside-house.jpg?s=612x612&w=0&k=20&c=ffN0PaG9zAG-Ght8zu4QIosQlQUg_I2cpm6vp7Y0NpY="
   const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="

    return(
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80? 
            RAIN_URL
            :info.temp > 15
            ? HOT_URL
            :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>temprature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>the weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}
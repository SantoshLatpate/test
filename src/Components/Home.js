import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import React, { Component } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Image } from '@aws-amplify/ui-react';
import PlayerDetail  from "./PlayerDetail";
import homeimage from '../Images/home.jpeg';
import home2 from '../Images/home2.jpeg' ;
import home3 from '../Images/home3.jpeg' ;
import {  View ,Grid,Card,Heading} from '@aws-amplify/ui-react';
import data from '../Data/data.json';
import austraila from '../Data/austrila.json';
import SA from '../Data/SA.json';

Amplify.configure(awsconfig);


let myIndex = 0;
function Carousel() {
  const x = document.getElementsByClassName("mySlides");
  for (var i = 0; i < x.length; i++) {
     if(x[i].style != null) 
       x[i].style.display = "none";
  }
  
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
     x[myIndex-1].style.display = "block";
   setTimeout(Carousel, 3000);
}


export default class Home extends Component {
    
  componentDidMount(){
    Carousel();
  }

  render(){
      
    return (
    <Grid
      templateColumns={{ base: '1fr', large: '1fr 1fr 1fr' }}
      templateRows={{ base: 'repeat(4, 10rem)', large: 'repeat(3, 20rem)' }}
    >
      
      <View
        columnSpan={[1, 1, 1, 3]}
      > 
         
        <Image
         width="100%"
         height="100%"
         objectFit="cover"
         class="mySlides"
         objectPosition="50% 50%"
        src={homeimage}
        alt="View from road to Milford Sound, New Zealand.
    Glittering stream with old log, snowy mountain peaks
    tower over a green field."
      />
      <Image
         width="100%"
         height="100%"
         objectFit="cover"
         objectPosition="50% 50%"
         class="mySlides"
        src={home2}
        alt="View from road to Milford Sound, New Zealand.
    Glittering stream with old log, snowy mountain peaks
    tower over a green field."
      />
       <Image
         width="100%"
         height="100%"
         objectFit="cover"
         objectPosition="50% 50%"
         class="mySlides"
        src={home3}
        alt="View from road to Milford Sound, New Zealand.
    Glittering stream with old log, snowy mountain peaks
    tower over a green field."
      />
  
      </View>
      <View
        rowSpan={{ base: 1, large: 2 }}
      >
        <Card variation="elevated">
        <Heading color="var(--amplify-components-link-color)" level={4} >
           India      
        </Heading></Card>
        <PlayerDetail data={data}></PlayerDetail>
      </View>
      <View
        rowSpan={{ base: 1, large: 2 }}
      >
        <Card variation="elevated">
        <Heading color="orange" level={4}>
        Austraila      
        </Heading>
        </Card>
        <PlayerDetail data={austraila}></PlayerDetail>
      </View>
      <View
        rowSpan={{ base: 1, large: 2 }}
      >
        <Card variation="elevated">
        <Heading color="green"  level={4}>
         South Africa      
        </Heading>
        </Card>
        <PlayerDetail data={SA}></PlayerDetail>
      </View>
    </Grid>
    );
    }
}


import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import React, { Component, useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { Image } from "@aws-amplify/ui-react";
import PlayerDetail from "./PlayerDetail";
import homeimage from "../Images/home.jpeg";
import home2 from "../Images/home2.jpeg";
import home3 from "../Images/home3.jpeg";
import { View, Grid, Card, Heading } from "@aws-amplify/ui-react";
import data from "../Data/data.json";
import austraila from "../Data/austrila.json";
import SA from "../Data/SA.json";
import { DataStore } from '@aws-amplify/datastore';
import { Player } from './models';

Amplify.configure(awsconfig);

export default function Home() {
  // Similar to componentDidMount and componentDidUpdate:
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const incrementIndex = () => {
      setImgIndex(imgIndex + 1);
    };

    const intervalId = setInterval(incrementIndex, 3000);

    return () => clearInterval(intervalId);
  });

  const imgs = [
    <Image
      width="100%"
      height="100%"
      objectFit="cover"
      className="mySlides"
      objectPosition="50% 50%"
      src={homeimage}
      alt="View from road to Milford Sound, New Zealand.
      Glittering stream with old log, snowy mountain peaks
      tower over a green field."
    />,
    <Image
      width="100%"
      height="100%"
      objectFit="cover"
      objectPosition="50% 50%"
      className="mySlides"
      src={home2}
      alt="View from road to Milford Sound, New Zealand.
      Glittering stream with old log, snowy mountain peaks
      tower over a green field."
    />,
    <Image
      width="100%"
      height="100%"
      objectFit="cover"
      objectPosition="50% 50%"
      className="mySlides"
      src={home3}
      alt="View from road to Milford Sound, New Zealand.
      Glittering stream with old log, snowy mountain peaks
      tower over a green field."
    />,
  ];

  const img = imgs[imgIndex % imgs.length];

  return (
    <Grid
      templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
      templateRows={{ base: "repeat(4, 10rem)", large: "repeat(3, 20rem)" }}
    >
      <View columnSpan={[1, 1, 1, 3]}>{img}</View>
      <View rowSpan={{ base: 1, large: 2 }}>
        <Card variation="elevated">
          <Heading color="var(--amplify-components-link-color)" level={4}>
            India
          </Heading>
        </Card>
        <PlayerDetail data={data}></PlayerDetail>
      </View>
      <View rowSpan={{ base: 1, large: 2 }}>
        <Card variation="elevated">
          <Heading color="orange" level={4}>
            Austraila
          </Heading>
        </Card>
        <PlayerDetail data={austraila}></PlayerDetail>
      </View>
      <View rowSpan={{ base: 1, large: 2 }}>
        <Card variation="elevated">
          <Heading color="green" level={4}>
            South Africa
          </Heading>
        </Card>
        <PlayerDetail data={SA}></PlayerDetail>
      </View>
    </Grid>
  );
}

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import * as React from 'react';
import '@aws-amplify/ui-react/styles.css';

import {
    Card,
    Image,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Rating,
    useTheme
  } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);



function PlayerDetail(props) {
    const { tokens } = useTheme();
   

    const products = props.data.map(
      (dataValue)=>{

        return (
          <View key={dataValue.Name}>
          <Card>
          <Flex direction="row" alignItems="flex-start">
            <Image
              alt="Road to milford sound"
              src={dataValue.image}
              width="33%"
            />
            <Flex
              direction="column"
              alignItems="flex-start"
              gap={tokens.space.xs}
            >
            <Flex>
                <Badge size="small" variation="info">
                  {dataValue.Team}
                </Badge>
                <Badge size="small" variation="success">
                   {dataValue.Type}
                </Badge>
                
              </Flex>
              <Rating value={dataValue.Gread} />
              <Heading level={6}>
                {dataValue.Name}
                
              </Heading>
              <Text>
              {dataValue.detail}
              </Text>
            </Flex>
          </Flex>
        </Card>
        </View>
        )
      }
    );

    return (
      <View
      padding={tokens.space.medium}
    >
      {products}
    </View>
    );
}

export default PlayerDetail;

---
to: src/components/<%=name%>/<%= h.changeCase.pascal(name) %>.tsx
---
import React from 'react';
import { View } from 'react-native';

 /** Defines expected props for this component */
type Props = {

}

/** <%= description %> */
export const <%= h.changeCase.pascal(name) %> = (props: Props) => {
  return (
    <View></View>
  );
};
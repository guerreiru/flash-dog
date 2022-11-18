import { Button, View, Text } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

export function Home({ navigation }: RouterProps) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

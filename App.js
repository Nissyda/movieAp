import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from './screens/MovieList';
import MovieDetail from './screens/MovieDetail';
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from 'react-native';
import SearchMovie from './screens/SearchMovie';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TVList from './screens/TVList';
import TVDetail from './screens/TVDetail';
import SearchTV from './screens/SearchTV';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Movie() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="MovieList" component={MovieList} options={({navigation}) => ({
          title: "映画一覧",
          headerStyle: {
            backgroundColor: '#202328',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('SearchMovie')}>
              <Ionicons name="search" size={30} color="#ccc" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons name="menu" size={30} color="#ccc" />
            </TouchableOpacity>
          )
        })}/>
        <Stack.Screen name="MovieDetail" component={MovieDetail} options={{
          title: "映画詳細",
          headerStyle: {
            backgroundColor: '#202328',
          },
          headerTintColor: '#fff'
        }}/>
        <Stack.Screen name="SearchMovie" component={SearchMovie} options={{
          title: "映画検索",
          headerStyle: {
            backgroundColor: '#202328',
          },
          headerTintColor: '#fff'
        }}/>
      </Stack.Navigator>
  )
}
function TV() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="TVList" component={TVList} options={({navigation}) => ({
          title: "テレビ番組一覧",
          headerStyle: {
            backgroundColor: '#202328',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('SearchTV')}>
              <Ionicons name="search" size={30} color="#ccc" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons name="menu" size={30} color="#ccc" />
            </TouchableOpacity>
          )
        })}/>
        <Stack.Screen name="TVDetail" component={TVDetail} options={{
          title: "テレビ番組詳細",
          headerStyle: {
            backgroundColor: '#202328',
          },
          headerTintColor: '#fff'
        }}/>
        <Stack.Screen name="SearchTV" component={SearchTV} options={{
          title: "テレビ番組検索",
          headerStyle: {
            backgroundColor: '#202328',
          },
          headerTintColor: '#fff'
        }}/>
      </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="映画"
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            drawerLabelStyle: {fontSize: 18},
            drawerStyle: {backgroundColor: '#202328'}
          }}>
        <Drawer.Screen name="映画" component={Movie} options={{
          drawerIcon: () => (<Ionicons name="film-outline" size={30} color="#fff" />)
        }}/>
        <Drawer.Screen name="テレビ番組" component={TV} options={{
          drawerIcon: () => (<Ionicons name="tv" size={30} color="#fff" />)
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

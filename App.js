import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/Screens/IndexScreen";
import showScreen from "./src/Screens/showScreen";
import createScreen from "./src/Screens/createScreen";
import editScreen from "./src/Screens/editScreen";
import React from "react";
import { Provider } from "./src/Context/BlogContext";

const navigator = createStackNavigator(
  {
    index: IndexScreen,
    show:showScreen,
    create: createScreen,
    edit: editScreen,
  },
  {
    initialRouteName: "index",
    defaultNavigationOptions: {
      title: "Blogs",
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:'orange',
        
      }
    },
  }
);
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

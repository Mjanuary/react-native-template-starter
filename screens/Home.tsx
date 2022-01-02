import React, { FC, ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { Auth } from "../actions";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { StoreState } from "../reducers";

type AppProps = {
  auth: Auth;
};

const _Home: FC<AppProps> = ({ auth }): ReactElement => {
  //   console.log({ auth });

  /* function body */
  return (
    <View>
      <Text>Home page here</Text>
      <AddTodo />
      <TodoList />
    </View>
  );
};

const mapStateToProps = ({ auth }: StoreState): { auth: Auth } => {
  return { auth: auth };
};

const Home = connect(mapStateToProps, {})(_Home);

export default Home;

import React, { FC, ReactElement, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { Auth, FC_AddTodo, FT_AddTodo, Todo } from "../actions";
import { StoreState } from "../reducers";
import tw from "tailwind-react-native-classnames";

type AppProps = {
  todos: Todo[];
  FC_AddTodo: FT_AddTodo;
};

const _Home: FC<AppProps> = ({ todos, FC_AddTodo }): ReactElement => {
  const [todo_name, setTodoName] = useState("");
  /* function body */
  return (
    <View style={tw`p-3 bg-gray-200 rounded border`}>
      <Text>Todo List</Text>
      <View>
        <TextInput
          value={todo_name}
          onChangeText={setTodoName}
          style={tw`w-full bg-gray-200 border rounded p-2 mb-2`}
        />
        <Button
          onPress={() => {
            FC_AddTodo({
              id: todos.length + 2 + "",
              name: todo_name,
              done: false,
            });
          }}
          title="Click me"
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos: todos };
};

const Home = connect(mapStateToProps, { FC_AddTodo })(_Home);

export default Home;

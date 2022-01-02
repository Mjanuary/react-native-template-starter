import React, { FC, ReactElement } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import {
  FC_DoneTodo,
  FC_DeleteTodo,
  Todo,
  FT_DoneTodo,
  FT_DeleteTodo,
} from "../actions";
import { StoreState } from "../reducers";
import tw from "tailwind-react-native-classnames";

type AppProps = {
  todos: Todo[];
  FC_DoneTodo: FT_DoneTodo;
  FC_DeleteTodo: FT_DeleteTodo;
};

const _Home: FC<AppProps> = ({
  todos,
  FC_DoneTodo,
  FC_DeleteTodo,
}): ReactElement => {
  /* function body */
  return (
    <View style={tw`p-2 my-2 rounded border`}>
      <Text style={tw`font-bold text-center text-2xl mb-2`}>Todo List</Text>
      <View>
        {todos.length >= 1 ? (
          todos.map((todo) => (
            <View
              key={todo.id}
              style={tw`w-full  bg-gray-300 p-2 rounded mb-2 flex-row items-center`}
            >
              <TouchableOpacity
                style={tw`flex-1`}
                onPress={(event: GestureResponderEvent) => FC_DoneTodo(todo.id)}
              >
                <Text style={tw` ${todo.done === true ? "text-gray-500" : ""}`}>
                  {todo.name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(event: GestureResponderEvent) =>
                  FC_DeleteTodo(todo.id)
                }
                style={tw`p-2 bg-red-200`}
              >
                <Text style={tw`text-sm`}>D</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View>
            <Text style={tw`text-gray-400 text-center p-4  mb-2`}>
              No todo found
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos: todos };
};

const Home = connect(mapStateToProps, { FC_DoneTodo, FC_DeleteTodo })(_Home);

export default Home;

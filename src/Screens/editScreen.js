import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../Context/BlogContext";
import BlogPostForm from "../../Components/BlogPostForm";

const editScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPosts } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPosts(id, title, content,()=>navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default editScreen;

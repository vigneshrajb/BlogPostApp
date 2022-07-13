import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../Context/BlogContext";
import BlogPostForm from "../../Components/BlogPostForm";

const createScreen = ({ navigation }) => {
  const { addBlogPosts } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPosts(title, content, () => navigation.navigate("index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default createScreen;

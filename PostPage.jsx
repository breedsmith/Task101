import React from "react";
import './PostPage.css';
import Header from './Header';
import ConditionForm from './ConditionForm';

function PostPage() {
  return (
    <div className="App">
      <Header title="New Post" />
      <ConditionForm />
    </div>
  );
}

export default PostPage;
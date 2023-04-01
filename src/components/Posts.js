import React, { useState, useEffect } from 'react'
export default function Posts() {
  const [post, getPost] = useState([])
  //const API = 'https://jsonplaceholder.typicode.com/posts';
  //const API = 'http://127.0.0.1:8000/api/questions';
//const API = 'http://127.0.0.1:8000/api/questions';
//const API = 'https://poralekh.prosolver.org/poralekha/api/questions';
const API ='https://poralekha.prosolver.org/poralekha/api/students';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res)
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <>
      <h2>React Fetch Data with REST API Example</h2>
      <ul>
        {post.map((item, i) => {
          //return <li key={i}>{item.title}</li>
          //return <li key={i}>{item.question}</li>
          return<li key={i}>{item.studentname}</li>
        })}
      </ul>
    </>
  )
}
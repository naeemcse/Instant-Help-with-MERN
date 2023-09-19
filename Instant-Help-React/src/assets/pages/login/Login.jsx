import React from "react";
import Layout from "../../components/layout/Layout";
import "./login.css"

const Login = () => {
  {
  const ul = document.querySelector("ul"),
input = document.querySelector("input"),
tagNumb = document.querySelector(".details span");

let maxTags = 10,
tags = ["Web Developer", "Software Engineeering"];

countTags();

createTag();

function countTags(){
    input.focus();
    tagNumb.innerText = maxTags - tags.length;
}

function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
    });
    countTags();
}

function remove(element, tag){
    let index  = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    countTags();
}

function addTag(e){
    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < 10){
                tag.split(',').forEach(tag => {
                    tags.push(tag);
                    createTag();
                });
            }
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector(".details button");
removeBtn.addEventListener("click", () =>{
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTags();
});

  }


  return (
    <Layout>
      <h1>Log In </h1>
      <div className="wrapper">
      <div className="title">
        
        <h2>Tags</h2>
      </div>
      <div className="content">
        <p>Press enter or add a comma after each tag</p>
        <ul><input type="text" spellcheck="false"/></ul>
      </div>
      <div className="details">
        <p><span>10</span> tags are remaining</p>
        <button>Remove All</button>
      </div>
    </div>
    
    
      
    </Layout>
  );
};

export default Login;

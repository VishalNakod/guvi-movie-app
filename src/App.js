import logo from './logo.svg';
import './App.css';

function App() {
//  const names=["Vishal","Ashwini","Sneha"]
  const details=[
  {name:"Vishal",Mobile:8087706587, pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vGNp0RJxy8o1b_KKaehr6kXf8zxQZugdQg&usqp=CAU"},
  {name:"Ashwini",Mobile:8087706588, pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vGNp0RJxy8o1b_KKaehr6kXf8zxQZugdQg&usqp=CAU"} ,
  {name:"Sneha",Mobile:8087706589, pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vGNp0RJxy8o1b_KKaehr6kXf8zxQZugdQg&usqp=CAU"}
  ]
  return (  
      <div className="App">
        {details.map(detail=> <Welcome name= {detail.name} Mobile={detail.Mobile } pic={detail.pic}/>)}
      </div>
  );
}

// props-->property-->pass argument to componant

export default App;

// Object destructuring
function Welcome( {pic,name, Mobile} ){
  return(
<div>
  <h1>Hello {name}</h1>
  <h1>Mobile No is {Mobile}</h1>
  <img  className="image" src={pic}/>
</div>
  )
}


// function Welcome(props){
//   return(
// <div>
//   <h1>Hello {props.name}</h1>
//   <h1>Mobile No is {props.Mobile}</h1>
//   <img  className="image"src={props.pic}/>
// </div>
//   )
// }

// function Message(props){
//   console.log(props)
//   return(
// <div>
//   {/* <img  class="image"src={props.image} alt={props.name}/> */}
//   <h1>Hello {props.name}</h1>

// </div>


// JSX--> Java script XML
// {}--->Template syntax
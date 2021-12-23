import logo from './logo.svg';
import './App.css';

function App() {
  const os=["Android","Blackberry","iPhone","Windows Phone"];
  const mnf=["Samsung","HTC","Micromax","Apple"];
  return (
   
   <div classname="App">
      <h1>Mobile Opreating System</h1>
     {os.map((e)=>(
      <Mobile compo={e}/>
     ))}

     <h1>Mobile Opreating System</h1>
     {mnf.map((e)=>(
      <Mobile compo={e}/>
     ))}

   </div>
  );
}

function Mobile ({compo}){
  return <li>{compo}</li>
}
export default App;

import './App.css';
import catImg from'./Wawa.png';

function buyCat(){
  let buyText = "買いています";

  function handleBuy(buyText){
  
  }

  return <button onclick={handleBuy(buyText)}>{buyText}</button>
}

function App() {
  return (
    <div className="App">
      <header className="title">
        <ul className="navbar">  
          <a href="#">Git</a>
          <a href="#" div class="home">Home</a>  
          <a href="#">About Me</a>
        </ul>

        <h1 div className="head" style={{padding: 250,}}>彭舜楷</h1>

      </header> 

      <body>
        <div className = "row">
           <div className = "box">
                <img src={catImg} span class="cat" alt="wide cat"/>
                {buyCat()}
            </div>

            <div class = "right">
                <p div class="cattext"><b>ただの猫です。</b></p>
                <p>特別はない。。。</p>
                <p>それでも。。。</p>
                <p1 div class="cattext"><b>まだ可愛いと思います。</b></p1>
            </div>

        </div>
        
      </body>

    </div>
  );
}

export default App;

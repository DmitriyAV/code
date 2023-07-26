import './App.css';


function Nav() {
    return (
        <div id="nav">
            <span>Home</span>
            <span>About</span>
        </div>
    )
}

function LandingPage() {
    return <h1>Welcome!</h1>
}


function SignUp() {
   return <div>SignUp</div>
}

function Blurb() {
   return <div>Blurb</div>
}

function About() {
    return <div>About
        <SignUp/>
        <Blurb/>
    </div>
}

function App() {

    return (
        <div className="app">
            <Nav/>
            <About/>
            <LandingPage/>
        </div>
    )
}

export default App;

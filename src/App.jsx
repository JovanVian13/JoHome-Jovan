import './App.css'
import react from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Statistics from './components/statistic'
import Reason from './components/reason'
import House from './components/house'
import Review from './components/review'
import Footer from './components/footer'

function App() {
    return (
      <div>
        <Navbar/>
        <div>
          <main>
            <div id="header">
              <Header />
            </div>

            <div id="statistic">
              <Statistics />
            </div>

            <div id="reason">
              <Reason />
            </div>

            <div id="house">
              <House />
            </div>

            <div id="review">
              <Review />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    );
}
  
export default App;
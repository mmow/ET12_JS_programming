import './App.css';
import { useState } from 'react';


function App() {
  
  //list with three messages
  const messages = ["I think im a good person", "i have a dream", "i have good kids"];
  const [counter, setCounter] = useState(1);

  //open and close Button state
      const[isopen, setIsOpen] = useState(false);
      //state to safe the username
      const [inputs, setInputs] = useState({});
      //function to handle the changes in all inputs
      const handle_changes = function(event){
        const name =event.target.name
        const value = event.target.value
        //spread statment
        setInputs(values => ({...values}))
      }
      //select gender state
      const [mygender, setMyGender] = useState("");
      //function to pass the selected gender
      const selectedGender =(event)=>{
        setMyGender(event.target.value)
      }
        

  return (
    <div className="App">
      <h1>Slice by Mamtaz A Mow</h1>
      <section className='slicewrapper'>
        <div className='numberWrapper'>
          <div className={counter === 1 ? 'active' : ''}><p>1</p></div>
          <div className={counter === 2 ? 'active' : ''}><p>2</p></div>
          <div className={counter === 3 ? 'active' : ''}><p>3</p></div>

        </div>
        <p className='msg'><em style={{"color": "orange"}}>{messages[counter-1]}</em></p>
        
        <div className='btngroup'>
        <button onClick={function(){(counter>1) ?setCounter(counter-1): setCounter(3)}}>Previous</button>
        <button onClick={function(){(counter<messages.length) ?setCounter(counter+1): setCounter(1)}}>Next</button>

        

      </div>
      </section>

      <h1>Open and Close Button</h1>
      
        <section className = 'container'>
          <div className="info">
            <b>Cat (Felis catus) </b> house cat to distinguish it from other felids and felines, is a small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are .<button onClick={function(){setIsOpen(!isopen)}}className='readmorebtn' > {isopen ? 'Hide' : 'Read More'}</button>
          </div>

          <article>
            {
              isopen && <p className='readmore'>Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.</p>              
            }
            
          </article>
        </section>

        <h1>Forms</h1>
        <form className='myform'>
          <fieldset>
            <legend>Form in ReactJS</legend>
            <div className='formgroup'>
              <label>Enter username
                <input
                  type='text'
                  id='username'
                  className='inputstyle'
                  name='username'
                  placeholder='Enter your username'
                  onChange={handle_changes}
                  value={inputs.username}
                />
              </label>
              
            </div>
            <div className='formgroup'>
              <label>Enter the lucky number:
                <input
                  type='number'
                  id='luckyNumber'
                  className='inputstyle'
                  name='luckyNumber'
                  placeholder='Enter your lucky number'
                  onChange={handle_changes}
                  value={inputs.luckyNumber}

                />
              </label>
            </div>
            <div className='formgroup'>
              <label>
                Select a gender:
                <select value={mygender}onChange={selectedGender}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  

                </select>
              </label>

            </div>
            <button type='submit' className='submitbtn'>Submit</button>
          </fieldset>
          

        </form>
        <h2>From result</h2>
        <p>The username = {inputs.username}</p>
        <p>Use lucky number = {inputs.luckyNumber}</p>
        <p> Selected gender = {mygender}</p>
        
      

      
      
      
      
    </div>
  );
}

export default App;

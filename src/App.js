import { useState } from "react";



const Create =()=>{
  const [ArchDim, setArchDim] = useState('');
  const [BBDim, setBBDim] = useState('')
  const [Family,setFamily] = useState('')
  const [Parent,setParent] = useState('')
  const [Child, setChild] = useState('')
  const handleSubmit = (e) => {
    alert('The form has been submitted:'+ '   ' + 'Architecture Dimensionality:' + ArchDim + '    ' + 'Building Block Dimensionality:' + BBDim +'   ' + 'Family:' + Family + '    ' + 'Parent:' + Parent + '    ' + 'Child:' + Child );
    e.preventDefault();
    const answers = {ArchDim, BBDim, Family, Parent, Child};
    
    console.log(answers)
    localStorage.setItem('Answers',JSON.stringify(answers) );
  }
  return(
    
    <div className="create">
      <h2>Mechanical Engineering Architected Materials Form</h2>
      <p>This is the form for entering new architected materials. Currently it will save each submission to the local storage in JSON. For more information contact AndrewGross@sc.edu </p>

      <form onSubmit={handleSubmit}> 
        <label> Architecture Dimensionality </label>
        <select
        value={ArchDim}
        onChange={(e) => setArchDim(e.target.value)}
        >
          <option value="1D">1D</option>
          <option value="2D">2D</option>
          <option value="2.5D">2.5D</option>
          <option value="3D">3D</option>
        </select>
        <label>Building Block Dimensionality</label>
        <select
        value={BBDim}
        onChange={(e)=> setBBDim(e.target.value)}
        >
          <option value="1D">1D</option>
          <option value="2D">2D</option>
          <option value="2.5D">2.5D</option>
          <option value="3D">3D</option>
        </select>
        <label>Family</label>
        <select
        value={Family}
        onChange={(e)=>setFamily(e.target.value)}
        >
          <option value="Network">Network</option>
          <option value="Kirigami">Kirigami</option>
          <option value="Origami">Origami</option>
          <option value="Linkage">Linkage</option>
          <option value="IPC">IPC</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Other">Other</option>
        </select>

        <label for="parentCheck">Hierarchical Parent?:</label>
        <input type="checkbox" id="parentCheck" value={Parent} onChange={(e)=>setParent(e.target.checked)} ></input>

        <label for="childCheck"> Child?:</label>
        <input type="checkbox" id="childCheck" onChange={(e)=>setChild(e.target.checked)}></input>

      <button>Submit</button>
     
      </form>
    </div>
  );
}

export default Create;
import React from "react";

  const InfoStudent = ({ studentData }) => {
    const [student_info, setStudents] = React.useState(studentData);
    const [name, setName] = React.useState("");
    const [branch, setBranch] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");

  
  const DeleteStudent = (id) => {
      const newStudents = student_info.filter((student_info) =>
       student_info.id !== id);
      setStudents(newStudents);
    };
 

    
  const Submit = (S) => {
    S.preventDefault();
    console.log("Form Submitted");
    setStudents([...student_info, { id: student_info.length + 1, name, branch, phoneNumber }]);
    setName("");
    setBranch("");
    setPhoneNumber("");
  };

  const isDone = false;

  function handle() {
      return isDone = true;
  }


  return (
    <div style={{marginLeft: "400px"}}>
      <h2 style={{marginLeft: "300px", marginBottom: "50px"}}>Student Info</h2>


      <form onSubmit={Submit}>
    
        
          <label>Name</label>
          <input type="text" required value={name} onChange={(U) => setName(U.target.value)}></input>
     

 
          <label>Branch</label>
          <input type="text" value={branch} onChange={(B) => setBranch(B.target.value)}></input>
        


      
          <label>Phone Number</label>
          <input type="number" value={phoneNumber} onChange={(P) => setPhoneNumber(P.target.value)}></input>
      

        <button onClick={handle} type="submit">
          Add
        </button>
      </form>



      <div style={{marginTop:"50px", marginLeft: "200px"}}>
      <table border="1">
        <tr>
          <th>Name</th> <th>Branch</th> <th>Phone Number</th> <th>Delete Student</th>
        </tr>

        {student_info.map((student) => {
          return (

            <tr key={student_info.id}>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.phoneNumber}</td>
              <td>
                <button onClick={() => DeleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      </div>

      
    </div>
  );
};

export default InfoStudent;
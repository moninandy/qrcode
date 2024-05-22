import {useState} from 'react'
export const BasicUseState = () => {
const[user,setUser]= useState({
    name:"Monisha",
    age:23,
    gender:"female",
    ismarried:false,
    country:"india",
    description:"write about yourself"
})
function handler(e){
const name=e.target.name;

const value=e.target.type ==="checkbox" ? e.target.checked:e.target.value;
setUser({...user,[name]:value});
}
    return(
        <>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Is Married</td>
                    <td>{user.ismarried ? "married":"unmarried"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <td>Description </td>
                    <td>{user.description}</td>
                </tr>
            </tbody>
        </table>
        <form>
            <input type="text" placeholder="Enter your Name" value={user.name} onChange={handler} name="name"  />
            <input type="Number" placeholder="Enter your Age" value={user.age} onChange={handler}  name="age"/>
            <div className="gender">
            <label htmlfor="male">
            <input type="radio" name="gender" checked={user.gender=="male"}  onChange={handler} value="male"/>Male
            </label>
            <label htmlfor="female">
            <input type="radio" name="gender" checked={user.gender=="female"}  onChange={handler} value="female"/>Female
            </label>
            </div>
            <label htmlFor="ismarried">
            <input type="checkbox" checked={user.ismarried} id="isMarried" name="ismarried" onChange={handler}/>IsMarried
            </label>
            <div>
            <label htmlFor="country">Select a Country</label>
                <select name="country" onChange={handler}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
                </div>
            
            <textarea placeholder="Write About  Yourself" name="description" onChange={handler}/>
            

        </form>
        





        
        </>
    )
}

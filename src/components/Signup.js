import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let maleRBRef = useRef();
    let femaleRBRef = useRef();
    let addressTextRef = useRef();
    let ageInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobileNumberInputRef = useRef();
    let stateSelectRef = useRef();
    let resultParaRef = useRef();
    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let addressResultRef = useRef();
    let ageResultRef = useRef();
    let emailResultRef = useRef();
    let passwordResultRef = useRef();
    let mobileNumberResultRef = useRef();
    let nameRegEx = /^[A-Za-z\s]{2,30}$/;
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{};:'",/?]).{8,}$/;
    let ageRegEx = /^(100|[1-9]\d?)$/;
    let mobileNumberRegEx  = /^\s*\+\s*91\s*-\s*\d{10}$/;
    let addressRegEx = /^[a-zA-Z0-9\s,.-\/]+$/;
    let selectedGender;
    let selectedMS;
    let capital;
    let languageKnown = {
        telugu : false,
        hindi : false,
        english : false,
    };

    //namevalidation
    let validateName = (nameStr, resultRef)=>{
        let result = nameRegEx.test(nameStr)
        if(result){
            resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor="green";
        }else{
             resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor="red";
        }
    }

    //address validation
    let validateAddress = (addStr,resultRef)=>{
        let result = addressRegEx.test(addStr)
        if(result){
             resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor="green";
        }else{
             resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor="red";
        }
    }

    //email validation
    let validateEmail = (emailStr, resultRef)=>{
        let result = emailRegEx.test(emailStr)
        if(result){
             resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor="green";
        }else{
             resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor="red";
        }
    }

    //password validation
    let validatePassword = (passwordStr, resultRef)=>{
        let result = passwordRegEx.test(passwordStr)
        if(result){
             resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor="green";
        }else{
             resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor="red";
        }
    }

    //age Validation
    let age = 50;
    let validateAge = (age, resultRef)=>{
        if(ageRegEx.test(age)){
             resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor="green";
        }else{
             resultRef.current.innerHTML = "invalid";
            resultRef.current.style.backgroundColor="red";
        }
    }

        //Mobile Number validation
        let mobile = "+919123456789";
        let validateMobileNumber = (mobile, resultRef)=>{
            if(mobileNumberRegEx.test(mobile)){
                resultRef.current.innerHTML = "valid";
            resultRef.current.style.backgroundColor="green";
            }else{
                resultRef.current.innerHTML = "invalid";
                resultRef.current.style.backgroundColor="red";
            }
        }

        //onFocus
        let inputOnFocus = (inputRef)=>{
            inputRef.current.style.backgroundColor="green";
            inputRef.current.style.color="white";
        }

        //onBlur
        let inputOnBlur = (inputRef)=>{
            inputRef.curent.style.backgroundColor="";
        }

        //Create Account

    let signupAccount = ()=>{
        if(stateSelectRef.current.value == "Select State"){
            alert("Please select your state");
        }else{

            let salutation = "";

            if(selectedGender == "male"){
                salutation = "Mr.";
            }
            if(selectedGender == "female"){
                if(selectedMS == "single"){
                    salutation = "Miss";
                }else{
                    salutation = "Mrs";
                } 
            }
            resultParaRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} you konwn ${languageKnown.telugu == true ? "telugu":""}, ${languageKnown.hindi == true ? "hindi":""}, ${languageKnown.english == true ? "english":""} from ${capital}, ${stateSelectRef.current.value} your account has been created`;
        }
    }
    

  return (
    <div className='App'>
        <form>
            <h2>SIGNUP</h2>
            <div>
                <label>Firstname</label>
                <input ref={firstNameInputRef} type='text'
                onFocus={()=>{
                    inputOnFocus(firstNameInputRef);
                }}
                onChange={()=>{
                    validateName(firstNameInputRef.current.value,firstNameResultRef);
                }}
                onBlur={()=>{
                    inputOnBlur(firstNameInputRef);
                }}></input>
                <span ref={firstNameResultRef}></span>
            </div>
            <div>
                <label>Lastname</label>
                <input ref={lastNameInputRef} type='text'
                onFocus={()=>{
                    inputOnFocus(lastNameInputRef);
                }}
                onChange={()=>{
                    validateName(lastNameInputRef.current.value,lastNameResultRef);
                }}
                onBlur={()=>{
                    inputOnBlur(lastNameInputRef);
                }}></input>
                <span ref={lastNameResultRef}></span>
            </div>
            <div>
                <label>Gender</label>
                <input type='radio' name="gender" ref={maleRBRef} onChange={()=>{
                    if(maleRBRef.current.checked == true){
                        selectedGender = "male";
                    }
                }}></input>
                <label style={{width:"auto"}}>Male</label>
                <input type='radio' name="gender" ref={femaleRBRef} onChange={()=>{
                    if(femaleRBRef.current.checked == true){
                        selectedGender = "female";
                    }
                }}></input>
                <label style={{width:"auto"}}>Female</label>
                <span></span>
            </div>
            <div>
                <label>Marital Status</label>
                <input type='radio' name="ms" onChange={(eventObj)=>{
                    console.log(eventObj);
                    if(eventObj.target.checked == true){
                        selectedMS = "single";
                    }
                }}></input>
                <label style={{width:"auto"}}>Single</label>
                <input type='radio' name="ms" onChange={(eventObj)=>{
                    console.log(eventObj);
                    if(eventObj.target.checked == true){
                        selectedMS = "married";
                    } 
                }}></input>
                <label style={{width:"auto"}}>Married</label>
                <span></span>
            </div>
            <div>
                <label>Age</label>
                <input ref={ageInputRef} type='text' 
                onFocus={()=>{
                    inputOnFocus(ageInputRef);
                }}
                onChange={()=>{
                    validateAge(ageInputRef.current.value,ageResultRef);
                }}
                OnBlur={()=>{
                    inputOnBlur(ageInputRef);
                }}></input>
                <span ref={ageResultRef}></span>
            </div>
            <div>
                <label>Email</label>
                <input ref={emailInputRef} type='text' 
                onFocus={()=>{
                    inputOnFocus(emailInputRef);
                }}
                onChange={()=>{
                    validateEmail(emailInputRef.current.value,emailResultRef);
                }}
                onBlur={()=>{
                    inputOnBlur(emailInputRef);
                }}></input>
                <span ref={emailResultRef}></span>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef} type='text' 
                onFocus={()=>{
                    inputOnFocus(passwordInputRef);
                }}
                onChange={()=>{
                    validatePassword(passwordInputRef.current.value,passwordResultRef);
                }}
                onBlur={()=>{
                    inputOnBlur(passwordInputRef);
                }}></input>
                <span ref={passwordResultRef}></span>
            </div>
            <div>
                <label>Mobile No.</label>
                <input ref={mobileNumberInputRef} type='text' 
                onFocus={()=>{
                    inputOnFocus(mobileNumberInputRef);
                }}
                onChange={()=>{
                    validateMobileNumber(mobileNumberInputRef.current.value,mobileNumberResultRef);
                }}
                onBlur={()=>{
                    inputOnBlur(mobileNumberInputRef);
                }}></input>
                <span ref={mobileNumberResultRef}></span>
            </div>
            <div>
                <label>Address</label>
                <textarea typeof='text' ref={addressTextRef} 
                onFocus={()=>{
                    inputOnFocus(addressTextRef);
                }}
                onChange={()=>{
                    validateAddress(addressTextRef.current.value,addressResultRef);
                }}
                onBlur={()=>{
                    inputOnBlur(addressTextRef);
                }}></textarea>
                <span ref={addressResultRef}></span>
            </div>
            <div>
                <label>State</label>
                <select style={{width:"20px"}} ref={stateSelectRef} onChange={()=>{
                    let selectState = stateSelectRef.current.value;
                    if(selectState == "Jammu and Kashmir"){
                        capital = "Srinagar";
                        console.log("Srinagar");
                    }else if(selectState == "Ladakh"){
                        capital = "Leh";
                        console.log("Leh");
                    }else if(selectState == "Arunachal Pradesh"){
                        capital = "Itanagar";
                        console.log("Itanagar");
                    }else if(selectState == "Assam"){
                        capital = "Dispur";
                        console.log("Dispur");
                    }else if(selectState == "Bihar"){
                        capital = "Patna";
                        console.log("Patna");
                    }else if(selectState == "Chhattisgarh"){
                        capital = "Raipur";
                        console.log("Raipur");
                    }else if(selectState == "Goa"){
                        capital = "Paniji";
                        console.log("Paniji");
                    }else if(selectState == "Gujarat"){
                        capital = "Ghandinagar";
                        console.log("Ghandinagar");
                    }else if(selectState == "Haryana"){
                        capital = "Chandigarh";
                        console.log("Chandigarh");
                    }else if(selectState == "Himachal Pradesh"){
                        capital = "Shimla";
                        console.log("Shimla");
                    }else if(selectState == "Jharkhand"){
                        capital = "Ranchi";
                        console.log("Ranchi");
                    }else if(selectState == "Madhya Pradesh"){
                        capital = "Bhopal";
                        console.log("Bhopal");
                    }else if(selectState == "Maharashtra"){
                        capital = "Mumbai";
                        console.log("Mumbai");
                    }else if(selectState == "Manipur"){
                        capital = "Imphal";
                        console.log("Imphal");
                    }else if(selectState == "Meghalaya"){
                        capital = "Shillong";
                        console.log("Shillong");
                    }else if(selectState == "Mizoram"){
                        capital = "Aizawl";
                        console.log("Aizawl");
                    }else if(selectState == "Nagaland"){
                        capital = "Kohima";
                        console.log("Kohima");
                    }else if(selectState == "Odisha"){
                        capital = "Bhubaneshwar";
                        console.log("Bhubaneshwar");
                    }else if(selectState == "Punjab"){
                        capital = "Chandigarh";
                        console.log("Chandigarh");
                    }else if(selectState == "Rajasthan"){
                        capital = "Jaipur";
                        console.log("Jaipur");
                    }else if(selectState == "Sikkim"){
                        capital = "Gangtok";
                        console.log("Gangtok");
                    }else if(selectState == "Tripura"){
                        capital = "Agartala";
                        console.log("Agartala");
                    }else if(selectState == "Uttarkhand"){
                        capital = "Dehradun";
                        console.log("Dehradun");
                    }else if(selectState == "Uttar Pradesh"){
                        capital = "Lucknow";
                        console.log("Lucknow");
                    }else if(selectState == "West Bengal"){
                        capital = "Kolkata";
                        console.log("Kolkata");
                    }else if(selectState == "Telangana"){
                        capital = "Hyderabad";
                        console.log("Hyderabad");
                    }else if(selectState == "Andhra Pradesh"){
                        capital = "Amaravati";
                        console.log("Amaravati");
                    }else if(selectState == "Tamil Nadu"){
                        capital = "Chennai";
                        console.log("Chennai");
                    }else if(selectState == "Karnataka"){
                        capital = "Bangalore";
                        console.log("Bangalore");
                    }else if(selectState == "Kerala"){
                        capital = "Thiruvananthapuram";
                        console.log("Thiruvananthapuram");
                    }else{
                        console.log("Select proper value");
                    }
                }}>
                    <option>select state</option>
                    <option>Jammu and Kashmir</option>
                    <option>Ladakh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tripura</option>
                    <option>Uttarakhand</option>
                    <option>Uttar Pradesh</option>
                    <option>West Bengal</option>
                    <option>Andhra Pradesh</option>
                    <option>Telangana</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                </select>
            </div>
            <div>
                <label>languages Known</label>
                <input type='checkbox' onChange={(eventObj)=>{
                    languageKnown.telugu = eventObj.target.checked;
                }}></input>
                <label style={{width:"auto"}}>Telugu</label>
                <input type='Checkbox' onChange={(eventObj)=>{
                    languageKnown.hindi = eventObj.target.checked;
                }}></input>
                <label style={{width:"auto"}}>Hindi</label>
                <input type='checkbox' onChange={(eventObj)=>{
                    languageKnown.english = eventObj.target.checked;
                }}></input>
                <label style={{width:"auto"}}>English</label>
            </div>
            <span></span>
            <div>
                <button type='button' onClick={()=>{
                    signupAccount();
                }}>Create Account</button>
            </div>
            <p ref={resultParaRef}></p>
        </form>
    <br></br>
    <Link to="/">Login</Link>
    </div>
  )
}

export default Signup
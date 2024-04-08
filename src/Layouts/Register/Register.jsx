

const Register = () => {
  return (
    <div>
       <h1 className="text-center text-blue-500 text-3xl">Create new account!</h1>
    </div>
  );
};

export default Register;


// import { createUserWithEmailAndPassword, sendEmailVerification,updateProfile, getAuth } from "firebase/auth";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import app from "../../Firebase/firebase.config";
// import { LuEye, LuEyeOff } from "react-icons/lu";

// const SignUp = () => {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [signUpError, setSignUpError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [showPass, setShowPass] = useState(false);

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const accepted = e.target.terms.checked;
//     console.log(name, email, password, accepted);

//     // setName(name);
//     // setEmail(email);
//     // setPassword(password);
//     // e.target.name.value = "";
//     // e.target.email.value = "";
//     // e.target.password.value = "";

//     //reset error and success text
//     setSignUpError("");
//     setSuccess("");

//     const regex =
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\w\d\s]).{8,20}$/;

//     if (password.length < 8) {
//       setSignUpError("Password should be at least 8 characters");
//       return;
//     } else if (!regex.test(password)) {
//       setSignUpError(
//         "Your password should have at least one digit, one lowercase, one uppercase, one special character from [@#$%^&+=!] and contain 8 to 20 characters."
//       );
//       return;
//     } else if (!accepted) {
//       setSignUpError("Please accept our terms and conditions.");
//       return;
//     }

//     const auth = getAuth(app);
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         setSuccess("User created successfully.");

//         //update profile of user
//         updateProfile(result.user, {
//           displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
//         }).then(() => {
//           // Profile updated!
//           console.log("Profile is also updated!")
//           // ...
//         }).catch((error) => {
//           // An error occurred
//           console.error(error);
//           // ...
//         });

//         //Sent email verification for new user
//         sendEmailVerification(result.user)
//         .then(() => {
//           // Email verification sent!
//           console.log(result.user);
//           alert("Check your email and verify it!")
//           // ...
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         setSignUpError(error.message);
//       });
//   };

//   return (
//     <div>
//       <h1 className="text-3xl text-center mt-10">Here, you can Sign Up!</h1>
//       <div className="w-1/2 rounded-3xl mt-10 mx-auto border-2 border-blue-400 p-8">
//         {/* Sign Up form */}
//         <form onSubmit={handleSignUp}>
//           <input
//             type="text"
//             name="name"
//             className="w-full border-2 
//           placeholder-sky-400 border-sky-500   text-xl  mb-4  rounded-2xl p-3"
//             placeholder="Enter your name"
//             id="1"
//           />

//           <input
//             type="email"
//             name="email"
//             className="w-full border-2 placeholder-sky-400  border-sky-500 text-xl  mb-4  rounded-2xl p-3"
//             placeholder="Enter Your Email"
//             id=""
//             required
//           />
//           <div className="relative">
//             <input
//               type={showPass ? "text" : "password"}
//               name="password"
//               placeholder="Enter unique password"
//               className="w-full border-2 placeholder-sky-400  border-sky-500 text-xl  mb-4  rounded-2xl p-3"
//               id="2"
//               required
//             />
//             <span
//               onClick={() => setShowPass(!showPass)}
//               className="absolute top-4 text-sky-600 right-2 text-2xl"
//             >
//               {showPass ? <LuEyeOff /> : <LuEye />}
//             </span>
//           </div>

//           <div className="mb-2 text-sky-600">
//             <input
//               className="text-3xl mr-2"
//               type="checkbox"
//               name="terms"
//               id="4"
//             />
//             <label htmlFor="">
//               Accept our
//               <a href=""> terms & conditions.</a>{" "}
//             </label>
//           </div>

//           <input
//             type="submit"
//             value="Sign Up"
//             className="border-2 border-sky-400 rounded-2xl font-semibold text-white bg-blue-400 p-2 px-4"
//             id="3"
//           />
//         </form>

//         <div className="my-2">
//           {success
//             ? success && <p className="text-green-500">{success}</p>
//             : signUpError && <p className="text-red-500">{signUpError}</p>}
//         </div>
//         <div>
//           <p className="mt-4 text-center">
//             Already have an account? Please{" "}
//             <Link to="/signIn">
//               {" "}
//               <span className="text-blue-600">Sign In</span>
//             </Link>{" "}
//             then.{" "}
//           </p>
//         </div>

//         {/* <div>
//            {name && <h1>Username:{name}</h1> }
//            {email && <h1>Email:{email}</h1> }
//            {password && <h1>Password:{password}</h1> }
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default SignUp;

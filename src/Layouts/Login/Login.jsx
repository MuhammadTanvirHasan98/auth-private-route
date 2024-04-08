

const Login = () => {
  return (
    <div>
       <h1 className="text-center text-blue-500 text-3xl">Welcome back!</h1>
    </div>
  );
};

export default Login;














// import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import app from "../../Firebase/firebase.config";
// import { LuEye, LuEyeOff } from "react-icons/lu";
// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [showPass, setShowPass] = useState(false);
//   const [signedIn, setSignedIn] = useState("");
//   const [signedInError, setSignedInError] = useState("");
//   const [sentReqEmail, setSentReqEmail]= useState("");
//   // const [Email, setEmail]= useState("");
//   // console.log(Email);
//   //another way to get the value of email is given below:
//    const emailRef = useRef(null);

//   const handleHeroSignIn = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     console.log(email, password);

//     //reset error and success message
//     setSignedIn("");
//     setSignedInError("");
//     setSentReqEmail("");

//     const auth = getAuth(app);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         console.log(result.user);
//         if(result.user.emailVerified){
//           setSignedIn("User signed in successfully.")
//         }
//         else{
//           alert("You have to verify your email at first!")
//         }
        
//       })
//       .catch((error) => {
//         console.error(error.message);
//         setSignedInError("Provide valid email and password!")
//       });
//   };

//   const handleResetPass =()=>{
    
//     setSignedIn("");
//     setSignedInError("");
//     setSentReqEmail("");
//     const email = emailRef.current.value;
//     console.log("Pass reset request sent to this email: ",email);
//     console.log(typeof email);

//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


//      if(!email){
//         setSignedInError("You didn't provide anything!")
//         return;
//      }
//      else if(!(emailRegex.test(email))){
//       setSignedInError("Provide a valid email!")
//       return;
//      }

//     const auth = getAuth(app);
//     sendPasswordResetEmail(auth, email)
//     .then(() => {
//       // Password reset email sent!
//       // ..
//       setSentReqEmail(`Password reset request is sent to this email ${email}`)
//     })
//     .catch((error) => {
//        console.error(error.message);
//        setSignedInError(error.message)
//     });
//   }

//   return (
//     <div>
//       {/* onSubmit={handleHeroSignUp}  */}

//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Here you can Sign In now!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//           </div>
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             {/* Hero Sign Up form */}
//             <form onSubmit={handleHeroSignIn} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email Address"
//                   name="email"
//                   // onChange={(e)=>setEmail(e.target.value) }
//                   ref={emailRef}
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPass ? "text" : "password"}
//                     placeholder="Enter your Password"
//                     name="password"
//                     className="input input-bordered w-full"
//                     required
//                   />
//                   <span
//                     onClick={() => setShowPass(!showPass)}
//                     className="absolute top-3 text-blue-700 right-2 text-2xl"
//                   >
//                     {showPass ? <LuEyeOff /> : <LuEye />}
//                   </span>
//                 </div>

//                 <label className="label">
//                   <a onClick={handleResetPass} href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>

//              <div>
//                {signedIn ?
//                 <p className="text-green-500">{signedIn}</p>
//                 :
//                <p className="text-red-500">{signedInError}</p> }
//                {
//                 sentReqEmail && <p className="text-green-500">{sentReqEmail}</p>
//                }
//              </div>
               
//               <div className="form-control mt-6">
//                 <button
//                   type="submit"
//                   className="btn btn-primary text-xl text-white"
//                 >
//                   Sign In
//                 </button>
//               </div>
//             </form>
//             <p className="mb-4 text-center">New to this website? Please <Link to="/signUp"> <span className="text-blue-600">Sign Up</span></Link> first. </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

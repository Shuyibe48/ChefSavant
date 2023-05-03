import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext)

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [photoURL, setPhotoURL] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photo = form.photo.value
    form.reset()

    createUser(email, password)
    .then(result => {
      const createdUser = result.user
      console.log(createdUser);
      updateUser(result.user, name, photo)
      .then(() => {})
    })
    .catch(error => {
      const errorMessage = error.message
      console.log(errorMessage);
    })
  };


  return (
    <div className="w-full max-w-md mx-auto my-12">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="photoURL">
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photoURL"
            type="text"
            name="photo"
            placeholder="Enter your photo URL"
            required
            // value={photoURL}
            // onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <a
            className="ps-4 lg:ps-0 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/login"
          >
            Already have an account? Log in
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;

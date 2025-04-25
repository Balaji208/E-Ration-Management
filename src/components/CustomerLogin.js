import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../store/profieSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { Password } from "@mui/icons-material";

export const CustomerLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userRation, setUserRation] = useState({
    Ration_ID: 0,
    pass_word :'',

  });
  const [pass, setPass] = useState("");
  const handleLogin = async () => {
    try {
      //console.log(userRation)
      const response = await axios.post(
        "http://localhost:4000/Customer/login-customer",
        userRation
      );
      // const user = response.data;
      // console.log(response,"helo ",setUserRation.pass_word)
      if (response.status===200) {
        
        window.sessionStorage.setItem(
          "ID",
          JSON.stringify(userRation.Ration_ID)
        );
        try {
          const res = await axios.get(
            `http://localhost:4000/Customer/MyProfile/${userRation.Ration_ID}`
          );
          let data = res.data;
          console.log(res);
          window.sessionStorage.setItem("Shop_Id_Customer", data.shopId);
          window.sessionStorage.setItem(
            "Family_Size_Customer",
            data.familySize
          );
       //   console.log("Before redux")
          dispatch(getProfile(data));
        } catch (err) {
          console.log(err);
        }

        toast.success("User logged In Successfully");
        navigate("/");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (err) {
      toast.error(err);
    }
  };
  //notify customer about register
  const handleNotify = () => {
    toast.info(
      "Contact your shop manager for registering your ration card in E-ration"
    );
  };

  return (
    <div>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        className=" mx-44 mt-16 w-8/12 h-5/5 rounded-xl shadow-xl p-4 bg-white border border-gray-300"
      >
        <div className="flex flex-col ">
          <motion.h2
            className="text-xl mt-4 px-8 font-bold text-orange-500"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
          >
            Welcome back!!
          </motion.h2>
          <motion.h1
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            className="text-4xl font-bold  mt-4 px-10"
          >
            User Log In
          </motion.h1>

          <label htmlFor="" className="p-4 mx-5 mt-2 font-semibold">
            Ration Number
          </label>
          <input
            type="text"
            onChange={(e) =>
              setUserRation({ ...userRation, Ration_ID: e.target.value })
            }
            style={{ "background-color": "#fff6f4" }}
            className="focus:ring-orange-500 rouded-2xl  mx-8 p-2 "
          />

          <label htmlFor="" className="p-4 mx-5 mt-2 font-semibold">
            Password
          </label>
          <input
            type="password"
            
            name=""
            id=""
            onChange={(e) =>
              setUserRation({ ...userRation, pass_word: e.target.value })
            }
            style={{ "background-color": "#fff6f4" }}
            className="rouded-2xl  mx-8 p-2 "
            
          />
        </div>

        <div className="flex flex-col justify-center items-center ">
          <motion.button
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 rounded-2xl border p-2 px-8 text-white text-xl bg-orange-500  hover:bg-orange-600"
            onClick={handleLogin}
          >
            Log In
          </motion.button>
        </div>
        <div className=""></div>
        <div className=" flex flex-row justify-center items-center mt-4 ">
          <p>Don't have an account?</p>

          <p
            className="p-2 cursor-pointer"
            onClick={handleNotify}
            style={{ color: "#F47458" }}
          >
            Sign Up
          </p>
        </div>

        <div className="my-4 flex flex-row justify-center items-center mx-4 ">
          <Link
            className="text-orange-500 hover:text-orange-600"
            to="/manager-login"
          >
            {" "}
            Login as Manager{" "}
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

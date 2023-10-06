import Layout from "../../components/layout/Layout";
// import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const LoginProfile = () => {
  const location = useLocation();
  const user = location.state?.user;

  if(!user)
  {
    return <div>No user data found</div>
  }
  
//   const {name,mobile,facebookId,email,dateofBirth,divisionName,zillaName,upZillaName,experienceDate,details,password} = user;
  return (
   <Layout> 
      <div className="mother bg-red-100 mt-1 p-10 shadow-xl">
        <div className="flex flex-col items-center text-center lg:mx-44 bg-blue-100 rounded-lg p-10  ">
          <h1 className="text-xl font-bold mb-4" > My Profile  </h1>
          <img
            className="rounded-full w-40 h-40 mb-2 shadow-lg"
            src="https://images.unsplash.com/photo-1579273168855-c63546c129dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="profile picture"
          />
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>

        <div className="row_two lg:flex justify-center p-8  shadow-lg mx-auto lg:mx-44 bg-blue-200">
          <div className="professional_info lg:w-1/2 flex flex-col items-start  ">
            <h1 className="text-3xl mb-4 font-bold ">Profession Information</h1>
            <div className="info-item">
              <label htmlFor="services" className="font-semibold">
                Services:
              </label>
              <span className="ml-2 font-bold ">{user.profession}</span>
            </div>
            <div className="info-item">
              <label htmlFor="experience" className="font-semibold">
                Experience from:
              </label>
              <span className="ml-2">{user.experienceDate}</span>  
            </div>
            <h2 className="mt-4 mb-2 text-lg font-semibold">Location</h2>
            <div className="info-item">
              <label htmlFor="division" className="font-semibold">
                Division:
              </label>
              <span className="ml-2">{user.divisionName}</span>
            </div>
            <div className="info-item">
              <label htmlFor="district" className="font-semibold">
                District:
              </label>
              <span className="ml-2">{user.zillaName}</span>
            </div>
            <div className="info-item">
              <label htmlFor="upazilla" className="font-semibold">
                Upazilla:
              </label>
              <span className="ml-2">{user.upZillaName}</span>
            </div> 
            <h2 className="mt-4 mb-2 text-lg font-semibold"> Details </h2>

            <div className="info-item">
             <div className="box-content h-auto w-auto p-1 border-4 "> {user.details} </div>
            </div>
          </div>

          <div className="personal_info lg:ml-5 lg:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl mb-4 font-bold">Personal Information</h2>
            <div className="info-item">
              <label htmlFor="mobile" className="font-semibold">
                Mobile:
              </label>
              <span className="ml-2">{user.mobile}</span>
            </div>
            <div className="info-item">
              <label htmlFor="whatsapp" className="font-semibold">
                WhatsApp:
              </label>
              <span className="ml-2">{user.mobile}</span>
            </div>
            <div className="info-item">
              <label htmlFor="facebook" className="font-semibold">
                Facebook Id link:
              </label>
              <a
                href="www.facebook.com/Belaluddin"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 underline"
              >
                http://www.faceboook.com/bellal-uddin
              </a>
            </div>
            <div className="info-item">
              <label htmlFor="email" className="font-semibold">
                Email:
              </label>
              <span className="ml-2">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    
      </Layout>
  );
};

export default LoginProfile;

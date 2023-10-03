const Profile = () => {
  return (
    <div>
      <div className="mother">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold mb-4">User Profile</h1>
          <img
            className="rounded-full w-32 h-32 mb-2"
            src="https://images.unsplash.com/photo-1579273168855-c63546c129dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="profile picture"
          />
          <h2 className="text-xl font-semibold mb-2">Belal Uddin</h2>
          <p>Age: 23</p>
        </div>

        <div className="row_two flex justify-center p-8 bg-gray-200 rounded-lg shadow-lg">
          <div className="professional_info w-1/2 flex flex-col items-start">
            <h1 className="text-2xl mb-4">Profession Information</h1>
            <div className="info-item">
              <label htmlFor="services" className="font-semibold">
                Services:
              </label>
              <span className="ml-2">Software Engineer</span>
            </div>
            <div className="info-item">
              <label htmlFor="experience" className="font-semibold">
                Experience:
              </label>
              <span className="ml-2">2020</span>
            </div>
            <h2 className="mt-4 mb-2 text-lg font-semibold">Location</h2>
            <div className="info-item">
              <label htmlFor="division" className="font-semibold">
                Division:
              </label>
              <span className="ml-2">Chattogram</span>
            </div>
            <div className="info-item">
              <label htmlFor="district" className="font-semibold">
                District:
              </label>
              <span className="ml-2">Cumilla</span>
            </div>
            <div className="info-item">
              <label htmlFor="upazilla" className="font-semibold">
                Upazilla:
              </label>
              <span className="ml-2">Cumilla Sadar</span>
            </div>
          </div>

          <div className="personal_info ml-5 w-1/2 flex flex-col items-start">
            <h2 className="text-2xl mb-4">Personal Information</h2>
            <div className="info-item">
              <label htmlFor="mobile" className="font-semibold">
                Mobile:
              </label>
              <span className="ml-2">01846210892</span>
            </div>
            <div className="info-item">
              <label htmlFor="whatsapp" className="font-semibold">
                WhatsApp:
              </label>
              <span className="ml-2">01846210892</span>
            </div>
            <div className="info-item">
              <label htmlFor="facebook" className="font-semibold">
                Facebook Id link:
              </label>
              <a
                href="http://www.faceboook.com/bellal-uddin"
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
              <span className="ml-2">belaluddin@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

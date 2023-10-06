import React from "react";
import Layout from "../../components/layout/Layout";
import "./developer.css";
import SocialIcons from "../../components/socialicon/SocialIcons";
import IntroductionDiv from "../../components/about/IntroductionDiv";

const Developer = () => {
  return (
    <Layout>
      <div className="body wraper bg-gray-200">
        <div className="text-center text-2xl font-bold text-white pt-2">
          Thank you for vising our website . <br />
          This is our 5th Semester Project on DBMS .
        </div>
        {/* Belal Uddin  */}
        <div className="dev1 lg:flex  text-center rounded-2xl lg:ml-40 lg:mr-40  bg-green-200 justify-center mt-10 p-10">
          <div className="avatar order-first md:order-last m-5 lg:ml-40">
            <div className="w-44 h-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                className="rounded-full"
                src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/275694236_3138012059808569_1514716233821755873_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHzTp9yiHS_prW-TdbzlB1NYebyt39-4sRh5vK3f37ixCET_KYr9hoKeJhcNTmsEUg6uYkos1iEKNqlvLLLIVW6&_nc_ohc=E9FR4DHTGyUAX9_HhWN&_nc_oc=AQl2ajr2v3EFXGlVXgzg64RZ5J6eB4Bp_JS7Zjz6kxyL7CVqWzibYi18rOkQBxMeZog&_nc_ht=scontent.fdac31-1.fna&oh=00_AfDpRXabd_deYfEVdkT8nAft7TAxfbN9QrZZSPdftJpczQ&oe=65216770"
              />
            </div>
          </div>
          <div className="info">
            <h1>Belal Uddin </h1>
            <span> Software Engineer </span>
            <p> I am a pationate Softawre Engineer ........ </p>
            <div className="social-media">
              <SocialIcons
                facebookUrl="https://facebook.com"
                githubUrl="https://github.com"
                linkedinUrl="https://linkedin.com"
                mobileUrl="tel:+123456789"
              />
            </div>
          </div>
        </div>
        {/* Naeem  */}
        <div className="dev2 lg:flex  text-center rounded-2xl mt-1 lg:ml-40 lg:mr-40  bg-green-200 justify-center p-10">
          <div className="avatar order-first md:order-last m-5 lg:ml-40">
            <div className="w-44 h-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                className="rounded-full"
                src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/130758540_2856246311366228_3778869020796941432_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXzAjgZx0J8j7sJhQSSfY3-W4hl6Zn_cv5biGXpmf9y7TYtGDWSZovG3VSRvgfSNzxwHXe8FuWqNNWb0qlV88e&_nc_ohc=oDxgtDfGO5YAX_apMY6&_nc_ht=scontent.fdac31-1.fna&oh=00_AfAgvkpkHiPVnfWipkxDCVqhpAPjb5NMIar6lBq0PevVpg&oe=65452670"
                alt="Naeem"
              />
            </div>
          </div>
          <div className="info">
            <h1> Najmu Islam Naeem </h1>
            <span> Software Engineer </span>
            <p> I am a pationate Softawre Engineer ........ </p>
            <div className="social-media">
              <SocialIcons
                facebookUrl="https://www.facebook.com/naeem.cse.cou"
                githubUrl="https://github.com/naeemcse"
                linkedinUrl="https://www.linkedin.com/in/najmul-islam-naeem-5692a71b2/"
                mobileUrl="tel:+880 01867210892 "
              />
            </div>
          </div>
        </div>
      </div>

      <IntroductionDiv />
    </Layout>
  );
};

export default Developer;

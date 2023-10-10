import { useState } from "react";
import "./form.css";
import Illustration from "/images/register-img.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import professionList from "./../../components/professionList/professionList";
import Layout from "../../components/layout/Layout";
const Form = () => {
  // use for data passing in backend

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [facebookId, setFacebookId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("2023-09-14");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [divisionName, setDivisionName] = useState("");
  const [zillaName, setZillaName] = useState("");
  const [upZillaName, setUpZillaName] = useState("");
  const [profession, setProfession] = useState("");
  const [experienceDate, setExperienceDate] = useState("2023-09-14");
  const [details, setDetails] = useState("");

  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const navigate = useNavigate();

  // form validatin state

  const [isNameValid, setIsNameValid] = useState(true);
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isDivisionValid, setIsDivisionValid] = useState(true);

  const [districtName, setDistrictName] = useState(''); // This is repetation of zillaName case previous it was not decleared 
  const [isDistrictValid, setIsDistrictValid] = useState(true);

  const [isUpZillaValid, setIsUpZillaValid] = useState(true);

  // validation for second page 
  const [isProfessionValid, setIsProfessionValid] = useState(true);


  // validaton for fomr 3 password 
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isPasswordFormValid = validatePasswordForm();
    if (isPasswordFormValid) {
      console.log('Password form submitted successfully');

      try {
        const response = await axios.post("http://localhost:3000/register", {
          name,
          mobile,
          email,
          facebookId,
          dateOfBirth,
          selectedGender,
          divisionName,
          zillaName,
          upZillaName,
          profession,
          experienceDate,
          details,
          password,
          reEnterPassword,
        });
        // navigation added
  
        popShow();
  
        console.log("Respose: ", response.data);
      } catch (error) {
        console.error("Error", error);
      }
      // Additional logic for form submission
      // If you want to move to the next page, you can call the function for that here
      // For example: nextPasswordForm();
    } else {
      console.log('Password form validation failed');
      // Additional logic for handling validation failure
      // If validation fails, you can handle it accordingly
    }

   
  };

  // form 1 validation  function

  const validateForm = () => {
    // Name validatio
    const isNameValid = name.trim() !== "";
    setIsNameValid(isNameValid);

    // Validation for Mobile
    const isMobileValid = validateMobile(mobile);
    setIsMobileValid(isMobileValid);

    // Validation for Email
    const isEmailValid = validateEmail(email);
    setIsEmailValid(isEmailValid);
    // Validation for Division
    const isDivisionValid = divisionName !== "";
    setIsDivisionValid(isDivisionValid);
    // Validation for District
    const isDistrictValid = districtName !== "";
    setIsDistrictValid(isDistrictValid);

    // Validation for Upzilla
    const isUpZillaValid = upZillaName !== "";
    setIsUpZillaValid(isUpZillaValid);

    // Return true if all fields are valid
    return (
      isNameValid &&
      isMobileValid &&
      isEmailValid &&
      isDivisionValid &&
      isDistrictValid &&
      isUpZillaValid
    );
  };

  // mobile number validation for Bangladesh

  const validateMobile = (phoneNumber) => {
    // Regular expression for a Bangladeshi mobile number
    const phoneRegex = /^01[3-9]\d{8}$/;
    return phoneRegex.test(phoneNumber);
  };

  // Email validation function

  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


// form 2 validation function 

const validateProfessionForm = () => {
  // Validation for Profession
  const isProfessionValid = profession.trim() !== '';
  setIsProfessionValid(isProfessionValid);

  // Return true if the profession field is valid
  return isProfessionValid;
};

// form 3 validation function for password mathch 
const validatePasswordForm = () => {
  // Validation for Password and Re-enter Password match
  const isPasswordMatch = password === reEnterPassword;
  setIsPasswordMatch(isPasswordMatch);

  // Return true if the passwords match
  return isPasswordMatch;
};



  // Here is a functin of onChange of divisin Select , here i set the useState of division Name and updated the districts Name for division wise
  const selecedDivision = (e) => {
    setDivisionName(e.target.value);
    districts();
    setIsDivisionValid(true); // Reset validation on selection change
  };

  // Here is a functin of onChange of districts Select , here i set the useState of  districtsName and updated the UpzillaName for districts wise

  const selectedZilla = (e) => {
    setZillaName(e.target.value);
    upzillaList();
    setDistrictName(e.target.value);
    setIsDistrictValid(true); // Reset validation on selection change
  };

  // Here is a functin of onChange of upzilla Select , here i set the useState of  upzillaName

  const selectedUpZilla = (e) => {
    setUpZillaName(e.target.value);
    setIsUpZillaValid(true); // Reset validation on selection change
  };

  // Form Page changing Start

  const next1 = () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log("Form submitted successfully");

      var frm1 = document.getElementById("form-1");
      var frm2 = document.getElementById("form-2");
      frm1.style.left = "-400px";
      frm2.style.left = "-350px";

      // Additional logic for form submission
    } else {
      console.log("Form validation failed");
      // Additional logic for handling validation failure
    }
  };
  const prev1 = () => {
    var frm1 = document.getElementById("form-1");
    var frm2 = document.getElementById("form-2");
    frm1.style.left = "10px";
    frm2.style.left = "250px";
  };

  const next2 = () => {
    const isProfessionFormValid = validateProfessionForm();

    if (isProfessionFormValid) {
      console.log('Profession form submitted successfully');


      var frm2 = document.getElementById("form-2");
    var frm3 = document.getElementById("form-3");
    frm2.style.left = "-800px";
    frm3.style.left = "-740px"
      // Additional logic for form submission
      // If you want to move to the next page, you can call the function for that here
      // For example: nextProfessionForm();
    } else {
      console.log('Profession form validation failed');
      // Additional logic for handling validation failure
      // If validation fails, you can handle it accordingly
    }

    ;
  };

  const prev2 = () => {
    var frm2 = document.getElementById("form-2");
    var frm3 = document.getElementById("form-3");
    frm2.style.left = "-350px";
    frm3.style.left = "250px";
  };

  // Form Page changing end
  // Assigning District for each Division Start
  const districts = () => {
    var diviList = document.getElementById("divisions").value;
    var disctList;
    // set barishal division districts
    if (diviList == "Barishal") {
      disctList =
        '<option disabled selected>Select District</option><option value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokhathi">Jhalokhathi</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
    }
    // set Chattogram division districts
    else if (diviList == "Chattogram") {
      disctList =
        '<option disabled selected>Select District</option><option value="Bandarban">Bandarban</option><option value="Chandpur">Chandpur</option><option value="Chattogram">Chattogram</option><option value="Cumilla">Cumilla</option><option value="Cox\'s Bazar">Cox\'s Bazar</option><option value="Feni">Feni</option><option value="Khagrachhari">Khagrachhari</option><option value="Noakhali">Noakhali</option><option value="Rangamati">Rangamati</option><option value="Lakshmipur">Lakshmipur</option>';
    }
    // set Dhaka division districts
    else if (diviList == "Dhaka") {
      disctList =
        '<option disabled selected>Select District</option><option value="Dhaka">Dhaka</option><option value="Faridpur">Faridpur</option><option value="Gazipur">Gazipur</option><option value="Gopalganj">Gopalganj</option><option value="Kishoreganj">Kishoreganj</option><option value="Madaripur">Madaripur</option><option value="Manikganj">Manikganj</option><option value="Munshiganj">Munshiganj</option><option value="Narayanganj">Narayanganj</option><option value="Narsingdi">Narsingdi</option><option value="Rajbari">Rajbari</option><option value="Shariatpur">Shariatpur</option><option value="Tangail">Tangail</option>';
    } else if (diviList == "Khulna") {
      disctList =
        '<option disabled selected>Select District</option><option value="Bagerhat">Bagerhat</option><option value="Chuadanga">Chuadanga</option><option value="Jashore">Jashore</option><option value="Jhenaidah">Jhenaidah</option><option value="Khulna">Khulna</option><option value="Kushtia">Kushtia</option><option value="Magura">Magura</option><option value="Meharpur">Meharpur</option><option value="Narail">Narail</option><option value="Satkhira">Satkhira</option>';
    } else if (diviList == "Mymensingh") {
      disctList =
        '<option disabled selected>Select District</option><option value="Jamalpur">Jamalpur</option><option value="Mymensingh">Mymensingh</option><option value="Netrokona">Netrokona</option><option value="Sherpur">Sherpur</option>';
    } else if (diviList == "Rajshahi") {
      disctList =
        '<option disabled selected>Select District</option><option value="Bogura">Bogura</option><option value="Chapai Nawabganj">Chapai Nawabganj</option><option value="Jaipurhat">Jaipurhat</option><option value="Naogaon">Naogaon</option><option value="Natore">Natore</option><option value="Pabna">Pabna</option><option value="Rajshahi">Rajshahi</option><option value="Sirajganj">Sirajganj</option>';
    } else if (diviList == "Rangpur") {
      disctList =
        '<option disabled selected>Select District</option><option value="Dinajpur">Dinajpur</option><option value="Gaibandha">Gaibandha</option><option value="Lalmonirhat">Lalmonirhat</option><option value="Nilphamari">Nilphamari</option><option value="Panchagarh">Panchagarh</option><option value="Rangpur">Rangpur</option><option value="Thakurgaon">Thakurgaon</option>';
    } else if (diviList == "Sylhet") {
      disctList =
        '<option disabled selected>Select District</option><option value="Habiganj">Habiganj</option><option value="Mauluvibazar">Mauluvibazar</option><option value="Sunamganj">Sunamganj</option><option value="Sylhet">Sylhet</option>';
    } else {
      alert("NO one is selected");
    }

    //  set/send districts name to District lists from division
    document.getElementById("distr").innerHTML = disctList;
  };
  // List of UpZilla distrcivtwise Start
  const upzillaList = () => {
    var DisList = document.getElementById("distr").value;
    var upzillaList;
    if (DisList == "Bagerhat") {
      upzillaList =
        '<option value="">Select One</option><option value="Bagerhat Sadar">Bagerhat Sadar</option><option value="Chitalmari">Chitalmari</option><option value="Fakirhat">Fakirhat</option><option value="Kachua">Kachua</option><option value="Mollahat">Mollahat</option><option value="Mongla">Mongla</option><option value="Morrelganj">Morrelganj</option><option value="Rampal">Rampal</option><option value="Sarankhola">Sarankhola</option><option value="Others">Others</option>';
    }
    if (DisList == "Bandarban") {
      upzillaList =
        '<option value="">Select One</option><option value="Alikadam">Alikadam</option><option value="Bandarban Sadar">Bandarban Sadar</option><option value="Lama">Lama</option><option value="Naikhongchhari">Naikhongchhari</option><option value="Rowangchhari">Rowangchhari</option><option value="Ruma">Ruma</option><option value="Thanchi">Thanchi</option><option value="Others">Others</option>';
    }
    if (DisList == "Barguna") {
      upzillaList =
        '<option value="">Select One</option><option value="Amtali">Amtali</option><option value="Bamna">Bamna</option><option value="Barguna Sadar">Barguna Sadar</option><option value="Betagi">Betagi</option><option value="Patharghata">Patharghata</option><option value="Others">Others</option>';
    }
    if (DisList == "Barishal") {
      upzillaList =
        '<option value="">Select One</option><option value="Agailjhara">Agailjhara</option><option value="Babuganj">Babuganj</option><option value="Bakerganj">Bakerganj</option><option value="Banari Para">Banari Para</option><option value="Barishal Sadar (Kotwali)">Barishal Sadar (Kotwali)</option><option value="Gaurnadi">Gaurnadi</option><option value="Hizla">Hizla</option><option value="Mehendiganj">Mehendiganj</option><option value="Muladi">Muladi</option><option value="Wazirpur">Wazirpur</option><option value="Others">Others</option>';
    }
    if (DisList == "Bhola") {
      upzillaList =
        '<option value="">Select One</option><option value="Bhola Sadar">Bhola Sadar</option><option value="Burhanuddin">Burhanuddin</option><option value="Char Fasson">Char Fasson</option><option value="Daulatkhan">Daulatkhan</option><option value="Lalmohan">Lalmohan</option><option value="Manpura">Manpura</option><option value="Tazumuddin">Tazumuddin</option><option value="Others">Others</option>';
    }
    if (DisList == "Bogura") {
      upzillaList =
        '<option value="">Select One</option><option value="Adamdighi">Adamdighi</option><option value="Bogura Sadar">Bogura Sadar</option><option value="Dhunat">Dhunat</option><option value="Dhupchanchia">Dhupchanchia</option><option value="Gabtali">Gabtali</option><option value="Kahaloo">Kahaloo</option><option value="Nandigram">Nandigram</option><option value="Sariakandi">Sariakandi</option><option value="Shajhanpur">Shajhanpur</option><option value="Sherpur">Sherpur</option><option value="Shibganj">Shibganj</option><option value="Sonatola">Sonatola</option><option value="Others">Others</option>';
    }
    if (DisList == "Brahmanbaria") {
      upzillaList =
        '<option value="">Select One</option><option value="Akhaura">Akhaura</option><option value="Ashuganj">Ashuganj</option><option value="Banchharampur">Banchharampur</option><option value="Bijoynagar">Bijoynagar</option><option value="Brahmanbaria Sadar">Brahmanbaria Sadar</option><option value="Kasba">Kasba</option><option value="Nabinagar">Nabinagar</option><option value="Nasirnagar">Nasirnagar</option><option value="Sarail">Sarail</option><option value="Others">Others</option>';
    }
    if (DisList == "Chandpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Chandpur Sadar">Chandpur Sadar</option><option value="Faridganj">Faridganj</option><option value="Haim Char">Haim Char</option><option value="Hajiganj">Hajiganj</option><option value="Kachua">Kachua</option><option value="Matlab">Matlab</option><option value="Shahrasti">Shahrasti</option><option value="Uttar Matlab">Uttar Matlab</option><option value="Others">Others</option>';
    }
    if (DisList == "Chapai Nawabganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Bholahat">Bholahat</option><option value="Gomastapur">Gomastapur</option><option value="Nachole">Nachole</option><option value="Nawabganj Sadar">Nawabganj Sadar</option><option value="Shibganj">Shibganj</option><option value="Others">Others</option>';
    }
    if (DisList == "Chattogram") {
      upzillaList =
        '<option value="">Select One</option><option value="Akbar Shah">Akbar Shah</option><option value="Anowara">Anowara</option><option value="Bakalia">Bakalia</option><option value="Bandar(Chitt. Port)">Bandar(Chitt. Port)</option><option value="Banshkhali">Banshkhali</option><option value="Bayejid Bostami">Bayejid Bostami</option><option value="Boalkhali">Boalkhali</option><option value="Chandanish">Chandanish</option><option value="Chandgaon">Chandgaon</option><option value="Chawkbazar">Chawkbazar</option><option value="Double Mooring">Double Mooring</option><option value="EPZ">EPZ</option><option value="Fatikchhari">Fatikchhari</option><option value="Halishahar">Halishahar</option><option value="Hathazari">Hathazari</option><option value="Karnafuli">Karnafuli</option><option value="Khulshi">Khulshi</option><option value="Kotwali">Kotwali</option><option value="Lohagara">Lohagara</option><option value="Mirsharai">Mirsharai</option><option value="Pahartali">Pahartali</option><option value="Panchlaish">Panchlaish</option><option value="Patenga">Patenga</option><option value="Patiya">Patiya</option><option value="Rangunia">Rangunia</option><option value="Raozan">Raozan</option><option value="Sadarghat">Sadarghat</option><option value="Sandwip">Sandwip</option><option value="Satkania">Satkania</option><option value="Sitakunda">Sitakunda</option><option value="Others">Others</option>';
    }
    if (DisList == "Chuadanga") {
      upzillaList =
        '<option value="">Select One</option><option value="Alamdanga">Alamdanga</option><option value="Chuadanga Sadar">Chuadanga Sadar</option><option value="Damurhuda">Damurhuda</option><option value="Jiban Nagar">Jiban Nagar</option><option value="Others">Others</option>';
    }
    if (DisList == "Cox's Bazar") {
      upzillaList =
        '<option value="">Select One</option><option value="Chakaria">Chakaria</option><option value="Cox\'s Bazar Sadar">Cox\'s Bazar Sadar</option><option value="Kutubdia">Kutubdia</option><option value="Maheshkhali">Maheshkhali</option><option value="Pekua">Pekua</option><option value="Ramu">Ramu</option><option value="Teknaf">Teknaf</option><option value="Ukhia">Ukhia</option><option value="Others">Others</option>';
    }
    if (DisList == "Cumilla") {
      upzillaList =
        '<option value="">Select One</option><option value="Barura">Barura</option><option value="Brahaman Para">Brahaman Para</option><option value="Burichang">Burichang</option><option value="Chandina">Chandina</option><option value="Chauddagram">Chauddagram</option><option value="Cumilla Sadar">Cumilla Sadar</option><option value="Cumilla Sadar South">Cumilla Sadar South</option><option value="Daudkandi">Daudkandi</option><option value="Debidwar">Debidwar</option><option value="Homna">Homna</option><option value="Laksam">Laksam</option><option value="Langalkot">Langalkot</option><option value="Meghna">Meghna</option><option value="Monohorganj">Monohorganj</option><option value="Muradnagar">Muradnagar</option><option value="Titas">Titas</option><option value="Others">Others</option>';
    }
    if (DisList == "Dhaka") {
      upzillaList =
        '<option value="">Select One</option><option value="Adabor">Adabor</option><option value="Airport">Airport</option><option value="Badda">Badda</option><option value="Banani">Banani</option><option value="Bangshal">Bangshal</option><option value="Bhashantek">Bhashantek</option><option value="Cantonment">Cantonment</option><option value="Chackbazar">Chackbazar</option><option value="Dakshin Khan">Dakshin Khan</option><option value="Darus-Salam">Darus-Salam</option><option value="Demra">Demra</option><option value="Dhamrai">Dhamrai</option><option value="Dhanmondi">Dhanmondi</option><option value="Dohar">Dohar</option><option value="Gandaria">Gandaria</option><option value="Gulshan">Gulshan</option><option value="Hatirjheel">Hatirjheel</option><option value="Hazaribhag">Hazaribhag</option><option value="Jattrabari">Jattrabari</option><option value="Kadamtoli">Kadamtoli</option><option value="Kafrul">Kafrul</option><option value="Kalabagan">Kalabagan</option><option value="Kamrangir Char">Kamrangir Char</option><option value="Keraniganj Model">Keraniganj Model</option><option value="Khilgaon">Khilgaon</option><option value="Khilkhet">Khilkhet</option><option value="Kotwali">Kotwali</option><option value="Lalbag">Lalbag</option><option value="Mirpur Model">Mirpur Model</option><option value="Mohammadpur">Mohammadpur</option><option value="Motijheel">Motijheel</option><option value="Mugda">Mugda</option><option value="Nawabganj">Nawabganj</option><option value="New Market">New Market</option><option value="Pallabi">Pallabi</option><option value="Paltan Model">Paltan Model</option><option value="Ramna Model">Ramna Model</option><option value="Rampura">Rampura</option><option value="Rupnagar">Rupnagar</option><option value="Sabujbhag">Sabujbhag</option><option value="Savar">Savar</option><option value="Shah Ali">Shah Ali</option><option value="Shahbag">Shahbag</option><option value="Shahjahanpur">Shahjahanpur</option><option value="Sher e Bangla Nagar">Sher e Bangla Nagar</option><option value="Shyampur">Shyampur</option><option value="South Keraniganj">South Keraniganj</option><option value="Sutrapur">Sutrapur</option><option value="Tejgaon">Tejgaon</option><option value="Tejgaon Industrial">Tejgaon Industrial</option><option value="Turag">Turag</option><option value="Uttar Khan">Uttar Khan</option><option value="Uttara East">Uttara East</option><option value="Uttara West">Uttara West</option><option value="Vatara">Vatara</option><option value="Wari">Wari</option><option value="Others">Others</option>';
    }
    if (DisList == "Dinajpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Biral">Biral</option><option value="Birampur">Birampur</option><option value="Birganj">Birganj</option><option value="Bochaganj">Bochaganj</option><option value="Chirirbandar">Chirirbandar</option><option value="Dinajpur Sadar">Dinajpur Sadar</option><option value="Fulbari">Fulbari</option><option value="Ghoraghat">Ghoraghat</option><option value="Hakimpur">Hakimpur</option><option value="Kaharole">Kaharole</option><option value="Khansama">Khansama</option><option value="Nawabganj">Nawabganj</option><option value="Parbatipur">Parbatipur</option><option value="Others">Others</option>';
    }
    if (DisList == "Faridpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Alfadanga">Alfadanga</option><option value="Bhanga">Bhanga</option><option value="Boalmari">Boalmari</option><option value="Char Bhadrasan">Char Bhadrasan</option><option value="Faridpur Sadar">Faridpur Sadar</option><option value="Madukhali">Madukhali</option><option value="Nagarkanda">Nagarkanda</option><option value="Sadarpur">Sadarpur</option><option value="Saltha">Saltha</option><option value="Others">Others</option>';
    }
    if (DisList == "Feni") {
      upzillaList =
        '<option value="">Select One</option><option value="Chhagalnayian">Chhagalnayian</option><option value="Daganbhuyian">Daganbhuyian</option><option value="Feni Sadar">Feni Sadar</option><option value="Fulgazi">Fulgazi</option><option value="Parshuram">Parshuram</option><option value="Sonagazi">Sonagazi</option><option value="Others">Others</option>';
    }
    if (DisList == "Gaibandha") {
      upzillaList =
        '<option value="">Select One</option><option value="Fulchhari">Fulchhari</option><option value="Gaibandha Sadar">Gaibandha Sadar</option><option value="Gobidaganj">Gobidaganj</option><option value="Palashbari">Palashbari</option><option value="Sadullapur">Sadullapur</option><option value="Saghatta">Saghatta</option><option value="Sundarganj">Sundarganj</option><option value="Others">Others</option>';
    }
    if (DisList == "Gazipur") {
      upzillaList =
        '<option value="">Select One</option><option value="Gazipur Sadar">Gazipur Sadar</option><option value="Kaliakair">Kaliakair</option><option value="Kaliganj">Kaliganj</option><option value="Kapasia">Kapasia</option><option value="Sreepur">Sreepur</option><option value="Tongi">Tongi</option><option value="Others">Others</option>';
    }
    if (DisList == "Gopalganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Gopalganj Sadar">Gopalganj Sadar</option><option value="Kashiani">Kashiani</option><option value="Kotalipara">Kotalipara</option><option value="Muksudpur">Muksudpur</option><option value="Tungi Para">Tungi Para</option><option value="Others">Others</option>';
    }
    if (DisList == "Habiganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Ajmirganj">Ajmirganj</option><option value="Bahubal">Bahubal</option><option value="Baniachang">Baniachang</option><option value="Chunarughat">Chunarughat</option><option value="Habiganj Sadar">Habiganj Sadar</option><option value="Lakhai">Lakhai</option><option value="Madhabpur">Madhabpur</option><option value="Nabiganj">Nabiganj</option><option value="Shayestaganj">Shayestaganj</option><option value="Others">Others</option>';
    }
    if (DisList == "Jaipurhat") {
      upzillaList =
        '<option value="">Select One</option><option value="Akkelpur">Akkelpur</option><option value="Joypurhat  Sadar">Joypurhat  Sadar</option><option value="Kalai">Kalai</option><option value="Khetlal">Khetlal</option><option value="Panchbibi">Panchbibi</option><option value="Others">Others</option>';
    }
    if (DisList == "Jamalpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Bakshiganj">Bakshiganj</option><option value="Dewanganj">Dewanganj</option><option value="Islampur">Islampur</option><option value="Jamalpur Sadar">Jamalpur Sadar</option><option value="Madarganj">Madarganj</option><option value="Melandaha">Melandaha</option><option value="Sarishabari">Sarishabari</option><option value="Others">Others</option>';
    }
    if (DisList == "Jashore") {
      upzillaList =
        '<option value="">Select One</option><option value="Abhay Nagar">Abhay Nagar</option><option value="Bagherpara">Bagherpara</option><option value="Chowghacha">Chowghacha</option><option value="Jhikargacha">Jhikargacha</option><option value="Keshabpur">Keshabpur</option><option value="Kotwali">Kotwali</option><option value="Manirampur">Manirampur</option><option value="Sharsha">Sharsha</option><option value="Others">Others</option>';
    }
    if (DisList == "Jhalokhathi") {
      upzillaList =
        '<option value="">Select One</option><option value="Jhalokhathi Sadar">Jhalokhathi Sadar</option><option value="Kanthalia">Kanthalia</option><option value="Nalchity">Nalchity</option><option value="Rajapur">Rajapur</option><option value="Others">Others</option>';
    }
    if (DisList == "Jhenaidah") {
      upzillaList =
        '<option value="">Select One</option><option value="Harinakunda">Harinakunda</option><option value="Jhenaidah Sadar">Jhenaidah Sadar</option><option value="Kaliganj">Kaliganj</option><option value="Kotchandpur">Kotchandpur</option><option value="Mahespur">Mahespur</option><option value="Shailkupa">Shailkupa</option><option value="Others">Others</option>';
    }
    if (DisList == "Khagrachhari") {
      upzillaList =
        '<option value="">Select One</option><option value="Dighinala">Dighinala</option><option value="Khagrachhari Sadar">Khagrachhari Sadar</option><option value="Lakshmichhari">Lakshmichhari</option><option value="Mahalchhari">Mahalchhari</option><option value="Manikchhari">Manikchhari</option><option value="Matiranga">Matiranga</option><option value="Panchhari">Panchhari</option><option value="Ramgarh">Ramgarh</option><option value="Others">Others</option>';
    }
    if (DisList == "Khulna") {
      upzillaList =
        '<option value="">Select One</option><option value="Batiaghata">Batiaghata</option><option value="Dacope">Dacope</option><option value="Daulatpur">Daulatpur</option><option value="Dighala">Dighala</option><option value="Dumuria">Dumuria</option><option value="Khalishpur">Khalishpur</option><option value="Khan Jahan Ali">Khan Jahan Ali</option><option value="Khulna Sadar">Khulna Sadar</option><option value="Koyra">Koyra</option><option value="Paikgachha">Paikgachha</option><option value="Phultala">Phultala</option><option value="Rupsa">Rupsa</option><option value="Sonadanga">Sonadanga</option><option value="Terokhada">Terokhada</option><option value="Others">Others</option>';
    }
    if (DisList == "Kishoreganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Austagram">Austagram</option><option value="Bajitpur">Bajitpur</option><option value="Bhairab">Bhairab</option><option value="Hossenpur">Hossenpur</option><option value="Itna">Itna</option><option value="Karimganj">Karimganj</option><option value="Katiadi">Katiadi</option><option value="Kishoregonj SADAR">Kishoregonj SADAR</option><option value="Kuliar Char">Kuliar Char</option><option value="Mithamoin">Mithamoin</option><option value="Nikli">Nikli</option><option value="Pakundia">Pakundia</option><option value="Tarail">Tarail</option><option value="Others">Others</option>';
    }
    if (DisList == "Kurigram") {
      upzillaList =
        '<option value="">Select One</option><option value="Bhurungamari">Bhurungamari</option><option value="Char Rajibpur">Char Rajibpur</option><option value="Chilmari">Chilmari</option><option value="Kurigram Sadar">Kurigram Sadar</option><option value="Nageshwari">Nageshwari</option><option value="Phulbari">Phulbari</option><option value="Rajarhat">Rajarhat</option><option value="Rajibpur">Rajibpur</option><option value="Rowmari">Rowmari</option><option value="Ulipur">Ulipur</option><option value="Others">Others</option>';
    }
    if (DisList == "Kushtia") {
      upzillaList =
        '<option value="">Select One</option><option value="Bheramara">Bheramara</option><option value="Daulatpur">Daulatpur</option><option value="Khoksa">Khoksa</option><option value="Kumarkhali">Kumarkhali</option><option value="Kushtia Sadar">Kushtia Sadar</option><option value="Mirpur">Mirpur</option><option value="Others">Others</option>';
    }
    if (DisList == "Lalmonirhat") {
      upzillaList =
        '<option value="">Select One</option><option value="Aditmari">Aditmari</option><option value="Hatibanda">Hatibanda</option><option value="Kaliganj">Kaliganj</option><option value="Lalmonirhat Sadar">Lalmonirhat Sadar</option><option value="Patgram">Patgram</option><option value="Others">Others</option>';
    }
    if (DisList == "Lakshmipur") {
      upzillaList =
        '<option value="">Select One</option><option value="Komol Nogor">Komol Nogor</option><option value="Lakshmipur Sadar">Lakshmipur Sadar</option><option value="Raipur">Raipur</option><option value="Ramganj">Ramganj</option><option value="Ramgati">Ramgati</option><option value="Others">Others</option>';
    }
    if (DisList == "Madaripur") {
      upzillaList =
        '<option value="">Select One</option><option value="Kalkini">Kalkini</option><option value="Madaripur Sadar">Madaripur Sadar</option><option value="Rajoir">Rajoir</option><option value="Shibchar">Shibchar</option><option value="Others">Others</option>';
    }
    if (DisList == "Magura") {
      upzillaList =
        '<option value="">Select One</option><option value="Magura Sadar">Magura Sadar</option><option value="Mohammadpur">Mohammadpur</option><option value="Shalikha">Shalikha</option><option value="Sreepur">Sreepur</option><option value="Others">Others</option>';
    }
    if (DisList == "Manikganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Daulatpur">Daulatpur</option><option value="Ghior">Ghior</option><option value="Harirampur">Harirampur</option><option value="Manikganj Sadar">Manikganj Sadar</option><option value="Saturia">Saturia</option><option value="Shibalaya">Shibalaya</option><option value="Singair">Singair</option><option value="Others">Others</option>';
    }
    if (DisList == "Meharpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Gangni">Gangni</option><option value="Meherpur Sadar">Meherpur Sadar</option><option value="Mujib Nagar">Mujib Nagar</option><option value="Others">Others</option>';
    }
    if (DisList == "Mauluvibazar") {
      upzillaList =
        '<option value="">Select One</option><option value="Barlekha">Barlekha</option><option value="Juri">Juri</option><option value="Kamalganj">Kamalganj</option><option value="Kulaura">Kulaura</option><option value="Mauluvi Bazar Sadar">Maulvi Bazar Sadar</option><option value="Rajnagar">Rajnagar</option><option value="Sreemangal">Sreemangal</option><option value="Others">Others</option>';
    }
    if (DisList == "Munshiganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Gazaria">Gazaria</option><option value="Louhajang">Louhajang</option><option value="Munshiganj Sadar">Munshiganj Sadar</option><option value="Serajdikhan">Serajdikhan</option><option value="Sreenagar">Sreenagar</option><option value="Tongibari">Tongibari</option><option value="Others">Others</option>';
    }
    if (DisList == "Mymensingh") {
      upzillaList =
        '<option value="">Select One</option><option value="Bhalukha">Bhalukha</option><option value="Dhobaura">Dhobaura</option><option value="Fulbaria">Fulbaria</option><option value="Gaffargaon">Gaffargaon</option><option value="Gauripur">Gauripur</option><option value="Haluaghat">Haluaghat</option><option value="Ishwarganj">Ishwarganj</option><option value="Muktagachha">Muktagachha</option><option value="Mymensingh Sadar">Mymensingh Sadar</option><option value="Nandail">Nandail</option><option value="Phulpur">Phulpur</option><option value="Tarakanda">Tarakanda</option><option value="Trishal">Trishal</option><option value="Others">Others</option>';
    }
    if (DisList == "Naogaon") {
      upzillaList =
        '<option value="">Select One</option><option value="Atrai">Atrai</option><option value="Badalgachhi">Badalgachhi</option><option value="Dhamoirhat">Dhamoirhat</option><option value="Mahadebpur">Mahadebpur</option><option value="Manda">Manda</option><option value="Naogaon Sadar">Naogaon Sadar</option><option value="Niamatpur">Niamatpur</option><option value="Patnitala">Patnitala</option><option value="Porsha">Porsha</option><option value="Raninagar">Raninagar</option><option value="Sapahar">Sapahar</option><option value="Others">Others</option>';
    }
    if (DisList == "Narail") {
      upzillaList =
        '<option value="">Select One</option><option value="Kalia">Kalia</option><option value="Lohagara">Lohagara</option><option value="NarailSadar">NarailSadar</option><option value="Others">Others</option>';
    }
    if (DisList == "Narayanganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Araihazar">Araihazar</option><option value="Bandar">Bandar</option><option value="Narayanganj Sadar">Narayanganj Sadar</option><option value="Rupganj">Rupganj</option><option value="Siddirganj">Siddirganj</option><option value="Sonargaon">Sonargaon</option><option value="Others">Others</option>';
    }
    if (DisList == "Narsingdi") {
      upzillaList =
        '<option value="">Select One</option><option value="Belabo">Belabo</option><option value="Manohardi">Manohardi</option><option value="Narsingdi Sadar">Narsingdi Sadar</option><option value="Palash">Palash</option><option value="Roypura">Roypura</option><option value="Shibpur">Shibpur</option><option value="Others">Others</option>';
    }
    if (DisList == "Natore") {
      upzillaList =
        '<option value="">Select One</option><option value="Bagati Para">Bagati Para</option><option value="Baraigram">Baraigram</option><option value="Gurudaspur">Gurudaspur</option><option value="Lalpur">Lalpur</option><option value="Naldanga">Naldanga</option><option value="Natore Sadar">Natore Sadar</option><option value="Singra">Singra</option><option value="Others">Others</option>';
    }
    if (DisList == "Netrokona") {
      upzillaList =
        '<option value="">Select One</option><option value="Atpara">Atpara</option><option value="Barhatta">Barhatta</option><option value="Durgapur">Durgapur</option><option value="Kalmakanda">Kalmakanda</option><option value="Kendua">Kendua</option><option value="Khaliajuri">Khaliajuri</option><option value="Madan">Madan</option><option value="Mohanganj">Mohanganj</option><option value="Netrokona Sadar">Netrokona Sadar</option><option value="Purbadhala">Purbadhala</option><option value="Others">Others</option>';
    }
    if (DisList == "Nilphamari") {
      upzillaList =
        '<option value="">Select One</option><option value="Dimla">Dimla</option><option value="Domar">Domar</option><option value="Jaldhaka">Jaldhaka</option><option value="Kishoreganj ">Kishoreganj </option><option value="Nilphamari Sadar">Nilphamari Sadar</option><option value="Saidpur">Saidpur</option><option value="Others">Others</option>';
    }
    if (DisList == "Noakhali") {
      upzillaList =
        '<option value="">Select One</option><option value="Begumganj">Begumganj</option><option value="Chatkhil">Chatkhil</option><option value="Companiganj">Companiganj</option><option value="Hatiya">Hatiya</option><option value="Kobirhat">Kobirhat</option><option value="Noakhali Sadar (Sudharam)">Noakhali Sadar (Sudharam)</option><option value="Senbagh">Senbagh</option><option value="Sonaimuri">Sonaimuri</option><option value="Subornachhar">Subornachhar</option><option value="Others">Others</option>';
    }
    if (DisList == "Pabna") {
      upzillaList =
        '<option value="">Select One</option><option value="Atgharia">Atgharia</option><option value="Bera">Bera</option><option value="Bhangura">Bhangura</option><option value="Chatmohar">Chatmohar</option><option value="Faridpur">Faridpur</option><option value="Ishwardi">Ishwardi</option><option value="Pabna Sadar">Pabna Sadar</option><option value="Santhia">Santhia</option><option value="Sujanagar">Sujanagar</option><option value="Others">Others</option>';
    }
    if (DisList == "Panchagarh") {
      upzillaList =
        '<option value="">Select One</option><option value="Atwari">Atwari</option><option value="Boda">Boda</option><option value="Debiganj">Debiganj</option><option value="Panchagarh Sadar">Panchagarh Sadar</option><option value="Tentulia">Tentulia</option><option value="Others">Others</option>';
    }
    if (DisList == "Patuakhali") {
      upzillaList =
        '<option value="">Select One</option><option value="Bauphal">Bauphal</option><option value="Dashmina">Dashmina</option><option value="Dumki">Dumki</option><option value="Galachipa">Galachipa</option><option value="Kala Para">Kala Para</option><option value="Mirzaganj">Mirzaganj</option><option value="Patuakhali Sadar">Patuakhali Sadar</option><option value="Rangabali">Rangabali</option><option value="Others">Others</option>';
    }
    if (DisList == "Pirojpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Bhandaria">Bhandaria</option><option value="Indurkani">Indurkani</option><option value="Kawkhali">Kawkhali</option><option value="Mathbaria">Mathbaria</option><option value="Nazirpur">Nazirpur</option><option value="Nesarabad (Swarupkati)">Nesarabad (Swarupkati)</option><option value="Pirojpur Sadar">Pirojpur Sadar</option><option value="Others">Others</option>';
    }
    if (DisList == "Rajbari") {
      upzillaList =
        '<option value="">Select One</option><option value="Balia Kandi">Balia Kandi</option><option value="Goalandaghat">Goalandaghat</option><option value="Kalukhali">Kalukhali</option><option value="Pangsha">Pangsha</option><option value="Rajbari Sadar">Rajbari Sadar</option><option value="Others">Others</option>';
    }
    if (DisList == "Rajshahi") {
      upzillaList =
        '<option value="">Select One</option><option value="Balia Kandi">Balia Kandi</option><option value="Goalandaghat">Goalandaghat</option><option value="Kalukhali">Kalukhali</option><option value="Pangsha">Pangsha</option><option value="Rajbari Sadar">Rajbari Sadar</option><option value="Others">Others</option>';
    }
    if (DisList == "Rangamati") {
      upzillaList =
        '<option value="">Select One</option><option value="Bagaichhari">Bagaichhari</option><option value="Barkal">Barkal</option><option value="Belaichhari">Belaichhari</option><option value="Juraichhari">Juraichhari</option><option value="Kaptai">Kaptai</option><option value="Kawkhali (Betbunia)">Kawkhali (Betbunia)</option><option value="Langadu">Langadu</option><option value="Naniarchar">Naniarchar</option><option value="Rajasthali">Rajasthali</option><option value="Rangamati Sadar">Rangamati Sadar</option><option value="Others">Others</option>';
    }
    if (DisList == "Rangpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Badarganj">Badarganj</option><option value="Gangachara">Gangachara</option><option value="Kaunia">Kaunia</option><option value="Mitha Pukur">Mitha Pukur</option><option value="Pirgachha">Pirgachha</option><option value="Pirganj">Pirganj</option><option value="Rangpur Sadar">Rangpur Sadar</option><option value="Taraganj">Taraganj</option><option value="Others">Others</option>';
    }
    if (DisList == "Satkhira") {
      upzillaList =
        '<option value="">Select One</option><option value="Assasuni">Assasuni</option><option value="Debhata">Debhata</option><option value="Kalaroa">Kalaroa</option><option value="Kaliganj">Kaliganj</option><option value="Satkhira Sadar">Satkhira Sadar</option><option value="Shyamnagar">Shyamnagar</option><option value="Tala">Tala</option><option value="Others">Others</option>';
    }
    if (DisList == "Shariatpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Bhaderganj">Bhaderganj</option><option value="Damudya">Damudya</option><option value="Gosairhat">Gosairhat</option><option value="Naria">Naria</option><option value="Palong(Sadar)">Palong(Sadar)</option><option value="Zanjira">Zanjira</option><option value="Others">Others</option>';
    }
    if (DisList == "Sherpur") {
      upzillaList =
        '<option value="">Select One</option><option value="Jhenaigati">Jhenaigati</option><option value="Nakla">Nakla</option><option value="Nalitabari">Nalitabari</option><option value="Sherpur Sadar">Sherpur Sadar</option><option value="Sreebardi">Sreebardi</option><option value="Others">Others</option>';
    }
    if (DisList == "Sirajganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Belkuchi">Belkuchi</option><option value="Chauhali">Chauhali</option><option value="Kamarkhanda">Kamarkhanda</option><option value="Kazipur">Kazipur</option><option value="Royganj">Royganj</option><option value="Shahjadpur">Shahjadpur</option><option value="Sirajganj Sadar">Sirajganj Sadar</option><option value="Tarash">Tarash</option><option value="Ullah Para">Ullah Para</option><option value="Others">Others</option>';
    }
    if (DisList == "Sunamganj") {
      upzillaList =
        '<option value="">Select One</option><option value="Bishwambarpur">Bishwambarpur</option><option value="Chhatak">Chhatak</option><option value="Daxin Sunamganj">Daxin Sunamganj</option><option value="Derai">Derai</option><option value="Dharampasha">Dharampasha</option><option value="Dowarabazar">Dowarabazar</option><option value="Jagannatpur">Jagannatpur</option><option value="Jamalganj">Jamalganj</option><option value="Sulla">Sulla</option><option value="Sunamganj Sadar">Sunamganj Sadar</option><option value="Tahirpur">Tahirpur</option><option value="Others">Others</option>';
    }
    if (DisList == "Sylhet") {
      upzillaList =
        '<option value="">Select One</option><option value="Balaganj">Balaganj</option><option value="Beani Bazar">Beani Bazar</option><option value="Bishwanath">Bishwanath</option><option value="Companiganj">Companiganj</option><option value="Fenchuganj">Fenchuganj</option><option value="Golabganj">Golabganj</option><option value="Gowainghat">Gowainghat</option><option value="Jaintiapur">Jaintiapur</option><option value="Kanaighat">Kanaighat</option><option value="Kowtali">Kowtali</option><option value="South Surma">South Surma</option><option value="Zakirganj">Zakirganj</option><option value="Others">Others</option>';
    }
    if (DisList == "Tangail") {
      upzillaList =
        '<option value="">Select One</option><option value="Basail">Basail</option><option value="Bhuapur">Bhuapur</option><option value="Delduar">Delduar</option><option value="Dhonbari">Dhonbari</option><option value="Ghatail">Ghatail</option><option value="Gopalpur">Gopalpur</option><option value="Kalihati">Kalihati</option><option value="Madhupur">Madhupur</option><option value="Mirzapur">Mirzapur</option><option value="Nagarpur">Nagarpur</option><option value="Sakhipur">Sakhipur</option><option value="Tangail Sadar">Tangail Sadar</option><option value="Others">Others</option>';
    }
    if (DisList == "Thakurgaon") {
      upzillaList =
        '<option value="">Select One</option><option value="Baliadangi">Baliadangi</option><option value="Haripur">Haripur</option><option value="Pirganj">Pirganj</option><option value="Ranisankail">Ranisankail</option><option value="Thakurgaon Sadar">Thakurgaon Sadar</option><option value="Others">Others</option>';
    }

    document.getElementById("polic_sta").innerHTML = upzillaList;
  };
  // List of UpZilla distrcivtwise End

  // Pop Up Showing and Removing

  const popShow = () => {
    document.getElementById("PopUp").classList.add("open-popup");
    document.getElementById("wrapper_box").classList.add("blur");
  };
  const popRemove = () => {
    document.getElementById("PopUp").classList.remove("open-popup");
    document.getElementById("wrapper_box").classList.remove("blur");
    // navigate(`/Profile/${name}/${mobile}`)
    navigate("/");
  };

  return (
    <Layout>
      <div className="canvas">
        <div className="wrapper" id="wrapper_box">
          <div className="images">
            <img src={Illustration} alt="" />
          </div>

          <div className="form-wrapper">
            <form className="form-container" id="form-1">
              {/* Form Page no One start  */}

              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  className={`input-fields ${isNameValid ? "" : "invalid"}`}
                  placeholder="Write Your Full Name "
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setIsNameValid(true);
                  }}
                />
                {!isNameValid && <p className="error-text">Name is required</p>}
              </div>

              <div className="form-field">
                <label htmlFor="mobile">
                  Mobile{" "}
                  <span>
                    (Whatsapp <input type="checkbox" /> ){" "}
                  </span>{" "}
                </label>
                <input
                  // className="input-fields"
                  className={`input-fields ${isMobileValid ? "" : "invalid"}`}
                  placeholder="01....."
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    setIsMobileValid(true); // Reset validation on input change
                  }}
                />
                {!isMobileValid && (
                  <p className="error-text">Invalid mobile number</p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  // className="input-fields"
                  className={`input-fields ${isEmailValid ? "" : "invalid"}`}
                  type="email"
                  id="email"
                  placeholder="abc...@...com"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true); // Reset validation on input change
                  }}
                />
                {!isEmailValid && (
                  <p className="error-text">Invalid email address</p>
                )}
              </div>
              <div className="form-field">
                <label htmlFor="facebookId">
                  Facebook ID Link{" "}
                  <span className="text-sm text-black-100">(Optional)</span>{" "}
                </label>
                <input
                  className="input-fields"
                  type="text"
                  id=""
                  placeholder="facebook.com/Naeem"
                  name="facebookId"
                  value={facebookId}
                  onChange={(e) => setFacebookId(e.target.value)}
                />
              </div>

              {/* Date of Birth Input  close  */}
              <div className="form-field">
                <label htmlFor="date_of_birth"> Date of Birth </label>
                <input
                  type="date"
                  className="input-fields"
                  name="date_of_birth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              {/* Date of Birth Input  Close  */}

              {/* Select Gender start */}

              <div className="form-field">
                <label htmlFor="gender">Select Gender</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="radio-3"
                      className="radio radio-secondary"
                      value="Male"
                      checked={selectedGender === "Male"}
                      onChange={(e) => setSelectedGender(e.target.value)}
                    />
                    <span className="gender-male">Male</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="radio-3"
                      className="radio radio-secondary"
                      value="Female"
                      checked={selectedGender === "Female"}
                      onChange={(e) => setSelectedGender(e.target.value)}
                    />
                    <span className="gender-female">Female</span>
                  </label>
                </div>
                {/* <p>Selected Gender: {selectedGender}</p>  */}
              </div>

              {/* Select Gender close */}

              {/* Division selection Start */}

              <div className="form-field">
                <div className="label-select">
                  <label htmlFor="divisions" className="lbl1">
                    Select Division
                  </label>
                  <select
                    name="divisions"
                    id="divisions"
                    className={`slct ${isDivisionValid ? "" : "invalid"}`}
                    value={divisionName}
                    onChange= {
                      selecedDivision
                    
                    }// callding selectDivision functin and there i set useState and insert districts Name
                  >
                    <option disabled="" selected="">
                      Select Division
                    </option>
                    <option value="Barishal">Barishal</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Sylhet">Sylhet</option>
                  </select>
                </div>
                {!isDivisionValid && (
                  <p className="error-text">Please select a division</p>
                )}
                {/* <p>your selected dividion is :{divisionName}</p> */}
              </div>
              {/* Division selection Start */}
              <div className="form-field">
                <div className="label-select">
                  <label htmlFor="distr" className="lbl2">
                    Select District
                  </label>
                  <select
                    name="distr"
                    id="distr"
                    className={`slct ${isDistrictValid ? "" : "invalid"}`}
                    value={zillaName}
                    onChange={selectedZilla}
                  />
                </div>
                {!isDistrictValid && (
                  <p className="error-text">Please select a district</p>
                )}
                {/* <p>Your selected zilla is : {zillaName}</p> */}
                {/*/ Districts Section*/}
              </div>
              {/* Upzilla Section start */}
              <div className="form-field">
                <div className="label-select">
                  <label htmlFor="polic_sta" className="lbl3">
                    Select Upzilla{" "}
                  </label>
                  <select
                    name="polic_sta"
                    className={`slct ${isUpZillaValid ? "" : "invalid"}`}
                    id="polic_sta"
                    value={upZillaName}
                    onChange={selectedUpZilla}
                  />
                </div>
                {!isUpZillaValid && (
                  <p className="error-text">Please select an upzilla</p>
                )}
                {/* <p> your Selected upzilla is : {upZillaName} </p> */}
                {/* Upzilla Section end */}
              </div>

              <div id="submit-button">
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={next1}
                >
                  {" "}
                  Next{" "}
                </button>
              </div>

              {/* Form Page no One end  */}
            </form>
            {/* Form Page no Two start  */}
            <form className="form-container" id="form-2">
              <h1 className="text-sm text-center mb-1 text-red-600 ">
                {" "}
                Details of Your Profession and Your Service{" "}
              </h1>

              <div className="form-wrapper2" id="form-page2">
                <div className="form-field">
                  <label htmlFor="">Your Profession </label>
                  <input
                     className={`input-fields ${isProfessionValid ? '' : 'invalid'}`}
                    placeholder="Write your Profesion "
                    value={profession}
                    onChange={(e) => {
                      setProfession(e.target.value);
                      setIsProfessionValid(true); // Reset validation on input change 
                    }}
                    list="professions"
                  />
                   {!isProfessionValid && <p className="error-text">Profession is required</p>}
                  {/* Profession List Data list calling  */}
                  <datalist id="professions">
                    {professionList.map((value, index) => (
                      <option key={index} value={value} />
                    ))}
                  </datalist>
                </div>

                <div className="form-field">
                  <label htmlFor="">Experience From </label>
                  <input
                    className="input-fields"
                    type="date"
                    id=""
                    value={experienceDate}
                    onChange={(e) => setExperienceDate(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor=""> Write about Yourself or Service </label>
                  <textarea
                    className="input-fields"
                    placeholder="Write detais about Your Service "
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success"
                  type="button"
                  onClick={prev1}
                >
                  {" "}
                  Previous{" "}
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={next2}
                >
                  {" "}
                  Next{" "}
                </button>
              </div>

              {/* Form Page no Two  End   */}
            </form>
            {/* Form Page no Three start  */}
            <form
              action=""
              className="form-container"
              id="form-3"
              onSubmit={handleSubmit}
            >
              {/* Password starts  */}
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  className="input-fields"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="reEnterPassword">Re-enter Password</label>
                <input
                  className={`input-fields ${isPasswordMatch ? '' : 'invalid'}`}
                  type="password"
                  id="reEnterPassword"
                  value={reEnterPassword}
                  onChange={(e) => setReEnterPassword(e.target.value)}
                />
                 {!isPasswordMatch && <p className="error-text">Passwords do not match</p>}
              </div>
              {/* Password end */}
              <button className="btn btn-success" type="button" onClick={prev2}>
                {" "}
                Previous{" "}
              </button>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={popShow}
              >
                {/* onClick={popShow} */} Submit{" "}
              </button>
            </form>

            {/* Form Page no Three   End   */}
          </div>
        </div>

        <div className="PopUp" id="PopUp">
          <img src="./images/tick.png" alt="" srcset="" />
          <h1>
            {" "}
            Thank You <br />{" "}
            <span className=" text-green-600 font-serif italic font-bold">
              {" "}
              {name}{" "}
            </span>{" "}
          </h1>
          <p>
            Your Registration is completed Successfully for <br />
            <span className="text-green-600 font-serif font-bold">
              {" "}
              {profession}{" "}
            </span>{" "}
          </p>
          <button className="btn" onClick={popRemove}>
            {" "}
            OK{" "}
          </button>
        </div>

        {/* <button onClick={popShow}> Pop Show callng </button> */}
      </div>
    </Layout>
  );
};

export default Form;

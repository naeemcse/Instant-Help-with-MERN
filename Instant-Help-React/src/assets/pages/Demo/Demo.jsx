import React, { useState } from "react";

const Demo = () => {
  const [divisionName, setDvsn] = useState("");
  const [zillaName, setZilla] = useState("");
  const [persons, setPersons] = useState([]);

  const sp = () => {
    fetch(
      `http://localhost:3000/findPersonDemo?divisionName=${divisionName}&zillaName=${zillaName}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response data
        setPersons(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen p-10 space-y-4">
  <input
    type="text"
    id="division"
    list="divisionName"
    className="border-2 border-rose-600 p-2 rounded-lg"
    placeholder="Division"
    value={divisionName}
    onChange={(e) => setDvsn(e.target.value)}
  />
  {/* all division List  */}
  <datalist id="divisionName">
  <option value="Barishal">Barishal</option>
  <option value="Chattogram">Chattogram</option>
  <option value="Dhaka">Dhaka</option>
  <option value="Khulna">Khulna</option>
  <option value="Mymensingh">Mymensingh</option>
  <option value="Rajshahi">Rajshahi</option>
  <option value="Rangpur">Rangpur</option>
  <option value="Sylhet">Sylhet</option>
</datalist>

  <input
    type="text"
    id="dist"
    list="zillaName"
    className="border-2 border-rose-600 p-2 rounded-lg"
    placeholder="District Name"
    value={zillaName}
    onChange={(e) => setZilla(e.target.value)}
  />
    
 {/* 
 I am writting a dataset for all district of bangladesh  */}
 <datalist id="zillaName">
        <option value="Bagerhat" />
        <option value="Bandarban" />
        <option value="Barguna" />
        <option value="Barishal" />
        <option value="Bhola" />
        <option value="Bogra" />
        <option value="Brahmanbaria" />
        <option value="Chandpur" />
        <option value="Chapainawabganj" />
        <option value="Chattogram" />
        <option value="Chuadanga" />
        <option value="Cox's Bazar" />
        <option value="Cumilla" />
        <option value="Dhaka" />
        <option value="Dinajpur" />
        <option value="Faridpur" />
        <option value="Feni" />
        <option value="Gaibandha" />
        <option value="Gazipur" />
        <option value="Gopalganj" />
        <option value="Habiganj" />
        <option value="Jamalpur" />
        <option value="Jashore" />
        <option value="Jhalokati" />
        <option value="Jhenaidah" />
        <option value="Joypurhat" />
        <option value="Khagrachari" />
        <option value="Khulna" />
        <option value="Kishoreganj" />
        <option value="Kushtia" />
        <option value="Lakshmipur" />
        <option value="Lalmonirhat" />
        <option value="Madaripur" />
        <option value="Magura" />
        <option value="Manikganj" />
        <option value="Meherpur" />
        <option value="Moulvibazar" />
        <option value="Munshiganj" />
        <option value="Mymensingh" />
        <option value="Narail" />
        <option value="Narayanganj" />
        <option value="Natore" />
        <option value="Nawabganj" />
        <option value="Netrokona" />
        <option value="Nilphamari" />
        <option value="Noakhali" />
        <option value="Pabna" />
        <option value="Panchagarh" />
        <option value="Patuakhali" />
        <option value="Pirojpur" />
        <option value="Rajbari" />
        <option value="Rajshahi" />
        <option value="Rangamati" />
        <option value="Rangpur" />
        <option value="Satkhira" />
        <option value="Shariatpur" />
        <option value="Sherpur" />
        <option value="Sirajganj" />
        <option value="Sunamganj" />
        <option value="Sylhet" />
        <option value="Tangail" />
        <option value="Thakurgaon" />
      </datalist>
  <button
    className="btn btn-success p-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors w-20"
    onClick={sp}
  >
    Search
  </button>
</div>


      <ul>
        {persons.map((person) => (
          <li key={person._id}>
            <p>Name: {person.name}</p>
            <p>Division: {person.divisionName}</p>
            <p>Zilla: {person.zillaName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;

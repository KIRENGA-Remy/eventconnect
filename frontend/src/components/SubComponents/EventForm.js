import React, { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ImagetoBase64 } from '../utility/ImagetoBase64';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    eventname: '',
    description: '',
    date: '',
    startTime: '',
    organizer: '',
    location: {
      address: '',
      city: '',
      state: '',
      country: '',
      postalCode: ''
    },
    categories: '',
    ticketInfo: {
      price: '',
      currency: 'USD',
      availability: ''
    },
    eventimages: ''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length === 1) {
      setEventData({ ...eventData, [name]: value });
    } else {
      setEventData(prevState => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value
        }
      }));
    }
  };

  const handleImageChange =  async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    setEventData((preve)=>{
        return{
          ...preve,
          eventimages : data
        }
    })

}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventname: eventData.eventname,
          description: eventData.description,
          date: new Date(`${eventData.date}`).toISOString(),
          startTime: eventData.startTime,
          location: eventData.location,
          organizer: eventData.organizer,
          categories: [eventData.categories],
          ticketInfo: eventData.ticketInfo,
          eventimages: eventData.eventimages
        }),
      });
      const dataRes = await response.json();
      if (response.status === 201) {
        toast.success(dataRes.message);
        navigate("/dashboard", { replace: true });
      } else {
        toast.error(dataRes.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Event creation failed. Network issues, Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReturnHome = (e) => {
    e.preventDefault();
    navigate("/dashboard", { replace: true });
  };

  const handleUploadProfileImage =  async(e) => {
    const data = await ImagetoBase64(e.target.files[0])
    setEventData((preve) => {
      return {
        ...preve,
        eventimages : data
      }
    })
  }

  return (
    <div className="pt-3 flex flex-col justify-center items-center w-full">
      {loading && (
        <div className="fixed inset-0 bg-purple-500 bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-900"></div>
        </div>
      )}
      <form className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Create An Event</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="col-span-2">
            <label className="block text-lg font-semibold mb-2" htmlFor="eventname">Event Name</label>
            <input
              type="text"
              id="eventname"
              name="eventname"
              className="w-full p-3 border rounded-md"
              value={eventData.eventname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-lg font-semibold mb-2" htmlFor="description">Event Description</label>
            <textarea
              id="description"
              name="description"
              className="w-full p-3 border rounded-md"
              value={eventData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full p-3 border rounded-md"
              value={eventData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="startTime">Event Start Time</label>
            <input
              type="text"
              id="startTime"
              name="startTime"
              className="w-full p-3 border rounded-md"
              value={eventData.startTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="address">Event Address</label>
            <input
              type="text"
              id="address"
              name="location.address"
              className="w-full p-3 border rounded-md"
              value={eventData.location.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="location.city"
              className="w-full p-3 border rounded-md"
              value={eventData.location.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="location.state"
              className="w-full p-3 border rounded-md"
              value={eventData.location.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="country">Country</label>
            <select
              id="country"
              name="location.country"
              className="w-full p-3 border rounded-md"
              value={eventData.location.country}
              onChange={handleChange}
              required
            >
<option value="Select Country">Select Country</option>
<option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="The Bahamas">The Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
<option value="Congo, Republic of the">Congo, Republic of the</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Côte d’Ivoire">Côte d’Ivoire</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor (Timor-Leste)">East Timor (Timor-Leste)</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="The Gambia">The Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Korea, North">Korea, North</option>
<option value="Korea, South">Korea, South</option>
<option value="Kosovo">Kosovo</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar (Burma)">Myanmar (Burma)</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="North Macedonia">North Macedonia</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Qatar">Qatar</option>
<option value="Romania">Romania</option>
<option value="Russia">Russia</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option value="Saint Lucia">Saint Lucia</option>
<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Sudan, South">Sudan, South</option>
<option value="Suriname">Suriname</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syria</option>
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Vatican City">Vatican City</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Vietnam</option>
<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="postalCode">Zip/Postal Code*</label>
            <input
              type="text"
              id="postalCode"
              name="location.postalCode"
              className="w-full p-3 border rounded-md"
              value={eventData.location.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="categories">Categories</label>
            <select
              id="categories"
              name="categories"
              className="w-full p-3 border rounded-md"
              value={eventData.categories}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Theme Park Visit">Theme Park Visit</option>
              <option value="Wedding">Wedding</option>
              <option value="Anniversaire">Anniversaire</option>
              <option value="Competition">Competition</option>
              <option value="Festival">Festival</option>
              <option value="Worship">Worship</option>
              <option value="Movie Premiere">Movie Premiere</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Concert">Concert</option>
              <option value="Meeting">Metting</option>
              <option value="Conference">Conference</option>
              <option value="Other">Other...</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="price">Ticket Price</label>
            <input
              type="number"
              id="price"
              name="ticketInfo.price"
              className="w-full p-3 border rounded-md"
              value={eventData.ticketInfo.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="currency">Currency</label>
            <select
              id="currency"
              name="ticketInfo.currency"
              className="w-full p-3 border rounded-md"
              value={eventData.ticketInfo.currency}
              onChange={handleChange}
              required
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="RWF">RWF</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="availability">Ticket Availability</label>
            <input
              type="number"
              id="availability"
              name="ticketInfo.availability"
              className="w-full p-3 border rounded-md"
              value={eventData.ticketInfo.availability}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="availability">organizer</label>
            <input
              type="text"
              id="organizer"
              name="organizer"
              className="w-full p-3 border rounded-md"
              value={eventData.organizer}
              onChange={handleChange}
              required
            />
            </div>
          <div className="col-span-2">
            {/* <label className="block text-lg font-semibold mb-2" htmlFor="eventimages">Event Images */}
              {/* <div className="flex items-center justify-center w-full p-3 border rounded-md cursor-pointer">
                <IoCloudUploadOutline className="mr-2" /> <p className="text-sm text-black">Upload</p>
              </div> */}
              {/* <input
                type="file"
                id="eventimages"
                name="eventimages"
                accept='image/*'
                className="hidden"
                onChange={handleImageChange}
                required 
              /> */}

<div className='flex flex-col'>
      <p className='text-black py-1'>Event Images</p>
      <input type={"file"} name='userprofile' accept='image/*' id='userprofile'
        onChange={handleUploadProfileImage} className='p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700'/>
      </div>

            {/* </label> */}
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
        >
          Create Event
        </button>
      </form>
      <a
        href="/dashboard"
        onClick={handleReturnHome}
        className="text-violet-900 hover:text-violet-800 hover:underline py-6"
      >
        Return home?
      </a>
    </div>
  );
};
export default EventForm;

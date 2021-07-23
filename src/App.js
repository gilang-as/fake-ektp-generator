import React from 'react';
import { KtpContext } from "./states/providers/ktp";
import ProvincesData  from "./data/provinces.json";
import RegenciesData  from "./data/regencies.json";
import DistrictsData  from "./data/districts.json";
import VillagesData  from "./data/villages.json";
import "./assets/style.css";
import KTPComponent from "./components/KTP"
import KTPBack from "./assets/images/ktp-belakang.png";

const App = () => {
  const {dispatch} = React.useContext(KtpContext);
  return (
      <div className="wrapper" id="app">
        <div className="card-form">
          <div className="card-list">
            <div className="card-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="card-item__side -front">
                        <KTPComponent/>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="card-item__side -back">
                        <img src={KTPBack} style={{width: "100%"}} className="ktpback" alt="Back KTP"/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="card-form__inner">
            <div className="card-input">
              <label htmlFor="name" className="card-input__label">Nama Lengkap</label>
              <input type="text" id="name" name="name" className="card-input__input" onChange={(a)=>dispatch({type: "name", name: a.target.value})}/>
            </div>
            <div className="card-form__row">
              <div className="card-form__col">
                <div className="card-form__group">
                  <label htmlFor="place_of_birth date_of_birth" className="card-input__label">Tempat/Tanggal Lahir</label>
                  <select className="card-input__input -select" id="place_of_birth" name="place_of_birth">
                    <option key={1}>Select</option>
                    {RegenciesData.map((data, index) => (<option key={index+1} value={data.id}>{data.name}</option>))}
                  </select>
                  <input type="date" className="card-input__input" id="date_of_birth" name="date_of_birth"/>
                </div>
              </div>
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="gender" className="card-input__label">Jenis Kelamin</label>
                  <select className="card-input__input -select" id="gender" name="gender">
                    <option>GENDER</option>
                    <option value="male">LAKI-LAKI</option>
                    <option value="female">PEREMPUAN</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-form__row">
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="province" className="card-input__label">Provinsi</label>
                  <select className="card-input__input -select" id="province" name="province">
                    <option>Province</option>
                    {ProvincesData.map((data, index) => (<option key={index+1} value={data.id}>{data.name}</option>))}
                  </select>
                </div>
              </div>
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="regency" className="card-input__label">Kota</label>
                  <select className="card-input__input -select" id="regency" name="regency" disabled={true}>
                    <option>Regency</option>
                    {false?RegenciesData.map((data, index) => (<option key={index+1} value={data.id}>{data.name}</option>)):null}
                  </select>
                </div>
              </div>
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="district" className="card-input__label">Alamat</label>
                  <select className="card-input__input -select" id="district" name="district" disabled={true}>
                    <option>District</option>
                    {false?DistrictsData.map((data, index) => (<option key={index+1} value={data.id}>{data.name}</option>)):null}
                  </select>
                </div>
              </div>
            </div>
            <div className="card-form__row">
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="village" className="card-input__label">Desa</label>
                  <select className="card-input__input -select" id="village" name="village" disabled={true}>
                    <option>Village</option>
                    {false?VillagesData.map((data, index) => (<option key={index+1} value={data.id}>{data.name}</option>)):null}
                  </select>
                </div>
              </div>
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="rtrw" className="card-input__label">RT/WT</label>
                  <select className="card-input__input -select" id="rtrw" name="rtrw">
                    <option>Month</option>
                  </select>
                </div>
              </div>
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="address" className="card-input__label">Alamat</label>
                  <input type="text" id="address" name="address" className="card-input__input" onChange={(a)=>dispatch({type: "address", address: a.target.value})}/>
                </div>
              </div>
            </div>
            <div className="card-input">
              <label htmlFor="cardName" className="card-input__label">Card Holders</label>
              <input type="text" id="cardName" className="card-input__input"/>
            </div>
            <div className="card-form__row">
              <div className="card-form__col">
                <div className="card-form__group">
                  <label htmlFor="cardMonth" className="card-input__label">Expiration Date</label>
                  <select className="card-input__input -select" id="">
                    <option>Month</option>
                  </select>
                  <select className="card-input__input -select" id="cardYear">
                    <option>Year</option>
                  </select>
                </div>
              </div>
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="cardCvv" className="card-input__label">CVV</label>
                  <input type="text" className="card-input__input" id="cardCvv" autoComplete="off"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

import React from 'react'

function Admission() {
  return (
    <div>
      <>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div className="container">
    <a href="#">
      <img
        src="https://s26.postimg.org/kd8zstg15/Top_Header.jpg"
        alt="img/TopHeader.jpg"
        className="img-thumbnail"
      />
    </a>
  </div>
  <div className="navbar navbar-default">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">
                <i className="fa fa-home" /> Home
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-th-list" /> Online Application
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-bar-chart" /> Payment Status
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-key" /> Forget PIN
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-arrow-circle-o-down" /> Admit Card Download
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-book" /> Result
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-file" /> Download <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Offline Aplication Form</a>
                </li>
              </ul>
            </li>
            <li>
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-link" /> Link <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">University Home</a>
                </li>
                <li>
                  <a href="#">Admission Home</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user" /> Login{" "}
                <span className="caret" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* ////////////////////////////////////////// */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8 col-lg-offset-2 well">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title text-center">
              Application for Admission into
              <font color="blue">Masters</font>
              <font color="red"> in</font>
              <font color="blue">Information Technology</font> - January 2017
              Intake
            </h3>
          </div>
          <div className="panel-body">
            <form action="" className="form-horizontal row">
              <div className="form-group">
                <label
                  htmlFor="applicant_name"
                  className="control-label col-sm-3"
                >
                  Applicant's Name :
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    name="applicant_name"
                    id="applicant_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="father_name" className="control-label col-sm-3">
                  Father's Name :
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    name="father_name"
                    id="father_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mother_name" className="control-label col-sm-3">
                Mother's Name :
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    name="mother_name"
                    id="mother_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="date_of_birth"
                  className="control-label col-sm-3"
                >
                  Date of Birth :
                </label>
                <div className="col-sm-2">
                  <select
                    name="date_day"
                    id="date_of_birth"
                    className="form-control"
                  >
                    <option selected="" disabled="" value="">
                      Day
                    </option>
                    <option value={1}>01</option>
                    <option value={2}>02</option>
                    <option value={3}>03</option>
                    <option value={4}>04</option>
                    <option value={5}>05</option>
                    <option value={6}>06</option>
                    <option value={7}>07</option>
                    <option value={8}>08</option>
                    <option value={9}>09</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                  </select>
                  <span className="help-inline" />
                </div>
                <div className="col-sm-2">
                  <select name="date_month" className="form-control">
                    <option selected="" disabled="" value="">
                      Month
                    </option>
                    <option value={1}>01 - January</option>
                    <option value={2}>02 - February</option>
                    <option value={3}>03 - March</option>
                    <option value={4}>04 - April</option>
                    <option value={5}>05 - May</option>
                    <option value={6}>06 - June</option>
                    <option value={7}>07 - July</option>
                    <option value={8}>08 - August</option>
                    <option value={9}>09 - September</option>
                    <option value={10}>10 - October</option>
                    <option value={11}>11 - November</option>
                    <option value={12}>12 - December</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <select name="date_year" className="form-control">
                    <option disabled="" selected="" value="">
                      Year
                    </option>
                    <option value={1955}>1955</option>
                    <option value={1956}>1956</option>
                    <option value={1957}>1957</option>
                    <option value={1958}>1958</option>
                    <option value={1959}>1959</option>
                    <option value={1960}>1960</option>
                    <option value={1961}>1961</option>
                    <option value={1962}>1962</option>
                    <option value={1963}>1963</option>
                    <option value={1964}>1964</option>
                    <option value={1965}>1965</option>
                    <option value={1966}>1966</option>
                    <option value={1967}>1967</option>
                    <option value={1968}>1968</option>
                    <option value={1969}>1969</option>
                    <option value={1970}>1970</option>
                    <option value={1971}>1971</option>
                    <option value={1972}>1972</option>
                    <option value={1973}>1973</option>
                    <option value={1974}>1974</option>
                    <option value={1975}>1975</option>
                    <option value={1976}>1976</option>
                    <option value={1977}>1977</option>
                    <option value={1978}>1978</option>
                    <option value={1979}>1979</option>
                    <option value={1980}>1980</option>
                    <option value={1981}>1981</option>
                    <option value={1982}>1982</option>
                    <option value={1983}>1983</option>
                    <option value={1984}>1984</option>
                    <option value={1985}>1985</option>
                    <option value={1986}>1986</option>
                    <option value={1987}>1987</option>
                    <option value={1988}>1988</option>
                    <option value={1989}>1989</option>
                    <option value={1990}>1990</option>
                    <option value={1991}>1991</option>
                    <option value={1992}>1992</option>
                    <option value={1993}>1993</option>
                    <option value={1994}>1994</option>
                    <option value={1995}>1995</option>
                    <option value={1996}>1996</option>
                    <option value={1997}>1997</option>
                    <option value={1998}>1998</option>
                    <option value={1999}>1999</option>
                    <option value={2000}>2000</option>
                    <option value={2001}>2001</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3" htmlFor="mobile">
                  Mobile :
                </label>
                <div className="col-sm-4">
                  <div className="input-group">
                    <span className="input-group-addon">+880</span>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      maxLength={10}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="gender" className="control-label col-sm-3">
                  Gender :
                </label>
                <div className="col-sm-2">
                  <select name="gender" id="gender" className="form-control">
                    <option value="" selected="" disabled="">
                      Select
                    </option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                </div>
                <label htmlFor="religion" className="control-label col-sm-2">
                  Religion :
                </label>
                <div className="col-sm-3">
                  <select
                    name="religion"
                    id="religion"
                    className="form-control"
                  >
                    <option value="" disabled="" selected="">
                      Select
                    </option>
                    <option value="ISLAM">ISLAM</option>
                    <option value="HINDUISM">HINDUISM</option>
                    <option value="CHRISTIANITY">CHRISTIANITY</option>
                    <option value="BUDDHISM">BUDDHISM</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="blood_group" className="control-label col-sm-3">
                  Blood Group :
                </label>
                <div className="col-sm-2">
                  <select
                    name="blood_group"
                    id="blood_group"
                    className="form-control"
                  >
                    <option value="">Select</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <label htmlFor="nationality" className="control-label col-sm-2">
                  Nationality :
                </label>
                <div className="col-sm-3">
                  <select
                    name="nationality"
                    id="nationality"
                    className="form-control"
                  >
                    <option value="">Select</option>
                    <option value="BANGLADESHI" selected="">
                      Bangladeshi
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="national_id" className="control-label col-sm-3">
                  National ID :
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="national_id"
                    id="national_id"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="control-label col-sm-3">
                  Email :
                </label>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="present_address"
                  className="control-label col-sm-3"
                >
                  Present Address :
                </label>
                <div className="col-sm-7">
                  <textarea
                    name="present_address"
                    rows={3}
                    id="present_address"
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="permanent_address"
                  className="control-label col-sm-3"
                >
                  Permanent Address :
                </label>
                <div className="col-sm-7">
                  <textarea
                    name="permanent_address"
                    id="permanent_address"
                    rows={3}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <hr />
              <fieldset>
                <legend className="text-center">Academic Qualifications</legend>
                {/* ************ Start of SSC and HSC************** */}
                <div className="row">
                  {/* ************ Start of SSC ************** */}
                  <div className="col-lg-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title text-center">
                          SSC or Equivalent Level*
                        </h5>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                          <label
                            htmlFor="ssc_exam_type"
                            className="control-label col-sm-4"
                          >
                            Examination :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="ssc_exam_type"
                              id="ssc_exam_type"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="SSC">S.S.C</option>
                              <option value="Dakhil">Dakhil</option>
                              <option value="SSC Vocational">
                                S.S.C Vocational
                              </option>
                              <option value="O Level/Cambridge">
                                O Level/Cambridge
                              </option>
                              <option value="SSC Equivalent">
                                S.S.C Equivalent
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="ssc_board"
                            className="control-label col-sm-4"
                          >
                            Board :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="ssc_board"
                              id="ssc_board"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="DHAKA">Dhaka</option>
                              <option value="COMILLA">Comilla</option>
                              <option value="RAJSHAHI">Rajshahi</option>
                              <option value="JESSORE">Jessore</option>
                              <option value="CHITTAGONG">Chittagong</option>
                              <option value="BARISAL">Barisal</option>
                              <option value="SYLHET">Sylhet</option>
                              <option value="DINAJPUR">Dinajpur</option>
                              <option value="MADRASAH">Madrasah</option>
                              <option value="TECHNICAL">Technical</option>
                              <option value="IGCSE">
                                Cambridge International - IGCSE
                              </option>
                              <option value="EDEXCEL INTERNATIONAL">
                                Edexcel International
                              </option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="ssc_roll_no"
                            className="control-label col-sm-4"
                          >
                            Roll No :
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              name="ssc_roll_no"
                              id="ssc_roll_no"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-sm-4"
                            htmlFor="ssc_result"
                          >
                            Result :
                          </label>
                          <div className="col-sm-8">
                            <div className="input-group">
                              <span className="input-group-addon">GPA</span>
                              <input
                                type="number"
                                className="form-control"
                                name="ssc_result"
                                id="ssc_result"
                                step="0.01"
                                min={1}
                                max={5}
                              />
                                </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="ssc_group"
                            className="control-label col-sm-4"
                          >
                            Group :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="ssc_group"
                              id="ssc_group"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="SCIENCE">Science</option>
                              <option value="HUMANITIES">Humanities</option>
                              <option value="BUSINESS STUDIES">
                                Business Studies
                              </option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="ssc_pass_year"
                            className="control-label col-sm-4"
                          >
                            Passing Year :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="ssc_pass_year"
                              id="ssc_pass_year"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value={1967}>1967</option>
                              <option value={1968}>1968</option>
                              <option value={1969}>1969</option>
                              <option value={1970}>1970</option>
                              <option value={1971}>1971</option>
                              <option value={1972}>1972</option>
                              <option value={1973}>1973</option>
                              <option value={1974}>1974</option>
                              <option value={1975}>1975</option>
                              <option value={1976}>1976</option>
                              <option value={1977}>1977</option>
                              <option value={1978}>1978</option>
                              <option value={1979}>1979</option>
                              <option value={1980}>1980</option>
                              <option value={1981}>1981</option>
                              <option value={1982}>1982</option>
                              <option value={1983}>1983</option>
                              <option value={1984}>1984</option>
                              <option value={1985}>1985</option>
                              <option value={1986}>1986</option>
                              <option value={1987}>1987</option>
                              <option value={1988}>1988</option>
                              <option value={1989}>1989</option>
                              <option value={1990}>1990</option>
                              <option value={1991}>1991</option>
                              <option value={1992}>1992</option>
                              <option value={1993}>1993</option>
                              <option value={1994}>1994</option>
                              <option value={1995}>1995</option>
                              <option value={1996}>1996</option>
                              <option value={1997}>1997</option>
                              <option value={1998}>1998</option>
                              <option value={1999}>1999</option>
                              <option value={2000}>2000</option>
                              <option value={2001}>2001</option>
                              <option value={2002}>2002</option>
                              <option value={2003}>2003</option>
                              <option value={2004}>2004</option>
                              <option value={2005}>2005</option>
                              <option value={2006}>2006</option>
                              <option value={2007}>2007</option>
                              <option value={2008}>2008</option>
                              <option value={2009}>2009</option>
                              <option value={2010}>2010</option>
                              <option value={2011}>2011</option>
                              <option value={2012}>2012</option>
                              <option value={2013}>2013</option>
                              <option value={2014}>2014</option>
                              <option value={2015}>2015</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ************ End of SSC ************** */}
                  {/* ************ Start of HSC ************** */}
                  <div className="col-lg-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title text-center">
                          HSC or Equivalent Level*
                        </h5>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                          <label
                            htmlFor="hsc_exam_type"
                            className="control-label col-sm-4"
                          >
                            Examination :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="hsc_exam_type"
                              id="hsc_exam_type"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="HSC">H.S.C</option>
                              <option value="ALIM">Alim</option>
                              <option value="BUSINESS MANAGEMENT">
                                Business Management
                              </option>
                              <option value="DIPLOMA IN ENGINEERING/AGRICULTURE">
                                Diploma in Engineering/Agriculture
                              </option>
                              <option value="A LEVEL/SR. CAMBRIDGE">
                                A Level/Sr. Cambridge
                              </option>
                              <option value="HSC EQUIVALENT">
                                H.S.C Equivalent
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="hsc_board"
                            className="control-label col-sm-4"
                          >
                            Board :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="hsc_board"
                              id="hsc_board"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="Dhaka">Dhaka</option>
                              <option value="COMILLA">Comilla</option>
                              <option value="RAJSHAHI">Rajshahi</option>
                              <option value="JESSORE">Jessore</option>
                              <option value="CHITTAGONG">Chittagong</option>
                              <option value="BARISAL">Barisal</option>
                              <option value="SYLHET">Sylhet</option>
                              <option value="DINAJPUR">Dinajpur</option>
                              <option value="MADRASAH">Madrasah</option>
                              <option value="TECHNICAL">Technical</option>
                              <option value="IGCSE">
                                Cambridge International - IGCSE
                              </option>
                              <option value="EDEXCEL INTERNATIONAL">
                                Edexcel International
                              </option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="hsc_roll_no"
                            className="control-label col-sm-4"
                          >
                            Roll No :
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              name="hsc_roll_no"
                              id="ssc_roll_no"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className="control-label col-sm-4"
                            htmlFor="hsc_result"
                          >
                            Result :
                          </label>
                          <div className="col-sm-8">
                            <div className="input-group">
                              <span className="input-group-addon">GPA</span>
                              <input
                                type="number"
                                name="hsc_result"
                                className="form-control"
                                id="hsc_result"
                                step="0.01"
                                min={1}
                                max={5}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="hsc_group"
                            className="control-label col-sm-4"
                          >
                            Group :
                          </label>
                          <div className="col-sm-8">
                            <select
                              name="hsc_group"
                              id="hsc_group"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value="SCIENCE">Science</option>
                              <option value="HUMANITIES">Humanities</option>
                              <option value="BUSINESS STUDIES">
                                Business Studies
                              </option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="hsc_pass_year"
                            className="control-label col-sm-4"
                          >
                            Passing Year :
                          </label>
                          <div className="col-sm-8">
                            <select
                              className="form-control"
                              name="hsc_pass_year"
                              id="hsc_pass_year"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value={1967}>1967</option>
                              <option value={1968}>1968</option>
                              <option value={1969}>1969</option>
                              <option value={1970}>1970</option>
                              <option value={1971}>1971</option>
                              <option value={1972}>1972</option>
                              <option value={1973}>1973</option>
                              <option value={1974}>1974</option>
                              <option value={1975}>1975</option>
                              <option value={1976}>1976</option>
                              <option value={1977}>1977</option>
                              <option value={1978}>1978</option>
                              <option value={1979}>1979</option>
                              <option value={1980}>1980</option>
                              <option value={1981}>1981</option>
                              <option value={1982}>1982</option>
                              <option value={1983}>1983</option>
                              <option value={1984}>1984</option>
                              <option value={1985}>1985</option>
                              <option value={1986}>1986</option>
                              <option value={1987}>1987</option>
                              <option value={1988}>1988</option>
                              <option value={1989}>1989</option>
                              <option value={1990}>1990</option>
                              <option value={1991}>1991</option>
                              <option value={1992}>1992</option>
                              <option value={1993}>1993</option>
                              <option value={1994}>1994</option>
                              <option value={1995}>1995</option>
                              <option value={1996}>1996</option>
                              <option value={1997}>1997</option>
                              <option value={1998}>1998</option>
                              <option value={1999}>1999</option>
                              <option value={2000}>2000</option>
                              <option value={2001}>2001</option>
                              <option value={2002}>2002</option>
                              <option value={2003}>2003</option>
                              <option value={2004}>2004</option>
                              <option value={2005}>2005</option>
                              <option value={2006}>2006</option>
                              <option value={2007}>2007</option>
                              <option value={2008}>2008</option>
                              <option value={2009}>2009</option>
                              <option value={2010}>2010</option>
                              <option value={2011}>2011</option>
                              <option value={2012}>2012</option>
                              <option value={2013}>2013</option>
                              <option value={2014}>2014</option>
                              <option value={2015}>2015</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ************ End of HSC ************** */}
                </div>
                {/* ************ End of SSC and HSC************** */}
                {/* ************ Start of Graduation Level************** */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title text-center">
                          Graduation Level*
                        </h5>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                          <label
                            htmlFor="grad_exam_type"
                            className="control-label col-sm-2"
                          >
                            Examination
                          </label>
                          <div className="col-sm-4">
                            <select
                              name="grad_exam_type"
                              id="grad_exam_type"
                              className="form-control"
                            >
                              <option value="" selected="" disabled="">
                                Select One
                              </option>
                              <option value="B.SC (ENGINEERING/ARCHITECTURE)">
                                B.Sc (Engineering/Architecture)
                              </option>
                              <option value="B.SC (AGRICULTURAL SCIENCE)">
                                B.Sc (Agricultural Science)
                              </option>
                              <option value="B.SC (Textile Engineering)">
                                B.Sc (Textile Engineering)
                              </option>
                              <option value="HONOURS">Honours</option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                          <label
                            className="control-label col-sm-2"
                            htmlFor="grad_result"
                          >
                            Result
                          </label>
                          <div className="col-sm-4">
                            <div className="input-group">
                              <span className="input-group-addon">GPA</span>
                              <input
                                type="number"
                                name="grad_result"
                                className="form-control"
                                id="grad_result"
                                step="0.01"
                                min={1}
                                max={5}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="grad_subject"
                            className="control-label col-sm-2"
                          >
                            Subject
                          </label>
                          <div className="col-sm-4">
                            <select
                              name="grad_subject"
                              id="grad_subject"
                              className="form-control"
                            >
                              <option value="" selected="selected">
                                Select One
                              </option>
                              <option value="COMPUTER SCIENCE (CS)">
                                Computer Science (CS)
                              </option>
                              <option value="COMPUTER ENGINEERING (CE)">
                                Computer Engineering (CE)
                              </option>
                              <option value="COMPUTER SCIENCE AND ENGINEERING (CSE)">
                                Computer Science and Engineering (CSE)
                              </option>
                              <option value="ELECTRONICS AND COMPUTER SCIENCE (ECS)">
                                Electronics and Computer Science (ECS)
                              </option>
                              <option value="COMPUTER AND INFORMATION TECHNOLOGY (CIT)">
                                Computer and Information Technology (CIT)
                              </option>
                              <option value="INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)">
                                Information and Communication Technology (ICT)
                              </option>
                              <option value="INFORMATION TECHNOLOGY (IT)">
                                Information Technology (IT)
                              </option>
                              <option value="SOFTWARE ENGINEERING (SE)">
                                Software Engineering (SE)
                              </option>
                              <option value="Textile Engineering">
                                Textile Engineering
                              </option>
                              <option value="ELECTRICAL AND ELECTRONICS ENGINEERING (EEE)">
                                Electrical and Electronics Engineering (EEE)
                              </option>
                              <option value="ELECTRONICS AND TELECOMMUNICATION ENGINEERING (ETE)">
                                Electronics and Telecommunication Engineering
                                (ETE)
                              </option>
                              <option value="ELECTRONICS AND COMMUNICATION ENGINEERING (ECE)">
                                Electronics and Communication Engineering (ECE)
                              </option>
                              <option value="CIVIL ENGINEERING (CE)">
                                Civil Engineering (CE)
                              </option>
                              <option value="MECHANICAL ENGINEERING (ME)">
                                Mechanical Engineering (ME)
                              </option>
                              <option value="INDUSTRIAL AND PRODUCTION ENGINEERING (IPE)">
                                Industrial and Production Engineering (IPE)
                              </option>
                              <option value="ARCHITECTURE">Architecture</option>
                              <option value="MATHEMATICS">Mathematics</option>
                              <option value="PHYSICS">Physics</option>
                              <option value="CHEMISTRY">Chemistry</option>
                              <option value="STATISTICS">Statistics</option>
                              <option value="GEOLOGICAL SCIENCES">
                                Geological Sciences
                              </option>
                              <option value="ENVIRONMENTAL SCIENCES">
                                Environmental Sciences
                              </option>
                              <option value="PGD IN COMPUTER SCIENCE (CS)">
                                PGD in Computer Science (CS)
                              </option>
                              <option value="PGD IN COMPUTER ENGINEERING (CE)">
                                PGD in Computer Engineering (CE)
                              </option>
                              <option value="PGD IN COMPUTER SCIENCE AND ENGINEERING (CSE)">
                                PGD in Computer Science and Engineering (CSE)
                              </option>
                              <option value="PGD IN ELECTRONICS AND COMPUTER SCIENCE (ECS)">
                                PGD in Electronics and Computer Science (ECS)
                              </option>
                              <option value="PGD IN COMPUTER AND INFORMATION TECHNOLOGY (CIT)">
                                PGD in Computer and Information Technology (CIT)
                              </option>
                              <option value="PGD IN INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)">
                                PGD in Information and Communication Technology
                                (ICT)
                              </option>
                              <option value="PGD IN INFORMATION TECHNOLOGY (IT)">
                                PGD in Information Technology (IT)
                              </option>
                              <option value="PGD IN SOFTWARE ENGINEERING (SE)">
                                PGD in Software Engineering (SE)
                              </option>
                            </select>
                          </div>
                          <label
                            className="control-label col-sm-2"
                            htmlFor="grad_pass_year"
                          >
                            Passing Year
                          </label>
                          <div className="col-sm-4">
                            <select
                              name="grad_pass_year"
                              id="grad_pass_year"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value={1967}>1967</option>
                              <option value={1968}>1968</option>
                              <option value={1969}>1969</option>
                              <option value={1970}>1970</option>
                              <option value={1971}>1971</option>
                              <option value={1972}>1972</option>
                              <option value={1973}>1973</option>
                              <option value={1974}>1974</option>
                              <option value={1975}>1975</option>
                              <option value={1976}>1976</option>
                              <option value={1977}>1977</option>
                              <option value={1978}>1978</option>
                              <option value={1979}>1979</option>
                              <option value={1980}>1980</option>
                              <option value={1981}>1981</option>
                              <option value={1982}>1982</option>
                              <option value={1983}>1983</option>
                              <option value={1984}>1984</option>
                              <option value={1985}>1985</option>
                              <option value={1986}>1986</option>
                              <option value={1987}>1987</option>
                              <option value={1988}>1988</option>
                              <option value={1989}>1989</option>
                              <option value={1990}>1990</option>
                              <option value={1991}>1991</option>
                              <option value={1992}>1992</option>
                              <option value={1993}>1993</option>
                              <option value={1994}>1994</option>
                              <option value={1995}>1995</option>
                              <option value={1996}>1996</option>
                              <option value={1997}>1997</option>
                              <option value={1998}>1998</option>
                              <option value={1999}>1999</option>
                              <option value={2000}>2000</option>
                              <option value={2001}>2001</option>
                              <option value={2002}>2002</option>
                              <option value={2003}>2003</option>
                              <option value={2004}>2004</option>
                              <option value={2005}>2005</option>
                              <option value={2006}>2006</option>
                              <option value={2007}>2007</option>
                              <option value={2008}>2008</option>
                              <option value={2009}>2009</option>
                              <option value={2010}>2010</option>
                              <option value={2011}>2011</option>
                              <option value={2012}>2012</option>
                              <option value={2013}>2013</option>
                              <option value={2014}>2014</option>
                              <option value={2015}>2015</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="grad_university"
                            className="control-label col-sm-2"
                          >
                            University
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              name="grad_university"
                              id="grad_university"
                              className="form-control"
                            />
                          </div>
                          <label
                            className="control-label col-sm-2"
                            htmlFor="grad_duration"
                          >
                            Course Duration
                          </label>
                          <div className="col-sm-4">
                            <select
                              name="grad_duration"
                              id="grad_duration"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value={1}>1 Year</option>
                              <option value={2}>2 Years</option>
                              <option value={3}>3 Years</option>
                              <option value={4}>4 Years</option>
                              <option value={5}>5 Years</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ************ End of Graduation Level************** */}
                {/* ************ Start of Masters Level (if any)************** */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h5 className="panel-title text-center">
                          Masters Level (if any)
                        </h5>
                      </div>
                      <div className="panel-body">
                        <div className="form-group">
                          <label
                            htmlFor="ms_exam_type"
                            className="control-label col-sm-2"
                          >
                            Examination
                          </label>
                          <div className="col-sm-4">
                            <select
                              name="ms_exam_type"
                              id="ms_exam_type"
                              className="form-control"
                            >
                              <option value="" selected="" disabled="">
                                Select One
                              </option>
                              <option value="B.SC (ENGINEERING/ARCHITECTURE)">
                                B.Sc (Engineering/Architecture)
                              </option>
                              <option value="B.SC (AGRICULTURAL SCIENCE)">
                                B.Sc (Agricultural Science)
                              </option>
                              <option value="HONOURS">Honours</option>
                              <option value="OTHERS">Others</option>
                            </select>
                          </div>
                          <label
                            className="control-label col-sm-2"
                            htmlFor="ms_result"
                          >
                            Result
                          </label>
                          <div className="col-sm-4">
                            <div className="input-group">
                              <span className="input-group-addon">GPA</span>
                              <input
                                type="number"
                                name="ms_result"
                                className="form-control"
                                id="ms_result"
                                step="0.01"
                                min={1}
                                max={5}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="ms_subject"
                            className="control-label col-sm-2"
                          >
                            Subject
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              name="ms_subject"
                              id="ms_subject"
                              className="form-control"
                            />
                          </div>
                          <label
                            className="control-label col-sm-2"
                            htmlFor="ms_pass_year"
                          >
                            Passing Year
                          </label>
                          <div className="col-sm-4">
                            <select
                              name="ms_pass_year"
                              id="ms_pass_year"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value={1967}>1967</option>
                              <option value={1968}>1968</option>
                              <option value={1969}>1969</option>
                              <option value={1970}>1970</option>
                              <option value={1971}>1971</option>
                              <option value={1972}>1972</option>
                              <option value={1973}>1973</option>
                              <option value={1974}>1974</option>

                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="ms_university"
                            className="control-label col-sm-2"
                          >
                            University
                          </label>
                          <div className="col-sm-4">
                            <input
                              type="text"
                              name="ms_university"
                              id="ms_university"
                              className="form-control"
                            />
                          </div>
                          <label
                            className="control-label col-sm-2"
                            htmlFor="ms_duration"
                          >
                            Course Duration
                          </label>
                          <div className="col-sm-4">
                            <select
                              name="ms_duration"
                              id="ms_duration"
                              className="form-control"
                            >
                              <option selected="" disabled="" value="">
                                Select One
                              </option>
                              <option value={1}>1 Year</option>
                              <option value={2}>2 Years</option>
                              <option value={3}>3 Years</option>
                              <option value={4}>4 Years</option>
                              <option value={5}>5 Years</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="panel-footer">
            <div className="row">
              <div className="col-lg-12">
                <div className="checkbox">
                  <label className="text-warning">
                    <input
                      type="checkbox"
                      id="all_correct"
                      name="all_correct"
                      defaultValue={1}
                    />{" "}
                    I hereby declare that all the above information are correct
                    and assure that I will abide by all the rules.
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-lg-offset-20">
                <input
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                  defaultValue="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}


export default Admission;




import React, { useState } from 'react';
import '../UserSide.css';
const JobNav = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isHovered, setIsHovered] = useState(false);



  const [selectedOption, setSelectedOption] = useState('Date Posted');
  const [selectedOption2, setSelectedOption2] = useState('Experience Level');
  const [selectedOption3, setSelectedOption3] = useState('Company');
  const [selectedOption4, setSelectedOption4] = useState('Job Type');
  const [selectedOption5, setSelectedOption5] = useState('onsite/remote');
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleOptionChange1 = (event) => {
    setSelectedOption2(event.target.value);
    setIsOpen1(false);
  };
  
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleOptionChange2 = (event) => {
    setSelectedOption3(event.target.value);
    setIsOpen2(false);
  };
  
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleOptionChange3 = (event) => {
    setSelectedOption4(event.target.value);
    setIsOpen3(false);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleOptionChange4 = (event) => {
    setSelectedOption5(event.target.value);
    setIsOpen4(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='filter_btns' style={{display:'flex',color:'#6D0E9D', top:'71px', gap:'1%', justifyContent:'center', background:'rgba(109, 14, 157, 0.03)', paddingTop:'1%', paddingBottom:'1%', padding:'1%'}}>
      <button style={{background:'white', width:'100%' ,border:'none', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}><svg style={{width:'20%', marginRight:'5%'}} xmlns="http://www.w3.org/2000/svg" width="38" height="25" viewBox="0 0 38 25" fill="none">
        <rect width="11.4493" height="7.53979" fill="#6D0E9D"/>
        <rect x="13.2568" width="11.4493" height="7.53979" fill="#6D0E9D"/>
        <rect x="26.5146" width="11.4493" height="7.53979" fill="#6D0E9D"/>
        <rect y="8.73096" width="11.4493" height="7.53979" fill="#6D0E9D"/>
        <rect x="13.2568" y="8.73096" width="11.4493" height="7.53979" fill="#6D0E9D"/>
        <rect x="26.5146" y="8.73096" width="11.4493" height="7.53979" fill="#6D0E9D"/>
        <rect y="17.4597" width="11.4493" height="7.53979" fill="#6D0E9D"/>
        <rect x="13.2568" y="17.4597" width="11.4493" height="7.53979" fill="#6D0E9D"/>
        <rect x="26.5146" y="17.46" width="11.4493" height="7.53979" fill="#6D0E9D"/>
        </svg>All Categories
      </button>


      <div style={{ position: 'relative', width:"100%" }}>
      <button
        style={{ background: 'white', width: '100%', display: "flex", alignItems: 'center', border: 'none', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}
        onClick={toggleDropdown}
      >        <svg style={{width:'15%',marginRight:'2%'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g clip-path="url(#clip0_308_2973)">
                <path d="M8.5095 0C8.78798 0 9.05505 0.110625 9.25196 0.307538C9.44888 0.504451 9.5595 0.771523 9.5595 1.05V3.0135H20.835V1.0635C20.835 0.785023 20.9456 0.517951 21.1425 0.321038C21.3395 0.124125 21.6065 0.0135 21.885 0.0135C22.1635 0.0135 22.4305 0.124125 22.6275 0.321038C22.8244 0.517951 22.935 0.785023 22.935 1.0635V3.0135H27C27.7954 3.0135 28.5582 3.32936 29.1208 3.89165C29.6834 4.45393 29.9996 5.21661 30 6.012V27.0015C29.9996 27.7969 29.6834 28.5596 29.1208 29.1219C28.5582 29.6841 27.7954 30 27 30H3C2.20461 30 1.44178 29.6841 0.87921 29.1219C0.316644 28.5596 0.000397695 27.7969 0 27.0015L0 6.012C0.000397695 5.21661 0.316644 4.45393 0.87921 3.89165C1.44178 3.32936 2.20461 3.0135 3 3.0135H7.4595V1.0485C7.4599 0.770283 7.5707 0.503596 7.76757 0.307007C7.96444 0.110418 8.23128 -2.83895e-07 8.5095 0ZM2.1 11.613V27.0015C2.1 27.1197 2.12328 27.2367 2.16851 27.3459C2.21374 27.4551 2.28003 27.5543 2.3636 27.6379C2.44718 27.7215 2.54639 27.7878 2.65558 27.833C2.76478 27.8782 2.88181 27.9015 3 27.9015H27C27.1182 27.9015 27.2352 27.8782 27.3444 27.833C27.4536 27.7878 27.5528 27.7215 27.6364 27.6379C27.72 27.5543 27.7863 27.4551 27.8315 27.3459C27.8767 27.2367 27.9 27.1197 27.9 27.0015V11.634L2.1 11.613ZM10.0005 21.9285V24.4275H7.5V21.9285H10.0005ZM16.2495 21.9285V24.4275H13.7505V21.9285H16.2495ZM22.5 21.9285V24.4275H19.9995V21.9285H22.5ZM10.0005 15.963V18.462H7.5V15.963H10.0005ZM16.2495 15.963V18.462H13.7505V15.963H16.2495ZM22.5 15.963V18.462H19.9995V15.963H22.5ZM7.4595 5.112H3C2.88181 5.112 2.76478 5.13528 2.65558 5.18051C2.54639 5.22574 2.44718 5.29203 2.3636 5.3756C2.28003 5.45918 2.21374 5.55839 2.16851 5.66758C2.12328 5.77678 2.1 5.89381 2.1 6.012V9.5145L27.9 9.5355V6.012C27.9 5.89381 27.8767 5.77678 27.8315 5.66758C27.7863 5.55839 27.72 5.45918 27.6364 5.3756C27.5528 5.29203 27.4536 5.22574 27.3444 5.18051C27.2352 5.13528 27.1182 5.112 27 5.112H22.935V6.5055C22.935 6.78398 22.8244 7.05105 22.6275 7.24796C22.4305 7.44488 22.1635 7.5555 21.885 7.5555C21.6065 7.5555 21.3395 7.44488 21.1425 7.24796C20.9456 7.05105 20.835 6.78398 20.835 6.5055V5.112H9.5595V6.492C9.5595 6.77048 9.44888 7.03755 9.25196 7.23446C9.05505 7.43138 8.78798 7.542 8.5095 7.542C8.23102 7.542 7.96395 7.43138 7.76704 7.23446C7.57012 7.03755 7.4595 6.77048 7.4595 6.492V5.112Z" fill="#6D0E9D"/>
            </g>
            <defs>
                <clipPath id="clip0_308_2973">
                    <rect width="30" height="30" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        Date Posted
        <svg style={{justifyContent:'end', marginLeft:'15%'}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12.2317 8.14331L6.61586 12.9055L1 8.14331" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H12.2317M1 4.1748H12.2317" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      {isOpen && (
        <div style={{zIndex:'9999', width:'100%', borderRadius:'2px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', position: 'absolute',padding:'2%', columnGap:'2%', top: '110%', left: 0, background: 'white', border: '1px solid gray', display:'flex', flexDirection:'column' }}>
          <label>
            <input type="radio" value="Any Time" checked={selectedOption === "Any Time"} onChange={handleOptionChange} />
            Any Time
          </label>
          <label>
            <input type="radio" value="Post Month" checked={selectedOption === "Post Month"} onChange={handleOptionChange} />
            Post Month
          </label>
          <label>
            <input type="radio" value="Post Week" checked={selectedOption === "Post Week"} onChange={handleOptionChange} />
            Post Week
          </label>
          <label>
            <input type="radio" value="Post 24 hours" checked={selectedOption === "Post 24 hours"} onChange={handleOptionChange} />
            Post 24 hours
          </label>
        </div>
      )}
      </div>

      <div style={{ position: 'relative', width:"100%" }}>
      <button onClick={toggleDropdown1} style={{background:'white',height:'100%', width:'100%',display:"flex", alignItems:'center', border:'none', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>
        
        Experience Level
        <svg style={{justifyContent:'end', marginLeft:'10%'}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12.2317 8.14331L6.61586 12.9055L1 8.14331" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H12.2317M1 4.1748H12.2317" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      {isOpen1 && (
        <div style={{zIndex:'9999', width:'100%', borderRadius:'2px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', position: 'absolute',padding:'2%', columnGap:'2%', top: '110%', left: 0, background: 'white', border: '1px solid gray', display:'flex', flexDirection:'column' }}>
          <label>
            <input type="checkbox" value="Internship" checked={selectedOption2 === "Internship"} onChange={handleOptionChange1} />
            Internship
          </label>
          <label>
            <input type="checkbox" value="Entry Level" checked={selectedOption2 === "Entry Level"} onChange={handleOptionChange1} />
            Entry Level
          </label>
          <label>
            <input type="checkbox" value="Assosiate" checked={selectedOption2 === "Assosiate"} onChange={handleOptionChange1} />
            Associate
          </label>
          <label>
            <input type="checkbox" value="Mid-Senior Level" checked={selectedOption2 === "Mid-Senior Level"} onChange={handleOptionChange1} />
            Mid-Senior Level
          </label>
          <label>
            <input type="checkbox" value="Director" checked={selectedOption2 === "Director"} onChange={handleOptionChange1} />
            Director
          </label>
          <label>
            <input type="checkbox" value="Executive" checked={selectedOption2 === "Executive"} onChange={handleOptionChange1} />
            Executive
          </label>
        </div>
      )}
      </div>
      
      <div style={{ position: 'relative', width:"100%" }}>
        <button onClick={toggleDropdown2} style={{background:'white', width:'100%', height:"100%",display:"flex", alignItems:'center', border:'none', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>
        
        Company
          <svg style={{justifyContent:'end', marginLeft:'45%'}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12.2317 8.14331L6.61586 12.9055L1 8.14331" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1H12.2317M1 4.1748H12.2317" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        {isOpen2 && (
        <div style={{zIndex:'9999', color:'#6D0E9D', width:'100%', borderRadius:'2px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', position: 'absolute',padding:'2%', columnGap:'2%', top: '110%', left: 0, background: 'white', border: '1px solid gray', display:'flex', flexDirection:'column' }}>
          <label>
            <input type="checkbox" value="Turing" checked={ selectedOption3 === "Turing"} onChange={handleOptionChange2} />
            Turing
          </label>
          <label>
            <input type="checkbox" value="Contour Software" checked={ selectedOption3 === "Contour Software"} onChange={handleOptionChange2} />
            Contour Software
          </label>
          <label>
            <input type="checkbox" value="CrossOver" checked={ selectedOption3 === "CrossOver"} onChange={handleOptionChange2} />
            CrossOver
          </label>
          <label>
            <input type="checkbox" value="Zameen.com" checked={selectedOption3 === "Zameen.com"} onChange={handleOptionChange2} />
            Zameen.com
          </label>
        </div>
        )}
      </div>


      <div style={{ position: 'relative', width:"100%" }}>
        <button onClick={toggleDropdown3} style={{background:'white', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',height:'100%', width:'100%',display:"flex", alignItems:'center', border:'none'}}>
        
        Job Type
          <svg style={{marginLeft:'45%'}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12.2317 8.14331L6.61586 12.9055L1 8.14331" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1H12.2317M1 4.1748H12.2317" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        {isOpen3 && (
        <div style={{zIndex:'9999', color:'#6D0E9D', width:'100%', borderRadius:'2px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', position: 'absolute',padding:'2%', columnGap:'2%', top: '110%', left: 0, background: 'white', border: '1px solid gray', display:'flex', flexDirection:'column' }}>
          <label>
            <input type="checkbox" value="Full Time" checked={selectedOption4 === "Full Time"} onChange={handleOptionChange3} />
            Full Time
          </label>
          <label>
            <input type="checkbox" value="Part Time" checked={selectedOption4 === "Part Time"} onChange={handleOptionChange3} />
            Part Time
          </label>
          <label>
            <input type="checkbox" value="Contract" checked={selectedOption4 === "Contract"} onChange={handleOptionChange3} />
            Contract
          </label>
          <label>
            <input type="checkbox" value="Temporary" checked={selectedOption4 === "Temporary"} onChange={handleOptionChange3} />
            Temporary
          </label>
          <label>
            <input type="checkbox" value="Internship" checked={selectedOption4 === "Internship"} onChange={handleOptionChange3} />
            Internship
          </label>
          <label>
            <input type="checkbox" value="Other" checked={selectedOption4 === "Other"} onChange={handleOptionChange3} />
            Other
          </label>
        </div>
        )}
      </div>


      <div style={{ position: 'relative', width:"100%" }}>
        <button onClick={toggleDropdown4} style={{background:'white',height:'100%', width:'100%',display:"flex", alignItems:'center',border:'none', outline:'none', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}>
        
        On-site / Remote
          <svg style={{justifyContent:'end', marginLeft:'5%'}} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12.2317 8.14331L6.61586 12.9055L1 8.14331" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1H12.2317M1 4.1748H12.2317" stroke="#6D0E9D" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        {isOpen4 && (
        <div style={{zIndex:'9999', color:'#6D0E9D', width:'100%', borderRadius:'2px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', position: 'absolute',padding:'2%', columnGap:'2%', top: '110%', left: 0, background: 'white', border: '1px solid gray', display:'flex', flexDirection:'column' }}>
          <label>
            <input type="radio" value="On-Site" checked={selectedOption5 === "On-Site"} onChange={handleOptionChange4} />
            On-Site
          </label>
          <label>
            <input type="radio" value="Remote" checked={selectedOption5 === "Remote"} onChange={handleOptionChange4} />
            Remote
          </label>
          
        </div>
        )}
      </div>


      <button
      style={{
        background: '#6D0E9D',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%',
        border: 'none',
        boxShadow: isHovered ? '0px 0px 2px 2px rgba(109, 14, 157, 0.5)' : '0px 0px 1px 1px gray'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Filter
      </button>
    </div>
  )
}

export default JobNav;

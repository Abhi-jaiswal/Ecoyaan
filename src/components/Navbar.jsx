import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
const Navbar = () => {
  const location = useLocation();
  const [currPage, setCurrPage] = React.useState();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setCurrPage(location.pathname);
  }, [location]);

  const handlePageChange = (page) => {
    setCurrPage(page);
  };

  return (
    <div className="fixed top-0 left-0 shadow-md z-50 bg-white h-16 w-full">
      <div className='flex justify-between px-12 md:py-4 mx-auto items-center'>
        <div className='md:hidden'>
          <div className='text-3xl pr-7' onClick={() => setOpen(true)}>
            <IoMdMenu />
          </div>
        </div>

        <div className='transition ease-in-out delay-150 duration-300 hover:scale-110'>
            <Link to="/" className='text-3xl text-green-600 md:font-bold'>Ecoyaan</Link>
        </div>

        <div className="flex gap-16 text-lg invisible md:visible">
          <Link to="/" className='hover:scale-110' >Home</Link>
          <Link to="/aboutus" className='hover:scale-110' >About Us</Link>
          <Link to="/sellOnEcoyaan" className='hover:scale-110' >Sell on Ecoyaan</Link>
          <Link to="/careers" className='hover:scale-110' >Careers</Link>
        </div>
      </div>

      {
          open && <div>
            <div className='h-screen bg-white absolute left-0 top-0 p-6 transition-all duration-15000 w-[280px] ease-out'>
              <div className='flex justify-between items-center'>
                <div className='transition ease-in-out delay-150 duration-300 hover:scale-110'>
                    <Link to="/" className='text-[24px] text-green-600 font-bold'>Ecoyaan</Link>
                </div>

                <div className='md:hidden text-2xl' onClick={() => setOpen(false)}>
                  <MdMenuOpen />
                </div>
              </div>


              <div className='my-6 flex flex-col'>
                <Link to="/" className={`hover:bg-gray-200 p-3 h-12 font-bold rounded-lg ${currPage === "/" ? "bg-green-600 text-white" : ""}` }  onClick={() => setOpen(false)}>Home</Link>
                <Link to="/aboutus" className={`hover:bg-gray-200 p-3 h-12 font-bold rounded-lg ${currPage === "/aboutus" ? "bg-green-600 text-white" : ""}` } onClick={() => setOpen(false)}>About Us</Link>
                <Link to="/sellOnEcoyaan" className={`hover:bg-gray-200 p-3 h-12 font-bold rounded-lg ${currPage === "/sellOnEcoyaan" ? "bg-green-600 text-white" : ""}`} onClick={() => setOpen(false)}>Sell on Ecoyaan</Link>
                <Link to="/careers" className={`hover:bg-gray-200 p-3 h-12 font-bold rounded-lg ${currPage === "/careers" ? "bg-green-600 text-white" : ""}`} onClick={() => setOpen(false)}>Careers</Link>
                <Link to="/privacyPolicy" className={`hover:bg-gray-200 p-3 h-12 font-bold rounded-lg ${currPage === "/privacyPolicy" ? "bg-green-600 text-white" : ""}`} onClick={() => setOpen(false)}>Privacy Policy</Link>
                <Link to="/termsOfUse" className={`hover:bg-gray-200 p-3 h-12 font-bold rounded-lg ${currPage === "/termsOfUse" ? "bg-green-600 text-white" : ""}`} onClick={() => setOpen(false)}>Terms of use</Link>
              </div>
            </div>
          </div>
      }
      
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { toggleCartSide } from '../redux/Cart/CartSlice';
import Modal from '../components/Modal';
import { LoginModal } from '../features/authentication/components/LoginModal';

export const NavBar = () => {
  const [ openLoginModal, setOpenLoginModal ] = useState(false);
  const [isLogin, setIsLogin]  = useState(true);

  const cartCount =useSelector((state) => state.carts.carts.length);
  const wishlistCount =useSelector((state) => state.wishlist.wishlistItems.length);

const dispatch = useDispatch();


  const openCart = () => {
    dispatch(toggleCartSide())
  }


  const openLoaginModal =() =>{
    setOpenLoginModal(true)
    setIsLogin(true)
  }

  const closeModal =() =>{
    setOpenLoginModal(false)
    setIsLogin(false)
  }

  return (

    <>
    
    <header className='sticky  top-0 flex bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] tracking-wide  z-50'>
      <div className='flex max-w-screen-xl mx-auto w-full'>
        <div className='flex flex-wrap items-center justify-between lg:gap-y-2 gap-4 w-full'>
          <Link to={'/'} className="max-sm:hidden">
            <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
          </Link>
          <Link to={'/'} className="hidden max-sm:block">
            <img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className='w-9' />
          </Link>

          <div id="collapseMenu" className='lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
            <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>
          </div>

          <div className='flex flex-1 justify-center'>
            <div className='flex bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 overflow-hidden w-full max-w-lg'>
              <input type='text' placeholder='Search something...' className='w-full text-sm bg-transparent outline-none pr-2' />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                className="cursor-pointer fill-gray-600">
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-x-6 gap-y-4 ">
            <div className='flex items-center sm:space-x-8 space-x-6'>
              <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-[#333] inline w-5 h-5"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000" />
                  </svg>
                  <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{wishlistCount}</span>
                </div>
                <span className="text-[13px] font-semibold text-[#333]">Wishlist</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                <div className="relative" onClick={openCart}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#333] inline"
                    viewBox="0 0 512 512">
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"></path>
                    </svg>
                    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{cartCount}</span>
                </div>
                <span className="text-[13px] font-semibold text-[#333]">Cart</span>
              </div>

              <button onClick={openLoaginModal}
                className=' px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Sign
                In</button>

          
            </div>
          </div>
        </div>
      </div>
    </header>


    {
      openLoginModal && isLogin && 
      
      <Modal isOpen={openLoginModal && isLogin} onClose={closeModal}>
          <LoginModal />
      </Modal>
      
      }

{
      openLoginModal && !isLogin && 
      
      <Modal isOpen={openLoginModal && !isLogin} onClose={closeModal}>
        <RegisterModal />
      </Modal>
      
      }
    
    </>
  
  )
}

import logo from './logo.svg';
import './App.css';
import desktop from "./components/Assets/images/illustration-woman-online-desktop.svg"
import box from "./components/Assets/images/illustration-box-desktop.svg"
import { useEffect, useState } from 'react';
import $ from "jquery";

function App() {
  const [data, setData] = useState([


    {
      id: 0,
      question: "How many team Members can I invite?",
      answer: "2 or more members",
      status: false,
    }, {

      id: 1,
      question: "What is the Maximum file upload size?",
      answer: "No more than 2 GB. All file in your account mail.",
      status: false,
    }, {

      id: 2,
      question: "How do you reset the Password?",
      answer: "No more than 2 GB. All file in your account mail.",
      status: false,
    }, {
      id: 3,
      question: "Can I cancel my subscription?",
      answer: "No more than 2 GB. All file in your account mail.",
      status: false,
    }, {
      id: 4,
      question: "DO you Provide Additional Support?",
      answer: "No more than 2 GB. All file in your account mail.",
      status: false,
    }
  ]
  )
  const [forceRender, setForceRender] = useState(false)
  const handleClick = (v) => {
    data.forEach((el) => {
      if (el.id === v.id) {
        el.status = true
      } else {
        el.status = false
      }
      if(v.id===el.id){
        $("#answer").slideDown("slow");
      }
    })
    setForceRender(!forceRender)
  }



  return (
    <div className="App bg-voilet h-[100vh] center">
      <div className='bg-white rounded-lg h-[70vh] w-[70%]'>
        <div className='grid grid-cols-2'>
          <div className='relative '>
            <div className='flex'>
              <div className='grid grid-cols-4 relative'>
                <div className='flex col-span-4 py-10  relative'>
                  <img src={box} alt="box" className='h-[100px] w-[100px] absolute top-[50%]' />
                  <img src={desktop} alt="woman" className='' />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='py-16 px-6'>
              <div className='text-[32px] text-[#222] font-semibold'>FAQ</div>
              {data?.map((v, i) => {
                return (
                  <div key={i} className='py-2 w-[80%]'>
                    <div className={`${v.status === true ? "text-[#222] font-semibold" : ""} text-primary border-bootom text-[14px] cursor-pointer pb-2`} onClick={() => handleClick(v)}>
                      {v?.question}
                    </div>
                    <div className={`${v.status === true ? "block" : "hidden"} text-primary pt-1 text-[12px]`}>
                      {v?.answer}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

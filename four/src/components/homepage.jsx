import React from 'react'

const Homepage = () => {
  return (
    <div className="relative min-h-screen w-screen bg-[url('/bac.jpg')] bg-cover bg-center bg-no-repeat">

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/60 to-transparent" />

    
      <div className="relative z-10 flex flex-col min-h-screen">

        
        

        
        <div className="flex-1 flex items-center">
          <div className="max-w-xl px-8 md:px-16 text-white space-y-6">

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
              SWINEYS WOODEN HAVEN
            </h1>

            <q className="block text-lg md:text-xl italic text-amber-400">
              The home of all your quality wooden products
            </q>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Handcrafted wood. Honest design. Built to last for generations.
            </p>

            {/* Call to action */}
            <button className="mt-4 inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded transition">
              Explore Collection
            </button>

          </div>
        </div>

      </div>
      <div class="fixed right-0 top-0 h-full w-32 bg-amber-500/90  flex flex-col items-center p-4 gap-3 animate-pulse rounded-4xl  ">
        <img src="./OIP (1).jpg"  className='h-20 w-20 rounded-2xl animate-bounce' />
         <img src="./OIP (2).jpg" alt="" className='h-20 w-20  animate-spin  rounded-3xl bg-amber-700' />
          <img src="./OIP (3).jpg" alt=""  className='h-20 w-20 animate-bounce rounded-2xl'/>
           <img src="./OIP (4).jpg" alt=""  className='h-20 w-20 animate-spin rounded-2xl'/> 
           <img src="./OIP (5).jpg" alt=""  className='h-20 w-20 animate-bounce rounded-2xl'/>
            <img src="./OIP (6).jpg" alt=""  className='h-20 w-20 rounded-2xl animate-spin'/>
             <img src="./OIP (7).jpg" alt=""  className='h-20 w-20 rounded-2xl animate-bounce'/>

      </div>
      <div class="fixed right-50 top-100 h-full w-32 bg-amber-900 shadow-xl flex flex-col items-center p-4 gap-3 rounded-4xl ">
    
    <a href='https://wa.me/256758066428'> <img src="./OIP (30).jpg" alt="" className='h-10 w-10 rounded-2xl '/></a> 
      <img src="./OIP (31).jpg" alt="" className='h-10 w-10 rounded-2xl'/>
      <img src="./OIP (32).jpg" alt="" className='h-10 w-10 rounded-2xl'/>
      <img src="./OIP (33).jpg" alt="" className='h-10 w-10 rounded-2xl'/>
      <img src="./OIP (34).jpg" alt="" className='h-10 w-10 rounded-2xl'/>
      </div>
      
    </div>
  )
}
 export default Homepage

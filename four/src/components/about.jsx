import React from 'react'

 
      const AboutUs = () => {
  return (
    <section className="bg-[#faf6f1] text-[#3b2f2f] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 bg-amber-400 shadow-2xl rounded-4xl animate-pulse">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <strong/> <span className="text-[#a16207]">SWINEYS WOODEN HAVEN</span>
          </h1>
          <p className="mt-4 text-lg text-[#6b4f3f] max-w-2xl mx-auto">
            THE HOME OF ALL YOUR WOODEN QUALITY PRODUCTS
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div className="space-y-6">
            <q className="text-3xl font-bold text-center">
              Crafted with Love
            </q>

            <p className="text-[#5a4638] leading-relaxed">
              At <span className="font-semibold">swineys wooden haven</span>, we believe every meal should feel
              like a cozy anime food scene. Our wooden utensils are handcrafted using sustainable wood,
              designed for comfort, durability, and pure aesthetic joy.
            </p>

            <p className="text-[#5a4638] leading-relaxed">
              From ramen spoons to bento chopsticks, each piece is made to bring warmth to your table
              and vibes to your feed ✨
            </p>

             
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white rounded-xl shadow-md px-6 py-4 text-center">
                <p className="text-2xl font-bold text-[#a16207]">100%</p>
                <p className="text-sm text-[#6b4f3f]">Natural Wood</p>
              </div>
              <div className="bg-white rounded-xl shadow-md px-6 py-4 text-center">
                <p className="text-2xl font-bold text-[#a16207]">Handmade</p>
                <p className="text-sm text-[#6b4f3f]">With Care</p>
              </div>
              <div className="bg-white rounded-xl shadow-md px-6 py-4 text-center">
                <p className="text-2xl font-bold text-[#a16207]">Weeb-Approved</p>
                <p className="text-sm text-[#6b4f3f]">Aesthetic</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 bg-red-500">
            <img
              src="./OIP (40).jpg"
              alt="Wooden utensils"
              className="rounded-2xl shadow-lg object-cover h-48 w-full"
            />
            <img
              src="./OIP (39).jpg"
              alt="Japanese style food"
              className="rounded-2xl shadow-lg object-cover h-48 w-full"
            />
            <img
              src="./OIP (38).jpg"
              alt="Wood craftsmanship"
              className="rounded-2xl shadow-lg object-cover h-48 w-full col-span-2"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center bg-white rounded-3xl p-10 shadow-md">
          <p className="text-2xl font-semibold">
            SWINEYS WOODEN HAVEN
          </p>
          <p className="mt-2 text-[#6b4f3f]">
            Thank you for supporting swineys wooden haven.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;

   
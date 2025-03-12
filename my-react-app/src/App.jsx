const Cheffify = () => {
  return (
    <div className="bg-white font-sans text-gray-700">
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img alt="Cheffify logo" className="h-15" src="src\img\3.PNG" />
          <input className="border border-gray-300 rounded-full px-10 py-2" placeholder="Search" type="text" />
          <button className="text-pink-500">🔍</button>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            {['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us'].map((item) => (
              <a key={item} className="text-gray-600 hover:text-pink-500" href="#">{item}</a>
            ))}
          </nav>
          <button className="text-pink-500 border border-pink-500 rounded-full px-4 py-2">Your Recipe Box</button>
          <img alt="User avatar" className="ml-4 h-10 w-10 rounded-full" src="src\img\4.PNG" />
        </div>
      </header>
      
      <main className="flex p-4">
        <aside className="w-1/4 p-4 border-r border-gray-200">
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">FILTERS</h2>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Type</h3>
              {['Pan-fried', 'Grilled', 'Sauteed', 'Steamed', 'Stir-fried', 'Roasted', 'Baked', 'Stewed'].map((type) => (
                <label key={type} className="block"><input type="checkbox" /> {type}</label>
              ))}
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Time</h3>
              <input className="w-full" type="range" min="30" max="90" />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Rating</h3>
              {['★★★★★', '★★★★☆', '★★★☆☆', '★★☆☆☆', '★☆☆☆☆'].map((stars, index) => (
                <label key={index} className="flex items-center">
                  <input className="mr-2" type="radio" name="rating" />
                  <span className="text-yellow-500 text-lg">{stars}</span>
                </label>
              ))}
            </div>
            <button className="bg-pink-500 text-white px-4 py-2 rounded">Apply</button>
          </div>
        </aside>
        <section className="flex-1 p-4 text-center">
          <h1>Sorry, no results were found for “cakescascsa”</h1>
          <img alt="No results illustration" src="src\img\1.PNG" className="mx-auto" />
          <p>We have all your Independence Day sweets covered.</p>
          <div className="flex justify-center space-x-4">
            {['Sweet Cake', 'Black Cake', 'Pozole Verde', 'Healthy food'].map((item) => (
              <a key={item} className="text-pink-500 hover:underline" href="#">{item}</a>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white p-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="mb-4">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className="flex">
              <input className="px-4 py-2 rounded-l-lg w-64" placeholder="Enter your email" type="email" />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-lg">Send</button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <img className="rounded-full" src="src\img\2.PNG" alt="Logo" width="100" />
              <span>© 2023 Cheffify Company</span>
              <span>
                <a className="hover:underline" href="#">Terms of Service</a> | 
                <a className="hover:underline" href="#">Privacy Policy</a>
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Learn More</h2>
            {['Our Cookies', 'See Our Features', 'FAQ'].map((item) => (
              <p key={item}><a className="hover:underline" href="#">{item}</a></p>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Shop</h2>
            {['Gift Subscription', 'Send Us Feedback'].map((item) => (
              <p key={item}><a className="hover:underline" href="#">{item}</a></p>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Recipes</h2>
            {['What to Cook This Week', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Christmas'].map((item) => (
              <p key={item}><a className="hover:underline" href="#">{item}</a></p>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cheffify;
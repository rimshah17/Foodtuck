// components/MenuSection.js
export default function MenuSection({ heading, menuItems, image, reverse }) {
    return (
      <section className={`py-16  menuSection ${reverse ? "flex-row-reverse" : ""}`}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          <div className="imagCol">
            <img
              src={image}
              alt={heading}
              className="rounded-lg shadow-lg w-full object-cover " 
            />
          </div>
  
          
          <div className=" menuCol">
            <div className="mb-4">            
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.25 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.25 2.25V5.25" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 20.25H19.5" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.80905 20.2504C6.37372 19.5915 5.15763 18.5346 4.30519 17.205C3.45274 15.8755 2.99974 14.3293 3 12.75V8.25H19.5V12.75C19.5003 14.3293 19.0473 15.8756 18.1948 17.2051C17.3423 18.5346 16.1262 19.5915 14.6909 20.2504" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.5003 8.25C20.296 8.25 21.059 8.56607 21.6216 9.12868C22.1843 9.69129 22.5003 10.4544 22.5003 11.25V12C22.5003 12.7956 22.1843 13.5587 21.6216 14.1213C21.059 14.6839 20.296 15 19.5003 15H19.1836" stroke="#FF9F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

              <h2 className="text-3xl font-bold text-gray-800">{heading}</h2>
            </div>
  
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index} className="flex justify-between border-dashed border-b-2 pb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <span className="text-sm text-gray-400">{item.calories}</span>
                  </div>
                  <p className="text-lg font-bold mainColor">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
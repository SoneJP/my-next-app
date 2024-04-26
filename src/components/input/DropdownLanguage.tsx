import { useEffect, useState } from "react";

function DropdownLanguage() {
    const [languages, setLanguages] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('api');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setLanguages(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    
        return () => {
        };
      }, []);

   return (
      <div className="custom-dropdown">
         <select
            value={selectedOption}
            onChange={(e) => handleSelect(e.target.value)}>
            <option value="" disabled>
               Select an option
            </option>
            {options.map((option, index) => (
               <option key={index} value={option}>
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
}

export default DropdownLanguage;

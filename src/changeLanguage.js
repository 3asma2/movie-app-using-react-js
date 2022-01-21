
import { useContext } from "react";
import { langContext } from "./context/langContext";
import {useState , useEffect } from "react";

function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(langContext)

 const [lang, setlang] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("lang");
    const initialValue = JSON.parse(saved);
    if(initialValue != null){
      setContextLang(initialValue)
    }else {
      setContextLang("English")
    }
    //  return initialValue || "";
  });
useEffect(() => {
    // storing input name
    localStorage.setItem("lang", JSON.stringify(contextLang));
  }, [contextLang]);

  return (
	 			<div>
	 				<button 
	 onClick={()=> setContextLang(contextLang === "English" ? "العربية" : "English")}> 
	 					{contextLang}
	 				</button>
	 			</div>
	 		

  );
}

export default ChangeLanguage;
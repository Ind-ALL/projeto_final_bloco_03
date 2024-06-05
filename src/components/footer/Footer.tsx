import { GithubLogo } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { InstagramLogo } from "@phosphor-icons/react/dist/icons/InstagramLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/icons/LinkedinLogo";
import { Link } from "react-router-dom";

function Footer(){

    let data = new Date().getFullYear()
      
        return(
    <>
    <footer className="bg-sky-900 text-white py-6" >
      <div className="container flex flex-col items-center py-4">
      <p className='text-xl font-bold'>Performance Goal | Copyright: {data} </p>
      <p className='text-lg'>Acesse minhas redes sociais:</p>
            <div className='flex gap-2'>        
            <Link
                      to={"https://www.linkedin.com/in/ingrid-alves-ads96/"}
                      className="group cursor-pointer hover:text-amber-400"
                      target="_blank"
                    >
                    <LinkedinLogo size={32}  />
                      </Link>   
                      <Link
                      to={"https://www.instagram.com/ind.all96/"}
                      className="group cursor-pointer hover:text-amber-400"
                      target="_blank"
                    >
                    <InstagramLogo size={32} />  
                      </Link>
                      <Link
                      to={"https://github.com/Ind-ALL"}
                      className="group cursor-pointer hover:text-amber-400"
                      target="_blank"
                    >
              <GithubLogo size={32} />   
                      </Link>      
            
                </div>
          </div>
        </footer>
            </>
    );
    }
    export default Footer;
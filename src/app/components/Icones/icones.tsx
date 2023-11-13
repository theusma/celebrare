import React from "react";
import './icones.css';
import '../../globals.css';
const Icones = () => {
    

    return <div className="icones gap-4">
        <div className="busca">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 17.5L21 21M20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20C15.7467 20 20 15.7467 20 10.5Z" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className="perfil gap-4">   
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5588 18.5488C16.5654 15.8918 14.0036 14 11 14C7.99638 14 5.4346 15.8918 4.44117 18.5488M17.5588 18.5488C19.6672 16.7154 21 14.0134 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 14.0134 2.33285 16.7154 4.44117 18.5488M17.5588 18.5488C15.8031 20.0756 13.5095 21 11 21C8.49052 21 6.19694 20.0756 4.44117 18.5488M14 8C14 9.65685 12.6569 11 11 11C9.34315 11 8 9.65685 8 8C8 6.34315 9.34315 5 11 5C12.6569 5 14 6.34315 14 8Z" stroke="#141718" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className="carrinho flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z" stroke="#141718" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            <span className="qtd">2</span>
        </div>
    </div>
    
    ;
  };
  
  export default Icones;
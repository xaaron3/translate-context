import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component {

   render() {
      return (
         <button className="ui primary button">
            <LanguageContext.Consumer>
               {(value) => value === 'english' ? 'Submit' : 'Enviar'  }
            </LanguageContext.Consumer>
         </button>
      )
   }
};

export default Button;



// static contextType = LanguageContext
// this is only needed when wanting to use this.context passing
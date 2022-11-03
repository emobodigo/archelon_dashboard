import React from 'react';
import { IconType } from 'react-icons';
import { ButtonType } from '../../config/enum';
import { IoMdClose } from 'react-icons/io';

interface IAction {
   type: ButtonType;
   icon: IconType;
   action: () => void;
   label: string;
}

interface IProps {
   title: string;
   message: string;
   actions?: IAction[];
   alertStateSetter: (state: boolean) => void;
}

const Alert: React.FC<IProps> = ({ title, actions, message, alertStateSetter }) => {
   const renderActionsButton = () => {
      let elements = [];
      if (actions !== undefined) {
         for (let i = 0; i < actions.length; i++) {
            let Icon = actions[i].icon;
            elements.push(
               <div className={`ae-popup-button ${actions[i].type}`} onClick={actions[i].action}>
                  {<Icon className="ae-react-icon" />}
                  <p>{actions[i].label}</p>
               </div>
            );
         }
      }
      return elements;
   };

   return (
      <div className="ae-popup-overlay">
         <div className="ae-popup-container">
            <div className="ae-popup-title">{title}</div>
            <div className="ae-popup-message">{message}</div>
            <div className="ae-popup-button-container">
               {actions !== undefined && renderActionsButton()}
               <div className="ae-popup-button" onClick={() => alertStateSetter(false)}>
                  <IoMdClose className="ae-react-icon" />
                  <p>Close</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Alert;

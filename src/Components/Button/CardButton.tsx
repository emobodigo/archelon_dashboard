import React from 'react';
import { IconType } from 'react-icons';
import { ButtonType } from '../../config/enum';

interface IProps {
   Icon: IconType;
   caption: string;
   onClick: (...params: any) => void;
   type: ButtonType;
}

const CardButton: React.FC<IProps> = ({ Icon, onClick, type, caption }) => {
   return (
      <span className={`ae-card-button ae-caption ${type}`} ae-caption={caption} onClick={onClick}>
         <Icon className="ae-react-icon" />
      </span>
   );
};

export default CardButton;

import React from 'react';
import { ButtonType } from '../../config/enum';

interface ITableButton {
   buttonType?: ButtonType | string;
   action: () => void;
   label: string;
}

const TableButton: React.FC<ITableButton> = ({ buttonType, action, label }) => {
   return (
      <td>
         <div className={`ae-table-button ${buttonType !== undefined ? buttonType : 'primary'}`} onClick={action}>
            {label}
         </div>
      </td>
   );
};

export default TableButton;

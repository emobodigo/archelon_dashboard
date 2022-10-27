import React, { useEffect, useState } from 'react';
import { ROW_PER_PAGE } from '../../config/config';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { numberFormat } from '../../utils/UIUtils';

interface IHeader {
   label: string;
   enableSorting?: boolean;
   sortingKey?: string;
   style?: React.CSSProperties;
   currentSort?: 'asc' | 'desc';
}

interface IData {
   value: any;
   isNumber?: boolean;
   style?: React.CSSProperties;
}

interface IBody {
   data: IData[];
   id: number;
}

interface IActionData {
   navigationURI: string;
   permissionLevel?: number | 0;
}

interface IActionDelete {
   apiURL: string;
   permissionLevel?: number | 0;
}

interface IProps {
   body?: Array<IBody>;
   api: string;
   header?: Array<IHeader>;
   customHeader?: JSX.Element | JSX.Element[];
   customBody?: JSX.Element | JSX.Element[];
   customAction?: JSX.Element | JSX.Element[];
   totalRow?: number;
   currentPage?: number;
   rowPerPage?: number;
   hasDetailAction?: boolean;
   detailActionData?: IActionData;
   hasEditAction?: boolean;
   editActionData?: IActionData;
   hasDeleteAction?: boolean;
   deleteActionData?: IActionDelete;
   simplifiedAction?: boolean;
}

const Table: React.FC<IProps> = ({
   body,
   api,
   customAction,
   customHeader,
   deleteActionData,
   detailActionData,
   editActionData,
   hasDeleteAction,
   hasDetailAction,
   hasEditAction,
   simplifiedAction,
   header,
   currentPage,
   rowPerPage,
   customBody,
   totalRow
}) => {
   const [totalAction, setTotalAction] = useState(0);
   const itemPerPage = rowPerPage ? rowPerPage : ROW_PER_PAGE;

   useEffect(() => {
      if (hasDeleteAction) {
         setTotalAction((prev) => prev + 1);
      }
      if (hasDetailAction) {
         setTotalAction((prev) => prev + 1);
      }
      if (hasEditAction) {
         setTotalAction((prev) => prev + 1);
      }

      return () => {
         setTotalAction(0);
      };
   }, []);

   const handleSort = (key: string | undefined, currentSort: string | undefined) => {
      // TODO api and query
   };

   return (
      <table className="ae-table">
         {customHeader ? (
            <thead>{customHeader}</thead>
         ) : (
            header &&
            header.length > 0 && (
               <thead>
                  <tr>
                     <th>No.</th>
                     {header.map((item) => (
                        <th
                           style={item.style}
                           onClick={
                              item.enableSorting ? () => handleSort(item.sortingKey, item.currentSort) : undefined
                           }>
                           {item.label}{' '}
                           {item.enableSorting && (
                              <span>
                                 {item.currentSort === 'asc' ? (
                                    <FaCaretUp className="caret" />
                                 ) : (
                                    <FaCaretDown className="caret" />
                                 )}
                              </span>
                           )}
                        </th>
                     ))}
                     {(customAction || hasDeleteAction || hasDetailAction || hasEditAction) && (
                        <th colSpan={totalAction}>Action</th>
                     )}
                  </tr>
               </thead>
            )
         )}
         {customBody ? (
            <tbody>{customBody}</tbody>
         ) : (
            <tbody>
               {body &&
                  (body.length > 0 ? (
                     body.map((item) => {
                        let rowNumber = (currentPage! - 1) * itemPerPage + 1;
                        return (
                           <tr>
                              <td>{rowNumber}</td>
                              {item.data.map((row) => (
                                 <td style={row.style}>{row.isNumber ? numberFormat(row.value) : row.value}</td>
                              ))}
                              {customAction && customAction}
                              {/* TODO show action based on clause */}
                           </tr>
                        );
                     })
                  ) : (
                     <td></td>
                  ))}
            </tbody>
         )}
      </table>
   );
};

export default Table;

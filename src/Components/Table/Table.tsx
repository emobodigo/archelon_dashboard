/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ROW_PER_PAGE } from '../../config/config';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { numberFormat } from '../../utils/UIUtils';
import useUserStore from '../../Store/userStore';
import { ButtonType } from '../../config/enum';
import { useNavigate } from 'react-router-dom';
import TableButton from './TableButton';
import Button from '../Button/Button';

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
   buttonType?: ButtonType | string;
}

interface IActionDelete {
   apiURL: string;
   permissionLevel?: number | 0;
   customModal?: JSX.Element | JSX.Element[];
}

interface IProps {
   body?: Array<IBody>;
   header?: Array<IHeader>;
   footer?: JSX.Element | JSX.Element[];
   api: string;
   customHeader?: JSX.Element | JSX.Element[];
   customBody?: JSX.Element | JSX.Element[];
   customAction?: JSX.Element | JSX.Element[];
   totalRow?: number;
   currentPage: number;
   rowPerPage?: number;
   hasDetailAction?: boolean;
   detailActionData?: IActionData;
   hasEditAction?: boolean;
   editActionData?: IActionData;
   hasDeleteAction?: boolean;
   deleteActionData?: IActionDelete;
   simplifiedAction?: boolean;
   noDataMessage: string;
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
   currentPage = 1,
   rowPerPage,
   customBody,
   totalRow,
   footer,
   noDataMessage = 'No Data Listed'
}) => {
   const navigate = useNavigate();
   const [totalAction, setTotalAction] = useState(0);
   const [totalSpan, setTotalSpan] = useState(0);
   const [startIndex, setStartIndex] = useState(0);
   const [lastPage, setLastPage] = useState(1);
   const [lastIndex, setLastIndex] = useState(1);
   const [isOpenModal, setIsOpenModal] = useState(false);
   const { admin } = useUserStore();
   const itemPerPage = rowPerPage ? rowPerPage : ROW_PER_PAGE;
   const totalCountData = totalRow ? totalRow : 0;

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
      if (header?.length) {
         setTotalSpan(totalAction + header?.length + 1);
      }

      return () => {
         setTotalAction(0);
      };
   }, []);

   useEffect(() => {
      if (header?.length) {
         setTotalSpan(totalAction + header?.length + 1);
      }
      return () => {
         setTotalSpan(0);
      };
   }, [totalAction]);

   useEffect(() => {
      setLastPage(Math.ceil(totalCountData / itemPerPage));
      let endIndex = currentPage + itemPerPage;
      let beginIndex = (currentPage - 1) * itemPerPage + 1;
      if (endIndex > totalCountData) {
         endIndex = totalCountData;
      }
      if (totalCountData === 0) {
         beginIndex = 0;
      }
      setLastIndex(endIndex);
      setStartIndex(beginIndex);

      return () => {
         setLastPage(1);
         setStartIndex(1);
      };
   }, [currentPage]);

   const handleSort = (key: string | undefined, currentSort: string | undefined) => {
      // TODO api and query
   };

   const handleChangePage = (page: number) => {
      // TODO api and Query
   };

   const renderPaginationEarlyList = () => {
      const elements = [];
      for (let i = 10; i > 0; i--) {
         let page = currentPage - i;
         if (page > 0 && page !== currentPage) {
            elements.push(
               <div className="ae-pagination-button" onClick={() => handleChangePage(page)}>
                  {page}
               </div>
            );
         }
      }
      return elements;
   };

   const renderPaginationLateList = () => {
      const elements = [];
      for (let i = 0; i < 10; i++) {
         let page = currentPage + i;
         if (page <= lastPage && page !== currentPage) {
            elements.push(
               <div className="ae-pagination-button" onClick={() => handleChangePage(page)}>
                  {page}
               </div>
            );
         }
      }
      return elements;
   };

   return (
      <>
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
                              }
                           >
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
                           <th colSpan={totalAction} style={{ textAlign: 'center' }}>
                              Action
                           </th>
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
                                 {customAction !== undefined ? (
                                    customAction
                                 ) : (
                                    <>
                                       {hasDetailAction &&
                                          (detailActionData?.permissionLevel ? (
                                             admin.admin_level >= detailActionData.permissionLevel && (
                                                <TableButton
                                                   label="Detail"
                                                   action={() =>
                                                      navigate(`${detailActionData.navigationURI}/${item.id}`)
                                                   }
                                                   buttonType={detailActionData?.buttonType}
                                                />
                                             )
                                          ) : (
                                             <TableButton
                                                label="Detail"
                                                action={() => navigate(`${detailActionData?.navigationURI}/${item.id}`)}
                                                buttonType={detailActionData?.buttonType}
                                             />
                                          ))}
                                       {hasEditAction &&
                                          (editActionData?.permissionLevel ? (
                                             admin.admin_level >= editActionData.permissionLevel && (
                                                <TableButton
                                                   label="Edit"
                                                   action={() =>
                                                      navigate(`${editActionData?.navigationURI}/${item.id}`)
                                                   }
                                                   buttonType={editActionData?.buttonType}
                                                />
                                             )
                                          ) : (
                                             <TableButton
                                                label="Edit"
                                                action={() => navigate(`${editActionData?.navigationURI}/${item.id}`)}
                                                buttonType={editActionData?.buttonType}
                                             />
                                          ))}
                                       {hasDeleteAction &&
                                          (deleteActionData?.permissionLevel ? (
                                             admin.admin_level >= deleteActionData.permissionLevel && (
                                                <TableButton
                                                   label="Delete"
                                                   action={() => console.log('TODO Show Modal')}
                                                   buttonType={ButtonType.BAD}
                                                />
                                             )
                                          ) : (
                                             <TableButton
                                                label="Delete"
                                                action={() => console.log('TODO Show Modal')}
                                                buttonType={ButtonType.BAD}
                                             />
                                          ))}
                                    </>
                                 )}
                              </tr>
                           );
                        })
                     ) : (
                        <tr>
                           <td className="empty-row" colSpan={totalSpan}>
                              {noDataMessage}
                           </td>
                        </tr>
                     ))}
               </tbody>
            )}
            {footer === undefined ? (
               <tfoot>
                  <tr>
                     <th colSpan={totalSpan}></th>
                  </tr>
               </tfoot>
            ) : (
               <tfoot>{footer}</tfoot>
            )}
         </table>
         <div className="ae-pagination-stat">
            Showing item {startIndex} - {lastIndex} of {totalCountData} items
         </div>
         <div className="ae-pagination">
            Page:{' '}
            {currentPage === 1 && (
               <div className="ae-pagination-button" onClick={() => handleChangePage(1)}>
                  First
               </div>
            )}
            <>{renderPaginationEarlyList()}</>
            <div className="ae-pagination-current">{currentPage}</div>
            <>{renderPaginationLateList()}</>
            {currentPage !== lastPage && lastPage > 1 && (
               <div className="ae-pagination-button" onClick={() => handleChangePage(lastPage)}>
                  Last
               </div>
            )}
         </div>
      </>
   );
};

export default Table;

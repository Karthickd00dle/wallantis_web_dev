import React from 'react'
import { TableWrapper } from 'component/Admin/common/TableWrapper'
import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
  } from 'reactstrap';
  import { HiDotsHorizontal } from 'react-icons/hi';
  import visibility from "../../../../assets/images/visibility.svg"
  import { StaffColumnValues } from 'component/Admin/Data/staticDatas';
  import { Pagination } from "../../common/CustomPagination";

export default function productManagement() {

    const staffHead = [
        {
          label: 'No'
        },
        {
          label: 'Customer ID'
        },
        {
          label: 'Customer Name'
        },
    
        {
          label: 'Location'
        },
        {
          label: 'Date'
        },
        {
          label: 'Total Spent'
        },
        {
          label: 'Action'
        },
      ];
  return (
    <div>
       <TableWrapper  headers={staffHead}>
      {StaffColumnValues?.map((data) => (
              <tr>
                <td>{data.No}</td>
                <td>{data.CustomerID}</td>
                <td>{data.CustomerName}</td>
                <td>{data.Location}</td>
                <td>{data.Date}</td>
                <td>{data.TotalSpent}</td>

                <td className="dropdown">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle tag="span" data-toggle="dropdown">
                      <div>
                        <HiDotsHorizontal color="#C5CAFF" size="25" />
                      </div>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                          <img src={visibility} alt="visible" color="#4285F4" size="25" />

                          <span className="dotactions">view</span>
                        </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </td>
              </tr>
            ))}
      </TableWrapper>
      <div className="StaffPagination">
            {staffHead.length > 0 && <Pagination totalPages={2} />}
          </div>
    </div>
  )
}
